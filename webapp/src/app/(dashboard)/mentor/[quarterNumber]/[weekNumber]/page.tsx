import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, CheckCircle2, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MarkdownContent } from "@/components/ui/markdown-content";

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

async function getWeekData(quarterNumber: number, weekNumber: number, userId: string) {
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
    .select("*")
    .eq("curriculum_id", curriculum.id)
    .eq("number", quarterNumber)
    .single();

  if (!quarter) return null;

  // Get the week with mentor
  const { data: week } = await supabase
    .from("weeks")
    .select(`
      *,
      mentor:mentors(*)
    `)
    .eq("quarter_id", quarter.id)
    .eq("number", weekNumber)
    .single();

  if (!week) return null;

  // Get all lessons for this week
  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .eq("week_id", week.id)
    .order("number");

  // Get user's progress
  const lessonIds = lessons?.map(l => l.id) || [];
  const { data: progress } = await supabase
    .from("user_lesson_progress")
    .select("lesson_id, status, completed_at")
    .eq("user_id", userId)
    .in("lesson_id", lessonIds);

  const progressMap: Record<string, { status: string; completed_at: string | null }> = {};
  progress?.forEach(p => {
    progressMap[p.lesson_id] = { status: p.status, completed_at: p.completed_at };
  });

  // Get prev/next weeks
  const { data: prevWeekData } = await supabase
    .from("weeks")
    .select("number, quarter_id")
    .lt("number", weekNumber)
    .order("number", { ascending: false })
    .limit(1)
    .single();

  const { data: nextWeekData } = await supabase
    .from("weeks")
    .select("number, quarter_id")
    .gt("number", weekNumber)
    .order("number")
    .limit(1)
    .single();

  // Get quarter numbers for prev/next weeks
  let prevWeek: { number: number; quarterNumber: number } | null = null;
  let nextWeek: { number: number; quarterNumber: number } | null = null;

  if (prevWeekData) {
    const { data: prevQuarter } = await supabase
      .from("quarters")
      .select("number")
      .eq("id", prevWeekData.quarter_id)
      .single();
    prevWeek = { number: prevWeekData.number, quarterNumber: prevQuarter?.number || quarterNumber };
  }

  if (nextWeekData) {
    const { data: nextQuarter } = await supabase
      .from("quarters")
      .select("number")
      .eq("id", nextWeekData.quarter_id)
      .single();
    nextWeek = { number: nextWeekData.number, quarterNumber: nextQuarter?.number || quarterNumber };
  }

  return { quarter, week, lessons: lessons || [], progressMap, prevWeek, nextWeek };
}

export default async function WeekPage({
  params,
}: {
  params: Promise<{ quarterNumber: string; weekNumber: string }>;
}) {
  const { quarterNumber, weekNumber } = await params;
  const qNum = parseInt(quarterNumber);
  const wNum = parseInt(weekNumber);

  if (isNaN(qNum) || isNaN(wNum)) {
    notFound();
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const data = await getWeekData(qNum, wNum, user.id);
  if (!data) {
    notFound();
  }

  const { quarter, week, lessons, progressMap, prevWeek, nextWeek } = data;

  const completedCount = Object.values(progressMap).filter(p => p.status === "completed").length;
  const progressPercent = lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0;

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400 flex-wrap">
        <Link href="/" className="hover:text-zinc-100">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/mentor" className="hover:text-zinc-100">Mentor Curriculum</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-500">Q{quarter.number}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-100">Week {week.number}</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <Badge className="bg-cyan-500/10 text-cyan-400 mb-2">
              Q{quarter.number}: {quarter.name}
            </Badge>
            <h1 className="text-3xl font-bold">Week {week.number}: {week.title}</h1>
            {week.theme && (
              <p className="text-zinc-400 mt-2">{week.theme}</p>
            )}
          </div>
        </div>

        {/* Mentor Card */}
        {week.mentor && (
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={week.mentor.image_url || undefined} />
                  <AvatarFallback className="text-xl bg-cyan-500/20 text-cyan-400">
                    {week.mentor.name.split(" ").map((n: string) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{week.mentor.name}</h3>
                  {week.mentor.title && (
                    <p className="text-sm text-zinc-400">{week.mentor.title}</p>
                  )}
                  {week.mentor.philosophy && (
                    <p className="text-sm text-zinc-500 mt-1 line-clamp-2 max-w-xl">
                      {week.mentor.philosophy}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Progress Bar */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-zinc-400">Week Progress</span>
              <span className="text-sm font-medium">{completedCount} / {lessons.length} lessons</span>
            </div>
            <Progress value={progressPercent} className="h-2 bg-zinc-800" />
          </CardContent>
        </Card>
      </div>

      {/* Overview */}
      {week.overview && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="text-lg">Week Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <MarkdownContent content={week.overview} basePath={`/mentor/${quarterNumber}/${weekNumber}`} />
          </CardContent>
        </Card>
      )}

      {/* Daily Lessons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Daily Lessons</h2>
        <div className="grid gap-3">
          {lessons.map((lesson) => {
            const status = progressMap[lesson.id]?.status;
            const isComplete = status === "completed";
            const isInProgress = status === "in_progress";
            const dayIndex = (lesson.number - 1) % 7;
            const dayName = dayNames[dayIndex] || `Day ${lesson.number}`;

            return (
              <Link
                key={lesson.id}
                href={`/mentor/${quarterNumber}/${weekNumber}/${lesson.slug}`}
              >
                <Card className="border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-800/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Day Number */}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg shrink-0 ${
                        isComplete
                          ? "bg-green-500/10"
                          : isInProgress
                          ? "bg-orange-500/10"
                          : "bg-zinc-800"
                      }`}>
                        {isComplete ? (
                          <CheckCircle2 className="h-6 w-6 text-green-500" />
                        ) : isInProgress ? (
                          <Clock className="h-6 w-6 text-orange-500" />
                        ) : (
                          <span className="text-lg font-bold text-zinc-400">{lesson.number}</span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                            <Calendar className="h-3 w-3 mr-1" />
                            {dayName}
                          </Badge>
                        </div>
                        <h3 className="font-medium mt-1">{lesson.title}</h3>
                        {lesson.summary && (
                          <p className="text-sm text-zinc-400 mt-1 line-clamp-1">
                            {lesson.summary}
                          </p>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="hidden sm:flex items-center gap-4">
                        {lesson.duration_minutes && (
                          <span className="text-sm text-zinc-500">{lesson.duration_minutes} min</span>
                        )}
                        <Badge
                          variant="outline"
                          className={
                            isComplete
                              ? "border-green-500/30 text-green-400"
                              : isInProgress
                              ? "border-orange-500/30 text-orange-400"
                              : "border-zinc-700 text-zinc-400"
                          }
                        >
                          {isComplete ? "Complete" : isInProgress ? "In Progress" : "Start"}
                        </Badge>
                      </div>

                      <ChevronRight className="h-5 w-5 text-zinc-600" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        {prevWeek ? (
          <Link href={`/mentor/${prevWeek.quarterNumber}/${prevWeek.number}`}>
            <Button variant="outline" className="gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Week {prevWeek.number}
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextWeek ? (
          <Link href={`/mentor/${nextWeek.quarterNumber}/${nextWeek.number}`}>
            <Button className="gap-2 bg-cyan-600 hover:bg-cyan-700">
              Week {nextWeek.number}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
