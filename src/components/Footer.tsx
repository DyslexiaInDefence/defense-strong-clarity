import { Link } from "@/lib/router-compat";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import didLogoFull from "@/assets/did-logo-full.webp";
import CovenantPledgeBand from "@/components/CovenantPledgeBand";
import { OPEN_EVENT } from "@/components/CookieBanner";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";

export type FooterLink = { label: string; to: string } | { label: string; href: string };
export type FooterColumn = { heading: { label: string; to: string }; links: FooterLink[] };

// Flip to true at switch-over, together with the route swaps
export const USE_NEW_FOOTER = false;

export const CURRENT_FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: { label: "About Us", to: "/about" },
    links: [
      { label: "Our Story", to: "/about/our-story" },
      { label: "What We Do", to: "/about/what-we-do" },
      { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
      { label: "FAQ", to: "/about/faq" },
      { label: "Contact Us", to: "/contact" },
      { label: "Governance", to: "/governance" },
      { label: "Armed Forces Covenant", to: "/armed-forces-covenant" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
  {
    heading: { label: "Get Support", to: "/support" },
    links: [
      { label: "Get Involved", to: "/join" },
      { label: "Join the Network", to: "/join" },
      { label: "Currently Serving", to: "/support/currently-serving" },
      { label: "Guidance", to: "/insights" },
      { label: "Lived Experiences", to: "/lived-experiences" },
      { label: "Peer Community", to: "/community" },
      { label: "Get Support", to: "/support" },
      { label: "Partner With Us", to: "/partner" },
    ],
  },
];

export const NEW_FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: { label: "About Us", to: "/about" },
    links: [
      { label: "Our Story", to: "/about/our-story" },
      { label: "What We Want to Achieve", to: "/about/what-we-want-to-achieve" },
      { label: "Partner With Us", to: "/partner" },
      { label: "FAQ", to: "/support/faq" },
      { label: "Contact Us", to: "/contact" },
      { label: "Governance", to: "/governance" },
      { label: "Armed Forces Covenant", to: "/armed-forces-covenant" },
      { label: "Accessibility", to: "/accessibility" },
    ],
  },
  {
    heading: { label: "Get Support", to: "/support" },
    links: [
      { label: "Start here", to: "/support/start-here" },
      { label: "Serving now (including civil service)", to: "/support/currently-serving" },
      { label: "Guidance", to: "/support/guidance" },
      { label: "Insights", to: "/insights" },
      { label: "Downloads and Tools", to: "/support/downloads-and-tools" },
    ],
  },
  {
    heading: { label: "Get Involved", to: "/get-involved" },
    links: [
      { label: "Join the Network", to: "/join" },
      { label: "Peer Community", to: "/community" },
      { label: "Lived Experiences", to: "/lived-experiences" },
      { label: "Share your story", href: SHARE_MAILTO },
    ],
  },
];

export const footerColumns: FooterColumn[] = USE_NEW_FOOTER ? NEW_FOOTER_COLUMNS : CURRENT_FOOTER_COLUMNS;

const linkClass = "text-muted-foreground hover:text-primary transition-colors";

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

        <div className={`grid gap-10 md:grid-cols-2 ${USE_NEW_FOOTER ? "lg:grid-cols-6" : "lg:grid-cols-5"}`}>
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src={didLogoFull} alt="Dyslexia in Defence" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              An independent, volunteer led initiative providing peer support and structured signposting across the defence and security ecosystem.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading.to}>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                <Link to={column.heading.to} className="hover:text-primary transition-colors">{column.heading.label}</Link>
              </h3>
              <ul className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"href" in link ? (
                      <a href={link.href} className={linkClass}>{link.label}</a>
                    ) : (
                      <Link to={link.to} className={linkClass}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Independence disclaimer */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Independence</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dyslexia in Defence is an independent, volunteer led initiative. It is not affiliated with or endorsed by the Ministry of Defence or any employer.
            </p>
            <div className="mt-4 flex items-start gap-3">
              <img
                src="/images/badges/seuk-certified.webp"
                alt="Certified Social Enterprise UK member badge"
                width="56"
                height="56"
                loading="lazy"
                className="h-14 w-14 shrink-0"
              />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Certified Social Enterprise UK member.
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/dyslexia-in-defence-cic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61595201726937"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com/@dyslexiaindefence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/dyslexia_in_defence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/9VuKbhTMM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.332-.946 2.418-2.157 2.418Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <CovenantPledgeBand />

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Dyslexia in Defence. All rights reserved.</p>
          <p className="font-medium">
            Committed to inclusion, cognitive diversity, and capability.
          </p>
        </div>

        {/* Legal registration */}
        <div className="mt-6 border-t border-border pt-4 text-center text-xs leading-relaxed text-muted-foreground">
          <p>Dyslexia in Defence CIC. Registered in England and Wales, company number 17285330.</p>
          <p className="mt-2 flex justify-center gap-4">
            <Link to="/governance/privacy" className="underline underline-offset-2 hover:text-primary">Privacy Notice</Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
              className="underline underline-offset-2 hover:text-primary"
            >
              Cookie settings
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
