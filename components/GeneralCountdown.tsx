"use client";

import { useEffect, useState } from "react";

// Live "X days until the general election" badge. Same pattern as
// PrimaryCountdown: computed on the client from the viewer's local date so a
// stale static build never shows a wrong number. Renders a neutral "Nov 3"
// placeholder until it mounts (avoids hydration mismatch) and degrades
// gracefully on/after Election Day.
const GENERAL_ISO = "2026-11-03";

export function daysUntilGeneral(): number {
  const [y, m, d] = GENERAL_ISO.split("-").map(Number);
  const general = new Date(y, m - 1, d);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((general.getTime() - today.getTime()) / 86_400_000);
}

export default function GeneralCountdown({ tone = "sage" }: { tone?: "sage" | "terracotta" }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(daysUntilGeneral());
  }, []);

  const sub = tone === "terracotta" ? "text-terracotta-50" : "text-sage-50";

  return (
    <div className="bg-white/15 backdrop-blur-sm rounded-2xl w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center text-center px-2 text-white">
      {days === null ? (
        <span className="font-display text-2xl font-bold leading-tight">Nov 3</span>
      ) : days > 0 ? (
        <>
          <span className="font-display text-5xl font-bold leading-none">{days}</span>
          <span className={`${sub} text-xs font-semibold uppercase tracking-wide mt-1.5`}>
            {days === 1 ? "day" : "days"} to go
          </span>
        </>
      ) : days === 0 ? (
        <span className="font-display text-xl font-bold leading-tight">Election<br />is today</span>
      ) : (
        <span className="font-display text-sm font-bold leading-tight">Election<br />has passed</span>
      )}
    </div>
  );
}
