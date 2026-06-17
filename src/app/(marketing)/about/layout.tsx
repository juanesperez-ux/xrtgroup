import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Global Commodity Procurement Company — Houston, Rotterdam, Singapore",
  description:
    "XRT Group LLC is a commodity procurement company incorporated in Houston, TX with operational hubs in Rotterdam and Singapore. ISO 9001, C-TPAT, GAFTA certified since 2018.",
  path: "/about",
  keywords: [
    "global commodity procurement company",
    "Houston commodity trading company",
    "Rotterdam procurement hub",
    "Singapore commodity desk",
    "ISO 9001 commodity procurement",
    "C-TPAT commodity trading",
  ],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
