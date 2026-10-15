"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";

interface LogoutButtonProps {
  /** Where to send the user after signing out. */
  redirectTo: string;
}

export function LogoutButton({ redirectTo }: LogoutButtonProps) {
  const router = useRouter();
  const [pending, setPending] = React.useState(false);

  async function handleLogout() {
    try {
      setPending(true);
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace(redirectTo);
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleLogout}
      disabled={pending}
      className="w-full justify-start gap-2 sm:w-auto"
    >
      <LogOut className="h-4 w-4" />
      {pending ? "Signing out…" : "Sign out"}
    </Button>
  );
}
