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
      title: "Không tìm thấy danh mục - EasyRandomNumbers",
      description: "Danh mục được chỉ định không tồn tại.",
    };
  }

  // Format category name for display (capitalize)
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `Phạm vi số ngẫu nhiên ${categoryName} - EasyRandomNumbers`,
    description: `Tạo số ngẫu nhiên cho ứng dụng ${categoryName.toLowerCase()}. Duyệt qua bộ sưu tập phạm vi số ${categoryName.toLowerCase()} của chúng tôi.`,
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

  // Vietnamese category names
  const viCategoryNames: Record<string, string> = {
    basic: "Cơ bản",
    dice: "Xúc xắc",
    lottery: "Xổ số",
    educational: "Giáo dục",
    computing: "Máy tính",
    security: "Bảo mật",
    statistics: "Thống kê",
    percentage: "Phần trăm",
    time: "Thời gian",
    age: "Tuổi tác",
    temperature: "Nhiệt độ",
    measurement: "Đo lường",
    large: "Số lớn",
    science: "Khoa học",
    music: "Âm nhạc",
    games: "Trò chơi",
    sports: "Thể thao",
    phone: "Điện thoại",
  };

  const viCategoryName = viCategoryNames[category] || categoryName;

  // Get category description
  const getCategoryDescription = (cat: string) => {
    const descriptions: Record<string, string> = {
      basic: "Phạm vi số thông dụng cho sử dụng hàng ngày",
      dice: "Tung xúc xắc ngẫu nhiên cho trò chơi bàn và trò chơi nhập vai",
      lottery: "Phạm vi số cho các trò chơi xổ số phổ biến trên toàn thế giới",
      educational: "Phạm vi số hữu ích cho mục đích giáo dục",
      computing: "Phạm vi liên quan đến nhị phân và máy tính",
      security: "Phạm vi cho mã PIN và số bảo mật",
      statistics: "Phạm vi liên quan đến xác suất và thống kê",
      percentage: "Thang phần trăm và đánh giá",
      time: "Phạm vi số liên quan đến thời gian",
      age: "Phạm vi số liên quan đến tuổi tác",
      temperature: "Thang nhiệt độ theo Celsius và Fahrenheit",
      measurement: "Phạm vi đo lường thông dụng",
      large: "Phạm vi số rất lớn",
      science: "Phạm vi số liên quan đến khoa học",
      music: "Phạm vi số liên quan đến âm nhạc",
      games: "Phạm vi số liên quan đến trò chơi",
      sports: "Phạm vi số liên quan đến thể thao",
      phone: "Phạm vi liên quan đến số điện thoại",
    };

    return (
      descriptions[cat] || "Phạm vi số ngẫu nhiên cho các ứng dụng khác nhau"
    );
  };

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
                href="/vi/popular-ranges"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                ← Quay lại tất cả danh mục
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Phạm vi số ngẫu nhiên {viCategoryName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {getCategoryDescription(category)}
            </p>
          </div>

          <div className="mb-8">
            <MothersTeachingBanner />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Tất cả phạm vi {viCategoryName}
            </h3>
            <CommonRangesLinks category={category} limit={100} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Duyệt các danh mục khác
            </h3>
            <CategoryLinks />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/vi"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md shadow-md transition-all inline-block"
            >
              Quay lại trình tạo số
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 py-4">
        <p>
          © {new Date().getFullYear()} EasyRandomNumbers. Tất cả các số ngẫu
          nhiên được tạo ngay lập tức trong trình duyệt của bạn.
        </p>
      </footer>
    </div>
  );
}
