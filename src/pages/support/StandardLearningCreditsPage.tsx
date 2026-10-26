import { Link } from "@/lib/router-compat";
import { AlertTriangle, ArrowRight, Download, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import slcTemplate from "@/assets/slc-template.docx.asset.json";
import { assessmentRoutes } from "@/data/assessors";

const SLC_COST_DATE = "26 October 2026";
const SLC_COST_OPTIONS = [
  { name: "Option 1: Level 1 screening", detail: "A brief online check and short report. Not a diagnosis. Roughly 1 hour.", total: "£50", slc: "£40", you: "£10" },
  { name: "Option 2: Level 2 screening", detail: "A more detailed online check and short report. Not a diagnosis. Roughly half a day.", total: "£150", slc: "£120", you: "£30" },
  { name: "Option 3: Full diagnostic assessment", detail: "A full online diagnostic assessment and a detailed 30+ page report. Armed Forces rate. Roughly 1 to 2 days.", total: "£495", slc: "£175", you: "£320" },
];

const StandardLearningCreditsPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Using Standard Learning Credits for a dyslexia assessment
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          The Standard Learning Credits (SLC) Scheme provides financial support throughout your career to enhance your
          educational and vocational achievements in Service. SLCs can be used to obtain a dyslexia assessment.
        </p>


        <section aria-labelledby="download-heading" className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 id="download-heading" className="mb-3 text-2xl font-bold text-foreground">Download the template</h2>
          <p className="mb-4 text-base text-muted-foreground">
            This Word document is based on the official MOD Form 1950.
          </p>
          <p className="mb-4 text-base text-muted-foreground">
            The <strong className="text-foreground">Reason for Study</strong> and{" "}
            <strong className="text-foreground">What Benefit Will This Course Bring to Defence</strong> sections are already
            written for you. You do not have to write a justification from scratch.
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
          <a href={slcTemplate.url} download="SLC_Application_Template_Dyslexia_Assessment.docx">
            <Button size="lg" className="rounded-full px-8 text-base font-bold">
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Download the template (Word)
            </Button>
          </a>
        </section>

        <section aria-labelledby="how-heading" className="mb-12">
          <h2 id="how-heading" className="mb-4 text-2xl font-bold text-foreground">How it works</h2>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-muted-foreground">
            <li>Download the pre filled form.</li>
            <li>Complete the remaining details on the form.</li>
            <li>Submit it as instructed on the form or by your unit.</li>
          </ol>
          <p className="text-sm text-muted-foreground">
            The exact process can vary between units and may change over time. Check the form itself and speak to your
            chain of command or unit education staff if you are unsure.
          </p>
        </section>

        <section aria-labelledby="cost-heading" className="mb-12">
          <h2 id="cost-heading" className="mb-4 text-2xl font-bold text-foreground">
            What will this cost me?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[34rem] text-left text-base">
              <caption className="sr-only">
                Comparison of assessment routes, total costs, what Standard Learning Credits pay and what you pay
              </caption>
              <thead className="bg-muted">
                <tr className="text-sm font-bold text-foreground">
                  <th scope="col" className="px-4 py-3">Assessment option</th>
                  <th scope="col" className="px-4 py-3">Total cost</th>
                  <th scope="col" className="px-4 py-3">SLC pays</th>
                  <th scope="col" className="px-4 py-3">You pay</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* NOTE FOR FUTURE UPDATES: the table figures come from Sarah Hickinbotham's published information pack
              (as of SLC_COST_DATE). Update SLC_COST_DATE, SLC_COST_OPTIONS and the paragraphs and savings note below
              together when the assessor publishes new pricing. The BDA comparison uses the BDA self funded rate as
              of 28 September 2026 and must be updated separately if BDA pricing changes. */}
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

        <div role="note" className="mb-12 flex gap-3 rounded-xl border border-border bg-muted p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-foreground">
            Dyslexia in Defence receives no payment, commission, referral fee or any other financial benefit from listing
            this assessor. No money passes between this assessor and Dyslexia in Defence. The assessor is listed for
            information only.
          </p>
        </div>

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

        <div role="note" className="mb-6 flex gap-3 rounded-xl border border-border bg-muted p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-foreground">
            Assessment routes are listed by Dyslexia in Defence. Being listed is not an endorsement by the Ministry of
            Defence or the Army. Please check that any assessment route meets the requirements of your unit and funding
            route before booking.
          </p>
        </div>

        <section aria-labelledby="assessors-heading">
          <h2 id="assessors-heading" className="mb-3 text-2xl font-bold text-foreground">Approved assessors</h2>
          <p className="mb-6 text-base text-muted-foreground">
            We are building up a list of assessors. You can get a dyslexia diagnostic assessment through the British
            Dyslexia Association (BDA), or through the independent assessor listed first below:
          </p>
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
      </div>
    </div>
  );
};

export default StandardLearningCreditsPage;
