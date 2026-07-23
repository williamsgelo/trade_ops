# TradeOps Project Status

Last updated: 2026-07-23

## Sprint 2: Auth.js authentication

Status: Complete

- Auth.js is configured in the root `auth.ts` with the Prisma adapter.
- Credentials authentication uses the existing `User.passwordHash` field.
- Registration and login inputs are validated with Zod.
- Passwords are hashed with bcrypt before storage and are never returned to the
  client.
- Login and registration failures use generic, sanitized messages.
- The App Router Auth.js handler is available at
  `app/api/auth/[...nextauth]/route.ts`.
- `/login` and `/register` use Server Actions for authentication mutations.
- All routes in `app/(dashboard)` are protected by the dashboard server layout
  and redirect unauthenticated users to `/login`.
- Dashboard Server Components can access the current user through `auth()`.
- The dashboard shell shows the authenticated user's name and email and
  provides server-side sign-out.
- Customer reads now resolve `organizationId` from the authenticated session;
  users without an organisation see an empty state.
- Required environment variables are documented in `.env.example`.

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

- Organisation onboarding is not implemented. New registrations have no
  organisation and therefore see no organisation-owned customer records.
- Password reset, email verification, and login rate limiting are not yet
  implemented.
- The existing Add customer control is visual only; customer mutations are not
  part of Sprint 1.

## Verification

- `npx prisma validate` passed.
- `npx prisma generate` passed.
- `npx tsc --noEmit` passed.
- `npm run lint` passed.
- `git diff --check` passed.
- Production build remains pending for the project owner. The sandboxed attempt
  reached compilation but could not fetch the existing Geist Google Fonts.

## Next sprint considerations

- Implement organisation onboarding and refresh session claims after membership
  changes.
- Add customer creation and editing through Server Actions with role checks.
- Add password reset, email verification, and login rate limiting.
