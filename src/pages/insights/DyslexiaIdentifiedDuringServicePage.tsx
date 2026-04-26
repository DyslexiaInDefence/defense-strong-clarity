import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import { livedExperienceSnippets } from "@/data/livedExperience";
import AllenCitation from "@/components/AllenCitation";

const snippet = livedExperienceSnippets.find((s) => s.id === "tick-the-box")!;

const DyslexiaIdentifiedDuringServicePage = () => (
  <InsightLayout
    title="What happens if dyslexia is identified during service?"
    intent="serving"
    progressReassurance="You’re in the right place if you’re currently serving and dyslexia has just come into the picture."
    preCtaLine="You don’t need to disclose anything today — start by talking to someone who’s already been through it."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      If dyslexia is identified while you’re serving, nothing automatically changes about your career. You don’t have to declare it unless it affects your training or work, and you can’t be discharged for being dyslexic.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Nothing automatically changes about your role, posting or career path.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      What does change is access. Once it’s known, you can ask for assessment, adjustments and peer support through your chain of command, the Defence Dyslexia Network, or your service’s education or learning support provision.
    </p>

    <DecisionConfidenceBlock
      heading="What actually happens if dyslexia comes up mid-career?"
      intent="serving"
      bullets={[
        "Nothing automatic — you can’t be discharged or downgraded simply because you’re dyslexic.",
        "It depends on whether it affects your training or duties — at that point, you do need to inform your chain of command.",
        "In reality, identification opens access to assessment, adjustments and peer support — it doesn’t close doors.",
      ]}
      links={[
        { label: "Join the Network", to: "/join" },
        { label: "What support is available?", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What the policy says — and the process</h2>
      <p className="text-foreground leading-relaxed mb-4">
        JSP 822 (Vol 7) is the military’s policy on Specific Learning Differences. The key points if dyslexia is identified mid-career:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>You are <strong>not required</strong> to inform your line manager, trainer or commander if it doesn’t affect your training or work.</li>
        <li>If it does affect your duties, it’s your responsibility to tell your chain of command.</li>
        <li>You can request a dyslexia assessment through your chain of command and your service’s education or learning support provision (for example Army Education Centres in the Army).</li>
        <li>Reasonable adjustments — extra time, assistive technology, workplace needs assessments — can be put in place.</li>
        <li>Identification is not grounds for discharge or career limitation.</li>
      </ul>
    </section>

    <IfThisSoundsLikeYou
      concerns={[
        "You’re weighing up whether to formally raise it or just keep cracking on as you have been.",
        "You’re worried your line manager will treat you differently if they know.",
        "You’re unsure whether identification will sit on your record and follow you to the next posting.",
      ]}
      reassurance="The people who’ve been through this describe a quieter reality than they expected — most kept their role and gained more support, not less."
    />

    <MidContentNudge intent="serving" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What this means in practice</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Most personnel identified mid-career describe the same pattern. There’s a moment of hesitation about whether to say anything. Many don’t — they crack on, tick the box and rely on coping mechanisms.
      </p>
      <p className="text-foreground leading-relaxed mb-4">
        Research on neurodiverse UK veterans describes the same instinct to mask traits to fit expectations — which often quietly reduces access to the support people are entitled to <AllenCitation />.
      </p>
      <p className="text-foreground leading-relaxed mb-4">
        Those who do speak up tend to find the help is real, but patchy. Course support can be strong; unit support depends heavily on the line manager. Peer support is often the most useful first step.
      </p>
      <p className="text-foreground leading-relaxed">
        For the wider question of disclosure see{" "}
        <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          do I need to declare dyslexia
        </Link>
        , and for help on offer see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        .
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        Identification doesn’t end careers — it usually opens doors. You stay in control of when, how and to whom you share it.
      </p>
    </section>
  </InsightLayout>
);

export default DyslexiaIdentifiedDuringServicePage;
