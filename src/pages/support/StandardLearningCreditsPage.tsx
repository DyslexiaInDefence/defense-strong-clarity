import { Link } from "@/lib/router-compat";
import { AlertTriangle, ArrowRight, Download, ExternalLink, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import slcTemplate from "@/assets/slc-template.docx.asset.json";
import slcLevel1 from "@/assets/slc-level1.docx.asset.json";
import slcLevel2 from "@/assets/slc-level2.docx.asset.json";
import slcFull from "@/assets/slc-full.docx.asset.json";
import { assessmentRoutes } from "@/data/assessors";

const SLC_COST_DATE = "26 October 2026";
// Each option carries its own application form so the table row and its download button stay in sync.
const SLC_COST_OPTIONS = [
  {
    name: "Option 1: Level 1 screening",
    detail: "A brief online check and short report. Not a diagnosis. Roughly 1 hour.",
    total: "£50",
    slc: "£40",
    you: "£10",
    form: { url: slcLevel1.url, filename: "SLC_Application_Sarah_Hickinbotham_Level1_Screening_V1.docx", label: "Download the Level 1 screening form (Word)" },
  },
  {
    name: "Option 2: Level 2 screening",
    detail: "A more detailed online check and short report. Not a diagnosis. Roughly half a day.",
    total: "£150",
    slc: "£120",
    you: "£30",
    form: { url: slcLevel2.url, filename: "SLC_Application_Sarah_Hickinbotham_Level2_Screening_V1.docx", label: "Download the Level 2 screening form (Word)" },
  },
  {
    name: "Option 3: Full diagnostic assessment",
    detail: "A full online diagnostic assessment and a detailed 30+ page report. Armed Forces rate. Roughly 1 to 2 days.",
    total: "£495",
    slc: "£175",
    you: "£320",
    form: { url: slcFull.url, filename: "SLC_Application_Sarah_Hickinbotham_Full_Diagnostic_Assessment_V1.docx", label: "Download the full diagnostic assessment form (Word)" },
  },
];

const SARAH_EMAIL = "hello@adultdyslexiaservices.co.uk";
const SARAH_SUBJECT = "Enquiry via Dyslexia in Defence: Standard Learning Credits assessment";
const SARAH_BODY = [
  "Hello Sarah,",
  "",
  "I found you through the Dyslexia in Defence website. I am interested in the following option (delete as appropriate): Level 1 screening / Level 2 screening / Full diagnostic assessment, at the Armed Forces rate.",
  "",
  "Could you please let me know:",
  "- your availability and possible dates",
  "- the cost, including whether VAT is included",
  "- a written quote or invoice that I can attach to my Standard Learning Credits application",
  "- how payment works, and what evidence you can give me once the assessment is complete, as I will be claiming my SLC contribution back",
  "",
  "Thank you,",
  "[Your name]",
].join("\r\n");
const SARAH_MAILTO = `mailto:${SARAH_EMAIL}?subject=${encodeURIComponent(SARAH_SUBJECT)}&body=${encodeURIComponent(SARAH_BODY)}`;

const linkClass = "inline-flex items-center gap-1 text-base font-semibold text-primary underline-offset-4 hover:underline";

const StandardLearningCreditsPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Using Standard Learning Credits for a dyslexia assessment
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          The Standard Learning Credits (SLC) or Enhanced Learning Credits (ELC) Scheme provides financial support throughout your career to enhance your
          educational and vocational achievements in Service. SLCs can be used to obtain a dyslexia assessment.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          Before using SLC, ask your SpLD Advisor or Army Education Centre whether your Service can fund the assessment.
          JSP 822 Vol 7 (paras 2.1.9 and 2.3.1) requires Services to fund specialist assessment where required.
        </p>

        <section aria-labelledby="cost-heading" className="mb-12">
          <h2 id="cost-heading" className="mb-4 text-2xl font-bold text-foreground">
            Route 1: Through Sarah Hickinbotham (lower cost)
          </h2>
          <p className="mb-6 text-base text-muted-foreground">
            Sarah Hickinbotham is an independent Specialist Dyslexia Teacher Assessor who holds an Assessment Practising
            Certificate (APC). She offers dyslexia screening and full diagnostic assessment, all delivered online, with an
            Armed Forces rate.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[44rem] text-left text-base">
              <caption className="sr-only">
                Comparison of assessment options, total costs, what Standard Learning Credits pay, what you pay and the
                application form for each option
              </caption>
              <thead className="bg-muted">
                <tr className="text-sm font-bold text-foreground">
                  <th scope="col" className="px-4 py-3">Assessment option</th>
                  <th scope="col" className="px-4 py-3">Total cost</th>
                  <th scope="col" className="px-4 py-3">SLC pays</th>
                  <th scope="col" className="px-4 py-3">You pay if self-funding with SLC alone</th>
                  <th scope="col" className="px-4 py-3">Application form</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {SLC_COST_OPTIONS.map((o) => (
                  <tr key={o.name} className="border-t border-border bg-card">
                    <th scope="row" className="px-4 py-3 font-semibold text-foreground">
                      <span className="block">{o.name}</span>
                      <span className="mt-1 block text-sm font-normal text-muted-foreground">{o.detail}</span>
                    </th>
                    <td className="px-4 py-3">{o.total}</td>
                    <td className="px-4 py-3">{o.slc}</td>
                    <td className="px-4 py-3">{o.you}</td>
                    <td className="px-4 py-3">
                      <Button asChild size="sm" variant="outline" className="min-h-11 whitespace-nowrap rounded-full font-semibold">
                        <a href={o.form.url} download={o.form.filename} aria-label={o.form.label}>
                          <Download className="mr-1 h-4 w-4" aria-hidden="true" />
                          Download form (Word)
                        </a>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* NOTE FOR FUTURE UPDATES: the table figures come from Sarah Hickinbotham's published information pack
              (as of SLC_COST_DATE). Each SLC_COST_OPTIONS entry also holds its own application form asset, so replace
              the form there when a new version is issued. Update SLC_COST_DATE, SLC_COST_OPTIONS and the paragraphs and
              savings note below together when the assessor publishes new pricing. The BDA comparison and the BDA route
              section use the BDA self funded rate as of 28 September 2026 and must be updated separately if BDA
              pricing changes. */}
          <div role="note" className="mt-4 flex gap-3 rounded-xl border border-border bg-muted p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm text-foreground">
              Dyslexia in Defence receives no payment, commission, referral fee or any other financial benefit from
              listing this assessor. No money passes between this assessor and Dyslexia in Defence. The assessor is
              listed for information only.
            </p>
          </div>
          <p className="mt-4 text-base text-muted-foreground">
            SLC normally covers 80% of the fee, up to a cap of £175 per year. For the two screenings, 80% of the fee is
            under the cap, so that is what SLC pays. For the full assessment, 80% would be well above the cap, so £175 is
            what applies. Prices are as published by the assessor as of {SLC_COST_DATE}. The full assessment price shown
            is the Armed Forces rate (open to serving personnel and veterans); the standard public price is £595. Check
            with the assessor for current pricing before you apply.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Screening fees are deducted from the price of a full assessment booked within a month of the screening date.
            A screening is not a diagnosis.
          </p>
          <div className="mt-4 rounded-xl border-l-4 border-primary bg-card p-5">
            <p className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
              <Info className="h-5 w-5 text-primary" aria-hidden="true" />
              How much you save
            </p>
            <p className="text-base text-muted-foreground">
              A full diagnostic assessment through this route is £495 at the Armed Forces rate, compared with £690 for
              the British Dyslexia Association's specialist teacher assessment (BDA self funded rate as of 28 September
              2026). That is £195 less. After SLC, you pay £320 instead of £515.
            </p>
          </div>
          <p className="mt-3 text-base font-semibold text-foreground">
            We are working with assessors to bring these costs down as far as possible for Service personnel. Check
            back here for updates.
          </p>
        </section>

        <section aria-labelledby="how-heading" className="mb-12">
          <h2 id="how-heading" className="mb-4 text-2xl font-bold text-foreground">Step by step (Route 1)</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-muted-foreground">
            <li>Choose your option from the table above.</li>
            <li>
              Email Sarah to check availability and agree dates, and ask for a written quote or invoice (see the button
              below).
            </li>
            <li>
              Download the form for your option. Complete Part 1 (your details) and the red items in Part 2 and Part 3.
            </li>
            <li>Give the form to your line manager to complete Part 5.</li>
            <li>
              Take it to your{" "}
              <Link to="/currently-serving/army-education-centres" className="font-semibold text-primary underline-offset-4 hover:underline">
                Army Education Centre
              </Link>{" "}
              for Ed Staff to complete Part 6. SLC funding cannot be claimed retrospectively, so get this authorised
              before you book or pay anything.
            </li>
            <li>
              Once authorised, book with Sarah and pay her. Her information pack says a deposit secures your date and the
              full payment is due 7 days before the assessment, so plan for paying up front.
            </li>
            <li>
              After the assessment is completed, claim your SLC contribution back by submitting evidence that you
              completed it and paid for it, as instructed by your Army Education Centre. Ask them exactly what evidence
              they need before you book.
            </li>
          </ol>
          <p className="text-sm text-muted-foreground">
            The exact process can vary between units and may change over time. Check the form itself and speak to your
            chain of command or unit education staff if you are unsure.
          </p>
        </section>

        <section aria-labelledby="contact-sarah-heading" className="mb-12 rounded-xl border-l-4 border-primary bg-card p-5">
          <h2 id="contact-sarah-heading" className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            Contact Sarah
          </h2>
          <p className="mb-4 text-base text-muted-foreground">
            Sarah Hickinbotham, Specialist Dyslexia Teacher Assessor. All assessments are delivered online.
          </p>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-8 text-base font-bold">
              <a href={SARAH_MAILTO}>
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                Email Sarah
              </a>
            </Button>
            <span className="break-all text-base text-foreground">{SARAH_EMAIL}</span>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="https://sway.cloud.microsoft/MkhqFDmYV5A3r3SF?ref=Link" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Read Sarah's assessment information pack <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
            <li>
              <a href="https://www.adultdyslexiaservices.co.uk/services-5" target="_blank" rel="noopener noreferrer" className={linkClass}>
                Sarah's services page <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="bda-heading" className="mb-12">
          <h2 id="bda-heading" className="mb-4 text-2xl font-bold text-foreground">
            Alternative route: through the BDA
          </h2>
          <p className="mb-6 text-base text-muted-foreground">
            You can also get a dyslexia diagnostic assessment through the British Dyslexia Association. This is a
            separate route with its own prices and booking process. BDA self funded rates as of 28 September 2026 are
            £690 for a specialist teacher assessment and £882 for a psychologist assessment (including VAT). SLC pays up
            to £175, so you would pay £515 or £707. Check the BDA website for current pricing before applying.
          </p>

          <div aria-labelledby="download-heading" role="group" className="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 id="download-heading" className="mb-3 text-2xl font-bold text-foreground">Download the template</h3>
            <p className="mb-4 text-base text-muted-foreground">Use this generic form if you choose the BDA route.</p>
            <p className="mb-4 text-base text-muted-foreground">
              This Word document is based on the official MOD Form 1950.
            </p>
            <p className="mb-4 text-base text-muted-foreground">
              The <strong className="text-foreground">Reason for Study</strong> and{" "}
              <strong className="text-foreground">What Benefit Will This Course Bring to Defence</strong> sections are
              already written for you. You do not have to write a justification from scratch.
            </p>
            <p className="mb-6 text-base text-muted-foreground">
              Some parts are left blank on purpose. You, your line manager and Ed Staff complete these by hand:
            </p>
            <ul className="mb-6 list-disc space-y-1 pl-6 text-base text-muted-foreground">
              <li>your personal details</li>
              <li>course and cost details</li>
              <li>signatures</li>
              <li>the line manager and Ed Staff sections</li>
            </ul>
            <Button asChild size="lg" className="rounded-full px-8 text-base font-bold">
              <a href={slcTemplate.url} download="SLC_Application_Template_Dyslexia_Assessment.docx">
                <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                Download the template (Word)
              </a>
            </Button>
          </div>

          <ol className="mb-8 list-decimal space-y-2 pl-6 text-base text-muted-foreground">
            <li>Download and complete the form.</li>
            <li>Get your line manager and Ed Staff to complete Parts 5 and 6 before you book.</li>
          </ol>

          <h3 id="assessors-heading" className="mb-3 text-xl font-bold text-foreground">BDA assessment routes</h3>
          <p className="mb-6 text-base text-muted-foreground">These are the two BDA assessment routes:</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {assessmentRoutes.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{r.provider}</p>
                  <p className="mb-3 text-base font-bold text-foreground">{r.label}</p>
                  {r.description ? <p className="mb-3 text-sm text-muted-foreground">{r.description}</p> : null}
                </div>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Open link <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in new tab)</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="before-heading" className="mb-12 rounded-xl border-l-4 border-primary bg-card p-5">
          <h2 id="before-heading" className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
            <Info className="h-5 w-5 text-primary" aria-hidden="true" />
            Before you start
          </h2>
          <p className="text-base text-muted-foreground">
            You must check your own SLC eligibility and remaining balance before applying, because SLC entitlement is
            limited each year and you may already have used some of it this financial year.
          </p>
        </section>

        <section aria-labelledby="aec-heading" className="mb-12">
          <h2 id="aec-heading" className="mb-2 text-lg font-bold text-foreground">Army personnel: Army Education Centres</h2>
          <p className="mb-2 text-sm text-muted-foreground">
            Your local Army Education Centre can advise on learning credits.
          </p>
          <Link
            to="/currently-serving/army-education-centres"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Find your Army Education Centre <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>

        <div role="note" className="flex gap-3 rounded-xl border border-border bg-muted p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-foreground">
            Assessment routes are listed by Dyslexia in Defence. Being listed is not an endorsement by the Ministry of
            Defence or the Army. Please check that any assessment route meets the requirements of your unit and funding
            route before booking. MOD-funded assessments follow MOD requirements (JSP 822 Vol 7, Annex B), so check with
            your SpLD Advisor before self-funding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandardLearningCreditsPage;
