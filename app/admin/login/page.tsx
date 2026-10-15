import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/portal/login-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin sign-in",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session?.role === "admin") redirect("/admin");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.18),transparent_70%)]"
      />
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Admin sign-in
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage batches, students, assignments and reports.
          </p>
        </div>

        <Card className="border-border/60 shadow-lg">
          <CardHeader className="pb-4">
            <p className="text-sm font-medium">Welcome back</p>
            <p className="text-xs text-muted-foreground">
              Sign in with your admin account.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm role="admin" redirectTo="/admin" />
            <p className="text-center text-xs text-muted-foreground">
              Not an admin?{" "}
              <Link
                href="/student/login"
                className="font-medium text-accent hover:underline"
              >
                Student portal
              </Link>
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
