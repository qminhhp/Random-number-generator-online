"use client";

import { LanguageProvider } from "@/contexts/language-context";
import { Language } from "@/lib/i18n";
import { ThemeProvider } from "next-themes";

export function Providers({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider initialLanguage={initialLanguage}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
