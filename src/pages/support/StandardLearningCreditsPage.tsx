import { Fragment } from "react";
import { Link } from "@/lib/router-compat";
import { AlertTriangle, ArrowDown, ArrowRight, CircleHelp, Download, ExternalLink, Info, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import slcTemplate from "@/assets/slc-template.docx.asset.json";
import slcLevel1 from "@/assets/slc-level1.docx.asset.json";
import slcLevel2 from "@/assets/slc-level2.docx.asset.json";
import slcFull from "@/assets/slc-full.docx.asset.json";
import { assessmentRoutes } from "@/data/assessors";

const SLC_COST_DATE = "30 October 2026";
const JSP822_PAGE_URL = "https://www.gov.uk/government/publications/jsp-822-governance-and-management-of-defence-individual-training-education-and-skills";
// GOV.UK media links change when the MOD republishes, so check the publication page at JSP822_PAGE_URL whenever the page is updated.
const JSP822_VOL7_URL = "https://assets.publishing.service.gov.uk/media/65ce3f754239310011b7b8a9/JSP_822_V7.0__Vol_7_V3.0_-_Specific_Learning_Differences.pdf";
const JSP822_VOL9_URL = "https://assets.publishing.service.gov.uk/media/6925b8c022424e25e6bc316d/JSP_822_Volume_9_Elective_Education.pdf";
// Each option carries its own application form so the table row and its download button stay in sync.
const SLC_COST_OPTIONS: {
  name: string;
  detail: string;
  total: string;
  slc: string;
  you: string;
  note?: string;
  form: { url: string; filename: string; label: string };
}[] = [
  {
    name: "Option 1: Level 1 screening",
    detail: "A brief online check. Not a diagnosis.",
    total: "£50",
    slc: "£40",
    you: "£10",
    form: { url: slcLevel1.url, filename: "SLC_Application_Sarah_Hickinbotham_Level1_Screening_V2.docx", label: "Download the Level 1 screening form (Word)" },
  },
  {
    name: "Option 2: Level 2 screening",
    detail: "A more detailed online check. Not a diagnosis.",
    total: "£150",
    slc: "£120",
    you: "£30",
    form: { url: slcLevel2.url, filename: "SLC_Application_Sarah_Hickinbotham_Level2_Screening_V2.docx", label: "Download the Level 2 screening form (Word)" },
  },
  {
    name: "Option 3: Full diagnostic assessment",
    detail: "A full diagnostic assessment and report. Discounted rate for bookings through Dyslexia in Defence.",
    total: "£495",
    slc: "£175",
    you: "£320",
    note: "(£690 through the BDA)",
    form: { url: slcFull.url, filename: "SLC_Application_Sarah_Hickinbotham_Full_Diagnostic_Assessment_V2.docx", label: "Download the full diagnostic assessment form (Word)" },
  },
];

const SARAH_EMAIL = "hello@adultdyslexiaservices.co.uk";
const SARAH_SUBJECT = "Enquiry via Dyslexia in Defence: Standard Learning Credits assessment";
const SARAH_BODY = [
  "Hello Sarah,",
  "",
  "I found you through the Dyslexia in Defence website. I am interested in the following option (delete as appropriate): Level 1 screening / Level 2 screening / Full diagnostic assessment, at the rate for bookings through Dyslexia in Defence.",
  "",
  "Could you please let me know:",
  "- your availability and possible dates",
  "- whether you can hold a provisional date while I wait for my Standard Learning Credits to be authorised",
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

        <section aria-labelledby="cost-heading" className="mb-12">
          <h2 id="cost-heading" className="mb-4 text-2xl font-bold text-foreground">
            Route 1: Through Sarah Hickinbotham (lower cost)
          </h2>
          <p className="mb-6 text-base text-muted-foreground">
            Sarah Hickinbotham is an independent Specialist Dyslexia Teacher Assessor who holds an Assessment Practising
            Certificate (APC). She offers dyslexia screening and full diagnostic assessment, with a discounted rate for
            bookings made through Dyslexia in Defence. The two screenings are online only. The full diagnostic assessment
            is online, or face to face: Sarah is based in Chippenham and will travel a reasonable distance.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full table-fixed text-left text-base">
              <caption className="sr-only">
                Comparison of assessment options with their application forms, what you pay, what Standard Learning
                Credits pay and total costs
              </caption>
              <colgroup>
                <col className="w-[40%]" />
                <col className="w-[20%]" />
                <col className="w-[16%]" />
                <col className="w-[24%]" />
              </colgroup>
              <thead className="bg-muted">
                <tr className="text-sm font-bold text-foreground [overflow-wrap:anywhere]">
                  <th scope="col" className="px-2 py-3 sm:px-4">Assessment option</th>
                  <th scope="col" className="px-2 py-3 sm:px-4">You pay (full SLC commitment)</th>
                  <th scope="col" className="px-2 py-3 sm:px-4">SLC pays</th>
                  <th scope="col" className="px-2 py-3 sm:px-4">Total cost</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {SLC_COST_OPTIONS.map((o) => (
                  <Fragment key={o.name}>
                    <tr className="border-t border-border bg-card">
                      <th scope="row" className="px-2 py-3 font-semibold text-foreground sm:px-4 [overflow-wrap:anywhere]">
                        <span className="block">{o.name}</span>
                        <span className="mt-1 block text-sm font-normal text-muted-foreground">{o.detail}</span>
                      </th>
                      <td className="px-2 py-3 text-lg font-bold text-foreground sm:px-4">{o.you}</td>
                      <td className="px-2 py-3 sm:px-4">{o.slc}</td>
                      <td className="px-2 py-3 sm:px-4">
                        <span className="block">{o.total}</span>
                        {o.note && (
                          <a href="#bda-heading" className="mt-1 block text-sm text-primary underline-offset-4 hover:underline [overflow-wrap:anywhere]">
                            {o.note} <ArrowDown className="inline h-3 w-3" aria-hidden="true" />
                          </a>
                        )}
                      </td>
                    </tr>
                    <tr className="border-t-0 bg-card">
                      <td colSpan={4} className="px-2 pb-3 sm:px-4">
                        <Button asChild size="sm" variant="outline" className="min-h-10 h-auto w-full justify-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 text-center text-sm font-semibold">
                          <a href={o.form.url} download={o.form.filename} aria-label={o.form.label}>
                            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                            Download SLC form
                          </a>
                        </Button>
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          {/* NOTE FOR FUTURE UPDATES: the table figures come from Sarah Hickinbotham's published information pack
              (as of SLC_COST_DATE). Each SLC_COST_OPTIONS entry also holds its own application form asset, so replace
              the form there when a new version is issued. Update SLC_COST_DATE, SLC_COST_OPTIONS and the pricing
              paragraphs below together when the assessor publishes new pricing. The BDA comparison and the BDA route
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
            is a discounted rate for bookings made through Dyslexia in Defence; the usual price is £595. Check
            with the assessor for current pricing before you apply.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Screening fees are deducted from the price of a full assessment that is booked and carried out within a month of the screening date.
            A screening is not a diagnosis.
          </p>
        </section>

        <section aria-labelledby="how-heading" className="mb-12">
          <h2 id="how-heading" className="mb-4 text-2xl font-bold text-foreground">Step by step (Route 1)</h2>
          <div className="mb-4 flex gap-3 rounded-xl border-l-4 border-primary bg-card p-4">
            <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-base font-bold text-foreground">
                It may be worth asking your SpLD Advisor or Army Education Centre (find your local one{" "}
                <Link to="/currently-serving/army-education-centres" className="text-primary underline-offset-4 hover:underline">here</Link>)
                {" "}whether an assessment can be funded.
              </p>
              <details className="mt-2 text-sm text-foreground">
                <summary className="cursor-pointer text-primary">
                  <CircleHelp className="mr-1 inline h-4 w-4" aria-hidden="true" />
                  Why ask
                </summary>
                <p className="mt-2">
                  <a href={JSP822_VOL7_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                    JSP 822 Vol 7 (PDF)<span className="sr-only"> (opens in new tab)</span>
                  </a>{" "}
                  (paras 2.1.9 and 2.3.1) requires Services to fund specialist assessment where required.
                </p>
              </details>
            </div>
          </div>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-muted-foreground">
            <li>Choose your option from the table above.</li>
            <li>
              Email Sarah to arrange her free initial consultation (Teams or Zoom), check availability and agree dates,
              and ask for a written quote or invoice (see the button below).
            </li>
            <li>
              Download the <strong className="text-foreground">pre-populated</strong> SLC form for your option. It is
              already filled in with Sarah's details, the costs and the reason for study. You complete Part 1 (your
              details), Part 4 (your signature) and the red items in Parts 2 and 3.
            </li>
            <li>Give the form to your line manager to complete Part 5.</li>
            <li>
              Take it to your{" "}
              <Link to="/currently-serving/army-education-centres" className="font-semibold text-primary underline-offset-4 hover:underline">
                Army Education Centre
              </Link>{" "}
              (find your local one <Link to="/currently-serving/army-education-centres" className="font-semibold text-primary underline-offset-4 hover:underline">here</Link>){" "}
              for Ed Staff to complete Part 6. SLC funding cannot be claimed retrospectively, so get this authorised
              before you book or pay anything.
            </li>
            <li>
              Once authorised, book with Sarah and pay her. Her information pack says the deposit is due within 48 hours
              of receiving the Booking Pack, a pre-assessment questionnaire is due within 7 days, and full payment is due
              7 days before the assessment, so plan for paying up front. Tell Sarah early if you are waiting for SLC authorisation.
            </li>
            <li>
              After the assessment is completed, claim your SLC contribution back by submitting evidence that you
              completed it and paid for it, as instructed by your Army Education Centre (find your local one{" "}
              <Link to="/currently-serving/army-education-centres" className="font-semibold text-primary underline-offset-4 hover:underline">here</Link>). Ask them exactly what evidence
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
            Sarah Hickinbotham, Specialist Dyslexia Teacher Assessor. Screenings are online only. The full assessment is
            online or face to face (Sarah is Chippenham-based and will travel a reasonable distance).
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
              <a href="https://sway.cloud.microsoft/HjNS1WQIQ6VdYA7d" target="_blank" rel="noopener noreferrer" className={linkClass}>
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
          <p className="mt-3 text-sm text-muted-foreground">
            Sarah offers a free initial consultation by Teams or Zoom before you book.
          </p>
        </section>

        <section aria-labelledby="bda-heading" className="mb-12">
          <h2 id="bda-heading" className="mb-4 scroll-mt-40 text-2xl font-bold text-foreground">
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
              This Word document is based on the official MOD Form 1950 (Annex A to{" "}
              <a href={JSP822_VOL9_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
                JSP 822 Vol 9 (PDF)<span className="sr-only"> (opens in new tab)</span>
              </a>).
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
            <Button asChild size="lg" className="h-auto min-h-12 w-full whitespace-normal rounded-full px-4 text-center text-base font-bold sm:w-auto sm:px-8">
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
            route before booking. MOD-funded assessments follow MOD requirements ({" "}
            <a href={JSP822_VOL7_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
              JSP 822 Vol 7 (PDF)<span className="sr-only"> (opens in new tab)</span>
            </a>, Annex B), so check with
            your SpLD Advisor before self-funding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandardLearningCreditsPage;
