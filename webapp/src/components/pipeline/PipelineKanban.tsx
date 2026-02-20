"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { createBrowserClient } from "@supabase/ssr";
import { PipelineColumn } from "./PipelineColumn";
import { OpportunityCard } from "./OpportunityCard";
import type { PipelineStageWithOpportunities } from "@/app/(dashboard)/pipeline/[fundId]/page";
import type { LpOpportunity, LpOrganization, LpContact } from "@/types/database";

interface PipelineKanbanProps {
  fundId: string;
  stages: PipelineStageWithOpportunities[];
}

type OpportunityWithRelations = LpOpportunity & {
  organization?: LpOrganization | null;
  contact?: LpContact | null;
  checklist_progress?: { completed: number; total: number };
};

export function PipelineKanban({ fundId, stages: initialStages }: PipelineKanbanProps) {
  const router = useRouter();
  const [stages, setStages] = useState(initialStages);
  const [activeOpportunity, setActiveOpportunity] = useState<OpportunityWithRelations | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const opportunityId = active.id as string;

    // Find the opportunity being dragged
    for (const stage of stages) {
      const opportunity = stage.opportunities.find((o) => o.id === opportunityId);
      if (opportunity) {
        setActiveOpportunity(opportunity);
        break;
      }
    }
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveOpportunity(null);

    if (!over) return;

    const opportunityId = active.id as string;
    const targetStageId = over.id as string;

    // Find current stage
    let currentStageId: string | null = null;
    let movedOpportunity: OpportunityWithRelations | null = null;

    for (const stage of stages) {
      const opportunity = stage.opportunities.find((o) => o.id === opportunityId);
      if (opportunity) {
        currentStageId = stage.id;
        movedOpportunity = opportunity;
        break;
      }
    }

    if (!currentStageId || currentStageId === targetStageId || !movedOpportunity) {
      return;
    }

    // Optimistically update UI
    setStages((prevStages) => {
      return prevStages.map((stage) => {
        if (stage.id === currentStageId) {
          return {
            ...stage,
            opportunities: stage.opportunities.filter((o) => o.id !== opportunityId),
          };
        }
        if (stage.id === targetStageId) {
          return {
            ...stage,
            opportunities: [...stage.opportunities, { ...movedOpportunity!, stage_id: targetStageId }],
          };
        }
        return stage;
      });
    });

    // Update in database
    const { error } = await supabase
      .from("lp_opportunities")
      .update({ stage_id: targetStageId, updated_at: new Date().toISOString() })
      .eq("id", opportunityId);

    if (error) {
      console.error("Error moving opportunity:", error);
      // Revert on error
      setStages(initialStages);
      return;
    }

    // Record stage history
    await supabase.from("lp_opportunity_stage_history").insert({
      opportunity_id: opportunityId,
      from_stage_id: currentStageId,
      to_stage_id: targetStageId,
    });

    // Create checklist items for new stage
    const targetStage = stages.find((s) => s.id === targetStageId);
    if (targetStage && targetStage.checklist_templates.length > 0) {
      const checklistItems = targetStage.checklist_templates.map((template) => ({
        opportunity_id: opportunityId,
        template_id: template.id,
        stage_id: targetStageId,
        item_text: template.item_text,
        sort_order: template.sort_order,
        is_completed: false,
      }));

      await supabase.from("lp_opportunity_checklist_items").insert(checklistItems);
    }

    router.refresh();
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex h-full overflow-x-auto px-4 py-4 gap-4">
        {stages.map((stage) => (
          <SortableContext
            key={stage.id}
            id={stage.id}
            items={stage.opportunities.map((o) => o.id)}
            strategy={verticalListSortingStrategy}
          >
            <PipelineColumn
              stage={stage}
              opportunities={stage.opportunities}
              fundId={fundId}
            />
          </SortableContext>
        ))}
      </div>

      <DragOverlay>
        {activeOpportunity ? (
          <OpportunityCard
            opportunity={activeOpportunity}
            fundId={fundId}
            isDragging
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
