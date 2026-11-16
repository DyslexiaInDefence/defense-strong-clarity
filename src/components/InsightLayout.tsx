import type { ReactNode } from "react";
import PageTrail from "@/components/PageTrail";
import SupportTabs from "@/components/SupportTabs";
import { insightArticleTrail } from "@/data/pageBreadcrumbs";
import "@/pages/support/start-here.css";

interface InsightLayoutProps {
  /** H1, the question the page answers. Also the last step of the page trail. */
  title: string;
  /** Optional eyebrow above the title (e.g. "Lived experience"). */
  eyebrow?: string;
  /** Optional one-line reassurance shown directly under the H1. */
  progressReassurance?: string;
  /** Page body. */
  children: ReactNode;
}

/**
 * Standard wrapper for every Insights guide article.
 *
 * Renders the Get support header used by the Insights page (page trail
 * Home > Get support > Insights > title, and the Get support tabs with Insights
 * marked), then the H1 and page body. Pages MUST NOT render their own NextSteps block.
 */
const InsightLayout = ({ title, eyebrow, progressReassurance, children }: InsightLayoutProps) => (
  <div className="support-staged-page text-foreground">
    <div className="container max-w-6xl px-4 pb-14 pt-4 sm:px-6">
      <PageTrail crumbs={insightArticleTrail(title)} label="Get support breadcrumb" />
      <SupportTabs activePath="/insights" onTabPage={false} />

      <article className="max-w-3xl pt-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        )}

        <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h1>

        {progressReassurance && (
          <p className="mb-8 -mt-2 text-base font-medium text-muted-foreground md:text-lg">
            {progressReassurance}
          </p>
        )}

        {children}
      </article>
    </div>
  </div>
);

export default InsightLayout;
