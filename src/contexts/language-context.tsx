"use client";

import { ReactNode, createContext, useContext } from "react";

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
  initialLanguage?: string;
}) {
  // Always English
  const language = "en";
  const handleSetLanguage = () => {};
  const t = (key: string) => key;

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
