import { createFileRoute } from "@tanstack/react-router";
import EvidencePage from "@/pages/EvidencePage";

export const Route = createFileRoute("/evidence")({
  component: EvidencePage,
  head: () => ({
    meta: [
      { title: "The data behind the story | Dyslexia in Defence" },
      { name: "description", content: "What serving personnel, veterans and civil servants told us about dyslexia in Defence." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "The data behind the story | Dyslexia in Defence" },
      { property: "og:description", content: "What serving personnel, veterans and civil servants told us about dyslexia in Defence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});