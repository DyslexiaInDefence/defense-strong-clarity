import { Shield, Scale, Eye, Lock, Banknote, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import didIcon from "@/assets/did-icon.png";

const sections = [
  {
    icon: Scale,
    title: "Operating Model",
    content: "Independent, volunteer-led, non-profit initiative with defined governance principles appropriate to scope and activities.",
  },
  {
    icon: Shield,
    title: "Independence",
    content: "Entirely independent. Not affiliated with, endorsed by, or funded by the Ministry of Defence, any military branch, or any employer.",
  },
  {
    icon: Eye,
    title: "Scope",
    content: "Peer connection, curated resources, and signposting to established services.",
  },
  {
    icon: Users,
    title: "Moderation",
    content: "All community spaces are professionally moderated with a defined code of conduct and integrated safeguarding practices.",
  },
  {
    icon: Lock,
    title: "Data Principles",
    content: "Personal data handled in line with UK data protection principles. Collection minimised. No sharing without explicit consent.",
  },
  {
    icon: Banknote,
    title: "Funding Transparency",
    content: "Currently self-funded. Any future partnerships will be disclosed transparently and will not influence independence or content.",
  },
];

const GovernancePage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <img src={didIcon} alt="" className="h-10 w-auto" aria-hidden="true" />
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">Governance</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Transparency and accountability are core to how we operate.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <section.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernancePage;
