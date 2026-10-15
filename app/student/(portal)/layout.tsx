import { redirect } from "next/navigation";

import { PortalShell } from "@/components/portal/portal-shell";
import { getSession, isAuthDisabled } from "@/lib/auth";

/**
 * Server-side guard for every /student page.
 *
 * With authentication enabled, readers without a valid student session are
 * redirected to the student sign-in page.
 *
 * With authentication disabled, the portal is publicly viewable: the student
 * layout still renders the portal shell with a placeholder session so the whole
 * student experience is reachable without credentials.
 */
export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const disabled = isAuthDisabled();

  if (!disabled && (!session || session.role !== "student")) {
    redirect("/student/login");
  }

  return (
    <PortalShell
      role="student"
      user={{
        name: session?.name ?? "Demo Student",
        email: session?.email ?? "student@demo.local",
        batchName: session?.batchId ? "My batch" : null,
      }}
    >
      {children}
    </PortalShell>
  );
}
