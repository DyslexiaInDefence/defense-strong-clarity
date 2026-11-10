import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import SupportTabs from "@/components/SupportTabs";
import "./start-here.css";

const SHOW_WIP_BANNER = true;

const next = [
  { label: "Guidance", to: "/support/guidance" },
  { label: "Downloads and tools", to: "/support/downloads-and-tools" },
  { label: "Get an assessment through Standard Learning Credits", to: "/currently-serving/standard-learning-credits" },
];

const more = [
  { title: "Start here", description: "Choose the route that sounds most like you.", to: "/support/start-here" },
  { title: "Guidance", description: "Every guide, filtered to you.", to: "/support/guidance" },
  { title: "Downloads and tools", description: "Forms, directories and guides.", to: "/support/downloads-and-tools" },
  { title: "FAQ", description: "Quick answers to common questions.", to: "/support/faq" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const noteClass = "rounded-lg border-2 border-border bg-muted p-5 text-base leading-relaxed";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary ${linkFocus}`;

export default function HowYouThinkAndLearnPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Understanding how you think and learn breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support">Get support</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/guidance">Guidance</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Understanding how you think and learn</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/guidance" />

        <header className="pb-8 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Understanding how you think and learn</h1>
          <p className="max-w-3xl text-lg leading-relaxed">What dyslexia is, how it shows up for you, and where to go next. An explanation, not a label.</p>
        </header>

        <section aria-labelledby="think-and-learn" className={`${panelClass} mb-6`}>
          <h2 id="think-and-learn" className="mb-4 text-2xl font-bold">How you think and learn</h2>
          <div role="note" data-placeholder="" className={noteClass}>
            <p>Content to come.</p>
          </div>
        </section>

        <section aria-labelledby="independent-tools" className={`${panelClass} mb-6`}>
          <h2 id="independent-tools" className="mb-4 text-2xl font-bold">Independent tools you can try</h2>
          <div role="note" data-placeholder="" className={`${noteClass} mb-4`}>
            <p>Independent profiling and screening tools will be listed here.</p>
          </div>
          <div role="note" className={noteClass}>
            <p>Dyslexia in Defence receives no payment, commission, referral fee or any other financial benefit from listing any tool or provider. Tools are listed for information only. A screening or profile is not a diagnosis.</p>
          </div>
        </section>

        <section aria-labelledby="where-next" className={`${panelClass} mb-12`}>
          <h2 id="where-next" className="mb-4 text-2xl font-bold">Where to go next</h2>
          <ul className="flex flex-col gap-2">
            {next.map(item => (
              <li key={item.to} className="min-w-0">
                <Link to={item.to} className={textLink}>
                  {item.label}<ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                </Link>
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
