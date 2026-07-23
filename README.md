# TradeOps

TradeOps is a Next.js App Router application for field-service operations. It
uses PostgreSQL through Prisma ORM.

## Prerequisites

- Node.js and npm
- A PostgreSQL database

Install dependencies:

```bash
npm install
```

## Database setup

Create a `.env` file with the configured PostgreSQL connection string:

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
```

The Prisma datasource is configured in `prisma.config.ts`. The schema lives at
`prisma/schema.prisma`, and the generated client is written to
`lib/generated/prisma`.

The customer screen is temporarily scoped to the development organisation
created by the seed. Override its predictable ID when needed by setting the same
environment variable for the application and seed command:

```dotenv
TRADEOPS_DEVELOPMENT_ORGANIZATION_ID="tradeops-development"
```

Authentication will replace this development scope with the signed-in user's
organisation in a later sprint.

## Migrations

Create and apply a development migration after a schema change:

```bash
npx prisma migrate dev --name describe_change
```

Apply committed migrations in production or CI:

```bash
npx prisma migrate deploy
```

Check migration status:

```bash
npx prisma migrate status
```

## Prisma Client

Regenerate Prisma Client after changing the schema:

```bash
npx prisma generate
```

The application imports the reusable, hot-reload-safe client from `lib/db.ts`.

## Development seed

Seed one development organisation, one owner, and three customers:

```bash
npm run db:seed
```

The seed uses fixed identifiers and upserts, so it can be run repeatedly without
creating duplicate seed records.

## Prisma Studio

Inspect and edit database records locally:

```bash
npx prisma studio
```

## Run the application

```bash
npm run dev
```

Open [http://localhost:3000/customers](http://localhost:3000/customers).

## Quality checks

```bash
npx prisma validate
npx tsc --noEmit
npm run lint
npm run build
```
