"use client";

import { useEffect, useState } from "react";

// Live "X days until the general election" countdown. Same pattern as
// PrimaryCountdown: computed on the client from the viewer's local date so a
// stale static build never shows a wrong number.
const GENERAL_ISO = "2026-11-03";

export function daysUntilGeneral(): number {
  const [y, m, d] = GENERAL_ISO.split("-").map(Number);
  const general = new Date(y, m - 1, d);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((general.getTime() - today.getTime()) / 86_400_000);
}

// Hero headline badge: "X Days Until Election Day" in terracotta so it pops
// against the sage hero. Shows "Election Day · Nov 3" until it mounts, and
// disappears once Election Day has passed.
export function ElectionDayBadge() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysUntilGeneral());
  }, []);

  if (days !== null && days < 0) return null;

  return (
    <div className="inline-flex items-center gap-4 bg-terracotta-500 text-white rounded-2xl pl-5 pr-6 py-3 mb-6 shadow-lg ring-4 ring-white/25">
      <span className="relative flex h-3 w-3 flex-shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      {days === null ? (
        <span className="font-display text-2xl sm:text-3xl font-bold">Election Day &middot; Nov 3</span>
      ) : days === 0 ? (
        <span className="font-display text-2xl sm:text-3xl font-bold">Election Day Is Today!</span>
      ) : (
        <span className="flex items-center gap-3 text-left">
          <span className="font-display text-5xl sm:text-6xl font-bold leading-none">{days}</span>
          <span className="font-display text-lg sm:text-2xl font-bold uppercase tracking-wide leading-tight">
            {days === 1 ? "Day" : "Days"} Until
            <br />
            Election Day
          </span>
        </span>
      )}
    </div>
  );
}
