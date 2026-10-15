import { z } from "zod";

import { ok, parseBody, serverError, unauthorized } from "@/lib/api";
import { requireStudent } from "@/lib/auth";
import { isValidDateKey, todayKey } from "@/lib/dates";
import { Activity } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const activitySchema = z.object({
  topic: z.string().trim().min(2, "Tell us what you studied."),
  notes: z.string().trim().max(2000, "Keep notes under 2000 characters.").optional(),
  hours: z.number().min(0).max(24).nullable().optional(),
  rating: z.number().int().min(1).max(5),
  date: z
    .string()
    .refine(isValidDateKey, "Date must be in YYYY-MM-DD format.")
    .optional(),
});

/** GET /api/student/activity?days=30 — the signed-in student's own log. */
export async function GET(req: Request) {
  const session = await requireStudent();
  if (!session) return unauthorized();

  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const requested = Number(url.searchParams.get("days") ?? 30);
    const days = Number.isFinite(requested)
      ? Math.min(Math.max(Math.trunc(requested), 1), 365)
      : 30;

    const all = await Activity.find({ student: session.userId })
      .sort({ date: -1, createdAt: -1 })
      .lean();

    const today = todayKey();
    const todaysEntry = all.find((entry) => entry.date === today) ?? null;

    const totalRatings = all.reduce((sum, entry) => sum + entry.rating, 0);
    const totalHours = all.reduce((sum, entry) => sum + (entry.hours ?? 0), 0);

    return ok({
      today: todaysEntry,
      history: all.slice(0, days),
      stats: {
        daysLogged: all.length,
        avgRating: all.length
          ? Number((totalRatings / all.length).toFixed(2))
          : null,
        totalHours: Number(totalHours.toFixed(1)),
      },
    });
  } catch (error) {
    return serverError(error);
  }
}

/**
 * POST /api/student/activity — create or update one day's entry.
 *
 * The (student, date) index is unique, so this upserts: logging twice on the
 * same day edits that day's row instead of failing on a duplicate key.
 */
export async function POST(req: Request) {
  const session = await requireStudent();
  if (!session) return unauthorized();

  const parsed = await parseBody(req, activitySchema);
  if ("response" in parsed) return parsed.response;

  try {
    await connectToDatabase();

    const date = parsed.data.date ?? todayKey();

    const write = () =>
      Activity.findOneAndUpdate(
        { student: session.userId, date },
        {
          $set: {
            topic: parsed.data.topic,
            notes: parsed.data.notes ?? "",
            hours: parsed.data.hours ?? null,
            rating: parsed.data.rating,
            batch: session.batchId ?? null,
          },
          $setOnInsert: { student: session.userId, date },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      ).lean();

    let activity;
    try {
      activity = await write();
    } catch (error) {
      // Two saves in the same instant can race on the unique (student, date)
      // index — the row now exists, so a plain update succeeds.
      const duplicateKey =
        typeof error === "object" &&
        error !== null &&
        (error as { code?: number }).code === 11000;
      if (!duplicateKey) throw error;
      activity = await write();
    }

    return ok({ activity }, 201);
  } catch (error) {
    return serverError(error);
  }
}
