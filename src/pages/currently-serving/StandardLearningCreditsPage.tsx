import { Link } from "@/lib/router-compat";
import { AlertTriangle, ArrowRight, Download, Info, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { assessors } from "@/data/assessors";
import slcTemplate from "@/assets/slc-template.docx.asset.json";

const StandardLearningCreditsPage = () => (
  <div className="py-16">
    <div className="container mx-auto max-w-3xl px-4">
      <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">All services</span>
      <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Use your Standard Learning Credits for a dyslexia assessment</h1>
      <p className="mb-4 text-lg text-muted-foreground">
        Anyone in service can use Standard Learning Credits (SLC) towards a dyslexia assessment.
      </p>
      <p className="mb-12 text-lg text-muted-foreground">This applies across all services.</p>

      <section aria-labelledby="download-heading" className="mb-12 rounded-2xl border-2 border-primary bg-card p-6 md:p-8">
        <h2 id="download-heading" className="mb-4 text-2xl font-bold text-foreground">Download the template</h2>
        <p className="mb-4 text-base text-muted-foreground">
          This template is based on the official MOD Form 1950.
        </p>
        <p className="mb-4 text-base text-muted-foreground">
          The <strong className="text-foreground">Reason for Study</strong> and <strong className="text-foreground">What Benefit Will This Course Bring to Defence</strong> sections are already written for you. You do not have to write a justification from scratch.
        </p>
        <p className="mb-6 text-base text-muted-foreground">
          Some parts are left blank to fill in by hand: your personal details, the course and cost details, the signatures, and the line manager and Ed Staff sections. You, your line manager and Ed Staff complete these.
        </p>
        <a href={slcTemplate.url} download="SLC_Application_Template_Dyslexia_Assessment.docx">
          <Button size="lg" className="rounded-full px-8 text-base font-bold">
            <Download className="mr-2 h-5 w-5" aria-hidden="true" />
            Download the template (Word)
          </Button>
        </a>
      </section>

      <section aria-labelledby="how-heading" className="mb-12">
        <h2 id="how-heading" className="mb-4 text-2xl font-bold text-foreground">How it works</h2>
        <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-foreground">
          <li>Download the pre filled form.</li>
          <li>Complete the remaining details on the form.</li>
          <li>Submit it as instructed on the form or by your unit.</li>
        </ol>
        <p className="text-sm text-muted-foreground">
          The exact process can vary between units and may change over time. Check the form itself and speak to your chain of command or unit education staff if you are unsure.
        </p>
      </section>

      <section aria-labelledby="before-heading" className="mb-12 flex gap-3 rounded-xl border border-border bg-card p-5">
        <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <h2 id="before-heading" className="mb-2 text-xl font-bold text-foreground">Before you start</h2>
          <p className="mb-2 text-base text-muted-foreground">Check your own SLC eligibility and your remaining balance.</p>
          <p className="text-base text-muted-foreground">SLC entitlement is limited each year, and you may already have used yours.</p>
        </div>
      </section>

      <section aria-labelledby="aec-heading" className="mb-12">
        <h2 id="aec-heading" className="mb-2 text-lg font-bold text-foreground">Army personnel: Army Education Centres</h2>
        <p className="mb-2 text-sm text-muted-foreground">Your local Army Education Centre can advise on learning credits.</p>
        <Link to="/currently-serving/army-education-centres" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
          Find your local centre <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <section aria-labelledby="assessors-heading">
        <h2 id="assessors-heading" className="mb-4 text-2xl font-bold text-foreground">Approved assessors</h2>
        <p className="mb-6 text-base text-muted-foreground">
          We are building up a list of approved assessors. At the moment, the route to a dyslexia diagnostic assessment is through the British Dyslexia Association (BDA):
        </p>
        <ul className="mb-6 grid gap-4 sm:grid-cols-2">
          <li>
            <a
              href="https://www.bdadyslexia.org.uk/services/assessments/diagnostic-assessments-2/start-you-application/in-person-dyslexia-assessment-service-self-funded"
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full">
                <CardContent className="flex h-full items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">In Person Dyslexia Assessment Service (Self Funded)</h3>
                    <p className="mt-1 text-sm text-muted-foreground">British Dyslexia Association (BDA) — opens in new tab</p>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                </CardContent>
              </Card>
            </a>
          </li>
          <li>
            <a
              href="https://www.bdadyslexia.org.uk/services/assessments/diagnostic-assessments-2/start-you-application/remote-dyslexia-assessment-service-self-funded"
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full">
                <CardContent className="flex h-full items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Remote (Online) Dyslexia Assessment Service (Self Funded)</h3>
                    <p className="mt-1 text-sm text-muted-foreground">British Dyslexia Association (BDA) — opens in new tab</p>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                </CardContent>
              </Card>
            </a>
          </li>
        </ul>
        <div role="note" className="flex gap-3 rounded-xl border-2 border-primary/40 bg-primary/5 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm text-foreground">
            Assessment routes are listed by Dyslexia in Defence. Being listed is not an endorsement by the Ministry of Defence or the Army. Please check that any assessment route meets the requirements of your unit and funding route before booking.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default StandardLearningCreditsPage;
