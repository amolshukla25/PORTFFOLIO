import { PortalShell } from "@/components/portal/portal-shell";
import { getSession } from "@/lib/auth";

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getSession();

  return (
    <PortalShell
      role="student"
      user={{
        name: session.name,
        email: session.email,
        batchName: null,
      }}
    >
      {children}
    </PortalShell>
  );
}
