import {
  ArrowLeft,
  BookOpenCheck,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  Clock,
  ListChecks,
  Star,
  UserCheck,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import mongoose from "mongoose";

import { EmptyState } from "@/components/common/empty-state";
import { Reveal } from "@/components/common/reveal";
import { StarDisplay } from "@/components/common/star-rating";
import { StatCard } from "@/components/common/stat-card";
import { PageHeader } from "@/components/portal/portal-page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  eachDayKey,
  formatDay,
  shortDate,
  toDateKey,
  todayKey,
} from "@/lib/dates";
import {
  Activity,
  Assignment,
  Batch,
  Submission,
  Todo,
  User,
} from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

interface BatchDashboardProps {
  params: Promise<{ id: string }>;
}

interface PopulatedActivity {
  _id: unknown;
  date: string;
  session: string;
  topic: string;
  notes: string;
  hours: number | null;
  rating: number;
  student: { name: string; email: string } | null;
}

function shiftDays(key: string, delta: number): string {
  const [year, month, day] = key.split("-").map(Number);
  return toDateKey(new Date(year, (month ?? 1) - 1, (day ?? 1) + delta));
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

export async function generateMetadata({
  params,
}: BatchDashboardProps): Promise<Metadata> {
  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { title: "Batch not found", robots: { index: false, follow: false } };
  }

  await connectToDatabase();
  const batch = await Batch.findById(id).select("name").lean();

  return {
    title: batch ? `${batch.name} — batch dashboard` : "Batch not found",
    robots: { index: false, follow: false },
  };
}

