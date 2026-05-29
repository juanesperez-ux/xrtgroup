"use client";

/**
 * XRT Group — Animated commodity & service icons
 * Stroke-draw animation triggered on scroll (IntersectionObserver).
 * Hover transitions steel → crimson/gold.
 * All icons: strokeLinecap="square" to match the brutalist 0-radius brand.
 * Respects prefers-reduced-motion via CSS in globals.css.
 */

import { useEffect, useRef, useState } from "react";

/* ─── Shared hook: fires once when element enters viewport ──── */
function useInView(threshold = 0.25) {
  const ref = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── Helper: stroke-draw style for a path segment ─────────── */
function draw(inView: boolean, delay = 0, len = 200) {
  return {
    strokeDasharray: len,
    strokeDashoffset: inView ? 0 : len,
    transition: `stroke-dashoffset 0.9s ease-in-out ${delay}s`,
  };
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT ICONS
═══════════════════════════════════════════════════════════════ */

/* ─── ENE — Energy Commodities ─────────────────────────────── */
/* Oil barrel with flame */
export function EnergyIcon({
  size = 56,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Barrel body */}
      <rect x="12" y="18" width="40" height="36" style={draw(inView, 0, 152)} />
      {/* Barrel hoops */}
      <line x1="8"  y1="26" x2="56" y2="26" style={draw(inView, 0.15, 52)} />
      <line x1="8"  y1="46" x2="56" y2="46" style={draw(inView, 0.2,  52)} />
      {/* Staves */}
      <line x1="24" y1="18" x2="24" y2="54" style={draw(inView, 0.3, 40)} />
      <line x1="40" y1="18" x2="40" y2="54" style={draw(inView, 0.35, 40)} />
      {/* Top cap */}
      <line x1="8"  y1="18" x2="56" y2="18" style={draw(inView, 0.1, 52)} />
      {/* Flame */}
      <path
        d="M32 6 C30 10 26 12 28 16 C30 20 34 18 32 14 C34 18 38 16 36 10 C38 14 40 10 36 6 C36 10 32 6 32 6Z"
        style={{ ...draw(inView, 0.45, 100), fill: hovered ? activeColor : "none" }}
      />
    </svg>
  );
}

/* ─── AGR — Grains & Agricultural ──────────────────────────── */
/* Wheat stalk with grain nodes */
export function GrainsIcon({
  size = 56,
  color = "#e5e2e1",
  activeColor = "#c8973a",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Central stalk */}
      <line x1="32" y1="60" x2="32" y2="8" style={draw(inView, 0, 54)} />
      {/* Left grain ovals */}
      <ellipse cx="22" cy="20" rx="7" ry="4" transform="rotate(-35 22 20)"
        style={{ ...draw(inView, 0.2, 46), strokeDasharray: 46 }} />
      <ellipse cx="22" cy="32" rx="7" ry="4" transform="rotate(-35 22 32)"
        style={{ ...draw(inView, 0.3, 46), strokeDasharray: 46 }} />
      <ellipse cx="22" cy="44" rx="7" ry="4" transform="rotate(-35 22 44)"
        style={{ ...draw(inView, 0.4, 46), strokeDasharray: 46 }} />
      {/* Right grain ovals */}
      <ellipse cx="42" cy="20" rx="7" ry="4" transform="rotate(35 42 20)"
        style={{ ...draw(inView, 0.2, 46), strokeDasharray: 46 }} />
      <ellipse cx="42" cy="32" rx="7" ry="4" transform="rotate(35 42 32)"
        style={{ ...draw(inView, 0.3, 46), strokeDasharray: 46 }} />
      <ellipse cx="42" cy="44" rx="7" ry="4" transform="rotate(35 42 44)"
        style={{ ...draw(inView, 0.4, 46), strokeDasharray: 46 }} />
      {/* Connecting stems */}
      <line x1="32" y1="20" x2="22" y2="20" style={draw(inView, 0.2, 14)} />
      <line x1="32" y1="32" x2="22" y2="32" style={draw(inView, 0.3, 14)} />
      <line x1="32" y1="44" x2="22" y2="44" style={draw(inView, 0.4, 14)} />
      <line x1="32" y1="20" x2="42" y2="20" style={draw(inView, 0.2, 14)} />
      <line x1="32" y1="32" x2="42" y2="32" style={draw(inView, 0.3, 14)} />
      <line x1="32" y1="44" x2="42" y2="44" style={draw(inView, 0.4, 14)} />
    </svg>
  );
}

