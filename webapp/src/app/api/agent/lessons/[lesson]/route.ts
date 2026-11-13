import { NextResponse } from "next/server";
import { jsonError, UUID_RE, withAgentAuth } from "@/lib/agent-api/auth";

const PROGRESS_STATUSES = ["not_started", "in_progress", "completed"] as const;

/** GET /api/agent/lessons/{idOrSlug} — full lesson content plus the user's progress. */
export const GET = withAgentAuth<{ lesson: string }>(
  async ({ supabase, userId }, _request, { lesson: key }) => {
    const column = UUID_RE.test(key) ? "id" : "slug";
    const { data: lessons, error } = await supabase
      .from("lessons")
      .select(
        "id, slug, title, type, summary, content, difficulty, duration_minutes, learning_objectives, key_concepts, reflection_questions, exercises, further_reading, curriculum_id"
      )
      .eq(column, key)
      .limit(5);
    if (error) throw error;
    if (!lessons?.length) return jsonError(404, "Lesson not found");
    if (lessons.length > 1) {
      return NextResponse.json(
        {
          error: "Slug is ambiguous; request by id instead",
          matches: lessons.map(({ id, title, curriculum_id }) => ({ id, title, curriculum_id })),
        },
        { status: 409 }
      );
    }

    const lesson = lessons[0];
    const { data: progress } = await supabase
      .from("user_lesson_progress")
      .select("status, started_at, completed_at, rating, time_spent_seconds")
      .eq("user_id", userId)
      .eq("lesson_id", lesson.id)
      .maybeSingle();

    return NextResponse.json({ lesson, progress: progress ?? null });
  }
);

/**
 * PATCH /api/agent/lessons/{id} — update the user's progress on a lesson.
 * Body: { status: "not_started" | "in_progress" | "completed", rating?: 1-5 }
 */
export const PATCH = withAgentAuth<{ lesson: string }>(
  async ({ supabase, userId }, request, { lesson: id }) => {
    if (!UUID_RE.test(id)) return jsonError(400, "Use the lesson id (UUID) to update progress");

    const body = await request.json().catch(() => null);
    const status = body?.status;
    const rating = body?.rating;
    if (!PROGRESS_STATUSES.includes(status)) {
      return jsonError(400, `status must be one of ${PROGRESS_STATUSES.join(", ")}`);
    }
    if (rating !== undefined && !(Number.isInteger(rating) && rating >= 1 && rating <= 5)) {
      return jsonError(400, "rating must be an integer from 1 to 5");
    }

    const { data: lesson } = await supabase.from("lessons").select("id").eq("id", id).maybeSingle();
    if (!lesson) return jsonError(404, "Lesson not found");

    const { data: existing } = await supabase
      .from("user_lesson_progress")
      .select("started_at")
      .eq("user_id", userId)
      .eq("lesson_id", id)
      .maybeSingle();

    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("user_lesson_progress")
      .upsert(
        {
          user_id: userId,
          lesson_id: id,
          status,
          started_at: existing?.started_at ?? (status === "not_started" ? null : now),
          completed_at: status === "completed" ? now : null,
          updated_at: now,
          ...(rating !== undefined && { rating }),
        },
        { onConflict: "user_id,lesson_id" }
      )
      .select("status, started_at, completed_at, rating")
      .single();
    if (error) throw error;

    return NextResponse.json({ progress: data });
  }
);
