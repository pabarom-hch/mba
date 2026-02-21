import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, StickyNote, Calendar, BookOpen, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

async function getNotesData(userId: string) {
  const supabase = await createClient();

  // Get all user notes with lesson info
  const { data: notes } = await supabase
    .from("user_notes")
    .select(`
      *,
      lesson:lessons(id, title, slug, type)
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  // Get highlights
  const { data: highlights } = await supabase
    .from("user_highlights")
    .select(`
      *,
      lesson:lessons(id, title, slug)
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return { notes: notes || [], highlights: highlights || [] };
}

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { notes, highlights } = await getNotesData(user.id);

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">My Notes</span>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Notes</h1>
        <p className="text-muted-foreground mt-2">
          {notes.length} notes • {highlights.length} highlights
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10">
              <StickyNote className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{notes.length}</p>
              <p className="text-sm text-muted-foreground">Notes</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
              <BookOpen className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{highlights.length}</p>
              <p className="text-sm text-muted-foreground">Highlights</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notes List */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Recent Notes</h2>

        {notes.length === 0 ? (
          <Card className="border-border bg-card/50">
            <CardContent className="p-8 text-center">
              <StickyNote className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No notes yet</p>
              <p className="text-sm text-muted-foreground mt-1">
                Start taking notes while reading lessons
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {notes.map((note) => (
              <Card key={note.id} className="border-border bg-card/50">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      {note.highlight_text && (
                        <p className="text-sm font-medium text-pink-400 mb-1">
                          {note.highlight_text}
                        </p>
                      )}
                      {note.lesson && (
                        <CardDescription className="text-muted-foreground text-sm flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {note.lesson.title}
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {note.created_at && formatDistanceToNow(new Date(note.created_at), { addSuffix: true })}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground whitespace-pre-wrap">{note.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Highlights List */}
      {highlights.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Highlights</h2>
          <div className="space-y-4">
            {highlights.map((highlight) => (
              <Card key={highlight.id} className="border-border bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-1 h-full min-h-[40px] rounded-full shrink-0"
                      style={{
                        backgroundColor:
                          highlight.color === "yellow"
                            ? "#eab308"
                            : highlight.color === "green"
                            ? "#22c55e"
                            : highlight.color === "blue"
                            ? "#3b82f6"
                            : "#eab308",
                      }}
                    />
                    <div className="flex-1">
                      <p className="text-foreground italic">&quot;{highlight.text}&quot;</p>
                      {highlight.note && (
                        <p className="text-sm text-muted-foreground mt-2">{highlight.note}</p>
                      )}
                      {highlight.lesson && (
                        <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {highlight.lesson.title}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
