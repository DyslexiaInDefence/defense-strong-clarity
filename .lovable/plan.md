
# Brevo Integration Plan — Dyslexia in Defence

No live changes will be made until you approve this. The plan below answers your 21 questions and then lays out the recommended setup and step-by-step rollout.

---

## 1. Current state summary

- **Site:** React/Vite app on Lovable, custom domain `dyslexiaindefence.com` (DNS at Cloudflare).
- **Lovable login:** `symon3388@gmail.com`. Lovable Cloud is **not currently enabled** on this project (no Supabase backend, no edge functions, no secret store wired in yet).
- **Forms today:**
  - `JoinForm.tsx` → posts JSON straight to a Google Apps Script web app → Google Sheet. No Brevo.
  - `ContactForm.tsx` → only `console.info`s the data and shows a success state. **It does not actually send anything anywhere.**
  - There is no "Ask the Community", "Share Your Story", or "Sponsor/Partner" form yet.
- **Analytics:** Plausible script in `index.html`; Google Search Console verified.
- **Brevo:** Account created via SSO under `admin@dyslexiaindefence.com`. Not yet connected to Lovable.
- **Mailboxes:** No mailbox provider configured yet; `admin@` / `contact@` are aspirational.

## 2. Does the Lovable ↔ Brevo login mismatch matter?

**No, not technically.** Lovable connectors authenticate via an **API key**, not by matching login identities. Whoever is signed into Brevo generates a key and pastes it into Lovable's secure connector flow; from then on the connection runs as that key, regardless of which email created it.

What *does* matter:
- **Bus factor.** If the key is generated from a personal SSO session and that person loses access, the key still works but no one can rotate it. Mitigation: generate the API key from `admin@dyslexiaindefence.com` (organisation mailbox) and treat that as the "service" identity.
- **Billing.** Brevo billing follows the Brevo account, not Lovable. The Brevo account owner (`admin@…`) controls upgrades and invoices.
- **You do *not* need** to add `symon3388@gmail.com` to Brevo, or `admin@…` to Lovable, for the integration to work. Add them only if those humans need direct UI access.

## 3. Answers to your 21 questions (condensed)

