import type { Metadata } from "next";

import { BatchManager, type BatchRow } from "@/components/admin/batch-manager";
import { PageHeader } from "@/components/portal/portal-page-header";
import { Batch, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Batches",
  robots: { index: false, follow: false },
};

export default async function AdminBatchesPage() {
  await connectToDatabase();

  const [batches, counts] = await Promise.all([
    Batch.find().sort({ createdAt: -1 }).lean(),
    User.aggregate<{ _id: unknown; count: number }>([
      { $match: { role: "student", batch: { $ne: null } } },
      { $group: { _id: "$batch", count: { $sum: 1 } } },
    ]),
  ]);

  const countByBatch = new Map<string, number>(
    counts.map((row) => [String(row._id), row.count] as const)
  );

  const rows: BatchRow[] = batches.map((batch) => ({
    _id: String(batch._id),
    name: batch.name,
    description: batch.description ?? "",
    startDate: batch.startDate ? new Date(batch.startDate).toISOString() : null,
    endDate: batch.endDate ? new Date(batch.endDate).toISOString() : null,
    active: batch.active,
    studentCount: countByBatch.get(String(batch._id)) ?? 0,
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Batches"
        description="Group students into batches so assignments, daily activity and reports stay organised."
      />
      <BatchManager batches={rows} />
    </div>
  );
}
