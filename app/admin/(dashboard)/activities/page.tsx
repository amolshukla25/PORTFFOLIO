import { BookOpenCheck, Clock, Star, Users } from "lucide-react";
import type { Metadata } from "next";

import {
  ActivityTable,
  type ActivityRow,
  type BatchOption,
  type MissingRow,
} from "@/components/admin/activity-table";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StatCard } from "@/components/common/stat-card";
import { eachDayKey, isValidDateKey, shortDate, toDateKey, todayKey } from "@/lib/dates";
import { Activity, Batch, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Daily activity",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface PopulatedActivity {
  _id: unknown;
  date: string;
  session: string;
  topic: string;
  notes: string;
  hours: number | null;
  rating: number;
  student: { _id: unknown; name: string; email: string } | null;
  batch: { _id: unknown; name: string } | null;
}

interface PopulatedStudent {
  _id: unknown;
  name: string;
  email: string;
  batch: { _id: unknown; name: string } | null;
}

function first(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function shiftDays(key: string, delta: number): string {
  const [year, month, day] = key.split("-").map(Number);
  return toDateKey(new Date(year, (month ?? 1) - 1, (day ?? 1) + delta));
}

/** Protected by the admin layout — no session check needed here. */
export default async function AdminActivitiesPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const rawTo = first(params.to);
  const rawFrom = first(params.from);
  const batchId = first(params.batchId);

  const to = isValidDateKey(rawTo) ? rawTo : todayKey();
  const from = isValidDateKey(rawFrom) ? rawFrom : shiftDays(to, -29);

  await connectToDatabase();

  const activityFilter: Record<string, unknown> = {
    date: { $gte: from, $lte: to },
  };
  if (batchId) activityFilter.batch = batchId;

  const studentFilter: Record<string, unknown> = {
    role: "student",
    active: true,
  };
  if (batchId) studentFilter.batch = batchId;

  const [rows, students, batches] = await Promise.all([
    Activity.find(activityFilter)
      .sort({ date: -1, createdAt: -1 })
      .populate("student", "name email")
      .populate("batch", "name")
      .lean() as unknown as Promise<PopulatedActivity[]>,
    User.find(studentFilter)
      .select("name email batch")
      .populate("batch", "name")
      .lean() as unknown as Promise<PopulatedStudent[]>,
    Batch.find({}).select("name").sort({ name: 1 }).lean(),
  ]);

  const activities: ActivityRow[] = rows.map((row) => ({
    _id: String(row._id),
    date: row.date,
    session: row.session ?? "",
    topic: row.topic,
    notes: row.notes ?? "",
    hours: row.hours ?? null,
    rating: row.rating,
    studentName: row.student?.name ?? "Deleted student",
    studentEmail: row.student?.email ?? "",
    batchName: row.batch?.name ?? "No batch",
  }));

  const loggedByStudent = new Map<string, Set<string>>();
  for (const row of rows) {
    if (!row.student) continue;
    const key = String(row.student._id);
    const days = loggedByStudent.get(key) ?? new Set<string>();
    days.add(row.date);
    loggedByStudent.set(key, days);
  }

  const range = eachDayKey(from, to);
  const missing: MissingRow[] = students
    .map((student) => {
      const logged = loggedByStudent.get(String(student._id));
      return {
        _id: String(student._id),
        name: student.name,
        email: student.email,
        batchName: student.batch?.name ?? "No batch",
        daysMissing: range.reduce(
          (count, day) => count + (logged?.has(day) ? 0 : 1),
          0
        ),
      };
    })
    .filter((student) => student.daysMissing > 0)
    .sort((a, b) => b.daysMissing - a.daysMissing);

  const totalRatings = activities.reduce((sum, row) => sum + row.rating, 0);
  const totalHours = activities.reduce((sum, row) => sum + (row.hours ?? 0), 0);
  const avgRating = activities.length
    ? totalRatings / activities.length
    : null;

  const batchOptions: BatchOption[] = batches.map((batch) => ({
    _id: String(batch._id),
    name: batch.name,
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Daily activity"
        description={`${shortDate(from)} – ${shortDate(to)} · the day-wise sessions students attended, with their 1–5 feedback and remarks.`}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Check-ins"
          value={activities.length}
          icon={BookOpenCheck}
          tone="accent"
          hint={`${range.length} days in range`}
        />
        <StatCard
          label="Average feedback"
          value={avgRating ? avgRating.toFixed(1) : "—"}
          icon={Star}
          tone="star"
          hint="1 = poor session, 5 = excellent"
        />
        <StatCard
          label="Hours logged"
          value={totalHours ? totalHours.toFixed(1) : "0"}
          icon={Clock}
          tone="success"
          hint="Sum of reported study hours"
        />
        <StatCard
          label="Students logging"
          value={`${loggedByStudent.size}${students.length ? ` / ${students.length}` : ""}`}
          icon={Users}
          hint={
            missing.length > 0
              ? `${missing.length} with no entry`
              : "Everyone has logged"
          }
        />
      </div>

      <ActivityTable
        activities={activities}
        missing={missing}
        batches={batchOptions}
        filters={{ from, to, batchId }}
      />
    </div>
  );
}
