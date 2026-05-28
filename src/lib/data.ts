export const tickerItems = [
  { symbol: "WTI CRUDE", price: "82.47", change: "+0.84", pct: "+1.03%", unit: "USD/BBL", positive: true },
  { symbol: "BRENT CRUDE", price: "86.12", change: "+0.91", pct: "+1.07%", unit: "USD/BBL", positive: true },
  { symbol: "NATURAL GAS", price: "2.381", change: "-0.043", pct: "-1.77%", unit: "USD/MMBTU", positive: false },
  { symbol: "WHEAT", price: "541.25", change: "+3.75", pct: "+0.70%", unit: "USD/MT", positive: true },
  { symbol: "CORN", price: "442.00", change: "-2.25", pct: "-0.51%", unit: "USD/MT", positive: false },
  { symbol: "SOYBEANS", price: "1,148.50", change: "+6.75", pct: "+0.59%", unit: "USD/MT", positive: true },
  { symbol: "PALM OIL", price: "3,924.00", change: "-18.00", pct: "-0.46%", unit: "MYR/MT", positive: false },
  { symbol: "UREA", price: "298.00", change: "+4.50", pct: "+1.53%", unit: "USD/MT", positive: true },
  { symbol: "SOYBEAN OIL", price: "46.82", change: "+0.34", pct: "+0.73%", unit: "USD/CWT", positive: true },
  { symbol: "SUGAR #11", price: "18.43", change: "-0.12", pct: "-0.65%", unit: "USD/LB", positive: false },
  { symbol: "COTTON", price: "83.21", change: "+0.47", pct: "+0.57%", unit: "USD/LB", positive: true },
  { symbol: "CANOLA", price: "612.40", change: "+5.20", pct: "+0.86%", unit: "CAD/MT", positive: true },
];

export const homeStats = [
  { value: "42+", label: "Countries of Operation" },
  { value: "18M MT", label: "Annual Volume Managed" },
  { value: "99.4%", label: "On-Time Delivery Rate" },
  { value: "$2.8B", label: "Sourcing Value (TTM)" },
];

export const homeCommoditySnapshot = [
  {
    category: "ENERGY",
    items: [
      { name: "WTI Crude Oil", grade: "40° API / 0.24% S", price: "$82.47", unit: "/BBL", change: "+1.03%" },
      { name: "Brent Crude", grade: "38.3° API / 0.37% S", price: "$86.12", unit: "/BBL", change: "+1.07%" },
      { name: "ULSD", grade: "10 ppm Sulfur Max", price: "$2.984", unit: "/GAL", change: "-0.22%" },
      { name: "Jet Fuel A-1", grade: "ASTM D1655", price: "$2.791", unit: "/GAL", change: "+0.41%" },
    ],
  },
  {
    category: "GRAINS & AGRO",
    items: [
      { name: "SRW Wheat", grade: "USDA #2 / 60 lbs/bu", price: "$541.25", unit: "/MT", change: "+0.70%" },
      { name: "Yellow Corn #2", grade: "14% Moisture Max", price: "$442.00", unit: "/MT", change: "-0.51%" },
      { name: "Soybeans #1", grade: "13% Moisture / 1% FM", price: "$1,148.50", unit: "/MT", change: "+0.59%" },
      { name: "Barley (Malting)", grade: "2-Row / 13.5% Protein", price: "$312.00", unit: "/MT", change: "+1.21%" },
    ],
  },
  {
    category: "OILS & FATS",
    items: [
      { name: "Crude Palm Oil", grade: "FFA 5% Max", price: "MYR 3,924", unit: "/MT", change: "-0.46%" },
      { name: "Soybean Oil (RBD)", grade: "IV 130-140 / FFA 0.1%", price: "$46.82", unit: "/CWT", change: "+0.73%" },
      { name: "Canola Oil", grade: "Erucic Acid <2%", price: "CAD 612.40", unit: "/MT", change: "+0.86%" },
      { name: "Sunflower Oil", grade: "High Oleic / Linoleic", price: "$938.00", unit: "/MT", change: "+0.14%" },
    ],
  },
];

