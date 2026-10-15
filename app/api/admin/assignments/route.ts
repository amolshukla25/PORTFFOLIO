import { z } from "zod";

import { fail, ok, parseBody, serverError, unauthorized } from "@/lib/api";
import { requireAdmin } from "@/lib/auth";
import { isValidDateKey } from "@/lib/dates";
import { Assignment, Batch, Submission, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const OBJECT_ID_PATTERN = /^[0-9a-fA-F]{24}$/;

/** Accepts either a full ISO datetime or a plain YYYY-MM-DD day. */
function parseDateInput(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (isValidDateKey(trimmed)) {
    const day = new Date(`${trimmed}T00:00:00`);
    return Number.isNaN(day.getTime()) ? null : day;
  }
  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

const createSchema = z.object({
  batchId: z.string().min(1, "Batch is required."),
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().max(4000).optional(),
  givenAt: z.string().min(1, "Given date is required."),
  dueDate: z.string().optional().nullable(),
});

/** GET /api/admin/assignments — every assignment with submission counts. */
export async function GET() {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  try {
    await connectToDatabase();

    const [assignments, submissionCounts, studentsPerBatch, batches] =
      await Promise.all([
        Assignment.find().sort({ givenAt: -1 }).lean(),
        Submission.aggregate<{ _id: unknown; count: number }>([
          { $group: { _id: "$assignment", count: { $sum: 1 } } },
        ]),
        User.aggregate<{ _id: unknown; count: number }>([
          { $match: { role: "student", active: true, batch: { $ne: null } } },
          { $group: { _id: "$batch", count: { $sum: 1 } } },
        ]),
        Batch.find().select("name").lean(),
      ]);

    const batchNameById = new Map(
      batches.map((batch) => [String(batch._id), batch.name])
    );
    const submittedByAssignment = new Map(
      submissionCounts.map((row) => [String(row._id), row.count])
    );
    const studentsByBatch = new Map(
      studentsPerBatch.map((row) => [String(row._id), row.count])
    );

    return ok({
      assignments: assignments.map((assignment) => {
        const batchId = String(assignment.batch);
        const expectedCount = studentsByBatch.get(batchId) ?? 0;
        const submittedCount =
          submittedByAssignment.get(String(assignment._id)) ?? 0;

        return {
          _id: String(assignment._id),
          title: assignment.title,
          description: assignment.description,
          givenAt: assignment.givenAt,
          dueDate: assignment.dueDate,
          batchId,
          batchName: batchNameById.get(batchId) ?? "—",
          submittedCount,
          expectedCount,
          pendingCount: Math.max(expectedCount - submittedCount, 0),
        };
      }),
    });
  } catch (error) {
    return serverError(error);
  }
}

/** POST /api/admin/assignments — record a new assignment for a batch. */
export async function POST(req: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  const parsed = await parseBody(req, createSchema);
  if ("response" in parsed) return parsed.response;

  const { batchId, title, description, givenAt, dueDate } = parsed.data;

  if (!OBJECT_ID_PATTERN.test(batchId)) {
    return fail("Please choose a valid batch.");
  }

  try {
    await connectToDatabase();

    const batch = await Batch.findById(batchId).lean();
    if (!batch) return fail("That batch no longer exists.", 404);

    const given = parseDateInput(givenAt);
    if (!given) return fail("Given date is not a valid date.");

    const due = dueDate ? parseDateInput(dueDate) : null;
    if (dueDate && dueDate.trim() && !due) {
      return fail("Due date is not a valid date.");
    }

    const assignment = await Assignment.create({
      batch: batch._id,
      title: title.trim(),
      description: description?.trim() ?? "",
      givenAt: given,
      dueDate: due,
      createdBy: session.userId,
    });

    return ok(
      {
        assignment: {
          _id: String(assignment._id),
          title: assignment.title,
          description: assignment.description,
          givenAt: assignment.givenAt,
          dueDate: assignment.dueDate,
          batchId,
          batchName: batch.name,
        },
      },
      201
    );
  } catch (error) {
    return serverError(error);
  }
}
