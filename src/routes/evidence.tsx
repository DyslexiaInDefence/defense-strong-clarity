import { createFileRoute } from "@tanstack/react-router";
import EvidencePage from "@/pages/EvidencePage";

export const Route = createFileRoute("/evidence")({
  component: EvidencePage,
  head: () => ({
    meta: [
      { title: "The data behind the story | Dyslexia in Defence" },
      { name: "description", content: "The data behind the story at Dyslexia in Defence. Coming soon." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "The data behind the story | Dyslexia in Defence" },
      { property: "og:description", content: "The data behind the story at Dyslexia in Defence. Coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});