"use client";

import { useEffect, useState } from "react";

// Live "X days until the general election" countdown. Same pattern as
// PrimaryCountdown: computed on the client so a stale static build never
// shows a wrong number. Uses Vermont time, not the viewer's, so polls
// "close" at 7 PM Eastern for everyone.
const GENERAL_ISO = "2026-11-03";
const POLLS_CLOSE_HOUR = 19;

// The City posts each election's results as a new page under this one.
export const CITY_RESULTS = "https://www.southburlingtonvt.gov/567/Election-Results";

function vermontNow(): { y: number; m: number; d: number; hour: number } {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      hourCycle: "h23",
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value])
  );
  return { y: +parts.year, m: +parts.month, d: +parts.day, hour: +parts.hour };
}

export function daysUntilGeneral(): number {
  const [y, m, d] = GENERAL_ISO.split("-").map(Number);
  const now = vermontNow();
  return Math.round((Date.UTC(y, m - 1, d) - Date.UTC(now.y, now.m - 1, now.d)) / 86_400_000);
}

// "before" → countdown; "day" → polls open; "closed" → 7 PM Election Day onward.
export type ElectionPhase = "before" | "day" | "closed";

export function electionPhase(): ElectionPhase {
  const days = daysUntilGeneral();
  if (days > 0) return "before";
  if (days === 0 && vermontNow().hour < POLLS_CLOSE_HOUR) return "day";
  return "closed";
}

const badgeClass =
  "inline-flex items-center gap-4 bg-terracotta-500 text-white rounded-2xl pl-5 pr-6 py-3 mb-6 shadow-lg ring-4 ring-white/25";

const Pulse = () => (
  <span className="relative flex h-3 w-3 flex-shrink-0" aria-hidden="true">
    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
    <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
  </span>
);

// Hero headline badge: "X Days Until Election Day" in terracotta so it pops
// against the sage hero. Shows "Election Day · Nov 3" until it mounts. Once
// polls close it becomes a link to the City's results.
export function ElectionDayBadge() {
  const [days, setDays] = useState<number | null>(null);
  const [phase, setPhase] = useState<ElectionPhase | null>(null);

  useEffect(() => {
    setDays(daysUntilGeneral());
    setPhase(electionPhase());
  }, []);

  if (phase === "closed") {
    return (
      <a
        href={CITY_RESULTS}
        target="_blank"
        rel="noopener noreferrer"
        className={`${badgeClass} hover:bg-terracotta-600 transition-colors`}
      >
        <Pulse />
        <span className="text-left">
          <span className="block font-display text-2xl sm:text-3xl font-bold">
            {days === 0 ? "Polls Are Closed" : "Election Results"} &rarr;
          </span>
          <span className="block text-sm sm:text-base text-terracotta-50">
            South Burlington results from the City Clerk
          </span>
        </span>
      </a>
    );
  }

  return (
    <div className={badgeClass}>
      <Pulse />
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
