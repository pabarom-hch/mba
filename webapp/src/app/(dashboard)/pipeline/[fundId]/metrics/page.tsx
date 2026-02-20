import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  ArrowRight,
  Clock,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Fund, LpOpportunity, LpPipelineStage, LpActivity } from "@/types/database";
import { LP_TYPE_LABELS } from "@/types/database";
import { Lightbulb, FileText } from "lucide-react";

interface MetricsPageProps {
  params: Promise<{ fundId: string }>;
}

interface StageMetrics {
  stage: LpPipelineStage;
  count: number;
  totalValue: number;
  weightedValue: number;
  avgProbability: number;
}

interface ConversionMetrics {
  fromStage: string;
  toStage: string;
  rate: number;
}

interface FundBuilderInsight {
  questionText: string;
  responseValue: string;
  sectionName: string;
}

function formatCurrency(amount: number | null): string {
  if (!amount) return "$0";
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`;
  return `$${amount.toLocaleString()}`;
}

async function getMetricsData(fundId: string, userId: string) {
  const supabase = await createClient();

  // Verify fund ownership
  const { data: fund } = await supabase
    .from("funds")
    .select("*")
    .eq("id", fundId)
    .eq("user_id", userId)
    .single();

  if (!fund) return null;

  // Get stages
  const { data: stages } = await supabase
    .from("lp_pipeline_stages")
    .select("*")
    .eq("fund_id", fundId)
    .order("sort_order");

  // Get opportunities with organizations
  const { data: opportunities } = await supabase
    .from("lp_opportunities")
    .select(`
      *,
      lp_organizations (*)
    `)
    .eq("fund_id", fundId);

  // Get recent activities
  const { data: activities } = await supabase
    .from("lp_activities")
    .select("*")
    .eq("opportunity_id", opportunities?.map(o => o.id) || [])
    .order("activity_date", { ascending: false })
    .limit(10);

  // Get stage history for conversion calculations
  const { data: stageHistory } = await supabase
    .from("lp_opportunity_stage_history")
    .select("*")
    .order("changed_at", { ascending: false });

  // Get organizations for LP type breakdown
  const { data: organizations } = await supabase
    .from("lp_organizations")
    .select("*")
    .eq("fund_id", fundId);

  // Get fund builder responses with questions
  const { data: fundBuilderResponses } = await supabase
    .from("fund_builder_responses")
    .select(`
      response_value,
      fund_builder_questions!inner (
        question_text,
        fund_builder_sections!inner (
          name
        )
      )
    `)
    .eq("fund_id", fundId)
    .not("response_value", "is", null);

  // Transform fund builder data into insights
  const fundBuilderInsights: FundBuilderInsight[] = (fundBuilderResponses || [])
    .filter((r) => r.response_value && r.response_value.trim() !== "")
    .map((r) => ({
      questionText: (r.fund_builder_questions as unknown as { question_text: string; fund_builder_sections: { name: string } }).question_text,
      responseValue: r.response_value!,
      sectionName: (r.fund_builder_questions as unknown as { question_text: string; fund_builder_sections: { name: string } }).fund_builder_sections.name,
    }));

  return {
    fund,
    stages: stages || [],
    opportunities: opportunities || [],
    activities: activities || [],
    stageHistory: stageHistory || [],
    organizations: organizations || [],
    fundBuilderInsights,
  };
}

export default async function MetricsPage({ params }: MetricsPageProps) {
  const { fundId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const data = await getMetricsData(fundId, user.id);

  if (!data) {
    notFound();
  }

  const { fund, stages, opportunities, activities, organizations, fundBuilderInsights } = data;

  // Calculate stage metrics
  const stageMetrics: StageMetrics[] = stages.map((stage) => {
    const stageOpps = opportunities.filter((o) => o.stage_id === stage.id);
    const totalValue = stageOpps.reduce((sum, o) => sum + (o.potential_commitment || 0), 0);
    const weightedValue = stageOpps.reduce(
      (sum, o) => sum + (o.potential_commitment || 0) * (o.probability || 0.5),
      0
    );
    const avgProbability =
      stageOpps.length > 0
        ? stageOpps.reduce((sum, o) => sum + (o.probability || 0.5), 0) / stageOpps.length
        : 0;

    return {
      stage,
      count: stageOpps.length,
      totalValue,
      weightedValue,
      avgProbability,
    };
  });

  // Calculate totals
  const totalOpportunities = opportunities.length;
  const totalPipelineValue = opportunities.reduce(
    (sum, o) => sum + (o.potential_commitment || 0),
    0
  );
  const weightedPipelineValue = opportunities.reduce(
    (sum, o) => sum + (o.potential_commitment || 0) * (o.probability || 0.5),
    0
  );
  const activeOpportunities = opportunities.filter((o) => o.status === "active").length;
  const wonOpportunities = opportunities.filter((o) => o.status === "won");
  const committedCapital = wonOpportunities.reduce(
    (sum, o) => sum + (o.actual_commitment || o.potential_commitment || 0),
    0
  );

  // Pipeline coverage ratio (target 3-4x)
  const targetSize = fund.target_size || 0;
  const coverageRatio = targetSize > 0 ? totalPipelineValue / targetSize : 0;

  // Progress to target
  const progressToTarget = targetSize > 0 ? (committedCapital / targetSize) * 100 : 0;

  // LP Type breakdown
  const lpTypeBreakdown = organizations.reduce((acc, org) => {
    const type = org.type || "other";
    if (!acc[type]) {
      acc[type] = { count: 0, value: 0 };
    }
    const orgOpps = opportunities.filter((o) => o.organization_id === org.id);
    acc[type].count += orgOpps.length;
    acc[type].value += orgOpps.reduce((sum, o) => sum + (o.potential_commitment || 0), 0);
    return acc;
  }, {} as Record<string, { count: number; value: number }>);

  // Activity stats (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const recentActivities = activities.filter(
    (a) => a.activity_date && new Date(a.activity_date) >= thirtyDaysAgo
  );

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/pipeline/${fundId}`}>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-orange-500" />
              Pipeline Metrics
            </h1>
            <p className="text-zinc-400 text-sm">{fund.name}</p>
          </div>
        </div>
        <Link href={`/pipeline/${fundId}`}>
          <Button variant="outline" className="border-zinc-700">
            Back to Pipeline
          </Button>
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                <DollarSign className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">
                  {formatCurrency(totalPipelineValue)}
                </p>
                <p className="text-sm text-zinc-500">Total Pipeline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                <TrendingUp className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">
                  {formatCurrency(weightedPipelineValue)}
                </p>
                <p className="text-sm text-zinc-500">Weighted Pipeline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                <Target className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">{coverageRatio.toFixed(1)}x</p>
                <p className="text-sm text-zinc-500">Coverage Ratio</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <Users className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalOpportunities}</p>
                <p className="text-sm text-zinc-500">Total Opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress to Target */}
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-500" />
            Progress to Target
          </CardTitle>
          <CardDescription className="text-zinc-400">
            {formatCurrency(committedCapital)} committed of {formatCurrency(targetSize)} target
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">Committed Capital</span>
              <span className="font-medium">{progressToTarget.toFixed(1)}%</span>
            </div>
            <Progress value={Math.min(progressToTarget, 100)} className="h-3 bg-zinc-800" />
            <div className="flex justify-between text-xs text-zinc-500 mt-2">
              <span>$0</span>
              <span>{formatCurrency(targetSize / 2)}</span>
              <span>{formatCurrency(targetSize)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fund Strategy (from Fund Builder) */}
      {fundBuilderInsights.length > 0 && (
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Fund Strategy
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Key insights from your Fund Builder responses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {fundBuilderInsights.slice(0, 6).map((insight, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-500 uppercase tracking-wide">
                      {insight.sectionName}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-zinc-300 mb-1">
                    {insight.questionText}
                  </p>
                  <p className="text-sm text-zinc-400 line-clamp-3">
                    {insight.responseValue}
                  </p>
                </div>
              ))}
            </div>
            {fundBuilderInsights.length > 6 && (
              <div className="mt-4 text-center">
                <Link href={`/fund-builder/${fundId}`}>
                  <Button variant="outline" size="sm" className="border-zinc-700">
                    View All {fundBuilderInsights.length} Responses
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Stage Breakdown */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Pipeline by Stage</CardTitle>
            <CardDescription className="text-zinc-400">
              Opportunity count and value per stage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stageMetrics.map((sm) => {
              const valuePercent =
                totalPipelineValue > 0 ? (sm.totalValue / totalPipelineValue) * 100 : 0;

              return (
                <div key={sm.stage.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: sm.stage.color || "#71717a" }}
                      />
                      <span className="text-sm font-medium">{sm.stage.name}</span>
                      <Badge variant="outline" className="text-xs border-zinc-700">
                        {sm.count}
                      </Badge>
                    </div>
                    <span className="text-sm text-green-400 font-medium">
                      {formatCurrency(sm.totalValue)}
                    </span>
                  </div>
                  <Progress value={valuePercent} className="h-2 bg-zinc-800" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* LP Type Breakdown */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Pipeline by LP Type</CardTitle>
            <CardDescription className="text-zinc-400">
              Distribution across investor categories
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {(Object.entries(lpTypeBreakdown) as [string, { count: number; value: number }][])
              .sort((a, b) => b[1].value - a[1].value)
              .slice(0, 8)
              .map(([type, data]) => (
                <div key={type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {LP_TYPE_LABELS[type as keyof typeof LP_TYPE_LABELS] || type}
                    </span>
                    <Badge variant="outline" className="text-xs border-zinc-700">
                      {data.count}
                    </Badge>
                  </div>
                  <span className="text-sm text-green-400 font-medium">
                    {formatCurrency(data.value)}
                  </span>
                </div>
              ))}
            {Object.keys(lpTypeBreakdown).length === 0 && (
              <p className="text-sm text-zinc-500">No LP type data available</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Stage Funnel */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Pipeline Funnel</CardTitle>
            <CardDescription className="text-zinc-400">
              Opportunity flow through stages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {stageMetrics.map((sm, idx) => {
                const maxCount = Math.max(...stageMetrics.map((s) => s.count), 1);
                const widthPercent = (sm.count / maxCount) * 100;
                const prevCount = idx > 0 ? stageMetrics[idx - 1].count : sm.count;
                const conversionRate = prevCount > 0 ? (sm.count / prevCount) * 100 : 0;

                return (
                  <div key={sm.stage.id} className="flex items-center gap-3">
                    <div className="w-24 text-xs text-zinc-400 truncate">{sm.stage.name}</div>
                    <div className="flex-1 h-8 bg-zinc-800 rounded overflow-hidden relative">
                      <div
                        className="h-full transition-all flex items-center justify-end pr-2"
                        style={{
                          width: `${Math.max(widthPercent, 5)}%`,
                          backgroundColor: sm.stage.color || "#71717a",
                        }}
                      >
                        <span className="text-xs font-medium text-white">{sm.count}</span>
                      </div>
                    </div>
                    {idx > 0 && (
                      <div className="w-16 text-xs text-right">
                        <span className={conversionRate >= 50 ? "text-green-400" : "text-zinc-500"}>
                          {conversionRate.toFixed(0)}%
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-400" />
              Recent Activity
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Last 10 logged activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activities.length === 0 ? (
              <p className="text-sm text-zinc-500">No activities logged yet</p>
            ) : (
              <div className="space-y-3">
                {activities.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 shrink-0">
                      <Activity className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.subject}</p>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Badge variant="outline" className="text-xs border-zinc-700">
                          {activity.type}
                        </Badge>
                        {activity.activity_date && (
                          <span>{new Date(activity.activity_date).toLocaleDateString()}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle>Summary Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm text-zinc-500">Active Opportunities</p>
              <p className="text-2xl font-bold">{activeOpportunities}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Won Opportunities</p>
              <p className="text-2xl font-bold text-green-400">{wonOpportunities.length}</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Avg. Opportunity Size</p>
              <p className="text-2xl font-bold">
                {formatCurrency(totalOpportunities > 0 ? totalPipelineValue / totalOpportunities : 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Activities (30 days)</p>
              <p className="text-2xl font-bold">{recentActivities.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
