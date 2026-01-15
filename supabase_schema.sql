-- Contact form storage
create table if not exists public.leads (
  id bigserial primary key,
  nombre text not null,
  email text not null,
  idea text not null,
  created_at timestamptz not null default now()
);

-- Allow anonymous inserts from the public form
alter table public.leads enable row level security;

create policy "Allow anon lead inserts"
on public.leads
for insert
to anon
with check (true);
