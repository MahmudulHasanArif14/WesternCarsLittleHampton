import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { BookingBar } from "@/components/BookingBar";
import {
  CheckList,
  Faq,
  Feature,
  JsonLd,
  PhotoBand,
  SectionHead,
  SeoBand,
  ServiceCard,
} from "@/components/blocks";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { photos } from "@/lib/images";
import { featuredServiceSlugs, services, site } from "@/lib/site";
import { routes } from "@/data/routes";

export const metadata = buildMetadata({
  title: "Taxi in Littlehampton | 24/7 Airport Transfers | Western Cars",
  description:
    "Licensed Littlehampton taxi service covering West Sussex 24/7. Fixed-fare Gatwick and Heathrow transfers, corporate travel, wheelchair accessible cars and 8-seater minibuses. Call 01903 964888.",
  path: "/",
  image: photos.hero.src,
  imageAlt: photos.hero.alt,
});

const homeFaqs = [
  {
    question: "What areas does Western Cars Littlehampton cover?",
    answer:
      "We are based in Littlehampton and cover the whole of West Sussex, including Rustington, East Preston, Angmering, Ferring, Worthing, Arundel, Bognor Regis and Chichester. Longer journeys anywhere in mainland UK are quoted at a fixed price.",
  },
  {
    question: "How far in advance should I book an airport transfer?",
    answer:
      "Twenty-four hours is plenty for most journeys, and we often cover same-day requests. For very early departures, bank holidays and the summer peak we would suggest booking a few days ahead so you get the vehicle size you want.",
  },
  {
    question: "Are your airport fares really fixed?",
    answer:
      "Yes. The price we confirm is the price you pay, including waiting time within the free allowance, airport drop-off charges and card payment. Traffic delays do not change the fare.",
  },
  {
    question: "Do you have wheelchair accessible vehicles?",
    answer:
      "We do. Our ramp-equipped vehicles take a wheelchair and up to four other passengers, with secure restraints fitted and drivers trained in assisted travel. Please request one when booking so we allocate the right car.",
  },
  {
    question: "Can I pay by card, and do you take account bookings?",
    answer:
      "Card payment is accepted in every vehicle with no handling fee, and business customers can open a corporate account with monthly VAT invoicing and named bookers.",
  },
  {
    question: "Are you available at night and on bank holidays?",
    answer:
      "Yes, 24 hours a day, every day of the year, with no night-time, weekend or bank holiday surcharge on our fixed fares.",
  },
];

const featured = featuredServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is NonNullable<typeof service> =>
    Boolean(service),
  );

