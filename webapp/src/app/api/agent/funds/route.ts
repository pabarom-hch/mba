import { NextResponse } from "next/server";
import { withAgentAuth } from "@/lib/agent-api/auth";

/** GET /api/agent/funds — the user's funds. */
export const GET = withAgentAuth(async ({ supabase, userId }) => {
  const { data, error } = await supabase
    .from("funds")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return NextResponse.json({ funds: data ?? [] });
});
