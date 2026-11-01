import { z } from "zod";

import { ok, parseBody, serverError, unauthorized } from "@/lib/api";
import { requireStudent } from "@/lib/auth";
import { User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * Course progress for signed-in students, so it follows them across devices.
 * Guests keep the same shape in localStorage (key mysql-progress-v1); the
 * client merges the two on first sign-in. Merging is a union, so a stale
 * device can never erase progress made elsewhere.
 */

const ids = z.array(z.string().max(80)).max(2000);
const progressSchema = z.object({
  course: z.enum(["mysql"]),
  progress: z.object({
    completedLessons: ids,
    solved: ids,
    tried: ids,
    hints: ids,
    answers: ids,
    lastLesson: z.string().max(120).nullable(),
    updatedAt: z.number().nonnegative(),
  }),
});

type Progress = z.infer<typeof progressSchema>["progress"];

const union = (a: string[] = [], b: string[] = []) => Array.from(new Set([...a, ...b]));

export async function GET(req: Request) {
  const session = await requireStudent();
  if (!session) return unauthorized();
  const course = new URL(req.url).searchParams.get("course") ?? "mysql";
  try {
    await connectToDatabase();
    const user = await User.findById(session.userId, { courseProgress: 1 }).lean();
    const stored = (user?.courseProgress as Record<string, Progress> | undefined)?.[course] ?? null;
    return ok({ progress: stored });
  } catch (error) {
    return serverError(error);
  }
}

export async function PUT(req: Request) {
  const session = await requireStudent();
  if (!session) return unauthorized();
  const parsed = await parseBody(req, progressSchema);
  if ("response" in parsed) return parsed.response;
  const { course, progress } = parsed.data;
  try {
    await connectToDatabase();
    const user = await User.findById(session.userId, { courseProgress: 1 }).lean();
    const prev = (user?.courseProgress as Record<string, Progress> | undefined)?.[course];
    const merged: Progress = prev
      ? {
          completedLessons: union(prev.completedLessons, progress.completedLessons),
          solved: union(prev.solved, progress.solved),
          tried: union(prev.tried, progress.tried),
          hints: union(prev.hints, progress.hints),
          answers: union(prev.answers, progress.answers),
          lastLesson: progress.updatedAt >= prev.updatedAt ? progress.lastLesson : prev.lastLesson,
          updatedAt: Math.max(prev.updatedAt, progress.updatedAt),
        }
      : progress;
    await User.updateOne({ _id: session.userId }, { $set: { [`courseProgress.${course}`]: merged } });
    return ok({ progress: merged });
  } catch (error) {
    return serverError(error);
  }
}
