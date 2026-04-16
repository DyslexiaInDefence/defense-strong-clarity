import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "strengths-match")!;

const RoyalSignalsDyslexiaPage = () => (
  <InsightLayout
    title="Why the Royal Signals is a strong fit for dyslexic individuals"
    intent="joining"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      The Royal Signals is a strong fit for dyslexic individuals because it relies on the exact strengths dyslexic minds tend to bring — complex problem-solving, analytical thinking, communication and adaptability.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      It’s the British Army’s communications, IT and cyber Corps. The work is technical, fast-moving and ambiguous — and that’s where dyslexic thinking earns its place.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexia fits the Royal Signals</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Complex problem-solving</strong> — networks fail in unfamiliar ways; dyslexic thinkers often spot non-obvious solutions.</li>
        <li><strong>Analytical thinking and innovation</strong> — pattern recognition across noisy, incomplete information.</li>
        <li><strong>Communication and leadership</strong> — translating technical reality into clear direction for command teams.</li>
        <li><strong>Adaptability</strong> — adjusting fast when the environment, the kit or the threat changes.</li>
        <li><strong>Creativity and initiative</strong> — building work-arounds when the standard answer doesn’t exist.</li>
      </ul>
    </section>

    <MidContentNudge intent="joining" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">The reality — and the role of support</h2>
      <p className="text-foreground leading-relaxed mb-4">
        Fit doesn’t mean frictionless. The Royal Signals still requires written briefs, custom-style documents and timed assessments — typically the hardest areas for dyslexic personnel.
      </p>
      <p className="text-foreground leading-relaxed">
        The answer isn’t to lower the standard. It’s to make sure the support is genuinely there. See{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available for dyslexia in the military
        </Link>
        {" "}and{" "}
        <Link to="/insights/can-you-join-army-with-dyslexia-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          can you join the Army with dyslexia
        </Link>
        .
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Future relevance</h2>
      <p className="text-foreground leading-relaxed mb-4">
        The complexity facing the Royal Signals is only growing. Cyber, electromagnetic activity, contested communications and information warfare don’t reward following a process — they reward thinking differently and quickly.
      </p>
      <p className="text-foreground leading-relaxed">
        That’s why dyslexic minds are likely to be over-represented among the people solving the Corps’ hardest future problems.
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        If you’re dyslexic and considering the Royal Signals — or any technical Corps — the strengths you bring are the strengths the role needs.
      </p>
    </section>
  </InsightLayout>
);

export default RoyalSignalsDyslexiaPage;
