import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type ButtonVariant =
  | "dark"
  | "accent"
  | "light"
  | "outline"
  | "outline-inverse";

type Common = {
  variant?: ButtonVariant;
  /** Trailing icon. "↗" for booking/external CTAs, "→" for next/apply. */
  icon?: "up-right" | "right" | "none";
  block?: boolean;
  children: ReactNode;
  className?: string;
};

type AsLink = Common & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type AsButton = Common & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

const ICONS = { "up-right": "↗", right: "→", none: null } as const;

function classes(variant: ButtonVariant, block?: boolean, extra?: string) {
  return ["btn", `btn--${variant}`, block ? "btn--block" : "", extra ?? ""]
    .filter(Boolean)
    .join(" ");
}

/**
 * The single button primitive (design system 3.3). Renders a Next link when
 * given `href`, otherwise a real <button>, so semantics stay correct.
 * The icon is aria-hidden — it is decoration, not label text.
 */
export function Button(props: AsLink | AsButton) {
  const {
    variant = "dark",
    icon = "none",
    block,
    children,
    className,
    ...rest
  } = props as Common & Record<string, unknown>;

  const glyph = ICONS[icon];
  const content = (
    <>
      <span>{children}</span>
      {glyph ? (
        <span className="btn__icon" aria-hidden="true">
          {glyph}
        </span>
      ) : null}
    </>
  );

  if (typeof props.href === "string") {
    const { href, ...linkRest } = rest as { href: string } & Record<string, unknown>;
    const external = href.startsWith("http") || href.startsWith("tel:");
    if (external) {
      return (
        <a
          href={href}
          className={classes(variant, block, className)}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...(linkRest as ComponentProps<"a">)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes(variant, block, className)}
        {...(linkRest as Omit<ComponentProps<typeof Link>, "href">)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes(variant, block, className)}
      {...(rest as ComponentProps<"button">)}
    >
      {content}
    </button>
  );
}
