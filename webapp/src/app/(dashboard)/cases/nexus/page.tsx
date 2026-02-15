import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Briefcase,
  Database,
  PlayCircle,
  Building2,
  Target,
  DollarSign,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

// Map case slugs to icons
const caseIcons: Record<string, React.ReactNode> = {
  "nexus-case-miller-heiman-methodology": <Target className="h-5 w-5 text-blue-400" />,
  "nexus-case-consulting-firm-economics": <DollarSign className="h-5 w-5 text-green-400" />,
  "nexus-case-turnaround-advisory": <TrendingUp className="h-5 w-5 text-red-400" />,
  "nexus-case-services-pricing-strategy": <DollarSign className="h-5 w-5 text-yellow-400" />,
  "nexus-case-resource-optimization": <Users className="h-5 w-5 text-purple-400" />,
  "nexus-case-stakeholder-negotiation": <Users className="h-5 w-5 text-orange-400" />,
  "nexus-case-pe-turnaround-buyout": <Building2 className="h-5 w-5 text-emerald-400" />,
};

// Map datasets to icons
const datasetIcons: Record<string, React.ReactNode> = {
  "financial-data": <DollarSign className="h-5 w-5 text-green-400" />,
  "sales-pipeline": <Target className="h-5 w-5 text-blue-400" />,
  "utilization": <Users className="h-5 w-5 text-purple-400" />,
  "rate-cards": <DollarSign className="h-5 w-5 text-yellow-400" />,
  "turnaround": <TrendingUp className="h-5 w-5 text-red-400" />,
  "pe-turnaround": <Building2 className="h-5 w-5 text-emerald-400" />,
};

export default async function NexusCollectionPage() {
  const supabase = await createClient();

  // Get all Nexus case studies
  const { data: caseStudies } = await supabase
    .from("lessons")
    .select("id, title, slug, summary, duration_minutes, difficulty, learning_objectives")
    .like("slug", "nexus-case-%")
    .order("title");

  // Get all Nexus datasets
  const { data: datasets } = await supabase
    .from("case_study_datasets")
    .select("id, dataset_name, display_name, description")
    .eq("source_type", "nexus")
    .eq("is_active", true)
    .order("display_name");

  // Simulations
  const simulations = [
    {
      name: "Blue Sheet Builder",
      slug: "blue-sheet-builder",
      type: "Strategic Selling",
      description: "Build a complete Blue Sheet analysis for a complex sales opportunity.",
      duration: 60,
    },
    {
      name: "Engagement Financial Modeling",
      slug: "financial-modeling",
      type: "Financial Analysis",
      description: "Build a full P&L model for a professional services engagement.",
      duration: 60,
    },
    {
      name: "Utilization Optimizer",
      slug: "utilization-optimizer",
      type: "Operations",
      description: "Analyze utilization data and develop a capacity plan.",
      duration: 60,
    },
    {
      name: "LBO Model Builder",
      slug: "pe-lbo-model",
      type: "Private Equity",
      description: "Build a leveraged buyout model with debt schedules and returns analysis.",
      duration: 90,
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
        <Link href="/cases" className="hover:text-zinc-100 flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Cases
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-100">Nexus</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-orange-500/10">
            <Building2 className="h-6 w-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Nexus Case Studies</h1>
          </div>
        </div>
        <p className="text-zinc-400 max-w-3xl">
          Real business data from a professional services firm. Unlike traditional case studies,
          Nexus cases use internal operational data, allowing deep dives into actual business
          challenges with full data access.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-orange-400" />
            <div>
              <p className="text-xl font-bold">{caseStudies?.length || 0}</p>
              <p className="text-xs text-zinc-400">Case Studies</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <Database className="h-5 w-5 text-green-400" />
            <div>
              <p className="text-xl font-bold">{datasets?.length || 0}</p>
              <p className="text-xs text-zinc-400">Datasets</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardContent className="p-4 flex items-center gap-3">
            <PlayCircle className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-xl font-bold">{simulations.length}</p>
              <p className="text-xs text-zinc-400">Simulations</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content - Case Studies */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-orange-400" />
              Case Studies
            </h2>
            <div className="grid gap-4">
              {caseStudies?.map((caseStudy) => (
                <Link key={caseStudy.id} href={`/cases/nexus/${caseStudy.slug}`}>
                  <Card className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-zinc-800 shrink-0">
                          {caseIcons[caseStudy.slug] || <Briefcase className="h-5 w-5 text-zinc-400" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-medium">{caseStudy.title.replace("Nexus Case: ", "")}</h3>
                            <ChevronRight className="h-5 w-5 text-zinc-400 shrink-0" />
                          </div>
                          <p className="text-sm text-zinc-400 mt-1 line-clamp-2">
                            {caseStudy.summary}
                          </p>
                          <div className="flex items-center gap-3 mt-3">
                            {caseStudy.duration_minutes && (
                              <span className="text-xs text-zinc-500 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {caseStudy.duration_minutes} min
                              </span>
                            )}
                            {caseStudy.difficulty && (
                              <Badge
                                variant="outline"
                                className={`text-xs capitalize ${
                                  caseStudy.difficulty === "advanced"
                                    ? "border-red-500/50 text-red-400"
                                    : "border-zinc-700"
                                }`}
                              >
                                {caseStudy.difficulty}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          {/* Simulations */}
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-purple-400" />
              Interactive Simulations
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {simulations.map((sim) => (
                <Link key={sim.slug} href={`/cases/nexus/simulations/${sim.slug}`}>
                  <Card className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-0 text-xs">
                          {sim.type}
                        </Badge>
                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {sim.duration} min
                        </span>
                      </div>
                      <h3 className="font-medium mb-1">{sim.name}</h3>
                      <p className="text-sm text-zinc-400">{sim.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Datasets */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Database className="h-5 w-5 text-green-400" />
                Datasets
              </h2>
              <Link href="/cases/nexus/data">
                <Button variant="ghost" size="sm" className="text-xs">
                  View All
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="space-y-3">
              {datasets?.map((dataset) => (
                <Link key={dataset.id} href={`/cases/nexus/data?dataset=${dataset.dataset_name}`}>
                  <Card className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-pointer">
                    <CardContent className="p-3 flex items-center gap-3">
                      <div className="p-1.5 rounded bg-zinc-800">
                        {datasetIcons[dataset.dataset_name] || <Database className="h-4 w-4 text-zinc-400" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">{dataset.display_name}</h3>
                        <p className="text-xs text-zinc-500 truncate">{dataset.description?.slice(0, 50)}...</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-zinc-500 shrink-0" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          {/* About Nexus */}
          <Card className="border-zinc-800 bg-zinc-900/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">About Nexus</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-zinc-400 space-y-3">
              <p>
                Nexus is an enterprise platform for professional services firms implementing
                Miller Heiman sales methodology, financial management, and resource optimization.
              </p>
              <p>
                The data in these case studies is anonymized but reflects real business
                patterns and challenges from an IT consulting firm.
              </p>
              <div className="pt-2">
                <Badge variant="outline" className="border-zinc-700 text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  Anonymized Data
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
