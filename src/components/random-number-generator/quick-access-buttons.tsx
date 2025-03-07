import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface QuickAccessButtonsProps {
  onSelectRange: (min: number, max: number) => void;
}

export function QuickAccessButtons({ onSelectRange }: QuickAccessButtonsProps) {
  const router = useRouter();
  const presets = [
    { label: "1-10", min: 1, max: 10, emoji: "🎲" },
    { label: "1-100", min: 1, max: 100, emoji: "💯" },
    { label: "1-1000", min: 1, max: 1000, emoji: "🔢" },
    { label: "0-1", min: 0, max: 1, emoji: "🎯" },
    { label: "1-6", min: 1, max: 6, emoji: "🎲" },
    { label: "1-20", min: 1, max: 20, emoji: "🎮" },
  ];

  const handleQuickRangeClick = (min: number, max: number) => {
    // First update the local state
    onSelectRange(min, max);

    // Then navigate directly to the range page
    router.push(`/${min}-${max}`);
  };

  return (
    <div>
      <h3 className="mb-2 font-medium text-blue-700 dark:text-blue-300">
        Quick Ranges
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            variant="outline"
            size="sm"
            className="w-full border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all"
            onClick={() => handleQuickRangeClick(preset.min, preset.max)}
          >
            <span className="mr-1">{preset.emoji}</span> {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
