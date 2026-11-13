import { NextResponse } from "next/server";
import { withAgentAuth } from "@/lib/agent-api/auth";

/** GET /api/agent/today — today's CEO Mentor lesson based on the user's current week. */
export const GET = withAgentAuth(async ({ supabase, userId }) => {
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("id")
    .eq("slug", "mentor")
    .maybeSingle();
  if (!curriculum) {
    return NextResponse.json({ lesson: null, reason: "Mentor curriculum not found" });
  }

  const { data: enrollment } = await supabase
    .from("user_curriculum_enrollments")
    .select("current_week")
    .eq("user_id", userId)
    .eq("curriculum_id", curriculum.id)
    .maybeSingle();
  const currentWeek = enrollment?.current_week || 1;

  const { data: week } = await supabase
    .from("weeks")
    .select("id, number, quarter_id")
    .eq("number", currentWeek)
    .maybeSingle();
  if (!week) {
    return NextResponse.json({ lesson: null, reason: `Week ${currentWeek} not found` });
  }

  const dayOfWeek = new Date().getDay() || 7; // Sunday = 7
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, slug, title, type, summary, duration_minutes, key_concepts, reflection_questions")
    .eq("week_id", week.id)
    .eq("number", dayOfWeek)
    .maybeSingle();

  return NextResponse.json({
    week: week.number,
    day_of_week: dayOfWeek,
    lesson: lesson ?? null,
  });
});
