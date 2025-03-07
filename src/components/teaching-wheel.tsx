"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { mothersTeachings } from "@/data/mothers-teachings";
import { Sparkles, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export function TeachingWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedTeaching, setSelectedTeaching] = useState<
    (typeof mothersTeachings)[0] | null
  >(null);
  const [showDialog, setShowDialog] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    // Random number of full rotations (3-5) plus a random position
    const spins = 3 + Math.floor(Math.random() * 3);
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = spins * 360 + randomAngle;

    // Set the new rotation
    setRotation(rotation + totalRotation);

    // Calculate which teaching will be selected
    const segmentSize = 360 / mothersTeachings.length;
    const normalizedAngle = randomAngle % 360;
    const selectedIndex = Math.floor(normalizedAngle / segmentSize);

    // After animation completes, show the dialog
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedTeaching(
        mothersTeachings[mothersTeachings.length - 1 - selectedIndex],
      );
      setShowDialog(true);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Wheel marker (pointer) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-purple-600 z-10" />

        {/* Wheel */}
        <div
          ref={wheelRef}
          className="w-full h-full rounded-full overflow-hidden border-4 border-purple-600 shadow-lg transition-transform duration-3000 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {mothersTeachings.map((teaching, index) => {
            const segmentSize = 360 / 13; // Exactly 13 segments
            const angle = index * segmentSize;
            const isEven = index % 2 === 0;

            return (
              <div
                key={teaching.id}
                className={`absolute w-full h-full origin-center ${isEven ? "bg-purple-100 dark:bg-purple-900/40" : "bg-blue-100 dark:bg-blue-900/40"}`}
                style={{
                  transform: `rotate(${angle}deg) skew(${90 - segmentSize}deg)`,
                  transformOrigin: "bottom left",
                }}
              >
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-bold text-center w-12 h-12 flex items-center justify-center"
                  style={{
                    transform: `rotate(${-angle - (90 - segmentSize) / 2}deg) translateY(-80%)`,
                  }}
                >
                  {teaching.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Button
        onClick={spinWheel}
        disabled={isSpinning}
        className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-md"
      >
        <Sparkles size={16} />
        {isSpinning ? "Praying..." : "Pray for Today's Teaching"}
      </Button>

      {/* Result Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Heavenly Mother's Blessing
            </DialogTitle>
            <DialogDescription className="text-center">
              God has answered your prayer with this teaching
            </DialogDescription>
          </DialogHeader>

          {selectedTeaching && (
            <div className="py-4">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-lg">
                Mother's Teaching No. {selectedTeaching.id}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "{selectedTeaching.teaching}"
              </p>
              <div className="flex justify-center">
                <Link
                  href={selectedTeaching.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>Read more about this teaching</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          )}

          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => setShowDialog(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
