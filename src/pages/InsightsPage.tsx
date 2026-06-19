import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Users, Lightbulb, ChevronRight, HelpCircle, UserPlus, Shield, LogOut } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { AudienceIntent } from "@/components/AudienceRouter";
import { Button } from "@/components/ui/button";
import { livedStories, LIVED_EXPERIENCES_BASE } from "@/data/livedStories";

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
      {
        question: "Is dyslexia a barrier in the military (UK)?",
        answer: "No. Dyslexic personnel serve at every rank across all three services. If you're considering joining, this is the reassurance most people are looking for.",
        link: "/insights/is-dyslexia-a-barrier-in-the-military-uk",
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
        answer: "Defence Dyslexia Network (2,000+ members), 240+ volunteer ambassadors, service education and learning support provision, internal forums, and workplace adjustments — across all three services.",
        link: "/insights/what-support-is-available-for-dyslexia-in-the-military-uk",
      },
      {
        question: "What happens if dyslexia is identified during service?",
        answer: "You can self-refer through your chain of command and your service’s education or learning support provision. Assessment leads to adjustments — extra time on courses, assistive tech and study support. It does not end careers.",
        link: "/insights/what-happens-if-dyslexia-is-identified-during-service-uk",
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
                            aria-label={`Read the full guide: ${item.question.replace(/\?$/, "")}`}
                          >
                            Read the full guide <ChevronRight className="h-4 w-4" />
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

      {/* Real Stories */}
      <section className="bg-card py-16 md:py-20" aria-labelledby="real-stories-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <Users className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 id="real-stories-heading" className="text-2xl font-bold text-foreground md:text-3xl">Real Stories</h2>
            </div>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Policies and guidance matter. Real experiences matter more. Read the stories of serving personnel, veterans and civil servants who have lived with dyslexia throughout their careers.
            </p>

            <ul className="grid gap-4 sm:grid-cols-3">
              {livedStories.slice(0, 3).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`${LIVED_EXPERIENCES_BASE}/${s.slug}`}
                    className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-background p-5 text-center transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <img
                      src={s.photoUrl}
                      alt={s.photoAlt}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                      className="h-20 w-20 shrink-0 rounded-full border border-border object-cover shadow-sm"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.role}</p>
                    </div>
                    <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
                      Read story
                      <ChevronRight className="ml-0.5 h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <Link to="/lived-experiences">
                <Button size="lg" className="rounded-full px-8 text-sm font-bold">
                  View All Lived Experiences
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ---------- Sub-components ---------- */

export default InsightsPage;
