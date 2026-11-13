import { createFileRoute } from "@tanstack/react-router";
import UnderstandingDyslexiaPage from "@/pages/support/UnderstandingDyslexiaPage";
import { pageHead } from "@/lib/seo";

const title = "Understanding Dyslexia | Dyslexia in Defence";
const description = "The dyslexic spiky profile, the strengths it brings and why Defence should look at both sides of it.";

export const Route = createFileRoute("/insights/understanding-dyslexia")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4). No page date yet.
  component: UnderstandingDyslexiaPage,
  head: () => ({
    links: pageHead("/insights/understanding-dyslexia").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/insights/understanding-dyslexia" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
