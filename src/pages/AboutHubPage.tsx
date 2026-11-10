import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import "./support/start-here.css";

const SHOW_WIP_BANNER = true;

export const ABOUT_CARDS = [
  { title: "Our story", description: "How Dyslexia in Defence began.", to: "/about/our-story" },
  { title: "What we want to achieve", description: "Our aims for people affected by dyslexia across Defence.", to: "/about/what-we-want-to-achieve" },
  { title: "Partner with us", description: "Work with the CIC. Includes our signed Armed Forces Covenant.", to: "/partner" },
];

export const GOVERNANCE_CARDS = [
  { title: "Governance", description: "Seven governance pages, grouped together.", to: "/governance" },
  { title: "Accessibility", description: "How we keep this site easy to read, navigate and understand.", to: "/accessibility" },
  { title: "Contact us", description: "Get in touch with the team.", to: "/contact" },
];

export const MORE_LINKS = [
  { title: "Get support", to: "/support" },
  { title: "Insights", to: "/insights" },
  { title: "Lived experiences", to: "/lived-experiences" },
  { title: "Join the Network", to: "/join" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const gridClass = "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3";

function CardGrid({ cards, headingLevel }: { cards: typeof ABOUT_CARDS; headingLevel: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className={gridClass}>
      {cards.map(card => (
        <li key={card.to} className="flex min-w-0">
          <Link
            to={card.to}
            className={`group ${panelClass} ${linkFocus} flex w-full min-w-0 flex-col border-s-[6px] border-s-primary hover:border-primary sm:p-6`}
          >
            <Heading className="mb-2 text-xl font-bold leading-relaxed">{card.title}</Heading>
            <p className="mb-4 text-base leading-relaxed">{card.description}</p>
            <span className="mt-auto inline-flex min-h-11 items-center gap-1 self-start text-base font-semibold text-primary underline underline-offset-4">
              Read more<ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function AboutHubPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="About us breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">About us</span></li>
          </ol>
        </nav>

        <header className="pb-10 pt-4">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">About us</h1>
          <div className="max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed">
              Dyslexia in Defence is a registered Community Interest Company, created to support people with dyslexia and neurodiversity across the UK Defence community by improving understanding, sharing lived experience, and connecting people to the right support.
            </p>
            <p className="text-base leading-relaxed">
              We are an independent, volunteer led initiative. Not affiliated with or endorsed by the Ministry of Defence or any employer.
            </p>
            <p className="text-base leading-relaxed">
              Dyslexia in Defence CIC is registered in England and Wales. Company number: 17285330.
            </p>
          </div>
        </header>

        <section aria-label="About Dyslexia in Defence" className="mb-12">
          <CardGrid cards={ABOUT_CARDS} headingLevel="h2" />
        </section>

        <section aria-labelledby="governance-contact" className="mb-12">
          <h2 id="governance-contact" className="mb-6 text-2xl font-bold">Governance and contact</h2>
          <CardGrid cards={GOVERNANCE_CARDS} headingLevel="h3" />
        </section>

        <section aria-labelledby="more-from">
          <h2 id="more-from" className="mb-6 text-2xl font-bold">More from Dyslexia in Defence</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {MORE_LINKS.map(item => (
              <li key={item.to} className="flex min-w-0">
                <Link to={item.to} className={`${panelClass} ${linkFocus} flex min-h-11 w-full min-w-0 items-center justify-between gap-2 p-4 text-lg font-semibold leading-relaxed hover:border-primary sm:p-5`}>
                  {item.title}<ArrowRight aria-hidden="true" className="size-4 shrink-0 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
