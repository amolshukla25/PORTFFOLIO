import { z } from "zod";

import { fail, ok, parseBody, serverError } from "@/lib/api";
import { Batch, User } from "@/lib/db/models";
import { fromDateKey, isValidDateKey } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";

const batchInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Batch name must be at least 2 characters.")
    .max(80, "Batch name must be 80 characters or fewer."),
  description: z
    .string()
    .trim()
    .max(500, "Description must be 500 characters or fewer.")
    .optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
});

/** Accepts "YYYY-MM-DD" (local day) or a full ISO timestamp. */
function parseDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  if (isValidDateKey(value)) return fromDateKey(value);
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

interface BatchLike {
  _id: unknown;
  name: string;
  description?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  active?: boolean;
}

function serializeBatch(batch: BatchLike, studentCount?: number) {
  return {
    _id: String(batch._id),
    name: batch.name,
    description: batch.description ?? "",
    startDate: batch.startDate ? new Date(batch.startDate).toISOString() : null,
    endDate: batch.endDate ? new Date(batch.endDate).toISOString() : null,
    active: batch.active ?? true,
    ...(studentCount === undefined ? {} : { studentCount }),
  };
}

export async function GET() {
  try {
    await connectToDatabase();

    const [batches, counts] = await Promise.all([
      Batch.find().sort({ createdAt: -1 }).lean(),
      User.aggregate<{ _id: unknown; count: number }>([
        { $match: { role: "student", batch: { $ne: null } } },
        { $group: { _id: "$batch", count: { $sum: 1 } } },
      ]),
    ]);

    const countByBatch = new Map<string, number>(
      counts.map((row) => [String(row._id), row.count] as const)
    );

    return ok({
      batches: batches.map((batch) =>
        serializeBatch(batch, countByBatch.get(String(batch._id)) ?? 0)
      ),
    });
  } catch (error) {
    return serverError(error);
  }
}

export async function POST(req: Request) {
  const parsed = await parseBody(req, batchInputSchema);
  if ("response" in parsed) return parsed.response;

  const { description, startDate, endDate } = parsed.data;
  const name = parsed.data.name.trim();

  try {
    await connectToDatabase();

    const existing = await Batch.findOne({ name });
    if (existing) {
      return fail("A batch with this name already exists.", 409);
    }

    const batch = await Batch.create({
      name,
      description: description ?? "",
      startDate: parseDate(startDate),
      endDate: parseDate(endDate),
      active: true,
    });

    return ok({ batch: serializeBatch(batch, 0) }, 201);
  } catch (error) {
    return serverError(error);
  }
}
