import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const LABELS: Record<string, string> = {
  insights: "FAQ",
  governance: "Governance",
  about: "About",
  community: "Ask the Community",
  join: "Join the Network",
  partner: "Partner",
  achieve: "What We Want to Achieve",
  "why-it-matters": "Why It Matters",
  contact: "Contact",
  privacy: "Privacy",
  accessibility: "Accessibility",
  resources: "Resources",
  support: "Support",
  ecosystem: "Ecosystem",
  founder: "Founder & Purpose",
  "code-of-conduct": "Code of Conduct",
  safeguarding: "Safeguarding",
  sponsorship: "Sponsorship",
  transparency: "Transparency",
  "can-you-join-army-with-dyslexia-uk": "Army & Dyslexia",
  "can-you-join-raf-with-dyslexia-uk": "RAF & Dyslexia",
  "can-you-join-navy-with-dyslexia-uk": "Royal Navy & Dyslexia",
  "is-dyslexia-a-barrier-in-the-military-uk": "Is Dyslexia a Barrier?",
  "neurodiversity-in-the-mod-uk": "Neurodiversity in the MOD",
  "jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk":
    "JSP 822 vs Equality Act",
  "do-i-need-to-declare-dyslexia-when-joining-the-military-uk":
    "Declaring Dyslexia",
  "serving-with-dyslexia-in-the-army-uk":
    "Serving with Dyslexia",
  "what-support-is-available-for-dyslexia-in-the-military-uk":
    "Support Available",
  "what-happens-if-dyslexia-is-identified-during-service-uk":
    "Identified in Service",
};

const formatSegment = (seg: string) =>
  LABELS[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  const crumbs = segments.map((seg, i) => ({
    label: formatSegment(seg),
    to: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border bg-background/60"
    >
      <ol className="container mx-auto flex flex-wrap items-center gap-1.5 px-4 py-2.5 text-sm">
        <li>
          <Link
            to="/"
            className="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Home
          </Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.to} className="flex items-center gap-1.5">
            <ChevronRight className="h-4 w-4 text-muted-foreground/60" aria-hidden="true" />
            {c.isLast ? (
              <span className="font-medium text-foreground" aria-current="page">
                {c.label}
              </span>
            ) : (
              <Link
                to={c.to}
                className="text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
