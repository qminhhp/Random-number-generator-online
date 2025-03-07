import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";

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
  const { t } = useLanguage();

  const modes = [
    { id: "standard", label: t("standardRange") },
    { id: "digits", label: t("xDigitNumbers") },
    { id: "pin", label: t("pinCode") },
    { id: "phone", label: t("phoneNumbers") },
    { id: "list", label: t("fromList") },
    { id: "lottery", label: t("lotteryNumbers") },
    { id: "special", label: t("specialNumbers") },
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
