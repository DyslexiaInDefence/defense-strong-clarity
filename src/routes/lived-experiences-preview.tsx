import { createFileRoute } from "@tanstack/react-router";
import LivedExperiencesHubPage from "@/pages/LivedExperiencesHubPage";
import { pageHead } from "@/lib/seo";

const title = "Lived experiences | Dyslexia in Defence";
const description = "Personal stories of dyslexia from across the defence community. They are not official guidance.";

export const Route = createFileRoute("/lived-experiences-preview")({
  // Temporary hidden address; replaces the live /lived-experiences index at switch-over. No structured data while hidden.
  component: LivedExperiencesHubPage,
  head: () => ({
    ...pageHead("/lived-experiences-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/lived-experiences-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
