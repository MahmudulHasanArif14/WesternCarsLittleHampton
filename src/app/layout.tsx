import type { Metadata, Viewport } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, WhatsAppFab } from "@/components/blocks";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | 24/7 Taxi & Airport Transfers in West Sussex`,
    // Each page supplies its own full title; this keeps the brand on the end.
    template: `%s | ${site.name}`,
  },
  description:
    "Licensed 24/7 taxi service in Littlehampton, West Sussex. Fixed-fare airport transfers, corporate travel, wheelchair accessible taxis and 8-seater minibuses.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F1F1F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={onest.variable}>
      <body>
        {/* One LocalBusiness node for the whole site; page schema references it. */}
        <JsonLd data={localBusinessSchema()} />
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
