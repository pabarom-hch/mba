import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Database,
  PlayCircle,
  ChevronRight,
  Building2,
  TrendingUp,
  Clock,
  BookOpen,
} from "lucide-react";

export default async function CasesHubPage() {
  const supabase = await createClient();

  // Get case study counts
  const { data: caseStudies } = await supabase
    .from("lessons")
    .select("id, title, slug, summary, duration_minutes, difficulty")
    .like("slug", "nexus-case-%")
    .order("title");

  const { data: datasets } = await supabase
    .from("case_study_datasets")
    .select("id, dataset_name, display_name, description")
    .eq("source_type", "nexus")
    .eq("is_active", true);

  const caseCount = caseStudies?.length || 0;
  const datasetCount = datasets?.length || 0;

  // Simulations are stored as markdown files, hardcoded for now
  const simulations = [
    { name: "Blue Sheet Builder", slug: "blue-sheet-builder", type: "Strategic Selling" },
    { name: "Financial Modeling", slug: "financial-modeling", type: "Financial Analysis" },
    { name: "Utilization Optimizer", slug: "utilization-optimizer", type: "Operations" },
    { name: "LBO Model Builder", slug: "pe-lbo-model", type: "Private Equity" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Case Studies</h1>
        <p className="text-muted-foreground max-w-2xl">
          Real business scenarios for applied learning. Work through complex challenges
          using actual data from professional services firms.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {/* Nexus Collection */}
        <Link href="/cases/nexus">
          <Card className="border-border bg-card/50 hover:bg-card hover:border-border transition-all cursor-pointer h-full">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Building2 className="h-6 w-6 text-orange-500" />
                </div>
                <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 border-0">
                  Live Data
                </Badge>
              </div>
              <CardTitle className="text-xl">Nexus Case Studies</CardTitle>
              <CardDescription className="text-muted-foreground">
                Real data from a professional services firm implementing Miller Heiman,
                turnaround advisory, and PE transactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  {caseCount} cases
                </span>
                <span className="flex items-center gap-1">
                  <Database className="h-4 w-4" />
                  {datasetCount} datasets
                </span>
                <span className="flex items-center gap-1">
                  <PlayCircle className="h-4 w-4" />
                  {simulations.length} simulations
                </span>
              </div>
              <div className="flex items-center gap-1 mt-4 text-orange-400 text-sm font-medium">
                Explore collection
                <ChevronRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Future Collections - Placeholder */}
        <Card className="border-border bg-card/30 opacity-60 h-full">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-muted">
                <TrendingUp className="h-6 w-6 text-muted-foreground" />
              </div>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-0">
                Coming Soon
              </Badge>
            </div>
            <CardTitle className="text-xl text-muted-foreground">Classic MBA Cases</CardTitle>
            <CardDescription className="text-muted-foreground">
              Timeless business cases from Harvard, Stanford, and Wharton covering
              strategy, marketing, and operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Coming in Q3 2026</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/30 opacity-60 h-full">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-muted">
                <BookOpen className="h-6 w-6 text-muted-foreground" />
              </div>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-0">
                Coming Soon
              </Badge>
            </div>
            <CardTitle className="text-xl text-muted-foreground">Industry Deep Dives</CardTitle>
            <CardDescription className="text-muted-foreground">
              Comprehensive analyses of specific industries including healthcare,
              technology, and financial services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Coming in Q4 2026</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Case Studies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recently Added</h2>
        <div className="grid gap-4">
          {caseStudies?.slice(0, 4).map((caseStudy) => (
            <Link key={caseStudy.id} href={`/cases/nexus/${caseStudy.slug}`}>
              <Card className="border-border bg-card/50 hover:bg-card hover:border-border transition-all cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{caseStudy.title}</h3>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {caseStudy.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ml-4 shrink-0">
                    {caseStudy.duration_minutes && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {caseStudy.duration_minutes} min
                      </span>
                    )}
                    {caseStudy.difficulty && (
                      <Badge variant="outline" className="border-border capitalize">
                        {caseStudy.difficulty}
                      </Badge>
                    )}
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-500/10">
              <Briefcase className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{caseCount}</p>
              <p className="text-sm text-muted-foreground">Case Studies</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-500/10">
              <Database className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{datasetCount}</p>
              <p className="text-sm text-muted-foreground">Datasets</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-500/10">
              <PlayCircle className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">{simulations.length}</p>
              <p className="text-sm text-muted-foreground">Simulations</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
