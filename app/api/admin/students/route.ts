import { z } from "zod";

import { fail, ok, parseBody, serverError } from "@/lib/api";
import { hashPassword } from "@/lib/auth";
import { Batch, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";
import mongoose from "mongoose";

const createStudentSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name is too long."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  batchId: z.string().min(1, "Please choose a batch."),
});

interface StudentRow {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  batchId: string | null;
  batchName: string | null;
  createdAt: string;
}

function toRow(
  student: {
    _id: unknown;
    name: string;
    email: string;
    active: boolean;
    batch: unknown;
    createdAt: Date;
  },
  batchNameById: Map<string, string>
): StudentRow {
  const batchId = student.batch ? String(student.batch) : null;
  return {
    _id: String(student._id),
    name: student.name,
    email: student.email,
    active: student.active,
    batchId,
    batchName: batchId ? batchNameById.get(batchId) ?? null : null,
    createdAt: student.createdAt.toISOString(),
  };
}

export async function GET() {
  try {
    await connectToDatabase();

    const filter: Record<string, unknown> = { role: "student" };

    const students = await User.find(filter).sort({ createdAt: -1 }).lean();

    const batchIds = Array.from(
      new Set(
        students
          .map((student) => student.batch)
          .filter((batch) => Boolean(batch))
          .map((batch) => String(batch))
      )
    );
    const batches = batchIds.length
      ? await Batch.find({ _id: { $in: batchIds } })
          .select("name")
          .lean()
      : [];
    const batchNameById = new Map(
      batches.map((batch) => [String(batch._id), batch.name])
    );

    return ok({ students: students.map((student) => toRow(student, batchNameById)) });
  } catch (error) {
    return serverError(error);
  }
}

export async function POST(req: Request) {
  const parsed = await parseBody(req, createStudentSchema);
  if ("response" in parsed) return parsed.response;

  const email = parsed.data.email.toLowerCase().trim();

  try {
    await connectToDatabase();

    const existing = await User.findOne({ email }).select("_id").lean();
    if (existing) {
      return fail("A user with this email already exists.", 409);
    }

    if (!mongoose.isValidObjectId(parsed.data.batchId)) {
      return fail("Please choose a valid batch.", 400);
    }

    const batch = await Batch.findById(parsed.data.batchId).select("name").lean();
    if (!batch) return fail("Please choose a valid batch.", 400);

    const student = await User.create({
      name: parsed.data.name.trim(),
      email,
      passwordHash: await hashPassword(parsed.data.password),
      role: "student",
      batch: new mongoose.Types.ObjectId(parsed.data.batchId),
      active: true,
    });

    return ok(
      {
        student: toRow(
          student,
          new Map([[String(batch._id), batch.name]])
        ),
      },
      201
    );
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      (error as { code?: number }).code === 11000
    ) {
      return fail("A user with this email already exists.", 409);
    }
    return serverError(error);
  }
}
