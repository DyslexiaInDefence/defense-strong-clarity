# Homepage refinements: section rhythm, the actual number, service-themed silhouettes

Homepage only. No palette, token, font or route changes.

## 1. Light blue / white / light blue rhythm

Today the page reads: hero (light blue page background), silhouette band (light blue), lived experiences (light blue), What We Do (white card tint), pathways (light blue).

The lighter card tint moves off "What We Do" and onto the silhouette section instead:

```text
Hero                     light blue (page background, unchanged)
Supporting the 10%       white  <- card tint moves here
Real stories             light blue
What We Do               light blue  <- tint removed
Pathways                 light blue
```

To make the alternation actually read as light blue, white, light blue down the page, the pattern applied is:

- Hero: light blue (existing page background)
- Supporting the 10% silhouette section: white (`bg-card`, the same tint already used elsewhere)
- Real stories: light blue
- What We Do: white (`bg-card`)
- Pathways: light blue

Existing top borders between sections stay, so the joins remain crisp in both light and dark mode. `bg-card` is the same token already in use, so dark mode continues to work with no new colours.

## 2. State the number in the section itself

The silhouette section gains a clear figure block above the band, using existing type scale and the ribbon accent for the number only:

- Headline figure: **around 18,000** — displayed large and readable
- One-line explanation directly beneath: an estimated number of serving UK Armed Forces personnel who may be dyslexic, based on 10 per cent prevalence applied to total UK Armed Forces strength of roughly 184,000.

The existing small muted citation line stays underneath, unchanged in style, referencing UK dyslexia prevalence estimates alongside the MOD Quarterly Service Personnel Statistics. The figure is presented as an estimate, not a measured count.

## 3. Service-themed silhouettes

The band's figures become recognisably military at a glance while staying simple, non-literal shapes:

- **Army**: peaked/beret-style headwear silhouette, squarer shoulder line
- **Royal Navy**: flat-topped cap silhouette, slightly narrower shoulders
- **RAF**: soft side-cap silhouette with a small forward peak

The three shapes cycle in sequence as the row scrolls, so a glance across the band shows a mixed service population rather than identical icons. Head, headwear and torso remain single-colour filled paths — no faces, no insignia, no detail.

Unchanged: muted tone for most figures, roughly one in every ten picked out in an existing ribbon accent, continuous left-to-right loop, decorative and hidden from screen readers, and motion stopping completely under both the system reduced-motion setting and the site's Reduce Motion toggle.

## Technical notes

- `src/pages/HomePage.tsx`: swap `bg-card` from the What We Do section onto the silhouette section; add the figure block inside the silhouette section above `HeroPersonnelBand`.
- `src/components/HeroPersonnelBand.tsx`: replace the single circle-plus-rectangle figure with three variant shapes selected by index modulo 3; highlight logic, accent colours, track duplication and `motion-reduce` handling stay as they are.
- No changes to `index.css`, `tailwind.config.ts`, routing, SEO metadata or the sitemap.
