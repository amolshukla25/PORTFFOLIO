import type { Metadata } from "next";

import {
  AssignmentManager,
  type AssignmentRow,
  type BatchOption,
} from "@/components/admin/assignment-manager";
import { PageHeader } from "@/components/portal/portal-page-header";
import { Assignment, Batch, Submission, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Assignments",
  robots: { index: false, follow: false },
};

interface AdminAssignmentsPageProps {
  searchParams: Promise<{ batchId?: string }>;
}

export default async function AdminAssignmentsPage({
  searchParams,
}: AdminAssignmentsPageProps) {
  const params = await searchParams;
  const batchId = params.batchId ?? "";

  await connectToDatabase();

  const [assignments, submissionCounts, studentsPerBatch, batches] =
    await Promise.all([
      Assignment.find(batchId ? { batch: batchId } : {})
        .sort({ givenAt: -1 })
        .lean(),
      Submission.aggregate<{ _id: unknown; count: number }>([
        { $group: { _id: "$assignment", count: { $sum: 1 } } },
      ]),
      User.aggregate<{ _id: unknown; count: number }>([
        { $match: { role: "student", active: true, batch: { $ne: null } } },
        { $group: { _id: "$batch", count: { $sum: 1 } } },
      ]),
      Batch.find().sort({ name: 1 }).select("name").lean(),
    ]);

  const batchNameById = new Map(
    batches.map((batch) => [String(batch._id), batch.name])
  );
  const submittedByAssignment = new Map(
    submissionCounts.map((row) => [String(row._id), row.count])
  );
  const studentsByBatch = new Map(
    studentsPerBatch.map((row) => [String(row._id), row.count])
  );

  const rows: AssignmentRow[] = assignments.map((assignment) => {
    const batchId = String(assignment.batch);
    const expectedCount = studentsByBatch.get(batchId) ?? 0;
    const submittedCount =
      submittedByAssignment.get(String(assignment._id)) ?? 0;

    return {
      id: String(assignment._id),
      title: assignment.title,
      description: assignment.description,
      batchId,
      batchName: batchNameById.get(batchId) ?? "—",
      givenAt: assignment.givenAt.toISOString(),
      dueDate: assignment.dueDate ? assignment.dueDate.toISOString() : null,
      submittedCount,
      expectedCount,
      pendingCount: Math.max(expectedCount - submittedCount, 0),
    };
  });

  const batchOptions: BatchOption[] = batches.map((batch) => ({
    id: String(batch._id),
    name: batch.name,
  }));

  const batchName = batchOptions.find((batch) => batch.id === batchId)?.name;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Assignments"
        description={
          batchName
            ? `Work given to ${batchName}. Overall submission counts come from the active students in that batch.`
            : "Track what you have given each batch and who has submitted it."
        }
      />
      <AssignmentManager
        assignments={rows}
        batches={batchOptions}
        initialBatchId={batchId}
      />
    </div>
  );
}
