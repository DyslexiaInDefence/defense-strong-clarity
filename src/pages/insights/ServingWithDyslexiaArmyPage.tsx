import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const featuredQuotes = livedExperienceSnippets.filter((s) =>
  ["five-times-harder", "support-disappeared", "soft-skills-vital"].includes(s.id),
);

const ServingWithDyslexiaArmyPage = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
        Lived experience
      </p>
      <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
        Serving with dyslexia in the Army
      </h1>

      <p className="text-lg text-foreground leading-relaxed mb-8">
        A first-hand account from a serving British Army officer on what it’s actually like to be dyslexic in uniform — the support that disappears, the coping mechanisms that carry you, and the strengths the Army quietly relies on.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Who</h2>
        <p className="text-foreground leading-relaxed">
          <strong>Major Symon Smith</strong> is a serving British Army officer and the founder of the Defence Dyslexia Network, established in March 2022. The network now has over 2,000 members and 240+ ambassadors across the Army, Royal Navy and RAF. He is also the founder of Dyslexia in Defence, the wider initiative supporting the entire UK defence ecosystem.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Journey</h2>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            The journey started with his older brother. After a long fight by his parents to get the primary school to assess him, his brother received a diagnosis and went on to achieve a BA (Hons). That paved the way for an early diagnosis in Year 7, and structured support all the way through GCSEs, A Levels and a BSc.
          </p>
          <p>
            That changed at the gate of the Army. Educational support disappeared overnight, replaced by timed assessments with no extra time, handwritten essays, and short-notice written documents in customs styles. Like many dyslexic personnel, he chose to crack on rather than stand out — relying on coping mechanisms built up over years.
          </p>
          <p>
            Recognising that most dyslexic personnel weren’t as fortunate, he founded the Defence Dyslexia Network in 2022. Within two years it grew to over 2,000 members across every rank and service, with 240+ ambassadors providing peer support on careers, courses and academic study.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Support — and the lack of it</h2>
        <p className="text-foreground leading-relaxed mb-5">
          Support inside the Army exists, but it’s inconsistent. Education through to university is structured. Once in service, the picture changes:
        </p>
        <LivedExperienceBlock
          snippet={featuredQuotes.find((q) => q.id === "support-disappeared")!}
          variant="inline"
          className="mb-5"
        />
        <p className="text-foreground leading-relaxed">
          The need to ‘train as you fight’ is right. Writing briefs at short notice will always be required. But without proper support during courses, dyslexic personnel are set up to struggle when the same is asked of them back at unit.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Coping mechanisms</h2>
        <p className="text-foreground leading-relaxed mb-5">
          Coping mechanisms are personal. They’re built over years — and they cost effort every single day. The honest reality:
        </p>
        <LivedExperienceBlock
          snippet={featuredQuotes.find((q) => q.id === "five-times-harder")!}
          variant="inline"
          className="mb-5"
        />
        <p className="text-foreground leading-relaxed">
          Repetition doesn’t fix dyslexic challenges. The brain is wired differently. The work-around is structure, tools, and support — not pretending the difference isn’t there.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Success despite challenges</h2>
        <p className="text-foreground leading-relaxed mb-5">
          Dyslexic personnel succeed across the Army at every rank. Senior leaders openly discuss their dyslexia. Soldiers with 30+ years of service describe how dyslexia shaped their careers. Some complete PhDs in service; others become teachers and instructors. The closing point of the founder’s account:
        </p>
        <LivedExperienceBlock
          snippet={featuredQuotes.find((q) => q.id === "soft-skills-vital")!}
          variant="inline"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Key themes</h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
          <li><strong>Support exists — but isn’t consistent.</strong> Especially during military courses.</li>
          <li><strong>Coping mechanisms carry people through.</strong> They cost effort and they’re personal.</li>
          <li><strong>Dyslexic strengths are operational strengths.</strong> Leadership, problem-solving, communication.</li>
          <li><strong>Culture matters.</strong> Many personnel still ‘tick the box’ rather than ask for help.</li>
        </ul>
      </section>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="text-2xl font-bold text-foreground mb-3">Still unsure what to do next?</h2>
        <p className="text-foreground leading-relaxed mb-5">
          The quickest way to get clarity is to speak to people who’ve been through it.
        </p>
        <ul className="space-y-3 text-foreground leading-relaxed">
          <li>
            →{" "}
            <Link to="/community" className="font-semibold text-primary underline-offset-4 hover:underline">
              Ask the Community
            </Link>{" "}
            – get real answers from serving and former personnel
          </li>
          <li>
            →{" "}
            <Link to="/join" className="font-semibold text-primary underline-offset-4 hover:underline">
              Join the Network
            </Link>{" "}
            – connect with others and access support
          </li>
          <li>
            →{" "}
            <Link to="/insights" className="font-semibold text-primary underline-offset-4 hover:underline">
              Explore Insights
            </Link>{" "}
            – understand what to expect next
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-4">
        <Link to="/community">
          <Button className="gap-2">
            Ask the Community <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link to="/insights">
          <Button variant="outline" className="gap-2">
            Explore Insights
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default ServingWithDyslexiaArmyPage;
