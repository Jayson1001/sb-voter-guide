"use client";

import { useEffect, useState } from "react";

// Live "X days until the primary" badge. Computed on the client from the
// viewer's local date so a stale static build never shows a wrong number.
// Renders a neutral "Aug 11" placeholder until it mounts (avoids hydration
// mismatch) and degrades gracefully on/after Election Day.
const PRIMARY_ISO = "2026-08-11";

function daysUntilPrimary(): number {
  const [y, m, d] = PRIMARY_ISO.split("-").map(Number);
  const primary = new Date(y, m - 1, d);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((primary.getTime() - today.getTime()) / 86_400_000);
}

export default function PrimaryCountdown() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysUntilPrimary());
  }, []);

  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-2xl w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center px-2">
      {days === null ? (
        <span className="font-display text-2xl font-bold leading-tight">Aug 11</span>
      ) : days > 0 ? (
        <>
          <span className="font-display text-5xl font-bold leading-none">{days}</span>
          <span className="text-sage-50 text-xs font-semibold uppercase tracking-wide mt-1.5">
            {days === 1 ? "day" : "days"} to go
          </span>
        </>
      ) : days === 0 ? (
        <span className="font-display text-xl font-bold leading-tight">Primary<br />is today</span>
      ) : (
        <span className="font-display text-sm font-bold leading-tight">Primary<br />has passed</span>
      )}
    </div>
  );
}
