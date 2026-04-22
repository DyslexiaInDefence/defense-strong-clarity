import { Headphones, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface PodcastInsightProps {
  title: string;
  className?: string;
}

const PODCAST_URL = "https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR";

const PodcastInsight = ({ title, className = "" }: PodcastInsightProps) => {
  const handleClick = () => {
    trackEvent("podcast_insight_click", {
      target: PODCAST_URL,
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
        Hear directly from someone currently serving about what dyslexia is really like in the
        military — the challenges, the coping strategies, and how it shapes success.
      </p>
      <a
        href={PODCAST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        Listen to the episode
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only"> (opens Spotify in a new tab)</span>
      </a>
    </aside>
  );
};

export default PodcastInsight;
