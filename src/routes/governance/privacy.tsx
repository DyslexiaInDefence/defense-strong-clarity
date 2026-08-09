import { createFileRoute } from "@tanstack/react-router";
import PrivacyNoticePage from "@/pages/governance/PrivacyNoticePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/governance/privacy")({
  component: PrivacyNoticePage,
  head: () => pageHead("/governance/privacy"),
});
