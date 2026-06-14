"use client";

import { useState } from "react";
import Turnstile, { isTurnstileEnabled } from "@/components/ui/Turnstile";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [token, setToken] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!email.trim() || !email.includes("@")) {
            setErrorMsg("Please enter a valid business email address.");
            setStatus("error");
            return;
        }
        setStatus("sending");
        setErrorMsg("");
        try {
            const res = await fetch("/api/rfq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    entity: "Newsletter Subscriber",
                    regNumber: "N/A",
                    contactName: "Newsletter Subscriber",
                    email,
                    phone: "N/A",
                    commodity: "Market Intelligence Subscription",
                    volume: "0",
                    volumeUnit: "N/A",
                    origin: "N/A",
                    destination: "N/A",
                    deliveryStart: new Date().toISOString().split("T")[0],
                    deliveryEnd: new Date().toISOString().split("T")[0],
                    incoterms: "N/A",
                    financeRequired: "no",
                    inspectionRequired: "no",
                    notes: "Subscription request from Blog Intelligence Hub.",
                    source: "Blog Subscribe Form",
                    turnstileToken: token,
                }),
            });
            const data = await res.json();
            if (!data.ok) throw new Error(data.error || "Subscription failed");
            setStatus("sent");
        } catch (err: unknown) {
            setErrorMsg(err instanceof Error ? err.message : "Unable to subscribe. Please try again.");
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <section className="bg-xrt-surface border-t border-xrt-steel">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                        <div className="sm:col-span-6">
                            <div className="label-caps text-xrt-muted mb-1">MARKET INTELLIGENCE SUBSCRIPTION</div>
                            <div className="text-2xl sm:text-3xl font-black text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
                                Subscription received.
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <p className="text-sm text-xrt-muted" style={{ fontFamily: "var(--font-archivo)" }}>
                                Thank you. Our intelligence desk will add {email} to the weekly dispatch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-xrt-surface border-t border-xrt-steel">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
                <form onSubmit={handleSubmit}>
                    {errorMsg && (
                        <div className="mb-4 bg-xrt-crimson/10 border border-xrt-crimson/30 p-3" role="alert">
                            <p className="label-caps text-xrt-crimson">{errorMsg}</p>
                        </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                        <div className="sm:col-span-6">
                            <div className="label-caps text-xrt-muted mb-1">MARKET INTELLIGENCE SUBSCRIPTION</div>
                            <div className="text-2xl sm:text-3xl font-black text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
                                Receive desk dispatches directly.
                            </div>
                        </div>
                        <div className="sm:col-span-6 flex gap-0">
                            <input
                                type="email"
                                name="email"
                                placeholder="your@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 border border-xrt-steel border-r-0 px-4 sm:px-5 py-3 sm:py-4 text-sm bg-xrt-white focus:outline-none focus:border-xrt-black transition-colors min-w-0"
                                style={{ fontFamily: "var(--font-archivo)" }}
                            />
                            <button
                                type="submit"
                                disabled={status === "sending" || (isTurnstileEnabled && !token)}
                                className="label-caps bg-xrt-black text-white px-5 sm:px-8 py-3 sm:py-4 hover:bg-xrt-crimson transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Subscribing..." : "Subscribe"}
                            </button>
                        </div>
                    </div>
                    {isTurnstileEnabled && (
                        <div className="mt-4">
                            <Turnstile onVerify={setToken} onExpire={() => setToken("")} theme="light" />
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}