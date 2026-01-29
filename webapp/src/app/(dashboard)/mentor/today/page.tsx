import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

async function getTodayLesson(userId: string) {
  const supabase = await createClient();

  // Get Mentor curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("id")
    .eq("slug", "mentor")
    .single();

  if (!curriculum) return null;

  // Get user's enrollment
  const { data: enrollment } = await supabase
    .from("user_curriculum_enrollments")
    .select("current_week")
    .eq("user_id", userId)
    .eq("curriculum_id", curriculum.id)
    .single();

  const currentWeek = enrollment?.current_week || 1;

  // Get the week
  const { data: week } = await supabase
    .from("weeks")
    .select("id, number, quarter_id")
    .eq("number", currentWeek)
    .single();

  if (!week) return null;

  // Get the quarter number
  const { data: quarter } = await supabase
    .from("quarters")
    .select("number")
    .eq("id", week.quarter_id)
    .single();

  // Get today's lesson (day of week, 1-7)
  const dayOfWeek = new Date().getDay() || 7; // Sunday = 7

  const { data: lesson } = await supabase
    .from("lessons")
    .select("slug")
    .eq("week_id", week.id)
    .eq("number", dayOfWeek)
    .single();

  if (!lesson) return null;

  return {
    quarterNumber: quarter?.number || 1,
    weekNumber: week.number,
    lessonSlug: lesson.slug,
  };
}

export default async function TodayPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const todayLesson = await getTodayLesson(user.id);

  if (todayLesson) {
    redirect(`/mentor/${todayLesson.quarterNumber}/${todayLesson.weekNumber}/${todayLesson.lessonSlug}`);
  }

  // Fallback: redirect to mentor overview
  redirect("/mentor");
}
