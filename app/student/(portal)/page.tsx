import {
  BookOpenCheck,
  ClipboardList,
  Flame,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StarDisplay } from "@/components/common/star-rating";
import { StatCard } from "@/components/common/stat-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import { Activity, Assignment, Submission } from "@/lib/db/models";
import { formatDay, shortDate, toDateKey, todayKey } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "My dashboard",
  robots: { index: false, follow: false },
};

export default async function StudentDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/student/login");

  await connectToDatabase();
  const studentId = session.userId;
  const today = todayKey();

  const [todayLog, recentLogs, activityRows, assignments, submissions] =
    await Promise.all([
      Activity.findOne({ student: studentId, date: today }).lean(),
      Activity.find({ student: studentId })
        .sort({ date: -1 })
        .limit(5)
        .lean(),
      Activity.find({ student: studentId }).select("date rating").lean(),
      session.batchId
        ? Assignment.find({ batch: session.batchId }).sort({ givenAt: -1 }).lean()
        : Promise.resolve([]),
      Submission.find({ student: studentId }).select("assignment").lean(),
    ]);

  const submittedIds = new Set(submissions.map((row) => String(row.assignment)));
  const pending = assignments.filter(
    (assignment) => !submittedIds.has(String(assignment._id))
  );

  const totalLogs = activityRows.length;
  const avgRating =
    activityRows.length > 0
      ? activityRows.reduce((sum, row) => sum + (row.rating ?? 0), 0) /
        activityRows.length
      : null;

  // Consecutive days logged, allowing today to still be outstanding.
  const loggedDays = new Set(activityRows.map((row) => row.date));
  const cursor = new Date();
  if (!loggedDays.has(toDateKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  let streak = 0;
  while (loggedDays.has(toDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Hi ${session.name.split(" ")[0]}`}
        description="Log today's session — what it covered, your 1–5 feedback and a remark."
      >
        <Link href="/student/activity" className={buttonVariants({ size: "sm" })}>
          {todayLog ? "Update today's session" : "Log today's session"}
        </Link>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Today's check-in"
          value={todayLog ? "Done" : "Pending"}
          icon={BookOpenCheck}
          tone={todayLog ? "success" : "accent"}
          hint={
            todayLog
              ? `Logged ${todayLog.session || todayLog.topic}`
              : "Take a minute to record today's session"
          }
        />
        <StatCard
          label="Current streak"
          value={`${streak} day${streak === 1 ? "" : "s"}`}
          icon={Flame}
          tone="star"
          hint={streak === 0 ? "Log today to start a streak" : "Keep it going"}
        />
        <StatCard
          label="Average feedback"
          value={avgRating ? avgRating.toFixed(1) : "—"}
          icon={Star}
          tone="star"
          hint={`Across ${totalLogs} logged day${totalLogs === 1 ? "" : "s"}`}
        />
        <StatCard
          label="Assignments pending"
          value={pending.length}
          icon={ClipboardList}
          tone={pending.length === 0 ? "success" : "default"}
          hint={
            assignments.length === 0
              ? "Nothing assigned yet"
              : `${submittedIds.size} of ${assignments.length} submitted`
          }
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="border-border/60">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">Today&apos;s check-in</CardTitle>
            <Link
              href="/student/activity"
              className="text-xs font-medium text-accent hover:underline"
            >
              {todayLog ? "Edit" : "Log now"}
            </Link>
          </CardHeader>
          <CardContent>
            {todayLog ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {todayLog.topic}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatDay(todayLog.date)}
                      {todayLog.session ? ` · ${todayLog.session}` : ""}
                      {todayLog.hours ? ` · ${todayLog.hours}h` : ""}
                    </p>
                  </div>
                  <StarDisplay value={todayLog.rating} />
                </div>
                {todayLog.notes ? (
                  <p className="rounded-md bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                    {todayLog.notes}
                  </p>
                ) : null}
              </div>
            ) : (
              <EmptyState
                icon={BookOpenCheck}
                title="Nothing logged today"
                description="Tap “Log today's session” to record which session you had, your 1–5 feedback and a remark."
              />
            )}
          </CardContent>
        </Card>

        <Card className="border-border/60">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">Assignments</CardTitle>
            <Link
              href="/student/assignments"
              className="text-xs font-medium text-accent hover:underline"
            >
              View all
            </Link>
          </CardHeader>
          <CardContent>
            {pending.length === 0 ? (
              <EmptyState
                icon={ClipboardList}
                title={
                  assignments.length === 0
                    ? "No assignments yet"
                    : "All caught up"
                }
                description={
                  assignments.length === 0
                    ? "Your trainer hasn't given an assignment for your batch yet."
                    : "You have submitted everything given to you so far."
                }
              />
            ) : (
              <ul className="space-y-3">
                {pending.slice(0, 4).map((assignment) => (
                  <li
                    key={String(assignment._id)}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">
                        {assignment.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Given {formatDay(assignment.givenAt)}
                        {assignment.dueDate
                          ? ` · due ${formatDay(assignment.dueDate)}`
                          : ""}
                      </p>
                    </div>
                    <Badge variant="star" className="shrink-0">
                      pending
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Recent activity</CardTitle>
          <Link
            href="/student/activity"
            className="text-xs font-medium text-accent hover:underline"
          >
            Full history
          </Link>
        </CardHeader>
        <CardContent>
          {recentLogs.length === 0 ? (
            <EmptyState
              icon={BookOpenCheck}
              title="No activity logged yet"
              description="Your daily logs and scores will show up here."
            />
          ) : (
            <ul className="divide-y divide-border/60">
              {recentLogs.map((log) => (
                <li
                  key={String(log._id)}
                  className="flex flex-wrap items-center justify-between gap-2 py-3 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{log.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      {shortDate(log.date)}
                      {log.session ? ` · ${log.session}` : ""}
                      {log.hours ? ` · ${log.hours}h` : ""}
                    </p>
                    {log.notes ? (
                      <p className="line-clamp-1 max-w-xl text-xs text-muted-foreground">
                        {log.notes}
                      </p>
                    ) : null}
                  </div>
                  <StarDisplay value={log.rating} />
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
