// app/(dashboard)/jobs/page.tsx

import Link from "next/link";
import { Plus, Search } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const jobs = [
  {
    id: "JOB-001",
    title: "CCTV camera installation",
    customer: "Williams Residence",
    technician: "Thabo Mokoena",
    date: "22 July 2026",
    status: "In progress",
  },
  {
    id: "JOB-002",
    title: "Gate motor inspection",
    customer: "Greenview Estate",
    technician: "Sipho Dlamini",
    date: "22 July 2026",
    status: "Scheduled",
  },
  {
    id: "JOB-003",
    title: "Alarm system repair",
    customer: "Corner Café",
    technician: "Unassigned",
    date: "23 July 2026",
    status: "New",
  },
];

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Jobs"
        description="Create, assign and track customer jobs."
        action={
          <Button>
            <Link href="/jobs/new">
              <Plus className="mr-2 size-4" />
              New job
            </Link>
          </Button>
        }
      />

      <div className="relative mb-5 max-w-md">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search jobs..." className="pl-9" />
      </div>

      <div className="space-y-3">
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <Card className="mb-3 transition hover:bg-muted/30">
              <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{job.title}</p>
                    <Badge variant="outline">{job.status}</Badge>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.id} · {job.customer}
                  </p>
                </div>

                <div className="text-sm sm:text-right">
                  <p>{job.technician}</p>
                  <p className="text-muted-foreground">{job.date}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
