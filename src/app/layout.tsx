import type { Metadata } from "next";
import { Barlow_Condensed, Archivo_Narrow, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import TickerTape from "@/components/nav/TickerTape";
import TopNav from "@/components/nav/TopNav";
import { SiteChrome } from "@/components/ui/SiteChrome";
import { DEFAULT_OG_IMAGE, organizationSchema } from "@/lib/seo";
import "./globals.css";

/* ── Lazy-load Footer (always below the fold, heavy with links/certs) ── */
const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const GTM_ID = "GTM-KJL75SBT";

export const metadata: Metadata = {
  metadataBase: new URL("https://xrtgroup.com"),
  title: {
    default: "XRT Group — Houston's Strategic Source for Fuels, Proteins, and Edible Oils",
    template: "%s | XRT Group",
  },
  description:
    "XRT Group delivers reliable domestic and export supply lines directly to gas station networks, commercial fleets, and food distributors worldwide.",
  keywords: [
    "Houston bulk automotive diesel supplier",
    "wholesale gasoline distributor",
    "ULSD export supply",
    "bulk beef export supply",
    "wholesale beef distribution",
    "bulk oil supplier",
    "wholesale bulk seed oils",
    "commodity trading",
    "procurement",
    "supply chain",
  ],
  openGraph: {
    title: "XRT Group — Strategic Commodity Procurement",
    description:
      "Houston-based commodity procurement and trading infrastructure across fuels, proteins, edible oils, grains, and logistics.",
    url: "https://xrtgroup.com",
    siteName: "XRT Group",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "XRT Group commodity procurement infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XRT Group — Strategic Commodity Procurement",
    description:
      "Houston-based commodity procurement and trading infrastructure across fuels, proteins, edible oils, grains, and logistics.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${archivoNarrow.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteChrome>
          <TickerTape />
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteChrome>
      </body>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <Script
        id="jsonld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </html>
  );
}
