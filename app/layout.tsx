import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GeneralBanner from "@/components/GeneralBanner";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sbvoterguide.com"),
  title: "South Burlington Voter Guide 2026 | November 3 General Election",
  description: "Your plain-English guide to the November 3, 2026 general election for South Burlington, VT — Governor, Lt. Governor, U.S. House, the Chittenden-Southeast Senate, your State House district, county offices, and Proposals 3 & 4. Plus August 11 primary results. A nonpartisan community resource.",
  keywords: ["South Burlington", "Vermont", "voter guide", "2026 election", "Vermont general election", "November 3 2026", "Vermont primary results", "Proposal 3", "Proposal 4", "Vermont legislature", "Chittenden County", "nonpartisan"],
  authors: [{ name: "South Burlington Voter Guide" }],
  openGraph: {
    title: "South Burlington Voter Guide 2026 — November 3 General Election",
    description: "Every race on your November 3 ballot, in plain English — Governor, legislature, U.S. House, county offices, and Proposals 3 & 4. Plus the August 11 primary results.",
    url: "https://www.sbvoterguide.com",
    type: "website",
    locale: "en_US",
    siteName: "South Burlington Voter Guide",
    // TODO(owner): public/og.png still reads "August 11 · South Burlington Primary".
    // Swap in a November 3 image; alt text below already describes the general.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "South Burlington Voter Guide — what's on your November 3 ballot?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Burlington Voter Guide 2026 — November 3 General Election",
    description: "Every race on your November 3 South Burlington ballot, in plain English. Plus the August 11 primary results.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${nunito.variable}`}>
      <body className="font-body bg-cream-100 min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:bg-white focus:text-sage-700 focus:font-medium focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-soft"
        >
          Skip to content
        </a>
        <GeneralBanner />
        <SiteNav />
        <div id="main" tabIndex={-1}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
