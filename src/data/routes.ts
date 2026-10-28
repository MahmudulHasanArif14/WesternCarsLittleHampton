/**
 * Route data — the seed for the ~80 single-route pages.
 *
 * One entry here produces one fully-formed, statically-generated page at
 * /transfers/{slug}. To add the remaining routes, append entries: no component
 * or route file needs to change.
 *
 * !! PLACEHOLDER PRICING !!
 * `priceFrom`, `returnPrice`, `durationMins` and `distanceMiles` below are
 * realistic sample figures, NOT the client's tariff. Replace every one with
 * real quoted fares before launch — they are published in the page copy and in
 * the Offer JSON-LD, so wrong numbers are a commercial and compliance problem.
 */

export type RouteFaq = {
  question: string;
  answer: string;
};

export type RouteEntry = {
  /** URL segment: {origin}-to-{destination}, lower-kebab. */
  slug: string;
  origin: string;
  destination: string;
  /** Grouping for the route index and for "other popular transfers". */
  category: "airport" | "city" | "port" | "station";
  priceFrom: number;
  returnPrice: number;
  durationMins: [number, number];
  distanceMiles: number;
  /** First sentence renders bold as the lead (design system 3.19). */
  lead: string;
  intro: string;
  /** 55-60 char target. */
  title: string;
  /** 150-160 char target. */
  metaDescription: string;
  /** Three to four route-specific questions for the FAQ and FAQPage schema. */
  faqs: RouteFaq[];
  /** Local detail that keeps each page genuinely distinct for geo-targeting. */
  localNote: string;
};

