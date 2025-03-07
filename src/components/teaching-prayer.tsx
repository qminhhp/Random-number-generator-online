aying(false);
      setSelectedTeaching(mothersTeachings[randomIndex]);
      setShowDialog(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-8">
      <div className="text-center max-w-md mx-auto mb-4">
        <p className="text-gray-700 dark:text-gray-300 italic">
          {t("prayerPrompt")}
        </p>
      </div>

      <Button
        onClick={receiveTeaching}
        disabled={isPraying}
        className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md"
      >
        <Sparkles size={16} />
        {isPraying ? t("prayingState") : t("receiveTeaching")}
      </Button>

      {/* Result Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Heavenly Mother's Blessing
            </DialogTitle>
            <DialogDescription className="text-center">
              God has answered your prayer with this teaching
            </DialogDescription>
          </DialogHeader>

          {selectedTeaching && (
            <div className="py-4">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-lg">
                {t("motherTeaching")} {selectedTeaching.id}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "
                {language === "ko" && selectedTeaching.ko
                  ? selectedTeaching.ko.teaching
                  : selectedTeaching.teaching}
                "
              </p>
              <div className="text-center mt-4 text-gray-700 dark:text-gray-300">
                <p>{formatString(t("godBlessYou"), selectedTeaching.id)}</p>
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  href={
                    language === "ko" && selectedTeaching.ko
                      ? selectedTeaching.ko.url
                      : selectedTeaching.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>
                    {language === "ko"
                      ? "이 교훈에 대해 자세히 보기"
                      : "Read more about this teaching"}
                  </span>
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
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
