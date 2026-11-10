import { createFileRoute } from "@tanstack/react-router";
import SlcPage from "@/pages/support/SlcPage";
import { pageHead } from "@/lib/seo";

const title = "Standard Learning Credits for a Dyslexia Assessment | Dyslexia in Defence";
const description = "How serving personnel can use Standard Learning Credits (SLC) towards a dyslexia diagnostic assessment, with a pre filled application template to download.";

export const Route = createFileRoute("/support/slc-preview")({
  component: SlcPage,
  head: () => ({
    ...pageHead("/support/slc-preview"),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/support/slc-preview" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
