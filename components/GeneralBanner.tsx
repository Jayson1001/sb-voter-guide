"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { daysUntilGeneral } from "@/components/GeneralCountdown";

// Slim, sitewide top bar that points visitors on any page toward /general,
// with a live day counter. Successor to PrimaryBanner (retired after the
// Aug 11 primary). Hides on the homepage (its hero already has a countdown),
// on /general itself, and once Election Day has passed. Computed client-side
// so a stale static build never shows a wrong day count.
export default function GeneralBanner() {
  const pathname = usePathname();
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysUntilGeneral());
  }, []);

  if (pathname === "/" || pathname?.startsWith("/general")) return null;
  if (days !== null && days < 0) return null;

  const countLabel =
    days === null ? null : days === 0 ? "Today" : `${days} day${days === 1 ? "" : "s"} left`;

  return (
    <Link
      href="/general"
      className="block bg-sage-600 hover:bg-sage-700 text-white transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-sm text-center">
        <span className="font-semibold">
          <span aria-hidden="true">🗳️</span> General Election · November 3
        </span>
        {countLabel && <span className="text-terracotta-100">· {countLabel}</span>}
        <span className="underline underline-offset-2 font-medium">
          See what&apos;s on your ballot &rarr;
        </span>
      </div>
    </Link>
  );
}
