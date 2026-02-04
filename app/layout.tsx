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
  title: "South Burlington Voter Guide 2026",
  description: "Compare candidates for the March 3, 2026 South Burlington City Council election. Includes budget explainers, tax calculator, and ballot article details. A nonpartisan community resource.",
  keywords: ["South Burlington", "Vermont", "voter guide", "Town Meeting Day", "City Council", "election 2026", "Beth Zigmund", "Amy Allen", "budget", "tax calculator"],
  authors: [{ name: "South Burlington Voter Guide" }],
  openGraph: {
    title: "South Burlington Voter Guide 2026",
    description: "Compare candidates, explore ballot articles, and calculate your tax impact for Town Meeting Day - March 3, 2026",
    type: "website",
    locale: "en_US",
    siteName: "South Burlington Voter Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Burlington Voter Guide 2026",
    description: "Compare candidates, explore ballot articles, and calculate your tax impact for Town Meeting Day - March 3, 2026",
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
