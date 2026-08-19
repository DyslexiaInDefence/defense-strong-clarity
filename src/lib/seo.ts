/**
 * Server-rendered SEO metadata for every registered page.
 * Ported from the old client-side use-seo.ts hook: instead of mutating
 * document.head after hydration, each route file calls pageHead(path) from
 * its head() option so titles, descriptions, canonical, OG/Twitter tags and
 * Article/FAQPage JSON-LD render in the server HTML.
 */
import { faqSchema } from "@/data/faqCategories";

const BASE_URL = "https://dyslexiaindefence.com";
const OG_IMAGE = "https://dyslexiaindefence.com/og-image.webp";

interface PageSEO {
  title: string;
  description: string;
  priority: number;
  indexable: boolean;
}

export const PUBLIC_PAGES: Record<string, PageSEO> = {
  "/": {
    title: "Dyslexia in Defence | Neurodiversity in UK Defence",
    description: "A community supporting dyslexia and neurodiversity across the UK Defence community including military, civil service and defence industry.",
    priority: 1.0,
    indexable: true,
  },
  "/about": {
    title: "About Dyslexia in Defence | UK Defence Neurodiversity",
    description: "Learn about Dyslexia in Defence CIC, a registered Community Interest Company supporting dyslexia and neurodiversity across the UK Defence community.",
    priority: 0.8,
    indexable: true,
  },
  "/about/our-story": {
    title: "Our Story | Dyslexia in Defence",
    description: "How Dyslexia in Defence started, from one veteran's experience and the Defence Dyslexia Network, to an independent CIC supporting dyslexic talent across UK Defence.",
    priority: 0.8,
    indexable: true,
  },
  "/about/what-we-do": {
    title: "What We Do | Dyslexia in Defence",
    description: "Guidance, peer community, lived experience and signposting for dyslexia and neurodiversity across the UK military, civil service and defence industry.",
    priority: 0.8,
    indexable: true,
  },
  "/about/faq": {
    title: "Dyslexia & Armed Forces FAQ UK | Dyslexia in Defence",
    description: "Common questions about dyslexia and the UK Armed Forces — joining, serving, and leaving service. Clear answers for each pathway.",
    priority: 0.8,
    indexable: true,
  },
  "/support": {
    title: "Get Support for Dyslexia in Defence | Guidance and Community",
    description: "Find dyslexia guidance, community support, lived experience, and ways to join the Dyslexia in Defence network.",
    priority: 0.8,
    indexable: true,
  },
  "/support/currently-serving": {
    title: "Currently Serving | Dyslexia in Defence",
    description: "A hub for serving Royal Navy, Army and RAF personnel: how to join the internal Defence Dyslexia Network, answers to common questions, and further resources.",
    priority: 0.8,
    indexable: true,
  },
  "/contact": {
    title: "Contact Dyslexia in Defence",
    description: "Get in touch with Dyslexia in Defence through email, LinkedIn, or Discord.",
    priority: 0.7,
    indexable: true,
  },
  "/why-it-matters": {
    title: "Why Dyslexia Matters in Defence | Dyslexia in Defence",
    description: "Understand why dyslexia awareness matters across the UK defence sector, military, civil service and defence industry. Cognitive diversity is a strategic advantage.",
    priority: 0.8,
    indexable: true,
  },
  "/achieve": {
    title: "What We Want to Achieve | Dyslexia in Defence",
    description: "Discover what Dyslexia in Defence aims to achieve for neurodiversity across the UK defence ecosystem, military personnel, veterans, and defence industry.",
    priority: 0.8,
    indexable: true,
  },
  "/governance": {
    title: "Governance and Transparency | Dyslexia in Defence",
    description: "Governance information for Dyslexia in Defence CIC, including its registered company status and community interest structure.",
    priority: 0.7,
    indexable: true,
  },
  "/join": {
    title: "Join the Dyslexia in Defence Community",
    description: "Join Dyslexia in Defence — open to military personnel, civil servants, veterans, industry professionals and families across UK Defence.",
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
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": {
    title: "What Support Is Available for Dyslexia in the Military? | UK",
    description: "Dyslexia support in the UK military: Defence Dyslexia Network, 240+ volunteer ambassadors, service education teams, workplace adjustments and assistive technology.",
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
  "/governance/code-of-conduct": {
    title: "Code of Conduct | Dyslexia in Defence Governance",
    description: "Behavioural expectations for the Dyslexia in Defence community, covering respect, harassment, operational security, moderation and appeals.",
    priority: 0.6,
    indexable: true,
  },
  "/governance/safeguarding": {
    title: "Safeguarding & Support | Dyslexia in Defence Governance",
    description: "How Dyslexia in Defence handles safeguarding concerns, the limits of its peer support role, crisis signposting, and its age and non-clinical policies.",
    priority: 0.6,
    indexable: true,
  },
  "/governance/privacy": {
    title: "Privacy Notice | Dyslexia in Defence Governance",
    description: "How Dyslexia in Defence CIC collects, uses, retains and protects personal data under UK data protection law, including your rights and data requests.",
    priority: 0.6,
    indexable: true,
  },
  "/lived-experiences": {
    title: "Lived Experiences | Dyslexia in Defence",
    description: "Personal stories of dyslexia and neurodiversity from across the UK defence community. Authentic first-person accounts intended to help others feel understood and less alone.",
    priority: 0.8,
    indexable: true,
  },
  "/lived-experiences/lisa-hodge-civil-servant": {
    title: "Lisa Hodge – Civil Servant | Dyslexia in Defence",
    description: "Lisa Hodge shares her personal journey of being diagnosed with dyslexia at age 32, growing up undiagnosed, and helping lead the Defence Dyslexia Network.",
    priority: 0.7,
    indexable: true,
  },
  "/lived-experiences/staff-sergeant-kirk-davis-british-army": {
    title: "Kirk Davis – British Army | Dyslexia in Defence",
    description: "Staff Sergeant Kirk Davis shares his lived experience of dyslexia, belonging, imposter syndrome, and support throughout his British Army career.",
    priority: 0.7,
    indexable: true,
  },
  "/lived-experiences/symon-smith-british-army-veteran": {
    title: "Symon Smith | British Army Veteran | Dyslexia in Defence",
    description: "Symon Smith shares his dyslexia journey, from diagnosis through education and military service, to founding Dyslexia in Defence after leaving the Army.",
    priority: 0.7,
    indexable: true,
  },
  "/community": {
    title: "Community | Dyslexia in Defence",
    description: "The Dyslexia in Defence community space — peer support and shared lived experience across the UK Defence community.",
    priority: 0.5,
    indexable: false,
  },
  "/resources": {
    title: "Resources | Dyslexia in Defence",
    description: "Curated dyslexia and neurodiversity resources for the UK Defence community.",
    priority: 0.5,
    indexable: false,
  },
  "/accessibility": {
    title: "Accessibility | Dyslexia in Defence",
    description: "Accessibility commitments and dyslexia-friendly design choices for the Dyslexia in Defence website.",
    priority: 0.3,
    indexable: false,
  },
};

const articleSchema = (url: string, page: PageSEO) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: OG_IMAGE,
    inLanguage: "en-GB",
    author: { "@type": "Organization", name: "Dyslexia in Defence", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Dyslexia in Defence",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
  });

export function pageHead(pathname: string) {
  const page = PUBLIC_PAGES[pathname];
  const url = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

  if (!page) {
    return {
      meta: [{ title: "Dyslexia in Defence" }, { name: "robots", content: "noindex, nofollow" }],
      links: [{ rel: "canonical", href: url }],
    };
  }

  const meta: Array<Record<string, string>> = [
    { title: page.title },
    { name: "description", content: page.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:image", content: OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: OG_IMAGE },
  ];
  if (!page.indexable) meta.splice(2, 0, { name: "robots", content: "noindex, nofollow" });

  const isInsightArticle = pathname.startsWith("/insights/") && pathname !== "/insights";
  const isLivedExperienceArticle =
    pathname.startsWith("/lived-experiences/") && pathname !== "/lived-experiences";
  const scripts = !page.indexable
    ? undefined
    : pathname === "/about/faq" || pathname === "/insights"
      ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }]
      : isInsightArticle || isLivedExperienceArticle
        ? [{ type: "application/ld+json", children: articleSchema(url, page) }]
        : undefined;

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}
