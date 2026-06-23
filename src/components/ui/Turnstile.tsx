"use client";

import { Turnstile as MarsidevTurnstile } from "@marsidev/react-turnstile";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const CAPTCHA_DISABLED = true;

/** Whether the captcha is configured. Forms gate submission on this. */
export const isTurnstileEnabled = Boolean(SITE_KEY) && !CAPTCHA_DISABLED;

interface TurnstileProps {
  onVerify: (token: string) => void;
  /** Called when the token expires or errors, so callers can clear stale tokens. */
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
  className?: string;
}

/**
 * Thin wrapper around @marsidev/react-turnstile that keeps a stable internal
 * API (onVerify / onExpire / theme) and hides the widget entirely when no site
 * key is configured, so forms remain usable in local dev without credentials.
 */
export default function Turnstile({
  onVerify,
  onExpire,
  theme = "auto",
  className,
}: TurnstileProps) {
  if (!isTurnstileEnabled || !SITE_KEY) return null;
  return (
    <div className={className}>
      <MarsidevTurnstile
        siteKey={SITE_KEY}
        onSuccess={onVerify}
        onExpire={() => onExpire?.()}
        onError={() => onExpire?.()}
        options={{ theme }}
      />
    </div>
  );
}
