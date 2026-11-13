import { createFileRoute } from "@tanstack/react-router";
import ServingNowPage from "@/pages/support/ServingNowPage";
import { pageHead } from "@/lib/seo";

const title = "Serving now (including civil service) | Dyslexia in Defence";
const description = "Guidance for regular and reserve personnel living and working with dyslexia.";

export const Route = createFileRoute("/support/currently-serving")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4).
  component: ServingNowPage,
  head: () => ({
    links: pageHead("/support/currently-serving").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/currently-serving" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