export const services = [
  {
    id: "S-001",
    name: "Automated Routing Protocol",
    code: "ARP",
    description:
      "Multi-modal freight optimization engine that dynamically selects carrier combinations across maritime, rail, and road networks based on cost, velocity, and carbon intensity metrics.",
    metrics: [
      { key: "Route Optimization Cycles", value: "14,000+ / day" },
      { key: "Carrier Network Nodes", value: "1,840 global" },
      { key: "Avg. Cost Reduction vs. Spot", value: "12–18%" },
      { key: "CO₂ Intensity Scoring", value: "Active" },
    ],
    status: "OPERATIONAL",
    protocols: ["SOLAS", "MARPOL", "IMDG"],
  },
  {
    id: "S-002",
    name: "Risk Mitigation Matrix",
    code: "RMM",
    description:
      "Proprietary geopolitical exposure indexing, supplier creditworthiness scoring, and currency hedge matrices updated every 4 hours against IMF and BIS benchmark data.",
    metrics: [
      { key: "Counterparty Risk Models", value: "287 active" },
      { key: "Currency Pairs Monitored", value: "48" },
      { key: "Geopolitical Risk Index", value: "Real-time" },
      { key: "Credit Score Refresh Rate", value: "4-hour cycle" },
    ],
    status: "OPERATIONAL",
    protocols: ["ISDA", "EMIR", "Dodd-Frank"],
  },
  {
    id: "S-003",
    name: "Customs Clearance Pipeline",
    code: "CCP",
    description:
      "Pre-clearance document processing with AI-assisted HS code classification and multi-jurisdiction compliance mapping across 42 trade corridors.",
    metrics: [
      { key: "Avg. Clearance Time", value: "4.2 hours" },
      { key: "HS Code Classification Accuracy", value: "99.1%" },
      { key: "Trade Corridors Covered", value: "42" },
      { key: "Document Types Processed", value: "38" },
    ],
    status: "OPERATIONAL",
    protocols: ["WCO", "AEO", "C-TPAT"],
  },
  {
    id: "S-004",
    name: "Commodity Sourcing Engine",
    code: "CSE",
    description:
      "Direct-origin procurement network bypassing traditional broker chains. Real-time bid aggregation from 600+ pre-vetted primary producers and refiners across 6 continents.",
    metrics: [
      { key: "Active Supplier Registry", value: "643 entities" },
      { key: "Bid Aggregation Speed", value: "<90 seconds" },
      { key: "Pre-Vetted Origins", value: "6 continents" },
      { key: "KYC/AML Clearance Rate", value: "100% required" },
    ],
    status: "OPERATIONAL",
    protocols: ["FATF", "OFAC", "EU 5AMLD"],
  },
  {
    id: "S-005",
    name: "Structured Trade Finance",
    code: "STF",
    description:
      "Pre-export financing, standby LCs, and performance bonds structured against physical commodity collateral. Coordination with Tier-1 trade finance banks in Houston, Rotterdam, and Singapore.",
    metrics: [
      { key: "Max Facility Size", value: "$500M per tranche" },
      { key: "LC Issuance Speed", value: "48–72 hours" },
      { key: "Banking Partners", value: "14 Tier-1 institutions" },
      { key: "Collateral Accepted", value: "Physical + warehouse receipts" },
    ],
    status: "SELECTIVE",
    protocols: ["UCP 600", "ISP98", "Incoterms 2020"],
  },
  {
    id: "S-006",
    name: "Quality Assurance & Inspection",
    code: "QAI",
    description:
      "Third-party inspection coordination with SGS, Bureau Veritas, and Intertek. Covers pre-shipment inspection, load port sampling, and destination verification against contracted specs.",
    metrics: [
      { key: "Inspection Agencies Integrated", value: "SGS / BV / ITS" },
      { key: "Avg. Report Turnaround", value: "24 hours" },
      { key: "Spec Compliance Rate", value: "99.7%" },
      { key: "Dispute Resolution Speed", value: "<72 hours" },
    ],
    status: "OPERATIONAL",
    protocols: ["ISO 9001", "ASTM", "USDA AMS"],
  },
];

