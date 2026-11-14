import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import SupportTabs from "@/components/SupportTabs";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";
import "./start-here.css";

const SHOW_WIP_BANNER = true;

type CardLink = { label: string; to: string; srLabel?: string };

const begin: { title: string; description: string; links: CardLink[] }[] = [
  {
    title: "Understanding how dyslexia works",
    description: "What dyslexia is, how it shows up day to day, and what helps. An explanation, not a label.",
    links: [{ label: "Read the guidance", to: "/insights/understanding-dyslexia", srLabel: "Read the guidance on understanding how dyslexia works" }],
  },
  {
    title: "Supporting someone in Service",
    description: "An overview of peer networks, education staff and feasible support in Service, which can vary by service, unit and local leadership.",
    links: [{ label: "Read the guidance", to: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk", srLabel: "Read the guidance on supporting someone with dyslexia in Service" }],
  },
];

const answers = [
  {
    q: "I manage or train someone with dyslexia. Where do I start?",
    a: "Start by asking the person what helps them, and listen. Often the changes are small: clearer written instructions, information broken into smaller steps, or a little more time to process it. Under JSP 822, support in Service is based on what is feasible for the role.",
  },
];

const more = [
  { title: "All guidance", description: "Every guide, filtered to you.", to: "/support/guidance" },
  { title: "Downloads and tools", description: "Forms, directories and guides.", to: "/support/downloads-and-tools" },
  { title: "FAQ", description: "Quick answers to common questions.", to: "/support/faq" },
  { title: "Insights", description: "The evidence behind this work.", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary ${linkFocus}`;

export default function SupportingSomeonePage() {
  return (
    <div className="support-staged-page support-route-supporting text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Supporting someone breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/start-here">Get support</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/start-here">Start here</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Supporting someone</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/start-here" />

        <div className="support-identity-strip mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg border border-border bg-card px-4 py-2 sm:px-5">
          <p className="text-base leading-relaxed">You're viewing: <strong>Supporting someone</strong></p>
          <Link to="/support/start-here" className={textLink}>Not you? Switch</Link>
        </div>

        <header className="pb-10 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Supporting someone</h1>
          <p className="max-w-3xl text-lg leading-relaxed">For family and friends, and for the instructors, commanders, managers and colleagues who work alongside someone with dyslexia.</p>
        </header>

        <section aria-labelledby="where-to-begin" className="mb-12">
          <h2 id="where-to-begin" className="mb-6 text-2xl font-bold">Where to begin</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {begin.map(card => (
              <article key={card.title} className={`support-route-card ${panelClass} flex min-w-0 flex-col`}>
                <h3 className="mb-3 text-xl font-semibold leading-relaxed">{card.title}</h3>
                <p className="mb-4 text-base leading-relaxed">{card.description}</p>
                <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-1">
                  {card.links.map(link => (
                    <li key={link.to}>
                      <Link to={link.to} className={textLink} aria-label={link.srLabel}>{link.label}<ArrowRight aria-hidden="true" className="size-4" /></Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-5"><Link to="/support/guidance" className={textLink}>See all guidance for supporting someone<ArrowRight aria-hidden="true" className="size-4" /></Link></p>
        </section>

        <section aria-labelledby="downloads-tools" className="mb-12">
          <h2 id="downloads-tools" className="mb-6 text-2xl font-bold">Downloads and tools</h2>
          <p><Link to="/support/downloads-and-tools" className={textLink}>See all downloads and tools<ArrowRight aria-hidden="true" className="size-4" /></Link></p>
        </section>

        <section aria-labelledby="quick-answers" className="mb-12">
          <h2 id="quick-answers" className="mb-6 text-2xl font-bold">Quick answers</h2>
          <div className="space-y-4">
            {answers.map(item => (
              <div key={item.q} className={`${panelClass} sm:p-6`}>
                <h3 className="mb-2 text-lg font-semibold leading-relaxed">{item.q}</h3>
                <p className="mb-2 text-base leading-relaxed">{item.a}</p>
                <Link to="/support/faq" className={textLink} aria-label={`Read the full answer: ${item.q}`}>Read the full answer<ArrowRight aria-hidden="true" className="size-4" /></Link>
              </div>
            ))}
          </div>
          <p className="mt-5"><Link to="/support/faq" className={textLink}>See all FAQs<ArrowRight aria-hidden="true" className="size-4" /></Link></p>
        </section>

        <section aria-labelledby="real-stories" className={`${panelClass} mb-12`}>
          <h2 id="real-stories" className="mb-3 text-2xl font-bold">Real stories</h2>
          <p className="mb-6 text-base leading-relaxed">Read what it has been like for other people, or share your own.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base"><Link to="/lived-experiences">Read lived experiences</Link></Button>
            <Button asChild variant="outline" className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base"><a href={SHARE_MAILTO}>Share your story</a></Button>
          </div>
          <p className="mt-4 text-base leading-relaxed">Stories are personal views. They are not the view of the MOD or of the internal Defence Dyslexia Network.</p>
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
