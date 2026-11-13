import { createFileRoute } from "@tanstack/react-router";
import PartnerHubPage from "@/pages/PartnerHubPage";
import { pageHead } from "@/lib/seo";

const title = "Partner with us | Dyslexia in Defence";
const description = "Work with Dyslexia in Defence CIC to make Defence a better place for people who think differently.";

export const Route = createFileRoute("/partner")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4).
  component: PartnerHubPage,
  head: () => ({
    links: pageHead("/partner").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/partner" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
