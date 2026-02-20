"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table2,
  Code2,
  Download,
  ChevronUp,
  ChevronDown,
  ArrowUpDown,
} from "lucide-react";

interface Dataset {
  id: string;
  dataset_name: string;
  display_name: string;
  description: string | null;
  data: Record<string, unknown>[] | Record<string, unknown>;
  schema_version: number;
}

interface DatasetViewerProps {
  dataset: Dataset;
}

type SortDirection = "asc" | "desc" | null;

export function DatasetViewer({ dataset }: DatasetViewerProps) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  // Extract data array (handle both array and object with nested data)
  const dataArray = useMemo(() => {
    if (Array.isArray(dataset.data)) {
      return dataset.data;
    }
    // Check if data is an object with a data property
    if (dataset.data && typeof dataset.data === "object" && "data" in dataset.data) {
      const nestedData = (dataset.data as { data: unknown }).data;
      if (Array.isArray(nestedData)) {
        return nestedData;
      }
    }
    // Try to convert object to array
    return [dataset.data];
  }, [dataset.data]);

  // Get column headers from first row
  const columns = useMemo(() => {
    if (dataArray.length === 0) return [];
    const firstRow = dataArray[0];
    if (typeof firstRow !== "object" || firstRow === null) return [];
    return Object.keys(firstRow as object);
  }, [dataArray]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return dataArray;

    return [...dataArray].sort((a, b) => {
      const aVal = (a as Record<string, unknown>)[sortColumn];
      const bVal = (b as Record<string, unknown>)[sortColumn];

      if (aVal === bVal) return 0;
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      const comparison = aVal < bVal ? -1 : 1;
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [dataArray, sortColumn, sortDirection]);

  // Handle column sort
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Format cell value for display
  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined) return "—";
    if (typeof value === "number") {
      // Format currency-like values
      if (Math.abs(value) >= 1000) {
        return value.toLocaleString();
      }
      // Format percentages (values between 0 and 1 or ending in %)
      return value.toString();
    }
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
  };

  // Download as CSV
  const downloadCSV = () => {
    if (columns.length === 0) return;

    const csvContent = [
      columns.join(","),
      ...sortedData.map(row =>
        columns.map(col => {
          const val = (row as Record<string, unknown>)[col];
          const formatted = formatValue(val);
          // Escape quotes and wrap in quotes if contains comma
          if (formatted.includes(",") || formatted.includes('"')) {
            return `"${formatted.replace(/"/g, '""')}"`;
          }
          return formatted;
        }).join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${dataset.dataset_name}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="border-border bg-card/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{dataset.display_name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{dataset.description}</p>
            <div className="flex items-center gap-3 mt-2">
              <Badge variant="outline" className="border-border text-xs">
                {dataArray.length} records
              </Badge>
              <Badge variant="outline" className="border-border text-xs">
                {columns.length} columns
              </Badge>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={downloadCSV}
            className="border-border hover:border-border"
          >
            <Download className="h-4 w-4 mr-2" />
            CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="table" className="w-full">
          <TabsList className="bg-muted">
            <TabsTrigger value="table" className="data-[state=active]:bg-accent">
              <Table2 className="h-4 w-4 mr-2" />
              Table
            </TabsTrigger>
            <TabsTrigger value="json" className="data-[state=active]:bg-accent">
              <Code2 className="h-4 w-4 mr-2" />
              JSON
            </TabsTrigger>
          </TabsList>

          <TabsContent value="table" className="mt-4">
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col}
                        className="px-4 py-3 text-left font-medium text-foreground cursor-pointer hover:bg-muted transition-colors whitespace-nowrap"
                        onClick={() => handleSort(col)}
                      >
                        <div className="flex items-center gap-2">
                          <span>{col}</span>
                          {sortColumn === col ? (
                            sortDirection === "asc" ? (
                              <ChevronUp className="h-4 w-4 text-green-400" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-green-400" />
                            )
                          ) : (
                            <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sortedData.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-muted/30 transition-colors">
                      {columns.map((col) => (
                        <td key={col} className="px-4 py-3 text-foreground whitespace-nowrap">
                          {formatValue((row as Record<string, unknown>)[col])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {sortedData.length > 20 && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Showing all {sortedData.length} records. Scroll horizontally to see all columns.
              </p>
            )}
          </TabsContent>

          <TabsContent value="json" className="mt-4">
            <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-foreground font-mono">
                {JSON.stringify(dataset.data, null, 2)}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
