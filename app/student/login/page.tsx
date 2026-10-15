import { GraduationCap } from "lucide-react";
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
  title: "Student sign-in",
  robots: { index: false, follow: false },
};

export default async function StudentLoginPage() {
  const session = await getSession();
  const disabled = isAuthDisabled();

  if (disabled && session?.role === "student") {
    return (
      <main className="relative flex min-h-screen items-start justify-center border-t-4 border-star/40 bg-background px-4 py-16">
        <div className="w-full max-w-lg space-y-5">
          <div className="flex items-start gap-3 rounded-xl bg-star/10 p-4 text-star">
            <Info className="shrink-0 h-5 w-5" />
            <div>
              <p className="font-medium">Authentication is currently disabled.</p>
              <p className="text-sm opacity-80">
                The student portal is public for viewing right now. Toggle
                authentication back on when you are ready.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <Link
              href="/student"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Go to student portal
            </Link>

            <p className="text-xs text-muted-foreground">
              Currently signed in as <span className="font-medium text-foreground">student@demo.local</span>
              <br />
              This is a placeholder session. No real credentials are required while
              auth is disabled.
            </p>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            <Link
              href="/student/login"
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
              Use the account your trainer created for you.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm role="student" redirectTo="/student" />
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

function LoginForm({ role, redirectTo }: { role: "admin" | "student"; redirectTo: string }) {
  return (
    <form
      action={async () => {
        "use server";
        console.log("login attempted", { role });
      }}
      className="space-y-4 pointer-events-none"
    >
      <p className="text-sm text-muted-foreground text-center">
        Login is currently disabled.
      </p>
    </form>
  );
}
