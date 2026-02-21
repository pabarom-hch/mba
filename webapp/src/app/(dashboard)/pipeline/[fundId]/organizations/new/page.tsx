"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { ArrowLeft, Building2, Loader2 } from "lucide-react";
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
import { LP_TYPE_LABELS } from "@/types/database";

const APPETITE_OPTIONS = [
  { value: "high", label: "High - Actively seeking emerging managers" },
  { value: "moderate", label: "Moderate - Open to emerging managers" },
  { value: "low", label: "Low - Selective about emerging managers" },
  { value: "none", label: "None - Only established managers" },
];

export default function NewOrganizationPage() {
  const router = useRouter();
  const params = useParams();
  const fundId = params.fundId as string;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

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

    // Parse numeric fields
    const parseNumber = (val: FormDataEntryValue | null): number | null => {
      if (!val) return null;
      const num = parseFloat(val.toString().replace(/[,$]/g, ""));
      return isNaN(num) ? null : num;
    };

    const orgData = {
      user_id: user.id,
      fund_id: fundId,
      name: formData.get("name") as string,
      type: formData.get("type") as string,
      website: formData.get("website") || null,
      aum: parseNumber(formData.get("aum")),
      typical_commitment_min: parseNumber(formData.get("typical_commitment_min")),
      typical_commitment_max: parseNumber(formData.get("typical_commitment_max")),
      emerging_manager_appetite: formData.get("emerging_manager_appetite") || null,
      city: formData.get("city") || null,
      state: formData.get("state") || null,
      country: formData.get("country") || "USA",
      notes: formData.get("notes") || null,
    };

    const { error: insertError } = await supabase
      .from("lp_organizations")
      .insert(orgData);

    if (insertError) {
      console.error("Error creating organization:", insertError);
      setError(insertError.message);
      setIsSubmitting(false);
      return;
    }

    router.push(`/pipeline/${fundId}/organizations`);
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={`/pipeline/${fundId}/organizations`}>
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Building2 className="h-6 w-6 text-orange-500" />
            Add Organization
          </h1>
          <p className="text-muted-foreground text-sm">Add a new LP organization to your pipeline</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card className="border-border bg-card/50">
          <CardHeader>
            <CardTitle>Organization Information</CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter the organization&apos;s details and investment preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name & Type */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Organization Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="CalPERS"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">LP Type *</Label>
                <Select name="type" required>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
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
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://www.calpers.ca.gov"
                className="bg-background border-border"
              />
            </div>

            {/* Location */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Sacramento"
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="CA"
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="USA"
                  defaultValue="USA"
                  className="bg-background border-border"
                />
              </div>
            </div>

            {/* Financial */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground">Investment Profile</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="aum">AUM ($)</Label>
                  <Input
                    id="aum"
                    name="aum"
                    type="text"
                    placeholder="500,000,000"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="typical_commitment_min">Min Commitment ($)</Label>
                  <Input
                    id="typical_commitment_min"
                    name="typical_commitment_min"
                    type="text"
                    placeholder="5,000,000"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="typical_commitment_max">Max Commitment ($)</Label>
                  <Input
                    id="typical_commitment_max"
                    name="typical_commitment_max"
                    type="text"
                    placeholder="25,000,000"
                    className="bg-background border-border"
                  />
                </div>
              </div>
            </div>

            {/* Emerging Manager Appetite */}
            <div className="space-y-2">
              <Label htmlFor="emerging_manager_appetite">Emerging Manager Appetite</Label>
              <Select name="emerging_manager_appetite">
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select appetite level" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
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
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Additional notes about this organization..."
                rows={3}
                className="bg-background border-border resize-none"
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
              <Link href={`/pipeline/${fundId}/organizations`} className="flex-1">
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
                    <Building2 className="h-4 w-4 mr-2" />
                    Add Organization
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
