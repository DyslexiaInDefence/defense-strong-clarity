import { Link } from "react-router-dom";
import { Handshake, Eye, Lightbulb, Users, MessageSquare, FileText, Shield, Heart, TrendingUp, Server, Wrench, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const partnershipIncludes = [
  { icon: Eye, text: "Strategic visibility across the network" },
  { icon: Lightbulb, text: "Thought leadership opportunities" },
  { icon: Users, text: "Participation in roundtables or webinars" },
  { icon: MessageSquare, text: "Feature placement in communications" },
  { icon: FileText, text: "Co-creation of practical resources" },
];

const partnerBenefits = [
  { icon: Shield, text: "Association with a professionally governed initiative" },
  { icon: Users, text: "Engagement with a strengths-based inclusion network" },
  { icon: Heart, text: "Demonstrated commitment to cognitive diversity" },
  { icon: TrendingUp, text: "Support of sustainable, non-profit community infrastructure" },
];

const sponsorshipSupports = [
  { icon: Server, text: "Secure hosting and infrastructure" },
  { icon: Wrench, text: "Accessibility tooling and development" },
  { icon: BookOpen, text: "Resource development and curation" },
  { icon: Calendar, text: "Community events and engagement" },
  { icon: Shield, text: "Governance development and assurance" },
];

const PartnerPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Partner with Dyslexia in Defence</h1>
          <p className="text-lg text-muted-foreground">
            Supporting inclusive capability across the defence and security ecosystem.
          </p>
        </div>

        {/* Why partner */}
        <section className="mb-12" aria-label="Why partner with us">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Why Partner With Us</h2>
          <p className="mb-6 max-w-3xl text-muted-foreground leading-relaxed">
            Partnership with Dyslexia in Defence is a strategic collaboration contributing to workforce resilience and inclusive leadership across the defence and security sector. By working together, we advance the recognition and support of cognitive diversity as a capability advantage.
          </p>
        </section>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* What partnership includes */}
          <section aria-label="What partnership includes">
            <h2 className="mb-6 text-2xl font-bold text-foreground">What Partnership Includes</h2>
            <div className="space-y-4">
              {partnershipIncludes.map((item) => (
                <Card key={item.text}>
                  <CardContent className="flex items-center gap-3 p-5">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits to partners */}
          <section aria-label="Benefits to partners">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Benefits to Partners</h2>
            <div className="space-y-4">
              {partnerBenefits.map((item) => (
                <Card key={item.text}>
                  <CardContent className="flex items-center gap-3 p-5">
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* What sponsorship supports */}
        <section className="mt-12" aria-label="What sponsorship supports">
          <h2 className="mb-6 text-2xl font-bold text-foreground">What Sponsorship Supports</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* CTA */}
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
