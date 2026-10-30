import Link from "next/link";
import { areasServed, footerColumns, site } from "@/lib/site";
import Image from "next/image";

/** Footer (design system 3.17). */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="logo" aria-label={`${site.name} — home`}>
              <Image src="/logo.png" width={48} height={48} alt="" />

              <span className="logo__text">
                <span className="logo__name" style={{ color: "#fff" }}>
                  Western Cars
                </span>
                <span
                  className="logo__sub"
                  style={{ color: "rgba(255,255,255,.6)" }}
                >
                  Littlehampton
                </span>
              </span>
            </Link>

            <p className="footer__blurb">
              Licensed taxi and private hire across Littlehampton, West Sussex —
              airport transfers, corporate travel, wheelchair accessible
              vehicles and group minibuses, 24 hours a day.
            </p>

            <div className="footer__contact">
              <span>
                Phone:{" "}
                <a href={site.phoneHref}>
                  <strong>{site.phone}</strong>
                </a>
              </span>
              <span>
                WhatsApp:{" "}
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message us
                </a>
              </span>
              <span>
                Email:{" "}
                <a href={site.email ? `mailto:${site.email}` : "#"}>
                  <strong>{site.email}</strong>
                </a>
              </span>
              <span>
                {site.address.locality}, {site.address.region},{" "}
                {site.address.postalCode}
              </span>
              <span>Open {site.openingHours}</span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="footer__col" key={column.heading}>
              <h3>{column.heading}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="areas" className="footer__col" style={{ marginTop: 56 }}>
          <h3>Areas we cover</h3>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,.72)",
              maxWidth: "80ch",
            }}
          >
            {areasServed.join(" · ")}
          </p>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {year} {site.name}. All rights reserved. Licensed private
            hire operator, Adur District Council.
          </span>
          <nav aria-label="Legal">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/cookie-policy">Cookies</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
