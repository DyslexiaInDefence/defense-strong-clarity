import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import { livedExperienceSnippets } from "@/data/livedExperience";
import AllenCitation from "@/components/AllenCitation";
import { Link } from "react-router-dom";

const featuredQuotes = livedExperienceSnippets.filter((s) =>
  ["five-times-harder", "support-disappeared", "soft-skills-vital"].includes(s.id),
);

const ServingWithDyslexiaArmyPage = () => (
  <InsightLayout
    title="Serving with dyslexia in the Army"
    eyebrow="Lived experience"
    intent="serving"
    progressReassurance="You’re in the right place if you’re currently serving and want to know what dyslexia in uniform actually feels like."
    preCtaLine="You don’t need to figure this out alone — start by hearing from someone who already has."
  >
    <p className="text-lg text-foreground leading-relaxed mb-8">
      A first-hand account from a former British Army officer on what it’s actually like to be dyslexic in uniform — the support that disappears, the coping mechanisms that carry you, and the strengths the Army quietly relies on.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-8 -mt-6">
      Being dyslexic in the Army does not mean carrying it on your own.
    </p>

    <DecisionConfidenceBlock
      heading="What does serving with dyslexia in the Army actually look like?"
      intent="serving"
      bullets={[
        "Yes — dyslexic personnel succeed across the Army at every rank, in every cap badge.",
        "It depends heavily on the course, the unit and the line manager — support is real but inconsistent in practice.",
        "In reality, peer connections and the Defence Dyslexia Network are often the most useful first step, before formal routes.",
      ]}
      links={[
        { label: "Join the Network", to: "/join" },
        { label: "What support is available?", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Who</h2>
      <p className="text-foreground leading-relaxed">
        <strong>Symon Smith</strong> is a former British Army officer and the founder of the Defence Dyslexia Network, established in March 2022. The network now has over 2,000 members and 240+ ambassadors across the Army, Royal Navy and RAF. He is also the founder of Dyslexia in Defence, the wider initiative supporting the entire UK defence ecosystem.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Journey</h2>
      <p className="text-foreground leading-relaxed mb-4">
        The journey started with his older brother. After a long fight by his parents to get the primary school to assess him, his brother received a diagnosis and went on to achieve a BA (Hons). That paved the way for an early diagnosis in Year 7, and structured support all the way through GCSEs, A Levels and a BSc.
      </p>
      <p className="text-foreground leading-relaxed mb-4">
        That changed at the gate of the Army. Educational support disappeared overnight, replaced by timed assessments with no extra time, handwritten essays, and short-notice written documents in customs styles. Like many dyslexic personnel, he chose to crack on rather than stand out — relying on coping mechanisms built up over years.
      </p>
      <p className="text-foreground leading-relaxed">
        Recognising that most dyslexic personnel weren’t as fortunate, he founded the Defence Dyslexia Network in 2022. Within two years it grew to over 2,000 members across every rank and service.
      </p>
    </section>

    <IfThisSoundsLikeYou
      concerns={[
        "You’re writing briefs at short notice and quietly burning out keeping up.",
        "You ‘ticked the box’ on diagnosis and have never used the support you’re entitled to.",
        "You feel like you’re working five times harder than peers and don’t want to admit it.",
      ]}
      reassurance="You’re not the only one — these are the most common patterns described by other dyslexic personnel still serving today."
    />

    <MidContentNudge intent="serving" />

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
        The need to ‘train as you fight’ is right. Writing briefs at short notice will always be required. But without proper support during courses, dyslexic personnel are set up to struggle when the same is asked of them back at unit. See{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        .
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Coping mechanisms</h2>
      <p className="text-foreground leading-relaxed mb-5">
        Coping mechanisms are personal. They’re built over years — and they cost effort every single day.
      </p>
      <LivedExperienceBlock
        snippet={featuredQuotes.find((q) => q.id === "five-times-harder")!}
        variant="inline"
        className="mb-5"
      />
      <p className="text-foreground leading-relaxed">
        Repetition doesn’t fix dyslexic challenges. The brain is wired differently. The work-around is structure, tools and support.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Success despite challenges</h2>
      <p className="text-foreground leading-relaxed mb-5">
        Dyslexic personnel succeed across the Army at every rank. Senior leaders openly discuss their dyslexia. Soldiers with 30+ years of service describe how dyslexia shaped their careers.
      </p>
      <LivedExperienceBlock
        snippet={featuredQuotes.find((q) => q.id === "soft-skills-vital")!}
        variant="inline"
      />
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Key themes</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Support exists — but isn’t consistent.</strong> Especially during courses.</li>
        <li><strong>Coping mechanisms carry people through.</strong> They cost effort and they’re personal.</li>
        <li><strong>Dyslexic strengths are operational strengths.</strong> Leadership, problem-solving, communication.</li>
        <li><strong>Culture matters.</strong> Many personnel still ‘tick the box’ rather than ask for help.</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-4">
        That last point isn’t unique to the Army. Research on neurodiverse UK veterans describes the same habit of masking traits to fit in — which often reduces access to the support people are entitled to <AllenCitation />.
      </p>
    </section>
  </InsightLayout>
);

export default ServingWithDyslexiaArmyPage;
