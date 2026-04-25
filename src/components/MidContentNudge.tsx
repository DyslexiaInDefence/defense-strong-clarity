import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { AudienceIntent } from "@/components/AudienceRouter";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface MidContentNudgeProps {
  intent: AudienceIntent;
  /** Optional override — otherwise uses sensible default per intent. */
  message?: string;
  className?: string;
}

const DEFAULTS: Record<AudienceIntent, { message: string; ctaLabel: string; to: string }> = {
  joining: {
    message:
      "Not sure if dyslexia will affect you? Ask people who’ve already been through it.",
    ctaLabel: "Ask the Community",
    to: "/community",
  },
  serving: {
    message:
      "You don’t have to figure this out alone. Connect with others who’ve already navigated it in service.",
    ctaLabel: "Join the Network",
    to: "/join",
  },
  veteran: {
    message:
      "You don’t have to work this out on your own. Connect with others who’ve already made the transition.",
    ctaLabel: "Join the Network",
    to: "/join",
  },
};

const MidContentNudge = ({ intent, message, className }: MidContentNudgeProps) => {
  const config = DEFAULTS[intent];
  const text = message ?? config.message;

  return (
    <aside
      className={cn(
        "my-8 flex flex-col gap-4 rounded-2xl border-l-4 border-l-primary bg-primary/5 p-5 md:flex-row md:items-center md:justify-between md:gap-6",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-foreground md:text-base">
          {text}
        </p>
      </div>
      <Link
        to={config.to}
        onClick={() =>
          trackEvent("mid_content_nudge_click", {
            intent,
            cta_label: config.ctaLabel,
            target: config.to,
          })
        }
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {config.ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>
  );
};

export default MidContentNudge;
