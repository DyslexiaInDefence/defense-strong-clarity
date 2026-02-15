import { Link } from "react-router-dom";
import { Handshake, Server, Wrench, BookOpen, Calendar, Shield, Users, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sponsorshipSupports = [
  { icon: Server, text: "Secure hosting and infrastructure" },
  { icon: Wrench, text: "Accessibility tooling and development" },
  { icon: BookOpen, text: "Resource development and curation" },
  { icon: Calendar, text: "Community events and engagement" },
  { icon: Shield, text: "Governance development and assurance" },
];

const partnerValue = [
  { icon: Heart, text: "Association with inclusion and cognitive diversity" },
  { icon: Users, text: "Engagement with the defence and security community" },
  { icon: TrendingUp, text: "Support of defence workforce capability" },
];

const PartnerPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Partner With Us</h1>
          <p className="text-lg text-muted-foreground">
            Dyslexia in Defence is a non-profit initiative supporting cognitive diversity across the defence and security ecosystem. We welcome partnerships with organisations that share our commitment to inclusion and capability.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* What sponsorship supports */}
          <section aria-label="What sponsorship supports">
            <h2 className="mb-6 text-2xl font-bold text-foreground">What Sponsorship Supports</h2>
            <div className="space-y-4">
              {sponsorshipSupports.map((item) => (
                <Card key={item.text}>
                  <CardContent className="flex items-center gap-3 p-5">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Value to partners */}
          <section aria-label="Value to partners">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Value to Partners</h2>
            <div className="space-y-4">
              {partnerValue.map((item) => (
                <Card key={item.text}>
                  <CardContent className="flex items-center gap-3 p-5">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 font-semibold">
                  <Handshake className="mr-2 h-5 w-5" />
                  Enquire About Partnership
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;
