import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";

const SUPPORT_TABS = [
  { label: "Start here", to: "/support/start-here" },
  { label: "Guidance", to: "/support/guidance" },
  { label: "Downloads and tools", to: "/support/downloads-and-tools" },
  { label: "FAQ", to: "/support/faq" },
  { label: "Insights", to: "/insights" },
];

export default function SupportTabs({ activePath }: { activePath: string }) {
  return (
    <nav aria-label="Get support pages" className="border-b border-border pb-3">
      <ul className="flex flex-wrap gap-2">
        {SUPPORT_TABS.map(tab => (
          <li key={tab.to} className="min-w-0">
            <Button asChild variant={activePath === tab.to ? "secondary" : "ghost"} className="min-h-11 h-auto whitespace-normal px-4 py-3 text-base text-foreground">
              <Link to={tab.to} aria-current={activePath === tab.to ? "page" : undefined}>{tab.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}