"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import {
  ArrowLeft,
  User,
  Loader2,
  Building2,
  Mail,
  Phone,
  Linkedin,
  Star,
  Trash2,
  Save,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
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
import type { LpContact, LpOrganization, LpOpportunity } from "@/types/database";

export default function ContactDetailPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;
  const contactId = params.contactId as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contact, setContact] = useState<LpContact | null>(null);
  const [organizations, setOrganizations] = useState<LpOrganization[]>([]);
  const [opportunities, setOpportunities] = useState<LpOpportunity[]>([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    title: "",
    organization_id: "",
    linkedin_url: "",
    relationship_strength: "",
    referral_source: "",
    is_decision_maker: false,
    notes: "",
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function loadData() {
      // Load contact
      const { data: contactData } = await supabase
        .from("lp_contacts")
        .select("*")
        .eq("id", contactId)
        .single();

      if (contactData) {
        setContact(contactData);
        setFormData({
          first_name: contactData.first_name || "",
          last_name: contactData.last_name || "",
          email: contactData.email || "",
          phone: contactData.phone || "",
          title: contactData.title || "",
          organization_id: contactData.organization_id || "",
          linkedin_url: contactData.linkedin_url || "",
          relationship_strength: contactData.relationship_strength || "",
          referral_source: contactData.referral_source || "",
          is_decision_maker: contactData.is_decision_maker || false,
          notes: contactData.notes || "",
        });
      }

      // Load organizations
      const { data: orgs } = await supabase
        .from("lp_organizations")
        .select("*")
        .eq("fund_id", fundId)
        .order("name");
      setOrganizations(orgs || []);

      // Load related opportunities
      const { data: opps } = await supabase
        .from("lp_opportunities")
        .select("*")
        .eq("contact_id", contactId);
      setOpportunities(opps || []);

      setIsLoading(false);
    }
    loadData();
  }, [contactId, fundId, supabase]);

  async function handleSave() {
    setIsSaving(true);
    setError(null);

    const { error: updateError } = await supabase
      .from("lp_contacts")
      .update({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email || null,
        phone: formData.phone || null,
        title: formData.title || null,
        organization_id: formData.organization_id || null,
        linkedin_url: formData.linkedin_url || null,
        relationship_strength: formData.relationship_strength || null,
        referral_source: formData.referral_source || null,
        is_decision_maker: formData.is_decision_maker,
        notes: formData.notes || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", contactId);

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
      .from("lp_contacts")
      .delete()
      .eq("id", contactId);

    if (deleteError) {
      setError(deleteError.message);
      setIsDeleting(false);
      return;
    }

    router.push(`/pipeline/${fundId}/contacts`);
    router.refresh();
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
      </div>
    );
  }

  if (!contact) {
    return (
      <div className="p-6 lg:p-8">
        <p className="text-zinc-400">Contact not found</p>
      </div>
    );
  }

  const selectedOrg = organizations.find((o) => o.id === formData.organization_id);

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/pipeline/${fundId}/contacts`}>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <User className="h-6 w-6 text-orange-500" />
              {contact.first_name} {contact.last_name}
            </h1>
            <p className="text-zinc-400 text-sm">
              {contact.title}
              {selectedOrg && ` at ${selectedOrg.name}`}
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
                <AlertDialogTitle>Delete Contact</AlertDialogTitle>
                <AlertDialogDescription className="text-zinc-400">
                  Are you sure you want to delete {contact.first_name} {contact.last_name}?
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
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>First Name *</Label>
                  <Input
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Last Name *</Label>
                  <Input
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
              </div>

              {/* Title & Organization */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Organization</Label>
                  <Select
                    value={formData.organization_id}
                    onValueChange={(value) => setFormData({ ...formData, organization_id: value })}
                  >
                    <SelectTrigger className="bg-zinc-950 border-zinc-800">
                      <SelectValue placeholder="Select organization" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {organizations.map((org) => (
                        <SelectItem key={org.id} value={org.id}>
                          {org.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
              </div>

              {/* LinkedIn */}
              <div className="space-y-2">
                <Label>LinkedIn URL</Label>
                <Input
                  value={formData.linkedin_url}
                  onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                  type="url"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>

              {/* Relationship */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Relationship Strength</Label>
                  <Select
                    value={formData.relationship_strength}
                    onValueChange={(value) => setFormData({ ...formData, relationship_strength: value })}
                  >
                    <SelectTrigger className="bg-zinc-950 border-zinc-800">
                      <SelectValue placeholder="Select strength" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      <SelectItem value="existing">Existing</SelectItem>
                      <SelectItem value="hot">Hot</SelectItem>
                      <SelectItem value="warm">Warm</SelectItem>
                      <SelectItem value="cold">Cold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Referral Source</Label>
                  <Input
                    value={formData.referral_source}
                    onChange={(e) => setFormData({ ...formData, referral_source: e.target.value })}
                    className="bg-zinc-950 border-zinc-800"
                  />
                </div>
              </div>

              {/* Decision Maker */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="is_decision_maker"
                  checked={formData.is_decision_maker}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_decision_maker: checked === true })}
                />
                <Label htmlFor="is_decision_maker" className="text-sm font-normal cursor-pointer">
                  This contact is a decision maker
                </Label>
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
              {formData.email && (
                <a href={`mailto:${formData.email}`} className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-zinc-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </a>
              )}
              {formData.phone && (
                <a href={`tel:${formData.phone}`} className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-zinc-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </a>
              )}
              {formData.linkedin_url && (
                <a href={formData.linkedin_url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start border-zinc-700">
                    <Linkedin className="h-4 w-4 mr-2" />
                    View LinkedIn
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </a>
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
                <p className="text-sm text-zinc-500">No opportunities linked to this contact</p>
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
