import { useEffect, useState } from "react";
import { AlertTriangle, ArrowDown, ArrowRight, ChevronDown, ChevronRight, CircleHelp, Download, ExternalLink, Mail } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import SupportTabs from "@/components/SupportTabs";
import { assessmentRoutes } from "@/data/assessors";
import {
  BDA_PSYCHOLOGIST_FEE,
  BDA_PSYCHOLOGIST_YOU_PAY,
  BDA_RATE_DATE,
  BDA_SLC_CAP,
  BDA_TEACHER_FEE,
  BDA_TEACHER_YOU_PAY,
  JSP822_VOL7_URL,
  JSP822_VOL9_URL,
  SARAH_EMAIL,
  SARAH_INFO_PACK_URL,
  SARAH_MAILTO,
  SARAH_SERVICES_URL,
  SLC_COST_DATE,
  SLC_COST_OPTIONS,
  SLC_FULL_USUAL_PRICE,
  SLC_TEMPLATE_FORM,
} from "./slcContent";
import "./start-here.css";

const SHOW_WIP_BANNER = true;
const BDA_ANCHOR = "bda-heading";

const facts = [
  {
    title: "What it is",
    body: "Standard Learning Credits (SLC) and Enhanced Learning Credits (ELC) support your educational and vocational achievements in Service. They can be used to pay for a dyslexia assessment.",
  },
  { title: "What it covers", body: "Normally 80% of the fee, up to £175 a year." },
  { title: "The one rule", body: "SLC cannot be claimed retrospectively. Get it authorised before you book or pay anything." },
];

