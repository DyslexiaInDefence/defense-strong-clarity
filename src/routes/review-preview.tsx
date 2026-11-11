import { createFileRoute } from "@tanstack/react-router";
import ReviewPreviewPage from "@/pages/ReviewPreviewPage";
import { pageHead } from "@/lib/seo";

const title = "Redesign review | Dyslexia in Defence";
const description = "Every redesigned page that is built but not live yet.";

export const Route = createFileRoute("/review-preview")({
  // Temporary hidden review page; delete at switch-over. No structured data.
  component: ReviewPreviewPage,
  head: () => ({
    ...pageHead("/review-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/review-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
