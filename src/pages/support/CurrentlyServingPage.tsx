import { Link } from "@/lib/router-compat";
import { ChevronRight, ExternalLink, HelpCircle, Laptop, Smartphone, Video } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { intentCategories } from "@/data/faqCategories";
import ddnLogo from "@/assets/defence-dyslexia-network.jpg.asset.json";

const servingCategory = intentCategories.find((c) => c.id === "serving");

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
];

const CurrentlyServingPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Currently Serving</h1>
          <p className="mb-4 text-lg text-muted-foreground">
            Welcome. If you are currently serving in the Royal Navy, British Army or Royal Air Force, this page is for you.
          </p>
          <p className="text-base text-muted-foreground">
            We have brought together everything relevant to serving personnel in one place: how to join the internal
            Defence Dyslexia Network, answers to the questions we hear most from people in service, and further materials
            as we add them. Take what is useful, at your own pace.
          </p>
        </div>

        <section aria-labelledby="ddn-heading" className="mb-16">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <img
              src={ddnLogo.url}
              alt="Defence Dyslexia Network logo"
              loading="lazy"
              className="mb-6 h-auto w-full max-w-xs rounded-lg"
            />
            <h2 id="ddn-heading" className="mb-3 text-2xl font-bold text-foreground">
              Join the Defence Dyslexia Network
            </h2>
            <p className="mb-6 max-w-3xl text-base text-muted-foreground">
              The Defence Dyslexia Network is the internal network for serving personnel and Defence civil servants. It is
              run inside Defence, with thousands of members and volunteer ambassadors across all three services. Joining is
              informal and one of the quickest ways to find people who understand how dyslexia plays out in service.
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {accessRoutes.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Card className="h-full transition-colors hover:border-primary">
                    <CardContent className="p-6">
                      <r.icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                      <h3 className="mb-2 text-lg font-bold text-foreground">{r.label}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">{r.body}</p>
                      <p className="mb-3 text-xs text-muted-foreground">{r.note}</p>
                      <span className="inline-flex items-center text-sm font-semibold text-primary">
                        Open link
                        <ExternalLink className="ml-1 h-4 w-4" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {servingCategory && (
          <section aria-labelledby="serving-faq-heading" className="mb-16 max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 id="serving-faq-heading" className="text-2xl font-bold text-foreground">
                Frequently asked questions
              </h2>
            </div>
            <p className="mb-5 text-sm text-muted-foreground">{servingCategory.blurb}</p>

            <Accordion type="multiple" className="rounded-xl border border-border bg-card">
              {servingCategory.items.map((item, i) => (
                <AccordionItem key={i} value={`serving-${i}`} className="border-border px-5">
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

            <p className="mt-5 text-sm text-muted-foreground">
              More questions across every pathway are on our{" "}
              <Link to="/about/faq" className="font-semibold text-primary hover:underline">
                FAQ page
              </Link>
              .
            </p>
          </section>
        )}

        <section aria-labelledby="other-resources-heading" className="max-w-3xl">
          <div className="rounded-2xl border border-dashed border-border bg-card p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3">
              <Video className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 id="other-resources-heading" className="text-2xl font-bold text-foreground">
                Other Resources
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Videos and further materials for serving personnel will be added here soon.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentlyServingPage;
