# Project Instructions

## Commands

```bash
pnpm dev              # start dev server
pnpm build            # production build
pnpm run seed         # seed Payload CMS data
pnpm run typecheck    # type checking (tsc --noEmit)
```

## Architecture

- `src/app/(marketing)/` — public-facing Next.js pages
- `src/app/(payload)/` — Payload CMS admin + API handlers
- `src/app/api/` — custom API routes (e.g. RFQ form submission)
- Payload CMS v3 with SQLite (`payload.config.ts`); Supabase for form/RFQ persistence
- No test framework or formatter configured yet

## Workflow

- Run typecheck after making a series of code changes
- Prefer fixing the root cause over adding workarounds
- When unsure about approach, use plan mode (`Shift+Tab`) before coding

## Don'ts

- Don't modify generated files (`*.gen.ts`, `*.generated.*`)
- Don't write to `.env` or `.env.local` directly
