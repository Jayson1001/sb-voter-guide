import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
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
  title: "South Burlington Election Results 2026 | Town Meeting Day",
  description: "Results from the March 3, 2026 South Burlington Town Meeting Day election. City Council, budget, fire station bond, and school budget results. A nonpartisan community resource.",
  keywords: ["South Burlington", "Vermont", "election results", "Town Meeting Day", "City Council", "2026", "Beth Zigmund", "Amy Allen", "budget", "fire station bond"],
  authors: [{ name: "South Burlington Voter Guide" }],
  openGraph: {
    title: "South Burlington Election Results 2026",
    description: "Results from the March 3, 2026 South Burlington Town Meeting Day election. City Council, budget, and ballot article results.",
    type: "website",
    locale: "en_US",
    siteName: "South Burlington Voter Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Burlington Election Results 2026",
    description: "Results from the March 3, 2026 South Burlington Town Meeting Day election. City Council, budget, and ballot article results.",
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
      <body className="font-body bg-cream-100 min-h-screen">{children}</body>
    </html>
  );
}
