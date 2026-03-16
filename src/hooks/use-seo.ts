import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://dyslexiaindefence.com";
const OG_IMAGE = "https://dyslexiaindefence.com/og-image.png";

interface PageSEO {
  title: string;
  description: string;
  priority: number;
  indexable: true;
}

const PUBLIC_PAGES: Record<string, PageSEO> = {
  "/": {
    title: "Dyslexia in Defence | Supporting Neurodiversity in the UK Defence Community",
    description: "A community supporting dyslexia and neurodiversity across the UK Defence community including military, civil service and defence industry.",
    priority: 1.0,
    indexable: true,
  },
  "/why-it-matters": {
    title: "Why Dyslexia Matters in Defence | Dyslexia in Defence",
    description: "Understand why dyslexia awareness matters across the UK defence sector, military, civil service and defence industry. Cognitive diversity is a strategic advantage.",
    priority: 0.8,
    indexable: true,
  },
  "/achieve": {
    title: "Achieve Programme | Dyslexia in Defence",
    description: "Discover what Dyslexia in Defence aims to achieve for neurodiversity across the UK defence ecosystem, military personnel, veterans, and defence industry.",
    priority: 0.8,
    indexable: true,
  },
  "/governance": {
    title: "Governance and Transparency | Dyslexia in Defence",
    description: "Governance framework, transparency principles and operating model for Dyslexia in Defence, an independent volunteer-led neurodiversity initiative.",
    priority: 0.7,
    indexable: true,
  },
  "/join": {
    title: "Join the Dyslexia in Defence Community",
    description: "Join the Dyslexia in Defence network. Open to military personnel, civil servants, veterans, defence industry professionals and families across the UK defence community.",
    priority: 0.9,
    indexable: true,
  },
};

const setMeta = (name: string, content: string, attr = "name") => {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const removeMeta = (name: string, attr = "name") => {
  const el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.remove();
};

const useSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageData = PUBLIC_PAGES[pathname];
    const url = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    if (pageData) {
      // Public page — set full SEO metadata
      document.title = pageData.title;
      setMeta("description", pageData.description);
      removeMeta("robots");

      // Open Graph
      setMeta("og:type", "website", "property");
      setMeta("og:url", url, "property");
      setMeta("og:title", pageData.title, "property");
      setMeta("og:description", pageData.description, "property");
      setMeta("og:image", OG_IMAGE, "property");

      // Twitter
      setMeta("twitter:card", "summary_large_image");
      setMeta("twitter:title", pageData.title);
      setMeta("twitter:description", pageData.description);
      setMeta("twitter:image", OG_IMAGE);
    } else {
      // Non-public page — add noindex
      document.title = "Dyslexia in Defence";
      setMeta("robots", "noindex, nofollow");

      // Remove OG/Twitter tags for non-indexed pages
      removeMeta("og:type", "property");
      removeMeta("og:url", "property");
      removeMeta("og:title", "property");
      removeMeta("og:description", "property");
      removeMeta("og:image", "property");
      removeMeta("twitter:card");
      removeMeta("twitter:title");
      removeMeta("twitter:description");
      removeMeta("twitter:image");
    }
  }, [pathname]);
};

export default useSEO;
