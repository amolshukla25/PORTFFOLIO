import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Button,
  buttonVariants,
} from "@/components/ui/button";
import { Info } from "lucide-react";
import * as React from "react";
import { getSession, isAuthDisabled } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin sign-in",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const session = await getSession();
  const disabled = isAuthDisabled();

  if (disabled && session?.role === "admin") {
    return (
      <main className="relative flex min-h-screen items-start justify-center border-t-4 border-accent/40 bg-background px-4 py-16">
        <div className="w-full max-w-lg space-y-5">
          <div className="flex items-start gap-3 rounded-xl bg-accent/10 p-4 text-accent">
            <Info className="shrink-0 h-5 w-5" />
            <div>
              <p className="font-medium">Authentication is currently disabled.</p>
              <p className="text-sm opacity-80">
                The admin portal is public for viewing right now. Toggle authentication
                back on when you are ready.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <Link
              href="/admin"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Go to admin portal
            </Link>

            <p className="text-xs text-muted-foreground">
              Currently signed in as <span className="font-medium text-foreground">admin@demo.local</span>
              <br />
              This is a placeholder session. No real credentials are required while
              auth is disabled.
            </p>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            <Link
              href="/admin/login"
              className="hover:text-foreground hover:underline"
            >
              Keep viewing login page
            </Link>
            {" · "}
            <Link href="/" className="hover:text-foreground hover:underline">
              Back to amolshukla.online
            </Link>
          </p>
        </div>
      </main>
    );
  }

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

function LoginForm({ role, redirectTo }: { role: "admin" | "student"; redirectTo: string }) {
  return (
    <form
      action={async () => {
        "use server";
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: "", password: "", role }),
        });
        console.log("login attempted", res.status);
      }}
      className="space-y-4 pointer-events-none"
    >
      <p className="text-sm text-muted-foreground text-center">
        Login is currently disabled.
      </p>
    </form>
  );
}
