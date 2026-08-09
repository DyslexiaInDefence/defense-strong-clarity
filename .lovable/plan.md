# Homepage: restore original hero, move the 1-in-10 band into its own section

Homepage only. No other page, route, colour, font or token changes.

## 1. Hero restored to its original form

The hero returns to exactly the wording and layout it had before the "Supporting the 10%" version:

```text
[shield logo, larger: h-40 / sm:h-48 / md:h-56 / lg:h-64]

H1   Dyslexia in Defence — Empowering Dyslexic Talent
     For serving personnel, veterans, civil service, and industry   (small uppercase, primary)
     Empowering dyslexic talent across Defence, before and after service.

[Join the Network]  [Ask the Community]
About  ·  Support
[ribbon wave]
```

Also removed from the hero: the scrolling band, the "We are here for serving personnel..." line and the small statistics citation line. The ribbon strip, background gradients, CTAs, secondary links and ribbon wave stay as they are.

## 2. New band section below the hero

A standalone section sits between the hero and "Real stories from across Defence".

- Faceless silhouettes: circle head plus small rounded-rectangle body, pure inline SVG, no images, generic enough to read as Army, Navy or RAF without literal uniforms.
- Most figures muted and faded; every tenth figure picked out in an existing ribbon accent, representing the estimated one in ten dyslexia prevalence.
- The row scrolls slowly left to right on a continuous loop via a duplicated track, so the seam is invisible.
- Motion stops completely under the visitor's system reduced-motion setting and under the site's own Reduce Motion toggle — it renders as a static band.
- A short heading and one supporting line above the band, plus a quiet, small, muted citation line beneath it referencing UK dyslexia prevalence estimates alongside published MOD personnel statistics. The band itself is decorative and hidden from screen readers, so the meaning lives in that text.

Section styling uses existing tokens only: top border, standard container, muted text, ribbon accent colours already in the palette.

## Technical notes

- `src/pages/HomePage.tsx`: hero block reverted; new `<section>` added after the hero, before the lived-experiences section.
- `src/components/HeroPersonnelBand.tsx`: reused unchanged as the band itself; the new section wraps it with the heading and citation. The existing `animate-personnel-scroll` keyframe and `motion-reduce:animate-none` handling stay as-is, and the site-wide `.reduce-motion` rule already neutralises it.
- No changes to routing, SEO metadata, sitemap or any other component.
