import { ArrowRight, Award, BookOpen, CheckCircle, ChevronRight, Handshake, Shield, Users } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import "./support/start-here.css";

const SHOW_WIP_BANNER = true;

// Live PartnerPage wording, copied exactly. Change it here and on the live page together until switch-over.
export const CAPABILITIES = [
  "Problem solving in high-stakes environments",
  "Big picture thinking and strategic awareness",
  "Leadership across diverse and dynamic teams",
  "Adaptability under sustained pressure",
];

export const COST_OF_INACTION = [
  "Untapped human capability",
  "Lost innovation potential",
  "Missed economic value",
];

export const WHY_PARTNER = [
  "Demonstrate tangible social value contribution",
  "Align with MOD Social Value Model (PPN 06/20)",
  "Support workforce capability and inclusion",
  "Contribute to an initiative that spans across defence",
];

export const WE_PROVIDE = [
  "Awareness and education sessions",
  "Insight into dyslexia within defence environments",
  "Access to lived experience and community insight",
  "Contribution to improving support systems across defence",
];

export const PROVIDE_TAGS = ["Education", "Awareness", "Capability Enhancement"];

export const PACKAGES = [
  { tier: "Bronze", role: "Supporter", items: ["Recognition as supporter", "Logo on website", "Inclusion in impact summary", "Social value reference rights"] },
  { tier: "Silver", role: "Engagement Partner", items: ["Everything in Bronze", "Awareness session participation", "Access to insights and content", "Community engagement opportunity"] },
  { tier: "Gold", role: "Strategic Partner", items: ["Everything in Silver", "Tailored education sessions", "Strategic collaboration", "Potential co-branded initiatives"] },
];

export const BIGGER_PICTURE = [
  "Supporting individuals before, during, and after service",
  "Complementary to existing initiatives (e.g. Defence Dyslexia Network)",
  "A wraparound support ecosystem for the defence community",
];

export const MORE_LINKS = [
  { title: "About us", to: "/about" },
  { title: "Get support", to: "/support/start-here" },
  // /get-involved is not built yet, so Get involved points to /join until switch-over.
  { title: "Get involved", to: "/join" },
  { title: "Insights", to: "/insights" },
];

const panelClass = "rounded-lg border border-border bg-card p-5 sm:p-8";
const linkFocus = "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const primaryButton = "min-h-12 h-auto max-w-full whitespace-normal rounded-full px-8 py-3 text-base font-bold";
const sectionHeading = "mb-5 text-2xl font-bold";

