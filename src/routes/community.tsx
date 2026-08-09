import { createFileRoute } from "@tanstack/react-router";
import CommunityPage from "@/pages/CommunityPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
  head: () => pageHead("/community"),
});
