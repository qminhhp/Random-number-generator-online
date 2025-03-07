import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RangeInputsProps {
  min: number;
  max: number;
  step: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  onStepChange: (value: number) => void;
}

export function RangeInputs({
  min,
  max,
  step,
  onMinChange,
  onMaxChange,
  onStepChange,
}: RangeInputsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div className="space-y-2">
        <Label htmlFor="min-value">Min Value</Label>
        <Input
          id="min-value"
          type="number"
          value={min}
          onChange={(e) => onMinChange(Number(e.target.value))}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="max-value">Max Value</Label>
        <Input
          id="max-value"
          type="number"
          value={max}
          onChange={(e) => onMaxChange(Number(e.target.value))}
        />
      </div>
      <div className="col-span-2 space-y-2 sm:col-span-1">
        <Label htmlFor="step-value">Step</Label>
        <Input
          id="step-value"
          type="number"
          min="1"
          value={step}
          onChange={(e) => onStepChange(Number(e.target.value) || 1)}
        />
      </div>
    </div>
  );
}
