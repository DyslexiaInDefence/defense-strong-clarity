import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301): the About us FAQ is now the Get support FAQ.
export const Route = createFileRoute("/about/faq")({
  beforeLoad: () => {
    throw redirect({ to: "/support/faq", statusCode: 301 });
  },
});
