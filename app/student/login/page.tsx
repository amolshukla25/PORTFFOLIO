import { Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Student portal",
  robots: { index: false, follow: false },
};

export default function StudentLoginPage() {
  return (
    <main className="relative flex min-h-screen items-start justify-center border-t-4 border-star/40 bg-background px-4 py-16">
      <div className="w-full max-w-lg space-y-5">
        <div className="flex items-start gap-3 rounded-xl bg-star/10 p-4 text-star">
          <Info className="shrink-0 h-5 w-5" />
          <div>
            <p className="font-medium">Authentication has been removed.</p>
            <p className="text-sm opacity-80">
              The student portal is publicly viewable in this build. There is no
              sign-in step anymore.
            </p>
          </div>
        </div>

        <Card className="border-border/60 shadow-lg">
          <CardHeader className="pb-4">
            <p className="text-sm font-medium">Student portal</p>
            <p className="text-xs text-muted-foreground">
              This area no longer requires credentials.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href="/student"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Go to student portal
            </Link>

            <p className="text-center text-xs text-muted-foreground">
              Currently viewing as{" "}
              <span className="font-medium text-foreground">Public Guest</span>
              <br />
              This is a public build. No real account is required.
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
