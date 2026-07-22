// app/(dashboard)/technicians/page.tsx

import { Plus } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const technicians = [
  {
    name: "Thabo Mokoena",
    email: "thabo@tradeops.co.za",
    activeJobs: 3,
    status: "Active",
  },
  {
    name: "Sipho Dlamini",
    email: "sipho@tradeops.co.za",
    activeJobs: 2,
    status: "Active",
  },
];

export default function TechniciansPage() {
  return (
    <>
      <PageHeader
        title="Technicians"
        description="Manage your field-service team."
        action={
          <Button>
            <Plus className="mr-2 size-4" />
            Add technician
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {technicians.map((technician) => (
          <Card key={technician.email}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {technician.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <Badge variant="secondary">{technician.status}</Badge>
              </div>

              <p className="mt-4 font-semibold">{technician.name}</p>
              <p className="text-sm text-muted-foreground">
                {technician.email}
              </p>

              <p className="mt-5 border-t pt-4 text-sm">
                {technician.activeJobs} active jobs
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
