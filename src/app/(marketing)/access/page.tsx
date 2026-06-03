import React from "react";
import Link from "next/link";
import XRTLogo from "@/components/ui/XRTLogo";

export const metadata = {
  title: "Access Portal",
  description: "XRT Group — Authorized Personnel Only",
};

export default function AccessPage() {
  return (
    <div className="relative min-h-[calc(100vh-9rem)] flex items-center justify-center bg-xrt-black overflow-hidden py-16">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,17,31,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,17,31,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="w-full max-w-[420px] p-6 relative z-10">
        <div className="flex justify-center mb-10">
          <Link href="/">
            <XRTLogo variant="footer" />
          </Link>
        </div>

        <div className="mb-8">
          <h1
            className="text-white uppercase leading-none tracking-wider mb-3"
            style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "32px", fontWeight: 900 }}
          >
            Access Portal
          </h1>
          <div className="w-8 h-0.5 bg-xrt-crimson mb-3" />
          <p className="text-[13px] text-white/45 tracking-wide" style={{ fontFamily: "var(--font-archivo)" }}>
            XRT Group — Authorized Personnel Only
          </p>
        </div>

        <form className="space-y-4" action="/access" method="POST">
          <div>
            <label htmlFor="log" className="block text-[10px] font-medium tracking-[0.12em] uppercase text-white/45 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              id="log"
              name="log"
              placeholder="juan@xrtgroup.com"
              autoComplete="username"
              required
              className="w-full p-3 bg-white/5 border border-white/10 text-white text-sm outline-none transition-colors focus:border-xrt-crimson focus:bg-[#C8111F]/5"
              style={{ fontFamily: "var(--font-archivo)" }}
            />
          </div>

          <div>
            <label htmlFor="pwd" className="block text-[10px] font-medium tracking-[0.12em] uppercase text-white/45 mb-1.5">
              Password
            </label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="••••••••••"
              autoComplete="current-password"
              required
              className="w-full p-3 bg-white/5 border border-white/10 text-white text-sm outline-none transition-colors focus:border-xrt-crimson focus:bg-[#C8111F]/5"
              style={{ fontFamily: "var(--font-archivo)" }}
            />
          </div>

          <div className="flex items-center gap-2 pt-2 pb-6">
            <input
              type="checkbox"
              id="rememberme"
              name="rememberme"
              value="forever"
              className="w-3.5 h-3.5 accent-xrt-crimson"
            />
            <label htmlFor="rememberme" className="text-xs text-white/45 cursor-pointer select-none">
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-xrt-crimson text-white uppercase tracking-[0.1em] hover:bg-xrt-crimson-dark transition-colors"
            style={{ fontFamily: "var(--font-barlow)", fontSize: "16px", fontWeight: 900 }}
          >
            Authenticate →
          </button>
        </form>

        <div className="mt-5 text-center">
          <Link
            href="/contact"
            className="text-xs text-white/35 no-underline tracking-wide hover:text-[#C8973A] transition-colors"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Forgot password? Contact XRT Support
          </Link>
        </div>

        <div className="mt-12 pt-5 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] text-white/20 tracking-wider uppercase">
            XRT Group © {new Date().getFullYear()}
          </span>
          <span className="text-[10px] text-white/20 tracking-wider uppercase">
            Secure Session
          </span>
        </div>
      </div>
    </div>
  );
}
