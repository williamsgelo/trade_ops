// app/(dashboard)/jobs/[jobId]/page.tsx

import {
  Camera,
  CheckCircle2,
  Clock3,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function JobDetailsPage() {
  return (
    <>
      <PageHeader
        title="CCTV camera installation"
        description="JOB-001"
        action={<Badge>In progress</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Job information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex gap-3">
                <UserRound className="mt-0.5 size-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Williams Residence</p>
                  <p className="text-sm text-muted-foreground">Customer</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">082 123 4567</p>
                  <p className="text-sm text-muted-foreground">
                    Contact number
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">24 Main Road, Johannesburg</p>
                  <p className="text-sm text-muted-foreground">Job location</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3 className="mt-0.5 size-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">22 July 2026 at 09:00</p>
                  <p className="text-sm text-muted-foreground">
                    Scheduled time
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job notes</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <Textarea
                placeholder="Add notes about the work completed..."
                rows={5}
              />

              <Button>Add note</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>

            <CardContent>
              <button className="flex min-h-36 w-full flex-col items-center justify-center rounded-lg border border-dashed text-muted-foreground transition hover:bg-muted/30">
                <Camera className="mb-2 size-6" />
                <span className="text-sm font-medium">Upload job photos</span>
                <span className="mt-1 text-xs">
                  Before, during or after completion
                </span>
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assigned technician</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="font-medium">Thabo Mokoena</p>
              <p className="text-sm text-muted-foreground">Field technician</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job actions</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <Button className="w-full">
                <CheckCircle2 className="mr-2 size-4" />
                Complete job
              </Button>

              <Button variant="outline" className="w-full">
                Request customer signature
              </Button>

              <Button variant="outline" className="w-full">
                Edit job
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
