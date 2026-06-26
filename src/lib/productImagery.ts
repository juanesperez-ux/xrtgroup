import type { ProductSpec, ProductCategory } from "@/lib/productsData";

export interface ProductGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const CATEGORY_GALLERIES: Record<ProductCategory, ProductGalleryImage[]> = {
  energy: [
    {
      src: "/images/photo-oil-pump-sunset.jpg",
      alt: "Oil pump silhouette at sunset representing crude oil supply and energy procurement",
      caption: "Upstream production reference",
    },
    {
      src: "/images/photo-offshore-energy-port.jpg",
      alt: "Offshore energy platform and port cranes at dusk for petroleum logistics",
      caption: "Port-side energy infrastructure",
    },
    {
      src: "/images/photo-lng-terminal-tanks.jpg",
      alt: "LNG tanks on a terminal vessel under a clear sky",
      caption: "Terminal and storage operations",
    },
    {
      src: "/images/photo-commodity-market-screen.jpg",
      alt: "Commodity market screen showing benchmark pricing data",
      caption: "Benchmark-linked pricing",
    },
  ],
  grains: [
    {
      src: "/images/photo-srw-wheat-field-golden.jpg",
      alt: "Golden wheat heads in a field under a blue sky",
      caption: "Field-origin grain quality",
    },
    {
      src: "/images/photo-agriculture-field-rows.jpg",
      alt: "Aerial view of agricultural crop rows in an open field",
      caption: "North and South American crop supply",
    },
    {
      src: "/images/photo-bulk-carrier-at-sea.jpg",
      alt: "Bulk cargo vessel crossing open water",
      caption: "Bulk vessel export movement",
    },
  ],
  oils: [
    {
      src: "/images/photo-golden-edible-oil-pour.jpg",
      alt: "Golden edible oil pouring into a stainless vessel with bubbles",
      caption: "Bulk liquid handling",
    },
    {
      src: "/images/photo-agriculture-field-rows.jpg",
      alt: "Rows of agricultural crops under a bright sky",
      caption: "Oilseed and plantation sourcing",
    },
    {
      src: "/images/photo-bulk-carrier-at-sea.jpg",
      alt: "Cargo vessel moving across blue ocean water",
      caption: "Export freight coordination",
    },
  ],
  logistics: [
    {
      src: "/images/photo-bulk-carrier-at-sea.jpg",
      alt: "Bulk carrier vessel underway across calm sea",
      caption: "Ocean freight execution",
    },
    {
      src: "/images/photo-lng-terminal-tanks.jpg",
      alt: "LNG terminal tanks and vessel deck equipment",
      caption: "Terminal interface",
    },
    {
      src: "/images/photo-offshore-energy-port.jpg",
      alt: "Industrial port with offshore platform and cranes at dusk",
      caption: "Port and heavy-lift infrastructure",
    },
  ],
  proteins: [
    {
      src: "/images/photo-black-angus-cattle-closeup.jpg",
      alt: "Close view of Black Angus cattle in a holding pen",
      caption: "Black Angus source herd",
    },
    {
      src: "/images/photo-black-angus-pasture.jpg",
      alt: "Black Angus cattle grazing in a green pasture",
      caption: "Pasture-raised supply reference",
    },
    {
      src: "/images/photo-black-angus-open-field.jpg",
      alt: "Single Black Angus cow standing in a wide open grass field",
      caption: "Traceable livestock origin",
    },
  ],
};

const PRODUCT_GALLERIES: Partial<Record<string, ProductGalleryImage[]>> = {
  "srw-wheat": CATEGORY_GALLERIES.grains,
  "beef-usda-kosher": CATEGORY_GALLERIES.proteins,
  "beef-usda-halal": CATEGORY_GALLERIES.proteins,
};

export function getProductGallery(product: ProductSpec): ProductGalleryImage[] {
  return PRODUCT_GALLERIES[product.slug] ?? CATEGORY_GALLERIES[product.category];
}
