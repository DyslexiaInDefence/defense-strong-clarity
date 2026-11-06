import { createFileRoute } from "@tanstack/react-router";
import GuidancePage from "@/pages/support/GuidancePage";
import { pageHead } from "@/lib/seo";

const title = "Guidance | Dyslexia in Defence";
const description = "Plain-English guides on dyslexia and Defence, for people thinking of joining, serving now, leaving or left service, and people supporting someone.";

export const Route = createFileRoute("/support/guidance")({
  // ?for= is optional; unknown values are normalised to All inside the page.
  validateSearch: (search: Record<string, unknown>): { for?: string } =>
    typeof search.for === "string" ? { for: search.for } : {},
  component: GuidancePage,
  head: () => ({
    ...pageHead("/support/guidance"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/guidance" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
