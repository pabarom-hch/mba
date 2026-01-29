"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, MessageSquare, ChevronDown, ChevronRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Highlight {
  id: string;
  text: string;
  color: string;
  note: string | null;
}

interface HighlightsSidebarProps {
  highlights: Highlight[];
}

const colorStyles: Record<string, string> = {
  yellow: "border-l-yellow-400 bg-yellow-400/5",
  green: "border-l-green-400 bg-green-400/5",
  blue: "border-l-blue-400 bg-blue-400/5",
  pink: "border-l-pink-400 bg-pink-400/5",
};

export function HighlightsSidebar({ highlights: initialHighlights }: HighlightsSidebarProps) {
  const router = useRouter();
  const supabase = createClient();
  const [highlights, setHighlights] = useState(initialHighlights);
  const [isOpen, setIsOpen] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    setDeletingId(id);

    const { error } = await supabase
      .from("user_highlights")
      .delete()
      .eq("id", id);

    if (!error) {
      setHighlights((prev) => prev.filter((h) => h.id !== id));
      router.refresh();
    }

    setDeletingId(null);
  };

  if (highlights.length === 0) {
    return null;
  }

  return (
    <Card className="border-zinc-800 bg-zinc-900/50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-zinc-800/50 transition-colors py-3">
            <CardTitle className="text-sm flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #facc15 25%, #22c55e 50%, #3b82f6 75%, #ec4899 100%)",
                  }}
                />
                Highlights ({highlights.length})
              </span>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-zinc-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-zinc-500" />
              )}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0 space-y-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className={`border-l-4 rounded-r-lg p-3 ${
                  colorStyles[highlight.color] || colorStyles.yellow
                }`}
              >
                <p className="text-sm text-zinc-300 italic line-clamp-3">
                  &quot;{highlight.text}&quot;
                </p>

                {highlight.note && (
                  <div className="mt-2 flex items-start gap-2">
                    <MessageSquare className="h-3 w-3 text-zinc-500 mt-0.5 shrink-0" />
                    <p className="text-xs text-zinc-400">{highlight.note}</p>
                  </div>
                )}

                <div className="mt-2 flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(highlight.id)}
                    disabled={deletingId === highlight.id}
                    className="h-6 px-2 text-zinc-500 hover:text-red-400"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
