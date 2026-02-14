import { Brain, Shield, Lightbulb } from "lucide-react";

const sections = [
  {
    icon: Brain,
    title: "What Is Dyslexia?",
    points: [
      "A neurological difference affecting how the brain processes written language",
      "Not a measure of intelligence — many dyslexic individuals are highly capable",
      "Affects around 10–15% of the population",
      "Presents differently in every person",
    ],
  },
  {
    icon: Shield,
    title: "Why It Matters in Defence",
    points: [
      "Defence relies on diverse thinking to solve complex, high-stakes problems",
      "Many dyslexic individuals go unidentified, limiting their potential contribution",
      "Inclusive workplaces improve morale, retention, and operational effectiveness",
      "Reasonable adjustments are straightforward and high-impact",
    ],
  },
  {
    icon: Lightbulb,
    title: "Strengths of Dyslexic Thinking",
    points: [
      "Big-picture and strategic thinking",
      "Strong problem-solving and lateral reasoning",
      "High creativity and innovation",
      "Excellent 3D spatial awareness",
      "Resilience and adaptability under pressure",
    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30" aria-label="About dyslexia in defence">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
          About
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          Understanding dyslexia is the first step to unlocking its strengths within defence.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl bg-card p-8 shadow-sm border border-border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <section.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2" role="list">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-foreground/80">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
