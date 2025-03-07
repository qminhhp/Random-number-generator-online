"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function MothersTeachingBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 rounded-lg p-4 shadow-sm border border-purple-200 dark:border-purple-800">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-purple-700 dark:text-purple-300 text-lg mb-1">
            Heavenly Mother's Teachings
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Discover wisdom and guidance from Heavenly Mother's teachings
          </p>
        </div>
        <Link href="/mothers-teachings" className="shrink-0">
          <Button className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            <Sparkles size={16} />
            Explore Teachings
          </Button>
        </Link>
      </div>
    </div>
  );
}
