import { useEffect, useState } from "react";
import { Link } from "@/lib/router-compat";
import { Button } from "@/components/ui/button";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

/**
 * Opt-in cookie notice. Google Analytics is only loaded after the visitor
 * chooses "Accept analytics". The choice is kept in localStorage.
 * Footer "Cookie settings" reopens it via the OPEN_EVENT window event.
 */
export const CONSENT_KEY = "did-analytics-consent";
export const OPEN_EVENT = "did-open-cookie-settings";

let gaLoaded = false;
function loadAnalytics() {
  if (gaLoaded || typeof window === "undefined") return;
  gaLoaded = true;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
}

function clearGaCookies() {
  document.cookie.split(";").forEach((c) => {
    const name = (c.split("=")[0] ?? "").trim();
    if (name.startsWith("_ga")) {
      const host = window.location.hostname.replace(/^www\./, "");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${host}`;
    }
  });
}

const CookieBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    if (saved === "granted") loadAnalytics();
    else if (saved !== "denied") setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const choose = (granted: boolean) => {
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    if (granted) loadAnalytics();
    else if (gaLoaded) {
      clearGaCookies();
      window.location.reload();
      return;
    } else clearGaCookies();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-lg"
    >
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm text-foreground">
          We would like to use Google Analytics cookies to see how people use this site. They are off
          unless you say yes. Read our{" "}
          <Link to="/governance/privacy" className="font-medium text-primary underline underline-offset-2">
            Privacy Notice
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" onClick={() => choose(false)}>
            No thanks
          </Button>
          <Button onClick={() => choose(true)}>Accept analytics</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
