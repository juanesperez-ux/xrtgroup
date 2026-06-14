# Forms & Cloudflare Turnstile

All public forms post to a server API route, are persisted/emailed, and are
protected by Cloudflare Turnstile (bot/captcha protection).

## Forms → endpoints

| Form (component)                         | Endpoint        | Delivered to            |
| ---------------------------------------- | --------------- | ----------------------- |
| Contact message (`ContactForm`)          | `/api/contact`  | matt.w@xrtgroup.com      |
| Schedule a call (`SchedulePopup`)        | `/api/schedule` | matt.w@xrtgroup.com      |
| RFQ — contact page (`RFQForm`)           | `/api/rfq`      | matt.w@xrtgroup.com      |
| RFQ — product page (`InlineRFQ`)         | `/api/rfq`      | matt.w@xrtgroup.com      |
| RFQ — service matcher (`RFQDrawer`)      | `/api/rfq`      | matt.w@xrtgroup.com      |
| Newsletter (`SubscribeForm`)             | `/api/rfq`      | matt.w@xrtgroup.com      |

Every client form includes a `turnstileToken` in its POST body; every route
verifies it server-side via `verifyTurnstile()` in `src/lib/turnstile.ts`
before doing any work.

## Cloudflare Turnstile setup

1. In the Cloudflare dashboard go to **Turnstile** and **Add a widget**.
   - Widget mode: **Managed** (recommended).
   - Hostnames: add `xrtgroup.com`, `www.xrtgroup.com`, and `localhost` (for dev).
2. Copy the **Site Key** and **Secret Key**.
3. Add them to your environment (local `.env` and your host, e.g. Vercel):

   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=<your site key>
   TURNSTILE_SECRET_KEY=<your secret key>
   ```

4. Redeploy / restart the dev server.

### Behaviour

- **Both keys set** → the widget renders on every form and the submit button
  stays disabled until the captcha passes; the server rejects any request whose
  token is missing or invalid (HTTP 400).
- **Keys unset** (default locally) → server verification is skipped and the
  widget is hidden, so forms remain testable without Cloudflare credentials.

### Test keys

Cloudflare publishes always-pass test keys if you want to exercise the full flow
before wiring real ones:

```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

## Email delivery

Routes send via SMTP when `SMTP_HOST` is configured; otherwise they fall back to
an Ethereal test inbox and log a preview URL to the server console. Set the
`SMTP_*` vars in production so mail reaches matt.w@xrtgroup.com.
