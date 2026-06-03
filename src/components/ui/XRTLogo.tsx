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
    viewBox="0 0 100 100"
    width={36}
    height={36}
    aria-hidden="true"
    style={{ display: "block", width: 36, height: 36, flexShrink: 0 }}
  >
    <polygon points="0,0 30,0 50,28.57 70,0 100,0 68.5,45 31.5,45" fill="#C8111F" />
    <polygon points="31.5,55 68.5,55 100,100 70,100 50,71.43 30,100 0,100" fill="#C8111F" />
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
        style={{ display: "inline-flex", width: 36, height: 36, flexShrink: 0, overflow: "hidden" }}
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
