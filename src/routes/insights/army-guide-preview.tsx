import { createFileRoute } from "@tanstack/react-router";
import ArmyGuidePreviewPage from "@/pages/insights/ArmyGuidePreviewPage";
import { pageHead } from "@/lib/seo";

const title = "Serving with dyslexia in the Army | Dyslexia in Defence";
const description = "Work in progress guide to serving in the Army with dyslexia.";

export const Route = createFileRoute("/insights/army-guide-preview")({
  // Hidden skeleton: no structured data, no page date. Moves to /insights/serving-with-dyslexia-in-the-army-uk at switch-over.
  component: ArmyGuidePreviewPage,
  head: () => ({
    ...pageHead("/insights/army-guide-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/insights/army-guide-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
