import { createClient } from "@supabase/supabase-js";

export function requireEnv(key: string): string {
  const value = import.meta.env[key as keyof ImportMetaEnv];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

const SUPABASE_URL: string = requireEnv("VITE_SUPABASE_URL");
const SUPABASE_PUBLISHABLE_KEY: string = requireEnv(
  "VITE_SUPABASE_PUBLISHABLE_KEY",
);

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export async function getFeatured() {
  try {
    const { data } = await supabase.from('project').select();
  } catch (e) {
    console.log(e);
  }
}
