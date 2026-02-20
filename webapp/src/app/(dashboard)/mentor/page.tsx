import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, User, Calendar, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function getMentorData(userId: string) {
  const supabase = await createClient();

  // Get Mentor curriculum
  const { data: curriculum } = await supabase
    .from("curricula")
    .select("*")
    .eq("slug", "mentor")
    .single();

  if (!curriculum) return null;

  // Get all quarters
  const { data: quarters } = await supabase
    .from("quarters")
    .select("*")
    .eq("curriculum_id", curriculum.id)
    .order("number");

  // Get all weeks with mentor info
  const { data: weeks } = await supabase
    .from("weeks")
    .select(`
      *,
      mentor:mentors(id, name, image_url, title)
    `)
    .order("number");

  // Get user's enrollment
  const { data: enrollment } = await supabase
    .from("user_curriculum_enrollments")
    .select("*")
    .eq("user_id", userId)
    .eq("curriculum_id", curriculum.id)
    .single();

  // Get all lesson counts per week in a single query
  const { data: lessonCounts } = await supabase
    .rpc("get_week_lesson_counts");

  // Get user's completed lessons per week in a single query
  const { data: userProgress } = await supabase
    .rpc("get_user_week_progress", { p_user_id: userId });

  // Build progress map from aggregated data
  const weekProgress: Record<string, { completed: number; total: number }> = {};

  // Initialize with totals
  lessonCounts?.forEach((row: { week_id: string; total_lessons: number }) => {
    weekProgress[row.week_id] = {
      total: row.total_lessons,
      completed: 0,
    };
  });

  // Add completed counts
  userProgress?.forEach((row: { week_id: string; completed_lessons: number }) => {
    if (weekProgress[row.week_id]) {
      weekProgress[row.week_id].completed = row.completed_lessons;
    }
  });

  return { curriculum, quarters, weeks, enrollment, weekProgress };
}

export default async function MentorPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getMentorData(user.id);
  if (!data) return <div className="p-6">Curriculum not found</div>;

  const { curriculum, quarters, weeks, enrollment, weekProgress } = data;

  // Calculate overall progress
  const totalCompleted = Object.values(weekProgress).reduce((acc, w) => acc + w.completed, 0);
  const totalLessons = Object.values(weekProgress).reduce((acc, w) => acc + w.total, 0);
  const overallProgress = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0;

  const currentWeek = enrollment?.current_week || 1;

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Dashboard</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">CEO Mentor Curriculum</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{curriculum.name}</h1>
          <p className="text-muted-foreground mt-2">{curriculum.description}</p>
        </div>
      </div>

      {/* Overall Progress */}
      <Card className="border-border bg-card/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Your Progress</p>
              <p className="text-2xl font-bold">Week {currentWeek} of 52</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Lessons Completed</p>
              <p className="text-lg font-semibold">{totalCompleted} / {totalLessons}</p>
            </div>
          </div>
          <Progress value={overallProgress} className="h-2 bg-muted" />
          <p className="text-sm text-muted-foreground mt-2">{Math.round(overallProgress)}% complete</p>
        </CardContent>
      </Card>

      {/* Quarters */}
      <div className="space-y-8">
        {quarters?.map((quarter) => {
          const quarterWeeks = weeks?.filter(w => w.quarter_id === quarter.id) || [];
          const quarterCompleted = quarterWeeks.reduce(
            (acc, w) => acc + (weekProgress[w.id]?.completed || 0),
            0
          );
          const quarterTotal = quarterWeeks.reduce(
            (acc, w) => acc + (weekProgress[w.id]?.total || 0),
            0
          );
          const quarterProgress = quarterTotal > 0 ? (quarterCompleted / quarterTotal) * 100 : 0;

          return (
            <div key={quarter.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span className="text-cyan-500">Q{quarter.number}:</span>
                    {quarter.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {quarter.theme} • Weeks {quarter.weeks_start}-{quarter.weeks_end}
                  </p>
                </div>
                <Badge variant="outline" className="border-border">
                  {Math.round(quarterProgress)}% complete
                </Badge>
              </div>

              {/* Progress bar for quarter */}
              <Progress value={quarterProgress} className="h-1.5 bg-muted" />

              {/* Weeks Grid */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {quarterWeeks.sort((a, b) => a.number - b.number).map((week) => {
                  const progress = weekProgress[week.id] || { completed: 0, total: 0 };
                  const isComplete = progress.total > 0 && progress.completed === progress.total;
                  const hasStarted = progress.completed > 0;
                  const isCurrent = week.number === currentWeek;
                  const isLocked = week.number > currentWeek;

                  return (
                    <Link
                      key={week.id}
                      href={isLocked ? "#" : `/mentor/${quarter.number}/${week.number}`}
                      className={isLocked ? "cursor-not-allowed" : ""}
                    >
                      <Card className={`border-border bg-card/50 transition-all h-full ${
                        isLocked
                          ? "opacity-50"
                          : isCurrent
                          ? "border-cyan-500/50 ring-1 ring-cyan-500/20"
                          : "hover:border-border hover:bg-muted/50"
                      }`}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="outline"
                              className={
                                isComplete
                                  ? "border-green-500/30 text-green-400"
                                  : isCurrent
                                  ? "border-cyan-500/30 text-cyan-400"
                                  : hasStarted
                                  ? "border-orange-500/30 text-orange-400"
                                  : "border-border text-muted-foreground"
                              }
                            >
                              {isComplete ? (
                                <>
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  Complete
                                </>
                              ) : isCurrent ? (
                                "Current Week"
                              ) : hasStarted ? (
                                <>
                                  <Clock className="h-3 w-3 mr-1" />
                                  In Progress
                                </>
                              ) : isLocked ? (
                                "Locked"
                              ) : (
                                "Not Started"
                              )}
                            </Badge>
                            <span className="text-sm text-muted-foreground">Week {week.number}</span>
                          </div>
                          <CardTitle className="text-base mt-2">{week.title}</CardTitle>
                          {week.theme && (
                            <CardDescription className="text-muted-foreground text-sm">
                              {week.theme}
                            </CardDescription>
                          )}
                        </CardHeader>
                        <CardContent>
                          {/* Mentor */}
                          {week.mentor && (
                            <div className="flex items-center gap-2 mb-3">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={week.mentor.image_url || undefined} />
                                <AvatarFallback className="text-xs bg-cyan-500/20 text-cyan-400">
                                  {week.mentor.name.split(" ").map((n: string) => n[0]).join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-muted-foreground">{week.mentor.name}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {progress.completed} / {progress.total} lessons
                            </span>
                          </div>
                          {progress.total > 0 && (
                            <Progress
                              value={(progress.completed / progress.total) * 100}
                              className="h-1 bg-muted mt-2"
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
