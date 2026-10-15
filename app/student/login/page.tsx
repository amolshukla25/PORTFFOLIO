import { GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/portal/login-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Student sign-in",
  robots: { index: false, follow: false },
};

export default async function StudentLoginPage() {
  const session = await getSession();
  if (session?.role === "student") redirect("/student");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--star)/0.16),transparent_70%)]"
      />
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-star/15 text-star">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Student sign-in
          </h1>
          <p className="text-sm text-muted-foreground">
            Log your daily activity and track your assignments.
          </p>
        </div>

        <Card className="border-border/60 shadow-lg">
          <CardHeader className="pb-4">
            <p className="text-sm font-medium">Welcome back</p>
            <p className="text-xs text-muted-foreground">
              Use your approved student account.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm role="student" redirectTo="/student" />
            <p className="text-center text-sm text-muted-foreground">
              New student? <Link href="/student/register" className="font-medium text-accent hover:underline">Register here</Link>
            </p>
            <p className="text-center text-xs text-muted-foreground">New registrations need trainer approval before sign-in.</p>
            <p className="text-center text-xs text-muted-foreground">
              Forgot your password? Ask your trainer to reset it.
            </p>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground hover:underline">
            ← Back to amolshukla.online
          </Link>
        </p>
      </div>
    </main>
  );
}
