import { NextResponse } from "next/server";
import { withAgentAuth } from "@/lib/agent-api/auth";

/** GET /api/agent/progress — completion per curriculum plus recent lesson activity. */
export const GET = withAgentAuth(async ({ supabase, userId }) => {
  const [{ data: summary, error }, { data: recent }] = await Promise.all([
    supabase.from("user_progress_summary").select("*").eq("user_id", userId),
    supabase
      .from("user_lesson_progress")
      .select("status, completed_at, updated_at, lessons (id, slug, title, type)")
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })
      .limit(10),
  ]);
  if (error) throw error;

  return NextResponse.json({
    curricula: summary ?? [],
    recent_activity: recent ?? [],
  });
});
