-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Invoices table
create table if not exists invoices (
  id text primary key,
  invoice_number text,
  status text default 'unpaid',
  customer_company text,
  invoice_date text,
  data jsonb not null,
  created_at text,
  updated_at text
);

-- App settings (company info, invoice counter)
create table if not exists app_settings (
  key text primary key,
  value jsonb not null
);

-- Allow public read/write (no auth required)
alter table invoices enable row level security;
alter table app_settings enable row level security;

create policy "Public access invoices" on invoices for all using (true) with check (true);
create policy "Public access settings" on app_settings for all using (true) with check (true);
