import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Shield, Users, Handshake, HeartHandshake, Target, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const previewCards = [
  {
    title: "Why It Matters",
    description: "How cognitive diversity strengthens defence and security capability.",
    href: "/why-it-matters",
    icon: Target,
  },
  {
    title: "Community",
    description: "A moderated peer network built on trust, boundaries, and mutual respect.",
    href: "/community",
    icon: Users,
  },
  {
    title: "Partner With Us",
    description: "Support an independent initiative advancing inclusion in defence.",
    href: "/partner",
    icon: Handshake,
  },
  {
    title: "Support Directory",
    description: "Structured signposting to trusted services and organisations.",
    href: "/support",
    icon: HeartHandshake,
  },
];

const impactStages = [
  {
    stage: "Establishment",
    icon: Shield,
    objectives: [
      "Community governance framework in place",
      "Initial resource library published",
      "Founding member engagement established",
      "Core partnerships identified",
    ],
  },
  {
    stage: "Consolidation",
    icon: TrendingUp,
    objectives: [
      "Structured event programme delivered",
      "Expanded partnership and collaboration base",
      "Measurable resource usage and community engagement",
      "Demonstrated value to partner organisations",
    ],
  },
  {
    stage: "Ecosystem Influence",
    icon: Globe,
    objectives: [
      "Cross-sector recognition and credibility",
      "Contributing partner organisations across defence",
      "Informing policy and practice through evidence",
      "Sustainable operational model established",
    ],
  },
];

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
            backgroundSize: "300% 100%",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, hsl(var(--ribbon-blue) / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, hsl(var(--ribbon-green) / 0.1) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Dyslexia in Defence
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Independent peer support and structured signposting across the defence and security ecosystem.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/join">
              <Button size="lg" className="rounded-full px-8 text-base font-semibold shadow-lg">
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/why-it-matters">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
                Why It Matters
                <ChevronRight className="ml-2 h-5 w-5" />
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

      {/* Mission positioning */}
      <section className="border-t border-border bg-card py-16" aria-label="Mission positioning">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              We strengthen inclusive capability by supporting individuals with dyslexia and related neurodivergent profiles across service, transition and industry environments.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground">We are</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />Volunteer led</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />Independently governed</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />Strength based</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />Professionally moderated</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground">We are not</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive" aria-hidden="true" />A crisis service</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive" aria-hidden="true" />A political campaign</li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive" aria-hidden="true" />An official MOD body</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preview cards */}
      <section className="py-16" aria-label="Explore">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">Explore</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewCards.map((card) => (
              <Link key={card.href} to={card.href} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="flex flex-col items-start gap-3 p-6">
                    <card.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact narrative */}
      <section className="border-t border-border bg-card py-16" aria-label="Impact narrative">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-foreground">Impact Framework</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
            A structured, phased approach to building sustainable value across the defence and security ecosystem.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {impactStages.map((stage, i) => (
              <Card key={stage.stage} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{
                  background: `hsl(var(--ribbon-${["yellow", "blue", "green"][i]}))`,
                }} aria-hidden="true" />
                <CardContent className="p-6 pt-8">
                  <stage.icon className="mb-3 h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{stage.stage}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {stage.objectives.map((obj) => (
                      <li key={obj} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
