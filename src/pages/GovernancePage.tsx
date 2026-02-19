import { Shield, Scale, Eye, Lock, Banknote, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    icon: Scale,
    title: "Operating Model",
    content: "Dyslexia in Defence operates as an independent, volunteer-led, non-profit initiative governed by defined principles. It provides peer support and structured signposting for individuals with dyslexia connected to the defence and security sector. While not constituted as a formal charity or company at this stage, the initiative maintains clear governance standards appropriate to its scope and activities.",
  },
  {
    icon: Shield,
    title: "Independence",
    content: "This initiative is entirely independent. It is not affiliated with, endorsed by, or funded by the Ministry of Defence, any military branch, or any employer. All activities are conducted in a personal, voluntary capacity.",
  },
  {
    icon: Eye,
    title: "Scope",
    content: "The initiative provides peer connection, curated resources, and signposting to established services. It does not provide clinical advice, crisis intervention, legal guidance, or formal advocacy. It does not engage in political campaigning or institutional critique.",
  },
  {
    icon: Users,
    title: "Moderation and Safeguarding",
    content: "All community spaces are professionally moderated. A defined code of conduct sets expectations for participant behaviour. Safeguarding considerations are integrated into community management practices. Content that breaches community boundaries is removed promptly.",
  },
  {
    icon: Lock,
    title: "Data and Privacy Principles",
    content: "Personal data is handled in line with UK data protection principles. Data collection is minimised to what is necessary for community operation. No personal data is shared with third parties without explicit consent. Full details are set out in our Privacy Statement.",
  },
  {
    icon: Banknote,
    title: "Funding Transparency",
    content: "The initiative is currently self-funded by the founder. Any future sponsorship, partnership, or funding arrangements will be disclosed transparently. Funding sources will not influence the independence, content, or strategic direction of the initiative. Partnership arrangements are structured to support operational sustainability while preserving editorial and governance independence.",
  },
];

const GovernancePage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Governance</h1>
          <p className="text-lg text-muted-foreground">
            Transparency and accountability are core to how Dyslexia in Defence operates. The following principles define our governance framework.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <section.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernancePage;
