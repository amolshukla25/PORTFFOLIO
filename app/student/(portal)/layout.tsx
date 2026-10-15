import { redirect } from "next/navigation";

import { PortalShell } from "@/components/portal/portal-shell";
import { getSession } from "@/lib/auth";
import { Batch } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * Server-side guard for every /student page: readers without a valid student
 * session are redirected to the student sign-in page.
 */
export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || session.role !== "student") {
    redirect("/student/login");
  }

  let batchName: string | null = null;
  if (session.batchId) {
    try {
      await connectToDatabase();
      const batch = await Batch.findById(session.batchId).lean();
      batchName = batch?.name ?? null;
    } catch {
      // A missing batch should never block the portal.
      batchName = null;
    }
  }

  return (
    <PortalShell
      role="student"
      user={{ name: session.name, email: session.email, batchName }}
    >
      {children}
    </PortalShell>
  );
}
