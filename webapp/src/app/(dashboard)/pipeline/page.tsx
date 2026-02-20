import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  Plus,
  Kanban,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Fund } from "@/types/database";

const STATUS_LABELS: Record<string, string> = {
  building: "Building",
  raising: "Raising",
  first_close: "First Close",
  final_close: "Final Close",
  investing: "Investing",
  harvesting: "Harvesting",
};

function formatCurrency(amount: number | null): string {
  if (!amount) return "$0";
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0)}K`;
  }
  return `$${amount.toLocaleString()}`;
}

async function getFundsWithPipelineStats(userId: string) {
  const supabase = await createClient();

  // Get funds
  const { data: funds, error } = await supabase
    .from("funds")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error || !funds) {
    return [];
  }

  // Get opportunity counts for each fund
  const fundsWithStats = await Promise.all(
    funds.map(async (fund) => {
      const { count: opportunityCount } = await supabase
        .from("lp_opportunities")
        .select("*", { count: "exact", head: true })
        .eq("fund_id", fund.id);

      const { data: commitments } = await supabase
        .from("lp_opportunities")
        .select("potential_commitment")
        .eq("fund_id", fund.id)
        .eq("status", "active");

      const totalPipeline = commitments?.reduce(
        (sum, opp) => sum + (opp.potential_commitment || 0),
        0
      ) || 0;

      return {
        ...fund,
        opportunity_count: opportunityCount || 0,
        total_pipeline: totalPipeline,
      };
    })
  );

  return fundsWithStats;
}

export default async function PipelinePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const funds = await getFundsWithPipelineStats(user.id);

  // If only one fund exists, redirect directly to its pipeline
  if (funds.length === 1) {
    redirect(`/pipeline/${funds[0].id}`);
  }

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Kanban className="h-8 w-8 text-orange-500" />
            LP Pipeline
          </h1>
          <p className="text-zinc-400 mt-1">
            Track and manage your LP relationships and commitments
          </p>
        </div>
      </div>

      {/* Fund Selection */}
      {funds.length === 0 ? (
        <Card className="border-zinc-800 bg-zinc-900/50 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 mb-4">
              <Building2 className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No funds yet</h3>
            <p className="text-zinc-400 text-center max-w-md mb-6">
              Create a fund first to start tracking your LP pipeline.
              The Fund Builder will help you set up your fund structure.
            </p>
            <Link href="/fund-builder/new">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Fund
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <p className="text-zinc-400">Select a fund to view its LP pipeline:</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {funds.map((fund) => (
              <Link key={fund.id} href={`/pipeline/${fund.id}`}>
                <Card className="border-zinc-800 bg-zinc-900/50 transition-all hover:border-orange-500/50 hover:bg-zinc-800/50 h-full group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg group-hover:text-orange-400 transition-colors">
                          {fund.name}
                        </CardTitle>
                        <CardDescription className="text-zinc-500 text-sm">
                          {STATUS_LABELS[fund.status || "building"]}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-orange-500 transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold">{fund.opportunity_count}</p>
                        <p className="text-xs text-zinc-500">Opportunities</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{formatCurrency(fund.total_pipeline)}</p>
                        <p className="text-xs text-zinc-500">Pipeline Value</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-400">Target:</span>
                      <span className="font-medium">{formatCurrency(fund.target_size)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
