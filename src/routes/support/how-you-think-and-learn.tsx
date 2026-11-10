import { createFileRoute } from "@tanstack/react-router";
import HowYouThinkAndLearnPage from "@/pages/support/HowYouThinkAndLearnPage";
import { pageHead } from "@/lib/seo";

const title = "Understanding how you think and learn | Dyslexia in Defence";
const description = "What dyslexia is, how it shows up for you, and independent screening and assessment options. An explanation, not a label.";

export const Route = createFileRoute("/support/how-you-think-and-learn")({
  // No structured data while the page is hidden.
  component: HowYouThinkAndLearnPage,
  head: () => ({
    ...pageHead("/support/how-you-think-and-learn"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/how-you-think-and-learn" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
