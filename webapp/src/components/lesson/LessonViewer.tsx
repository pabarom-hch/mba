"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Clock,
  BookOpen,
  Lightbulb,
  Target,
  HelpCircle,
  Loader2,
  Highlighter,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { HighlightableContent } from "./HighlightableContent";
import { HighlightsSidebar } from "./HighlightsSidebar";
import { ExerciseContent } from "./ExerciseContent";
import { AudioPlayer } from "./AudioPlayer";
import type { Lesson, UserLessonProgress, UserNote } from "@/types/database";

interface Highlight {
  id: string;
  text: string;
  color: string;
  note: string | null;
  start_offset: number;
  end_offset: number;
}

interface LessonViewerProps {
  lesson: Lesson;
  phase?: { id: string; name: string; number: number };
  module?: { id: string; name: string; slug: string };
  week?: { id: string; title: string; number: number };
  prevLesson: { id: string; title: string; slug: string } | null;
  nextLesson: { id: string; title: string; slug: string } | null;
  progress: UserLessonProgress | null;
  notes: UserNote[];
  highlights: Highlight[];
  exerciseData?: Record<number, Record<string, string>>;
  basePath: string;
  breadcrumbs: { label: string; href: string }[];
}

export function LessonViewer({
  lesson,
  phase,
  module,
  week,
  prevLesson,
  nextLesson,
  progress,
  notes,
  highlights,
  exerciseData = {},
  basePath,
  breadcrumbs,
}: LessonViewerProps) {
  const router = useRouter();
  const supabase = createClient();
  const [isPending, startTransition] = useTransition();
  const [isComplete, setIsComplete] = useState(progress?.status === "completed");

  const handleMarkComplete = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const newStatus = isComplete ? "in_progress" : "completed";

    if (progress) {
      // Update existing progress
      await supabase
        .from("user_lesson_progress")
        .update({
          status: newStatus,
          completed_at: newStatus === "completed" ? new Date().toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", progress.id);
    } else {
      // Create new progress record
      await supabase.from("user_lesson_progress").insert({
        user_id: user.id,
        lesson_id: lesson.id,
        status: newStatus,
        started_at: new Date().toISOString(),
        completed_at: newStatus === "completed" ? new Date().toISOString() : null,
      });
    }

    setIsComplete(!isComplete);
    startTransition(() => {
      router.refresh();
    });
  };

  const keyConceptsArray = lesson.key_concepts as string[] | null;
  const learningObjectivesArray = lesson.learning_objectives as string[] | null;
  const reflectionQuestionsArray = lesson.reflection_questions as string[] | null;
  const furtherReadingArray = lesson.further_reading as { title: string; author?: string; url?: string }[] | null;

  return (
    <div className="flex h-full min-h-0 min-w-0 w-full">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0 min-w-0 w-full">
        {/* Header */}
        <div className="border-b border-border bg-background px-4 sm:px-6 py-4 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 flex-wrap">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <ChevronRight className="h-4 w-4 shrink-0" />}
                <Link href={crumb.href} className="hover:text-foreground truncate">
                  {crumb.label}
                </Link>
              </span>
            ))}
            <ChevronRight className="h-4 w-4 shrink-0" />
            <span className="text-foreground truncate">{lesson.title}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="outline" className="border-border capitalize shrink-0">
                  {lesson.type}
                </Badge>
                {lesson.difficulty && (
                  <Badge variant="outline" className="border-border capitalize shrink-0">
                    {lesson.difficulty}
                  </Badge>
                )}
                {lesson.duration_minutes && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1 shrink-0">
                    <Clock className="h-4 w-4" />
                    {lesson.duration_minutes} min
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-bold break-words">{lesson.title}</h1>
              {lesson.summary && (
                <p className="text-muted-foreground mt-2 max-w-2xl break-words">{lesson.summary}</p>
              )}
            </div>

            <Button
              onClick={handleMarkComplete}
              disabled={isPending}
              variant={isComplete ? "default" : "outline"}
              className={`shrink-0 w-full sm:w-auto ${isComplete ? "bg-green-600 hover:bg-green-700" : ""}`}
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : isComplete ? (
                <CheckCircle2 className="h-4 w-4 mr-2" />
              ) : null}
              {isComplete ? "Completed" : "Mark Complete"}
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <ScrollArea className="flex-1 min-w-0">
          <div className="p-4 sm:p-6 lg:p-8 w-full">
            <div className="flex gap-8 w-full">
              {/* Main Content Column */}
              <div className="flex-1 max-w-4xl min-w-0 w-full">
                {/* Audio Player */}
                {lesson.audio_url && (
                  <div className="mb-6">
                    <AudioPlayer
                      src={lesson.audio_url}
                      title={`Listen to: ${lesson.title}`}
                      lessonId={lesson.id}
                    />
                  </div>
                )}

                {/* Highlighting Tip */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 p-3 rounded-lg bg-card/50 border border-border">
                  <Highlighter className="h-4 w-4 text-orange-500" />
                  <span>Select any text to highlight it or add a note</span>
                </div>

                {/* Learning Objectives */}
                {learningObjectivesArray && learningObjectivesArray.length > 0 && (
                  <Card className="border-border bg-card/50 mb-6">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-500" />
                        Learning Objectives
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {learningObjectivesArray.map((obj, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="text-blue-500 mt-1">•</span>
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Main Content - with Interactive Tables */}
                <Card className="border-border bg-card/50 mb-6 overflow-x-hidden">
                  <CardContent className="p-4 sm:p-6">
                    <HighlightableContent lessonId={lesson.id} highlights={highlights}>
                      <ExerciseContent
                        content={lesson.content || ""}
                        lessonId={lesson.id}
                        exerciseData={exerciseData}
                        basePath={basePath}
                      />
                    </HighlightableContent>
                  </CardContent>
                </Card>

            {/* Key Concepts */}
            {keyConceptsArray && keyConceptsArray.length > 0 && (
              <Card className="border-border bg-card/50 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {keyConceptsArray.map((concept, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-muted text-foreground">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reflection Questions */}
            {reflectionQuestionsArray && reflectionQuestionsArray.length > 0 && (
              <Card className="border-border bg-card/50 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-purple-500" />
                    Reflection Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reflectionQuestionsArray.map((question, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-purple-500 font-semibold">{idx + 1}.</span>
                        {question}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Further Reading */}
            {furtherReadingArray && furtherReadingArray.length > 0 && (
              <Card className="border-border bg-card/50 mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    Further Reading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {furtherReadingArray.map((item, idx) => (
                      <li key={idx} className="text-sm">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:text-orange-300"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <span className="text-foreground">{item.title}</span>
                        )}
                        {item.author && (
                          <span className="text-muted-foreground"> by {item.author}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8">
                  {prevLesson ? (
                    <Link href={`${basePath}/${prevLesson.slug}`}>
                      <Button variant="outline" className="gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">Previous:</span>
                        <span className="max-w-[150px] truncate">{prevLesson.title}</span>
                      </Button>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextLesson ? (
                    <Link href={`${basePath}/${nextLesson.slug}`}>
                      <Button className="gap-2 bg-orange-500 hover:bg-orange-600">
                        <span className="hidden sm:inline">Next:</span>
                        <span className="max-w-[150px] truncate">{nextLesson.title}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Link href={basePath}>
                      <Button className="gap-2 bg-green-600 hover:bg-green-700">
                        <CheckCircle2 className="h-4 w-4" />
                        Back to Module
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Highlights Sidebar - Desktop only */}
              <div className="hidden xl:block w-72 shrink-0">
                <div className="sticky top-4 space-y-4">
                  <HighlightsSidebar highlights={highlights} />
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
