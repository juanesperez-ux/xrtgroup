# XRT Modern — Redesign Workflow

How the home + products pages were modernized (June 2026), and the repeatable
process for migrating the remaining pages (about, services, blog, contact, access).

## Design language

- **Goal:** modern procurement company — not a stock-market terminal. Photography,
  soft rounded surfaces, sentence-case headings, generous whitespace.
- **Typography:** Inter (`--font-inter`, loaded in `src/app/layout.tsx`). Legacy pages
  keep Barlow Condensed / Archivo Narrow until migrated.
- **Opt-in scope:** wrap the page root in `className="xrt-modern"`. That switches all
  headings/body inside to Inter, weight 500, sentence case, `-0.03em` tracking
  (see `globals.css`). Nothing outside the wrapper changes.
- **Palette:** unchanged brand tokens (`--color-xrt-*`). Crimson stays the single accent.
- **Surfaces:** `rounded-2xl` cards, `border-xrt-steel`, hover shadow
  `shadow-[0_8px_30px_rgba(17,17,17,0.08)]`. Alternate `bg-xrt-off-white` / `bg-white`
  sections.
- **Labels:** use `.eyebrow` (Inter uppercase micro-label) instead of `.label-caps`.
- **Glass:** `.liquid-glass` + `border border-white/20 rounded-xl` for elements over
  photos/video (hero buttons, tag card, pillar nav pills).

## Reusable pieces

| Piece | Where | Use |
|---|---|---|
| `HomeHero` | `src/components/home/HomeHero.tsx` | Video hero with `FadeIn` + `AnimatedHeading` (30ms char stagger). Copy the two inner components for other animated pages. |
| `Glyph` | `src/components/ui/Glyph.tsx` | Renders any `/public/icons/*.svg` tinted via CSS mask: `<Glyph name="procurement" size={24} />` inside a `text-*` colored element. |
| `.data-table-modern` | `globals.css` | Light table style (replaces black-header `.data-table`). Wrap in `rounded-2xl border overflow-hidden` + `overflow-x-auto`. |

## Asset inventory

Photos in `public/images/` (webp, already optimized):

| File | Subject | Assigned to |
|---|---|---|
| `photo-oil-pumps-dusk.webp` | pump jacks, dusk | hero poster, products ENE banner |
| `photo-pump-jack-night.webp` | pump jack, night | home Refined Fuels card |
| `photo-lng-tanker-aerial.webp` | LNG ship top-down | products LOG banner |
| `photo-lng-terminal.webp` | LNG ship at terminal | available (services/logistics) |
| `photo-airplane-refueling.webp` | aircraft refueling | products header |
| `photo-airplane-wing-fueling.webp` | wing fueling close-up | available (jet fuel spec page) |
| `photo-handshake-deal.webp` | partnership/markets | home CTA background |
| `photo-corn-field.webp` | corn | home sidelines |
| `photo-wheat-field.webp` | wheat field, evening | home sidelines |
| `photo-wheat-closeup.webp` | wheat ears macro | products AGR banner |
| `photo-soybean-pods.webp` | soybeans | home Seed Oils card, products OIL banner |
| `photo-coffee-plantation.webp` | coffee | home sidelines (soft commodities) |

Icons: 50 flat SVGs in `public/icons/` (kebab-case, e.g. `quality-control.svg`,
`supply-chain.svg`, `warehouse.svg`, `global-network.svg`). Render via `Glyph`.

Current icon assignments: fuels→`delivery-truck`, proteins→`weight-scale`,
olive oils→`packaging`, seed oils→`raw-materials`, process→`procurement`/`supplier`/
`quality-control`/`container`, pillars (products)→`ship`/`farmer`/`raw-materials`/
`container`/`weight-scale`, QA partners→`quality-control`.

## Migration checklist (per page)

1. Wrap the page root in `xrt-modern`.
2. Replace `.label-caps` eyebrows with `.eyebrow`; rewrite headings in sentence case.
3. Replace bordered 0-radius grids with `rounded-2xl` cards + `gap-6`.
4. Add one relevant photo per major section (banner or card image, with a
   `bg-gradient-to-t from-xrt-black/60` overlay when text sits on it).
5. Add `Glyph` icons to feature/step/list items.
6. Tables → `.data-table-modern` inside a rounded, scrollable container.
7. **No fabricated data.** Don't add volumes, dollar values, counts, or prices that
   the business hasn't confirmed. (Removed so far: "18M MT annual volume",
   "$2.8B sourcing value", products premium/discount column.)
8. Keep the SEO text layers and structured data intact.
9. `npm run build` must pass; check mobile (cards stack, tables scroll horizontally).

## Known follow-ups

- **Hero video** currently streams from the reference CloudFront URL with a local
  poster fallback. Replace with a self-hosted/owned video when available.
- **TickerTape** (`src/components/nav/TickerTape.tsx`) still shows hardcoded fake
  commodity prices — the strongest remaining "stock market" element. Replace with a
  live feed or remove.
- `tickerItems` / `homeCommoditySnapshot` in `src/lib/data.ts` contain indicative
  prices; review before using on any migrated page.
