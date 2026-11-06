import { Link } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";
import LivedExperienceLayout from "@/components/LivedExperienceLayout";
import { getStory } from "@/data/livedStories";

const PARAGRAPHS = [
  "I joined the British Army in 1997 and served for eight and a half years in the Royal Army Medical Corps as an Environmental Health Technician. I loved my time in the Army and I'm incredibly proud to have served. It gave me some amazing experiences, friendships and opportunities, but looking back now, there were also things I found really difficult that I simply didn't understand at the time.",
  "One of my strongest memories from basic training is struggling to remember my Army number. It sounds like such a simple thing, but I just couldn't seem to retain it. I was absolutely terrified of being asked for it and not knowing the answer. I was a young recruit, and in my mind, forgetting something like that meant I'd get into trouble, be shouted at or potentially even kicked out.",
  "I spent so much time worrying about getting things wrong. Directions were difficult, as was processing verbal instructions, particularly when there was a lot of information to take in. I could be listening really carefully and trying my hardest to remember everything, but it just wouldn't always stick.",
  "When I moved into trade training, things became even more challenging. There was so much information to learn and retain, and I remember looking around at everyone else, thinking they all seemed to be managing really well. They were taking notes, completing tests and seemingly absorbing everything. I felt that the only way I could learn was to try to memorise things almost word for word.",
  "My handwriting was another issue. I was regularly criticised for the quality of it, which I found really embarrassing. No matter how hard I tried, it never seemed to be good enough.",
  "All of this made me question my intelligence. I genuinely believed I wasn't as bright as the people around me. I couldn't understand why I struggled with things that appeared to come so easily to everyone else.",
  "I don't want to give the impression that my Army experience was all negative, because it absolutely wasn't. I had a brilliant time in many ways and learnt so much. But alongside that, I was often frightened of getting into trouble, making mistakes or being seen as incapable. I didn't have an explanation for why certain things were so difficult, so I assumed it was something I wasn't doing well enough.",
  "I left the Army in 2005 and went on to build a career in housing, health and safety, building safety and fire safety, eventually progressing into senior leadership roles. I've managed teams, led complex programmes and worked in some very demanding environments. Yet I still found certain everyday things difficult, particularly remembering information, processing instructions and working with numbers.",
  "It wasn't until my mid-forties that I was diagnosed with ADHD, dyslexia, dyspraxia and dyscalculia.",
  "Receiving those diagnoses brought up a lot of emotions. Initially, there was this enormous 'aha' moment. Suddenly, so much of my life made sense. I could look back at my school years, my time in the Army and my career and begin to understand why I'd experienced some of those difficulties.",
  "But there was also a real sadness and sense of grief. I found myself thinking about what potentially could have been different if somebody had recognised it earlier. What support might I have received? Would I have learnt differently? Would I have felt more confident? Would I have spent so many years believing I wasn't intelligent enough?",
  "I don't regret joining the Army, and I certainly don't want my diagnoses to define my service or everything I've achieved since. But I do wish I'd understood myself better when I was younger.",
  "I think about how many other people might have similar experiences, particularly in an environment where you're expected to learn quickly, follow instructions and remember information. I wonder how many are quietly struggling, feeling embarrassed or frightened to ask for help because they don't want to be seen as incapable.",
  "I also think there's a real opportunity to help leaders and instructors recognise that someone struggling to retain information or complete a task doesn't necessarily mean they aren't trying or aren't capable. Sometimes they simply need information presented differently or a little more time to process it.",
  "My diagnoses haven't made those difficulties disappear, but they've helped me understand myself and find ways of working that suit me. They've also influenced how I approach leadership and the coaching work I now do.",
  "I'm sharing my experience because I know how much it would have meant to that young soldier in basic training to understand why she was finding certain things so difficult.",
  "For me, raising awareness isn't just about helping people recognise neurodivergence. It's about what happens next. It's about creating environments where people can learn, work and contribute in ways that recognise their differences. Sometimes that might mean clearer written instructions, breaking information into smaller steps or checking that someone has understood what's being asked of them. These aren't necessarily complicated changes, but they can make an enormous difference to someone's confidence and ability to succeed.",
  "I hope that by talking more openly about neurodivergence, we can help others recognise their own experiences earlier and feel more comfortable asking for the understanding and support they need."
];

const LizOliverPage = () => {
  const story = getStory("liz-oliver-british-army-veteran");
  if (!story) return null;

  return (
    <LivedExperienceLayout
      story={story}
      heading="Liz Oliver"
      subheading="Former Royal Army Medical Corps, Environmental Health Technician"
      photoWidth={675}
      photoHeight={1200}
      after={
        <aside className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground">Share Your Story</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            <Link to="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">
              Want to share your own story? Get in touch.
            </Link>
          </p>
          <Link
            to="/lived-experiences"
            className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" aria-hidden="true" />
            Back to Lived Experiences
          </Link>
        </aside>
      }
    >
      <h2 className="mb-4 text-2xl font-bold text-foreground">My experience of neurodivergence in the Army</h2>
      {PARAGRAPHS.map((paragraph, index) => (
        <p key={paragraph.slice(0, 40)} className={index === 0 ? undefined : "mt-4"}>{paragraph}</p>
      ))}
    </LivedExperienceLayout>
  );
};

export default LizOliverPage;
