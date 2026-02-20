"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createBrowserClient } from "@supabase/ssr";
import { ArrowLeft, Rocket, Loader2 } from "lucide-react";
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

export default function NewFundPage() {
  const router = useRouter();
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
      setError("You must be logged in to create a fund");
      setIsSubmitting(false);
      return;
    }

    const fundData = {
      user_id: user.id,
      name: formData.get("name") as string,
      description: formData.get("description") as string || null,
      target_size: parseFloat(formData.get("target_size") as string) * 1_000_000,
      hard_cap: formData.get("hard_cap")
        ? parseFloat(formData.get("hard_cap") as string) * 1_000_000
        : null,
      minimum_commitment: formData.get("minimum_commitment")
        ? parseFloat(formData.get("minimum_commitment") as string) * 1_000
        : 250000,
      management_fee_rate: parseFloat(formData.get("management_fee_rate") as string) / 100,
      carried_interest_rate: parseFloat(formData.get("carried_interest_rate") as string) / 100,
      preferred_return: parseFloat(formData.get("preferred_return") as string) / 100,
      waterfall_type: formData.get("waterfall_type") as string,
      vintage_year: new Date().getFullYear(),
      status: "building",
    };

    const { data, error: insertError } = await supabase
      .from("funds")
      .insert(fundData)
      .select()
      .single();

    if (insertError) {
      console.error("Error creating fund:", insertError);
      setError(insertError.message);
      setIsSubmitting(false);
      return;
    }

    // Redirect to the new fund's builder page
    router.push(`/fund-builder/${data.id}`);
    router.refresh();
  }

  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/fund-builder">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Rocket className="h-6 w-6 text-orange-500" />
            Create New Fund
          </h1>
          <p className="text-zinc-400 text-sm">
            Set up your fund basics, then use the Fund Builder to refine
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card className="border-zinc-800 bg-zinc-900/50">
          <CardHeader>
            <CardTitle>Fund Details</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter the basic information for your fund. You can adjust these later.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Fund Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Fund Name *</Label>
              <Input
                id="name"
                name="name"
                placeholder="e.g., Acme Partners Fund I"
                required
                className="bg-zinc-950 border-zinc-800"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Brief description of fund strategy and focus..."
                rows={3}
                className="bg-zinc-950 border-zinc-800 resize-none"
              />
            </div>

            {/* Fund Size */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="target_size">Target Size ($ millions) *</Label>
                <Input
                  id="target_size"
                  name="target_size"
                  type="number"
                  step="0.1"
                  min="1"
                  placeholder="75"
                  required
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hard_cap">Hard Cap ($ millions)</Label>
                <Input
                  id="hard_cap"
                  name="hard_cap"
                  type="number"
                  step="0.1"
                  min="1"
                  placeholder="90"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
            </div>

            {/* Minimum Commitment */}
            <div className="space-y-2">
              <Label htmlFor="minimum_commitment">Minimum Commitment ($ thousands)</Label>
              <Input
                id="minimum_commitment"
                name="minimum_commitment"
                type="number"
                step="25"
                min="25"
                placeholder="250"
                defaultValue="250"
                className="bg-zinc-950 border-zinc-800"
              />
            </div>

            {/* Fee Structure */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="management_fee_rate">Management Fee (%)</Label>
                <Input
                  id="management_fee_rate"
                  name="management_fee_rate"
                  type="number"
                  step="0.25"
                  min="0"
                  max="5"
                  placeholder="2.0"
                  defaultValue="2.0"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carried_interest_rate">Carried Interest (%)</Label>
                <Input
                  id="carried_interest_rate"
                  name="carried_interest_rate"
                  type="number"
                  step="1"
                  min="0"
                  max="30"
                  placeholder="20"
                  defaultValue="20"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred_return">Preferred Return (%)</Label>
                <Input
                  id="preferred_return"
                  name="preferred_return"
                  type="number"
                  step="1"
                  min="0"
                  max="15"
                  placeholder="8"
                  defaultValue="8"
                  className="bg-zinc-950 border-zinc-800"
                />
              </div>
            </div>

            {/* Waterfall */}
            <div className="space-y-2">
              <Label htmlFor="waterfall_type">Waterfall Type</Label>
              <Select name="waterfall_type" defaultValue="european">
                <SelectTrigger className="bg-zinc-950 border-zinc-800">
                  <SelectValue placeholder="Select waterfall type" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem value="european">European (Fund-level)</SelectItem>
                  <SelectItem value="american">American (Deal-by-deal)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-zinc-500">
                European waterfall is more LP-friendly and increasingly standard
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Link href="/fund-builder" className="flex-1">
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
                    <Rocket className="h-4 w-4 mr-2" />
                    Create Fund
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
