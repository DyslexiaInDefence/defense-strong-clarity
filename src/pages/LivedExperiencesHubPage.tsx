import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";
import { LIVED_EXPERIENCES_BASE, livedStories } from "@/data/livedStories";
import { formatPageDate, getPageDate } from "@/data/pageDates";
import "./support/start-here.css";

const SHOW_WIP_BANNER = true;

export const MORE_LINKS = [
  { title: "Join the Network", to: "/join" },
  { title: "Community", to: "/community" },
  { title: "Get support", to: "/support" },
  { title: "Insights", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function LivedExperiencesHubPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Lived experiences breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-0 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            {/* The Get involved hub is not live yet, so this crumb points to /join for now. */}
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/join">Get involved</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Lived experiences</span></li>
          </ol>
        </nav>

        <header className="pb-10 pt-4">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Lived experiences</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Everyone's journey is different. These stories share personal experiences from across the defence community. They are not official guidance. They are individual perspectives intended to help others feel understood, informed and less alone.</p>
        </header>

        <section aria-labelledby="browse-stories" className="mb-12">
          <h2 id="browse-stories" className="mb-6 text-2xl font-bold">Browse stories</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3" data-testid="story-grid">
            {livedStories.map(story => {
              const date = getPageDate(`${LIVED_EXPERIENCES_BASE}/${story.slug}`);
              return (
                <li key={story.slug} className="flex min-w-0">
                  <Link to={`${LIVED_EXPERIENCES_BASE}/${story.slug}`} className={`group ${panelClass} ${linkFocus} flex w-full min-w-0 flex-col items-center text-center hover:border-primary sm:p-6`}>
                    <div className="mb-4 h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border bg-muted">
                      <img src={story.photoUrl} alt={story.photoAlt} loading="lazy" className={`h-full w-full object-cover ${story.photoPositionClassName ?? ""}`} />
                    </div>
                    <h3 className="text-xl font-bold leading-relaxed">{story.name}</h3>
                    <p className="mt-1 text-base leading-relaxed">{story.role}</p>
                    <p className="mt-3 text-base leading-relaxed">{story.summary}</p>
                    {date && (
                      <p className="mt-3 text-base leading-relaxed">Last updated: <time dateTime={date}>{formatPageDate(date)}</time></p>
                    )}
                    <span className="mt-auto inline-flex min-h-11 items-center gap-1 pt-3 text-base font-semibold text-primary underline underline-offset-4">
                      Read their story<ArrowRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="share-your-story" className={`${panelClass} mb-8 border-s-[6px] border-s-primary`}>
          <h2 id="share-your-story" className="mb-3 text-2xl font-bold">Share your story</h2>
          <p className="mb-2 max-w-3xl text-lg leading-relaxed">Your story helps others feel less alone and helps us show what real support looks like.</p>
          <p className="mb-6 max-w-3xl text-base leading-relaxed">When you email us, you choose whether we share your story with your name, anonymously, or not at all.</p>
          <Button asChild size="lg" className="min-h-12 h-auto max-w-full whitespace-normal rounded-full px-8 py-3 text-base font-bold">
            <a href={SHARE_MAILTO}>Share your story<ArrowRight aria-hidden="true" className="size-4 shrink-0" /></a>
          </Button>
        </section>

        <p className="mb-12 max-w-3xl text-base leading-relaxed">Stories are personal views. They are not the view of the MOD or of the internal Defence Dyslexia Network.</p>

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
