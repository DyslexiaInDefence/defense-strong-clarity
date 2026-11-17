import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/evidence/Reveal";
import LevelCard, { LevelConnector } from "@/components/whyhere/LevelCard";
import WorkforceGraphic from "@/components/whyhere/WorkforceGraphic";
import { RulesGraphic, GapGraphic } from "@/components/whyhere/SupportGraphics";
import { policyPdf } from "@/components/whyhere/figures";
import "@/components/whyhere/whyhere.css";

// The "Why we are here" argument from the retired standalone page, closing the Evidence page.
// The three level cards keep the old page's wording word for word.
export const WHY_HERE_SOURCES = [
  { label: "NHS: Dyslexia", url: "https://www.nhs.uk/conditions/dyslexia/" },
  { label: "British Dyslexia Association: Contact Magazine, September 2024", url: undefined },
  { label: "JSP 822 Volume 7: Specific Learning Differences (PDF)", url: policyPdf },
  { label: "Equality Act 2010", url: "https://www.legislation.gov.uk/ukpga/2010/15/contents" },
];

export default function WhyWeAreHereSection() {
  return (
    <section id="why-we-are-here" tabIndex={-1} aria-labelledby="why-we-are-here-heading" className="whyhere-page evidence-shell border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 pt-16 md:px-6 md:pt-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="why-we-are-here-heading" className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">Why we are here</h2>
            <p className="mt-5 text-2xl font-bold leading-snug text-primary md:text-3xl">More dyslexic people, less guaranteed support</p>
            <p className="mt-6 text-xl leading-relaxed text-foreground">How Defence ended up with a higher share of dyslexic people than most workplaces, and a weaker legal safety net around them.</p>
          </div>
        </Reveal>
      </div>
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <p className="sr-only">Three levels explain why Dyslexia in Defence exists: Defence has long attracted dyslexic people; the legal duty to adapt does not apply in the same way to the Armed Forces; a higher share of dyslexic people faces less guaranteed support.</p>
        <LevelCard headingLevel={3} number={1} label="Who joins" title="Defence has long attracted dyslexic people" graphic={<WorkforceGraphic />} below={<p>NHS (around 10% of the population). Contact Magazine, British Dyslexia Association, September 2024 (Defence figure may be closer to 1 in 5, including many undiagnosed).</p>}>
          <p>The Services offer practical, hands on careers that suit many dyslexic strengths, and many people who did not thrive in the classroom chose to join. The likely result is a workforce with more dyslexic people than a typical employer.</p>
        </LevelCard>
        <LevelConnector />
        <LevelCard headingLevel={3} number={2} label="The rules" title="The legal duty to adapt does not apply in the same way" graphic={<RulesGraphic />} below={<Link className="inline-flex min-h-11 items-center text-primary underline underline-offset-4" to="/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk">See how JSP 822 and the Equality Act compare</Link>}>
          <p>Under the Equality Act 2010, civilian employers must make reasonable adjustments for disabled people. The Armed Forces are exempt from the disability discrimination provisions of the Act in relation to service. Support is instead set by Ministry of Defence policy, JSP 822, and is provided where feasible.</p>
        </LevelCard>
        <LevelConnector />
        <LevelCard headingLevel={3} number={3} label="The result" title="More dyslexic people, less guaranteed support" graphic={<GapGraphic />}>
          <p>A bigger share of the workforce, with a lower guarantee of adjustments. Whether someone is supported depends on policy, their unit and whether they feel able to ask.</p><p>Where learning needs are discussed at the start, 82% of people rated a course fully or mostly accessible. Where they were not, 25% did.</p>
        </LevelCard>
      </div>
      <div className="border-y border-border bg-secondary py-14 md:py-16">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <h3 id="why-we-are-here-closing" className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-foreground">That gap is why Dyslexia in Defence exists.</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-auto min-h-11 whitespace-normal"><Link to="/insights/understanding-dyslexia">Understanding dyslexia</Link></Button>
              <Button asChild size="lg" variant="outline" className="h-auto min-h-11 whitespace-normal"><Link to="/get-involved">Get involved</Link></Button>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <Reveal>
          <h3 id="why-we-are-here-sources" className="mb-4 text-xl font-semibold text-muted-foreground">Sources</h3>
          <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
            {WHY_HERE_SOURCES.map(source => (
              <li key={source.label}>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{source.label}<span className="sr-only"> (opens in a new tab)</span></a>
                ) : source.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
