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

      {/* Hub status strip — horizontally scrollable on mobile */}
      <div className="border-b border-xrt-steel/20 overflow-x-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center gap-6 sm:gap-10 min-w-max lg:min-w-0">
          <span className="label-caps text-xrt-steel/50 flex-shrink-0">OPERATIONAL HUBS</span>
          {hubs.map((hub) => (
            <div key={hub.code} className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-1.5 h-1.5 bg-xrt-positive flex-shrink-0" />
              <span className="label-caps text-xrt-steel/70">{hub.code} — {hub.city}, {hub.country}</span>
              <span className="label-caps text-xrt-steel/30">{hub.tz}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 flex-shrink-0 lg:ml-auto">
            <div className="w-1.5 h-1.5 bg-xrt-positive animate-pulse flex-shrink-0" />
            <span className="label-caps text-xrt-steel/50">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="mb-6">
              <img
                src="/xrt-holdings-logo-white.svg"
                alt="XRT Group logo white"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-xrt-steel/60 leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
              Next-generation Strategic Procurement & Commodity Trading infrastructure.
              Sourcing without secrets. Logistics without friction.
            </p>
            <div className="space-y-2">
              <div className="label-caps text-xrt-steel/40">COMPLIANCE</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {["FATF AML", "OFAC", "C-TPAT", "AEO", "ISO 9001", "GAFTA"].map((cert) => (
                  <span key={cert} className="label-caps text-xrt-steel/60 border border-xrt-steel/20 px-2 py-1">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns — 3 groups */}
          {footerLinks.map((group) => (
            <div key={group.group} className="lg:col-span-2">
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
          <div className="lg:col-span-2">
            <div className="label-caps text-xrt-steel/40 mb-4">CONTACT</div>
            <ul className="space-y-3">
              {hubs.map((hub) => (
                <li key={hub.code} className="text-sm text-xrt-steel/60"
                  style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                  <span className="label-caps text-xrt-steel/40 block mb-0.5">{hub.code}</span>
                  {hub.city}, {hub.country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="label-caps text-xrt-steel/30">
            © {new Date().getFullYear()} XRT GROUP LLC. ALL RIGHTS RESERVED.
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            {[
              { label: "Privacy Policy", href: "/about#compliance" },
              { label: "Terms of Trade", href: "/about#compliance" },
              { label: "AML Policy", href: "/about#compliance" },
              { label: "OFAC Disclosure", href: "/about#compliance" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="label-caps text-xrt-steel/30 hover:text-xrt-steel/60 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
