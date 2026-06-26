import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-14" role="contentinfo" aria-label="Footer">
      <div className="container mx-auto px-4">
        {/* Ribbon divider */}
        <div
          className="mb-10 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--ribbon-yellow)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-red)), hsl(var(--ribbon-green)))",
          }}
          aria-hidden="true"
        />

        {/* Top area: name, tagline, independence */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-bold text-foreground">
            Dyslexia in Defence
          </p>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Committed to inclusion, cognitive diversity, and capability.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Dyslexia in Defence is an independent, volunteer led initiative. It
            is not affiliated with or endorsed by the Ministry of Defence or any
            employer.
          </p>
        </div>

        {/* Middle area: actions, email, badge */}
        <div className="mb-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/structure"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Structure
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>

          <a
            href="mailto:contact@dyslexiaindefence.com"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            contact@dyslexiaindefence.com
          </a>

          <div className="flex items-center gap-3">
            <img
              src="/images/badges/seuk-certified.webp"
              alt="Certified Social Enterprise UK member badge"
              width="56"
              height="56"
              loading="lazy"
              className="h-14 w-14"
            />
            <span className="text-xs text-muted-foreground">
              Certified Social Enterprise UK member.
            </span>
          </div>
        </div>

        {/* Bottom area: copyright, legal, privacy */}
        <div className="border-t border-border pt-6 text-center text-xs leading-relaxed text-muted-foreground">
          <p className="mb-1">© 2026 Dyslexia in Defence. All rights reserved.</p>
          <p>Dyslexia in Defence CIC</p>
          <p>Company number: 17285330</p>
          <p>Registered in England and Wales</p>
          <p>Private Limited by Guarantee</p>
          <p className="mt-3">
            <Link to="/privacy" className="underline transition-colors hover:text-primary">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
