import { createFileRoute } from "@tanstack/react-router";
import LeavingOrLeftServicePage from "@/pages/support/LeavingOrLeftServicePage";
import { pageHead } from "@/lib/seo";

const title = "Leaving or left service | Dyslexia in Defence";
const description = "Dyslexia guidance for people leaving or who have left the Armed Forces: JSP 822, the Equality Act and real stories.";

export const Route = createFileRoute("/support/leaving-or-left-service")({
  component: LeavingOrLeftServicePage,
  head: () => ({
    ...pageHead("/support/leaving-or-left-service"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/leaving-or-left-service" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
