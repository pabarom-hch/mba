"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Moon, CheckCircle2, Send, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const reflectionPrompts = [
  {
    id: "wins",
    title: "Today's Wins",
    prompt: "What were your 3 biggest wins or accomplishments today?",
  },
  {
    id: "lessons",
    title: "Lessons Learned",
    prompt: "What did you learn today that you can apply tomorrow?",
  },
  {
    id: "challenges",
    title: "Challenges Faced",
    prompt: "What challenges did you face and how did you handle them?",
  },
  {
    id: "gratitude",
    title: "Evening Gratitude",
    prompt: "What are you grateful for from today?",
  },
  {
    id: "tomorrow",
    title: "Tomorrow's Focus",
    prompt: "What is the #1 priority for tomorrow?",
  },
];

export default function EveningReflectionPage() {
  const router = useRouter();
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (id: string, value: string) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return;

    setIsSubmitting(true);

    // Save reflection to user_notes or a dedicated reflections table
    // For now, we'll create a combined note
    const reflectionContent = reflectionPrompts
      .map(p => `## ${p.title}\n${responses[p.id] || "No response"}`)
      .join("\n\n");

    await supabase.from("user_notes").insert({
      user_id: user.id,
      content: reflectionContent,
      highlight_text: `Evening Reflection - ${new Date().toLocaleDateString()}`,
    });

    setIsSubmitting(false);
    setIsComplete(true);
  };

  const filledCount = Object.values(responses).filter(v => v.trim().length > 0).length;
  const canSubmit = filledCount >= 3; // Require at least 3 responses

  if (isComplete) {
    return (
      <div className="p-6 lg:p-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Dashboard</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Evening Reflection</span>
        </div>

        <Card className="border-green-500/30 bg-green-500/5">
          <CardContent className="p-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-400">Reflection Complete!</h2>
            <p className="text-muted-foreground mt-2 mb-6">
              Great job reflecting on your day. Rest well and recharge for tomorrow.
            </p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700">
                Back to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Evening Reflection</span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10">
            <Moon className="h-8 w-8 text-indigo-500" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Evening Reflection</h1>
          <p className="text-muted-foreground mt-2">End your day with clarity and intention</p>
        </div>
      </div>

      {/* Progress */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          {filledCount} of {reflectionPrompts.length} prompts completed
          {!canSubmit && <span className="text-muted-foreground"> (minimum 3 required)</span>}
        </p>
      </div>

      {/* Prompts */}
      <div className="space-y-6">
        {reflectionPrompts.map((prompt) => (
          <Card key={prompt.id} className="border-border bg-card/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{prompt.title}</CardTitle>
              <CardDescription>{prompt.prompt}</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={responses[prompt.id] || ""}
                onChange={(e) => handleChange(prompt.id, e.target.value)}
                placeholder="Write your thoughts..."
                className="min-h-[100px] bg-card border-border focus:border-indigo-500 resize-none"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submit */}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          disabled={!canSubmit || isSubmitting}
          className="bg-indigo-600 hover:bg-indigo-700 px-8"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Complete Reflection
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
