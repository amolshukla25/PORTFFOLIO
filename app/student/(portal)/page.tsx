import type { Metadata } from "next";

import { BookOpenCheck } from "lucide-react";
import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StatCard } from "@/components/common/stat-card";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "My dashboard",
  robots: { index: false, follow: false },
};

export default function StudentDashboardPage() {
  const session = getSession();

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Hi ${session.name.split(" ")[0]}`}
        description="The student portal is public in this build."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Today's check-in"
          value="—"
          tone="default"
          hint="Sign-in based activity is disabled in this build."
        />
        <StatCard
          label="Current streak"
          value="—"
          tone="default"
          hint="Sign-in based activity is disabled in this build."
        />
        <StatCard
          label="Average score"
          value="—"
          tone="default"
          hint="Sign-in based activity is disabled in this build."
        />
        <StatCard
          label="Assignments pending"
          value="—"
          tone="default"
          hint="Sign-in based activity is disabled in this build."
        />
      </div>

      <EmptyState
        icon={BookOpenCheck}
        title="Student portal"
        description="This build is running without authentication. Personal activity, assignments, and submissions are not available here."
      />
    </div>
  );
}
