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
"[project]/src/lib/productsData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * XRT Group — Per-SKU product data source.
 * Single source of truth for individual product pages (/products/[slug])
 * and the catalog index. Drives SEO metadata + JSON-LD structured data.
 *
 * 17 SKUs mirroring the catalog pillars in data.ts:
 *   Energy (5) · Grains (4) · Oils (4) · Logistics (4)
 */ __turbopack_context__.s([
    "CATEGORY_META",
    ()=>CATEGORY_META,
    "PRODUCTS",
    ()=>PRODUCTS,
    "getAllProductSlugs",
    ()=>getAllProductSlugs,
    "getProductBySlug",
    ()=>getProductBySlug,
    "getProductsByCategory",
    ()=>getProductsByCategory
]);
const CATEGORY_META = {
    energy: {
        code: "ENE",
        label: "Energy Commodities",
        color: "#c8111f"
    },
    grains: {
        code: "AGR",
        label: "Grains & Agricultural",
        color: "#c8973a"
    },
    oils: {
        code: "OIL",
        label: "Edible & Industrial Oils",
        color: "#c8973a"
    },
    logistics: {
        code: "LOG",
        label: "Logistics Infrastructure",
        color: "#916f6c"
    },
    proteins: {
        code: "PRT",
        label: "Proteins & Meat",
        color: "#c8973a"
    }
};
const SLA = "<4 business hours";
const PRODUCTS = [
    /* ─── ENERGY ─────────────────────────────────────────────────── */ {
        slug: "wti-crude-oil",
        category: "energy",
        code: "ENE-001",
        name: "WTI Crude Oil",
        grade: "40° API / 0.24% Sulfur",
        origin: "Midland Basin / Permian",
        incoterms: [
            "FOB",
            "CIF"
        ],
        minVolume: "100,000",
        minVolumeUnit: "BBL",
        benchmark: "NYMEX WTI",
        premiumDisc: "+$0.85/BBL",
        inspection: [
            "SGS",
            "Bureau Veritas"
        ],
        deskEmail: "energy@xrtgroup.com",
        hub: [
            "HOU",
            "RTM"
        ],
        description: "WTI Crude Oil sourced directly from Midland Basin and Permian production. 40° API, 0.24% sulfur. NYMEX WTI benchmark at +$0.85/BBL. Minimum 100,000 BBL, FOB or CIF. SGS and Bureau Veritas inspection. <4 hour desk response.",
        longDescription: `West Texas Intermediate (WTI) Crude Oil remains the primary pricing benchmark for North American crude production and a globally referenced marker for light sweet crude grades. XRT Group sources WTI directly from Midland Basin and Permian production regions, bypassing traditional broker intermediaries through our pre-vetted supplier network.

**Grade & Quality**

XRT-sourced WTI typically presents at 39.5–40.5° API gravity with sulfur content below 0.25% — meeting refinery specifications for both FCC and hydrocracking configurations. Each parcel undergoes mandatory SGS or Bureau Veritas inspection at load port, with quantity and quality certificates issued under ASTM D287 and D4052 methodology.

**Pricing & Benchmarks**

Pricing is negotiated against the prevailing NYMEX WTI front-month contract. XRT's current indicative premium is +$0.85/BBL over benchmark, subject to volume, INCOTERMS, and delivery window. Forward price locks are available through our Structured Trade Finance desk under UCP 600 LC structures.

**Logistics & Delivery**

Primary loading terminals: Corpus Christi, Beaumont, Nederland (TX). FOB or CIF delivery available. Transit times: 12–18 days to ARA, 28–35 days to Singapore.

**Compliance**

All cargoes subject to OFAC screening, IMO 2020 sulfur compliance documentation, and FATF AML counterparty due diligence. Vessel vetting per CDI and OCIMF standards.`,
        specs: [
            {
                label: "API Gravity",
                value: "40° API"
            },
            {
                label: "Sulfur Content",
                value: "0.24% max"
            },
            {
                label: "Origin",
                value: "Midland Basin / Permian, USA"
            },
            {
                label: "Benchmark",
                value: "NYMEX WTI"
            },
            {
                label: "Min. Volume",
                value: "100,000 BBL"
            },
            {
                label: "INCOTERMS",
                value: "FOB / CIF"
            },
            {
                label: "Loading Ports",
                value: "Corpus Christi, Beaumont, Nederland TX"
            },
            {
                label: "Inspection",
                value: "SGS / Bureau Veritas (ASTM D287)"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600) / Open Account"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "OFAC Compliant",
            "IMO 2020",
            "CDI Vetted",
            "FATF AML"
        ],
        relatedServices: [
            "cse",
            "stf",
            "arp",
            "rmm"
        ],
        relatedProducts: [
            "brent-crude-oil",
            "ulsd-diesel",
            "fuel-oil-380"
        ],
        seoTitle: "WTI Crude Oil Procurement | Direct Origin Sourcing | XRT Group",
        seoDescription: "Source WTI Crude Oil directly from Midland Basin and Permian producers. 40° API, 0.24% sulfur. Min 100,000 BBL. NYMEX benchmark pricing. FOB/CIF. SGS/BV inspection. Submit RFQ for <4hr desk response.",
        searchKeywords: [
            "WTI crude oil supplier",
            "buy WTI crude oil",
            "Permian crude procurement",
            "light sweet crude FOB",
            "crude oil trading company",
            "NYMEX WTI procurement"
        ]
    },
    {
        slug: "brent-crude-oil",
        category: "energy",
        code: "ENE-002",
        name: "Brent Crude Oil",
        grade: "38.3° API / 0.37% Sulfur",
        origin: "North Sea / West Africa",
        incoterms: [
            "CIF",
            "CFR"
        ],
        minVolume: "100,000",
        minVolumeUnit: "BBL",
        benchmark: "ICE Brent",
        premiumDisc: "+$1.20/BBL",
        inspection: [
            "Bureau Veritas"
        ],
        deskEmail: "energy@xrtgroup.com",
        hub: [
            "RTM",
            "HOU"
        ],
        description: "Brent Crude Oil from North Sea and West African producing regions. 38.3° API, 0.37% sulfur. ICE Brent benchmark at +$1.20/BBL. Minimum 100,000 BBL, CIF/CFR. Bureau Veritas inspection. <4 hour desk response.",
        longDescription: `Brent Crude is the global benchmark for two-thirds of the world's internationally traded crude oil supply. XRT Group accesses Brent-grade cargoes through direct relationships with North Sea operators and West African producing terminals, with primary loading at Sullom Voe (Shetland), Hound Point (Scotland), and Bonny Light Terminal (Nigeria).

**Grade & Quality**

North Sea Brent presents at 38–39° API with 0.35–0.40% sulfur content. West African grades (Bonny Light, Qua Iboe) offer comparable quality at 37–38° API. Bureau Veritas conducts mandatory quality inspection at load port under IP/ASTM protocols.

**Pricing & Settlement**

Priced against ICE Brent Dated with XRT's current indicative differential of +$1.20/BBL. Pricing locked via forward purchase agreement or documentary LC under UCP 600. Our Trade Finance desk coordinates with Tier-1 banks in Rotterdam and Houston.

**Market Access**

XRT's Rotterdam hub provides direct ARA refinery access and barge network integration, enabling efficient secondary distribution across Northern Europe. Singapore desk covers Far East routing.

**Compliance**

EU sanctions screening, FATF AML, OCIMF SIRE vessel vetting, and EU Taxonomy-aligned documentation available on request.`,
        specs: [
            {
                label: "API Gravity",
                value: "38.3° API"
            },
            {
                label: "Sulfur Content",
                value: "0.37% max"
            },
            {
                label: "Origin",
                value: "North Sea / West Africa"
            },
            {
                label: "Benchmark",
                value: "ICE Brent Dated"
            },
            {
                label: "Min. Volume",
                value: "100,000 BBL"
            },
            {
                label: "INCOTERMS",
                value: "CIF / CFR"
            },
            {
                label: "Loading Ports",
                value: "Sullom Voe, Hound Point, Bonny Terminal"
            },
            {
                label: "Inspection",
                value: "Bureau Veritas (IP/ASTM)"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "EU Sanctions Compliant",
            "FATF AML",
            "OCIMF SIRE",
            "OFAC Screened"
        ],
        relatedServices: [
            "cse",
            "stf",
            "arp",
            "rmm"
        ],
        relatedProducts: [
            "wti-crude-oil",
            "fuel-oil-380",
            "ulsd-diesel"
        ],
        seoTitle: "Brent Crude Oil Procurement | North Sea & West Africa | XRT Group",
        seoDescription: "Source Brent Crude Oil from North Sea and West African origins. 38.3° API. ICE Brent benchmark pricing, +$1.20/BBL. Min 100,000 BBL CIF/CFR. Bureau Veritas inspection. <4hr RFQ response.",
        searchKeywords: [
            "Brent crude oil supplier",
            "buy Brent crude",
            "North Sea crude procurement",
            "crude oil CIF ARA",
            "Brent crude trading company",
            "West Africa crude oil"
        ]
    },
    {
        slug: "ulsd-diesel",
        category: "energy",
        code: "ENE-003",
        name: "Ultra-Low Sulfur Diesel (ULSD)",
        grade: "10 ppm Sulfur / EN 590",
        origin: "ARA Region / USGC",
        incoterms: [
            "FOB",
            "DAP"
        ],
        minVolume: "3,000",
        minVolumeUnit: "MT",
        benchmark: "Platts ULSD",
        premiumDisc: "+$0.02/GAL",
        inspection: [
            "Intertek"
        ],
        deskEmail: "energy@xrtgroup.com",
        hub: [
            "RTM",
            "HOU"
        ],
        description: "Ultra-Low Sulfur Diesel to EN 590 (10 ppm sulfur max) from ARA refineries and US Gulf Coast. Platts ULSD benchmark. Minimum 3,000 MT, FOB or DAP. Intertek inspection. Same-day desk response.",
        longDescription: `Ultra-Low Sulfur Diesel (ULSD) to EN 590 specification is the primary road transport fuel standard across the European Union and increasingly adopted across emerging market import destinations. XRT Group sources ULSD directly from ARA-region refineries (Rotterdam, Antwerp, Amsterdam) and US Gulf Coast refinery terminals.

**Specification**

EN 590 grade: maximum 10 ppm sulfur, cetane number minimum 51, cloud point -5°C to -26°C depending on grade. ASTM D975 Grade 2-D available for US domestic and export markets. Intertek conducts mandatory load-port analysis.

**Logistics**

ARA sourcing enables barge delivery across the Rhine-Ruhr network, coastal vessel distribution to Baltic and Mediterranean ports, and direct pipeline access for large-volume industrial consumers. USGC-sourced product available via tanker for Latin American and Caribbean destinations.

**Pricing**

Differential to Platts ULSD CIF NWE assessment. Current indicative premium +$0.02/GAL. Volume-based pricing available from 3,000 MT spot to term supply agreements with monthly price fixing.

**Applications**

Road transport, industrial power generation, marine gas oil substitute, agricultural machinery fuel, emergency power systems.`,
        specs: [
            {
                label: "Sulfur Content",
                value: "10 ppm max (EN 590)"
            },
            {
                label: "Cetane Number",
                value: "51 min"
            },
            {
                label: "Origin",
                value: "ARA Region / US Gulf Coast"
            },
            {
                label: "Benchmark",
                value: "Platts ULSD CIF NWE"
            },
            {
                label: "Min. Volume",
                value: "3,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "FOB / DAP"
            },
            {
                label: "Inspection",
                value: "Intertek (EN ISO 20846)"
            },
            {
                label: "Delivery Modes",
                value: "Barge / Coastal Tanker / Pipeline"
            },
            {
                label: "Settlement",
                value: "LC / Open Account"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "EN 590 Compliant",
            "ASTM D975",
            "REACH Compliant",
            "FATF AML"
        ],
        relatedServices: [
            "cse",
            "arp",
            "ccp",
            "qai"
        ],
        relatedProducts: [
            "jet-fuel-a1",
            "fuel-oil-380",
            "brent-crude-oil"
        ],
        seoTitle: "ULSD Diesel Procurement | EN 590 | ARA & USGC Supply | XRT Group",
        seoDescription: "Source Ultra-Low Sulfur Diesel (ULSD) EN 590 from ARA and US Gulf Coast. 10 ppm sulfur. Platts benchmark pricing. Min 3,000 MT FOB/DAP. Intertek inspection. Submit RFQ for same-day desk response.",
        searchKeywords: [
            "ULSD diesel supplier",
            "ultra low sulfur diesel procurement",
            "EN 590 diesel import",
            "diesel fuel trading company",
            "bulk diesel CIF Rotterdam",
            "road diesel wholesale"
        ]
    },
    {
        slug: "jet-fuel-a1",
        category: "energy",
        code: "ENE-004",
        name: "Jet Fuel A-1",
        grade: "ASTM D1655 / DEF STAN 91-091",
        origin: "Singapore / Rotterdam",
        incoterms: [
            "CIF"
        ],
        minVolume: "5,000",
        minVolumeUnit: "MT",
        benchmark: "Platts Jet/Kero",
        premiumDisc: "+$1.50/MT",
        inspection: [
            "SGS"
        ],
        deskEmail: "energy@xrtgroup.com",
        hub: [
            "SGP",
            "RTM"
        ],
        description: "Jet Fuel A-1 to ASTM D1655 and DEF STAN 91-091, sourced from Singapore and Rotterdam refining hubs. Platts Jet/Kero benchmark at +$1.50/MT. Minimum 5,000 MT, CIF. SGS inspection. <4 hour desk response.",
        longDescription: `Jet A-1 is the internationally standardised kerosene-grade aviation turbine fuel meeting both ASTM D1655 and UK DEF STAN 91-091 specifications. XRT Group sources Jet A-1 from the Singapore and Rotterdam refining complexes — the two largest aviation fuel trading hubs globally — for supply into airline procurement programmes, into-plane operators, and strategic fuel reserves.

**Specification**

Flash point 38°C minimum, freeze point -47°C maximum, density 775–840 kg/m³ at 15°C. Full JIG (Joint Inspection Group) chain-of-custody documentation available. SGS conducts certificate of quality and quantity at load port.

**Logistics**

Singapore loading supports Asia-Pacific airline supply and into-plane fuelling at major regional airports. Rotterdam loading covers European and transatlantic routing. Pipeline and dedicated clean-product tanker delivery.

**Pricing**

Priced against Platts Jet/Kero CIF assessment with current indicative premium +$1.50/MT. Term supply agreements with monthly or fortnightly price fixing available through our Energy desk.

**Compliance**

IATA fuel quality standards, JIG aviation fuel quality control, OFAC and EU sanctions screening, FATF AML counterparty due diligence.`,
        specs: [
            {
                label: "Specification",
                value: "ASTM D1655 / DEF STAN 91-091"
            },
            {
                label: "Flash Point",
                value: "38°C min"
            },
            {
                label: "Freeze Point",
                value: "-47°C max"
            },
            {
                label: "Origin",
                value: "Singapore / Rotterdam"
            },
            {
                label: "Benchmark",
                value: "Platts Jet/Kero CIF"
            },
            {
                label: "Min. Volume",
                value: "5,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "CIF"
            },
            {
                label: "Inspection",
                value: "SGS (JIG chain-of-custody)"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "ASTM D1655",
            "DEF STAN 91-091",
            "JIG Compliant",
            "FATF AML"
        ],
        relatedServices: [
            "cse",
            "arp",
            "qai",
            "stf"
        ],
        relatedProducts: [
            "ulsd-diesel",
            "fuel-oil-380",
            "brent-crude-oil"
        ],
        seoTitle: "Jet Fuel A-1 Procurement | ASTM D1655 | Singapore & Rotterdam | XRT Group",
        seoDescription: "Source Jet Fuel A-1 to ASTM D1655 / DEF STAN 91-091 from Singapore and Rotterdam. Platts Jet/Kero pricing. Min 5,000 MT CIF. SGS / JIG inspection. Submit RFQ for <4hr desk response.",
        searchKeywords: [
            "Jet A-1 fuel supplier",
            "aviation fuel procurement",
            "buy jet fuel bulk",
            "Jet A1 CIF Singapore",
            "aviation turbine fuel trading",
            "ASTM D1655 jet fuel"
        ]
    },
    {
        slug: "fuel-oil-380",
        category: "energy",
        code: "ENE-005",
        name: "Fuel Oil 380 CST",
        grade: "3.5% Sulfur Max / ISO 8217",
        origin: "Houston / Fujairah",
        incoterms: [
            "FCA",
            "FOB"
        ],
        minVolume: "5,000",
        minVolumeUnit: "MT",
        benchmark: "Platts HSFO",
        premiumDisc: "-$2.00/MT",
        inspection: [
            "Bureau Veritas"
        ],
        deskEmail: "energy@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "High-sulfur Fuel Oil 380 CST to ISO 8217, 3.5% sulfur max, from Houston and Fujairah bunkering hubs. Platts HSFO benchmark at -$2.00/MT. Minimum 5,000 MT, FCA/FOB. Bureau Veritas inspection.",
        longDescription: `Fuel Oil 380 CST (HSFO) is a residual marine and industrial fuel meeting ISO 8217 RMG 380 specification, used by scrubber-fitted vessels and power generation facilities. XRT Group sources HSFO from the Houston and Fujairah bunkering complexes — two of the world's largest residual fuel trading hubs.

**Specification**

ISO 8217 RMG 380: viscosity 380 cSt at 50°C, sulfur 3.5% max, density 991 kg/m³ max at 15°C. Bureau Veritas conducts mandatory load-port quality and quantity inspection.

**Logistics**

Houston loading supports US Gulf, Caribbean, and Latin American supply. Fujairah covers Middle East, Indian Ocean, and Asian bunkering corridors. Barge and coastal tanker delivery.

**Pricing**

Differential to Platts HSFO assessment. Current indicative discount -$2.00/MT reflecting prevailing residual market structure. Spot and term contracts available.

**Applications**

Marine bunker fuel for scrubber-equipped vessels, industrial steam and power generation, asphalt and bitumen blending feedstock.`,
        specs: [
            {
                label: "Viscosity",
                value: "380 cSt at 50°C"
            },
            {
                label: "Sulfur Content",
                value: "3.5% max (ISO 8217)"
            },
            {
                label: "Origin",
                value: "Houston / Fujairah"
            },
            {
                label: "Benchmark",
                value: "Platts HSFO"
            },
            {
                label: "Min. Volume",
                value: "5,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "FCA / FOB"
            },
            {
                label: "Inspection",
                value: "Bureau Veritas (ISO 8217)"
            },
            {
                label: "Delivery Modes",
                value: "Barge / Coastal Tanker"
            },
            {
                label: "Settlement",
                value: "LC / Open Account"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "ISO 8217",
            "OFAC Compliant",
            "FATF AML",
            "OCIMF SIRE"
        ],
        relatedServices: [
            "cse",
            "arp",
            "rmm"
        ],
        relatedProducts: [
            "ulsd-diesel",
            "brent-crude-oil",
            "wti-crude-oil"
        ],
        seoTitle: "Fuel Oil 380 CST (HSFO) Procurement | ISO 8217 | XRT Group",
        seoDescription: "Source Fuel Oil 380 CST (HSFO) to ISO 8217, 3.5% sulfur, from Houston and Fujairah. Platts HSFO pricing. Min 5,000 MT FCA/FOB. Bureau Veritas inspection. Submit RFQ for <4hr response.",
        searchKeywords: [
            "fuel oil 380 supplier",
            "HSFO procurement",
            "marine fuel oil bunker",
            "ISO 8217 fuel oil",
            "high sulfur fuel oil Fujairah",
            "residual fuel oil trading"
        ]
    },
    /* ─── GRAINS & AGRICULTURAL ──────────────────────────────────── */ {
        slug: "srw-wheat",
        category: "grains",
        code: "AGR-001",
        name: "SRW Wheat",
        grade: "USDA #2 / 60 lbs/bu TW",
        origin: "US Gulf / PNW",
        incoterms: [
            "FOB",
            "CIF"
        ],
        minVolume: "25,000",
        minVolumeUnit: "MT",
        benchmark: "CBOT Wheat",
        premiumDisc: "+$5.00/MT",
        inspection: [
            "SGS",
            "USDA FGIS"
        ],
        deskEmail: "agro@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "USDA No. 2 Soft Red Winter (SRW) Wheat, 60 lbs/bu test weight, from US Gulf and Pacific Northwest terminals. CBOT Wheat benchmark at +$5.00/MT. Minimum 25,000 MT, FOB/CIF. SGS and USDA FGIS inspection. GAFTA terms.",
        longDescription: `Soft Red Winter (SRW) Wheat is a versatile milling wheat used in cookies, crackers, cakes, and Asian noodle production. XRT Group sources USDA Grade No. 2 SRW directly from US Gulf of Mexico and Pacific Northwest export terminals, providing reliable supply to milling and food-manufacturing buyers worldwide.

**Quality Specification**

USDA Grade No. 2: minimum 60 lbs/bushel test weight, maximum 13.5% moisture, protein typically 9–11%. Full USDA FGIS phytosanitary and grade certificate issued with each cargo.

**Logistics**

Panamax and Handymax bulk loading at USGC (New Orleans, Mobile) and PNW (Portland, Kalama). Typical transit: 18–22 days USGC to Mediterranean, 25–30 days PNW to Southeast Asia.

**Pricing**

CBOT wheat futures-basis pricing. XRT's current indicative FOB premium: +$5.00/MT. CFR/CIF destinations available with transparent freight quotes.

**Contract Terms**

GAFTA 64 (FOB) / GAFTA 49 standard. LC issuance per UCP 600. SGS quantity and quality inspection at load port.

**Typical Buyers**

Flour mills, biscuit and cracker manufacturers, noodle producers, government strategic reserves.`,
        specs: [
            {
                label: "Grade",
                value: "USDA No. 2 SRW"
            },
            {
                label: "Test Weight",
                value: "60 lbs/bu min"
            },
            {
                label: "Moisture",
                value: "13.5% max"
            },
            {
                label: "Origin",
                value: "US Gulf / Pacific Northwest"
            },
            {
                label: "Benchmark",
                value: "CBOT Wheat"
            },
            {
                label: "Min. Volume",
                value: "25,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "FOB / CIF"
            },
            {
                label: "Contract",
                value: "GAFTA 64 / 49"
            },
            {
                label: "Inspection",
                value: "SGS / USDA FGIS"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            }
        ],
        certifications: [
            "USDA FGIS",
            "GAFTA Member",
            "FATF AML",
            "Phytosanitary Certified"
        ],
        relatedServices: [
            "cse",
            "arp",
            "ccp",
            "qai",
            "stf"
        ],
        relatedProducts: [
            "yellow-corn-no2",
            "soybeans-no1",
            "malting-barley"
        ],
        seoTitle: "SRW Wheat Import | USDA No. 2 | Bulk Wheat Procurement | XRT Group",
        seoDescription: "Source USDA No. 2 Soft Red Winter Wheat from US Gulf and PNW. 60 lbs/bu. CBOT pricing +$5.00/MT. Min 25,000 MT FOB/CIF. GAFTA contracts. SGS / FGIS inspection. <4hr RFQ response.",
        searchKeywords: [
            "SRW wheat supplier",
            "soft red winter wheat procurement",
            "buy wheat USDA grade 2",
            "bulk wheat import CIF",
            "milling wheat FOB Gulf",
            "CBOT wheat trading"
        ]
    },
    {
        slug: "yellow-corn-no2",
        category: "grains",
        code: "AGR-002",
        name: "Yellow Corn No. 2",
        grade: "14% Moisture / 15% BCFM",
        origin: "US Gulf / Santos Brazil",
        incoterms: [
            "CFR",
            "CIF"
        ],
        minVolume: "25,000",
        minVolumeUnit: "MT",
        benchmark: "CBOT Corn",
        premiumDisc: "+$3.50/MT",
        inspection: [
            "SGS"
        ],
        deskEmail: "agro@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "USDA Grade No. 2 Yellow Corn from US Gulf and Santos/Paranaguá terminals. 14% moisture, 15% BCFM. CBOT Corn benchmark at +$3.50/MT. Minimum 25,000 MT, CFR/CIF. SGS inspection. GAFTA 49 terms.",
        longDescription: `Yellow Corn No. 2 (USDA Grade) is the world's most traded feed grain and a critical feedstock for ethanol production, compound animal feed, and industrial starch applications. XRT Group sources directly from US Gulf loading terminals and Brazilian Santos/Paranaguá export infrastructure, providing year-round supply across both Hemisphere harvest cycles.

**Quality Specification**

USDA Grade No. 2: maximum 14% moisture, 15% broken corn and foreign material (BCFM), 3% damaged kernels. Brazil origin: ANEC Grade 2 equivalent. Full USDA FGIS or ANEC phytosanitary certificate issued with each cargo.

**Logistics**

Panamax and Handymax bulk loading at USGC with standard 3–5 day laytime. Santos loading via TEGRAM and Cargill terminals. Typical transit: 18–22 days USGC to Rotterdam, 35–40 days to Southeast Asian discharge ports.

**Pricing**

CBOT December or March corn futures-basis pricing. XRT's current indicative FOB Gulf premium: +$3.50/MT. CFR/CIF destinations with freight quoted at Panamax market rates.

**Contract Terms**

GAFTA 49 (bulk grains) standard. LC issuance per UCP 600. SGS quantity and quality inspection at load port.

**Typical Buyers**

Feed mills, poultry and livestock integrators, ethanol producers, starch processing facilities, government strategic reserves.`,
        specs: [
            {
                label: "Grade",
                value: "USDA No. 2 / ANEC Grade 2"
            },
            {
                label: "Moisture",
                value: "14% max"
            },
            {
                label: "BCFM",
                value: "15% max"
            },
            {
                label: "Origin",
                value: "US Gulf / Santos-Paranaguá Brazil"
            },
            {
                label: "Benchmark",
                value: "CBOT Corn (nearby/deferred)"
            },
            {
                label: "Min. Volume",
                value: "25,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "CFR / CIF"
            },
            {
                label: "Contract",
                value: "GAFTA 49"
            },
            {
                label: "Inspection",
                value: "SGS / USDA FGIS"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            }
        ],
        certifications: [
            "USDA FGIS",
            "GAFTA Member",
            "FATF AML",
            "Phytosanitary Certified"
        ],
        relatedServices: [
            "cse",
            "arp",
            "ccp",
            "qai",
            "stf"
        ],
        relatedProducts: [
            "srw-wheat",
            "soybeans-no1",
            "crude-palm-oil"
        ],
        seoTitle: "Yellow Corn No. 2 Import | USDA Grade | Bulk Grain Procurement | XRT Group",
        seoDescription: "Source USDA No. 2 Yellow Corn from US Gulf and Brazil. 25,000 MT minimum. CBOT pricing +$3.50/MT. CFR/CIF. GAFTA contracts. SGS inspection. Submit RFQ for <4hr desk response.",
        searchKeywords: [
            "yellow corn procurement",
            "buy corn USDA grade 2",
            "bulk corn import CFR",
            "feed corn supplier",
            "CBOT corn trading",
            "corn FOB Gulf procurement"
        ]
    },
    {
        slug: "soybeans-no1",
        category: "grains",
        code: "AGR-003",
        name: "Soybeans No. 1",
        grade: "13% Moisture / 1% FM",
        origin: "US Gulf / Paranaguá",
        incoterms: [
            "CFR"
        ],
        minVolume: "30,000",
        minVolumeUnit: "MT",
        benchmark: "CBOT Soybeans",
        premiumDisc: "+$7.00/MT",
        inspection: [
            "Intertek"
        ],
        deskEmail: "agro@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "USDA No. 1 Soybeans from US Gulf and Paranaguá terminals. 13% moisture, 1% foreign material. CBOT Soybeans benchmark at +$7.00/MT. Minimum 30,000 MT, CFR. Intertek inspection. GAFTA 100 terms.",
        longDescription: `Soybeans are the world's dominant oilseed, feeding the global crush complex for soybean meal (animal feed protein) and soybean oil. XRT Group sources USDA Grade No. 1 soybeans from US Gulf and Brazilian Paranaguá export terminals for crushers, feed integrators, and food-grade processors.

**Quality Specification**

USDA Grade No. 1: maximum 13% moisture, 1% foreign material, 2% splits, 0.2% heat-damaged kernels. Updated FGIS 2025 sampling protocol applied (six spear probes per 1,000 MT). Intertek conducts load-port composite analysis.

**Logistics**

Panamax bulk loading at USGC and Paranaguá. Typical transit: 22–26 days USGC to China, 30–35 days to Southeast Asia.

**Pricing**

CBOT soybeans futures-basis pricing. XRT's current indicative CFR premium: +$7.00/MT. Crush-margin-linked term structures available through our Agricultural desk.

**Contract Terms**

GAFTA 100 standard. LC issuance per UCP 600. Destination sampling rights addressed in the quality determination clause.

**Typical Buyers**

Oilseed crushers, soybean meal feed producers, food-grade soy processors, government reserves.`,
        specs: [
            {
                label: "Grade",
                value: "USDA No. 1"
            },
            {
                label: "Moisture",
                value: "13% max"
            },
            {
                label: "Foreign Matter",
                value: "1% max"
            },
            {
                label: "Origin",
                value: "US Gulf / Paranaguá"
            },
            {
                label: "Benchmark",
                value: "CBOT Soybeans"
            },
            {
                label: "Min. Volume",
                value: "30,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "CFR"
            },
            {
                label: "Contract",
                value: "GAFTA 100"
            },
            {
                label: "Inspection",
                value: "Intertek (FGIS 2025)"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            }
        ],
        certifications: [
            "USDA FGIS",
            "GAFTA Member",
            "FATF AML",
            "Phytosanitary Certified"
        ],
        relatedServices: [
            "cse",
            "arp",
            "ccp",
            "qai",
            "stf"
        ],
        relatedProducts: [
            "yellow-corn-no2",
            "srw-wheat",
            "soybean-oil"
        ],
        seoTitle: "Soybeans No. 1 Import | USDA Grade | Bulk Oilseed Procurement | XRT Group",
        seoDescription: "Source USDA No. 1 Soybeans from US Gulf and Brazil. 30,000 MT minimum. CBOT pricing +$7.00/MT. CFR. GAFTA 100 contracts. Intertek inspection. Submit RFQ for <4hr desk response.",
        searchKeywords: [
            "soybeans supplier",
            "buy soybeans USDA grade 1",
            "bulk soybean import CFR",
            "oilseed procurement",
            "CBOT soybeans trading",
            "soybeans FOB Gulf"
        ]
    },
    {
        slug: "malting-barley",
        category: "grains",
        code: "AGR-004",
        name: "Malting Barley",
        grade: "2-Row / 13.5% Protein Max",
        origin: "Saskatchewan / Australia",
        incoterms: [
            "CIF"
        ],
        minVolume: "10,000",
        minVolumeUnit: "MT",
        benchmark: "Negotiated",
        premiumDisc: "Negotiated",
        inspection: [
            "Bureau Veritas"
        ],
        deskEmail: "agro@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "2-Row Malting Barley, 13.5% protein max, from Saskatchewan and Australian origins. Negotiated pricing. Minimum 10,000 MT, CIF. Bureau Veritas inspection. Phytosanitary certified for brewing and distilling buyers.",
        longDescription: `Malting Barley is the foundational raw material of the global brewing and distilling industries. XRT Group sources premium 2-row malting barley from Canadian (Saskatchewan, Alberta) and Australian growing regions for maltsters, breweries, and distilleries worldwide.

**Quality Specification**

2-row malting grade: protein 13.5% maximum (ideally 9.5–12%), germination 95% minimum, moisture 13.5% maximum, screenings under 5%. Bureau Veritas conducts germination, protein, and varietal purity analysis at load port.

**Logistics**

Container and bulk loading from Vancouver (Canada) and Adelaide/Geelong (Australia). Container shipment preferred for varietal segregation and quality preservation.

**Pricing**

Negotiated against prevailing malting barley premiums over feed barley. Pricing reflects variety, protein band, and crop year. Term contracts available.

**Contract Terms**

GAFTA / IGC malting barley terms. LC issuance per UCP 600. Varietal certification and germination guarantees provided.

**Typical Buyers**

Maltsters, craft and industrial breweries, whisky and grain spirit distilleries.`,
        specs: [
            {
                label: "Type",
                value: "2-Row Malting"
            },
            {
                label: "Protein",
                value: "13.5% max"
            },
            {
                label: "Germination",
                value: "95% min"
            },
            {
                label: "Origin",
                value: "Saskatchewan / Australia"
            },
            {
                label: "Benchmark",
                value: "Negotiated (malting premium)"
            },
            {
                label: "Min. Volume",
                value: "10,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "CIF"
            },
            {
                label: "Contract",
                value: "GAFTA / IGC"
            },
            {
                label: "Inspection",
                value: "Bureau Veritas"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            }
        ],
        certifications: [
            "GAFTA Member",
            "FATF AML",
            "Phytosanitary Certified",
            "Varietal Certified"
        ],
        relatedServices: [
            "cse",
            "arp",
            "ccp",
            "qai"
        ],
        relatedProducts: [
            "srw-wheat",
            "yellow-corn-no2",
            "soybeans-no1"
        ],
        seoTitle: "Malting Barley Import | 2-Row | Brewing & Distilling Supply | XRT Group",
        seoDescription: "Source 2-Row Malting Barley from Canada and Australia. 13.5% protein max, 95% germination. Min 10,000 MT CIF. Bureau Veritas inspection. Submit RFQ for <4hr desk response.",
        searchKeywords: [
            "malting barley supplier",
            "2-row barley procurement",
            "buy malting barley bulk",
            "brewing barley import",
            "Canadian malting barley",
            "Australian barley CIF"
        ]
    },
    /* ─── EDIBLE & INDUSTRIAL OILS ───────────────────────────────── */ {
        slug: "crude-palm-oil",
        category: "oils",
        code: "OIL-001",
        name: "Crude Palm Oil (CPO)",
        grade: "FFA 5% Max / M&I 0.5%",
        origin: "Malaysia / Indonesia",
        incoterms: [
            "CIF",
            "CFR"
        ],
        minVolume: "2,000",
        minVolumeUnit: "MT",
        benchmark: "BMD FCPO",
        premiumDisc: "+MYR 40/MT",
        inspection: [
            "MPOB"
        ],
        deskEmail: "oils@xrtgroup.com",
        hub: [
            "SGP",
            "RTM"
        ],
        description: "Crude Palm Oil from Malaysian and Indonesian mills. FFA 5% max, M&I 0.5%. BMD FCPO benchmark at +MYR 40/MT. Minimum 2,000 MT, CIF/CFR. MPOB inspection, RSPO Mass Balance and EUDR-compliant documentation. PORAM/FOSFA terms.",
        longDescription: `Crude Palm Oil (CPO) is the world's most consumed vegetable oil, serving as feedstock for food manufacturing, oleochemicals, biodiesel, and industrial lubricants. XRT Group sources CPO directly from Malaysian and Indonesian palm mills through our Singapore hub, with RSPO Mass Balance certification available for buyers supplying EU markets under EUDR.

**Quality Specification**

Malaysian CPO: MPOB Grade A — FFA (as palmitic acid) 5% max, moisture and impurities (M&I) 0.5% max, DOBI 2.3 min. Indonesian CPO: SNI 7182:2012 equivalent. MPOB sampling and grading at origin.

**RSPO & EUDR Compliance**

XRT's oils desk maintains RSPO Mass Balance supply chain certification. Full deforestation-free documentation available under EU Deforestation Regulation (EUDR): geo-coordinates, satellite monitoring compliance, and chain-of-custody for each mill of origin.

**Logistics**

Primary loading: Port Klang and Pasir Gudang (Malaysia); Belawan and Dumai (Indonesia). Bulk liquid tanker, ISO tanks, or flexi-tanks. Singapore hub provides secondary blending and re-export.

**Applications**

Food manufacturing (frying oils, margarine, baked goods), oleochemicals, biodiesel (B7–B30), soap and personal care, industrial lubricant base.

**Pricing**

Differential to BMD FCPO front-month contract. Current indicative premium +MYR 40/MT. USD/EUR invoicing against daily BMD FX rate.`,
        specs: [
            {
                label: "FFA (palmitic)",
                value: "5% max"
            },
            {
                label: "M&I",
                value: "0.5% max"
            },
            {
                label: "DOBI",
                value: "2.3 min (Malaysian CPO)"
            },
            {
                label: "Origin",
                value: "Malaysia / Indonesia"
            },
            {
                label: "Benchmark",
                value: "BMD FCPO"
            },
            {
                label: "Min. Volume",
                value: "2,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "CIF / CFR"
            },
            {
                label: "Contract",
                value: "PORAM / FOSFA"
            },
            {
                label: "Inspection",
                value: "MPOB / BSN (Indonesia)"
            },
            {
                label: "RSPO",
                value: "Mass Balance available"
            }
        ],
        certifications: [
            "RSPO Mass Balance",
            "EUDR Compliant",
            "MPOB Certified",
            "FOSFA Member",
            "ISCC Plus"
        ],
        relatedServices: [
            "cse",
            "ccp",
            "qai",
            "arp"
        ],
        relatedProducts: [
            "rbd-palm-olein",
            "soybean-oil",
            "sunflower-oil"
        ],
        seoTitle: "Crude Palm Oil (CPO) Procurement | RSPO Certified | Malaysia & Indonesia | XRT Group",
        seoDescription: "Source Crude Palm Oil directly from Malaysian and Indonesian mills. RSPO Mass Balance, EUDR compliant. Min 2,000 MT CIF/CFR. BMD FCPO pricing. MPOB inspection. Submit RFQ for same-day response.",
        searchKeywords: [
            "crude palm oil supplier",
            "CPO procurement",
            "buy palm oil bulk",
            "RSPO certified palm oil",
            "EUDR palm oil",
            "Malaysia palm oil import"
        ]
    },
    {
        slug: "rbd-palm-olein",
        category: "oils",
        code: "OIL-002",
        name: "RBD Palm Olein",
        grade: "CP45 / FFA 0.1%",
        origin: "Malaysia / Belawan",
        incoterms: [
            "CIF"
        ],
        minVolume: "2,000",
        minVolumeUnit: "MT",
        benchmark: "Platts Palm Olein",
        premiumDisc: "+$15/MT",
        inspection: [
            "SGS"
        ],
        deskEmail: "oils@xrtgroup.com",
        hub: [
            "SGP",
            "RTM"
        ],
        description: "RBD Palm Olein CP45, FFA 0.1%, from Malaysian and Belawan refineries. Platts Palm Olein benchmark at +$15/MT. Minimum 2,000 MT, CIF. SGS inspection. RSPO and PORAM terms for food-grade buyers.",
        longDescription: `RBD Palm Olein is the refined, bleached, and deodorised liquid fraction of palm oil — the world's leading cooking and frying oil across Asia, Africa, and the Middle East. XRT Group sources food-grade CP45 olein from Malaysian and Indonesian (Belawan) refineries.

**Quality Specification**

CP45 cold point grade: FFA 0.1% max, moisture 0.1% max, iodine value 56 min, colour 3 red max (Lovibond). SGS conducts food-grade quality certification at load port.

**Logistics**

Bulk liquid tanker, ISO tank, or 190 kg drum / 20 kg jerrycan retail packing available. Port Klang and Belawan loading. Singapore hub provides packing and re-export services.

**Pricing**

Differential to Platts Palm Olein CIF assessment. Current indicative premium +$15/MT. Term contracts with monthly price fixing.

**Applications**

Commercial and household frying oil, food manufacturing, instant noodle production, snack and confectionery processing.`,
        specs: [
            {
                label: "Grade",
                value: "CP45 (cold point)"
            },
            {
                label: "FFA",
                value: "0.1% max"
            },
            {
                label: "Iodine Value",
                value: "56 min"
            },
            {
                label: "Origin",
                value: "Malaysia / Belawan Indonesia"
            },
            {
                label: "Benchmark",
                value: "Platts Palm Olein CIF"
            },
            {
                label: "Min. Volume",
                value: "2,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "CIF"
            },
            {
                label: "Contract",
                value: "PORAM / FOSFA"
            },
            {
                label: "Inspection",
                value: "SGS (food grade)"
            },
            {
                label: "Packing",
                value: "Bulk / ISO Tank / Drum / Jerrycan"
            }
        ],
        certifications: [
            "RSPO Mass Balance",
            "MPOB Certified",
            "FOSFA Member",
            "Halal Certified",
            "ISCC Plus"
        ],
        relatedServices: [
            "cse",
            "ccp",
            "qai",
            "arp"
        ],
        relatedProducts: [
            "crude-palm-oil",
            "soybean-oil",
            "sunflower-oil"
        ],
        seoTitle: "RBD Palm Olein Procurement | CP45 Food Grade | XRT Group",
        seoDescription: "Source RBD Palm Olein CP45, FFA 0.1%, from Malaysia and Indonesia. Platts pricing +$15/MT. Min 2,000 MT CIF. SGS food-grade inspection. RSPO certified. Submit RFQ for same-day response.",
        searchKeywords: [
            "RBD palm olein supplier",
            "palm olein CP45 procurement",
            "cooking oil import bulk",
            "buy palm olein CIF",
            "food grade palm oil",
            "frying oil wholesale"
        ]
    },
    {
        slug: "soybean-oil",
        category: "oils",
        code: "OIL-003",
        name: "Soybean Oil (Degummed)",
        grade: "IV 130-140 / FFA 1% Max",
        origin: "Santos / Buenos Aires",
        incoterms: [
            "FOB",
            "CFR"
        ],
        minVolume: "2,000",
        minVolumeUnit: "MT",
        benchmark: "CBOT BO",
        premiumDisc: "+$8/MT",
        inspection: [
            "Intertek"
        ],
        deskEmail: "oils@xrtgroup.com",
        hub: [
            "RTM",
            "SGP"
        ],
        description: "Degummed Soybean Oil, IV 130-140, FFA 1% max, from Santos and Buenos Aires crush facilities. CBOT BO benchmark at +$8/MT. Minimum 2,000 MT, FOB/CFR. Intertek inspection. FOSFA terms.",
        longDescription: `Soybean Oil is the second most-produced vegetable oil globally, used in food manufacturing, frying, biodiesel feedstock, and industrial applications. XRT Group sources degummed soybean oil from the major South American crush complexes at Santos (Brazil) and Buenos Aires/Rosario (Argentina).

**Quality Specification**

Degummed grade: iodine value 130–140, FFA 1% max, moisture and volatiles 0.3% max, phosphorus reduced for onward refining. Intertek conducts quality certification at load port.

**Logistics**

Bulk liquid tanker and ISO tank loading at Santos and Up-River Argentine ports (San Lorenzo, Rosario). Typical transit: 22–28 days to ARA, 35–40 days to South/Southeast Asia.

**Pricing**

Differential to CBOT Soybean Oil (BO) front-month. Current indicative premium +$8/MT. Crush-linked term structures available.

**Applications**

Edible oil refining, margarine and shortening, biodiesel (FAME) feedstock, food manufacturing, industrial uses.`,
        specs: [
            {
                label: "Iodine Value",
                value: "130–140"
            },
            {
                label: "FFA",
                value: "1% max"
            },
            {
                label: "Type",
                value: "Degummed (for refining)"
            },
            {
                label: "Origin",
                value: "Santos / Buenos Aires"
            },
            {
                label: "Benchmark",
                value: "CBOT Soybean Oil (BO)"
            },
            {
                label: "Min. Volume",
                value: "2,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "FOB / CFR"
            },
            {
                label: "Contract",
                value: "FOSFA"
            },
            {
                label: "Inspection",
                value: "Intertek"
            },
            {
                label: "Settlement",
                value: "LC (UCP 600)"
            }
        ],
        certifications: [
            "FOSFA Member",
            "FATF AML",
            "ISCC Plus",
            "Non-GMO available"
        ],
        relatedServices: [
            "cse",
            "ccp",
            "qai",
            "arp",
            "stf"
        ],
        relatedProducts: [
            "crude-palm-oil",
            "rbd-palm-olein",
            "sunflower-oil"
        ],
        seoTitle: "Degummed Soybean Oil Procurement | CBOT BO | South America | XRT Group",
        seoDescription: "Source Degummed Soybean Oil, IV 130-140, from Brazil and Argentina. CBOT BO pricing +$8/MT. Min 2,000 MT FOB/CFR. Intertek inspection. FOSFA terms. Submit RFQ for <4hr response.",
        searchKeywords: [
            "soybean oil supplier",
            "degummed soybean oil procurement",
            "buy soybean oil bulk",
            "vegetable oil import CFR",
            "CBOT soybean oil",
            "biodiesel feedstock oil"
        ]
    },
    {
        slug: "sunflower-oil",
        category: "oils",
        code: "OIL-004",
        name: "High-Oleic Sunflower Oil",
        grade: "Oleic 82%+ / Linoleic 10%",
        origin: "Ukraine / Black Sea",
        incoterms: [
            "FOB",
            "CFR"
        ],
        minVolume: "1,000",
        minVolumeUnit: "MT",
        benchmark: "Platts SFO",
        premiumDisc: "+$20/MT",
        inspection: [
            "Bureau Veritas"
        ],
        deskEmail: "oils@xrtgroup.com",
        hub: [
            "RTM",
            "SGP"
        ],
        description: "High-Oleic Sunflower Oil, 82%+ oleic content, from Ukraine and Black Sea origins. Platts SFO benchmark at +$20/MT. Minimum 1,000 MT, FOB/CFR. Bureau Veritas inspection. FOSFA terms.",
        longDescription: `High-Oleic Sunflower Oil (HOSO) is a premium edible oil prized for its oxidative stability, neutral flavour, and high monounsaturated fat content — increasingly demanded by food manufacturers seeking clean-label frying and formulation oils. XRT Group sources HOSO from Ukrainian and broader Black Sea producing regions.

**Quality Specification**

High-oleic grade: oleic acid 82% minimum, linoleic acid 10% maximum, FFA 0.1% max, peroxide value 10 max. Bureau Veritas conducts fatty-acid profile and quality certification at load port.

**Logistics**

Bulk liquid tanker and flexi-tank loading from Black Sea ports (subject to corridor availability and insurance). ISO tank and drum packing for smaller parcels. Singapore and Rotterdam hubs provide re-export and blending.

**Pricing**

Differential to Platts Sunflower Oil assessment. Current indicative premium +$20/MT reflecting high-oleic specification premium over standard grade.

**Applications**

Premium frying oil, infant formula and clean-label food manufacturing, cosmetics and personal care, nutraceutical carrier oil.`,
        specs: [
            {
                label: "Oleic Acid",
                value: "82% min"
            },
            {
                label: "Linoleic Acid",
                value: "10% max"
            },
            {
                label: "FFA",
                value: "0.1% max"
            },
            {
                label: "Origin",
                value: "Ukraine / Black Sea"
            },
            {
                label: "Benchmark",
                value: "Platts Sunflower Oil"
            },
            {
                label: "Min. Volume",
                value: "1,000 MT"
            },
            {
                label: "INCOTERMS",
                value: "FOB / CFR"
            },
            {
                label: "Contract",
                value: "FOSFA"
            },
            {
                label: "Inspection",
                value: "Bureau Veritas"
            },
            {
                label: "Packing",
                value: "Bulk / ISO Tank / Flexi / Drum"
            }
        ],
        certifications: [
            "FOSFA Member",
            "Non-GMO",
            "Kosher available",
            "Halal Certified"
        ],
        relatedServices: [
            "cse",
            "ccp",
            "qai",
            "rmm"
        ],
        relatedProducts: [
            "crude-palm-oil",
            "rbd-palm-olein",
            "soybean-oil"
        ],
        seoTitle: "High-Oleic Sunflower Oil Procurement | HOSO | Black Sea | XRT Group",
        seoDescription: "Source High-Oleic Sunflower Oil, 82%+ oleic, from Ukraine and Black Sea. Platts pricing +$20/MT. Min 1,000 MT FOB/CFR. Bureau Veritas inspection. FOSFA terms. Submit RFQ for <4hr response.",
        searchKeywords: [
            "high oleic sunflower oil supplier",
            "HOSO procurement",
            "buy sunflower oil bulk",
            "sunflower oil import CFR",
            "Black Sea sunflower oil",
            "premium frying oil wholesale"
        ]
    },
    /* ─── LOGISTICS INFRASTRUCTURE ───────────────────────────────── */ {
        slug: "aframax-charter",
        category: "logistics",
        code: "LOG-001",
        name: "Aframax Tanker Charter",
        grade: "80–120k DWT / Clean or Dirty",
        origin: "Houston / Rotterdam",
        incoterms: [
            "Voyage Charter"
        ],
        minVolume: "80,000",
        minVolumeUnit: "DWT",
        benchmark: "Worldscale",
        premiumDisc: "WS 92–110",
        inspection: [
            "P&I Club"
        ],
        deskEmail: "logistics@xrtgroup.com",
        hub: [
            "HOU",
            "RTM"
        ],
        description: "Aframax tanker chartering, 80–120k DWT, clean or dirty petroleum cargo, from Houston and Rotterdam. Worldscale-referenced pricing WS 92–110. Voyage charter basis. P&I Club and OCIMF SIRE vetted tonnage.",
        longDescription: `Aframax tankers (80,000–120,000 DWT) are the workhorse of mid-range crude and refined product transport, ideally sized for Atlantic Basin and intra-regional voyages. XRT Group's logistics desk arranges Aframax voyage charters for crude, fuel oil, and clean petroleum products from our Houston and Rotterdam hubs.

**Vessel Specification**

80,000–120,000 DWT, double-hull (MARPOL compliant), coated or uncoated tanks for clean/dirty cargo. All nominated tonnage subject to OCIMF SIRE vetting and CDI inspection where applicable.

**Chartering**

Voyage charter (VC) basis on Worldscale terms, or time charter (TC) for repeat programmes. Current indicative range WS 92–110 on benchmark routes (TD3C, TD7, TD25), subject to bunker prices and position lists.

**Routes**

US Gulf to ARA (TD25), Caribbean to USAC, intra-Mediterranean, and North Sea coastal. Laytime, demurrage, and bunker clauses per ASBATANKVOY or BPVOY4.

**Risk & Compliance**

Vessel sanctions screening (IMO/MMSI cross-check), P&I Club cover verification, AIS continuity monitoring, and charter-party risk structuring through our Risk Mitigation Matrix desk.`,
        specs: [
            {
                label: "Vessel Size",
                value: "80,000–120,000 DWT"
            },
            {
                label: "Cargo Type",
                value: "Clean / Dirty Petroleum"
            },
            {
                label: "Hull",
                value: "Double-Hull (MARPOL)"
            },
            {
                label: "Origin",
                value: "Houston / Rotterdam"
            },
            {
                label: "Benchmark",
                value: "Worldscale (TD3C / TD25)"
            },
            {
                label: "Indicative",
                value: "WS 92–110"
            },
            {
                label: "Charter Type",
                value: "Voyage / Time Charter"
            },
            {
                label: "Vetting",
                value: "OCIMF SIRE / CDI"
            },
            {
                label: "Charter Party",
                value: "ASBATANKVOY / BPVOY4"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "MARPOL Compliant",
            "OCIMF SIRE",
            "P&I Club Cover",
            "OFAC Vessel Screened"
        ],
        relatedServices: [
            "arp",
            "rmm",
            "qai",
            "ccp"
        ],
        relatedProducts: [
            "panamax-bulk",
            "iso-tank",
            "cold-chain-reefer"
        ],
        seoTitle: "Aframax Tanker Charter | 80–120k DWT | Crude & Product Freight | XRT Group",
        seoDescription: "Charter Aframax tankers (80–120k DWT) for crude and product cargo from Houston and Rotterdam. Worldscale pricing WS 92–110. OCIMF SIRE vetted. Submit RFQ for <4hr desk response.",
        searchKeywords: [
            "Aframax tanker charter",
            "crude oil tanker chartering",
            "petroleum freight Worldscale",
            "tanker voyage charter",
            "Aframax shipping rates",
            "crude tanker broker"
        ]
    },
    {
        slug: "panamax-bulk",
        category: "logistics",
        code: "LOG-002",
        name: "Panamax Bulk Carrier",
        grade: "65–80k DWT / Gearless",
        origin: "Singapore / Rotterdam",
        incoterms: [
            "Time Charter",
            "Voyage Charter"
        ],
        minVolume: "60,000",
        minVolumeUnit: "MT",
        benchmark: "Baltic Panamax BPI",
        premiumDisc: "$12,500–16,000/day",
        inspection: [
            "Class NK",
            "DNV"
        ],
        deskEmail: "logistics@xrtgroup.com",
        hub: [
            "SGP",
            "RTM"
        ],
        description: "Panamax bulk carrier chartering, 65–80k DWT gearless, for grains and dry bulk. Baltic Panamax BPI-referenced at $12,500–16,000/day. Time or voyage charter. Class NK / DNV classed tonnage.",
        longDescription: `Panamax bulk carriers (65,000–80,000 DWT) are the backbone of global grain and dry bulk transport, sized to transit the Panama Canal's original locks. XRT Group's logistics desk arranges Panamax chartering for grain, oilseed, and dry bulk cargoes from our Singapore and Rotterdam hubs.

**Vessel Specification**

65,000–80,000 DWT, gearless, 7 holds / 7 hatches typical, suitable for grains, soybeans, coal, and minor bulks. Class NK or DNV classification with valid statutory certificates.

**Chartering**

Time charter (TC) basis referenced to the Baltic Panamax Index (BPI), current indicative $12,500–16,000/day depending on route and duration. Voyage charter also available with freight quoted per MT.

**Routes**

USGC and Santos to China / Southeast Asia (grain), Indonesia to India (coal), transatlantic and transpacific bulk corridors. Laytime and demurrage per NORGRAIN or GENCON.

**Risk & Compliance**

Hold cleanliness and cargo-worthiness survey, P&I cover verification, vessel sanctions screening, and charter-party structuring through our Risk Mitigation Matrix desk.`,
        specs: [
            {
                label: "Vessel Size",
                value: "65,000–80,000 DWT"
            },
            {
                label: "Configuration",
                value: "Gearless / 7 holds"
            },
            {
                label: "Cargo Type",
                value: "Grains / Dry Bulk"
            },
            {
                label: "Origin",
                value: "Singapore / Rotterdam"
            },
            {
                label: "Benchmark",
                value: "Baltic Panamax Index (BPI)"
            },
            {
                label: "Indicative",
                value: "$12,500–16,000/day"
            },
            {
                label: "Charter Type",
                value: "Time / Voyage Charter"
            },
            {
                label: "Classification",
                value: "Class NK / DNV"
            },
            {
                label: "Charter Party",
                value: "NORGRAIN / GENCON"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "Class NK / DNV",
            "P&I Club Cover",
            "ISM Code",
            "OFAC Vessel Screened"
        ],
        relatedServices: [
            "arp",
            "rmm",
            "qai",
            "ccp"
        ],
        relatedProducts: [
            "aframax-charter",
            "iso-tank",
            "cold-chain-reefer"
        ],
        seoTitle: "Panamax Bulk Carrier Charter | 65–80k DWT | Grain & Dry Bulk | XRT Group",
        seoDescription: "Charter Panamax bulk carriers (65–80k DWT) for grain and dry bulk from Singapore and Rotterdam. Baltic Panamax pricing $12,500–16,000/day. Class NK/DNV. Submit RFQ for <4hr response.",
        searchKeywords: [
            "Panamax bulk carrier charter",
            "grain freight chartering",
            "dry bulk shipping rates",
            "Baltic Panamax Index",
            "bulk carrier voyage charter",
            "grain vessel broker"
        ]
    },
    {
        slug: "iso-tank",
        category: "logistics",
        code: "LOG-003",
        name: "ISO Tank Container",
        grade: "24,000L / Food Grade",
        origin: "Global (Multimodal)",
        incoterms: [
            "FCA",
            "DAP"
        ],
        minVolume: "20",
        minVolumeUnit: "FCL",
        benchmark: "Spot Freight Rate",
        premiumDisc: "Negotiated",
        inspection: [
            "Flexi-Tank Surveyor"
        ],
        deskEmail: "logistics@xrtgroup.com",
        hub: [
            "SGP",
            "RTM"
        ],
        description: "Food-grade ISO tank containers, 24,000L capacity, for bulk liquid multimodal transport. Spot freight pricing, negotiated. Minimum 20 FCL. Surveyor inspection. FCA/DAP delivery worldwide.",
        longDescription: `ISO Tank Containers provide multimodal bulk liquid transport for edible oils, chemicals, and food-grade liquids, combining the economics of bulk with the flexibility of containerised door-to-door delivery. XRT Group's logistics desk arranges ISO tank fleets for liquid commodity programmes through our Singapore and Rotterdam hubs.

**Equipment Specification**

24,000L (T11 / T14) food-grade or chemical-grade tanks, baffled or non-baffled, with heating coils for viscous products. Last-three-cargo certification and food-grade cleaning to EFTCO standards.

**Logistics**

Multimodal door-to-door: ocean, rail, and road. FCA at origin depot or DAP at destination. Minimum economical lot 20 FCL; smaller parcels by arrangement.

**Pricing**

Spot freight rate basis, negotiated per corridor and equipment availability. Term equipment commitments available for repeat liquid programmes.

**Applications**

Edible oil distribution (palm olein, soybean oil), food-grade liquids, specialty chemicals, base oils and lubricants.`,
        specs: [
            {
                label: "Capacity",
                value: "24,000 L (T11 / T14)"
            },
            {
                label: "Grade",
                value: "Food / Chemical Grade"
            },
            {
                label: "Features",
                value: "Baffled / Heating Coils"
            },
            {
                label: "Origin",
                value: "Global (Multimodal)"
            },
            {
                label: "Benchmark",
                value: "Spot Freight Rate"
            },
            {
                label: "Min. Volume",
                value: "20 FCL"
            },
            {
                label: "INCOTERMS",
                value: "FCA / DAP"
            },
            {
                label: "Cleaning",
                value: "EFTCO Food-Grade"
            },
            {
                label: "Inspection",
                value: "Independent Surveyor"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "EFTCO Cleaned",
            "Food Grade Certified",
            "IMDG Compliant",
            "Last-3-Cargo Certified"
        ],
        relatedServices: [
            "arp",
            "ccp",
            "qai"
        ],
        relatedProducts: [
            "cold-chain-reefer",
            "panamax-bulk",
            "aframax-charter"
        ],
        seoTitle: "ISO Tank Container Freight | 24,000L Food Grade | Multimodal | XRT Group",
        seoDescription: "Charter food-grade ISO tank containers (24,000L) for bulk liquid multimodal transport. Spot freight pricing. Min 20 FCL. EFTCO cleaned. FCA/DAP worldwide. Submit RFQ for <4hr response.",
        searchKeywords: [
            "ISO tank container freight",
            "bulk liquid transport",
            "food grade ISO tank",
            "edible oil ISO tank",
            "tank container leasing",
            "multimodal liquid logistics"
        ]
    },
    {
        slug: "cold-chain-reefer",
        category: "logistics",
        code: "LOG-004",
        name: "Cold-Chain Reefer",
        grade: "-18°C to +12°C / ATP Cert",
        origin: "Houston / Singapore",
        incoterms: [
            "DAP",
            "DDP"
        ],
        minVolume: "2",
        minVolumeUnit: "FCL",
        benchmark: "Baltic Reefer Index",
        premiumDisc: "+$400/unit",
        inspection: [
            "Temperature Logger"
        ],
        deskEmail: "logistics@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "Temperature-controlled reefer logistics, -18°C to +12°C, ATP certified, from Houston and Singapore. Baltic Reefer Index-referenced at +$400/unit. Minimum 2 FCL. Continuous temperature logging. DAP/DDP delivery.",
        longDescription: `Cold-Chain Reefer logistics provides temperature-controlled transport for perishable and temperature-sensitive commodities, maintaining unbroken cold chain from origin to destination. XRT Group's logistics desk arranges reefer container programmes through our Houston and Singapore hubs.

**Equipment Specification**

40' high-cube reefer containers, temperature range -18°C to +12°C, ATP (Agreement on Perishable Foodstuffs) certified, controlled/modified atmosphere available. Continuous data-logger temperature monitoring with delivery report.

**Logistics**

Door-to-door DAP or DDP including customs clearance through our Customs Clearance Pipeline. Minimum 2 FCL; consolidated LCL by arrangement.

**Pricing**

Baltic Reefer Index basis with current indicative premium +$400/unit over dry equivalent, reflecting power, monitoring, and equipment positioning.

**Applications**

Frozen and chilled foodstuffs, temperature-sensitive oils and fats, pharmaceutical and nutraceutical ingredients, specialty perishables.`,
        specs: [
            {
                label: "Temp. Range",
                value: "-18°C to +12°C"
            },
            {
                label: "Equipment",
                value: "40' High-Cube Reefer"
            },
            {
                label: "Certification",
                value: "ATP Certified"
            },
            {
                label: "Origin",
                value: "Houston / Singapore"
            },
            {
                label: "Benchmark",
                value: "Baltic Reefer Index"
            },
            {
                label: "Min. Volume",
                value: "2 FCL"
            },
            {
                label: "INCOTERMS",
                value: "DAP / DDP"
            },
            {
                label: "Monitoring",
                value: "Continuous Data Logger"
            },
            {
                label: "Customs",
                value: "Included (CCP)"
            },
            {
                label: "Response SLA",
                value: SLA
            }
        ],
        certifications: [
            "ATP Certified",
            "Cold Chain Verified",
            "HACCP Aligned",
            "GDP (Pharma) available"
        ],
        relatedServices: [
            "arp",
            "ccp",
            "qai",
            "rmm"
        ],
        relatedProducts: [
            "iso-tank",
            "panamax-bulk",
            "aframax-charter"
        ],
        seoTitle: "Cold-Chain Reefer Logistics | ATP Certified | Temperature Controlled | XRT Group",
        seoDescription: "Arrange cold-chain reefer logistics (-18°C to +12°C), ATP certified, from Houston and Singapore. Baltic Reefer pricing +$400/unit. Min 2 FCL. Continuous monitoring. DAP/DDP. <4hr RFQ response.",
        searchKeywords: [
            "cold chain reefer logistics",
            "temperature controlled shipping",
            "reefer container freight",
            "ATP certified transport",
            "frozen food logistics",
            "perishable cargo shipping"
        ]
    },
    /* ─── PROTEINS & MEAT ────────────────────────────────────────── */ {
        slug: "beef-usda-kosher",
        category: "proteins",
        code: "PRT-001",
        name: "Beef USDA — Kosher",
        grade: "USDA Choice / Prime",
        origin: "USA (Midwest)",
        incoterms: [
            "FOB",
            "CFR",
            "CIF"
        ],
        minVolume: "10,000",
        minVolumeUnit: "KG",
        benchmark: "USDA Wholesale Reports",
        premiumDisc: "Negotiated",
        inspection: [
            "USDA FSIS",
            "Kosher Agency"
        ],
        deskEmail: "proteins@xrtgroup.com",
        hub: [
            "HOU",
            "RTM"
        ],
        description: "USDA-certified Kosher beef for international import and export. Choice / Prime grades from US Midwest. FOB / CFR / CIF. Kosher AMS-certified agency inspection. Negotiated pricing.",
        longDescription: `XRT Group manages kosher protein procurement for institutional buyers across 6 continents. We source USDA-certified Kosher beef directly from Midwest processing facilities.\n\n**Quality & Certification**\n\nUSDA Choice / Prime grade, accompanied by full USDA FSIS health certificates and Kosher certification from recognized AMS-certified agencies.\n\n**Logistics & Delivery**\n\nAvailable as forequarter, hindquarter, or primal cuts. Packaging in vacuum-sealed cryovac. Transported chilled (0–4°C) with a 45-day shelf life, or frozen (-18°C) with an 18-month shelf life. Full traceability via USDA Tag ID and batch certificates.`,
        specs: [
            {
                label: "Grade",
                value: "USDA Choice / Prime"
            },
            {
                label: "Certification",
                value: "USDA / Kosher (AMS-certified)"
            },
            {
                label: "Cut Types",
                value: "Forequarter / Hindquarter / Primal"
            },
            {
                label: "Packaging",
                value: "Vacuum-sealed / Cryovac"
            },
            {
                label: "Temperature",
                value: "Chilled 0–4°C / Frozen -18°C"
            },
            {
                label: "Shelf Life",
                value: "Chilled: 45 days / Frozen: 18 months"
            },
            {
                label: "Origin",
                value: "USA (Midwest)"
            },
            {
                label: "Min. Volume",
                value: "10,000 KG / FCL"
            },
            {
                label: "INCOTERMS",
                value: "FOB / CFR / CIF"
            },
            {
                label: "Inspection",
                value: "USDA FSIS / Kosher certifier"
            }
        ],
        certifications: [
            "USDA FSIS",
            "Kosher Certified",
            "FATF AML",
            "Health Certified"
        ],
        relatedServices: [
            "qai",
            "ccp",
            "stf"
        ],
        relatedProducts: [
            "beef-usda-halal"
        ],
        seoTitle: "Kosher Beef USDA Procurement | Institutional Sourcing | XRT Group",
        seoDescription: "Source USDA-certified Kosher beef for international import. Choice/Prime from US Midwest. Min 10,000 KG. Full chain-of-custody documentation.",
        searchKeywords: [
            "kosher beef wholesale",
            "USDA kosher beef import",
            "kosher protein procurement",
            "institutional kosher meat supplier"
        ]
    },
    {
        slug: "beef-usda-halal",
        category: "proteins",
        code: "PRT-002",
        name: "Beef USDA — Halal",
        grade: "USDA Choice / Select",
        origin: "USA (Midwest / South)",
        incoterms: [
            "FOB",
            "CFR",
            "CIF"
        ],
        minVolume: "10,000",
        minVolumeUnit: "KG",
        benchmark: "USDA Wholesale Reports",
        premiumDisc: "Negotiated",
        inspection: [
            "USDA FSIS",
            "IFANCA / ISWA"
        ],
        deskEmail: "proteins@xrtgroup.com",
        hub: [
            "HOU",
            "SGP"
        ],
        description: "USDA-certified Halal beef for international import and export. Choice / Select grades from US facilities. FOB / CFR / CIF. IFANCA / ISWA Halal certification. Negotiated pricing.",
        longDescription: `XRT Group manages halal protein procurement for institutional buyers across 6 continents. We source USDA-certified Halal beef directly from Midwest and South US processing facilities.\n\n**Quality & Certification**\n\nUSDA Choice / Select grade, accompanied by full USDA FSIS health certificates and Halal certification from accredited bodies such as IFANCA or ISWA. Hand-slaughtered or machine-slaughtered (certified) options available.\n\n**Logistics & Delivery**\n\nAvailable as forequarter, hindquarter, or primal cuts. Packaging in vacuum-sealed cryovac. Transported chilled (0–4°C) with a 45-day shelf life, or frozen (-18°C) with an 18-month shelf life. Full documentation including Halal cert, Health cert, COO, and USDA stamp.`,
        specs: [
            {
                label: "Grade",
                value: "USDA Choice / Select"
            },
            {
                label: "Certification",
                value: "USDA / Halal (IFANCA/ISWA)"
            },
            {
                label: "Slaughter",
                value: "Hand / Machine (certified)"
            },
            {
                label: "Cut Types",
                value: "Forequarter / Hindquarter / Primal"
            },
            {
                label: "Packaging",
                value: "Vacuum-sealed / Cryovac"
            },
            {
                label: "Temperature",
                value: "Chilled 0–4°C / Frozen -18°C"
            },
            {
                label: "Shelf Life",
                value: "Chilled: 45 days / Frozen: 18 months"
            },
            {
                label: "Origin",
                value: "USA (Midwest / South)"
            },
            {
                label: "Min. Volume",
                value: "10,000 KG / FCL"
            },
            {
                label: "Inspection",
                value: "USDA FSIS / Accredited Halal body"
            }
        ],
        certifications: [
            "USDA FSIS",
            "Halal Certified",
            "FATF AML",
            "Health Certified"
        ],
        relatedServices: [
            "qai",
            "ccp",
            "stf"
        ],
        relatedProducts: [
            "beef-usda-kosher"
        ],
        seoTitle: "Halal Beef USDA Procurement | Institutional Sourcing | XRT Group",
        seoDescription: "Source USDA-certified Halal beef for international import. Choice/Select from US Midwest/South. Min 10,000 KG. Full chain-of-custody documentation.",
        searchKeywords: [
            "halal beef wholesale",
            "USDA halal beef import",
            "halal protein procurement",
            "institutional halal meat supplier"
        ]
    }
];
function getProductBySlug(slug) {
    return PRODUCTS.find((p)=>p.slug === slug);
}
function getProductsByCategory(category) {
    return PRODUCTS.filter((p)=>p.category === category);
}
function getAllProductSlugs() {
    return PRODUCTS.map((p)=>p.slug);
}
}),
"[project]/src/components/seo/ProductStructuredData.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductStructuredData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ProductStructuredData({ product }) {
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
                brand: {
                    "@type": "Brand",
                    name: "XRT Group"
                },
                additionalProperty: product.specs.map((spec)=>({
                        "@type": "PropertyValue",
                        name: spec.label,
                        value: spec.value
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
                        unitText: product.minVolumeUnit
                    },
                    seller: {
                        "@type": "Organization",
                        name: "XRT Group LLC",
                        url: "https://xrtgroup.com"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Products",
                        item: "https://xrtgroup.com/products"
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: product.name,
                        item: url
                    }
                ]
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: `What is the minimum order quantity for ${product.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `The minimum parcel size for ${product.name} is ${product.minVolume} ${product.minVolumeUnit}.`
                        }
                    },
                    {
                        "@type": "Question",
                        name: `What INCOTERMS are available for ${product.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `${product.name} is available under ${product.incoterms.join(" and ")} delivery terms.`
                        }
                    },
                    {
                        "@type": "Question",
                        name: `What inspection agencies are used for ${product.name}?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `${product.name} is inspected by ${product.inspection.join(" and ")} at load port.`
                        }
                    },
                    {
                        "@type": "Question",
                        name: `How quickly does XRT Group respond to ${product.name} RFQs?`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `XRT Group's ${product.hub[0]} desk responds to ${product.name} requests within 4 business hours.`
                        }
                    }
                ]
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema)
        }
    }, void 0, false, {
        fileName: "[project]/src/components/seo/ProductStructuredData.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/rfq/InlineRFQ.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/rfq/InlineRFQ.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/rfq/InlineRFQ.tsx <module evaluation>", "default");
}),
"[project]/src/components/rfq/InlineRFQ.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/rfq/InlineRFQ.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/rfq/InlineRFQ.tsx", "default");
}),
"[project]/src/components/rfq/InlineRFQ.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rfq$2f$InlineRFQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/rfq/InlineRFQ.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rfq$2f$InlineRFQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/rfq/InlineRFQ.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rfq$2f$InlineRFQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(marketing)/products/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/productsData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seo$2f$ProductStructuredData$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/seo/ProductStructuredData.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rfq$2f$InlineRFQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/rfq/InlineRFQ.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProductSlugs"])().map((slug)=>({
            slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductBySlug"])(slug);
    if (!product) return {};
    const url = `https://xrtgroup.com/products/${product.slug}`;
    return {
        title: product.seoTitle,
        description: product.seoDescription,
        keywords: product.searchKeywords,
        alternates: {
            canonical: url
        },
        openGraph: {
            title: product.seoTitle,
            description: product.seoDescription,
            url,
            type: "website"
        }
    };
}
// Convert the markdown-ish longDescription into HTML for the SEO body.
function renderBody(text) {
    return text.trim().split(/\n\n+/).map((block)=>{
        const m = block.match(/^\*\*(.+?)\*\*$/);
        if (m) return `<h2>${m[1]}</h2>`;
        return `<p>${block.replace(/\n/g, " ")}</p>`;
    }).join("");
}
async function ProductPage({ params }) {
    const { slug } = await params;
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductBySlug"])(slug);
    if (!product) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const cat = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_META"][product.category];
    const related = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>product.relatedProducts.includes(p.slug));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$seo$2f$ProductStructuredData$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                product: product
            }, void 0, false, {
                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-xrt-black text-white min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-xrt-steel/15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "label-caps text-xrt-steel/40 hover:text-xrt-steel/70 transition-colors",
                                        children: "Products"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label-caps text-xrt-steel/20",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label-caps",
                                        style: {
                                            color: cat.color
                                        },
                                        children: cat.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label-caps text-xrt-steel/20",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label-caps text-xrt-steel/70",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-16 pb-10 sm:pb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-caps px-3 py-1.5 border",
                                                    style: {
                                                        color: cat.color,
                                                        borderColor: cat.color
                                                    },
                                                    children: product.code
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "label-caps text-xrt-steel/40",
                                                    children: cat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-[clamp(2.25rem,6vw,4.5rem)] text-white leading-[1.0] mb-4",
                                            style: {
                                                fontFamily: "var(--font-barlow)",
                                                fontWeight: 900,
                                                letterSpacing: "-0.02em",
                                                textTransform: "uppercase"
                                            },
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base text-xrt-steel/50 mb-8",
                                            style: {
                                                fontFamily: "var(--font-archivo)",
                                                letterSpacing: "0.04em"
                                            },
                                            children: product.grade
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base sm:text-lg text-xrt-steel/70 leading-relaxed mb-10 max-w-xl",
                                            style: {
                                                fontFamily: "var(--font-archivo)"
                                            },
                                            children: product.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 border-t border-xrt-steel/15",
                                            children: [
                                                {
                                                    label: "Min. Volume",
                                                    value: `${product.minVolume} ${product.minVolumeUnit}`
                                                },
                                                {
                                                    label: "Benchmark",
                                                    value: product.benchmark
                                                },
                                                {
                                                    label: "Premium / Disc",
                                                    value: product.premiumDisc
                                                }
                                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `py-5 sm:py-6 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-xrt-steel/15" : ""} sm:px-6 sm:first:pl-0`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "label-caps text-xrt-steel/40 mb-2",
                                                            children: s.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl font-black text-white",
                                                            style: {
                                                                fontFamily: "var(--font-barlow)",
                                                                letterSpacing: "-0.02em"
                                                            },
                                                            children: s.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, s.label, true, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:sticky lg:top-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$rfq$2f$InlineRFQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        product: product
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-b border-xrt-steel/15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl text-white mb-6",
                                                style: {
                                                    fontFamily: "var(--font-barlow)",
                                                    fontWeight: 900,
                                                    textTransform: "uppercase"
                                                },
                                                children: "Technical Specification"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full",
                                                style: {
                                                    borderCollapse: "collapse"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: product.specs.map((spec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                borderBottom: "1px solid rgba(229,226,225,0.1)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "label-caps text-xrt-steel/50 py-3.5 pr-4 align-top",
                                                                    style: {
                                                                        width: "45%"
                                                                    },
                                                                    children: spec.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "py-3.5 text-white",
                                                                    style: {
                                                                        fontFamily: "var(--font-archivo)",
                                                                        fontSize: "15px",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: spec.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, spec.label, true, {
                                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl sm:text-3xl text-white mb-6",
                                                style: {
                                                    fontFamily: "var(--font-barlow)",
                                                    fontWeight: 900,
                                                    textTransform: "uppercase"
                                                },
                                                children: "Certifications & Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-10",
                                                children: product.certifications.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "label-caps text-xrt-steel/70 border border-xrt-steel/20 px-3 py-2",
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-xrt-steel/15 p-6 sm:p-7 bg-xrt-near-black/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "label-caps text-xrt-crimson mb-3",
                                                        children: "Responsible Desk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xl font-black text-white mb-1",
                                                        style: {
                                                            fontFamily: "var(--font-barlow)"
                                                        },
                                                        children: [
                                                            product.hub.join(" / "),
                                                            " Hub"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${product.deskEmail}`,
                                                        className: "text-sm text-xrt-steel/60 hover:text-xrt-steel transition-colors",
                                                        style: {
                                                            fontFamily: "var(--font-archivo)"
                                                        },
                                                        children: product.deskEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "label-caps text-xrt-steel/30 mt-4",
                                                        children: "Response SLA: <4 Business Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[820px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-body",
                            dangerouslySetInnerHTML: {
                                __html: renderBody(product.longDescription)
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-xrt-steel/15",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:text-3xl text-white mb-8",
                                    style: {
                                        fontFamily: "var(--font-barlow)",
                                        fontWeight: 900,
                                        textTransform: "uppercase"
                                    },
                                    children: "Related Products"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-xrt-steel/15",
                                    children: related.map((rp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${rp.slug}`,
                                            className: `block p-6 sm:p-7 hover:bg-xrt-near-black/60 transition-colors border-b border-xrt-steel/15 sm:border-b-0 ${i < related.length - 1 ? "sm:border-r border-xrt-steel/15" : ""} last:border-b-0`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "label-caps text-xrt-crimson mb-2",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$productsData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_META"][rp.category].code
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl text-white leading-tight mb-2",
                                                    style: {
                                                        fontFamily: "var(--font-barlow)",
                                                        fontWeight: 900,
                                                        textTransform: "uppercase"
                                                    },
                                                    children: rp.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-xrt-steel/40",
                                                    style: {
                                                        fontFamily: "var(--font-archivo)"
                                                    },
                                                    children: rp.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, rp.slug, true, {
                                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(marketing)/products/[slug]/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/(marketing)/products/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(marketing)/products/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03moc~c._.js.map