import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Get user streak
  let streak = 0;
  try {
    const { data } = await supabase.rpc("get_user_streak", {
      p_user_id: user.id,
    });
    streak = data || 0;
  } catch {
    // Streak function might not exist yet
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar streak={streak} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden min-w-0">
        {/* Header with Mobile Nav */}
        <div className="flex items-center border-b border-border bg-background">
          <div className="flex items-center gap-2 px-4 lg:hidden">
            <MobileNav />
          </div>
          <div className="flex-1 min-w-0">
            <Header user={user} />
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 flex flex-col min-h-0 overflow-hidden min-w-0">
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden min-w-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
