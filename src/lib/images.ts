/**
 * Photography.
 *
 * These are hot-linked from the Unsplash CDN under the Unsplash licence
 * (free, commercial use permitted, no attribution required). Every ID below was
 * fetched and visually checked so the subject matches where it is used.
 *
 * To swap in the client's own photography, drop files into /public/photos and
 * change the `src` values here — nothing else references image URLs.
 */

export type Photo = {
  src: string;
  /** Descriptive alt text. Keep it about the picture, not the keyword. */
  alt: string;
};

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export const photos = {
  hero: {
    // src: unsplash("photo-1449965408869-eaa3f722e40d", 2000),
    src: "/hero.png",
    alt: "Driver at the wheel of a private hire car on a city road at dusk",
  },
  taxiSign: {
    // src: unsplash("photo-1773063250524-38ac5eebd3c5"),
    src: "/Tesla.png",
    alt: "silver-sedan-parked-in-front-of-a-modern-building",
  },
  executiveCar: {
    // src: unsplash("photo-1485291571150-772bcfc10da5"),
    src: "/bmwsclass.png",
    alt: "Executive black saloon car lit against a dark background",
  },
  mercedes: {
    src: unsplash("photo-1583267746897-2cf415887172"),
    alt: "Front view of a black executive Mercedes saloon on a tree-lined street",
  },
  saloon: {
    // src: unsplash("photo-1502877338535-766e1452684a"),
    src: "/s.jpeg",
    alt: "Blue saloon car parked beside a building entrance",
  },
  airport: {
    src: unsplash("photo-1436491865332-7a61a109cc05"),
    // src: "/airport.png",
    alt: "View of an aircraft wing above the clouds at sunrise",
  },
  minibus: {
    src: "/mvp.png",
    // src: unsplash("photo-1617209680907-4f9b76218a4b"),
    alt: "black-mercedes-benz-c-class-parked-on-sidewalk-during-daytime",
  },
  coach: {
    src: unsplash("photo-1570125909232-eb263c188f7e"),
    alt: "Modern long-distance coach at sunset",
  },
  coachNight: {
    src: unsplash("photo-1544620347-c4fd4a3d5957"),
    alt: "Coach parked at night with headlights on in a mountain landscape",
  },
  busInterior: {
    src: unsplash("photo-1532939163844-547f958e91b4"),
    alt: "Empty passenger seats inside a clean minibus",
  },
  driverPhone: {
    src: unsplash("photo-1679395608187-ac2bcedba9ab"),
    alt: "Private hire driver checking the next booking on a phone mounted in the car",
  },
  cityRoad: {
    src: unsplash("photo-1473042904451-00171c69419d"),
    alt: "Long-exposure light trails along a dual carriageway at dusk",
  },
  suv: {
    // src: unsplash("photo-1511527844068-006b95d162c2"),
    src: "/sevenseater.png",
    alt: "Large silver SUV parked on a rural road",
  },
} satisfies Record<string, Photo>;
