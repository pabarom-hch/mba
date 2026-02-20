import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, BookOpen, CheckCircle2, Clock, FileText, HelpCircle, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const lessonTypeIcons: Record<string, typeof FileText> = {
  topic: FileText,
  assessment: HelpCircle,
  "case-study": Briefcase,
};

async function getModuleData(phaseNumber: number, moduleSlug: string, userId: string) {
  const supabase = await createClient();

  // Get MBA curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("id")
    .eq("slug", "mba")
    .single();

  if (!curriculum) return null;

  // Get the phase
  const { data: phase } = await supabase
    .from("phases")
    .select("*")
    .eq("curriculum_id", curriculum.id)
    .eq("number", phaseNumber)
    .single();

  if (!phase) return null;

  // Get the module with lessons
  const { data: module } = await supabase
    .from("modules")
    .select(`
      *,
      lessons:lessons(
        id,
        title,
        slug,
        number,
        type,
        summary,
        duration_minutes,
        difficulty
      )
    `)
    .eq("phase_id", phase.id)
    .eq("slug", moduleSlug)
    .single();

  if (!module) return null;

  // Get user's progress for these lessons
  const lessonIds = module.lessons?.map((l: { id: string }) => l.id) || [];
  const { data: progress } = await supabase
    .from("user_lesson_progress")
    .select("lesson_id, status, completed_at")
    .eq("user_id", userId)
    .in("lesson_id", lessonIds);

  const progressMap: Record<string, { status: string; completed_at: string | null }> = {};
  progress?.forEach(p => {
    progressMap[p.lesson_id] = { status: p.status, completed_at: p.completed_at };
  });

  return { phase, module, progressMap, curriculum };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ phaseSlug: string; moduleSlug: string }>;
}) {
  const { phaseSlug, moduleSlug } = await params;
  const phaseNumber = parseInt(phaseSlug);

  if (isNaN(phaseNumber)) {
    notFound();
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getModuleData(phaseNumber, moduleSlug, user.id);
  if (!data) {
    notFound();
  }

  const { phase, module, progressMap } = data;

  const lessons = module.lessons?.sort((a: { number: number }, b: { number: number }) => a.number - b.number) || [];
  const completedCount = Object.values(progressMap).filter(p => p.status === "completed").length;
  const progressPercent = lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0;

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <Link href="/" className="hover:text-foreground">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/mba" className="hover:text-foreground">MBA Curriculum</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-muted-foreground">Phase {phase.number}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{module.name}</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <Badge className="bg-purple-500/10 text-purple-400 mb-2">
              Phase {phase.number}: {phase.name}
            </Badge>
            <h1 className="text-3xl font-bold">{module.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">{module.description}</p>
          </div>
          {module.estimated_hours && (
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated Time</p>
              <p className="text-lg font-semibold">{module.estimated_hours} hours</p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <Card className="border-border bg-card/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Module Progress</span>
              <span className="text-sm font-medium">{completedCount} / {lessons.length} lessons</span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-muted" />
          </CardContent>
        </Card>
      </div>

      {/* Learning Objectives */}
      {module.learning_objectives && (
        <Card className="border-border bg-card/50">
          <CardHeader>
            <CardTitle className="text-lg">Learning Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {(module.learning_objectives as string[]).map((objective, idx) => (
                <li key={idx} className="flex items-start gap-2 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  {objective}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Lessons List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Lessons</h2>
        <div className="space-y-3">
          {lessons.map((lesson: {
            id: string;
            title: string;
            slug: string;
            number: number;
            type: string;
            summary: string | null;
            duration_minutes: number | null;
            difficulty: string | null;
          }) => {
            const status = progressMap[lesson.id]?.status;
            const isComplete = status === "completed";
            const isInProgress = status === "in_progress";
            const Icon = lessonTypeIcons[lesson.type] || FileText;

            return (
              <Link
                key={lesson.id}
                href={`/mba/${phaseSlug}/${moduleSlug}/${lesson.slug}`}
              >
                <Card className="border-border bg-card/50 transition-all hover:border-border hover:bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Status Icon */}
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${
                        isComplete
                          ? "bg-green-500/10"
                          : isInProgress
                          ? "bg-orange-500/10"
                          : "bg-muted"
                      }`}>
                        {isComplete ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : isInProgress ? (
                          <Clock className="h-5 w-5 text-orange-500" />
                        ) : (
                          <Icon className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm text-muted-foreground">{lesson.number}.</span>
                          <h3 className="font-medium truncate">{lesson.title}</h3>
                          <Badge variant="outline" className="border-border text-muted-foreground text-xs capitalize">
                            {lesson.type}
                          </Badge>
                        </div>
                        {lesson.summary && (
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                            {lesson.summary}
                          </p>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
                        {lesson.duration_minutes && (
                          <span>{lesson.duration_minutes} min</span>
                        )}
                        {lesson.difficulty && (
                          <Badge variant="outline" className="border-border capitalize">
                            {lesson.difficulty}
                          </Badge>
                        )}
                      </div>

                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
