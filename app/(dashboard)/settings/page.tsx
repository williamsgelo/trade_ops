// app/(dashboard)/settings/page.tsx

import { Save } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage your organisation details."
      />

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Business information</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business name</Label>
              <Input id="business-name" defaultValue="Acme Security" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="admin@acmesecurity.co.za"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Business phone</Label>
              <Input id="phone" defaultValue="011 555 0199" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Business address</Label>
              <Input id="address" defaultValue="Johannesburg, South Africa" />
            </div>

            <Button type="submit">
              <Save className="mr-2 size-4" />
              Save changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