function IconList({ items, icon: Icon }: { items: string[]; icon: typeof Shield }) {
  return (
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3">
          <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
          <span className="text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PartnerHubPage() {
  return (
    <div className="support-staged-page text-foreground">
      {SHOW_WIP_BANNER && (
        <div className="border-b border-border bg-secondary py-3" role="note">
          <p className="container px-4 text-base leading-relaxed">Work in progress – this page is not live yet.</p>
        </div>
      )}
      <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
        <nav aria-label="Partner with us breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-base">
            <li><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/">Home</Link></Button></li>
            <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><Button asChild variant="link" className="min-h-11 h-auto px-0 text-base"><Link to="/about">About us</Link></Button></li>
            <li className="flex min-h-11 items-center gap-2"><ChevronRight aria-hidden="true" className="size-4" /><span aria-current="page">Partner with us</span></li>
          </ol>
        </nav>

        <header className="pb-10 pt-4">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">Partner with us</h1>
          <div className="max-w-3xl space-y-5">
            <p className="text-lg leading-relaxed">Work with Dyslexia in Defence CIC to make Defence a better place for people who think differently.</p>
            <p className="text-base leading-relaxed">
              Supporting neurodiverse talent across the defence ecosystem while delivering <strong>measurable social value</strong> and <strong>organisational benefit</strong>.
            </p>
            <div className={`${panelClass} border-s-[6px] border-s-primary`}>
              <p className="text-base leading-relaxed">
                Research from{" "}
                <a
                  href="https://www.madebydyslexia.org/assets/downloads/Return_on_Dyslexic_Thinking.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkFocus} rounded-sm font-semibold text-primary underline underline-offset-4`}
                >
                  Made By Dyslexia<span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                suggests dyslexic thinking may contribute up to <strong>£98.2&nbsp;billion</strong> in value within the UK with significant untapped potential remaining.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className={primaryButton}>
                <Link to="/join"><Handshake aria-hidden="true" className="size-5 shrink-0" />Register Interest</Link>
              </Button>
              <Button size="lg" variant="outline" className={primaryButton} disabled>
                Download Overview (Coming Soon)
              </Button>
            </div>
          </div>
        </header>

        <section aria-labelledby="ways-to-partner" className="mb-12">
          <h2 id="ways-to-partner" className="mb-3 text-2xl font-bold">Ways to partner</h2>
          <p className="mb-6 max-w-3xl text-base italic leading-relaxed">All partnership packages below are proposed concepts and are not yet formally implemented.</p>
          <ul className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {PACKAGES.map(pkg => (
              <li key={pkg.tier} className={`${panelClass} flex min-w-0 flex-col border-s-[6px] border-s-primary sm:p-6`}>
                <span className="mb-1 self-start rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Proposed concept</span>
                <p className="mb-4 text-sm leading-relaxed">Not yet on offer.</p>
                <div className="mb-1 flex items-center gap-2">
                  <Award aria-hidden="true" className="size-6 shrink-0 text-primary" />
                  <h3 className="text-xl font-bold leading-relaxed">{pkg.tier}</h3>
                </div>
                <p className="mb-4 text-base font-medium leading-relaxed">{pkg.role}</p>
                <ul className="space-y-2">
                  {pkg.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-base leading-relaxed">
                      <CheckCircle aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="signed-covenant" className="mb-12">
          <h2 id="signed-covenant" className={sectionHeading}>Our signed Armed Forces Covenant</h2>
          <div className={`${panelClass} border-s-[6px] border-s-primary`}>
            <p className="mb-3 text-base leading-relaxed">Dyslexia in Defence has signed the Armed Forces Covenant.</p>
            <Link to="/armed-forces-covenant" className={`${linkFocus} inline-flex min-h-11 items-center gap-1 rounded-sm text-base font-semibold text-primary underline underline-offset-4`}>
              Read the pledge<ArrowRight aria-hidden="true" className="size-4 shrink-0" />
            </Link>
          </div>
        </section>

        <section aria-labelledby="why-this-matters" className={`${panelClass} mb-12`}>
          <h2 id="why-this-matters" className={sectionHeading}>Why This Matters</h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-base leading-relaxed">
              Each year, approximately <strong>15,000–20,000</strong> personnel leave the UK Armed Forces and <strong>transition into civilian roles</strong>. For organisations operating in defence and beyond, this represents a significant and recurring talent pipeline.
            </p>
            <p className="text-base leading-relaxed">
              These individuals bring capabilities shaped by demanding operational environments — strengths that are directly transferable to complex organisational settings:
            </p>
            <IconList items={CAPABILITIES} icon={CheckCircle} />
            <p className="text-base leading-relaxed">
              Of those transitioning each year, an estimated <strong>1,500–2,000</strong> may be dyslexic. Many will have developed these capabilities precisely because of how they think — yet without <strong>appropriate recognition</strong> or <strong>support</strong>, their potential often remains underutilised.
            </p>
            <p className="text-base leading-relaxed">
              For organisations, this presents an opportunity to access high-calibre talent by ensuring recruitment, onboarding, and workplace practices are designed to recognise neurodiverse strengths — not inadvertently screen them out.
            </p>
            <p className="text-base leading-relaxed">
              The cost of inaction is measurable:
            </p>
            <IconList items={COST_OF_INACTION} icon={CheckCircle} />
            <div className="rounded-lg border border-border border-s-[6px] border-s-primary bg-secondary p-5">
              <p className="text-base font-semibold leading-relaxed">
                This is not simply a workforce or inclusion issue — it is a capability and performance consideration for organisations operating in complex environments.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="why-partner" className={`${panelClass} mb-12`}>
          <h2 id="why-partner" className={sectionHeading}>Why Partner With Us</h2>
          <div className="max-w-3xl space-y-5">
            <IconList items={WHY_PARTNER} icon={Shield} />
            <p className="text-base leading-relaxed">
              Partners can reference their involvement within <strong>social value</strong>, <strong>ESG</strong>, and <strong>bid responses</strong>.
            </p>
          </div>
        </section>

        <section aria-labelledby="we-provide" className={`${panelClass} mb-12`}>
          <h2 id="we-provide" className={sectionHeading}>What Dyslexia in Defence Provides</h2>
          <div className="max-w-3xl space-y-5">
            <IconList items={WE_PROVIDE} icon={BookOpen} />
            <ul className="flex flex-wrap gap-3">
              {PROVIDE_TAGS.map(label => (
                <li key={label} className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">{label}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="bigger-picture" className={`${panelClass} mb-12`}>
          <h2 id="bigger-picture" className={sectionHeading}>The Bigger Picture</h2>
          <div className="max-w-3xl">
            <IconList items={BIGGER_PICTURE} icon={Users} />
          </div>
        </section>

        <section aria-labelledby="get-involved" className={`${panelClass} mb-12 border-s-[6px] border-s-primary`}>
          <h2 id="get-involved" className="mb-3 text-2xl font-bold">Get Involved</h2>
          <p className="mb-6 max-w-3xl text-base leading-relaxed">
            Interested in partnering with Dyslexia in Defence? Register your interest or get in touch to explore how we can work together.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className={primaryButton}>
              <Link to="/join"><Handshake aria-hidden="true" className="size-5 shrink-0" />Register Interest</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className={primaryButton}>
              <Link to="/contact">Contact Us<ArrowRight aria-hidden="true" className="size-5 shrink-0" /></Link>
            </Button>
          </div>
        </section>

        <section aria-labelledby="more-from">
          <h2 id="more-from" className="mb-6 text-2xl font-bold">More from Dyslexia in Defence</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {MORE_LINKS.map(item => (
              <li key={item.title} className="flex min-w-0">
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
