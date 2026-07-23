// app/(dashboard)/layout.tsx

import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  Settings,
  UserRoundCog,
  Users,
} from "lucide-react";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { SignOutButton } from "@/components/layout/sign-out-button";
import { auth } from "@/auth";

const mobileNavigation = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Home" },
  { href: "/jobs", icon: BriefcaseBusiness, label: "Jobs" },
  { href: "/customers", icon: Users, label: "Customers" },
  { href: "/technicians", icon: UserRoundCog, label: "Team" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

function getInitials(name: string | null | undefined, email: string | null | undefined) {
  const source = name?.trim() || email?.trim() || "User";
  const parts = source.split(/\s+/).filter(Boolean);

  return (parts.length > 1
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : source.slice(0, 2)
  ).toUpperCase();
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const displayName = session.user.name ?? session.user.email ?? "TradeOps user";
  const initials = getInitials(session.user.name, session.user.email);

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="flex">
        <DashboardSidebar user={session.user} />

        <div className="min-w-0 flex-1">
          <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
            <div>
              <p className="text-sm font-medium">{displayName}</p>
              <p className="text-xs text-muted-foreground">
                {session.user.email}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                aria-label={`${displayName} profile`}
              >
                {initials}
              </div>
              <div className="lg:hidden">
                <SignOutButton compact />
              </div>
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
