import { createFileRoute } from "@tanstack/react-router";
import StartHerePage from "@/pages/support/StartHerePage";
import { pageHead } from "@/lib/seo";

const title = "Start here | Dyslexia in Defence";
const description = "Choose dyslexia guidance for joining Defence, serving now, leaving service or supporting someone.";

export const Route = createFileRoute("/support/start-here")({
  component: StartHerePage,
  head: () => ({
    ...pageHead("/support/start-here"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/start-here" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});