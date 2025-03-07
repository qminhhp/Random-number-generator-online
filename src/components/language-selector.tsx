"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useRouter } from "next/navigation";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const ICON_SIZE = 16;

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);

    // Redirect to appropriate URL based on language
    const currentPath = window.location.pathname;

    if (newLanguage === "vi") {
      // If switching to Vietnamese, add /vi/ prefix if not already there
      if (!currentPath.startsWith("/vi")) {
        const newPath = `/vi${currentPath === "/" ? "" : currentPath}`;
        router.push(newPath);
      }
    } else {
      // If switching to English, remove /vi/ prefix if it exists
      if (currentPath.startsWith("/vi")) {
        const newPath = currentPath.replace(/^\/vi\/?/, "/") || "/";
        router.push(newPath);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          <Globe size={ICON_SIZE} className={"text-muted-foreground"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={handleLanguageChange}
        >
          <DropdownMenuRadioItem className="flex gap-2" value="en">
            <span>English</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="vi">
            <span>Tiếng Việt</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
