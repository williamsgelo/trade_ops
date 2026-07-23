# TradeOps Project Status

Last updated: 2026-07-22

## Sprint 1: PostgreSQL customer data

Status: Complete

- Prisma Client output confirmed at `lib/generated/prisma`.
- Reusable Prisma 7 client added at `lib/db.ts` with a PostgreSQL driver adapter.
- Development hot reloads reuse the client through `globalThis` caching.
- `/customers` is an async Server Component backed by PostgreSQL.
- Customer records are organisation-scoped and ordered newest first.
- Customer cards display name, phone, email, address, and active status.
- Loading, empty, and sanitized database error states are implemented.
- Development seed creates one organisation, one owner, and three customers.
- Seed records use deterministic IDs and upserts for repeatable execution.
- Prisma seed configuration and the `npm run db:seed` command are available.
- Mock customer data has been removed from the customer page.

## Current limitations

- Authentication and authorization are not implemented.
- The customer page uses `TRADEOPS_DEVELOPMENT_ORGANIZATION_ID`, defaulting to
  `tradeops-development`, until the organisation can be resolved from a server
  session.
- The existing Add customer control is visual only; customer mutations are not
  part of Sprint 1.

## Verification

- Development seed completed successfully on two consecutive runs.
- `npx prisma validate` passed.
- `npx tsc --noEmit` passed.
- `npm run lint` passed.
- Production build is pending; it will be run separately by the project owner.

## Next sprint considerations

- Implement Auth.js and resolve the active organisation from the server session.
- Replace the development organisation identifier in persistent data queries.
- Add customer creation and editing through Server Actions with authorization.
