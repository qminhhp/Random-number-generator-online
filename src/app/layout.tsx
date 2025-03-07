import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EasyRandomNumbers - Fun & Free Random Number Generator",
  description:
    "Generate random numbers instantly! Perfect for games, lotteries, decisions, and more. Fast, free, and fun to use.",
  keywords:
    "random number generator, lottery numbers, random picker, dice roller, random decision maker",
  authors: [{ name: "EasyRandomNumbers" }],
  openGraph: {
    title: "EasyRandomNumbers - Fun & Free Random Number Generator",
    description:
      "Generate random numbers instantly! Perfect for games, lotteries, decisions, and more.",
    url: "https://easyrandomnumbers.com",
    siteName: "EasyRandomNumbers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyRandomNumbers - Fun & Free Random Number Generator",
    description:
      "Generate random numbers instantly! Perfect for games, lotteries, decisions, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={poppins.className}>
        <Providers>
          {children}
          <TempoInit />
        </Providers>
      </body>
    </html>
  );
}
