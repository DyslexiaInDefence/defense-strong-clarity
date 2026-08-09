import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import type { LivedStory } from "@/data/livedStories";
import { LIVED_EXPERIENCES_BASE } from "@/data/livedStories";

interface StoryCardProps {
  story: LivedStory;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Link
      to={`${LIVED_EXPERIENCES_BASE}/${story.slug}`}
      className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-xs transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`Read ${story.name}'s story`}
    >
      <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-border bg-muted">
        <img
          src={story.photoUrl}
          alt={story.photoAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-foreground">{story.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{story.role}</p>
      {story.summary && (
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">
          {story.summary}
        </p>
      )}
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
        Read story
        <ArrowRight
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
};

export default StoryCard;