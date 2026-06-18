import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import StoryNav from "@/components/StoryNav";
import { getStory } from "@/data/livedStories";

const SymonSmithPage = () => {
  const story = getStory("symon-smith-british-army-veteran")!;

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <StoryNav currentSlug={story.slug} />

        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Symon Smith – British Army Veteran
        </h1>

        <p className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm italic leading-relaxed text-muted-foreground">
          Every dyslexic journey is different. These lived experiences provide personal perspectives from across the defence community. The views expressed are those of the individual and do not represent official MOD policy or the views of Dyslexia in Defence.
        </p>

        <article className="mt-8 text-base leading-relaxed text-foreground">
          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-2/5">
            <img
              src={story.photoUrl}
              alt={story.photoAlt}
              width={900}
              height={599}
              loading="lazy"
              className="w-full rounded-2xl shadow-md"
            />
            <figcaption className="mt-2 text-xs italic text-muted-foreground">
              {story.photoAlt}.
            </figcaption>
          </figure>

          <p>
            My dyslexia journey strangely starts with my brother as his diagnosis prompted mine. He was diagnosed after a long arduous battle with the primary school to provide a test so he could get the support he deserved. After a huge amount of drive from my parents, my brother managed to receive a diagnosis and then support throughout his education that saw him reach the amazing achievement of a BA (Hons).
          </p>

          <p className="mt-4">
            Because of this hard work my family did, it set the conditions for the huge amounts of support I received throughout my education from primary school through to and including University. This has made a massive difference to me achieving GCSE's, A Levels, a BSc and most recently an MSc! I was lucky in two respects. I didn't have to bear the brunt of the fight with the education system and my dyslexia affects me to a lower level than my brother so is hugely different.
          </p>

          <p className="mt-4">
            Once I left the education system and started my military (Army) career though all that support left. It was a move to timed assessments (with no extra time), handwritten essays and short notice written documents in customs styles. There may have been support in place on military educational courses but not wanting to be "that guy" it was just easier to get on with it and tick the box.
          </p>

          <p className="mt-4">
            I think the need to "train as you fight" is essential and the ability to write briefs at short notice in customs styles will always (rightly) be required. But without the support during these courses then those with dyslexia will be doomed to failure when this ask is required of them.
          </p>

          <p className="mt-4">
            Since leaving the military in 2025 I wanted to keep supporting those in the MOD who are Dyslexic as well veterans and those aspiring to join. This led me to setting up{" "}
            <a
              href="https://dyslexiaindefence.com/"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              https://dyslexiaindefence.com/
            </a>{" "}
            to inspire the future generations to know that the MOD now harnesses those with dyslexia.
          </p>

          <div className="clear-both" />
        </article>

        <section className="mt-12" aria-label="Further reading">
          <h2 className="text-2xl font-bold text-foreground">Further Reading</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Optional further reading — articles Symon has contributed to on dyslexia, neurodiversity and Defence.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <a
              href="https://www.bcs.org/articles-opinion-and-research/how-dyslexic-thinking-strengthens-cyber-security/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary hover:bg-muted/30"
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                BCS — The Chartered Institute for IT
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary">
                How Dyslexic Thinking Strengthens Cyber Security
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                How dyslexic thinking can be an advantage in cyber security through problem solving, pattern recognition and alternative thinking.
              </p>
            </a>
            <a
              href="/documents/dyslexia-article.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary hover:bg-muted/30"
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <FileText className="h-4 w-4" aria-hidden="true" />
                British Dyslexia Association
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary">
                British Dyslexia Association Feature
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Formal recognition of dyslexia within a military context, published in the BDA magazine.
              </p>
            </a>
            <a
              href="/documents/rsi-journal-winter-23.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary hover:bg-muted/30 sm:col-span-2"
            >
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Royal Signals Institute Journal — Winter 2023
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary">
                Dyslexia within the Royal Corps of Signals
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Professional and regimental level discussion of dyslexia within the Royal Corps of Signals.
              </p>
            </a>
          </div>
        </section>

        <aside className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground">Share Your Story</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Lived experiences help others realise they are not alone. If you would like to share your own story, please contact Dyslexia in Defence.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact Us
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default SymonSmithPage;