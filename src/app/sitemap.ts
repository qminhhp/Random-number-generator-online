import { MetadataRoute } from "next";
import sitemapRanges from "./sitemap-ranges";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://easyrandomnumbers.com";

  // Base routes
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/popular-ranges`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Get all the range-specific routes from the separate file
  const rangeRoutes = sitemapRanges();

  // Combine all routes
  return [...mainRoutes, ...rangeRoutes];
}
