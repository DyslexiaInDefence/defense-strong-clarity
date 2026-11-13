import { ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import "./support/start-here.css";

const SHOW_WIP_BANNER = true;

// Review aid listing every staged redesign page. Delete at switch-over.
export type ReviewEntry = { name: string; to: string; finalAddress: string; replaces?: string; note?: string };

export const REVIEW_GROUPS: { heading: string; entries: ReviewEntry[] }[] = [
  {
    heading: "Get support",
    entries: [
      { name: "Start here", to: "/support/start-here", finalAddress: "/support/start-here" },
      { name: "Thinking of joining", to: "/support/thinking-of-joining", finalAddress: "/support/thinking-of-joining" },
      { name: "Serving now", to: "/support/serving-now-preview", finalAddress: "/support/currently-serving", replaces: "/support/currently-serving" },
      { name: "Leaving or left service", to: "/support/leaving-or-left-service", finalAddress: "/support/leaving-or-left-service" },
      { name: "Supporting someone", to: "/support/supporting-someone", finalAddress: "/support/supporting-someone" },
      { name: "Guidance", to: "/support/guidance", finalAddress: "/support/guidance" },
      { name: "Downloads and tools", to: "/support/downloads-and-tools", finalAddress: "/support/downloads-and-tools" },
      { name: "FAQ", to: "/support/faq", finalAddress: "/support/faq" },
      { name: "Understanding how you think and learn", to: "/support/how-you-think-and-learn", finalAddress: "/support/how-you-think-and-learn" },
      { name: "Understanding Dyslexia", to: "/support/understanding-dyslexia-preview", finalAddress: "/insights/understanding-dyslexia", replaces: "the What We Do text" },
      { name: "Insights", to: "/support/insights-preview", finalAddress: "/insights", replaces: "/insights" },
      { name: "Standard Learning Credits", to: "/support/slc-preview", finalAddress: "/currently-serving/standard-learning-credits", replaces: "/currently-serving/standard-learning-credits" },
      { name: "Serving with dyslexia in the Army (skeleton)", to: "/insights/army-guide-preview", finalAddress: "/insights/serving-with-dyslexia-in-the-army-uk", note: "Headings only. Not for Publish 2 until content is written." },
    ],
  },
  {
    heading: "About and involvement",
    entries: [
      { name: "About Us", to: "/about-preview", finalAddress: "/about", replaces: "/about" },
      { name: "Get Involved", to: "/get-involved-preview", finalAddress: "/get-involved" },
      { name: "Partner with us", to: "/partner-preview", finalAddress: "/partner", replaces: "/partner" },
      { name: "Lived experiences", to: "/lived-experiences-preview", finalAddress: "/lived-experiences", replaces: "/lived-experiences" },
    ],
  },
];

const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function ReviewPreviewPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-4xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Redesign review breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Redesign review</span></li>
          </ol>
        </nav>

        <header className="pb-8 pt-4">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Redesign review</h1>
          <p className="max-w-3xl text-lg leading-relaxed">
            Every redesigned page that is built but not live yet. Open them from here. This page will be deleted at switch-over.
          </p>
        </header>

        {REVIEW_GROUPS.map(group => {
          const id = `review-${group.heading.toLowerCase().replace(/[^a-z]+/g, "-")}`;
          return (
            <section key={group.heading} aria-labelledby={id} className="mb-10">
              <h2 id={id} className="mb-4 text-2xl font-bold">{group.heading}</h2>
              <ul className="divide-y divide-border rounded-lg border border-border bg-card">
                {group.entries.map(entry => (
                  <li key={entry.to} className="px-4 py-3 sm:px-6">
                    <Link
                      to={entry.to}
                      className={`inline-flex min-h-11 items-center rounded-xs text-lg font-semibold text-primary underline underline-offset-4 ${linkFocus}`}
                    >
                      {entry.name}
                    </Link>
                    <p className="break-words text-base leading-relaxed">Final address: {entry.finalAddress}</p>
                    <p className="break-words text-base leading-relaxed">{entry.replaces ? `Replaces: ${entry.replaces}` : "New page"}</p>
                    {entry.note && <p className="break-words text-base font-semibold leading-relaxed">{entry.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
