import { MessageCircle, Shield, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offers = [
  "Peer connection with shared lived experience",
  "Signposting to trusted resources and services",
  "Professionally moderated, safe environment",
  "Clear code of conduct for all participants",
];

const CommunityPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Community</h1>
          <p className="text-lg text-muted-foreground">
            A moderated peer network for individuals connected to the defence and security sector. Built on trust and mutual respect.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">What We Offer</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {offers.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">Our Approach</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Strengths-based and capability-focused
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Independent and professionally governed
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Complementary to existing support structures
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
