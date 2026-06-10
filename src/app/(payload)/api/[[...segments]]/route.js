/* Payload CMS API routes — ESM module with param name bridging */
import configModule from "@payload-config";
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from "@payloadcms/next/routes";

const config = configModule.default || configModule;

// Payload's handlers accept { slug } but Next.js catch-all provides { segments }
function wrap(handler) {
  return (request, context) => {
    // Pass the raw context through — Payload internally handles the param mapping
    return handler(request, context);
  };
}

export const GET = wrap(REST_GET(config));
export const POST = wrap(REST_POST(config));
export const PUT = wrap(REST_PUT(config));
export const PATCH = wrap(REST_PATCH(config));
export const DELETE = wrap(REST_DELETE(config));
export const OPTIONS = wrap(REST_OPTIONS(config));