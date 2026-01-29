import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, BookOpen, Quote, Brain, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownContent } from "@/components/ui/markdown-content";

interface KeyWork {
  title: string;
  author?: string;
  url?: string;
}

async function getMentorData(slug: string) {
  const supabase = await createClient();

  const { data: mentor } = await supabase
    .from("mentors")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!mentor) return null;

  // Get weeks taught by this mentor
  const { data: weeksRaw } = await supabase
    .from("weeks")
    .select(`
      id,
      number,
      title,
      quarter_id
    `)
    .eq("mentor_id", mentor.id)
    .order("number");

  // Get quarter info for each week
  const weeks = [];
  for (const week of weeksRaw || []) {
    const { data: quarter } = await supabase
      .from("quarters")
      .select("number, name")
      .eq("id", week.quarter_id)
      .single();

    weeks.push({
      ...week,
      quarterNumber: quarter?.number || 1,
      quarterName: quarter?.name || "",
    });
  }

  return { mentor, weeks };
}

export default async function MentorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getMentorData(slug);
  if (!data) {
    notFound();
  }

  const { mentor, weeks } = data;
  const initials = mentor.name.split(" ").map((n: string) => n[0]).join("");
  const keyWorks = mentor.key_works as KeyWork[] | null;

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <Link href="/" className="hover:text-zinc-100">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/mentor" className="hover:text-zinc-100">Mentor Curriculum</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-100">{mentor.name}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <Avatar className="h-24 w-24 md:h-32 md:w-32">
          <AvatarImage src={mentor.image_url || undefined} />
          <AvatarFallback className="text-3xl bg-cyan-500/20 text-cyan-400">
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{mentor.name}</h1>
          {mentor.title && (
            <p className="text-lg text-zinc-400 mt-2 italic flex items-start gap-2">
              <Quote className="h-5 w-5 shrink-0 mt-1 text-orange-500" />
              {mentor.title}
            </p>
          )}
        </div>
      </div>

      {/* Bio */}
      {mentor.bio && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="text-lg">Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <MarkdownContent content={mentor.bio} />
          </CardContent>
        </Card>
      )}

      {/* Philosophy */}
      {mentor.philosophy && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-500" />
              Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MarkdownContent content={mentor.philosophy} />
          </CardContent>
        </Card>
      )}

      {/* Weeks Taught */}
      {weeks.length > 0 && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="text-lg">Weeks with {mentor.name}</CardTitle>
            <CardDescription>
              {weeks.length} week{weeks.length !== 1 ? "s" : ""} in the curriculum
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeks.map((week) => (
                <Link
                  key={week.id}
                  href={`/mentor/${week.quarterNumber}/${week.number}`}
                >
                  <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all">
                    <div>
                      <Badge variant="outline" className="border-zinc-700 text-zinc-400 mb-1">
                        Q{week.quarterNumber} • Week {week.number}
                      </Badge>
                      <p className="font-medium">{week.title}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-zinc-600" />
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Works / Recommended Reading */}
      {keyWorks && keyWorks.length > 0 && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-500" />
              Recommended Reading
            </CardTitle>
            <CardDescription>
              Books and resources related to {mentor.name}&apos;s philosophy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {keyWorks.map((work, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-emerald-500/10">
                    <BookOpen className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{work.title}</p>
                    {work.author && (
                      <p className="text-xs text-zinc-500">by {work.author}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Back Button */}
      <div className="pt-4">
        <Link href="/mentor">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Curriculum
          </Button>
        </Link>
      </div>
    </div>
  );
}
