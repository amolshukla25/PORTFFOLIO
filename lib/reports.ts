import { Activity, Assignment, Batch, Submission, User } from "@/lib/db/models";
import { formatDay, fromDateKey, rangeForPeriod, type PeriodKind } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * Weekly / monthly activity reports.
 *
 * `buildReport` is shared by the reports page (server-rendered preview) and the
 * download route (JSON + CSV), so the numbers on screen always match the file.
 */

export interface ReportStudent {
  name: string;
  email: string;
  batchName: string;
  daysLogged: number;
  avgRating: number;
  totalHours: number;
  lastLoggedAt: string | null;
  topics: string[];
}

export interface ReportAssignment {
  title: string;
  batchName: string;
  givenAt: string;
  dueDate: string | null;
  submittedCount: number;
  expectedCount: number;
  pendingCount: number;
  submitRate: number;
}

export interface ActivityReport {
  range: { from: string; to: string; label: string };
  period: PeriodKind;
  summary: {
    students: number;
    daysLogged: number;
    totalLogs: number;
    avgRating: number;
    totalHours: number;
    assignments: number;
    submissions: number;
    pendingSubmissions: number;
  };
  students: ReportStudent[];
  assignments: ReportAssignment[];
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

export async function buildReport(
  period: PeriodKind,
  anchor: Date
): Promise<ActivityReport> {
  await connectToDatabase();

  const range = rangeForPeriod(period, anchor);

  const rangeStart = fromDateKey(range.from);
  const rangeEnd = fromDateKey(range.to);
  rangeEnd.setHours(23, 59, 59, 999);

  const [roster, logs, batches, assignments] = await Promise.all([
    User.find({ role: "student", active: true })
      .select("name email batch")
      .sort({ name: 1 })
      .lean(),
    Activity.find({ date: { $gte: range.from, $lte: range.to } })
      .select("student date topic hours rating")
      .lean(),
    Batch.find().select("name").lean(),
    Assignment.find({ givenAt: { $gte: rangeStart, $lte: rangeEnd } })
      .select("batch title givenAt dueDate")
      .sort({ givenAt: -1 })
      .lean(),
  ]);

  const submissions = assignments.length
    ? await Submission.find({
        assignment: { $in: assignments.map((assignment) => assignment._id) },
      })
        .select("assignment student")
        .lean()
    : [];

  const batchNameById = new Map(
    batches.map((batch) => [String(batch._id), batch.name])
  );

  const studentCountByBatch = new Map<string, number>();
  for (const student of roster) {
    if (!student.batch) continue;
    const key = String(student.batch);
    studentCountByBatch.set(key, (studentCountByBatch.get(key) ?? 0) + 1);
  }

  const logsByStudent = new Map<
    string,
    { date: string; topic: string; hours: number | null; rating: number }[]
  >();
  for (const log of logs) {
    const key = String(log.student);
    const entry = {
      date: log.date,
      topic: log.topic,
      hours: log.hours ?? null,
      rating: log.rating,
    };
    const existing = logsByStudent.get(key);
    if (existing) existing.push(entry);
    else logsByStudent.set(key, [entry]);
  }

  const students: ReportStudent[] = roster.map((student) => {
    const entries = logsByStudent.get(String(student._id)) ?? [];
    const rated = entries.map((entry) => entry.rating);
    const hours = entries.reduce((total, entry) => total + (entry.hours ?? 0), 0);
    const dayKeys = entries.map((entry) => entry.date).sort();
    const lastLoggedAt = dayKeys.length ? dayKeys[dayKeys.length - 1] : null;

    return {
      name: student.name,
      email: student.email,
      batchName: student.batch
        ? batchNameById.get(String(student.batch)) ?? "Unassigned"
        : "Unassigned",
      daysLogged: entries.length,
      avgRating: rated.length
        ? round1(rated.reduce((total, value) => total + value, 0) / rated.length)
        : 0,
      totalHours: round1(hours),
      lastLoggedAt,
      topics: Array.from(new Set(entries.map((entry) => entry.topic))).slice(0, 8),
    };
  });

  const submissionsByAssignment = new Map<string, number>();
  for (const submission of submissions) {
    const key = String(submission.assignment);
    submissionsByAssignment.set(
      key,
      (submissionsByAssignment.get(key) ?? 0) + 1
    );
  }

  const assignmentRows: ReportAssignment[] = assignments.map((assignment) => {
    const expectedCount = studentCountByBatch.get(String(assignment.batch)) ?? 0;
    const submittedCount = submissionsByAssignment.get(String(assignment._id)) ?? 0;
    const pendingCount = Math.max(expectedCount - submittedCount, 0);

    return {
      title: assignment.title,
      batchName: batchNameById.get(String(assignment.batch)) ?? "Batch",
      givenAt: assignment.givenAt.toISOString(),
      dueDate: assignment.dueDate ? assignment.dueDate.toISOString() : null,
      submittedCount,
      expectedCount,
      pendingCount,
      submitRate:
        expectedCount > 0
          ? Math.round((Math.min(submittedCount, expectedCount) / expectedCount) * 100)
          : 0,
    };
  });

  const ratings = logs.map((log) => log.rating);
  const totalHours = logs.reduce((total, log) => total + (log.hours ?? 0), 0);

  return {
    range: { from: range.from, to: range.to, label: range.label },
    period,
    summary: {
      students: roster.length,
      daysLogged: logs.length,
      totalLogs: logs.length,
      avgRating: ratings.length
        ? round1(ratings.reduce((total, value) => total + value, 0) / ratings.length)
        : 0,
      totalHours: round1(totalHours),
      assignments: assignmentRows.length,
      submissions: submissions.length,
      pendingSubmissions: assignmentRows.reduce(
        (total, row) => total + row.pendingCount,
        0
      ),
    },
    students,
    assignments: assignmentRows,
  };
}

function csvCell(value: string | number | null | undefined): string {
  const text = value === null || value === undefined ? "" : String(value);
  const needsQuotes =
    text.includes(String.fromCharCode(44)) ||
    text.includes(String.fromCharCode(34)) ||
    text.includes(String.fromCharCode(10)) ||
    text.includes(String.fromCharCode(13));

  if (!needsQuotes) return text;

  const quote = String.fromCharCode(34);
  return quote + text.split(quote).join(quote + quote) + quote;
}

function csvRow(values: (string | number | null | undefined)[]): string {
  return values.map(csvCell).join(",");
}

/** RFC4180 CSV of a report: summary, then student rows, then assignment rows. */
export function reportToCsv(report: ActivityReport): string {
  const rows: string[] = [];

  rows.push(csvRow(["Metric", "Value"]));
  rows.push(csvRow(["Report", report.range.label]));
  rows.push(csvRow(["Period", report.period]));
  rows.push(csvRow(["From", report.range.from]));
  rows.push(csvRow(["To", report.range.to]));
  rows.push(csvRow(["Students", report.summary.students]));
  rows.push(csvRow(["Days logged", report.summary.daysLogged]));
  rows.push(csvRow(["Total logs", report.summary.totalLogs]));
  rows.push(csvRow(["Average rating", report.summary.avgRating]));
  rows.push(csvRow(["Total hours", report.summary.totalHours]));
  rows.push(csvRow(["Assignments", report.summary.assignments]));
  rows.push(csvRow(["Submissions", report.summary.submissions]));
  rows.push(csvRow(["Pending submissions", report.summary.pendingSubmissions]));

  rows.push("");
  rows.push(csvRow(["Student activity"]));
  rows.push(
    csvRow([
      "Name",
      "Email",
      "Batch",
      "Days logged",
      "Average rating",
      "Total hours",
      "Last logged",
      "Topics",
    ])
  );
  if (report.students.length === 0) {
    rows.push(csvRow(["No active students"]));
  } else {
    for (const student of report.students) {
      rows.push(
        csvRow([
          student.name,
          student.email,
          student.batchName,
          student.daysLogged,
          student.avgRating,
          student.totalHours,
          student.lastLoggedAt ? formatDay(student.lastLoggedAt) : "",
          student.topics.join("; "),
        ])
      );
    }
  }

  rows.push("");
  rows.push(csvRow(["Assignments"]));
  rows.push(
    csvRow([
      "Title",
      "Batch",
      "Given",
      "Due",
      "Submitted",
      "Expected",
      "Pending",
      "Submit rate %",
    ])
  );
  if (report.assignments.length === 0) {
    rows.push(csvRow(["No assignments in this range"]));
  } else {
    for (const assignment of report.assignments) {
      rows.push(
        csvRow([
          assignment.title,
          assignment.batchName,
          formatDay(assignment.givenAt),
          assignment.dueDate ? formatDay(assignment.dueDate) : "",
          assignment.submittedCount,
          assignment.expectedCount,
          assignment.pendingCount,
          assignment.submitRate,
        ])
      );
    }
  }

  return rows.join("\r\n");
}
