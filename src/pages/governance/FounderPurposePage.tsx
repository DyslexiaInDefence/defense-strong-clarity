import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "mission", title: "Mission Statement" },
  { id: "scope", title: "Scope of Activity" },
  { id: "does-not-do", title: "What We Do Not Do" },
  { id: "independence", title: "Independence from Employer" },
  { id: "conflict-of-interest", title: "Conflict of Interest" },
  { id: "funding", title: "Funding Position" },
];

const FounderPurposePage = () => (
  <PolicyLayout
    title="Founder & Purpose"
    summary="This page sets out the mission, scope, and boundaries of Dyslexia in Defence. It clarifies what the initiative does, what it does not do, and the principles that guide the founder's involvement."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="mission">
      <h2 className="text-2xl font-bold text-foreground mb-4">Mission Statement</h2>
      <p className="text-muted-foreground mb-3">
        Dyslexia in Defence exists to enable dyslexic individuals to thrive across their time in service, transition, and industry environments within the defence and security ecosystem.
      </p>
      <p className="text-muted-foreground">
        It achieves this through independent peer support, curated resources, and structured signposting to established services and organisations.
      </p>
    </section>

    <section id="scope">
      <h2 className="text-2xl font-bold text-foreground mb-4">Scope of Activity</h2>
      <p className="text-muted-foreground mb-3">
        The initiative's activities are focused and deliberately bounded:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Peer connection</strong> — Creating spaces for dyslexic individuals in the defence ecosystem to connect with each other</li>
        <li><strong>Curated resources</strong> — Collating and sharing relevant, high quality resources from established sources</li>
        <li><strong>Signposting</strong> — Directing individuals to appropriate professional services, workplace adjustments, and support organisations</li>
        <li><strong>Awareness</strong> — Promoting understanding of dyslexia as a cognitive difference and strategic asset within the defence and security sector</li>
      </ul>
    </section>

    <section id="does-not-do">
      <h2 className="text-2xl font-bold text-foreground mb-4">What This Initiative Does Not Do</h2>
      <Callout variant="important">
        <strong>Dyslexia in Defence does not provide medical, legal, clinical, or therapeutic services of any kind.</strong> It is not a substitute for professional assessment, diagnosis, or treatment.
      </Callout>
      <p className="text-muted-foreground mb-3">
        Specifically, the initiative does not:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Provide medical or clinical advice</li>
        <li>Offer legal advice or representation</li>
        <li>Conduct dyslexia assessments or diagnoses</li>
        <li>Provide counselling, therapy, or mental health services</li>
        <li>Act as a crisis intervention service</li>
        <li>Represent individuals in workplace disputes or grievances</li>
        <li>Advocate on behalf of individuals with employers or institutions</li>
        <li>Provide financial advice or assistance</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Where individuals require any of the above, the initiative will signpost to appropriate professional services.
      </p>
    </section>

    <section id="independence">
      <h2 className="text-2xl font-bold text-foreground mb-4">Independence from Employer</h2>
      <Callout>
        Dyslexia in Defence is founded and operated in a personal capacity. It is entirely independent of the founder's employer, past or present.
      </Callout>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>No employer has oversight of, input into, or editorial control over the initiative</li>
        <li>The initiative does not use employer resources, systems, or facilities</li>
        <li>Views expressed through the initiative are personal and do not represent any employer</li>
        <li>The initiative does not solicit or accept funding from the founder's employer</li>
      </ul>
    </section>

    <section id="conflict-of-interest">
      <h2 className="text-2xl font-bold text-foreground mb-4">Conflict of Interest</h2>
      <p className="text-muted-foreground mb-3">
        The founder is committed to identifying and managing any potential conflicts of interest that may arise from personal, professional, or financial relationships.
      </p>
      <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">Framework</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Any relationship that could reasonably be perceived as a conflict will be declared</li>
        <li>The founder will not use the initiative for personal commercial gain</li>
        <li>Sponsorship and partnership decisions are subject to the Sponsorship Principles</li>
        <li>Where a conflict is identified, the founder will take appropriate steps to mitigate it, including seeking external advice if necessary</li>
        <li>Declared conflicts will be recorded and made available on request</li>
      </ul>
    </section>

    <section id="funding">
      <h2 className="text-2xl font-bold text-foreground mb-4">Funding Position</h2>
      <p className="text-muted-foreground mb-3">
        Dyslexia in Defence is currently self funded by the founder. The initiative operates on a non profit basis.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>No revenue is generated for personal gain</li>
        <li>No external funding is currently received</li>
        <li>Should sponsorship or donations be accepted in the future, full transparency will be maintained in accordance with the Sponsorship Principles and Transparency Commitment</li>
        <li>The initiative does not solicit donations from community members</li>
      </ul>
    </section>
  </PolicyLayout>
);

export default FounderPurposePage;