export const products = [
  {
    pillar: "ENERGY COMMODITIES",
    code: "ENE",
    color: "crimson" as const,
    summary:
      "Crude oil, refined petroleum products, and natural gas sourced directly from producing regions. Grades negotiated against Platts and Argus benchmarks.",
    items: [
      {
        product: "WTI Crude Oil",
        grade: "40° API / 0.24% Sulfur",
        origin: "Midland Basin / Permian",
        incoterms: "FOB / CIF",
        minVolume: "100,000 BBL",
        benchmark: "NYMEX WTI",
        premium: "+$0.85",
        inspection: "SGS / BV",
      },
      {
        product: "Brent Crude",
        grade: "38.3° API / 0.37% Sulfur",
        origin: "North Sea / West Africa",
        incoterms: "CIF / CFR",
        minVolume: "100,000 BBL",
        benchmark: "ICE Brent",
        premium: "+$1.20",
        inspection: "Bureau Veritas",
      },
      {
        product: "ULSD",
        grade: "10 ppm Sulfur (EN 590)",
        origin: "ARA Region / USGC",
        incoterms: "FOB / DAP",
        minVolume: "3,000 MT",
        benchmark: "Platts ULSD",
        premium: "+$0.02/GAL",
        inspection: "Intertek",
      },
      {
        product: "Jet Fuel A-1",
        grade: "ASTM D1655 / DEF STAN 91-091",
        origin: "Singapore / Rotterdam",
        incoterms: "CIF",
        minVolume: "5,000 MT",
        benchmark: "Platts Jet/Kero",
        premium: "+$1.50/MT",
        inspection: "SGS",
      },
      {
        product: "Fuel Oil 380 CST",
        grade: "3.5% Sulfur Max / ISO 8217",
        origin: "Houston / Fujairah",
        incoterms: "FCA / FOB",
        minVolume: "5,000 MT",
        benchmark: "Platts HSFO",
        premium: "-$2.00/MT",
        inspection: "Bureau Veritas",
      },
    ],
  },
  {
    pillar: "GRAINS & AGRICULTURAL",
    code: "AGR",
    color: "gold" as const,
    summary:
      "USDA-certified grain procurement across North American, South American, and Black Sea origins. Managed under GAFTA and FOSFA terms with full phytosanitary compliance.",
    items: [
      {
        product: "SRW Wheat",
        grade: "USDA #2 / 60 lbs/bu TW",
        origin: "USGLF / PNW",
        incoterms: "FOB / CIF",
        minVolume: "25,000 MT",
        benchmark: "CBOT Wheat",
        premium: "+$5.00/MT",
        inspection: "USDA FGIS",
      },
      {
        product: "Yellow Corn #2",
        grade: "14% Moisture / 15% BCFM",
        origin: "Gulf USGLF / Santos",
        incoterms: "CFR / CIF",
        minVolume: "25,000 MT",
        benchmark: "CBOT Corn",
        premium: "+$3.50/MT",
        inspection: "SGS",
      },
      {
        product: "Soybeans #1",
        grade: "13% Moisture / 1% FM",
        origin: "USGLF / Paranaguá",
        incoterms: "CFR",
        minVolume: "30,000 MT",
        benchmark: "CBOT Soybeans",
        premium: "+$7.00/MT",
        inspection: "Intertek",
      },
      {
        product: "Malting Barley",
        grade: "2-Row / 13.5% Protein Max",
        origin: "Saskatchewan / Australia",
        incoterms: "CIF",
        minVolume: "10,000 MT",
        benchmark: "ICE Canola proxy",
        premium: "Negotiated",
        inspection: "Bureau Veritas",
      },
    ],
  },
  {
    pillar: "EDIBLE & INDUSTRIAL OILS",
    code: "OIL",
    color: "steel" as const,
    summary:
      "Bulk vegetable and industrial oils sourced under FOSFA and PORAM standards. Full chain-of-custody documentation including RSPO certification where applicable.",
    items: [
      {
        product: "Crude Palm Oil (CPO)",
        grade: "FFA 5% Max / M&I 0.5%",
        origin: "Malaysia / Indonesia",
        incoterms: "CIF / CFR",
        minVolume: "2,000 MT",
        benchmark: "BMD FCPO",
        premium: "+MYR 40/MT",
        inspection: "MPOB",
      },
      {
        product: "RBD Palm Olein",
        grade: "CP45 / FFA 0.1%",
        origin: "Malaysia / Belawan",
        incoterms: "CIF",
        minVolume: "2,000 MT",
        benchmark: "Platts Palm Olein",
        premium: "+$15/MT",
        inspection: "SGS",
      },
      {
        product: "Soybean Oil (Degummed)",
        grade: "IV 130-140 / FFA 1% Max",
        origin: "Santos / Buenos Aires",
        incoterms: "FOB / CFR",
        minVolume: "2,000 MT",
        benchmark: "CBOT BO",
        premium: "+$8/MT",
        inspection: "Intertek",
      },
      {
        product: "High-Oleic Sunflower Oil",
        grade: "Oleic 82%+ / Linoleic 10%",
        origin: "Ukraine / Black Sea",
        incoterms: "FOB / CFR",
        minVolume: "1,000 MT",
        benchmark: "Platts SFO",
        premium: "+$20/MT",
        inspection: "Bureau Veritas",
      },
    ],
  },
  {
    pillar: "LOGISTICS INFRASTRUCTURE",
    code: "LOG",
    color: "black" as const,
    summary:
      "End-to-end freight management across maritime, rail, and road networks. Vessel chartering, container slot allocation, and cold-chain distribution from XRT's three operational hubs.",
    items: [
      {
        product: "Aframax Tanker Charter",
        grade: "80–120k DWT / Clean/Dirty",
        origin: "Houston / Rotterdam",
        incoterms: "Voyage Charter",
        minVolume: "80,000 DWT",
        benchmark: "Worldscale WS",
        premium: "WS 92–110",
        inspection: "P&I Club",
      },
      {
        product: "Panamax Bulk Carrier",
        grade: "65–80k DWT / Gearless",
        origin: "Singapore / Rotterdam",
        incoterms: "Time Charter / VC",
        minVolume: "60,000 MT",
        benchmark: "Baltic Panamax BPI",
        premium: "$12,500–16,000/day",
        inspection: "Class NK / DNV",
      },
      {
        product: "ISO Tank Container",
        grade: "24,000L / Food Grade",
        origin: "Global (Multimodal)",
        incoterms: "FCA / DAP",
        minVolume: "20 Units",
        benchmark: "Spot Freight Rate",
        premium: "Negotiated",
        inspection: "Flexi-Tank Surveyor",
      },
      {
        product: "Cold-Chain Reefer",
        grade: "-18°C to +12°C / ATP Cert",
        origin: "Houston / Singapore",
        incoterms: "DAP / DDP",
        minVolume: "2 FCL",
        benchmark: "Baltic Reefer Index",
        premium: "+$400/unit",
        inspection: "Temperature Logger",
      },
    ],
  },
];

