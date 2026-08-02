"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Persistent site navigation. Sticky bar with a wordmark (home) + links on
// desktop; a hamburger panel on mobile where every destination carries a
// one-line description — so the menu doubles as a map of what the site
// offers, not just a way to get around. Active page is highlighted.

const navItems: { href: string; label: string; desc: string }[] = [
  { href: "/primary", label: "Primary", desc: "Who's on your August 11 ballot" },
  { href: "/general", label: "General", desc: "The November 3 election" },
  { href: "/ballot-measures", label: "Ballot Measures", desc: "Proposals 3 & 4, explained" },
  { href: "/how-to-vote", label: "How to Vote", desc: "Register, mail ballots, drop boxes" },
  { href: "/sources", label: "Sources", desc: "Where every fact comes from" },
  { href: "/about", label: "About", desc: "Who makes this guide" },
  { href: "/archive", label: "Archive", desc: "March 2026 Town Meeting results" },
];

const BallotIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-warmgray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark → home */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors"
          >
            <BallotIcon />
            <span className="font-display font-bold text-warmgray-800 leading-none">
              <span className="hidden sm:inline">South Burlington </span>Voter Guide
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-sage-50 text-sage-700 font-semibold"
                      : "text-warmgray-600 hover:text-sage-700 hover:bg-warmgray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-warmgray-700 hover:bg-warmgray-100 transition-colors"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel — each item carries a description (doubles as a site map) */}
      {open && (
        <div className="lg:hidden border-t border-warmgray-100 bg-white">
          <ul className="max-w-5xl mx-auto px-4 sm:px-6 py-2 divide-y divide-warmgray-50">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex flex-col py-3 px-2 rounded-lg ${
                      active ? "bg-sage-50" : "hover:bg-warmgray-50"
                    }`}
                  >
                    <span className={`text-sm font-semibold ${active ? "text-sage-700" : "text-warmgray-800"}`}>
                      {item.label}
                    </span>
                    <span className="text-xs text-warmgray-500 mt-0.5">{item.desc}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
