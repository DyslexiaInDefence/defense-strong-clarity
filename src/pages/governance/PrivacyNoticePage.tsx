import PolicyLayout, { Callout } from "@/components/PolicyLayout";

const sections = [
  { id: "summary", title: "How We Look After Your Data" },
  { id: "controller", title: "Data Controller" },
  { id: "data-collected", title: "Data We Collect" },
  { id: "survey", title: "Our Survey" },
  { id: "legal-basis", title: "Legal Basis" },
  { id: "retention", title: "Data Retention" },
  { id: "third-parties", title: "Third Party Services" },
  { id: "cookies", title: "Cookies and Analytics" },
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
    sections={sections}
  >
    <section id="summary">
      <h2 className="text-2xl font-bold text-foreground mb-4">How We Look After Your Data</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>We collect only what we need.</li>
        <li>We never sell your data.</li>
        <li>We only send newsletters if you ask for them.</li>
        <li>Analytics cookies are off unless you say yes.</li>
        <li>You can ask to see, change or delete your data at any time.</li>
        <li>Email us at <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a>.</li>
      </ul>
      <p className="text-muted-foreground mt-3">The full detail is below.</p>
    </section>

    <section id="controller">
      <h2 className="text-2xl font-bold text-foreground mb-4">Data Controller</h2>
      <p className="text-muted-foreground mb-3">
        The data controller for personal data collected through this website and our wider network is Dyslexia in Defence CIC (company number 17285330), a Community Interest Company registered in England and Wales. Symon Smith, as founder and director, is personally responsible for making sure data is handled appropriately on the organisation's behalf and in accordance with UK data protection law.
      </p>
      <p className="text-muted-foreground">
        Dyslexia in Defence CIC is registered with the Information Commissioner's Office (ICO), registration reference ZC280118. Registered 20 October 2026. Renewal due 19 October 2027.
      </p>
      <p className="text-muted-foreground mt-3">
        Our registered address is 124-128 City Road, London, EC1V 2NX.
      </p>
      <p className="text-muted-foreground mt-3">
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
        <li><strong>Analytics data</strong> — only if you accept analytics cookies. Google Analytics records which pages you visit, roughly where you are, and your device and browser type. See Cookies and Analytics below</li>
      </ul>
      <Callout>
        Our website sign up form does not ask for health information. Our optional survey does, and only with your explicit consent. If you choose to share health information with us by email, we treat it with particular care. See Legal Basis below.
      </Callout>
    </section>

    <section id="survey">
      <h2 className="text-2xl font-bold text-foreground mb-4">Our Survey</h2>
      <p className="text-muted-foreground mb-3">
        The survey is anonymous, voluntary and open to people aged 16 and over. Our website membership, sign up form, community and support remain for adults aged 18 and over.
      </p>
      <p className="text-muted-foreground mb-3">
        We do not ask for your name, email or any contact details, and we ask you not to include names, schools, units, dates or contact details in written answers.
      </p>
      <p className="text-muted-foreground mb-3">
        We ask about your connection to Defence and your experience of dyslexia or other neurodivergent conditions. This is health information.
      </p>
      <p className="text-muted-foreground mb-3">
        The survey has two parts. Part 1 is saved when you submit it. Part 2 is optional and is saved against the same reference code.
      </p>
      <p className="text-muted-foreground mb-3">
        After you submit you receive a reference code. If you want your response removed, email <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a> with the code. Because we do not know who you are, we cannot find a response without its code.
      </p>
      <p className="text-muted-foreground mb-3">
        Our legal basis is your consent (Article 6(1)(a) UK GDPR) and, for health information, your explicit consent (Article 9(2)(a)), given by ticking the boxes before you submit. If you are 16 or 17 you can consent in your own right.
      </p>
      <p className="text-muted-foreground mb-3">
        Only the directors see individual responses. We never sell or share individual responses. We publish only anonymous results, and never for a group smaller than 10 people.
      </p>
      <p className="text-muted-foreground mb-3">
        Responses are stored in a restricted Google account owned by Dyslexia in Defence CIC. We use Cloudflare Turnstile to stop automated spam.
      </p>
      <p className="text-muted-foreground mb-3">
        We keep responses for up to 3 years, then delete them or keep only fully anonymous totals.
      </p>
      <p className="text-muted-foreground">
        We may use AI tools to help read and summarise written answers. We give them only the answers, never contact details, and we do not use them to try to identify anyone.
      </p>
    </section>

    <section id="legal-basis">
      <h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis</h2>
      <p className="text-muted-foreground mb-3">
        We rely on the following legal bases to process your information:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Consent</strong> — for anything you have actively opted in to, such as receiving newsletters and updates. You can withdraw this consent at any time by contacting us, and this will not affect anything done before you withdrew it</li>
        <li><strong>Legitimate interests</strong> — for running the core network, responding to enquiries, verifying eligibility for targeted support, and maintaining community safety, always balanced against your rights and interests</li>
        <li><strong>Consent for analytics</strong> — we only use Google Analytics if you accept analytics cookies. You can change your mind at any time using Cookie settings in the footer</li>
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
        <li>Google (Google Sheets and Apps Script), used to store survey responses</li>
        <li>Cloudflare (Turnstile), used to protect the survey from automated spam</li>
        <li>Google Analytics, used to count visits to the website, only if you accept analytics cookies</li>
      </ul>
      <p className="text-muted-foreground mt-3">
        Where any of these services are based outside the UK, we work to ensure that appropriate data protection safeguards are in place, and we are in the process of confirming this for each of our current providers. We do not share your information with any third party for marketing purposes, and we do not sell, rent, lease, or trade personal data under any circumstances.
      </p>
      <p className="text-muted-foreground mt-3">
        If we confirm military affiliation with a small number of trusted volunteers as part of verifying eligibility for targeted support, we only ever share the minimum needed, decided case by case, and we always tell you first.
      </p>
    </section>

    <section id="cookies">
      <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Analytics</h2>
      <p className="text-muted-foreground mb-3">
        We use Google Analytics to see how many people visit and which pages they read. It sets cookies with names starting "_ga".
      </p>
      <p className="text-muted-foreground mb-3">
        These cookies are off by default. They are only set if you choose "Accept analytics". If you choose "No thanks", we do not load Google Analytics.
      </p>
      <p className="text-muted-foreground mb-3">
        We save your choice, and your accessibility settings such as dark mode and text size, in your own browser. This is not shared with anyone.
      </p>
      <p className="text-muted-foreground">
        You can change your choice at any time using Cookie settings in the footer.
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
      <p className="text-muted-foreground mt-3">
        For the survey, we can act on a request only if you give us your reference code.
      </p>
      <p className="text-muted-foreground mt-3">
        To use any of these rights, email <a href="mailto:contact@dyslexiaindefence.com" className="text-primary underline underline-offset-2">contact@dyslexiaindefence.com</a>.
      </p>
      <p className="text-muted-foreground mt-3">
        If you are unhappy with how we have handled your data, you can complain to the Information Commissioner's Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">ico.org.uk</a> or by phone on 0303 123 1113.
      </p>
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
        We have carried out a Data Protection Impact Assessment (DPIA) covering our sign up form, our Discord community, how we verify military affiliation for targeted support, our anonymous survey, and our email correspondence with members. A DPIA is a structured way of thinking through the risks involved in how we use personal information, and what we are doing to reduce them.
      </p>
      <p className="text-muted-foreground">
        We are a small, founder led organisation, and we are honest that some of our processes are still maturing as we grow. Carrying out this assessment helped us identify where we needed to be clearer with you, including in this notice, where we needed to bring our practice in line with our own stated policies, such as requiring sign ups to confirm they are 18 or over, and where we still have work to do, particularly around confirming the exact safeguards used by some of our third party service providers. This DPIA is reviewed at least once a year, and whenever we introduce a new way of collecting or using personal information. It was last reviewed in October 2026.
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
