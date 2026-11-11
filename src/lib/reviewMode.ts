import { useHydrated } from "@tanstack/react-router";

// Review aid for the staged redesign. Delete at switch-over, together with the Redesign review page.
// Only the main Lovable preview address shows the new menu and footer; the published site never does.
export function isReviewHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host.startsWith("id-preview--") && host.endsWith(".lovable.app");
}

// Final addresses in the new menu and footer, pointed at their hidden previews while reviewing.
export const REVIEW_ROUTE_MAP: Readonly<Record<string, string>> = {
  "/about": "/about-preview",
  "/partner": "/partner-preview",
  "/get-involved": "/get-involved-preview",
  "/insights": "/support/insights-preview",
  "/support/currently-serving": "/support/serving-now-preview",
  "/lived-experiences": "/lived-experiences-preview",
  "/currently-serving/standard-learning-credits": "/support/slc-preview",
};

export function reviewTarget(to: string): string {
  return REVIEW_ROUTE_MAP[to] ?? to;
}

// False on the server and on the first browser render, so markup always hydrates cleanly.
export function useReviewMode(): boolean {
  const hydrated = useHydrated();
  return hydrated && typeof window !== "undefined" && isReviewHost(window.location.hostname);
}

export const NAV_OLD_PARAM = "nav";
export const NAV_OLD_VALUE = "old";

export function wantsOldNav(search: string | undefined): boolean {
  return new URLSearchParams(search ?? "").get(NAV_OLD_PARAM) === NAV_OLD_VALUE;
}

// Current address with ?nav=old added (showOld true) or removed (showOld false), keeping other parameters.
export function navToggleHref(pathname: string, search: string | undefined, showOld: boolean): string {
  const params = new URLSearchParams(search ?? "");
  if (showOld) params.set(NAV_OLD_PARAM, NAV_OLD_VALUE);
  else params.delete(NAV_OLD_PARAM);
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

// True when the new menu and footer should render: review host and no ?nav=old.
export function useShowNewChrome(search: string | undefined): boolean {
  const review = useReviewMode();
  return review && !wantsOldNav(search);
}
