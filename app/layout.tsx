import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Web3 Wallet Transaction Analyzer",
    template: "%s | Web3 Wallet Transaction Analyzer",
  },
  description:
    "Analyze any crypto wallet with multi-chain transaction insights, inflow/outflow tracking, behavior analysis, and interactive charts. Built with Next.js, TypeScript, and Moralis.",
  keywords: [
    "Web3 wallet analyzer",
    "crypto wallet analysis",
    "blockchain analytics",
    "DeFi dashboard",
    "wallet transaction tracker",
    "on-chain data",
    "Ethereum wallet analysis",
    "Base chain analytics",
    "Polygon wallet tracker",
    "Next.js Web3 project",
  ],
  authors: [{ name: "Khalil Ahmed", url: "https://www.khalilahmed.dev" }],
  creator: "Khalil Ahmed",
  metadataBase: new URL("https://your-domain.vercel.app"),

  openGraph: {
    title: "Web3 Wallet Transaction Analyzer",
    description:
      "Multi-chain wallet analytics platform with transaction insights, behavior detection, and interactive charts.",
    url: "https://your-domain.vercel.app",
    siteName: "Web3 Wallet Analyzer",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "Web3 Wallet Transaction Analyzer Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web3 Wallet Transaction Analyzer",
    description:
      "Analyze wallet transactions, behavior, and on-chain activity across multiple chains.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
