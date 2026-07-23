import { LogOut } from "lucide-react";

import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignOutButton({ compact = false }: { compact?: boolean }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/login" });
      }}
    >
      <Button
        type="submit"
        variant="ghost"
        size={compact ? "icon" : "default"}
        className={compact ? undefined : "w-full justify-start"}
        aria-label={compact ? "Sign out" : undefined}
        title={compact ? "Sign out" : undefined}
      >
        <LogOut className={compact ? "size-4" : "mr-3 size-4"} />
        {compact ? <span className="sr-only">Sign out</span> : "Sign out"}
      </Button>
    </form>
  );
}
