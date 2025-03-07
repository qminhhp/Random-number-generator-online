"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Share2, Sparkles } from "lucide-react";
import { NumberDisplay } from "./number-display";
import {
  GeneratorMode,
  GeneratorModeSelector,
} from "./generator-mode-selector";
import { QuickAccessButtons } from "./quick-access-buttons";
import { RangeInputs } from "./range-inputs";
import { Suspense, ReactNode } from "react";
import { LazyHistory, LazyAdvancedOptions } from "./lazy-components";
import type { HistoryItem } from "./history";

interface TranslatedComponentsProps {
  mode: GeneratorMode;
  result: number | number[] | string | string[] | null;
  format: "decimal" | "hex" | "binary";
  isGenerating: boolean;
  min: number;
  max: number;
  step: number;
  count: number;
  history: HistoryItem[];
  onModeChange: (mode: GeneratorMode) => void;
  onGenerate: () => void;
  onCopyToClipboard: () => void;
  onShareResult: () => void;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  onStepChange: (value: number) => void;
  onCountChange: (value: number) => void;
  onFormatChange: (format: "decimal" | "hex" | "binary") => void;
  onClearHistory: () => void;
  onReuseHistoryItem: (item: HistoryItem) => void;
  onRangeSelect: (min: number, max: number) => void;
  children?: ReactNode;
}

export function TranslatedComponents({
  mode,
  result,
  format,
  isGenerating,
  min,
  max,
  step,
  count,
  history,
  onModeChange,
  onGenerate,
  onCopyToClipboard,
  onShareResult,
  onMinChange,
  onMaxChange,
  onStepChange,
  onCountChange,
  onFormatChange,
  onClearHistory,
  onReuseHistoryItem,
  onRangeSelect,
  children,
}: TranslatedComponentsProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto flex max-w-md flex-col space-y-4 p-4">
      <GeneratorModeSelector mode={mode} onModeChange={onModeChange} />

      <NumberDisplay
        value={result}
        format={format}
        isGenerating={isGenerating}
      />

      <div className="flex gap-2">
        <Button
          className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          <Sparkles size={18} />
          {t("generate")}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onCopyToClipboard}
          disabled={result === null}
          title={t("copy")}
          className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900"
        >
          <Copy size={18} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onShareResult}
          disabled={result === null}
          title={t("share")}
          className="border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900"
        >
          <Share2 size={18} />
        </Button>
      </div>

      {/* Mode-specific controls */}
      {mode === "standard" && (
        <>
          <Card className="border-blue-200 dark:border-blue-800 shadow-sm">
            <CardContent className="space-y-4 p-4">
              <QuickAccessButtons onSelectRange={onRangeSelect} />

              <RangeInputs
                min={min}
                max={max}
                step={step}
                onMinChange={onMinChange}
                onMaxChange={onMaxChange}
                onStepChange={onStepChange}
              />
            </CardContent>
          </Card>

          <Suspense
            fallback={
              <div className="min-h-20 rounded-md border border-muted p-4 flex items-center justify-center">
                {t("loadingOptions")}
              </div>
            }
          >
            <LazyAdvancedOptions
              count={count}
              onCountChange={onCountChange}
              format={format}
              onFormatChange={onFormatChange}
            />
          </Suspense>
        </>
      )}

      {children}

      <Suspense
        fallback={
          <div className="min-h-20 rounded-md border border-muted p-4 flex items-center justify-center">
            {t("loadingHistory")}
          </div>
        }
      >
        <LazyHistory
          history={history}
          onClear={onClearHistory}
          onReuse={onReuseHistoryItem}
        />
      </Suspense>

      <div className="fixed bottom-6 right-6 md:hidden">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          <Sparkles size={24} />
        </Button>
      </div>
    </div>
  );
}
