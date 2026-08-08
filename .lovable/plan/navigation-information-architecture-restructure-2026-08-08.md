# Navigation & Information Architecture Restructure

No page content is deleted, shortened or rewritten. No colour, font or token changes. Every existing URL keeps working — moved pages get redirects.

## New top-level navigation

Four items plus the existing "Get Involved" CTA (to `/join`).

```text
About Us            Get Support        Community            Resources          [Get Involved]
- Our Story         - Join             - Lived Experiences  - Downloads &
- What We Do        - Guidance (7      - Peer Community       assistive tools
- FAQ                 service pages)   - Ask the Community  - Partner With Us
- Contact Us        - What We Want                          - Ecosystem
- Governance          to Achieve
```

### 1. About Us (`/about`)
- **Our Story** (`/about/our-story`) — assembled from the existing Founder & Purpose and Structure copy already on the site: founding story, your background, the Defence Dyslexia Network's origins and its recognition on the MOD Diversity and Inclusion pages, then the pivot to the wider mission and who the organisation serves today. This is the one page needing genuinely new connective wording; the facts are reused from existing pages. I'll draft it for you to correct.
- **What We Do** (`/about/what-we-do`) — the current Why It Matters content, unchanged, reframed with a lead about guidance, community and support activity. `/why-it-matters` redirects here.
- **FAQ** (`/about/faq`) — the three grouped question sets currently on the Insights hub (Thinking of joining / Currently serving / Leaving service or veteran): same questions, answers, groupings and links, plus the existing FAQPage schema.
- **Contact Us** (`/contact`) — unchanged, promoted into the nav.
- **Governance** (`/governance`) — the whole existing section surfaced as a labelled reference area: Overview, Founder and Purpose, Code of Conduct, Safeguarding, Privacy Notice, Sponsorship, Transparency. All seven pages kept as-is.

The current `/structure` page stays live and is linked from Our Story and Governance.

### 2. Get Support (`/support`)
Practical hub: Join, the seven service-specific guidance articles (Army, RAF, Navy, JSP 822, declaring, support available, identified during service) and What We Want to Achieve (`/achieve`). All `/insights/*` article URLs stay exactly as they are.

### 3. Community (`/community`)
Lived Experiences promoted to one click (hub plus the three stories), the peer community page, and Ask the Community.

### 4. Resources (`/resources`)
Downloads and assistive tools (existing Resources page), Partner With Us, Ecosystem.

## URL and SEO handling
- All existing routes remain; nothing is removed from the router.
- Moved pages: the old path renders a replace-redirect to the new path (`/why-it-matters` -> `/about/what-we-do`). `/insights` keeps working as the guidance index and also points to `/about/faq`.
- Canonicals follow the new paths; sitemap updated with new URLs, redirect sources dropped only where a canonical replacement exists.
- Footer link groups and breadcrumb labels updated to match the four sections.

## Homepage hero redesign

New `HeroPersonnelBand` component using existing tokens only.

- A horizontal band of simple faceless silhouettes — circle head, small rounded-rectangle body, generic enough to read as Army, Navy and RAF without literal uniforms. Pure SVG, no images.
- Most figures in a muted, faded tone; exactly one in ten picked out in a ribbon accent already in the palette, representing the one-in-ten prevalence estimate.
- The row loops slowly left to right via a duplicated track and a CSS transform animation. It stops entirely under `prefers-reduced-motion` and under the site's own Reduce Motion toggle (`.reduce-motion`), rendering as a static band.
- The band is decorative and `aria-hidden`.
- Overlaid content: H1 "Supporting the 10% to give their 100%", a short supporting line covering serving personnel, those preparing to join and those who have transitioned out, then a small muted one-line citation to MOD personnel statistics — quiet text, not a callout.
- Existing hero CTAs (Join the Network, Ask the Community), secondary links, logo and ribbon strip are retained; the rest of the homepage is untouched.

## Technical notes
- `src/components/Navbar.tsx`: `navLinks` restructured to the four sections; existing dropdown, hover-bridge and keyboard behaviour reused unchanged. Accessibility controls stay in the sticky nav.
- New pages: `src/pages/about/OurStoryPage.tsx`, `WhatWeDoPage.tsx` (wrapping the existing Why It Matters content), `FaqPage.tsx` (the three grouped accordions extracted from `InsightsPage.tsx` into shared data so both pages read from one source).
- New component `src/components/HeroPersonnelBand.tsx` plus one keyframe in `index.css`.
- `src/App.tsx`: new routes and redirect routes. `Footer.tsx`, `Breadcrumbs.tsx`, `NextSteps.tsx`, `public/sitemap.xml` and `public/llms.txt` updated for the new structure.