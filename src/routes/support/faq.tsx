import { createFileRoute } from "@tanstack/react-router";
import FaqPage from "@/pages/support/FaqPage";
import { pageHead } from "@/lib/seo";

const title = "FAQ | Dyslexia in Defence";
const description = "Quick answers to common questions about dyslexia and Defence, each linking to the full guide.";

export const Route = createFileRoute("/support/faq")({
  // ?for= is optional; unknown values are normalised to All inside the page.
  // No FAQPage structured data while the page is hidden.
  validateSearch: (search: Record<string, unknown>): { for?: string } =>
    typeof search["for"] === "string" ? { for: search["for"] } : {},
  component: FaqPage,
  head: () => ({
    ...pageHead("/support/faq"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/faq" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
