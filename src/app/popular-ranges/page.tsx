import {
  CommonRangesLinks,
  CategoryLinks,
} from "@/components/common-ranges-links";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSelector } from "@/components/language-selector";
import { MothersTeachingBanner } from "@/components/mothers-teaching-banner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Random Number Ranges - EasyRandomNumbers",
  description:
    "Browse our collection of popular random number ranges for games, lotteries, education, and more.",
};

export default function PopularRangesPage() {
  const categories = [
    {
      id: "basic",
      name: "Basic Ranges",
      description: "Common number ranges for everyday use",
    },
    {
      id: "dice",
      name: "Dice & Gaming",
      description: "Random dice rolls for tabletop and role-playing games",
    },
    {
      id: "lottery",
      name: "Lottery & Games",
      description: "Number ranges for popular lottery games worldwide",
    },
    {
      id: "educational",
      name: "Educational",
      description: "Number ranges useful for educational purposes",
    },
    {
      id: "computing",
      name: "Computing",
      description: "Binary and computing-related number ranges",
    },
    {
      id: "security",
      name: "PIN & Security",
      description: "Ranges for PIN codes and security numbers",
    },
    {
      id: "statistics",
      name: "Statistics",
      description: "Probability and statistics-related ranges",
    },
    {
      id: "percentage",
      name: "Percentages",
      description: "Percentage and rating scales",
    },
    { id: "time", name: "Time", description: "Time-related number ranges" },
    { id: "age", name: "Age", description: "Age-related number ranges" },
    {
      id: "temperature",
      name: "Temperature",
      description: "Temperature scales in Celsius and Fahrenheit",
    },
    {
      id: "measurement",
      name: "Measurement",
      description: "Common measurement ranges",
    },
    {
      id: "large",
      name: "Large Numbers",
      description: "Very large number ranges",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pb-24">
      <header className="sticky top-0 z-10 border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg">
              <span className="font-bold">E</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EasyRandomNumbers
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="container py-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <MothersTeachingBanner lang="en" />
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Popular Random Number Ranges
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Browse our collection of popular random number ranges for games,
              lotteries, education, and more. Click on any range to generate
              random numbers instantly!
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
            <CategoryLinks className="mb-6" lang="en" />

            <div className="space-y-8">
              {categories.map((category) => (
                <section
                  key={category.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <CommonRangesLinks
                    category={category.id}
                    limit={12}
                    lang="en"
                  />
                  <div className="mt-2 text-right">
                    <Link
                      href={`/category/${category.id}`}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View all {category.name} ranges →
                    </Link>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md shadow-md transition-all inline-block"
            >
              Back to Generator
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 py-4">
        <p>
          © {new Date().getFullYear()} EasyRandomNumbers. All random numbers
          are generated instantly in your browser.
        </p>
      </footer>
    </div>
  );
}
