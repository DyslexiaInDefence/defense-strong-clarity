import { ArrowRight, ChevronRight } from "lucide-react";
import { getRouteApi } from "@tanstack/react-router";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import SupportTabs from "@/components/SupportTabs";
import { AUDIENCE_LABELS, GUIDE_FILTERS, GUIDES, filterGuides, parseGuideFilter, type GuideFilter } from "./guidanceLibrary";
import "./start-here.css";
import "./guidance.css";

const SHOW_WIP_BANNER = true;

const routeApi = getRouteApi("/support/guidance");

const more = [
  { title: "Start here", description: "Choose the route that sounds most like you.", to: "/support/start-here" },
  { title: "Downloads and tools", description: "Forms, directories and guides.", to: "/support/downloads-and-tools" },
  { title: "FAQ", description: "Quick answers to common questions.", to: "/support/faq" },
  { title: "Insights", description: "The evidence behind this work.", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary ${linkFocus}`;

export default function GuidancePage() {
  const search = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const selected = parseGuideFilter(search.for);
  const shown = filterGuides(GUIDES, selected);

  const choose = (value: GuideFilter) => {
    navigate({ search: value === "all" ? {} : { for: value }, replace: true, resetScroll: false });
  };

  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Guidance breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support">Get support</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Guidance</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/guidance" />

        <header className="pb-8 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Guidance</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Plain-English guides, written for where you are. Pick who you are to narrow the list.</p>
        </header>

        <div role="group" aria-labelledby="guidance-filter-label" className="mb-4">
          <p id="guidance-filter-label" className="mb-3 text-base font-semibold">Show guides for</p>
          <ul className="flex flex-wrap gap-2">
            {GUIDE_FILTERS.map(filter => {
              const pressed = selected === filter.value;
              return (
                <li key={filter.value} className="min-w-0">
                  <Button
                    type="button"
                    variant={pressed ? "default" : "outline"}
                    aria-pressed={pressed}
                    onClick={() => choose(filter.value)}
                    className={`min-h-11 h-auto whitespace-normal px-4 py-2 text-base ${pressed ? "" : "text-foreground"}`}
                  >
                    {filter.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>

        <section aria-labelledby="guides-heading" className="mb-12">
          <h2 id="guides-heading" className="mb-2 text-2xl font-bold">Guides</h2>
          <p className="mb-6 text-base leading-relaxed" aria-live="polite" aria-atomic="true">
            Showing {shown.length} {shown.length === 1 ? "guide" : "guides"}
          </p>
          <ul className="grid gap-5 md:grid-cols-2">
            {shown.map(guide => (
              <li key={`${guide.audience}-${guide.title}`} className="min-w-0">
                <article className={`${panelClass} flex h-full min-w-0 flex-col`}>
                  <p className="mb-3">
                    <span className={`guidance-chip text-sm font-semibold ${guide.audience === "everyone" ? "" : `support-route-${guide.audience}`}`}>
                      {AUDIENCE_LABELS[guide.audience]}
                    </span>
                  </p>
                  <h3 className="mb-3 text-xl font-semibold leading-relaxed">{guide.title}</h3>
                  <p className="mb-4 text-base leading-relaxed">{guide.description}</p>
                  <Link to={guide.to} className={`${textLink} mt-auto self-start`} aria-label={`Read the guide: ${guide.title}`}>
                    Read<ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="more-support">
          <h2 id="more-support" className="mb-6 text-2xl font-bold">More in Get support</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {more.map(item => (
              <Link key={item.to} to={item.to} className={`${panelClass} ${linkFocus} flex min-w-0 flex-col p-4 sm:p-5 hover:border-primary`}>
                <h3 className="mb-2 text-lg font-semibold leading-relaxed">{item.title}</h3>
                <p className="text-base leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
