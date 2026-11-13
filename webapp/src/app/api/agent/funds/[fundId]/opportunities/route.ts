import { NextResponse } from "next/server";
import { jsonError, UUID_RE, withAgentAuth } from "@/lib/agent-api/auth";

/**
 * GET /api/agent/funds/{fundId}/opportunities?status=active
 * LP pipeline opportunities with organization, contact, and stage.
 */
export const GET = withAgentAuth<{ fundId: string }>(
  async ({ supabase, userId }, request, { fundId }) => {
    if (!UUID_RE.test(fundId)) return jsonError(400, "fundId must be a UUID");

    // Ownership check: the service-role client bypasses RLS.
    const { data: fund } = await supabase
      .from("funds")
      .select("id, name")
      .eq("id", fundId)
      .eq("user_id", userId)
      .maybeSingle();
    if (!fund) return jsonError(404, "Fund not found");

    const status = request.nextUrl.searchParams.get("status") || "active";
    let query = supabase
      .from("lp_opportunities")
      .select("*, lp_organizations (*), lp_contacts (*), lp_pipeline_stages (*)")
      .eq("fund_id", fundId);
    if (status !== "all") query = query.eq("status", status);

    const { data, error } = await query;
    if (error) throw error;

    const opportunities = (data ?? []).map(
      ({ lp_organizations, lp_contacts, lp_pipeline_stages, ...opp }) => ({
        ...opp,
        organization: lp_organizations,
        contact: lp_contacts,
        stage: lp_pipeline_stages,
      })
    );
    return NextResponse.json({ fund, opportunities });
  }
);
