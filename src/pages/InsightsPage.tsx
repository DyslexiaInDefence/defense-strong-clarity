import { Link, useLocation } from "react-router-dom";
import { FileText, ExternalLink, PlayCircle, BookOpen, Lightbulb, ChevronRight, HelpCircle, UserPlus, Shield, LogOut } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { AudienceIntent } from "@/components/AudienceRouter";

type IntentCategory = {
  id: AudienceIntent;
  title: string;
  blurb: string;
  icon: typeof UserPlus;
  items: Array<{ question: string; answer: string; link: string }>;
};

const intentCategories: IntentCategory[] = [
  {
    id: "joining",
    title: "Thinking of joining",
    blurb: "Eligibility, recruitment and what to expect before you sign up.",
    icon: UserPlus,
    items: [
      {
        question: "Can you join the Army with dyslexia (UK)?",
        answer: "Yes. Dyslexia is not a barrier to joining the British Army. You aren't screened for it during recruitment, and dyslexic personnel serve at every rank.",
        link: "/insights/can-you-join-army-with-dyslexia-uk",
      },
      {
        question: "Can you join the RAF with dyslexia (UK)?",
        answer: "Yes. The RAF welcomes dyslexic applicants across all branches, including engineering, logistics and aircrew. Reasonable adjustments are available throughout your career.",
        link: "/insights/can-you-join-raf-with-dyslexia-uk",
      },
      {
        question: "Can you join the Royal Navy with dyslexia (UK)?",
        answer: "Yes. Dyslexia does not prevent you from joining the Royal Navy. Dyslexic sailors, Royal Marines and officers serve at every rank.",
        link: "/insights/can-you-join-navy-with-dyslexia-uk",
      },
      {
        question: "Do I need to declare dyslexia when joining the military (UK)?",
        answer: "You're not legally required to declare. But declaring early unlocks reasonable adjustments during selection and training — and is almost always the better choice.",
        link: "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk",
      },
    ],
  },
  {
    id: "serving",
    title: "Currently serving",
    blurb: "Support, adjustments, policy and what happens day-to-day in service.",
    icon: Shield,
    items: [
      {
        question: "What support is available for dyslexia in the military (UK)?",
        answer: "Defence Dyslexia Network (2,000+ members), 240+ ambassadors, service education and learning support provision, internal forums, and workplace adjustments — across all three services.",
        link: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk",
      },
      {
        question: "What happens if dyslexia is identified during service?",
        answer: "You can self-refer through your chain of command and your service’s education or learning support provision. Assessment leads to adjustments — extra time on courses, assistive tech and study support. It does not end careers.",
        link: "/insights/what-happens-if-dyslexia-is-identified-during-service-uk",
      },
      {
        question: "Is dyslexia a barrier in the military (UK)?",
        answer: "No. Dyslexic personnel serve at every rank in every service. The real barriers are awareness and inconsistent support — not dyslexia itself.",
        link: "/insights/is-dyslexia-a-barrier-in-the-military-uk",
      },
      {
        question: "Serving with dyslexia in the Army — a real journey",
        answer: "A condensed featured story covering coping mechanisms, support gaps and success despite challenges across a full Army career.",
        link: "/insights/serving-with-dyslexia-in-the-army-uk",
      },
      {
        question: "JSP 822 vs the Equality Act — what's the difference?",
        answer: "JSP 822 is the MOD's training policy for specific learning differences. The Equality Act 2010 sits above it as the legal duty. Both apply.",
        link: "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk",
      },
      {
        question: "Neurodiversity in the MOD (UK)",
        answer: "The MOD recognises neurodiversity as a workforce strength — BDA Bronze recognition, growing networks across military and civil service roles.",
        link: "/insights/neurodiversity-in-the-mod-uk",
      },
    ],
  },
  {
    id: "veteran",
    title: "Leaving service / veteran",
    blurb: "Transition, recognition of in-service assessments and what comes next.",
    icon: LogOut,
    items: [
      {
        question: "Serving with dyslexia in the Army — full journey",
        answer: "Includes the transition phase: how in-service assessments translate into civilian-recognised diagnoses and what to ask for before you leave.",
        link: "/insights/serving-with-dyslexia-in-the-army-uk",
      },
      {
        question: "Is dyslexia a barrier in the military (UK)?",
        answer: "Useful context if you're reflecting on your career or supporting someone still in. The barriers are systemic, not personal.",
        link: "/insights/is-dyslexia-a-barrier-in-the-military-uk",
      },
      {
        question: "Neurodiversity in the MOD (UK)",
        answer: "Background on the wider system you served in — and how it's changing for those still serving and transitioning out.",
        link: "/insights/neurodiversity-in-the-mod-uk",
      },
      {
        question: "JSP 822 vs the Equality Act — what changes when you leave?",
        answer: "Leaving the military shifts your dyslexia rights from JSP 822 (policy-based, internal) to the Equality Act 2010 (legally enforceable in civilian employment). Know the difference before you transition.",
        link: "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk",
      },
    ],
  },
];

const faqSchemaItems = intentCategories
  .filter((c) => c.id !== "veteran")
  .flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  );

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems,
};

const InsightsPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, []);

  // Scroll to the matching intent section when arriving via #hash
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  const activeIntent = (hash.replace("#", "") || null) as AudienceIntent | null;

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Insights on Dyslexia in Defence
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Real voices, research and perspectives on <strong>neurodiversity in the UK military</strong> and wider defence community.
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Pick the pathway that fits where you are right now.
          </p>

          {/* Pathway picker — links jump to the matching intent section below */}
          <nav aria-label="Pick your pathway" className="grid gap-3 sm:grid-cols-3 max-w-3xl">
            {intentCategories.map(({ id, title, icon: Icon }) => {
              const isActive = activeIntent === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() =>
                    trackEvent("audience_router_click", {
                      intent: id,
                      active_intent: activeIntent ?? null,
                      is_active: isActive,
                      target: `/insights#${id}`,
                      source: "insights_hub_picker",
                    })
                  }
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background hover:border-primary",
                  )}
                >
                  <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
                  <span className={cn("text-sm font-semibold", isActive ? "text-primary" : "text-foreground")}>
                    {title}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Intent-categorized FAQ sections */}
      <section className="py-16 md:py-20" aria-label="Frequently asked questions by pathway">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Frequently asked questions</h2>
            </div>

            {intentCategories.map((category) => {
              const isActive = activeIntent === category.id;
              const Icon = category.icon;
              return (
                <section
                  key={category.id}
                  id={category.id}
                  aria-labelledby={`${category.id}-heading`}
                  className={cn(
                    "mb-10 scroll-mt-24 rounded-2xl border p-5 md:p-6 transition-colors",
                    isActive ? "border-primary bg-primary/5" : "border-border bg-card",
                  )}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 id={`${category.id}-heading`} className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="mb-5 text-sm text-muted-foreground">{category.blurb}</p>

                  <Accordion type="multiple" className="rounded-xl border border-border bg-background">
                    {category.items.map((item, i) => (
                      <AccordionItem key={i} value={`${category.id}-${i}`} className="border-border px-5">
                        <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                          <Link
                            to={item.link}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                          >
                            Read more <ChevronRight className="h-4 w-4" />
                          </Link>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <Lightbulb className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Key takeaways</h2>
            </div>
            <ul className="space-y-4 text-base leading-relaxed text-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Dyslexia is present</strong> across the entire defence community — military, civil service and industry.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Support is improving</strong>, but awareness remains inconsistent across organisations and ranks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Lived experience matters</strong> as much as policy — peer support drives real change.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Neurodiversity can be a leadership strength</strong> — different thinking is an operational advantage.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Podcast Insights */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <PlayCircle className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Real experiences and perspectives</h2>
            </div>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Podcast conversations featuring serving and former defence personnel sharing insights on <strong>dyslexia support in the MOD</strong> and beyond.
            </p>

            <div className="space-y-10">
              <PodcastCard
                embedUrl="https://open.spotify.com/embed/episode/3yGuLAcPYJqLcT05wSOlgU?utm_source=generator&theme=0"
                title="Leadership and Dyslexia in Defence"
                description="A candid discussion on how dyslexia intersects with leadership and decision making across the defence environment."
              />
              <PodcastCard
                embedUrl="https://open.spotify.com/embed/episode/16a7rVgNCb3jTdfoRhDmrj?utm_source=generator&theme=0"
                title="Neurodiversity and Leadership in the Army"
                description="Exploring how neurodiverse thinking contributes to effective leadership within the British Army."
              />
              <PodcastCard
                embedUrl="https://open.spotify.com/embed/episode/2zNd3YpRNMt14rNU3kCqpR?utm_source=generator&theme=0"
                title="Lived experience inside the MOD"
                description="First hand accounts of navigating dyslexia within the Ministry of Defence — challenges, turning points and the support that made a difference."
              />
              <div className="space-y-4">
                <PodcastCard
                  embedUrl="https://open.spotify.com/embed/episode/5F9sfDROyK9jkV1uK5i9Ot?utm_source=generator&theme=0"
                  title="The Defence Dyslexia Network"
                  description="An introduction to the Defence Dyslexia Network, which supports individuals currently serving within the MOD."
                />
                <div className="rounded-xl border border-border bg-background p-5 text-sm leading-relaxed text-muted-foreground">
                  <p className="mb-2">
                    <strong className="text-foreground">How it connects:</strong> The Defence Dyslexia Network focuses on individuals currently serving in the MOD.
                  </p>
                  <p>
                    <strong className="text-foreground">Dyslexia in Defence</strong> provides broader, wraparound support across the entire defence ecosystem — including veterans, families, civil servants and industry. The two are <strong>complementary, not competing</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research and Publications */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Research and formal insight</h2>
            </div>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Published articles and journal entries reflecting growing recognition of <strong>neurodiversity in the military</strong> and defence sector.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <PublicationCard
                href="/documents/dyslexia-article.pdf"
                title="British Dyslexia Association Feature"
                description="Formal recognition of dyslexia within a military context, published in the BDA magazine."
              />
              <PublicationCard
                href="/documents/rsi-journal-winter-23.pdf"
                title="Royal Signals Institute Journal — Winter 2023"
                description="Professional and regimental level discussion of dyslexia within the Royal Corps of Signals."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ---------- Sub-components ---------- */

const PodcastCard = ({
  embedUrl,
  title,
  description,
}: {
  embedUrl: string;
  title: string;
  description: string;
}) => (
  <div className="space-y-3">
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    <div className="overflow-hidden rounded-xl border border-border">
      <iframe
        src={embedUrl}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={title}
        className="block"
        style={{ borderRadius: "12px" }}
      />
    </div>
  </div>
);

const PublicationCard = ({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
  >
    <div className="flex items-center gap-3">
      <FileText className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
    </div>
    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
      View document <ExternalLink className="h-4 w-4" />
    </span>
  </a>
);

export default InsightsPage;
