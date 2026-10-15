import { ArrowLeft, CheckCircle2, ClipboardList, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AssignmentDeleteButton } from "@/components/admin/assignment-manager";
import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/portal/portal-page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Assignment, Batch, Submission, User } from "@/lib/db/models";
import { formatDateTime, formatDay } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";
import { cn } from "@/lib/utils";

const OBJECT_ID_PATTERN = /^[0-9a-fA-F]{24}$/;

export const metadata: Metadata = {
  title: "Assignment detail",
  robots: { index: false, follow: false },
};

export default async function AdminAssignmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!OBJECT_ID_PATTERN.test(id)) notFound();

  await connectToDatabase();

  const assignment = await Assignment.findById(id).lean();
  if (!assignment) notFound();

  const [batch, students, submissions] = await Promise.all([
    Batch.findById(assignment.batch).select("name").lean(),
    User.find({ role: "student", active: true, batch: assignment.batch })
      .sort({ name: 1 })
      .select("name email")
      .lean(),
    Submission.find({ assignment: assignment._id }).lean(),
  ]);

  const submissionByStudent = new Map(
    submissions.map((submission) => [String(submission.student), submission])
  );

  const roster = students.map((student) => {
    const submission = submissionByStudent.get(String(student._id));
    const dueDate = assignment.dueDate ?? null;

    return {
      id: String(student._id),
      name: student.name,
      email: student.email,
      submitted: Boolean(submission),
      submittedAt: submission?.submittedAt ?? null,
      note: submission?.note ?? "",
      link: submission?.link ?? "",
      late: Boolean(
        submission &&
          dueDate &&
          submission.submittedAt.getTime() > dueDate.getTime()
      ),
    };
  });

  const submittedCount = roster.filter((student) => student.submitted).length;
  const pendingCount = roster.length - submittedCount;
  const percent =
    roster.length > 0 ? Math.round((submittedCount / roster.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <PageHeader
        title={assignment.title}
        description={`Given to ${batch?.name ?? "—"} on ${formatDay(
          assignment.givenAt
        )}`}
      >
        <Link
          href="/admin/assignments"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
          All assignments
        </Link>
        <AssignmentDeleteButton
          assignmentId={String(assignment._id)}
          assignmentTitle={assignment.title}
          redirectTo="/admin/assignments"
        />
      </PageHeader>

      <Card className="border-border/60">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {assignment.description ? (
            <p className="text-sm text-muted-foreground">
              {assignment.description}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="text-muted-foreground">
              Given on{" "}
              <span className="font-medium text-foreground">
                {formatDay(assignment.givenAt)}
              </span>
            </span>
            <span className="text-muted-foreground">
              Due{" "}
              <span className="font-medium text-foreground">
                {assignment.dueDate ? formatDay(assignment.dueDate) : "—"}
              </span>
            </span>
            <Badge variant="outline">{batch?.name ?? "—"}</Badge>
            {pendingCount === 0 && roster.length > 0 ? (
              <Badge variant="success">
                <CheckCircle2 className="h-3 w-3" />
                All {roster.length} submitted
              </Badge>
            ) : (
              <Badge variant="star">
                <Clock className="h-3 w-3" />
                {pendingCount} pending
              </Badge>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  percent === 100 ? "bg-success" : "bg-accent"
                )}
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {submittedCount} of {roster.length} students submitted ({percent}%)
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Submissions</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-2">
          {roster.length === 0 ? (
            <div className="px-6 pb-4">
              <EmptyState
                icon={ClipboardList}
                title="No students in this batch"
                description="Add students to the batch to start tracking submissions."
              />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted at</TableHead>
                  <TableHead>Note / link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roster.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.email}
                      </p>
                    </TableCell>
                    <TableCell>
                      {!student.submitted ? (
                        <Badge variant="outline">
                          <Clock className="h-3 w-3" />
                          Pending
                        </Badge>
                      ) : student.late ? (
                        <Badge variant="destructive">Late</Badge>
                      ) : (
                        <Badge variant="success">
                          <CheckCircle2 className="h-3 w-3" />
                          Submitted
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                      {student.submittedAt
                        ? formatDateTime(student.submittedAt)
                        : "—"}
                    </TableCell>
                    <TableCell className="max-w-[18rem]">
                      {student.note ? (
                        <p className="truncate text-sm text-muted-foreground">
                          {student.note}
                        </p>
                      ) : null}
                      {student.link ? (
                        <a
                          href={student.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block truncate text-xs font-medium text-accent hover:underline"
                        >
                          {student.link}
                        </a>
                      ) : null}
                      {!student.note && !student.link ? (
                        <span className="text-xs text-muted-foreground">—</span>
                      ) : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
