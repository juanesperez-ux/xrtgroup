module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/icon.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/icon.0ahibzurkuk9d.svg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/icon.svg.mjs { IMAGE => \"[project]/src/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/icon.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$icon$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 100,
    height: 95
};
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "compliance",
    ()=>compliance,
    "homeCommoditySnapshot",
    ()=>homeCommoditySnapshot,
    "homeStats",
    ()=>homeStats,
    "hubs",
    ()=>hubs,
    "products",
    ()=>products,
    "services",
    ()=>services,
    "tickerItems",
    ()=>tickerItems,
    "timeline",
    ()=>timeline
]);
const tickerItems = [
    {
        symbol: "WTI CRUDE",
        price: "82.47",
        change: "+0.84",
        pct: "+1.03%",
        unit: "USD/BBL",
        positive: true
    },
    {
        symbol: "BRENT CRUDE",
        price: "86.12",
        change: "+0.91",
        pct: "+1.07%",
        unit: "USD/BBL",
        positive: true
    },
    {
        symbol: "NATURAL GAS",
        price: "2.381",
        change: "-0.043",
        pct: "-1.77%",
        unit: "USD/MMBTU",
        positive: false
    },
    {
        symbol: "WHEAT",
        price: "541.25",
        change: "+3.75",
        pct: "+0.70%",
        unit: "USD/MT",
        positive: true
    },
    {
        symbol: "CORN",
        price: "442.00",
        change: "-2.25",
        pct: "-0.51%",
        unit: "USD/MT",
        positive: false
    },
    {
        symbol: "SOYBEANS",
        price: "1,148.50",
        change: "+6.75",
        pct: "+0.59%",
        unit: "USD/MT",
        positive: true
    },
    {
        symbol: "PALM OIL",
        price: "3,924.00",
        change: "-18.00",
        pct: "-0.46%",
        unit: "MYR/MT",
        positive: false
    },
    {
        symbol: "UREA",
        price: "298.00",
        change: "+4.50",
        pct: "+1.53%",
        unit: "USD/MT",
        positive: true
    },
    {
        symbol: "SOYBEAN OIL",
        price: "46.82",
        change: "+0.34",
        pct: "+0.73%",
        unit: "USD/CWT",
        positive: true
    },
    {
        symbol: "SUGAR #11",
        price: "18.43",
        change: "-0.12",
        pct: "-0.65%",
        unit: "USD/LB",
        positive: false
    },
    {
        symbol: "COTTON",
        price: "83.21",
        change: "+0.47",
        pct: "+0.57%",
        unit: "USD/LB",
        positive: true
    },
    {
        symbol: "CANOLA",
        price: "612.40",
        change: "+5.20",
        pct: "+0.86%",
        unit: "CAD/MT",
        positive: true
    }
];
const homeStats = [
    {
        value: "42+",
        label: "Countries of Operation"
    },
    {
        value: "18M MT",
        label: "Annual Volume Managed"
    },
    {
        value: "99.4%",
        label: "On-Time Delivery Rate"
    },
    {
        value: "$2.8B",
        label: "Sourcing Value (TTM)"
    }
];
const homeCommoditySnapshot = [
    {
        category: "ENERGY",
        items: [
            {
                name: "WTI Crude Oil",
                grade: "40° API / 0.24% S",
                price: "$82.47",
                unit: "/BBL",
                change: "+1.03%"
            },
            {
                name: "Brent Crude",
                grade: "38.3° API / 0.37% S",
                price: "$86.12",
                unit: "/BBL",
                change: "+1.07%"
            },
            {
                name: "ULSD",
                grade: "10 ppm Sulfur Max",
                price: "$2.984",
                unit: "/GAL",
                change: "-0.22%"
            },
            {
                name: "Jet Fuel A-1",
                grade: "ASTM D1655",
                price: "$2.791",
                unit: "/GAL",
                change: "+0.41%"
            }
        ]
    },
    {
        category: "GRAINS & AGRO",
        items: [
            {
                name: "SRW Wheat",
                grade: "USDA #2 / 60 lbs/bu",
                price: "$541.25",
                unit: "/MT",
                change: "+0.70%"
            },
            {
                name: "Yellow Corn #2",
                grade: "14% Moisture Max",
                price: "$442.00",
                unit: "/MT",
                change: "-0.51%"
            },
            {
                name: "Soybeans #1",
                grade: "13% Moisture / 1% FM",
                price: "$1,148.50",
                unit: "/MT",
                change: "+0.59%"
            },
            {
                name: "Barley (Malting)",
                grade: "2-Row / 13.5% Protein",
                price: "$312.00",
                unit: "/MT",
                change: "+1.21%"
            }
        ]
    },
    {
        category: "OILS & FATS",
        items: [
            {
                name: "Crude Palm Oil",
                grade: "FFA 5% Max",
                price: "MYR 3,924",
                unit: "/MT",
                change: "-0.46%"
            },
            {
                name: "Soybean Oil (RBD)",
                grade: "IV 130-140 / FFA 0.1%",
                price: "$46.82",
                unit: "/CWT",
                change: "+0.73%"
            },
            {
                name: "Canola Oil",
                grade: "Erucic Acid <2%",
                price: "CAD 612.40",
                unit: "/MT",
                change: "+0.86%"
            },
            {
                name: "Sunflower Oil",
                grade: "High Oleic / Linoleic",
                price: "$938.00",
                unit: "/MT",
                change: "+0.14%"
            }
        ]
    }
];
const services = [
    {
        id: "S-001",
        name: "Automated Routing Protocol",
        code: "ARP",
        description: "Multi-modal freight optimization engine that dynamically selects carrier combinations across maritime, rail, and road networks based on cost, velocity, and carbon intensity metrics.",
        metrics: [
            {
                key: "Route Optimization Cycles",
                value: "14,000+ / day"
            },
            {
                key: "Carrier Network Nodes",
                value: "1,840 global"
            },
            {
                key: "Avg. Cost Reduction vs. Spot",
                value: "12–18%"
            },
            {
                key: "CO₂ Intensity Scoring",
                value: "Active"
            }
        ],
        status: "OPERATIONAL",
        protocols: [
            "SOLAS",
            "MARPOL",
            "IMDG"
        ]
    },
    {
        id: "S-002",
        name: "Risk Mitigation Matrix",
        code: "RMM",
        description: "Proprietary geopolitical exposure indexing, supplier creditworthiness scoring, and currency hedge matrices updated every 4 hours against IMF and BIS benchmark data.",
        metrics: [
            {
                key: "Counterparty Risk Models",
                value: "287 active"
            },
            {
                key: "Currency Pairs Monitored",
                value: "48"
            },
            {
                key: "Geopolitical Risk Index",
                value: "Real-time"
            },
            {
                key: "Credit Score Refresh Rate",
                value: "4-hour cycle"
            }
        ],
        status: "OPERATIONAL",
        protocols: [
            "ISDA",
            "EMIR",
            "Dodd-Frank"
        ]
    },
    {
        id: "S-003",
        name: "Customs Clearance Pipeline",
        code: "CCP",
        description: "Pre-clearance document processing with AI-assisted HS code classification and multi-jurisdiction compliance mapping across 42 trade corridors.",
        metrics: [
            {
                key: "Avg. Clearance Time",
                value: "4.2 hours"
            },
            {
                key: "HS Code Classification Accuracy",
                value: "99.1%"
            },
            {
                key: "Trade Corridors Covered",
                value: "42"
            },
            {
                key: "Document Types Processed",
                value: "38"
            }
        ],
        status: "OPERATIONAL",
        protocols: [
            "WCO",
            "AEO",
            "C-TPAT"
        ]
    },
    {
        id: "S-004",
        name: "Commodity Sourcing Engine",
        code: "CSE",
        description: "Direct-origin procurement network bypassing traditional broker chains. Real-time bid aggregation from 600+ pre-vetted primary producers and refiners across 6 continents.",
        metrics: [
            {
                key: "Active Supplier Registry",
                value: "643 entities"
            },
            {
                key: "Bid Aggregation Speed",
                value: "<90 seconds"
            },
            {
                key: "Pre-Vetted Origins",
                value: "6 continents"
            },
            {
                key: "KYC/AML Clearance Rate",
                value: "100% required"
            }
        ],
        status: "OPERATIONAL",
        protocols: [
            "FATF",
            "OFAC",
            "EU 5AMLD"
        ]
    },
    {
        id: "S-005",
        name: "Structured Trade Finance",
        code: "STF",
        description: "Pre-export financing, standby LCs, and performance bonds structured against physical commodity collateral. Coordination with Tier-1 trade finance banks in Houston, Rotterdam, and Singapore.",
        metrics: [
            {
                key: "Max Facility Size",
                value: "$500M per tranche"
            },
            {
                key: "LC Issuance Speed",
                value: "48–72 hours"
            },
            {
                key: "Banking Partners",
                value: "14 Tier-1 institutions"
            },
            {
                key: "Collateral Accepted",
                value: "Physical + warehouse receipts"
            }
        ],
        status: "SELECTIVE",
        protocols: [
            "UCP 600",
            "ISP98",
            "Incoterms 2020"
        ]
    },
    {
        id: "S-006",
        name: "Quality Assurance & Inspection",
        code: "QAI",
        description: "Third-party inspection coordination with SGS, Bureau Veritas, and Intertek. Covers pre-shipment inspection, load port sampling, and destination verification against contracted specs.",
        metrics: [
            {
                key: "Inspection Agencies Integrated",
                value: "SGS / BV / ITS"
            },
            {
                key: "Avg. Report Turnaround",
                value: "24 hours"
            },
            {
                key: "Spec Compliance Rate",
                value: "99.7%"
            },
            {
                key: "Dispute Resolution Speed",
                value: "<72 hours"
            }
        ],
        status: "OPERATIONAL",
        protocols: [
            "ISO 9001",
            "ASTM",
            "USDA AMS"
        ]
    }
];
const products = [
    {
        pillar: "ENERGY COMMODITIES",
        code: "ENE",
        color: "crimson",
        summary: "Crude oil, refined petroleum products, and natural gas sourced directly from producing regions. Grades negotiated against Platts and Argus benchmarks.",
        items: [
            {
                product: "WTI Crude Oil",
                grade: "40° API / 0.24% Sulfur",
                origin: "Midland Basin / Permian",
                incoterms: "FOB / CIF",
                minVolume: "100,000 BBL",
                benchmark: "NYMEX WTI",
                premium: "+$0.85",
                inspection: "SGS / BV"
            },
            {
                product: "Brent Crude",
                grade: "38.3° API / 0.37% Sulfur",
                origin: "North Sea / West Africa",
                incoterms: "CIF / CFR",
                minVolume: "100,000 BBL",
                benchmark: "ICE Brent",
                premium: "+$1.20",
                inspection: "Bureau Veritas"
            },
            {
                product: "ULSD",
                grade: "10 ppm Sulfur (EN 590)",
                origin: "ARA Region / USGC",
                incoterms: "FOB / DAP",
                minVolume: "3,000 MT",
                benchmark: "Platts ULSD",
                premium: "+$0.02/GAL",
                inspection: "Intertek"
            },
            {
                product: "Jet Fuel A-1",
                grade: "ASTM D1655 / DEF STAN 91-091",
                origin: "Singapore / Rotterdam",
                incoterms: "CIF",
                minVolume: "5,000 MT",
                benchmark: "Platts Jet/Kero",
                premium: "+$1.50/MT",
                inspection: "SGS"
            },
            {
                product: "Fuel Oil 380 CST",
                grade: "3.5% Sulfur Max / ISO 8217",
                origin: "Houston / Fujairah",
                incoterms: "FCA / FOB",
                minVolume: "5,000 MT",
                benchmark: "Platts HSFO",
                premium: "-$2.00/MT",
                inspection: "Bureau Veritas"
            }
        ]
    },
    {
        pillar: "GRAINS & AGRICULTURAL",
        code: "AGR",
        color: "gold",
        summary: "USDA-certified grain procurement across North American, South American, and Black Sea origins. Managed under GAFTA and FOSFA terms with full phytosanitary compliance.",
        items: [
            {
                product: "SRW Wheat",
                grade: "USDA #2 / 60 lbs/bu TW",
                origin: "USGLF / PNW",
                incoterms: "FOB / CIF",
                minVolume: "25,000 MT",
                benchmark: "CBOT Wheat",
                premium: "+$5.00/MT",
                inspection: "USDA FGIS"
            },
            {
                product: "Yellow Corn #2",
                grade: "14% Moisture / 15% BCFM",
                origin: "Gulf USGLF / Santos",
                incoterms: "CFR / CIF",
                minVolume: "25,000 MT",
                benchmark: "CBOT Corn",
                premium: "+$3.50/MT",
                inspection: "SGS"
            },
            {
                product: "Soybeans #1",
                grade: "13% Moisture / 1% FM",
                origin: "USGLF / Paranaguá",
                incoterms: "CFR",
                minVolume: "30,000 MT",
                benchmark: "CBOT Soybeans",
                premium: "+$7.00/MT",
                inspection: "Intertek"
            },
            {
                product: "Malting Barley",
                grade: "2-Row / 13.5% Protein Max",
                origin: "Saskatchewan / Australia",
                incoterms: "CIF",
                minVolume: "10,000 MT",
                benchmark: "ICE Canola proxy",
                premium: "Negotiated",
                inspection: "Bureau Veritas"
            }
        ]
    },
    {
        pillar: "EDIBLE & INDUSTRIAL OILS",
        code: "OIL",
        color: "steel",
        summary: "Bulk vegetable and industrial oils sourced under FOSFA and PORAM standards. Full chain-of-custody documentation including RSPO certification where applicable.",
        items: [
            {
                product: "Crude Palm Oil (CPO)",
                grade: "FFA 5% Max / M&I 0.5%",
                origin: "Malaysia / Indonesia",
                incoterms: "CIF / CFR",
                minVolume: "2,000 MT",
                benchmark: "BMD FCPO",
                premium: "+MYR 40/MT",
                inspection: "MPOB"
            },
            {
                product: "RBD Palm Olein",
                grade: "CP45 / FFA 0.1%",
                origin: "Malaysia / Belawan",
                incoterms: "CIF",
                minVolume: "2,000 MT",
                benchmark: "Platts Palm Olein",
                premium: "+$15/MT",
                inspection: "SGS"
            },
            {
                product: "Soybean Oil (Degummed)",
                grade: "IV 130-140 / FFA 1% Max",
                origin: "Santos / Buenos Aires",
                incoterms: "FOB / CFR",
                minVolume: "2,000 MT",
                benchmark: "CBOT BO",
                premium: "+$8/MT",
                inspection: "Intertek"
            },
            {
                product: "High-Oleic Sunflower Oil",
                grade: "Oleic 82%+ / Linoleic 10%",
                origin: "Ukraine / Black Sea",
                incoterms: "FOB / CFR",
                minVolume: "1,000 MT",
                benchmark: "Platts SFO",
                premium: "+$20/MT",
                inspection: "Bureau Veritas"
            }
        ]
    },
    {
        pillar: "LOGISTICS INFRASTRUCTURE",
        code: "LOG",
        color: "black",
        summary: "End-to-end freight management across maritime, rail, and road networks. Vessel chartering, container slot allocation, and cold-chain distribution from XRT's three operational hubs.",
        items: [
            {
                product: "Aframax Tanker Charter",
                grade: "80–120k DWT / Clean/Dirty",
                origin: "Houston / Rotterdam",
                incoterms: "Voyage Charter",
                minVolume: "80,000 DWT",
                benchmark: "Worldscale WS",
                premium: "WS 92–110",
                inspection: "P&I Club"
            },
            {
                product: "Panamax Bulk Carrier",
                grade: "65–80k DWT / Gearless",
                origin: "Singapore / Rotterdam",
                incoterms: "Time Charter / VC",
                minVolume: "60,000 MT",
                benchmark: "Baltic Panamax BPI",
                premium: "$12,500–16,000/day",
                inspection: "Class NK / DNV"
            },
            {
                product: "ISO Tank Container",
                grade: "24,000L / Food Grade",
                origin: "Global (Multimodal)",
                incoterms: "FCA / DAP",
                minVolume: "20 Units",
                benchmark: "Spot Freight Rate",
                premium: "Negotiated",
                inspection: "Flexi-Tank Surveyor"
            },
            {
                product: "Cold-Chain Reefer",
                grade: "-18°C to +12°C / ATP Cert",
                origin: "Houston / Singapore",
                incoterms: "DAP / DDP",
                minVolume: "2 FCL",
                benchmark: "Baltic Reefer Index",
                premium: "+$400/unit",
                inspection: "Temperature Logger"
            }
        ]
    },
    {
        pillar: "PROTEINS & MEAT",
        code: "PRT",
        color: "gold",
        summary: "USDA-certified beef procurement for international import and export markets. Kosher and Halal certifications available with full chain-of-custody documentation. Volumes managed under GAFTA and FOSFA-equivalent protocols.",
        items: [
            {
                product: "Beef USDA — Kosher",
                grade: "Choice / Prime",
                origin: "USA (Midwest)",
                incoterms: "FOB / CFR / CIF",
                minVolume: "10,000 KG",
                benchmark: "USDA Wholesale Reports",
                premium: "Negotiated",
                inspection: "USDA FSIS"
            },
            {
                product: "Beef USDA — Halal",
                grade: "Choice / Select",
                origin: "USA (Midwest / South)",
                incoterms: "FOB / CFR / CIF",
                minVolume: "10,000 KG",
                benchmark: "USDA Wholesale Reports",
                premium: "Negotiated",
                inspection: "USDA / IFANCA"
            }
        ]
    }
];
const timeline = [
    {
        year: "2018",
        event: "Founded",
        detail: "XRT Group incorporated in Houston, TX. Initial focus: crude oil and refined product procurement for Latin American downstream clients."
    },
    {
        year: "2019",
        event: "Rotterdam Hub Opened",
        detail: "European operations center established in Rotterdam, providing direct access to ARA barge market and North Sea crude streams."
    },
    {
        year: "2020",
        event: "FATF Compliance Framework",
        detail: "Full AML/KYC compliance infrastructure deployed. Onboarded first Tier-1 banking counterparties under ISDA master agreements."
    },
    {
        year: "2021",
        event: "Agricultural Desk Launch",
        detail: "Expanded into grain and oilseed procurement. GAFTA membership secured. USDA AMS certified agent status acquired."
    },
    {
        year: "2022",
        event: "Singapore Hub Operational",
        detail: "Asia-Pacific operations center activated in Singapore Free Trade Zone. Palm oil and vegetable oil trading desk launched."
    },
    {
        year: "2023",
        event: "ISO 9001:2015 Certified",
        detail: "Quality management system certified across all three operational hubs. SGS, Bureau Veritas, and Intertek integration finalized."
    },
    {
        year: "2024",
        event: "Structured Finance Desk",
        detail: "Pre-export financing and LC structuring capabilities added. $2.8B in sourcing value managed in trailing twelve months."
    },
    {
        year: "2025",
        event: "Platform Expansion",
        detail: "Proprietary Automated Routing Protocol (ARP) and Risk Mitigation Matrix (RMM) deployed. 643 verified suppliers in registry."
    }
];
const hubs = [
    {
        city: "HOUSTON",
        country: "USA",
        code: "HOU",
        coordinates: "29.7604° N, 95.3698° W",
        timezone: "UTC-6 (CST)",
        focus: [
            "Energy Commodities",
            "Structured Trade Finance",
            "Americas Origination"
        ],
        address: "1400 Smith Street, Houston, TX 77002",
        phone: "+1 713 400 0200"
    },
    {
        city: "ROTTERDAM",
        country: "NETHERLANDS",
        code: "RTM",
        coordinates: "51.9244° N, 4.4777° E",
        timezone: "UTC+1 (CET)",
        focus: [
            "ARA Barge Market",
            "European Distribution",
            "Customs & AEO"
        ],
        address: "Weena 505, 3013 AL Rotterdam",
        phone: "+31 10 800 4400"
    },
    {
        city: "SINGAPORE",
        country: "SINGAPORE",
        code: "SGP",
        coordinates: "1.3521° N, 103.8198° E",
        timezone: "UTC+8 (SST)",
        focus: [
            "Palm Oil & Vegetable Oils",
            "APAC Logistics Hub",
            "Bunker Fuel"
        ],
        address: "1 Raffles Quay, #40-01, Singapore 048583",
        phone: "+65 6800 4400"
    }
];
const compliance = [
    {
        code: "AML/KYC",
        body: "FATF / FinCEN",
        status: "ACTIVE",
        detail: "Enhanced Due Diligence on all counterparties. SAR filing capability."
    },
    {
        code: "OFAC Screening",
        body: "US Treasury",
        status: "ACTIVE",
        detail: "Real-time SDN list screening on all transactions and entities."
    },
    {
        code: "EU 5AMLD",
        body: "European Banking Authority",
        status: "ACTIVE",
        detail: "Full compliance with EU Anti-Money Laundering Directives."
    },
    {
        code: "C-TPAT",
        body: "US CBP",
        status: "CERTIFIED",
        detail: "Customs-Trade Partnership Against Terrorism. Tier 2 member."
    },
    {
        code: "AEO",
        body: "Dutch Customs (BVLNI)",
        status: "CERTIFIED",
        detail: "Authorised Economic Operator for Rotterdam gateway."
    },
    {
        code: "ISO 9001:2015",
        body: "SGS / Certification Body",
        status: "CERTIFIED",
        detail: "Quality management system across all three hubs."
    },
    {
        code: "GAFTA Member",
        body: "Grain & Feed Trade Assoc.",
        status: "ACTIVE",
        detail: "Standard contract terms for grain and oilseed trade."
    },
    {
        code: "FOSFA Member",
        body: "Federation of Oils & Fats",
        status: "ACTIVE",
        detail: "Arbitration and standard terms for oils and fats trade."
    }
];
const blogPosts = [
    {
        slug: "brent-wti-differential-q2-2025",
        date: "2025-05-14",
        category: "MARKET INTELLIGENCE",
        title: "Q2 2025 Crude Differentials: Brent/WTI Spread Compression and Implications for Atlantic Basin Arbitrage",
        summary: "The Brent/WTI spread narrowed to a 14-month low of $3.65/BBL in early May, driven by increased US crude export volumes and a drawdown in Cushing inventories. We analyze the structural factors and procurement implications for refiners operating on both sides of the Atlantic.",
        readTime: "8 MIN READ",
        author: "XRT Energy Desk"
    },
    {
        slug: "usda-soybean-compliance-2025",
        date: "2025-05-07",
        category: "COMPLIANCE BRIEF",
        title: "USDA Grade #1 Soybean Export Compliance: A Technical Overview of Moisture, Foreign Material, and Split Standards",
        summary: "An in-depth review of USDA Federal Grain Inspection Service (FGIS) grading parameters for export soybeans, including updated moisture tolerance guidelines effective January 2025 and their impact on load-port sampling protocols.",
        readTime: "11 MIN READ",
        author: "XRT Agricultural Desk"
    },
    {
        slug: "aml-cross-border-commodity-finance",
        date: "2025-04-22",
        category: "REGULATORY",
        title: "AML Compliance in Cross-Border Commodity Finance: How FATF Guidance is Reshaping Counterparty Due Diligence",
        summary: "The FATF's updated guidance on trade-based money laundering (TBML) has materially increased the due-diligence burden on commodity trading firms. We break down the practical impact on LC structuring, vessel vetting, and beneficial ownership documentation.",
        readTime: "14 MIN READ",
        author: "XRT Compliance"
    },
    {
        slug: "rotterdam-hub-arabian-crude",
        date: "2025-04-10",
        category: "LOGISTICS",
        title: "ARA Barge Network Capacity Update: Impact of Increased Arabian Crude Imports on Rotterdam Refinery Run Rates",
        summary: "Following the OPEC+ voluntary cut adjustments, we track the downstream impact on ARA barge scheduling, refinery margins, and ultra-low sulfur diesel availability across the Northern European distribution network.",
        readTime: "9 MIN READ",
        author: "XRT Logistics Desk"
    },
    {
        slug: "palm-oil-rspo-supply-chain",
        date: "2025-03-28",
        category: "SUPPLY CHAIN",
        title: "RSPO Mass Balance Certification and the Practical Logistics of Sustainable Palm Oil Procurement at Scale",
        summary: "As EU deforestation regulation (EUDR) comes into force, we outline the documentation chain, satellite monitoring requirements, and operational adjustments required for palm oil procurement chains supplying European food manufacturers.",
        readTime: "12 MIN READ",
        author: "XRT Agricultural Desk"
    },
    {
        slug: "singapore-bunker-market-2025",
        date: "2025-03-15",
        category: "MARKET INTELLIGENCE",
        title: "Singapore Bunker Market 2025: VLSFO/HSFO Spread Dynamics and the Accelerating Demand for Bio-Blended Marine Fuel",
        summary: "Port of Singapore monthly bunker sales reached a 36-month high in Q1 2025. We analyze the VLSFO/HSFO differential, IMO 2050 trajectory, and the growing premium for B24 bio-bunker blends among European shipping lines.",
        readTime: "10 MIN READ",
        author: "XRT Energy Desk"
    }
];
}),
"[project]/src/components/blog/SubscribeForm.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/blog/SubscribeForm.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/blog/SubscribeForm.tsx <module evaluation>", "default");
}),
"[project]/src/components/blog/SubscribeForm.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/blog/SubscribeForm.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/blog/SubscribeForm.tsx", "default");
}),
"[project]/src/components/blog/SubscribeForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$SubscribeForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/blog/SubscribeForm.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$SubscribeForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/blog/SubscribeForm.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$SubscribeForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(marketing)/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$SubscribeForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/SubscribeForm.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Intelligence Hub",
    description: "XRT Group market intelligence: commodity price analysis, regulatory briefs, and supply chain dispatches from our Houston, Rotterdam, and Singapore desks."
};
const categories = [
    "ALL",
    "MARKET INTELLIGENCE",
    "COMPLIANCE BRIEF",
    "REGULATORY",
    "LOGISTICS",
    "SUPPLY CHAIN"
];
function BlogPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-xrt-black text-white border-b border-xrt-steel/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "label-caps text-xrt-crimson mb-4",
                                        children: "INTELLIGENCE HUB — MARKET DISPATCH BOARD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[clamp(2.5rem,6vw,6rem)] text-white mb-6",
                                        children: [
                                            "Market Intelligence",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 23,
                                                columnNumber: 36
                                            }, this),
                                            "& Regulatory Briefs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed",
                                        style: {
                                            fontFamily: "var(--font-archivo)"
                                        },
                                        children: "Technical analysis, regulatory updates, and supply chain intelligence from XRT's commodity desks in Houston, Rotterdam, and Singapore. Published by our trading and compliance teams."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        {
                                            label: "Active Desks",
                                            value: "4"
                                        },
                                        {
                                            label: "Markets Covered",
                                            value: "Energy / Agro / Oils / Logistics"
                                        },
                                        {
                                            label: "Publication Frequency",
                                            value: "Weekly"
                                        }
                                    ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-xrt-steel/20 pb-4 last:border-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "label-caps text-xrt-steel/40 mb-0.5",
                                                    children: m.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-white text-sm sm:text-base",
                                                    style: {
                                                        fontFamily: "var(--font-archivo)"
                                                    },
                                                    children: m.value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, m.label, true, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 36,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-xrt-off-white border-b border-xrt-steel sticky top-[4rem] z-40 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0 border-x border-xrt-steel min-w-max",
                            children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `label-caps px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 ${i < categories.length - 1 ? "border-r border-xrt-steel" : ""} ${cat === "ALL" ? "bg-xrt-black text-white" : "text-xrt-muted hover:text-xrt-black hover:bg-xrt-surface transition-colors"}`,
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-xrt-off-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-xrt-steel bg-xrt-white mb-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden sm:flex sm:col-span-1 bg-xrt-crimson items-center justify-center py-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-black",
                                            style: {
                                                fontFamily: "var(--font-barlow)",
                                                fontSize: "10px",
                                                letterSpacing: "4px",
                                                writingMode: "vertical-rl",
                                                textTransform: "uppercase",
                                                transform: "rotate(180deg)"
                                            },
                                            children: "FEATURED DISPATCH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:hidden bg-xrt-crimson px-4 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "label-caps text-white",
                                            children: "FEATURED DISPATCH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:col-span-11 p-6 sm:p-10 sm:border-l border-xrt-steel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-caps text-xrt-crimson",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap items-center gap-3 sm:gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "label-caps text-xrt-steel/50",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].author
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "label-caps text-xrt-steel/50",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].date
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "label-caps bg-xrt-black text-white px-3 py-1",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].readTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-4xl text-xrt-black mb-4 leading-tight",
                                                style: {
                                                    fontFamily: "var(--font-barlow)",
                                                    fontWeight: 900
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base text-xrt-muted leading-relaxed mb-6 max-w-3xl",
                                                style: {
                                                    fontFamily: "var(--font-archivo)"
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/blog/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"][0].slug}`,
                                                className: "label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-block",
                                                children: "Read Full Report →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-xrt-steel border-t-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogPosts"].slice(1).map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: [
                                            "block p-6 sm:p-8 bg-xrt-white hover:bg-xrt-surface transition-colors",
                                            // Mobile (1-col): bottom border on all but last
                                            i < 4 ? "border-b border-xrt-steel" : "",
                                            // MD (2-col): bottom on first 4, right on col 0
                                            i < 2 ? "md:border-b" : "md:border-b-0",
                                            i % 2 === 0 ? "md:border-r" : "",
                                            // LG (3-col): bottom on first 3, right on cols 0–1
                                            i < 3 ? "lg:border-b" : "lg:border-b-0",
                                            i % 3 < 2 ? "lg:border-r" : "lg:border-r-0"
                                        ].filter(Boolean).join(" "),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-caps text-xrt-crimson",
                                                        children: post.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-caps text-xrt-steel/50",
                                                        children: post.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg sm:text-xl text-xrt-black mb-3 leading-snug",
                                                style: {
                                                    fontFamily: "var(--font-barlow)",
                                                    fontWeight: 900
                                                },
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-xrt-muted leading-relaxed mb-5 line-clamp-3",
                                                style: {
                                                    fontFamily: "var(--font-archivo)"
                                                },
                                                children: post.summary
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pt-4 border-t border-xrt-steel",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-caps text-xrt-steel/60",
                                                        children: post.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-caps text-xrt-black",
                                                        children: post.readTime
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, post.slug, true, {
                                        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-xrt-black text-white border-t border-xrt-steel/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label-caps text-xrt-steel/40 mb-2",
                            children: "CONTRIBUTING DESKS"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl text-white mb-8 sm:mb-10",
                            children: "Editorial Teams"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-xrt-steel/20",
                            children: [
                                {
                                    name: "ENERGY DESK",
                                    hub: "HOU / RTM",
                                    topics: [
                                        "Crude Differentials",
                                        "Refined Products",
                                        "Natural Gas"
                                    ],
                                    posts: 24
                                },
                                {
                                    name: "AGRICULTURAL DESK",
                                    hub: "HOU / SGP",
                                    topics: [
                                        "USDA Grade Reports",
                                        "Crop Season Analysis",
                                        "Export Flows"
                                    ],
                                    posts: 18
                                },
                                {
                                    name: "OILS DESK",
                                    hub: "SGP / RTM",
                                    topics: [
                                        "Palm Oil Markets",
                                        "RSPO Compliance",
                                        "Vegetable Oil Spreads"
                                    ],
                                    posts: 14
                                },
                                {
                                    name: "COMPLIANCE",
                                    hub: "ALL HUBS",
                                    topics: [
                                        "AML/FATF Updates",
                                        "Sanctions Monitor",
                                        "Trade Regulation"
                                    ],
                                    posts: 11
                                }
                            ].map((desk, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: [
                                        "p-6 sm:p-8",
                                        // Mobile (1-col): bottom on all but last
                                        i < 3 ? "border-b border-xrt-steel/20" : "",
                                        // SM (2-col): bottom on first 2, right on col 0
                                        i < 2 ? "sm:border-b" : "sm:border-b-0",
                                        i % 2 === 0 ? "sm:border-r border-xrt-steel/20" : "",
                                        // LG (4-col): no bottom, right on first 3
                                        "lg:border-b-0",
                                        i < 3 ? "lg:border-r border-xrt-steel/20" : "lg:border-r-0"
                                    ].filter(Boolean).join(" "),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "label-caps text-xrt-crimson mb-1",
                                            children: desk.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "label-caps text-xrt-steel/40 mb-6",
                                            children: desk.hub
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 mb-6",
                                            children: desk.topics.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-1 bg-xrt-steel/30 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-xrt-steel/60",
                                                            style: {
                                                                fontFamily: "var(--font-archivo)"
                                                            },
                                                            children: t
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, t, true, {
                                                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-xrt-steel/20 pt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "label-caps text-xrt-steel/30",
                                                children: [
                                                    desk.posts,
                                                    " REPORTS PUBLISHED"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, desk.name, true, {
                                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$SubscribeForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(marketing)/blog/page.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(marketing)/blog/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(marketing)/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(marketing)/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0au.9d-._.js.map