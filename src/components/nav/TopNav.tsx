"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products", hasMegaMenu: true },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Intelligence" },
];

const productCategories = [
  {
    title: "Energy Commodities",
    items: [
      { label: "WTI Crude Oil", href: "/products/wti-crude-oil", cert: undefined },
      { label: "Brent Crude", href: "/products/brent-crude-oil", cert: undefined },
      { label: "ULSD Diesel", href: "/products/ulsd-diesel", cert: undefined },
      { label: "Jet Fuel A-1", href: "/products/jet-fuel-a1", cert: undefined },
      { label: "Fuel Oil 380 CST", href: "/products/fuel-oil-380", cert: undefined },
    ]
  },
  {
    title: "Grains & Agricultural",
    items: [
      { label: "SRW Wheat", href: "/products/srw-wheat", cert: undefined },
      { label: "Yellow Corn #2", href: "/products/yellow-corn-no2", cert: undefined },
      { label: "Soybeans #1", href: "/products/soybeans-no1", cert: undefined },
      { label: "Malting Barley", href: "/products/malting-barley", cert: undefined },
    ]
  },
  {
    title: "Edible & Industrial Oils",
    items: [
      { label: "Crude Palm Oil", href: "/products/crude-palm-oil", cert: undefined },
      { label: "RBD Palm Olein", href: "/products/rbd-palm-olein", cert: undefined },
      { label: "Soybean Oil", href: "/products/soybean-oil", cert: undefined },
      { label: "Sunflower Oil", href: "/products/sunflower-oil", cert: undefined },
    ]
  },
  {
    title: "Proteins & Meat",
    items: [
      { label: "Beef USDA — Kosher", href: "/products/beef-usda-kosher", cert: "Kosher" },
      { label: "Beef USDA — Halal", href: "/products/beef-usda-halal", cert: "Halal" },
    ]
  }
];

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="bg-xrt-off-white border-b border-xrt-steel sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/xrt-holdings-logo.svg"
              alt="XRT Group logo"
              width={200}
              height={40}
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop nav links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");

              if (link.hasMegaMenu) {
                return (
                  <div key={link.href} className="xrt-nav-menu-container xrt-nav-item-products h-14 sm:h-16 flex items-center">
                    <Link
                      href={link.href}
                      className="label-caps transition-colors duration-150"
                      style={{
                        color: active ? "#c8111f" : "#1c1b1b",
                        borderBottom: active ? "2px solid #c8111f" : "2px solid transparent",
                        paddingBottom: "2px",
                      }}
                    >
                      {link.label}
                    </Link>
                    <div className="xrt-mega-menu">
                      {productCategories.map((cat, i) => (
                        <div key={i}>
                          <span className="mega-col-title">{cat.title}</span>
                          <ul className="space-y-1">
                            {cat.items.map((item, j) => (
                              <li key={j}>
                                <Link
                                  href={item.href}
                                  className="mega-item"
                                  data-cert={item.cert}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.href} className="h-14 sm:h-16 flex items-center">
                  <Link
                    href={link.href}
                    className="label-caps transition-colors duration-150"
                    style={{
                      color: active ? "#c8111f" : "#1c1b1b",
                      borderBottom: active ? "2px solid #c8111f" : "2px solid transparent",
                      paddingBottom: "2px",
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right side: CTA + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:block label-caps bg-xrt-crimson text-white px-6 py-3 hover:bg-xrt-crimson-dark transition-colors flex-shrink-0"
            >
              Request Quote
            </Link>

            {/* Hamburger button — visible below lg */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] flex-shrink-0"
            >
              <span
                className="block w-6 h-[2px] bg-xrt-black transition-all duration-200"
                style={{
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-6 h-[2px] bg-xrt-black transition-all duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block w-6 h-[2px] bg-xrt-black transition-all duration-200"
                style={{
                  transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-xrt-black z-40 flex flex-col lg:hidden top-14 sm:top-16"
        >
          {/* Nav links */}
          <div className="flex-1 flex flex-col border-t border-xrt-steel/20">
            {navLinks.map((link, i) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-6 py-6 border-b border-xrt-steel/10 transition-colors ${active ? "text-xrt-crimson" : "text-xrt-steel hover:text-white"}`}
                >
                  <span
                    className="font-black uppercase"
                    style={{
                      fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                      fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {link.label}
                  </span>
                  <span className="label-caps text-xrt-steel/30">0{i + 1}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA at bottom */}
          <div className="p-6 border-t border-xrt-steel/20">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="label-caps bg-xrt-crimson text-white block text-center py-5 hover:bg-xrt-crimson-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
