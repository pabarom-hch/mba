import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowLeft,
  Plus,
  Users,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PipelineKanban } from "@/components/pipeline/PipelineKanban";
import { PipelineFilters } from "@/components/pipeline/PipelineFilters";
import type {
  Fund,
  LpPipelineStage,
  LpOpportunity,
  LpOrganization,
  LpContact,
  LpStageChecklistTemplate,
} from "@/types/database";

interface PipelinePageProps {
  params: Promise<{ fundId: string }>;
  searchParams: Promise<{ search?: string; lpType?: string; view?: string }>;
}

export interface PipelineStageWithOpportunities extends LpPipelineStage {
  opportunities: (LpOpportunity & {
    organization?: LpOrganization | null;
    contact?: LpContact | null;
    checklist_progress?: { completed: number; total: number };
  })[];
  checklist_templates: LpStageChecklistTemplate[];
}

async function getFundWithPipeline(fundId: string, userId: string) {
  const supabase = await createClient();

  // Get fund
  const { data: fund, error: fundError } = await supabase
    .from("funds")
    .select("*")
    .eq("id", fundId)
    .eq("user_id", userId)
    .single();

  if (fundError || !fund) {
    return null;
  }

  // Get stages with checklist templates
  const { data: stages } = await supabase
    .from("lp_pipeline_stages")
    .select(`
      *,
      lp_stage_checklist_templates (*)
    `)
    .eq("fund_id", fundId)
    .order("sort_order");

  // Get opportunities with related data
  const { data: opportunities } = await supabase
    .from("lp_opportunities")
    .select(`
      *,
      lp_organizations (*),
      lp_contacts (*),
      lp_opportunity_checklist_items (*)
    `)
    .eq("fund_id", fundId)
    .eq("status", "active");

  // Build stages with opportunities
  const stagesWithOpportunities: PipelineStageWithOpportunities[] = (stages || []).map((stage) => {
    const stageOpportunities = (opportunities || [])
      .filter((opp) => opp.stage_id === stage.id)
      .map((opp) => {
        const checklistItems = opp.lp_opportunity_checklist_items || [];
        const stageChecklistItems = checklistItems.filter(
          (item: { stage_id: string | null }) => item.stage_id === stage.id
        );
        return {
          ...opp,
          organization: opp.lp_organizations,
          contact: opp.lp_contacts,
          checklist_progress: {
            completed: stageChecklistItems.filter((item: { is_completed: boolean | null }) => item.is_completed).length,
            total: stageChecklistItems.length,
          },
        };
      });

    return {
      ...stage,
      opportunities: stageOpportunities,
      checklist_templates: stage.lp_stage_checklist_templates || [],
    };
  });

  return {
    fund: fund as Fund,
    stages: stagesWithOpportunities,
  };
}

export default async function FundPipelinePage({ params, searchParams }: PipelinePageProps) {
  const { fundId } = await params;
  const { search, lpType } = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const data = await getFundWithPipeline(fundId, user.id);

  if (!data) {
    notFound();
  }

  const { fund, stages } = data;

  // Calculate total opportunities (before filtering)
  const totalOpportunities = stages.reduce((sum, s) => sum + s.opportunities.length, 0);
  const totalPipelineValue = stages.reduce(
    (sum, s) =>
      sum + s.opportunities.reduce((oppSum, o) => oppSum + (o.potential_commitment || 0), 0),
    0
  );

  // Apply filters to stages
  const filteredStages = stages.map((stage) => {
    const filteredOpportunities = stage.opportunities.filter((opp) => {
      // Search filter - match against name, organization name, or contact name
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesName = opp.name?.toLowerCase().includes(searchLower);
        const matchesOrg = opp.organization?.name?.toLowerCase().includes(searchLower);
        const contactFullName = opp.contact ? `${opp.contact.first_name || ''} ${opp.contact.last_name || ''}`.trim() : '';
        const matchesContact = contactFullName.toLowerCase().includes(searchLower);
        if (!matchesName && !matchesOrg && !matchesContact) {
          return false;
        }
      }

      // LP Type filter
      if (lpType) {
        const orgType = opp.organization?.type;
        if (orgType !== lpType) {
          return false;
        }
      }

      return true;
    });

    return {
      ...stage,
      opportunities: filteredOpportunities,
    };
  });

  // Calculate filtered count
  const filteredOpportunities = filteredStages.reduce((sum, s) => sum + s.opportunities.length, 0);

  function formatCurrency(amount: number): string {
    if (amount >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(1)}M`;
    }
    if (amount >= 1_000) {
      return `$${(amount / 1_000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="flex-shrink-0 border-b border-zinc-800 bg-zinc-950 px-6 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link href="/pipeline">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">{fund.name}</h1>
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span>{totalOpportunities} opportunities</span>
                  <span>•</span>
                  <span>{formatCurrency(totalPipelineValue)} pipeline</span>
                  <span>•</span>
                  <span>{formatCurrency(fund.target_size)} target</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/pipeline/${fundId}/contacts`}>
                <Button variant="outline" size="sm" className="border-zinc-700">
                  <Users className="h-4 w-4 mr-2" />
                  Contacts
                </Button>
              </Link>
              <Link href={`/pipeline/${fundId}/organizations`}>
                <Button variant="outline" size="sm" className="border-zinc-700">
                  <Building className="h-4 w-4 mr-2" />
                  Organizations
                </Button>
              </Link>
              <Link href={`/pipeline/${fundId}/opportunities/new`}>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Opportunity
                </Button>
              </Link>
            </div>
          </div>
          {/* Filters */}
          <PipelineFilters
            fundId={fundId}
            totalCount={totalOpportunities}
            filteredCount={filteredOpportunities}
          />
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-hidden">
        <PipelineKanban
          fundId={fundId}
          stages={filteredStages}
        />
      </div>
    </div>
  );
}
