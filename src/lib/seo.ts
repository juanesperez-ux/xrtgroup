import type { Metadata } from "next";

export const SITE_URL = "https://xrtgroup.com";
export const SITE_NAME = "XRT Group";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-xrtgroup-default.png`;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: title.includes(SITE_NAME) ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
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
      title: title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "XRT Group LLC",
  alternateName: "XRT Group",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/xrt-holdings-logo.svg`,
    width: 400,
    height: 130,
  },
  description:
    "XRT Group is a Houston-based commodity procurement and trading company operating across energy, agricultural, edible oils, proteins, and logistics verticals with hubs in Houston, Rotterdam, and Singapore.",
  foundingDate: "2018",
  foundingLocation: {
    "@type": "Place",
    name: "Houston, Texas, USA",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "energy@xrtgroup.com",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "agro@xrtgroup.com",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "procurement@xrtgroup.com",
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commodity Trading Catalog",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "WTI Crude Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "ULSD Diesel" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Jet Fuel A-1" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "SRW Wheat" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Crude Palm Oil" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "USDA Beef" } },
    ],
  },
};

export const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does XRT Group source commodities without brokers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XRT Group operates a Commodity Sourcing Engine with pre-vetted primary producers and refiners across global trade corridors, aggregating bids directly from origin instead of traditional broker chains.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum volume for commodity procurement with XRT Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum volumes vary by commodity: 100,000 BBL for crude oil, 3,000 MT for ULSD diesel, 25,000 MT for grains, 2,000 MT for edible oils, and logistics products starting at 20 ISO tank units.",
      },
    },
    {
      "@type": "Question",
      name: "What INCOTERMS does XRT Group support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XRT Group supports major INCOTERMS 2020 terms including FOB, CIF, CFR, DAP, DDP, FCA, and EXW depending on commodity, destination, and operational hub.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to receive a commodity offer from XRT Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XRT Group responds to RFQ submissions within 4 business hours with desk routing and preliminary guidance. Full structured offers depend on commodity, volume, inspection terms, and trade finance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is XRT Group OFAC and AML compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. XRT Group uses OFAC screening, FATF AML/KYC controls, C-TPAT certification, AEO certification, and EU 5AMLD compliance across its operational hubs.",
      },
    },
  ],
};
