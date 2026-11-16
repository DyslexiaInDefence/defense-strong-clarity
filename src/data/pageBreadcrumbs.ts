// Page trails for pages that draw their own breadcrumb. pageHead turns each into
// BreadcrumbList structured data, and a test pins every entry to the page's visible trail.
// The last step is the current page and has no link.
export interface Crumb {
  name: string;
  path?: string;
}

const HOME: Crumb = { name: "Home", path: "/" };
const GET_SUPPORT: Crumb = { name: "Get support", path: "/support/start-here" };
const START_HERE: Crumb = { name: "Start here", path: "/support/start-here" };
const GET_INVOLVED: Crumb = { name: "Get involved", path: "/get-involved" };

// Insight guide articles: Home > Get support > Insights > the article's own title (its H1).
export const INSIGHT_ARTICLE_TRAIL: readonly Crumb[] = [HOME, GET_SUPPORT, { name: "Insights", path: "/insights" }];
export const insightArticleTrail = (title: string): readonly Crumb[] => [...INSIGHT_ARTICLE_TRAIL, { name: title }];

export const INSIGHT_ARTICLE_TITLES: Readonly<Record<string, string>> = {
  "/insights/can-you-join-army-with-dyslexia-uk": "Can you join the Army with dyslexia in the UK?",
  "/insights/can-you-join-navy-with-dyslexia-uk": "Can you join the Royal Navy with dyslexia in the UK?",
  "/insights/can-you-join-raf-with-dyslexia-uk": "Can you join the RAF with dyslexia in the UK?",
  "/insights/do-i-need-to-declare-dyslexia-when-joining-the-military-uk": "Do I need to declare dyslexia when joining the military?",
  "/insights/is-dyslexia-a-barrier-in-the-military-uk": "Is dyslexia a barrier to a military career?",
  "/insights/jsp822-vs-equality-act-dyslexia-military-vs-civilian-uk": "JSP 822 vs Equality Act 2010: what changes for dyslexia when you leave the military",
  "/insights/neurodiversity-in-the-mod-uk": "Neurodiversity in the MOD: what you need to know",
  "/insights/what-happens-if-dyslexia-is-identified-during-service-uk": "What happens if dyslexia is identified during service?",
  "/insights/what-support-is-available-for-dyslexia-in-the-military-uk": "What support is available for dyslexia in the military?",
};

export const PAGE_BREADCRUMBS: Readonly<Record<string, readonly Crumb[]>> = {
  "/about": [HOME, { name: "About us" }],
  "/partner": [HOME, { name: "About us", path: "/about" }, { name: "Partner with us" }],
  "/lived-experiences": [HOME, GET_INVOLVED, { name: "Lived experiences" }],
  "/get-involved": [HOME, { name: "Get involved" }],
  "/insights": [HOME, GET_SUPPORT, { name: "Insights" }],
  "/insights/understanding-dyslexia": [HOME, { name: "Insights", path: "/insights" }, { name: "Understanding Dyslexia" }],
  "/support/currently-serving": [HOME, GET_SUPPORT, START_HERE, { name: "Serving now (including civil service)" }],
  "/currently-serving/standard-learning-credits": [HOME, GET_SUPPORT, START_HERE, { name: "Serving now", path: "/support/currently-serving" }, { name: "Standard Learning Credits" }],
  "/support/start-here": [HOME, GET_SUPPORT, { name: "Start here" }],
  "/support/thinking-of-joining": [HOME, GET_SUPPORT, START_HERE, { name: "Thinking of joining" }],
  "/support/leaving-or-left-service": [HOME, GET_SUPPORT, START_HERE, { name: "Leaving or left service" }],
  "/support/supporting-someone": [HOME, GET_SUPPORT, START_HERE, { name: "Supporting someone" }],
  "/support/guidance": [HOME, GET_SUPPORT, { name: "Guidance" }],
  "/support/downloads-and-tools": [HOME, GET_SUPPORT, { name: "Downloads and tools" }],
  "/support/faq": [HOME, GET_SUPPORT, { name: "FAQ" }],
  "/support/support-beyond-us": [HOME, GET_SUPPORT, { name: "Support beyond us" }],
  "/support/how-you-think-and-learn": [HOME, GET_SUPPORT, { name: "Guidance", path: "/support/guidance" }, { name: "Understanding how you think and learn" }],
  ...Object.fromEntries(Object.entries(INSIGHT_ARTICLE_TITLES).map(([path, title]) => [path, insightArticleTrail(title)])),
  "/currently-serving/army-education-centres": [HOME, GET_SUPPORT, { name: "Army Education Centres" }],
  "/evidence": [HOME, GET_SUPPORT, { name: "The data behind the story" }],
  "/community": [HOME, GET_INVOLVED, { name: "Community" }],
  "/join": [HOME, GET_INVOLVED, { name: "Join" }],
};

// The trail a page draws with PageTrail; the same entry feeds its BreadcrumbList data.
export const trailFor = (path: string): readonly Crumb[] => PAGE_BREADCRUMBS[path] ?? [];
