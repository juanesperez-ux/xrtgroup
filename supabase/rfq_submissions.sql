-- ─────────────────────────────────────────────────────────────────────────────
-- XRT Group — RFQ submissions table
-- Run this once in the Supabase dashboard: SQL Editor → New query → Run.
-- Captures every RFQ submitted via the contact form, product InlineRFQ,
-- and the services RFQDrawer (all flow through /api/rfq).
-- ─────────────────────────────────────────────────────────────────────────────

create table if not exists public.rfq_submissions (
  id                   uuid primary key default gen_random_uuid(),
  created_at           timestamptz not null default now(),
  ref_id               text,
  entity               text,
  reg_number           text,
  contact_name         text,
  email                text,
  phone                text,
  commodity            text,
  commodity_code       text,
  volume               text,
  volume_unit          text,
  origin               text,
  destination          text,
  delivery_start       text,
  delivery_end         text,
  incoterms            text,
  hub                  text,
  finance_required     text,
  inspection_required  text,
  services             text,
  source               text,
  desk_email           text,
  notes                text
);

-- Row Level Security: ON. Public (publishable/anon key) may INSERT only.
-- No SELECT/UPDATE/DELETE policy for anon → submissions are write-only from the
-- website and readable only via the Supabase dashboard or the service-role key.
alter table public.rfq_submissions enable row level security;

drop policy if exists "Allow anon RFQ inserts" on public.rfq_submissions;
create policy "Allow anon RFQ inserts"
  on public.rfq_submissions
  for insert
  to anon
  with check (true);

-- Helpful index for browsing recent leads.
create index if not exists rfq_submissions_created_at_idx
  on public.rfq_submissions (created_at desc);
