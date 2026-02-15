# Dyslexia in Defence — Full Multi-Page Refactor

## Overview

Transform the current single-page scrolling site into a professionally structured, multi-route application with 12 distinct pages, an executive governance tone, and sponsor-ready presentation. All existing accessibility infrastructure (dark mode, text size, reduce motion, Lexend font, WCAG AA, ribbon accent) is retained.

---

## Architecture Change

The app moves from anchor-based scrolling (`#about`, `#resources`) to proper React Router routes (`/about`, `/resources`). A shared layout component wraps all pages with the Navbar and Footer.

```text
Current:  / (single page with all sections)
Proposed: 12 separate routes with shared Layout
```

### Route Structure


| Route             | Page Component    | Description                                     |
| ----------------- | ----------------- | ----------------------------------------------- |
| `/`               | HomePage          | Repositioned hero, positioning block, previews  |
| `/about`          | AboutPage         | Founder section, governance principles          |
| `/why-it-matters` | WhyItMattersPage  | Evidence-informed strengths, ecosystem gap      |
| `/community`      | CommunityPage     | Moderated peer network, code of conduct         |
| `/resources`      | ResourcesPage     | Structured library with audience filters        |
| `/support`        | SupportPage       | Signposting directory with disclaimer           |
| `/partner`        | PartnerPage       | Sponsor-ready positioning, enquiry CTA          |
| `/governance`     | GovernancePage    | Operating model, independence, safeguarding     |
| `/join`           | JoinPage          | Community join form, partner enquiry pathway    |
| `/contact`        | ContactPage       | Contact form, newsletter signup, data statement |
| `/privacy`        | PrivacyPage       | UK data protection aligned placeholder          |
| `/accessibility`  | AccessibilityPage | WCAG commitment placeholder                     |


---

## Shared Components

### Layout Component (new)

- Wraps all pages with Navbar + Footer
- Renders `<Outlet />` for child routes
- Scroll-to-top on route change

### Navbar (refactored)

- Convert from anchor links to React Router `<Link>` / `<NavLink>`
- Updated navigation items:
  - Home, About, Why It Matters, Community, Resources, Support, Partner, Governance
- "Get Involved" CTA links to `/join`
- Mobile menu updated accordingly

### Footer (refactored)

- Remove embedded contact form (moved to `/contact`)
- Add independence disclaimer: "Dyslexia in Defence is an independent, volunteer led initiative..."
- Add Founder link
- Update Quick Links to route to `/privacy`, `/accessibility`, `/contact`
- Remove MOD-affiliated contact details (email changed to non-MOD address)
- Retain ribbon divider and brand section

---

## Page-by-Page Content

### Home Page (`/`)

- Headline: "Dyslexia in Defence"
- Subheading: "Independent peer support and structured signposting across the defence and security ecosystem."
- Primary CTA: "Join the Network" (links to `/join`)
- Secondary CTA: "Why It Matters" (links to `/why-it-matters`)
- "We are / We are not" positioning block
- Preview cards linking to: Why It Matters, Community, Partner, Support

### About Page (`/about`)

- Founder section: Symon Smith bio in executive tone
- Professional summary with listed credentials
- Independence disclaimer
- Governance Principles bullet list

### Why It Matters Page (`/why-it-matters`)

- Evidence-informed tone on cognitive diversity in defence
- Dyslexic strengths list (systems thinking, pattern recognition, etc.)
- Ecosystem gap explanation (pre-service, serving, veterans, industry, families)
- Positioning as complementary to existing structures

### Community Page (`/community`)

- Moderated peer network description
- Code of conduct boundaries (no operational discussion, no grievance content, no political debate)
- Clarification: peer support only, not clinical, not crisis

### Resources Page (`/resources`)

- Categories: Workplace adjustments, Leadership inclusion, Assistive technology, Transition support, Research summaries
- Audience filter tabs: Pre-joining, Serving, Veterans, Industry, Families
- Each resource as a summary card with external link placeholder

### Support Page (`/support`)

- Signposting directory sections: Emergency, Mental health crisis, Forces/veteran support, Employment transition, General dyslexia charities, Family/carers
- Strong disclaimer block at top: "This community provides peer support and signposting only..."

### Partner Page (`/partner`)

- Non-profit positioning statement
- What sponsorship supports (hosting, tooling, resources, events, governance)
- Value to partners (inclusion association, community engagement, workforce capability)
- Professional enquiry CTA (links to `/contact`)
- No pricing published

### Governance Page (`/governance`)

- Sections: Operating Model, Independence, Scope, Moderation and Safeguarding, Data and Privacy Principles, Funding Transparency
- Structured, risk-aware tone

### Join Page (`/join`)

- Community join form: Name, Email, Connection to defence (select), Optional interests (checkboxes), Consent checkbox
- Separate partner enquiry pathway linking to `/partner`
- Form validation with zod

### Contact Page (`/contact`)

- Reuse and adapt existing ContactForm component
- Add separate newsletter signup section
- Clear data statement
- Success confirmation state

### Privacy Page (`/privacy`)

- Structured placeholder aligned to UK data protection principles
- Sections: What we collect, How we use it, Data retention, Your rights, Contact

### Accessibility Page (`/accessibility`)

- WCAG AA commitment statement
- Accessibility features list (dark mode, text size, reduce motion, semantic HTML, keyboard navigation)
- Feedback contact

---

## Impact Narrative Section (on Home Page)

Three maturity stages displayed as a timeline or stepped cards:

1. **Establishment** — Member engagement, initial resource library, governance framework
2. **Consolidation** — Event participation, expanded partnerships, resource usage metrics
3. **Ecosystem Influence** — Cross-sector recognition, partner organisations, policy contribution

---

## Technical Details

### Files to Create

- `src/components/Layout.tsx` — shared layout with Navbar, Footer, scroll-to-top
- `src/pages/HomePage.tsx` — new home page
- `src/pages/AboutPage.tsx`
- `src/pages/WhyItMattersPage.tsx`
- `src/pages/CommunityPage.tsx`
- `src/pages/ResourcesPage.tsx`
- `src/pages/SupportPage.tsx`
- `src/pages/PartnerPage.tsx`
- `src/pages/GovernancePage.tsx`
- `src/pages/JoinPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/PrivacyPage.tsx`
- `src/pages/AccessibilityPage.tsx`
- `src/components/JoinForm.tsx` — community join form with validation

### Files to Modify

- `src/App.tsx` — add all routes under Layout
- `src/components/Navbar.tsx` — convert to router links, update nav items
- `src/components/Footer.tsx` — remove contact form, add disclaimer, update links
- `src/components/ContactForm.tsx` — minor tone adjustments

### Files to Remove / Deprecate

- `src/pages/Index.tsx` — replaced by HomePage
- `src/components/HeroSection.tsx` — content absorbed into HomePage
- `src/components/AboutSection.tsx` — content refactored into AboutPage
- `src/components/ResourcesSection.tsx` — replaced by ResourcesPage
- `src/components/SupportSection.tsx` — replaced by SupportPage
- `src/components/GetInvolvedSection.tsx` — replaced by JoinPage/PartnerPage

### Tone and Language Rules

- No emotional or activist language
- No institutional criticism
- Measured, calm, capability-focused, professional
- Executive governance vocabulary throughout
- All content safe for corporate sponsor review

### Sequencing

1. Create Layout component and update App.tsx routing
2. Refactor Navbar and Footer for multi-page navigation
3. Build HomePage with repositioned content
4. Build remaining pages in order (About, Why It Matters, Community, Resources, Support, Partner, Governance, Join, Contact, Privacy, Accessibility)
5. Remove deprecated single-page components