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
      "Not sure how this will affect you? Speak to people who’ve already gone through it — no commitment, just real answers.",
    ctaLabel: "Ask the Community",
    to: "/community",
  },
  serving: {
    message:
      "Support exists, but it’s not always obvious. Connect with others — including the Defence Dyslexia Network — who can help you navigate it.",
    ctaLabel: "Join the Network",
    to: "/join",
  },
  veteran: {
    message:
      "Support is out there, but it’s rarely handed to you. Connect with others who’ve already made the transition and know where to look.",
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
