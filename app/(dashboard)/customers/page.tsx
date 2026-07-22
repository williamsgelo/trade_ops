// app/(dashboard)/customers/page.tsx

import { Plus, Search } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const customers = [
  {
    name: "Williams Residence",
    contact: "Angelo Williams",
    phone: "082 123 4567",
    jobs: 4,
  },
  {
    name: "Greenview Estate",
    contact: "Sarah Jacobs",
    phone: "083 555 0198",
    jobs: 12,
  },
  {
    name: "Corner Café",
    contact: "Michael Naidoo",
    phone: "071 401 8864",
    jobs: 2,
  },
];

export default function CustomersPage() {
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

      <div className="relative mb-5 max-w-md">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search customers..." className="pl-9" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {customers.map((customer) => (
          <Card key={customer.name}>
            <CardContent className="p-5">
              <p className="font-semibold">{customer.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {customer.contact}
              </p>
              <p className="text-sm text-muted-foreground">{customer.phone}</p>

              <div className="mt-5 border-t pt-4 text-sm">
                {customer.jobs} previous jobs
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
