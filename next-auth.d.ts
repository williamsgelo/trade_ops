import type { DefaultSession } from "next-auth";
import type { UserRole } from "@/lib/generated/prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      organizationId: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    role: UserRole;
    organizationId: string | null;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    organizationId: string | null;
  }
}
