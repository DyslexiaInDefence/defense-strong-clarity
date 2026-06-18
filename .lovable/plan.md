## Lived Experiences section

A new long-term home for first-person stories from the defence community. Launches with Lisa Hodge's story and is structured so future contributors can be added by appending a single entry to a data file.

### 1. Data layer

Create `src/data/livedStories.ts` — the single source of truth for the section.

```ts
export interface LivedStory {
  slug: string;            // e.g. "lisa-hodge-civil-servant"
  name: string;            // "Lisa Hodge"
  role: string;            // "Civil Servant"
  photoUrl: string;        // CDN URL from .asset.json
  photoAlt: string;
  metaTitle: string;
  metaDescription: string;
}
export const livedStories: LivedStory[] = [ /* Lisa */ ];
```

Each story page imports its own data entry plus the full list for the "Browse Stories" pill nav. Adding a future story = append to `livedStories`, add one route, drop in one page component.

### 2. Lisa's photo

Upload the supplied image (both people, as-is) via `lovable-assets create` to `src/assets/lisa-hodge.jpg.asset.json`. Alt text exactly as specified.

### 3. Routes

Add to `src/App.tsx`:
- `/lived-experiences` → `LivedExperiencesPage`
- `/lived-experiences/lisa-hodge-civil-servant` → `LisaHodgePage`

### 4. New components

- `src/components/StoryNav.tsx` — horizontal scrollable pill chips (rounded-full, ribbon-coloured active state, `aria-current="page"` on active, `overflow-x-auto` on mobile). Rendered at the top of every story page.
- `src/components/StoryCard.tsx` — landing-page card with circular photo, name, role, "Read story" affordance. Responsive grid (`sm:grid-cols-2 lg:grid-cols-3`) so it scales as stories are added.

### 5. Landing page — `src/pages/LivedExperiencesPage.tsx`

- `<h1>Lived Experiences</h1>`
- Intro paragraph (exact wording from brief).
- "Browse Stories" heading + responsive grid of `StoryCard`s mapped from `livedStories`.
- SEO via `useSeo` — title, description, indexable.

### 6. Story page — `src/pages/lived-experiences/LisaHodgePage.tsx`

Layout:
- `StoryNav` (Lisa highlighted as active).
- `<h1>Lisa Hodge – Civil Servant</h1>`
- Italic disclaimer paragraph (exact wording from brief).
- Article body using CSS float for desktop wrap:
  - `<figure class="md:float-right md:ml-8 md:mb-4 md:w-2/5">` with rounded corners + subtle shadow.
  - On mobile/tablet (`<md`) the figure stays in normal flow above the prose (full-width).
  - Prose rendered with semantic `<h2>`s for: "The moment of diagnosis", "Growing up undiagnosed", "Where I am now", "My advice to anyone newly diagnosed".
  - **Story text used verbatim** — no edits, no summarising, no rephrasing, punctuation preserved.
- Footer block: `<h2>Share Your Story</h2>` + exact wording + button-style `<Link to="/contact">`.
- SEO via `useSeo` with the title/description from the brief.

### 7. Navigation updates — `src/components/Navbar.tsx`

Under Support, replace current children with, in this order:
- Join → `/join`
- Community → `/community`
- Contact Us → `/contact`
- Lived Experiences → `/lived-experiences`

Remove any "Achieve" entry from Support (Achieve remains under About as "What We Want to Achieve"). Apply to both desktop expandable menu and mobile menu.

### 8. Footer — `src/components/Footer.tsx`

Add "Lived Experiences" link to the Support column (after Contact Us).

### 9. SEO plumbing

- `src/hooks/use-seo.ts`: register both new routes as indexable with the brief's title/description.
- `public/sitemap.xml`: add `/lived-experiences` and `/lived-experiences/lisa-hodge-civil-servant`.
- `public/robots.txt`: no Disallow needed (default Allow).

### 10. Out of scope

- No form, no submission backend — "Share Your Story" links to existing `/contact`.
- No edits to existing pages beyond Navbar/Footer/SEO/sitemap.
- No rewriting of Lisa's text under any circumstance.

### Files touched

New:
- `src/data/livedStories.ts`
- `src/assets/lisa-hodge.jpg.asset.json`
- `src/components/StoryNav.tsx`
- `src/components/StoryCard.tsx`
- `src/pages/LivedExperiencesPage.tsx`
- `src/pages/lived-experiences/LisaHodgePage.tsx`

Edited:
- `src/App.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/hooks/use-seo.ts`
- `public/sitemap.xml`
