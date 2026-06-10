/**
 * SiteChrome — always renders XRT site chrome.
 * Payload admin routes are handled by a separate layout in src/app/(payload)/layout.jsx,
 * so this component only receives public-facing page children.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
