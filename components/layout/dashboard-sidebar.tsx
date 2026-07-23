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
import { SignOutButton } from "@/components/layout/sign-out-button";

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

type DashboardSidebarProps = {
  user: {
    name?: string | null;
    email?: string | null;
  };
};

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const displayName = user.name ?? user.email ?? "TradeOps user";

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
            <p className="truncate text-sm font-medium">{displayName}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
          <SignOutButton />
        </div>
      </div>
    </aside>
  );
}
