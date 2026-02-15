import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SimpleLessonViewer } from "@/components/lesson/SimpleLessonViewer";

async function getLessonData(phaseNumber: number, moduleSlug: string, lessonSlug: string, userId: string) {
  const supabase = await createClient();

  // Get PE curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("id")
    .eq("slug", "pe-buy-build")
    .single();

  if (!curriculum) return null;

  // Get the phase
  const { data: phase } = await supabase
    .from("phases")
    .select("id, name, number")
    .eq("curriculum_id", curriculum.id)
    .eq("number", phaseNumber)
    .single();

  if (!phase) return null;

  // Get the module
  const { data: module } = await supabase
    .from("modules")
    .select("id, name, slug")
    .eq("phase_id", phase.id)
    .eq("slug", moduleSlug)
    .single();

  if (!module) return null;

  // Get the lesson
  const { data: lesson } = await supabase
    .from("lessons")
    .select("*")
    .eq("module_id", module.id)
    .eq("slug", lessonSlug)
    .single();

  if (!lesson) return null;

  // Get all lessons in this module for navigation
  const { data: allLessons } = await supabase
    .from("lessons")
    .select("id, title, slug, number")
    .eq("module_id", module.id)
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

  // Get user's notes for this lesson
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
    phase,
    module,
    prevLesson,
    nextLesson,
    progress,
    notes: notes || [],
    highlights: highlights || [],
    exerciseData,
    basePath: `/pe/${phaseNumber}/${moduleSlug}`,
  };
}

export default async function PELessonPage({
  params,
}: {
  params: Promise<{ phaseNumber: string; moduleSlug: string; lessonSlug: string }>;
}) {
  const { phaseNumber: phaseSlug, moduleSlug, lessonSlug } = await params;
  const phaseNumber = parseInt(phaseSlug);

  if (isNaN(phaseNumber)) {
    notFound();
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getLessonData(phaseNumber, moduleSlug, lessonSlug, user.id);
  if (!data) {
    notFound();
  }

  return (
    <SimpleLessonViewer
      lesson={data.lesson}
      phase={data.phase}
      module={data.module}
      prevLesson={data.prevLesson}
      nextLesson={data.nextLesson}
      progress={data.progress}
      notes={data.notes}
      highlights={data.highlights}
      exerciseData={data.exerciseData}
      basePath={data.basePath}
      breadcrumbs={[
        { label: "Dashboard", href: "/" },
        { label: "PE Buy & Build", href: "/pe" },
        { label: `Phase ${data.phase.number}`, href: `/pe` },
        { label: data.module.name, href: `/pe/${phaseSlug}/${moduleSlug}` },
      ]}
    />
  );
}
