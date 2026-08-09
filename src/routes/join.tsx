import { createFileRoute } from "@tanstack/react-router";
import JoinPage from "@/pages/JoinPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/join")({
  component: JoinPage,
  head: () => pageHead("/join"),
});
