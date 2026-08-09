# Homepage fixes: reference-matched role badges, strict section alternation

Homepage only. No new colours, fonts or tokens.

## 1. Role badge icons matched to the reference

`src/components/HeroPersonnelBand.tsx` is rebuilt as a proper flat icon set in the style of the attached reference: a filled circular badge, a plain head-and-shoulders silhouette sitting low in the circle (shoulders cropped by the badge edge), and clear branch identity carried by headwear and collar shape.

Nine distinct icons, cycling in order as the row scrolls:

1. Beret with a small badge shape, formal collar and tie
2. Naval officer's white cap with dark peak, open shirt collar
3. Army peaked cap with a raised crown, tunic collar
4. Combat helmet with goggles pushed up on the brow
5. Camo field cap with a soft peak, patterned combat collar shape
6. Helmet with side headset cups and a boom mic, plated vest collar
7. Pilot's helmet with visor and oxygen mask, flight suit collar
8. Sailor's white cap with a rolled brim, V-neck sailor collar
9. Dress uniform peaked cap, high buttoned collar

Proportions follow the reference: head roughly one third of the badge width, shoulders wide and squared, headwear reading strongly against the head. Faceless throughout — no eyes, mouth or insignia detail beyond simple shapes. Weapons are left out; the reference's rifle would read as noise at icon size on a homepage band.

Homepage treatment stays as it is today: the badge circle and silhouette both use the existing muted tone at a faded opacity, roughly one icon in every ten picked out in an existing ribbon accent, the row scrolls slowly left to right on a continuous loop, and motion stops completely under both the system reduced-motion setting and the site's Reduce Motion toggle. Still decorative and hidden from screen readers.

Each icon is built from a handful of filled paths using two tone steps (base and a slightly stronger shade of the same colour) so headwear separates from the head without introducing any new palette.

## 2. Strict top-to-bottom section alternation

Every homepage section in sequence, rather than adjusting one at a time. Current state and the fix:

```text
                       now                 after
Hero                   light blue          light blue
Supporting the 10%     white   (bg-card)   white
Real stories           white   (bg-card)   light blue
What We Do             white   (bg-card)   white
Pathways               light blue          light blue
```

Two adjacent white sections are what breaks the rhythm today. After the change the page reads light blue, white, light blue, white, light blue from top to bottom with no repeats. Light blue is the existing page background; white is `bg-card`, the same tint already used across the site.

Note: this puts the silhouette band on white rather than light blue. Strict alternation from the hero down forces it — the hero is light blue and the band is the section directly beneath it. If keeping the band on light blue matters more than the alternation, say so and the pattern can start one section lower instead.

Existing top borders between sections stay so the joins stay crisp in light and dark mode. Cards nested inside each section use a surface that contrasts with whichever background they sit on.

## Technical notes

- `src/components/HeroPersonnelBand.tsx`: replace the five simple variants with nine reference-matched badge icons selected by index modulo 9; keep the highlight rule (`index % 10`), accent colours, duplicated track and `motion-reduce` handling.
- `src/pages/HomePage.tsx`: set `bg-card` on the prevalence and What We Do sections, remove it from Real stories, leave the hero and Pathways on the page background; adjust nested card surfaces to match.
- No changes to `index.css`, `tailwind.config.ts`, routing, SEO metadata or the sitemap.
