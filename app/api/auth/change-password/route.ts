import { z } from "zod";

import { fail, ok, parseBody, serverError, unauthorized } from "@/lib/api";
import {
  getSession,
  hashPassword,
  setSessionCookie,
  verifyPassword,
} from "@/lib/auth";
import { User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const schema = z.object({
  currentPassword: z.string().min(1, "Current password is required."),
  newPassword: z.string().min(6, "New password must be at least 6 characters."),
});

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return unauthorized();

  const parsed = await parseBody(req, schema);
  if ("response" in parsed) return parsed.response;

  try {
    await connectToDatabase();

    const user = await User.findById(session.userId);
    if (!user) return fail("Account not found.", 404);

    const valid = await verifyPassword(
      parsed.data.currentPassword,
      user.passwordHash
    );
    if (!valid) return fail("Current password is incorrect.", 400);

    user.passwordHash = await hashPassword(parsed.data.newPassword);
    // Invalidate every other signed-in device, then re-issue this session so
    // the person who changed the password stays signed in.
    user.sessionVersion = (user.sessionVersion ?? 0) + 1;
    await user.save();

    await setSessionCookie(session, user.sessionVersion);

    return ok({ ok: true });
  } catch (error) {
    return serverError(error);
  }
}
