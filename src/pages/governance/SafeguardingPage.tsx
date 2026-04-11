import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "limits", title: "Limits of Responsibility" },
  { id: "peer-support", title: "Peer Support Only" },
  { id: "crisis", title: "Crisis Signposting" },
  { id: "reporting", title: "Reporting Concerns" },
  { id: "escalation", title: "Escalation" },
  { id: "confidentiality", title: "Confidentiality Boundaries" },
  { id: "age-policy", title: "Age Policy" },
  { id: "non-clinical", title: "Non Clinical Disclaimer" },
];

const SafeguardingPage = () => (
  <PolicyLayout
    title="Safeguarding & Support"
    summary="Dyslexia in Defence takes safeguarding seriously. This page sets out the limits of the initiative's responsibility, how concerns are handled, and where to find professional support."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="limits">
      <h2 className="text-2xl font-bold text-foreground mb-4">Limits of Responsibility</h2>
      <Callout variant="important">
        <strong>Dyslexia in Defence is a peer support network, not a professional service.</strong> It does not have a duty of care in the clinical, legal, or statutory sense and is not a substitute for professional intervention.
      </Callout>
      <p className="text-muted-foreground mb-3">
        The initiative operates within clear and deliberate boundaries. It exists to connect, inform, and signpost — not to assess, treat, or intervene.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>The initiative is not a registered service provider</li>
        <li>No participant should rely on the initiative as a primary source of professional support</li>
        <li>The founder and any volunteers are not trained safeguarding officers</li>
        <li>The initiative does not conduct risk assessments on individuals</li>
      </ul>
    </section>

    <section id="peer-support">
      <h2 className="text-2xl font-bold text-foreground mb-4">Peer Support Only</h2>
      <p className="text-muted-foreground mb-3">
        The support provided through this initiative is peer based. This means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Support comes from shared experience, not professional qualification</li>
        <li>No advice given within the community constitutes professional guidance</li>
        <li>Participants are encouraged to seek professional support for any matter requiring specialist input</li>
        <li>The initiative does not endorse or validate any specific advice shared between peers</li>
      </ul>
    </section>

    <section id="crisis">
      <h2 className="text-2xl font-bold text-foreground mb-4">Crisis Signposting</h2>
      <Callout variant="warning">
        <strong>If you or someone you know is in immediate danger, contact the emergency services on 999.</strong>
      </Callout>
      <p className="text-muted-foreground mb-3">
        The initiative is not equipped to manage crisis situations. If you are experiencing a mental health crisis, suicidal thoughts, or any immediate risk to safety, please contact one of the following services:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Emergency services:</strong> 999</li>
        <li><strong>Samaritans:</strong> 116 123 (free, 24/7)</li>
        <li><strong>Veterans' Gateway:</strong> 0808 802 1212</li>
        <li><strong>Combat Stress:</strong> 0800 138 1619</li>
        <li><strong>NHS urgent mental health support:</strong> 111, option 2</li>
        <li><strong>SHOUT crisis text line:</strong> Text SHOUT to 85258</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        These organisations are professionally equipped to provide immediate, confidential support.
      </p>
    </section>

    <section id="reporting">
      <h2 className="text-2xl font-bold text-foreground mb-4">Reporting Safeguarding Concerns</h2>
      <p className="text-muted-foreground mb-3">
        If you become aware of a safeguarding concern involving a member of the community, you are encouraged to report it. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Concerns about a person's safety or wellbeing</li>
        <li>Behaviour by a community member that may put others at risk</li>
        <li>Disclosures of abuse, neglect, or exploitation</li>
        <li>Any situation where you believe a person may be at risk of harm</li>
      </ul>
      <h3 className="text-lg font-semibold text-foreground mb-2 mt-6">How to Report</h3>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Contact the founder directly at <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a></li>
        <li>Reports will be acknowledged as promptly as possible</li>
        <li>All reports will be treated with seriousness and sensitivity</li>
      </ul>
    </section>

    <section id="escalation">
      <h2 className="text-2xl font-bold text-foreground mb-4">Escalation</h2>
      <p className="text-muted-foreground mb-3">
        Where a safeguarding concern is beyond the scope or capability of the initiative to address, the founder will:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Signpost the individual to appropriate professional services</li>
        <li>Where there is an immediate risk to life, contact emergency services</li>
        <li>Where there is a concern about a child or vulnerable adult, consider referral to local authority safeguarding services</li>
        <li>Where there is a potential criminal matter, consider referral to the police</li>
      </ul>
      <Callout>
        The initiative will always err on the side of caution. The safety of individuals takes priority over all other considerations.
      </Callout>
    </section>

    <section id="confidentiality">
      <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality Boundaries</h2>
      <p className="text-muted-foreground mb-3">
        The initiative respects confidentiality but cannot guarantee absolute confidentiality in all circumstances.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Information shared in confidence will be treated respectfully</li>
        <li>Confidentiality may be broken where there is a risk of serious harm to an individual or others</li>
        <li>Confidentiality may be broken where required by law</li>
        <li>Where confidentiality needs to be broken, the individual will be informed wherever possible and safe to do so</li>
      </ul>
    </section>

    <section id="age-policy">
      <h2 className="text-2xl font-bold text-foreground mb-4">Age Policy</h2>
      <Callout>
        <strong>Dyslexia in Defence is designed for adults aged 18 and over.</strong> The initiative does not knowingly engage with individuals under the age of 18.
      </Callout>
      <p className="text-muted-foreground mb-3">
        If it becomes apparent that a participant is under 18, their access to community spaces will be suspended and appropriate steps will be taken, which may include contacting a parent or guardian.
      </p>
      <p className="text-muted-foreground">
        For resources relating to dyslexia in children and young people, please contact the British Dyslexia Association or your local education authority.
      </p>
    </section>

    <section id="non-clinical">
      <h2 className="text-2xl font-bold text-foreground mb-4">Non-Clinical Disclaimer</h2>
      <Callout variant="important">
        <strong>Nothing provided through Dyslexia in Defence constitutes clinical, medical, psychological, legal, or therapeutic advice.</strong>
      </Callout>
      <p className="text-muted-foreground mb-3">
        All information and resources shared through the initiative are for general informational purposes only. They are not intended to replace or substitute professional assessment, diagnosis, or treatment.
      </p>
      <p className="text-muted-foreground">
        Individuals are strongly encouraged to consult qualified professionals for any matters relating to health, wellbeing, legal rights, or workplace adjustments.
      </p>
    </section>
  </PolicyLayout>
);

export default SafeguardingPage;
