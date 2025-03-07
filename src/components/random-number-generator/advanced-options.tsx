import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface AdvancedOptionsProps {
  count: number;
  onCountChange: (value: number) => void;
  format: "decimal" | "hex" | "binary";
  onFormatChange: (format: "decimal" | "hex" | "binary") => void;
}

export function AdvancedOptions({
  count,
  onCountChange,
  format,
  onFormatChange,
}: AdvancedOptionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <CardHeader
        className="cursor-pointer pb-2 pt-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Advanced Options</CardTitle>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        <CardDescription>Configure additional settings</CardDescription>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-4 pt-0">
          <div className="space-y-2">
            <Label htmlFor="count">Number Count</Label>
            <Input
              id="count"
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => onCountChange(Number(e.target.value) || 1)}
            />
            <p className="text-xs text-muted-foreground">
              Generate multiple numbers at once (max 100)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="format">Number Format</Label>
            <Select
              value={format}
              onValueChange={(value: any) => onFormatChange(value)}
            >
              <SelectTrigger id="format">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="decimal">Decimal</SelectItem>
                <SelectItem value="hex">Hexadecimal</SelectItem>
                <SelectItem value="binary">Binary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
