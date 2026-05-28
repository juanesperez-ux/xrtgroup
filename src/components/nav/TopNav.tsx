"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Intelligence" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-xrt-off-white border-b border-xrt-steel sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-xrt-crimson flex-shrink-0" />
          <span
            className="text-2xl font-black tracking-tight text-xrt-black uppercase"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", letterSpacing: "-0.03em" }}
          >
            XRT Group
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className="label-caps transition-colors duration-150"
                style={{
                  color: isActive ? "#c8111f" : "#1c1b1b",
                  borderBottom: isActive ? "2px solid #c8111f" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="label-caps bg-xrt-crimson text-white px-6 py-3 transition-colors duration-150 hover:bg-xrt-crimson-dark flex-shrink-0"
        >
          Request Quote
        </Link>
      </div>
    </nav>
  );
}
