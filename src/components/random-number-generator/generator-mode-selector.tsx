import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type GeneratorMode =
  | "standard"
  | "digits"
  | "pin"
  | "phone"
  | "list"
  | "lottery"
  | "special";

interface GeneratorModeSelectorProps {
  mode: GeneratorMode;
  onModeChange: (mode: GeneratorMode) => void;
}

export function GeneratorModeSelector({
  mode,
  onModeChange,
}: GeneratorModeSelectorProps) {
  const modes = [
    { id: "standard", label: "Standard Range" },
    { id: "digits", label: "X-Digit Numbers" },
    { id: "pin", label: "PIN Code" },
    { id: "phone", label: "Phone Numbers" },
    { id: "list", label: "From List" },
    { id: "lottery", label: "Lottery Numbers" },
    { id: "special", label: "Special Numbers" },
  ];

  return (
    <div className="w-full">
      <Select
        value={mode}
        onValueChange={(value) => onModeChange(value as GeneratorMode)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select generator mode" />
        </SelectTrigger>
        <SelectContent>
          {modes.map((modeOption) => (
            <SelectItem key={modeOption.id} value={modeOption.id}>
              {modeOption.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
