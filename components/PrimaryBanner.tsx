"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Slim, sitewide top bar that pushes visitors on any page toward /primary,
// with a live day counter. Hides itself on the /primary page (you're already
// there) and once the primary has passed. Computed client-side so a stale
// static build never shows a wrong day count.
const PRIMARY_ISO = "2026-08-11";

function daysUntilPrimary(): number {
  const [y, m, d] = PRIMARY_ISO.split("-").map(Number);
  const primary = new Date(y, m - 1, d);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((primary.getTime() - today.getTime()) / 86_400_000);
}

export default function PrimaryBanner() {
  const pathname = usePathname();
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysUntilPrimary());
  }, []);

  // Hide on the homepage (its hero already has a countdown), on the primary
  // page itself, and once the primary has passed.
  if (pathname === "/" || pathname?.startsWith("/primary")) return null;
  if (days !== null && days < 0) return null;

  const countLabel =
    days === null ? null : days === 0 ? "Today" : `${days} day${days === 1 ? "" : "s"} left`;

  return (
    <Link
      href="/primary"
      className="block bg-sage-600 hover:bg-sage-700 text-white transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-sm text-center">
        <span className="font-semibold">
          <span aria-hidden="true">🗳️</span> Vermont Primary · August 11
        </span>
        {countLabel && <span className="text-sage-100">· {countLabel}</span>}
        <span className="underline underline-offset-2 font-medium">
          See who&apos;s on your ballot &rarr;
        </span>
      </div>
    </Link>
  );
}
