import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "expectations", title: "Behavioural Expectations" },
  { id: "respect", title: "Respect & Dignity" },
  { id: "harassment", title: "Harassment Prohibition" },
  { id: "opsec", title: "Operational Security" },
  { id: "prohibited", title: "Prohibited Content" },
  { id: "moderation", title: "Moderation Rights" },
  { id: "consequences", title: "Consequences of Breach" },
  { id: "appeals", title: "Appeal Process" },
];

const CodeOfConductPage = () => (
  <PolicyLayout
    title="Code of Conduct"
    summary="This Code of Conduct sets out the behavioural expectations for everyone who participates in Dyslexia in Defence. It exists to maintain a safe, respectful, and constructive environment for all members of the community."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="expectations">
      <h2 className="text-2xl font-bold text-foreground mb-4">Behavioural Expectations</h2>
      <p className="text-muted-foreground mb-3">
        All participants in Dyslexia in Defence — including community members, contributors, and the founder — are expected to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Act with honesty, integrity, and good faith</li>
        <li>Treat all individuals with courtesy and respect</li>
        <li>Engage constructively and support fellow community members</li>
        <li>Respect differing perspectives and experiences</li>
        <li>Maintain confidentiality where appropriate</li>
        <li>Follow the guidelines set out in this Code and related policies</li>
      </ul>
    </section>

    <section id="respect">
      <h2 className="text-2xl font-bold text-foreground mb-4">Respect & Dignity</h2>
      <p className="text-muted-foreground mb-3">
        Every person engaging with this initiative has the right to be treated with dignity and respect, regardless of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Rank, grade, or seniority (serving or former)</li>
        <li>Branch of service or sector of employment</li>
        <li>Neurodivergent profile or disability status</li>
        <li>Gender, ethnicity, sexual orientation, religion, or belief</li>
        <li>Age or level of experience</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        The initiative values cognitive diversity and recognises that every individual brings unique strengths. Language used within the community should reflect this principle.
      </p>
    </section>

    <section id="harassment">
      <h2 className="text-2xl font-bold text-foreground mb-4">Harassment Prohibition</h2>
      <Callout variant="important">
        <strong>Harassment of any kind is strictly prohibited.</strong> This includes but is not limited to bullying, intimidation, discriminatory language, unwanted contact, and personal attacks.
      </Callout>
      <p className="text-muted-foreground mb-3">
        Harassment includes any behaviour that creates a hostile, intimidating, or offensive environment. This applies to all community spaces, including online forums, messaging groups, events, and direct communications between members.
      </p>
      <p className="text-muted-foreground">
        Reports of harassment will be taken seriously, investigated promptly, and handled in accordance with the consequences framework below.
      </p>
    </section>

    <section id="opsec">
      <h2 className="text-2xl font-bold text-foreground mb-4">Operational Security</h2>
      <Callout variant="warning">
        <strong>Defence and security context reminder:</strong> Many members of this community work in or have connections to defence and national security. Participants must exercise appropriate judgment at all times.
      </Callout>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Do not</strong> share classified, protectively marked, or operationally sensitive information</li>
        <li><strong>Do not</strong> discuss specific operations, deployments, or intelligence matters</li>
        <li><strong>Do not</strong> share information that could compromise the safety of individuals or organisations</li>
        <li><strong>Do not</strong> identify specific units, locations, or personnel in sensitive contexts</li>
        <li>If in doubt about whether information is appropriate to share, <strong>do not share it</strong></li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Any content identified as a potential security concern will be removed immediately and without notice. Repeated violations may result in permanent removal from the community and, where appropriate, referral to relevant authorities.
      </p>
    </section>

    <section id="prohibited">
      <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Content</h2>
      <p className="text-muted-foreground mb-3">
        The following types of content are not permitted in any community space:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Classified or protectively marked material</li>
        <li>Content that promotes discrimination, hatred, or violence</li>
        <li>Employer-specific grievances or workplace complaints</li>
        <li>Political campaigning or partisan advocacy</li>
        <li>Commercial promotion or unsolicited advertising</li>
        <li>Content that could bring the initiative or its community into disrepute</li>
        <li>Illegal content of any nature</li>
        <li>Personal information about third parties shared without consent</li>
      </ul>
    </section>

    <section id="moderation">
      <h2 className="text-2xl font-bold text-foreground mb-4">Moderation Rights</h2>
      <p className="text-muted-foreground mb-3">
        The initiative reserves the right to moderate all community spaces. This includes the right to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Remove, edit, or restrict content that breaches this Code of Conduct</li>
        <li>Issue warnings to individuals whose behaviour is inappropriate</li>
        <li>Temporarily or permanently restrict access to community spaces</li>
        <li>Remove individuals from the community where necessary</li>
        <li>Take any other action deemed proportionate and necessary to maintain community safety</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Moderation decisions are made in good faith and in the interests of the community. The founder retains final authority over all moderation decisions.
      </p>
    </section>

    <section id="consequences">
      <h2 className="text-2xl font-bold text-foreground mb-4">Consequences of Breach</h2>
      <p className="text-muted-foreground mb-3">
        Breaches of this Code of Conduct will be addressed proportionately. Possible consequences include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Informal reminder</strong> — A private communication drawing attention to the relevant expectation</li>
        <li><strong>Formal warning</strong> — A recorded warning with clear expectations for future conduct</li>
        <li><strong>Temporary restriction</strong> — Temporary suspension from community spaces</li>
        <li><strong>Permanent removal</strong> — Permanent exclusion from all community spaces and activities</li>
        <li><strong>External referral</strong> — Referral to relevant authorities where behaviour may constitute a legal or security concern</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        The severity of the response will depend on the nature and context of the breach, any history of previous breaches, and the impact on the community.
      </p>
    </section>

    <section id="appeals">
      <h2 className="text-2xl font-bold text-foreground mb-4">Appeal Process</h2>
      <p className="text-muted-foreground mb-3">
        Any individual subject to a moderation decision may request a review of that decision by contacting the founder directly.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Appeals should be submitted in writing to <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a></li>
        <li>Appeals will be acknowledged within a reasonable timeframe</li>
        <li>The founder will review the decision and provide a written response</li>
        <li>The founder's decision on appeal is final</li>
      </ul>
      <Callout>
        As governance structures evolve, the appeals process may be expanded to include independent review. Any changes will be communicated to the community.
      </Callout>
    </section>
  </PolicyLayout>
);

export default CodeOfConductPage;
