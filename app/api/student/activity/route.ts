import { ok, serverError } from "@/lib/api";
import { getSession } from "@/lib/auth";
import { isValidDateKey, todayKey } from "@/lib/dates";
import { Activity } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

/** GET /api/student/activity?days=30 — the public guest session's own log. */
export async function GET(req: Request) {
  const session = getSession();

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
 * POST /api/student/activity — disabled in this public build.
 *
 * Activity posting required a real student session, so it is intentionally
 * non-functional now.
 */
export async function POST() {
  return ok({
    error: "Activity posting is disabled in this build.",
  });
}
