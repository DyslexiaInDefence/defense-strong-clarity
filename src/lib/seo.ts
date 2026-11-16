/**
 * Server-rendered SEO metadata for every registered page.
 * Ported from the old client-side use-seo.ts hook: instead of mutating
 * document.head after hydration, each route file calls pageHead(path) from
 * its head() option so titles, descriptions, canonical, OG/Twitter tags and
 * Article, WebPage and BreadcrumbList JSON-LD render in the server HTML.
 * Only real pages are listed: redirecting addresses have no entry.
 */
import { getPageDate } from "@/data/pageDates";
import { PAGE_BREADCRUMBS, type Crumb } from "@/data/pageBreadcrumbs";

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
    title: "About us | Dyslexia in Defence",
    description: "Dyslexia in Defence is an independent Community Interest Company supporting people with dyslexia and neurodiversity across the UK Defence community.",
    priority: 0.8,
    indexable: true,
  },
  "/about/our-story": {
    title: "Our Story | Dyslexia in Defence",
    description: "How Dyslexia in Defence started, from one veteran's experience and the Defence Dyslexia Network, to an independent CIC supporting dyslexic talent across UK Defence.",
    priority: 0.8,
    indexable: true,
  },
  "/support/currently-serving": {
    title: "Serving now (including civil service) | Dyslexia in Defence",
    description: "Dyslexia guidance for regular and reserve personnel and civil servants: the Defence Dyslexia Network, Standard Learning Credits, Service resources and stories.",
    priority: 0.8,
    indexable: true,
  },
  "/currently-serving/standard-learning-credits": {
    title: "Standard Learning Credits | Dyslexia in Defence",
    description: "How serving personnel can use Standard Learning Credits to pay towards a dyslexia assessment, with the options, costs, forms and steps to follow.",
    priority: 0.7,
    indexable: true,
  },
  "/currently-serving/army-education-centres": {
    title: "Army Education Centres Map | Dyslexia in Defence",
    description: "Find your local Army Education Centre for advice on Standard and Enhanced Learning Credits, including funding towards a dyslexia assessment. Army only.",
    priority: 0.7,
    indexable: true,
  },
  "/contact": {
    title: "Contact Dyslexia in Defence",
    description: "Get in touch with Dyslexia in Defence through email, LinkedIn, or Discord.",
    priority: 0.7,
    indexable: true,
  },
  "/armed-forces-covenant": {
    title: "Our Armed Forces Covenant Pledge | Dyslexia in Defence",
    description: "Dyslexia in Defence CIC has signed the Armed Forces Covenant, pledging support to serving personnel, reservists, veterans and military families.",
    priority: 0.8,
    indexable: true,
  },
  "/about/what-we-want-to-achieve": {
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
    title: "Insights | Dyslexia in Defence",
    description: "The evidence behind Dyslexia in Defence and what we do and why. Written mainly for leaders, employers and researchers across the UK Defence community.",
    priority: 0.8,
    indexable: true,
  },
  "/partner": {
    title: "Partner with us | Dyslexia in Defence",
    description: "Work with Dyslexia in Defence CIC to support neurodiverse talent, add social value and make UK Defence a better place for people who think differently.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/can-you-join-army-with-dyslexia-uk": {
    title: "Can You Join the Army With Dyslexia? UK Eligibility Guide",
    description: "Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met. Here's what recruitment looks like, what support to expect, and how the Army differs from the Navy and RAF.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/can-you-join-raf-with-dyslexia-uk": {
    title: "Can You Join the RAF With Dyslexia? UK Eligibility Guide",
    description: "Specific learning difficulties are not in themselves a bar to recruitment or Service if the required standards are met. Ask education staff about feasible support under JSP 822 Vol 7.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/can-you-join-navy-with-dyslexia-uk": {
    title: "Can You Join the Royal Navy With Dyslexia? UK Guide",
    description: "Specific learning difficulties are not in themselves a bar to recruitment or Service if the required standards are met. Ask education staff about feasible support under JSP 822 Vol 7.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/is-dyslexia-a-barrier-in-the-military-uk": {
    title: "Is Dyslexia a Barrier to a Military Career? | UK",
    description: "Specific learning difficulties are not in themselves a bar to recruitment or Service in the Armed Forces if the required standards are met. Around 1 in 10 personnel are dyslexic and serve at every rank — here’s the policy and the reality.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/neurodiversity-in-the-mod-uk": {
    title: "Neurodiversity in the MOD UK | Dyslexia in Defence",
    description: "The MOD supports neurodiversity across military and civil service roles. Learn about neurodiversity policy and workplace support.",
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
    description: "Dyslexia screening is not a requirement of recruitment. Ask your recruiter what the application asks, so you know what to expect. Here’s what JSP 822 says — and what it means in practice.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": {
    title: "What Support Is Available for Dyslexia in the Military? | UK",
    description: "Dyslexia support in the UK military: Defence Dyslexia Network, 250+ volunteer ambassadors, and service education teams.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk": {
    title: "What Happens if Dyslexia Is Identified During Service? | UK",
    description: "If dyslexia is identified during military service, your career isn’t at risk. Here’s what JSP 822 says and what support is available.",
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
    title: "Lived experiences | Dyslexia in Defence",
    description: "Personal stories of dyslexia from people across the UK Defence community, told in their own words. They are individual accounts, not official guidance.",
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
  "/lived-experiences/major-lena-beardsell": {
    title: "Major Lena Beardsell: Lived Experience of Dyslexia | Dyslexia in Defence",
    description: "A serving Army officer shares her lived experience of dyslexia, from school and university to Operation HERRICK, Sandhurst and teaching in the Army.",
    priority: 0.7,
    indexable: true,
  },
  "/lived-experiences/liz-oliver-british-army-veteran": {
    title: "Liz Oliver | British Army Veteran | Dyslexia in Defence",
    description: "Liz Oliver, a former Royal Army Medical Corps Environmental Health Technician, shares her experience of undiagnosed neurodivergence in the Army and her diagnosis in her mid-forties.",
    priority: 0.7,
    indexable: true,
  },
  "/get-involved": {
    title: "Get involved | Dyslexia in Defence",
    description: "Join the Dyslexia in Defence network, meet others in the UK Defence community, share your experience of dyslexia and help shape what we do next.",
    priority: 0.8,
    indexable: true,
  },
  "/insights/understanding-dyslexia": {
    title: "Understanding Dyslexia | Dyslexia in Defence",
    description: "What the dyslexic spiky profile means, the strengths dyslexic people bring to Defence, and why Defence should look at both the strengths and the challenges.",
    priority: 0.8,
    indexable: true,
  },
  "/support/start-here": {
    title: "Get support: start here | Dyslexia in Defence",
    description: "Find dyslexia guidance for your situation in UK Defence, whether you are thinking of joining, serving now, leaving service or supporting someone.",
    priority: 0.8,
    indexable: true,
  },
  "/support/thinking-of-joining": {
    title: "Thinking of joining with dyslexia | Dyslexia in Defence",
    description: "Dyslexia guidance if you are thinking of joining the UK Armed Forces, covering eligibility, declaring dyslexia, recruitment standards and real stories.",
    priority: 0.8,
    indexable: true,
  },
  "/support/leaving-or-left-service": {
    title: "Leaving or left service | Dyslexia in Defence",
    description: "Dyslexia guidance for people leaving or who have left the UK Armed Forces, covering the move from JSP 822 to the Equality Act 2010 and real stories.",
    priority: 0.8,
    indexable: true,
  },
  "/support/supporting-someone": {
    title: "Supporting someone with dyslexia | Dyslexia in Defence",
    description: "Dyslexia guidance for family and friends, and for the instructors, commanders, managers and colleagues who work alongside someone with dyslexia.",
    priority: 0.8,
    indexable: true,
  },
  "/support/guidance": {
    title: "Dyslexia guidance library | Dyslexia in Defence",
    description: "Plain English guides on dyslexia in UK Defence for people thinking of joining, serving now, leaving or left service, and people supporting someone.",
    priority: 0.7,
    indexable: true,
  },
  "/support/downloads-and-tools": {
    title: "Downloads and tools | Dyslexia in Defence",
    description: "Forms, directories and guides on dyslexia in UK Defence, grouped by what you want to do, including Standard Learning Credits forms for an assessment.",
    priority: 0.7,
    indexable: true,
  },
  "/support/faq": {
    title: "Dyslexia and Defence FAQ | Dyslexia in Defence",
    description: "Quick answers to common questions about dyslexia in UK Defence, from joining and declaring to support while serving. Each answer links to the full guide.",
    priority: 0.7,
    indexable: true,
  },
  "/support/how-you-think-and-learn": {
    title: "How you think and learn | Dyslexia in Defence",
    description: "What dyslexia is, how it can show up for you, independent tools you can try and where to go next. An explanation of how you think and learn, not a label.",
    priority: 0.6,
    indexable: true,
  },
  "/community": {
    title: "Community | Dyslexia in Defence",
    description: "The Dyslexia in Defence community space — peer support and shared lived experience across the UK Defence community.",
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

const articleSchema = (url: string, page: PageSEO, dateModified: string | undefined) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: OG_IMAGE,
    inLanguage: "en-GB",
    ...(dateModified ? { dateModified } : {}),
    author: { "@type": "Organization", name: "Dyslexia in Defence", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Dyslexia in Defence",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
  });

const breadcrumbSchema = (crumbs: readonly Crumb[]) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.path ? { item: `${BASE_URL}${crumb.path === "/" ? "" : crumb.path}` } : {}),
    })),
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

  // Understanding Dyslexia is a page, not a guide article, so it carries WebPage data.
  const isInsightArticle =
    pathname.startsWith("/insights/") && pathname !== "/insights" && pathname !== "/insights/understanding-dyslexia";
  const isLivedExperienceArticle =
    pathname.startsWith("/lived-experiences/") && pathname !== "/lived-experiences";
  const dateModified = getPageDate(pathname);
  const crumbs = PAGE_BREADCRUMBS[pathname];
  const webPage = dateModified
    ? { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.title,
        url,
        inLanguage: "en-GB",
        dateModified,
      }) }
    : undefined;
  // Articles carry Article data and other pages WebPage data. A page that draws its own page trail
  // adds BreadcrumbList data matching what it shows.
  const base = isInsightArticle || isLivedExperienceArticle
    ? [{ type: "application/ld+json", children: articleSchema(url, page, dateModified) }]
    : webPage
      ? [webPage]
      : [];
  const all = crumbs ? [...base, { type: "application/ld+json", children: breadcrumbSchema(crumbs) }] : base;
  const scripts = page.indexable && all.length > 0 ? all : undefined;

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    ...(scripts ? { scripts } : {}),
  };
}
