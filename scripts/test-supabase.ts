import { loadEnvConfig } from "@next/env";
import { createClient } from "@supabase/supabase-js";

const { combinedEnv } = loadEnvConfig(process.cwd());

const supabaseUrl = combinedEnv.NEXT_PUBLIC_SUPABASE_URL ?? combinedEnv.SUPABASE_URL;
const supabaseKey =
  combinedEnv.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  combinedEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  combinedEnv.SUPABASE_ANON_KEY;
const tableName = process.argv[2] ?? "rfq_submissions";

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase.from(tableName).select("*").limit(1);

  if (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }

  console.log(`Connected to Supabase. Sample from "${tableName}":`, data);
}

main().catch((error: unknown) => {
  console.error("Connection error:", error);
  process.exit(1);
});
