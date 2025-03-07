import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NumberDisplayProps {
  value: number | number[] | string | string[] | null;
  format: "decimal" | "hex" | "binary";
  isGenerating: boolean;
  className?: string;
}

export function NumberDisplay({
  value,
  format,
  isGenerating,
  className,
}: NumberDisplayProps) {
  const [animateClass, setAnimateClass] = useState("");
  const [emoji, setEmoji] = useState("");

  // Random emojis to make it more fun
  const happyEmojis = [
    "🎉",
    "✨",
    "🎲",
    "🎯",
    "🎪",
    "🎨",
    "🎭",
    "🎮",
    "🎰",
    "🎪",
  ];

  useEffect(() => {
    if (isGenerating) {
      setAnimateClass("scale-105 opacity-0");
      // Pick a random emoji when generating
      setEmoji(happyEmojis[Math.floor(Math.random() * happyEmojis.length)]);
    } else {
      setAnimateClass("");
    }
  }, [isGenerating, happyEmojis]);

  const formatValue = (val: number | string): string => {
    if (typeof val === "string") {
      return val;
    }

    switch (format) {
      case "hex":
        return `0x${val.toString(16).toUpperCase()}`;
      case "binary":
        return `0b${val.toString(2)}`;
      default:
        return val.toString();
    }
  };

  return (
    <div
      className={cn(
        "flex min-h-40 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-6 text-center text-4xl font-bold shadow-md transition-all duration-300 border border-blue-100 dark:border-blue-800",
        animateClass,
        className,
      )}
    >
      {value === null ? (
        <span className="text-muted-foreground">Press generate</span>
      ) : Array.isArray(value) ? (
        <div className="flex max-w-full flex-wrap justify-center gap-2">
          {value.map((item, index) => (
            <span key={index} className="break-all">
              {formatValue(item)}
            </span>
          ))}
        </div>
      ) : (
        <>
          <span className="break-all bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {formatValue(value)}
          </span>
          <span className="mt-2 text-2xl">{emoji}</span>
        </>
      )}
    </div>
  );
}
