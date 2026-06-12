---
paths:
  - "**/*.tsx"
  - "**/*.jsx"
  - "**/*.css"
  - "**/app/**"
  - "**/components/**"
---

# XRT Group — Frontend Design System (non-negotiable)

These constraints override generic frontend defaults and the broader `frontend.md`
rule. When `@frontend-designer` (or any UI work) touches `app/**`, `components/**`,
or any `*.tsx` / `*.css` file in this project, follow them exactly.

XRT Group is a B2B physical-commodity trading desk (fuels, proteins, edible oils).
The aesthetic is **fintech / commodities terminal** — Revolut precision crossed with
a Bloomberg terminal. Dense, rectilinear, institutional. Never "startup SaaS."

## Color palette

Use the project tokens in `src/app/globals.css` (`--color-xrt-*`). Canonical values:

| Role | Name | Hex |
|---|---|---|
| Primary accent | Crimson Red | `#C8111F` |
| Background (dark) | Pure Black | `#111111` |
| Secondary accent | Aged Gold | `#C8973A` |
| Accent (deep) | Deep Red | `#9E0012` |
| Hairlines / borders (light) | Steel Gray | `#E8E5E0` |
| Surface (light) | Off White | `#F7F5F2` |
| Muted text (solid, never opacity) | Gray | `#A8A5A0` |

- Crimson is for accents, active states, and CTAs — not large fills.
- Gold is a sparing secondary (certifications, metadata, category labels).

## Typography

- **Headings:** Barlow Condensed, weight 900 (Black), uppercase, tight tracking.
- **Body / UI / labels:** Archivo Narrow.
- **Body text minimum 16–17px.** Never set body or label text below 16px.
- Use the `--font-barlow` / `--font-archivo` CSS variables, never hardcoded stacks.

## Shape — strictly rectilinear

- **Zero `border-radius` on every element.** No `rounded`, `rounded-lg`,
  `rounded-2xl`, `rounded-full`, no `border-radius` in CSS. Square corners only.
- **Zero `box-shadow` on every element.** No `shadow`, `shadow-lg`, no drop shadows,
  no `box-shadow` in CSS. Separate surfaces with 1px hairline borders instead.
- Pills, badges, cards, buttons, inputs, images, avatars — all rectangular.

## Contrast & legibility

- **Never use text opacity below 100% for body copy or labels.** Do not use
  `text-white/60`, `text-xrt-steel/50`, `text-black/60`, `opacity-*` on text, or
  `rgba()` text colors. Replace every low-opacity gray with a **solid hex** — use
  `#A8A5A0` for muted text on dark surfaces, and a solid dark gray on light surfaces.
- Opacity is permitted only on non-text layers (image scrims, gradient overlays,
  decorative rules).
- Maintain WCAG AA: 4.5:1 for normal text, 3:1 for large text.

## Layout & density

- Dense, information-rich layouts. Data tables, spec rows, tight metadata blocks.
- **Dark mode is the default homepage aesthetic** — Pure Black background with
  Crimson Red accents and white/`#A8A5A0` text.
- Hairline 1px borders (`#E8E5E0` on light, `rgba(255,255,255,0.1)` on dark) define
  structure. No soft cards, no glows, no pastel gradients.
- Mobile-first and fully responsive. Tap targets ≥ 44×44px. No horizontal overflow
  at any width.

## Anti-patterns (reject these)

- Rounded corners or shadows of any kind.
- Sub-100% opacity on text.
- Body/label text under 16px.
- Soft "SaaS" cards, glassmorphism blur as the primary surface treatment, playful
  pastel palettes, generic AI-template hero + 3-feature-card layouts.
