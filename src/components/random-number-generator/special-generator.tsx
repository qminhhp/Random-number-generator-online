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

export type SpecialType = "divisible" | "sum" | "digit-sum";

interface SpecialGeneratorProps {
  type: SpecialType;
  onTypeChange: (value: SpecialType) => void;
  min: number;
  onMinChange: (value: number) => void;
  max: number;
  onMaxChange: (value: number) => void;
  specialValue: number;
  onSpecialValueChange: (value: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function SpecialGenerator({
  type,
  onTypeChange,
  min,
  onMinChange,
  max,
  onMaxChange,
  specialValue,
  onSpecialValueChange,
  onGenerate,
  isGenerating,
}: SpecialGeneratorProps) {
  const specialTypes = [
    { id: "divisible", label: "Divisible by" },
    { id: "sum", label: "Sum equals" },
    { id: "digit-sum", label: "Digit sum equals" },
  ];

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor="special-type">Special Property</Label>
          <Select
            value={type}
            onValueChange={(value) => onTypeChange(value as SpecialType)}
          >
            <SelectTrigger id="special-type">
              <SelectValue placeholder="Select special property" />
            </SelectTrigger>
            <SelectContent>
              {specialTypes.map((specialType) => (
                <SelectItem key={specialType.id} value={specialType.id}>
                  {specialType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="special-min">Min Value</Label>
            <Input
              id="special-min"
              type="number"
              value={min}
              onChange={(e) => onMinChange(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="special-max">Max Value</Label>
            <Input
              id="special-max"
              type="number"
              value={max}
              onChange={(e) => onMaxChange(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="special-value">
            {type === "divisible"
              ? "Divisible by"
              : type === "sum"
                ? "Sum equals"
                : "Digit sum equals"}
          </Label>
          <Input
            id="special-value"
            type="number"
            min="1"
            value={specialValue}
            onChange={(e) => onSpecialValueChange(Number(e.target.value) || 1)}
          />
        </div>

        <Button
          className="w-full gap-2"
          onClick={onGenerate}
          disabled={isGenerating || min >= max}
        >
          <Dices size={18} />
          Generate Special Number
        </Button>
        {min >= max && (
          <p className="text-xs text-destructive">
            Minimum value must be less than maximum value
          </p>
        )}
      </CardContent>
    </Card>
  );
}
