import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import SupportTabs from "@/components/SupportTabs";
import "./start-here.css";

const cards = [
  { title: "The evidence", description: "The data behind the story: what we know about dyslexia across Defence, and where the numbers come from.", label: "Read the evidence", to: "/evidence" },
  { title: "Understanding dyslexia", description: "What a 'spiky' profile tells you about dyslexia", label: "Read about dyslexia", to: "/insights/understanding-dyslexia" },
];

// Restored from the retired Insights page, with its em dashes replaced by colons.
export const KEY_TAKEAWAYS = [
  { lead: "Dyslexia is present", rest: " across the entire defence community: military, civil service and industry." },
  { lead: "Support is improving", rest: ", but awareness remains inconsistent across organisations and ranks." },
  { lead: "Lived experience matters", rest: " as much as policy: peer support drives real change." },
  { lead: "Neurodiversity can be a leadership strength", rest: ": different thinking is an operational advantage." },
];

const more = [
  { title: "Start here", description: "Choose the route that sounds most like you.", to: "/support/start-here" },
  { title: "Guidance", description: "Every guide, filtered to you.", to: "/support/guidance" },
  { title: "Downloads and tools", description: "Forms, directories and guides.", to: "/support/downloads-and-tools" },
  { title: "FAQ", description: "Quick answers to common questions.", to: "/support/faq" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary ${linkFocus}`;

export default function InsightsLandingPage() {
  return (
    <div className="support-staged-page text-foreground">
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Insights breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/start-here">Get support</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Insights</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/insights" />

        <header className="pb-8 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Insights</h1>
          <p className="max-w-3xl text-lg leading-relaxed">The evidence behind this work, and what Dyslexia in Defence does and why. Written mainly for leaders, employers and researchers.</p>
        </header>

        <ul className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {cards.map(card => (
            <li key={card.to} className={`${panelClass} flex min-w-0 flex-col`}>
              <h2 className="mb-2 text-xl font-bold leading-relaxed">{card.title}</h2>
              <p className="mb-4 text-base leading-relaxed">{card.description}</p>
              <Link to={card.to} className={`${textLink} mt-auto self-start`}>
                {card.label}<ArrowRight aria-hidden="true" className="size-4 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>

        <section aria-labelledby="key-takeaways" className={`${panelClass} mb-6`}>
          <h2 id="key-takeaways" className="mb-4 text-2xl font-bold">Key takeaways</h2>
          <ul className="space-y-4 text-base leading-relaxed">
            {KEY_TAKEAWAYS.map(item => (
              <li key={item.lead} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2 block size-2.5 shrink-0 rounded-full bg-primary" />
                <span><strong>{item.lead}</strong>{item.rest}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="looking-for-guides" className={`${panelClass} mb-12`}>
          <h2 id="looking-for-guides" className="mb-4 text-2xl font-bold">Looking for guides?</h2>
          <p className="text-base leading-relaxed">
            Guidance for joining, serving, leaving and supporting someone is in <Link to="/support/guidance" className="rounded-sm font-semibold underline underline-offset-4 hover:text-primary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring">Guidance</Link>.
          </p>
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
