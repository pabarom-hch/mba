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
import { AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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

interface PendingMove {
  opportunityId: string;
  currentStageId: string;
  targetStageId: string;
  opportunity: OpportunityWithRelations;
  checklistProgress: { completed: number; total: number };
}

export function PipelineKanban({ fundId, stages: initialStages }: PipelineKanbanProps) {
  const router = useRouter();
  const [stages, setStages] = useState(initialStages);
  const [activeOpportunity, setActiveOpportunity] = useState<OpportunityWithRelations | null>(null);
  const [pendingMove, setPendingMove] = useState<PendingMove | null>(null);
  const [showIncompleteDialog, setShowIncompleteDialog] = useState(false);

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

  // Function to actually perform the move
  async function performMove(
    opportunityId: string,
    currentStageId: string,
    targetStageId: string,
    movedOpportunity: OpportunityWithRelations
  ) {
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
            opportunities: [...stage.opportunities, { ...movedOpportunity, stage_id: targetStageId }],
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

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveOpportunity(null);

    if (!over) return;

    const opportunityId = active.id as string;
    const targetStageId = over.id as string;

    // Find current stage and opportunity
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

    // Check if checklist is incomplete
    const checklistProgress = movedOpportunity.checklist_progress || { completed: 0, total: 0 };
    const hasIncompleteChecklist = checklistProgress.total > 0 && checklistProgress.completed < checklistProgress.total;

    if (hasIncompleteChecklist) {
      // Store pending move and show confirmation dialog
      setPendingMove({
        opportunityId,
        currentStageId,
        targetStageId,
        opportunity: movedOpportunity,
        checklistProgress,
      });
      setShowIncompleteDialog(true);
      return;
    }

    // No incomplete checklist, proceed with move
    await performMove(opportunityId, currentStageId, targetStageId, movedOpportunity);
  }

  async function handleConfirmMove() {
    if (pendingMove) {
      await performMove(
        pendingMove.opportunityId,
        pendingMove.currentStageId,
        pendingMove.targetStageId,
        pendingMove.opportunity
      );
    }
    setPendingMove(null);
    setShowIncompleteDialog(false);
  }

  function handleCancelMove() {
    setPendingMove(null);
    setShowIncompleteDialog(false);
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

      {/* Incomplete Checklist Warning Dialog */}
      <AlertDialog open={showIncompleteDialog} onOpenChange={setShowIncompleteDialog}>
        <AlertDialogContent className="bg-zinc-900 border-zinc-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Incomplete Checklist
            </AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-400">
              {pendingMove && (
                <>
                  <strong className="text-zinc-300">{pendingMove.opportunity.name}</strong> has an incomplete
                  checklist ({pendingMove.checklistProgress.completed} of {pendingMove.checklistProgress.total} items completed).
                  <br /><br />
                  Moving to the next stage without completing all checklist items may result in missed steps.
                  Are you sure you want to proceed?
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelMove} className="border-zinc-700">
              Stay & Complete
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmMove}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Move Anyway
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DndContext>
  );
}
