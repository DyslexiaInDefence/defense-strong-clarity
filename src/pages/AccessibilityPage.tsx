const AccessibilityPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Accessibility Statement</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Dyslexia in Defence is committed to providing an accessible experience for all users. This website has been designed with accessibility as a core requirement.
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Our Commitment</h2>
              <p>
                We aim to meet Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. Accessibility is not an afterthought — it is integral to our design and development process.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Accessibility Features</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Dark mode toggle for reduced eye strain</li>
                <li>Text size increase toggle for improved readability</li>
                <li>Reduce motion toggle for users sensitive to animation</li>
                <li>Dyslexia-friendly typography (Lexend font family)</li>
                <li>High contrast colour palette meeting WCAG AA ratios</li>
                <li>Semantic HTML with ARIA landmarks and labels</li>
                <li>Full keyboard navigation support</li>
                <li>Responsive design for all device sizes</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Known Limitations</h2>
              <p>
                While we strive for full compliance, some content may not yet meet all accessibility standards. We are actively working to identify and resolve any gaps.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-bold text-foreground">Feedback</h2>
              <p>
                If you experience any accessibility barriers on this website, please contact us. Your feedback helps us improve the experience for all users.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
