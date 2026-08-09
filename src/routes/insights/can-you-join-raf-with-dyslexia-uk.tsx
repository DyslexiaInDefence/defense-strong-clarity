import { createFileRoute } from "@tanstack/react-router";
import RAFDyslexiaPage from "@/pages/insights/RAFDyslexiaPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/can-you-join-raf-with-dyslexia-uk")({
  component: RAFDyslexiaPage,
  head: () => pageHead("/insights/can-you-join-raf-with-dyslexia-uk"),
});
