import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import PodcastInsight from "@/components/PodcastInsight";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "army-attracts-dyslexics")!;

const ArmyDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the Army with dyslexia in the UK?"
    intent="joining"
    progressReassurance="You’re in the right place if you’re thinking about joining the Army with dyslexia."
    preCtaLine="You don’t need to decide everything now — start with the step that feels easiest."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Yes. Dyslexia is not a barrier to joining the British Army. You are not screened for it during recruitment, and dyslexic personnel serve at every rank across every branch.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Having dyslexia does not stop you joining the Army.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the same selection, training and performance standards as everyone else. If you have a diagnosis, reasonable adjustments are available — extra time on written tests, assistive technology, and study support once in service.
    </p>

    <DecisionConfidenceBlock
      heading="Can I actually join the Army with dyslexia?"
      intent="joining"
      bullets={[
        "Yes — dyslexia is not a disqualifier and you are not screened for it at recruitment.",
        "It depends on meeting the same aptitude, fitness and medical standards as every other applicant — not on your diagnosis.",
        "If you declare a diagnosis, you can ask for reasonable adjustments at selection and on courses once you’re in.",
      ]}
      links={[
        { label: "Ask the Community", to: "/community" },
        { label: "Do I need to declare dyslexia?", to: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" },
      ]}
    />

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

    <IfThisSoundsLikeYou
      concerns={[
        "You’re worried the aptitude tests will catch you out because of your reading speed.",
        "You don’t know whether to mention dyslexia at the recruiting office or stay quiet.",
        "You’re afraid that admitting you’re dyslexic will quietly count against you in selection.",
      ]}
      reassurance="None of those things stop people joining — they’re the most common worries from applicants who go on to pass."
    />

    <MidContentNudge intent="joining" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexic people often suit the Army</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Around 1 in 10 personnel are dyslexic — and the Army has historically attracted people who didn’t enjoy a desk-bound education.
      </p>
      <p className="text-foreground leading-relaxed">
        The MOD has signed the British Dyslexia Association’s Dyslexia Friendly Workplace Pledge, and dyslexic personnel serve at every rank across all three services.
      </p>
    </section>

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support once you’re in</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Once serving, you can access assessments through your local Army Education Centre, peer support through the Defence Dyslexia Network, and reasonable adjustments on courses.
      </p>
      <p className="text-foreground leading-relaxed mb-4">
        Experiences can vary between units and roles, but the support is there if you know where to look — and the Defence Dyslexia Network is one of the most effective ways to find it.
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
