import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dices } from "lucide-react";

interface PinGeneratorProps {
  length: number;
  onLengthChange: (value: number) => void;
  allowRepeats: boolean;
  onAllowRepeatsChange: (value: boolean) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function PinGenerator({
  length,
  onLengthChange,
  allowRepeats,
  onAllowRepeatsChange,
  onGenerate,
  isGenerating,
}: PinGeneratorProps) {
  const presetLengths = [4, 6, 8];

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor="pin-length">PIN Length</Label>
          <Input
            id="pin-length"
            type="number"
            min="3"
            max="10"
            value={length}
            onChange={(e) => onLengthChange(Number(e.target.value) || 4)}
          />
          <p className="text-xs text-muted-foreground">
            Generate a random PIN code with {length} digits
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {presetLengths.map((l) => (
            <Button
              key={l}
              variant="outline"
              size="sm"
              onClick={() => onLengthChange(l)}
              className="flex-1"
            >
              {l}-digit PIN
            </Button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="allow-repeats"
            checked={allowRepeats}
            onCheckedChange={(checked) => onAllowRepeatsChange(!!checked)}
          />
          <Label htmlFor="allow-repeats" className="cursor-pointer">
            Allow repeating digits
          </Label>
        </div>

        <Button
          className="w-full gap-2"
          onClick={onGenerate}
          disabled={isGenerating || (!allowRepeats && length > 10)}
        >
          <Dices size={18} />
          Generate PIN Code
        </Button>
        {!allowRepeats && length > 10 && (
          <p className="text-xs text-destructive">
            Maximum length for non-repeating PINs is 10 digits
          </p>
        )}
      </CardContent>
    </Card>
  );
}
