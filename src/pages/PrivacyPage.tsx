const PrivacyPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Privacy Statement</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Dyslexia in Defence is committed to handling personal data responsibly and in line with UK data protection principles.
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">What We Collect</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Name and email address when you contact us or join the community</li>
                <li>Your connection to the defence and security sector (if voluntarily provided)</li>
                <li>Areas of interest (if voluntarily provided)</li>
                <li>Technical data such as IP address and browser type for site functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">How We Use It</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>To respond to enquiries and communications</li>
                <li>To manage community membership</li>
                <li>To send updates if you have opted in to receive them</li>
                <li>To improve the functionality and content of this website</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Data Retention</h2>
              <p>Personal data is retained only for as long as necessary to fulfil its stated purpose. You may request deletion of your data at any time by contacting us.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Your Rights</h2>
              <p>Under UK data protection law, you have the right to access, correct, or delete your personal data. You may also object to its processing or request data portability. To exercise any of these rights, please contact us.</p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Contact</h2>
              <p>For any privacy-related enquiries, please use the contact form on this website or email us directly.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
