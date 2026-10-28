import { notFound } from "next/navigation";
import { Breadcrumbs, JsonLd } from "@/components/blocks";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * Legal pages (design system 3.28), served from one template.
 *
 * !! PLACEHOLDER COPY !!
 * These are structural stubs so the footer links resolve and the layout is
 * ready. The wording is NOT legal advice and must be replaced with the
 * client's own reviewed policies before launch.
 */

type Section = { heading: string; body: string };
type LegalPage = {
  title: string;
  h1: string;
  description: string;
  intro: string;
  sections: Section[];
};

const PAGES: Record<string, LegalPage> = {
  terms: {
    title: "Terms & Conditions",
    h1: "Terms and conditions",
    description:
      "The terms on which Western Cars Littlehampton provides taxi and private hire services across West Sussex.",
    intro:
      "These terms apply to every booking made with Western Cars Littlehampton, by phone, online or through a corporate account.",
    sections: [
      {
        heading: "1. Who we are",
        body: "Western Cars Littlehampton is a licensed private hire operator based in Littlehampton, West Sussex, operating under licence from Arun District Council.",
      },
      {
        heading: "2. Bookings and quotations",
        body: "All private hire journeys must be pre-booked. Quoted fares are per vehicle and fixed for the journey described at the time of booking; a material change to the route, pickup time or passenger numbers may change the fare, and we will tell you before you travel.",
      },
      {
        heading: "3. Waiting time",
        body: "Airport pickups include 60 minutes of free waiting from the time the aircraft lands. All other pickups include 15 minutes. Waiting beyond the free allowance is charged at the rate quoted at the time of booking.",
      },
      {
        heading: "4. Cancellations",
        body: "Bookings cancelled more than 12 hours before the pickup time are not charged. Later cancellations, and journeys where no passenger presents at the pickup point, may be charged in full.",
      },
      {
        heading: "5. Liability",
        body: "We take reasonable care to arrive at the agreed time, but we are not liable for losses caused by events outside our reasonable control, including traffic incidents, severe weather and road closures. Nothing in these terms limits liability for death or personal injury caused by negligence.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    h1: "Privacy policy",
    description:
      "How Western Cars Littlehampton collects, uses and protects your personal data under UK GDPR.",
    intro:
      "We collect only the information needed to carry out your booking, and we never sell it.",
    sections: [
      {
        heading: "1. What we collect",
        body: "Your name, phone number, email address, pickup and drop-off addresses, and where relevant a flight number and payment details. Corporate accounts also hold a billing contact and cost-centre references.",
      },
      {
        heading: "2. Why we collect it",
        body: "To carry out the journey you have booked, to contact you about it, to take payment, and to meet our record-keeping obligations as a licensed operator.",
      },
      {
        heading: "3. How long we keep it",
        body: "Booking records are retained for the period required by our operator licence and by HMRC, and are then deleted.",
      },
      {
        heading: "4. Your rights",
        body: "You may ask for a copy of the data we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. Contact us on the number below to make a request.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    h1: "Cookie policy",
    description:
      "The cookies used on the Western Cars Littlehampton website and how to control them.",
    intro:
      "This site is built to work without tracking you. Only essential cookies are set unless you opt in to analytics.",
    sections: [
      {
        heading: "1. Essential cookies",
        body: "A small number of cookies are needed for the site to function, for example to remember a cookie preference you have already given. These cannot be switched off.",
      },
      {
        heading: "2. Analytics cookies",
        body: "If analytics are enabled, they are loaded only after you consent, and they are configured to anonymise IP addresses.",
      },
      {
        heading: "3. Managing cookies",
        body: "You can clear or block cookies in your browser settings at any time. Blocking essential cookies may stop parts of the booking form from working.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    h1: "Accessibility and disability policy",
    description:
      "Western Cars Littlehampton's commitment to accessible travel, including wheelchair accessible vehicles and assistance dogs.",
    intro:
      "Accessible travel is a core service for us, not an exception we make on request.",
    sections: [
      {
        heading: "1. Wheelchair accessible vehicles",
        body: "We operate ramp-equipped vehicles with secure wheelchair restraints. There is no additional charge for a wheelchair accessible vehicle; please request one when booking so we allocate the right car.",
      },
      {
        heading: "2. Assistance dogs",
        body: "Assistance dogs travel free and are carried in all our vehicles without prior notice. Refusing an assistance dog is unlawful and is a disciplinary matter for our drivers.",
      },
      {
        heading: "3. Driver assistance",
        body: "Our drivers are trained to offer assistance to and from the door, to help with luggage and mobility aids, and to wait as long as needed without pressure.",
      },
      {
        heading: "4. This website",
        body: "The site targets WCAG 2.1 AA. If any part of it is difficult to use, please call us and we will take the booking by phone and fix the problem.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return {};

  return buildMetadata({
    title: `${page.title} | ${site.name}`,
    description: page.description,
    path: `/${slug}`,
  });
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  const trail = [
    { name: "Home", href: "/" },
    { name: page.title, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="section section--tight">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <h1>{page.h1}</h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: "62ch" }}>
            {page.intro}
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {page.sections.map((section) => (
            <div
              key={section.heading}
              className="two-col"
              style={{
                gap: 48,
                padding: "40px 0",
                borderTop: "1px solid var(--color-line)",
              }}
            >
              <h2 style={{ fontSize: 24, lineHeight: 1.4, letterSpacing: "-0.02em" }}>
                {section.heading}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}

          <p className="small muted" style={{ marginTop: 40 }}>
            Questions about this policy? Call {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
