import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent server-level redirect (301), previously a client-side <Navigate>. Points straight at the final page, with no chain via /about/what-we-do.
export const Route = createFileRoute("/why-it-matters")({
  beforeLoad: () => {
    throw redirect({ to: "/insights/understanding-dyslexia", statusCode: 301 });
  },
});
