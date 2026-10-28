import { Button } from "./Button";

/**
 * Quick booking bar (design system 3.4) — the signature component.
 *
 * It is a plain GET form posting to /book-now, so it works with JavaScript
 * disabled and hands the values to the full booking page as query params.
 * `idPrefix` keeps label/input ids unique when the bar appears more than once
 * on a page, which it does on both the home page and every route page.
 */
export function BookingBar({
  idPrefix = "book",
  anchor = false,
}: {
  idPrefix?: string;
  /** Set on one instance per page only — it owns the #book target. */
  anchor?: boolean;
}) {
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <form
      className="booking-bar"
      action="/book-now"
      method="get"
      {...(anchor ? { id: "book" } : {})}
      aria-label="Quick booking"
    >
      <div className="booking-bar__cell">
        <label htmlFor={id("date")}>Pickup date</label>
        <input
          className="booking-bar__field"
          id={id("date")}
          name="date"
          type="date"
          required
        />
      </div>

      <div className="booking-bar__cell">
        <label htmlFor={id("hour")}>Pickup time</label>
        <div className="booking-bar__times">
          <select
            className="booking-bar__field"
            id={id("hour")}
            name="hour"
            defaultValue="09"
            aria-label="Pickup hour"
          >
            {Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0")).map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          <select
            className="booking-bar__field"
            id={id("minute")}
            name="minute"
            defaultValue="00"
            aria-label="Pickup minute"
          >
            {["00", "15", "30", "45"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="booking-bar__cell">
        <label htmlFor={id("from")}>Pickup location</label>
        <input
          className="booking-bar__field"
          id={id("from")}
          name="from"
          type="text"
          placeholder="e.g. Littlehampton station"
          autoComplete="off"
          required
        />
      </div>

      <div className="booking-bar__cell">
        <label htmlFor={id("to")}>Drop-off location</label>
        <input
          className="booking-bar__field"
          id={id("to")}
          name="to"
          type="text"
          placeholder="e.g. Gatwick Airport"
          autoComplete="off"
          required
        />
      </div>

      <div className="booking-bar__submit">
        <Button variant="accent" icon="up-right" type="submit">
          Book now
        </Button>
      </div>
    </form>
  );
}
