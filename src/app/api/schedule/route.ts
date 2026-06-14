import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "matt.w@xrtgroup.com";

function escapeHtml(text: string): string {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  const map: Record<string, string> = {
    "&": amp,
    "<": lt,
    ">": gt,
    "\"": quot,
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch] || ch);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      commodityNeed,
      phone,
      email,
      bestDate,
      bestTime,
    } = body;

    if (!fullName || !email || !bestDate || !bestTime) {
      return NextResponse.json(
        { ok: false, error: "Full name, email, preferred date, and preferred time are required." },
        { status: 400 }
      );
    }

    const e = (s: string | undefined | null) => escapeHtml(String(s ?? ""));

    const refId = `SCH-${Date.now().toString().slice(-6)}`;
    const textBody = `
NEW SCHEDULING REQUEST
Reference: ${refId}
Submitted: ${new Date().toUTCString()}
─────────────────────────────────────────

CONTACT INFORMATION
  Full Name:       ${fullName ?? ""}
  Email:           ${email ?? ""}
  Phone:           ${phone || "(not provided)"}

SCHEDULING DETAILS
  Commodity Need:  ${commodityNeed || "(not specified)"}
  Preferred Date:  ${bestDate ?? ""}
  Preferred Time:  ${bestTime ?? ""}

─────────────────────────────────────────
This scheduling request was submitted via the XRT Group website.
Please reply to: ${email ?? ""}
`.trim();

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
  .ftr { background: #f0edec; border-top: 1px solid #e5e2e1; padding: 14px 28px; font-size: 11px; color: #916f6c; text-align: center; letter-spacing: 0.5px; }
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1>XRT GROUP — SCHEDULING REQUEST</h1>
    <p>New Call Scheduling — ${new Date().toUTCString()}</p>
  </div>
  <div class="ref">Reference: ${refId}</div>
  <div class="body">

    <div class="section-title">Contact Information</div>
    <table>
      <tr><td>Full Name</td><td>${e(fullName)}</td></tr>
      <tr><td>Email</td><td><a href="mailto:${e(email)}">${e(email)}</a></td></tr>
      <tr><td>Phone</td><td>${e(phone) || "<em>Not provided</em>"}</td></tr>
    </table>

    <div class="section-title">Scheduling Details</div>
    <table>
      <tr><td>Commodity Need</td><td>${e(commodityNeed) || "<em>Not specified</em>"}</td></tr>
      <tr><td>Preferred Date</td><td>${e(bestDate)}</td></tr>
      <tr><td>Preferred Time</td><td>${e(bestTime)}</td></tr>
    </table>

  </div>
  <div class="ftr">XRT Group — Authority in Commodity Procurement · xrtgroup.com · Reply directly to ${e(email)}</div>
</div>
</body>
</html>
`.trim();

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

    const safeSubject = `[XRT Schedule] ${fullName} — ${commodityNeed || "General Inquiry"} | ${refId}`;

    const info = await transporter.sendMail({
      from: "\"XRT Group Scheduling\" <noreply@xrtgroup.com>",
      to: RECIPIENT,
      replyTo: email,
      subject: safeSubject,
      text: textBody,
      html: htmlBody,
    });

    if (!process.env.SMTP_HOST) {
      console.log("📧 Schedule email preview (Ethereal):", nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json({ ok: true, refId });
  } catch (err) {
    console.error("Schedule email error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send scheduling request. Please try again." },
      { status: 500 }
    );
  }
}