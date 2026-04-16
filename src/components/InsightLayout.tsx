import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AudienceRouter, { type AudienceIntent } from "@/components/AudienceRouter";
import BackToPathway from "@/components/BackToPathway";
import { trackEvent } from "@/lib/analytics";
import type { ReactNode } from "react";

interface InsightLayoutProps {
  /** H1 — the question the page answers. */
  title: string;
  /** Optional eyebrow above the title (e.g. "Lived experience"). */
  eyebrow?: string;
  /** The page intent — drives router highlight + dominant line in the next-steps block. */
  intent: AudienceIntent;
  /** Page body. */
  children: ReactNode;
}

/**
 * Standard wrapper for every Insights article.
 *
 * Renders:
 *  - Audience Router (top, with `intent` highlighted)
 *  - H1 + page body
 *  - The exact "Still unsure what to do next?" block — the ONLY bottom conversion section.
 *
 * Pages MUST NOT render their own NextSteps block or extra CTAs.
 * CTA priority is expressed by visually emphasising the relevant line inside the block,
 * not by adding a separate dominant button row.
 */

// Which line inside the next-steps block is the dominant CTA per intent.
// joining → Ask the Community
// serving → Join the Network
// veteran → Join the Network (Ask the Community remains a strong secondary)
const DOMINANT_LINE: Record<AudienceIntent, "community" | "join" | "insights"> = {
  joining: "community",
  serving: "join",
  veteran: "join",
};

const InsightLayout = ({ title, eyebrow, intent, children }: InsightLayoutProps) => {
  const dominant = DOMINANT_LINE[intent];

  const lineClass = (key: "community" | "join" | "insights") =>
    cn(
      "rounded-lg p-3 leading-relaxed text-foreground transition-colors",
      dominant === key
        ? "bg-primary/10 ring-1 ring-primary/30"
        : "bg-transparent",
    );

  const linkClass = (key: "community" | "join" | "insights") =>
    cn(
      "underline-offset-4 hover:underline",
      dominant === key
        ? "font-bold text-primary"
        : "font-semibold text-primary",
    );

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <AudienceRouter active={intent} className="mb-8" />

        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        )}

        <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h1>

        {children}

        {/* Subtle pathway return — low emphasis, just above the bottom block. */}
        <div className="mt-10">
          <BackToPathway intent={intent} />
        </div>

        {/* PRIMARY conversion point — exact wording per brief. Do not add extra CTAs. */}
        <section
          aria-labelledby="next-steps-heading"
          className="mt-4 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <h2
            id="next-steps-heading"
            className="text-2xl font-bold text-foreground mb-3"
          >
            Still unsure what to do next?
          </h2>
          <p className="text-foreground leading-relaxed mb-5">
            The quickest way to get clarity is to speak to people who’ve been through it.
          </p>
          <ul className="space-y-2">
            <li className={lineClass("community")}>
              →{" "}
              <Link
                to="/community"
                className={linkClass("community")}
                onClick={() =>
                  trackEvent("next_steps_click", {
                    intent,
                    cta: "ask_the_community",
                    is_dominant: dominant === "community",
                    target: "/community",
                  })
                }
              >
                Ask the Community
              </Link>{" "}
              – get real answers from serving and former personnel
            </li>
            <li className={lineClass("join")}>
              →{" "}
              <Link
                to="/join"
                className={linkClass("join")}
                onClick={() =>
                  trackEvent("next_steps_click", {
                    intent,
                    cta: "join_the_network",
                    is_dominant: dominant === "join",
                    target: "/join",
                  })
                }
              >
                Join the Network
              </Link>{" "}
              – connect with others and access support
            </li>
            <li className={lineClass("insights")}>
              →{" "}
              <Link
                to="/insights"
                className={linkClass("insights")}
                onClick={() =>
                  trackEvent("next_steps_click", {
                    intent,
                    cta: "explore_insights",
                    is_dominant: dominant === "insights",
                    target: "/insights",
                  })
                }
              >
                Explore Insights
              </Link>{" "}
              – understand what to expect next
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InsightLayout;
