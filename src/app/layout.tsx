import type { Metadata } from "next";
import { Barlow_Condensed, Archivo_Narrow } from "next/font/google";
import TickerTape from "@/components/nav/TickerTape";
import TopNav from "@/components/nav/TopNav";
import Footer from "@/components/footer/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "XRT Group — Authority in Commodity Procurement",
    template: "%s | XRT Group",
  },
  description:
    "XRT Group is a next-generation Strategic Procurement & Commodity Trading platform. Sourcing without secrets. Logistics without friction.",
  keywords: [
    "commodity trading",
    "procurement",
    "supply chain",
    "crude oil",
    "agricultural commodities",
    "logistics",
    "freight",
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
      className={`${barlowCondensed.variable} ${archivoNarrow.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <TickerTape />
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
