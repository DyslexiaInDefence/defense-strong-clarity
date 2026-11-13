import { createFileRoute } from "@tanstack/react-router";
import UnderstandingDyslexiaPage from "@/pages/support/UnderstandingDyslexiaPage";
import { pageHead } from "@/lib/seo";

const title = "Understanding Dyslexia | Dyslexia in Defence";
const description = "The dyslexic spiky profile, the strengths it brings and why Defence should look at both sides of it.";

export const Route = createFileRoute("/support/understanding-dyslexia-preview")({
  // Hidden preview: no structured data, no page date. Moves to /insights/understanding-dyslexia at switch-over.
  component: UnderstandingDyslexiaPage,
  head: () => ({
    ...pageHead("/support/understanding-dyslexia-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/understanding-dyslexia-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
