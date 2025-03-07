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
  title: "Phạm vi số ngẫu nhiên phổ biến - EasyRandomNumbers",
  description:
    "Duyệt qua bộ sưu tập các phạm vi số ngẫu nhiên phổ biến cho trò chơi, xổ số, giáo dục và nhiều hơn nữa.",
};

export default function PopularRangesPage() {
  const categories = [
    {
      id: "basic",
      name: "Phạm vi cơ bản",
      description: "Phạm vi số thông dụng cho sử dụng hàng ngày",
    },
    {
      id: "dice",
      name: "Xúc xắc & Trò chơi",
      description:
        "Tung xúc xắc ngẫu nhiên cho trò chơi bàn và trò chơi nhập vai",
    },
    {
      id: "lottery",
      name: "Xổ số & Trò chơi",
      description:
        "Phạm vi số cho các trò chơi xổ số phổ biến trên toàn thế giới",
    },
    {
      id: "educational",
      name: "Giáo dục",
      description: "Phạm vi số hữu ích cho mục đích giáo dục",
    },
    {
      id: "computing",
      name: "Máy tính",
      description: "Phạm vi liên quan đến nhị phân và máy tính",
    },
    {
      id: "security",
      name: "PIN & Bảo mật",
      description: "Phạm vi cho mã PIN và số bảo mật",
    },
    {
      id: "statistics",
      name: "Thống kê",
      description: "Phạm vi liên quan đến xác suất và thống kê",
    },
    {
      id: "percentage",
      name: "Phần trăm",
      description: "Thang phần trăm và đánh giá",
    },
    {
      id: "time",
      name: "Thời gian",
      description: "Phạm vi số liên quan đến thời gian",
    },
    {
      id: "age",
      name: "Tuổi tác",
      description: "Phạm vi số liên quan đến tuổi tác",
    },
    {
      id: "temperature",
      name: "Nhiệt độ",
      description: "Thang nhiệt độ theo Celsius và Fahrenheit",
    },
    {
      id: "measurement",
      name: "Đo lường",
      description: "Phạm vi đo lường thông dụng",
    },
    {
      id: "large",
      name: "Số lớn",
      description: "Phạm vi số rất lớn",
    },
  ];

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
            <MothersTeachingBanner />
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Phạm vi số ngẫu nhiên phổ biến
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Duyệt qua bộ sưu tập các phạm vi số ngẫu nhiên phổ biến cho trò
              chơi, xổ số, giáo dục và nhiều hơn nữa. Nhấp vào bất kỳ phạm vi
              nào để tạo số ngẫu nhiên ngay lập tức!
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Duyệt theo danh mục</h3>
            <CategoryLinks className="mb-6" />

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
                  <CommonRangesLinks category={category.id} limit={12} />
                  <div className="mt-2 text-right">
                    <Link
                      href={`/vi/category/${category.id}`}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Xem tất cả phạm vi {category.name.toLowerCase()} →
                    </Link>
                  </div>
                </section>
              ))}
            </div>
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