const more = [
  { title: "All guidance", description: "Every guide, filtered to you.", to: "/support/guidance" },
  { title: "Downloads and tools", description: "Forms, directories and guides.", to: "/support/downloads-and-tools" },
  { title: "FAQ", description: "Quick answers to common questions.", to: "/support/faq" },
  { title: "Insights", description: "The evidence behind this work.", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary ${linkFocus}`;
const inlineLink = `rounded-sm font-semibold underline underline-offset-4 hover:text-primary ${linkFocus}`;
const summaryClass = `flex min-h-11 cursor-pointer items-center gap-2 rounded-sm font-semibold underline underline-offset-4 hover:text-primary ${linkFocus}`;

function NewTab() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

export default function SlcPage() {
  const [bdaOpen, setBdaOpen] = useState(false);

  // Open the BDA expander when someone arrives at or follows the #bda-heading link.
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === `#${BDA_ANCHOR}`) setBdaOpen(true);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="support-staged-page support-route-serving text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Standard Learning Credits breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support">Get support</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/start-here">Start here</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/currently-serving">Serving now</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Standard Learning Credits</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/start-here" />

        <div className="support-identity-strip mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg border border-border bg-card px-4 py-2 sm:px-5">
          <p className="text-base leading-relaxed">You're viewing: <strong>Serving now</strong></p>
          <Link to="/support/start-here" className={textLink}>Not you? Switch</Link>
        </div>

        <header className="pb-10 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Using Standard Learning Credits for a dyslexia assessment</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Use Standard Learning Credits to pay towards a dyslexia assessment. The options, costs, forms and steps are here.</p>
        </header>

        <section aria-label="Standard Learning Credits at a glance" className="mb-12 grid gap-5 md:grid-cols-3">
          {facts.map(fact => (
            <article key={fact.title} className={`support-route-card ${panelClass} min-w-0 sm:p-6`}>
              <h2 className="mb-2 text-xl font-semibold leading-relaxed">{fact.title}</h2>
              <p className="text-base leading-relaxed">{fact.body}</p>
            </article>
          ))}
        </section>

        <section aria-labelledby="before-heading" className={`${panelClass} mb-12`}>
          <h2 id="before-heading" className="mb-3 text-2xl font-bold">Before you start</h2>
          <p className="mb-4 max-w-3xl text-base leading-relaxed">
            You must check your own SLC eligibility and remaining balance before applying, because SLC entitlement is
            limited each year and you may already have used some of it this financial year.
          </p>
          <p className="max-w-3xl text-base font-semibold leading-relaxed">
            It may be worth asking your SpLD Advisor or{" "}
            <Link to="/currently-serving/army-education-centres" className={inlineLink}>Army Education Centre</Link>{" "}
            whether an assessment can be funded.
          </p>
          <details className="mt-3 max-w-3xl text-base">
            <summary className={summaryClass}>
              <CircleHelp aria-hidden="true" className="size-4 shrink-0" />
              Why ask?
            </summary>
            <p className="mt-2 leading-relaxed">
              <a href={JSP822_VOL7_URL} target="_blank" rel="noopener noreferrer" className={inlineLink}>
                JSP 822 Vol 7 (PDF)<NewTab />
              </a>
              , paras 2.1.9 and 2.3.1, sets out who is responsible for funding specialist assessment. Whether it is funded depends on your circumstances, so ask your education staff.
            </p>
          </details>
        </section>

        <section aria-labelledby="cost-heading" className="mb-12">
          <h2 id="cost-heading" className="mb-3 text-2xl font-bold">Route 1: Through Sarah Hickinbotham (lower cost)</h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed">
            Sarah Hickinbotham is an independent Specialist Dyslexia Teacher Assessor who holds an Assessment Practising
            Certificate (APC). She offers dyslexia screening and full diagnostic assessment, with a discounted rate for
            bookings made through Dyslexia in Defence. The two screenings are online only. The full diagnostic assessment
            is online or face to face: discuss location and availability with Sarah direct.
          </p>
          <ul className="grid gap-5 md:grid-cols-3">
            {SLC_COST_OPTIONS.map(o => (
              <li key={o.name} className={`support-route-card ${panelClass} flex min-w-0 flex-col sm:p-6`}>
                <h3 className="mb-2 text-xl font-semibold leading-relaxed">{o.title}</h3>
                <p className="mb-4 text-base leading-relaxed">{o.detail}</p>
                <dl className="mb-4 space-y-2 text-base">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-border pb-2">
                    <dt>You pay</dt>
                    <dd className="text-2xl font-bold">{o.you}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-border pb-2">
                    <dt>SLC pays</dt>
                    <dd className="font-semibold">{o.slc}</dd>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <dt>Total</dt>
                    <dd className="font-semibold">{o.total}</dd>
                  </div>
                </dl>
                {o.note && (
                  <p className="mb-4 text-base leading-relaxed">
                    The usual price is {SLC_FULL_USUAL_PRICE}.{" "}
                    <a href={`#${BDA_ANCHOR}`} onClick={() => setBdaOpen(true)} className={`inline-flex min-h-11 items-center gap-1 ${inlineLink}`}>
                      {BDA_TEACHER_FEE} through the BDA.<ArrowDown aria-hidden="true" className="size-4" />
                    </a>
                  </p>
                )}
                <Button asChild variant="outline" className="mt-auto min-h-11 h-auto w-full whitespace-normal py-3 text-base font-semibold">
                  <a href={o.form.url} download={o.form.filename} aria-label={o.form.label}>
                    <Download aria-hidden="true" className="size-4 shrink-0" />
                    Download SLC form (Word)
                  </a>
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-relaxed">
            SLC normally covers 80% of the fee, up to a cap of £175 per year. For the two screenings, 80% of the fee is
            under the cap, so that is what SLC pays. For the full assessment, 80% would be well above the cap, so £175 is
            what applies. Prices are as published by the assessor as of {SLC_COST_DATE}. The full assessment price shown
            is a discounted rate for bookings made through Dyslexia in Defence; the usual price is {SLC_FULL_USUAL_PRICE}. Check
            with the assessor for current pricing before you apply.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed">
            Screening fees are deducted from the price of a full assessment that is booked and carried out within a month of the screening date.
            A screening is not a diagnosis.
          </p>
          <div role="note" className="mt-5 flex max-w-3xl gap-3 rounded-lg border border-border bg-card p-5">
            <AlertTriangle aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
            <p className="text-base leading-relaxed">
              Dyslexia in Defence receives no payment, commission, referral fee or any other financial benefit from
              listing this assessor. No money passes between this assessor and Dyslexia in Defence. The assessor is
              listed for information only.
            </p>
          </div>
        </section>

        <section aria-labelledby="steps-heading" className={`${panelClass} mb-12`}>
          <h2 id="steps-heading" className="mb-6 text-2xl font-bold">Step by step</h2>
          <ol className="max-w-3xl space-y-5">
            {[
              <>Choose your option from the cards above.</>,
              <>
                Email Sarah to arrange her free initial consultation (Teams or Zoom), check availability and agree dates,
                and ask for a written quote or invoice (see the button below).
              </>,
              <>
                Download the <strong>pre-populated</strong> SLC form for your option. It is already filled in with Sarah's
                details, the costs and the reason for study. You complete Part 1 (your details), Part 4 (your signature)
                and the red items in Parts 2 and 3.
              </>,
              <>Give the form to your line manager to complete Part 5.</>,
              <>
                Take it to your{" "}
                <Link to="/currently-serving/army-education-centres" className={inlineLink}>Army Education Centre</Link>{" "}
                for Ed Staff to complete Part 6. SLC funding cannot be claimed retrospectively, so get this authorised
                before you book or pay anything.
              </>,
              <>
                Once authorised, book with Sarah and pay her. Her information pack says the deposit is due within 48 hours
                of receiving the Booking Pack, a pre-assessment questionnaire is due within 7 days, and full payment is due
                7 days before the assessment, so plan for paying up front. Tell Sarah early if you are waiting for SLC authorisation.
              </>,
              <>
                After the assessment is completed, claim your SLC contribution back by submitting evidence that you
                completed it and paid for it, as instructed by your{" "}
                <Link to="/currently-serving/army-education-centres" className={inlineLink}>Army Education Centre</Link>. Ask them
                exactly what evidence they need before you book.
              </>,
            ].map((step, index) => (
              <li key={index} className="flex gap-4">
                <span aria-hidden="true" className="support-step-number flex size-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="min-w-0 pt-1.5 text-base leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-base leading-relaxed">
            The exact process can vary between units and may change over time. Check the form itself and speak to your
            chain of command or unit education staff if you are unsure.
          </p>
        </section>

        <section aria-labelledby="army-heading" className={`support-route-card ${panelClass} mb-12`}>
          <h2 id="army-heading" className="mb-3 text-2xl font-bold">If you serve in the Army</h2>
          <p className="mb-5 text-base leading-relaxed">Your local Army Education Centre can advise on learning credits.</p>
          <figure className="mb-6 max-w-3xl rounded-lg border border-border bg-card p-5 sm:p-6">
            <blockquote className="border-l-4 border-primary pl-4 text-lg font-semibold leading-relaxed">
              <p>Dyslexia is not a bar to joining the Army.</p>
            </blockquote>
            <figcaption className="mt-3 pl-5 text-base leading-relaxed">Sue Thain, Army lead for management of Specific Learning Differences</figcaption>
          </figure>
          <Button asChild className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base">
            <Link to="/currently-serving/army-education-centres">Find your Army Education Centre<ArrowRight aria-hidden="true" className="size-4" /></Link>
          </Button>
        </section>

        <section aria-labelledby="contact-sarah-heading" className={`${panelClass} mb-12`}>
          <h2 id="contact-sarah-heading" className="mb-3 flex items-center gap-2 text-2xl font-bold">
            <Mail aria-hidden="true" className="size-6 shrink-0 text-primary" />
            Contact Sarah
          </h2>
          <p className="mb-5 max-w-3xl text-base leading-relaxed">
            Sarah Hickinbotham, Specialist Dyslexia Teacher Assessor. Screenings are online only. The full assessment is
            online or face to face (discuss location and availability with Sarah direct).
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-3">
            <Button asChild className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base font-bold">
              <a href={SARAH_MAILTO}>
                <Mail aria-hidden="true" className="size-5" />
                Email Sarah
              </a>
            </Button>
            <span className="text-base [overflow-wrap:anywhere]">{SARAH_EMAIL}</span>
          </div>
          <ul className="space-y-1">
            <li>
              <a href={SARAH_INFO_PACK_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
                Read Sarah's assessment information pack<ExternalLink aria-hidden="true" className="size-4" /><NewTab />
              </a>
            </li>
            <li>
              <a href={SARAH_SERVICES_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
                Sarah's services page<ExternalLink aria-hidden="true" className="size-4" /><NewTab />
              </a>
            </li>
          </ul>
          <p className="mt-3 text-base leading-relaxed">Sarah offers a free initial consultation by Teams or Zoom before you book.</p>
        </section>

        <section aria-labelledby="another-way-heading" className="mb-12">
          <h2 id="another-way-heading" className="mb-4 text-2xl font-bold">Another way</h2>
          <details
            id={BDA_ANCHOR}
            open={bdaOpen}
            onToggle={event => setBdaOpen(event.currentTarget.open)}
            className="group scroll-mt-40 rounded-lg border border-border bg-card"
          >
            <summary className={`${summaryClass} px-5 py-3 text-lg sm:px-8`}>
              <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" />
              Alternative route: through the British Dyslexia Association (BDA)
            </summary>
            <div className="border-t border-border p-5 sm:p-8">
              <p className="mb-6 max-w-3xl text-base leading-relaxed">
                You can also get a dyslexia diagnostic assessment through the British Dyslexia Association. This is a
                separate route with its own prices and booking process. BDA self funded rates as of {BDA_RATE_DATE} are{" "}
                {BDA_TEACHER_FEE} for a specialist teacher assessment and {BDA_PSYCHOLOGIST_FEE} for a psychologist assessment (including VAT). SLC pays up
                to {BDA_SLC_CAP}, so you would pay {BDA_TEACHER_YOU_PAY} or {BDA_PSYCHOLOGIST_YOU_PAY}. Check the BDA website for current pricing before applying.
              </p>

              <div role="group" aria-labelledby="download-heading" className="mb-8 rounded-lg border border-border bg-background p-5 sm:p-6">
                <h3 id="download-heading" className="mb-3 text-xl font-semibold">Download the template</h3>
                <p className="mb-3 text-base leading-relaxed">Use this generic form if you choose the BDA route.</p>
                <p className="mb-3 text-base leading-relaxed">
                  This Word document is based on the official MOD Form 1950 (Annex A to{" "}
                  <a href={JSP822_VOL9_URL} target="_blank" rel="noopener noreferrer" className={inlineLink}>
                    JSP 822 Vol 9 (PDF)<NewTab />
                  </a>).
                </p>
                <p className="mb-3 text-base leading-relaxed">
                  The <strong>Reason for Study</strong> and <strong>What Benefit Will This Course Bring to Defence</strong> sections are
                  already written for you. You do not have to write a justification from scratch.
                </p>
                <p className="mb-3 text-base leading-relaxed">
                  Some parts are left blank on purpose. You, your line manager and Ed Staff complete these by hand:
                </p>
                <ul className="mb-5 list-disc space-y-1 pl-6 text-base leading-relaxed">
                  <li>your personal details</li>
                  <li>course and cost details</li>
                  <li>signatures</li>
                  <li>the line manager and Ed Staff sections</li>
                </ul>
                <Button asChild className="min-h-11 h-auto w-full max-w-full whitespace-normal py-3 text-base font-bold sm:w-auto">
                  <a href={SLC_TEMPLATE_FORM.url} download={SLC_TEMPLATE_FORM.filename}>
                    <Download aria-hidden="true" className="size-5 shrink-0" />
                    {SLC_TEMPLATE_FORM.label}
                  </a>
                </Button>
              </div>

              <ol className="mb-8 list-decimal space-y-2 pl-6 text-base leading-relaxed">
                <li>Download and complete the form.</li>
                <li>Get your line manager and Ed Staff to complete Parts 5 and 6 before you book.</li>
              </ol>

              <h3 id="assessors-heading" className="mb-3 text-xl font-semibold">BDA assessment routes</h3>
              <p className="mb-5 text-base leading-relaxed">These are the two BDA assessment routes:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {assessmentRoutes.map(r => (
                  <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className={`flex min-w-0 flex-col justify-between rounded-lg border border-border bg-background p-5 hover:border-primary ${linkFocus}`}>
                    <div>
                      <p className="mb-1 text-base text-muted-foreground">{r.provider}</p>
                      <p className="mb-3 text-base font-bold">{r.label}</p>
                      {r.description ? <p className="mb-3 text-base">{r.description}</p> : null}
                    </div>
                    <span className="inline-flex min-h-11 items-center gap-1 text-base font-semibold underline underline-offset-4">
                      Open link<ExternalLink aria-hidden="true" className="size-4" /><NewTab />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </details>
        </section>

        <div role="note" className="mb-12 flex gap-3 rounded-lg border border-border bg-card p-5">
          <AlertTriangle aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
          <p className="text-base leading-relaxed">
            Assessment routes are listed by Dyslexia in Defence. Being listed is not an endorsement by the Ministry of
            Defence or the Army. Please check that any assessment route meets the requirements of your unit and funding
            route before booking. MOD-funded assessments follow MOD requirements (
            <a href={JSP822_VOL7_URL} target="_blank" rel="noopener noreferrer" className={inlineLink}>
              JSP 822 Vol 7 (PDF)<NewTab />
            </a>, Annex B), so check with your SpLD Advisor before self-funding.
          </p>
        </div>

        <section aria-labelledby="more-support">
          <h2 id="more-support" className="mb-6 text-2xl font-bold">More in Get support</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {more.map(item => (
              <Link key={item.to} to={item.to} className={`${panelClass} ${linkFocus} flex min-w-0 flex-col p-4 sm:p-5 hover:border-primary`}>
                <h3 className="mb-2 text-lg font-semibold leading-relaxed">{item.title}</h3>
                <p className="text-base leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
