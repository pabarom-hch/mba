"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import {
  ArrowLeft,
  Loader2,
  Building2,
  User,
  Trash2,
  Save,
  CheckCircle2,
  Circle,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  Plus,
  Mail,
  Phone,
  FileText,
  Users,
  Send,
  MessageSquare,
  Compass,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type {
  LpOpportunity,
  LpOrganization,
  LpContact,
  LpPipelineStage,
  LpOpportunityChecklistItem,
  LpActivity,
} from "@/types/database";
import { LP_TYPE_LABELS } from "@/types/database";

const STATUS_COLORS: Record<string, string> = {
  active: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  won: "bg-green-500/10 text-green-400 border-green-500/30",
  lost: "bg-red-500/10 text-red-400 border-red-500/30",
  on_hold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
};

const SOURCE_LABELS: Record<string, string> = {
  linkedin: "LinkedIn",
  networking_event: "Networking Event",
  conference: "Conference",
  referral: "Referral",
  cold_outreach: "Cold Outreach",
  existing_relationship: "Existing Relationship",
  advisor: "Advisor/Placement Agent",
  other: "Other",
};

const ACTIVITY_ICONS: Record<string, React.ElementType> = {
  call: Phone,
  email: Mail,
  meeting: Users,
  presentation: FileText,
  dd_request: FileText,
  docs_sent: Send,
  docs_received: FileText,
  site_visit: Building2,
  note: MessageSquare,
  other: MessageSquare,
};

const ACTIVITY_TYPES = [
  { value: "call", label: "Phone Call" },
  { value: "email", label: "Email" },
  { value: "meeting", label: "Meeting" },
  { value: "presentation", label: "Presentation" },
  { value: "dd_request", label: "DD Request" },
  { value: "docs_sent", label: "Documents Sent" },
  { value: "docs_received", label: "Documents Received" },
  { value: "site_visit", label: "Site Visit" },
  { value: "note", label: "Note" },
  { value: "other", label: "Other" },
];

