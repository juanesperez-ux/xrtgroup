import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "XRT Group's global commodity procurement infrastructure — hubs in Houston, Rotterdam, and Singapore with full AML/KYC and ISO 9001 compliance.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}