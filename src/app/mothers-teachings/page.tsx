import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSelector } from "@/components/language-selector";
import { mothersTeachings } from "@/data/mothers-teachings";
import { TeachingPrayer } from "@/components/teaching-prayer";
import Link from "next/link";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Heavenly Mother's Teachings - EasyRandomNumbers",
  description: "Discover wisdom and guidance from Heavenly Mother's teachings.",
};

export default function MothersTeachingsPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Heavenly Mother's Teachings
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wisdom and guidance from Heavenly Mother to help us live a more
              loving and fulfilling life.
            </p>
          </div>

          <div className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-purple-200 dark:border-purple-800">
            <h3 className="text-xl font-semibold text-center mb-4 text-purple-700 dark:text-purple-300">
              Teaching of the Day
            </h3>
            <TeachingPrayer />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {mothersTeachings.map((teaching) => (
              <div
                key={teaching.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-lg">
                  Mother's Teaching No. {teaching.id}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                  "{teaching.teaching}"
                </p>
                <Link
                  href={teaching.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>Read more</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://watv.org/category/faith-life/teachings-of-mother/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md shadow-md transition-all"
            >
              <span>More Teachings of Mother</span>
              <ExternalLink size={16} />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md shadow-md transition-all inline-block mt-4"
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
