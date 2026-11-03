# Project architecture

- Scope inner-page canvas, white content-surface overrides and any muted-text contrast correction centrally through Layout's `data-inner-page` marker in global CSS, with light-mode-only selectors; keep homepage, site chrome and dark tokens unchanged.

- Centralise Armed Forces Covenant licence exclusions in `CovenantPledgeBand`; route-aware rendering prevents the licensed mark appearing near funding or sponsorship content.
- Keep homepage evidence counters server-rendered at their final values with client-only, one-shot animation and separate static screen-reader values, so animation never compromises access to the figures.
- Use `src/data/pageDates.ts` as the shared source for Layout dates and SEO dateModified; keep static sitemap lastmod values aligned and tested, and share the evidence reporting period with SourcesSection to prevent conflicting dates.
- Keep Why We Are Here graphics in `components/whyhere` and reuse evidence motion primitives with page-scoped styling, so the evidence page and existing pages remain unchanged.
- Stage support redesign pages independently using reusable SupportTabs and global route accent variables; keep their head metadata local and discovery registries untouched so existing pages are unchanged.