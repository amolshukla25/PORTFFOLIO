import {
  BookOpenCheck,
  CalendarClock,
  ClipboardList,
  ListChecks,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StarDisplay } from "@/components/common/star-rating";
import { StatCard } from "@/components/common/stat-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import {
  Activity,
  Assignment,
  Batch,
  Submission,
  Todo,
  User,
} from "@/lib/db/models";
import { formatDateTime, shortDate, startOfWeek, toDateKey, todayKey } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Admin dashboard",
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const session = await getSession();
  await connectToDatabase();

  const today = todayKey();
  const weekFrom = toDateKey(startOfWeek(new Date()));

  const [
    activeBatches,
    activeStudents,
    logsToday,
    logsThisWeek,
    ratingAgg,
    todosToday,
    recentLogs,
    recentAssignments,
    submissionCounts,
    studentsPerBatch,
  ] = await Promise.all([
    Batch.countDocuments({ active: true }),
    User.countDocuments({ role: "student", active: true }),
    Activity.countDocuments({ date: today }),
    Activity.countDocuments({ date: { $gte: weekFrom } }),
    Activity.aggregate<{ _id: null; avg: number; count: number }>([
      { $match: { date: { $gte: weekFrom } } },
      {
        $group: {
          _id: null,
          avg: { $avg: "$rating" },
          count: { $sum: 1 },
        },
      },
    ]),
    Todo.find({ owner: session!.userId, date: today }).sort({ done: 1, createdAt: 1 }).lean(),
    Activity.find()
      .sort({ date: -1, createdAt: -1 })
      .limit(6)
      .populate<{ student: { name: string; email: string } | null }>(
        "student",
        "name email"
      )
      .lean(),
    Assignment.find().sort({ givenAt: -1 }).limit(5).lean(),
    Submission.aggregate<{ _id: unknown; count: number }>([
      { $group: { _id: "$assignment", count: { $sum: 1 } } },
    ]),
    User.aggregate<{ _id: unknown; count: number }>([
      { $match: { role: "student", active: true, batch: { $ne: null } } },
      { $group: { _id: "$batch", count: { $sum: 1 } } },
    ]),
  ]);

  const batchNames = await Batch.find({
    _id: { $in: recentAssignments.map((assignment) => assignment.batch) },
  })
    .select("name")
    .lean();
  const batchNameById = new Map<string, string>(
    batchNames.map((batch) => [String(batch._id), batch.name])
  );
  const submittedByAssignment = new Map<string, number>(
    submissionCounts.map((row) => [String(row._id), row.count])
  );
  const studentsByBatch = new Map<string, number>(
    studentsPerBatch.map((row) => [String(row._id), row.count])
  );

  const avgRating = ratingAgg[0]?.avg ?? null;
  const ratedCount = ratingAgg[0]?.count ?? 0;
  const openTodos = todosToday.filter((todo) => !todo.done).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Good to see you, ${session!.name.split(" ")[0]}`}
        description="Everything happening across your batches today."
      >
        <Link href="/admin/activities" className={buttonVariants({ variant: "outline", size: "sm" })}>
          Review activity
        </Link>
        <Link href="/admin/reports" className={buttonVariants({ size: "sm" })}>
          Download report
        </Link>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active batches" value={activeBatches} icon={Users} hint={`${activeStudents} students enrolled`} />
        <StatCard
          label="Logged today"
          value={`${logsToday}${activeStudents ? ` / ${activeStudents}` : ""}`}
          icon={BookOpenCheck}
          tone="accent"
          hint={logsToday === 0 ? "No activity logged yet today" : "Daily activity entries"}
        />
        <StatCard
          label="Avg. learning score"
          value={avgRating ? avgRating.toFixed(1) : "—"}
          icon={Star}
          tone="star"
          hint={`${ratedCount} rating${ratedCount === 1 ? "" : "s"} this week`}
        />
        <StatCard
          label="To-dos left today"
          value={openTodos}
          icon={ListChecks}
          tone={openTodos === 0 ? "success" : "default"}
          hint={`${todosToday.length} planned for ${shortDate(today)}`}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">Today&apos;s to-dos</CardTitle>
            <Link href="/admin/todos" className="text-xs font-medium text-accent hover:underline">
              Manage
            </Link>
          </CardHeader>
          <CardContent>
            {todosToday.length === 0 ? (
              <EmptyState
                icon={ListChecks}
                title="Nothing planned yet"
                description="Add your tasks for today so you can track what got done."
              />
            ) : (
              <ul className="space-y-2">
                {todosToday.map((todo) => (
                  <li
                    key={String(todo._id)}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/20 px-3 py-2"
                  >
                    <span
                      className={
                        todo.done
                          ? "mt-1 h-3.5 w-3.5 shrink-0 rounded-full bg-success"
                          : "mt-1 h-3.5 w-3.5 shrink-0 rounded-full border border-muted-foreground/40"
                      }
                    />
                    <div className="min-w-0">
                      <p className={todo.done ? "text-sm text-muted-foreground line-through" : "text-sm font-medium"}>
                        {todo.title}
                      </p>
                      {todo.notes ? (
                        <p className="text-xs text-muted-foreground">{todo.notes}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">Latest student activity</CardTitle>
            <Link href="/admin/activities" className="text-xs font-medium text-accent hover:underline">
              View all
            </Link>
          </CardHeader>
          <CardContent>
            {recentLogs.length === 0 ? (
              <EmptyState
                icon={BookOpenCheck}
                title="No activity logged yet"
                description="Student entries will appear here with their 1–5 learning score."
              />
            ) : (
              <ul className="space-y-3">
                {recentLogs.map((log) => (
                  <li key={String(log._id)} className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {log.student?.name ?? "Student"}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {shortDate(log.date)} · {log.topic}
                      </p>
                    </div>
                    <StarDisplay value={log.rating} className="mt-0.5 shrink-0" />
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Assignment tracking</CardTitle>
          <Link href="/admin/assignments" className="text-xs font-medium text-accent hover:underline">
            Manage
          </Link>
        </CardHeader>
        <CardContent>
          {recentAssignments.length === 0 ? (
            <EmptyState
              icon={ClipboardList}
              title="No assignments given yet"
              description="Create an assignment for a batch and track submissions here."
            />
          ) : (
            <ul className="divide-y divide-border/60">
              {recentAssignments.map((assignment) => {
                const batchId = String(assignment.batch);
                const expected = studentsByBatch.get(batchId) ?? 0;
                const submitted = submittedByAssignment.get(String(assignment._id)) ?? 0;
                const pending = Math.max(expected - submitted, 0);
                return (
                  <li
                    key={String(assignment._id)}
                    className="flex flex-wrap items-center justify-between gap-2 py-3 first:pt-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <Link
                        href={`/admin/assignments/${String(assignment._id)}`}
                        className="text-sm font-medium hover:text-accent"
                      >
                        {assignment.title}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {batchNameById.get(batchId) ?? "Batch"} · given{" "}
                        {formatDateTime(assignment.givenAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="success">{submitted} submitted</Badge>
                      <Badge variant={pending > 0 ? "star" : "outline"}>
                        {pending > 0 ? `${pending} pending` : "all done"}
                      </Badge>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
      </Card>

      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <CalendarClock className="h-3.5 w-3.5" />
        Week starting {shortDate(weekFrom)} · reports cover Monday to Sunday and calendar months.
      </p>
    </div>
  );
}
