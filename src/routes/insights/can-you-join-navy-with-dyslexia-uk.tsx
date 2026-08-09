import { createFileRoute } from "@tanstack/react-router";
import NavyDyslexiaPage from "@/pages/insights/NavyDyslexiaPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/can-you-join-navy-with-dyslexia-uk")({
  component: NavyDyslexiaPage,
  head: () => pageHead("/insights/can-you-join-navy-with-dyslexia-uk"),
});
