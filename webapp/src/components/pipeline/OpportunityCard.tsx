"use client";

import Link from "next/link";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Building2, User, GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import type { LpOpportunity, LpOrganization, LpContact } from "@/types/database";

interface OpportunityWithRelations extends LpOpportunity {
  organization?: LpOrganization | null;
  contact?: LpContact | null;
  checklist_progress?: { completed: number; total: number };
}

interface OpportunityCardProps {
  opportunity: OpportunityWithRelations;
  fundId: string;
  isDragging?: boolean;
}

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

export function OpportunityCard({ opportunity, fundId, isDragging }: OpportunityCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: opportunity.id,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  const checklistProgress = opportunity.checklist_progress;
  const progressPercent =
    checklistProgress && checklistProgress.total > 0
      ? Math.round((checklistProgress.completed / checklistProgress.total) * 100)
      : 0;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "group bg-zinc-900 border border-zinc-800 rounded-lg p-3 transition-all",
        "hover:border-zinc-700 hover:bg-zinc-800/50",
        isDragging && "opacity-50 border-orange-500 shadow-lg shadow-orange-500/10"
      )}
    >
      {/* Drag Handle & Name */}
      <div className="flex items-start gap-2">
        <button
          {...attributes}
          {...listeners}
          className="mt-0.5 p-0.5 rounded text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800 cursor-grab active:cursor-grabbing"
        >
          <GripVertical className="h-4 w-4" />
        </button>
        <div className="flex-1 min-w-0">
          <Link
            href={`/pipeline/${fundId}/opportunities/${opportunity.id}`}
            className="font-medium text-sm hover:text-orange-400 transition-colors line-clamp-1"
          >
            {opportunity.name}
          </Link>

          {/* Organization / Contact */}
          <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
            {opportunity.organization && (
              <span className="flex items-center gap-1 truncate">
                <Building2 className="h-3 w-3" />
                {opportunity.organization.name}
              </span>
            )}
            {opportunity.contact && (
              <span className="flex items-center gap-1 truncate">
                <User className="h-3 w-3" />
                {opportunity.contact.first_name} {opportunity.contact.last_name}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Value */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-green-400">
          {formatCurrency(opportunity.potential_commitment)}
        </span>
        {opportunity.probability !== null && opportunity.probability !== undefined && (
          <span className="text-xs text-zinc-500">
            {Math.round(opportunity.probability * 100)}% prob
          </span>
        )}
      </div>

      {/* Checklist Progress */}
      {checklistProgress && checklistProgress.total > 0 && (
        <div className="mt-2 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-500">Checklist</span>
            <span className="text-zinc-400">
              {checklistProgress.completed}/{checklistProgress.total}
            </span>
          </div>
          <Progress value={progressPercent} className="h-1 bg-zinc-800" />
        </div>
      )}
    </div>
  );
}
