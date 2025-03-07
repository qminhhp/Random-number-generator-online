import { TempoInit } from "@/components/tempo-init";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import { Providers } from "../providers";
import "../globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EasyRandomNumbers - Trình tạo số ngẫu nhiên miễn phí và thú vị",
  description:
    "Tạo số ngẫu nhiên ngay lập tức! Hoàn hảo cho trò chơi, xổ số, quyết định và nhiều hơn nữa. Nhanh chóng, miễn phí và thú vị để sử dụng.",
  keywords:
    "trình tạo số ngẫu nhiên, số xổ số, chọn ngẫu nhiên, tung xúc xắc, công cụ quyết định ngẫu nhiên",
  authors: [{ name: "EasyRandomNumbers" }],
  metadataBase: new URL("https://easyrandomnumbers.com"),
  alternates: {
    canonical: "/vi",
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
    title: "EasyRandomNumbers - Trình tạo số ngẫu nhiên miễn phí và thú vị",
    description:
      "Tạo số ngẫu nhiên ngay lập tức! Hoàn hảo cho trò chơi, xổ số, quyết định và nhiều hơn nữa.",
    url: "https://easyrandomnumbers.com/vi",
    siteName: "EasyRandomNumbers",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://easyrandomnumbers.com/og-image-vi.png",
        width: 1200,
        height: 630,
        alt: "EasyRandomNumbers - Trình tạo số ngẫu nhiên miễn phí và thú vị",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyRandomNumbers - Trình tạo số ngẫu nhiên miễn phí và thú vị",
    description:
      "Tạo số ngẫu nhiên ngay lập tức! Hoàn hảo cho trò chơi, xổ số, quyết định và nhiều hơn nữa.",
    images: ["https://easyrandomnumbers.com/twitter-image-vi.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
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
          href="/fonts/roboto-vietnamese-400-normal.woff2"
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
      <body className={roboto.className}>
        <Providers>
          {children}
          <TempoInit />
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        </Providers>
      </body>
    </html>
  );
}
