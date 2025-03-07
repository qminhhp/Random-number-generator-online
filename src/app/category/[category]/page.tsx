import {
  CommonRangesLinks,
  CategoryLinks,
  commonRanges,
} from "@/components/common-ranges-links";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSelector } from "@/components/language-selector";
import { MothersTeachingBanner } from "@/components/mothers-teaching-banner";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;

  // Check if category exists
  const categoryExists = commonRanges.some(
    (range) => range.category === category,
  );
  if (!categoryExists) {
    return {
      title: "Category Not Found - EasyRandomNumbers",
      description: "The specified category does not exist.",
    };
  }

  // Format category name for display (capitalize)
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${categoryName} Random Number Ranges - EasyRandomNumbers`,
    description: `Generate random numbers for ${categoryName.toLowerCase()} applications. Browse our collection of ${categoryName.toLowerCase()} number ranges.`,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = params.category;

  // Check if category exists
  const categoryExists = commonRanges.some(
    (range) => range.category === category,
  );
  if (!categoryExists) {
    notFound();
  }

  // Format category name for display (capitalize)
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  // Get category description
  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      basic: "Common number ranges for everyday use",
      dice: "Random dice rolls for tabletop and role-playing games",
      lottery: "Number ranges for popular lottery games worldwide",
      educational: "Number ranges useful for educational purposes",
      computing: "Binary and computing-related number ranges",
      security: "Ranges for PIN codes and security numbers",
      statistics: "Probability and statistics-related ranges",
      percentage: "Percentage and rating scales",
      time: "Time-related number ranges",
      age: "Age-related number ranges",
      temperature: "Temperature scales in Celsius and Fahrenheit",
      measurement: "Common measurement ranges",
      large: "Very large number ranges",
      science: "Science-related number ranges",
      music: "Music-related number ranges",
      games: "Game-related number ranges",
      sports: "Sports-related number ranges",
      phone: "Phone number related ranges",
    };

    return descriptions[cat] || "Random number ranges for various applications";
  };

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
            <div className="flex items-center gap-2 mb-2">
              <Link
                href="/popular-ranges"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                ← Back to All Categories
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {categoryName} Random Number Ranges
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {getCategoryDescription(category)}
            </p>
          </div>

          <div className="mb-8">
            <MothersTeachingBanner lang="en" />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              All {categoryName} Ranges
            </h3>
            <CommonRangesLinks category={category} limit={100} lang="en" />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Browse Other Categories
            </h3>
            <CategoryLinks lang="en" />
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
