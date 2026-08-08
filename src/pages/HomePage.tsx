import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Info, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { livedStories, LIVED_EXPERIENCES_BASE } from "@/data/livedStories";


const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32" aria-label="Hero">
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{
            background:
            "linear-gradient(90deg, hsl(var(--ribbon-yellow)), hsl(var(--ribbon-blue)), hsl(var(--ribbon-red)), hsl(var(--ribbon-green)), hsl(var(--ribbon-yellow)))",
            backgroundSize: "300% 100%"
          }}
          aria-hidden="true" />
        
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
            "radial-gradient(ellipse at 30% 20%, hsl(var(--ribbon-blue) / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(var(--ribbon-green) / 0.1) 0%, transparent 50%)"
          }}
          aria-hidden="true" />
        
        <div className="container mx-auto px-4 text-center">
          <img alt="Shield emblem with a multi-colour ribbon banner reading Dyslexia in Defence" className="mx-auto mb-8 h-40 w-auto sm:h-48 md:h-56 lg:h-64 drop-shadow-lg object-fill" src="/lovable-uploads/4eee789e-61aa-4a04-8ec1-96380d579791.webp" width="620" height="662" fetchPriority="high" />
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Dyslexia in Defence — Empowering Dyslexic Talent
          </h1>
          <p className="mx-auto mb-3 max-w-2xl text-sm font-semibold uppercase tracking-wider text-primary">
            For serving personnel, veterans, civil service, and industry
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Empowering dyslexic talent across Defence, before and after service.
          </p>
          {/* Primary CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link to="/join">
              <Button size="lg" className="rounded-full px-10 text-base font-bold shadow-lg">
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-primary px-10 text-base font-bold text-primary shadow-md hover:bg-primary hover:text-primary-foreground">
                Ask the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          {/* Secondary pathways */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link to="/about">
              <Button variant="ghost" size="sm" className="rounded-full text-sm text-foreground/80 hover:text-foreground">
                About
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/support">
              <Button variant="ghost" size="sm" className="rounded-full text-sm text-foreground/80 hover:text-foreground">
                Support
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Ribbon wave */}
          <div className="mt-16 flex justify-center" aria-hidden="true">
            <svg width="320" height="40" viewBox="0 0 320 40" fill="none" className="w-full max-w-md opacity-60">
              <path d="M0 20 Q40 0 80 20 T160 20 T240 20 T320 20" stroke="hsl(var(--ribbon-yellow))" strokeWidth="3" fill="none" />
              <path d="M0 24 Q40 4 80 24 T160 24 T240 24 T320 24" stroke="hsl(var(--ribbon-blue))" strokeWidth="3" fill="none" />
              <path d="M0 28 Q40 8 80 28 T160 28 T240 28 T320 28" stroke="hsl(var(--ribbon-red))" strokeWidth="3" fill="none" />
              <path d="M0 32 Q40 12 80 32 T160 32 T240 32 T320 32" stroke="hsl(var(--ribbon-green))" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Lived Experiences feature */}
      <section className="border-t border-border py-14" aria-label="Real stories from across Defence">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground">Real stories from across Defence</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Dyslexia affects people differently. Read lived experiences from people across the defence community and see how support, understanding and belonging can make a difference.
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {livedStories.slice(0, 3).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`${LIVED_EXPERIENCES_BASE}/${s.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-col sm:items-center sm:gap-2 sm:p-4 sm:text-center"
                >
                  <img
                    src={s.photoUrl}
                    alt={s.photoAlt}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                    className="h-12 w-12 shrink-0 rounded-full border border-border object-cover shadow-sm sm:h-16 sm:w-16"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{s.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{s.role}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <Link to="/lived-experiences">
              <Button variant="outline" size="lg" className="rounded-full border-2 border-primary px-8 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground">
                Read lived experiences
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border bg-card py-16" aria-label="Mission">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">What We Do</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We connect dyslexic individuals across service, transition, and industry environments — providing peer support, curated resources, and signposting to trusted services.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <Link to="/about" className="text-primary font-semibold hover:underline">Learn more about us</Link>
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {["Volunteer led", "Independently governed", "Strengths based", "Built on mutual respect"].map((item) => <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="border-t border-border py-16" aria-label="Pathways">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Link to="/about" className="group">
              <Card className="h-full transition-colors hover:border-primary">
                <CardContent className="p-6">
                  <Info className="mb-3 h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-bold text-foreground">About</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn who we are, why this matters, and how the network is governed.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/support" className="group">
              <Card className="h-full transition-colors hover:border-primary">
                <CardContent className="p-6">
                  <LifeBuoy className="mb-3 h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mb-2 text-xl font-bold text-foreground">Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Find guidance, ask the community, and connect with the network.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Learn</span> with <Link to="/insights" className="text-primary hover:underline">Insights</Link> ·{" "}
              <span className="font-semibold text-foreground">Ask</span> in the <Link to="/community" className="text-primary hover:underline">Community</Link> ·{" "}
              <span className="font-semibold text-foreground">Commit</span> by choosing to <Link to="/join" className="text-primary hover:underline">Join</Link>.
            </p>
          </div>
        </div>
      </section>

    </>);

};

export default HomePage;