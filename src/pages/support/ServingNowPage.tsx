import { ArrowRight, ChevronRight, ExternalLink, Laptop, Smartphone } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SupportTabs from "@/components/SupportTabs";
import { SHARE_MAILTO } from "@/components/ShareLivedExperienceBanner";
import ddnLogo from "@/assets/defence-dyslexia-network.jpg.asset.json";
import rlcLogo from "@/assets/rlc-logo.png.asset.json";
import neurodiversityPdf from "@/assets/introduction-to-neurodiversity-army.pdf.asset.json";
import { FAQ_ITEMS, filterFaqs } from "./faqLibrary";
import "./start-here.css";

const SHOW_WIP_BANNER = true;

const begin = [
  "Getting assessed",
  "Talking to your chain of command",
  "Feasible support and what applies to you",
  "Training and courses",
];

// Copied unchanged from the live Currently serving page.
const accessRoutes = [
  {
    label: "On MOD IT?",
    body: "Find the network here",
    note: "Internal ModNet SharePoint site",
    href: "https://modgovuk.sharepoint.com/sites/dddefencedyslexianetwork/SitePages/Home.aspx",
    icon: Laptop,
  },
  {
    label: "On your own device?",
    body: "Go here to the Defence Connect site",
    note: "Defence Connect (Defence Gateway) group",
    href: "https://jive.defencegateway.mod.uk/groups/dyslexia-network",
    icon: Smartphone,
  },
  {
    label: "Serving in the Royal Logistic Corps?",
    body: "Join via the RLC app",
    note: "Requires serving military status to join",
    href: "https://link.militaryapp.org/rlc/Jb2gM",
    image: rlcLogo.url,
  },
];

const answers = filterFaqs(FAQ_ITEMS, "serving");

