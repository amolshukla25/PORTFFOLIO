import { z } from "zod";

import {
  fail,
  forbidden,
  notFound,
  ok,
  parseBody,
  serverError,
  unauthorized,
} from "@/lib/api";
import { requireStudent } from "@/lib/auth";
import { Assignment, Submission } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const OBJECT_ID_PATTERN = /^[0-9a-fA-F]{24}$/;

const submitSchema = z.object({
  note: z.string().max(2000).optional(),
  link: z.string().max(500).optional(),
});

/**
 * POST /api/student/assignments/[id] — submit (or re-submit) an assignment.
 *
 * The Submission schema has a unique index on (assignment, student), so this
 * upserts instead of inserting to keep resubmissions working.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireStudent();
  if (!session) return unauthorized();

  const parsed = await parseBody(req, submitSchema);
  if ("response" in parsed) return parsed.response;

  const { id } = await params;
  if (!OBJECT_ID_PATTERN.test(id)) return notFound("Assignment");

  try {
    await connectToDatabase();

    if (!session.batchId) return forbidden();

    const assignment = await Assignment.findById(id).lean();
    if (!assignment) return notFound("Assignment");

    if (String(assignment.batch) !== session.batchId) return forbidden();

    const submission = await Submission.findOneAndUpdate(
      { assignment: assignment._id, student: session.userId },
      {
        $set: {
          submittedAt: new Date(),
          note: parsed.data.note?.trim() ?? "",
          link: parsed.data.link?.trim() ?? "",
        },
        $setOnInsert: {
          assignment: assignment._id,
          student: session.userId,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).lean();

    if (!submission) return fail("Could not save your submission.", 500);

    return ok({
      submission: {
        _id: String(submission._id),
        submittedAt: submission.submittedAt,
        note: submission.note,
        link: submission.link,
      },
    });
  } catch (error) {
    return serverError(error);
  }
}
