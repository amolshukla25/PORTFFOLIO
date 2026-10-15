import { redirect } from "next/navigation";

import { PortalShell } from "@/components/portal/portal-shell";
import { getSession } from "@/lib/auth";

/**
 * Server-side guard for every /admin page: readers without a valid admin
 * session are redirected to the sign-in page before any data is fetched.
 */
export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || session.role !== "admin") {
    redirect("/admin/login");
  }

  return (
    <PortalShell
      role="admin"
      user={{ name: session.name, email: session.email }}
    >
      {children}
    </PortalShell>
  );
}
