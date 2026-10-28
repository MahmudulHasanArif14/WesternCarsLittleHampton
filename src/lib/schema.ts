import { areasServed, services, site } from "./site";
import type { RouteEntry } from "@/data/routes";

/**
 * schema.org JSON-LD builders.
 *
 * TaxiService is a subtype of LocalBusiness, so a single node satisfies both
 * the LocalBusiness and the service-category requirement. The organisation node
 * carries a stable @id that every other node points back to, which keeps the
 * graph joined up instead of repeating the business on every page.
 */

const ORG_ID = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: site.priceRange,
    image: `${site.url}/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: areasServed.map((name) => ({ "@type": "Place", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [site.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi and private hire services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.summary,
        },
      })),
    },
  };
}

/** A Service node for one transfer route, priced and tied to the business. */
export function routeServiceSchema(route: RouteEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/transfers/${route.slug}#service`,
    name: `${route.origin} to ${route.destination} taxi transfer`,
    serviceType: "Taxi transfer",
    description: route.metaDescription,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Place", name: route.origin },
      { "@type": "Place", name: route.destination },
    ],
    offers: {
      "@type": "Offer",
      price: route.priceFrom,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${site.url}/transfers/${route.slug}`,
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: new URL(crumb.href, site.url).toString(),
    })),
  };
}
