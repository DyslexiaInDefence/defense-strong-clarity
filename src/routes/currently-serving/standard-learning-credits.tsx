import { createFileRoute } from "@tanstack/react-router";
import SlcPage from "@/pages/support/SlcPage";
import { pageHead } from "@/lib/seo";

const title = "Standard Learning Credits for a Dyslexia Assessment | Dyslexia in Defence";
const description = "How serving personnel can use Standard Learning Credits (SLC) towards a dyslexia diagnostic assessment, with a pre filled application template to download.";

export const Route = createFileRoute("/currently-serving/standard-learning-credits")({
  // Redesigned page at its final address. Stays noindex with no structured data until the switch-over clean-up (step 4). The only address for this page.
  component: SlcPage,
  head: () => ({
    links: pageHead("/currently-serving/standard-learning-credits").links,
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dyslexiaindefence.com/currently-serving/standard-learning-credits" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
