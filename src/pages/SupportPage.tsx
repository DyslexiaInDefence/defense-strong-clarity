import { AlertTriangle, Phone, Brain, Shield, Briefcase, BookOpen, Heart, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    title: "Emergency",
    icon: Phone,
    entries: [
      { name: "Emergency Services", detail: "Call 999 if in immediate danger." },
      { name: "Samaritans", detail: "Call 116 123 — free, 24/7, confidential." },
    ],
  },
  {
    title: "Mental Health Crisis",
    icon: Brain,
    entries: [
      { name: "Crisis Text Line", detail: "Text SHOUT to 85258." },
      { name: "NHS 111", detail: "Call 111 for urgent medical advice." },
    ],
  },
  {
    title: "Forces and Veteran Support",
    icon: Shield,
    entries: [
      { name: "Combat Stress", detail: "Mental health support for veterans. combatfatigues.org" },
      { name: "SSAFA", detail: "Support for serving personnel, veterans, and families. ssafa.org.uk" },
      { name: "Help for Heroes", detail: "Recovery and support for wounded veterans. helpforheroes.org.uk" },
    ],
  },
  {
    title: "Employment Transition",
    icon: Briefcase,
    entries: [
      { name: "Career Transition Partnership", detail: "Official MOD resettlement provision. ctp.org.uk" },
      { name: "Forces Employment Charity", detail: "Employment support for ex-forces. forcesemployment.org.uk" },
    ],
  },
  {
    title: "General Dyslexia Charities",
    icon: BookOpen,
    entries: [
      { name: "British Dyslexia Association", detail: "Information, advice, and support. bdadyslexia.org.uk" },
      { name: "Dyslexia Action", detail: "Assessment and learning support. dyslexiaaction.org.uk" },
    ],
  },
  {
    title: "Family and Carers Support",
    icon: Heart,
    entries: [
      { name: "Carers UK", detail: "Support and advice for carers. carersuk.org" },
      { name: "Family Lives", detail: "Emotional support for families. familylives.org.uk" },
    ],
  },
];

const SupportPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Support Directory</h1>
          <p className="text-lg text-muted-foreground">
            Structured signposting to trusted services and organisations. This directory is provided for information purposes only.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mb-10 rounded-xl border-2 border-destructive/30 bg-destructive/5 p-6" role="alert">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-destructive" aria-hidden="true" />
            <div>
              <p className="mb-1 font-bold text-foreground">Important</p>
              <p className="text-muted-foreground">
                This community provides peer support and signposting only. It is not a crisis or clinical service. If you are in immediate danger, call 999.
              </p>
            </div>
          </div>
        </div>

        {/* Directory */}
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