export default function OpportunityDetailPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;
  const opportunityId = params.opportunityId as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [opportunity, setOpportunity] = useState<LpOpportunity | null>(null);
  const [organization, setOrganization] = useState<LpOrganization | null>(null);
  const [contact, setContact] = useState<LpContact | null>(null);
  const [stages, setStages] = useState<LpPipelineStage[]>([]);
  const [currentStage, setCurrentStage] = useState<LpPipelineStage | null>(null);
  const [checklistItems, setChecklistItems] = useState<LpOpportunityChecklistItem[]>([]);
  const [activities, setActivities] = useState<LpActivity[]>([]);
  const [organizations, setOrganizations] = useState<LpOrganization[]>([]);
  const [contacts, setContacts] = useState<LpContact[]>([]);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [newActivity, setNewActivity] = useState({
    type: "note" as LpActivity["type"],
    subject: "",
    description: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    organization_id: "",
    contact_id: "",
    stage_id: "",
    source: "",
    potential_commitment: "",
    probability: "",
    expected_close_date: "",
    status: "active" as LpOpportunity["status"],
    notes: "",
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const loadData = useCallback(async () => {
    // Load opportunity
    const { data: oppData } = await supabase
      .from("lp_opportunities")
      .select("*")
      .eq("id", opportunityId)
      .single();

    if (oppData) {
      setOpportunity(oppData);
      setFormData({
        name: oppData.name || "",
        organization_id: oppData.organization_id || "",
        contact_id: oppData.contact_id || "",
        stage_id: oppData.stage_id || "",
        source: oppData.source || "",
        potential_commitment: oppData.potential_commitment
          ? (oppData.potential_commitment / 1_000_000).toString()
          : "",
        probability: oppData.probability
          ? (oppData.probability * 100).toString()
          : "50",
        expected_close_date: oppData.expected_close_date || "",
        status: oppData.status || "active",
        notes: oppData.notes || "",
      });

      // Load related org and contact
      if (oppData.organization_id) {
        const { data: org } = await supabase
          .from("lp_organizations")
          .select("*")
          .eq("id", oppData.organization_id)
          .single();
        setOrganization(org);
      }

      if (oppData.contact_id) {
        const { data: cont } = await supabase
          .from("lp_contacts")
          .select("*")
          .eq("id", oppData.contact_id)
          .single();
        setContact(cont);
      }
    }

    // Load stages
    const { data: stagesData } = await supabase
      .from("lp_pipeline_stages")
      .select("*")
      .eq("fund_id", fundId)
      .order("sort_order");
    setStages(stagesData || []);

    if (oppData?.stage_id && stagesData) {
      const stage = stagesData.find((s) => s.id === oppData.stage_id);
      setCurrentStage(stage || null);
    }

    // Load checklist items
    const { data: checklistData } = await supabase
      .from("lp_opportunity_checklist_items")
      .select("*")
      .eq("opportunity_id", opportunityId)
      .order("sort_order");
    setChecklistItems(checklistData || []);

    // Load activities
    const { data: activitiesData } = await supabase
      .from("lp_activities")
      .select("*")
      .eq("opportunity_id", opportunityId)
      .order("activity_date", { ascending: false });
    setActivities(activitiesData || []);

    // Load all organizations and contacts for selectors
    const { data: orgs } = await supabase
      .from("lp_organizations")
      .select("*")
      .eq("fund_id", fundId)
      .order("name");
    setOrganizations(orgs || []);

    const { data: conts } = await supabase
      .from("lp_contacts")
      .select("*")
      .eq("fund_id", fundId)
      .order("last_name");
    setContacts(conts || []);

    setIsLoading(false);
  }, [opportunityId, fundId, supabase]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function handleChecklistToggle(item: LpOpportunityChecklistItem) {
    const newCompleted = !item.is_completed;

    // Optimistic update
    setChecklistItems((prev) =>
      prev.map((i) =>
        i.id === item.id
          ? { ...i, is_completed: newCompleted, completed_at: newCompleted ? new Date().toISOString() : null }
          : i
      )
    );

    await supabase
      .from("lp_opportunity_checklist_items")
      .update({
        is_completed: newCompleted,
        completed_at: newCompleted ? new Date().toISOString() : null,
      })
      .eq("id", item.id);
  }

  async function handleStageChange(newStageId: string) {
    if (newStageId === formData.stage_id) return;

    setFormData({ ...formData, stage_id: newStageId });

    // Update opportunity stage
    await supabase
      .from("lp_opportunities")
      .update({ stage_id: newStageId, updated_at: new Date().toISOString() })
      .eq("id", opportunityId);

    // Record stage history
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from("lp_opportunity_stage_history").insert({
      opportunity_id: opportunityId,
      from_stage_id: formData.stage_id || null,
      to_stage_id: newStageId,
      changed_by: user?.id,
    });

    // Create checklist items for new stage
    const { data: templates } = await supabase
      .from("lp_stage_checklist_templates")
      .select("*")
      .eq("stage_id", newStageId)
      .order("sort_order");

    if (templates && templates.length > 0) {
      // Check which items already exist for this stage
      const existingItems = checklistItems.filter((i) => i.stage_id === newStageId);
      const existingTemplateIds = new Set(existingItems.map((i) => i.template_id));

      const newItems = templates
        .filter((t) => !existingTemplateIds.has(t.id))
        .map((template) => ({
          opportunity_id: opportunityId,
          template_id: template.id,
          stage_id: newStageId,
          item_text: template.item_text,
          sort_order: template.sort_order,
          is_completed: false,
        }));

      if (newItems.length > 0) {
        await supabase.from("lp_opportunity_checklist_items").insert(newItems);
      }
    }

    // Reload data to get updated checklist
    await loadData();

    const newStage = stages.find((s) => s.id === newStageId);
    setCurrentStage(newStage || null);
  }

  async function handleSave() {
    setIsSaving(true);
    setError(null);

    const { error: updateError } = await supabase
      .from("lp_opportunities")
      .update({
        name: formData.name,
        organization_id: formData.organization_id || null,
        contact_id: formData.contact_id || null,
        stage_id: formData.stage_id || null,
        source: formData.source || null,
        potential_commitment: formData.potential_commitment
          ? parseFloat(formData.potential_commitment) * 1_000_000
          : null,
        probability: formData.probability
          ? parseFloat(formData.probability) / 100
          : null,
        expected_close_date: formData.expected_close_date || null,
        status: formData.status,
        notes: formData.notes || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", opportunityId);

    if (updateError) {
      setError(updateError.message);
      setIsSaving(false);
      return;
    }

    setIsSaving(false);
    router.refresh();
  }

  async function handleDelete() {
    setIsDeleting(true);

    const { error: deleteError } = await supabase
      .from("lp_opportunities")
      .delete()
      .eq("id", opportunityId);

    if (deleteError) {
      setError(deleteError.message);
      setIsDeleting(false);
      return;
    }

    router.push(`/pipeline/${fundId}`);
    router.refresh();
  }

  async function handleAddActivity() {
    if (!newActivity.subject.trim()) return;

    const { data: { user } } = await supabase.auth.getUser();

    const activityData = {
      user_id: user?.id,
      opportunity_id: opportunityId,
      contact_id: contact?.id || null,
      type: newActivity.type,
      subject: newActivity.subject,
      description: newActivity.description || null,
      activity_date: new Date().toISOString(),
    };

    const { error: activityError } = await supabase
      .from("lp_activities")
      .insert(activityData);

    if (activityError) {
      setError(activityError.message);
      return;
    }

    // Update opportunity last_activity_date
    await supabase
      .from("lp_opportunities")
      .update({ last_activity_date: new Date().toISOString() })
      .eq("id", opportunityId);

    setNewActivity({ type: "note", subject: "", description: "" });
    setShowActivityForm(false);
    await loadData();
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className="p-6 lg:p-8">
        <p className="text-muted-foreground">Opportunity not found</p>
      </div>
    );
  }

  const completedItems = checklistItems.filter((i) => i.is_completed).length;
  const totalItems = checklistItems.length;
  const checklistProgress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  // Filter contacts by selected org
  const filteredContacts = formData.organization_id
    ? contacts.filter((c) => c.organization_id === formData.organization_id)
    : contacts;

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/pipeline/${fundId}`}>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-orange-500" />
              {opportunity.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              {currentStage && (
                <Badge
                  variant="outline"
                  style={{
                    backgroundColor: `${currentStage.color || "#71717a"}20`,
                    color: currentStage.color || "#71717a",
                    borderColor: `${currentStage.color || "#71717a"}50`,
                  }}
                >
                  {currentStage.name}
                </Badge>
              )}
              {formData.status && (
                <Badge variant="outline" className={STATUS_COLORS[formData.status]}>
                  {formData.status}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-card border-border">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Opportunity</AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground">
                  Are you sure you want to delete {opportunity.name}? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-border">Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            onClick={handleSave}
            className="bg-orange-500 hover:bg-orange-600"
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Opportunity Details */}
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle>Opportunity Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label>Opportunity Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                />
              </div>

              {/* Stage & Source */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Pipeline Stage</Label>
                  <Select value={formData.stage_id} onValueChange={handleStageChange}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {stages.map((stage) => (
                        <SelectItem key={stage.id} value={stage.id}>
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: stage.color || "#71717a" }}
                            />
                            {stage.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Lead Source</Label>
                  <Select
                    value={formData.source}
                    onValueChange={(value) => setFormData({ ...formData, source: value })}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="networking_event">Networking Event</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="cold_outreach">Cold Outreach</SelectItem>
                      <SelectItem value="existing_relationship">Existing Relationship</SelectItem>
                      <SelectItem value="advisor">Advisor/Placement Agent</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Organization & Contact */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Organization</Label>
                  <Select
                    value={formData.organization_id}
                    onValueChange={(value) =>
                      setFormData({ ...formData, organization_id: value, contact_id: "" })
                    }
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select organization" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {organizations.map((org) => (
                        <SelectItem key={org.id} value={org.id}>
                          {org.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Contact</Label>
                  <Select
                    value={formData.contact_id}
                    onValueChange={(value) => setFormData({ ...formData, contact_id: value })}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select contact" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {filteredContacts.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.first_name} {c.last_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Value, Probability, Close Date */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>Potential ($M)</Label>
                  <Input
                    value={formData.potential_commitment}
                    onChange={(e) =>
                      setFormData({ ...formData, potential_commitment: e.target.value })
                    }
                    type="number"
                    step="0.1"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Probability (%)</Label>
                  <Input
                    value={formData.probability}
                    onChange={(e) => setFormData({ ...formData, probability: e.target.value })}
                    type="number"
                    min="0"
                    max="100"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Expected Close</Label>
                  <Input
                    value={formData.expected_close_date}
                    onChange={(e) =>
                      setFormData({ ...formData, expected_close_date: e.target.value })
                    }
                    type="date"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <Label>Status</Label>
                <Select
                  value={formData.status || "active"}
                  onValueChange={(value) =>
                    setFormData({ ...formData, status: value as LpOpportunity["status"] })
                  }
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="won">Won</SelectItem>
                    <SelectItem value="lost">Lost</SelectItem>
                    <SelectItem value="on_hold">On Hold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label>Notes</Label>
                <Textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm">
                  {error}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Activities */}
          <Card className="border-border bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Activities</CardTitle>
              <Button
                size="sm"
                variant="outline"
                className="border-border"
                onClick={() => setShowActivityForm(!showActivityForm)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Log Activity
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {showActivityForm && (
                <div className="p-4 border border-border rounded-lg space-y-4 bg-background">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Type</Label>
                      <Select
                        value={newActivity.type}
                        onValueChange={(value) =>
                          setNewActivity({ ...newActivity, type: value as LpActivity["type"] })
                        }
                      >
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          {ACTIVITY_TYPES.map((t) => (
                            <SelectItem key={t.value} value={t.value}>
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Subject *</Label>
                      <Input
                        value={newActivity.subject}
                        onChange={(e) =>
                          setNewActivity({ ...newActivity, subject: e.target.value })
                        }
                        placeholder="Brief summary"
                        className="bg-card border-border"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                      value={newActivity.description}
                      onChange={(e) =>
                        setNewActivity({ ...newActivity, description: e.target.value })
                      }
                      placeholder="Details..."
                      rows={2}
                      className="bg-card border-border resize-none"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={handleAddActivity}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      Add Activity
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setShowActivityForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {activities.length === 0 ? (
                <p className="text-sm text-muted-foreground">No activities logged yet</p>
              ) : (
                <div className="space-y-3">
                  {activities.map((activity) => {
                    const Icon = ACTIVITY_ICONS[activity.type] || MessageSquare;
                    return (
                      <div
                        key={activity.id}
                        className="flex gap-3 p-3 border border-border rounded-lg"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted shrink-0">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{activity.subject}</span>
                            <Badge variant="outline" className="text-xs bg-muted/50">
                              {activity.type}
                            </Badge>
                          </div>
                          {activity.description && (
                            <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">
                            {activity.activity_date &&
                              new Date(activity.activity_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stage Checklist */}
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-base flex items-center justify-between">
                <span>Stage Checklist</span>
                <span className="text-sm text-muted-foreground">
                  {completedItems}/{totalItems}
                </span>
              </CardTitle>
              {totalItems > 0 && (
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all"
                    style={{ width: `${checklistProgress}%` }}
                  />
                </div>
              )}
            </CardHeader>
            <CardContent>
              {checklistItems.length === 0 ? (
                <p className="text-sm text-muted-foreground">No checklist items for this stage</p>
              ) : (
                <div className="space-y-2">
                  {checklistItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
                      onClick={() => handleChecklistToggle(item)}
                    >
                      <Checkbox
                        checked={item.is_completed || false}
                        onCheckedChange={() => handleChecklistToggle(item)}
                        className="mt-0.5"
                      />
                      <span
                        className={`text-sm ${
                          item.is_completed ? "text-muted-foreground line-through" : ""
                        }`}
                      >
                        {item.item_text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {opportunity.potential_commitment && (
                <div className="flex items-center gap-3">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <div>
                    <p className="text-sm text-muted-foreground">Potential</p>
                    <p className="font-medium text-green-400">
                      ${(opportunity.potential_commitment / 1_000_000).toFixed(1)}M
                    </p>
                  </div>
                </div>
              )}
              {opportunity.probability !== null && (
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                  <div>
                    <p className="text-sm text-muted-foreground">Probability</p>
                    <p className="font-medium">{Math.round(opportunity.probability * 100)}%</p>
                  </div>
                </div>
              )}
              {opportunity.expected_close_date && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <div>
                    <p className="text-sm text-muted-foreground">Expected Close</p>
                    <p className="font-medium">
                      {new Date(opportunity.expected_close_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
              {opportunity.last_activity_date && (
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <div>
                    <p className="text-sm text-muted-foreground">Last Activity</p>
                    <p className="font-medium">
                      {new Date(opportunity.last_activity_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
              {opportunity.source && (
                <div className="flex items-center gap-3">
                  <Compass className="h-4 w-4 text-cyan-400" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lead Source</p>
                    <p className="font-medium">
                      {SOURCE_LABELS[opportunity.source] || opportunity.source}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Related Links */}
          <Card className="border-border bg-card/50">
            <CardHeader>
              <CardTitle className="text-base">Related</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {organization && (
                <Link href={`/pipeline/${fundId}/organizations/${organization.id}`}>
                  <div className="p-2 rounded-lg border border-border hover:border-border hover:bg-muted/50 transition-all">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{organization.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground ml-6">
                      {LP_TYPE_LABELS[organization.type]}
                    </p>
                  </div>
                </Link>
              )}
              {contact && (
                <Link href={`/pipeline/${fundId}/contacts/${contact.id}`}>
                  <div className="p-2 rounded-lg border border-border hover:border-border hover:bg-muted/50 transition-all">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {contact.first_name} {contact.last_name}
                      </span>
                    </div>
                    {contact.title && (
                      <p className="text-xs text-muted-foreground ml-6">{contact.title}</p>
                    )}
                  </div>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
