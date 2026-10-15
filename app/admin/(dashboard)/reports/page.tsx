import {
  CalendarRange,
  Clock,
  FileBarChart,
  ListChecks,
  Star,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ReportExport } from "@/components/admin/report-export";
import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StarDisplay } from "@/components/common/star-rating";
import { StatCard } from "@/components/common/stat-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatDay,
  fromDateKey,
  isValidDateKey,
  shortDate,
  todayKey,
  type PeriodKind,
} from "@/lib/dates";
import { buildReport } from "@/lib/reports";

export const metadata: Metadata = {
  title: "Reports",
  robots: { index: false, follow: false },
};

interface ReportsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ReportsPage({ searchParams }: ReportsPageProps) {
  const params = await searchParams;

  const period: PeriodKind =
    firstValue(params.period) === "monthly" ? "monthly" : "weekly";

  const requestedDate = firstValue(params.date);
  const date =
    requestedDate && isValidDateKey(requestedDate) ? requestedDate : todayKey();

  const report = await buildReport(period, fromDateKey(date));

  const hasStudents = report.students.length > 0;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description={`${report.range.label} · ${shortDate(
          report.range.from
        )} to ${shortDate(report.range.to)}`}
      >
        <ReportExport report={report} period={period} date={date} />
      </PageHeader>

      <Card className="border-border/60">
        <CardContent className="flex flex-wrap items-end justify-between gap-4 p-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Period
            </p>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/reports?period=weekly&date=${date}`}
                className={buttonVariants({
                  variant: period === "weekly" ? "default" : "outline",
                  size: "sm",
                })}
              >
                Weekly report
              </Link>
              <Link
                href={`/admin/reports?period=monthly&date=${date}`}
                className={buttonVariants({
                  variant: period === "monthly" ? "default" : "outline",
                  size: "sm",
                })}
              >
                Monthly report
              </Link>
            </div>
          </div>

          <form
            method="get"
            action="/admin/reports"
            className="flex flex-wrap items-end gap-3"
          >
            <input type="hidden" name="period" value={period} />
            <div className="space-y-1.5">
              <Label htmlFor="date" className="text-xs">
                Pick any date in the range
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                defaultValue={date}
                className="h-9 w-44"
              />
            </div>
            <button type="submit" className={buttonVariants({ variant: "outline", size: "sm" })}>
              <CalendarRange className="mr-2 h-4 w-4" />
              Load range
            </button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Active students"
          value={report.summary.students}
          icon={Users}
          hint={`${hasStudents ? report.students.filter((student) => student.daysLogged > 0).length : 0} logged at least once`}
        />
        <StatCard
          label="Activity entries"
          value={report.summary.daysLogged}
          icon={FileBarChart}
          tone="accent"
          hint={report.range.label}
        />
        <StatCard
          label="Average feedback"
          value={report.summary.avgRating ? report.summary.avgRating.toFixed(1) : "—"}
          icon={Star}
          tone="star"
          hint="1 = poor session, 5 = excellent"
        />
        <StatCard
          label="Pending submissions"
          value={report.summary.pendingSubmissions}
          icon={ListChecks}
          tone={report.summary.pendingSubmissions === 0 ? "success" : "default"}
          hint={`${report.summary.submissions} submitted of ${report.summary.assignments} assignment${report.summary.assignments === 1 ? "" : "s"}`}
        />
      </div>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Student activity</CardTitle>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {report.summary.totalHours} hours logged
          </span>
        </CardHeader>
        <CardContent>
          {!hasStudents ? (
            <EmptyState
              icon={Users}
              title="No active students yet"
              description="Create a batch and add students to see their weekly and monthly reports here."
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Days logged</TableHead>
                  <TableHead>Sessions attended</TableHead>
                  <TableHead>Average feedback</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Last logged</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.students.map((student) => (
                  <TableRow key={student.email}>
                    <TableCell>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.email}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="accent">{student.batchName}</Badge>
                    </TableCell>
                    <TableCell>
                      {student.daysLogged === 0 ? (
                        <Badge variant="destructive">No logs</Badge>
                      ) : (
                        student.daysLogged
                      )}
                    </TableCell>
                    <TableCell className="max-w-64">
                      {student.sessions.length === 0 ? (
                        <span className="text-xs text-muted-foreground">—</span>
                      ) : (
                        <p className="text-xs text-muted-foreground">
                          {student.sessions.slice(0, 3).join(" · ")}
                          {student.sessions.length > 3
                            ? ` +${student.sessions.length - 3} more`
                            : ""}
                        </p>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        <StarDisplay value={student.avgRating} />
                        <span className="text-xs text-muted-foreground">
                          {student.avgRating ? student.avgRating.toFixed(1) : "—"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell>{student.totalHours || "—"}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {student.lastLoggedAt ? formatDay(student.lastLoggedAt) : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader className="space-y-1">
          <CardTitle className="text-base">Assignments given</CardTitle>
          <p className="text-xs text-muted-foreground">
            Assignments handed out in this range, with how many students have
            submitted.
          </p>
        </CardHeader>
        <CardContent>
          {report.assignments.length === 0 ? (
            <EmptyState
              icon={ListChecks}
              title="No assignments in this range"
              description="Assignments you give inside this period will be tracked here."
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Given</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Submit rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.assignments.map((assignment) => (
                  <TableRow key={`${assignment.title}-${assignment.givenAt}`}>
                    <TableCell className="font-medium">
                      {assignment.title}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{assignment.batchName}</Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {formatDay(assignment.givenAt)}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {assignment.dueDate ? formatDay(assignment.dueDate) : "—"}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {assignment.submittedCount} / {assignment.expectedCount}
                      </span>
                      {assignment.pendingCount > 0 ? (
                        <Badge variant="star" className="ml-2">
                          {assignment.pendingCount} pending
                        </Badge>
                      ) : (
                        <Badge variant="success" className="ml-2">
                          all done
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                          <span
                            className="block h-full rounded-full bg-accent"
                            style={{ width: `${assignment.submitRate}%` }}
                          />
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {assignment.submitRate}%
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground">
        Weekly reports run Monday to Sunday, monthly reports cover the calendar
        month. Downloads use the same numbers you see above.
      </p>
    </div>
  );
}
