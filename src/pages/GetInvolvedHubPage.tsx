import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";
import "./support/start-here.css";

const SHOW_WIP_BANNER = true;

type WayCard = { title: string; description: string; label: string } & ({ to: string } | { href: string });

export const WAYS_TO_TAKE_PART: WayCard[] = [
  { title: "Community", description: "Talk to others in our peer community on Discord.", label: "Join the community", to: "/community" },
  { title: "Lived experiences", description: "Read what it has been like for other people.", label: "Read the stories", to: "/lived-experiences" },
  { title: "Share your story", description: "Tell us your own, in your own words.", label: "Share your story", href: SHARE_MAILTO },
];

export const MORE_LINKS = [
  { title: "About us", to: "/about" },
  { title: "Get support", to: "/support/start-here" },
  { title: "Partner with us", to: "/partner" },
  { title: "Insights", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const cardClass = `group ${panelClass} ${linkFocus} flex w-full min-w-0 flex-col border-s-[6px] border-s-primary hover:border-primary sm:p-6`;

function CardBody({ card }: { card: WayCard }) {
  return (
    <>
      <h3 className="mb-2 text-xl font-bold leading-relaxed">{card.title}</h3>
      <p className="mb-4 text-base leading-relaxed">{card.description}</p>
      <span className="mt-auto inline-flex min-h-11 items-center gap-1 self-start text-base font-semibold text-primary underline underline-offset-4">
        {card.label}<ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </span>
    </>
  );
}

export default function GetInvolvedHubPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Get involved breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Get involved</span></li>
          </ol>
        </nav>

        <header className="pb-10 pt-4">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Get involved</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Meet others, share what it has been like, and help shape what we do.</p>
        </header>

        <section aria-labelledby="join-network" className={`${panelClass} mb-12 border-s-[6px] border-s-primary`}>
          <h2 id="join-network" className="mb-3 text-2xl font-bold">Join the Network</h2>
          <p className="mb-2 max-w-3xl text-lg leading-relaxed">Open to anyone connected to the defence and security sector.</p>
          <p className="mb-6 max-w-3xl text-base leading-relaxed">Open to adults aged 18 and over.</p>
          <Button asChild size="lg" className="min-h-12 h-auto max-w-full whitespace-normal rounded-full px-8 py-3 text-base font-bold">
            <Link to="/join">Join the Network<ArrowRight aria-hidden="true" className="size-4 shrink-0" /></Link>
          </Button>
        </section>

        <section aria-labelledby="ways-to-take-part" className="mb-12">
          <h2 id="ways-to-take-part" className="mb-6 text-2xl font-bold">Ways to take part</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {WAYS_TO_TAKE_PART.map(card => (
              <li key={card.title} className="flex min-w-0">
                {"to" in card ? (
                  <Link to={card.to} className={cardClass}><CardBody card={card} /></Link>
                ) : (
                  <a href={card.href} className={cardClass}><CardBody card={card} /></a>
                )}
              </li>
            ))}
          </ul>
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
