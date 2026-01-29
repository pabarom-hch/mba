import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Check if user profile exists, create if not
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { data: profile } = await supabase
          .from("user_profiles")
          .select("id")
          .eq("id", user.id)
          .single();

        if (!profile) {
          // Create new user profile
          await supabase.from("user_profiles").insert({
            id: user.id,
            display_name: user.email?.split("@")[0] || "User",
          });

          // Auto-enroll in both curricula
          const { data: curricula } = await supabase
            .from("curricula")
            .select("id");

          if (curricula) {
            for (const curriculum of curricula) {
              await supabase.from("user_curriculum_enrollments").insert({
                user_id: user.id,
                curriculum_id: curriculum.id,
                status: "active",
                current_week: 1,
              });
            }
          }
        }
      }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate`);
}
