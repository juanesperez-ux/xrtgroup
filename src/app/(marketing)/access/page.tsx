import { redirect } from "next/navigation";

export const metadata = {
  title: "Access Portal",
  description: "XRT Group — Authorized Personnel Only",
};

/**
 * The /access page now redirects to the Payload CMS admin login.
 * All authentication is handled by Payload's built-in auth system.
 * To create your first admin user, run: npm run seed
 */
export default function AccessPage() {
  redirect("/admin");
}
