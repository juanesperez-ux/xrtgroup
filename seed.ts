/**
 * XRT Group — Seed Script
 * Creates the initial admin user for the Payload CMS.
 *
 * Usage: npx tsx seed.ts
 * (Sets up: admin@xrtgroup.com / change-me-immediately)
 */
import { getPayload } from "payload";
import config from "./payload.config.js";

async function seed() {
  const payload = await getPayload({ config });

  // Check if any users exist already
  const existingUsers = await payload.find({
    collection: "users",
    limit: 1,
  });

  if (existingUsers.docs.length > 0) {
    console.log("✓ Admin user(s) already exist. Skipping seed.");
    console.log(`  Found ${existingUsers.totalDocs} user(s).`);
    process.exit(0);
  }

  // Create the initial admin user
  const user = await payload.create({
    collection: "users",
    data: {
      email: "admin@xrtgroup.com",
      password: "change-me-immediately",
      name: "Juan Perez",
      role: "admin",
    },
  });

  console.log("✓ Initial admin user created:");
  console.log(`  Email:    admin@xrtgroup.com`);
  console.log(`  Password: change-me-immediately`);
  console.log(`  Name:     ${user.name}`);
  console.log("");
  console.log("⚠️  CHANGE THIS PASSWORD IMMEDIATELY after first login.");
  console.log("   Visit: http://localhost:3000/admin");

  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});