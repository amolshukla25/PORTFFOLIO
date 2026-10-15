import type { Metadata } from "next";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { getSession } from "@/lib/auth";
import { BookOpenCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "My activity",
  robots: { index: false, follow: false },
};

export default function StudentActivityPage() {
  const session = getSession();

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Hi ${session.name.split(" ")[0]}`}
        description="The student portal is public in this build."
      />
      <EmptyState
        icon={BookOpenCheck}
        title="Activity log"
        description="Activity logging is not available in this public build."
      />
    </div>
  );
}
