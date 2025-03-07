"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Dices, RefreshCw, Save, Share2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AdvancedOptions } from "./advanced-options";
import { DigitGenerator } from "./digit-generator";
import {
  GeneratorMode,
  GeneratorModeSelector,
} from "./generator-mode-selector";
import { History, HistoryItem } from "./history";
import { ListGenerator } from "./list-generator";
import { LotteryGenerator } from "./lottery-generator";
import { NumberDisplay } from "./number-display";
import { PhoneGenerator } from "./phone-generator";
import { PinGenerator } from "./pin-generator";
import { QuickAccessButtons } from "./quick-access-buttons";
import { RangeInputs } from "./range-inputs";
import { SpecialGenerator, SpecialType } from "./special-generator";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

interface RandomNumberGeneratorProps {
  initialMin?: number;
  initialMax?: number;
}

export function RandomNumberGenerator({
  initialMin,
  initialMax,
}: RandomNumberGeneratorProps) {
  const router = useRouter();

  // Standard generator state
  const [min, setMin] = useState(initialMin || 1);
  const [max, setMax] = useState(initialMax || 100);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [format, setFormat] = useState<"decimal" | "hex" | "binary">("decimal");

  // Digit generator state
  const [digits, setDigits] = useState(4);

  // PIN generator state
  const [pinLength, setPinLength] = useState(4);
  const [allowRepeats, setAllowRepeats] = useState(true);

  // Phone generator state
  const [country, setCountry] = useState("US");

  // List generator state
  const [list, setList] = useState("Item 1\nItem 2\nItem 3\nItem 4\nItem 5");
  const [listCount, setListCount] = useState(1);

  // Lottery generator state
  const [lotteryCount, setLotteryCount] = useState(6);
  const [lotteryMax, setLotteryMax] = useState(49);

  // Special generator state
  const [specialType, setSpecialType] = useState<SpecialType>("divisible");
  const [specialMin, setSpecialMin] = useState(1);
  const [specialMax, setSpecialMax] = useState(1000);
  const [specialValue, setSpecialValue] = useState(7);

  // Common state
  const [mode, setMode] = useState<GeneratorMode>("standard");
  const [result, setResult] = useState<
    number | number[] | string | string[] | null
  >(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Generate random number based on current mode
  const generateRandom = () => {
    // Generate the result first
    let newResult: number | number[] | string | string[] | null = null;

    switch (mode) {
      case "standard":
        newResult = generateStandardNumber();
        break;
      case "digits":
        newResult = generateXDigitNumber(digits);
        break;
      case "pin":
        newResult = generatePin(pinLength, allowRepeats);
        break;
      case "phone":
        newResult = generatePhoneNumber(country);
        break;
      case "list":
        newResult = pickFromList(list, listCount);
        break;
      case "lottery":
        newResult = generateLotteryNumbers(lotteryCount, lotteryMax);
        break;
      case "special":
        newResult = generateSpecialNumber();
        break;
    }

    // Add to history first
    addToHistory(newResult);

    // Then start the animation
    setIsGenerating(true);

    // Clear the result during animation
    setResult(null);

    // After a short delay, show the new result
    setTimeout(() => {
      setResult(newResult);
      setIsGenerating(false);

      // Update URL for SEO if needed
      if (mode === "standard" && count === 1 && typeof newResult === "number") {
        const actualMin = Math.min(min, max);
        const actualMax = Math.max(min, max);
        // Only create a new URL if we're using whole numbers and a reasonable range
        if (step === 1 && actualMax - actualMin <= 1000) {
          // If we're on the homepage and using default values (1-100), redirect to /1-100
          if (
            window.location.pathname === "/" &&
            actualMin === 1 &&
            actualMax === 100
          ) {
            router.push("/1-100", { scroll: false });
          } else {
            router.push(`/${actualMin}-${actualMax}`, { scroll: false });
          }
        }
      }
    }, 300);
  };

  // Standard number generator
  const generateStandardNumber = (): number | number[] => {
    // Ensure min is less than max
    const actualMin = Math.min(min, max);
    const actualMax = Math.max(min, max);

    // Calculate the number of possible values
    const possibleValues = Math.floor((actualMax - actualMin) / step) + 1;

    if (count === 1) {
      // Generate a single random number
      const randomIndex = Math.floor(Math.random() * possibleValues);
      return actualMin + randomIndex * step;
    } else {
      // Generate multiple random numbers
      const numbers: number[] = [];
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * possibleValues);
        const randomValue = actualMin + randomIndex * step;
        numbers.push(randomValue);
      }
      return numbers;
    }
  };

  // X-digit number generator
  const generateXDigitNumber = (digitCount: number): number => {
    const min = Math.pow(10, digitCount - 1);
    const max = Math.pow(10, digitCount) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // PIN generator
  const generatePin = (length: number, allowRepeats: boolean): string => {
    if (allowRepeats) {
      let pin = "";
      for (let i = 0; i < length; i++) {
        pin += Math.floor(Math.random() * 10).toString();
      }
      return pin;
    } else {
      // For non-repeating PINs
      const digits = "0123456789".split("");
      const shuffled = [...digits].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, length).join("");
    }
  };

  // Phone number generator
  const generatePhoneNumber = (countryCode: string): string => {
    const phoneFormats: Record<string, string> = {
      US: "+1 (xxx) xxx-xxxx",
      UK: "+44 xxxx xxxxxx",
      CA: "+1 (xxx) xxx-xxxx",
      AU: "+61 xxx xxx xxx",
      FR: "+33 x xx xx xx xx",
      DE: "+49 xxx xxxxxxxx",
      JP: "+81 xx xxxx xxxx",
      CN: "+86 xxx xxxx xxxx",
      IN: "+91 xxxxx xxxxx",
      BR: "+55 xx xxxxx-xxxx",
    };

    const format = phoneFormats[countryCode] || phoneFormats.US;
    return format.replace(/x/g, () =>
      Math.floor(Math.random() * 10).toString(),
    );
  };

  // List picker
  const pickFromList = (listText: string, itemCount: number): string[] => {
    const items = listText
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, itemCount);
  };

  // Lottery number generator
  const generateLotteryNumbers = (count: number, max: number): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  // Special number generator
  const generateSpecialNumber = (): number => {
    const actualMin = Math.min(specialMin, specialMax);
    const actualMax = Math.max(specialMin, specialMax);

    switch (specialType) {
      case "divisible": {
        // Find a number divisible by specialValue
        const possibleValues = [];
        for (let i = actualMin; i <= actualMax; i++) {
          if (i % specialValue === 0) possibleValues.push(i);
        }
        if (possibleValues.length === 0) return actualMin; // Fallback
        return possibleValues[
          Math.floor(Math.random() * possibleValues.length)
        ];
      }
      case "sum": {
        // Find a number whose digits sum to specialValue
        const possibleValues = [];
        for (let i = actualMin; i <= actualMax; i++) {
          const sum = i
            .toString()
            .split("")
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
          if (sum === specialValue) possibleValues.push(i);
        }
        if (possibleValues.length === 0) return actualMin; // Fallback
        return possibleValues[
          Math.floor(Math.random() * possibleValues.length)
        ];
      }
      case "digit-sum": {
        // Find a number whose digits sum to specialValue
        return generateNumberWithDigitSum(actualMin, actualMax, specialValue);
      }
      default:
        return (
          Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin
        );
    }
  };

  // Helper for generating a number with a specific digit sum
  const generateNumberWithDigitSum = (
    min: number,
    max: number,
    targetSum: number,
  ): number => {
    const possibleValues = [];
    for (let i = min; i <= max; i++) {
      const sum = i
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      if (sum === targetSum) possibleValues.push(i);
    }
    if (possibleValues.length === 0) return min; // Fallback
    return possibleValues[Math.floor(Math.random() * possibleValues.length)];
  };

  // Add to history
  const addToHistory = (
    result: number | number[] | string | string[] | null,
  ) => {
    if (result === null) return;

    const newHistoryItem: HistoryItem = {
      id: uuidv4(),
      timestamp: new Date(),
      mode,
      result,
      format,
    };

    setHistory((prev) => [newHistoryItem, ...prev.slice(0, 19)]); // Keep last 20 items
  };

  // Clear history
  const clearHistory = () => {
    setHistory([]);
  };

  // Reuse a history item
  const reuseHistoryItem = (item: HistoryItem) => {
    setMode(item.mode as GeneratorMode);
    setFormat(item.format);
    setResult(item.result);
  };

  // Copy result to clipboard
  const copyToClipboard = () => {
    if (result === null) return;

    let textToCopy = "";
    if (Array.isArray(result)) {
      textToCopy = result.join(", ");
    } else {
      textToCopy = result.toString();
    }

    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copied to clipboard!",
      description: "Your random result has been copied.",
      duration: 2000,
    });
  };

  // Share result
  const shareResult = async () => {
    if (result === null) return;

    let shareText = "";
    if (mode === "standard" && count === 1 && typeof result === "number") {
      const actualMin = Math.min(min, max);
      const actualMax = Math.max(min, max);
      shareText = `I generated a random number between ${actualMin} and ${actualMax}: ${result} using EasyRandomNumbers!`;
    } else {
      let resultText = "";
      if (Array.isArray(result)) {
        resultText = result.join(", ");
      } else {
        resultText = result.toString();
      }
      shareText = `My random result: ${resultText} - Generated with EasyRandomNumbers!`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "EasyRandomNumbers",
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  // Handle range selection for standard mode
  const handleRangeSelect = (newMin: number, newMax: number) => {
    setMin(newMin);
    setMax(newMax);
    setStep(1);
  };

  // Generate a number on initial load without redirecting
  useEffect(() => {
    // Generate the result first without redirecting
    let initialResult: number | number[] | string | string[] | null = null;

    // For standard mode, generate a number without URL update
    if (mode === "standard") {
      const actualMin = Math.min(min, max);
      const actualMax = Math.max(min, max);
      const possibleValues = Math.floor((actualMax - actualMin) / step) + 1;
      const randomIndex = Math.floor(Math.random() * possibleValues);
      initialResult = actualMin + randomIndex * step;
    } else {
      // For other modes, use the regular generator
      switch (mode) {
        case "digits":
          initialResult = generateXDigitNumber(digits);
          break;
        case "pin":
          initialResult = generatePin(pinLength, allowRepeats);
          break;
        case "phone":
          initialResult = generatePhoneNumber(country);
          break;
        case "list":
          initialResult = pickFromList(list, listCount);
          break;
        case "lottery":
          initialResult = generateLotteryNumbers(lotteryCount, lotteryMax);
          break;
        case "special":
          initialResult = generateSpecialNumber();
          break;
      }
    }

    // Add to history
    if (initialResult !== null) {
      addToHistory(initialResult);
      setResult(initialResult);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto flex max-w-md flex-col space-y-4 p-4">
      <GeneratorModeSelector mode={mode} onModeChange={setMode} />

      <NumberDisplay
        value={result}
        format={format}
        isGenerating={isGenerating}
      />

      <div className="flex gap-2">
        <Button
          className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md"
          onClick={generateRandom}
          disabled={isGenerating}
        >
          <Sparkles size={18} />
          Generate
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          disabled={result === null}
          title="Copy to clipboard"
          className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900"
        >
          <Copy size={18} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={shareResult}
          disabled={result === null}
          title="Share result"
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
              <QuickAccessButtons onSelectRange={handleRangeSelect} />

              <RangeInputs
                min={min}
                max={max}
                step={step}
                onMinChange={setMin}
                onMaxChange={setMax}
                onStepChange={setStep}
              />
            </CardContent>
          </Card>

          <AdvancedOptions
            count={count}
            onCountChange={setCount}
            format={format}
            onFormatChange={setFormat}
          />
        </>
      )}

      {mode === "digits" && (
        <DigitGenerator
          digits={digits}
          onDigitsChange={setDigits}
          onGenerate={generateRandom}
          isGenerating={isGenerating}
        />
      )}

      {mode === "pin" && (
        <PinGenerator
          length={pinLength}
          onLengthChange={setPinLength}
          allowRepeats={allowRepeats}
          onAllowRepeatsChange={setAllowRepeats}
          onGenerate={generateRandom}
          isGenerating={isGenerating}
        />
      )}

      {mode === "phone" && (
        <PhoneGenerator
          country={country}
          onCountryChange={setCountry}
          onGenerate={generateRandom}
          isGenerating={isGenerating}
        />
      )}

      {mode === "list" && (
        <ListGenerator
          list={list}
          onListChange={setList}
          count={listCount}
          onCountChange={setListCount}
          onGenerate={generateRandom}
          isGenerating={isGenerating}
        />
      )}

      {mode === "lottery" && (
        <LotteryGenerator
          count={lotteryCount}
          onCountChange={setLotteryCount}
          max={lotteryMax}
          onMaxChange={setLotteryMax}
          onGenerate={generateRandom}
          isGenerating={isGenerating}
        />
      )}

      {mode === "special" && (
        <SpecialGenerator
          type={specialType}
          onTypeChange={setSpecialType}
          min={specialMin}
          onMinChange={setSpecialMin}
          max={specialMax}
          onMaxChange={setSpecialMax}
          specialValue={specialValue}
          onSpecialValueChange={setSpecialValue}
          onGenerate={generateRandom}
          isGenerating={isGenerating}
        />
      )}

      <History
        history={history}
        onClear={clearHistory}
        onReuse={reuseHistoryItem}
      />

      <div className="fixed bottom-6 right-6 md:hidden">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          onClick={generateRandom}
          disabled={isGenerating}
        >
          <Sparkles size={24} />
        </Button>
      </div>

      <Toaster />
    </div>
  );
}
