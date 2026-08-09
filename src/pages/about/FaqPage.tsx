import { useEffect } from "react";
import { Link, useLocation } from "@/lib/router-compat";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { AudienceIntent } from "@/components/AudienceRouter";
import { intentCategories, faqSchema } from "@/data/faqCategories";

const FaqPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "about-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.getElementById("about-faq-schema")?.remove();
    };
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  const activeIntent = (hash.replace("#", "") || null) as AudienceIntent | null;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Clear answers to the questions we are asked most often about dyslexia across UK Defence. Pick the pathway that fits where you are right now.
          </p>
        </div>

        <nav aria-label="Pick your pathway" className="mb-12 grid max-w-3xl gap-3 sm:grid-cols-3">
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
                    target: `/about/faq#${id}`,
                    source: "about_faq_picker",
                  })
                }
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-4 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring",
                  isActive ? "border-primary bg-primary/10" : "border-border bg-background hover:border-primary",
                )}
              >
                <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
                <span className={cn("text-sm font-semibold", isActive ? "text-primary" : "text-foreground")}>{title}</span>
              </a>
            );
          })}
        </nav>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <HelpCircle className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Questions by pathway</h2>
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
                  "mb-10 scroll-mt-24 rounded-2xl border p-5 transition-colors md:p-6",
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

          <p className="text-sm text-muted-foreground">
            Looking for the full guidance library?{" "}
            <Link to="/insights" className="font-semibold text-primary hover:underline">
              Browse all guidance
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;