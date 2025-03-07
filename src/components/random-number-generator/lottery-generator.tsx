import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dices } from "lucide-react";

interface LotteryGeneratorProps {
  count: number;
  onCountChange: (value: number) => void;
  max: number;
  onMaxChange: (value: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function LotteryGenerator({
  count,
  onCountChange,
  max,
  onMaxChange,
  onGenerate,
  isGenerating,
}: LotteryGeneratorProps) {
  const presets = [
    { label: "6/49", count: 6, max: 49 },
    { label: "5/35", count: 5, max: 35 },
    { label: "7/49", count: 7, max: 49 },
    { label: "5/90", count: 5, max: 90 },
  ];

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="lottery-count">Numbers to Draw</Label>
            <Input
              id="lottery-count"
              type="number"
              min="1"
              max={max}
              value={count}
              onChange={(e) => onCountChange(Number(e.target.value) || 1)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lottery-max">Maximum Number</Label>
            <Input
              id="lottery-max"
              type="number"
              min={count}
              value={max}
              onChange={(e) => onMaxChange(Number(e.target.value) || count)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="outline"
              size="sm"
              onClick={() => {
                onCountChange(preset.count);
                onMaxChange(preset.max);
              }}
              className="flex-1"
            >
              {preset.label}
            </Button>
          ))}
        </div>

        <Button
          className="w-full gap-2"
          onClick={onGenerate}
          disabled={isGenerating || count > max}
        >
          <Dices size={18} />
          Generate {count} from {max}
        </Button>
        {count > max && (
          <p className="text-xs text-destructive">
            Cannot pick more numbers than the maximum
          </p>
        )}
      </CardContent>
    </Card>
  );
}
