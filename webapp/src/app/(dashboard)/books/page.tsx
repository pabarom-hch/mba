import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ChevronRight, BookOpen, ExternalLink, CheckCircle2, Clock, BookMarked } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getBooksData(userId: string) {
  const supabase = await createClient();

  // Get all books
  const { data: books } = await supabase
    .from("books")
    .select("*")
    .order("title");

  // Get user's book progress
  const { data: userBooks } = await supabase
    .from("user_books")
    .select("*")
    .eq("user_id", userId);

  const bookStatusMap: Record<string, { status: string; rating: number | null; notes: string | null }> = {};
  userBooks?.forEach(ub => {
    bookStatusMap[ub.book_id] = {
      status: ub.status,
      rating: ub.rating,
      notes: ub.notes,
    };
  });

  return { books: books || [], bookStatusMap };
}

export default async function BooksPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { books, bookStatusMap } = await getBooksData(user.id);

  const readingBooks = books.filter(b => bookStatusMap[b.id]?.status === "reading");
  const completedBooks = books.filter(b => bookStatusMap[b.id]?.status === "completed");
  const wantToReadBooks = books.filter(b => bookStatusMap[b.id]?.status === "want_to_read");
  const notStartedBooks = books.filter(b => !bookStatusMap[b.id]);

  const categories = [...new Set(books.map(b => b.category).filter(Boolean))];

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <Link href="/" className="hover:text-zinc-100">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-100">Reading List</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reading List</h1>
          <p className="text-zinc-400 mt-2">
            {books.length} books • {completedBooks.length} completed
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
              <BookOpen className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{readingBooks.length}</p>
              <p className="text-sm text-zinc-400">Reading</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{completedBooks.length}</p>
              <p className="text-sm text-zinc-400">Completed</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <BookMarked className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{wantToReadBooks.length}</p>
              <p className="text-sm text-zinc-400">Want to Read</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700">
              <Clock className="h-5 w-5 text-zinc-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{notStartedBooks.length}</p>
              <p className="text-sm text-zinc-400">Not Started</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-zinc-900 border border-zinc-800">
          <TabsTrigger value="all">All Books ({books.length})</TabsTrigger>
          <TabsTrigger value="reading">Reading ({readingBooks.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedBooks.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {categories.map(category => {
            const categoryBooks = books.filter(b => b.category === category);
            if (categoryBooks.length === 0) return null;

            return (
              <div key={category} className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-300">{category}</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categoryBooks.map(book => (
                    <BookCard key={book.id} book={book} status={bookStatusMap[book.id]} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Uncategorized */}
          {books.filter(b => !b.category).length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-zinc-300">Other</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {books.filter(b => !b.category).map(book => (
                  <BookCard key={book.id} book={book} status={bookStatusMap[book.id]} />
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="reading" className="space-y-4">
          {readingBooks.length === 0 ? (
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
                <p className="text-zinc-400">No books currently being read</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {readingBooks.map(book => (
                <BookCard key={book.id} book={book} status={bookStatusMap[book.id]} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedBooks.length === 0 ? (
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
                <p className="text-zinc-400">No completed books yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {completedBooks.map(book => (
                <BookCard key={book.id} book={book} status={bookStatusMap[book.id]} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function BookCard({
  book,
  status,
}: {
  book: { id: string; title: string; author: string; description: string | null; amazon_url: string | null; category: string | null };
  status?: { status: string; rating: number | null };
}) {
  return (
    <Card className="border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all h-full">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-base leading-tight">{book.title}</CardTitle>
            <CardDescription className="text-zinc-400 text-sm mt-1">
              by {book.author}
            </CardDescription>
          </div>
          {status && (
            <Badge
              variant="outline"
              className={
                status.status === "completed"
                  ? "border-green-500/30 text-green-400 shrink-0"
                  : status.status === "reading"
                  ? "border-blue-500/30 text-blue-400 shrink-0"
                  : "border-orange-500/30 text-orange-400 shrink-0"
              }
            >
              {status.status === "completed"
                ? "Completed"
                : status.status === "reading"
                ? "Reading"
                : "Want to Read"}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {book.description && (
          <p className="text-sm text-zinc-400 line-clamp-2 mb-3">{book.description}</p>
        )}
        {book.amazon_url && (
          <a
            href={book.amazon_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-orange-400 hover:text-orange-300 flex items-center gap-1"
          >
            View on Amazon
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
