import { ArrowRight, BookOpen, ChevronRight, Compass, Download, MessageCircle, Route, Shield, Users, BarChart3 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button, buttonVariants } from "@/components/ui/button";
import SupportTabs from "@/components/SupportTabs";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";
import "./start-here.css";

const SHOW_WIP_BANNER = true;

const routes = [
  { title: "Thinking of joining", description: "You're considering a career in Defence and want to know where dyslexia fits.", to: "/support/thinking-of-joining", accent: "support-route-joining", icon: Compass },
  { title: "Serving now (including civil service)", description: "You're a regular, reservist or civil servant and want to know what support is out there.", to: "/support/currently-serving", accent: "support-route-serving", icon: Shield },
  { title: "Leaving or left service", description: "You're on the way out, or already out, and want help with what comes next.", to: "/support/leaving-or-left-service", accent: "support-route-leaving", icon: Route },
  { title: "Supporting someone", description: "You're family, a friend, or you manage, train or work with someone with dyslexia.", to: "/support/supporting-someone", accent: "support-route-supporting", icon: Users },
];

const types = [
  { title: "Read the guidance", description: "Guides on joining, serving, leaving and supporting someone.", to: "/support/guidance", icon: BookOpen },
  { title: "Download forms and tools", description: "Assessment forms, directories and guides.", to: "/support/downloads-and-tools", icon: Download },
  { title: "Quick answers", description: "Short answers to common questions.", to: "/support/faq", icon: MessageCircle },
  { title: "See the evidence", description: "The numbers behind this work, for leaders and researchers.", to: "/evidence", icon: BarChart3 },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function StartHerePage() {
  return (
    <div className="support-start-here text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Start here breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support">Get support</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Start here</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/start-here" />
        <header className="pb-10 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Start here</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Choose the one that sounds most like you. You can switch at any time.</p>
        </header>
        <section aria-labelledby="choose-route" className="mb-12">
          <h2 id="choose-route" className="mb-6 text-2xl font-bold">Choose your route</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {routes.map(item => (
              <Link key={item.to} to={item.to} className={`support-route-card ${item.accent} ${panelClass} ${linkFocus} group flex min-w-0 flex-col hover:border-y-primary hover:border-r-primary`}>
                <span className="support-route-chip mb-4 flex size-12 shrink-0 items-center justify-center rounded-md"><item.icon aria-hidden="true" className="size-6" /></span>
                <h3 className="mb-3 text-xl font-semibold leading-relaxed">{item.title}</h3>
                <p className="mb-5 text-base leading-relaxed">{item.description}</p>
                <span className={`${buttonVariants({ variant: "outline" })} mt-auto min-h-11 h-auto self-start whitespace-normal text-base text-foreground`}>
                  See this route<ArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section aria-labelledby="look-by-type" className="mb-12">
          <h2 id="look-by-type" className="mb-6 text-2xl font-bold">Or look by type</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {types.map(item => (
              <Link key={item.to} to={item.to} className={`${panelClass} ${linkFocus} flex min-w-0 flex-col p-4 sm:p-5 hover:border-primary`}>
                <item.icon aria-hidden="true" className="mb-4 size-6 text-foreground" />
                <h3 className="mb-3 text-lg font-semibold leading-relaxed">{item.title}</h3>
                <p className="text-base leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <section aria-labelledby="not-ready" className={`${panelClass} mb-6`}>
          <h2 id="not-ready" className="mb-3 text-2xl font-bold">Not ready to choose?</h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed">Start with how you think and learn. It is the same for everyone, wherever you are in your journey.</p>
          <Button asChild className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-center text-base">
            <Link to="/why-it-matters">Understanding how you think and learn<ArrowRight aria-hidden="true" /></Link>
          </Button>
        </section>
        <section aria-labelledby="real-stories" className={panelClass}>
          <h2 id="real-stories" className="mb-3 text-2xl font-bold">Real stories</h2>
          <p className="mb-6 text-base leading-relaxed">Read what it has been like for other people, or share your own.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base"><Link to="/lived-experiences">Read lived experiences</Link></Button>
            <Button asChild variant="outline" className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base"><a href={SHARE_MAILTO}>Share your story</a></Button>
          </div>
        </section>
      </div>
    </div>
  );
}