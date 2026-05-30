import type { ProductSpec } from "@/lib/productsData";

/**
 * Emits JSON-LD (schema.org) for an individual product page:
 *   Product + Offer, BreadcrumbList, FAQPage.
 * Improves Google rich results and AI-search (Perplexity/ChatGPT/Claude) intent matching.
 */
export default function ProductStructuredData({ product }: { product: ProductSpec }) {
  const url = `https://xrtgroup.com/products/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: product.name,
        description: product.description,
        sku: product.code,
        category: product.category,
        keywords: product.searchKeywords.join(", "),
        brand: { "@type": "Brand", name: "XRT Group" },
        additionalProperty: product.specs.map((spec) => ({
          "@type": "PropertyValue",
          name: spec.label,
          value: spec.value,
        })),
        offers: {
          "@type": "Offer",
          url,
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          // Differential pricing expressed as text (not an absolute price)
          description: `Negotiated against ${product.benchmark} benchmark. Indicative differential ${product.premiumDisc}. Minimum ${product.minVolume} ${product.minVolumeUnit}.`,
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            minValue: product.minVolume.replace(/,/g, ""),
            unitText: product.minVolumeUnit,
          },
          seller: {
            "@type": "Organization",
            name: "XRT Group LLC",
            url: "https://xrtgroup.com",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Products", item: "https://xrtgroup.com/products" },
          { "@type": "ListItem", position: 2, name: product.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the minimum order quantity for ${product.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The minimum parcel size for ${product.name} is ${product.minVolume} ${product.minVolumeUnit}.`,
            },
          },
          {
            "@type": "Question",
            name: `What INCOTERMS are available for ${product.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${product.name} is available under ${product.incoterms.join(" and ")} delivery terms.`,
            },
          },
          {
            "@type": "Question",
            name: `What inspection agencies are used for ${product.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${product.name} is inspected by ${product.inspection.join(" and ")} at load port.`,
            },
          },
          {
            "@type": "Question",
            name: `How quickly does XRT Group respond to ${product.name} RFQs?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `XRT Group's ${product.hub[0]} desk responds to ${product.name} requests within 4 business hours.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
