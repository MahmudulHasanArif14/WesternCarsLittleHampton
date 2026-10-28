import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { Icon, type IconName } from "./Icon";
import { site } from "@/lib/site";
import type { Photo } from "@/lib/images";

/** Inlines a JSON-LD graph node. Content is ours, so stringify is safe here. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Section header: copy on the left, optional CTA on the right (3.6). */
export function SectionHead({
  title,
  text,
  cta,
  as: Heading = "h2",
}: {
  title: ReactNode;
  text?: ReactNode;
  cta?: ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <div className="section-head">
      <div className="section-head__copy">
        <Heading>{title}</Heading>
        {text ? <p>{text}</p> : null}
      </div>
      {cta}
    </div>
  );
}

/** Feature item with icon, title and rule beneath (3.6). */
export function Feature({
  icon,
  title,
  children,
}: {
  icon: IconName;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="feature">
      <span className="feature__icon">
        <Icon name={icon} size={30} />
      </span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

/** Checklist with circular ticks, used on dark splits and vehicle cards (3.9). */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="checklist__tick" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Service card with the pixel-step notch (3.7). */
export function ServiceCard({
  title,
  children,
  href = "/#contact",
}: {
  title: string;
  children: ReactNode;
  href?: string;
}) {
  return (
    <Link href={href} className="service-card notch">
      <h3>{title}</h3>
      <p>{children}</p>
      <span className="service-card__arrow" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}

/** Breadcrumb trail (3.18). The matching JSON-LD is emitted by the page. */
export function Breadcrumbs({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.href}>
              {last ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <>
                  <Link href={crumb.href}>{crumb.name}</Link>
                  <span className="crumbs__sep" aria-hidden="true">
                    {" "}
                    &raquo;
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * FAQ accordion (3.11). Built on <details>, so it is keyboard accessible and
 * open-by-default-safe without client JavaScript. `name` groups the items so
 * only one stays open at a time in browsers that support it.
 */
export function Faq({
  items,
  group = "faq",
}: {
  items: { question: string; answer: string }[];
  group?: string;
}) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.question} name={group}>
          <summary className="faq__q">
            {item.question}
            <span className="faq__sign" aria-hidden="true" />
          </summary>
          <p className="faq__a">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Yellow SEO / CTA band before the footer (3.14). */
export function SeoBand({
  title,
  children,
  ctaLabel = "Book a transfer",
  ctaHref = "/#book",
}: {
  title: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section section--yellow">
      <div className="container seo-band">
        <div className="seo-band__copy">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
        <Button href={ctaHref} variant="dark" icon="up-right">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}

/** Full-bleed photo band (used between sections on every template). */
export function PhotoBand({ photo, priority = false }: { photo: Photo; priority?: boolean }) {
  return (
    <div className="photo-band">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="100vw"
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

/** Floating WhatsApp button (3.30). */
export function WhatsAppFab() {
  return (
    <a
      className="whatsapp-fab"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${site.shortName} on WhatsApp`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.25.69-1.45 1.32-2 1.4-.51.08-1.16.11-1.87-.12-.43-.14-.98-.32-1.69-.62-2.98-1.29-4.92-4.29-5.07-4.49-.15-.2-1.21-1.61-1.21-3.07s.77-2.18 1.04-2.48c.27-.3.59-.37.79-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.3 2.36 1.45.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2.01.96.3.15.5.22.57.35.07.12.07.72-.18 1.41Z" />
      </svg>
    </a>
  );
}
