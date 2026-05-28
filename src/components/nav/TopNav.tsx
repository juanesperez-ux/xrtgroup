"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import XRTLogo from "@/components/ui/XRTLogo";

const navLinks = [
  { href: "/services",  label: "Services" },
  { href: "/products",  label: "Products" },
  { href: "/about",     label: "About" },
  { href: "/blog",      label: "Intelligence" },
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
            <XRTLogo variant="header" />
          </Link>

          {/* Desktop nav links — hidden below lg */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
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
              );
            })}
          </div>

          {/* Right side: CTA (desktop) + hamburger (mobile) */}
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
          className="fixed inset-0 bg-xrt-black z-40 flex flex-col lg:hidden"
          style={{ top: "56px" }}
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
