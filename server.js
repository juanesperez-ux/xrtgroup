/**
 * Custom Next.js server for Phusion Passenger (Hostinger hPanel "Node.js App").
 *
 * Passenger loads THIS file as the application entry point — it does not run
 * `next start`. This server routes EVERY request (including /_next/static/*
 * assets) through Next's request handler, which is what makes the CSS/JS
 * bundles load in production. Without it, HTML renders but assets 404 and the
 * page appears completely unstyled.
 *
 * hPanel → Website → Node.js → set "Application startup file" = server.js
 * Run `npm run build` before (re)starting the app.
 */
const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> XRT Group ready on port ${port} (dev=${dev})`);
  });
});
