import { connection } from "next/server";
import {
  AlertCircle,
  Mail,
  MapPin,
  Phone,
  Plus,
  Users,
} from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import { auth } from "@/auth";

async function loadCustomers(organizationId: string | null) {
  await connection();

  if (!organizationId) {
    return { customers: [], failed: false as const };
  }

  try {
    const customers = await prisma.customer.findMany({
      where: {
        organizationId,
      },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      select: {
        id: true,
        name: true,
        phone: true,
        email: true,
        address: true,
        isActive: true,
      },
    });

    return { customers, failed: false as const };
  } catch (error) {
    console.error("Unable to load customers from the database.", error);
    return { customers: [], failed: true as const };
  }
}

export default async function CustomersPage() {
  const session = await auth();
  const result = await loadCustomers(session?.user.organizationId ?? null);

  return (
    <>
      <PageHeader
        title="Customers"
        description="Manage customer details and job history."
        action={
          <Button>
            <Plus className="mr-2 size-4" />
            Add customer
          </Button>
        }
      />

      {result.failed ? (
        <Card>
          <CardContent className="flex min-h-52 flex-col items-center justify-center p-6 text-center">
            <AlertCircle className="size-9 text-destructive" />
            <h2 className="mt-4 font-semibold">Customers are unavailable</h2>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              We could not load customer records. Check the database connection
              and try again.
            </p>
          </CardContent>
        </Card>
      ) : result.customers.length === 0 ? (
        <Card>
          <CardContent className="flex min-h-52 flex-col items-center justify-center p-6 text-center">
            <Users className="size-9 text-muted-foreground" />
            <h2 className="mt-4 font-semibold">No customers yet</h2>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Customer records will appear here after they are added.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {result.customers.map((customer) => (
            <Card key={customer.id}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-semibold leading-5">{customer.name}</p>
                  <Badge
                    variant={customer.isActive ? "secondary" : "outline"}
                    className={
                      customer.isActive
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : undefined
                    }
                  >
                    {customer.isActive ? "Active" : "Inactive"}
                  </Badge>
                </div>

                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <dt className="sr-only">Phone</dt>
                      <dd className="break-words">
                        {customer.phone ?? "Not provided"}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <dt className="sr-only">Email</dt>
                      <dd className="break-words">
                        {customer.email ?? "Not provided"}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <dt className="sr-only">Address</dt>
                      <dd className="break-words text-muted-foreground">
                        {customer.address ?? "Not provided"}
                      </dd>
                    </div>
                  </div>
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
