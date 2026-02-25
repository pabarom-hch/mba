import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

async function getPhaseData(phaseNumber: number, userId: string) {
  const supabase = await createClient();

  // Get MBA curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("id")
    .eq("slug", "mba")
    .single();

  if (!curriculum) return null;

  // Get the specific phase with modules
  const { data: phase } = await supabase
    .from("phases")
    .select(`
      *,
      modules:modules(
        id,
        slug,
        name,
        number,
        description,
        estimated_hours
      )
    `)
    .eq("curriculum_id", curriculum.id)
    .eq("number", phaseNumber)
    .single();

  if (!phase) return null;

  // Get lesson counts for this phase's modules
  const moduleIds = phase.modules?.map((m: { id: string }) => m.id) || [];

  const { data: lessonCounts } = await supabase
    .from("lessons")
    .select("module_id")
    .in("module_id", moduleIds);

  // Get user's completed lessons for this phase's modules
  const { data: userProgress } = await supabase
    .from("user_lesson_progress")
    .select("lesson_id, lessons!inner(module_id)")
    .eq("user_id", userId)
    .eq("status", "completed")
    .in("lessons.module_id", moduleIds);

  // Build progress map
  const moduleProgress: Record<string, { completed: number; total: number }> = {};

  // Count lessons per module
  moduleIds.forEach((id: string) => {
    moduleProgress[id] = { completed: 0, total: 0 };
  });

  lessonCounts?.forEach((row: { module_id: string }) => {
    if (moduleProgress[row.module_id]) {
      moduleProgress[row.module_id].total++;
    }
  });

  userProgress?.forEach((row: { lessons: { module_id: string } }) => {
    const moduleId = row.lessons.module_id;
    if (moduleProgress[moduleId]) {
      moduleProgress[moduleId].completed++;
    }
  });

  return { phase, moduleProgress };
}

export default async function PhasePage({
  params,
}: {
  params: Promise<{ phaseSlug: string }>;
}) {
  const { phaseSlug } = await params;
  const phaseNumber = parseInt(phaseSlug);

  if (isNaN(phaseNumber)) {
    notFound();
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getPhaseData(phaseNumber, user.id);
  if (!data) {
    notFound();
  }

  const { phase, moduleProgress } = data;

  // Calculate phase progress
  const phaseCompleted = Object.values(moduleProgress).reduce((acc, m) => acc + m.completed, 0);
  const phaseTotal = Object.values(moduleProgress).reduce((acc, m) => acc + m.total, 0);
  const phaseProgress = phaseTotal > 0 ? (phaseCompleted / phaseTotal) * 100 : 0;

  const modules = phase.modules?.sort((a: { number: number }, b: { number: number }) => a.number - b.number) || [];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        <Link href="/" className="hover:text-foreground">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/mba" className="hover:text-foreground">MBA Curriculum</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Phase {phase.number}</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <Badge className="bg-orange-500/10 text-orange-400 mb-2">
              Phase {phase.number}
            </Badge>
            <h1 className="text-3xl font-bold">{phase.name}</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">{phase.description}</p>
          </div>
          {phase.duration_weeks && (
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-lg font-semibold">{phase.duration_weeks} weeks</p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <Card className="border-border bg-card/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Phase Progress</span>
              <span className="text-sm font-medium">{phaseCompleted} / {phaseTotal} lessons</span>
            </div>
            <Progress value={phaseProgress} className="h-2 bg-muted" />
          </CardContent>
        </Card>
      </div>

      {/* Modules Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Modules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module: {
            id: string;
            slug: string;
            name: string;
            number: number;
            description: string | null;
            estimated_hours: number | null;
          }) => {
            const progress = moduleProgress[module.id] || { completed: 0, total: 0 };
            const isComplete = progress.total > 0 && progress.completed === progress.total;
            const hasStarted = progress.completed > 0;

            return (
              <Link
                key={module.id}
                href={`/mba/${phaseNumber}/${module.slug}`}
              >
                <Card className="border-border bg-card/50 transition-all hover:border-border hover:bg-muted/50 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <Badge
                        variant="outline"
                        className={
                          isComplete
                            ? "border-green-500/30 text-green-400"
                            : hasStarted
                            ? "border-orange-500/30 text-orange-400"
                            : "border-border text-muted-foreground"
                        }
                      >
                        {isComplete ? (
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                        ) : hasStarted ? (
                          <Clock className="h-3 w-3 mr-1" />
                        ) : null}
                        {isComplete ? "Complete" : hasStarted ? "In Progress" : "Not Started"}
                      </Badge>
                    </div>
                    <CardTitle className="text-base mt-2">
                      {module.number}. {module.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm line-clamp-2">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        {progress.total} lessons
                      </div>
                      {module.estimated_hours && (
                        <span className="text-muted-foreground">
                          ~{module.estimated_hours}h
                        </span>
                      )}
                    </div>
                    {progress.total > 0 && (
                      <Progress
                        value={(progress.completed / progress.total) * 100}
                        className="h-1 bg-muted mt-3"
                      />
                    )}
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
