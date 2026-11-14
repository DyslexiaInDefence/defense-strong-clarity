import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301): Why we are here now sits within About us.
export const Route = createFileRoute("/about/why-we-are-here")({
  beforeLoad: () => {
    throw redirect({ to: "/about", statusCode: 301 });
  },
});
