import { ok, serverError } from "@/lib/api";
import { getSession } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * GET /api/student/assignments
 *
 * Assignments for the public guest session. Because the public build uses a
 * guest session with no batch, this always returns an empty list.
 */
export async function GET() {
  const session = getSession();

  try {
    await connectToDatabase();

    return ok({ assignments: [] });
  } catch (error) {
    return serverError(error);
  }
}
