import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Menu, X } from "lucide-react";
import didIcon from "@/assets/did-icon.png";

interface Section {
  id: string;
  title: string;
}

interface PolicyLayoutProps {
  title: string;
  summary: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

const governancePages = [
  { label: "Governance Overview", to: "/governance" },
  { label: "Founder & Purpose", to: "/governance/founder" },
  { label: "Code of Conduct", to: "/governance/code-of-conduct" },
  { label: "Safeguarding & Support", to: "/governance/safeguarding" },
  { label: "Privacy Notice", to: "/governance/privacy" },
  { label: "Sponsorship Principles", to: "/governance/sponsorship" },
  { label: "Transparency Commitment", to: "/governance/transparency" },
];

export const Callout = ({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "warning" | "important" }) => {
  const styles = {
    info: "border-primary/40 bg-primary/5",
    warning: "border-accent/60 bg-accent/5",
    important: "border-destructive/40 bg-destructive/5",
  };
  return (
    <div className={`rounded-lg border-l-4 p-4 my-6 ${styles[variant]}`} role="note">
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
};

const PolicyLayout = ({ title, summary, lastUpdated, sections, children }: PolicyLayoutProps) => {
  const [activeSection, setActiveSection] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top ribbon */}
      <div
        className="w-full h-1"
        style={{
          backgroundImage:
            "linear-gradient(90deg, hsl(var(--ribbon-yellow)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-red)), hsl(var(--ribbon-green)), hsl(var(--ribbon-yellow)))",
          backgroundSize: "300% 100%",
        }}
      />

      {/* Back nav */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <img src={didIcon} alt="" className="h-6 w-auto" aria-hidden="true" />
            <ChevronLeft className="h-4 w-4" />
            Dyslexia in Defence
          </Link>
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-secondary"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle page navigation"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside
            className={`${
              sidebarOpen ? "block fixed inset-0 top-[53px] z-30 bg-background p-6 overflow-y-auto" : "hidden"
            } lg:block lg:static lg:w-64 lg:shrink-0`}
          >
            <nav className="lg:sticky lg:top-20 space-y-6" aria-label="Policy navigation">
              {/* Page nav */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Governance & Policies
                </h3>
                <ul className="space-y-1">
                  {governancePages.map((p) => (
                    <li key={p.to}>
                      <Link
                        to={p.to}
                        onClick={() => setSidebarOpen(false)}
                        className="block text-sm py-1.5 px-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section anchors */}
              {sections.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    On this page
                  </h3>
                  <ul className="space-y-1 border-l-2 border-border pl-3">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className={`block w-full text-left text-sm py-1 transition-colors ${
                            activeSection === s.id
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {s.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          </aside>

          {/* Main content */}
          <main className="min-w-0 flex-1 max-w-3xl">
            <header className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-4">
                {summary}
              </p>
            </header>

            <div className="prose-policy space-y-10">{children}</div>

            {/* Contact for governance enquiries */}
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="text-xl font-bold text-foreground mb-3">Governance Enquiries</h2>
              <p className="text-muted-foreground mb-3">
                For questions about governance, policies, or any matter raised on this page, please contact:
              </p>
              <a
                href="mailto:contact@dyslexiaindefence.com"
                className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium"
              >
                contact@dyslexiaindefence.com
              </a>
            </div>

            {/* Last updated */}
            <div className="mt-10 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;
