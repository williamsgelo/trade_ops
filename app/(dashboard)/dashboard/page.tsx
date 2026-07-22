// app/(dashboard)/dashboard/page.tsx

import Link from "next/link";
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Plus,
} from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    label: "Jobs today",
    value: "6",
    icon: BriefcaseBusiness,
  },
  {
    label: "In progress",
    value: "3",
    icon: Clock3,
  },
  {
    label: "Overdue",
    value: "2",
    icon: AlertCircle,
  },
  {
    label: "Completed this week",
    value: "18",
    icon: CheckCircle2,
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="An overview of your current operations."
        action={
          <Button>
            <Link href="/jobs/new">
              <Plus className="mr-2 size-4" />
              New job
            </Link>
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.label}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Today&apos;s jobs</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {[
            {
              title: "CCTV installation",
              customer: "Williams Residence",
              time: "09:00",
              status: "In progress",
            },
            {
              title: "Gate motor inspection",
              customer: "Greenview Estate",
              time: "11:30",
              status: "Scheduled",
            },
            {
              title: "Electric fence repair",
              customer: "Rosebank Offices",
              time: "14:00",
              status: "Scheduled",
            },
          ].map((job) => (
            <Link
              href="/jobs/job-001"
              key={job.title}
              className="flex items-center justify-between rounded-lg border p-4 transition hover:bg-muted/40"
            >
              <div>
                <p className="font-medium">{job.title}</p>
                <p className="text-sm text-muted-foreground">
                  {job.customer} · {job.time}
                </p>
              </div>

              <Badge variant="outline">{job.status}</Badge>
            </Link>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
