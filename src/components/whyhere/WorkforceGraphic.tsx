import { useEffect, useRef } from "react";
import { useEvidenceMotion } from "@/components/evidence/useEvidenceMotion";
import { workforceIllustration } from "./figures";

export default function WorkforceGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const motion = useEvidenceMotion();
  useEffect(() => {
    const element = ref.current;
    if (!motion || !element || played.current || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      played.current = true;
      observer.disconnect();
      element.querySelectorAll("[data-outlined-dot]").forEach((dot, index) => {
        animations.push(dot.animate([{ opacity: 0, transform: "scale(.6)" }, { opacity: 1, transform: "scale(1)" }], { delay: 550 + index * 35, duration: 400, easing: "ease-out", fill: "backwards" }));
      });
    }, { threshold: .4 });
    observer.observe(element);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [motion]);
  return (
    <figure ref={ref} role="img" aria-label="Illustrative comparison, not a measured count. A typical workplace: about 1 in 10 dyslexic people. Defence: likely higher, possibly up to 1 in 5, shown with 10 solid and 10 additional outlined dots.">
      <div aria-hidden="true" className="grid grid-cols-2 gap-5 md:gap-8">
        {[false, true].map(defence => <div key={String(defence)} className="min-w-0">
          <p className="mb-5 min-h-14 text-lg font-semibold text-foreground">{defence ? "Defence" : "A typical workplace"}</p>
          <div className="grid aspect-square grid-cols-10 gap-1.5 md:gap-2">
            {Array.from({ length: workforceIllustration.dotsPerGrid }, (_, index) => {
              const solid = index % 10 === 0;
              const outlined = defence && index % 10 === 1;
              return <span key={index} data-outlined-dot={outlined ? "true" : undefined} className={`whyhere-dot ${solid ? "bg-primary" : outlined ? "whyhere-dot-outlined border-2 border-primary/70" : "bg-primary/15"}`} />;
            })}
          </div>
          <p className="mt-5 text-base leading-relaxed text-foreground">{defence ? "Likely higher, possibly up to 1 in 5" : "About 1 in 10"}</p>
        </div>)}
      </div>
      <figcaption aria-hidden="true" className="mt-6 text-base leading-relaxed text-muted-foreground">Illustrative, not a measured count</figcaption>
    </figure>
  );
}