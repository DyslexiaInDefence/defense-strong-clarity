import { createFileRoute } from "@tanstack/react-router";
import ArmyDyslexiaPage from "@/pages/insights/ArmyDyslexiaPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/insights/can-you-join-army-with-dyslexia-uk")({
  component: ArmyDyslexiaPage,
  head: () => pageHead("/insights/can-you-join-army-with-dyslexia-uk"),
});
