import { Brain, Eye, Lightbulb, Puzzle, Compass, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  { icon: Puzzle, label: "Systems thinking" },
  { icon: Eye, label: "Pattern recognition" },
  { icon: Brain, label: "Strategic problem solving" },
  { icon: Compass, label: "Spatial reasoning" },
  { icon: Lightbulb, label: "Innovative thinking under pressure" },
];

const ecosystem = [
  { label: "Pre-service", description: "Candidates exploring careers in defence and security." },
  { label: "Serving", description: "Active personnel across military and civilian roles." },
  { label: "Veterans", description: "Those transitioning to civilian life or employment." },
  { label: "Industry", description: "Defence and security contractors and partners." },
  { label: "Families", description: "Dependants and family members navigating support." },
];

const WhyItMattersPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why It Matters</h1>
          <p className="text-lg text-muted-foreground">
            Modern defence and security environments require diverse cognitive approaches. Recognising and leveraging neurodivergent strengths is a capability advantage.
          </p>
        </div>

        {/* Strengths */}
        <section className="mb-16" aria-label="Dyslexic strengths">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Strengths Associated with Dyslexia</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <Card key={s.label}>
                <CardContent className="flex items-center gap-3 p-5">
                  <s.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-medium text-foreground">{s.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ecosystem gap */}
        <section aria-label="Ecosystem">
          <h2 className="mb-4 text-2xl font-bold text-foreground">The Ecosystem Gap</h2>
          <p className="mb-6 max-w-3xl text-muted-foreground">
            Support for dyslexic individuals spans multiple stages of engagement with the defence and security sector. This initiative provides an independent space for peer connection and signposting, complementary to existing institutional structures.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((e) => (
              <Card key={e.label}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground">{e.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyItMattersPage;
