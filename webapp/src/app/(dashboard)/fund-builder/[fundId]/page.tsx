"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import {
  ArrowLeft,
  Rocket,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Loader2,
  BookOpen,
  ExternalLink,
  Kanban,
  Save,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { Fund, FundBuilderPhase, FundBuilderSection, FundBuilderQuestion } from "@/types/database";

interface PhaseWithSections extends FundBuilderPhase {
  sections: SectionWithQuestions[];
}

interface SectionWithQuestions extends FundBuilderSection {
  questions: FundBuilderQuestion[];
}

interface Response {
  question_id: string;
  response_value: string | null;
  response_json: Record<string, unknown> | null;
}

const PHASE_COLORS: Record<number, string> = {
  0: "#71717a", // zinc
  1: "#f97316", // orange
  2: "#3b82f6", // blue
  3: "#8b5cf6", // purple
  4: "#eab308", // yellow
  5: "#22c55e", // green
  6: "#14b8a6", // teal
  7: "#10b981", // emerald
};

export default function FundBuilderWorkflowPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;

  const [isLoading, setIsLoading] = useState(true);
  const [fund, setFund] = useState<Fund | null>(null);
  const [phases, setPhases] = useState<PhaseWithSections[]>([]);
  const [responses, setResponses] = useState<Map<string, Response>>(new Map());
  const [activePhase, setActivePhase] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [savingQuestions, setSavingQuestions] = useState<Set<string>>(new Set());
  const [phaseProgress, setPhaseProgress] = useState<Map<string, number>>(new Map());

  const saveTimeouts = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const calculatePhaseProgress = useCallback(
    (phase: PhaseWithSections, responseMap: Map<string, Response>) => {
      let totalQuestions = 0;
      let answeredQuestions = 0;

      phase.sections.forEach((section) => {
        section.questions.forEach((question) => {
          totalQuestions++;
          const response = responseMap.get(question.id);
          if (response?.response_value && response.response_value.trim() !== "") {
            answeredQuestions++;
          }
        });
      });

      return totalQuestions > 0 ? Math.round((answeredQuestions / totalQuestions) * 100) : 0;
    },
    []
  );

  useEffect(() => {
    async function loadData() {
      // Load fund
      const { data: fundData } = await supabase
        .from("funds")
        .select("*")
        .eq("id", fundId)
        .single();

      if (!fundData) {
        router.push("/fund-builder");
        return;
      }
      setFund(fundData);

      // Load phases with sections and questions
      const { data: phasesData } = await supabase
        .from("fund_builder_phases")
        .select("*")
        .order("sort_order");

      const { data: sectionsData } = await supabase
        .from("fund_builder_sections")
        .select("*")
        .order("sort_order");

      const { data: questionsData } = await supabase
        .from("fund_builder_questions")
        .select("*")
        .order("sort_order");

      // Load existing responses
      const { data: responsesData } = await supabase
        .from("fund_builder_responses")
        .select("*")
        .eq("fund_id", fundId);

      // Build response map
      const responseMap = new Map<string, Response>();
      responsesData?.forEach((r) => {
        responseMap.set(r.question_id, {
          question_id: r.question_id,
          response_value: r.response_value,
          response_json: r.response_json,
        });
      });
      setResponses(responseMap);

      // Build nested structure
      const phasesWithSections: PhaseWithSections[] = (phasesData || []).map((phase) => {
        const sections: SectionWithQuestions[] = (sectionsData || [])
          .filter((s) => s.phase_id === phase.id)
          .map((section) => ({
            ...section,
            questions: (questionsData || []).filter((q) => q.section_id === section.id),
          }));

        return {
          ...phase,
          sections,
        };
      });

      setPhases(phasesWithSections);

      // Calculate progress for all phases
      const progressMap = new Map<string, number>();
      phasesWithSections.forEach((phase) => {
        progressMap.set(phase.id, calculatePhaseProgress(phase, responseMap));
      });
      setPhaseProgress(progressMap);

      // Expand first section of active phase by default
      if (phasesWithSections[0]?.sections[0]) {
        setExpandedSections(new Set([phasesWithSections[0].sections[0].id]));
      }

      setIsLoading(false);
    }

    loadData();
  }, [fundId, supabase, router, calculatePhaseProgress]);

  async function saveResponse(questionId: string, value: string) {
    // Clear existing timeout for this question
    const existingTimeout = saveTimeouts.current.get(questionId);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    // Update local state immediately
    setResponses((prev) => {
      const newMap = new Map(prev);
      newMap.set(questionId, {
        question_id: questionId,
        response_value: value,
        response_json: null,
      });
      return newMap;
    });

    // Debounce the save
    const timeout = setTimeout(async () => {
      setSavingQuestions((prev) => new Set(prev).add(questionId));

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Upsert the response
      await supabase.from("fund_builder_responses").upsert(
        {
          user_id: user.id,
          fund_id: fundId,
          question_id: questionId,
          response_value: value,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "fund_id,question_id",
        }
      );

      // Update phase progress
      const currentPhase = phases[activePhase];
      if (currentPhase) {
        const newProgress = calculatePhaseProgress(currentPhase, responses);
        setPhaseProgress((prev) => {
          const newMap = new Map(prev);
          newMap.set(currentPhase.id, newProgress);
          return newMap;
        });

        // Update fund_builder_progress
        await supabase.from("fund_builder_progress").upsert(
          {
            user_id: user.id,
            fund_id: fundId,
            phase_id: currentPhase.id,
            completion_percentage: newProgress,
            started_at: new Date().toISOString(),
          },
          {
            onConflict: "fund_id,phase_id",
          }
        );
      }

      setSavingQuestions((prev) => {
        const newSet = new Set(prev);
        newSet.delete(questionId);
        return newSet;
      });

      saveTimeouts.current.delete(questionId);
    }, 500);

    saveTimeouts.current.set(questionId, timeout);
  }

  function toggleSection(sectionId: string) {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }

  function renderQuestionInput(question: FundBuilderQuestion) {
    const response = responses.get(question.id);
    const value = response?.response_value || "";
    const isSaving = savingQuestions.has(question.id);

    const baseInputClass = "bg-background border-border";

    switch (question.question_type) {
      case "textarea":
        return (
          <Textarea
            value={value}
            onChange={(e) => saveResponse(question.id, e.target.value)}
            placeholder={question.placeholder || ""}
            rows={4}
            className={`${baseInputClass} resize-none`}
          />
        );

      case "select":
        const options = Array.isArray(question.options) ? question.options : [];
        return (
          <Select value={value} onValueChange={(v) => saveResponse(question.id, v)}>
            <SelectTrigger className={baseInputClass}>
              <SelectValue placeholder={question.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {options.map((opt) => (
                <SelectItem key={String(opt)} value={String(opt)}>
                  {String(opt)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "number":
        return (
          <Input
            type="number"
            value={value}
            onChange={(e) => saveResponse(question.id, e.target.value)}
            placeholder={question.placeholder || ""}
            className={baseInputClass}
          />
        );

      case "date":
        return (
          <Input
            type="date"
            value={value}
            onChange={(e) => saveResponse(question.id, e.target.value)}
            className={baseInputClass}
          />
        );

      default: // text
        return (
          <Input
            type="text"
            value={value}
            onChange={(e) => saveResponse(question.id, e.target.value)}
            placeholder={question.placeholder || ""}
            className={baseInputClass}
          />
        );
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!fund) {
    return (
      <div className="p-6 lg:p-8">
        <p className="text-muted-foreground">Fund not found</p>
      </div>
    );
  }

  const currentPhase = phases[activePhase];
  const currentProgress = currentPhase ? phaseProgress.get(currentPhase.id) || 0 : 0;

  // Calculate overall progress
  const overallProgress =
    phases.length > 0
      ? Math.round(
          phases.reduce((sum, phase) => sum + (phaseProgress.get(phase.id) || 0), 0) /
            phases.length
        )
      : 0;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/fund-builder">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Rocket className="h-6 w-6 text-orange-500" />
              {fund.name}
            </h1>
            <p className="text-muted-foreground text-sm">Fund Builder Workflow</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Overall Progress</p>
            <p className="text-lg font-semibold">{overallProgress}%</p>
          </div>
          <Link href={`/pipeline/${fundId}`}>
            <Button variant="outline" className="border-border">
              <Kanban className="h-4 w-4 mr-2" />
              LP Pipeline
            </Button>
          </Link>
        </div>
      </div>

      {/* Phase Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {phases.map((phase, idx) => {
          const progress = phaseProgress.get(phase.id) || 0;
          const isActive = idx === activePhase;
          const isComplete = progress === 100;

          return (
            <button
              key={phase.id}
              onClick={() => {
                setActivePhase(idx);
                // Expand first section of new phase
                if (phase.sections[0]) {
                  setExpandedSections(new Set([phase.sections[0].id]));
                }
              }}
              className={`flex-shrink-0 px-4 py-3 rounded-lg border transition-all ${
                isActive
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-border bg-card/50 hover:border-border"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: `${PHASE_COLORS[phase.phase_number]}20`,
                    color: PHASE_COLORS[phase.phase_number],
                  }}
                >
                  {isComplete ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    phase.phase_number
                  )}
                </div>
                <span className={`text-sm font-medium ${isActive ? "text-white" : "text-muted-foreground"}`}>
                  {phase.name}
                </span>
              </div>
              {!isComplete && progress > 0 && (
                <div className="mt-2 w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Current Phase Content */}
      {currentPhase && (
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {/* Phase Header Card */}
            <Card className="border-border bg-card/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge
                      variant="outline"
                      style={{
                        backgroundColor: `${PHASE_COLORS[currentPhase.phase_number]}20`,
                        color: PHASE_COLORS[currentPhase.phase_number],
                        borderColor: `${PHASE_COLORS[currentPhase.phase_number]}50`,
                      }}
                    >
                      Phase {currentPhase.phase_number}
                    </Badge>
                    <CardTitle className="mt-2">{currentPhase.name}</CardTitle>
                    {currentPhase.description && (
                      <CardDescription className="text-muted-foreground mt-1">
                        {currentPhase.description}
                      </CardDescription>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{currentProgress}%</p>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                </div>
                <Progress value={currentProgress} className="h-2 bg-muted mt-4" />
              </CardHeader>
            </Card>

            {/* Sections */}
            {currentPhase.sections.length === 0 ? (
              <Card className="border-border bg-card/50">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No questions defined for this phase yet.</p>
                  {currentPhase.phase_number === 5 && (
                    <Link href={`/pipeline/${fundId}`}>
                      <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
                        <Kanban className="h-4 w-4 mr-2" />
                        Go to LP Pipeline
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ) : (
              currentPhase.sections.map((section) => {
                const isExpanded = expandedSections.has(section.id);
                const sectionAnswered = section.questions.filter((q) => {
                  const r = responses.get(q.id);
                  return r?.response_value && r.response_value.trim() !== "";
                }).length;
                const sectionTotal = section.questions.length;
                const sectionComplete = sectionAnswered === sectionTotal && sectionTotal > 0;

                return (
                  <Collapsible key={section.id} open={isExpanded}>
                    <Card className="border-border bg-card/50">
                      <CollapsibleTrigger asChild>
                        <CardHeader
                          className="cursor-pointer hover:bg-muted/30 transition-colors"
                          onClick={() => toggleSection(section.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {isExpanded ? (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                              )}
                              <div>
                                <CardTitle className="text-base flex items-center gap-2">
                                  {section.name}
                                  {sectionComplete && (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  )}
                                </CardTitle>
                                {section.description && (
                                  <CardDescription className="text-muted-foreground text-sm">
                                    {section.description}
                                  </CardDescription>
                                )}
                              </div>
                            </div>
                            <Badge variant="outline" className="border-border">
                              {sectionAnswered}/{sectionTotal}
                            </Badge>
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="space-y-6 pt-0">
                          {section.questions.map((question) => {
                            const response = responses.get(question.id);
                            const hasValue =
                              response?.response_value &&
                              response.response_value.trim() !== "";
                            const isSaving = savingQuestions.has(question.id);

                            return (
                              <div key={question.id} className="space-y-2">
                                <div className="flex items-start gap-2">
                                  {hasValue ? (
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                                  ) : (
                                    <Circle className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />
                                  )}
                                  <div className="flex-1 space-y-2">
                                    <Label className="flex items-center gap-2">
                                      {question.question_text}
                                      {question.is_required && (
                                        <span className="text-red-400">*</span>
                                      )}
                                      {isSaving && (
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                          <Save className="h-3 w-3 animate-pulse" />
                                          Saving...
                                        </span>
                                      )}
                                    </Label>
                                    {question.help_text && (
                                      <p className="text-xs text-muted-foreground">
                                        {question.help_text}
                                      </p>
                                    )}
                                    {renderQuestionInput(question)}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                );
              })
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Lesson Link */}
            {currentPhase.lesson_slug && (
              <Card className="border-border bg-card/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-purple-400" />
                    Related Lesson
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href={`/pe/10/module-29-fund-formation/${currentPhase.lesson_slug}`}>
                    <Button variant="outline" className="w-full border-border justify-between">
                      <span>Module 29 - Lesson {currentPhase.phase_number}</span>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Phase 5 Special - Go to Pipeline */}
            {currentPhase.phase_number === 5 && (
              <Card className="border-green-500/30 bg-green-500/5">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2 text-green-400">
                    <Kanban className="h-4 w-4" />
                    Ready to Raise Capital?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Phase 5 is all about execution. Use the LP Pipeline to manage your capital
                    raising process.
                  </p>
                  <Link href={`/pipeline/${fundId}`}>
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      <Kanban className="h-4 w-4 mr-2" />
                      Open LP Pipeline
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Phase Progress Overview */}
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">All Phases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {phases.map((phase, idx) => {
                  const progress = phaseProgress.get(phase.id) || 0;
                  const isActive = idx === activePhase;

                  return (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(idx)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        isActive ? "bg-muted" : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          {phase.phase_number}. {phase.name}
                        </span>
                        <span className="text-xs text-muted-foreground">{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-1 bg-zinc-700" />
                    </button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle className="text-base">Fund Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {fund.target_size && (
                  <div>
                    <p className="text-xs text-muted-foreground">Target Size</p>
                    <p className="font-medium">
                      ${(fund.target_size / 1_000_000).toFixed(0)}M
                    </p>
                  </div>
                )}
                {fund.management_fee_rate && (
                  <div>
                    <p className="text-xs text-muted-foreground">Management Fee</p>
                    <p className="font-medium">
                      {(fund.management_fee_rate * 100).toFixed(1)}%
                    </p>
                  </div>
                )}
                {fund.carried_interest_rate && (
                  <div>
                    <p className="text-xs text-muted-foreground">Carried Interest</p>
                    <p className="font-medium">
                      {(fund.carried_interest_rate * 100).toFixed(0)}%
                    </p>
                  </div>
                )}
                {fund.preferred_return && (
                  <div>
                    <p className="text-xs text-muted-foreground">Preferred Return</p>
                    <p className="font-medium">
                      {(fund.preferred_return * 100).toFixed(0)}%
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
