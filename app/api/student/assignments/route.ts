import { ok, serverError, unauthorized } from "@/lib/api";
import { requireStudent } from "@/lib/auth";
import { Assignment, Submission } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * GET /api/student/assignments
 *
 * Assignments for the signed-in student's own batch, each with their own
 * submission status. A student without a batch simply sees an empty list.
 */
export async function GET() {
  const session = await requireStudent();
  if (!session) return unauthorized();

  try {
    await connectToDatabase();

    if (!session.batchId) {
      return ok({ assignments: [] });
    }

    const assignments = await Assignment.find({ batch: session.batchId })
      .sort({ givenAt: -1 })
      .lean();

    if (assignments.length === 0) {
      return ok({ assignments: [] });
    }

    const submissions = await Submission.find({
      student: session.userId,
      assignment: { $in: assignments.map((assignment) => assignment._id) },
    }).lean();

    const submissionByAssignment = new Map(
      submissions.map((submission) => [
        String(submission.assignment),
        submission,
      ])
    );

    return ok({
      assignments: assignments.map((assignment) => {
        const submission = submissionByAssignment.get(String(assignment._id));

        return {
          _id: String(assignment._id),
          title: assignment.title,
          description: assignment.description,
          givenAt: assignment.givenAt,
          dueDate: assignment.dueDate,
          submitted: Boolean(submission),
          submittedAt: submission?.submittedAt ?? null,
          note: submission?.note ?? "",
          link: submission?.link ?? "",
        };
      }),
    });
  } catch (error) {
    return serverError(error);
  }
}
