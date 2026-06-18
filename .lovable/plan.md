## Goal

Make `/lived-experiences/*` pages the canonical destination for personal stories, quotes and "hear from someone serving" callouts across the site. Small, surgical changes — no redesign, no new founder-promotion sections.

---

## 1. Kirk Davis page — add "Hear Kirk's Story" podcast section

File: `src/pages/lived-experiences/KirkDavisPage.tsx`

- Above the existing "Share Your Story" `<aside>`, insert a new section "Hear Kirk's Story".
- Embed the Spotify episode using a standard Spotify iframe (the site already does this on InsightsPage), URL: `https://open.spotify.com/embed/episode/2zNd3YpRNMt14rNU3kCqpR?utm_source=generator&theme=0`.
- Include short intro line: "Listen to Kirk discuss dyslexia, belonging, imposter syndrome and neurodiversity in Defence in his own words."
- Fallback link: "Listen on Spotify" → `https://open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR` (target="_blank", rel="noopener").

## 2. Symon Smith page — add "Further Reading" section

File: `src/pages/lived-experiences/SymonSmithPage.tsx`

Above the "Share Your Story" aside, add a "Further Reading" section with three cards:

1. **How Dyslexic Thinking Strengthens Cyber Security** → `https://www.bcs.org/articles-opinion-and-research/how-dyslexic-thinking-strengthens-cyber-security/` (external, new tab)
2. **British Dyslexia Association Feature** → `/documents/dyslexia-article.pdf` (reuse existing site asset, matches InsightsPage)
3. **Royal Signals Institute Journal — Winter 2023** → `/documents/rsi-journal-winter-23.pdf` (reuse existing)

Visual style: simple bordered card grid (`grid sm:grid-cols-2 gap-4`), low-key — framed as "optional further reading", not promotion.

## 3. Re-point "hear from someone serving" callouts to Kirk's page

`PodcastInsight` is currently used on three insight pages (Army, Navy, RAF, Declare). It already links to Kirk's Spotify episode — keep that. Add a secondary link beneath the "Listen to the episode" CTA: "Read Kirk's full lived experience →" → `/lived-experiences/staff-sergeant-kirk-davis-british-army`.

File: `src/components/PodcastInsight.tsx` — add a `Link` (react-router) under the existing CTA.

Also rename the Army page's heading prop from `"Hear from a serving soldier with dyslexia"` to keep current copy (no change needed) — the new link does the connecting.

## 4. Link Symon-attributed quotes to his lived experience page

`LivedExperienceBlock` renders quotes attributed to Symon Smith with `source` text (BDA / RSI journal). Update `src/components/LivedExperienceBlock.tsx` so when `attribution === "Symon Smith"`, the figcaption renders his name as a `Link` to `/lived-experiences/symon-smith-british-army-veteran` with hover/underline styling, followed by the source text unchanged. This converts quote attributions into invitations to read the full story without changing layout.

No data file changes needed (`src/data/livedExperience.ts` stays as-is).

## 5. Homepage / Support page

Already done in prior turn — homepage "Real stories from across Defence" and Support page "Lived Experiences" card both link to `/lived-experiences`. No change.

## 6. Validation

- `rg "open.spotify.com/episode/2zNd3YpRNMt14rNU3kCqpR" src` — confirms Kirk embed renders.
- Visit `/lived-experiences/staff-sergeant-kirk-davis-british-army`, `/lived-experiences/symon-smith-british-army-veteran`, and one insight page (e.g. Army) via Playwright to confirm new sections render and links resolve (no 404).
- Build passes (auto).

---

## Out of scope (per design requirements)

- No large promotional sections, no founder hero treatment.
- No changes to existing lived experience story copy.
- No new routes; no sitemap changes.
- No changes to InsightsPage "Research and formal insight" section (already lists BDA + RSI; the new cyber security article is added only on Symon's lived experience page as further reading).
