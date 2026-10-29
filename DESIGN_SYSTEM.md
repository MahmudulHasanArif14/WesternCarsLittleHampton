# UI Reference & Design System — Taxi / Private-Hire Website

> **Purpose:** A build spec Claude (or any dev) can follow to recreate this UI/UX for a new site.
> Values below come from the live site's computed CSS (Elementor global kit + rendered elements), measured at 1400px desktop.
>
> **Brand rule:** Copy the _system_ (layout, type scale, spacing, components, interactions). Do **not** copy the
> reference site's logo, business name, written copy, photos or reviews. Use your own brand, wording and images
> (`{{BRAND}}`, `{{PHONE}}`, etc. are placeholders).

---

## 1. Design DNA (one paragraph)

Clean, premium, high-contrast. White and near-black (#1F1F1F) sections alternate, with a light grey (#F7F7F7) band
and one bold yellow (#3C58A2) SEO/CTA band near the footer. A soft cream/peach (#FBE3BC) is the brand accent, used
on the primary "Book" buttons and small markers. One font family — **Onest** — everywhere, tight negative letter-spacing
on headings. Fully rounded pill buttons with an arrow icon (↗ or →). Square-cornered cards (radius 0) with a signature
**pixel-step "notch"** in the bottom-left corner. Large photography, generous 100–120px section padding, 1200px container.

---

## 2. Design tokens

### 2.1 Colour

| Token                  | Hex                                    | Use                                                                                   |
| ---------------------- | -------------------------------------- | ------------------------------------------------------------------------------------- |
| `--color-primary`      | `#1F1F1F`                              | Dark sections, primary dark buttons, headings, top bar, footer                        |
| `--color-accent`       | `#FBE3BC`                              | "Book Online" / "Book Now" buttons, breadcrumb marker, highlight in top bar           |
| `--color-text`         | `#333333`                              | Body copy                                                                             |
| `--color-heading`      | `#1F1F1F` (card titles `#0A0A0A`)      | Headings on light                                                                     |
| `--color-white`        | `#FFFFFF`                              | Light sections, cards, text on dark                                                   |
| `--color-surface`      | `#F7F7F7`                              | Grey bands, contact form panel, price-list rows, hover bg of white buttons            |
| `--color-dark-2`       | `#252525`                              | Secondary dark                                                                        |
| `--color-grey-700`     | `#494949`                              | Muted text                                                                            |
| `--color-grey-300`     | `#D3D3D3`                              | Disabled / dividers on light                                                          |
| `--color-yellow`       | `#3C58A2`                              | Full-width SEO/CTA band before footer, Google review stars                            |
| `--color-line`         | `rgba(23,23,23,0.15)` (`#17171726`)    | Feature-item bottom rules, input borders                                              |
| `--color-line-inverse` | `rgba(255,255,255,0.32)` (`#FFFFFF52`) | Borders on dark                                                                       |
| `--color-whatsapp`     | `#25D366`                              | Floating WhatsApp button                                                              |
| `--color-link-default` | `#CC3366`                              | Theme default inline link colour (optional — you can use primary + underline instead) |

### 2.2 Typography — font: **Onest** (Google Fonts, weights 400/500/600/700)

`letter-spacing` is em-based so it scales. Line heights are multipliers.

| Role                          | Desktop | ≤1024px | ≤767px | Weight                 | Line-height | Letter-spacing |
| ----------------------------- | ------- | ------- | ------ | ---------------------- | ----------- | -------------- |
| Display / H1 (home hero)      | 72px    | 60px    | 40px   | 700                    | 1.2         | -0.02em        |
| H1 (inner pages) / H2 section | 48px    | 40px    | 32px   | 700                    | 1.2         | -0.03em        |
| H3 large (centered sub-heads) | 32px    | 26px    | 22px   | 700                    | 1.5         | -0.02em        |
| H3 card title                 | 24px    | 22px    | 20px   | 700                    | 1.4         | -0.02em        |
| Lead / large body             | 20px    | 18px    | 16px   | 400 (500/600 variants) | 1.6         | -0.02em        |
| Quote / testimonial           | 20px    | 18px    | 16px   | 500                    | 1.6         | -0.02em        |
| Body                          | 16px    | 16px    | 16px   | 400                    | 1.7         | -0.01em        |
| Button / nav / label          | 16px    | –       | –      | 700                    | 1.2         | -0.01em        |
| Small / meta                  | 14px    | –       | –      | 400                    | 1.4         | -0.01em        |
| Form label (booking bar)      | 16px    | –       | –      | 700, UPPERCASE         | 1.2         | -0.01em        |
| Form label (forms)            | 15px    | –       | –      | 500                    | –           | –              |

Responsive rule from the source: at ≤1024 the **H1 uses the H2 size**, and H2 uses the 32px-style size.

### 2.3 Spacing & layout

| Token                      | Value                                                                    |
| -------------------------- | ------------------------------------------------------------------------ |
| Container max width        | **1200px** content, with **60px** side padding on desktop (≈20px mobile) |
| Section padding (vertical) | **120px** desktop (some 100px) → ~80px tablet → ~60px mobile             |
| Home hero                  | ~900px tall (≈ viewport), content vertically centered, ~250px top/bottom |
| Grid gaps                  | 24–32px between cards; 44px below feature items                          |
| Card padding               | 32px (service card: 32px 32px 68px to leave room for the notch)          |
| Header height              | ~100px; announcement bar 40px above it                                   |

### 2.4 Radius, borders, shadows

| Token                     | Value                                                            |
| ------------------------- | ---------------------------------------------------------------- |
| `--radius-pill`           | `999px` — all buttons, phone pill, step-number circles use `50%` |
| `--radius-card`           | `0` — cards, booking bar, form panel, images are square          |
| `--radius-input`          | `0` (booking widget fields 3px)                                  |
| Border on outline buttons | `2px solid` `#1F1F1F` (on light) / `#FFFFFF` (on dark)           |
| `--shadow-float`          | `0 20px 45px rgba(0,0,0,0.08)` — booking bar                     |
| `--shadow-soft`           | `4px 4px 30px rgba(0,0,0,0.10)` — floating widgets               |

### 2.5 Motion

- Default transition: `0.3s` (buttons), `0.18s` (booking button).
- Button hover: plane background stays, a **6px halo ring** appears around the pill — `border: 6px solid` of the button's own colour at **30% opacity** (e.g. cream button → `rgba(251,227,188,.3)`). Implement with `box-shadow: 0 0 0 6px rgb(var(--btn-rgb) / .3)`.
- Nav link hover/active: 1–2px underline under the text (active = Home underlined).
- Elementor entrance animations (fade-up) on sections are optional; respect `prefers-reduced-motion`.

---

## 3. Components

### 3.1 Announcement bar

- Full width, 40px high, bg `#1F1F1F`, centered 14–15px text, white; the promo code/offer part bold in `#FBE3BC`.
- Example structure: **"Get £X off your first transfer! Use code: CODE."** + normal-weight terms.

### 3.2 Header (sticky)

- White bg, ~100px tall, sticks to top on scroll (announcement bar scrolls away).
- Left: logo (~120px wide). Right: nav + two pill buttons.
- Nav items: 16px / 700 / `#1F1F1F`, ~40px apart, items with dropdown show a small ▾ caret. Active item has an underline.
- Dropdown panel: bg `#F7F7F7`, square, simple vertical list.
- Nav structure: `Home · Ride ▾ (Services, Airport Transfers, Brighton/Shoreham Airport, City to City, Port) · Drive ▾ (Drivers, Driver Registration) · Corporate Accounts ▾ (Accounts, Application) · Contact`
- Buttons: **Phone pill** (dark, white text, `{{PHONE}}`) + **"Book Online ↗"** (cream, dark text). Both 55px high.
- Mobile (≤1024): logo + phone icon + hamburger; full-screen/off-canvas menu; keep a sticky "Book" CTA.

### 3.3 Buttons (all pills, 55px tall, 16px/700, padding ~0 28px, icon 15px with 12px gap)

| Variant               | Background  | Text      | Border        | Hover bg         | Used on                                             |
| --------------------- | ----------- | --------- | ------------- | ---------------- | --------------------------------------------------- |
| `btn-dark`            | `#1F1F1F`   | `#FFF`    | –             | `#1F1F1F` + halo | Light sections, cards, phone                        |
| `btn-accent`          | `#FBE3BC`   | `#1F1F1F` | –             | same + halo      | "Book Online", booking "BOOK NOW" (uppercase, 58px) |
| `btn-light`           | `#FFF`      | `#1F1F1F` | –             | `#F7F7F7`        | Dark sections                                       |
| `btn-outline`         | transparent | `#1F1F1F` | 2px `#1F1F1F` | fill dark        | "Contact Us for Advice"                             |
| `btn-outline-inverse` | transparent | `#FFF`    | 2px `#FFF`    | fill white       | Dark sections ("Apply to Drive")                    |

Icons: ↗ (arrow-up-right) for booking/external CTAs, → for "next/apply" CTAs. Form submit = full-width dark pill, 61px tall.

### 3.4 Quick booking bar (signature component)

- White horizontal bar, 1200px wide, ~92px tall, square, `--shadow-float`.
- 5 cells split by 1px vertical dividers: **Pickup date** (date input) · **Pickup time** (Hour + Minute selects) · **Pickup location** (autocomplete) · **Drop-off location** · **BOOK NOW** button (cream pill, uppercase).
- Each cell: UPPERCASE 14–16px/700 label on top, 16px input below with no border.
- Placed at the bottom of the hero (overlapping image) and repeated at the end of the dark "services" section. On mobile cells stack vertically, button full width.
- Submitting hands off to the full Book Now page with values pre-filled.

### 3.5 Hero variants

1. **Home hero** – full-bleed photo, dark overlay/gradient from left, white 72px H1 (max ~3 lines, ~700px wide), 16px white intro paragraph (max ~720px), booking bar at bottom.
2. **Inner page hero (white)** – breadcrumb tag (12px cream square + 14px/600 label), 48px H1, intro paragraph (max ~620px) left; a single CTA pill right-aligned and vertically centered; optional booking bar below; followed by a full-width image band.
3. **Image hero (centered)** – photo with dark overlay, ~300px tall, centered breadcrumb tag + 48px white H1 (Contact page).

### 3.6 Feature grid ("why us")

- 3 columns × 2 rows. Each item: 32px line icon (dark) → 24px H3 → 16px body → bottom rule 1px `rgba(23,23,23,.15)`, 44px bottom padding.
- Section intro left-aligned: H2 (2 lines, max ~620px) + paragraph.

### 3.7 Service card with pixel notch (dark section)

- White square card, 32px padding (68px bottom), H3 24px, 16px body, arrow → bottom-right.
- **Bottom-left notch:** a staircase of 3–4 small squares (~16px each) in the section's dark colour, cut into the corner (looks like a pixelated corner). Build as an absolutely-positioned SVG or `clip-path: polygon(...)` with stepped points.
- Layout: left column a tall portrait photo (≈ half width), right a 2×2 grid of service cards. Below: a wide card (text + notch) next to a photo.
- Section header: white H2 left + paragraph, `btn-light` "Book a Transfer ↗" right-aligned.

### 3.8 Vehicle / pricing card

- 3 columns on `#F7F7F7` band. White square card, 32px padding.
- Top: vehicle illustration (transparent PNG, ~260px), centered 32px H3 name, 16px description.
- Checklist: 5 items, each with a 16px filled dark circle-check icon, 16px text, 12px gap.
- Full-width `btn-dark` "Book a Transfer ↗" at bottom.
- "Most Popular!" badge: dark `#1F1F1F` box, white 14px/700 text, 12px padding, pinned top-right edge of the card.
- Below cards: centered help block — 32px H3, paragraph, 3 inline check-items, two buttons (`btn-outline` + `btn-dark`).

### 3.9 Split section (dark text half + photo half)

- 50/50 full-bleed. Left: `#1F1F1F` bg, white H2, paragraph, white check-list, two buttons (`btn-light` + `btn-outline-inverse`). Right: photo, cover.
- Mirror variant: photo left, dark right with icon-list (white line icons + 16px/700 title + 14px body).

### 3.10 Testimonial

- `#F7F7F7` band. Left portrait photo (with pixel notch bottom-right), right: H2, Google "G" + "Rated 5 stars on Google" (14px), large quote 20px/500 dark, "- Name" 14px.
- Followed by a 4-image photo strip (square tiles, 10px gaps, full width).

### 3.11 FAQ accordion

- Centered H2, accordion max-width ~840px centered.
- Row: 16–18px/500 question left, "+" icon right (turns "−" when open), 20px vertical padding, 1px bottom border `rgba(23,23,23,.15)`. Answer 16px body, smooth height transition. Only one open at a time.
- Add `FAQPage` JSON-LD.

### 3.12 Steps ("How it works")

- `#F7F7F7` band, 2 columns. Left: H2 + paragraph + small prompt line + `btn-dark`. Right: vertical list of 3 steps — 56px dark circle with white number, 24px H3, 16px body.
- Icon variant (transfer pages): dark line icon instead of number.

### 3.13 Price list (route tables)

- Two columns side by side. Each: dark `#1F1F1F` header block (20px/700 white title + 14px white description), then rows on `#F7F7F7` with 2px white gaps: route name left (15px/600), price right (`£67`).
- Each row links to its route page.

### 3.14 Yellow SEO / CTA band

- Full-width `#3C58A2`, 120px padding. Left: 48px H2 + rich paragraph with **bold keywords**. Right: `btn-dark` "Book a Transfer ↗".

### 3.15 Forms (contact, driver application, corporate application)

- Two-column layout: left info (H2, paragraph, phone + WhatsApp icon rows, address), right form panel `#F7F7F7`, 32px padding, square.
- Label 15px/500 dark, red `*` for required. Input: white, 45px tall, 1px `rgba(23,23,23,.15)` border, radius 0, padding 8px 16px, placeholder grey.
- Textarea ~100px. Submit: full-width dark pill "Send →", 61px.
- Long application forms: group into sections (Personal, Licence, Vehicle) with H3s; 2-column field grid on desktop.

### 3.16 Full booking page (Book Now)

- H1 left, then 2 columns: left form (~380px) — Pickup, Drop-off, dark "⇅ Swap" button, Date/Hour/Minute row, Vehicle type select, cream info note ("Enter your journey details to get an instant quote"), Passenger details (name, phone with country code, email, flight no., luggage notes, promo code), "Get fare estimate". Right: live map with route.

### 3.17 Footer

- `#1F1F1F`, ~100px top padding. Grid: brand column (logo, 16px white blurb, address 13px, phone + WhatsApp rows, "Secure payments" + card icons) + 5 link columns: **Ride / Airport Transfers / Services / Drive / Corporate**.
- Column heading 14px/700 UPPERCASE in `#FBE3BC`; links 14px white, 12px row gap.
- Bottom bar: 1px top rule `rgba(255,255,255,.32)`; left "© year {{BRAND}}. All rights reserved." + licensing line; right Terms · Privacy · Cookies · Disability links (13px).

### 3.18 Breadcrumbs (route pages)

- 13px, `#333`, separator `»`, current page bold `#1F1F1F`. Sits above the H1. Add `BreadcrumbList` JSON-LD.

### 3.19 Route hero with fact sidebar (single route page)

- 2 columns (≈ 60/40). Left: breadcrumbs → 48–56px H1 (2 lines) → meta row with icons (clock "Approx Duration: 35–50 mins" · pin "Distance: 28 miles", 14px) → `btn-dark` "Book a Transfer ↗" → intro paragraph (first sentence bold).
- Right sidebar stack (~300px):
  1. **Fixed Fares box** — `#F7F7F7`, 24px padding, 18px/700 title, list of 14px fare lines ("£67 Brighton to Gatwick Airport", "£74 return direction").
  2. **Guarantee card** — `#3C58A2` yellow, 24px padding, dark line icon (certificate), 20px/700 title "Fixed Fare Guarantee", 14px body, pixel notch in **white** at top-right.
- Followed by a full-bleed 600px image band with the booking bar overlapping its bottom.

### 3.20 Mini-feature 2×2 + image ("Why choose …")

- `#F7F7F7` band, 2 columns. Left: H2, then 2×2 grid of mini features — 12px cream `#FBE3BC` square marker + 15px/700 title on one line, 14px body below. Then a short prompt line ("Ready to book your …?") and `btn-dark`.
- Right: portrait/landscape photo with dark pixel notch bottom-left.

### 3.21 Route card (dark, "Other popular transfers")

- `#F7F7F7` band. Grid: 2×2 dark cards (`#1F1F1F`, white text) + a tall photo filling the 3rd column.
- Card: 20px/700 white title (2 lines max), two 14px meta rows with white line icons (clock duration, pin distance), arrow → bottom-right, **pixel notch in the section bg colour** bottom-left. Whole card is a link. Hover: lift 4px / slight lighten.

### 3.22 Price list variants

- **A – Two tables, single column rows** (airport hub): see 3.13.
- **B – Two tables, rows in 2 sub-columns** (city-to-city): each dark header spans 2 columns of route rows; each cell = route name + price.
- **C – Three tables with "From" header** (long-distance): dark header row "City-to-City Transfers ……… From", rows `#F7F7F7` with route left, price right, 2px white gaps.
- Rows link to the route page; on hover the row becomes white with a dark left border (recommended).

### 3.23 Check-icon feature grid (variant of 3.6)

- Same as 3.6 but the icon is a 28px filled dark circle with a white tick. Used on Services, Corporate (5 items: 3 + 2 wider), Driver/Corporate application intros. Optional centred H2 above.

### 3.24 Blog index

- Grey `#F7F7F7` inner hero (breadcrumb tag, 48px "Our blog", intro).
- Card grid, 3 columns: white card, 1px `#E2E2E2` border, 8px padding, image radius 8px, then category/date 13px, 20px/700 title, excerpt, "Read more →".

### 3.25 Blog post

- Grey hero, 2 columns: left meta line ("by Author • Date • Category", 13px), 32–40px H1, excerpt; right featured image (radius 8px).
- Article body: centred **720px** column, p 16px/1.7, H2 32px/700, lists with dark bullets, 40px gaps between sections.
- Post ends with the Vehicle cards section (3.8) as a booking CTA. Add `Article` JSON-LD.

### 3.26 Manage booking

- `#F7F7F7` panel (container width), centred: small dark pill tag "Manage Booking" (12px white), 32px H2 "Find Your Booking", 14px help text, then a white card (radius 16px, soft shadow) with 2 inputs side by side (Booking reference · Phone number, radius 4px, 1px border) + dark pill "Find Booking".

### 3.27 Booking confirmation / Thank-you

- Centred max ~920px: status pill (white, 1px border, green dot + "Booking Confirmed"), 24px/700 heading, 13px sub-text, light card (radius 8px, 1px border) showing booking summary (ID, pickup, drop-off, date/time, vehicle, fare), then two dark pills: "Book Another Trip" · "Back to Home".
- Error/empty state uses the same card with a short message (never show raw tokens/URLs).

### 3.28 Legal page layout

- Inner white hero (breadcrumb tag, 48px H1, intro paragraphs max ~620px).
- Optional tab buttons (Terms page: "General T&Cs" · "Corporate T&Cs" as `btn-dark`/`btn-outline` pills jumping to anchors).
- Body: 2 columns — left numbered section title (24px/700, ~300px wide, e.g. "1. Who We Are"), right 16px text; 1px divider `rgba(23,23,23,.15)` between sections, 40px vertical padding.

### 3.29 Long-form application form layout (driver / corporate)

- Form panel `#F7F7F7`, 40px padding, max ~1050px, centred, intro paragraph on top.
- Grouped by **section headings** (15px/700 dark, 32px space above): e.g. Personal Information · Licence & Eligibility · Vehicle Details · Availability · Declaration.
- Field grid widths: 50/50, 33/33/33, or 100% (address/textarea). Labels above fields OR placeholder-only for simple personal fields.
- Selects: white, 45px, custom ▾ caret. Checkbox groups: 2–3 columns. Required consent checkboxes before submit.
- Submit: full-width `btn-dark` "Send →". Spam protection (reCAPTCHA/Turnstile) + server-side validation.

### 3.30 Floating elements

- WhatsApp button: 44px green circle, bottom-right, 20px from edges.
- Google-rating tab: dark vertical tab fixed on the right edge (5 yellow stars + "5 stars on Google" rotated 90°).
- Cookie banner: Accept All / Decline / Manage Preferences (privacy-first default).

---

## 4. Sitemap & navigation (every page and route)

```
/                                   Home
/services/                          Ride ▾ → All Services
/transfer/airport-transfers/        Ride ▾ → Airport Transfers           (Transfer-hub template)
/transfer/brighton-airport-transfers/                                    (Transfer-hub template)
/transfer/shoreham-airport-transfers/                                    (Transfer-hub template)
/transfer/lancing-airport-transfers/   (not in menu)                     (Transfer-hub template)
/transfer/worthing-airport-transfers/  (not in menu)                     (Transfer-hub template)
/transfer/city-to-city-transfers/                                        (Transfer-hub template, price list B)
/transfer/port-transfers/                                                (Transfer-hub template)
/transfers/<from>-to-<to>/          ~80 route pages                      (Single-route template)
/transfers/                         Route index (rebuild properly — see below)
/long-distance-travel/              Fixed-price long distance fares
/drivers/                           Drive ▾ → Drivers
/driver-registration/               Drive ▾ → Driver Registration (form)
(external)                          Drive ▾ → Driver Portal (dispatch provider sign-in)
/corporate-accounts/                Corporate ▾ → Corporate Accounts
/corporate-application/             Corporate ▾ → Application Form
/contact/                           Contact
/book-now/                          Full booking page (header "Book Online")
/manage-booking/                    Find / manage a booking
/booking-details/                   Booking detail view (opened from a link with a token)
/thank-you/                         Booking confirmed
/blog/  /category/<slug>/  /<category>/<post-slug>/   Blog
/terms/  /privacy-policy/  /cookie-policy-uk/  /disability-policy/    Legal (footer)
```

**Header menu:** Home · Ride ▾ (Airport Transfers, Brighton Airport Transfers, Shoreham Airport Transfers, City-to-City Transfers, Port Transfers, All Services) · Drive ▾ (Drivers, Driver Registration, Driver Portal) · Corporate Accounts ▾ (Corporate Accounts, Corporate Account Application Form) · Contact · [phone pill] · [Book Online ↗]

**Footer columns:** Ride (Book Online, Services, Contact Us) · Airport Transfers (Brighton, Shoreham) · Services (City to City, Port) · Drive (Drivers Portal, Become a Driver, Driver Application) · Corporate (Corporate Accounts, Corporate Registration, Corporate T&Cs). Bottom: Terms · Privacy · Cookies · Disability.

**Route URL pattern:** `/transfers/{origin}-to-{destination}/` for both directions (e.g. `brighton-to-gatwick-airport` and `gatwick-airport-to-brighton`). Build these from one data file (origin, destination, price, duration, distance, intro, FAQs) and generate pages statically.

---

## 5. Page templates (section order)

Background key: **W** white · **G** grey `#F7F7F7` · **D** dark `#1F1F1F` · **Y** yellow `#3C58A2` · **IMG** photo.

**Home**

1. Announcement bar → Header
2. Home hero + booking bar
3. Intro + feature grid (6 items) — white
4. Services (dark): header, photo + 2×2 notch cards, wide corporate card + photo, booking bar repeat
5. Vehicles (grey): 3 vehicle cards + "Not sure which vehicle?" help block
6. Join our team split (dark + photo)
7. Testimonial (grey) + 4-photo strip
8. FAQ (white)
9. Yellow SEO band
10. Footer

**Services** (`/services/`)

1. IMG hero (~570px), dark overlay, **centred** white H1 (2 lines) + 16px intro + booking bar (3.4)
2. W — "Every journey covered": H2 + intro left, `btn-dark` right → portrait photo + 2×2 **dark** notch cards (3.7 inverted: dark card, white text, white notch) → wide card + photo → booking bar
3. G — centred H2 "Why choose …?" + 3 check-icon features (3.23)
4. D/IMG — Join team split (3.9)
5. W — FAQ

**Transfer hub** (`/transfer/*` — airport, Brighton, Shoreham, Lancing, Worthing, city-to-city, port)

1. W — inner hero: breadcrumb tag, 48px H1 (2 lines), **bold lead line**, intro; booking bar below (white bar on white, with float shadow)
2. IMG — full-bleed 600px photo band
3. W — H2 + intro left, `btn-light/dark` "Book a Transfer ↗" right → price list (A for airports, B for city-to-city) → booking bar
4. G — How to book: left H2 + intro + lead sentence + `btn-dark` "Book Online ↗"; right 3 icon steps (icon 32px, 20px/700 title, 14px body; inline link underlined bold)
5. IMG + D — Benefits split: photo left, dark right, H2 + 3 icon features (white icons)
6. G — Vehicles (3.8) + "Not sure which vehicle?" help block
7. W — FAQ

**Single route** (`/transfers/{from}-to-{to}/`)

1. W — route hero with fact sidebar (3.19)
2. IMG — 600px photo band + booking bar
3. W — "What's included in your … transfer?" H2 left + `btn-dark` right → 6 icon features (3.6)
4. G — Why choose (3.20)
5. D — Safety: H2 + 3 icon features (Emergency Support, Data Protection, Real-time sharing) — or photo + dark split
6. W — FAQ (route-specific questions)
7. G — "Other popular transfers" route cards (3.21) + booking bar

**Long-distance travel** (`/long-distance-travel/`)

1. W inner hero (tag, H1, bold lead, intro, `btn-dark` right) → IMG band
2. W — H2 + intro + `btn-dark` right → price list C (3 tables)
3. G — "How to get started": H2 + `btn-dark` "Book Online" left, 3 icon steps right (Book online / Contact our team …)
4. D — Safety commitments (photo + dark icon list)
5. W — FAQ

**Drivers** (`/drivers/`)

1. W inner hero (tag "Drivers", H1, intro, `btn-dark` "Apply to Drive →" right) → IMG band
2. W — H2 "Why join …" + 3 icon features
3. G — How it works: H2 + intro + "Ready to drive on your terms?" + `btn-dark` left, 3 numbered steps right (3.12)
4. IMG + D — Safety split (photo left, dark right, 3 icon items)
5. W — FAQ
6. Y — closing CTA band ("Taxi driver jobs in …" + `btn-dark` "Apply to Drive")

**Driver registration** (`/driver-registration/`)

1. W inner hero (tag, H1, bold-lead intro, `btn-dark` → scroll to form) + 3 check-icon benefits
2. Long-form application panel (3.29): Personal (name 50 / email 50; phone 33 / NI 33 / postcode 33; address 100) · Licence & Eligibility (licence type select 33 / issuing council select 33 / badge no. 33) · Vehicle (make 50 / model 50; type select 33 / max passengers 33 / vehicle badge 33) · Availability checkboxes · Today's date · 2 consent checkboxes · notes · Send

**Corporate accounts** (`/corporate-accounts/`)

1. W inner hero (tag, H1, intro, `btn-dark` "Apply here →") → IMG band
2. W — centred H2 + 5 check-icon features (3 + 2)
3. G — How to set up: H2 + `btn-dark` left, 3 numbered steps right
4. D — "Safe, secure business taxi services": H2 + 3 icon features
5. W — FAQ
6. Y — closing CTA band + `btn-dark` "Apply here"

**Corporate application** (`/corporate-application/`)

1. W inner hero + 3 check-icon benefits
2. Long-form panel (3.29), all fields 100% width, sections: Company Details (identity select, trading name, reg no., VAT no., address, postcode) · Booking Contact (name, role, phone, email) · Booking Preferences (booking-type checkboxes, monthly spend number, invoice frequency checkboxes) · Billing (name, phone, email) · Custom Booking Fields (textareas) · Security Options (booking PIN select, PIN, password select) · Declaration & Agreement · Send

**Contact** (`/contact/`)

1. IMG hero (~300px), centred tag + white H1
2. W — 2 columns: left H2 "Get in touch", intro, phone + WhatsApp icon rows, address, `btn-dark` "Book a Transfer"; right grey form panel (Name*, Phone*, Email*, Message*, Send →)
3. G — FAQ
4. Map / image band

**Book now** (`/book-now/`)

- 40px H1 left, 2-column app layout (form ~380px | map), see 3.16. Steps: Journey → Vehicle → Passenger details → Fare estimate → Pay/confirm → `/thank-you/`.

**Manage booking** (`/manage-booking/`) — 3.26, then footer.
**Booking details** (`/booking-details/`) — same shell as 3.27, showing trip summary, driver/vehicle when assigned, and actions (amend / cancel / contact). Show a friendly "Link invalid or expired" card + "Find your booking" button when the token is missing.
**Thank you** (`/thank-you/`) — 3.27.

**Blog** — `/blog/` index (3.24), `/category/<slug>/` same grid filtered, posts (3.25).

**Routes index** (`/transfers/`) — the reference site leaves this as an unstyled default archive. Build it properly instead: inner hero + filter tabs (Airports / Cities / Ports) + price-list C tables or a route-card grid (3.21).

**Legal** (`/terms/`, `/privacy-policy/`, `/cookie-policy-uk/`, `/disability-policy/`) — 3.28.

**Global on every page:** announcement bar · sticky header · footer · WhatsApp button · Google-rating tab · cookie banner.

---

## 6. Key user flows

1. **Quick book:** Hero booking bar (date, time, pickup, drop-off) → BOOK NOW → Book Now page pre-filled → choose vehicle → passenger details → fare estimate → confirm.
2. **Call / WhatsApp:** Header phone pill (tel: link) or floating WhatsApp button — always one tap away on mobile.
3. **Route price → book:** Airport transfers page → price row → route page → booking bar.
4. **Driver recruitment:** Nav Drive ▾ → Drivers page → "Apply to Drive" → registration form → Send.
5. **Corporate:** Corporate Accounts → "Apply here" → application form → Send.

---

## 7. CSS starter (copy into the new build)

```css
@import url("https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap");

:root {
  --color-primary: #1f1f1f;
  --color-accent: #fbe3bc;
  --color-text: #333333;
  --color-white: #ffffff;
  --color-surface: #f7f7f7;
  --color-dark-2: #252525;
  --color-grey-700: #494949;
  --color-grey-300: #d3d3d3;
  --color-yellow: #3c58a2;
  --color-line: rgba(23, 23, 23, 0.15);
  --color-line-inverse: rgba(255, 255, 255, 0.32);
  --color-whatsapp: #25d366;

  --font: "Onest", system-ui, sans-serif;
  --fs-display: 72px;
  --fs-h2: 48px;
  --fs-h3-lg: 32px;
  --fs-h3: 24px;
  --fs-lead: 20px;
  --fs-body: 16px;
  --fs-small: 14px;

  --container: 1200px;
  --gutter: 60px;
  --section-y: 120px;
  --radius-pill: 999px;
  --radius-card: 0;
  --shadow-float: 0 20px 45px rgba(0, 0, 0, 0.08);
  --shadow-soft: 4px 4px 30px rgba(0, 0, 0, 0.1);
  --ease: cubic-bezier(0.5, 0.12, 0.46, 0.88);
  --dur: 0.3s;
}
@media (max-width: 1024px) {
  :root {
    --fs-display: 60px;
    --fs-h2: 40px;
    --fs-h3-lg: 26px;
    --fs-h3: 22px;
    --fs-lead: 18px;
    --gutter: 32px;
    --section-y: 80px;
  }
}
@media (max-width: 767px) {
  :root {
    --fs-display: 40px;
    --fs-h2: 32px;
    --fs-h3-lg: 22px;
    --fs-h3: 20px;
    --fs-lead: 16px;
    --gutter: 20px;
    --section-y: 60px;
  }
}

body {
  font: 400 var(--fs-body)/1.7 var(--font);
  letter-spacing: -0.01em;
  color: var(--color-text);
  background: #fff;
}
h1,
h2,
h3 {
  font-family: var(--font);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
}
.display {
  font-size: var(--fs-display);
  line-height: 1.2;
  letter-spacing: -0.02em;
}
h1,
h2 {
  font-size: var(--fs-h2);
  line-height: 1.2;
  letter-spacing: -0.03em;
}
h3 {
  font-size: var(--fs-h3);
  line-height: 1.4;
  letter-spacing: -0.02em;
}
.container {
  max-width: calc(var(--container) + 2 * var(--gutter));
  padding-inline: var(--gutter);
  margin-inline: auto;
}
.section {
  padding-block: var(--section-y);
}
.section--dark {
  background: var(--color-primary);
  color: #fff;
}
.section--dark h2,
.section--dark h3 {
  color: #fff;
}
.section--grey {
  background: var(--color-surface);
}
.section--yellow {
  background: var(--color-yellow);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  height: 55px;
  padding: 0 28px;
  border-radius: var(--radius-pill);
  font: 700 16px/1.2 var(--font);
  letter-spacing: -0.01em;
  text-decoration: none;
  border: 2px solid transparent;
  transition:
    box-shadow var(--dur) var(--ease),
    background var(--dur),
    color var(--dur);
}
.btn--dark {
  background: var(--color-primary);
  color: #fff;
}
.btn--dark:hover {
  box-shadow: 0 0 0 6px rgba(31, 31, 31, 0.3);
}
.btn--accent {
  background: var(--color-accent);
  color: var(--color-primary);
}
.btn--accent:hover {
  box-shadow: 0 0 0 6px rgba(251, 227, 188, 0.3);
}
.btn--light {
  background: #fff;
  color: var(--color-primary);
}
.btn--light:hover {
  background: var(--color-surface);
}
.btn--outline {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: transparent;
}
.btn--outline:hover {
  background: var(--color-primary);
  color: #fff;
}
.btn--outline-inverse {
  border-color: #fff;
  color: #fff;
  background: transparent;
}
.btn--outline-inverse:hover {
  background: #fff;
  color: var(--color-primary);
}
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

/* pixel-step notch, bottom-left */
.card-notch {
  position: relative;
  background: #fff;
  padding: 32px 32px 68px;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    48px 100%,
    48px calc(100% - 16px),
    32px calc(100% - 16px),
    32px calc(100% - 32px),
    16px calc(100% - 32px),
    16px calc(100% - 48px),
    0 calc(100% - 48px)
  );
}

.input {
  height: 45px;
  width: 100%;
  padding: 8px 16px;
  border: 1px solid var(--color-line);
  border-radius: 0;
  background: #fff;
  font: 400 16px var(--font);
  color: var(--color-primary);
}
.input:focus {
  outline: none;
  border-color: var(--color-primary);
}
.booking-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  align-items: center;
  background: #fff;
  box-shadow: var(--shadow-float);
}
.booking-bar > div {
  padding: 16px 20px;
  border-right: 1px solid var(--color-line);
}
.booking-bar label {
  display: block;
  font: 700 14px/1.2 var(--font);
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 6px;
}
@media (max-width: 767px) {
  .booking-bar {
    grid-template-columns: 1fr;
  }
  .booking-bar > div {
    border-right: 0;
    border-bottom: 1px solid var(--color-line);
  }
}
```

---

## 8. Build notes for Claude

- Stack suggestion: Next.js (App Router, Server Components) + Tailwind or plain CSS modules using the tokens above; `next/font` for Onest; `next/image` for photos (WebP/AVIF, `sizes`).
- Accessibility: keep `#1F1F1F` on `#FBE3BC` (passes AA); never put white text on the cream or yellow. Visible focus rings, `aria-expanded` on accordion and dropdowns, labels on every booking field.
- SEO: one H1 per page, LocalBusiness/TaxiService + FAQPage JSON-LD, unique titles/meta, route pages per airport.
- Mobile first: tap-to-call phone in the header, sticky book button, booking bar stacks, 2×2 / 3-col grids collapse to 1 column at ≤767px, split sections stack with photo on top.
- Replace all brand assets: your logo, your photography, your vehicle images, your own copy and real reviews.
