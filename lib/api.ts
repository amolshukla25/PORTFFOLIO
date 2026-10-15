import { NextResponse } from "next/server";
import type { ZodType } from "zod";

/**
 * Small helpers shared by every API route so handlers stay short and
 * error shapes stay consistent: `{ error: string }` on failure.
 */

export function ok<T>(data: T, status = 200): NextResponse {
  return NextResponse.json(data as Record<string, unknown>, { status });
}

export function fail(error: string, status = 400): NextResponse {
  return NextResponse.json({ error }, { status });
}

export function unauthorized(): NextResponse {
  return fail("You must be signed in.", 401);
}

export function forbidden(): NextResponse {
  return fail("You do not have access to this resource.", 403);
}

export function notFound(what = "Resource"): NextResponse {
  return fail(`${what} not found.`, 404);
}

export function serverError(error: unknown): NextResponse {
  console.error("API error:", error);
  const message =
    error instanceof Error ? error.message : "Something went wrong.";
  return fail(message, 500);
}

/**
 * Validates a JSON request body against a zod schema.
 *
 * Usage:
 *   const parsed = await parseBody(req, mySchema);
 *   if ("response" in parsed) return parsed.response;
 *   const { name } = parsed.data;
 */
export async function parseBody<T>(
  req: Request,
  schema: ZodType<T>
): Promise<{ data: T } | { response: NextResponse }> {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return { response: fail("Request body must be valid JSON.") };
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    const where = issue?.path.join(".");
    return {
      response: fail(
        issue ? `${where ? `${where}: ` : ""}${issue.message}` : "Invalid input."
      ),
    };
  }

  return { data: parsed.data };
}
