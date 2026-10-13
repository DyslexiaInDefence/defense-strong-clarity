import { Link } from "@/lib/router-compat";
import { ChevronRight, ExternalLink, FileText, HelpCircle, Laptop, PoundSterling, Smartphone, Video } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { intentCategories } from "@/data/faqCategories";
import ddnLogo from "@/assets/defence-dyslexia-network.jpg.asset.json";
import rlcLogo from "@/assets/rlc-logo.png.asset.json";
import neurodiversityPdf from "@/assets/introduction-to-neurodiversity-army.pdf.asset.json";

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
  {
    label: "Serving in the Royal Logistic Corps?",
    body: "Join via the RLC app",
    note: "Requires serving military status to join",
    href: "https://link.militaryapp.org/rlc/Jb2gM",
    image: rlcLogo.url,
  },
];

// Add more Army guidance links here — the list renders them in order.
// Set external: true for anything that leaves the site (PDFs, other websites).
type GuidanceLink = { label: string; url: string; note?: string; external?: boolean };

const isExternalLink = (item: GuidanceLink) => item.external ?? /^https?:\/\//.test(item.url);

const armyGuidanceLinks: GuidanceLink[] = [
  {
    label: "Introduction to Neurodiversity (Army)",
    url: neurodiversityPdf.url,
    note: "PDF, about 1.2 MB",
    external: true,
  },
  {
    label: "Find your Army Education Centre",
    url: "/currently-serving/army-education-centres",
  },
];

const CurrentlyServingPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Currently Serving</h1>
          <p className="text-lg text-muted-foreground">
            If you are <strong className="font-bold text-foreground">currently serving</strong> in the Royal Navy, British
            Army or Royal Air Force, this page is for you.
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
              Connect with the Defence Dyslexia Network
            </h2>
            <p className="mb-6 max-w-3xl text-base text-muted-foreground">
              The internal Defence Dyslexia Network is a <strong className="font-bold text-foreground">2000+</strong>{" "}
              network there to support you now, with over <strong className="font-bold text-foreground">250</strong>{" "}
              ambassadors across all <strong className="font-bold text-foreground">3 services</strong> ready to answer your
              questions or just provide a place to feel heard. Other resources will be added as soon as possible.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                      {"image" in r && r.image ? (
                        <img src={r.image} alt="" loading="lazy" className="mb-3 h-10 w-auto" />
                      ) : (
                        r.icon && <r.icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
                      )}
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

        <section aria-labelledby="slc-heading" className="mb-16">
          <div className="rounded-2xl border-2 border-primary/30 bg-secondary/40 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <PoundSterling className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 id="slc-heading" className="text-2xl font-bold text-foreground">
                Funding a dyslexia assessment with Standard Learning Credits
              </h2>
            </div>
            <p className="mb-5 max-w-3xl text-base text-muted-foreground">
              Serving personnel across all services can use Standard Learning Credits (SLC) towards a dyslexia diagnostic
              assessment. We have a pre filled application template to help.
            </p>
            <Link
              to="/currently-serving/standard-learning-credits"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              Read more and download the template <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section aria-labelledby="service-resources-heading" className="mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 id="service-resources-heading" className="text-2xl font-bold text-foreground">
              Resources by Service
            </h2>
          </div>
          <Accordion type="multiple" className="rounded-xl border border-border bg-card">
            <AccordionItem value="army" className="border-border px-5">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                Army
              </AccordionTrigger>
              <AccordionContent>
                <h3 className="mb-2 text-base font-bold text-foreground">Official Army neurodiversity guidance</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  An official Army guide explaining neurodiversity in plain language, including dyslexia, and how it can
                  affect you at work.
                </p>
                <ul className="space-y-2">
                  {armyGuidanceLinks.map((item) => (
                    <li key={item.url}>
                      {isExternalLink(item) ? (
                        <Link
                          to={item.url}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {item.label}
                          <ChevronRight className="h-4 w-4" aria-hidden="true" />
                          {item.note ? <span className="font-normal text-muted-foreground">({item.note})</span> : null}
                        </Link>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          {item.label}
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          {item.note ? <span className="font-normal text-muted-foreground">({item.note})</span> : null}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="raf" className="border-border px-5">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                Royal Air Force
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Resources for RAF personnel will be added here soon.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="royal-navy" className="border-border px-5">
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                Royal Navy
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Resources for Royal Navy personnel will be added here soon.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src="https://www.youtube.com/embed/ET8ddLATf5E"
                title="Defence Dyslexia Network video for currently serving personnel"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CurrentlyServingPage;
