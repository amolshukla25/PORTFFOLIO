import { BookOpenCheck, CalendarCheck, Clock, Star } from "lucide-react";
import type { Metadata } from "next";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StarDisplay } from "@/components/common/star-rating";
import { StatCard } from "@/components/common/stat-card";
import {
  ActivityForm,
  type ActivityEntry,
} from "@/components/student/activity-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/auth";
import { formatDay, shortDate, todayKey } from "@/lib/dates";
import { Activity } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Daily activity",
  robots: { index: false, follow: false },
};

export default async function StudentActivityPage() {
  const session = await getSession();
  await connectToDatabase();

  const entries = await Activity.find({ student: session!.userId })
    .sort({ date: -1, createdAt: -1 })
    .lean();

  const today = todayKey();
  const todaysEntry = entries.find((entry) => entry.date === today) ?? null;

  const totalHours = entries.reduce((sum, entry) => sum + (entry.hours ?? 0), 0);
  const avgRating = entries.length
    ? entries.reduce((sum, entry) => sum + entry.rating, 0) / entries.length
    : null;

  const toEntry = (entry: (typeof entries)[number]): ActivityEntry => ({
    _id: String(entry._id),
    date: entry.date,
    topic: entry.topic,
    notes: entry.notes ?? "",
    hours: entry.hours ?? null,
    rating: entry.rating,
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Daily activity"
        description="Log what you studied today and how much you got out of it."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Days logged"
          value={entries.length}
          icon={CalendarCheck}
          tone="accent"
          hint="Every day you check in counts"
        />
        <StatCard
          label="Average score"
          value={avgRating ? avgRating.toFixed(1) : "—"}
          icon={Star}
          tone="star"
          hint="Across all your check-ins"
        />
        <StatCard
          label="Hours studied"
          value={totalHours ? totalHours.toFixed(1) : "0"}
          icon={Clock}
          tone="success"
          hint="Total hours you recorded"
        />
      </div>

      <Card className="border-border/60">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">
            {todaysEntry ? "Today's check-in" : "Check in for today"}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {formatDay(new Date())}
            {todaysEntry
              ? " — already logged. Edit it any time."
              : " — takes less than a minute."}
          </p>
        </CardHeader>
        <CardContent>
          <ActivityForm today={todaysEntry ? toEntry(todaysEntry) : null} />
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Your history</CardTitle>
          <Badge variant="outline">
            {entries.length} {entries.length === 1 ? "entry" : "entries"}
          </Badge>
        </CardHeader>
        <CardContent>
          {entries.length === 0 ? (
            <EmptyState
              icon={BookOpenCheck}
              title="No check-ins yet"
              description="Save today's activity above and your progress will start showing up here."
            />
          ) : (
            <ul className="divide-y divide-border/60">
              {entries.map((entry) => (
                <li
                  key={String(entry._id)}
                  className="flex flex-wrap items-start justify-between gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{entry.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      {shortDate(entry.date)}
                      {entry.hours !== null && entry.hours !== undefined
                        ? ` · ${entry.hours} h`
                        : ""}
                    </p>
                    {entry.notes ? (
                      <p className="mt-1 line-clamp-2 max-w-xl text-xs text-muted-foreground">
                        {entry.notes}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <StarDisplay value={entry.rating} />
                    <span className="text-xs font-medium text-muted-foreground">
                      {entry.rating}/5
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
