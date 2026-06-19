import { Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

interface PodcastInsightProps {
  title: string;
  className?: string;
}

const KIRK_PATH = "/lived-experiences/staff-sergeant-kirk-davis-british-army";

const PodcastInsight = ({ title, className = "" }: PodcastInsightProps) => {
  const handleClick = () => {
    trackEvent("lived_experience_click", {
      target: KIRK_PATH,
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
    });
  };

  return (
    <aside
      className={`rounded-lg border border-border bg-muted/40 p-5 sm:p-6 ${className}`}
      aria-label="Podcast insight"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Headphones className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
            Podcast insight
          </p>
          <h3 className="text-lg font-bold text-foreground leading-snug">{title}</h3>
        </div>
      </div>
      <p className="text-foreground leading-relaxed mb-4">
        Hear directly from a serving member of the Armed Forces about their experience of living and serving with dyslexia — the challenges, the coping strategies, and how it shapes success.
      </p>
      <Link
        to={KIRK_PATH}
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        Read Staff Sergeant Kirk Davis' story
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
};

export default PodcastInsight;
