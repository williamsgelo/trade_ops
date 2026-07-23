# TradeOps Project Context

TradeOps is a multi-tenant field-service management application for small trade and security installation businesses.

## Technology

- Next.js App Router
- TypeScript
- PostgreSQL
- Prisma ORM
- Auth.js
- Zustand
- Tailwind CSS
- shadcn/ui
- Lucide React

## Project structure

- The project uses the root `app/` directory.
- There is no `src/` directory.
- Authenticated pages are grouped under `app/(dashboard)`.
- Public authentication pages are grouped under `app/(auth)`.
- Prisma schema and migrations live under `prisma/`.
- Generated Prisma Client lives under `generated/prisma/`.

## Architecture rules

- Use Server Components for persistent data reads.
- Use Server Actions for internal form mutations.
- Use Route Handlers only when an actual HTTP endpoint is required.
- PostgreSQL is the source of truth for users, organisations, customers and jobs.
- Zustand is only for temporary client-side UI state.
- Do not store database records or authentication state primarily in Zustand.
- All organisation-owned records must be filtered by `organizationId`.
- Never trust an `organizationId` submitted by the browser.
- Resolve the organisation from the authenticated server session.
- Keep the MVP simple and avoid premature abstractions.
- Do not introduce additional libraries unless necessary.
- Use responsive, accessible shadcn/ui components.
- Keep technician-facing screens mobile-first.

## Existing Prisma models

- Organization
- User
- Account
- Session
- VerificationToken
- Customer
- Job

## MVP roles

- OWNER
- ADMIN
- TECHNICIAN

## Main workflow

1. User signs in.
2. User creates an organisation.
3. Owner or admin creates a customer.
4. Owner or admin creates and assigns a job.
5. Technician starts and completes the assigned job.
6. Owner or admin reviews the completed job.

## Development requirements

After each sprint:

- Run Prisma validation if the schema changed.
- Run Prisma Client generation if the schema changed.
- Run TypeScript checking.
- Run linting.
- Run the production build when practical.
- Update `PROJECT_STATUS.md`.
- Remove temporary mock data when real data replaces it.
