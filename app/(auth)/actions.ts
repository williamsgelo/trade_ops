"use server";

import { hash } from "bcryptjs";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { signIn } from "@/auth";
import {
  getAuthFieldErrors,
  loginSchema,
  registerSchema,
  type AuthFormState,
} from "@/lib/auth-validation";
import { prisma } from "@/lib/db";

const GENERIC_LOGIN_ERROR = "Invalid email or password.";
const GENERIC_REGISTRATION_ERROR =
  "Unable to create an account with those details.";

function getSubmittedCredentials(formData: FormData) {
  return {
    email: formData.get("email"),
    password: formData.get("password"),
  };
}

export async function loginAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const parsedCredentials = loginSchema.safeParse(
    getSubmittedCredentials(formData),
  );

  if (!parsedCredentials.success) {
    return {
      fieldErrors: getAuthFieldErrors(parsedCredentials.error),
    };
  }

  try {
    await signIn("credentials", {
      ...parsedCredentials.data,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: GENERIC_LOGIN_ERROR };
    }

    console.error("Unable to sign in.", error);
    return { error: GENERIC_LOGIN_ERROR };
  }

  redirect("/dashboard");
}

export async function registerAction(
  _previousState: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const parsedRegistration = registerSchema.safeParse({
    name: formData.get("name"),
    ...getSubmittedCredentials(formData),
  });

  if (!parsedRegistration.success) {
    return {
      fieldErrors: getAuthFieldErrors(parsedRegistration.error),
    };
  }

  const { name, email, password } = parsedRegistration.data;

  // new check added

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      error: "An account with this email already exists.",
    };
  }

  // end of new check

  try {
    const passwordHash = await hash(password, 12);

    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
  } catch (error) {
    console.error("Unable to register account.", error);
    return { error: GENERIC_REGISTRATION_ERROR };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    console.error("Unable to sign in after registration.", error);
    return { error: GENERIC_REGISTRATION_ERROR };
  }

  redirect("/dashboard");
}
