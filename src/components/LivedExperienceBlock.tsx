import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export type LivedExperienceTag = "Joining" | "Serving" | "Veteran";

export interface LivedExperienceSnippet {
  /** Unique identifier for the snippet (used as React key) */
  id: string;
  /** Strong 1–2 line quote */
  quote: string;
  /** Optional 1–2 line context for the quote */
  context?: string;
  /** Attribution (name, role) — kept short */
  attribution?: string;
  /** Source (publication, network) — kept short */
  source?: string;
  /** Lifecycle stage tag */
  tag: LivedExperienceTag;
  /** Suggested page placements — for editorial reuse, not rendered */
  placements?: string[];
  /** Emotional purpose — for editorial reuse, not rendered */
  purpose?: "Reassurance" | "Normalisation" | "Confidence";
}

interface LivedExperienceBlockProps {
  snippet: LivedExperienceSnippet;
  className?: string;
  /** Visual variant — 'card' for grid usage, 'inline' for in-page pull-quotes */
  variant?: "card" | "inline";
}

const TAG_STYLES: Record<LivedExperienceTag, string> = {
  Joining: "bg-primary/10 text-primary",
  Serving: "bg-secondary text-secondary-foreground",
  Veteran: "bg-accent/15 text-accent-foreground",
};

const LivedExperienceBlock = ({
  snippet,
  className,
  variant = "card",
}: LivedExperienceBlockProps) => {
  const { quote, context, attribution, source, tag } = snippet;

  return (
    <figure
      className={cn(
        "relative rounded-2xl border border-border bg-card p-6 md:p-7",
        variant === "inline" && "border-l-4 border-l-primary bg-primary/5",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
            TAG_STYLES[tag],
          )}
        >
          {tag}
        </span>
      </div>

      <blockquote className="text-lg font-medium leading-relaxed text-foreground">
        “{quote}”
      </blockquote>

      {context && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {context}
        </p>
      )}

      {(attribution || source) && (
        <figcaption className="mt-5 text-sm text-muted-foreground">
          {attribution && <span className="font-semibold text-foreground">{attribution}</span>}
          {attribution && source && <span> — </span>}
          {source && <span className="italic">{source}</span>}
        </figcaption>
      )}
    </figure>
  );
};

export default LivedExperienceBlock;
