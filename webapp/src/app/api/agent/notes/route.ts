import { NextResponse } from "next/server";
import { clampLimit, jsonError, UUID_RE, withAgentAuth } from "@/lib/agent-api/auth";

const MAX_NOTE_LENGTH = 20_000;

/** GET /api/agent/notes?lesson_id=&limit= — the user's most recent notes. */
export const GET = withAgentAuth(async ({ supabase, userId }, request) => {
  const params = request.nextUrl.searchParams;
  const lessonId = params.get("lesson_id");
  if (lessonId && !UUID_RE.test(lessonId)) return jsonError(400, "lesson_id must be a UUID");

  let query = supabase
    .from("user_notes")
    .select("id, content, highlight_text, lesson_id, created_at, updated_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(clampLimit(params.get("limit")));
  if (lessonId) query = query.eq("lesson_id", lessonId);

  const { data, error } = await query;
  if (error) throw error;
  return NextResponse.json({ notes: data ?? [] });
});

/**
 * POST /api/agent/notes — create a note.
 * Body: { content: string, title?: string, lesson_id?: uuid }
 */
export const POST = withAgentAuth(async ({ supabase, userId }, request) => {
  const body = await request.json().catch(() => null);
  const content = typeof body?.content === "string" ? body.content.trim() : "";
  const title = typeof body?.title === "string" ? body.title.trim().slice(0, 300) : null;
  const lessonId = body?.lesson_id ?? null;

  if (!content) return jsonError(400, "content is required");
  if (content.length > MAX_NOTE_LENGTH) {
    return jsonError(400, `content must be at most ${MAX_NOTE_LENGTH} characters`);
  }
  if (lessonId !== null && !(typeof lessonId === "string" && UUID_RE.test(lessonId))) {
    return jsonError(400, "lesson_id must be a UUID");
  }

  const { data, error } = await supabase
    .from("user_notes")
    .insert({ user_id: userId, content, highlight_text: title, lesson_id: lessonId })
    .select("id, content, highlight_text, lesson_id, created_at")
    .single();
  if (error) throw error;

  return NextResponse.json({ note: data }, { status: 201 });
});
