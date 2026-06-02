/** XRT Group Logo — two variants:
 *  variant="header"  → crimson mark + black "Group" text (for light backgrounds)
 *  variant="footer"  → crimson mark + white "Group" text (for dark backgrounds)
 */

type Props = {
  variant?: "header" | "footer";
  className?: string;
};

const XMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 95"
    width={36}
    height={34}
    aria-hidden="true"
    style={{ display: "block", width: 36, height: 34, flexShrink: 0 }}
  >
    <polygon points="3,3 41,3 50,42 3,42"  fill="#C8111F" />
    <polygon points="59,3 97,3 97,42 50,42" fill="#C8111F" />
    <polygon points="3,53 50,53 41,92 3,92"  fill="#C8111F" />
    <polygon points="50,53 97,53 97,92 59,92" fill="#C8111F" />
  </svg>
);

export default function XRTLogo({ variant = "header", className = "" }: Props) {
  const groupColor = variant === "footer" ? "#ffffff" : "#111111";

  return (
    <span
      className={`flex items-center gap-2 select-none ${className}`}
      aria-label="XRT Group"
    >
      {/* Mark */}
      <span
        className="flex-shrink-0"
        style={{ display: "inline-flex", width: 36, height: 34, flexShrink: 0, overflow: "hidden" }}
      >
        <XMark />
      </span>

      {/* Wordmark: "RT" in crimson, "Group" in header/footer color */}
      <span
        style={{
          fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "1.65rem",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "baseline",
          gap: "0.15em",
        }}
      >
        <span style={{ color: "#C8111F" }}>RT</span>
        <span style={{ color: groupColor }}>Group</span>
      </span>
    </span>
  );
}
