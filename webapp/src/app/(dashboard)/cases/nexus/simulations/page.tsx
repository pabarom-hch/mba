import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Clock,
  Target,
  DollarSign,
  Users,
  Building2,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";

// Simulations metadata - stored as markdown files in /cases/nexus/simulations/
const simulations = [
  {
    slug: "blue-sheet-builder",
    name: "Blue Sheet Builder",
    type: "Strategic Selling",
    description:
      "Build a complete Blue Sheet analysis for a complex sales opportunity. Practice Miller Heiman methodology with real account data.",
    duration: 60,
    difficulty: "intermediate",
    skills: ["Opportunity Analysis", "Buying Influences", "Strategic Planning"],
    icon: Target,
    color: "blue",
    datasets: ["sales-pipeline"],
  },
  {
    slug: "financial-modeling",
    name: "Engagement Financial Modeling",
    type: "Financial Analysis",
    description:
      "Build a full P&L model for a professional services engagement. Calculate margins, utilization impact, and profitability scenarios.",
    duration: 60,
    difficulty: "advanced",
    skills: ["Financial Modeling", "Unit Economics", "Scenario Analysis"],
    icon: DollarSign,
    color: "green",
    datasets: ["financial-data", "rate-cards"],
  },
  {
    slug: "utilization-optimizer",
    name: "Utilization Optimizer",
    type: "Operations",
    description:
      "Analyze utilization data and develop a capacity plan. Balance billable work, bench time, and professional development.",
    duration: 60,
    difficulty: "intermediate",
    skills: ["Capacity Planning", "Resource Optimization", "Data Analysis"],
    icon: Users,
    color: "purple",
    datasets: ["utilization"],
  },
  {
    slug: "pe-lbo-model",
    name: "LBO Model Builder",
    type: "Private Equity",
    description:
      "Build a leveraged buyout model with debt schedules, operating scenarios, and returns analysis for a PE turnaround situation.",
    duration: 90,
    difficulty: "advanced",
    skills: ["LBO Modeling", "Debt Structuring", "IRR Analysis"],
    icon: Building2,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
  {
    slug: "pe-due-diligence",
    name: "Due Diligence Deep Dive",
    type: "Private Equity",
    description:
      "Conduct comprehensive buy-side due diligence including Quality of Earnings analysis, management assessment, and risk identification.",
    duration: 75,
    difficulty: "advanced",
    skills: ["QofE Analysis", "Risk Assessment", "Management Evaluation"],
    icon: FileSpreadsheet,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
  {
    slug: "pe-hundred-day-plan",
    name: "100-Day Plan Builder",
    type: "Private Equity",
    description:
      "Design a comprehensive 100-day value creation plan for a newly acquired platform company with operational improvement initiatives.",
    duration: 60,
    difficulty: "intermediate",
    skills: ["Operational Planning", "KPI Design", "Change Management"],
    icon: Target,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
  {
    slug: "pe-exit-preparation",
    name: "Exit Preparation Workshop",
    type: "Private Equity",
    description:
      "Prepare a portfolio company for exit including sell-side materials, management presentations, and value creation bridge.",
    duration: 60,
    difficulty: "advanced",
    skills: ["Exit Planning", "Presentation Skills", "Value Documentation"],
    icon: DollarSign,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
  {
    slug: "pe-addon-analyzer",
    name: "Add-On Acquisition Analyzer",
    type: "Private Equity",
    description:
      "Evaluate strategic fit, calculate synergies, and model accretion/dilution for potential add-on acquisitions in a buy-and-build strategy.",
    duration: 90,
    difficulty: "advanced",
    skills: ["M&A Analysis", "Synergy Modeling", "Strategic Fit Assessment"],
    icon: Building2,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
  {
    slug: "pe-covenant-monitor",
    name: "Covenant Compliance Monitor",
    type: "Private Equity",
    description:
      "Calculate financial covenants, project compliance, identify breach risks, and develop remediation strategies for a leveraged portfolio company.",
    duration: 60,
    difficulty: "intermediate",
    skills: ["Covenant Analysis", "Financial Projections", "Lender Relations"],
    icon: FileSpreadsheet,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
  {
    slug: "pe-value-creation-tracker",
    name: "Value Creation Tracker",
    type: "Private Equity",
    description:
      "Track portfolio company performance vs. investment thesis, diagnose variances, build value bridges, and recommend corrective actions.",
    duration: 75,
    difficulty: "advanced",
    skills: ["Performance Tracking", "Variance Analysis", "Value Attribution"],
    icon: Target,
    color: "emerald",
    datasets: ["pe-turnaround"],
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
};

export default function SimulationsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/cases" className="hover:text-foreground flex items-center gap-1">
          <ChevronLeft className="h-4 w-4" />
          Cases
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/cases/nexus" className="hover:text-foreground">
          Nexus
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Simulations</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-purple-500/10">
            <PlayCircle className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Interactive Simulations</h1>
          </div>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Hands-on exercises using real Nexus data. Build strategic analyses, financial models,
          and operational plans with guided workflows.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-3">
            <PlayCircle className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-xl font-bold">{simulations.length}</p>
              <p className="text-xs text-muted-foreground">Simulations</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-orange-400" />
            <div>
              <p className="text-xl font-bold">
                {simulations.reduce((acc, s) => acc + s.duration, 0) / 60}h
              </p>
              <p className="text-xs text-muted-foreground">Total Duration</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card/50">
          <CardContent className="p-4 flex items-center gap-3">
            <FileSpreadsheet className="h-5 w-5 text-green-400" />
            <div>
              <p className="text-xl font-bold">
                {[...new Set(simulations.flatMap(s => s.datasets))].length}
              </p>
              <p className="text-xs text-muted-foreground">Datasets Used</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simulations Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {simulations.map((sim) => {
          const Icon = sim.icon;
          const colors = colorClasses[sim.color];

          return (
            <Link key={sim.slug} href={`/cases/nexus/simulations/${sim.slug}`}>
              <Card className={`border-border bg-card/50 hover:bg-card hover:border-border transition-all cursor-pointer h-full`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 rounded-lg ${colors.bg}`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className={`${colors.bg} ${colors.text} border-0 text-xs`}>
                        {sim.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs capitalize ${
                          sim.difficulty === "advanced"
                            ? "border-red-500/50 text-red-400"
                            : "border-border"
                        }`}
                      >
                        {sim.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{sim.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-1">
                    {sim.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sim.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-border text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {sim.duration} min
                    </span>
                    <Button variant="ghost" size="sm" className={`${colors.text} hover:${colors.text}`}>
                      Start Simulation
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Info Section */}
      <Card className="border-border bg-card/30 mt-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3">How Simulations Work</h3>
          <div className="grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
            <div>
              <span className="text-foreground font-medium block mb-1">1. Read the Context</span>
              Each simulation begins with background information and objectives to guide your analysis.
            </div>
            <div>
              <span className="text-foreground font-medium block mb-1">2. Work with Data</span>
              Access real Nexus datasets and build your analysis using provided templates and frameworks.
            </div>
            <div>
              <span className="text-foreground font-medium block mb-1">3. Submit & Learn</span>
              Your work is saved automatically. Review sample solutions after completing each section.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
