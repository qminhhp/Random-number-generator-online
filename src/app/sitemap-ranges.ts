import { MetadataRoute } from "next";
import { commonRanges } from "@/components/common-ranges-links";

export default function sitemapRanges(): MetadataRoute.Sitemap {
  const baseUrl = "https://easyrandomnumbers.com";

  // Create sitemap entries for all common ranges
  const rangeRoutes = commonRanges.map((range) => ({
    url: `${baseUrl}/${range.min}-${range.max}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Get unique categories
  const categories = Array.from(
    new Set(commonRanges.map((range) => range.category)),
  );

  // Create sitemap entries for all category pages
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Add the popular ranges page
  const popularRangesRoute = {
    url: `${baseUrl}/popular-ranges`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  };

  return [...rangeRoutes, ...categoryRoutes, popularRangesRoute];
}
