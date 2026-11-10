import { createFileRoute } from "@tanstack/react-router";
import ServingNowPage from "@/pages/support/ServingNowPage";
import { pageHead } from "@/lib/seo";

const title = "Serving now (including civil service) | Dyslexia in Defence";
const description = "Guidance for regular and reserve personnel living and working with dyslexia.";

export const Route = createFileRoute("/support/serving-now-preview")({
  component: ServingNowPage,
  head: () => ({
    ...pageHead("/support/serving-now-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/serving-now-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
