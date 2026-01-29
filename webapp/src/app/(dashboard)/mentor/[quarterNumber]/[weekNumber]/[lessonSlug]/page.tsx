import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LessonViewer } from "@/components/lesson/LessonViewer";

async function getLessonData(quarterNumber: number, weekNumber: number, lessonSlug: string, userId: string) {
  const supabase = await createClient();

  // Get Mentor curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("id")
    .eq("slug", "mentor")
    .single();

  if (!curriculum) return null;

  // Get the quarter
  const { data: quarter } = await supabase
    .from("quarters")
    .select("id, name, number")
    .eq("curriculum_id", curriculum.id)
    .eq("number", quarterNumber)
    .single();

  if (!quarter) return null;

  // Get the week with mentor
  const { data: week } = await supabase
    .from("weeks")
    .select(`
      id,
      title,
      number,
      mentor:mentors(id, name, image_url)
    `)
    .eq("quarter_id", quarter.id)
    .eq("number", weekNumber)
    .single();

  if (!week) return null;

  // Get the lesson
  const { data: lesson } = await supabase
    .from("lessons")
    .select("*")
    .eq("week_id", week.id)
    .eq("slug", lessonSlug)
    .single();

  if (!lesson) return null;

  // Get all lessons in this week for navigation
  const { data: allLessons } = await supabase
    .from("lessons")
    .select("id, title, slug, number")
    .eq("week_id", week.id)
    .order("number");

  // Find prev/next lessons
  const currentIndex = allLessons?.findIndex(l => l.id === lesson.id) ?? -1;
  const prevLesson = currentIndex > 0 ? allLessons![currentIndex - 1] : null;
  const nextLesson = currentIndex < (allLessons?.length || 0) - 1 ? allLessons![currentIndex + 1] : null;

  // Get user's progress
  const { data: progress } = await supabase
    .from("user_lesson_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("lesson_id", lesson.id)
    .single();

  // Get user's notes
  const { data: notes } = await supabase
    .from("user_notes")
    .select("*")
    .eq("user_id", userId)
    .eq("lesson_id", lesson.id)
    .order("created_at", { ascending: false });

  // Get user's highlights
  const { data: highlights } = await supabase
    .from("user_highlights")
    .select("*")
    .eq("user_id", userId)
    .eq("lesson_id", lesson.id);

  // Get user's exercise responses
  const { data: exerciseResponses } = await supabase
    .from("user_exercise_responses")
    .select("table_index, responses")
    .eq("user_id", userId)
    .eq("lesson_id", lesson.id);

  // Convert to map format: { tableIndex: responses }
  const exerciseData: Record<number, Record<string, string>> = {};
  exerciseResponses?.forEach(er => {
    exerciseData[er.table_index] = er.responses as Record<string, string>;
  });

  return {
    lesson,
    quarter,
    week,
    prevLesson,
    nextLesson,
    progress,
    notes: notes || [],
    highlights: highlights || [],
    exerciseData,
    basePath: `/mentor/${quarterNumber}/${weekNumber}`,
  };
}

export default async function MentorLessonPage({
  params,
}: {
  params: Promise<{ quarterNumber: string; weekNumber: string; lessonSlug: string }>;
}) {
  const { quarterNumber, weekNumber, lessonSlug } = await params;
  const qNum = parseInt(quarterNumber);
  const wNum = parseInt(weekNumber);

  if (isNaN(qNum) || isNaN(wNum)) {
    notFound();
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getLessonData(qNum, wNum, lessonSlug, user.id);
  if (!data) {
    notFound();
  }

  return (
    <LessonViewer
      lesson={data.lesson}
      week={data.week}
      prevLesson={data.prevLesson}
      nextLesson={data.nextLesson}
      progress={data.progress}
      notes={data.notes}
      highlights={data.highlights}
      exerciseData={data.exerciseData}
      basePath={data.basePath}
      breadcrumbs={[
        { label: "Dashboard", href: "/" },
        { label: "Mentor Curriculum", href: "/mentor" },
        { label: `Q${data.quarter.number}`, href: "/mentor" },
        { label: `Week ${data.week.number}`, href: `/mentor/${quarterNumber}/${weekNumber}` },
      ]}
    />
  );
}
