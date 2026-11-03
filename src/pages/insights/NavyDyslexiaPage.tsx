import { Link } from "@/lib/router-compat";
import InsightLayout from "@/components/InsightLayout";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";

const NavyDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the Royal Navy with dyslexia in the UK?"
    intent="joining"
    progressReassurance="You’re in the right place if you’re thinking about joining the Royal Navy with dyslexia."
    preCtaLine="You don’t need to decide everything now — start with the step that feels easiest."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Ask your recruiter what the application asks, so you know what to expect.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the required standards. Ask your education staff about feasible support under JSP 822 Vol 7.
    </p>

    <DecisionConfidenceBlock
      heading="Can I actually join the Royal Navy with dyslexia?"
      intent="joining"
      bullets={[
        "Specific learning difficulties are not in themselves a bar to recruitment or Service if the required standards are met.",
        "Ask your recruiter what the application asks, so you know what to expect.",
        "Ask your education staff what feasible support is available under JSP 822 Vol 7.",
      ]}
      links={[
        { label: "Ask the Community", to: "/community" },
        { label: "Do I need to declare dyslexia?", to: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" },
      ]}
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">What Royal Navy recruitment looks like</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>You need to meet the required standards.</li>
        <li>Ask your recruiter what the application asks.</li>
        <li>Ask education staff about feasible support under JSP 822 Vol 7.</li>
        <li>For guidance on discussing dyslexia, see{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia
          </Link>
          .
        </li>
      </ul>
    </section>

    <IfThisSoundsLikeYou
      concerns={[
        "You’re unsure what the application asks about dyslexia.",
        "You don’t know who to ask about feasible support.",
        "You’re unsure whether to mention dyslexia in your application or wait until later.",
      ]}
      reassurance="Ask your recruiter about the application and your education staff about feasible support."
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Common misconceptions</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li><strong>Dyslexia is automatically a bar to recruitment.</strong> Specific learning difficulties are not in themselves a bar if the required standards are met.</li>
        <li><strong>Support is the same everywhere.</strong> Ask education staff what applies where you serve.</li>
        <li><strong>Support lowers the required standards.</strong> Feasible support does not lower the required standards.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Support in service</h2>
      <p className="text-foreground leading-relaxed">
        Ask your chain of command how to contact your education staff and what feasible support is available. The Navy has a dedicated neurodiversity role. For the full picture see{" "}
        <Link to="/insights/what-support-is-available-for-dyslexia-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          what support is available
        </Link>
        {" "}and{" "}
        <Link to="/insights/is-dyslexia-a-barrier-in-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
          is dyslexia a barrier in the military
        </Link>
        .
      </p>
      <p className="text-foreground leading-relaxed mt-4">
        Ask education staff what applies where you serve. JSP 822 Vol 7 sets out Defence policy on Specific Learning Differences.
      </p>
    </section>

    <section className="mb-2">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reassurance</h2>
      <p className="text-foreground leading-relaxed">
        You can start by asking your education staff about feasible support under JSP 822 Vol 7.
      </p>
    </section>
  </InsightLayout>
);

export default NavyDyslexiaPage;
