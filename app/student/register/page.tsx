import type { Metadata } from "next";
import Link from "next/link";

import { RegisterForm } from "@/components/portal/register-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Student registration",
  robots: { index: false, follow: false },
};

export default function StudentRegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="font-heading text-2xl font-semibold">Student registration</h1>
          <p className="text-sm text-muted-foreground">Create your account. Your trainer will assign a batch and approve access.</p>
        </div>
        <Card>
          <CardHeader><p className="text-sm font-medium">Request student access</p></CardHeader>
          <CardContent><RegisterForm /></CardContent>
        </Card>
        <p className="text-center text-sm text-muted-foreground">Already registered? <Link href="/student/login" className="font-medium text-accent hover:underline">Student login</Link></p>
        <p className="text-center text-xs text-muted-foreground"><Link href="/" className="hover:underline">Back to homepage</Link></p>
      </div>
    </main>
  );
}
