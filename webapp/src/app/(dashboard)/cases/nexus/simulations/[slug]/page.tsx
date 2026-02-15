import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownContent } from "@/components/ui/markdown-content";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Target,
  DollarSign,
  Users,
  Building2,
  Database,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Simulations metadata
const simulationsData: Record<string, {
  name: string;
  type: string;
  description: string;
  duration: number;
  difficulty: string;
  skills: string[];
  icon: string;
  color: string;
  datasets: string[];
}> = {
  "blue-sheet-builder": {
    name: "Blue Sheet Builder",
    type: "Strategic Selling",
    description: "Build a complete Blue Sheet analysis for a complex sales opportunity.",
    duration: 60,
    difficulty: "intermediate",
    skills: ["Opportunity Analysis", "Buying Influences", "Strategic Planning"],
    icon: "Target",
    color: "blue",
    datasets: ["sales-pipeline"],
  },
  "financial-modeling": {
    name: "Engagement Financial Modeling",
    type: "Financial Analysis",
    description: "Build a full P&L model for a professional services engagement.",
    duration: 60,
    difficulty: "advanced",
    skills: ["Financial Modeling", "Unit Economics", "Scenario Analysis"],
    icon: "DollarSign",
    color: "green",
    datasets: ["financial-data", "rate-cards"],
  },
  "utilization-optimizer": {
    name: "Utilization Optimizer",
    type: "Operations",
    description: "Analyze utilization data and develop a capacity plan.",
    duration: 60,
    difficulty: "intermediate",
    skills: ["Capacity Planning", "Resource Optimization", "Data Analysis"],
    icon: "Users",
    color: "purple",
    datasets: ["utilization"],
  },
  "pe-lbo-model": {
    name: "LBO Model Builder",
    type: "Private Equity",
    description: "Build a leveraged buyout model with debt schedules and returns analysis.",
    duration: 90,
    difficulty: "advanced",
    skills: ["LBO Modeling", "Debt Structuring", "IRR Analysis"],
    icon: "Building2",
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
};

const iconComponents: Record<string, typeof Target> = {
  Target,
  DollarSign,
  Users,
  Building2,
};

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
};

async function getSimulationContent(slug: string): Promise<string | null> {
  try {
    // Path to the simulation markdown file
    const filePath = path.join(process.cwd(), "..", "cases", "nexus", "simulations", `${slug}.md`);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch {
    return null;
  }
}

export default async function SimulationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const metadata = simulationsData[slug];
  if (!metadata) {
    notFound();
  }

  const content = await getSimulationContent(slug);
  if (!content) {
    notFound();
  }

  const Icon = iconComponents[metadata.icon] || Target;
  const colors = colorClasses[metadata.color];

  // Get all simulation slugs for navigation
  const allSlugs = Object.keys(simulationsData);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
        <Link href="/cases" className="hover:text-zinc-100 flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Cases
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/cases/nexus" className="hover:text-zinc-100">
          Nexus
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/cases/nexus/simulations" className="hover:text-zinc-100">
          Simulations
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-100 truncate max-w-[200px]">{metadata.name}</span>
      </div>

      {/* Header Card */}
      <Card className="border-zinc-800 bg-zinc-900/50 mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${colors.bg}`}>
                <Icon className={`h-8 w-8 ${colors.text}`} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className={`${colors.bg} ${colors.text} border-0 text-xs`}>
                    {metadata.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-xs capitalize ${
                      metadata.difficulty === "advanced"
                        ? "border-red-500/50 text-red-400"
                        : "border-zinc-700"
                    }`}
                  >
                    {metadata.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{metadata.name}</CardTitle>
                <p className="text-zinc-400 mt-2">{metadata.description}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Clock className="h-4 w-4" />
              {metadata.duration} minutes
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Database className="h-4 w-4" />
              {metadata.datasets.length} dataset{metadata.datasets.length > 1 ? "s" : ""}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {metadata.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="border-zinc-700 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
          {metadata.datasets.length > 0 && (
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <span className="text-sm text-zinc-400">Related datasets: </span>
              {metadata.datasets.map((dataset, i) => (
                <span key={dataset}>
                  <Link
                    href={`/cases/nexus/data?dataset=${dataset}`}
                    className="text-sm text-green-400 hover:text-green-300"
                  >
                    {dataset}
                  </Link>
                  {i < metadata.datasets.length - 1 && ", "}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Content */}
      <Card className="border-zinc-800 bg-zinc-900/50 mb-6">
        <CardContent className="p-6 sm:p-8">
          <MarkdownContent content={content} basePath="/cases/nexus/simulations" />
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {prevSlug ? (
          <Link href={`/cases/nexus/simulations/${prevSlug}`}>
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {simulationsData[prevSlug].name}
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {nextSlug && (
          <Link href={`/cases/nexus/simulations/${nextSlug}`}>
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100">
              {simulationsData[nextSlug].name}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
