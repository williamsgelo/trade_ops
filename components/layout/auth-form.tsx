"use client"

import { useActionState } from "react"
import { loginAction, registerAction } from "@/app/(auth)/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { INITIAL_AUTH_FORM_STATE } from "@/lib/auth-validation"

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const action = mode === "register" ? registerAction : loginAction
  const [state, formAction, pending] = useActionState(
    action,
    INITIAL_AUTH_FORM_STATE,
  )

  return (
    <form action={formAction} noValidate>
      <FieldGroup>
        {mode === "register" ? (
          <Field data-invalid={Boolean(state.fieldErrors?.name)}>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Alex Owner"
              minLength={2}
              maxLength={100}
              aria-invalid={Boolean(state.fieldErrors?.name)}
              aria-describedby={
                state.fieldErrors?.name ? "name-error" : undefined
              }
              required
            />
            <FieldError id="name-error">
              {state.fieldErrors?.name?.[0]}
            </FieldError>
          </Field>
        ) : null}
        <Field data-invalid={Boolean(state.fieldErrors?.email)}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            maxLength={254}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={
              state.fieldErrors?.email ? "email-error" : undefined
            }
            required
          />
          <FieldError id="email-error">
            {state.fieldErrors?.email?.[0]}
          </FieldError>
        </Field>
        <Field data-invalid={Boolean(state.fieldErrors?.password)}>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete={mode === "register" ? "new-password" : "current-password"}
            minLength={mode === "register" ? 8 : 1}
            maxLength={72}
            aria-invalid={Boolean(state.fieldErrors?.password)}
            aria-describedby={
              state.fieldErrors?.password
                ? "password-error"
                : mode === "register"
                  ? "password-description"
                  : undefined
            }
            required
          />
          {mode === "register" ? (
            <FieldDescription id="password-description">
              Use at least 8 characters.
            </FieldDescription>
          ) : null}
          <FieldError id="password-error">
            {state.fieldErrors?.password?.[0]}
          </FieldError>
        </Field>
        {state.error ? <FieldError>{state.error}</FieldError> : null}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending
            ? mode === "register"
              ? "Creating account..."
              : "Signing in..."
            : mode === "register"
              ? "Create account"
              : "Sign in"}
        </Button>
      </FieldGroup>
    </form>
  )
}