1. **Brevo connector available?** Yes — `brevo` is listed as an enabled standard connector in this workspace.
2. **Native vs API?** Native connector via Lovable's **Connector Gateway**. No manual API key handling in code; gateway injects auth headers.
3. **Safe to connect SSO Brevo to this Lovable project?** Yes. Connection is per-project and uses an API key, not your SSO session.
4. **User additions required?** None required. Optional only if you want humans to log into each other's tools.
5. **Secret storage?** Yes — Brevo API key is stored as an encrypted secret (`BREVO_API_KEY`) and only available to **server-side edge functions**, never the browser.
6. **Lovable forms → Brevo contacts?** Yes, via an edge function calling `POST /contacts`.
7. **Add contacts to specific lists?** Yes — `listIds: [n]` on contact create/update.
8. **Attributes/tags/lists for all the categories you listed?** Yes. Brevo supports contact **attributes** (typed fields), **lists** (mail audiences), and free-form tagging via attributes. Mapping in §4.
9. **Automated confirmation emails for Join / Contact / Ask / Share Story / Sponsor?** Yes — Brevo **Transactional Email API** or **Automations** triggered on list add or event.
10. **Admin notifications to contact@ / admin@?** Yes, as a second transactional send. Recommend a dedicated `inbox@` or `admin@` so replies route to a real mailbox.
11. **Unsubscribe & consent management?** Yes — built-in unsubscribe links (legally compliant), double opt-in flows, consent timestamps, GDPR data-export/delete tools.
12. **Statistics (sends/opens/clicks/bounces/unsubs/list growth/campaign perf)?** Yes — all standard in Brevo dashboard.
13. **CRM-style views per cohort?** Yes — Brevo's lightweight CRM + filters on lists/attributes. Good enough for your scale; not Salesforce.
14. **Reply/conversation management?** Brevo has **Conversations** (inbox/chat) but it's primarily for website chat + shared inbox add-on. For real email replies you still need a **real mailbox** behind the sending address.
15. **Can Brevo replace a day-to-day inbox?** **No.** Brevo sends and tracks; it does not host IMAP/SMTP mailboxes. You need Google Workspace / Microsoft 365 / Zoho Mail for human email.
16. **If Google Workspace handles inboxes, how does Brevo fit?** Google Workspace owns `admin@` / `contact@` (humans read & reply). Brevo sends from a **different subdomain** so the two systems don't fight over SPF/DKIM (see §7).
17. **Which sending address?** Use a **role address on a sending subdomain** for automated mail, e.g. `notify@notify.dyslexiaindefence.com` (machine) with **Reply-To: `contact@dyslexiaindefence.com`** (human). Keep `admin@` / `contact@` as human inboxes only.
18. **Subdomain better?** **Yes — strongly recommended.** Use `notify.dyslexiaindefence.com` (or `mail.`). Protects the root-domain reputation, isolates DNS, and avoids SPF conflicts with Google Workspace.
19. **DNS records needed in Cloudflare:**
    - **SPF** (TXT on `notify`): `v=spf1 include:spf.brevo.com -all`
    - **DKIM** (TXT, Brevo-issued selector, e.g. `mail._domainkey.notify`)
    - **Brevo domain verification** (TXT `brevo-code:...`)
    - **DMARC** (TXT on `_dmarc.dyslexiaindefence.com`): start `v=DMARC1; p=none; rua=mailto:admin@dyslexiaindefence.com; pct=100`, tighten to `quarantine` then `reject` after 2–4 weeks of clean reports.
    - **Optional Return-Path/MX** on the subdomain if you want full Brevo bounce handling (`bounces.brevo.com` style).
    - Keep all Cloudflare records as **DNS-only (grey cloud)** — never proxied.
20. **Avoiding duplicate SPF:** SPF must be **one record per host**. Because Brevo lives on `notify.` and Google Workspace lives on the root, they don't collide. If you ever add another sender to the **root** domain, merge into a single SPF: `v=spf1 include:_spf.google.com include:spf.brevo.com -all`.
21. **Option A vs B vs C:**

| Criterion | A: Lovable form → Brevo API | B: Embedded Brevo form | C: Lovable form + minimal store + Brevo |
|---|---|---|---|
| Setup complexity | Medium (edge function) | Low (paste iframe) | Highest (Cloud + DB + Brevo) |
| Cost | Free tier viable | Free | + Cloud usage |
| Security | Strong (server-side key) | Brevo-hosted | Strong |
| Data protection | Best — you control the payload | Data goes straight to Brevo | Same as A + duplicate copy |
| Design consistency | Full (your components) | Poor (Brevo styling, iframe) | Full |
| Accessibility / dyslexia-friendly | Full (Lexend, your tokens) | Limited; iframe breaks a11y controls | Full |
| Consent capture | Full control | Brevo's checkbox | Full |
| Automation | Yes (Brevo automations triggered by list add) | Yes | Yes |
| Newsletter mgmt | Yes | Yes | Yes |
| Reporting | Yes | Yes | Yes |
| Avoids over-sharing | Yes (you choose fields) | No — full form payload to Brevo | Yes |

**Recommendation: Option A** — Lovable-native forms posting to an edge function that calls Brevo. Best fit for your accessibility, design, and data-minimisation principles. (Use B only as a quick fallback for a standalone newsletter widget if needed later.)

---

## 4. Recommended Brevo list / attribute / tag structure

**Lists** (audiences — what they get):
- `L1 — Network Members`
- `L2 — Newsletter Subscribers`
- `L3 — Support Enquiries` (transactional only, no marketing)
- `L4 — Lived Experience Interest`
- `L5 — Sponsor / Partner Interest`

