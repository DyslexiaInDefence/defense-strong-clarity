import { Link } from "react-router-dom";
import InsightLayout from "@/components/InsightLayout";
import MidContentNudge from "@/components/MidContentNudge";
import LivedExperienceBlock from "@/components/LivedExperienceBlock";
import PodcastInsight from "@/components/PodcastInsight";
import { livedExperienceSnippets } from "@/data/livedExperience";

const snippet = livedExperienceSnippets.find((s) => s.id === "not-a-barrier")!;

const NavyDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the Royal Navy with dyslexia in the UK?"
    intent="joining"
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Yes. Dyslexia does not prevent you from joining the Royal Navy. Dyslexic sailors, Royal Marines and officers serve at every rank and across every branch.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the same recruitment and performance standards as every candidate. Where you declare a diagnosis, reasonable adjustments are available from selection through to senior career stages.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What Royal Navy recruitment looks like</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>The Recruiting Test is standard for all applicants.</li>
        <li>If you have a formal diagnosis, declare it when you apply so adjustments can be arranged.</li>
        <li>Common adjustments include additional time on written elements.</li>
        <li>You don’t have to declare dyslexia to join — see{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia
          </Link>
          .
        </li>
      </ul>
    </section>

    <PodcastInsight
      title="Hear from someone serving in the military with dyslexia"
      className="mb-10"
    />

    <MidContentNudge intent="joining" />

    <LivedExperienceBlock snippet={snippet} variant="inline" className="mb-10" />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Common misconceptions</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>The Navy won’t take dyslexic recruits.</strong> No — they serve at every rank.</li>
        <li><strong>You can’t become an officer.</strong> No — many officers are dyslexic. The Admiralty Interview Board assesses leadership, not reading speed.</li>
        <li><strong>Submariners can’t be dyslexic.</strong> No blanket exclusion. Each role is assessed on its own requirements.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support in service</h2>
      <p className="text-foreground leading-relaxed">
        Naval education centres, divisional officers and the Defence Dyslexia Network are all available once in service. For the full picture see{" "}
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
        Dyslexic personnel are already a valued part of the Naval Service. Declare, use the adjustments available, and focus on what you bring to the fleet.
      </p>
    </section>
  </InsightLayout>
);

export default NavyDyslexiaPage;
