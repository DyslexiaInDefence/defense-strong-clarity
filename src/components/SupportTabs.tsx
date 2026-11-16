import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";

const SUPPORT_TABS = [
  { label: "Start here", to: "/support/start-here" },
  { label: "Guidance", to: "/support/guidance" },
  { label: "Downloads and tools", to: "/support/downloads-and-tools" },
  { label: "FAQ", to: "/support/faq" },
  { label: "Insights", to: "/insights" },
];

// activePath marks the tab for the section. On a page below a tab (an Insights article), pass
// onTabPage={false} so the tab is marked as the current section rather than the current page.
export default function SupportTabs({ activePath, onTabPage = true }: { activePath: string; onTabPage?: boolean }) {
  return (
    <nav aria-label="Get support pages" className="border-b border-border pb-3">
      <ul className="flex flex-wrap gap-2">
        {SUPPORT_TABS.map(tab => (
          <li key={tab.to} className="min-w-0">
            <Button asChild variant={activePath === tab.to ? "secondary" : "ghost"} className="min-h-11 h-auto whitespace-normal px-4 py-3 text-base text-foreground">
              <Link to={tab.to} aria-current={activePath === tab.to ? (onTabPage ? "page" : "true") : undefined}>{tab.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}