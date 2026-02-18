import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  GraduationCap,
  Users,
  BookOpen,
  ArrowRight,
  Flame,
  CheckCircle2,
  Clock,
  Building2,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

async function getDashboardData(userId: string) {
  const supabase = await createClient();

  // Get progress summary from view
  const { data: progressData } = await supabase
    .from("user_progress_summary")
    .select("*")
    .eq("user_id", userId);

  // Get recent lesson activity
  const { data: recentLessonsRaw } = await supabase
    .from("user_lesson_progress")
    .select(`
      id,
      status,
      completed_at,
      lesson_id
    `)
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(5);

  // Fetch lesson details for recent lessons
  const recentLessons: { id: string; status: string; lesson: { title: string; type: string } | null }[] = [];
  if (recentLessonsRaw) {
    for (const item of recentLessonsRaw) {
      const { data: lesson } = await supabase
        .from("lessons")
        .select("title, type")
        .eq("id", item.lesson_id)
        .single();
      recentLessons.push({
        id: item.id,
        status: item.status || "not_started",
        lesson,
      });
    }
  }

  // Get current streak
  let streak = 0;
  try {
    const { data } = await supabase.rpc("get_user_streak", {
      p_user_id: userId,
    });
    streak = data || 0;
  } catch {
    // Streak function might not exist
  }

  // Get today's mentor lesson (based on current week)
  const mentorProgress = progressData?.find(p => p.curriculum_slug === "mentor");
  let todayLesson = null;

  if (mentorProgress?.current_week) {
    const { data: weeks } = await supabase
      .from("weeks")
      .select("id")
      .eq("number", mentorProgress.current_week)
      .single();

    if (weeks) {
      const dayOfWeek = new Date().getDay() || 7; // 1-7, Sunday = 7
      const { data: lesson } = await supabase
        .from("lessons")
        .select("id, title, slug, summary")
        .eq("week_id", weeks.id)
        .eq("number", dayOfWeek)
        .single();

      todayLesson = lesson;
    }
  }

  return {
    progressData: progressData || [],
    recentLessons: recentLessons || [],
    streak,
    todayLesson,
  };
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { progressData, recentLessons, streak, todayLesson } = await getDashboardData(user.id);

  const mbaProgress = progressData.find(p => p.curriculum_slug === "mba");
  const mentorProgress = progressData.find(p => p.curriculum_slug === "mentor");
  const peProgress = progressData.find(p => p.curriculum_slug === "pe-buy-build");

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-zinc-400">Continue your learning journey</p>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Streak Card */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10">
              <Flame className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{streak}</p>
              <p className="text-sm text-zinc-400">Day Streak</p>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Completed */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {(mbaProgress?.lessons_completed || 0) + (mentorProgress?.lessons_completed || 0) + (peProgress?.lessons_completed || 0)}
              </p>
              <p className="text-sm text-zinc-400">Lessons Completed</p>
            </div>
          </CardContent>
        </Card>

        {/* Current Week */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
              <Clock className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">Week {mentorProgress?.current_week || 1}</p>
              <p className="text-sm text-zinc-400">Mentor Curriculum</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Focus */}
      {todayLesson && (
        <Card className="border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-transparent">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
                Today&apos;s Lesson
              </Badge>
            </div>
            <CardTitle className="text-xl">{todayLesson.title}</CardTitle>
            <CardDescription className="text-zinc-400">
              {todayLesson.summary || "Continue your daily learning with today's mentor lesson"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/mentor/today">
                Start Today&apos;s Lesson
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Curriculum Progress */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* MBA Curriculum Card */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
              <GraduationCap className="h-6 w-6 text-purple-500" />
            </div>
            <div className="flex-1">
              <CardTitle>MBA Curriculum</CardTitle>
              <CardDescription className="text-zinc-400">
                {mbaProgress?.lessons_completed || 0} of {mbaProgress?.total_lessons || 0} lessons completed
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress
              value={mbaProgress?.completion_percentage || 0}
              className="h-2 bg-zinc-800"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                {Math.round(mbaProgress?.completion_percentage || 0)}% complete
              </span>
              <Button asChild variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                <Link href="/mba">
                  Continue
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mentor Curriculum Card */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <Users className="h-6 w-6 text-cyan-500" />
            </div>
            <div className="flex-1">
              <CardTitle>CEO Mentor Curriculum</CardTitle>
              <CardDescription className="text-zinc-400">
                Week {mentorProgress?.current_week || 1} of {mentorProgress?.total_weeks || 52}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress
              value={mentorProgress?.completion_percentage || 0}
              className="h-2 bg-zinc-800"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                {Math.round(mentorProgress?.completion_percentage || 0)}% complete
              </span>
              <Button asChild variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                <Link href="/mentor">
                  Continue
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* PE Buy & Build Curriculum Card */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10">
              <Building2 className="h-6 w-6 text-amber-500" />
            </div>
            <div className="flex-1">
              <CardTitle>PE Buy &amp; Build</CardTitle>
              <CardDescription className="text-zinc-400">
                {peProgress?.lessons_completed || 0} of {peProgress?.total_lessons || 0} lessons completed
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress
              value={peProgress?.completion_percentage || 0}
              className="h-2 bg-zinc-800"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-400">
                {Math.round(peProgress?.completion_percentage || 0)}% complete
              </span>
              <Button asChild variant="ghost" size="sm" className="text-amber-400 hover:text-amber-300">
                <Link href="/pe">
                  Continue
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/rituals/morning">
          <Card className="border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                <BookOpen className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <p className="font-medium">Morning Ritual</p>
                <p className="text-sm text-zinc-400">Start your day right</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/books">
          <Card className="border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                <BookOpen className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <p className="font-medium">Reading List</p>
                <p className="text-sm text-zinc-400">Track your books</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/notes">
          <Card className="border-zinc-800 bg-zinc-900/50 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10">
                <BookOpen className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <p className="font-medium">My Notes</p>
                <p className="text-sm text-zinc-400">Review your insights</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Activity */}
      {recentLessons.length > 0 && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLessons.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-zinc-800 p-4"
                >
                  <div className="flex items-center gap-3">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-zinc-500" />
                    )}
                    <div>
                      <p className="font-medium">{item.lesson?.title}</p>
                      <p className="text-sm text-zinc-400 capitalize">
                        {item.lesson?.type}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      item.status === "completed"
                        ? "border-green-500/30 text-green-400"
                        : "border-zinc-700 text-zinc-400"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
