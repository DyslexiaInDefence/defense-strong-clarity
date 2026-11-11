import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { livedStories } from "../data/livedStories";
import { getPageDate } from "../data/pageDates";

// Render links as plain anchors so the page can be checked without a router.
vi.mock("@/lib/router-compat", () => ({
  Link: ({ to, children, ...rest }: { to: string; children?: unknown }) => createElement("a", { href: to, ...rest }, children as never),
}));

const { default: LivedExperiencesHubPage } = await import("./LivedExperiencesHubPage");

describe("Lived experiences preview story grid", () => {
  const html = renderToStaticMarkup(createElement(LivedExperiencesHubPage));
  const grid = html.split('data-testid="story-grid"')[1]?.split("</ul>")[0] ?? "";

  it("shows one card per livedStories entry, in the same order", () => {
    const hrefs = [...grid.matchAll(/href="\/lived-experiences\/([^"]+)"/g)].map(match => match[1]);
    expect(hrefs).toHaveLength(livedStories.length);
    expect(hrefs).toEqual(livedStories.map(story => story.slug));
    expect(grid.match(/Read their story/g)).toHaveLength(livedStories.length);
  });

  it("shows each story's existing date only, and every current story has one", () => {
    for (const story of livedStories) expect(getPageDate(`/lived-experiences/${story.slug}`), story.slug).toBeDefined();
    expect(grid.match(/<time /g)).toHaveLength(livedStories.length);
  });
});
