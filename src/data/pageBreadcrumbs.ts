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

export const PAGE_BREADCRUMBS: Readonly<Record<string, readonly Crumb[]>> = {
  "/about": [HOME, { name: "About us" }],
  "/partner": [HOME, { name: "About us", path: "/about" }, { name: "Partner with us" }],
  "/lived-experiences": [HOME, { name: "Get involved", path: "/get-involved" }, { name: "Lived experiences" }],
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
  "/support/how-you-think-and-learn": [HOME, GET_SUPPORT, { name: "Guidance", path: "/support/guidance" }, { name: "Understanding how you think and learn" }],
};
