import { Link } from "react-router-dom";
import { BookOpen, MessageCircle, UserPlus, ArrowRight } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Continue learning",
    description: "Browse our FAQ and articles.",
    cta: "Explore Insights",
    to: "/insights",
  },
  {
    icon: MessageCircle,
    title: "Ask a question",
    description: "Talk to people who understand.",
    cta: "Ask the Community",
    to: "/community",
  },
  {
    icon: UserPlus,
    title: "Get involved",
    description: "Become part of the network.",
    cta: "Join the Network",
    to: "/join",
  },
];

const NextSteps = () => {
  return (
    <section
      className="border-t border-border bg-card py-14"
      aria-label="What to do next"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">What to do next</h2>
          <p className="mt-2 text-muted-foreground">
            Pick the path that fits where you are right now.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex h-full flex-col rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
                {item.cta}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
