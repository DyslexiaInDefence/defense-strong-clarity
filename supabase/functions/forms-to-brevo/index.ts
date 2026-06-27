// Forms-to-Brevo edge function
// Receives form submissions from the Lovable site, validates them,
// creates/updates the contact in Brevo, and best-effort sends a
// confirmation email to the user and a notification email to admin.
//
// All Brevo API calls are routed through the Lovable Connector Gateway
// so the BREVO_API_KEY is never exposed to the browser.
//
// Form types supported: "contact" | "join" | "ask"
// Sensitive content (free-form messages) is NOT stored on the contact
// record in Brevo — only contact + consent metadata is stored.

import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/brevo";
const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const SENDER_EMAIL = Deno.env.get("BREVO_SENDER_EMAIL") ?? "notify@notify.dyslexiaindefence.com";
const SENDER_NAME = Deno.env.get("BREVO_SENDER_NAME") ?? "Dyslexia in Defence";
const ADMIN_EMAIL = Deno.env.get("BREVO_ADMIN_EMAIL") ?? "contact@dyslexiaindefence.com";
const REPLY_TO = Deno.env.get("BREVO_REPLY_TO") ?? ADMIN_EMAIL;

// Optional list IDs — set as secrets after lists are created in Brevo UI.
const LIST_NETWORK = numEnv("BREVO_LIST_NETWORK");
const LIST_SUPPORT = numEnv("BREVO_LIST_SUPPORT");
const LIST_NEWSLETTER = numEnv("BREVO_LIST_NEWSLETTER");

