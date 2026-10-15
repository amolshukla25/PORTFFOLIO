import { isValidObjectId } from "mongoose";
import { z } from "zod";

import { fail, notFound, ok, parseBody, serverError, unauthorized } from "@/lib/api";
import { requireAdmin } from "@/lib/auth";
import { Batch, User } from "@/lib/db/models";
import { fromDateKey, isValidDateKey } from "@/lib/dates";
import { connectToDatabase } from "@/lib/mongodb";

const updateSchema = z.object({
  name: z.string().trim().min(2, "Batch name must be at least 2 characters.").max(80).optional(),
  description: z.string().trim().max(500).nullable().optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  active: z.boolean().optional(),
});

/** Accepts "YYYY-MM-DD" (local day) or a full ISO timestamp. */
function parseDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  if (isValidDateKey(value)) return fromDateKey(value);
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  const { id } = await params;
  if (!isValidObjectId(id)) return notFound("Batch");

  const parsed = await parseBody(req, updateSchema);
  if ("response" in parsed) return parsed.response;

  try {
    await connectToDatabase();

    const batch = await Batch.findById(id);
    if (!batch) return notFound("Batch");

    const { name, description, startDate, endDate, active } = parsed.data;

    if (name !== undefined) {
      const trimmed = name.trim();
      const clash = await Batch.findOne({
        name: trimmed,
        _id: { $ne: batch._id },
      });
      if (clash) return fail("A batch with this name already exists.", 409);
      batch.name = trimmed;
    }

    if (description !== undefined) batch.description = description ?? "";
    if (startDate !== undefined) batch.startDate = parseDate(startDate);
    if (endDate !== undefined) batch.endDate = parseDate(endDate);
    if (active !== undefined) batch.active = active;

    await batch.save();

    const studentCount = await User.countDocuments({ batch: batch._id });

    return ok({
      batch: {
        _id: String(batch._id),
        name: batch.name,
        description: batch.description ?? "",
        startDate: batch.startDate
          ? new Date(batch.startDate).toISOString()
          : null,
        endDate: batch.endDate ? new Date(batch.endDate).toISOString() : null,
        active: batch.active,
        studentCount,
      },
    });
  } catch (error) {
    return serverError(error);
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  const { id } = await params;
  if (!isValidObjectId(id)) return notFound("Batch");

  try {
    await connectToDatabase();

    const batch = await Batch.findById(id);
    if (!batch) return notFound("Batch");

    const studentCount = await User.countDocuments({ batch: batch._id });
    if (studentCount > 0) {
      return fail(
        "This batch still has students. Move or remove them first.",
        409
      );
    }

    await Batch.deleteOne({ _id: batch._id });

    return ok({ ok: true });
  } catch (error) {
    return serverError(error);
  }
}
