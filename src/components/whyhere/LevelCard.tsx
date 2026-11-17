import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/evidence/Reveal";
import GrowOnView from "@/components/evidence/GrowOnView";

export function LevelConnector() {
  return <div aria-hidden="true" className="flex h-24 flex-col items-center justify-center text-primary md:h-28"><GrowOnView className="whyhere-connector"><div className="h-14 w-px bg-primary/40" /></GrowOnView><ArrowDown className="h-5 w-5" /></div>;
}

export default function LevelCard({ number, label, title, children, graphic, below, headingLevel = 2 }: { number: number; label: string; title: string; children: ReactNode; graphic: ReactNode; below?: ReactNode; headingLevel?: 2 | 3 }) {
  // The retired standalone page used h2; on the homepage the levels sit under the "Why we are here" h2.
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <Reveal>
      <section aria-labelledby={`level-${number}-heading`} className="rounded-lg border border-border bg-card p-6 md:p-10 lg:p-12">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-4 text-primary"><span aria-hidden="true" className="text-5xl font-light leading-none">{number}</span><p className="text-base font-semibold">{label}</p></div>
            <Heading id={`level-${number}-heading`} className={`mb-6 font-bold leading-tight text-foreground ${headingLevel === 3 ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>{title}</Heading>
            <div className="max-w-[65ch] space-y-5 text-xl leading-relaxed text-foreground">{children}</div>
          </div>
          <div className="min-w-0 self-center">{graphic}</div>
        </div>
        {below && <div className="mt-8 border-t border-border pt-6 text-base leading-relaxed text-muted-foreground">{below}</div>}
      </section>
    </Reveal>
  );
}