import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "controller", title: "Data Controller" },
  { id: "data-collected", title: "Data We Collect" },
  { id: "legal-basis", title: "Legal Basis" },
  { id: "retention", title: "Data Retention" },
  { id: "third-parties", title: "Third-Party Services" },
  { id: "rights", title: "Your Rights" },
  { id: "contact-data", title: "Data Requests" },
  { id: "security", title: "Security" },
  { id: "no-sale", title: "No Sale of Data" },
];

const PrivacyNoticePage = () => (
  <PolicyLayout
    title="Privacy Notice"
    summary="This Privacy Notice explains how Dyslexia in Defence collects, uses, and protects personal data. It is written in plain English and reflects the initiative's commitment to responsible data handling in line with UK data protection principles."
    lastUpdated="1 March 2026"
    sections={sections}
  >
    <section id="controller">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data Controller</h2>
      <p className="text-muted-foreground mb-3">
        The data controller for personal data collected through Dyslexia in Defence is the founder of the initiative. The founder is personally responsible for ensuring that data is handled appropriately and in accordance with UK data protection law.
      </p>
      <p className="text-muted-foreground">
        For data-related enquiries, please contact: <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a>
      </p>
    </section>

    <section id="data-collected">
      <h2 className="text-2xl font-bold text-foreground mb-4">Types of Data Collected</h2>
      <p className="text-muted-foreground mb-3">
        The initiative collects only the minimum data necessary to operate. This may include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Contact information</strong> — Name and email address, provided when you contact us or join the community</li>
        <li><strong>Sector connection</strong> — Your connection to the defence and security sector, if voluntarily provided</li>
        <li><strong>Areas of interest</strong> — Topics or areas you are interested in, if voluntarily provided</li>
        <li><strong>Technical data</strong> — IP address, browser type, and device information collected automatically for site functionality and security</li>
        <li><strong>Communication records</strong> — Records of correspondence with the initiative</li>
      </ul>
      <Callout>
        We do not collect sensitive personal data (such as health information or detailed disability status) unless you choose to share it voluntarily in correspondence or community discussions.
      </Callout>
    </section>

    <section id="legal-basis">
      <h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis for Processing</h2>
      <p className="text-muted-foreground mb-3">
        Personal data is processed on one or more of the following bases:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Consent</strong> — Where you have given clear consent for us to process your data for a specific purpose (e.g., joining the community or subscribing to updates)</li>
        <li><strong>Legitimate interest</strong> — Where processing is necessary for the legitimate interests of the initiative (e.g., responding to enquiries, maintaining community safety, improving the website), provided those interests are not overridden by your rights</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        You may withdraw consent at any time by contacting us. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.
      </p>
    </section>

    <section id="retention">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
      <p className="text-muted-foreground mb-3">
        Personal data is retained only for as long as necessary to fulfil the purpose for which it was collected. Specifically:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Contact form submissions are retained for as long as needed to respond and follow up</li>
        <li>Community membership data is retained for the duration of membership</li>
        <li>Communication records are retained for a reasonable period for reference and accountability</li>
        <li>Technical data is retained in accordance with hosting provider policies</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        You may request deletion of your personal data at any time. Requests will be fulfilled promptly unless retention is required by law.
      </p>
    </section>

    <section id="third-parties">
      <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
      <p className="text-muted-foreground mb-3">
        The initiative uses a limited number of third-party services to operate the website and community. These may include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Website hosting providers</li>
        <li>Email service providers</li>
        <li>Analytics tools (anonymised where possible)</li>
        <li>Community platform providers</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Third-party services are selected with regard to their data protection practices. Data is not shared with third parties for marketing purposes.
      </p>
    </section>

    <section id="rights">
      <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
      <p className="text-muted-foreground mb-3">
        Under UK data protection law, you have the following rights:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Right of access</strong> — You can request a copy of the personal data we hold about you</li>
        <li><strong>Right to rectification</strong> — You can request correction of inaccurate data</li>
        <li><strong>Right to erasure</strong> — You can request deletion of your data</li>
        <li><strong>Right to restrict processing</strong> — You can request that we limit how we use your data</li>
        <li><strong>Right to data portability</strong> — You can request your data in a structured, commonly used format</li>
        <li><strong>Right to object</strong> — You can object to processing based on legitimate interest</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        To exercise any of these rights, please contact us using the details below. We will respond within one calendar month.
      </p>
    </section>

    <section id="contact-data">
      <h2 className="text-2xl font-bold text-foreground mb-4">Contact for Data Requests</h2>
      <p className="text-muted-foreground mb-3">
        All data-related requests, questions, or concerns should be directed to:
      </p>
      <p className="text-muted-foreground">
        <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2 font-medium">contact@dyslexiaindefence.com</a>
      </p>
      <p className="text-muted-foreground mt-3">
        We aim to acknowledge all requests within five working days and to fulfil them within one calendar month.
      </p>
    </section>

    <section id="security">
      <h2 className="text-2xl font-bold text-foreground mb-4">Security</h2>
      <p className="text-muted-foreground mb-3">
        The initiative takes reasonable steps to protect personal data from unauthorised access, loss, or misuse. Measures include:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Use of encrypted connections (HTTPS) for all website traffic</li>
        <li>Access to personal data restricted to the founder</li>
        <li>Use of reputable, security-conscious third-party service providers</li>
        <li>Regular review of data handling practices</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        No system is entirely secure. While we take reasonable precautions, we cannot guarantee absolute security of data transmitted to or stored by the initiative.
      </p>
    </section>

    <section id="no-sale">
      <h2 className="text-2xl font-bold text-foreground mb-4">No Sale of Personal Data</h2>
      <Callout>
        <strong>Dyslexia in Defence does not sell, rent, lease, or trade personal data to any third party, for any reason, under any circumstances.</strong>
      </Callout>
    </section>
  </PolicyLayout>
);

export default PrivacyNoticePage;
