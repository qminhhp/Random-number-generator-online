import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp, Copy, RotateCcw } from "lucide-react";
import { useState } from "react";

export interface HistoryItem {
  id: string;
  timestamp: Date;
  mode: string;
  result: number | number[] | string | string[];
  format: "decimal" | "hex" | "binary";
}

interface HistoryProps {
  history: HistoryItem[];
  onClear: () => void;
  onReuse: (item: HistoryItem) => void;
}

export function History({ history, onClear, onReuse }: HistoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatValue = (
    value: any,
    format: "decimal" | "hex" | "binary",
  ): string => {
    if (typeof value === "number") {
      switch (format) {
        case "hex":
          return `0x${value.toString(16).toUpperCase()}`;
        case "binary":
          return `0b${value.toString(2)}`;
        default:
          return value.toString();
      }
    } else if (Array.isArray(value)) {
      return value.map((v) => formatValue(v, format)).join(", ");
    } else {
      return String(value);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card>
      <CardHeader
        className="cursor-pointer pb-2 pt-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">History</CardTitle>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
        <CardDescription>
          {history.length} previous{" "}
          {history.length === 1 ? "result" : "results"}
        </CardDescription>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-4 pt-0">
          {history.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              No history yet
            </p>
          ) : (
            <>
              <div className="max-h-64 space-y-2 overflow-y-auto">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-md border p-2 text-sm"
                  >
                    <div className="flex-1 overflow-hidden">
                      <div className="font-medium">
                        {formatValue(item.result, item.format)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.mode} · {item.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(
                            formatValue(item.result, item.format),
                          );
                        }}
                        title="Copy to clipboard"
                      >
                        <Copy size={14} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={(e) => {
                          e.stopPropagation();
                          onReuse(item);
                        }}
                        title="Reuse this configuration"
                      >
                        <RotateCcw size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
              >
                Clear History
              </Button>
            </>
          )}
        </CardContent>
      )}
    </Card>
  );
}
