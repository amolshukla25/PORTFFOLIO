import { PortalShell } from "@/components/portal/portal-shell";
import { getSession } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getSession();

  return (
    <PortalShell role="admin" user={{ name: session.name, email: session.email }}>
      {children}
    </PortalShell>
  );
}
