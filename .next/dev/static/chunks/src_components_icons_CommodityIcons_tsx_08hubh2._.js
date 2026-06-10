(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/icons/CommodityIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomsIcon",
    ()=>CustomsIcon,
    "EnergyIcon",
    ()=>EnergyIcon,
    "GrainsIcon",
    ()=>GrainsIcon,
    "LogisticsIcon",
    ()=>LogisticsIcon,
    "OilsIcon",
    ()=>OilsIcon,
    "PRODUCT_ICONS",
    ()=>PRODUCT_ICONS,
    "QAIcon",
    ()=>QAIcon,
    "RiskIcon",
    ()=>RiskIcon,
    "RoutingIcon",
    ()=>RoutingIcon,
    "SERVICE_ICONS",
    ()=>SERVICE_ICONS,
    "SourcingIcon",
    ()=>SourcingIcon,
    "TradeFinanceIcon",
    ()=>TradeFinanceIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * XRT Group — Animated commodity & service icons
 * Stroke-draw animation triggered on scroll (IntersectionObserver).
 * Hover transitions steel → crimson/gold.
 * All icons: strokeLinecap="square" to match the brutalist 0-radius brand.
 * Respects prefers-reduced-motion via CSS in globals.css.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
"use client";
;
/* ─── Shared hook: fires once when element enters viewport ──── */ function useInView(threshold = 0.25) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) setInView(true);
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], []);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
/* ─── Helper: stroke-draw style for a path segment ─────────── */ function draw(inView, delay = 0, len = 200) {
    return {
        strokeDasharray: len,
        strokeDashoffset: inView ? 0 : len,
        transition: `stroke-dashoffset 0.9s ease-in-out ${delay}s`
    };
}
function EnergyIcon({ size = 56, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s1();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        strokeLinejoin: "miter",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "12",
                y: "18",
                width: "40",
                height: "36",
                style: draw(inView, 0, 152)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "26",
                x2: "56",
                y2: "26",
                style: draw(inView, 0.15, 52)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "46",
                x2: "56",
                y2: "46",
                style: draw(inView, 0.2, 52)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "24",
                y1: "18",
                x2: "24",
                y2: "54",
                style: draw(inView, 0.3, 40)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "40",
                y1: "18",
                x2: "40",
                y2: "54",
                style: draw(inView, 0.35, 40)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "18",
                x2: "56",
                y2: "18",
                style: draw(inView, 0.1, 52)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 6 C30 10 26 12 28 16 C30 20 34 18 32 14 C34 18 38 16 36 10 C38 14 40 10 36 6 C36 10 32 6 32 6Z",
                style: {
                    ...draw(inView, 0.45, 100),
                    fill: hovered ? activeColor : "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s1(EnergyIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c = EnergyIcon;
function GrainsIcon({ size = 56, color = "#e5e2e1", activeColor = "#c8973a" }) {
    _s2();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "60",
                x2: "32",
                y2: "8",
                style: draw(inView, 0, 54)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "22",
                cy: "20",
                rx: "7",
                ry: "4",
                transform: "rotate(-35 22 20)",
                style: {
                    ...draw(inView, 0.2, 46),
                    strokeDasharray: 46
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "22",
                cy: "32",
                rx: "7",
                ry: "4",
                transform: "rotate(-35 22 32)",
                style: {
                    ...draw(inView, 0.3, 46),
                    strokeDasharray: 46
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "22",
                cy: "44",
                rx: "7",
                ry: "4",
                transform: "rotate(-35 22 44)",
                style: {
                    ...draw(inView, 0.4, 46),
                    strokeDasharray: 46
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "42",
                cy: "20",
                rx: "7",
                ry: "4",
                transform: "rotate(35 42 20)",
                style: {
                    ...draw(inView, 0.2, 46),
                    strokeDasharray: 46
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "42",
                cy: "32",
                rx: "7",
                ry: "4",
                transform: "rotate(35 42 32)",
                style: {
                    ...draw(inView, 0.3, 46),
                    strokeDasharray: 46
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "42",
                cy: "44",
                rx: "7",
                ry: "4",
                transform: "rotate(35 42 44)",
                style: {
                    ...draw(inView, 0.4, 46),
                    strokeDasharray: 46
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "20",
                x2: "22",
                y2: "20",
                style: draw(inView, 0.2, 14)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "32",
                x2: "22",
                y2: "32",
                style: draw(inView, 0.3, 14)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "44",
                x2: "22",
                y2: "44",
                style: draw(inView, 0.4, 14)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "20",
                x2: "42",
                y2: "20",
                style: draw(inView, 0.2, 14)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "32",
                x2: "42",
                y2: "32",
                style: draw(inView, 0.3, 14)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "44",
                x2: "42",
                y2: "44",
                style: draw(inView, 0.4, 14)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s2(GrainsIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c1 = GrainsIcon;
function OilsIcon({ size = 56, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s3();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 6 C32 6 12 30 12 44 C12 54 21 60 32 60 C43 60 52 54 52 44 C52 30 32 6 32 6Z",
                style: draw(inView, 0, 210)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "44",
                x2: "44",
                y2: "44",
                style: draw(inView, 0.45, 28)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17",
                y1: "50",
                x2: "47",
                y2: "50",
                style: draw(inView, 0.5, 34)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 28 C22 22 28 20 28 24",
                strokeWidth: "1",
                style: {
                    ...draw(inView, 0.6, 24),
                    strokeDasharray: 24
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s3(OilsIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c2 = OilsIcon;
function LogisticsIcon({ size = 56, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s4();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "20",
                width: "52",
                height: "28",
                style: draw(inView, 0, 164)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "19",
                y1: "20",
                x2: "19",
                y2: "48",
                style: draw(inView, 0.2, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "20",
                x2: "32",
                y2: "48",
                style: draw(inView, 0.25, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "45",
                y1: "20",
                x2: "45",
                y2: "48",
                style: draw(inView, 0.3, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "30",
                y1: "34",
                x2: "34",
                y2: "34",
                style: draw(inView, 0.4, 6)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "48",
                x2: "58",
                y2: "48",
                style: draw(inView, 0.35, 56)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "54",
                r: "5",
                style: {
                    ...draw(inView, 0.5, 34),
                    strokeDasharray: 34
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "54",
                r: "5",
                style: {
                    ...draw(inView, 0.5, 34),
                    strokeDasharray: 34
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 14 H50 L44 9 M50 14 L44 19",
                style: {
                    ...draw(inView, 0.6, 80),
                    strokeDasharray: 80
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}
_s4(LogisticsIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c3 = LogisticsIcon;
function RoutingIcon({ size = 52, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s5();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "28",
                y: "4",
                width: "8",
                height: "8",
                style: draw(inView, 0, 32)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "28",
                width: "8",
                height: "8",
                style: draw(inView, 0.1, 32)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "52",
                y: "28",
                width: "8",
                height: "8",
                style: draw(inView, 0.1, 32)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "50",
                width: "8",
                height: "8",
                style: draw(inView, 0.2, 32)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "42",
                y: "50",
                width: "8",
                height: "8",
                style: draw(inView, 0.2, 32)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "12",
                x2: "8",
                y2: "28",
                style: draw(inView, 0.3, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "12",
                x2: "56",
                y2: "28",
                style: draw(inView, 0.35, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "36",
                x2: "18",
                y2: "50",
                style: draw(inView, 0.4, 20)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "56",
                y1: "36",
                x2: "46",
                y2: "50",
                style: draw(inView, 0.4, 20)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "54",
                x2: "42",
                y2: "54",
                style: draw(inView, 0.5, 22)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_s5(RoutingIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c4 = RoutingIcon;
function RiskIcon({ size = 52, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s6();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 4 L58 14 L58 34 C58 48 46 58 32 62 C18 58 6 48 6 34 L6 14 Z",
                style: draw(inView, 0, 240)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20,32 28,42 44,22",
                style: {
                    ...draw(inView, 0.55, 64),
                    strokeDasharray: 64
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_s6(RiskIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c5 = RiskIcon;
function CustomsIcon({ size = 52, color = "#e5e2e1", activeColor = "#c8973a" }) {
    _s7();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "18",
                y: "8",
                width: "28",
                height: "36",
                style: draw(inView, 0, 130)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "14",
                width: "28",
                height: "36",
                style: draw(inView, 0.15, 130)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "26",
                x2: "30",
                y2: "26",
                style: draw(inView, 0.3, 16)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "32",
                x2: "30",
                y2: "32",
                style: draw(inView, 0.35, 16)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "38",
                x2: "24",
                y2: "38",
                style: draw(inView, 0.4, 10)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "42",
                y1: "34",
                x2: "60",
                y2: "34",
                style: draw(inView, 0.5, 20)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "54,28 60,34 54,40",
                style: {
                    ...draw(inView, 0.55, 24),
                    strokeDasharray: 24
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 351,
        columnNumber: 5
    }, this);
}
_s7(CustomsIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c6 = CustomsIcon;
function SourcingIcon({ size = 52, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s8();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "26",
                style: {
                    ...draw(inView, 0, 166),
                    strokeDasharray: 166
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "16",
                style: {
                    ...draw(inView, 0.2, 102),
                    strokeDasharray: 102
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "4",
                x2: "32",
                y2: "60",
                style: draw(inView, 0.35, 58)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4",
                y1: "32",
                x2: "60",
                y2: "32",
                style: draw(inView, 0.35, 58)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "32",
                x2: "54",
                y2: "14",
                style: draw(inView, 0.5, 32)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "2",
                style: {
                    ...draw(inView, 0.55, 14),
                    strokeDasharray: 14
                },
                fill: hovered ? activeColor : "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 396,
        columnNumber: 5
    }, this);
}
_s8(SourcingIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c7 = SourcingIcon;
function TradeFinanceIcon({ size = 52, color = "#e5e2e1", activeColor = "#c8973a" }) {
    _s9();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "6,22 32,6 58,22",
                style: {
                    ...draw(inView, 0, 72),
                    strokeDasharray: 72
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "22",
                x2: "12",
                y2: "54",
                style: draw(inView, 0.25, 34)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "22",
                x2: "22",
                y2: "54",
                style: draw(inView, 0.3, 34)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "22",
                x2: "32",
                y2: "54",
                style: draw(inView, 0.35, 34)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "42",
                y1: "22",
                x2: "42",
                y2: "54",
                style: draw(inView, 0.4, 34)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "52",
                y1: "22",
                x2: "52",
                y2: "54",
                style: draw(inView, 0.45, 34)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "54",
                x2: "58",
                y2: "54",
                style: draw(inView, 0.5, 56)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "4",
                y1: "58",
                x2: "60",
                y2: "58",
                style: draw(inView, 0.55, 60)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 444,
        columnNumber: 5
    }, this);
}
_s9(TradeFinanceIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c8 = TradeFinanceIcon;
function QAIcon({ size = 52, color = "#e5e2e1", activeColor = "#c8111f" }) {
    _s10();
    const { ref, inView } = useInView();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const c = hovered ? activeColor : color;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        stroke: c,
        strokeWidth: "1.5",
        strokeLinecap: "square",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            cursor: "default",
            transition: "stroke 300ms ease",
            display: "block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "26",
                cy: "26",
                r: "18",
                style: {
                    ...draw(inView, 0, 114),
                    strokeDasharray: 114
                }
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "26",
                y1: "12",
                x2: "26",
                y2: "40",
                style: draw(inView, 0.35, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "26",
                x2: "40",
                y2: "26",
                style: draw(inView, 0.4, 30)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "39",
                y1: "39",
                x2: "58",
                y2: "58",
                style: draw(inView, 0.5, 28)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "54",
                y1: "58",
                x2: "62",
                y2: "58",
                style: draw(inView, 0.6, 10)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/CommodityIcons.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/CommodityIcons.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
_s10(QAIcon, "ZDjkDvcssEBCpMMog7gTqR9Es/0=", false, function() {
    return [
        useInView
    ];
});
_c9 = QAIcon;
const PRODUCT_ICONS = {
    ENE: EnergyIcon,
    AGR: GrainsIcon,
    OIL: OilsIcon,
    LOG: LogisticsIcon
};
const SERVICE_ICONS = {
    ARP: RoutingIcon,
    RMM: RiskIcon,
    CCP: CustomsIcon,
    CSE: SourcingIcon,
    STF: TradeFinanceIcon,
    QAI: QAIcon
};
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "EnergyIcon");
__turbopack_context__.k.register(_c1, "GrainsIcon");
__turbopack_context__.k.register(_c2, "OilsIcon");
__turbopack_context__.k.register(_c3, "LogisticsIcon");
__turbopack_context__.k.register(_c4, "RoutingIcon");
__turbopack_context__.k.register(_c5, "RiskIcon");
__turbopack_context__.k.register(_c6, "CustomsIcon");
__turbopack_context__.k.register(_c7, "SourcingIcon");
__turbopack_context__.k.register(_c8, "TradeFinanceIcon");
__turbopack_context__.k.register(_c9, "QAIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_icons_CommodityIcons_tsx_08hubh2._.js.map