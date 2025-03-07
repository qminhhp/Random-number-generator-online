import Link from "next/link";

interface CommonRangeLink {
  min: number;
  max: number;
  label?: string;
  category: string;
}

export const commonRanges: CommonRangeLink[] = [
  // Basic ranges
  { min: 1, max: 10, category: "basic" },
  { min: 1, max: 100, category: "basic" },
  { min: 1, max: 1000, category: "basic" },
  { min: 0, max: 1, category: "basic" },
  { min: 0, max: 9, category: "basic" },
  { min: 0, max: 99, category: "basic" },
  { min: -10, max: 10, category: "basic" },
  { min: -100, max: 100, category: "basic" },

  // Dice and gaming
  { min: 1, max: 4, label: "d4", category: "dice" },
  { min: 1, max: 6, label: "d6", category: "dice" },
  { min: 1, max: 8, label: "d8", category: "dice" },
  { min: 1, max: 10, label: "d10", category: "dice" },
  { min: 1, max: 12, label: "d12", category: "dice" },
  { min: 1, max: 20, label: "d20", category: "dice" },
  { min: 1, max: 100, label: "d100", category: "dice" },

  // Lottery and games
  { min: 1, max: 49, label: "6/49 Lottery", category: "lottery" },
  { min: 1, max: 59, label: "Powerball", category: "lottery" },
  { min: 1, max: 70, label: "Mega Millions", category: "lottery" },
  { min: 1, max: 90, label: "Bingo", category: "lottery" },
  { min: 1, max: 36, label: "Roulette", category: "lottery" },
  { min: 1, max: 42, label: "UK Lottery", category: "lottery" },
  { min: 1, max: 45, label: "Australian Lottery", category: "lottery" },
  { min: 1, max: 80, label: "Keno", category: "lottery" },

  // Educational
  { min: 1, max: 12, label: "Months", category: "educational" },
  { min: 1, max: 7, label: "Days of Week", category: "educational" },
  { min: 1, max: 31, label: "Days of Month", category: "educational" },
  { min: 1, max: 24, label: "Hours", category: "educational" },
  { min: 1, max: 60, label: "Minutes/Seconds", category: "educational" },
  { min: 1, max: 26, label: "English Alphabet", category: "educational" },
  { min: 1, max: 50, label: "US States", category: "educational" },

  // Binary and computing
  { min: 0, max: 1, label: "Binary Bit", category: "computing" },
  { min: 0, max: 255, label: "Byte (8-bit)", category: "computing" },
  { min: 0, max: 65535, label: "16-bit Integer", category: "computing" },
  { min: 0, max: 127, label: "ASCII", category: "computing" },
  { min: 0, max: 16777215, label: "RGB Color", category: "computing" },
  { min: 1024, max: 65535, label: "Network Ports", category: "computing" },

  // PIN and security
  { min: 0, max: 9999, label: "4-Digit PIN", category: "security" },
  { min: 0, max: 999999, label: "6-Digit PIN", category: "security" },
  { min: 100000, max: 999999, label: "6-Digit OTP", category: "security" },
  { min: 1000, max: 9999, label: "4-Digit OTP", category: "security" },

  // Statistics and probability
  { min: 1, max: 36, label: "Coin Flips (1-36)", category: "statistics" },
  { min: 1, max: 52, label: "Deck of Cards", category: "statistics" },
  { min: 1, max: 13, label: "Card Values", category: "statistics" },
  { min: 1, max: 4, label: "Card Suits", category: "statistics" },

  // Specific use cases
  { min: 1, max: 118, label: "Elements", category: "science" },
  { min: 1, max: 88, label: "Piano Keys", category: "music" },
  { min: 1, max: 32, label: "Chess Pieces", category: "games" },
  { min: 1, max: 64, label: "Chess Squares", category: "games" },
  { min: 1, max: 11, label: "Football Players", category: "sports" },
  { min: 1, max: 9, label: "Baseball Positions", category: "sports" },
  { min: 1, max: 5, label: "Basketball Positions", category: "sports" },

  // Percentages
  { min: 1, max: 100, label: "Percentage", category: "percentage" },
  { min: 0, max: 100, label: "Percentage (with zero)", category: "percentage" },
  { min: 1, max: 10, label: "Rating (1-10)", category: "percentage" },
  { min: 1, max: 5, label: "Rating (1-5)", category: "percentage" },

  // Time
  { min: 1, max: 365, label: "Days in Year", category: "time" },
  { min: 1, max: 366, label: "Days in Leap Year", category: "time" },
  { min: 1, max: 52, label: "Weeks in Year", category: "time" },
  { min: 1, max: 12, label: "Months in Year", category: "time" },
  { min: 1, max: 4, label: "Seasons", category: "time" },
  { min: 1, max: 10, label: "Decades", category: "time" },
  { min: 1, max: 100, label: "Century", category: "time" },

  // Phone numbers
  {
    min: 1000000000,
    max: 9999999999,
    label: "10-Digit Phone",
    category: "phone",
  },
  { min: 100000000, max: 999999999, label: "9-Digit Phone", category: "phone" },
  { min: 1000, max: 9999, label: "Area Code", category: "phone" },

  // Custom ranges
  { min: 18, max: 65, label: "Adult Age Range", category: "age" },
  { min: 1, max: 18, label: "Child Age Range", category: "age" },
  { min: 65, max: 100, label: "Senior Age Range", category: "age" },
  { min: 1, max: 120, label: "Human Age Range", category: "age" },

  // Temperature
  { min: -50, max: 50, label: "Celsius Range", category: "temperature" },
  { min: 0, max: 100, label: "Celsius (Water)", category: "temperature" },
  { min: 32, max: 212, label: "Fahrenheit (Water)", category: "temperature" },
  { min: -58, max: 122, label: "Fahrenheit Range", category: "temperature" },

  // Measurement
  { min: 1, max: 100, label: "Centimeters", category: "measurement" },
  { min: 1, max: 1000, label: "Meters", category: "measurement" },
  { min: 1, max: 12, label: "Inches", category: "measurement" },
  { min: 1, max: 36, label: "Feet", category: "measurement" },
  { min: 1, max: 100, label: "Pounds", category: "measurement" },
  { min: 1, max: 1000, label: "Kilograms", category: "measurement" },

  // Miscellaneous
  { min: 1, max: 1000000, label: "Million", category: "large" },
  { min: 1, max: 1000000000, label: "Billion", category: "large" },
  { min: 1, max: 1000000000000, label: "Trillion", category: "large" },
  { min: 1, max: 1000000000000000, label: "Quadrillion", category: "large" },
  { min: 1, max: 1000000000000000000, label: "Quintillion", category: "large" },
];

