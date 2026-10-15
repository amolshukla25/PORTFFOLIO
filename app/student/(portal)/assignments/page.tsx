import type { Metadata } from "next";

import { PageHeader } from "@/components/portal/portal-page-header";
import {
  AssignmentList,
  type StudentAssignmentRow,
} from "@/components/student/assignment-list";
import { getSession } from "@/lib/auth";
import { Assignment, Submission } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "My assignments",
  robots: { index: false, follow: false },
};

export default async function StudentAssignmentsPage() {
  const session = await getSession();
  await connectToDatabase();

  let rows: StudentAssignmentRow[] = [];

  if (session?.batchId) {
    const assignments = await Assignment.find({ batch: session.batchId })
      .sort({ givenAt: -1 })
      .lean();

    const submissions =
      assignments.length > 0
        ? await Submission.find({
            student: session.userId,
            assignment: { $in: assignments.map((assignment) => assignment._id) },
          }).lean()
        : [];

    const submissionByAssignment = new Map(
      submissions.map((submission) => [
        String(submission.assignment),
        submission,
      ])
    );

    rows = assignments.map((assignment) => {
      const submission = submissionByAssignment.get(String(assignment._id));

      return {
        id: String(assignment._id),
        title: assignment.title,
        description: assignment.description,
        givenAt: assignment.givenAt.toISOString(),
        dueDate: assignment.dueDate ? assignment.dueDate.toISOString() : null,
        submitted: Boolean(submission),
        submittedAt: submission?.submittedAt
          ? submission.submittedAt.toISOString()
          : null,
        note: submission?.note ?? "",
        link: submission?.link ?? "",
      };
    });
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="My assignments"
        description="Everything your trainer has given your batch, including what is still pending."
      />
      <AssignmentList assignments={rows} />
    </div>
  );
}
