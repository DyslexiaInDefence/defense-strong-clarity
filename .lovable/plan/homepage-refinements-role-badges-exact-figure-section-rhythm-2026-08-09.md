# Homepage refinements: role badges, exact figure, section rhythm

Homepage only. No palette, token, font or route changes.

## 1. Silhouette band becomes a role badge set

`src/components/HeroPersonnelBand.tsx` is rebuilt so each item is a simple flat circular badge containing a faceless head-and-shoulders silhouette, distinguished only by headwear shape:

- Beret (sloped, worn to one side)
- Naval officer cap (flat top with band and peak)
- Army peaked cap (structured crown with forward peak)
- Combat helmet (rounded dome, low brow line)
- Field cap (soft low crown with short peak)

Rules kept flat and icon-like: single-colour filled paths, no faces, no insignia, no shading or outlines beyond the badge circle. The five shapes cycle in sequence as the row scrolls left to right.

Colour: most badges use the existing muted tone (soft muted circle, muted silhouette). Roughly one in every ten is picked out in an existing ribbon accent, as now. Decorative, hidden from screen readers, and motion still stops entirely under both the system reduced-motion setting and the site's Reduce Motion toggle.

## 2. Exact figure

The prevalence block states the precise number, with no hedging language in the figure itself:

- Figure: **18,205**
- One line beneath: 10 per cent dyslexia prevalence applied to a UK Armed Forces total strength of 182,050.

The small muted citation line underneath stays small and muted, updated to cite the MOD Quarterly Service Personnel Statistics, 1 January 2026 alongside UK dyslexia prevalence estimates.

## 3. Remove the four item block

The four-item grid under "What We Do" (Volunteer led, Independently governed, Strengths based, Built on mutual respect) is deleted entirely. The "What We Do" heading, paragraph and "Learn more about us" link remain.

## 4. Section background rhythm

```text
Hero                     light blue (page background, unchanged)
Supporting the 10%       light blue
Real stories             white  (bg-card)
What We Do               white  (bg-card)
Pathways                 light blue
```

The silhouette section sits on the light blue page background and the sections either side of it use `bg-card`, the same light tint already used elsewhere on the site. Existing top borders between sections stay, so joins remain crisp in light and dark mode.

## Technical notes

- `src/components/HeroPersonnelBand.tsx`: replace the three service variants with five circular-badge role icons selected by index modulo 5; keep highlight logic (`index % 10`), accent colours, duplicated track and `motion-reduce` handling.
- `src/pages/HomePage.tsx`: drop `bg-card` from the prevalence section and add it to the "Real stories" and "What We Do" sections; update the figure, its explanatory line and the citation; delete the four-item grid.
- Nested cards inside those sections switch to a neutral surface so they stay visible against `bg-card`.
- No changes to `index.css`, `tailwind.config.ts`, routing, SEO metadata or the sitemap.
