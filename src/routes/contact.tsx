import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/ContactPage";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => pageHead("/contact"),
});
