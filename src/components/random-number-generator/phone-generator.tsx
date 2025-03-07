import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dices } from "lucide-react";

interface PhoneGeneratorProps {
  country: string;
  onCountryChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function PhoneGenerator({
  country,
  onCountryChange,
  onGenerate,
  isGenerating,
}: PhoneGeneratorProps) {
  const phoneFormats = [
    { id: "US", label: "United States (+1)", format: "+1 (xxx) xxx-xxxx" },
    { id: "UK", label: "United Kingdom (+44)", format: "+44 xxxx xxxxxx" },
    { id: "CA", label: "Canada (+1)", format: "+1 (xxx) xxx-xxxx" },
    { id: "AU", label: "Australia (+61)", format: "+61 xxx xxx xxx" },
    { id: "FR", label: "France (+33)", format: "+33 x xx xx xx xx" },
    { id: "DE", label: "Germany (+49)", format: "+49 xxx xxxxxxxx" },
    { id: "JP", label: "Japan (+81)", format: "+81 xx xxxx xxxx" },
    { id: "CN", label: "China (+86)", format: "+86 xxx xxxx xxxx" },
    { id: "IN", label: "India (+91)", format: "+91 xxxxx xxxxx" },
    { id: "BR", label: "Brazil (+55)", format: "+55 xx xxxxx-xxxx" },
  ];

  const selectedFormat =
    phoneFormats.find((f) => f.id === country)?.format ||
    phoneFormats[0].format;

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Select value={country} onValueChange={onCountryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {phoneFormats.map((format) => (
                <SelectItem key={format.id} value={format.id}>
                  {format.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            Format: {selectedFormat}
          </p>
        </div>

        <Button
          className="w-full gap-2"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          <Dices size={18} />
          Generate Phone Number
        </Button>
      </CardContent>
    </Card>
  );
}