**Contact attributes** (who they are — typed fields):
- `FIRSTNAME` / `LASTNAME` (built-in)
- `CONNECTION` (category): `Serving Military | Civil Service | Veteran | Reservist | Defence Industry | Family Member | Pre-joining | Manager/Instructor | Other | Prefer not to say`
- `INTERESTS` (multi-value text): peer networking, resources, events, volunteering, research, partnering
- `CONSENT_MARKETING` (bool) + `CONSENT_TIMESTAMP` (date)
- `SOURCE_FORM` (text): join | contact | ask | story | sponsor
- `STORY_INTEREST_ONLY` (bool) — flag that *no* sensitive story content is stored in Brevo

**No sensitive content** (story text, support needs, workplace details, medical info) goes into Brevo attributes. Those stay either off-site or in Lovable Cloud with stronger controls (see §8).

---

## 5. Recommended form → Brevo workflow

```
[User submits Lovable form]
        |
        v
[Edge Function: forms-to-brevo]
   1. Zod validation
   2. Honeypot + rate limit
   3. Map fields -> Brevo attributes/lists
   4. POST /contacts (createOrUpdate)
   5. POST /smtp/email  -> user confirmation (templated)
   6. POST /smtp/email  -> admin notification (subject + minimal metadata, NOT full message body for sensitive forms)
        |
        v
[Brevo Automation (optional): welcome series on list add]
```

Per form:
- **Join the Network** → `L1`, attributes set, confirmation + welcome.
- **Contact** → `L3` (transactional), confirmation to user, notification to `contact@`.
- **Ask the Community** → `L3`, confirmation, notification (subject only — body link to Lovable-stored record).
- **Share Your Story** → `L4`, confirmation. **Story text NOT sent to Brevo** — stored in Lovable Cloud (or emailed encrypted to a vetted address). Brevo only learns "interest registered".
- **Sponsor / Partner** → `L5`, confirmation + admin notification.

## 6. Recommended email sending setup

- Sending identity: **`notify@notify.dyslexiaindefence.com`**
- Reply-To: **`contact@dyslexiaindefence.com`** (human inbox)
- Friendly From: `Dyslexia in Defence`
- Brevo templates for: user confirmations (per form), welcome (network), newsletter master template, admin notification (internal).
- Newsletters sent from same address; campaigns tagged by list.

## 7. Recommended DNS setup (Cloudflare)

On host `notify.dyslexiaindefence.com`:
- `TXT  notify  "v=spf1 include:spf.brevo.com -all"`
- `TXT  mail._domainkey.notify  "<Brevo-provided DKIM>"`
- `TXT  notify  "brevo-code:<verification token>"`

On root:
- `TXT  _dmarc  "v=DMARC1; p=none; rua=mailto:admin@dyslexiaindefence.com; fo=1; pct=100"` (tighten later)
- Leave root SPF alone unless/until Google Workspace is added; if added, **merge** both senders into the root SPF.
- All records **grey-cloud (DNS only)**.

## 8. Data protection considerations

- **Minimise** what reaches Brevo: name, email, connection, interests, consent — nothing else.
- Sensitive narratives (lived experience, support detail) **must not** be sent in plain admin emails or stored in Brevo. Options: (a) Lovable Cloud table with RLS + admin-only access, (b) send to a vetted secured mailbox via TLS, (c) link to a record rather than embed content.
- Consent: explicit checkboxes with clear wording, store text version + timestamp + IP hash in Brevo attribute.
- Unsubscribe link in every marketing send (Brevo handles automatically); honour SAR/erasure via Brevo GDPR tools.
- DPIA-style note kept in Governance/Transparency page when this goes live.

## 9. Risks

- **Single API key bus factor** → generate from `admin@`, document rotation.
- **Domain reputation** if first sends are too broad → start with confirmations only, warm up before any campaign.
- **Conversations confusion** — Brevo is not a mailbox; ensure `contact@` exists with a real provider before publishing the Reply-To.
- **Form abuse** — needs honeypot + rate limiting in the edge function.
- **Vendor lock-in** — keep an export of contacts; Brevo supports CSV export.
- **Sensitive data leakage** if admin notifications include full form body — solved by template discipline (§5).

