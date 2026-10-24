# Project architecture

- Centralise Armed Forces Covenant licence exclusions in `CovenantPledgeBand`; route-aware rendering prevents the licensed mark appearing near funding or sponsorship content.
- Keep homepage evidence counters server-rendered at their final values with client-only, one-shot animation and separate static screen-reader values, so animation never compromises access to the figures.
- Use `src/data/pageDates.ts` as the shared source for Layout dates and SEO dateModified; keep static sitemap lastmod values aligned and tested, and share the evidence reporting period with SourcesSection to prevent conflicting dates.