import type { Metadata } from "next";
import { Barlow_Condensed, Archivo_Narrow, Inter } from "next/font/google";
import dynamic from "next/dynamic";
import TickerTape from "@/components/nav/TickerTape";
import TopNav from "@/components/nav/TopNav";
import { SiteChrome } from "@/components/ui/SiteChrome";
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

export const metadata: Metadata = {
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
        <SiteChrome>
          <TickerTape />
          <TopNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SiteChrome>
      </body>
    </html>
  );
}
