"use client";

import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { OpportunityCard } from "./OpportunityCard";
import type { LpPipelineStage, LpOpportunity, LpOrganization, LpContact } from "@/types/database";

interface OpportunityWithRelations extends LpOpportunity {
  organization?: LpOrganization | null;
  contact?: LpContact | null;
  checklist_progress?: { completed: number; total: number };
}

interface PipelineColumnProps {
  stage: LpPipelineStage;
  opportunities: OpportunityWithRelations[];
  fundId: string;
}

function formatCurrency(amount: number): string {
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0)}K`;
  }
  return `$${amount.toLocaleString()}`;
}

export function PipelineColumn({ stage, opportunities, fundId }: PipelineColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: stage.id,
  });

  const totalValue = opportunities.reduce(
    (sum, opp) => sum + (opp.potential_commitment || 0),
    0
  );

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex flex-col w-72 min-w-[288px] bg-card/30 rounded-lg border border-border",
        isOver && "border-orange-500/50 bg-orange-500/5"
      )}
    >
      {/* Column Header */}
      <div className="flex-shrink-0 p-3 border-b border-border">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: stage.color || "#71717a" }}
            />
            <h3 className="font-medium text-sm">{stage.name}</h3>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {opportunities.length}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{formatCurrency(totalValue)}</p>
      </div>

      {/* Opportunities List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {opportunities.length === 0 ? (
          <div className="flex items-center justify-center h-20 text-xs text-muted-foreground border border-dashed border-border rounded-lg">
            Drop opportunities here
          </div>
        ) : (
          opportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              fundId={fundId}
            />
          ))
        )}
      </div>
    </div>
  );
}
