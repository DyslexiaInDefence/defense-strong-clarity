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
    title: "Can you join with dyslexia?",
    description: "What it does and doesn't change when you apply.",
    links: [
      { label: "Army", to: "/insights/can-you-join-army-with-dyslexia-uk", srLabel: "Can you join the Army with dyslexia?" },
      { label: "Royal Navy", to: "/insights/can-you-join-navy-with-dyslexia-uk", srLabel: "Can you join the Royal Navy with dyslexia?" },
      { label: "RAF", to: "/insights/can-you-join-raf-with-dyslexia-uk", srLabel: "Can you join the RAF with dyslexia?" },
    ],
  },
  {
    title: "Do I need to declare dyslexia?",
    description: "You are not screened for dyslexia during recruitment. Here is what to ask your recruiter and what declaring can do for you.",
    links: [{ label: "Read the guidance", to: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk", srLabel: "Read the guidance on declaring dyslexia" }],
  },
  {
    title: "Is dyslexia a barrier?",
    description: "The straight answer, and the standards you will still need to meet.",
    links: [{ label: "Read the guidance", to: "/insights/is-dyslexia-a-barrier-in-the-military-uk", srLabel: "Read the guidance on whether dyslexia is a barrier" }],
  },
  {
    title: "Understanding how you think and learn",
    description: "What dyslexia is, how it shows up for you, and what screening and assessment can offer. An explanation, not a label.",
    links: [{ label: "Read the guidance", to: "/support/how-you-think-and-learn", srLabel: "Read the guidance on how you think and learn" }],
  },
];

const answers = [
  {
    q: "Can you join the Army with dyslexia?",
    a: "Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met.",
  },
  {
    q: "Do I need to declare dyslexia when joining?",
    a: "You are not screened for dyslexia or other specific learning difficulties during recruitment. Ask your recruiter what the application asks, so you know what to expect. Declaring can help others understand how you work best, but what support follows varies by service.",
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

export default function ThinkingOfJoiningPage() {
  return (
    <div className="support-staged-page support-route-joining text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Thinking of joining breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support">Get support</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/start-here">Start here</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Thinking of joining</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/start-here" />

        <div className="support-identity-strip mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg border border-border bg-card px-4 py-2 sm:px-5">
          <p className="text-base leading-relaxed">You're viewing: <strong>Thinking of joining</strong></p>
          <Link to="/support/start-here" className={textLink}>Not you? Switch</Link>
        </div>

        <header className="pb-10 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Thinking of joining</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met. Start with the question you are asking.</p>
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
          <p className="mt-5"><Link to="/support/guidance" className={textLink}>See all guidance for joining<ArrowRight aria-hidden="true" className="size-4" /></Link></p>
        </section>

        <section aria-labelledby="quick-answers" className="mb-12">
          <h2 id="quick-answers" className="mb-6 text-2xl font-bold">Quick answers</h2>
          <div className="space-y-4">
            {answers.map(item => (
              <div key={item.q} className={`${panelClass} sm:p-6`}>
                <h3 className="mb-2 text-lg font-semibold leading-relaxed">{item.q}</h3>
                <p className="mb-2 text-base leading-relaxed">{item.a}</p>
                <Link to="/about/faq" className={textLink} aria-label={`Read the full answer: ${item.q}`}>Read the full answer<ArrowRight aria-hidden="true" className="size-4" /></Link>
              </div>
            ))}
          </div>
          <p className="mt-5"><Link to="/about/faq" className={textLink}>See all FAQs<ArrowRight aria-hidden="true" className="size-4" /></Link></p>
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
