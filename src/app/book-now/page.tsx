import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/blocks";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * Landing target for the quick booking bar.
 *
 * Stage 4 will replace this with the full booking flow from design system 3.16
 * (journey, vehicle, passenger details, fare estimate, map). For now it echoes
 * back what the bar collected and routes the customer to the phone, so no
 * booking is ever silently lost.
 *
 * Deliberately noindex: it is a transactional step with query parameters.
 */
export const metadata = buildMetadata({
  title: "Book a Taxi | Western Cars Littlehampton",
  description:
    "Confirm your Littlehampton taxi booking with Western Cars. Call 01903 964888 for an instant fixed price, 24 hours a day.",
  path: "/book-now",
  index: false,
});

type Search = Promise<Record<string, string | string[] | undefined>>;

const one = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export default async function BookNowPage({
  searchParams,
}: {
  searchParams: Search;
}) {
  const params = await searchParams;
  const from = one(params.from);
  const to = one(params.to);
  const date = one(params.date);
  const hour = one(params.hour);
  const minute = one(params.minute);
  const hasJourney = Boolean(from || to || date);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Book now", href: "/book-now" },
          ]}
        />
        <h1>Confirm your booking</h1>

        {hasJourney ? (
          <div className="fares" style={{ marginTop: 32 }}>
            <h2>Your journey</h2>
            <ul>
              {from ? (
                <li>
                  <strong>Pickup:</strong> {from}
                </li>
              ) : null}
              {to ? (
                <li>
                  <strong>Drop-off:</strong> {to}
                </li>
              ) : null}
              {date ? (
                <li>
                  <strong>Date:</strong> {date}
                  {hour ? ` at ${hour}:${minute ?? "00"}` : ""}
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}

        <p className="lead" style={{ marginTop: 32 }}>
          Call us with these details and we will confirm your fixed price and
          vehicle straight away. The office is staffed 24 hours a day.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
          <Button href={site.phoneHref} variant="dark">
            Call {site.phone}
          </Button>
          <Button href={site.whatsapp} variant="outline" icon="up-right">
            Send on WhatsApp
          </Button>
        </div>

        <p className="small muted" style={{ marginTop: 40 }}>
          Online payment and instant fare estimates are coming next. Until then
          every booking is confirmed by a person, which is how we keep the fixed
          price promise.
        </p>
      </div>
    </section>
  );
}
