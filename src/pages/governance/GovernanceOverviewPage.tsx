import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "founder-led", title: "Founder Led Initiative" },
  { id: "independence", title: "Independence" },
  { id: "non-profit", title: "Non Profit Intent" },
  { id: "governance-model", title: "Current Governance Model" },
  { id: "evolution", title: "Governance Evolution" },
  { id: "decision-making", title: "Decision Making Authority" },
  { id: "related-policies", title: "Related Policies" },
];

const GovernanceOverviewPage = () => (
  <PolicyLayout
    title="Governance Overview"
    summary="Dyslexia in Defence is a founder led, independent, volunteer driven initiative. This page outlines how the initiative is governed, how decisions are made, and the principles that guide its operation."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="founder-led">
      <h2 className="text-2xl font-bold text-foreground mb-4">Founder Led Initiative</h2>
      <p className="text-muted-foreground mb-3">
        Dyslexia in Defence was established and is led by its founder in a personal capacity. It is not a registered charity, company, or formal organisation. It operates as a personal, voluntary initiative with a clear public interest purpose.
      </p>
      <p className="text-muted-foreground">
        The founder bears personal responsibility for the direction, content, and conduct of the initiative. As the network matures, governance structures will be reviewed and adapted proportionately.
      </p>
    </section>

    <section id="independence">
      <h2 className="text-2xl font-bold text-foreground mb-4">Independence</h2>
      <Callout variant="important">
        <strong>Dyslexia in Defence is entirely independent.</strong> It is not affiliated with, endorsed by, funded by, or operated on behalf of the Ministry of Defence, any branch of the Armed Forces, any government department, or any employer.
      </Callout>
      <p className="text-muted-foreground mb-3">
        This independence is fundamental to the initiative's credibility and its ability to serve the community without external influence or obligation.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>No organisational affiliation governs the initiative's content or direction</li>
        <li>No employer has editorial control over any material published</li>
        <li>The initiative does not represent any official position of any organisation</li>
        <li>All views expressed are those of the initiative and its contributors, not of any employer or institution</li>
      </ul>
    </section>

    <section id="non-profit">
      <h2 className="text-2xl font-bold text-foreground mb-4">Non Profit Intent</h2>
      <p className="text-muted-foreground mb-3">
        Dyslexia in Defence operates on a non profit basis. The initiative does not generate revenue for personal gain. Any financial support received is directed entirely toward sustaining and improving the network's services.
      </p>
      <p className="text-muted-foreground">
        At this stage, the initiative is self funded by the founder. Should external funding or sponsorship be accepted in the future, this will be disclosed transparently in line with the Sponsorship Principles.
      </p>
    </section>

    <section id="governance-model">
      <h2 className="text-2xl font-bold text-foreground mb-4">Current Governance Model</h2>
      <p className="text-muted-foreground mb-3">
        The current governance model reflects the early stage of the initiative. It is intentionally simple and proportionate:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Founder oversight</strong> — The founder is the sole decision maker for strategic direction, policy, and content</li>
        <li><strong>Defined policies</strong> — A suite of published policies governs conduct, privacy, safeguarding, and sponsorship</li>
        <li><strong>Community expectations</strong> — Community spaces operate on clear behavioural expectations, with action taken on anything flagged</li>
        <li><strong>Transparency</strong> — Governance decisions and policies are published openly on this website</li>
        <li><strong>Accountability</strong> — The founder is personally accountable for the initiative's conduct</li>
      </ul>
    </section>

    <section id="evolution">
      <h2 className="text-2xl font-bold text-foreground mb-4">Governance Evolution</h2>
      <p className="text-muted-foreground mb-3">
        Governance will evolve as the network grows. The founder is committed to developing governance structures that are proportionate to the initiative's scale and impact.
      </p>
      <p className="text-muted-foreground mb-3">
        Future considerations may include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Establishing an advisory group drawn from the community</li>
        <li>Formalising the initiative as a legal entity if and when appropriate</li>
        <li>Introducing independent review of key policies</li>
        <li>Expanding moderation and safeguarding capacity</li>
      </ul>
      <Callout>
        Any changes to governance will be communicated openly and in advance to the community.
      </Callout>
    </section>

    <section id="decision-making">
      <h2 className="text-2xl font-bold text-foreground mb-4">Decision Making Authority</h2>
      <p className="text-muted-foreground mb-3">
        At this stage, all decisions regarding the initiative's direction, policies, partnerships, and content rest with the founder. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Strategic direction and scope of activities</li>
        <li>Content published on the website and across community channels</li>
        <li>Moderation decisions and enforcement of the Code of Conduct</li>
        <li>Acceptance or refusal of any sponsorship or partnership</li>
        <li>Data handling and privacy decisions</li>
        <li>Changes to governance policies</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Community input is welcomed and valued, but final authority rests with the founder until such time as governance structures are formally expanded.
      </p>
    </section>

    <section id="related-policies">
      <h2 className="text-2xl font-bold text-foreground mb-4">Related Policies</h2>
      <p className="text-muted-foreground mb-4">
        This Governance Overview should be read alongside the following policies, each of which addresses a specific area of the initiative's operations:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Founder & Purpose</strong> — Mission, scope, and boundaries of the initiative</li>
        <li><strong>Code of Conduct</strong> — Behavioural expectations for all participants</li>
        <li><strong>Safeguarding & Support</strong> — Limits of responsibility, crisis signposting, and safeguarding procedures</li>
        <li><strong>Privacy Notice</strong> — How personal data is collected, used, and protected</li>
        <li><strong>Sponsorship Principles</strong> — Framework for ethical sponsorship and financial transparency</li>
        <li><strong>Transparency Commitment</strong> — Commitment to openness, reporting, and ethical operation</li>
      </ul>
    </section>
  </PolicyLayout>
);

export default GovernanceOverviewPage;
