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

export default async function LoginPage() {
  const session = await auth()

  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your TradeOps account.</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthForm mode="login" />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-foreground hover:underline">
            Create one
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
