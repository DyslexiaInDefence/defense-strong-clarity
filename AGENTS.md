# Project architecture

- Keep lived-story additions in the shared story registry and layout, with optional per-story heading and portrait-position settings so existing stories retain their presentation.

- Scope inner-page canvas, white content-surface overrides and any muted-text contrast correction centrally through Layout's `data-inner-page` marker in global CSS, with light-mode-only selectors; keep homepage, site chrome and dark tokens unchanged.

- Centralise Armed Forces Covenant licence exclusions in `CovenantPledgeBand`; route-aware rendering prevents the licensed mark appearing near funding or sponsorship content.
- Keep homepage evidence counters server-rendered at their final values with client-only, one-shot animation and separate static screen-reader values, so animation never compromises access to the figures.
- Use `src/data/pageDates.ts` as the shared source for Layout dates and SEO dateModified; keep static sitemap lastmod values aligned and tested, and share the evidence reporting period with SourcesSection to prevent conflicting dates.
- Keep Why We Are Here graphics in `components/whyhere` and reuse evidence motion primitives with page-scoped styling, so the evidence page and existing pages remain unchanged.
- Stage support redesign pages independently using reusable SupportTabs and global route accent variables; keep their head metadata local and discovery registries untouched so existing pages are unchanged.- Keep Standard Learning Credits figures, form assets, filenames and assessor contact details in `src/pages/support/slcContent.ts` for the staged SLC page, and keep them aligned with the live SLC page by test until switch-over, so prices and forms have one source to update.
- Stage the switch-over menu and footer as exported `NEW_*` link lists behind off-by-default flags in Navbar and Footer, keeping `CURRENT_*` lists pinned by test, so the live chrome cannot change until the flags flip.
