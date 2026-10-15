import { z } from "zod";

import { fail, notFound, ok, parseBody, serverError } from "@/lib/api";
import { getSession } from "@/lib/auth";
import { Assignment, Submission } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const OBJECT_ID_PATTERN = /^[0-9a-fA-F]{24}$/;

const submitSchema = z.object({
  note: z.string().max(2000).optional(),
  link: z.string().max(500).optional(),
});

/**
 * POST /api/student/assignments/[id] — disabled in this public build.
 *
 * Assignment submission required a real student session and a real batch, so
 * it is intentionally non-functional now.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const parsed = await parseBody(req, submitSchema);
  if ("response" in parsed) return parsed.response;

  const { id } = await params;
  if (!OBJECT_ID_PATTERN.test(id)) return notFound("Assignment");

  try {
    await connectToDatabase();

    const assignment = await Assignment.findById(id).lean();
    if (!assignment) return notFound("Assignment");

    return ok({
      error: "Assignment submission is disabled in this build.",
    });
  } catch (error) {
    return serverError(error);
  }
}
