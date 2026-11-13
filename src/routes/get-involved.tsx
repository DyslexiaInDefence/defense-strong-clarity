import { createFileRoute } from "@tanstack/react-router";
import GetInvolvedHubPage from "@/pages/GetInvolvedHubPage";
import { pageHead } from "@/lib/seo";

const title = "Get involved | Dyslexia in Defence";
const description = "Meet others, share what it has been like, and help shape what we do.";

export const Route = createFileRoute("/get-involved")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4). New address. No page date yet.
  component: GetInvolvedHubPage,
  head: () => ({
    links: pageHead("/get-involved").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/get-involved" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
