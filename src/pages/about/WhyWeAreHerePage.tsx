import { ArrowDown } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import DotField from "@/components/evidence/DotField";
import Reveal from "@/components/evidence/Reveal";
import { useEvidenceMotion } from "@/components/evidence/useEvidenceMotion";
import LevelCard, { LevelConnector } from "@/components/whyhere/LevelCard";
import WorkforceGraphic from "@/components/whyhere/WorkforceGraphic";
import { RulesGraphic, GapGraphic } from "@/components/whyhere/SupportGraphics";
import { policyPdf } from "@/components/whyhere/figures";
import "@/components/evidence/evidence.css";
import "@/components/whyhere/whyhere.css";

export default function WhyWeAreHerePage() {
  const motion = useEvidenceMotion();
  return <div className="evidence-page whyhere-page">
    <header className="evidence-hero whyhere-hero relative overflow-hidden bg-brand-navy py-16 text-brand-navy-foreground md:py-24">
      <DotField />
      <div className="container relative mx-auto px-6 text-center">
        <Reveal><p className="mb-5 text-base font-medium">Why we are here</p><h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">More dyslexic people, less guaranteed support</h1><p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed">How Defence ended up with a higher share of dyslexic people than most workplaces, and a weaker legal safety net around them.</p></Reveal>
        <Button asChild variant="ghost" className="mx-auto mt-10 h-auto min-h-11 whitespace-normal hover:bg-brand-navy-foreground/10 hover:text-brand-navy-foreground"><a href="#three-levels" onClick={event => { const section = document.getElementById("three-levels"); if (!section) return; event.preventDefault(); section.scrollIntoView({ behavior: motion ? "smooth" : "instant", block: "start" }); section.focus({ preventScroll: true }); }}><span className="flex flex-col items-center gap-2 text-base">Scroll to explore<ArrowDown aria-hidden="true" className="evidence-scroll-arrow h-5 w-5" /></span></a></Button>
      </div>
    </header>
    <div id="three-levels" tabIndex={-1} className="evidence-shell container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <p className="sr-only">Three levels explain why Dyslexia in Defence exists: Defence has long attracted dyslexic people; the legal duty to adapt does not apply in the same way to the Armed Forces; a higher share of dyslexic people faces less guaranteed support.</p>
      <LevelCard number={1} label="Who joins" title="Defence has long attracted dyslexic people" graphic={<WorkforceGraphic />} below={<p>NHS (around 10% of the population). Contact Magazine, British Dyslexia Association, September 2024 (Defence figure may be closer to 1 in 5, including many undiagnosed).</p>}>
        <p>The Services offer practical, hands on careers that suit many dyslexic strengths, and many people who did not thrive in the classroom chose to join. The likely result is a workforce with more dyslexic people than a typical employer.</p>
      </LevelCard>
      <LevelConnector />
      <LevelCard number={2} label="The rules" title="The legal duty to adapt does not apply in the same way" graphic={<RulesGraphic />} below={<Link className="inline-flex min-h-11 items-center text-primary underline underline-offset-4" to="/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk">See how JSP 822 and the Equality Act compare</Link>}>
        <p>Under the Equality Act 2010, civilian employers must make reasonable adjustments for disabled people. The Armed Forces are exempt from the disability discrimination provisions of the Act in relation to service. Support is instead set by Ministry of Defence policy, JSP 822, and is provided where feasible.</p>
      </LevelCard>
      <LevelConnector />
      <LevelCard number={3} label="The result" title="More dyslexic people, less guaranteed support" graphic={<GapGraphic />} below={<Link className="inline-flex min-h-11 items-center text-primary underline underline-offset-4" to="/evidence">See the full evidence</Link>}>
        <p>A bigger share of the workforce, with a lower guarantee of adjustments. Whether someone is supported depends on policy, their unit and whether they feel able to ask.</p><p>Where learning needs are discussed at the start, 82% of people rated a course fully or mostly accessible. Where they were not, 25% did.</p>
      </LevelCard>
    </div>
    <section className="border-y border-border bg-secondary py-14 md:py-16" aria-labelledby="whyhere-closing">
      <div className="container mx-auto px-6 text-center"><Reveal><h2 id="whyhere-closing" className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-foreground">That gap is why Dyslexia in Defence exists.</h2><div className="mt-8 flex flex-wrap justify-center gap-4"><Button asChild size="lg"><Link to="/evidence">See the evidence</Link></Button><Button asChild size="lg" variant="outline"><Link to="/about/what-we-do">What we do</Link></Button><Button asChild size="lg" variant="outline"><Link to="/join">Join the network</Link></Button></div></Reveal></div>
    </section>
    <section aria-labelledby="whyhere-sources" className="container mx-auto max-w-7xl px-6 py-12"><Reveal><h2 id="whyhere-sources" className="mb-4 text-xl font-semibold text-muted-foreground">Sources</h2><ul className="space-y-2 text-base leading-relaxed text-muted-foreground">{[{ label: "NHS: Dyslexia", url: "https://www.nhs.uk/conditions/dyslexia/" }, { label: "British Dyslexia Association: Contact Magazine, September 2024", url: undefined }, { label: "JSP 822 Volume 7: Specific Learning Differences (PDF)", url: policyPdf }, { label: "Equality Act 2010", url: "https://www.legislation.gov.uk/ukpga/2010/15/contents" }].map(source => <li key={source.label}>{source.url ? <a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-primary underline underline-offset-4">{source.label}<span className="sr-only"> (opens in a new tab)</span></a> : source.label}</li>)}</ul></Reveal></section>
  </div>;
}