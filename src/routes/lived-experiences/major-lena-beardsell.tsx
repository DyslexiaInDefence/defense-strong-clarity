import { createFileRoute } from "@tanstack/react-router";
import LenaBeardsellPage from "@/pages/lived-experiences/LenaBeardsellPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/major-lena-beardsell")({
  component: LenaBeardsellPage,
  head: () => pageHead("/lived-experiences/major-lena-beardsell"),
});
