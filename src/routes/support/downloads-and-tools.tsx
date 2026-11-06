import { createFileRoute } from "@tanstack/react-router";
import DownloadsAndToolsPage from "@/pages/support/DownloadsAndToolsPage";
import { pageHead } from "@/lib/seo";

const title = "Downloads and tools | Dyslexia in Defence";
const description = "Forms, directories and guides for people thinking of joining, serving now, leaving or left service, and people supporting someone.";

export const Route = createFileRoute("/support/downloads-and-tools")({
  // ?for= is optional; unknown values are normalised to All inside the page.
  validateSearch: (search: Record<string, unknown>): { for?: string } =>
    typeof search["for"] === "string" ? { for: search["for"] } : {},
  component: DownloadsAndToolsPage,
  head: () => ({
    ...pageHead("/support/downloads-and-tools"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/downloads-and-tools" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
