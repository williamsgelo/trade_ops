import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function CustomersLoading() {
  return (
    <>
      <PageHeader
        title="Customers"
        description="Manage customer details and job history."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <Card key={index} aria-hidden="true">
            <CardContent className="space-y-5 p-5">
              <div className="h-5 w-2/3 animate-pulse rounded bg-muted" />
              <div className="space-y-3">
                <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
