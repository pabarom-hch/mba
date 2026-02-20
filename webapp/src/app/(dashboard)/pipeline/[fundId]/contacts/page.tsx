import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowLeft,
  Plus,
  Users,
  Building2,
  Mail,
  Phone,
  Star,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { LpContact, LpOrganization } from "@/types/database";

interface ContactsPageProps {
  params: Promise<{ fundId: string }>;
}

const RELATIONSHIP_COLORS: Record<string, string> = {
  cold: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  warm: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  hot: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  existing: "bg-green-500/10 text-green-400 border-green-500/30",
};

interface ContactWithOrg extends LpContact {
  organization?: LpOrganization | null;
}

async function getContacts(fundId: string, userId: string): Promise<{ fund: { id: string; name: string } | null; contacts: ContactWithOrg[] }> {
  const supabase = await createClient();

  // Verify fund ownership
  const { data: fund } = await supabase
    .from("funds")
    .select("id, name")
    .eq("id", fundId)
    .eq("user_id", userId)
    .single();

  if (!fund) return { fund: null, contacts: [] };

  // Get contacts with organizations
  const { data: contacts } = await supabase
    .from("lp_contacts")
    .select(`
      *,
      lp_organizations (*)
    `)
    .eq("fund_id", fundId)
    .order("last_name");

  const contactsWithOrg: ContactWithOrg[] = (contacts || []).map((c) => ({
    ...c,
    organization: c.lp_organizations,
  }));

  return { fund, contacts: contactsWithOrg };
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { fundId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { fund, contacts } = await getContacts(fundId, user.id);

  if (!fund) {
    notFound();
  }

  // Group contacts by relationship strength
  const contactsByRelationship = {
    existing: contacts.filter((c) => c.relationship_strength === "existing"),
    hot: contacts.filter((c) => c.relationship_strength === "hot"),
    warm: contacts.filter((c) => c.relationship_strength === "warm"),
    cold: contacts.filter((c) => c.relationship_strength === "cold"),
    unknown: contacts.filter((c) => !c.relationship_strength),
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/pipeline/${fundId}`}>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Users className="h-6 w-6 text-orange-500" />
              Contacts
            </h1>
            <p className="text-muted-foreground text-sm">{fund.name} • {contacts.length} contacts</p>
          </div>
        </div>
        <Link href={`/pipeline/${fundId}/contacts/new`}>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
        {[
          { label: "Existing", count: contactsByRelationship.existing.length, color: "text-green-400" },
          { label: "Hot", count: contactsByRelationship.hot.length, color: "text-orange-400" },
          { label: "Warm", count: contactsByRelationship.warm.length, color: "text-yellow-400" },
          { label: "Cold", count: contactsByRelationship.cold.length, color: "text-blue-400" },
        ].map((stat) => (
          <Card key={stat.label} className="border-border bg-card/50">
            <CardContent className="p-4">
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.count}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact List */}
      {contacts.length === 0 ? (
        <Card className="border-border bg-card/50 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 mb-4">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No contacts yet</h3>
            <p className="text-muted-foreground text-center max-w-md mb-6">
              Add LP contacts to track your relationships and manage your fundraising outreach.
            </p>
            <Link href={`/pipeline/${fundId}/contacts/new`}>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Contact
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {contacts.map((contact) => (
            <Link key={contact.id} href={`/pipeline/${fundId}/contacts/${contact.id}`}>
              <Card className="border-border bg-card/50 hover:border-border hover:bg-accent/50 transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground font-medium">
                        {contact.first_name[0]}{contact.last_name[0]}
                      </div>

                      {/* Info */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            {contact.first_name} {contact.last_name}
                          </span>
                          {contact.is_decision_maker && (
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          )}
                          {contact.relationship_strength && (
                            <Badge variant="outline" className={RELATIONSHIP_COLORS[contact.relationship_strength]}>
                              {contact.relationship_strength}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {contact.title && <span>{contact.title}</span>}
                          {contact.organization && (
                            <span className="flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {contact.organization.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
                      {contact.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {contact.email}
                        </span>
                      )}
                      {contact.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          {contact.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
