"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { translations } from "@/data/translations";
import { formatString } from "@/lib/i18n";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, ...args: any[]) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({
  children,
  initialLanguage = "en",
}: {
  children: ReactNode;
  initialLanguage?: string;
}) {
  const [language, setLanguage] = useState(initialLanguage);

  // Load language preference from localStorage or URL path on client side
  useEffect(() => {
    // Check if URL path starts with /vi/
    const isVietnamesePath = window.location.pathname.startsWith("/vi");
    if (isVietnamesePath) {
      setLanguage("vi");
      localStorage.setItem("language", "vi");
      return;
    }

    // Otherwise check localStorage
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "vi")) {
      setLanguage(savedLanguage);
    }

    // Check cookies as well (set by middleware)
    const cookies = document.cookie.split("; ");
    const langCookie = cookies.find((cookie) => cookie.startsWith("language="));
    if (langCookie) {
      const cookieValue = langCookie.split("=")[1];
      if (cookieValue === "vi") {
        setLanguage("vi");
      }
    }
  }, []);

  const handleSetLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string, ...args: any[]): string => {
    // Get the translations for the current language
    const langTranslations =
      translations[language as keyof typeof translations] || translations.en;

    // Navigate through nested keys (e.g., "categoryDesc.basic")
    const keys = key.split(".");
    let value: any = langTranslations;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // If translation not found, fallback to English or the key itself
    if (value === undefined) {
      const enTranslations = translations.en;
      let enValue: any = enTranslations;

      for (const k of keys) {
        enValue = enValue?.[k];
        if (enValue === undefined) break;
      }

      value = enValue || key;
    }

    // Format the string with arguments if needed
    if (typeof value === "string" && args.length > 0) {
      return formatString(value, ...args);
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
