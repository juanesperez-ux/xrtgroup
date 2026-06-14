import "server-only";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export interface TurnstileResult {
  success: boolean;
  /** True when verification was skipped because no secret key is configured (local/dev). */
  skipped: boolean;
}

/**
 * Server-side verification of a Cloudflare Turnstile token.
 *
 * When TURNSTILE_SECRET_KEY is unset (local development), verification is
 * skipped so forms remain testable without Cloudflare credentials. In any
 * environment where the secret is configured, a missing or invalid token fails.
 */
export async function verifyTurnstile(
  token: string | undefined | null,
  ip?: string | null
): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { success: true, skipped: true };
  if (!token) return { success: false, skipped: false };

  try {
    const body = new URLSearchParams();
    body.append("secret", secret);
    body.append("response", token);
    if (ip) body.append("remoteip", ip);

    const res = await fetch(VERIFY_URL, { method: "POST", body });
    const data = (await res.json()) as { success?: boolean };
    return { success: Boolean(data.success), skipped: false };
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return { success: false, skipped: false };
  }
}

/** Pulls the originating client IP from Cloudflare / proxy headers. */
export function getClientIp(headers: Headers): string | null {
  return (
    headers.get("CF-Connecting-IP") ??
    headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    null
  );
}
