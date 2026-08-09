import { NavLink } from "@/lib/router-compat";
import { livedStories, LIVED_EXPERIENCES_BASE } from "@/data/livedStories";

interface StoryNavProps {
  currentSlug?: string;
}

const StoryNav = ({ currentSlug }: StoryNavProps) => {
  return (
    <nav aria-label="Browse lived experience stories" className="mb-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Browse Stories
      </p>
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
        {livedStories.map((story) => {
          const active = story.slug === currentSlug;
          return (
            <NavLink
              key={story.slug}
              to={`${LIVED_EXPERIENCES_BASE}/${story.slug}`}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {story.name} – {story.role}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default StoryNav;