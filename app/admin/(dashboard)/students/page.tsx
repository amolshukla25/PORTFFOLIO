import { GraduationCap, ShieldCheck, UserPlus, Users } from "lucide-react";
import type { Metadata } from "next";

import { StudentManager } from "@/components/admin/student-manager";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StatCard } from "@/components/common/stat-card";
import { Batch, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Students",
  robots: { index: false, follow: false },
};

interface StudentsPageProps {
  searchParams: Promise<{ batchId?: string }>;
}

export default async function StudentsPage({
  searchParams,
}: StudentsPageProps) {
  const params = await searchParams;
  const initialBatchId = params.batchId ?? "";

  await connectToDatabase();

  const [students, batches] = await Promise.all([
    User.find({ role: "student" }).sort({ createdAt: -1 }).lean(),
    Batch.find().sort({ name: 1 }).select("name active").lean(),
  ]);

  const batchIds = Array.from(
    new Set(
      students
        .map((student) => student.batch)
        .filter((batch) => Boolean(batch))
        .map((batch) => String(batch))
    )
  );
  const batchDocs = batchIds.length
    ? await Batch.find({ _id: { $in: batchIds } })
        .select("name")
        .lean()
    : [];
  const batchNameById = new Map(
    batchDocs.map((batch) => [String(batch._id), batch.name])
  );

  const rows = students.map((student) => {
    const batchId = student.batch ? String(student.batch) : null;
    return {
      _id: String(student._id),
      name: student.name,
      email: student.email,
      active: student.active,
      batchId,
      batchName: batchId ? batchNameById.get(batchId) ?? null : null,
      createdAt: student.createdAt.toISOString(),
    };
  });

  const batchOptions = batches.map((batch) => ({
    _id: String(batch._id),
    name: batch.name,
    active: batch.active,
  }));

  const activeCount = rows.filter((row) => row.active).length;
  const unassignedCount = rows.filter((row) => !row.batchId).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Students"
        description="Students can register at /student/register. To approve access, edit their account, assign a batch, and enable Active. You can also create accounts here."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Total students"
          value={rows.length}
          icon={Users}
          hint={`${batchOptions.length} batch${batchOptions.length === 1 ? "" : "es"} available`}
        />
        <StatCard
          label="Active logins"
          value={activeCount}
          icon={ShieldCheck}
          tone="success"
          hint={rows.length - activeCount > 0 ? `${rows.length - activeCount} deactivated` : "All accounts enabled"}
        />
        <StatCard
          label="Unassigned"
          value={unassignedCount}
          icon={GraduationCap}
          tone={unassignedCount > 0 ? "star" : "default"}
          hint={unassignedCount > 0 ? "Assign them to a batch to track work" : "Every student has a batch"}
        />
      </div>

      <StudentManager
        students={rows}
        batches={batchOptions}
        initialBatchId={initialBatchId}
      />

      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <UserPlus className="h-3.5 w-3.5" />
        New students can sign in immediately — no email verification step.
      </p>
    </div>
  );
}
