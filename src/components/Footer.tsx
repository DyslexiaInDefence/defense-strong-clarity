import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card py-14" role="contentinfo" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand & mission */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Dyslexia in Defence</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A network committed to recognising, supporting, and celebrating dyslexic thinking across the defence community.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="mailto:info@dyslexiaindefence.org" className="hover:text-primary transition-colors">
                  info@dyslexiaindefence.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>+44 (0)20 0000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Statement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility Statement</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        {/* Ribbon divider */}
        <div
          className="my-8 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(var(--ribbon-yellow)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-red)), hsl(var(--ribbon-green)))",
          }}
          aria-hidden="true"
        />

        <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Dyslexia in Defence. All rights reserved.</p>
          <p className="font-medium">
            Committed to inclusion, diversity, and the power of different thinking.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
