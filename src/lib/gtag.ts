/**
 * Google Analytics 4 (gtag.js) helpers.
 *
 * The tag itself is loaded once from the root route's head(); this module
 * only exposes the measurement ID and a page_view sender for client-side
 * route changes. Page views only — no custom events.
 */
export const GA_MEASUREMENT_ID =
  (import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY'] as string | undefined) ||
  "G-8EHH0K4473";

export const trackPageView = (path: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};