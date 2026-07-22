// components/layout/dashboard-sidebar.tsx

import Link from "next/link";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  Settings,
  UserRoundCog,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: BriefcaseBusiness,
  },
  {
    href: "/customers",
    label: "Customers",
    icon: Users,
  },
  {
    href: "/technicians",
    label: "Technicians",
    icon: UserRoundCog,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background lg:block">
      <div className="sticky top-0 flex h-screen flex-col">
        <div className="flex h-16 items-center gap-2 border-b px-6 font-semibold">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="size-4" />
          </div>
          TradeOps
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start"
              >
                <Link href={item.href}>
                  <Icon className="mr-3 size-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <div className="rounded-lg bg-muted p-3">
            <p className="text-sm font-medium">Acme Security</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