/* ─── OIL — Edible & Industrial Oils ───────────────────────── */
/* Drop silhouette with internal liquid line */
export function OilsIcon({
  size = 56,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Drop outline — pointed top, rounded base */}
      <path
        d="M32 6 C32 6 12 30 12 44 C12 54 21 60 32 60 C43 60 52 54 52 44 C52 30 32 6 32 6Z"
        style={draw(inView, 0, 210)}
      />
      {/* Liquid surface lines */}
      <line x1="20" y1="44" x2="44" y2="44" style={draw(inView, 0.45, 28)} />
      <line x1="17" y1="50" x2="47" y2="50" style={draw(inView, 0.5,  34)} />
      {/* Shine highlight */}
      <path d="M22 28 C22 22 28 20 28 24" strokeWidth="1"
        style={{ ...draw(inView, 0.6, 24), strokeDasharray: 24 }} />
    </svg>
  );
}

/* ─── LOG — Logistics Infrastructure ───────────────────────── */
/* Shipping container on wheels with directional arrow */
export function LogisticsIcon({
  size = 56,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Container body */}
      <rect x="6" y="20" width="52" height="28" style={draw(inView, 0, 164)} />
      {/* Vertical ribs */}
      <line x1="19" y1="20" x2="19" y2="48" style={draw(inView, 0.2, 30)} />
      <line x1="32" y1="20" x2="32" y2="48" style={draw(inView, 0.25, 30)} />
      <line x1="45" y1="20" x2="45" y2="48" style={draw(inView, 0.3, 30)} />
      {/* Door handle */}
      <line x1="30" y1="34" x2="34" y2="34" style={draw(inView, 0.4, 6)} />
      {/* Chassis beam */}
      <line x1="6" y1="48" x2="58" y2="48" style={draw(inView, 0.35, 56)} />
      {/* Wheels */}
      <circle cx="16" cy="54" r="5"
        style={{ ...draw(inView, 0.5, 34), strokeDasharray: 34 }} />
      <circle cx="48" cy="54" r="5"
        style={{ ...draw(inView, 0.5, 34), strokeDasharray: 34 }} />
      {/* Direction arrow */}
      <path d="M14 14 H50 L44 9 M50 14 L44 19"
        style={{ ...draw(inView, 0.6, 80), strokeDasharray: 80 }} />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICE ICONS
═══════════════════════════════════════════════════════════════ */

/* ─── ARP — Automated Routing Protocol ──────────────────────── */
/* Network graph: 5 square nodes + connecting edges */
export function RoutingIcon({
  size = 52,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Nodes */}
      <rect x="28" y="4"  width="8" height="8" style={draw(inView, 0, 32)} />
      <rect x="4"  y="28" width="8" height="8" style={draw(inView, 0.1, 32)} />
      <rect x="52" y="28" width="8" height="8" style={draw(inView, 0.1, 32)} />
      <rect x="14" y="50" width="8" height="8" style={draw(inView, 0.2, 32)} />
      <rect x="42" y="50" width="8" height="8" style={draw(inView, 0.2, 32)} />
      {/* Edges */}
      <line x1="32" y1="12" x2="8"  y2="28" style={draw(inView, 0.3, 30)} />
      <line x1="32" y1="12" x2="56" y2="28" style={draw(inView, 0.35, 30)} />
      <line x1="8"  y1="36" x2="18" y2="50" style={draw(inView, 0.4, 20)} />
      <line x1="56" y1="36" x2="46" y2="50" style={draw(inView, 0.4, 20)} />
      <line x1="22" y1="54" x2="42" y2="54" style={draw(inView, 0.5, 22)} />
    </svg>
  );
}

/* ─── RMM — Risk Mitigation Matrix ─────────────────────────── */
/* Shield with checkmark */
export function RiskIcon({
  size = 52,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Shield */}
      <path
        d="M32 4 L58 14 L58 34 C58 48 46 58 32 62 C18 58 6 48 6 34 L6 14 Z"
        style={draw(inView, 0, 240)}
      />
      {/* Checkmark */}
      <polyline
        points="20,32 28,42 44,22"
        style={{ ...draw(inView, 0.55, 64), strokeDasharray: 64 }}
      />
    </svg>
  );
}

