import type { ReactNode } from "react";
import StoryNav from "@/components/StoryNav";
import type { LivedStory } from "@/data/livedStories";

interface LivedExperienceLayoutProps {
  story: LivedStory;
  photoWidth: number;
  photoHeight: number;
  /** Story body paragraphs, rendered beside the floated portrait. */
  children: ReactNode;
  /** Sections rendered after the story (podcast, share prompt, etc.). */
  after?: ReactNode;
}

/** Shared structure for every lived experience story page. */
const LivedExperienceLayout = ({
  story,
  photoWidth,
  photoHeight,
  children,
  after,
}: LivedExperienceLayoutProps) => (
  <div className="py-16">
    <div className="container mx-auto max-w-4xl px-4">
      <StoryNav currentSlug={story.slug} />

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {story.name} – {story.role}
      </h1>

      <p className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm italic leading-relaxed text-muted-foreground">
        Every dyslexic journey is different. These lived experiences provide personal perspectives from across the defence community. The views expressed are those of the individual and do not represent official MOD policy or the views of Dyslexia in Defence.
      </p>

      <article className="mt-8 text-base leading-relaxed text-foreground">
        <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-2/5">
          <img
            src={story.photoUrl}
            alt={story.photoAlt}
            width={photoWidth}
            height={photoHeight}
            loading="lazy"
            className="w-full rounded-2xl shadow-md"
          />
          <figcaption className="mt-2 text-xs italic text-muted-foreground">
            {story.photoAlt}.
          </figcaption>
        </figure>

        {children}

        <div className="clear-both" />
      </article>

      {after}
    </div>
  </div>
);

export default LivedExperienceLayout;