export const timeline = [
  { year: "2018", event: "Founded", detail: "XRT Group incorporated in Houston, TX. Initial focus: crude oil and refined product procurement for Latin American downstream clients." },
  { year: "2019", event: "Rotterdam Hub Opened", detail: "European operations center established in Rotterdam, providing direct access to ARA barge market and North Sea crude streams." },
  { year: "2020", event: "FATF Compliance Framework", detail: "Full AML/KYC compliance infrastructure deployed. Onboarded first Tier-1 banking counterparties under ISDA master agreements." },
  { year: "2021", event: "Agricultural Desk Launch", detail: "Expanded into grain and oilseed procurement. GAFTA membership secured. USDA AMS certified agent status acquired." },
  { year: "2022", event: "Singapore Hub Operational", detail: "Asia-Pacific operations center activated in Singapore Free Trade Zone. Palm oil and vegetable oil trading desk launched." },
  { year: "2023", event: "ISO 9001:2015 Certified", detail: "Quality management system certified across all three operational hubs. SGS, Bureau Veritas, and Intertek integration finalized." },
  { year: "2024", event: "Structured Finance Desk", detail: "Pre-export financing and LC structuring capabilities added. $2.8B in sourcing value managed in trailing twelve months." },
  { year: "2025", event: "Platform Expansion", detail: "Proprietary Automated Routing Protocol (ARP) and Risk Mitigation Matrix (RMM) deployed. 643 verified suppliers in registry." },
];

export const hubs = [
  {
    city: "HOUSTON",
    country: "USA",
    code: "HOU",
    coordinates: "29.7604° N, 95.3698° W",
    timezone: "UTC-6 (CST)",
    focus: ["Energy Commodities", "Structured Trade Finance", "Americas Origination"],
    address: "1400 Smith Street, Houston, TX 77002",
    phone: "+1 713 400 0200",
  },
  {
    city: "ROTTERDAM",
    country: "NETHERLANDS",
    code: "RTM",
    coordinates: "51.9244° N, 4.4777° E",
    timezone: "UTC+1 (CET)",
    focus: ["ARA Barge Market", "European Distribution", "Customs & AEO"],
    address: "Weena 505, 3013 AL Rotterdam",
    phone: "+31 10 800 4400",
  },
  {
    city: "SINGAPORE",
    country: "SINGAPORE",
    code: "SGP",
    coordinates: "1.3521° N, 103.8198° E",
    timezone: "UTC+8 (SST)",
    focus: ["Palm Oil & Vegetable Oils", "APAC Logistics Hub", "Bunker Fuel"],
    address: "1 Raffles Quay, #40-01, Singapore 048583",
    phone: "+65 6800 4400",
  },
];

