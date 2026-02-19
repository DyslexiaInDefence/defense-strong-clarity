import { Link } from "react-router-dom";
import { Handshake, Eye, Lightbulb, Users, MessageSquare, FileText, Shield, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const partnershipIncludes = [
  { icon: Eye, text: "Strategic visibility across the network" },
  { icon: Lightbulb, text: "Thought leadership opportunities" },
  { icon: Users, text: "Roundtable and webinar participation" },
  { icon: MessageSquare, text: "Feature placement in communications" },
  { icon: FileText, text: "Co-creation of practical resources" },
];

const partnerBenefits = [
  { icon: Shield, text: "Association with a professionally governed initiative" },
  { icon: Users, text: "Engagement with a strengths-based inclusion network" },
  { icon: Heart, text: "Demonstrated commitment to cognitive diversity" },
  { icon: TrendingUp, text: "Support of sustainable community infrastructure" },
];

const PartnerPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Partner With Us</h1>
          <p className="text-lg text-muted-foreground">
            Strategic collaboration supporting workforce resilience and inclusive capability.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section aria-label="What partnership includes">
            <h2 className="mb-5 text-2xl font-bold text-foreground">What Partnership Includes</h2>
            <div className="space-y-3">
              {partnershipIncludes.map((item) => (
                <Card key={item.text}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section aria-label="Benefits to partners">
            <h2 className="mb-5 text-2xl font-bold text-foreground">Benefits to Partners</h2>
            <div className="space-y-3">
              {partnerBenefits.map((item) => (
                <Card key={item.text}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-8 font-semibold">
              <Handshake className="mr-2 h-5 w-5" />
              Enquire About Partnership
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