const more = [
  { title: "All guidance", description: "Every guide, filtered to you.", to: "/support/guidance" },
  { title: "Downloads and tools", description: "Forms, directories and guides.", to: "/support/downloads-and-tools" },
  { title: "FAQ", description: "Quick answers to common questions.", to: "/support/faq" },
  { title: "Insights", description: "The evidence behind this work.", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-foreground underline underline-offset-4 hover:text-primary ${linkFocus}`;

export default function ServingNowPage() {
  return (
    <div className="support-staged-page support-route-serving text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Serving now breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support">Get support</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/support/start-here">Start here</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Serving now (including civil service)</span></li>
          </ol>
        </nav>
        <SupportTabs activePath="/support/start-here" />

        <div className="support-identity-strip mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-lg border border-border bg-card px-4 py-2 sm:px-5">
          <p className="text-base leading-relaxed">You're viewing: <strong>Serving now (including civil service)</strong></p>
          <Link to="/support/start-here" className={textLink}>Not you? Switch</Link>
        </div>

        <header className="pb-10 pt-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Serving now (including civil service)</h1>
          <p className="max-w-3xl text-lg leading-relaxed">Guidance for regular and reserve personnel living and working with dyslexia.</p>
        </header>

        <section aria-labelledby="where-to-begin" className="mb-12">
          <h2 id="where-to-begin" className="mb-6 text-2xl font-bold">Where to begin</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {begin.map(title => (
              <article key={title} className={`support-route-card ${panelClass} flex min-w-0 flex-col`}>
                <h3 className="mb-3 text-xl font-semibold leading-relaxed">{title}</h3>
                <p className="text-base leading-relaxed">Guidance to come.</p>
              </article>
            ))}
          </div>
          <p className="mt-5"><Link to="/support/guidance?for=serving" className={textLink}>See all guidance for serving personnel<ArrowRight aria-hidden="true" className="size-4" /></Link></p>
        </section>

        <section aria-labelledby="ddn-heading" className={`${panelClass} mb-12`}>
          <img src={ddnLogo.url} alt="Defence Dyslexia Network logo" loading="lazy" className="mb-6 h-auto w-full max-w-xs rounded-lg" />
          <h2 id="ddn-heading" className="mb-3 text-2xl font-bold">Connect with the Defence Dyslexia Network</h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed">
            The internal Defence Dyslexia Network is a <strong className="font-bold">2000+</strong>{" "}
            network there to support you now, with over <strong className="font-bold">250</strong>{" "}
            ambassadors across all <strong className="font-bold">3 services</strong> ready to answer your
            questions or just provide a place to feel heard. Other resources will be added as soon as possible.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {accessRoutes.map(r => (
              <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className={`flex min-w-0 flex-col rounded-lg border border-border bg-background p-5 hover:border-primary ${linkFocus}`}>
                {"image" in r && r.image ? (
                  <img src={r.image} alt="" loading="lazy" className="mb-3 h-10 w-auto self-start" />
                ) : (
                  r.icon && <r.icon className="mb-3 size-6 text-primary" aria-hidden="true" />
                )}
                <h3 className="mb-2 text-lg font-semibold leading-relaxed">{r.label}</h3>
                <p className="mb-2 text-base leading-relaxed">{r.body}</p>
                <p className="mb-3 text-base leading-relaxed text-muted-foreground">{r.note}</p>
                <span className="mt-auto inline-flex min-h-11 items-center gap-1 text-base font-semibold underline underline-offset-4">
                  Open link<ExternalLink aria-hidden="true" className="size-4" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="slc-heading" className={`${panelClass} mb-12`}>
          <h2 id="slc-heading" className="mb-3 text-2xl font-bold">Funding a dyslexia assessment with Standard Learning Credits</h2>
          <p className="mb-5 max-w-3xl text-base leading-relaxed">
            Serving personnel across all services can use Standard Learning Credits (SLC) towards a dyslexia diagnostic
            assessment. We have a pre filled application template to help.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button asChild className="min-h-11 h-auto max-w-full whitespace-normal py-3 text-base">
              <Link to="/currently-serving/standard-learning-credits">Read more and download the template<ChevronRight aria-hidden="true" className="size-4" /></Link>
            </Button>
            <Link to="/support/downloads-and-tools" className={textLink}>See all downloads and tools<ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </section>

        <section aria-labelledby="service-resources-heading" className="mb-12">
          <h2 id="service-resources-heading" className="mb-6 text-2xl font-bold">Resources by Service</h2>
          <Accordion type="multiple" className="rounded-lg border border-border bg-card">
            <AccordionItem value="army" className="border-border px-5">
              <AccordionTrigger className={`min-h-11 text-left text-lg font-semibold hover:no-underline ${linkFocus}`}>Army</AccordionTrigger>
              <AccordionContent>
                <div>
                  <h3 className="mb-2 text-base font-bold">Official army neurodiversity guidance</h3>
                  <p className="mb-2 text-base leading-relaxed">
                    An official Army guide explaining neurodiversity in plain language, including dyslexia, and how it can
                    affect you at work.
                  </p>
                  <a href={neurodiversityPdf.url} target="_blank" rel="noopener noreferrer" className={textLink}>
                    Introduction to Neurodiversity (Army)<ExternalLink aria-hidden="true" className="size-4" />
                    <span className="sr-only"> (PDF, opens in a new tab)</span>
                  </a>
                </div>
                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="mb-2 text-base font-bold">Army Education Centres</h3>
                  <p className="mb-2 text-base leading-relaxed">
                    Local support for education and learning, including help with dyslexia and other learning differences.
                  </p>
                  <Link to="/currently-serving/army-education-centres" className={textLink}>Find your Army Education Centre<ChevronRight aria-hidden="true" className="size-4" /></Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="raf" className="border-border px-5">
              <AccordionTrigger className={`min-h-11 text-left text-lg font-semibold hover:no-underline ${linkFocus}`}>Royal Air Force</AccordionTrigger>
              <AccordionContent>
                <p className="text-base leading-relaxed">Resources for RAF personnel will be added here soon.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="royal-navy" className="border-border px-5">
              <AccordionTrigger className={`min-h-11 text-left text-lg font-semibold hover:no-underline ${linkFocus}`}>Royal Navy</AccordionTrigger>
              <AccordionContent>
                <p className="text-base leading-relaxed">Resources for Royal Navy personnel will be added here soon.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section aria-labelledby="quick-answers" className="mb-12">
          <h2 id="quick-answers" className="mb-6 text-2xl font-bold">Quick answers</h2>
          <div className="space-y-4">
            {answers.map(item => (
              <div key={item.question} className={`${panelClass} sm:p-6`}>
                <h3 className="mb-2 text-lg font-semibold leading-relaxed">{item.question}</h3>
                <p className="mb-2 text-base leading-relaxed">{item.answer}</p>
                <Link to="/support/faq" className={textLink} aria-label={`Read the full answer: ${item.question}`}>Read the full answer<ArrowRight aria-hidden="true" className="size-4" /></Link>
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

        <section aria-labelledby="other-resources-heading" className={`${panelClass} mb-12`}>
          <h2 id="other-resources-heading" className="mb-6 text-2xl font-bold">Other resources</h2>
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src="https://www.youtube.com/embed/ET8ddLATf5E"
              title="Defence Dyslexia Network video for currently serving personnel"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
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
