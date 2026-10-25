import { ArrowDown, ArrowUp, Shield } from "lucide-react";
import CountUp from "@/components/evidence/CountUp";
import EvidenceBar from "@/components/evidence/EvidenceBar";
import { doingWellFigures } from "@/components/evidence/DoingWellSection";

export function RulesGraphic() {
  return <figure role="img" aria-label="Civilian employers have a legal duty to make reasonable adjustments under the Equality Act 2010. Armed Forces support is policy based, where feasible, under JSP 822.">
    <div aria-hidden="true" className="grid grid-cols-2 gap-6 text-center">
      <div><Shield strokeWidth={1.2} className="mx-auto mb-6 h-24 w-24 fill-primary text-primary md:h-28 md:w-28" /><p className="text-lg font-semibold text-foreground">Civilian employer</p><p className="mt-3 text-base leading-relaxed text-muted-foreground">Legal duty to adjust (Equality Act 2010)</p></div>
      <div><Shield strokeWidth={1.5} strokeDasharray="4 4" className="mx-auto mb-6 h-24 w-24 text-primary md:h-28 md:w-28" /><p className="text-lg font-semibold text-foreground">Armed Forces</p><p className="mt-3 text-base leading-relaxed text-muted-foreground">Policy, where feasible (JSP 822)</p></div>
    </div>
  </figure>;
}

export function GapGraphic() {
  return <div className="space-y-9">
    <figure role="img" aria-label="The share of dyslexic people is above a typical workplace, but guaranteed support is below a typical workplace. This is the gap Dyslexia in Defence exists to close.">
      <div aria-hidden="true" className="space-y-5">
        <div className="flex items-center gap-4"><ArrowUp className="h-12 w-12 shrink-0 text-primary" /><p className="text-lg font-semibold leading-relaxed text-foreground">Share of dyslexic people: above a typical workplace</p></div>
        <div className="border-l-4 border-brand-gold bg-brand-gold/15 px-5 py-4"><p className="text-lg font-semibold leading-relaxed text-foreground">The gap we exist to close</p></div>
        <div className="flex items-center gap-4"><ArrowDown className="h-12 w-12 shrink-0 text-primary" /><p className="text-lg font-semibold leading-relaxed text-foreground">Guaranteed support: below a typical workplace</p></div>
      </div>
    </figure>
    <div className="whyhere-bars space-y-7">
      <div className="flex gap-6 text-3xl font-bold text-primary" aria-hidden="true"><CountUp value={doingWellFigures.discussedPercent} suffix="%" /><CountUp value={doingWellFigures.notDiscussedPercent} suffix="%" /></div>
      <EvidenceBar label="Needs discussed at the start: 82% (105 of 128)" percent={doingWellFigures.discussedPercent} />
      <EvidenceBar label="Needs not discussed: 25% (11 of 44)" percent={doingWellFigures.notDiscussedPercent} neutral />
      <p className="text-base leading-relaxed text-muted-foreground">Defence Dyslexia Network training accessibility feedback form, 2026. Self reported.</p>
    </div>
  </div>;
}