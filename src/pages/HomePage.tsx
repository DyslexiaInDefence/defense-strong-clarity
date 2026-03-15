import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Target, Users, Handshake, HeartHandshake, Shield, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import didIcon from "@/assets/did-icon.png";

const previewCards = [
{
  title: "Why It Matters",
  description: "Cognitive diversity as a strategic advantage.",
  href: "/why-it-matters",
  icon: Target
},
{
  title: "Community",
  description: "Peer support built on trust and shared experience.",
  href: "/community",
  icon: Users
},
{
  title: "Partner With Us",
  description: "Collaborate to advance inclusive capability.",
  href: "/partner",
  icon: Handshake
},
{
  title: "Support Directory",
  description: "Trusted services and organisations.",
  href: "/support",
  icon: HeartHandshake
}];


const impactStages = [
{
  stage: "Establishment",
  icon: Shield,
  objectives: [
  "Governance framework in place",
  "Resource library published",
  "Founding member engagement"]

},
{
  stage: "Consolidation",
  icon: TrendingUp,
  objectives: [
  "Event programme delivered",
  "Partnership base expanded",
  "Measurable community engagement"]

},
{
  stage: "Ecosystem Influence",
  icon: Globe,
  objectives: [
  "Cross-sector recognition",
  "Contributing partner organisations",
  "Sustainable operational model"]

}];


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
          <img alt="Dyslexia in Defence shield logo" className="mx-auto mb-8 h-40 w-auto sm:h-48 md:h-56 lg:h-64 drop-shadow-lg object-fill" src="/lovable-uploads/4eee789e-61aa-4a04-8ec1-96380d579791.png" />
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Coming soon... Dyslexia in Defence
          
          
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
            <Link to="/achieve">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base font-semibold">
                What We Want to Achieve
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

      {/* Mission */}
      <section className="border-t border-border bg-card py-16" aria-label="Mission">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">What We Do</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We connect dyslexic individuals across service, transition, and industry environments — providing peer support, curated resources, and signposting to trusted services.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {["Volunteer led", "Independently governed", "Strengths based", "Professionally moderated"].map((item) => <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background p-4">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Impact framework */}
      <section className="border-t border-border py-16 bg-inherit" aria-label="Impact framework">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">Impact Framework</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {impactStages.map((stage, i) =>
            <Card key={stage.stage} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{
                background: `hsl(var(--ribbon-${["yellow", "blue", "green"][i]}))`
              }} aria-hidden="true" />
                <CardContent className="p-6 pt-8">
                  <stage.icon className="mb-3 h-7 w-7 text-primary" aria-hidden="true" />
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{stage.stage}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {stage.objectives.map((obj) =>
                  <li key={obj} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        {obj}
                      </li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </>);

};

export default HomePage;