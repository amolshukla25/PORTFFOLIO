import { notFound, ok, serverError } from "@/lib/api";
import { Assignment, Batch, Submission, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const OBJECT_ID_PATTERN = /^[0-9a-fA-F]{24}$/;

/**
 * GET /api/admin/assignments/[id]
 *
 * Returns the assignment plus the submission status of every active student
 * in its batch — the roster is the source of truth for "pending".
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!OBJECT_ID_PATTERN.test(id)) return notFound("Assignment");

  try {
    await connectToDatabase();

    const assignment = await Assignment.findById(id).lean();
    if (!assignment) return notFound("Assignment");

    const [batch, students, submissions] = await Promise.all([
      Batch.findById(assignment.batch).select("name").lean(),
      User.find({ role: "student", active: true, batch: assignment.batch })
        .sort({ name: 1 })
        .select("name email")
        .lean(),
      Submission.find({ assignment: assignment._id }).lean(),
    ]);

    const submissionByStudent = new Map(
      submissions.map((submission) => [
        String(submission.student),
        submission,
      ])
    );

    return ok({
      assignment: {
        _id: String(assignment._id),
        title: assignment.title,
        description: assignment.description,
        givenAt: assignment.givenAt,
        dueDate: assignment.dueDate,
        batchId: String(assignment.batch),
        batchName: batch?.name ?? "—",
      },
      students: students.map((student) => {
        const submission = submissionByStudent.get(String(student._id));
        const dueDate = assignment.dueDate ?? null;

        return {
          _id: String(student._id),
          name: student.name,
          email: student.email,
          submitted: Boolean(submission),
          submittedAt: submission?.submittedAt ?? null,
          note: submission?.note ?? "",
          link: submission?.link ?? "",
          late: Boolean(
            submission && dueDate && submission.submittedAt.getTime() > dueDate.getTime()
          ),
        };
      }),
    });
  } catch (error) {
    return serverError(error);
  }
}

/** DELETE /api/admin/assignments/[id] — removes the assignment and its submissions. */
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!OBJECT_ID_PATTERN.test(id)) return notFound("Assignment");

  try {
    await connectToDatabase();

    const assignment = await Assignment.findByIdAndDelete(id).lean();
    if (!assignment) return notFound("Assignment");

    await Submission.deleteMany({ assignment: assignment._id });

    return ok({ ok: true });
  } catch (error) {
    return serverError(error);
  }
}
