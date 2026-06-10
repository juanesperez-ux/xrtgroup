import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users", // collection slug for admin auth
    importMap: {
      baseDir: path.resolve(dirname, "src", "app", "(payload)", "admin"),
    },
  },
  collections: [
    {
      slug: "users",
      auth: {
        // lockAfter: 5, // lock account after 5 failed attempts (optional)
        // maxLoginAttempts: 5,
      },
      admin: {
        group: "Admin",
        useAsTitle: "email",
      },
      fields: [
        {
          name: "name",
          type: "text",
          label: "Full Name",
        },
      ],
    },
    {
      slug: "media",
      upload: {
        staticDir: path.resolve(dirname, "public/uploads"),
        mimeTypes: ["image/*"],
        imageSizes: [
          {
            name: "thumbnail",
            width: 400,
            height: 300,
            position: "centre",
          },
          {
            name: "hero",
            width: 1920,
            height: 1080,
            position: "centre",
          },
          {
            name: "card",
            width: 800,
            height: 600,
            position: "centre",
          },
        ],
      },
      admin: {
        group: "Content",
      },
      fields: [
        {
          name: "alt",
          type: "text",
          label: "Alt Text",
          required: true,
        },
        {
          name: "caption",
          type: "text",
          label: "Caption (optional)",
        },
      ],
    },
    {
      slug: "site-settings",
      admin: {
        group: "Content",
      },
      access: {
        read: () => true,
      },
      fields: [
        // ── Hero Section ────────────────────────────────────
        {
          type: "tabs",
          tabs: [
            {
              label: "Hero",
              fields: [
                {
                  name: "heroImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Hero Background Image",
                  admin: {
                    description: "1920×1080+ recommended — shipping fleets, freight lines, global trade infrastructure",
                  },
                },
                {
                  name: "heroHeadline",
                  type: "text",
                  label: "Hero H1 Headline",
                  defaultValue: "Houston's Strategic Source for Fuels, Proteins, and Edible Oils",
                },
                {
                  name: "heroSubheadline",
                  type: "textarea",
                  label: "Hero Sub-headline",
                  defaultValue:
                    "XRT Group delivers reliable domestic and export supply lines directly to gas station networks, commercial fleets, and food distributors worldwide.",
                },
              ],
            },
            // ── Pillar 1: Fuels ─────────────────────────────
            {
              label: "Pillar 1 — Fuels",
              fields: [
                {
                  name: "fuelsImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Fuels Pillar Image",
                  admin: { description: "Automotive diesel and gasoline fuel logistics — 800×600+ recommended" },
                },
                {
                  name: "fuelsHeadline",
                  type: "text",
                  label: "Fuels Card Headline",
                  defaultValue: "High-Volume Fuel Distribution",
                },
                {
                  name: "fuelsBullet1",
                  type: "text",
                  label: "Fuel Bullet 1 Title",
                  defaultValue: "Automotive Diesel (ULSD)",
                },
                {
                  name: "fuelsBullet1Desc",
                  type: "textarea",
                  label: "Fuel Bullet 1 Description",
                  defaultValue: "15-ppm ultra-low sulfur diesel for domestic bulk supply and global export.",
                },
                {
                  name: "fuelsBullet2",
                  type: "text",
                  label: "Fuel Bullet 2 Title",
                  defaultValue: "Automotive Gasoline",
                },
                {
                  name: "fuelsBullet2Desc",
                  type: "textarea",
                  label: "Fuel Bullet 2 Description",
                  defaultValue: "Regular, mid-grade, and premium blends engineered for gas station networks and bulk terminals.",
                },
                {
                  name: "fuelsBullet3",
                  type: "text",
                  label: "Fuel Bullet 3 Title",
                  defaultValue: "Marine Gas Oil (MGO)",
                },
                {
                  name: "fuelsBullet3Desc",
                  type: "textarea",
                  label: "Fuel Bullet 3 Description",
                  defaultValue: "High-grade distillates for commercial maritime bunkering and operations.",
                },
              ],
            },
            // ── Pillar 2: Proteins ──────────────────────────
            {
              label: "Pillar 2 — Proteins",
              fields: [
                {
                  name: "proteinsImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Proteins Pillar Image",
                  admin: { description: "Beef processing and protein export — 800×600+ recommended" },
                },
                {
                  name: "proteinsHeadline",
                  type: "text",
                  label: "Proteins Card Headline",
                  defaultValue: "Premium Beef & Protein Export",
                },
                {
                  name: "proteinsBullet1",
                  type: "text",
                  label: "Protein Bullet 1 Title",
                  defaultValue: "Bulk Volume Supply",
                },
                {
                  name: "proteinsBullet1Desc",
                  type: "textarea",
                  label: "Protein Bullet 1 Description",
                  defaultValue: "International procurement channels handling high-volume commercial cut orders.",
                },
                {
                  name: "proteinsBullet2",
                  type: "text",
                  label: "Protein Bullet 2 Title",
                  defaultValue: "Custom Commercial Specs",
                },
                {
                  name: "proteinsBullet2Desc",
                  type: "textarea",
                  label: "Protein Bullet 2 Description",
                  defaultValue: "Fully traceable premium beef processing tailored to specific national trade guidelines.",
                },
              ],
            },
            // ── Pillar 3: Olive Oils ────────────────────────
            {
              label: "Pillar 3 — Olive Oils",
              fields: [
                {
                  name: "oliveOilsImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Olive Oils Pillar Image",
                  admin: { description: "Olive oil production and bottling — 800×600+ recommended" },
                },
                {
                  name: "oliveOilsHeadline",
                  type: "text",
                  label: "Olive Oils Card Headline",
                  defaultValue: "Wholesale Olive Oil Production",
                },
                {
                  name: "oliveOilsBullet1",
                  type: "text",
                  label: "Olive Oil Bullet 1 Title",
                  defaultValue: "Bulk Flexitank Shipments",
                },
                {
                  name: "oliveOilsBullet1Desc",
                  type: "textarea",
                  label: "Olive Oil Bullet 1 Description",
                  defaultValue: "Industrial quantities for food manufacturers, packers, and processors.",
                },
                {
                  name: "oliveOilsBullet2",
                  type: "text",
                  label: "Olive Oil Bullet 2 Title",
                  defaultValue: "Bottled Retail Packaging",
                },
                {
                  name: "oliveOilsBullet2Desc",
                  type: "textarea",
                  label: "Olive Oil Bullet 2 Description",
                  defaultValue: "Premium extra virgin and refined private-label options ready for grocery and wholesale distributors.",
                },
              ],
            },
            // ── Pillar 4: Seed Oils ─────────────────────────
            {
              label: "Pillar 4 — Seed Oils",
              fields: [
                {
                  name: "seedOilsImage",
                  type: "upload",
                  relationTo: "media",
                  label: "Seed Oils Pillar Image",
                  admin: { description: "Sunflower and canola oil production — 800×600+ recommended" },
                },
                {
                  name: "seedOilsHeadline",
                  type: "text",
                  label: "Seed Oils Card Headline",
                  defaultValue: "Bulk & Bottled Seed Oils",
                },
                {
                  name: "seedOilsBullet1",
                  type: "text",
                  label: "Seed Oil Bullet 1 Title",
                  defaultValue: "Industrial Seed Oils",
                },
                {
                  name: "seedOilsBullet1Desc",
                  type: "textarea",
                  label: "Seed Oil Bullet 1 Description",
                  defaultValue: "Wholesale volumes of high-performance cooking oils, including Sunflower, Corn, Soybean, and Canola.",
                },
                {
                  name: "seedOilsBullet2",
                  type: "text",
                  label: "Seed Oil Bullet 2 Title",
                  defaultValue: "Retail-Ready Formats",
                },
                {
                  name: "seedOilsBullet2Desc",
                  type: "textarea",
                  label: "Seed Oil Bullet 2 Description",
                  defaultValue: "Flexible bottling and private-label packaging options shipped globally from strategic logistics points.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "sqlite:///payload.db",
    },
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "fallback-dev-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});