import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, BookOpen, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

async function getMBAData(userId: string) {
  const supabase = await createClient();

  // Get MBA curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("*")
    .eq("slug", "mba")
    .single();

  if (!curriculum) return null;

  // Get all phases with modules
  const { data: phases } = await supabase
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
    .order("number");

  // Get all lesson counts per module in a single query
  const { data: lessonCounts } = await supabase
    .rpc("get_module_lesson_counts");

  // Get user's completed lessons per module in a single query
  const { data: userProgress } = await supabase
    .rpc("get_user_module_progress", { p_user_id: userId });

  // Build progress map from aggregated data
  const moduleProgress: Record<string, { completed: number; total: number }> = {};

  // Initialize with totals
  lessonCounts?.forEach((row: { module_id: string; total_lessons: number }) => {
    moduleProgress[row.module_id] = {
      total: row.total_lessons,
      completed: 0,
    };
  });

  // Add completed counts
  userProgress?.forEach((row: { module_id: string; completed_lessons: number }) => {
    if (moduleProgress[row.module_id]) {
      moduleProgress[row.module_id].completed = row.completed_lessons;
    }
  });

  return { curriculum, phases, moduleProgress };
}

export default async function MBAPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getMBAData(user.id);
  if (!data) return <div className="p-6">Curriculum not found</div>;

  const { curriculum, phases, moduleProgress } = data;

  // Calculate overall progress
  const totalCompleted = Object.values(moduleProgress).reduce((acc, m) => acc + m.completed, 0);
  const totalLessons = Object.values(moduleProgress).reduce((acc, m) => acc + m.total, 0);
  const overallProgress = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-zinc-100">Dashboard</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-zinc-100">MBA Curriculum</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{curriculum.name}</h1>
          <p className="text-zinc-400 mt-2">{curriculum.description}</p>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-zinc-400">Overall Progress</p>
              <p className="text-2xl font-bold">{Math.round(overallProgress)}%</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-400">Lessons Completed</p>
              <p className="text-lg font-semibold">{totalCompleted} / {totalLessons}</p>
            </div>
          </div>
          <Progress value={overallProgress} className="h-2 bg-zinc-800" />
        </CardContent>
      </Card>

      {/* Phases */}
      <div className="space-y-8">
        {phases?.map((phase) => {
          const phaseCompleted = phase.modules?.reduce(
            (acc: number, m: { id: string }) => acc + (moduleProgress[m.id]?.completed || 0),
            0
          ) || 0;
          const phaseTotal = phase.modules?.reduce(
            (acc: number, m: { id: string }) => acc + (moduleProgress[m.id]?.total || 0),
            0
          ) || 0;
          const phaseProgress = phaseTotal > 0 ? (phaseCompleted / phaseTotal) * 100 : 0;

          return (
            <div key={phase.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="text-orange-500">Phase {phase.number}:</span>
                    {phase.name}
                  </h2>
                  <p className="text-sm text-zinc-400 mt-1">{phase.description}</p>
                </div>
                <Badge variant="outline" className="border-zinc-700">
                  {phase.duration_weeks} weeks
                </Badge>
              </div>

              {/* Progress bar for phase */}
              <div className="flex items-center gap-4">
                <Progress value={phaseProgress} className="h-1.5 bg-zinc-800 flex-1" />
                <span className="text-sm text-zinc-400 min-w-[60px]">
                  {Math.round(phaseProgress)}%
                </span>
              </div>

              {/* Modules Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {phase.modules?.sort((a: { number: number }, b: { number: number }) => a.number - b.number).map((module: {
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
                      href={`/mba/${phase.number}/${module.slug}`}
                    >
                      <Card className="border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-800/50 h-full">
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <Badge
                              variant="outline"
                              className={
                                isComplete
                                  ? "border-green-500/30 text-green-400"
                                  : hasStarted
                                  ? "border-orange-500/30 text-orange-400"
                                  : "border-zinc-700 text-zinc-400"
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
                          <CardDescription className="text-zinc-400 text-sm line-clamp-2">
                            {module.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1 text-zinc-400">
                              <BookOpen className="h-4 w-4" />
                              {progress.total} lessons
                            </div>
                            {module.estimated_hours && (
                              <span className="text-zinc-500">
                                ~{module.estimated_hours}h
                              </span>
                            )}
                          </div>
                          {progress.total > 0 && (
                            <Progress
                              value={(progress.completed / progress.total) * 100}
                              className="h-1 bg-zinc-800 mt-3"
                            />
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
