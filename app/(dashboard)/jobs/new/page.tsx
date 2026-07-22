// app/(dashboard)/jobs/new/page.tsx

import { Save } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NewJobPage() {
  return (
    <>
      <PageHeader
        title="Create job"
        description="Add the job details and assign a technician."
      />

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Job details</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="customer">Customer</Label>

              <Select>
                <SelectTrigger id="customer">
                  <SelectValue placeholder="Select a customer" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="williams">Williams Residence</SelectItem>
                  <SelectItem value="greenview">Greenview Estate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Job title</Label>
              <Input id="title" placeholder="CCTV camera installation" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the work required..."
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Job address</Label>
              <Input id="address" placeholder="24 Main Road, Johannesburg" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Scheduled date</Label>
                <Input id="date" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Scheduled time</Label>
                <Input id="time" type="time" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Technician</Label>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Assign technician" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="thabo">Thabo Mokoena</SelectItem>
                    <SelectItem value="sipho">Sipho Dlamini</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Priority</Label>

                <Select defaultValue="normal">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline">
                Cancel
              </Button>

              <Button type="submit">
                <Save className="mr-2 size-4" />
                Create job
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
