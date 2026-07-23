import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginSchema } from "@/lib/auth-validation";
import { prisma } from "@/lib/db";

// Comparing against a valid fallback hash keeps failed login work similar when
// an account is missing or does not have a password.
const FALLBACK_PASSWORD_HASH =
  "$2b$12$WjMcN3L3sRjD1JOKJNOeqeAIcWppFAu/QuyK6vY4ZkM1Hy5gBqU4e";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            passwordHash: true,
            role: true,
            organizationId: true,
          },
        });
        const passwordMatches = await compare(
          password,
          user?.passwordHash ?? FALLBACK_PASSWORD_HASH,
        );

        if (!user?.passwordHash || !passwordMatches) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          organizationId: user.organizationId,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id;
        token.role = user.role;
        token.organizationId = user.organizationId;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.organizationId = token.organizationId;

      return session;
    },
  },
});
