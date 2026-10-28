import Link from "next/link";
import { Button } from "./Button";
import { mainNav, site } from "@/lib/site";

/**
 * Announcement bar + sticky header (design system 3.1, 3.2).
 *
 * The mobile menu is a <details>/<summary> disclosure rather than React state,
 * so the whole header stays a server component and the menu works before (and
 * without) hydration. The browser manages aria-expanded on the summary itself.
 */
export function Header() {
  return (
    <>
      <div className="announce">
        <p>
          Fixed-fare taxis across Littlehampton and West Sussex, 24/7 —{" "}
          <a href={site.phoneHref}>
            <b>call {site.phone}</b>
          </a>
        </p>
      </div>

      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="logo" aria-label={`${site.name} — home`}>
            <span className="logo__mark" aria-hidden="true">
              WC
            </span>
            <span className="logo__text">
              <span className="logo__name">Western Cars</span>
              <span className="logo__sub">Littlehampton</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Main">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="nav__link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <span className="header__cta-desktop">
              <Button href={site.phoneHref} variant="dark">
                {site.phone}
              </Button>
            </span>
            <Button href="/#book" variant="accent" icon="up-right">
              Book Online
            </Button>
          </div>
        </div>

        <details className="mobile-menu">
          <summary className="header__burger container">Menu</summary>
          <div className="container">
            <nav className="mobile-menu__list" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mobile-menu__ctas">
              <Button href={site.phoneHref} variant="dark" block>
                Call {site.phone}
              </Button>
              <Button href="/#book" variant="accent" icon="up-right" block>
                Book Online
              </Button>
            </div>
          </div>
        </details>
      </header>
    </>
  );
}
