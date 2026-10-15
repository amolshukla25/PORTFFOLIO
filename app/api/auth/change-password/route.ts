import { ok, fail } from "@/lib/api";
import { getSession, hashPassword } from "@/lib/auth";
import { User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(req: Request) {
  const session = getSession();

  let newPassword = "";
  try {
    const body = (await req.json()) as { newPassword?: unknown };
    if (typeof body.newPassword !== "string" || body.newPassword.length < 6) {
      return fail("New password must be at least 6 characters.", 400);
    }
    newPassword = body.newPassword;
  } catch {
    return fail("Invalid request.", 400);
  }

  try {
    await connectToDatabase();

    const user = await User.findById(session.userId);
    if (!user) return fail("Account not found.", 404);

    user.passwordHash = await hashPassword(newPassword);
    await user.save();

    return ok({ ok: true });
  } catch (error) {
    return fail(String(error), 500);
  }
}