interface CommonRangesLinksProps {
  category?: string;
  limit?: number;
  className?: string;
}

export function CommonRangesLinks({
  category,
  limit = 20,
  className = "",
  lang = "en",
}: CommonRangesLinksProps & { lang?: string }) {
  // Filter by category if provided
  const filteredRanges = category
    ? commonRanges.filter((range) => range.category === category)
    : commonRanges;

  // Limit the number of links shown
  const limitedRanges = filteredRanges.slice(0, limit);

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ${className}`}
    >
      {limitedRanges.map((range) => (
        <Link
          key={`${range.min}-${range.max}`}
          href={
            lang === "en"
              ? `/${range.min}-${range.max}`
              : `/${lang}/${range.min}-${range.max}`
          }
          className="text-sm px-3 py-2 rounded-md bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/50 transition-colors text-blue-700 dark:text-blue-300 no-underline text-center truncate"
          title={
            range.label || `Random number between ${range.min} and ${range.max}`
          }
        >
          {range.label || `${range.min}-${range.max}`}
        </Link>
      ))}
    </div>
  );
}

interface CategoryLinksProps {
  className?: string;
}

export function CategoryLinks({
  className = "",
  lang = "en",
}: CategoryLinksProps & { lang?: string }) {
  // Get unique categories
  const categories = Array.from(
    new Set(commonRanges.map((range) => range.category)),
  );

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category) => (
        <Link
          key={category}
          href={
            lang === "en"
              ? `/category/${category}`
              : `/${lang}/category/${category}`
          }
          className="text-sm px-3 py-2 rounded-md bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 transition-colors text-purple-700 dark:text-purple-300 no-underline capitalize"
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
