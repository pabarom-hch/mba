"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { ArrowLeft, UserPlus, Loader2, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LpOrganization } from "@/types/database";

export default function NewContactPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [organizations, setOrganizations] = useState<LpOrganization[]>([]);
  const [isDecisionMaker, setIsDecisionMaker] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function loadOrganizations() {
      const { data } = await supabase
        .from("lp_organizations")
        .select("*")
        .eq("fund_id", fundId)
        .order("name");
      setOrganizations(data || []);
    }
    loadOrganizations();
  }, [fundId, supabase]);

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

    const contactData = {
      user_id: user.id,
      fund_id: fundId,
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") || null,
      phone: formData.get("phone") || null,
      title: formData.get("title") || null,
      organization_id: formData.get("organization_id") || null,
      linkedin_url: formData.get("linkedin_url") || null,
      relationship_strength: formData.get("relationship_strength") || null,
      referral_source: formData.get("referral_source") || null,
      is_decision_maker: isDecisionMaker,
      notes: formData.get("notes") || null,
    };

    const { error: insertError } = await supabase
      .from("lp_contacts")
      .insert(contactData);

    if (insertError) {
      console.error("Error creating contact:", insertError);
      setError(insertError.message);
      setIsSubmitting(false);
      return;
    }

    router.push(`/pipeline/${fundId}/contacts`);
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={`/pipeline/${fundId}/contacts`}>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <UserPlus className="h-6 w-6 text-orange-500" />
            Add Contact
          </h1>
          <p className="text-zinc-400 text-sm">Add a new LP contact to your pipeline</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter the contact&apos;s details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name *</Label>
                <Input
                  id="first_name"
                  name="first_name"
                  placeholder="John"
                  required
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name *</Label>
                <Input
                  id="last_name"
                  name="last_name"
                  placeholder="Smith"
                  required
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
            </div>

            {/* Title & Organization */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Managing Director"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization_id">
                  <Building2 className="h-4 w-4 inline mr-1" />
                  Organization
                </Label>
                <Select name="organization_id">
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

            {/* Contact Info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-2">
              <Label htmlFor="linkedin_url">LinkedIn URL</Label>
              <Input
                id="linkedin_url"
                name="linkedin_url"
                type="url"
                placeholder="https://linkedin.com/in/johnsmith"
                className="bg-zinc-950 border-zinc-800"
              />
            </div>

            {/* Relationship */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="relationship_strength">Relationship Strength</Label>
                <Select name="relationship_strength">
                  <SelectTrigger className="bg-zinc-950 border-zinc-800">
                    <SelectValue placeholder="Select strength" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800">
                    <SelectItem value="existing">Existing (Strong relationship)</SelectItem>
                    <SelectItem value="hot">Hot (Active dialogue)</SelectItem>
                    <SelectItem value="warm">Warm (Previous contact)</SelectItem>
                    <SelectItem value="cold">Cold (No prior contact)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="referral_source">Referral Source</Label>
                <Input
                  id="referral_source"
                  name="referral_source"
                  placeholder="e.g., Conference, Mutual connection"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
            </div>

            {/* Decision Maker */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="is_decision_maker"
                checked={isDecisionMaker}
                onCheckedChange={(checked) => setIsDecisionMaker(checked === true)}
              />
              <Label htmlFor="is_decision_maker" className="text-sm font-normal cursor-pointer">
                This contact is a decision maker
              </Label>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Additional notes about this contact..."
                rows={3}
                className="bg-zinc-950 border-zinc-800 resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Link href={`/pipeline/${fundId}/contacts`} className="flex-1">
                <Button variant="outline" className="w-full border-zinc-700">
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
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add Contact
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
