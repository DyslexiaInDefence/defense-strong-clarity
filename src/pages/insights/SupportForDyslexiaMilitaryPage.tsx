import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "coping-mechanisms")!;

const SupportForDyslexiaMilitaryPage = () => (
  <InsightLayout
    title="What support is available for dyslexia in the military?"
    intent="serving"
    progressReassurance="You’re in the right place if you’re currently serving and trying to work out what support you can actually access."
    preCtaLine="You don’t need every answer first — start by talking to one person who’s already used the support."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Dyslexia support in the UK military is structured and growing. You can access dyslexia assessments, workplace adjustments, peer networks, ambassadors and dedicated forums — across every service and rank.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Asking for support does not put a mark against your career.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      Most support sits inside the Defence Dyslexia Network and through your chain of command and your service’s education or learning support teams (for example Army Education Centres in the Army). You don’t need a diagnosis to start asking for help.
    </p>

    <DecisionConfidenceBlock
      heading="What can I actually get — and how?"
      intent="serving"
      bullets={[
        "Yes — assessments, assistive tech, extra time on courses and peer support are all accessible to serving personnel.",
        "It depends partly on your unit and line manager — formal routes (your service’s education or learning support provision and the Defence Dyslexia Network) are the most reliable.",
        "In reality, the strongest support usually comes from peers who’ve already navigated the same courses and exams.",
      ]}
      links={[
        { label: "Join the Network", to: "/join" },
        { label: "What happens if dyslexia is identified during service?", to: "/insights/what-happens-if-dyslexia-is-identified-during-service-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">The main support mechanisms</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Defence Dyslexia Network</strong> — over 2,000 serving members across every rank, plus 240+ ambassadors covering Army, Royal Navy and RAF.</li>
        <li><strong>Ambassadors</strong> — peer-trained personnel who advise on careers, military courses and academic study.</li>
        <li><strong>Service education and learning support teams</strong> — practical access point for assessment, study skills and assistive technology, with or without a diagnosis (for example Army Education Centres in the Army).</li>
        <li><strong>Active internal forum</strong> — a dyslexia-focused space inside Defence with daily posts on tips, tools and peer support.</li>
        <li><strong>Workplace adjustments</strong> — extra time on courses, assistive software, workplace needs assessments where appropriate.</li>
        <li><strong>Monthly virtual events and in-person sessions</strong> — open to anyone serving in Defence.</li>
      </ul>
    </section>

    <IfThisSoundsLikeYou
      concerns={[
        "You’ve been told support exists but no one’s ever shown you how to ask for it.",
        "You’re unsure if asking for adjustments on a course will affect how you’re reported on.",
        "You don’t have a formal diagnosis and assume that closes most doors.",
      ]}
      reassurance="None of those things stop you starting — most of the people now using support began with a single conversation, not a diagnosis."
    />

    <MidContentNudge intent="serving" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What this looks like in practice</h2>
      <p className="text-foreground leading-relaxed mb-4">
        The honest picture: support exists, but it’s inconsistent and you usually have to ask for it. The strongest, most reliable support comes from peers — other dyslexic personnel who’ve been through the same courses and exams.
      </p>
      <p className="text-foreground leading-relaxed">
        For more on what to expect see{" "}
        <Link to="/insights/what-happens-if-dyslexia-is-identified-during-service-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what happens if dyslexia is identified during service
        </Link>
        {" "}or{" "}
        <Link to="/insights/neurodiversity-in-the-mod-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          neurodiversity in the MOD
        </Link>
        .
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        You’re not on your own, and you don’t need to have it all figured out before asking. Support sits across formal services and informal peer networks — start wherever feels easiest.
      </p>
    </section>
  </InsightLayout>
);

export default SupportForDyslexiaMilitaryPage;
