import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LessonViewer } from "@/components/lesson/LessonViewer";

async function getCaseStudyData(slug: string, userId: string) {
  const supabase = await createClient();

  // Get the case study lesson by slug
  const { data: lesson } = await supabase
    .from("lessons")
    .select(`
      *,
      module:modules(
        id,
        name,
        slug,
        phase:phases(
          id,
          name,
          number
        )
      )
    `)
    .eq("slug", slug)
    .single();

  if (!lesson) return null;

  // Get all Nexus case studies for navigation
  const { data: allCaseStudies } = await supabase
    .from("lessons")
    .select("id, title, slug, number")
    .like("slug", "nexus-case-%")
    .order("title");

  // Find prev/next case studies
  const currentIndex = allCaseStudies?.findIndex(l => l.id === lesson.id) ?? -1;
  const prevLesson = currentIndex > 0 ? allCaseStudies![currentIndex - 1] : null;
  const nextLesson = currentIndex < (allCaseStudies?.length || 0) - 1 ? allCaseStudies![currentIndex + 1] : null;

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

  // Get related datasets for this case study
  const { data: datasets } = await supabase
    .from("case_study_datasets")
    .select("id, dataset_name, display_name, description")
    .eq("source_type", "nexus")
    .eq("is_active", true);

  return {
    lesson,
    phase: lesson.module?.phase || { id: "", name: "Cases", number: 0 },
    module: lesson.module || { id: "", name: "Nexus", slug: "nexus" },
    prevLesson,
    nextLesson,
    progress,
    notes: notes || [],
    highlights: highlights || [],
    exerciseData,
    datasets: datasets || [],
    basePath: "/cases/nexus",
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getCaseStudyData(slug, user.id);
  if (!data) {
    notFound();
  }

  // Create a clean title without the "Nexus Case: " prefix
  const displayTitle = data.lesson.title.replace("Nexus Case: ", "");

  return (
    <LessonViewer
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
        { label: "Cases", href: "/cases" },
        { label: "Nexus", href: "/cases/nexus" },
        { label: displayTitle, href: "#" },
      ]}
    />
  );
}
