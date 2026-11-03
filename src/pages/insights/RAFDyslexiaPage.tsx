import { Link } from "@/lib/router-compat";
import InsightLayout from "@/components/InsightLayout";
import DecisionConfidenceBlock from "@/components/DecisionConfidenceBlock";
import IfThisSoundsLikeYou from "@/components/IfThisSoundsLikeYou";

const JSP822_VOL7_URL = "https://assets.publishing.service.gov.uk/media/65ce3f754239310011b7b8a9/JSP_822_V7.0__Vol_7_V3.0_-_Specific_Learning_Differences.pdf";

const RAFDyslexiaPage = () => (
  <InsightLayout
    title="Can you join the RAF with dyslexia in the UK?"
    intent="joining"
    progressReassurance="You’re in the right place if you’re thinking about joining the RAF with dyslexia."
    preCtaLine="You don’t need to decide everything now — start with the step that feels easiest."
  >
    <p className="text-lg text-foreground leading-relaxed mb-4">
      Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met.
    </p>
    <p className="text-base text-foreground leading-relaxed mb-4">
      Ask your recruiter what the application asks, so you know what to expect.
    </p>
    <p className="text-lg text-foreground leading-relaxed mb-8">
      You will need to meet the required standards. Ask your education staff what feasible support is available under JSP 822 Vol 7.
    </p>

    <DecisionConfidenceBlock
      heading="Can I actually join the RAF with dyslexia?"
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
      <h2 className="text-2xl font-bold text-foreground mb-4">What RAF recruitment looks like</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground leading-relaxed">
        <li>You need to meet the required standards.</li>
        <li>Ask your recruiter what the application asks.</li>
        <li>Ask education staff about feasible support under JSP 822 Vol 7.</li>
        <li>For guidance on discussing dyslexia, read{" "}
          <Link to="/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk" className="font-medium text-primary underline-offset-4 hover:underline">
            do I need to declare dyslexia
          </Link>
          {" "}for guidance.
        </li>
      </ul>
    </section>

    <IfThisSoundsLikeYou
      concerns={[
        "You’re unsure what the application asks about dyslexia.",
        "You don’t know who to ask about feasible support.",
        "You’re nervous that declaring dyslexia will quietly limit which trades you’re offered.",
      ]}
      reassurance="Ask your recruiter about the application and your education staff about feasible support."
    />

    <section className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">Why dyslexic minds suit RAF roles</h2>
      <p className="text-foreground leading-relaxed">
        Specific learning difficulties are not in themselves a bar to Service if the required standards are met.
      </p>
      <p className="text-foreground leading-relaxed mt-4">
        Ask your education staff about feasible support under{" "}
        <a href={JSP822_VOL7_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
          JSP 822 Vol 7<span className="sr-only"> (opens in new tab)</span>
        </a>.
      </p>
      <p className="text-foreground leading-relaxed mt-4">
        Ask your chain of command how to contact your education staff and what feasible support is available.
      </p>
      <p className="text-foreground leading-relaxed mt-4">
        The{" "}
        <Link to="/join" className="font-medium text-primary underline-offset-4 hover:underline">Defence Dyslexia Network</Link>
        {" "}offers peer support and signposting for serving personnel, veterans and families.
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

export default RAFDyslexiaPage;