/** Dashboard for one batch: who is in it, what they logged and what is pending. */
export default async function BatchDashboardPage({
  params,
}: BatchDashboardProps) {
  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) notFound();

  await connectToDatabase();

  const batch = await Batch.findById(id).lean();
  if (!batch) notFound();

  const to = todayKey();
  const from = shiftDays(to, -29);
  const range = eachDayKey(from, to);

  const [students, activities, assignments, batchTodos] = await Promise.all([
    User.find({ role: "student", batch: id })
      .select("name email active")
      .sort({ name: 1 })
      .lean(),
    Activity.find({ batch: id })
      .sort({ date: -1, createdAt: -1 })
      .limit(1000)
      .populate<{ student: { name: string; email: string } | null }>(
        "student",
        "name email"
      )
      .lean() as unknown as Promise<PopulatedActivity[]>,
    Assignment.find({ batch: id }).sort({ givenAt: -1 }).limit(10).lean(),
    Todo.find({ batch: id, date: to }).lean(),
  ]);

  const submissions = assignments.length
    ? await Submission.find({
        assignment: { $in: assignments.map((assignment) => assignment._id) },
      })
        .select("assignment student")
        .lean()
    : [];

  const inRange = activities.filter(
    (entry) => entry.date >= from && entry.date <= to
  );

  // ── Range summary ────────────────────────────────────────────────────────
  const ratedTotal = inRange.reduce((sum, entry) => sum + entry.rating, 0);
  const hoursTotal = inRange.reduce((sum, entry) => sum + (entry.hours ?? 0), 0);
  const avgRating = inRange.length ? round1(ratedTotal / inRange.length) : null;

  // ── Per student ──────────────────────────────────────────────────────────
  const activeStudents = students.filter((student) => student.active);

  const studentRows = activeStudents
    .map((student) => {
      const key = String(student._id);
      // Emails are unique, so one log belongs to exactly one student.
      const own = inRange.filter(
        (entry) => entry.student?.email === student.email
      );
      const days = new Set(own.map((entry) => entry.date));
      const ratings = own.map((entry) => entry.rating);
      const hours = own.reduce((sum, entry) => sum + (entry.hours ?? 0), 0);
      const lastDate = own.length
        ? own.map((entry) => entry.date).sort().at(-1) ?? null
        : null;

      return {
        id: key,
        name: student.name,
        email: student.email,
        daysLogged: days.size,
        avgRating: ratings.length ? round1(ratings.reduce((sum, value) => sum + value, 0) / ratings.length) : null,
        hours: round1(hours),
        lastLogged: lastDate,
        daysMissing: range.reduce((count, day) => count + (days.has(day) ? 0 : 1), 0),
      };
    })
    .sort((a, b) => b.daysMissing - a.daysMissing);

  const studentsLogging = studentRows.filter((row) => row.daysLogged > 0).length;
  const missingDays = studentRows.reduce((sum, row) => sum + row.daysMissing, 0);
  const studentsWithGaps = studentRows.filter((row) => row.daysMissing > 0).length;

  // ── Per session ──────────────────────────────────────────────────────────
  const sessionMap = new Map<
    string,
    { session: string; count: number; ratingSum: number; hours: number; lastDate: string }
  >();
  for (const entry of inRange) {
    const name = entry.session?.trim() || "Untitled session";
    const current = sessionMap.get(name) ?? {
      session: name,
      count: 0,
      ratingSum: 0,
      hours: 0,
      lastDate: entry.date,
    };
    current.count += 1;
    current.ratingSum += entry.rating;
    current.hours += entry.hours ?? 0;
    if (entry.date > current.lastDate) current.lastDate = entry.date;
    sessionMap.set(name, current);
  }

  const sessionRows = Array.from(sessionMap.values())
    .map((row) => ({
      session: row.session,
      count: row.count,
      avgRating: round1(row.ratingSum / row.count),
      hours: round1(row.hours),
      lastDate: row.lastDate,
    }))
    .sort((a, b) => (a.lastDate < b.lastDate ? 1 : -1));

  // ── Assignments ──────────────────────────────────────────────────────────
  const submittedByAssignment = new Map<string, number>();
  for (const submission of submissions) {
    const key = String(submission.assignment);
    submittedByAssignment.set(key, (submittedByAssignment.get(key) ?? 0) + 1);
  }

  const assignmentRows = assignments.map((assignment) => {
    const expected = activeStudents.length;
    const submitted = submittedByAssignment.get(String(assignment._id)) ?? 0;
    return {
      id: String(assignment._id),
      title: assignment.title,
      givenAt: new Date(assignment.givenAt).toISOString(),
      dueDate: assignment.dueDate
        ? new Date(assignment.dueDate).toISOString()
        : null,
      submitted,
      expected,
      pending: Math.max(expected - submitted, 0),
      rate: expected > 0 ? Math.round((Math.min(submitted, expected) / expected) * 100) : 0,
    };
  });

  const pendingSubmissions = assignmentRows.reduce(
    (sum, row) => sum + row.pending,
    0
  );
  const openTodos = batchTodos.filter((todo) => !todo.done).length;

  const query = `?batchId=${id}`;
  const latestSessions = inRange.slice(0, 6);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/batches"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All batches
        </Link>
      </div>

      <PageHeader
        title={batch.name}
        description={
          batch.description
            ? `${batch.description} · reporting ${shortDate(from)} – ${shortDate(to)}`
            : `Batch dashboard · reporting ${shortDate(from)} – ${shortDate(to)}`
        }
      >
        <Link
          href={`/admin/activities${query}`}
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Full activity log
        </Link>
        <Link
          href={`/admin/students${query}`}
          className={buttonVariants({ size: "sm" })}
        >
          Manage students
        </Link>
      </PageHeader>

      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Students"
            value={activeStudents.length}
            icon={Users}
            hint={
              students.length > activeStudents.length
                ? `${students.length - activeStudents.length} deactivated`
                : "All accounts active"
            }
          />
          <StatCard
            label="Sessions logged"
            value={inRange.length}
            icon={BookOpenCheck}
            tone="accent"
            hint={`${range.length} days in this range`}
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
            value={hoursTotal ? round1(hoursTotal).toFixed(1) : "0"}
            icon={Clock}
            tone="success"
            hint="Sum of the hours students reported"
          />
          <StatCard
            label="Attendance"
            value={`${studentsLogging}${activeStudents.length ? ` / ${activeStudents.length}` : ""}`}
            icon={UserCheck}
            hint="Students who logged at least one session"
          />
          <StatCard
            label="Days without a log"
            value={missingDays}
            icon={CalendarCheck}
            tone={missingDays > 0 ? "star" : "success"}
            hint={
              studentsWithGaps > 0
                ? `${studentsWithGaps} student${studentsWithGaps === 1 ? "" : "s"} with gaps`
                : "Nobody has gaps"
            }
          />
          <StatCard
            label="Pending submissions"
            value={pendingSubmissions}
            icon={ClipboardList}
            tone={pendingSubmissions === 0 ? "success" : "default"}
            hint={`${assignmentRows.length} assignment${assignmentRows.length === 1 ? "" : "s"} in this batch`}
          />
          <StatCard
            label="To-dos open today"
            value={openTodos}
            icon={ListChecks}
            tone={openTodos === 0 ? "success" : "default"}
            hint={`${batchTodos.length} planned for ${shortDate(to)}`}
          />
        </div>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <Card className="h-full border-border/70">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">Sessions this batch covered</CardTitle>
              <Badge variant="accent">{sessionRows.length} sessions</Badge>
            </CardHeader>
            <CardContent>
              {sessionRows.length === 0 ? (
                <EmptyState
                  title="No sessions logged yet"
                  description="Session names appear here as soon as students log their day."
                />
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Session</TableHead>
                      <TableHead>Logged</TableHead>
                      <TableHead>Avg. feedback</TableHead>
                      <TableHead>Last</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sessionRows.slice(0, 8).map((row) => (
                      <TableRow key={row.session}>
                        <TableCell className="font-medium">{row.session}</TableCell>
                        <TableCell className="text-sm">{row.count}</TableCell>
                        <TableCell>
                          <span className="flex items-center gap-2">
                            <StarDisplay value={row.avgRating} />
                            <span className="text-xs text-muted-foreground">
                              {row.avgRating.toFixed(1)}
                            </span>
                          </span>
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {shortDate(row.lastDate)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full border-border/70">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">Student progress</CardTitle>
              <Link
                href={`/admin/activities${query}`}
                className="text-xs font-medium text-accent hover:underline"
              >
                Review logs
              </Link>
            </CardHeader>
            <CardContent>
              {studentRows.length === 0 ? (
                <EmptyState
                  icon={Users}
                  title="No active students"
                  description="Assign students to this batch to see their progress here."
                />
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Feedback</TableHead>
                      <TableHead>Hours</TableHead>
                      <TableHead>Last logged</TableHead>
                      <TableHead>Gaps</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {studentRows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <p className="font-medium">{row.name}</p>
                          <p className="text-xs text-muted-foreground">{row.email}</p>
                        </TableCell>
                        <TableCell className="text-sm">{row.daysLogged}</TableCell>
                        <TableCell>
                          <span className="flex items-center gap-2">
                            <StarDisplay value={row.avgRating} />
                            <span className="text-xs text-muted-foreground">
                              {row.avgRating ? row.avgRating.toFixed(1) : "—"}
                            </span>
                          </span>
                        </TableCell>
                        <TableCell className="text-sm">
                          {row.hours ? row.hours : "—"}
                        </TableCell>
                        <TableCell className="text-xs text-muted-foreground">
                          {row.lastLogged ? shortDate(row.lastLogged) : "—"}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={row.daysMissing > 3 ? "destructive" : "outline"}
                          >
                            {row.daysMissing}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal delay={0.15}>
          <Card className="h-full border-border/70">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">Latest sessions</CardTitle>
              <Link
                href={`/admin/activities${query}`}
                className="text-xs font-medium text-accent hover:underline"
              >
                View all
              </Link>
            </CardHeader>
            <CardContent>
              {latestSessions.length === 0 ? (
                <EmptyState
                  icon={BookOpenCheck}
                  title="Nothing logged yet"
                  description="The newest sessions in this batch will show up here."
                />
              ) : (
                <ul className="divide-y divide-border/60">
                  {latestSessions.map((entry) => (
                    <li
                      key={String(entry._id)}
                      className="flex flex-wrap items-start justify-between gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">
                            {entry.student?.name ?? "Student"}
                          </p>
                          {entry.session ? (
                            <Badge variant="outline">{entry.session}</Badge>
                          ) : null}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {shortDate(entry.date)} · {entry.topic}
                          {entry.hours !== null && entry.hours !== undefined
                            ? ` · ${entry.hours} h`
                            : ""}
                        </p>
                        {entry.notes ? (
                          <p className="mt-1 line-clamp-2 max-w-xl text-xs text-muted-foreground">
                            <span className="font-medium text-foreground/70">
                              Remark:
                            </span>{" "}
                            {entry.notes}
                          </p>
                        ) : null}
                      </div>
                      <StarDisplay value={entry.rating} className="shrink-0" />
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="h-full border-border/70">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">Assignments</CardTitle>
              <Link
                href={`/admin/assignments${query}`}
                className="text-xs font-medium text-accent hover:underline"
              >
                Manage
              </Link>
            </CardHeader>
            <CardContent>
              {assignmentRows.length === 0 ? (
                <EmptyState
                  icon={ClipboardList}
                  title="No assignments yet"
                  description="Give this batch an assignment and track submissions here."
                />
              ) : (
                <ul className="divide-y divide-border/60">
                  {assignmentRows.map((row) => (
                    <li
                      key={row.id}
                      className="flex flex-wrap items-center justify-between gap-2 py-3 first:pt-0 last:pb-0"
                    >
                      <div className="min-w-0">
                        <Link
                          href={`/admin/assignments/${row.id}`}
                          className="text-sm font-medium hover:text-accent"
                        >
                          {row.title}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          Given {formatDay(row.givenAt)}
                          {row.dueDate ? ` · due ${formatDay(row.dueDate)}` : ""}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                            <span
                              className="block h-full rounded-full bg-accent"
                              style={{ width: `${row.rate}%` }}
                            />
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {row.submitted} / {row.expected}
                          </span>
                        </span>
                        {row.pending > 0 ? (
                          <Badge variant="star">{row.pending} pending</Badge>
                        ) : (
                          <Badge variant="success">all done</Badge>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <Card className="border-border/70">
          <CardHeader className="space-y-1">
            <CardTitle className="text-base">Open in this batch</CardTitle>
            <p className="text-xs text-muted-foreground">
              The same views, already filtered to {batch.name}.
            </p>
          </CardHeader>
          <CardContent className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            <Link
              href={`/admin/students${query}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Users className="mr-2 h-4 w-4" />
              Students
            </Link>
            <Link
              href={`/admin/activities${query}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <BookOpenCheck className="mr-2 h-4 w-4" />
              Daily activity
            </Link>
            <Link
              href={`/admin/assignments${query}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <ClipboardList className="mr-2 h-4 w-4" />
              Assignments
            </Link>
            <Link
              href={`/admin/todos${query}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <ListChecks className="mr-2 h-4 w-4" />
              Daily to-dos
            </Link>
          </CardContent>
        </Card>
      </Reveal>

      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <CalendarClock className="h-3.5 w-3.5" />
        Reporting window {shortDate(from)} – {shortDate(to)} · sessions, feedback and
        hours come from the day-wise logs students submitted.
      </p>
    </div>
  );
}
