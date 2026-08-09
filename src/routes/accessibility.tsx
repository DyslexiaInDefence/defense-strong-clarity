import { createFileRoute } from "@tanstack/react-router";
import AccessibilityPage from "@/pages/AccessibilityPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/accessibility")({
  component: AccessibilityPage,
  head: () => pageHead("/accessibility"),
});
