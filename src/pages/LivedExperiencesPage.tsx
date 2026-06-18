import { livedStories } from "@/data/livedStories";
import StoryCard from "@/components/StoryCard";

const LivedExperiencesPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Lived Experiences
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Everyone's journey is different. These stories share personal experiences from across the defence community. They are not official guidance. They are individual perspectives intended to help others feel understood, informed and less alone.
          </p>
        </header>

        <section aria-labelledby="browse-stories">
          <h2
            id="browse-stories"
            className="mb-6 text-2xl font-bold text-foreground"
          >
            Browse Stories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {livedStories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LivedExperiencesPage;