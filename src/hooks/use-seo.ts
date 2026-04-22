import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://dyslexiaindefence.com";
const OG_IMAGE = "https://dyslexiaindefence.com/og-image.webp";

interface PageSEO {
  title: string;
  description: string;
  priority: number;
  indexable: true;
}

const PUBLIC_PAGES: Record<string, PageSEO> = {
  "/": {
    title: "Dyslexia in Defence | Neurodiversity in UK Defence",
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
  "/insights": {
    title: "Dyslexia & Armed Forces FAQ UK | Dyslexia in Defence",
    description: "Common questions about dyslexia and joining the UK Armed Forces. Can you join the Army, RAF or Navy with dyslexia? Get clear answers.",
    priority: 0.8,
    indexable: true,
  },
  "/partner": {
    title: "Partner With Dyslexia in Defence | Defence Industry",
    description: "Partner with Dyslexia in Defence to support neurodiverse talent, deliver measurable social value, and unlock workforce capability across the UK defence sector.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/can-you-join-army-with-dyslexia-uk": {
    title: "Can You Join the Army With Dyslexia in the UK?",
    description: "Yes, you can join the British Army with dyslexia. Find out how recruitment works, what adjustments are available, and what to expect.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/can-you-join-raf-with-dyslexia-uk": {
    title: "Can You Join the RAF With Dyslexia in the UK?",
    description: "Yes, dyslexia does not disqualify you from the RAF. Learn about recruitment adjustments, support in service, and common misconceptions.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/can-you-join-navy-with-dyslexia-uk": {
    title: "Can You Join the Royal Navy With Dyslexia in the UK?",
    description: "Yes, the Royal Navy accepts dyslexic applicants. Discover how dyslexia is assessed, what support exists, and how to apply.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/is-dyslexia-a-barrier-in-the-military-uk": {
    title: "Is Dyslexia a Barrier to a Military Career? | UK",
    description: "No. Dyslexia is not a barrier to a UK military career. Around 1 in 10 personnel are dyslexic and serve at every rank — here’s the policy and the reality.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/neurodiversity-in-the-mod-uk": {
    title: "Neurodiversity in the MOD UK | Dyslexia in Defence",
    description: "The MOD supports neurodiversity across military and civil service roles. Learn about available adjustments and workplace support.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk": {
    title: "JSP 822 vs Equality Act: Dyslexia After Service | UK",
    description: "Understand the difference between JSP 822 and the Equality Act 2010. Learn what changes for dyslexia support when leaving the UK Armed Forces for civilian work.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk": {
    title: "Do I Need to Declare Dyslexia Joining the Military? UK",
    description: "No. You don’t need to declare dyslexia to join the UK military, and you’re not screened for it. Here’s what JSP 822 says — and what it means in practice.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/serving-with-dyslexia-in-the-army-uk": {
    title: "Serving With Dyslexia in the Army | Lived Experience UK",
    description: "A former British Army officer’s honest account of dyslexia in uniform — support, coping mechanisms, and why dyslexic strengths matter in Defence.",
    priority: 0.7,
    indexable: true,
  },
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": {
    title: "What Support Is Available for Dyslexia in the Military? | UK",
    description: "Dyslexia support in the UK military: Defence Dyslexia Network, 240+ ambassadors, AECs, workplace adjustments, peer forums and assistive technology.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk": {
    title: "What Happens if Dyslexia Is Identified During Service? | UK",
    description: "If dyslexia is identified during military service, your career isn’t at risk. Here’s what JSP 822 says and what support and adjustments you can access.",
    priority: 0.8,
    indexable: true,
  },
  "/governance/founder": {
    title: "Founder & Purpose | Dyslexia in Defence Governance",
    description: "Mission, scope, and independence of Dyslexia in Defence. Founded by Symon Smith to support dyslexic talent across the UK defence community.",
    priority: 0.6,
    indexable: true,
  },
  "/governance/sponsorship": {
    title: "Sponsorship Principles | Dyslexia in Defence Governance",
    description: "How Dyslexia in Defence governs sponsorship to protect independence, editorial integrity, and community trust.",
    priority: 0.6,
    indexable: true,
  },
  "/governance/transparency": {
    title: "Transparency Commitment | Dyslexia in Defence Governance",
    description: "Financial transparency, ethical principles, and public accountability commitments from Dyslexia in Defence.",
    priority: 0.6,
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
