import {
  BookOpenCheck,
  ClipboardList,
  Flame,
  Star,
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
import { getSession, isAuthDisabled } from "@/lib/auth";
import { Activity } from "@/lib/db/models";
import { shortDate, toDateKey, todayKey } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "My dashboard",
  robots: { index: false, follow: false },
};

export default async function StudentDashboardPage() {
  const session = await getSession();
  const disabled = isAuthDisabled();
  const studentId = session?.userId ?? null;
  const today = todayKey();

  await connectToDatabase();

  const [todayLog, recentLogs, activityRows] =
    studentId && !disabled
      ? await Promise.all([
          Activity.findOne({ student: studentId, date: today }).lean(),
          Activity.find({ student: studentId })
            .sort({ date: -1 })
            .limit(5)
            .lean(),
          Activity.find({ student: studentId }).select("date rating").lean(),
        ])
      : await Promise.all([
          Promise.resolve(null),
          Promise.resolve([]),
          Promise.resolve([]),
        ]);

  const totalLogs = activityRows.length;
  const avgRating =
    totalLogs > 0
      ? activityRows.reduce((sum, row) => sum + (row.rating ?? 0), 0) / totalLogs
      : null;

  const loggedDays = new Set(activityRows.map((row) => row.date));
  let streakCount = 0;
  const cursor = new Date();
  if (!loggedDays.has(toDateKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (loggedDays.has(toDateKey(cursor))) {
    streakCount += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Hi ${session?.name.split(" ")[0] ?? "Demo"}`}
        description={
          disabled
            ? "Viewing the student portal with auth disabled. Add your own data when auth is enabled."
            : "Log what you studied today and keep your streak alive."
        }
      >
        <Link href="/student/activity" className={buttonVariants({ size: "sm" })}>
          {todayLog ? "Update today's log" : "Log today's activity"}
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
              ? `Logged ${todayLog.topic}`
              : disabled
              ? "Add your own activity once auth is enabled"
              : "Take a minute to record what you studied"
          }
        />
        <StatCard
          label="Current streak"
          value={`${streakCount} day${streakCount === 1 ? "" : "s"}`}
          icon={Flame}
          tone="star"
          hint={streakCount === 0 ? disabled ? "Add your own activity once auth is enabled" : "Log today to start a streak" : "Keep it going"}
        />
        <StatCard
          label="Average score"
          value={avgRating ? avgRating.toFixed(1) : "—"}
          icon={Star}
          tone="star"
          hint={totalLogs > 0 ? `Across ${totalLogs} logged day${totalLogs === 1 ? "" : "s"}` : "Log your first activity"}
        />
        <StatCard
          label="Assignments pending"
          value={disabled ? "—" : "0"}
          icon={ClipboardList}
          tone="default"
          hint={disabled ? "Add your own assignments once auth is enabled" : "View assignments in the portal"}
        />
      </div>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Activity log</CardTitle>
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
                  <p className="truncate text-sm font-medium">{todayLog.topic}</p>
                  <p className="text-xs text-muted-foreground">
                    {shortDate(todayLog.date)}
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
              description={
                disabled
                  ? "Add your own log once authentication is enabled, or test with a real student account."
                  : "Tap “Log today's activity” and rate how much you got out of the session."
              }
            />
          )}
        </CardContent>
      </Card>

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
              description={
                disabled
                  ? "Add your own logs once auth is enabled, or sign in with a real student account."
                  : "Your daily logs and scores will show up here."
              }
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
                      {log.hours ? ` · ${log.hours}h` : ""}
                      {log.notes ? ` · ${log.notes}` : ""}
                    </p>
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
