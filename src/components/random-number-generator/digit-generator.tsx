import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dices } from "lucide-react";

interface DigitGeneratorProps {
  digits: number;
  onDigitsChange: (value: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function DigitGenerator({
  digits,
  onDigitsChange,
  onGenerate,
  isGenerating,
}: DigitGeneratorProps) {
  const presetDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor="digits">Number of Digits</Label>
          <div className="flex gap-2">
            <Select
              value={digits.toString()}
              onValueChange={(value) => onDigitsChange(Number(value))}
            >
              <SelectTrigger id="digits" className="flex-1">
                <SelectValue placeholder="Select digits" />
              </SelectTrigger>
              <SelectContent>
                {presetDigits.map((d) => (
                  <SelectItem key={d} value={d.toString()}>
                    {d} {d === 1 ? "digit" : "digits"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              min="1"
              max="20"
              value={digits}
              onChange={(e) => onDigitsChange(Number(e.target.value) || 1)}
              className="w-24"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Generate a random {digits}-digit number
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {[3, 4, 6, 8, 10].map((d) => (
            <Button
              key={d}
              variant="outline"
              size="sm"
              onClick={() => onDigitsChange(d)}
              className="flex-1"
            >
              {d} digits
            </Button>
          ))}
        </div>

        <Button
          className="w-full gap-2"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          <Dices size={18} />
          Generate {digits}-Digit Number
        </Button>
      </CardContent>
    </Card>
  );
}
