import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { site } from "@/lib/site";

/**
 * Served at /sitemap.xml. Route pages come straight from the data file, so new
 * routes appear in the sitemap the moment they are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/transfers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...routes.map((route) => ({
      url: `${site.url}/transfers/${route.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
