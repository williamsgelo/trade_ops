// components/layout/site-footer.tsx

import Link from "next/link";
import { Wrench } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Wrench className="size-4" />
            TradeOps
          </Link>

          <p className="mt-2 text-sm text-muted-foreground">
            Simple field-service management for growing trade businesses.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
          <Link
            href="mailto:hello@tradeops.co.za"
            className="hover:text-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
