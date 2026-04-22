import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import PodcastInsight from "@/components/PodcastInsight";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "army-attracts-dyslexics")!;

const ArmyDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the Army with dyslexia in the UK?"
    intent="joining"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Yes. Dyslexia is not a barrier to joining the British Army. You are not screened for it during recruitment, and dyslexic personnel serve at every rank across every branch.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the same selection, training and performance standards as everyone else. If you have a diagnosis, reasonable adjustments are available — extra time on written tests, assistive technology, and study support once in service.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What recruitment actually looks like</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Aptitude tests are standard for every applicant.</li>
        <li>If you have a formal diagnosis, declare it early so the team can arrange adjustments.</li>
        <li>Adjustments don’t lower the bar — they level the playing field.</li>
        <li>You don’t have to declare dyslexia to join. See{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia
          </Link>
          {" "}for the policy.
        </li>
      </ul>
    </section>

    <PodcastInsight
      title="Hear from a serving soldier with dyslexia"
      className="mb-10"
    />

    <MidContentNudge intent="joining" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexic people often suit the Army</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Around 1 in 10 personnel are dyslexic — and the Army has historically attracted people who didn’t enjoy a desk-bound education.
      </p>
    </section>

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support once you’re in</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Once serving, you can access assessments through your local Army Education Centre, peer support through the Defence Dyslexia Network, and reasonable adjustments on courses.
      </p>
      <p className="text-foreground leading-relaxed">
        For the full picture see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        {" "}and{" "}
        <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          is dyslexia a barrier in the military
        </Link>
        .
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        Dyslexia doesn’t hold people back from a long, successful Army career. Senior officers, long-serving soldiers and instructors across the Army are dyslexic. You’re in good company.
      </p>
    </section>
  </InsightLayout>
);

export default ArmyDyslexiaPage;
