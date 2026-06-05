import { Link } from "react-router-dom";
import didLogoFull from "@/assets/did-logo-full.webp";

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

        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src={didLogoFull} alt="Dyslexia in Defence" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              An independent, volunteer led initiative providing peer support and structured signposting across the defence and security ecosystem.
            </p>
          </div>

          {/* About group */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            </h3>
          <ul className="space-y-2 text-sm">
              <li><Link to="/why-it-matters" className="text-muted-foreground hover:text-primary transition-colors">Why It Matters</Link></li>
              <li><Link to="/achieve" className="text-muted-foreground hover:text-primary transition-colors">What We Want to Achieve</Link></li>
              <li><Link to="/governance/founder" className="text-muted-foreground hover:text-primary transition-colors">Founder</Link></li>
              <li><Link to="/governance" className="text-muted-foreground hover:text-primary transition-colors">Governance</Link></li>
              <li><Link to="/governance/sponsorship" className="text-muted-foreground hover:text-primary transition-colors">Sponsorship</Link></li>
              <li><Link to="/governance/transparency" className="text-muted-foreground hover:text-primary transition-colors">Transparency</Link></li>
              <li><Link to="/governance/safeguarding" className="text-muted-foreground hover:text-primary transition-colors">Safeguarding</Link></li>
            </ul>
          </div>

          {/* Support group */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">
              <Link to="/support" className="hover:text-primary transition-colors">Support</Link>
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/join" className="text-muted-foreground hover:text-primary transition-colors">Join</Link></li>
              <li><Link to="/partner" className="text-muted-foreground hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Independence disclaimer */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground">Independence</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Dyslexia in Defence is an independent, volunteer led initiative. It is not affiliated with or endorsed by the Ministry of Defence or any employer.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Dyslexia in Defence. All rights reserved.</p>
          <p className="font-medium">
            Committed to inclusion, cognitive diversity, and capability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
