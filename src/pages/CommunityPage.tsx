import { Shield, MessageCircle, Ban, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const boundaries = [
  "No operational discussion",
  "No employer grievance content",
  "No political debate",
  "No clinical advice or diagnosis",
];

const CommunityPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Community</h1>
          <p className="text-lg text-muted-foreground">
            A moderated peer network for individuals connected to the defence and security sector. Built on trust, defined boundaries, and mutual respect.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* What we offer */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">What We Offer</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Peer connection with others who share lived experience
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Structured signposting to trusted resources and services
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  A professionally moderated, safe environment
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Clear code of conduct for all participants
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Boundaries */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-bold text-foreground">Community Boundaries</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {boundaries.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Ban className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Clarification */}
        <div className="mt-8 rounded-xl border border-border bg-secondary/50 p-6" role="note">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-1 font-semibold text-foreground">Important clarification</p>
              <p>This community provides peer support and connection only. It is not a clinical service, not crisis intervention, and does not replace professional advice. If you are in immediate danger, call 999.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
