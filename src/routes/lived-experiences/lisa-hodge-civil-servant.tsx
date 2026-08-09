import { createFileRoute } from "@tanstack/react-router";
import LisaHodgePage from "@/pages/lived-experiences/LisaHodgePage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lived-experiences/lisa-hodge-civil-servant")({
  component: LisaHodgePage,
  head: () => pageHead("/lived-experiences/lisa-hodge-civil-servant"),
});
