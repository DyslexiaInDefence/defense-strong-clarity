import { createFileRoute } from "@tanstack/react-router";
import LivedExperiencesHubPage from "@/pages/LivedExperiencesHubPage";
import { pageHead } from "@/lib/seo";

const title = "Lived experiences | Dyslexia in Defence";
const description = "Personal stories of dyslexia from across the defence community. They are not official guidance.";

export const Route = createFileRoute("/lived-experiences/")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4).
  component: LivedExperiencesHubPage,
  head: () => ({
    links: pageHead("/lived-experiences").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/lived-experiences" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
