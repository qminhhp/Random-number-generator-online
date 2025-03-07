"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { mothersTeachings } from "@/data/mothers-teachings";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export function MothersTeaching() {
  const { language } = useLanguage();
  const [teaching, setTeaching] = useState(mothersTeachings[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateRandomTeaching = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mothersTeachings.length);
      setTeaching(mothersTeachings[randomIndex]);
      setIsAnimating(false);
    }, 500);
  };

  // Generate a random teaching on initial load
  useEffect(() => {
    generateRandomTeaching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="border-purple-200 dark:border-purple-800 shadow-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 pb-2 pt-4">
        <CardTitle className="text-lg flex justify-between items-center">
          <span>Heavenly Mother's Teaching</span>
          <span className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded-full">
            #{teaching.id}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div
          className={`min-h-24 flex flex-col justify-center transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
        >
          <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
            {language === "ko" && teaching.ko
              ? teaching.ko.title
              : teaching.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 italic">
            "
            {language === "ko" && teaching.ko
              ? teaching.ko.teaching
              : teaching.teaching}
            "
          </p>
        </div>
        <Button
          onClick={generateRandomTeaching}
          className="w-full gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          disabled={isAnimating}
        >
          <Sparkles size={16} />
          Receive New Teaching
        </Button>
      </CardContent>
      <CardFooter className="bg-purple-50 dark:bg-purple-900/20 p-2 text-xs text-center">
        <Link
          href={
            language === "ko"
              ? "https://watv.org/ko/category/faith-life-ko/teachings-of-mother/"
              : "https://watv.org/category/faith-life/teachings-of-mother/"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full text-purple-600 dark:text-purple-300 hover:underline"
        >
          <span>
            {language === "ko"
              ? "어머니의 교훈 더 보기"
              : "More Teachings of Mother"}
          </span>
          <ExternalLink size={12} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
