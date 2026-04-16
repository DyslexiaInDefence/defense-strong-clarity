/**
 * Lightweight, provider-agnostic event tracking.
 *
 * Pushes to `window.dataLayer` (GA4 / GTM compatible) when available, and
 * also forwards to `window.gtag` if present. No-ops gracefully when no
 * analytics provider is wired up — so it's safe to call from anywhere.
 *
 * Use for journey instrumentation (router clicks, CTA clicks, etc.) only.
 * Do NOT use for sensitive data.
 */

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (event: string, payload: EventPayload = {}) => {
  if (typeof window === "undefined") return;

  const enriched = {
    event,
    page_path: window.location.pathname + window.location.search,
    ...payload,
  };

  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(enriched);
    } else {
      // Initialise a queue so events aren't lost if a tag manager loads later.
      window.dataLayer = [enriched];
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", event, enriched);
    }
  } catch {
    // Never let analytics break the UI.
  }
};