## 10. Step-by-step implementation plan

**Phase 0 — Prerequisites (you do these in the dashboards)**
1. Decide and provision the human mailbox provider for `admin@` / `contact@` (Google Workspace recommended; can be added later but Reply-To won't work until then).
2. Confirm you want to use `notify.dyslexiaindefence.com` as the sending subdomain.

**Phase 1 — Enable backend (Lovable)**
3. Enable Lovable Cloud on the project (required to host the edge function + secret store).
4. Link the Brevo connector via the Lovable Brevo connection flow (uses the SSO-created Brevo account; generates and stores `BREVO_API_KEY` securely).

**Phase 2 — Brevo configuration (in Brevo UI)**
5. Add and verify sending domain `notify.dyslexiaindefence.com`; copy DNS records.
6. Create lists L1–L5 and attributes per §4.
7. Create transactional email templates (per form + welcome + admin notification).
8. Optional: create an Automation for "added to L1 → welcome series".

**Phase 3 — Cloudflare DNS**
9. Add SPF, DKIM, Brevo verification, DMARC records per §7 (DNS-only).
10. Wait for Brevo to show domain as authenticated.

**Phase 4 — Forms wiring (Lovable)**
11. Build edge function `forms-to-brevo` (Zod-validated, honeypot, rate-limited, server-side `BREVO_API_KEY` only).
12. Refactor `ContactForm.tsx` to call the edge function (currently it does nothing).
13. Refactor `JoinForm.tsx` to call the edge function **instead of** the Google Apps Script (or in parallel during transition — decision needed, see §12).
14. Add new forms (Ask the Community, Share Your Story, Sponsor/Partner) using the same edge function with different `formType`.
15. Add consent copy + privacy link to every form; update Privacy page wording.

**Phase 5 — Verification**
16. Send test confirmations to a controlled address; check Brevo logs, opens, unsubscribe link.
17. Send a tiny test campaign to an internal-only list; confirm DMARC reports look clean.
18. Update Transparency / Privacy pages with Brevo as a processor.

**Phase 6 — Go live**
19. Monitor first 2–4 weeks; then tighten DMARC to `quarantine`, later `reject`.

## 11. Rollback plan

- **Forms:** keep the current Google Apps Script endpoint live during transition; feature-flag the edge function call. To roll back, flip the flag — no DNS or Brevo changes needed.
- **DNS:** all new records live on the `notify.` subdomain and `_dmarc`. Removing them does not affect the root site or any future Google Workspace mail on the root.
- **Connector:** disconnect Brevo in Lovable; key is revoked from gateway; no code changes required because all Brevo calls live in one edge function which simply errors out (caught and surfaced as "form temporarily unavailable").
- **Lovable Cloud:** can stay enabled; nothing destructive.

## 12. Decisions needed from you before implementation

1. **Mailbox provider** for `admin@` / `contact@` — Google Workspace, Microsoft 365, Zoho Mail, or defer? (Affects whether Reply-To works at launch.)
2. **Sending subdomain** — confirm `notify.dyslexiaindefence.com` (vs `mail.`).
3. **Friendly From name** — "Dyslexia in Defence" or "Dyslexia in Defence CIC"?
4. **Google Sheets join form** — retire it, or dual-write (Sheets + Brevo) during transition?
5. **Share Your Story storage** — Lovable Cloud table (recommended) or encrypted email to a vetted address?
6. **New forms to build now vs later** — Ask the Community / Sponsor / Story: build all in this phase, or stage them?
7. **Lovable Cloud enablement** — OK to enable now? (Required for the edge function and any Story storage.)
8. **Double opt-in** for newsletter — on (safer, slower growth) or off (faster, simpler)?

Once you confirm these, I'll execute the plan in the order above with no surprises.
