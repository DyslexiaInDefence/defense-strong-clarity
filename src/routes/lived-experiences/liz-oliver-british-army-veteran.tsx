import { createFileRoute } from "@tanstack/react-router";
import LizOliverPage from "@/pages/lived-experiences/LizOliverPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/liz-oliver-british-army-veteran")({
  component: LizOliverPage,
  head: () => pageHead("/lived-experiences/liz-oliver-british-army-veteran"),
});