export const routes: RouteEntry[] = [
  {
    slug: "littlehampton-to-gatwick-airport",
    origin: "Littlehampton",
    destination: "Gatwick Airport",
    category: "airport",
    priceFrom: 68,
    returnPrice: 72,
    durationMins: [50, 70],
    distanceMiles: 38,
    title: "Littlehampton to Gatwick Airport Taxi | Fixed Fare From £68",
    metaDescription:
      "Fixed-price Littlehampton to Gatwick Airport taxi from £68. Flight tracking, 60 minutes free waiting and 24/7 pickups across West Sussex. Call 01903 964888.",
    lead:
      "A fixed-fare Littlehampton to Gatwick Airport taxi from £68, booked once and confirmed in writing.",
    intro:
      "We cover every Gatwick departure from Littlehampton, Wick, Toddington and the wider BN17 area, running up the A29 and M23 or via the A280 when the roads demand it. Your driver tracks the flight, so an early landing or a two-hour delay costs you nothing extra, and the price we quote is the price you pay — no meter, no airport surcharge, no card fee.",
    localNote:
      "Pickups across Littlehampton, Wick, Toddington, Rustington and East Preston, with Littlehampton railway station and the Body Shop site covered as standard.",
    faqs: [
      {
        question: "How long does a taxi from Littlehampton to Gatwick Airport take?",
        answer:
          "Typically 50 to 70 minutes via the A29 and M23. For flights departing between 6am and 9am we recommend allowing 90 minutes, as the M23 northbound slows noticeably around Crawley.",
      },
      {
        question: "What time should I be collected for my flight?",
        answer:
          "As a rule, leave Littlehampton three hours before a long-haul departure and two and a half hours before a short-haul one. Tell us your flight number when booking and we will set the pickup time for you.",
      },
      {
        question: "Do you track my flight on the return leg?",
        answer:
          "Yes. We monitor the inbound flight and adjust the pickup automatically, with 60 minutes of free waiting from the moment the aircraft lands so you are never rushed through baggage reclaim.",
      },
      {
        question: "Where will my driver meet me at Gatwick?",
        answer:
          "In the arrivals hall of your terminal with a name board, as part of our meet and greet service. If you prefer a kerbside pickup to keep the fare lower, let us know when you book.",
      },
    ],
  },
  {
    slug: "gatwick-airport-to-littlehampton",
    origin: "Gatwick Airport",
    destination: "Littlehampton",
    category: "airport",
    priceFrom: 72,
    returnPrice: 68,
    durationMins: [50, 70],
    distanceMiles: 38,
    title: "Gatwick Airport to Littlehampton Taxi | Meet & Greet From £72",
    metaDescription:
      "Pre-booked Gatwick Airport to Littlehampton taxi from £72, with arrivals meet and greet, flight tracking and 60 minutes free waiting. Book on 01903 964888.",
    lead:
      "A pre-booked Gatwick Airport to Littlehampton taxi from £72, with your driver waiting in arrivals.",
    intro:
      "Land, clear baggage reclaim and walk straight to a driver holding your name. We watch the inbound flight from the moment it leaves, so a delayed landing simply moves your pickup — there is nothing to re-book and nothing more to pay. The run back down to Littlehampton takes under an hour outside peak times.",
    localNote:
      "Drop-offs anywhere in Littlehampton, including the seafront, Wick, Toddington and the hospital, plus neighbouring Rustington and Angmering.",
    faqs: [
      {
        question: "What happens if my flight is delayed?",
        answer:
          "Nothing on your side. We track the flight and move the pickup to match the actual landing time, at no extra cost, however late it arrives.",
      },
      {
        question: "How much free waiting time do I get at Gatwick?",
        answer:
          "Sixty minutes from touchdown, which comfortably covers passport control and baggage reclaim on all but the busiest evenings.",
      },
      {
        question: "Can you collect from both the North and South Terminal?",
        answer:
          "Yes, both terminals. Give us the flight number and we will be at the right one — you do not need to tell us which terminal yourself.",
      },
      {
        question: "Can I book a child seat for the journey home?",
        answer:
          "Yes. Child and booster seats are fitted free of charge, but please request them when booking so the right seat is in the car.",
      },
    ],
  },
  {
    slug: "littlehampton-to-heathrow-airport",
    origin: "Littlehampton",
    destination: "Heathrow Airport",
    category: "airport",
    priceFrom: 115,
    returnPrice: 120,
    durationMins: [85, 115],
    distanceMiles: 62,
    title: "Littlehampton to Heathrow Taxi | Fixed Price From £115",
    metaDescription:
      "Littlehampton to Heathrow Airport taxi at a fixed £115. All terminals, flight tracking, free waiting and 24/7 West Sussex pickups. Call 01903 964888 to book.",
    lead:
      "A fixed £115 Littlehampton to Heathrow Airport taxi, covering all five terminals.",
    intro:
      "Heathrow is the longer of the two main runs from Littlehampton, usually an hour and a half up the A29 and M25 anticlockwise. Because the fare is fixed, a slow stretch around the M25 Surrey section costs you nothing extra. We quote all five terminals at the same price and build the early-morning traffic into the pickup time.",
    localNote:
      "Serving Littlehampton, Rustington, East Preston and Angmering, with early-hours pickups from 3am for first-wave departures.",
    faqs: [
      {
        question: "Is the fare the same for every Heathrow terminal?",
        answer:
          "Yes. Terminals 2, 3, 4 and 5 are all charged at the same fixed £115 from Littlehampton, so a last-minute terminal change does not alter the price.",
      },
      {
        question: "How early should I leave Littlehampton for a Heathrow flight?",
        answer:
          "Allow three and a half hours before a long-haul departure. The M25 between the M23 and the M4 is the variable, and it is far busier from 6am onwards.",
      },
      {
        question: "Do you cover very early morning pickups?",
        answer:
          "Yes, we operate 24 hours a day with no night surcharge. Pickups from 3am are routine for the first Heathrow departures.",
      },
    ],
  },
  {
    slug: "heathrow-airport-to-littlehampton",
    origin: "Heathrow Airport",
    destination: "Littlehampton",
    category: "airport",
    priceFrom: 120,
    returnPrice: 115,
    durationMins: [85, 115],
    distanceMiles: 62,
    title: "Heathrow to Littlehampton Taxi | Arrivals Pickup From £120",
    metaDescription:
      "Heathrow Airport to Littlehampton taxi from £120 with arrivals meet and greet, flight tracking and free waiting. Pre-book 24/7 on 01903 964888.",
    lead:
      "A pre-booked Heathrow to Littlehampton taxi from £120, with meet and greet in arrivals.",
    intro:
      "After a long-haul flight the last thing you want is a taxi rank queue. Your driver is already in the arrivals hall with a name board, and the car is a short walk away. The run down to Littlehampton takes around an hour and a half, and the fare is agreed before you fly.",
    localNote:
      "Door-to-door drop-offs throughout Littlehampton and the surrounding BN16 and BN17 villages.",
    faqs: [
      {
        question: "Where does the driver wait at Heathrow?",
        answer:
          "In the arrivals hall of your terminal, holding a board with your name. We confirm the exact meeting point by text once your flight lands.",
      },
      {
        question: "What if I clear customs much later than expected?",
        answer:
          "You have 60 minutes of free waiting from landing, and we stay in contact by phone if it runs longer. We will not leave without you.",
      },
      {
        question: "Can you take a large amount of luggage?",
        answer:
          "Yes. Tell us the number of cases when booking and we will send an estate or MPV at no extra cost rather than a standard saloon.",
      },
    ],
  },
  {
    slug: "littlehampton-to-brighton",
    origin: "Littlehampton",
    destination: "Brighton",
    category: "city",
    priceFrom: 52,
    returnPrice: 52,
    durationMins: [40, 60],
    distanceMiles: 24,
    title: "Littlehampton to Brighton Taxi | Fixed Fare From £52",
    metaDescription:
      "Littlehampton to Brighton taxi from £52, fixed price day or night. Ideal for nights out, the Amex and Brighton station. Book 24/7 on 01903 964888.",
    lead: "A fixed £52 Littlehampton to Brighton taxi, day or night.",
    intro:
      "The coast road to Brighton is straightforward until it is not — the A259 through Shoreham and Hove can double the journey on a summer weekend. A fixed fare means that is our problem, not yours. We cover the city centre, the seafront, the Lanes, Brighton station and the Amex Stadium.",
    localNote:
      "Popular for Brighton nights out, Amex Stadium fixtures and Brighton station connections, with return pickups available until the early hours.",
    faqs: [
      {
        question: "Do you charge more for late-night Brighton runs?",
        answer:
          "No. The fare is the same at 2am as at 2pm, with no weekend or bank holiday surcharge.",
      },
      {
        question: "Can you collect from the Amex Stadium after a match?",
        answer:
          "Yes, though we arrange a meeting point just outside the stadium controlled zone, as private hire cars cannot wait at the ground itself.",
      },
      {
        question: "How many passengers can you take to Brighton?",
        answer:
          "Up to eight in one of our 6-8 seater minibuses, which works out considerably cheaper per head than two saloons.",
      },
    ],
  },
  {
    slug: "brighton-to-littlehampton",
    origin: "Brighton",
    destination: "Littlehampton",
    category: "city",
    priceFrom: 52,
    returnPrice: 52,
    durationMins: [40, 60],
    distanceMiles: 24,
    title: "Brighton to Littlehampton Taxi | Fixed Price From £52",
    metaDescription:
      "Brighton to Littlehampton taxi from £52 with no late-night surcharge. Pre-book a car home from the city centre or the Amex. Call 01903 964888.",
    lead: "A fixed £52 Brighton to Littlehampton taxi, with no late-night surcharge.",
    intro:
      "Getting out of Brighton late is the hard part — ranks are long and app pricing surges exactly when you need a car. Pre-book with us and the price is locked in, the driver is expecting you, and you are back in Littlehampton in well under an hour.",
    localNote:
      "Collections from Brighton station, the Lanes, the seafront and the Amex, returning to Littlehampton, Rustington and Angmering.",
    faqs: [
      {
        question: "Can I pre-book a car home before I go out?",
        answer:
          "Yes, and we recommend it. Booking the return leg in advance locks the fare and guarantees a car at closing time, when demand peaks.",
      },
      {
        question: "Is there a surcharge after midnight?",
        answer:
          "No. Our fares are flat around the clock, including weekends and bank holidays.",
      },
      {
        question: "Where can you pick up in central Brighton?",
        answer:
          "Anywhere outside the pedestrianised Lanes. We will agree a specific meeting point by text so you are not searching for the car.",
      },
    ],
  },
  {
    slug: "worthing-to-gatwick-airport",
    origin: "Worthing",
    destination: "Gatwick Airport",
    category: "airport",
    priceFrom: 65,
    returnPrice: 69,
    durationMins: [45, 65],
    distanceMiles: 34,
    title: "Worthing to Gatwick Airport Taxi | Fixed Fare From £65",
    metaDescription:
      "Worthing to Gatwick Airport taxi from £65, fixed price with flight tracking and free waiting. 24/7 pickups across Worthing and West Sussex. Call 01903 964888.",
    lead: "A fixed-fare Worthing to Gatwick Airport taxi from £65.",
    intro:
      "From Worthing the A24 and A264 give a slightly shorter run to Gatwick than from Littlehampton, and the fare reflects it. We collect from anywhere in Worthing, Goring-by-Sea, Durrington and Findon, and the quote covers both terminals.",
    localNote:
      "Covering central Worthing, Goring-by-Sea, Durrington, Broadwater and Findon, including Worthing Hospital and the railway station.",
    faqs: [
      {
        question: "How long is the taxi journey from Worthing to Gatwick?",
        answer:
          "Around 45 to 65 minutes via the A24. Allow longer between 7am and 9am, when the approach to Horsham is slow.",
      },
      {
        question: "Do you cover Goring-by-Sea and Durrington at the same fare?",
        answer:
          "Yes, both are included in the £65 Worthing fixed fare. Outlying villages are quoted separately but still at a fixed price.",
      },
      {
        question: "Can I pay by card?",
        answer:
          "Yes, by card in the vehicle or by bank transfer in advance, with no card handling fee either way.",
      },
    ],
  },
  {
    slug: "littlehampton-to-southampton-airport",
    origin: "Littlehampton",
    destination: "Southampton Airport",
    category: "airport",
    priceFrom: 98,
    returnPrice: 102,
    durationMins: [70, 95],
    distanceMiles: 55,
    title: "Littlehampton to Southampton Airport Taxi | From £98",
    metaDescription:
      "Littlehampton to Southampton Airport taxi from £98, fixed price with flight tracking. Also serving Southampton cruise terminals. Book on 01903 964888.",
    lead:
      "A fixed £98 Littlehampton to Southampton Airport taxi, along the A27 coastal route.",
    intro:
      "Southampton Airport is an easy run west along the A27 through Chichester and Portsmouth, usually around 80 minutes. The same route serves the Southampton cruise terminals, which we quote at a similar fixed fare — useful if you are joining a ship rather than a flight.",
    localNote:
      "Serving Littlehampton and the A27 corridor through Arundel, Chichester and Havant, with cruise terminal transfers on the same route.",
    faqs: [
      {
        question: "Do you also cover the Southampton cruise terminals?",
        answer:
          "Yes, all of them — Ocean, Mayflower, QEII and Horizon. The fare is close to the airport price and we quote it at the time of booking.",
      },
      {
        question: "How long does the journey take?",
        answer:
          "Usually 70 to 95 minutes on the A27. The stretch around Chichester and Havant is the slow part in rush hour.",
      },
      {
        question: "Can you carry cruise luggage for four people?",
        answer:
          "Yes. For cruise trips we send an MPV or 8-seater as standard, since cruise luggage rarely fits a saloon.",
      },
    ],
  },
  {
    slug: "littlehampton-to-portsmouth",
    origin: "Littlehampton",
    destination: "Portsmouth",
    category: "port",
    priceFrom: 72,
    returnPrice: 72,
    durationMins: [55, 75],
    distanceMiles: 35,
    title: "Littlehampton to Portsmouth Taxi | Port & City From £72",
    metaDescription:
      "Littlehampton to Portsmouth taxi from £72, covering the international ferry port, Gunwharf Quays and the Hard Interchange. Book 24/7 on 01903 964888.",
    lead:
      "A fixed £72 Littlehampton to Portsmouth taxi, covering the ferry port and the city.",
    intro:
      "Whether you are catching a Brittany Ferries sailing, heading to Gunwharf Quays or making a hospital appointment at Queen Alexandra, the run west on the A27 takes around an hour. For ferry departures we build the check-in deadline into the pickup time rather than the sailing time.",
    localNote:
      "Covering Portsmouth International Port, Gunwharf Quays, the Hard Interchange, Queen Alexandra Hospital and Portsmouth Harbour station.",
    faqs: [
      {
        question: "Can you drop at Portsmouth International Port for a ferry?",
        answer:
          "Yes, right at the foot-passenger terminal. Tell us the sailing time and we will work back from the check-in deadline, not the departure.",
      },
      {
        question: "Do you cover Queen Alexandra Hospital?",
        answer:
          "Yes, and it is a frequent run. We can wait during shorter appointments by arrangement rather than charging two separate journeys.",
      },
      {
        question: "Is the Isle of Wight ferry terminal included?",
        answer:
          "Yes. Both the Wightlink and Hovertravel terminals are covered at the standard Portsmouth fare.",
      },
    ],
  },
  {
    slug: "littlehampton-to-london",
    origin: "Littlehampton",
    destination: "Central London",
    category: "city",
    priceFrom: 165,
    returnPrice: 170,
    durationMins: [110, 150],
    distanceMiles: 62,
    title: "Littlehampton to London Taxi | Fixed Price From £165",
    metaDescription:
      "Littlehampton to Central London taxi from £165, fixed price including the ULEZ and congestion charge. Executive cars available. Call 01903 964888.",
    lead:
      "A fixed £165 Littlehampton to Central London taxi, with the congestion charge and ULEZ included.",
    intro:
      "A direct car to London makes sense when the train does not: early meetings, heavy luggage, a group of three or four, or a late finish after the last service home. The quote includes the congestion charge and ULEZ, so there is nothing to settle afterwards. Executive saloons are available for client-facing trips.",
    localNote:
      "Door-to-door service from Littlehampton to the City, West End, Westminster, Canary Wharf and the main London rail termini.",
    faqs: [
      {
        question: "Is the congestion charge included in the fare?",
        answer:
          "Yes. Both the congestion charge and the ULEZ charge are built into the quoted price — there is nothing extra to pay on the day.",
      },
      {
        question: "Is a taxi cheaper than the train to London?",
        answer:
          "For one person, usually not. For three or four travelling together, or for an early start before the first train, a fixed-fare car is often the cheaper and quicker option door to door.",
      },
      {
        question: "Can I book an executive car for a business trip?",
        answer:
          "Yes. Our executive service uses premium saloons with a suited driver, and can be booked by the hour for the whole day in London.",
      },
      {
        question: "Can you wait in London and bring me back?",
        answer:
          "Yes. Day hire with waiting time is available and usually works out cheaper than two separate one-way fares.",
      },
    ],
  },
];

export function getRoute(slug: string): RouteEntry | undefined {
  return routes.find((route) => route.slug === slug);
}

/**
 * Related routes for the "Other popular transfers" block: same category first,
 * never the current page, and never the exact reverse of it.
 */
export function getRelatedRoutes(current: RouteEntry, limit = 4): RouteEntry[] {
  const reverseSlug = `${slugify(current.destination)}-to-${slugify(current.origin)}`;
  const candidates = routes.filter(
    (route) => route.slug !== current.slug && route.slug !== reverseSlug,
  );
  const sameCategory = candidates.filter((route) => route.category === current.category);
  const rest = candidates.filter((route) => route.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
