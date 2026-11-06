import { createFileRoute } from "@tanstack/react-router";
import SupportingSomeonePage from "@/pages/support/SupportingSomeonePage";
import { pageHead } from "@/lib/seo";

const title = "Supporting someone | Dyslexia in Defence";
const description = "Dyslexia guidance for family and friends, and for the instructors, commanders, managers and colleagues who work alongside someone with dyslexia.";

export const Route = createFileRoute("/support/supporting-someone")({
  component: SupportingSomeonePage,
  head: () => ({
    ...pageHead("/support/supporting-someone"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/supporting-someone" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
