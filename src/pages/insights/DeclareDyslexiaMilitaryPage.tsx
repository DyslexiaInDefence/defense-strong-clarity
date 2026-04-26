import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import PodcastInsight from "@/components/PodcastInsight";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "tick-the-box")!;

const DeclareDyslexiaMilitaryPage = () => (
  <InsightLayout
    title="Do I need to declare dyslexia when joining the military?"
    intent="joining"
    progressReassurance="You’re in the right place if you’re thinking about joining and unsure whether to mention dyslexia."
    preCtaLine="You don’t need to decide whether to declare today — start by speaking to people who already have."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      No. You do not need to declare dyslexia when joining the UK military, and you are not screened for it during recruitment. Dyslexia is not a barrier to joining or serving.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Choosing not to declare does not put you at a disadvantage in recruitment.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will, however, need to meet the same selection, training and performance standards as everyone else. If your dyslexia could affect how you carry out your duties, it is your responsibility to tell your chain of command.
    </p>

    <DecisionConfidenceBlock
      heading="Do I have to tell them I’m dyslexic?"
      intent="joining"
      bullets={[
        "No — there is no requirement to declare dyslexia at recruitment, and you’re not screened for it.",
        "It depends on whether your dyslexia affects your training or work — at that point, you do need to tell your chain of command.",
        "If you do declare with a diagnosis, you can ask for reasonable adjustments at selection and on courses.",
      ]}
      links={[
        { label: "Ask the Community", to: "/community" },
        { label: "Is dyslexia a barrier in the military?", to: "/insights/is-dyslexia-a-barrier-in-the-military-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What the policy actually says</h2>
      <p className="text-foreground leading-relaxed mb-4">
        The military’s policy on Specific Learning Differences (JSP 822, Vol 7) is clear:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>You are <strong>not required to declare</strong> dyslexia during recruitment.</li>
        <li>You are <strong>not screened</strong> for dyslexia as part of recruitment.</li>
        <li>Dyslexia is <strong>not a barrier</strong> to joining or serving — see{" "}
          <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            is dyslexia a barrier in the military
          </Link>
          .
        </li>
        <li>You must meet the same standards as anyone else.</li>
        <li>If your dyslexia <strong>could affect your training or work</strong>, it’s your responsibility to inform your chain of command.</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-4">
        Direct policy wording: <em>“There is no requirement for SP with SpLD to inform their line manager, trainer, or commander, if their condition does not affect their training or work.”</em> (JSP 822, Vol 7, Para 2.4.2)
      </p>
    </section>

    <PodcastInsight
      title="Hear from someone serving in the military with dyslexia"
      className="mb-10"
    />

    <IfThisSoundsLikeYou
      concerns={[
        "You’re weighing up whether declaring will help you get support — or quietly count against you.",
        "You’ve never had a formal diagnosis and don’t know if that matters at recruitment.",
        "You’re worried that mentioning dyslexia will follow you through your career record.",
      ]}
      reassurance="Most people who’ve been through it describe a calmer reality than they expected — declaring is a choice, not a trap."
    />

    <MidContentNudge intent="joining" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What this means in reality</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Around <strong>1 in 10 personnel are dyslexic</strong> — roughly 18,000 people serving today. Senior leaders openly discuss their dyslexia. Soldiers with 30+ years of service describe how dyslexia shaped their careers. Dyslexia in Defence is normal, not exceptional.
      </p>
      <p className="text-foreground leading-relaxed">
        The MOD has signed the British Dyslexia Association’s Dyslexia Friendly Workplace Pledge, and dyslexic personnel serve at every rank across all three services.
      </p>
    </section>

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support already exists</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Defence Dyslexia Network</strong> — over 2,000 serving personnel, every rank.</li>
        <li><strong>240+ ambassadors</strong> — across Army, Royal Navy and RAF.</li>
        <li><strong>Active internal forum</strong> — daily peer support.</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-4">
        For the full picture see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        .
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        You don’t need to declare dyslexia to join. You won’t be screened out for it. And if you do choose to share it — at any point — there’s a structured network ready to help.
      </p>
    </section>
  </InsightLayout>
);

export default DeclareDyslexiaMilitaryPage;
