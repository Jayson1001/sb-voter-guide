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
  title: {
    default: "Vermont Election Guide",
    template: "%s | Vermont Election Guide",
  },
  description: "Nonpartisan guides and results archives for Vermont municipal elections. Know your ballot before you vote.",
  authors: [{ name: "Vermont Election Guide" }],
  openGraph: {
    title: "Vermont Election Guide",
    description: "Nonpartisan guides and results archives for Vermont municipal elections.",
    type: "website",
    locale: "en_US",
    siteName: "Vermont Election Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vermont Election Guide",
    description: "Nonpartisan guides and results archives for Vermont municipal elections.",
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
