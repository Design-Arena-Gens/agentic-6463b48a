import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Trending Digital Products | Daily Intelligence",
  description:
    "Live intelligence on trending digital products sourced from Product Hunt with synthesized insights, category signals, and launch momentum.",
  openGraph: {
    title: "Trending Digital Products — Daily Intelligence",
    description:
      "Stay ahead with a curated, auto-updating view of the latest digital products gaining traction, plus concise market insights.",
    url: "https://agentic-6463b48a.vercel.app",
    siteName: "Trending Digital Products",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Trending Digital Products",
    description:
      "A daily intelligence dashboard of the fastest-moving digital products with actionable insights.",
    creator: "@productintel"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-mist text-slate-900 antialiased">{children}</body>
    </html>
  );
}
