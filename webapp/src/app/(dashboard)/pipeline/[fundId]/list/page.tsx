import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowLeft,
  Plus,
  Users,
  Building,
  ArrowUpDown,
  ExternalLink,
  LayoutGrid,
  List,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LP_TYPE_LABELS } from "@/types/database";
import type {
  Fund,
  LpPipelineStage,
  LpOpportunity,
  LpOrganization,
  LpContact,
} from "@/types/database";

interface PipelineListPageProps {
  params: Promise<{ fundId: string }>;
  searchParams: Promise<{
    search?: string;
    lpType?: string;
    sort?: string;
    order?: 'asc' | 'desc';
  }>;
}

interface OpportunityWithRelations extends LpOpportunity {
  organization: LpOrganization | null;
  contact: LpContact | null;
  stage: LpPipelineStage | null;
}

async function getFundWithOpportunities(fundId: string, userId: string) {
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

  // Get stages
  const { data: stages } = await supabase
    .from("lp_pipeline_stages")
    .select("*")
    .eq("fund_id", fundId)
    .order("sort_order");

  // Get opportunities with related data
  const { data: opportunities } = await supabase
    .from("lp_opportunities")
    .select(`
      *,
      lp_organizations (*),
      lp_contacts (*),
      lp_pipeline_stages (*)
    `)
    .eq("fund_id", fundId)
    .eq("status", "active");

  // Transform opportunities
  const opportunitiesWithRelations: OpportunityWithRelations[] = (opportunities || []).map((opp) => ({
    ...opp,
    organization: opp.lp_organizations,
    contact: opp.lp_contacts,
    stage: opp.lp_pipeline_stages,
  }));

  return {
    fund: fund as Fund,
    stages: stages || [],
    opportunities: opportunitiesWithRelations,
  };
}

