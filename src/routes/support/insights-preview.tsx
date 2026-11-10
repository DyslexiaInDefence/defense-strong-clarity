import { createFileRoute } from "@tanstack/react-router";
import InsightsLandingPage from "@/pages/support/InsightsLandingPage";
import { pageHead } from "@/lib/seo";

const title = "Insights | Dyslexia in Defence";
const description = "The evidence behind this work, and what Dyslexia in Defence does and why.";

export const Route = createFileRoute("/support/insights-preview")({
  // Temporary hidden address; moves to /insights at switch-over. No structured data while hidden.
  component: InsightsLandingPage,
  head: () => ({
    ...pageHead("/support/insights-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/insights-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
