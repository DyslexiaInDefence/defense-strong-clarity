import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import LivedExperienceLayout from "@/components/LivedExperienceLayout";
import { getStory } from "@/data/livedStories";

const KirkDavisPage = () => {
  const story = getStory("staff-sergeant-kirk-davis-british-army")!;

  return (
    <LivedExperienceLayout
      story={story}
      photoWidth={900}
      photoHeight={1259}
      after={
        <>
        <section className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8" aria-label="Kirk's podcast episode">
          <h2 className="text-2xl font-bold text-foreground">Hear Kirk's Story</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Listen to Kirk discuss dyslexia, belonging, imposter syndrome and neurodiversity in Defence in his own words.
          </p>
          <div className="mt-5 overflow-hidden rounded-xl">
            <iframe
              src="https://open.spotify.com/embed/episode/2zNd3YpRNMt14rNU3kCqpR?utm_source=generator&theme=0"
              width="100%"
              height="232"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Kirk Davis — Spotify episode"
              className="w-full"
            />
          </div>
          <a
            href="https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Listen on Spotify →
          </a>
        </section>

        <aside className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground">Share Your Story</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Lived experiences help others realise they are not alone. If you would like to share your own story, please contact Dyslexia in Defence.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact Us
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
        </>
      }
    >
          <p>
            I joined the Army in 2007 as a chef. Like many people with dyslexia, my journey has not always been straightforward.
          </p>

          <p className="mt-4">
            For a long time, I did not fully understand why certain things felt harder for me than they seemed to for others. Reading, writing, admin, emails, courses, quick processing, and remembering information under pressure could all feel overwhelming at times. I found ways to get through it, but a lot of that came from masking, working longer hours, and trying not to let people see where I was struggling.
          </p>

          <p className="mt-4">
            Looking back, I think one of the biggest things for me was belonging.
          </p>

          <p className="mt-4">
            I do not think I ever truly felt that I belonged during Phase One training. I got through it, like most people do, but I carried that feeling of having to prove myself for years afterwards. When you already process information differently, and you do not feel safe enough to say that, it can easily turn into self-doubt.
          </p>

          <p className="mt-4">
            That is where a lot of my imposter syndrome came from. Even after years of service, different roles, deployments, qualifications, and achievements, I have still had that voice in my head asking whether I am good enough or whether I deserve to be in the room. I 100% know that imposter syndrome is something I have had to find tools to manage.
          </p>

          <p className="mt-4">
            For me, those tools have been evidence, reflection, trusted people, and learning to challenge the voice that says I am not capable. I have had to remind myself that I have served as a chef, section commander, Phase One PTI, and events manager. I have completed a Master's degree in Creative Events Management, and my research focused on dyslexia, neurodivergence, Defence training, and inclusive event design.
          </p>

          <p className="mt-4">
            None of that means dyslexia has disappeared. It still affects how I work, how I process information, and how I manage certain tasks. But I have also learned that dyslexia brings strengths. It has helped me think differently, solve problems under pressure, see the bigger picture, and connect with people who may also be struggling quietly.
          </p>

          <p className="mt-4">
            This is why belonging from day one matters so much.
          </p>

          <p className="mt-4">
            If people feel seen, understood, and supported early, they are more likely to ask for help, use the right tools, and show what they are capable of. If they do not, they can spend years masking, overworking, and doubting themselves.
          </p>

          <p className="mt-4">
            That is one of the reasons I care so much about the Defence Dyslexia Network. For me, it is not just about dyslexia support. It is about creating a space where serving personnel, veterans, civil servants, line managers, instructors, and colleagues can better understand neurodivergence across Defence.
          </p>

          <p className="mt-4">
            I do not want others to feel like they have to struggle in silence or wait until they reach crisis point before support is taken seriously.
          </p>

          <p className="mt-4">
            Dyslexia has not stopped me having a successful Army career. But the right understanding, the right support, and the right environment have made a massive difference.
          </p>

          <p className="mt-4">
            If sharing my story helps one person feel less alone, or helps one leader, instructor, or colleague understand the importance of belonging from day one, then it is worth it.
          </p>

    </LivedExperienceLayout>
  );
};

export default KirkDavisPage;
