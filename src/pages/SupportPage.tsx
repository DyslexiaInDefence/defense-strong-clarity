import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, MessageSquare, UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const supportLinks = [
  {
    title: "Insights",
    description: "Clear answers to common questions about dyslexia in UK Defence.",
    to: "/insights",
    icon: BookOpen,
    stage: "Learn",
  },
  {
    title: "Community",
    description: "Ask others, share lived experience, and find peer support.",
    to: "/community",
    icon: MessageSquare,
    stage: "Ask",
  },
  {
    title: "Join",
    description: "Become part of the Dyslexia in Defence network.",
    to: "/join",
    icon: UserPlus,
    stage: "Commit",
  },
];

const SupportPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Support</h1>
          <p className="text-lg text-muted-foreground">
            Start here if you are looking for guidance, reassurance, community support, or a way to get involved.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {supportLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label={item.title}
            >
              <Card className="h-full transition-colors hover:border-primary">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    {item.stage && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.stage}
                      </span>
                    )}
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-foreground">{item.title}</h2>
                  <p className="mb-3 text-sm text-muted-foreground">{item.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    Go to {item.title}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <h2 className="mb-2 text-lg font-bold text-foreground">Your journey</h2>
          <p className="text-sm text-muted-foreground">
            Learn with <Link to="/insights" className="text-primary hover:underline">Insights</Link> · Ask in the <Link to="/community" className="text-primary hover:underline">Community</Link> · Commit by choosing to <Link to="/join" className="text-primary hover:underline">Join</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
