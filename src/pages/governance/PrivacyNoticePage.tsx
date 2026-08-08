import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "controller", title: "Data Controller" },
  { id: "data-collected", title: "Data We Collect" },
  { id: "legal-basis", title: "Legal Basis" },
  { id: "retention", title: "Data Retention" },
  { id: "third-parties", title: "Third Party Services" },
  { id: "rights", title: "Your Rights" },
  { id: "contact-data", title: "Data Requests" },
  { id: "security", title: "Security" },
  { id: "risk-assessment", title: "How We Assessed the Risks" },
  { id: "no-sale", title: "No Sale of Data" },
];

const PrivacyNoticePage = () => (
  <PolicyLayout
    title="Privacy Notice"
    summary="This Privacy Notice explains how Dyslexia in Defence CIC collects, uses, and protects personal data. It is written in plain English and reflects our commitment to responsible data handling in line with UK data protection law."
    lastUpdated="8 August 2026"
    sections={sections}
  >
    <section id="controller">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data Controller</h2>
      <p className="text-muted-foreground mb-3">
        The data controller for personal data collected through this website and our wider network is Dyslexia in Defence CIC (company number 17285330), a Community Interest Company registered in England and Wales. Symon Smith, as founder and director, is personally responsible for making sure data is handled appropriately on the organisation's behalf and in accordance with UK data protection law.
      </p>
      <p className="text-muted-foreground">
        For data related enquiries, please contact: <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a>
      </p>
    </section>

    <section id="data-collected">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data We Collect</h2>
      <p className="text-muted-foreground mb-3">
        We collect only what we need to run the network and support our community. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Contact information</strong> — your name and email address, provided when you sign up, contact us, or join the community</li>
        <li><strong>Confirmation you are 18 or over</strong> — Dyslexia in Defence is for adults aged 18 and over. We ask you to confirm this when you sign up</li>
        <li><strong>Connection to Defence</strong> — a category you choose yourself when signing up (for example serving, veteran, family member, civil servant, or defence industry), and any areas of interest you tell us about</li>
        <li><strong>Marketing preference</strong> — whether you have opted in to receive newsletters and updates, kept separate from the rest of your sign up so you have a genuine choice</li>
        <li><strong>Verification details</strong> — if you apply for targeted, funded support (for example support specifically for serving Army personnel), we may ask you to confirm details that let us verify your service, so that support reaches the people it is intended for</li>
        <li><strong>Correspondence</strong> — records of what you tell us if you email us or contact us directly, including, where you choose to share it, information about a dyslexia diagnosis or your personal circumstances</li>
        <li><strong>Community platform activity</strong> — if you join our Discord community, we do not ask you for anything beyond agreeing to be respectful of others and confirming you are 18 or over. Discord's own account details are held by Discord, not by us. Anything else you choose to share there is voluntary</li>
        <li><strong>Technical data</strong> — standard information like IP address and browser type, collected automatically for site functionality and security</li>
      </ul>
      <Callout>
        We do not ask for information about a diagnosis, disability, or health condition anywhere on this site. Where you choose to share this with us voluntarily, for example in an email asking for support, we treat it with particular care. See "Legal Basis" below for how we handle this.
      </Callout>
    </section>

    <section id="legal-basis">
      <h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis</h2>
      <p className="text-muted-foreground mb-3">
        We rely on the following legal bases to process your information:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Consent</strong> — for anything you have actively opted in to, such as receiving newsletters and updates. You can withdraw this consent at any time by contacting us, and this will not affect anything done before you withdrew it</li>
        <li><strong>Legitimate interests</strong> — for running the core network, responding to enquiries, verifying eligibility for targeted support, and maintaining community safety, always balanced against your rights and interests</li>
        <li><strong>Explicit consent for sensitive information</strong> — if you choose to share details of a diagnosis or health condition with us, for example in a support related email, we rely on your explicit, freely given consent to hold and use that information to support you. You can withdraw this consent and ask us to delete this information at any time</li>
      </ul>
    </section>

    <section id="retention">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
      <p className="text-muted-foreground mb-3">
        We keep personal information only for as long as it serves a genuine purpose, and no longer than that:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>General sign up and membership information is kept for as long as you remain engaged with the network. We review this periodically, and you can ask us to delete it at any time</li>
        <li>Verification details used to confirm eligibility for targeted support are kept only as long as needed for that purpose</li>
        <li>Support correspondence, including anything relating to a diagnosis, may be kept for longer. We recognise this can be a genuinely useful record for you to refer back to in future, for example if you later need evidence of a past diagnosis discussion. We keep this with your interests in mind, and you can ask us to delete it at any time</li>
        <li>Technical data is retained in line with our hosting and service providers' standard policies</li>
      </ul>
    </section>

    <section id="third-parties">
      <h2 className="text-2xl font-bold text-foreground mb-4">Third Party Services</h2>
      <p className="text-muted-foreground mb-3">
        We use a small number of trusted platforms to run the network:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Our website and sign up form, built and hosted through Lovable</li>
        <li>Email and newsletter services, currently Brevo and Zoho Mail, both used to hold contact details and correspond with you</li>
        <li>Our community platform, Discord, for peer support conversations</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Where any of these services are based outside the UK, we check that appropriate data protection safeguards are in place. We do not share your information with any third party for marketing purposes, and we do not sell, rent, lease, or trade personal data under any circumstances.
      </p>
      <p className="text-muted-foreground mt-3">
        If we confirm military affiliation with a small number of trusted volunteers as part of verifying eligibility for targeted support, we only ever share the minimum needed, decided case by case, and we always tell you first.
      </p>
    </section>

    <section id="rights">
      <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
      <p className="text-muted-foreground mb-3">
        Under UK data protection law, you have the right to:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Request a copy of the personal data we hold about you</li>
        <li>Request correction of anything inaccurate</li>
        <li>Request deletion of your data</li>
        <li>Request that we restrict how we use your data</li>
        <li>Request your data in a structured, commonly used format</li>
        <li>Object to processing based on legitimate interests</li>
        <li>Withdraw consent at any time, including for marketing emails or for sensitive information you have shared with us</li>
        <li>Complain to the Information Commissioner's Office (ICO) if you are unhappy with how we have handled your information</li>
      </ul>
    </section>

    <section id="contact-data">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data Requests</h2>
      <p className="text-muted-foreground mb-3">
        All data related requests, questions, or concerns should be directed to:
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
        We take reasonable steps to protect personal data from unauthorised access, loss, or misuse. This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Encrypted connections (HTTPS) across the website</li>
        <li>Personal data access kept tightly restricted. In almost all cases, only the founder has access. Where limited information genuinely needs to be shared, for example to verify someone's military affiliation, this is only ever the minimum needed, decided case by case, and you are always told first</li>
        <li>Use of reputable, security conscious third party service providers</li>
        <li>Regular review of our data handling practices</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        No system is entirely secure, and while we take reasonable precautions, we cannot guarantee absolute security of data transmitted to or stored by us.
      </p>
    </section>

    <section id="risk-assessment">
      <h2 className="text-2xl font-bold text-foreground mb-4">How We Assessed the Risks</h2>
      <p className="text-muted-foreground mb-3">
        We have carried out a Data Protection Impact Assessment (DPIA) covering our sign up form, our Discord community, how we verify military affiliation for targeted support, and our email correspondence with members. A DPIA is a structured way of thinking through the risks involved in how we use personal information, and what we are doing to reduce them.
      </p>
      <p className="text-muted-foreground">
        We are a small, founder led organisation, and we are honest that some of our processes are still maturing as we grow. Carrying out this assessment helped us identify where we needed to be clearer with you, including in this notice, where we needed to bring our practice in line with our own stated policies, such as requiring sign ups to confirm they are 18 or over, and where we still have work to do, particularly around confirming the exact safeguards used by some of our third party service providers. This DPIA is reviewed at least once a year, and whenever we introduce a new way of collecting or using personal information. It was last reviewed in August 2026.
      </p>
    </section>

    <section id="no-sale">
      <h2 className="text-2xl font-bold text-foreground mb-4">No Sale of Personal Data</h2>
      <Callout>
        <strong>Dyslexia in Defence CIC does not sell, rent, lease, or trade personal data to any third party, for any reason, under any circumstances.</strong>
      </Callout>
    </section>
  </PolicyLayout>
);

export default PrivacyNoticePage;
