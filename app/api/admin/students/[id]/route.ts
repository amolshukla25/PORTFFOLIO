import mongoose from "mongoose";
import { z } from "zod";

import { fail, notFound, ok, parseBody, serverError, unauthorized } from "@/lib/api";
import { hashPassword, requireAdmin } from "@/lib/auth";
import { Activity, Batch, Submission, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const updateStudentSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long.")
    .optional(),
  batchId: z.string().nullable().optional(),
  active: z.boolean().optional(),
  password: z.string().optional(),
});

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: Request, context: RouteContext) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  const { id } = await context.params;

  const parsed = await parseBody(req, updateStudentSchema);
  if ("response" in parsed) return parsed.response;

  const { name, batchId, active, password } = parsed.data;

  try {
    await connectToDatabase();

    if (!mongoose.isValidObjectId(id)) return notFound("Student");

    const student = await User.findOne({ _id: id, role: "student" });
    if (!student) return notFound("Student");

    if (name !== undefined) student.name = name.trim();
    if (active !== undefined) student.active = active;

    if (batchId !== undefined) {
      if (batchId === null || batchId === "") {
        student.batch = null;
      } else {
        if (!mongoose.isValidObjectId(batchId)) {
          return fail("Please choose a valid batch.", 400);
        }
        const batch = await Batch.findById(batchId).select("name").lean();
        if (!batch) return fail("Please choose a valid batch.", 400);
        student.batch = new mongoose.Types.ObjectId(batchId);
      }
    }

    if (password !== undefined && password !== "") {
      if (password.length < 6) {
        return fail("Password must be at least 6 characters.", 400);
      }
      student.passwordHash = await hashPassword(password);
    }

    await student.save();

    let batchName: string | null = null;
    if (student.batch) {
      const batch = await Batch.findById(student.batch).select("name").lean();
      batchName = batch?.name ?? null;
    }

    return ok({
      student: {
        _id: String(student._id),
        name: student.name,
        email: student.email,
        active: student.active,
        batchId: student.batch ? String(student.batch) : null,
        batchName,
        createdAt: student.createdAt.toISOString(),
      },
    });
  } catch (error) {
    return serverError(error);
  }
}

export async function DELETE(_req: Request, context: RouteContext) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  const { id } = await context.params;

  try {
    await connectToDatabase();

    if (!mongoose.isValidObjectId(id)) return notFound("Student");

    const student = await User.findOneAndDelete({ _id: id, role: "student" });
    if (!student) return notFound("Student");

    // Remove the student's own data so no orphans are left behind.
    await Promise.all([
      Activity.deleteMany({ student: student._id }),
      Submission.deleteMany({ student: student._id }),
    ]);

    return ok({ ok: true });
  } catch (error) {
    return serverError(error);
  }
}
