"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Language, languages } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

interface LanguageSelectorProps {
  onLanguageChange?: (language: Language) => void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (
      savedLanguage &&
      languages.some((lang) => lang.code === savedLanguage)
    ) {
      setLanguage(savedLanguage);
      if (onLanguageChange) {
        onLanguageChange(savedLanguage);
      }
    }
  }, [onLanguageChange]);

  if (!mounted) {
    return null;
  }

  const handleLanguageChange = (value: string) => {
    const newLanguage = value as Language;
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }

    // Redirect to the same page but with the new language code
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");

    // Special case for English (default language)
    if (newLanguage === "en") {
      // If we're already at a language-specific path, remove the language code
      if (
        pathParts.length >= 2 &&
        languages.some((lang) => lang.code === pathParts[1])
      ) {
        // Remove the language part and join the rest
        const newPath = "/" + pathParts.slice(2).join("/");
        window.location.href = newPath + window.location.search;
      }
      // If we're already at the root or a non-language path, no redirect needed
      return;
    }

    // For non-English languages
    // If the path has at least 2 parts and the first part is a language code
    if (
      pathParts.length >= 2 &&
      languages.some((lang) => lang.code === pathParts[1])
    ) {
      // Replace the language code
      pathParts[1] = newLanguage;
      const newPath = pathParts.join("/");
      window.location.href = newPath + window.location.search;
    } else {
      // If we're at a path without language code, add the language
      // Remove the first empty element and add the language code
      pathParts.shift();
      const newPath = `/${newLanguage}/${pathParts.join("/")}`;
      window.location.href = newPath + window.location.search;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          <Globe size={16} className={"text-muted-foreground"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]" align="end">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="flex gap-2"
            >
              <span>{lang.name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
