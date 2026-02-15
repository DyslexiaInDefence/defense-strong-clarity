import { Shield, User, Scale, Lock, FileText, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const governancePrinciples = [
  { icon: Scale, text: "Clear scope and boundaries" },
  { icon: Shield, text: "Professionally moderated" },
  { icon: FileText, text: "Defined code of conduct" },
  { icon: Lock, text: "Data handled in line with UK data protection principles" },
  { icon: Heart, text: "Non-profit operational model" },
];

const AboutPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">About</h1>
          <p className="text-lg text-muted-foreground">
            Dyslexia in Defence is an independent, volunteer-led initiative providing peer support and structured signposting across the defence and security ecosystem.
          </p>
        </div>

        {/* Founder section */}
        <section className="mb-16" aria-label="Founder">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Symon Smith</h2>
                  <p className="text-muted-foreground">Founder, Dyslexia in Defence</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Symon Smith brings a professional background spanning defence and cybersecurity governance, risk management, and assurance. Holding an MSc in Cyber Defence and Information Assurance and recognised as a Chartered IT Professional, Symon combines technical expertise with lived experience to inform a strengths-based approach to neurodiversity.
                </p>
                <p>
                  Dyslexia in Defence was established to address a gap in independent peer support for dyslexic individuals connected to the defence and security sector. The initiative is grounded in the understanding that cognitive diversity is a strategic asset.
                </p>
                <p className="text-sm italic border-l-2 border-primary pl-4">
                  Founded in a personal capacity. Independent and not affiliated with or endorsed by the Ministry of Defence or any employer.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Governance Principles */}
        <section aria-label="Governance principles">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Governance Principles</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {governancePrinciples.map((item) => (
              <Card key={item.text}>
                <CardContent className="flex items-start gap-3 p-5">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-foreground">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
