import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { AudienceIntent } from "@/components/AudienceRouter";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface BackToPathwayProps {
  intent: AudienceIntent;
  className?: string;
}

const LABELS: Record<AudienceIntent, string> = {
  joining: "Back to ‘Thinking of joining’ pathway",
  serving: "Back to ‘Currently serving’ pathway",
  veteran: "Back to ‘Leaving / veteran’ pathway",
};

/**
 * Subtle text-link that returns the user to the matching intent section
 * on the Insights hub. Low emphasis by design.
 */
const BackToPathway = ({ intent, className }: BackToPathwayProps) => (
  <Link
    to={`/insights#${intent}`}
    onClick={() =>
      trackEvent("back_to_pathway_click", {
        intent,
        target: `/insights#${intent}`,
      })
    }
    className={cn(
      "inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline",
      className,
    )}
  >
    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
    {LABELS[intent]}
  </Link>
);

export default BackToPathway;
