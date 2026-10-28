import Link from "next/link";
import { Button } from "@/components/Button";
import { BookingBar } from "@/components/BookingBar";
import { Breadcrumbs, JsonLd, PhotoBand, SeoBand } from "@/components/blocks";
import { routes } from "@/data/routes";
import { photos } from "@/lib/images";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Fixed-Price Taxi Transfers from Littlehampton | Western Cars",
  description:
    "Every fixed-fare taxi transfer we run from Littlehampton and West Sussex — Gatwick, Heathrow, Southampton, Brighton, Portsmouth and London. Call 01903 964888.",
  path: "/transfers",
  image: photos.cityRoad.src,
});

const GROUPS = [
  { key: "airport", heading: "Airport transfers", blurb: "Flight tracking and free waiting time included" },
  { key: "city", heading: "City to city", blurb: "Door to door, day or night, no surge pricing" },
  { key: "port", heading: "Port and cruise", blurb: "Timed to check-in, not to the sailing" },
  { key: "station", heading: "Station transfers", blurb: "Rail connections across the South East" },
] as const;

export default function TransfersIndexPage() {
  const trail = [
    { name: "Home", href: "/" },
    { name: "Transfers", href: "/transfers" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="section section--tight">
        <div className="container">
          <Breadcrumbs trail={trail} />
          <h1>Fixed-price transfers from Littlehampton</h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: "62ch" }}>
            Every route below is quoted at a fixed fare per vehicle, agreed
            before you travel. If the journey you need is not listed, call{" "}
            <a href={site.phoneHref}>
              <strong>{site.phone}</strong>
            </a>{" "}
            and we will price it.
          </p>
        </div>
      </section>

      <PhotoBand photo={photos.cityRoad} priority />
      <div className="container photo-band__bar">
        <BookingBar idPrefix="index" anchor />
      </div>

      <section className="section">
        <div className="container grid grid--2">
          {GROUPS.map((group) => {
            const groupRoutes = routes.filter((route) => route.category === group.key);
            if (groupRoutes.length === 0) return null;

            return (
              <div key={group.key}>
                <div className="price-table__head">
                  <h2 style={{ fontSize: 20, color: "#fff", marginBottom: 6 }}>
                    {group.heading}
                  </h2>
                  <p>{group.blurb}</p>
                </div>
                <div className="price-table__rows">
                  {groupRoutes.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/transfers/${route.slug}`}
                      className="price-row"
                    >
                      <span>
                        {route.origin} to {route.destination}
                      </span>
                      <span className="price-row__price">£{route.priceFrom}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="container" style={{ marginTop: 56 }}>
          <Button href={site.phoneHref} variant="dark">
            Call for a route not listed
          </Button>
        </div>
      </section>

      <SeoBand title="Taxi transfers across Littlehampton and West Sussex">
        Western Cars runs <strong>fixed-fare taxi transfers</strong> from{" "}
        <strong>Littlehampton</strong> to{" "}
        <strong>Gatwick, Heathrow and Southampton airports</strong>, to{" "}
        <strong>Brighton, Portsmouth and London</strong>, and to the{" "}
        <strong>Portsmouth and Southampton cruise terminals</strong>. Pickups
        cover <strong>Rustington, East Preston, Angmering, Worthing, Arundel</strong>{" "}
        and the surrounding <strong>West Sussex</strong> villages, 24 hours a day.
      </SeoBand>
    </>
  );
}
