import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "strengths-match")!;

const RAFDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the RAF with dyslexia in the UK?"
    intent="joining"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Yes. Dyslexia does not prevent you from joining the Royal Air Force. Dyslexic personnel serve across engineering, logistics, intelligence, cyber and aircrew roles.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the same standards as every applicant. Where you declare a diagnosis, reasonable adjustments — extra time, assistive technology, study support — are available throughout your career.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What RAF recruitment looks like</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>The Airman/Airwoman Selection Test (AST) is standard for all candidates.</li>
        <li>Declare dyslexia early and provide a diagnostic report so adjustments can be arranged.</li>
        <li>Adjustments commonly include extra time on written elements.</li>
        <li>Disclosure isn’t a requirement — read{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia
          </Link>
          {" "}for the rules.
        </li>
      </ul>
    </section>

    <MidContentNudge intent="joining" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexic minds suit RAF roles</h2>
      <p className="text-foreground leading-relaxed">
        Many RAF roles reward problem-solving, spatial reasoning and analytical thinking — strengths dyslexic personnel often bring naturally.
      </p>
    </section>

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Common misconceptions</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Dyslexia stops you flying.</strong> No — aircrew suitability is assessed individually on functional ability.</li>
        <li><strong>You’ll struggle with technical training.</strong> No — many dyslexic personnel excel in technical and engineering trades.</li>
        <li><strong>The RAF doesn’t understand dyslexia.</strong> Support is real and improving — see{" "}
          <Link to="/insights/neurodiversity-in-the-mod-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            neurodiversity in the MOD
          </Link>
          .
        </li>
      </ul>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        Dyslexia and a successful RAF career go hand in hand. Declare, take the support you’re entitled to, and focus on your strengths.
      </p>
    </section>
  </InsightLayout>
);

export default RAFDyslexiaPage;
