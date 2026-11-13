import { NextResponse } from "next/server";
import { clampLimit, jsonError, withAgentAuth } from "@/lib/agent-api/auth";

/**
 * GET /api/agent/lessons?q=&curriculum=&limit=
 * Search lessons by title (q) and/or curriculum slug.
 */
export const GET = withAgentAuth(async ({ supabase }, request) => {
  const params = request.nextUrl.searchParams;
  const q = params.get("q")?.trim();
  const curriculumSlug = params.get("curriculum")?.trim();
  const limit = clampLimit(params.get("limit"));

  let query = supabase
    .from("lessons")
    .select("id, slug, title, type, summary, difficulty, duration_minutes, curriculum_id")
    .order("number")
    .limit(limit);

  if (curriculumSlug) {
    const { data: curriculum } = await supabase
      .from("curricula")
      .select("id")
      .eq("slug", curriculumSlug)
      .maybeSingle();
    if (!curriculum) return jsonError(404, `Unknown curriculum '${curriculumSlug}'`);
    query = query.eq("curriculum_id", curriculum.id);
  }
  if (q) {
    // Strip characters that have meaning in PostgREST filter syntax.
    query = query.ilike("title", `%${q.replace(/[%_,()*]/g, " ")}%`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return NextResponse.json({ lessons: data ?? [] });
});
