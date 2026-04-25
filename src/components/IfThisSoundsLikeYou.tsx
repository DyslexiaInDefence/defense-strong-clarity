import { cn } from "@/lib/utils";

interface IfThisSoundsLikeYouProps {
  /** 2–3 short, recognisable concerns. */
  concerns: string[];
  /** One short reassurance sentence shown after the bullets. */
  reassurance: string;
  className?: string;
}

/**
 * Mid-page recognition block. Sits BEFORE MidContentNudge.
 * Uses muted styling so it reads as a sidebar moment, not another CTA.
 */
const IfThisSoundsLikeYou = ({ concerns, reassurance, className }: IfThisSoundsLikeYouProps) => (
  <aside
    aria-label="If this sounds like you"
    className={cn(
      "my-8 rounded-2xl bg-muted/50 p-5 md:p-6",
      className,
    )}
  >
    <p className="mb-3 font-semibold text-foreground">If this sounds like you:</p>
    <ul className="mb-4 list-disc space-y-1.5 pl-6 text-foreground leading-relaxed">
      {concerns.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
    <p className="text-foreground leading-relaxed">{reassurance}</p>
  </aside>
);

export default IfThisSoundsLikeYou;