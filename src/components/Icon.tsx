/**
 * Monochrome line icons (design system 3.6: "32px line icon (dark)").
 *
 * Emoji were tried first and rejected: they render in full colour on most
 * platforms, which breaks the near-black/cream palette. These inherit
 * currentColor instead, so the same icon works on light and dark sections.
 */

export type IconName =
  | "pound"
  | "clock"
  | "plane"
  | "accessible"
  | "group"
  | "shield"
  | "luggage"
  | "child"
  | "phone"
  | "lock"
  | "pin"
  | "medal";

const PATHS: Record<IconName, React.ReactNode> = {
  pound: (
    <>
      <path d="M16 6.5A4 4 0 0 0 9 9v4.5" />
      <path d="M6.5 13.5h7" />
      <path d="M6.5 19h11" />
      <path d="M9 13.5c0 3-.8 4.4-2.5 5.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  plane: <path d="M21 15.5 3 10V7l2 .6 1.6 2L11 11l-1.6-6.4L11.5 4 15 10.4l5 1.4a1.6 1.6 0 0 1 0 3.1l-1 .3-1.5 4.3h-2l.6-4" />,
  accessible: (
    <>
      <circle cx="13" cy="4.5" r="2" />
      <path d="M11 8.5v5h5l2.5 6" />
      <path d="M14.5 13.5a5.5 5.5 0 1 1-5.9-2.3" />
    </>
  ),
  group: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M17.5 14.4A6 6 0 0 1 21 20" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 7.6 7 9.5 4.1-1.9 7-5.2 7-9.5V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  luggage: (
    <>
      <rect x="5" y="7.5" width="14" height="12" rx="1.5" />
      <path d="M9.5 7.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v2.5" />
      <path d="M9.5 11v5M14.5 11v5" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="6.5" r="2.8" />
      <path d="M7 20v-3a5 5 0 0 1 10 0v3" />
      <path d="M9.5 12.5 12 15l2.5-2.5" />
    </>
  ),
  phone: (
    <path d="M7.5 3.5h-2A2.5 2.5 0 0 0 3 6.3c.6 7.6 6.1 13.1 13.7 13.7a2.5 2.5 0 0 0 2.8-2.5v-2l-4-1.5-1.8 2a13.6 13.6 0 0 1-6.4-6.4l2-1.8Z" />
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
      <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.6 6.5-10a6.5 6.5 0 0 0-13 0C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="11" r="2.3" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14.5" r="5" />
      <path d="M9 9.8 7 3h10l-2 6.8" />
      <path d="m12 12.3 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3Z" />
    </>
  ),
};

export function Icon({
  name,
  size = 28,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
