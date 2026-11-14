import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301): the What We Do text is now Understanding Dyslexia.
export const Route = createFileRoute("/about/what-we-do")({
  beforeLoad: () => {
    throw redirect({ to: "/insights/understanding-dyslexia", statusCode: 301 });
  },
});
