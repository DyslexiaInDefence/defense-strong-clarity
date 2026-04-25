import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export interface DecisionConfidenceLink {
  label: string;
  to: string;
}

interface DecisionConfidenceBlockProps {
  /** Short question-style header, aligned with the page H1. */
  heading: string;
  /** Three concise bullets: outcome → what it depends on → reality of support. */
  bullets: [string, string, string];
  /** Up to two next-step links. The first is the primary action. */
  links: DecisionConfidenceLink[];
  /** Page intent — used for analytics only. */
  intent: "joining" | "serving" | "veteran";
  className?: string;
}

/**
 * Lightweight inline clarity block. Sits AFTER the intro and BEFORE
 * other supporting components (Podcast / LivedExperience / MidContentNudge).
 *
 * Intentionally low-emphasis: a card with a tinted left border, three bullets,
 * and at most two text-link next steps. No dominant button row.
 */
const DecisionConfidenceBlock = ({
  heading,
  bullets,
  links,
  intent,
  className,
}: DecisionConfidenceBlockProps) => (
  <aside
    aria-label="Quick clarity"
    className={cn(
      "my-8 rounded-2xl border border-border border-l-4 border-l-primary bg-card p-5 md:p-6",
      className,
    )}
  >
    <h2 className="mb-4 text-lg font-bold text-foreground md:text-xl">{heading}</h2>
    <ul className="mb-5 space-y-2.5">
      {bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-foreground leading-relaxed">
          <CheckCircle2
            className="mt-1 h-4 w-4 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span>{b}</span>
        </li>
      ))}
    </ul>
    {links.length > 0 && (
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          What to do next
        </p>
        {links.slice(0, 2).map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() =>
              trackEvent("decision_confidence_click", {
                intent,
                position: i === 0 ? "primary" : "secondary",
                cta_label: l.label,
                target: l.to,
              })
            }
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {l.label}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        ))}
      </div>
    )}
  </aside>
);

export default DecisionConfidenceBlock;