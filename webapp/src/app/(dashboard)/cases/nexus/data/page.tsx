import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Building2,
} from "lucide-react";
import { DatasetViewer } from "./dataset-viewer";

export default async function DataExplorerPage({
  searchParams,
}: {
  searchParams: Promise<{ dataset?: string }>;
}) {
  const { dataset: selectedDataset } = await searchParams;
  const supabase = await createClient();

  // Get all Nexus datasets
  const { data: datasets } = await supabase
    .from("case_study_datasets")
    .select("id, dataset_name, display_name, description, data, schema_version")
    .eq("source_type", "nexus")
    .eq("is_active", true)
    .order("display_name");

  // Find the currently selected dataset or default to first one
  const currentDataset = datasets?.find(d => d.dataset_name === selectedDataset) || datasets?.[0];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
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
        <span className="text-zinc-100">Data Explorer</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-green-500/10">
            <Database className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Data Explorer</h1>
          </div>
        </div>
        <p className="text-zinc-400 max-w-3xl">
          Explore real operational data from Nexus. Use these datasets for analysis exercises,
          financial modeling, and strategic planning.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Dataset Sidebar */}
        <div className="lg:col-span-1">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Datasets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {datasets?.map((dataset) => (
                <Link
                  key={dataset.id}
                  href={`/cases/nexus/data?dataset=${dataset.dataset_name}`}
                >
                  <div
                    className={`p-3 rounded-lg border transition-all cursor-pointer ${
                      currentDataset?.id === dataset.id
                        ? "border-green-500/50 bg-green-500/10"
                        : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Database className={`h-4 w-4 ${
                        currentDataset?.id === dataset.id ? "text-green-400" : "text-zinc-500"
                      }`} />
                      <span className={`text-sm font-medium ${
                        currentDataset?.id === dataset.id ? "text-green-400" : ""
                      }`}>
                        {dataset.display_name}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
                      {dataset.description?.slice(0, 80)}...
                    </p>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* About Card */}
          <Card className="border-zinc-800 bg-zinc-900/30 mt-4">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-medium">About This Data</span>
              </div>
              <p className="text-xs text-zinc-400">
                All data is anonymized but reflects real business patterns from an IT consulting firm.
                Use for educational purposes only.
              </p>
              <Badge variant="outline" className="mt-3 text-xs border-zinc-700">
                Anonymized
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Dataset Viewer */}
        <div className="lg:col-span-3">
          {currentDataset ? (
            <DatasetViewer
              dataset={currentDataset}
            />
          ) : (
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardContent className="p-8 text-center text-zinc-400">
                No datasets available
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
