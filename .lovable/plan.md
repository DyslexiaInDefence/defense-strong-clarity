## Placeholder Landing Page

Create a single, clean placeholder page that replaces the full multi-page site with:

1. **Centered layout** with the brand theme (light blue background, Lexend font, dark mode support)
2. **Animated ribbon accent** — the flowing yellow/blue/red/green gradient line
3. **Headline**: "Dyslexia in Defence"
4. **Subheading**: "An independent organisation aimed at enabling those with dyslexia to thrive across their time in service, transition and industry environments by providing peer support, curated resources and structured signposting across the defence and security ecosystem."
5. **Contact email**: [contact@dyslexiaindefence.com](mailto:contact@dyslexiaindefence.com) (as a `mailto:` link)
6. **Accessibility toggles** retained (dark mode, text size, reduce motion, dyslexic font)

### Implementation

- **Replace `App.tsx` routing** — remove all multi-page routes. Render a single `PlaceholderPage` component directly (no Layout/Navbar needed).
- **Create `src/pages/PlaceholderPage.tsx**` — standalone page with:
  - Full-viewport centered content
  - The ribbon gradient bar (CSS animated, reusing existing `ribbon-flow` keyframe)
  - Minimal accessibility toggle row (dark mode, font size, dyslexic font, reduce motion)
  - Clean typography, generous spacing
- Keep `index.css` and `tailwind.config.ts` unchanged (theme/fonts already set up)

This produces a single-screen site ready to commit to GitHub and deploy.