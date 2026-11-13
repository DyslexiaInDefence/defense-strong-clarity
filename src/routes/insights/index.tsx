import { createFileRoute } from "@tanstack/react-router";
import InsightsLandingPage from "@/pages/support/InsightsLandingPage";
import { pageHead } from "@/lib/seo";

const title = "Insights | Dyslexia in Defence";
const description = "The evidence behind this work, and what Dyslexia in Defence does and why.";

export const Route = createFileRoute("/insights/")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4).
  component: InsightsLandingPage,
  head: () => ({
    links: pageHead("/insights").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/insights" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