function formatCurrency(amount: number): string {
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0)}K`;
  }
  return `$${amount.toLocaleString()}`;
}

function formatDate(date: string | null): string {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PipelineListPage({ params, searchParams }: PipelineListPageProps) {
  const { fundId } = await params;
  const { search, lpType, sort = "updated_at", order = "desc" } = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const data = await getFundWithOpportunities(fundId, user.id);

  if (!data) {
    notFound();
  }

  const { fund, stages, opportunities } = data;

  // Apply filters
  let filteredOpportunities = opportunities.filter((opp) => {
    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      const matchesName = opp.name?.toLowerCase().includes(searchLower);
      const matchesOrg = opp.organization?.name?.toLowerCase().includes(searchLower);
      const contactFullName = opp.contact
        ? `${opp.contact.first_name || ''} ${opp.contact.last_name || ''}`.trim()
        : '';
      const matchesContact = contactFullName.toLowerCase().includes(searchLower);
      if (!matchesName && !matchesOrg && !matchesContact) {
        return false;
      }
    }

    // LP Type filter
    if (lpType) {
      if (opp.organization?.type !== lpType) {
        return false;
      }
    }

    return true;
  });

  // Apply sorting
  filteredOpportunities = [...filteredOpportunities].sort((a, b) => {
    let aVal: string | number | null = null;
    let bVal: string | number | null = null;

    switch (sort) {
      case "name":
        aVal = a.name || "";
        bVal = b.name || "";
        break;
      case "organization":
        aVal = a.organization?.name || "";
        bVal = b.organization?.name || "";
        break;
      case "stage":
        aVal = a.stage?.sort_order || 0;
        bVal = b.stage?.sort_order || 0;
        break;
      case "potential_commitment":
        aVal = a.potential_commitment || 0;
        bVal = b.potential_commitment || 0;
        break;
      case "probability":
        aVal = a.probability || 0;
        bVal = b.probability || 0;
        break;
      case "updated_at":
      default:
        aVal = a.updated_at || a.created_at || "";
        bVal = b.updated_at || b.created_at || "";
        break;
    }

    if (typeof aVal === "string" && typeof bVal === "string") {
      return order === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    }
    if (typeof aVal === "number" && typeof bVal === "number") {
      return order === "asc" ? aVal - bVal : bVal - aVal;
    }
    return 0;
  });

  // Calculate metrics
  const totalOpportunities = opportunities.length;
  const totalPipelineValue = opportunities.reduce((sum, o) => sum + (o.potential_commitment || 0), 0);

  function getSortUrl(column: string) {
    const newOrder = sort === column && order === "desc" ? "asc" : "desc";
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (lpType) params.set("lpType", lpType);
    params.set("sort", column);
    params.set("order", newOrder);
    return `/pipeline/${fundId}/list?${params.toString()}`;
  }

  function SortableHeader({ column, children }: { column: string; children: React.ReactNode }) {
    const isActive = sort === column;
    return (
      <Link href={getSortUrl(column)} className="flex items-center gap-1 hover:text-white">
        {children}
        <ArrowUpDown className={`h-3 w-3 ${isActive ? "text-orange-400" : "text-zinc-600"}`} />
      </Link>
    );
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
                  <span>-</span>
                  <span>{formatCurrency(totalPipelineValue)} pipeline</span>
                  <span>-</span>
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

          {/* View Toggle & Metrics */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* View Toggle */}
              <div className="flex items-center border border-zinc-800 rounded-lg overflow-hidden">
                <Link href={`/pipeline/${fundId}`}>
                  <Button variant="ghost" size="sm" className="h-8 px-3 rounded-none">
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="h-8 px-3 rounded-none bg-zinc-800">
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Filter Status */}
              {(search || lpType) && (
                <span className="text-sm text-zinc-500 ml-2">
                  Showing {filteredOpportunities.length} of {totalOpportunities}
                </span>
              )}
            </div>

            {/* Metrics Link */}
            <Link href={`/pipeline/${fundId}/metrics`}>
              <Button variant="outline" size="sm" className="border-zinc-700 h-9">
                <BarChart3 className="h-4 w-4 mr-2" />
                Metrics
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-zinc-950 z-10">
            <TableRow className="border-zinc-800 hover:bg-transparent">
              <TableHead className="text-zinc-400">
                <SortableHeader column="name">Opportunity</SortableHeader>
              </TableHead>
              <TableHead className="text-zinc-400">
                <SortableHeader column="organization">Organization</SortableHeader>
              </TableHead>
              <TableHead className="text-zinc-400">LP Type</TableHead>
              <TableHead className="text-zinc-400">
                <SortableHeader column="stage">Stage</SortableHeader>
              </TableHead>
              <TableHead className="text-zinc-400 text-right">
                <SortableHeader column="potential_commitment">Commitment</SortableHeader>
              </TableHead>
              <TableHead className="text-zinc-400 text-right">
                <SortableHeader column="probability">Prob.</SortableHeader>
              </TableHead>
              <TableHead className="text-zinc-400">Contact</TableHead>
              <TableHead className="text-zinc-400">
                <SortableHeader column="updated_at">Updated</SortableHeader>
              </TableHead>
              <TableHead className="text-zinc-400 w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOpportunities.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-12 text-zinc-500">
                  {search || lpType
                    ? "No opportunities match your filters"
                    : "No opportunities yet"}
                </TableCell>
              </TableRow>
            ) : (
              filteredOpportunities.map((opp) => (
                <TableRow key={opp.id} className="border-zinc-800 hover:bg-zinc-900/50">
                  <TableCell className="font-medium">
                    <Link
                      href={`/pipeline/${fundId}/opportunities/${opp.id}`}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {opp.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {opp.organization ? (
                      <Link
                        href={`/pipeline/${fundId}/organizations/${opp.organization.id}`}
                        className="hover:text-orange-400 transition-colors"
                      >
                        {opp.organization.name}
                      </Link>
                    ) : (
                      <span className="text-zinc-500">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {opp.organization?.type ? (
                      <Badge variant="outline" className="border-zinc-700 text-xs">
                        {LP_TYPE_LABELS[opp.organization.type as keyof typeof LP_TYPE_LABELS] || opp.organization.type}
                      </Badge>
                    ) : (
                      <span className="text-zinc-500">-</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {opp.stage ? (
                      <Badge
                        style={{
                          backgroundColor: `${opp.stage.color || '#71717a'}20`,
                          borderColor: `${opp.stage.color || '#71717a'}50`,
                          color: opp.stage.color || '#a1a1aa'
                        }}
                        className="border"
                      >
                        {opp.stage.name}
                      </Badge>
                    ) : (
                      <span className="text-zinc-500">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {opp.potential_commitment
                      ? formatCurrency(opp.potential_commitment)
                      : <span className="text-zinc-500">-</span>
                    }
                  </TableCell>
                  <TableCell className="text-right">
                    {opp.probability != null
                      ? `${Math.round(opp.probability * 100)}%`
                      : <span className="text-zinc-500">-</span>
                    }
                  </TableCell>
                  <TableCell>
                    {opp.contact ? (
                      <Link
                        href={`/pipeline/${fundId}/contacts/${opp.contact.id}`}
                        className="hover:text-orange-400 transition-colors"
                      >
                        {opp.contact.first_name} {opp.contact.last_name}
                      </Link>
                    ) : (
                      <span className="text-zinc-500">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-zinc-400 text-sm">
                    {formatDate(opp.updated_at)}
                  </TableCell>
                  <TableCell>
                    <Link href={`/pipeline/${fundId}/opportunities/${opp.id}`}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
