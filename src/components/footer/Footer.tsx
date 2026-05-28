import Link from "next/link";

const hubs = [
  { code: "HOU", city: "Houston", country: "USA", tz: "UTC-6" },
  { code: "RTM", city: "Rotterdam", country: "NL", tz: "UTC+1" },
  { code: "SGP", city: "Singapore", country: "SGP", tz: "UTC+8" },
];

const footerLinks = [
  {
    group: "SERVICES",
    links: [
      { label: "Automated Routing", href: "/services#arp" },
      { label: "Risk Mitigation", href: "/services#rmm" },
      { label: "Customs Pipeline", href: "/services#ccp" },
      { label: "Trade Finance", href: "/services#stf" },
      { label: "QA & Inspection", href: "/services#qai" },
    ],
  },
  {
    group: "PRODUCTS",
    links: [
      { label: "Energy", href: "/products#energy" },
      { label: "Grains & Agro", href: "/products#grains" },
      { label: "Oils & Fats", href: "/products#oils" },
      { label: "Logistics", href: "/products#logistics" },
    ],
  },
  {
    group: "COMPANY",
    links: [
      { label: "About XRT", href: "/about" },
      { label: "Compliance", href: "/about#compliance" },
      { label: "Intelligence Hub", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-xrt-black text-xrt-steel border-t border-xrt-steel/20">
      {/* Hub status strip */}
      <div className="border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-4 flex items-center gap-12">
          <span className="label-caps text-xrt-steel/50">OPERATIONAL HUBS</span>
          {hubs.map((hub) => (
            <div key={hub.code} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-xrt-positive rounded-full" />
              <span className="label-caps text-xrt-steel/70">
                {hub.code} — {hub.city}, {hub.country}
              </span>
              <span className="label-caps text-xrt-steel/30">{hub.tz}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-xrt-positive rounded-full animate-pulse" />
            <span className="label-caps text-xrt-steel/50">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-12 py-16 grid grid-cols-12 gap-8">
        {/* Brand column */}
        <div className="col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 bg-xrt-crimson flex-shrink-0" />
            <span
              className="text-2xl font-black text-white uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", letterSpacing: "-0.03em" }}
            >
              XRT Group
            </span>
          </div>
          <p className="text-sm text-xrt-steel/60 leading-relaxed mb-8" style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
            Next-generation Strategic Procurement & Commodity Trading infrastructure. Sourcing without secrets. Logistics without friction.
          </p>
          <div className="space-y-2">
            <div className="label-caps text-xrt-steel/40">COMPLIANCE</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["FATF AML", "OFAC", "C-TPAT", "AEO", "ISO 9001", "GAFTA"].map((cert) => (
                <span
                  key={cert}
                  className="label-caps text-xrt-steel/60 border border-xrt-steel/20 px-2 py-1"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        {footerLinks.map((group) => (
          <div key={group.group} className="col-span-2">
            <div className="label-caps text-xrt-steel/40 mb-4">{group.group}</div>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-xrt-steel/60 hover:text-xrt-crimson transition-colors duration-150"
                    style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div className="col-span-2">
          <div className="label-caps text-xrt-steel/40 mb-4">CONTACT</div>
          <ul className="space-y-3">
            {hubs.map((hub) => (
              <li key={hub.code} className="text-sm text-xrt-steel/60" style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                <span className="label-caps text-xrt-steel/40 block mb-0.5">{hub.code}</span>
                {hub.city}, {hub.country}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-5 flex items-center justify-between">
          <span className="label-caps text-xrt-steel/30">
            © {new Date().getFullYear()} XRT GROUP LLC. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Trade", "AML Policy", "OFAC Disclosure"].map((item) => (
              <Link
                key={item}
                href="#"
                className="label-caps text-xrt-steel/30 hover:text-xrt-steel/60 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
