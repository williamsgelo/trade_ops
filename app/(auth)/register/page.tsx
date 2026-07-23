import Link from "next/link"
import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { AuthForm } from "@/components/layout/auth-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function RegisterPage() {
  const session = await auth()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>Start managing your field service business.</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm mode="register" />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-foreground hover:underline">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
