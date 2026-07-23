import type { ReactNode } from "react"
import Link from "next/link"
import { Hammer } from "lucide-react"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 px-4 py-12">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Hammer className="size-5" />
        </div>
        <span className="text-xl font-semibold tracking-tight">TradeOps</span>
      </Link>
      {children}
    </div>
  )
}
