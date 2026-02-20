import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowLeft,
  Plus,
  Building2,
  Globe,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LpOrganization, LpContact } from "@/types/database";
import { LP_TYPE_LABELS } from "@/types/database";

interface OrganizationsPageProps {
  params: Promise<{ fundId: string }>;
}

const APPETITE_COLORS: Record<string, string> = {
  high: "bg-green-500/10 text-green-400 border-green-500/30",
  moderate: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  low: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  none: "bg-red-500/10 text-red-400 border-red-500/30",
};

interface OrgWithContacts extends LpOrganization {
  contacts?: LpContact[];
}

async function getOrganizations(fundId: string, userId: string): Promise<{ fund: { id: string; name: string } | null; organizations: OrgWithContacts[] }> {
  const supabase = await createClient();

  // Verify fund ownership
  const { data: fund } = await supabase
    .from("funds")
    .select("id, name")
    .eq("id", fundId)
    .eq("user_id", userId)
    .single();

  if (!fund) return { fund: null, organizations: [] };

  // Get organizations with contacts
  const { data: orgs } = await supabase
    .from("lp_organizations")
    .select(`
      *,
      lp_contacts (*)
    `)
    .eq("fund_id", fundId)
    .order("name");

  const orgsWithContacts: OrgWithContacts[] = (orgs || []).map((o) => ({
    ...o,
    contacts: o.lp_contacts,
  }));

  return { fund, organizations: orgsWithContacts };
}

function formatCurrency(value: number | null): string {
  if (!value) return "—";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(0)}M`;
  return `$${(value / 1_000).toFixed(0)}K`;
}

export default async function OrganizationsPage({ params }: OrganizationsPageProps) {
  const { fundId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { fund, organizations } = await getOrganizations(fundId, user.id);

  if (!fund) {
    notFound();
  }

  // Group by LP type
  const orgsByType = organizations.reduce((acc, org) => {
    const type = org.type || "other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(org);
    return acc;
  }, {} as Record<string, OrgWithContacts[]>);

  // Calculate stats
  const totalAUM = organizations.reduce((sum, org) => sum + (org.aum || 0), 0);
  const highAppetiteCount = organizations.filter((o) => o.emerging_manager_appetite === "high").length;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/pipeline/${fundId}`}>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-500" />
              Organizations
            </h1>
            <p className="text-zinc-400 text-sm">{fund.name} • {organizations.length} organizations</p>
          </div>
        </div>
        <Link href={`/pipeline/${fundId}/organizations/new`}>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Organization
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        {[
          { label: "Total Orgs", value: organizations.length.toString(), icon: Building2, color: "text-orange-400" },
          { label: "Combined AUM", value: formatCurrency(totalAUM), icon: DollarSign, color: "text-green-400" },
          { label: "High EM Appetite", value: highAppetiteCount.toString(), icon: TrendingUp, color: "text-blue-400" },
          { label: "LP Types", value: Object.keys(orgsByType).length.toString(), icon: Users, color: "text-purple-400" },
        ].map((stat) => (
          <Card key={stat.label} className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Organization List */}
      {organizations.length === 0 ? (
        <Card className="border-zinc-800 bg-zinc-900/50 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 mb-4">
              <Building2 className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No organizations yet</h3>
            <p className="text-zinc-400 text-center max-w-md mb-6">
              Add LP organizations to track institutional investors and their investment preferences.
            </p>
            <Link href={`/pipeline/${fundId}/organizations/new`}>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Organization
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {organizations.map((org) => (
            <Link key={org.id} href={`/pipeline/${fundId}/organizations/${org.id}`}>
              <Card className="border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
                        <Building2 className="h-5 w-5" />
                      </div>

                      {/* Info */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{org.name}</span>
                          <Badge variant="outline" className="bg-zinc-800/50 text-zinc-400 border-zinc-700">
                            {LP_TYPE_LABELS[org.type]}
                          </Badge>
                          {org.emerging_manager_appetite && (
                            <Badge variant="outline" className={APPETITE_COLORS[org.emerging_manager_appetite]}>
                              {org.emerging_manager_appetite} EM appetite
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-500">
                          {org.city && org.state && (
                            <span>{org.city}, {org.state}</span>
                          )}
                          {org.contacts && org.contacts.length > 0 && (
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {org.contacts.length} contact{org.contacts.length !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="hidden sm:flex items-center gap-6 text-sm">
                      {org.aum && (
                        <div className="text-right">
                          <p className="text-zinc-500">AUM</p>
                          <p className="font-medium text-green-400">{formatCurrency(org.aum)}</p>
                        </div>
                      )}
                      {(org.typical_commitment_min || org.typical_commitment_max) && (
                        <div className="text-right">
                          <p className="text-zinc-500">Typical Commitment</p>
                          <p className="font-medium">
                            {formatCurrency(org.typical_commitment_min)} - {formatCurrency(org.typical_commitment_max)}
                          </p>
                        </div>
                      )}
                      {org.website && (
                        <Globe className="h-4 w-4 text-zinc-500" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
