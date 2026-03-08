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
  title: "South Burlington Voter Guide 2026 | Primary & General Elections",
  description: "Your complete guide to the 2026 elections for South Burlington, VT residents. Covers the Vermont Primary (August 11) and General Election (November 3) — Governor, legislature, U.S. House, Proposals 3 & 4, and more. A nonpartisan community resource.",
  keywords: ["South Burlington", "Vermont", "voter guide", "2026 election", "Vermont primary", "Vermont general election", "Governor Phil Scott", "Becca Balint", "Proposal 3", "Proposal 4", "Vermont legislature", "Chittenden County", "nonpartisan"],
  authors: [{ name: "South Burlington Voter Guide" }],
  openGraph: {
    title: "South Burlington Voter Guide 2026",
    description: "Complete guide to the 2026 Vermont Primary (Aug 11) and General Election (Nov 3) for South Burlington residents. Governor, legislature, ballot measures, and more.",
    type: "website",
    locale: "en_US",
    siteName: "South Burlington Voter Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Burlington Voter Guide 2026",
    description: "Complete guide to the 2026 Vermont Primary and General Election for South Burlington residents.",
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
