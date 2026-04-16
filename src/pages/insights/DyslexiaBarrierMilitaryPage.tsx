import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "not-a-barrier")!;

const DyslexiaBarrierMilitaryPage = () => (
  <InsightLayout
    title="Is dyslexia a barrier to a military career?"
    intent="joining"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      No. Dyslexia is not a barrier to a military career in the UK. All three services accept dyslexic candidates and dyslexic personnel serve at every rank.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the same selection, training and performance standards as everyone else. Your dyslexia doesn’t disqualify you — your ability to do the role is what counts.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Policy vs reality</h2>
      <p className="text-foreground leading-relaxed mb-4">
        JSP 822 (Vol 7) is clear: dyslexia is not a barrier to joining or serving. You don’t need to declare it during recruitment, and you’re not screened for it.
      </p>
      <p className="text-foreground leading-relaxed">
        In reality, around 1 in 10 personnel are dyslexic — roughly 18,000 people serving today. Senior leaders, long-serving soldiers, instructors and specialists across the Armed Forces are dyslexic. It’s common, not exceptional.
      </p>
    </section>

    <MidContentNudge intent="joining" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Where the real challenges sit</h2>
      <p className="text-foreground leading-relaxed mb-4">
        The barrier isn’t dyslexia itself. It’s how some tasks are assessed — long written documents, customs-style briefs, timed handwritten essays — that don’t play to dyslexic strengths.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Selection tests are standard for everyone — adjustments are available with a diagnosis.</li>
        <li>Training and courses can be demanding on written work — support exists, but you have to ask.</li>
        <li>Career progression isn’t blocked — dyslexic personnel reach every rank, including senior officer.</li>
      </ul>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        If you’re thinking about a military career and you’re dyslexic — you’re not unusual, and you’re not at a disadvantage by default. Read more about the{" "}
        <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          disclosure rules
        </Link>{" "}
        and the{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          support available in service
        </Link>
        .
      </p>
    </section>
  </InsightLayout>
);

export default DyslexiaBarrierMilitaryPage;
