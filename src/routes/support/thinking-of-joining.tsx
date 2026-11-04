import { createFileRoute } from "@tanstack/react-router";
import ThinkingOfJoiningPage from "@/pages/support/ThinkingOfJoiningPage";
import { pageHead } from "@/lib/seo";

const title = "Thinking of joining | Dyslexia in Defence";
const description = "Dyslexia guidance for people thinking of joining the Armed Forces: eligibility, declaring, standards and real stories.";

export const Route = createFileRoute("/support/thinking-of-joining")({
  component: ThinkingOfJoiningPage,
  head: () => ({
    ...pageHead("/support/thinking-of-joining"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/thinking-of-joining" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
