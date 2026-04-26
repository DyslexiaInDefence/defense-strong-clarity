import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "financial", title: "Financial Transparency" },
  { id: "governance-evolution", title: "Governance Evolution" },
  { id: "reporting", title: "Public Reporting" },
  { id: "ethics", title: "Ethical Operating Principles" },
  { id: "community-safety", title: "Community Safety" },
];

const TransparencyPage = () => (
  <PolicyLayout
    title="Transparency Commitment"
    summary="Dyslexia in Defence is committed to operating openly, honestly, and accountably. This page sets out how the initiative approaches transparency across its governance, finances, and operations."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="financial">
      <h2 className="text-2xl font-bold text-foreground mb-4">Financial Transparency</h2>
      <p className="text-muted-foreground mb-3">
        The initiative is currently self funded by the founder. There is no external revenue, sponsorship, or grant funding at this time.
      </p>
      <p className="text-muted-foreground mb-3">
        Should this change, the initiative commits to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Publicly disclosing the source of all funding</li>
        <li>Providing a summary of how funds are used</li>
        <li>Ensuring financial reporting is proportionate to the scale of funding received</li>
        <li>Maintaining clear separation between personal and initiative finances</li>
        <li>Declining any funding that compromises independence</li>
      </ul>
      <Callout>
        Financial transparency is not just about disclosure — it is about ensuring that every financial decision serves the community's interests above all else.
      </Callout>
    </section>

    <section id="governance-evolution">
      <h2 className="text-2xl font-bold text-foreground mb-4">Governance Evolution</h2>
      <p className="text-muted-foreground mb-3">
        The founder recognises that governance must evolve as the initiative grows. The current founder led model is appropriate for the initiative's present scale, but this will be reviewed regularly.
      </p>
      <p className="text-muted-foreground mb-3">
        Commitments regarding governance evolution:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Governance structures will be reviewed at least annually</li>
        <li>Changes to governance will be communicated openly to the community</li>
        <li>The community will be consulted where appropriate before significant governance changes are made</li>
        <li>Governance improvements will be driven by the needs of the community, not external pressure</li>
        <li>The initiative will seek external advice on governance matters when appropriate</li>
      </ul>
    </section>

    <section id="reporting">
      <h2 className="text-2xl font-bold text-foreground mb-4">Public Reporting</h2>
      <p className="text-muted-foreground mb-3">
        The initiative intends to provide public reporting that is proportionate to its scale and activities. This may include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>An annual summary of activities and achievements</li>
        <li>Updates on governance developments</li>
        <li>A summary of community growth and engagement</li>
        <li>Disclosure of any sponsorship or funding received</li>
        <li>Updates to policies and the reasons for changes</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Reporting will be published on this website and shared with the community. The format and detail of reporting will grow in proportion to the initiative's activities and funding.
      </p>
    </section>

    <section id="ethics">
      <h2 className="text-2xl font-bold text-foreground mb-4">Ethical Operating Principles</h2>
      <p className="text-muted-foreground mb-3">
        The initiative is guided by the following ethical principles:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Honesty</strong> — All communications will be truthful and not misleading</li>
        <li><strong>Integrity</strong> — Decisions will be made in good faith and in the interests of the community</li>
        <li><strong>Proportionality</strong> — Governance, reporting, and policies will be proportionate to the initiative's scale</li>
        <li><strong>Accountability</strong> — The founder accepts personal accountability for the initiative's conduct</li>
        <li><strong>Respect</strong> — All individuals will be treated with dignity and consideration</li>
        <li><strong>Independence</strong> — The initiative's independence is non-negotiable and will be protected</li>
        <li><strong>Inclusion</strong> — The initiative welcomes all individuals who share its values, regardless of background</li>
      </ul>
    </section>

    <section id="community-safety">
      <h2 className="text-2xl font-bold text-foreground mb-4">Commitment to Community Safety</h2>
      <p className="text-muted-foreground mb-3">
        The safety and wellbeing of the community is the initiative's highest priority. This commitment is reflected in:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>A published and enforced Code of Conduct</li>
        <li>Clear safeguarding policies and crisis signposting</li>
        <li>Clear community expectations, with action taken on anything flagged</li>
        <li>Operational security awareness appropriate to the defence and security context</li>
        <li>A clear and accessible process for reporting concerns</li>
        <li>Commitment to acting on concerns promptly and fairly</li>
      </ul>
      <Callout>
        If at any point the initiative is unable to maintain the safety standards set out in these policies, it will communicate this openly and take appropriate action — including pausing activities if necessary.
      </Callout>
    </section>
  </PolicyLayout>
);

export default TransparencyPage;
