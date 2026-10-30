import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { BookingBar } from "@/components/BookingBar";
import {
  Breadcrumbs,
  CheckList,
  Faq,
  Feature,
  JsonLd,
  PhotoBand,
  SectionHead,
  SeoBand,
} from "@/components/blocks";
import {
  getRelatedRoutes,
  getRoute,
  routes,
  type RouteEntry,
} from "@/data/routes";
import { photos } from "@/lib/images";
import { breadcrumbSchema, faqSchema, routeServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

/**
 * Statically generate one page per entry in the route data file. Adding the
 * remaining ~70 routes means adding data, not code.
 */
export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

/** Unknown slugs 404 rather than rendering an empty shell. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) return {};

  return buildMetadata({
    title: route.title,
    description: route.metaDescription,
    path: `/transfers/${route.slug}`,
    image: photos.airport.src,
    imageAlt: `Taxi transfer from ${route.origin} to ${route.destination}`,
  });
}

/** Pick a hero-band photo that suits the route type. */
function bandPhoto(route: RouteEntry) {
  if (route.category === "airport") return photos.airport;
  if (route.category === "port") return photos.coach;
  return photos.cityRoad;
}

export default async function RoutePage({ params }: Params) {
  const { slug } = await params;
  const route = getRoute(slug);
  if (!route) notFound();

  const related = getRelatedRoutes(route);
  const [minDuration, maxDuration] = route.durationMins;
  const trail = [
    { name: "Home", href: "/" },
    { name: "Transfers", href: "/transfers" },
    {
      name: `${route.origin} to ${route.destination}`,
      href: `/transfers/${route.slug}`,
    },
  ];

  return (
    <>
      <JsonLd data={routeServiceSchema(route)} />
      <JsonLd data={faqSchema(route.faqs)} />
      <JsonLd data={breadcrumbSchema(trail)} />

      {/* 1. Route hero with fact sidebar (3.19) */}
      <section className="section section--tight">
        <div className="container route-hero">
          <div>
            <Breadcrumbs trail={trail} />
            <h1>
              {route.origin} to {route.destination} taxi transfer
            </h1>

            <div className="route-hero__meta">
              <span>
                <Icon name="clock" size={17} />
                Approx duration: {minDuration}&ndash;{maxDuration} mins
              </span>
              <span>
                <Icon name="pin" size={17} />
                Distance: {route.distanceMiles} miles
              </span>
              <span>
                <Icon name="pound" size={17} />
                Fixed fare from £{route.priceFrom}
              </span>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button
                href="https://westerncars.webbooker.icabbi.com/"
                variant="dark"
                icon="up-right"
              >
                Book a transfer
              </Button>
              <Button href={site.phoneHref} variant="outline">
                Call {site.phone}
              </Button>
            </div>

            <div className="route-hero__intro">
              <p className="strong-lead">{route.lead}</p>
              <p style={{ marginTop: 16 }}>{route.intro}</p>
              <p style={{ marginTop: 16 }}>{route.localNote}</p>
            </div>
          </div>

          <aside className="route-hero__side" aria-label="Fares and guarantee">
            <div className="fares">
              <h2>Fixed fares</h2>
              <ul>
                <li>
                  <strong>£{route.priceFrom}</strong> {route.origin} to{" "}
                  {route.destination}
                </li>
                <li>
                  <strong>£{route.returnPrice}</strong> return direction
                </li>
                <li>
                  <strong>From £{route.priceFrom + 18}</strong> 8-seater minibus
                </li>
              </ul>
              <p className="small muted" style={{ marginTop: 16 }}>
                Prices are per vehicle, not per person, and include waiting time
                within the free allowance.
              </p>
            </div>

            <div className="guarantee notch--tr">
              <Icon name="medal" size={30} />
              <h2>Fixed fare guarantee</h2>
              <p>
                The price we confirm is the price you pay. Traffic, diversions
                and delays are our problem, not an extra charge on yours.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* 2. Photo band + booking bar */}
      <PhotoBand photo={bandPhoto(route)} priority />
      <div className="container photo-band__bar">
        <BookingBar idPrefix="route" anchor />
      </div>

      {/* 3. What's included (3.6) */}
      <section className="section">
        <div className="container">
          <SectionHead
            title={`What's included in your ${route.destination} transfer`}
            text="Every fixed-fare journey comes with the same standards, whichever vehicle turns up."
            cta={
              <Button
                href="https://westerncars.webbooker.icabbi.com/"
                variant="dark"
                icon="up-right"
              >
                Book a transfer
              </Button>
            }
          />

          <div className="grid grid--3">
            <Feature icon="pound" title="One agreed price">
              Confirmed in writing before you travel, including card payment and
              any drop-off charges.
            </Feature>
            <Feature icon="plane" title="Flight and train tracking">
              We follow your arrival in real time and move the pickup to match
              it, at no extra cost.
            </Feature>
            <Feature icon="clock" title="Free waiting time">
              Sixty minutes from landing at airports, fifteen minutes on all
              other pickups.
            </Feature>
            <Feature icon="luggage" title="Help with the luggage">
              Your driver loads and unloads. Tell us the case count and we will
              size the vehicle to suit.
            </Feature>
            <Feature icon="child" title="Child seats fitted free">
              Baby, child and booster seats at no charge, as long as you ask
              when booking.
            </Feature>
            <Feature icon="shield" title="Licensed and insured">
              DBS-checked drivers licensed by Adur District Council, in fully
              insured private hire vehicles.
            </Feature>
          </div>
        </div>
      </section>

      {/* 4. Why choose (3.20) */}
      <section className="section section--grey">
        <div className="container two-col">
          <div>
            <h2>
              Why choose Western Cars for {route.origin} to {route.destination}?
            </h2>

            <div className="mini-grid">
              <div className="mini">
                <p className="mini__title">
                  <span className="mini__marker" aria-hidden="true" />
                  Drivers who know the route
                </p>
                <p>
                  Local drivers who run this journey every week and know where
                  it slows down.
                </p>
              </div>
              <div className="mini">
                <p className="mini__title">
                  <span className="mini__marker" aria-hidden="true" />
                  No surge pricing
                </p>
                <p>
                  The same £{route.priceFrom} at 4am on a bank holiday as at
                  midday on a Tuesday.
                </p>
              </div>
              <div className="mini">
                <p className="mini__title">
                  <span className="mini__marker" aria-hidden="true" />
                  Vehicle sized to the job
                </p>
                <p>
                  Saloon, MPV or 8-seater, allocated on the luggage and
                  passengers you tell us about.
                </p>
              </div>
              <div className="mini">
                <p className="mini__title">
                  <span className="mini__marker" aria-hidden="true" />
                  Someone always answers
                </p>
                <p>
                  A staffed local office 24 hours a day, not an app with no
                  phone number.
                </p>
              </div>
            </div>

            <p className="strong-lead">
              Ready to book your {route.origin} to {route.destination} transfer?
            </p>
            <div style={{ marginTop: 20 }}>
              <Button
                href="https://westerncars.webbooker.icabbi.com/"
                variant="dark"
                icon="up-right"
              >
                Book online
              </Button>
            </div>
          </div>

          <div className="media-notch notch">
            <Image
              src={photos.busInterior.src}
              alt={photos.busInterior.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* 5. Safety (dark) */}
      <section className="section section--dark">
        <div className="container two-col">
          <div>
            <h2>Travelling safely</h2>
            <p style={{ marginTop: 20 }}>
              Private hire is a regulated service and we treat it that way.
              Every journey is logged, every driver is checked, and someone at
              the office can tell you exactly where your car is.
            </p>
            <CheckList
              items={[
                "DBS-checked, council-licensed drivers",
                "Vehicles inspected and fully insured",
                "Journey details shared with whoever is meeting you",
                "24-hour emergency contact on every booking",
              ]}
            />
          </div>
          <div className="grid" style={{ gap: 32 }}>
            <Feature icon="phone" title="Emergency support">
              A real person on the end of the phone at any hour of the day or
              night, for the whole journey.
            </Feature>
            <Feature icon="lock" title="Data protection">
              Booking details are kept only as long as needed and never sold or
              passed to third parties.
            </Feature>
            <Feature icon="pin" title="Journey sharing">
              Driver name, vehicle and registration sent ahead, so you know who
              is arriving.
            </Feature>
          </div>
        </div>
      </section>

      {/* 6. FAQ (3.11) */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: 48 }}>
            {route.origin} to {route.destination}: common questions
          </h2>
          <Faq items={route.faqs} group="route-faq" />
        </div>
      </section>

      {/* 7. Other popular transfers (3.21) */}
      <section className="section section--grey">
        <div className="container">
          <SectionHead
            title="Other popular transfers"
            text="Fixed fares on the routes our passengers book most often."
            cta={
              <Button href="/transfers" variant="outline" icon="right">
                All transfers
              </Button>
            }
          />

          <div className="route-cards">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/transfers/${item.slug}`}
                className="route-card notch"
              >
                <h3>
                  {item.origin} to {item.destination}
                </h3>
                <div className="route-card__meta">
                  <span>
                    <Icon name="clock" size={17} />
                    {item.durationMins[0]}&ndash;{item.durationMins[1]} mins
                  </span>
                  <span>
                    <Icon name="pin" size={17} />
                    {item.distanceMiles} miles
                  </span>
                  <span>
                    <Icon name="pound" size={17} />
                    Fixed fare from £{item.priceFrom}
                  </span>
                </div>
                <span className="route-card__arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}

            <div className="route-cards__photo">
              <Image
                src={photos.executiveCar.src}
                alt={photos.executiveCar.alt}
                fill
                sizes="(max-width: 1024px) 0px, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <BookingBar idPrefix="related" />
          </div>
        </div>
      </section>

      {/* 8. Yellow SEO band (3.14) */}
      <SeoBand
        title={`${route.origin} to ${route.destination} taxi, fixed price`}
        ctaLabel="Book this transfer"
        ctaHref="#book"
      >
        Book a fixed-fare{" "}
        <strong>
          {route.origin} to {route.destination} taxi
        </strong>{" "}
        from <strong>£{route.priceFrom}</strong> with Western Cars
        Littlehampton. The journey covers roughly{" "}
        <strong>{route.distanceMiles} miles</strong> in{" "}
        <strong>
          {minDuration}&ndash;{maxDuration} minutes
        </strong>
        , with flight tracking, free waiting time and{" "}
        <strong>24-hour availability</strong> across{" "}
        <strong>Littlehampton and West Sussex</strong>. Call{" "}
        <strong>{site.phone}</strong> to confirm your price.
      </SeoBand>
    </>
  );
}
