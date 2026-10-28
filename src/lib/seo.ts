import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = {
  title: string;
  description: string;
  /** Site-root-relative path, e.g. "/transfers/littlehampton-to-gatwick-airport". */
  path: string;
  image?: string;
  imageAlt?: string;
  /** Set false for thin or duplicate pages that should stay out of the index. */
  index?: boolean;
};

/**
 * Builds a complete metadata object: title, description, canonical, robots,
 * Open Graph and Twitter card. Every page goes through this so no page can
 * ship without a canonical or a unique title.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  index = true,
}: PageSeo): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    // Absolute: these titles already carry the brand and are written to a
    // 55-60 character budget. Letting the layout template append the brand
    // again would push every page well past what search results display.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_GB",
      url,
      title,
      description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
