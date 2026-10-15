import type { Metadata } from "next";

import { ClipboardList } from "lucide-react";
import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "My assignments",
  robots: { index: false, follow: false },
};

export default function StudentAssignmentsPage() {
  const session = getSession();

  return (
    <div className="space-y-6">
      <PageHeader
        title="My assignments"
        description="The student portal is public in this build."
      />
      <EmptyState
        icon={ClipboardList}
        title="Assignments"
        description="Assignment history is not available in this public build."
      />
    </div>
  );
}
