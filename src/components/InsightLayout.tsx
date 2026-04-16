import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import AudienceRouter, { type AudienceIntent } from "@/components/AudienceRouter";
import type { ReactNode } from "react";

interface InsightLayoutProps {
  /** H1 — the question the page answers. */
  title: string;
  /** Optional eyebrow above the title (e.g. "Lived experience"). */
  eyebrow?: string;
  /** The page intent — drives router highlight + primary CTA. */
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
 *  - Standard "Still unsure what to do next?" block (PRIMARY conversion point)
 *  - Single dominant CTA per intent + one secondary CTA
 *
 * Pages should NOT render their own NextSteps block or extra CTAs.
 */
const PRIMARY_CTA: Record<
  AudienceIntent,
  { label: string; to: string; secondaryLabel: string; secondaryTo: string }
> = {
  joining: {
    label: "Ask the Community",
    to: "/community",
    secondaryLabel: "Explore Insights",
    secondaryTo: "/insights",
  },
  serving: {
    label: "Join the Network",
    to: "/join",
    secondaryLabel: "Ask the Community",
    secondaryTo: "/community",
  },
  veteran: {
    // Brief: veteran pages get Join + Community as joint primary.
    // We pick Join as the dominant button visually and keep Community equally weighted in the next-steps block.
    label: "Join the Network",
    to: "/join",
    secondaryLabel: "Ask the Community",
    secondaryTo: "/community",
  },
};

const InsightLayout = ({ title, eyebrow, intent, children }: InsightLayoutProps) => {
  const cta = PRIMARY_CTA[intent];

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

        {/* PRIMARY conversion point — exact wording per brief. Do not add extra CTAs. */}
        <section
          aria-labelledby="next-steps-heading"
          className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8"
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
          <ul className="space-y-3 text-foreground leading-relaxed">
            <li>
              →{" "}
              <Link
                to="/community"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Ask the Community
              </Link>{" "}
              – get real answers from serving and former personnel
            </li>
            <li>
              →{" "}
              <Link
                to="/join"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Join the Network
              </Link>{" "}
              – connect with others and access support
            </li>
            <li>
              →{" "}
              <Link
                to="/insights"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Explore Insights
              </Link>{" "}
              – understand what to expect next
            </li>
          </ul>
        </section>

        {/* Single dominant CTA driven by intent + one secondary */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={cta.to}>
            <Button className="gap-2">
              {cta.label} <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link to={cta.secondaryTo}>
            <Button variant="outline" className="gap-2">
              {cta.secondaryLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightLayout;
