import { Phone, Brain, Shield, Briefcase, BookOpen, Heart, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "Emergency",
    icon: Phone,
    entries: [
      { name: "Emergency Services", detail: "Call 999" },
      { name: "Samaritans", detail: "Call 116 123 — free, 24/7, confidential" },
    ],
  },
  {
    title: "Mental Health",
    icon: Brain,
    entries: [
      { name: "Crisis Text Line", detail: "Text SHOUT to 85258" },
      { name: "NHS 111", detail: "Call 111 for urgent medical advice" },
    ],
  },
  {
    title: "Forces & Veteran Support",
    icon: Shield,
    entries: [
      { name: "Combat Stress", detail: "combatstress.org.uk" },
      { name: "SSAFA", detail: "ssafa.org.uk" },
      { name: "Help for Heroes", detail: "helpforheroes.org.uk" },
    ],
  },
  {
    title: "Employment Transition",
    icon: Briefcase,
    entries: [
      { name: "Career Transition Partnership", detail: "ctp.org.uk" },
      { name: "Forces Employment Charity", detail: "forcesemployment.org.uk" },
    ],
  },
  {
    title: "Dyslexia Organisations",
    icon: BookOpen,
    entries: [
      { name: "British Dyslexia Association", detail: "bdadyslexia.org.uk" },
      { name: "Dyslexia Action", detail: "dyslexiaaction.org.uk" },
    ],
  },
  {
    title: "Family & Carers",
    icon: Heart,
    entries: [
      { name: "Carers UK", detail: "carersuk.org" },
      { name: "Family Lives", detail: "familylives.org.uk" },
    ],
  },
];

const SupportPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Support Directory</h1>
          <p className="text-lg text-muted-foreground">
            Trusted services and organisations for the defence and security community.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title} aria-label={section.title}>
              <div className="flex items-center gap-2 mb-4">
                <section.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.entries.map((entry) => (
                  <Card key={entry.name}>
                    <CardContent className="p-5">
                      <h3 className="mb-1 font-semibold text-foreground">{entry.name}</h3>
                      <p className="text-sm text-muted-foreground">{entry.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
