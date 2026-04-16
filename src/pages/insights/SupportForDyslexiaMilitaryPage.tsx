import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "coping-mechanisms")!;

const SupportForDyslexiaMilitaryPage = () => (
  <InsightLayout
    title="What support is available for dyslexia in the military?"
    intent="serving"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Dyslexia support in the UK military is structured and growing. You can access dyslexia assessments, workplace adjustments, peer networks, ambassadors and dedicated forums — across every service and rank.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      Most support sits inside the Defence Dyslexia Network and through your local Army Education Centre (AEC) or service equivalent. You don’t need a diagnosis to start asking for help.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">The main support mechanisms</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Defence Dyslexia Network</strong> — over 2,000 serving members across every rank, plus 240+ ambassadors covering Army, Royal Navy and RAF.</li>
        <li><strong>Ambassadors</strong> — peer-trained personnel who advise on careers, military courses and academic study.</li>
        <li><strong>Army Education Centres (AEC)</strong> — practical access point for assessment, study skills and assistive technology, with or without a diagnosis.</li>
        <li><strong>Active internal forum</strong> — a dyslexia-focused space inside Defence with daily posts on tips, tools and peer support.</li>
        <li><strong>Workplace adjustments</strong> — extra time on courses, assistive software, workplace needs assessments where appropriate.</li>
        <li><strong>Monthly virtual events and in-person sessions</strong> — open to anyone serving in Defence.</li>
      </ul>
    </section>

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
