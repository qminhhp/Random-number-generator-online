"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { mothersTeachings } from "@/data/mothers-teachings";
import { formatString } from "@/lib/i18n";
import { Sparkles, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export function TeachingPrayer() {
  const { language, t } = useLanguage();
  const [isPraying, setIsPraying] = useState(false);
  const [selectedTeaching, setSelectedTeaching] = useState<
    (typeof mothersTeachings)[0] | null
  >(null);
  const [showDialog, setShowDialog] = useState(false);

  const receiveTeaching = () => {
    if (isPraying) return;

    setIsPraying(true);

    // Select a random teaching
    const randomIndex = Math.floor(Math.random() * mothersTeachings.length);

    // After a short delay to simulate prayer time
    setTimeout(() => {
      setIsPraying(false);
      setSelectedTeaching(mothersTeachings[randomIndex]);
      setShowDialog(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-8">
      <div className="text-center max-w-md mx-auto mb-4">
        <p className="text-gray-700 dark:text-gray-300 italic">
          {t("prayMessage")}
        </p>
      </div>

      <Button
        onClick={receiveTeaching}
        disabled={isPraying}
        className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md"
      >
        <Sparkles size={16} />
        {isPraying ? t("praying") : t("receiveTeaching")}
      </Button>

      {/* Result Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t("mothersBlessing")}
            </DialogTitle>
            <DialogDescription className="text-center">
              {t("godAnswered")}
            </DialogDescription>
          </DialogHeader>

          {selectedTeaching && (
            <div className="py-4">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-lg">
                {t("teachingNumber", selectedTeaching.id)}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "
                {language === "vi" && selectedTeaching.vi
                  ? selectedTeaching.vi.teaching
                  : language === "ko" && selectedTeaching.ko
                    ? selectedTeaching.ko.teaching
                    : selectedTeaching.teaching}
                "
              </p>
              <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
                <p>{t("thankYouMessage", selectedTeaching.id)}</p>
              </div>
              <div className="flex flex-col items-center gap-3 mt-4">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const teachingText =
                        language === "vi" && selectedTeaching.vi
                          ? selectedTeaching.vi.teaching
                          : language === "ko" && selectedTeaching.ko
                            ? selectedTeaching.ko.teaching
                            : selectedTeaching.teaching;
                      navigator.clipboard.writeText(teachingText);
                      alert(t("copied"));
                    }}
                    className="flex items-center gap-1"
                  >
                    <span>{t("copy")}</span>
                  </Button>

                  {navigator.share && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const teachingText =
                          language === "vi" && selectedTeaching.vi
                            ? selectedTeaching.vi.teaching
                            : language === "ko" && selectedTeaching.ko
                              ? selectedTeaching.ko.teaching
                              : selectedTeaching.teaching;
                        navigator
                          .share({
                            title: t("mothersTeachings"),
                            text: `${t("teachingNumber", selectedTeaching.id)}: "${teachingText}"`,
                            url:
                              language === "vi" && selectedTeaching.vi
                                ? selectedTeaching.vi.url
                                : language === "ko" && selectedTeaching.ko
                                  ? selectedTeaching.ko.url
                                  : selectedTeaching.url,
                          })
                          .catch((err) => console.error("Share failed:", err));
                      }}
                      className="flex items-center gap-1"
                    >
                      <span>{t("share")}</span>
                    </Button>
                  )}
                </div>

                <Link
                  href={
                    language === "vi" && selectedTeaching.vi
                      ? selectedTeaching.vi.url
                      : language === "ko" && selectedTeaching.ko
                        ? selectedTeaching.ko.url
                        : selectedTeaching.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>{t("readMoreAbout")}</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          )}

          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => setShowDialog(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              {t("close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
