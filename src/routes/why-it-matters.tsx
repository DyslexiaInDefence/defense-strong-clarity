import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301), previously a client-side <Navigate>.
export const Route = createFileRoute("/why-it-matters")({
  beforeLoad: () => {
    throw redirect({ to: "/about/what-we-do", statusCode: 301 });
  },
});
