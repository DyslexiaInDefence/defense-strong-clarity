import { createFileRoute } from "@tanstack/react-router";
import AboutHubPage from "@/pages/AboutHubPage";
import { pageHead } from "@/lib/seo";

const title = "About us | Dyslexia in Defence";
const description = "Dyslexia in Defence is a registered Community Interest Company supporting people with dyslexia and neurodiversity across the UK Defence community.";

export const Route = createFileRoute("/about-preview")({
  // Temporary hidden address; replaces the live /about page at switch-over. No structured data while hidden.
  component: AboutHubPage,
  head: () => ({
    ...pageHead("/about-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/about-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
