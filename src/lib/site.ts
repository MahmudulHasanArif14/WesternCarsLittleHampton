/**
 * Single source of truth for NAP (name / address / phone), services and nav.
 * Everything SEO-facing reads from here so the business details stay consistent
 * across page copy, metadata and JSON-LD.
 */

export const site = {
  name: "Western Cars Littlehampton",
  shortName: "Western Cars",
  legalName: "Western Cars Littlehampton",
  // TODO(client): replace with the production domain before launch.
  url: "https://www.westerncarslittlehampton.co.uk",
  phone: "01903 964888",
  phoneHref: "tel:+441903964888",
  // E.164, used in JSON-LD and the WhatsApp deep link.
  phoneE164: "+441903964888",
  whatsapp: "https://wa.me/4407722489859",
  facebook: "https://www.facebook.com/profile.php?id=61595882826505",
  email: "info@westerncarslittlehampton.co.uk",
  // TODO(client): confirm the trading address. Street line is deliberately
  // omitted from JSON-LD until supplied — do not invent one.
  address: {
    locality: "Littlehampton",
    region: "West Sussex",
    postalCode: "BN17",
    country: "GB",
  },
  geo: { lat: 50.8094, lng: -0.5405 },
  openingHours: "24 hours a day, 7 days a week",
  priceRange: "££",
} as const;

/** Primary category used for the LocalBusiness schema type and hero copy. */
export const primaryService = "Taxi service";

/** Towns and landmarks used for geo-targeted copy and `areaServed`. */
export const areasServed = [
  "Littlehampton",
  "Rustington",
  "East Preston",
  "Angmering",
  "Ferring",
  "Goring-by-Sea",
  "Worthing",
  "Arundel",
  "Bognor Regis",
  "Chichester",
  "Shoreham-by-Sea",
  "Brighton and Hove",
  "West Sussex",
] as const;

export type Service = {
  slug: string;
  name: string;
  summary: string;
};

/** Full service list supplied by the client, in the order given. */
export const services: Service[] = [
  {
    slug: "airport-transfers",
    name: "Airport transfers",
    summary:
      "Fixed-price runs to Gatwick, Heathrow, Stansted, Luton and Southampton, with flight tracking and a free waiting allowance.",
  },
  {
    slug: "corporate-travel",
    name: "Corporate travel",
    summary:
      "Punctual business travel across West Sussex on a monthly account, with VAT invoicing and cost-centre references.",
  },
  {
    slug: "mpv-hire",
    name: "MPV hire",
    summary:
      "Extra space for families and luggage-heavy trips, with child seats fitted free on request.",
  },
  {
    slug: "wheelchair-accessible-taxis",
    name: "Wheelchair accessible taxis",
    summary:
      "Ramp-equipped vehicles with secure restraints and drivers trained in assisted travel.",
  },
  {
    slug: "long-distance-taxi-service",
    name: "Long-distance taxi service",
    summary:
      "Fixed quotes anywhere in mainland UK, agreed in writing before you travel.",
  },
  {
    slug: "courier-service",
    name: "Courier service",
    summary:
      "Same-day document and parcel delivery across Sussex with proof of handover.",
  },
  {
    slug: "airport-shuttle-service",
    name: "Airport shuttle service",
    summary:
      "Scheduled shared and private shuttles for hotels, schools and business parks.",
  },
  {
    slug: "chauffeur-service",
    name: "Chauffeur service",
    summary:
      "Executive saloons with a suited driver for the full day or by the hour.",
  },
  {
    slug: "transportation-service",
    name: "Transportation service",
    summary:
      "General passenger transport for contracts, groups and ongoing schedules.",
  },
  {
    slug: "meet-and-greet-service",
    name: "Meet and greet service",
    summary:
      "Your driver waits in arrivals with a name board and helps with the bags.",
  },
  {
    slug: "local-taxi-service",
    name: "Local taxi service",
    summary:
      "Everyday Littlehampton journeys — station runs, shopping, hospital and school.",
  },
  {
    slug: "corporate-account-service",
    name: "Corporate account service",
    summary:
      "One consolidated monthly invoice, named booker list and 24/7 priority dispatch.",
  },
  {
    slug: "executive-service",
    name: "Executive service",
    summary:
      "Premium vehicles, bottled water and a quiet ride for client-facing travel.",
  },
  {
    slug: "event-hire-car-service",
    name: "Event hire car service",
    summary:
      "Cars held on site for race days, conferences, awards nights and festivals.",
  },
  {
    slug: "pet-friendly-taxi-service",
    name: "Pet-friendly taxi service",
    summary:
      "Pets welcome by prior arrangement, with protective covers fitted as standard.",
  },
  {
    slug: "6-8-seater-minibus-taxi",
    name: "6-8 seater minibus taxi",
    summary:
      "Keep the group together — up to eight passengers plus luggage in one vehicle.",
  },
  {
    slug: "large-capacity-taxi",
    name: "Large capacity taxi",
    summary:
      "High-capacity vehicles for sports teams, work crews and airport parties.",
  },
  {
    slug: "wedding-car-service",
    name: "Wedding car service",
    summary:
      "Presentation-ready cars with ribbons, timed to the order of the day.",
  },
  {
    slug: "wedding-taxi-transport",
    name: "Wedding taxi transport",
    summary:
      "Guest shuttles between ceremony, reception and hotels on a planned timetable.",
  },
  {
    slug: "event-hire-taxi-transport",
    name: "Event hire taxi transport",
    summary:
      "Managed transport plans for organisers, with a single point of contact.",
  },
  {
    slug: "vip-transport-escort",
    name: "VIP transport escort",
    summary:
      "Discreet, vetted drivers for high-profile passengers and private itineraries.",
  },
  {
    slug: "security-escort-transport",
    name: "Security escort transport",
    summary:
      "Risk-aware transport arranged alongside your own security provider.",
  },
  {
    slug: "chauffeur-escort-service",
    name: "Chauffeur escort service",
    summary:
      "A dedicated chauffeur for the duration of your visit, door to door.",
  },
];

/** The six headline services shown on the home page grid. */
export const featuredServiceSlugs = [
  "airport-transfers",
  "local-taxi-service",
  "corporate-travel",
  "wheelchair-accessible-taxis",
  "6-8-seater-minibus-taxi",
  "wedding-car-service",
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Transfers", href: "/transfers" },
  { label: "Why us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export const footerColumns = [
  {
    heading: "Ride",
    links: [
      {
        label: "Book online",
        href: "https://westerncars.webbooker.icabbi.com/",
      },
      { label: "All services", href: "/#services" },
      { label: "Popular transfers", href: "/transfers" },
      { label: "Contact us", href: "/#contact" },
    ],
  },
  {
    heading: "Airport transfers",
    links: [
      {
        label: "Littlehampton to Gatwick",
        href: "/transfers/littlehampton-to-gatwick-airport",
      },
      {
        label: "Littlehampton to Heathrow",
        href: "/transfers/littlehampton-to-heathrow-airport",
      },
      {
        label: "Gatwick to Littlehampton",
        href: "/transfers/gatwick-airport-to-littlehampton",
      },
      {
        label: "Worthing to Gatwick",
        href: "/transfers/worthing-to-gatwick-airport",
      },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Corporate travel", href: "/#services" },
      { label: "Wheelchair accessible", href: "/#services" },
      { label: "Minibus and group", href: "/#services" },
      { label: "Weddings and events", href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why choose us", href: "/#why-us" },
      { label: "Service areas", href: "/#areas" },
      { label: "Frequently asked", href: "/#faq" },
      { label: "Facebook", href: site.facebook },
    ],
  },
];
