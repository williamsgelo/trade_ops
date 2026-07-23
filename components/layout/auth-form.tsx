"use client"

import { useRouter } from "next/navigation"
import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter()

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // UI-only MVP: no real authentication yet.
    router.push("/dashboard")
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldGroup>
        {mode === "register" ? (
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" name="name" placeholder="Alex Owner" required />
          </Field>
        ) : null}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" name="password" type="password" required />
        </Field>
        <Button type="submit" className="w-full">
          {mode === "register" ? "Create account" : "Sign in"}
        </Button>
      </FieldGroup>
    </form>
  )
}
