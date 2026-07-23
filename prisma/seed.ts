import "dotenv/config";

import { prisma } from "../lib/db";
import { DEVELOPMENT_ORGANIZATION_ID } from "../lib/development";

const ownerEmail = "owner@tradeops.local";

const customers = [
  {
    id: "tradeops-customer-williams",
    name: "Williams Residence",
    phone: "082 123 4567",
    email: "angelo.williams@example.com",
    address: "18 Oxford Road, Rosebank, Johannesburg",
    isActive: true,
    createdAt: new Date("2026-07-20T08:00:00.000Z"),
  },
  {
    id: "tradeops-customer-greenview",
    name: "Greenview Estate",
    phone: "083 555 0198",
    email: "manager@greenview.example.com",
    address: "42 Main Road, Bryanston, Johannesburg",
    isActive: true,
    createdAt: new Date("2026-07-21T08:00:00.000Z"),
  },
  {
    id: "tradeops-customer-corner-cafe",
    name: "Corner Cafe",
    phone: "071 401 8864",
    email: "hello@cornercafe.example.com",
    address: "7 Commissioner Street, Johannesburg",
    isActive: false,
    createdAt: new Date("2026-07-22T08:00:00.000Z"),
  },
];

async function main() {
  await prisma.organization.upsert({
    where: { id: DEVELOPMENT_ORGANIZATION_ID },
    update: { name: "TradeOps Development" },
    create: {
      id: DEVELOPMENT_ORGANIZATION_ID,
      name: "TradeOps Development",
    },
  });

  await prisma.user.upsert({
    where: { email: ownerEmail },
    update: {
      name: "Development Owner",
      role: "OWNER",
      organizationId: DEVELOPMENT_ORGANIZATION_ID,
    },
    create: {
      name: "Development Owner",
      email: ownerEmail,
      role: "OWNER",
      organizationId: DEVELOPMENT_ORGANIZATION_ID,
    },
  });

  for (const customer of customers) {
    const { id, createdAt, ...data } = customer;

    await prisma.customer.upsert({
      where: { id },
      update: {
        ...data,
        organizationId: DEVELOPMENT_ORGANIZATION_ID,
      },
      create: {
        id,
        ...data,
        createdAt,
        organizationId: DEVELOPMENT_ORGANIZATION_ID,
      },
    });
  }

  console.log(
    `Seeded 1 organization, 1 owner, and ${customers.length} customers.`,
  );
}

main()
  .catch((error) => {
    console.error("Database seed failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
