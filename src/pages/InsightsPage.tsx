import { Link } from "react-router-dom";
import { FileText, ExternalLink, PlayCircle, BookOpen, Lightbulb, ChevronRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const faqCategories = [
  {
    title: "Joining the Armed Forces",
    items: [
      {
        question: "Can you join the Army with dyslexia (UK)?",
        answer: "Yes, dyslexia does not automatically disqualify you from joining the British Army. Each candidate is assessed individually, and reasonable adjustments may be available during recruitment.",
        link: "/insights/can-you-join-army-with-dyslexia-uk",
      },
      {
        question: "Can you join the RAF with dyslexia (UK)?",
        answer: "Dyslexia does not prevent you from applying to the Royal Air Force. The RAF assesses applicants on a case-by-case basis and offers support throughout the recruitment process.",
        link: "/insights/can-you-join-raf-with-dyslexia-uk",
      },
      {
        question: "Can you join the Royal Navy with dyslexia (UK)?",
        answer: "Yes, the Royal Navy accepts applicants with dyslexia. Support and adjustments are available during recruitment and throughout your career.",
        link: "/insights/can-you-join-navy-with-dyslexia-uk",
      },
    ],
  },
  {
    title: "Understanding Barriers and Support",
    items: [
      {
        question: "Is dyslexia a barrier in the military (UK)?",
        answer: "Dyslexia is not an automatic barrier to military service. All three services have processes to support neurodiverse personnel, though awareness and consistency vary.",
        link: "/insights/is-dyslexia-a-barrier-in-the-military-uk",
      },
      {
        question: "Neurodiversity in the MOD (UK)",
        answer: "The Ministry of Defence actively supports neurodiversity across military and civil service roles, with workplace adjustments and growing awareness programmes.",
        link: "/insights/neurodiversity-in-the-mod-uk",
      },
    ],
  },
];

// Build FAQ schema
const faqSchemaItems = faqCategories.flatMap((cat) =>
  cat.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems,
};

const InsightsPage = () => {
  // Inject FAQ structured data
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

  return (
    <main className="bg-background">
      {/* Hero — Featured Insight */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Insights on Dyslexia in Defence
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Real voices, research, and perspectives on <strong>neurodiversity in the UK military</strong> and wider defence community.
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Common questions about dyslexia and joining the UK Armed Forces — answered clearly.
          </p>

          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/DFLERi3uE7A"
                title="MOD support for dyslexia and neurodiversity"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-muted-foreground">
            <p>
              This clip highlights that the <strong>Ministry of Defence is supportive</strong> of individuals with dyslexia and neurodiversity.
            </p>
            <p>
              Awareness and support are growing across the defence community — from serving personnel to civil servants and industry partners.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20" aria-label="Frequently asked questions">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Frequently Asked Questions</h2>
            </div>

            {faqCategories.map((category) => (
              <div key={category.title} className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
                <Accordion type="multiple" className="rounded-xl border border-border bg-card">
                  {category.items.map((item, i) => (
                    <AccordionItem key={i} value={`${category.title}-${i}`} className="border-border px-5">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-card py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <Lightbulb className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Key Takeaways</h2>
            </div>
            <ul className="space-y-4 text-base leading-relaxed text-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Dyslexia is present</strong> across the entire defence community — military, civil service, and industry.</span>
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
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Real Experiences and Perspectives</h2>
            </div>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Podcast conversations featuring serving and former defence personnel sharing insights on <strong>dyslexia support in the MOD</strong> and beyond.
            </p>

            <div className="space-y-10">
              <PodcastCard
                embedUrl="https://open.spotify.com/embed/episode/3yGuLAcPYJqLcT05wSOlgU?utm_source=generator&theme=0"
                title="Leadership and Dyslexia in Defence"
                description="A candid discussion on how dyslexia intersects with leadership and decision making across the defence environment. The strongest insight into why neurodiversity matters at every level."
              />
              <PodcastCard
                embedUrl="https://open.spotify.com/embed/episode/16a7rVgNCb3jTdfoRhDmrj?utm_source=generator&theme=0"
                title="Neurodiversity and Leadership in the Army"
                description="Exploring how neurodiverse thinking contributes to effective leadership within the British Army, and why awareness at command level is critical."
              />
              <PodcastCard
                embedUrl="https://open.spotify.com/embed/episode/2zNd3YpRNMt14rNU3kCqpR?utm_source=generator&theme=0"
                title="Lived Experience Inside the MOD"
                description="First hand accounts of navigating dyslexia within the Ministry of Defence — the challenges, the turning points, and the support that made a difference."
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
                    <strong className="text-foreground">Dyslexia in Defence</strong> provides broader, wraparound support across the entire defence ecosystem — including veterans, families, civil servants, and industry. The two are <strong>complementary, not competing</strong>.
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
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Research and Formal Insight</h2>
            </div>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Published articles and journal entries reflecting growing recognition of <strong>neurodiversity in the military</strong> and defence sector.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <PublicationCard
                href="/documents/dyslexia-article.pdf"
                title="British Dyslexia Association Feature"
                description="Formal recognition of dyslexia within a military context, published in the BDA magazine. Highlights increasing awareness and structured support across defence."
              />
              <PublicationCard
                href="/documents/rsi-journal-winter-23.pdf"
                title="Royal Signals Institute Journal — Winter 2023"
                description="Professional and regimental level discussion of dyslexia within the Royal Corps of Signals. Reinforces that neurodiversity is being recognised in operational and technical environments."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Why This Matters</h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              These insights demonstrate a clear and growing reality:
            </p>
            <ul className="mb-8 space-y-3 text-base leading-relaxed text-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Dyslexia is already present</strong> across every part of the defence community.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Support exists but remains fragmented</strong> — consistency and visibility are key gaps.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span><strong>Peer support and shared understanding</strong> are critical to lasting change.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/why-it-matters"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Learn Why It Matters
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Join the Network
              </Link>
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
      View Document <ExternalLink className="h-4 w-4" />
    </span>
  </a>
);

export default InsightsPage;
