import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  Plus,
  Rocket,
  Building2,
  TrendingUp,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Fund } from "@/types/database";

const STATUS_COLORS: Record<string, string> = {
  building: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30",
  raising: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  first_close: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  final_close: "bg-green-500/10 text-green-400 border-green-500/30",
  investing: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  harvesting: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

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

async function getFunds(userId: string): Promise<Fund[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("funds")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching funds:", error);
    return [];
  }

  return data || [];
}

export default async function FundBuilderPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const funds = await getFunds(user.id);

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Rocket className="h-8 w-8 text-orange-500" />
            Fund Builder
          </h1>
          <p className="text-zinc-400 mt-1">
            Build and manage your PE funds with guided workflows
          </p>
        </div>
        <Link href="/fund-builder/new">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="h-4 w-4 mr-2" />
            New Fund
          </Button>
        </Link>
      </div>

      {/* Fund Cards */}
      {funds.length === 0 ? (
        <Card className="border-zinc-800 bg-zinc-900/50 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 mb-4">
              <Building2 className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No funds yet</h3>
            <p className="text-zinc-400 text-center max-w-md mb-6">
              Start building your first fund. The Fund Builder will guide you through
              strategy development, legal formation, and capital raising.
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {funds.map((fund) => (
            <Link key={fund.id} href={`/fund-builder/${fund.id}`}>
              <Card className="border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-800/50 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {fund.name}
                        {fund.is_sample_data && (
                          <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-500">
                            Sample
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-zinc-400 mt-1 line-clamp-2">
                        {fund.description || "No description"}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={STATUS_COLORS[fund.status || "building"]}
                    >
                      {STATUS_LABELS[fund.status || "building"]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Fund Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">{formatCurrency(fund.target_size)}</p>
                        <p className="text-xs text-zinc-500">Target</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-zinc-500" />
                      <div>
                        <p className="text-sm font-medium">
                          {fund.carried_interest_rate ? `${(fund.carried_interest_rate * 100).toFixed(0)}%` : "20%"}
                        </p>
                        <p className="text-xs text-zinc-500">Carry</p>
                      </div>
                    </div>
                  </div>

                  {/* Fund Terms */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                      {fund.management_fee_rate ? `${(fund.management_fee_rate * 100).toFixed(1)}%` : "2%"} Mgmt
                    </Badge>
                    <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                      {fund.preferred_return ? `${(fund.preferred_return * 100).toFixed(0)}%` : "8%"} Pref
                    </Badge>
                    {fund.vintage_year && (
                      <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {fund.vintage_year}
                      </Badge>
                    )}
                  </div>

                  {/* Progress placeholder */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Builder Progress</span>
                      <span className="text-zinc-400">0%</span>
                    </div>
                    <Progress value={0} className="h-1.5 bg-zinc-800" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Quick Links */}
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardHeader>
          <CardTitle className="text-lg">Learn More</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/pe/10/module-29-fund-formation/01-fund-strategy-and-validation">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                  <Rocket className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Fund Strategy</p>
                  <p className="text-sm text-zinc-400">Module 29, Lesson 1</p>
                </div>
              </div>
            </Link>
            <Link href="/pe/10/module-29-fund-formation/02-fund-formation-and-legal">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                  <Building2 className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Legal Formation</p>
                  <p className="text-sm text-zinc-400">Module 29, Lesson 2</p>
                </div>
              </div>
            </Link>
            <Link href="/pe/10/module-29-fund-formation/03-capital-raising-and-fundraising">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-800 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-800/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Capital Raising</p>
                  <p className="text-sm text-zinc-400">Module 29, Lesson 3</p>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
