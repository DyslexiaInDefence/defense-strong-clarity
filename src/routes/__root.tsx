import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import appCss from "../styles.css?url";

const ORGANIZATION_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dyslexia in Defence",
  legalName: "DYSLEXIA IN DEFENCE CIC",
  alternateName: "Dyslexia in Defence CIC",
  url: "https://dyslexiaindefence.com",
  description:
    "Community supporting neurodiversity across the UK Defence community including military, civil service and defence industry.",
  logo: "https://dyslexiaindefence.com/og-image.png",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UK Companies House",
    value: "17285330",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "England and Wales",
  },
});

// Applies saved accessibility preferences (dark mode, text size, reduced
// motion, OpenDyslexic) to <html> before first paint to avoid a flash.
const ACCESSIBILITY_BOOTSTRAP = `(function(){try{var c=document.documentElement.classList;if(localStorage.getItem("did-dark")==="true")c.add("dark");if(localStorage.getItem("did-large")==="true")c.add("text-large");if(localStorage.getItem("did-motion")==="true")c.add("reduce-motion");if(localStorage.getItem("did-dyslexic")==="true")c.add("dyslexic-font");}catch(e){}})();`;

// Google Analytics 4 (gtag.js). Sends the initial page view; client-side route
// changes are tracked from Layout via trackPageView.
const GA_BOOTSTRAP = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Dyslexia in Defence | UK Defence Neurodiversity" },
      {
        name: "description",
        content:
          "A community supporting dyslexia and neurodiversity across the UK Defence community — military, civil service, veterans and industry.",
      },
      { name: "author", content: "Dyslexia in Defence" },
      {
        name: "google-site-verification",
        content: "w3GkUWBfzA6v4aoK0SpzjheDBxv5RydjXVtX1EpYA10",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      {
        rel: "preload",
        as: "image",
        href: "/lovable-uploads/4eee789e-61aa-4a04-8ec1-96380d579791.webp",
        fetchPriority: "high",
      },
    ],
    scripts: [
      { children: ACCESSIBILITY_BOOTSTRAP },
      { src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, async: true },
      { children: GA_BOOTSTRAP },
      { type: "application/ld+json", children: ORGANIZATION_SCHEMA },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AccessibilityProvider>
        <Layout />
      </AccessibilityProvider>
    </QueryClientProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-2xl font-bold text-foreground">This page didn't load</h1>
        <p className="mb-6 text-muted-foreground">
          Something went wrong while loading this page. You can try again or head back to the
          homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-lg border border-border px-4 py-2 font-medium text-foreground hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}