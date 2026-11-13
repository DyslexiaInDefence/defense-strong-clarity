import { createFileRoute } from "@tanstack/react-router";
import AboutHubPage from "@/pages/AboutHubPage";
import { pageHead } from "@/lib/seo";

const title = "About us | Dyslexia in Defence";
const description = "Dyslexia in Defence is a registered Community Interest Company supporting people with dyslexia and neurodiversity across the UK Defence community.";

export const Route = createFileRoute("/about/")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4).
  component: AboutHubPage,
  head: () => ({
    links: pageHead("/about").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/about" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
