import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";
import { livedExperienceSnippets } from "@/data/livedExperience";
import AllenCitation from "@/components/AllenCitation";

const snippet = livedExperienceSnippets.find((s) => s.id === "judge-fish-tree")!;

const NeurodiversityMODPage = () => (
  <InsightLayout
    title="Neurodiversity in the MOD: what you need to know"
    intent="serving"
    progressReassurance="You’re in the right place if you’re neurodiverse and working in or alongside Defence."
    preCtaLine="You don’t need to have it all figured out — start with the path that feels easiest."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      The Ministry of Defence recognises neurodiversity as a workforce strength. Dyslexia, ADHD, autism and other neurodiverse conditions are present across the Armed Forces and Civil Service.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Being neurodiverse does not limit your career inside Defence.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      The MOD has signed the British Dyslexia Association Dyslexia Friendly Workplace Pledge and achieved BDA Bronze recognition. Support is structured, accessible, and improving.
    </p>

    <DecisionConfidenceBlock
      heading="Where does neurodiversity actually sit in the MOD?"
      intent="serving"
      bullets={[
        "Yes — neurodiversity is formally recognised, with BDA Bronze recognition and active D&I and staff networks.",
        "It depends on which part of Defence you’re in — Armed Forces, Civil Service, contractors and industry partners are all covered, but routes differ.",
        "In reality, support is real and improving — but most people get the most value from peer networks alongside the formal channels.",
      ]}
      links={[
        { label: "Join the Network", to: "/join" },
        { label: "What support is available?", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What neurodiversity means in Defence</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Neurodiversity refers to natural variation in how people think, learn and process information. In Defence this includes dyslexia, dyspraxia, ADHD, autism and dyscalculia.
      </p>
      <p className="text-foreground leading-relaxed">
        These are differences, not deficits. In a sector that relies on strategic thinking, pattern recognition and rapid problem-solving, neurodiverse minds are operationally valuable.
      </p>
      <p className="text-foreground leading-relaxed mt-4">
        Research on neurodiverse UK military veterans highlights the same point — the combined identity of being a veteran and neurodiverse can be a real strength when workplaces are set up to recognise it <AllenCitation />.
      </p>
    </section>

    <IfThisSoundsLikeYou
      concerns={[
        "You’re unsure whether neurodiversity support in the MOD applies to you as a contractor or civil servant.",
        "You’ve seen the policy but never seen anyone visibly use the support.",
        "You’re worried that asking about adjustments will quietly mark you out from peers.",
      ]}
      reassurance="None of these things shut the door — most people who now use neurodiversity support started by quietly asking one question."
    />

    <MidContentNudge intent="serving" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support and adjustments available</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>Text-to-speech and speech-to-text software, screen readers, coloured overlays.</li>
        <li>Noise-cancelling headphones, flexible working patterns.</li>
        <li>Additional time for exams and assessments.</li>
        <li>Workplace needs assessments through line management or occupational health.</li>
        <li>Internal neurodiversity staff networks for peer support — military and civilian.</li>
      </ul>
      <p className="text-foreground leading-relaxed mt-4">
        For more on the practical picture see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available for dyslexia in the military
        </Link>
        {" "}and{" "}
        <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          is dyslexia a barrier in the military
        </Link>
        .
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Common misconceptions</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>The MOD doesn’t take neurodiversity seriously.</strong> BDA Bronze recognition and dedicated D&I teams say otherwise.</li>
        <li><strong>Neurodiverse personnel can’t reach senior positions.</strong> They serve at senior ranks and grades across the MOD.</li>
        <li><strong>Only military personnel are supported.</strong> Civil servants, contractors and industry partners are also covered.</li>
      </ul>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        If you’re neurodiverse and working in or considering Defence, support exists, it’s accessible, and it’s improving.
      </p>
    </section>
  </InsightLayout>
);

export default NeurodiversityMODPage;