export const compliance = [
  { code: "AML/KYC", body: "FATF / FinCEN", status: "ACTIVE", detail: "Enhanced Due Diligence on all counterparties. SAR filing capability." },
  { code: "OFAC Screening", body: "US Treasury", status: "ACTIVE", detail: "Real-time SDN list screening on all transactions and entities." },
  { code: "EU 5AMLD", body: "European Banking Authority", status: "ACTIVE", detail: "Full compliance with EU Anti-Money Laundering Directives." },
  { code: "C-TPAT", body: "US CBP", status: "CERTIFIED", detail: "Customs-Trade Partnership Against Terrorism. Tier 2 member." },
  { code: "AEO", body: "Dutch Customs (BVLNI)", status: "CERTIFIED", detail: "Authorised Economic Operator for Rotterdam gateway." },
  { code: "ISO 9001:2015", body: "SGS / Certification Body", status: "CERTIFIED", detail: "Quality management system across all three hubs." },
  { code: "GAFTA Member", body: "Grain & Feed Trade Assoc.", status: "ACTIVE", detail: "Standard contract terms for grain and oilseed trade." },
  { code: "FOSFA Member", body: "Federation of Oils & Fats", status: "ACTIVE", detail: "Arbitration and standard terms for oils and fats trade." },
];

export const blogPosts = [
  {
    slug: "brent-wti-differential-q2-2025",
    date: "2025-05-14",
    category: "MARKET INTELLIGENCE",
    title: "Q2 2025 Crude Differentials: Brent/WTI Spread Compression and Implications for Atlantic Basin Arbitrage",
    summary:
      "The Brent/WTI spread narrowed to a 14-month low of $3.65/BBL in early May, driven by increased US crude export volumes and a drawdown in Cushing inventories. We analyze the structural factors and procurement implications for refiners operating on both sides of the Atlantic.",
    readTime: "8 MIN READ",
    author: "XRT Energy Desk",
  },
  {
    slug: "usda-soybean-compliance-2025",
    date: "2025-05-07",
    category: "COMPLIANCE BRIEF",
    title: "USDA Grade #1 Soybean Export Compliance: A Technical Overview of Moisture, Foreign Material, and Split Standards",
    summary:
      "An in-depth review of USDA Federal Grain Inspection Service (FGIS) grading parameters for export soybeans, including updated moisture tolerance guidelines effective January 2025 and their impact on load-port sampling protocols.",
    readTime: "11 MIN READ",
    author: "XRT Agricultural Desk",
  },
  {
    slug: "aml-cross-border-commodity-finance",
    date: "2025-04-22",
    category: "REGULATORY",
    title: "AML Compliance in Cross-Border Commodity Finance: How FATF Guidance is Reshaping Counterparty Due Diligence",
    summary:
      "The FATF's updated guidance on trade-based money laundering (TBML) has materially increased the due-diligence burden on commodity trading firms. We break down the practical impact on LC structuring, vessel vetting, and beneficial ownership documentation.",
    readTime: "14 MIN READ",
    author: "XRT Compliance",
  },
  {
    slug: "rotterdam-hub-arabian-crude",
    date: "2025-04-10",
    category: "LOGISTICS",
    title: "ARA Barge Network Capacity Update: Impact of Increased Arabian Crude Imports on Rotterdam Refinery Run Rates",
    summary:
      "Following the OPEC+ voluntary cut adjustments, we track the downstream impact on ARA barge scheduling, refinery margins, and ultra-low sulfur diesel availability across the Northern European distribution network.",
    readTime: "9 MIN READ",
    author: "XRT Logistics Desk",
  },
  {
    slug: "palm-oil-rspo-supply-chain",
    date: "2025-03-28",
    category: "SUPPLY CHAIN",
    title: "RSPO Mass Balance Certification and the Practical Logistics of Sustainable Palm Oil Procurement at Scale",
    summary:
      "As EU deforestation regulation (EUDR) comes into force, we outline the documentation chain, satellite monitoring requirements, and operational adjustments required for palm oil procurement chains supplying European food manufacturers.",
    readTime: "12 MIN READ",
    author: "XRT Agricultural Desk",
  },
  {
    slug: "singapore-bunker-market-2025",
    date: "2025-03-15",
    category: "MARKET INTELLIGENCE",
    title: "Singapore Bunker Market 2025: VLSFO/HSFO Spread Dynamics and the Accelerating Demand for Bio-Blended Marine Fuel",
    summary:
      "Port of Singapore monthly bunker sales reached a 36-month high in Q1 2025. We analyze the VLSFO/HSFO differential, IMO 2050 trajectory, and the growing premium for B24 bio-bunker blends among European shipping lines.",
    readTime: "10 MIN READ",
    author: "XRT Energy Desk",
  },
];
