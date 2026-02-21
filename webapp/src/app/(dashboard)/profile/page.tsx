import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, User, Mail, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

async function getProfileData(userId: string) {
  const supabase = await createClient();

  // Get user profile
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", userId)
    .single();

  // Get enrollments
  const { data: enrollments } = await supabase
    .from("user_curriculum_enrollments")
    .select(`
      *,
      curriculum:curricula(id, name, slug)
    `)
    .eq("user_id", userId);

  // Get progress stats
  const { data: progressStats } = await supabase
    .from("user_lesson_progress")
    .select("status")
    .eq("user_id", userId);

  const completedLessons = progressStats?.filter(p => p.status === "completed").length || 0;
  const inProgressLessons = progressStats?.filter(p => p.status === "in_progress").length || 0;

  // Get streak
  let streak = 0;
  try {
    const { data } = await supabase.rpc("get_user_streak", { p_user_id: userId });
    streak = data || 0;
  } catch {
    // Streak function might not exist
  }

  return { profile, enrollments: enrollments || [], completedLessons, inProgressLessons, streak };
}

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { profile, enrollments, completedLessons, inProgressLessons, streak } = await getProfileData(user.id);

  const initials = user.email ? user.email.substring(0, 2).toUpperCase() : "U";

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-3xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Profile</span>
      </div>

      {/* Profile Header */}
      <Card className="border-border bg-card/50">
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile?.avatar_url || undefined} />
              <AvatarFallback className="text-2xl bg-orange-500/20 text-orange-500">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">
                {profile?.display_name || user.email?.split("@")[0] || "User"}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Mail className="h-4 w-4" />
                {user.email}
              </p>
              {user.created_at && (
                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4" />
                  Joined {formatDistanceToNow(new Date(user.created_at), { addSuffix: true })}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-orange-500">{streak}</p>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-500">{completedLessons}</p>
            <p className="text-sm text-muted-foreground">Lessons Completed</p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-blue-500">{inProgressLessons}</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Enrollments */}
      <Card className="border-border bg-card/50">
        <CardHeader>
          <CardTitle className="text-lg">Enrolled Curricula</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {enrollments.map((enrollment) => (
            <div
              key={enrollment.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-card"
            >
              <div>
                <h3 className="font-medium">{enrollment.curriculum?.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Week {enrollment.current_week || 1}
                </p>
              </div>
              <Badge
                variant="outline"
                className={
                  enrollment.status === "active"
                    ? "border-green-500/30 text-green-400"
                    : "border-border"
                }
              >
                {enrollment.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Settings */}
      <Card className="border-border bg-card/50">
        <CardHeader>
          <CardTitle className="text-lg">Preferences</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium">Timezone</p>
              <p className="text-sm text-muted-foreground">
                {profile?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone}
              </p>
            </div>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div>
              <p className="font-medium">Daily Reminder</p>
              <p className="text-sm text-muted-foreground">
                {profile?.daily_reminder_time || "Not set"}
              </p>
            </div>
            <Badge variant="outline" className="border-border">
              Coming Soon
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
