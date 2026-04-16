import { Link } from "react-router-dom";
import { UserPlus, Shield, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export type AudienceIntent = "joining" | "serving" | "veteran";

interface AudienceRouterProps {
  /** The current page's primary intent — highlighted as 'You are here'. */
  active?: AudienceIntent;
  className?: string;
}

const OPTIONS: Array<{
  intent: AudienceIntent;
  label: string;
  icon: typeof UserPlus;
  to: string;
}> = [
  { intent: "joining", label: "Thinking of Joining", icon: UserPlus, to: "/insights#joining" },
  { intent: "serving", label: "Currently Serving", icon: Shield, to: "/insights#serving" },
  { intent: "veteran", label: "Leaving / Veteran", icon: LogOut, to: "/insights#veteran" },
];

const AudienceRouter = ({ active, className }: AudienceRouterProps) => (
  <section
    aria-label="Pick your pathway"
    className={cn(
      "rounded-2xl border border-border bg-card p-5 md:p-6",
      className,
    )}
  >
    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
      Start here
    </p>
    <p className="mt-1 text-sm text-muted-foreground">Pick what best fits you</p>

    <ul className="mt-4 grid gap-3 sm:grid-cols-3">
      {OPTIONS.map(({ intent, label, icon: Icon, to }) => {
        const isActive = active === intent;
        return (
          <li key={intent}>
            <Link
              to={to}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex h-full items-center gap-3 rounded-xl border p-3 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "border-primary bg-primary/10"
                  : "border-border bg-background hover:border-primary",
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary",
                )}
                aria-hidden="true"
              />
              <span className="flex flex-col">
                <span
                  className={cn(
                    "text-sm font-semibold",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {label}
                </span>
                {isActive && (
                  <span className="text-xs font-medium text-primary/80">You are here</span>
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default AudienceRouter;