/* ─── CCP — Customs Clearance Pipeline ──────────────────────── */
/* Document stack + flow arrow */
export function CustomsIcon({
  size = 52,
  color = "#e5e2e1",
  activeColor = "#c8973a",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Back doc */}
      <rect x="18" y="8" width="28" height="36" style={draw(inView, 0, 130)} />
      {/* Front doc (offset) */}
      <rect x="10" y="14" width="28" height="36" style={draw(inView, 0.15, 130)} />
      {/* Text lines on front doc */}
      <line x1="16" y1="26" x2="30" y2="26" style={draw(inView, 0.3, 16)} />
      <line x1="16" y1="32" x2="30" y2="32" style={draw(inView, 0.35, 16)} />
      <line x1="16" y1="38" x2="24" y2="38" style={draw(inView, 0.4, 10)} />
      {/* Pipeline flow arrow */}
      <line x1="42" y1="34" x2="60" y2="34" style={draw(inView, 0.5, 20)} />
      <polyline points="54,28 60,34 54,40"
        style={{ ...draw(inView, 0.55, 24), strokeDasharray: 24 }} />
    </svg>
  );
}

/* ─── CSE — Commodity Sourcing Engine ───────────────────────── */
/* Radar / sonar sweep circle with grid lines */
export function SourcingIcon({
  size = 52,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Outer ring */}
      <circle cx="32" cy="32" r="26"
        style={{ ...draw(inView, 0, 166), strokeDasharray: 166 }} />
      {/* Mid ring */}
      <circle cx="32" cy="32" r="16"
        style={{ ...draw(inView, 0.2, 102), strokeDasharray: 102 }} />
      {/* Cross hairs */}
      <line x1="32" y1="4"  x2="32" y2="60" style={draw(inView, 0.35, 58)} />
      <line x1="4"  y1="32" x2="60" y2="32" style={draw(inView, 0.35, 58)} />
      {/* Sweep line */}
      <line x1="32" y1="32" x2="54" y2="14" style={draw(inView, 0.5, 32)} />
      {/* Center dot */}
      <circle cx="32" cy="32" r="2"
        style={{ ...draw(inView, 0.55, 14), strokeDasharray: 14 }}
        fill={hovered ? activeColor : "none"} />
    </svg>
  );
}

/* ─── STF — Structured Trade Finance ────────────────────────── */
/* Neoclassical bank columns */
export function TradeFinanceIcon({
  size = 52,
  color = "#e5e2e1",
  activeColor = "#c8973a",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Pediment */}
      <polyline points="6,22 32,6 58,22"
        style={{ ...draw(inView, 0, 72), strokeDasharray: 72 }} />
      {/* Columns */}
      <line x1="12" y1="22" x2="12" y2="54" style={draw(inView, 0.25, 34)} />
      <line x1="22" y1="22" x2="22" y2="54" style={draw(inView, 0.3,  34)} />
      <line x1="32" y1="22" x2="32" y2="54" style={draw(inView, 0.35, 34)} />
      <line x1="42" y1="22" x2="42" y2="54" style={draw(inView, 0.4,  34)} />
      <line x1="52" y1="22" x2="52" y2="54" style={draw(inView, 0.45, 34)} />
      {/* Steps */}
      <line x1="6"  y1="54" x2="58" y2="54" style={draw(inView, 0.5, 56)} />
      <line x1="4"  y1="58" x2="60" y2="58" style={draw(inView, 0.55, 60)} />
    </svg>
  );
}

/* ─── QAI — Quality Assurance & Inspection ─────────────────── */
/* Magnifier with crosshair */
export function QAIcon({
  size = 52,
  color = "#e5e2e1",
  activeColor = "#c8111f",
}: {
  size?: number;
  color?: string;
  activeColor?: string;
}) {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState(false);
  const c = hovered ? activeColor : color;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={c}
      strokeWidth="1.5"
      strokeLinecap="square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "default", transition: "stroke 300ms ease", display: "block" }}
    >
      {/* Lens */}
      <circle cx="26" cy="26" r="18"
        style={{ ...draw(inView, 0, 114), strokeDasharray: 114 }} />
      {/* Crosshair inside lens */}
      <line x1="26" y1="12" x2="26" y2="40" style={draw(inView, 0.35, 30)} />
      <line x1="12" y1="26" x2="40" y2="26" style={draw(inView, 0.4,  30)} />
      {/* Handle */}
      <line x1="39" y1="39" x2="58" y2="58" style={draw(inView, 0.5, 28)} />
      <line x1="54" y1="58" x2="62" y2="58" style={draw(inView, 0.6, 10)} />
    </svg>
  );
}

/* ─── Icon map helpers ────────────────────────────────────────── */

export const PRODUCT_ICONS = {
  ENE: EnergyIcon,
  AGR: GrainsIcon,
  OIL: OilsIcon,
  LOG: LogisticsIcon,
} as const;

export const SERVICE_ICONS = {
  ARP: RoutingIcon,
  RMM: RiskIcon,
  CCP: CustomsIcon,
  CSE: SourcingIcon,
  STF: TradeFinanceIcon,
  QAI: QAIcon,
} as const;
