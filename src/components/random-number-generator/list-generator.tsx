import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dices } from "lucide-react";

interface ListGeneratorProps {
  list: string;
  onListChange: (value: string) => void;
  count: number;
  onCountChange: (value: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function ListGenerator({
  list,
  onListChange,
  count,
  onCountChange,
  onGenerate,
  isGenerating,
}: ListGeneratorProps) {
  // Parse the list to get the number of items
  const items = list
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div className="space-y-2">
          <Label htmlFor="list">Enter items (one per line)</Label>
          <Textarea
            id="list"
            value={list}
            onChange={(e) => onListChange(e.target.value)}
            placeholder="Item 1\nItem 2\nItem 3"
            className="min-h-32"
          />
          <p className="text-xs text-muted-foreground">
            {items.length} items in the list
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="count">Number of items to pick</Label>
          <Input
            id="count"
            type="number"
            min="1"
            max={items.length}
            value={count}
            onChange={(e) => onCountChange(Number(e.target.value) || 1)}
          />
        </div>

        <Button
          className="w-full gap-2"
          onClick={onGenerate}
          disabled={isGenerating || items.length === 0 || count > items.length}
        >
          <Dices size={18} />
          Pick {count} {count === 1 ? "Item" : "Items"} Randomly
        </Button>
        {count > items.length && (
          <p className="text-xs text-destructive">
            Cannot pick more items than are in the list
          </p>
        )}
      </CardContent>
    </Card>
  );
}
