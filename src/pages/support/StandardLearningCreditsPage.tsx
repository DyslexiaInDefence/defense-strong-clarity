import { Link } from "@/lib/router-compat";
import { AlertTriangle, ArrowRight, Download, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import slcTemplate from "@/assets/slc-template.docx.asset.json";
import { assessmentRoutes } from "@/data/assessors";

const StandardLearningCreditsPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Using Standard Learning Credits for a dyslexia assessment
        </h1>
        <p className="mb-4 text-lg text-muted-foreground">
          The Standard Learning Credits (SLC) Scheme provides financial support throughout your career to enhance your
          educational and vocational achievements in Service. It covers multiple, small scale learning purposes and
          courses that have been approved by your line manager and Education Staff or Education Centre.
        </p>
        <p className="mb-4 text-lg text-muted-foreground">
          You can spend up to £175 per financial year while in Service or during your resettlement phase. If you are
          diagnosed with a Specific Learning Difference, you can use SLC towards specialist tuition and support, and
          even towards software bought specifically to support your Specific Learning Difference.
        </p>
        <p className="mb-6 text-lg text-muted-foreground">
          SLC is not to be used for Service training, civilian accredited Service training, professional bodies and
          institutes, course material, pure sport and Adventurous Training, battlefield tours, or the City and Guilds
          Professional Recognition Awards scheme.
        </p>

        <div role="note" className="mb-6 rounded-xl border-l-4 border-primary bg-card p-5">
          <h2 className="mb-2 text-lg font-bold text-foreground">What you get</h2>
          <p className="text-base text-muted-foreground">
            You may claim 80% of fees paid to a learning provider for certain personal development courses,
            examinations and support, up to a maximum of £175 per financial year. You must have permission to claim
            before the course starts.
          </p>
        </div>

        <div role="note" className="mb-12 rounded-xl border-l-4 border-primary bg-card p-5">
          <h2 className="mb-2 text-lg font-bold text-foreground">When you cannot use this</h2>
          <p className="text-base text-muted-foreground">
            SLC cannot be used at the same time as Enhanced Learning Credit (ELC) funding for elements of the same
            course of study.
          </p>
        </div>

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

        <section aria-labelledby="before-heading" className="mb-12 rounded-xl border-l-4 border-primary bg-card p-5">
          <h2 id="before-heading" className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
            <Info className="h-5 w-5 text-primary" aria-hidden="true" />
            Before you start
          </h2>
          <p className="text-base text-muted-foreground">
            You can use up to £175 of Standard Learning Credits per financial year towards this assessment, covering
            80% of the fee, up to that £175 cap. You must pay at least 20% of the fee yourself. The figures below are
            indicative, based on the current self funded rates published by the British Dyslexia Association, and
            assume full use of your available SLC balance for the year. Check your own remaining SLC balance before
            applying, since your full entitlement may not be available if you have already used some this financial
            year.
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
            We are building up a list of approved assessors. At the moment, the route to a dyslexia diagnostic assessment
            is through the British Dyslexia Association (BDA):
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
