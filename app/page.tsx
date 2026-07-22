// app/page.tsx

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Users,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Manage jobs",
    description:
      "Create, schedule and track every customer job from one dashboard.",
    icon: ClipboardCheck,
  },
  {
    title: "Assign technicians",
    description:
      "Give technicians clear job details, locations and scheduled times.",
    icon: Users,
  },
  {
    title: "Capture job evidence",
    description:
      "Upload before-and-after photos, notes and customer signatures.",
    icon: Camera,
  },
  {
    title: "Stay organised",
    description:
      "See upcoming, overdue, active and completed work at a glance.",
    icon: CalendarDays,
  },
];

const benefits = [
  "Create and assign jobs in minutes",
  "Mobile-friendly technician workflow",
  "Store photos, notes and signatures",
  "Keep customers and job history together",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="border-b">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="mb-5 w-fit">
                Built for field-service teams
              </Badge>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Run your field-service business without the admin chaos.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                TradeOps helps security installers and trade businesses manage
                customers, technicians, jobs, photos and customer sign-off from
                one simple platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg">
                  <Link href="/register">
                    Start free
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline">
                  <Link href="/login">View demo</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="size-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Today&apos;s jobs
                    </p>
                    <CardTitle className="mt-1">Operations overview</CardTitle>
                  </div>

                  <Badge>4 active</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 p-6">
                {[
                  {
                    title: "CCTV camera installation",
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
                    title: "Alarm system repair",
                    customer: "Corner Café",
                    time: "14:00",
                    status: "Scheduled",
                  },
                ].map((job) => (
                  <div
                    key={job.title}
                    className="flex items-start justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium">{job.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {job.customer} · {job.time}
                      </p>
                    </div>

                    <Badge variant="outline">{job.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary">Core features</Badge>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Everything needed to complete a job properly
            </h2>

            <p className="mt-4 text-muted-foreground">
              Start with a focused workflow designed around real field-service
              operations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <CardTitle className="pt-3 text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="how-it-works" className="border-y bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                One simple job workflow
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                "Create the customer",
                "Schedule and assign the job",
                "Technician completes the work",
                "Customer signs off",
              ].map((step, index) => (
                <div key={step} className="rounded-xl border bg-background p-6">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {index + 1}
                  </div>

                  <p className="mt-5 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8"
        >
          <Badge variant="secondary">Pilot pricing</Badge>

          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Start simple and grow with your team
          </h2>

          <Card className="mx-auto mt-10 max-w-md">
            <CardHeader>
              <CardTitle>TradeOps Starter</CardTitle>
              <p className="text-muted-foreground">
                For small installation and service teams.
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-4xl font-bold">
                R499
                <span className="text-base font-normal text-muted-foreground">
                  /month
                </span>
              </p>

              <Button className="mt-6 w-full">
                <Link href="/register">Start your pilot</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
