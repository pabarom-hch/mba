"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3, Loader2, Eye, EyeOff, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const supabase = createClient();

  // Password validation
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && password.length > 0;
  const isPasswordValid = hasMinLength && hasUppercase && hasLowercase && hasNumber;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isPasswordValid) {
      setMessage({ type: "error", text: "Please meet all password requirements" });
      return;
    }

    if (!passwordsMatch) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }

    setLoading(true);
    setMessage(null);

    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setLoading(false);
      setMessage({ type: "error", text: error.message });
      return;
    }

    // If email confirmation is disabled, user is immediately signed in
    if (data.user && data.session) {
      // Create user profile
      await supabase.from("user_profiles").insert({
        id: data.user.id,
        display_name: email.split("@")[0],
      });

      // Auto-enroll in both curricula
      const { data: curricula } = await supabase.from("curricula").select("id");
      if (curricula) {
        for (const curriculum of curricula) {
          await supabase.from("user_curriculum_enrollments").insert({
            user_id: data.user.id,
            curriculum_id: curriculum.id,
            status: "active",
            current_week: 1,
          });
        }
      }

      router.push("/");
      router.refresh();
    } else {
      // Email confirmation is enabled
      setLoading(false);
      setMessage({
        type: "success",
        text: "Check your email for a confirmation link to complete signup.",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">CEO Platform</span>
            </div>
          </div>
          <div>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription className="text-muted-foreground">
              Start your journey to becoming a better leader
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-border bg-secondary focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-border bg-secondary focus:border-orange-500 focus:ring-orange-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Password requirements */}
              {password.length > 0 && (
                <div className="mt-2 space-y-1">
                  <PasswordRequirement met={hasMinLength} text="At least 8 characters" />
                  <PasswordRequirement met={hasUppercase} text="One uppercase letter" />
                  <PasswordRequirement met={hasLowercase} text="One lowercase letter" />
                  <PasswordRequirement met={hasNumber} text="One number" />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-muted-foreground mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border-border bg-secondary focus:border-orange-500 focus:ring-orange-500"
              />
              {confirmPassword.length > 0 && !passwordsMatch && (
                <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
              )}
            </div>

            {message && (
              <div
                className={`rounded-lg p-3 text-sm ${
                  message.type === "success"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {message.text}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || !isPasswordValid || !passwordsMatch}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:text-orange-400">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PasswordRequirement({ met, text }: { met: boolean; text: string }) {
  return (
    <div className={`flex items-center gap-2 text-xs ${met ? "text-green-400" : "text-muted-foreground"}`}>
      <Check className={`h-3 w-3 ${met ? "opacity-100" : "opacity-30"}`} />
      {text}
    </div>
  );
}
