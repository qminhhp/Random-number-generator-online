import dynamic from "next/dynamic";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LanguageSelector } from "@/components/language-selector";
import { CommonRangesLinks } from "@/components/common-ranges-links";
import { MothersTeachingBanner } from "@/components/mothers-teaching-banner";
import Link from "next/link";

// Lazy load the RandomNumberGenerator component
const RandomNumberGenerator = dynamic(
  () =>
    import("@/components/random-number-generator/random-number-generator").then(
      (mod) => ({ default: mod.RandomNumberGenerator }),
    ),
  {
    ssr: true,
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center">
        Đang tải trình tạo số...
      </div>
    ),
  },
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pb-24">
      <header className="sticky top-0 z-10 border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <Link href="/vi" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg">
              <span className="font-bold">E</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EasyRandomNumbers
            </h1>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/vi/popular-ranges"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline mr-2 hidden sm:inline-block"
            >
              Phạm vi phổ biến
            </Link>
            <LanguageSelector />
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="container py-6 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tạo số ngẫu nhiên ngay lập tức!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Hoàn hảo cho trò chơi, xổ số, quyết định và nhiều hơn nữa. Nhanh
              chóng, miễn phí và thú vị để sử dụng!
            </p>
          </div>
          <RandomNumberGenerator />

          <div className="mt-8">
            <MothersTeachingBanner />
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-blue-700 dark:text-blue-300">
                Phạm vi phổ biến
              </h3>
              <Link
                href="/vi/popular-ranges"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Xem tất cả →
              </Link>
            </div>
            <CommonRangesLinks limit={12} />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} EasyRandomNumbers. Tất cả các số
              ngẫu nhiên được tạo ngay lập tức trong trình duyệt của bạn.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
