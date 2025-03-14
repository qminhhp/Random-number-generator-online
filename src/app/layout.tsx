import { TempoInit } from "@/components/tempo-init";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
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
  metadataBase: new URL("https://easyrandomnumbers.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      vi: "/vi",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EasyRandomNumbers - Fun & Free Random Number Generator",
    description:
      "Generate random numbers instantly! Perfect for games, lotteries, decisions, and more.",
    url: "https://easyrandomnumbers.com",
    siteName: "EasyRandomNumbers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://easyrandomnumbers.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "EasyRandomNumbers - Fun & Free Random Number Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyRandomNumbers - Fun & Free Random Number Generator",
    description:
      "Generate random numbers instantly! Perfect for games, lotteries, decisions, and more.",
    images: ["https://easyrandomnumbers.com/twitter-image.png"],
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
        <link
          rel="preload"
          href="/fonts/poppins-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://easyrandomnumbers.com/"
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href="https://easyrandomnumbers.com/vi/"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://easyrandomnumbers.com/"
        />
      </head>
      <body className={poppins.className}>
        <Providers>
          {children}
          <TempoInit />
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        </Providers>
      </body>
    </html>
  );
}
