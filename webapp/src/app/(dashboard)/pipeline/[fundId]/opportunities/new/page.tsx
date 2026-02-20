"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { ArrowLeft, Plus, Loader2, Building2, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LpOrganization, LpContact, LpPipelineStage } from "@/types/database";

export default function NewOpportunityPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [organizations, setOrganizations] = useState<LpOrganization[]>([]);
  const [contacts, setContacts] = useState<LpContact[]>([]);
  const [stages, setStages] = useState<LpPipelineStage[]>([]);
  const [selectedOrgId, setSelectedOrgId] = useState<string>("");

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function loadData() {
      // Load organizations
      const { data: orgs } = await supabase
        .from("lp_organizations")
        .select("*")
        .eq("fund_id", fundId)
        .order("name");
      setOrganizations(orgs || []);

      // Load contacts
      const { data: conts } = await supabase
        .from("lp_contacts")
        .select("*")
        .eq("fund_id", fundId)
        .order("last_name");
      setContacts(conts || []);

      // Load stages
      const { data: stgs } = await supabase
        .from("lp_pipeline_stages")
        .select("*")
        .eq("fund_id", fundId)
        .order("sort_order");
      setStages(stgs || []);
    }
    loadData();
  }, [fundId, supabase]);

  // Filter contacts by selected organization
  const filteredContacts = selectedOrgId
    ? contacts.filter((c) => c.organization_id === selectedOrgId)
    : contacts;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("You must be logged in");
      setIsSubmitting(false);
      return;
    }

    const stageId = formData.get("stage_id") as string;

    const opportunityData = {
      user_id: user.id,
      fund_id: fundId,
      name: formData.get("name") as string,
      organization_id: formData.get("organization_id") || null,
      contact_id: formData.get("contact_id") || null,
      stage_id: stageId,
      potential_commitment: formData.get("potential_commitment")
        ? parseFloat(formData.get("potential_commitment") as string) * 1_000_000
        : null,
      probability: formData.get("probability")
        ? parseFloat(formData.get("probability") as string) / 100
        : 0.5,
      expected_close_date: formData.get("expected_close_date") || null,
      notes: formData.get("notes") || null,
      status: "active",
    };

    const { data, error: insertError } = await supabase
      .from("lp_opportunities")
      .insert(opportunityData)
      .select()
      .single();

    if (insertError) {
      console.error("Error creating opportunity:", insertError);
      setError(insertError.message);
      setIsSubmitting(false);
      return;
    }

    // Create checklist items for the initial stage
    const selectedStage = stages.find((s) => s.id === stageId);
    if (selectedStage) {
      const { data: templates } = await supabase
        .from("lp_stage_checklist_templates")
        .select("*")
        .eq("stage_id", stageId)
        .order("sort_order");

      if (templates && templates.length > 0) {
        const checklistItems = templates.map((template) => ({
          opportunity_id: data.id,
          template_id: template.id,
          stage_id: stageId,
          item_text: template.item_text,
          sort_order: template.sort_order,
          is_completed: false,
        }));

        await supabase.from("lp_opportunity_checklist_items").insert(checklistItems);
      }
    }

    router.push(`/pipeline/${fundId}`);
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={`/pipeline/${fundId}`}>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Plus className="h-6 w-6 text-orange-500" />
            Add Opportunity
          </h1>
          <p className="text-muted-foreground text-sm">
            Add a new LP opportunity to your pipeline
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card className="border-border bg-card/50">
          <CardHeader>
            <CardTitle>Opportunity Details</CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter the LP opportunity information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Opportunity Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Smith Family Office - Fund I"
                required
                className="bg-background border-border"
              />
            </div>

            {/* Organization & Contact */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="organization_id">
                  <Building2 className="h-4 w-4 inline mr-1" />
                  Organization
                </Label>
                <Select
                  name="organization_id"
                  onValueChange={(value) => setSelectedOrgId(value)}
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
                <Label htmlFor="contact_id">
                  <User className="h-4 w-4 inline mr-1" />
                  Contact
                </Label>
                <Select name="contact_id">
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select contact" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {filteredContacts.map((contact) => (
                      <SelectItem key={contact.id} value={contact.id}>
                        {contact.first_name} {contact.last_name}
                        {contact.title && ` - ${contact.title}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Stage */}
            <div className="space-y-2">
              <Label htmlFor="stage_id">Pipeline Stage *</Label>
              <Select name="stage_id" required defaultValue={stages[0]?.id}>
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

            {/* Value & Probability */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="potential_commitment">Potential ($ millions)</Label>
                <Input
                  id="potential_commitment"
                  name="potential_commitment"
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="5.0"
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="probability">Probability (%)</Label>
                <Input
                  id="probability"
                  name="probability"
                  type="number"
                  step="5"
                  min="0"
                  max="100"
                  placeholder="50"
                  defaultValue="50"
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expected_close_date">Expected Close</Label>
                <Input
                  id="expected_close_date"
                  name="expected_close_date"
                  type="date"
                  className="bg-background border-border"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Additional notes about this opportunity..."
                rows={3}
                className="bg-background border-border resize-none"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Link href={`/pipeline/${fundId}`} className="flex-1">
                <Button variant="outline" className="w-full border-border">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Opportunity
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
