import { ArrowDown } from "lucide-react";
import { Link } from "@/lib/router-compat";
import CountUp from "@/components/evidence/CountUp";
import DoingWellSection from "@/components/evidence/DoingWellSection";
import CanBeImprovedSection from "@/components/evidence/CanBeImprovedSection";
import DotField from "@/components/evidence/DotField";
import Reveal from "@/components/evidence/Reveal";
import JumpNavigation, { evidenceSections } from "@/components/evidence/JumpNavigation";
import { useEvidenceMotion } from "@/components/evidence/useEvidenceMotion";
import "@/components/evidence/evidence.css";

const MEMBERS = 2000;
const TRAINING_RESPONSES = 228;
const LIVED_EXPERIENCES = 92;

const EvidencePage = () => {
  const motion = useEvidenceMotion();
  return (
    <div className="evidence-page" onClickCapture={event => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const id = anchor.hash.slice(1);
      const section = document.getElementById(id);
      if (!section) return;
      event.preventDefault();
      window.history.replaceState(window.history.state, "", `#${id}`);
      section.scrollIntoView({ behavior: motion ? "smooth" : "instant", block: "start" });
      section.focus({ preventScroll: true });
    }}>
      <header className="evidence-hero relative overflow-hidden bg-brand-navy py-16 text-brand-navy-foreground md:py-24">
        <DotField />
        <div className="evidence-main relative">
          <div className="container px-4 text-center">
            <Reveal>
              <p className="mb-5 text-base font-medium">Dyslexia in Defence evidence</p>
              <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">The data behind the story</h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed">What people across Defence are telling us, and what the research says.</p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">An estimated 18,205 serving personnel have dyslexia (10% of 182,050, MOD statistics, 1 January 2026).</p>
            </Reveal>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-3">
              {[{ value: MEMBERS, suffix: "+", label: "network members" }, { value: TRAINING_RESPONSES, label: "training responses" }, { value: LIVED_EXPERIENCES, label: "lived experiences shared" }].map(counter => (
                <div key={counter.label}><p className="text-4xl font-bold leading-tight md:text-5xl"><CountUp value={counter.value} suffix={counter.suffix ?? ""} /></p><p className="mt-3 text-base leading-relaxed">{counter.label}</p></div>
              ))}
            </div>
            <Link to="#what-defence-is-doing-well" className="mx-auto mt-12 flex min-h-11 w-fit flex-col items-center gap-2 rounded-sm px-4 py-2 text-base">Scroll to explore<ArrowDown aria-hidden="true" className="evidence-scroll-arrow h-5 w-5" /></Link>
          </div>
        </div>
      </header>
      <JumpNavigation />
      {evidenceSections.map((section, index) => (
        <section key={section.id} id={section.id} tabIndex={-1} aria-labelledby={`${section.id}-heading`} className={`evidence-shell evidence-main py-16 md:py-24 ${index % 2 === 0 ? "bg-card" : "bg-muted"}`}>
          <div className="container px-6">
            <div className="mx-auto max-w-[65ch]">
              {section.id === "what-defence-is-doing-well" ? <><Reveal><h2 id={`${section.id}-heading`} className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl">{section.title}</h2></Reveal><DoingWellSection /></> : section.id === "what-can-be-improved" ? <><Reveal><h2 id={`${section.id}-heading`} className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl">{section.title}</h2><p className="text-xl leading-relaxed text-muted-foreground">From training rooms to the transition out of service, and into the wider world of school and work.</p></Reveal><CanBeImprovedSection /></> : <Reveal><h2 id={`${section.id}-heading`} className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl">{section.title}</h2><p className="text-xl leading-relaxed text-foreground">Content coming in the next update.</p></Reveal>}
              {index === evidenceSections.length - 1 && <Reveal><aside className="mt-12 border-t border-border pt-8"><h3 className="mb-3 text-xl font-bold text-foreground">What the rules say</h3><p className="text-xl leading-relaxed text-foreground">A dedicated page on JSP 822, the Equality Act and your entitlements is coming.</p></aside></Reveal>}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EvidencePage;