export default function HomePage() {
  const popularRoutes = routes.slice(0, 8);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* 1. Hero (3.5 variant 1) */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />
        <div className="container hero__inner">
          <h1 className="display hero__title">
            Your 24/7 taxi service in Littlehampton and across West Sussex
          </h1>
          <p className="lead hero__text">
            Fixed-fare airport transfers, corporate travel, wheelchair
            accessible cars and 8-seater minibuses — driven by licensed local
            drivers who know the roads from Littlehampton to Gatwick, Heathrow
            and beyond.
          </p>
          <div className="hero__ctas">
            <Button href="/#book" variant="accent" icon="up-right">
              Book online
            </Button>
            <Button href={site.phoneHref} variant="outline-inverse">
              Call {site.phone}
            </Button>
          </div>
        </div>
      </section>

      <div className="container hero__bar">
        <BookingBar idPrefix="hero" anchor />
      </div>

      {/* 2. Intro + feature grid (3.6) */}
      <section className="section" id="why-us">
        <div className="container">
          <SectionHead
            title="Local drivers, fixed prices, and a car that turns up"
            text="Western Cars has built its reputation on the unglamorous things: arriving when we said we would, charging what we quoted, and answering the phone at four in the morning."
            cta={
              <Button href="/#contact" variant="outline">
                Contact us for advice
              </Button>
            }
          />

          <div className="grid grid--3">
            <Feature icon="pound" title="Fixed fares, quoted up front">
              No meters and no surge pricing. You get the full price in writing
              before you travel, and traffic delays are on us.
            </Feature>
            <Feature icon="clock" title="24 hours, every day">
              Early flights, late finishes and bank holidays — we operate around
              the clock with no out-of-hours surcharge.
            </Feature>
            <Feature icon="plane" title="Flight tracking as standard">
              We watch your inbound flight and move the pickup to match the real
              landing time, with 60 minutes of free waiting.
            </Feature>
            <Feature icon="accessible" title="Accessible vehicles">
              Ramp-equipped, wheelchair accessible cars with trained drivers,
              bookable at the same fixed fares.
            </Feature>
            <Feature icon="group" title="Groups up to eight">
              Keep everyone together in a 6-8 seater minibus — usually cheaper
              per head than booking two saloons.
            </Feature>
            <Feature icon="shield" title="Licensed and insured">
              Every driver is DBS-checked and licensed by Arun District Council,
              and every vehicle is fully insured for private hire.
            </Feature>
          </div>
        </div>
      </section>

      {/* 3. Services (3.7) — dark section with notched cards */}
      <section className="section section--dark" id="services">
        <div className="container">
          <SectionHead
            title="Every journey covered"
            text="From a five-minute run to Littlehampton station to a chauffeur-driven day in London, it is the same operator, the same standards and the same fixed-price promise."
            cta={
              <Button href="/#book" variant="light" icon="up-right">
                Book a transfer
              </Button>
            }
          />

          <div className="services-layout">
            <div className="services-layout__photo notch">
              <Image
                src={photos.taxiSign.src}
                alt={photos.taxiSign.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="grid grid--2">
              {featured.map((service) => (
                <ServiceCard key={service.slug} title={service.name}>
                  {service.summary}
                </ServiceCard>
              ))}
            </div>
          </div>

          <div className="wide-row">
            <div className="service-card notch">
              <h3>Corporate accounts and executive travel</h3>
              <p>
                One monthly invoice, named bookers, cost-centre references and
                priority dispatch. Ideal for businesses along the A27 corridor
                that need staff and clients moved reliably, not cheaply.
              </p>
              <span className="service-card__arrow" aria-hidden="true">
                &rarr;
              </span>
            </div>
            <div className="wide-row__photo">
              <Image
                src={photos.executiveCar.src}
                alt={photos.executiveCar.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <h2 className="h3-lg" style={{ marginTop: 72, marginBottom: 28 }}>
            The full service list
          </h2>
          <div className="grid grid--3" style={{ gap: 16 }}>
            {services.map((service) => (
              <p key={service.slug} style={{ fontSize: 15 }}>
                <span
                  aria-hidden="true"
                  style={{ color: "var(--color-accent)" }}
                >
                  ▪{" "}
                </span>
                {service.name}
              </p>
            ))}
          </div>

          <div style={{ marginTop: 56 }}>
            <BookingBar idPrefix="services" />
          </div>
        </div>
      </section>

      {/* 4. Vehicles (3.8) */}
      <section className="section section--grey">
        <div className="container">
          <SectionHead
            title="Choose the right vehicle"
            text="Three core vehicle types cover almost every booking. Tell us how many passengers and how much luggage, and we will confirm which one is coming."
          />

          <div className="grid grid--3">
            <article className="vehicle-card">
              <div className="vehicle-card__media">
                <Image
                  src={photos.saloon.src}
                  alt="Standard saloon car used for everyday taxi journeys"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h3>Saloon</h3>
              <p>The everyday choice for up to four passengers.</p>
              <CheckList
                items={[
                  "Up to 4 passengers",
                  "2 large cases",
                  "Child seats free on request",
                  "Card payment in the car",
                  "Fixed fare, no meter",
                ]}
              />
              <Button href="/#book" variant="dark" icon="up-right" block>
                Book a transfer
              </Button>
            </article>

            <article className="vehicle-card">
              <span className="vehicle-card__badge">Most popular</span>
              <div className="vehicle-card__media">
                <Image
                  src={photos.suv.src}
                  alt="Large MPV with space for families and extra luggage"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h3>MPV</h3>
              <p>Extra room for families and luggage-heavy airport runs.</p>
              <CheckList
                items={[
                  "Up to 6 passengers",
                  "4 large cases",
                  "Ideal for airport transfers",
                  "Pet-friendly by arrangement",
                  "Fixed fare, no meter",
                ]}
              />
              <Button href="/#book" variant="dark" icon="up-right" block>
                Book a transfer
              </Button>
            </article>

            <article className="vehicle-card">
              <div className="vehicle-card__media">
                <Image
                  src={photos.minibus.src}
                  alt="Eight-seater minibus used for group taxi bookings"
                  width={600}
                  height={400}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h3>8-seater</h3>
              <p>Keep the whole group together in one vehicle.</p>
              <CheckList
                items={[
                  "Up to 8 passengers",
                  "8 cases with roof box",
                  "Cheaper per head than two cars",
                  "Events, stag and hen trips",
                  "Fixed fare, no meter",
                ]}
              />
              <Button href="/#book" variant="dark" icon="up-right" block>
                Book a transfer
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Popular transfers (3.13 price list) */}
      <section className="section">
        <div className="container">
          <SectionHead
            title="Popular fixed-fare transfers from Littlehampton"
            text="Our most-booked routes, each at a price agreed before you travel. Tap a route for journey times, what is included and the questions we get asked most."
            cta={
              <Button href="/transfers" variant="outline" icon="right">
                All transfers
              </Button>
            }
          />

          <div className="grid grid--2">
            <div>
              <div className="price-table__head">
                <h3>Airport transfers</h3>
                <p>Fixed fares with flight tracking and free waiting time</p>
              </div>
              <div className="price-table__rows">
                {popularRoutes
                  .filter((route) => route.category === "airport")
                  .map((route) => (
                    <Link
                      key={route.slug}
                      className="price-row"
                      href={`/transfers/${route.slug}`}
                    >
                      <span>
                        {route.origin} to {route.destination}
                      </span>
                      <span className="price-row__price">
                        £{route.priceFrom}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            <div>
              <div className="price-table__head">
                <h3>City, port and long distance</h3>
                <p>One fixed price, door to door, day or night</p>
              </div>
              <div className="price-table__rows">
                {popularRoutes
                  .filter((route) => route.category !== "airport")
                  .map((route) => (
                    <Link
                      key={route.slug}
                      className="price-row"
                      href={`/transfers/${route.slug}`}
                    >
                      <span>
                        {route.origin} to {route.destination}
                      </span>
                      <span className="price-row__price">
                        £{route.priceFrom}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhotoBand photo={photos.cityRoad} />

      {/* 6. How it works (3.12) */}
      <section className="section section--grey">
        <div className="container two-col">
          <div>
            <h2>Booking takes about a minute</h2>
            <p style={{ marginTop: 20 }}>
              Book online at any hour, or call and speak to someone in
              Littlehampton who knows the roads you are asking about.
            </p>
            <p style={{ marginTop: 20 }} className="strong-lead">
              Ready to book your next journey?
            </p>
            <div style={{ marginTop: 24 }}>
              <Button href="/#book" variant="dark" icon="up-right">
                Book online
              </Button>
            </div>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step__num" aria-hidden="true">
                1
              </span>
              <div>
                <h3>Tell us the journey</h3>
                <p>
                  Pickup, destination, date and time. Add a flight number and we
                  will track it.
                </p>
              </div>
            </div>
            <div className="step">
              <span className="step__num" aria-hidden="true">
                2
              </span>
              <div>
                <h3>Get your fixed price</h3>
                <p>
                  We confirm the fare and the vehicle in writing. That is the
                  figure you pay, whatever the traffic does.
                </p>
              </div>
            </div>
            <div className="step">
              <span className="step__num" aria-hidden="true">
                3
              </span>
              <div>
                <h3>Travel</h3>
                <p>
                  Your driver arrives early, helps with the bags and takes card
                  or account payment at the end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Join the team split (3.9) */}
      <section className="split">
        <div className="split__text">
          <div className="split__text-inner">
            <h2>Drive with Western Cars</h2>
            <p style={{ marginTop: 20 }}>
              We are taking on licensed drivers across Littlehampton, Rustington
              and Worthing. Steady account work, local dispatch and a team that
              answers the phone.
            </p>
            <CheckList
              items={[
                "Consistent airport and corporate work",
                "Local office, not an overseas call centre",
                "Flexible shifts around your own hours",
                "Help with Arun District Council licensing",
              ]}
            />
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              <Button
                href="mailto:info@westerncars.co.uk?subject=I%20want%20to%20become%20a%20driver"
                variant="light"
                icon="right"
              >
                Apply to drive
              </Button>
              <Button href={site.phoneHref} variant="outline-inverse">
                Call {site.phone}
              </Button>
            </div>
          </div>
        </div>
        <div className="split__photo">
          <Image
            src={photos.driverPhone.src}
            alt={photos.driverPhone.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* 8. Testimonial (3.10) */}
      <section className="section section--grey">
        <div className="container testimonial">
          <div className="testimonial__photo notch">
            <Image
              src={photos.mercedes.src}
              alt={photos.mercedes.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h2>What our passengers say</h2>
            <div className="testimonial__rating">
              <span className="testimonial__stars" aria-hidden="true">
                ★★★★★
              </span>
              <span>Rated 5 stars by our customers</span>
            </div>
            <blockquote className="testimonial__quote">
              &ldquo;Booked a 4am run to Gatwick and the driver was outside at
              3.50am. Price was exactly what was quoted, the car was spotless
              and he helped with every bag. We use them for every flight
              now.&rdquo;
            </blockquote>
            <p className="testimonial__who">
              &mdash; Western Cars passenger, Littlehampton, West Sussex
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ (3.11) */}
      <section className="section" id="faq">
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: 48 }}>
            Frequently asked questions
          </h2>
          <Faq items={homeFaqs} group="home-faq" />
        </div>
      </section>

      {/* 10. Contact */}
      <section className="section section--grey" id="contact">
        <div className="container two-col">
          <div>
            <h2>Get in touch</h2>
            <p style={{ marginTop: 20 }}>
              Call for an instant fixed quote, or message us on WhatsApp and we
              will come back to you with a price. The office is staffed 24 hours
              a day, every day of the year.
            </p>
            <div
              className="footer__contact"
              style={{ color: "var(--color-text)" }}
            >
              <span>
                Phone:{" "}
                <a href={site.phoneHref}>
                  <strong>{site.phone}</strong>
                </a>
              </span>
              <span>
                Facebook:{" "}
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Western Cars Littlehampton
                </a>
              </span>
              <span>
                Based in {site.address.locality}, {site.address.region}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginTop: 32,
              }}
            >
              <Button href={site.phoneHref} variant="dark">
                Call {site.phone}
              </Button>
              <Button href={site.whatsapp} variant="outline" icon="up-right">
                WhatsApp
              </Button>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: 20 }}>Book in a minute</h3>
            <BookingBar idPrefix="contact" />
          </div>
        </div>
      </section>

      {/* 11. Yellow SEO band (3.14) */}
      <SeoBand title="Taxi service in Littlehampton, West Sussex">
        Western Cars is a licensed <strong>Littlehampton taxi service</strong>{" "}
        covering{" "}
        <strong>
          Rustington, East Preston, Angmering, Ferring, Worthing, Arundel,
          Bognor Regis
        </strong>{" "}
        and the wider <strong>West Sussex</strong> area. We run fixed-fare{" "}
        <strong>Gatwick and Heathrow airport transfers</strong>, corporate
        accounts, <strong>wheelchair accessible taxis</strong>,{" "}
        <strong>8-seater minibuses</strong>, wedding cars and a 24-hour local
        taxi service. Call <strong>{site.phone}</strong> for a fixed price.
      </SeoBand>
    </>
  );
}
