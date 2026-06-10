/* Payload CMS admin panel — catch-all route */
import { generatePageMetadata, RootPage } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";

export const generateMetadata = ({ params, searchParams }) =>
  generatePageMetadata({ params, searchParams });

export default function Page({ params, searchParams }) {
  return <RootPage importMap={importMap} params={params} searchParams={searchParams} />;
}