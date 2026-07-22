// app/(dashboard)/layout.tsx

import type { ReactNode } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  Settings,
  UserRoundCog,
  Users,
} from "lucide-react";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

const mobileNavigation = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Home" },
  { href: "/jobs", icon: BriefcaseBusiness, label: "Jobs" },
  { href: "/customers", icon: Users, label: "Customers" },
  { href: "/technicians", icon: UserRoundCog, label: "Team" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/20">
      <div className="flex">
        <DashboardSidebar />

        <div className="min-w-0 flex-1">
          <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
            <div>
              <p className="text-sm font-medium">Acme Security</p>
              <p className="text-xs text-muted-foreground">
                Johannesburg, South Africa
              </p>
            </div>

            <div className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              AW
            </div>
          </header>

          <main className="p-4 pb-24 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t bg-background p-2 lg:hidden">
        {mobileNavigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-w-14 flex-col items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground"
            >
              <Icon className="size-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
