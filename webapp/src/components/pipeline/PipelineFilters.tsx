"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { Search, Filter, X, BarChart3, List, LayoutGrid } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LP_TYPE_LABELS } from "@/types/database";
import Link from "next/link";

interface PipelineFiltersProps {
  fundId: string;
  totalCount: number;
  filteredCount: number;
}

export function PipelineFilters({ fundId, totalCount, filteredCount }: PipelineFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentSearch = searchParams.get("search") || "";
  const currentLpType = searchParams.get("lpType") || "";
  const currentView = searchParams.get("view") || "kanban";

  const [searchValue, setSearchValue] = useState(currentSearch);

  function updateParams(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  function clearFilters() {
    startTransition(() => {
      router.push(pathname);
    });
    setSearchValue("");
  }

  function handleSearch(value: string) {
    setSearchValue(value);
    // Debounce search
    const timeout = setTimeout(() => {
      updateParams("search", value);
    }, 300);
    return () => clearTimeout(timeout);
  }

  const hasFilters = currentSearch || currentLpType;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 flex-1">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search opportunities..."
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-9 bg-zinc-900 border-zinc-800 h-9"
          />
          {searchValue && (
            <button
              onClick={() => {
                setSearchValue("");
                updateParams("search", "");
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* LP Type Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={`border-zinc-700 h-9 ${currentLpType ? "bg-orange-500/10 border-orange-500/30" : ""}`}
            >
              <Filter className="h-4 w-4 mr-2" />
              LP Type
              {currentLpType && (
                <Badge variant="secondary" className="ml-2 bg-orange-500/20 text-orange-400">
                  1
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2 bg-zinc-900 border-zinc-800" align="start">
            <div className="space-y-1">
              <button
                onClick={() => updateParams("lpType", "")}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  !currentLpType ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50"
                }`}
              >
                All Types
              </button>
              {Object.entries(LP_TYPE_LABELS).map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => updateParams("lpType", value)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    currentLpType === value
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-800/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Clear Filters */}
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-9 text-zinc-400 hover:text-white"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {/* Filter Status */}
        {hasFilters && (
          <span className="text-sm text-zinc-500">
            Showing {filteredCount} of {totalCount}
          </span>
        )}

        {/* View Toggle */}
        <div className="flex items-center border border-zinc-800 rounded-lg overflow-hidden">
          <Link href={`/pipeline/${fundId}?view=kanban`}>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 px-3 rounded-none ${
                currentView === "kanban" ? "bg-zinc-800" : ""
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={`/pipeline/${fundId}/list`}>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 px-3 rounded-none ${
                currentView === "list" ? "bg-zinc-800" : ""
              }`}
            >
              <List className="h-4 w-4" />
            </Button>
          </Link>
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
  );
}
