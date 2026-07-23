import { z } from "zod";

const emailSchema = z
  .email("Enter a valid email address.")
  .max(254, "Email must be 254 characters or fewer.")
  .transform((email) => email.trim().toLowerCase());

export const loginSchema = z.object({
  email: emailSchema,
  password: z
    .string()
    .min(1, "Enter your password.")
    .max(72, "Password must be 72 characters or fewer."),
});

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be 100 characters or fewer."),
  email: emailSchema,
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(72, "Password must be 72 characters or fewer."),
});

export type AuthField = "name" | "email" | "password";

export type AuthFormState = {
  error?: string;
  fieldErrors?: Partial<Record<AuthField, string[]>>;
};

export const INITIAL_AUTH_FORM_STATE: AuthFormState = {};

export function getAuthFieldErrors(
  error: z.ZodError,
): AuthFormState["fieldErrors"] {
  const fieldErrors: AuthFormState["fieldErrors"] = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (
      field === "name" ||
      field === "email" ||
      field === "password"
    ) {
      fieldErrors[field] = [...(fieldErrors[field] ?? []), issue.message];
    }
  }

  return fieldErrors;
}
