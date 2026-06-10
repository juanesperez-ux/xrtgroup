module.exports = [
"[project]/src/components/rfq/InlineRFQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InlineRFQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const BARLOW = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const ARCHIVO = "var(--font-archivo), 'Archivo Narrow', sans-serif";
function InlineRFQ({ product }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("rfq");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [refId, setRefId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        entity: "",
        contact: "",
        email: "",
        phone: "",
        volume: "",
        unit: product.minVolumeUnit,
        incoterm: product.incoterms[0],
        finance: "NO",
        inspection: "YES",
        notes: `Product: ${product.name} (${product.code})\nGrade: ${product.grade}\nBenchmark: ${product.benchmark}\nOrigin: ${product.origin}`
    });
    const update = (field, value)=>setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    const valid = form.entity && form.email && form.volume;
    async function handleSubmit() {
        if (!valid) return;
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/rfq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // Mapped to the existing /api/rfq handler field names
                    entity: form.entity,
                    contactName: form.contact,
                    email: form.email,
                    phone: form.phone,
                    commodity: product.name,
                    volume: form.volume,
                    volumeUnit: form.unit,
                    origin: product.origin,
                    destination: "",
                    incoterms: form.incoterm,
                    hub: product.hub.join(" / "),
                    financeRequired: form.finance,
                    inspectionRequired: form.inspection,
                    notes: form.notes,
                    // Context (surfaced by the route)
                    commodityCode: product.code,
                    source: `product-page:${product.slug}`,
                    deskEmail: product.deskEmail
                })
            });
            const data = await res.json();
            if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
            setRefId(data.refId || "");
            setMode("submitted");
        } catch  {
            setError("Submission failed. Email " + product.deskEmail + " directly.");
            setLoading(false);
        }
    }
    /* ── Submitted ── */ if (mode === "submitted") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: panel,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "40px 32px",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: "#c8111f",
                            fontSize: "30px",
                            fontFamily: BARLOW,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            marginBottom: "16px"
                        },
                        children: "RFQ Received"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "15px",
                            color: "#a8a5a0",
                            lineHeight: 1.65,
                            marginBottom: "20px",
                            fontFamily: ARCHIVO
                        },
                        children: [
                            "Your request for ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: "#f7f5f2"
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                lineNumber: 84,
                                columnNumber: 30
                            }, this),
                            " has been routed to the ",
                            product.hub[0],
                            " desk. Expect a preliminary indication within 4 business hours."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    refId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "12px",
                            color: "#555",
                            letterSpacing: "0.12em",
                            fontFamily: ARCHIVO
                        },
                        children: [
                            "REFERENCE: ",
                            refId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    /* ── Consultation ── */ if (mode === "consult") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: panel,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "22px 28px",
                        borderBottom: "1px solid #1e1e1e"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: "11px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "#c8973a",
                                marginBottom: "8px",
                                fontFamily: ARCHIVO
                            },
                            children: "Schedule Consultation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontFamily: BARLOW,
                                fontWeight: 900,
                                fontSize: "22px",
                                textTransform: "uppercase",
                                color: "#f7f5f2",
                                margin: 0
                            },
                            children: [
                                "Talk to the ",
                                product.hub[0],
                                " Desk"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "28px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "15px",
                                color: "#a8a5a0",
                                lineHeight: 1.65,
                                marginBottom: "24px",
                                fontFamily: ARCHIVO
                            },
                            children: [
                                "Book a 30-minute consultation with an XRT specialist for",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#f7f5f2"
                                    },
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                " procurement. No commitment required."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${product.deskEmail}?subject=Consultation Request — ${encodeURIComponent(product.name)}`,
                            style: {
                                ...primaryBtn,
                                background: "#c8973a",
                                color: "#111111",
                                display: "block",
                                textAlign: "center",
                                textDecoration: "none",
                                marginBottom: "14px"
                            },
                            children: "Request 30-Min Call →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode("rfq"),
                            style: ghostBtn,
                            children: "← Submit RFQ instead"
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    /* ── RFQ form ── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: panel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "22px 28px",
                    borderBottom: "1px solid #1e1e1e"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#c8111f",
                            marginBottom: "8px",
                            fontFamily: ARCHIVO
                        },
                        children: "Request for Quotation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: BARLOW,
                            fontWeight: 900,
                            fontSize: "22px",
                            textTransform: "uppercase",
                            color: "#f7f5f2",
                            margin: 0,
                            lineHeight: 1.1
                        },
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "13px",
                            color: "#777",
                            marginTop: "6px",
                            fontFamily: ARCHIVO
                        },
                        children: [
                            product.grade,
                            " · Min ",
                            product.minVolume,
                            " ",
                            product.minVolumeUnit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Legal Entity",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: input,
                            placeholder: "Company name",
                            value: form.entity,
                            onChange: (e)=>update("entity", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Contact Name",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: input,
                            placeholder: "Full name",
                            value: form.contact,
                            onChange: (e)=>update("contact", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Business Email",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            style: input,
                            type: "email",
                            placeholder: "name@company.com",
                            value: form.email,
                            onChange: (e)=>update("email", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "2fr 1fr",
                            gap: "8px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Volume",
                                required: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    style: input,
                                    type: "number",
                                    placeholder: `Min ${product.minVolume}`,
                                    value: form.volume,
                                    onChange: (e)=>update("volume", e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Unit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    style: input,
                                    value: form.unit,
                                    onChange: (e)=>update("unit", e.target.value),
                                    children: [
                                        "MT",
                                        "BBL",
                                        "GAL",
                                        "KL",
                                        "FCL",
                                        "DWT",
                                        "MMBTU"
                                    ].map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: u,
                                            children: u
                                        }, u, false, {
                                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                            lineNumber: 158,
                                            columnNumber: 77
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Preferred INCOTERMS",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            style: input,
                            value: form.incoterm,
                            onChange: (e)=>update("incoterm", e.target.value),
                            children: [
                                product.incoterms.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: t,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                        lineNumber: 165,
                                        columnNumber: 43
                                    }, this)),
                                [
                                    "FOB",
                                    "CIF",
                                    "CFR",
                                    "DAP",
                                    "DDP",
                                    "FCA"
                                ].filter((t)=>!product.incoterms.includes(t)).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: t,
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                        lineNumber: 166,
                                        columnNumber: 114
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Trade Finance Required?",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            value: form.finance,
                            onChange: (v)=>update("finance", v)
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Notes / Additional Specs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            style: {
                                ...input,
                                minHeight: "84px",
                                resize: "vertical"
                            },
                            value: form.notes,
                            onChange: (e)=>update("notes", e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "13px",
                            color: "#e01525",
                            fontFamily: ARCHIVO
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 178,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        disabled: loading || !valid,
                        style: {
                            ...primaryBtn,
                            background: valid ? "#c8111f" : "#2a2a2a",
                            color: valid ? "#f7f5f2" : "#555",
                            cursor: valid ? "pointer" : "not-allowed"
                        },
                        children: loading ? "Routing to desk..." : "Submit RFQ →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: "1px solid #1e1e1e",
                            paddingTop: "16px",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "12px",
                                    color: "#666",
                                    marginBottom: "8px",
                                    fontFamily: ARCHIVO
                                },
                                children: "Not ready to submit? Speak with our team first."
                            }, void 0, false, {
                                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMode("consult"),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    color: "#c8973a",
                                    fontFamily: ARCHIVO,
                                    fontSize: "13px",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    textDecoration: "underline"
                                },
                                children: "Schedule a consultation →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "11px",
                            color: "#555",
                            textAlign: "center",
                            lineHeight: 1.5,
                            fontFamily: ARCHIVO
                        },
                        children: "AML/KYC pre-screened · TLS encrypted · FATF compliant"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
/* ── Shared sub-components & styles ── */ function Field({ label, required, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    fontFamily: ARCHIVO,
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#a8a5a0",
                    display: "block",
                    marginBottom: "6px"
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#c8111f"
                        },
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                        lineNumber: 206,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
function Toggle({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: "8px"
        },
        children: [
            "YES",
            "NO"
        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(v),
                style: {
                    flex: 1,
                    padding: "10px",
                    fontFamily: ARCHIVO,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    background: value === v ? "#c8111f" : "transparent",
                    color: value === v ? "#f7f5f2" : "#888",
                    border: value === v ? "1px solid #c8111f" : "1px solid #333"
                },
                children: v
            }, v, false, {
                fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/rfq/InlineRFQ.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
const panel = {
    background: "#0d0d0d",
    border: "1px solid #222",
    fontFamily: ARCHIVO
};
const input = {
    width: "100%",
    background: "#161616",
    border: "1px solid #2a2a2a",
    color: "#f7f5f2",
    fontFamily: ARCHIVO,
    fontSize: "14px",
    padding: "10px 14px",
    outline: "none",
    boxSizing: "border-box"
};
const primaryBtn = {
    border: "none",
    padding: "14px 24px",
    fontFamily: BARLOW,
    fontWeight: 900,
    fontSize: "14px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    transition: "background 200ms ease"
};
const ghostBtn = {
    display: "block",
    width: "100%",
    background: "transparent",
    border: "1px solid #333",
    color: "#666",
    fontFamily: ARCHIVO,
    fontSize: "13px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "12px",
    cursor: "pointer"
};
}),
];

//# sourceMappingURL=src_components_rfq_InlineRFQ_tsx_093lgtg._.js.map