import { ArrowDown, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";
import EvidenceWide from "./EvidenceWide";
import Reveal from "./Reveal";

const rows = [
  {
    said: <>Only <strong>6%</strong> find training fully accommodated, <strong>68%</strong> say it depends on leadership discretion, and <strong>51%</strong> aren't sure the policies exist.</>,
    heard: "People don't know what they're entitled to, or who to ask.",
    actionLabel: "We're building",
    action: "A plain English guide to JSP 822, ACSO 3226 and your entitlements, with step by step help on asking for a diagnosis and a clear list of who to contact.",
  },
  {
    said: "Where needs are discussed at the start, accessibility generally follows.",
    heard: "The most powerful change costs nothing: ask.",
    actionLabel: "We're doing",
    action: "Briefings and support sessions for organisations, so asking becomes the first thing instructors and managers do.",
  },
  {
    said: <>Too many find out too late, and <strong>77%</strong> worry that telling an employer will cost them the job.</>,
    heard: "People need a route in, and someone who has been there.",
    actionLabel: "We're building",
    action: "A route to diagnosis and assessment, interview disclosure guidance, peer conversations with veterans, and CV and confidence support.",
  },
];

function Column({ label, colour, children }: { label: string; colour: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <p className={`mb-5 inline-flex min-h-9 items-center rounded-sm px-3 py-1 text-base font-bold leading-relaxed text-brand-navy ${colour}`}>{label}</p>
      <p className="text-lg leading-relaxed text-foreground">{children}</p>
    </div>
  );
}

function DirectionArrow() {
  return <div aria-hidden="true" className="flex items-center justify-center text-primary"><ArrowDown className="h-5 w-5 lg:hidden" /><ArrowRight className="hidden h-5 w-5 lg:block" /></div>;
}

export default function YouSaidSection() {
  const outline = "h-auto min-h-11 w-full whitespace-normal rounded-full border-2 border-brand-navy-foreground bg-transparent px-5 py-3 text-base text-brand-navy-foreground hover:bg-brand-navy-foreground hover:text-brand-navy focus-visible:ring-brand-gold focus-visible:ring-offset-brand-navy";
  return (
    <EvidenceWide>
      <div className="mt-10 space-y-12 md:space-y-16">
        {rows.map((row, index) => (
          <Reveal key={row.heard}>
            <div className={`grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)_20px_minmax(0,1fr)] lg:gap-4 ${index > 0 ? "border-t border-border pt-12" : ""}`}>
              <Column label="You said" colour="bg-ribbon-yellow">{row.said}</Column>
              <DirectionArrow />
              <Column label="We heard" colour="bg-ribbon-blue">{row.heard}</Column>
              <DirectionArrow />
              <Column label={row.actionLabel} colour="bg-ribbon-green">{row.action}</Column>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="bg-brand-navy px-6 py-10 text-center text-brand-navy-foreground md:px-8">
            <p className="text-3xl font-bold leading-tight md:text-4xl">Strength in numbers.</p>
            <p className="mt-5 text-xl leading-relaxed">Share your story, join the network, or partner with us.</p>
            <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Button asChild variant="outline" size="lg" className={outline}><a href={SHARE_MAILTO}>Share your story</a></Button>
              <Button asChild size="lg" className="h-auto min-h-11 w-full whitespace-normal rounded-full bg-brand-gold px-5 py-3 text-base font-bold text-brand-gold-foreground hover:bg-brand-gold/90 focus-visible:ring-brand-gold focus-visible:ring-offset-brand-navy"><Link to="/join">Join the network</Link></Button>
              <Button asChild variant="outline" size="lg" className={outline}><Link to="/partner">Partner with us</Link></Button>
            </div>
          </div>
        </Reveal>
      </div>
    </EvidenceWide>
  );
}