function numEnv(name: string): number | undefined {
  const v = Deno.env.get(name);
  if (!v) return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

type FormType = "contact" | "join" | "ask";

interface Payload {
  formType: FormType;
  name: string;
  email: string;
  connection?: string;
  interests?: string[];
  subject?: string;
  message?: string;
  consent: boolean;
  newsletterConsent?: boolean;
  sourcePage?: string;
  dyslexiaRelationship?: string;
  // honeypot — must be empty
  website?: string;
}

function bad(status: number, message: string) {
  return new Response(JSON.stringify({ ok: false, error: message }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function validate(body: unknown): { ok: true; data: Payload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid body" };
  const b = body as Record<string, unknown>;

  const formType = String(b.formType ?? "");
  if (!["contact", "join", "ask"].includes(formType)) return { ok: false, error: "Invalid formType" };

  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim().toLowerCase();
  const consent = b.consent === true;

  if (name.length < 1 || name.length > 100) return { ok: false, error: "Invalid name" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
    return { ok: false, error: "Invalid email" };
  }
  if (!consent) return { ok: false, error: "Consent is required" };

  const connection = b.connection ? String(b.connection).slice(0, 100) : undefined;
  const interests = Array.isArray(b.interests)
    ? (b.interests as unknown[]).map((i) => String(i).slice(0, 100)).slice(0, 20)
    : undefined;
  const subject = b.subject ? String(b.subject).slice(0, 200) : undefined;
  const message = b.message ? String(b.message).slice(0, 5000) : undefined;
  const website = b.website ? String(b.website) : "";
  const newsletterConsent = b.newsletterConsent === true;
  const sourcePage = b.sourcePage ? String(b.sourcePage).slice(0, 200) : undefined;
  const dyslexiaRelationship = b.dyslexiaRelationship
    ? String(b.dyslexiaRelationship).slice(0, 100)
    : undefined;

  return {
    ok: true,
    data: {
      formType: formType as FormType,
      name,
      email,
      connection,
      interests,
      subject,
      message,
      consent,
      newsletterConsent,
      sourcePage,
      dyslexiaRelationship,
      website,
    },
  };
}

async function brevo(path: string, init: RequestInit) {
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${LOVABLE_API_KEY}`);
  headers.set("X-Connection-Api-Key", BREVO_API_KEY!);
  if (!headers.has("Content-Type") && init.body) headers.set("Content-Type", "application/json");
  return fetch(`${GATEWAY_URL}${path}`, { ...init, headers });
}

async function upsertContact(p: Payload) {
  const [first, ...rest] = p.name.split(/\s+/);
  const last = rest.join(" ");

  const listIds: number[] = [];
  if (p.formType === "join" && LIST_NETWORK) listIds.push(LIST_NETWORK);
  if ((p.formType === "contact" || p.formType === "ask") && LIST_SUPPORT) listIds.push(LIST_SUPPORT);
  if (p.newsletterConsent && LIST_NEWSLETTER) listIds.push(LIST_NEWSLETTER);

  const enquiryType =
    p.formType === "join"
      ? "Join the Network"
      : p.formType === "ask"
        ? "Ask the Community"
        : p.subject ?? "Contact";

  const attributes: Record<string, unknown> = {
    FIRSTNAME: first ?? "",
    LASTNAME: last,
    FULLNAME: p.name,
    ROLE_GROUP: p.connection ?? "",
    ENQUIRY_TYPE: enquiryType,
    SOURCE_FORM: p.formType,
    SOURCE_PAGE: p.sourcePage ?? "",
    CONSENT_CONTACT: p.consent,
    CONSENT_NEWSLETTER: p.newsletterConsent === true,
    DYSLEXIA_RELATIONSHIP: p.dyslexiaRelationship ?? "",
    AREAS_OF_INTEREST: (p.interests ?? []).join(", "),
    DATE_JOINED: new Date().toISOString().slice(0, 10),
  };

  // Create or update — use updateEnabled to upsert.
  const res = await brevo("/contacts", {
    method: "POST",
    body: JSON.stringify({
      email: p.email,
      attributes,
      listIds: listIds.length ? listIds : undefined,
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const txt = await res.text();
    // 400 with "Contact already exist" can happen on some plans — treat as ok if updateEnabled
    console.warn("brevo contacts upsert non-ok", res.status, txt);
  }
}

async function sendEmail(params: {
  to: string;
  toName?: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: string;
}) {
  const body: Record<string, unknown> = {
    sender: { email: SENDER_EMAIL, name: SENDER_NAME },
    to: [{ email: params.to, name: params.toName }],
    replyTo: { email: params.replyTo ?? REPLY_TO, name: SENDER_NAME },
    subject: params.subject,
    htmlContent: params.htmlContent,
  };
  if (params.textContent) body.textContent = params.textContent;
  const res = await brevo("/smtp/email", { method: "POST", body: JSON.stringify(body) });
  if (!res.ok) {
    const txt = await res.text();
    console.warn("brevo smtp/email non-ok", res.status, txt);
    return false;
  }
  return true;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
  );
}

function userConfirmationHtml(p: Payload): { subject: string; html: string; text: string } {
  const firstNameRaw = (p.name ?? "").split(/\s+/)[0]?.trim() ?? "";
  const greeting = firstNameRaw ? `Hi ${escapeHtml(firstNameRaw)},` : "Hi,";
  const greetingText = firstNameRaw ? `Hi ${firstNameRaw},` : "Hi,";

  // Join form gets the branded welcome template.
  if (p.formType === "join") {
    return joinWelcomeEmail(p, greeting, greetingText);
  }

  // Fallback for contact / ask — unchanged minimal confirmation.
  const fallbackName = firstNameRaw ? escapeHtml(firstNameRaw) : "there";
  let intro = "";
  let subject = "We've received your message — Dyslexia in Defence";
  if (p.formType === "contact") {
    intro = `Thanks for contacting Dyslexia in Defence. We aim to reply within five working days.`;
  } else {
    subject = "Your question has been received — Dyslexia in Defence";
    intro = `Thank you for reaching out. A member of the community will respond as soon as we can.`;
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="color: #0f3460;">Hi ${fallbackName},</h2>
      <p>${escapeHtml(intro)}</p>
      <p>You can reply to this email and it will reach a real person at <a href="mailto:${REPLY_TO}">${REPLY_TO}</a>.</p>
      <p style="margin-top: 24px;">Warm regards,<br/>Dyslexia in Defence CIC</p>
      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
      <p style="font-size:12px;color:#666;">An independent, peer-led community interest company. Not affiliated with the Ministry of Defence.</p>
    </div>`;
  const text = `${greetingText}\n\n${intro}\n\nYou can reply to this email and it will reach a real person at ${REPLY_TO}.\n\nWarm regards,\nDyslexia in Defence CIC\n\nAn independent, peer-led community interest company. Not affiliated with the Ministry of Defence.`;
  return { subject, html, text };
}

function joinWelcomeEmail(
  p: Payload,
  greeting: string,
  greetingText: string,
): { subject: string; html: string; text: string } {
  const subject = "Welcome to the Dyslexia in Defence network";
  const preview = "Thank you for registering your interest. We're glad you're here.";
  const logoUrl = "https://dyslexiaindefence.com/images/did-logo-full.webp";
  const siteUrl = "https://dyslexiaindefence.com";

  // Brand palette (derived from website CSS tokens)
  const PRIMARY = "#156BC1"; // --primary
  const BG = "#F0F7FD"; // --background (light blue base)
  const CARD = "#FFFFFF";
  const TEXT = "#20303F"; // --foreground
  const MUTED = "#5B6B7A";
  const BORDER = "#D5E2EE";

  const newsletterBlockHtml = p.newsletterConsent
    ? `
      <p style="margin:0 0 12px 0;font-size:16px;line-height:1.6;color:${TEXT};">Regarding the information in our newsletters:</p>
      <ul style="margin:0 0 20px 20px;padding:0;font-size:16px;line-height:1.6;color:${TEXT};">
        <li style="margin-bottom:8px;">We'll keep you updated as the network develops.</li>
        <li style="margin-bottom:8px;">We'll share useful resources, lived experiences and opportunities to get involved.</li>
        <li style="margin-bottom:8px;">If you asked for support or want to share something specific, you can reply to this email.</li>
      </ul>`
    : `
      <p style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:${TEXT};">We have recorded your interest in joining the network. If you want to share something, ask a question, or get in touch, you can reply directly to this email.</p>`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="light only" />
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BG};font-family:Arial,Helvetica,sans-serif;color:${TEXT};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG};">
  <tr>
    <td align="center" style="padding:24px 12px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:${CARD};border:1px solid ${BORDER};border-radius:12px;">
        <tr>
          <td align="center" style="padding:28px 24px 8px 24px;">
            <img src="${logoUrl}" alt="Dyslexia in Defence" width="180" style="display:block;width:180px;max-width:60%;height:auto;border:0;outline:none;text-decoration:none;" />
          </td>
        </tr>
        <tr>
          <td style="padding:8px 28px 0 28px;">
            <h1 style="margin:16px 0 16px 0;font-size:24px;line-height:1.3;color:${PRIMARY};font-weight:700;">Welcome to Dyslexia in Defence</h1>
            <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:${TEXT};">${greeting}</p>
            <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:${TEXT};">Thank you for registering your interest.</p>
            <p style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:${TEXT};">We are building a real force for change to empower dyslexic talent before, during and after service.</p>
            ${newsletterBlockHtml}
            <p style="margin:0 0 8px 0;font-size:16px;line-height:1.6;color:${TEXT};">You can reply directly to this email and it will reach a real person at:</p>
            <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;"><a href="mailto:${REPLY_TO}" style="color:${PRIMARY};text-decoration:underline;">${REPLY_TO}</a></p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:0 28px 32px 28px;">
            <a href="${siteUrl}" style="display:inline-block;background:${PRIMARY};color:#ffffff;text-decoration:none;font-weight:600;font-size:16px;padding:14px 28px;border-radius:8px;mso-padding-alt:0;">Visit Dyslexia in Defence</a>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px 28px;border-top:1px solid ${BORDER};">
            <p style="margin:20px 0 6px 0;font-size:14px;line-height:1.5;color:${TEXT};font-weight:600;">Dyslexia in Defence CIC</p>
            <p style="margin:0 0 12px 0;font-size:14px;line-height:1.5;color:${MUTED};">A Community Interest Company for serving personnel, veterans, civil servants, families and industry.</p>
            <p style="margin:0 0 12px 0;font-size:14px;line-height:1.5;color:${MUTED};">This is an independent community initiative and is not an official MOD service.</p>
            <p style="margin:0;font-size:13px;line-height:1.5;color:${MUTED};">You are receiving this email because you registered interest in the Dyslexia in Defence network.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

  const newsletterBlockText = p.newsletterConsent
    ? `Regarding the information in our newsletters:\n- We'll keep you updated as the network develops.\n- We'll share useful resources, lived experiences and opportunities to get involved.\n- If you asked for support or want to share something specific, you can reply to this email.\n\n`
    : `We have recorded your interest in joining the network. If you want to share something, ask a question, or get in touch, you can reply directly to this email.\n\n`;

  const text =
    `Welcome to Dyslexia in Defence\n\n` +
    `${greetingText}\n\n` +
    `Thank you for registering your interest.\n\n` +
    `We are building a real force for change to empower dyslexic talent before, during and after service.\n\n` +
    newsletterBlockText +
    `You can reply directly to this email and it will reach a real person at:\n${REPLY_TO}\n\n` +
    `Visit Dyslexia in Defence: ${siteUrl}\n\n` +
    `--\n` +
    `Dyslexia in Defence CIC\n` +
    `A Community Interest Company for serving personnel, veterans, civil servants, families and industry.\n\n` +
    `This is an independent community initiative and is not an official MOD service.\n\n` +
    `You are receiving this email because you registered interest in the Dyslexia in Defence network.\n`;

  return { subject, html, text };
}

function adminNotificationHtml(p: Payload): { subject: string; html: string } {
  const subject = `[${p.formType.toUpperCase()}] New submission from ${p.name}`;
  // Deliberately minimal — sensitive message bodies are included only for
  // contact/ask forms where the user explicitly entered text they want us to read.
  const rows: Array<[string, string]> = [
    ["Form", p.formType],
    ["Name", p.name],
    ["Email", p.email],
  ];
  if (p.connection) rows.push(["Connection", p.connection]);
  if (p.interests?.length) rows.push(["Interests", p.interests.join(", ")]);
  if (p.subject) rows.push(["Subject", p.subject]);

  const table = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#555;">${escapeHtml(k)}</td><td style="padding:4px 0;">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const messageBlock = p.message
    ? `<h3 style="margin-top:24px;">Message</h3><div style="white-space:pre-wrap;border:1px solid #eee;padding:12px;border-radius:6px;">${escapeHtml(p.message)}</div>`
    : "";

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1a1a1a;">
      <h2>New ${escapeHtml(p.formType)} submission</h2>
      <table style="border-collapse:collapse;">${table}</table>
      ${messageBlock}
      <p style="margin-top:24px;font-size:12px;color:#666;">Received ${new Date().toISOString()}</p>
    </div>`;
  return { subject, html };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return bad(405, "Method not allowed");

  if (!LOVABLE_API_KEY || !BREVO_API_KEY) {
    return bad(500, "Email service not configured");
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return bad(400, "Invalid JSON");
  }

  const result = validate(json);
  if (!result.ok) return bad(400, result.error);
  const p = result.data;

  // Honeypot — silently accept and drop.
  if (p.website && p.website.trim().length > 0) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    await upsertContact(p);
  } catch (e) {
    console.error("upsertContact failed", e);
  }

  // Best-effort emails — failure here must not block the form success state.
  const userMail = userConfirmationHtml(p);
  const adminMail = adminNotificationHtml(p);
  const results = await Promise.allSettled([
    sendEmail({ to: p.email, toName: p.name, subject: userMail.subject, htmlContent: userMail.html, textContent: userMail.text }),
    sendEmail({ to: ADMIN_EMAIL, subject: adminMail.subject, htmlContent: adminMail.html, replyTo: p.email }),
  ]);
  const emailsSent = results.every((r) => r.status === "fulfilled" && r.value === true);

  return new Response(JSON.stringify({ ok: true, emailsSent }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});