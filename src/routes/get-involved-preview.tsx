import { createFileRoute } from "@tanstack/react-router";
import GetInvolvedHubPage from "@/pages/GetInvolvedHubPage";
import { pageHead } from "@/lib/seo";

const title = "Get involved | Dyslexia in Defence";
const description = "Meet others, share what it has been like, and help shape what we do.";

export const Route = createFileRoute("/get-involved-preview")({
  // Temporary hidden address; moves to /get-involved at switch-over. No structured data while hidden.
  component: GetInvolvedHubPage,
  head: () => ({
    ...pageHead("/get-involved-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/get-involved-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
