import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mehuljari.in";

  // For single-page applications, only include the main URL
  // Hash URLs (/#section) are not crawlable separately by search engines
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
