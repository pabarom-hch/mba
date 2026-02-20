"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import {
  ArrowLeft,
  Building2,
  Loader2,
  Globe,
  DollarSign,
  Users,
  Trash2,
  Save,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
import type { LpOrganization, LpContact, LpOpportunity } from "@/types/database";
import { LP_TYPE_LABELS } from "@/types/database";

const APPETITE_OPTIONS = [
  { value: "high", label: "High" },
  { value: "moderate", label: "Moderate" },
  { value: "low", label: "Low" },
  { value: "none", label: "None" },
];

export default function OrganizationDetailPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;
  const orgId = params.orgId as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [organization, setOrganization] = useState<LpOrganization | null>(null);
  const [contacts, setContacts] = useState<LpContact[]>([]);
  const [opportunities, setOpportunities] = useState<LpOpportunity[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "" as LpOrganization["type"],
    website: "",
    aum: "",
    typical_commitment_min: "",
    typical_commitment_max: "",
    emerging_manager_appetite: "",
    city: "",
    state: "",
    country: "",
    notes: "",
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function loadData() {
      // Load organization
      const { data: orgData } = await supabase
        .from("lp_organizations")
        .select("*")
        .eq("id", orgId)
        .single();

      if (orgData) {
        setOrganization(orgData);
        setFormData({
          name: orgData.name || "",
          type: orgData.type,
          website: orgData.website || "",
          aum: orgData.aum ? orgData.aum.toString() : "",
          typical_commitment_min: orgData.typical_commitment_min ? orgData.typical_commitment_min.toString() : "",
          typical_commitment_max: orgData.typical_commitment_max ? orgData.typical_commitment_max.toString() : "",
          emerging_manager_appetite: orgData.emerging_manager_appetite || "",
          city: orgData.city || "",
          state: orgData.state || "",
          country: orgData.country || "",
          notes: orgData.notes || "",
        });
      }

      // Load contacts for this org
      const { data: contactsData } = await supabase
        .from("lp_contacts")
        .select("*")
        .eq("organization_id", orgId)
        .order("last_name");
      setContacts(contactsData || []);

      // Load opportunities for this org
      const { data: oppsData } = await supabase
        .from("lp_opportunities")
        .select("*")
        .eq("organization_id", orgId);
      setOpportunities(oppsData || []);

      setIsLoading(false);
    }
    loadData();
  }, [orgId, supabase]);

  const parseNumber = (val: string): number | null => {
    if (!val) return null;
    const num = parseFloat(val.replace(/[,$]/g, ""));
    return isNaN(num) ? null : num;
  };

  async function handleSave() {
    setIsSaving(true);
    setError(null);

    const { error: updateError } = await supabase
      .from("lp_organizations")
      .update({
        name: formData.name,
        type: formData.type,
        website: formData.website || null,
        aum: parseNumber(formData.aum),
        typical_commitment_min: parseNumber(formData.typical_commitment_min),
        typical_commitment_max: parseNumber(formData.typical_commitment_max),
        emerging_manager_appetite: formData.emerging_manager_appetite || null,
        city: formData.city || null,
        state: formData.state || null,
        country: formData.country || null,
        notes: formData.notes || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", orgId);

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
      .from("lp_organizations")
      .delete()
      .eq("id", orgId);

    if (deleteError) {
      setError(deleteError.message);
      setIsDeleting(false);
      return;
    }

    router.push(`/pipeline/${fundId}/organizations`);
    router.refresh();
  }

  function formatCurrency(value: number | null): string {
    if (!value) return "—";
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(0)}M`;
    return `$${(value / 1_000).toFixed(0)}K`;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!organization) {
    return (
      <div className="p-6 lg:p-8">
        <p className="text-zinc-400">Organization not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/pipeline/${fundId}/organizations`}>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-500" />
              {organization.name}
            </h1>
            <p className="text-zinc-400 text-sm">
              {LP_TYPE_LABELS[organization.type]}
              {organization.city && organization.state && ` • ${organization.city}, ${organization.state}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-zinc-900 border-zinc-800">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Organization</AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400">
                  Are you sure you want to delete {organization.name}?
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-zinc-700">Cancel</AlertDialogCancel>
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
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle>Organization Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name & Type */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Organization Name *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>LP Type *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value as LpOrganization["type"] })}
                  >
                    <SelectTrigger className="bg-zinc-950 border-zinc-800">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {Object.entries(LP_TYPE_LABELS).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Website */}
              <div className="space-y-2">
                <Label>Website</Label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  type="url"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>

              {/* Location */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label>City</Label>
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>State</Label>
                  <Input
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Input
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
              </div>

              {/* Financial */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-zinc-300">Investment Profile</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label>AUM ($)</Label>
                    <Input
                      value={formData.aum}
                      onChange={(e) => setFormData({ ...formData, aum: e.target.value })}
                      className="bg-zinc-950 border-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Min Commitment ($)</Label>
                    <Input
                      value={formData.typical_commitment_min}
                      onChange={(e) => setFormData({ ...formData, typical_commitment_min: e.target.value })}
                      className="bg-zinc-950 border-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Max Commitment ($)</Label>
                    <Input
                      value={formData.typical_commitment_max}
                      onChange={(e) => setFormData({ ...formData, typical_commitment_max: e.target.value })}
                      className="bg-zinc-950 border-zinc-800"
                    />
                  </div>
                </div>
              </div>

              {/* Emerging Manager Appetite */}
              <div className="space-y-2">
                <Label>Emerging Manager Appetite</Label>
                <Select
                  value={formData.emerging_manager_appetite}
                  onValueChange={(value) => setFormData({ ...formData, emerging_manager_appetite: value })}
                >
                  <SelectTrigger className="bg-zinc-950 border-zinc-800">
                    <SelectValue placeholder="Select appetite level" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    {APPETITE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
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
                  className="bg-zinc-950 border-zinc-800 resize-none"
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
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {formData.website && (
                <a href={formData.website} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-zinc-700">
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Website
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </a>
              )}
              <Link href={`/pipeline/${fundId}/contacts/new`}>
                <Button variant="outline" size="sm" className="w-full justify-start border-zinc-700">
                  <Users className="h-4 w-4 mr-2" />
                  Add Contact
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Investment Summary */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-base">Investment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {organization.aum && (
                <div>
                  <p className="text-sm text-zinc-500">AUM</p>
                  <p className="text-lg font-semibold text-green-400">{formatCurrency(organization.aum)}</p>
                </div>
              )}
              {(organization.typical_commitment_min || organization.typical_commitment_max) && (
                <div>
                  <p className="text-sm text-zinc-500">Typical Commitment</p>
                  <p className="font-medium">
                    {formatCurrency(organization.typical_commitment_min)} - {formatCurrency(organization.typical_commitment_max)}
                  </p>
                </div>
              )}
              {organization.emerging_manager_appetite && (
                <div>
                  <p className="text-sm text-zinc-500">EM Appetite</p>
                  <Badge variant="outline" className="mt-1">
                    {organization.emerging_manager_appetite}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contacts */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-base">Contacts ({contacts.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {contacts.length === 0 ? (
                <p className="text-sm text-zinc-500">No contacts at this organization</p>
              ) : (
                <div className="space-y-2">
                  {contacts.map((contact) => (
                    <Link key={contact.id} href={`/pipeline/${fundId}/contacts/${contact.id}`}>
                      <div className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all">
                        <p className="text-sm font-medium">{contact.first_name} {contact.last_name}</p>
                        {contact.title && (
                          <p className="text-xs text-zinc-500">{contact.title}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Related Opportunities */}
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardHeader>
              <CardTitle className="text-base">Related Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              {opportunities.length === 0 ? (
                <p className="text-sm text-zinc-500">No opportunities from this organization</p>
              ) : (
                <div className="space-y-2">
                  {opportunities.map((opp) => (
                    <Link key={opp.id} href={`/pipeline/${fundId}/opportunities/${opp.id}`}>
                      <div className="p-2 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all">
                        <p className="text-sm font-medium">{opp.name}</p>
                        {opp.potential_commitment && (
                          <p className="text-xs text-green-400">
                            ${(opp.potential_commitment / 1_000_000).toFixed(1)}M
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
