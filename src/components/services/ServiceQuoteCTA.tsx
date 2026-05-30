"use client";

import { useState } from "react";
import RFQDrawer from "@/components/rfq/RFQDrawer";

/**
 * Contextual quote CTA rendered at the foot of each service card.
 * Opens the RFQ drawer pre-filled with that service module.
 * Client island embedded inside the server-rendered services page.
 */
export default function ServiceQuoteCTA({ code }: { code: string }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"rfq" | "consult">("rfq");
  const id = code.toLowerCase();

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-6 sm:px-8 border-t border-xrt-steel bg-xrt-surface-low">
        <button
          onClick={() => { setMode("rfq"); setOpen(true); }}
          className="label-caps text-white bg-xrt-crimson px-6 py-3 hover:bg-xrt-crimson-dark transition-colors"
        >
          Request {code} Quote →
        </button>
        <button
          onClick={() => { setMode("consult"); setOpen(true); }}
          className="label-caps text-xrt-muted hover:text-xrt-black transition-colors text-left"
        >
          Schedule consultation →
        </button>
      </div>

      <RFQDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        prefilledServices={[id]}
        initialMode={mode}
      />
    </>
  );
}
