import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import { createClient } from "@/utils/supabase/server";
import { verifyTurnstile, getClientIp } from "@/lib/turnstile";

const RECIPIENT = "matt.w@xrtgroup.com";

function escapeHtml(text: string): string {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  const apos = "&" + "#039;";
  const map: Record<string, string> = {
    "&": amp,
    "<": lt,
    ">": gt,
    "\"": quot,
    "'": apos,
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch] || ch);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const captcha = await verifyTurnstile(body.turnstileToken, getClientIp(req.headers));
    if (!captcha.success) {
      return NextResponse.json(
        { ok: false, error: "Captcha verification failed. Please try again." },
        { status: 403 }
      );
    }

    const {
      entity, regNumber, contactName, email, phone,
      commodity, volume, volumeUnit,
      origin, destination, deliveryStart, deliveryEnd,
      incoterms, hub, financeRequired, inspectionRequired, notes,
      source, commodityCode, services, deskEmail,
    } = body;

    const e = (s: string | undefined | null) => escapeHtml(String(s ?? ""));

    const contextLines = [
      source && `  Submitted From:    ${source}`,
      commodityCode && `  Product Code:      ${commodityCode}`,
      services && `  Matched Services:  ${services}`,
      deskEmail && `  Routed To Desk:    ${deskEmail}`,
    ].filter(Boolean).join("\n");
    const contextBlock = contextLines ? `\nSUBMISSION CONTEXT\n${contextLines}\n` : "";

    const refId = `XRT-${Date.now().toString().slice(-6)}`;
    const textBody = `
NEW REQUEST FOR QUOTATION
Reference: ${refId}
Submitted: ${new Date().toUTCString()}
─────────────────────────────────────────

COUNTERPARTY IDENTIFICATION
  Legal Entity:      ${entity ?? ""}
  Registration/VAT:  ${regNumber ?? ""}
  Contact Name:      ${contactName ?? ""}
  Business Email:    ${email ?? ""}
  Direct Phone:      ${phone ?? ""}

COMMODITY SPECIFICATION
  Commodity Type:    ${commodity ?? ""}
  Volume:            ${volume ?? ""} ${volumeUnit ?? ""}

TRADE TERMS & LOGISTICS
  Loading Port / Origin:   ${origin ?? ""}
  Discharge / Destination: ${destination ?? ""}
  Delivery Window:         ${deliveryStart ?? ""} → ${deliveryEnd ?? ""}
  INCOTERMS:               ${incoterms ?? ""}
  Preferred Hub:           ${hub || "Not specified"}

ADDITIONAL REQUIREMENTS
  Trade Finance Required:  ${financeRequired?.toUpperCase() ?? ""}
  3rd-Party Inspection:    ${inspectionRequired?.toUpperCase() ?? ""}
${contextBlock}
TECHNICAL NOTES
${notes || "(none provided)"}

─────────────────────────────────────────
This RFQ was submitted via the XRT Group website.
Please respond to the sender at: ${email ?? ""}
`.trim();

    const noteHtml = notes ? e(notes).replace(/\n/g, "<br>") : "<em>None provided</em>";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: Arial, sans-serif; font-size: 14px; color: #1c1b1b; background: #fcf9f8; margin: 0; padding: 0; }
  .wrap { max-width: 680px; margin: 24px auto; border: 1px solid #e5e2e1; }
  .hdr { background: #111111; color: #fff; padding: 20px 28px; }
  .hdr h1 { margin: 0; font-size: 22px; letter-spacing: -0.02em; font-family: 'Helvetica Neue', Arial, sans-serif; }
  .hdr p { margin: 4px 0 0; font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 1px; text-transform: uppercase; }
  .ref { background: #c8111f; color: #fff; padding: 6px 28px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; }
  .body { padding: 24px 28px; }
  .section-title { font-size: 10px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; color: #916f6c; border-bottom: 1px solid #e5e2e1; padding-bottom: 6px; margin: 20px 0 12px; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 7px 0; font-size: 14px; vertical-align: top; }
  td:first-child { width: 200px; color: #5c3f3d; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; padding-right: 12px; }
  .notes { background: #f6f3f2; border: 1px solid #e5e2e1; padding: 12px 16px; font-size: 14px; line-height: 1.6; margin-top: 8px; }
  .ftr { background: #f0edec; border-top: 1px solid #e5e2e1; padding: 14px 28px; font-size: 11px; color: #916f6c; text-align: center; letter-spacing: 0.5px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1>XRT GROUP — NEW RFQ</h1>
    <p>Request for Quotation — ${new Date().toUTCString()}</p>
  </div>
  <div class="ref">Reference: ${refId}</div>
  <div class="body">

    <div class="section-title">Counterparty Identification</div>
    <table>
      <tr><td>Legal Entity</td><td>${e(entity)}</td></tr>
      <tr><td>Registration / VAT</td><td>${e(regNumber)}</td></tr>
      <tr><td>Contact Name</td><td>${e(contactName)}</td></tr>
      <tr><td>Business Email</td><td><a href="mailto:${e(email)}">${e(email)}</a></td></tr>
      <tr><td>Direct Phone</td><td>${e(phone)}</td></tr>
    </table>

    <div class="section-title">Commodity Specification</div>
    <table>
      <tr><td>Commodity Type</td><td>${e(commodity)}</td></tr>
      <tr><td>Volume Required</td><td>${e(volume)} ${e(volumeUnit)}</td></tr>
    </table>

    <div class="section-title">Trade Terms & Logistics</div>
    <table>
      <tr><td>Origin / Loading Port</td><td>${e(origin)}</td></tr>
      <tr><td>Destination / Discharge</td><td>${e(destination)}</td></tr>
      <tr><td>Delivery Window</td><td>${e(deliveryStart)} → ${e(deliveryEnd)}</td></tr>
      <tr><td>INCOTERMS</td><td>${e(incoterms)}</td></tr>
      <tr><td>Preferred Hub</td><td>${hub ? e(hub) : "Not specified"}</td></tr>
    </table>

    <div class="section-title">Additional Requirements</div>
    <table>
      <tr><td>Trade Finance</td><td>${e(financeRequired)}</td></tr>
      <tr><td>3rd-Party Inspection</td><td>${e(inspectionRequired)}</td></tr>
    </table>

    <div class="section-title">Technical Notes</div>
    <div class="notes">${noteHtml}</div>

  </div>
  <div class="ftr">XRT Group — Authority in Commodity Procurement · xrtgroup.com · Reply directly to ${e(email)}</div>
</div>
</body>
</html>
`.trim();

    // Persist to Supabase (best-effort)
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      try {
        const supabase = createClient(await cookies());
        const { error: dbError } = await supabase.from("rfq_submissions").insert({
          ref_id: refId,
          entity: entity ?? null,
          reg_number: regNumber ?? null,
          contact_name: contactName ?? null,
          email: email ?? null,
          phone: phone ?? null,
          commodity: commodity ?? null,
          commodity_code: commodityCode ?? null,
          volume: volume ?? null,
          volume_unit: volumeUnit ?? null,
          origin: origin ?? null,
          destination: destination ?? null,
          delivery_start: deliveryStart ?? null,
          delivery_end: deliveryEnd ?? null,
          incoterms: incoterms ?? null,
          hub: hub ?? null,
          finance_required: financeRequired ?? null,
          inspection_required: inspectionRequired ?? null,
          services: services ?? null,
          source: source ?? null,
          desk_email: deskEmail ?? null,
          notes: notes ?? null,
        });
        if (dbError) console.error("RFQ Supabase insert error (non-blocking):", dbError.message);
      } catch (dbErr) {
        console.error("RFQ Supabase insert failed (non-blocking):", dbErr);
      }
    }

    let transporter: nodemailer.Transporter;

    if (process.env.SMTP_HOST) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const safeSubject = `[XRT RFQ] ${commodity ?? ""} \u2014 ${volume ?? ""} ${volumeUnit ?? ""} \u2014 ${entity ?? ""} | ${refId}`;

    const info = await transporter.sendMail({
      from: "\"XRT Group RFQ\" <noreply@xrtgroup.com>",
      to: RECIPIENT,
      replyTo: email,
      subject: safeSubject,
      text: textBody,
      html: htmlBody,
    });

    if (!process.env.SMTP_HOST) {
      console.log("📧 RFQ email preview (Ethereal):", nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ ok: true, refId });
  } catch (err) {
    console.error("RFQ email error:", err);
    return NextResponse.json({ ok: false, error: "Email delivery failed" }, { status: 500 });
  }
}