import { ok, serverError } from "@/lib/api";
import {
  eachDayKey,
  isValidDateKey,
  toDateKey,
  todayKey,
} from "@/lib/dates";
import { Activity, User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

interface PopulatedActivity {
  _id: unknown;
  date: string;
  topic: string;
  notes: string;
  hours: number | null;
  rating: number;
  student: { _id: unknown; name: string; email: string } | null;
  batch: { _id: unknown; name: string } | null;
}

interface PopulatedStudent {
  _id: unknown;
  name: string;
  email: string;
  batch: { _id: unknown; name: string } | null;
}

function dayKeyAfter(fromKey: string, daysBack: number): string {
  const [year, month, day] = fromKey.split("-").map(Number);
  const date = new Date(year, (month ?? 1) - 1, (day ?? 1) - daysBack);
  return toDateKey(date);
}

/** GET /api/admin/activities — every student's daily log in a date range. */
export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const rawTo = url.searchParams.get("to");
    const rawFrom = url.searchParams.get("from");
    const batchId = url.searchParams.get("batchId");
    const studentId = url.searchParams.get("studentId");

    const to = rawTo && isValidDateKey(rawTo) ? rawTo : todayKey();
    const from =
      rawFrom && isValidDateKey(rawFrom) ? rawFrom : dayKeyAfter(to, 29);

    const activityFilter: Record<string, unknown> = {
      date: { $gte: from, $lte: to },
    };
    if (batchId) activityFilter.batch = batchId;
    if (studentId) activityFilter.student = studentId;

    const rows = (await Activity.find(activityFilter)
      .sort({ date: -1, createdAt: -1 })
      .populate("student", "name email")
      .populate("batch", "name")
      .lean()) as unknown as PopulatedActivity[];

    const studentFilter: Record<string, unknown> = {
      role: "student",
      active: true,
    };
    if (batchId) studentFilter.batch = batchId;
    if (studentId) studentFilter._id = studentId;

    const students = (await User.find(studentFilter)
      .select("name email batch")
      .populate("batch", "name")
      .lean()) as unknown as PopulatedStudent[];

    const activities = rows.map((row) => ({
      _id: String(row._id),
      date: row.date,
      topic: row.topic,
      notes: row.notes ?? "",
      hours: row.hours ?? null,
      rating: row.rating,
      studentName: row.student?.name ?? "Deleted student",
      studentEmail: row.student?.email ?? "",
      batchName: row.batch?.name ?? "No batch",
    }));

    const loggedByStudent = new Map<string, Set<string>>();
    for (const row of rows) {
      if (!row.student) continue;
      const key = String(row.student._id);
      const days = loggedByStudent.get(key) ?? new Set<string>();
      days.add(row.date);
      loggedByStudent.set(key, days);
    }

    const range = eachDayKey(from, to);
    const missing = students
      .map((student) => {
        const logged = loggedByStudent.get(String(student._id));
        const daysMissing = range.reduce(
          (count, day) => count + (logged?.has(day) ? 0 : 1),
          0
        );
        return {
          _id: String(student._id),
          name: student.name,
          email: student.email,
          batchName: student.batch?.name ?? "No batch",
          daysMissing,
        };
      })
      .filter((student) => student.daysMissing > 0)
      .sort((a, b) => b.daysMissing - a.daysMissing);

    const totalRatings = activities.reduce((sum, row) => sum + row.rating, 0);
    const totalHours = activities.reduce(
      (sum, row) => sum + (row.hours ?? 0),
      0
    );

    return ok({
      range: { from, to },
      activities,
      summary: {
        count: activities.length,
        avgRating: activities.length
          ? Number((totalRatings / activities.length).toFixed(2))
          : null,
        totalHours: Number(totalHours.toFixed(1)),
        uniqueStudents: loggedByStudent.size,
      },
      missing,
    });
  } catch (error) {
    return serverError(error);
  }
}
