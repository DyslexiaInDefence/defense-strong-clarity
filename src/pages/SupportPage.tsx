import { Link } from "@/lib/router-compat";
import { ArrowRight, BookOpen, MessageSquare, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { livedStories } from "@/data/livedStories";

const supportLinks = [
  {
    title: "Guidance",
    description: "Clear answers to common questions about dyslexia in UK Defence.",
    to: "/insights",
    icon: BookOpen,
    stage: "Learn",
  },
  {
    title: "What We Want to Achieve",
    description: "Our aims for understanding, support, opportunity and outcomes across the Defence community.",
    to: "/achieve",
    icon: Target,
    stage: "Aims",
  },
  {
    title: "Community",
    description: "Ask others, read lived experience, and find peer support.",
    to: "/community",
    icon: MessageSquare,
    stage: "Ask",
    thumbnails: true,
    cta: "Go to Community",
  },
];

const SupportPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Get Support</h1>
          <p className="text-lg text-muted-foreground">
            Start here if you are looking for guidance, reassurance, community support, or a way to get involved.
          </p>
        </div>

        <section
          aria-labelledby="currently-serving-callout"
          className="mb-10 rounded-2xl border border-primary bg-primary/10 p-6 md:flex md:items-center md:justify-between md:gap-6"
        >
          <div className="mb-4 md:mb-0">
            <div className="mb-2 flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 id="currently-serving-callout" className="text-xl font-bold text-foreground">
                Are you currently serving?
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Everything relevant to serving personnel in one place, including how to join the internal Defence Dyslexia Network.
            </p>
          </div>
          <Link
            to="/support/currently-serving"
            className="inline-flex shrink-0 items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
          >
            Go to Currently Serving
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </section>

        <div className="grid gap-5 sm:grid-cols-2">
          {supportLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label={item.title}
            >
              <Card className="h-full transition-colors hover:border-primary">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    {item.stage && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.stage}
                      </span>
                    )}
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-foreground">{item.title}</h2>
                  <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                  {item.thumbnails && (
                    <div className="mb-3 flex -space-x-2">
                      {livedStories.slice(0, 3).map((s) => (
                        <img
                          key={s.slug}
                          src={s.photoUrl}
                          alt=""
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                          className="h-9 w-9 rounded-full border-2 border-card object-cover shadow-xs"
                        />
                      ))}
                    </div>
                  )}
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    {item.cta ?? `Go to ${item.title}`}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <h2 className="mb-2 text-lg font-bold text-foreground">Your journey</h2>
          <p className="text-sm text-muted-foreground">
            Learn with <Link to="/insights" className="text-primary hover:underline">Guidance</Link> · Ask in the <Link to="/community" className="text-primary hover:underline">Community</Link> · Relate through <Link to="/lived-experiences" className="text-primary hover:underline">Lived Experiences</Link> · Commit by choosing to <Link to="/join" className="text-primary hover:underline">Join</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
