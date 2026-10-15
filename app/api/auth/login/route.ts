import { z } from "zod";

import { fail, ok, parseBody, serverError } from "@/lib/api";
import { setSessionCookie, type SessionUser } from "@/lib/auth";
import { User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const loginSchema = z.object({
  email: z.string().min(3, "Email is required."),
  password: z.string().min(1, "Password is required."),
});

export async function POST(req: Request) {
  const parsed = await parseBody(req, loginSchema);
  if ("response" in parsed) return parsed.response;

  const email = parsed.data.email.toLowerCase().trim();
  const { password } = parsed.data;

  try {
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user || !user.active) {
      return fail("Invalid email or password.", 401);
    }

    const { verifyPassword } = await import("@/lib/auth");
    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return fail("Invalid email or password.", 401);
    }

    const session: SessionUser = {
      userId: String(user._id),
      email: user.email,
      name: user.name,
      role: user.role,
      batchId: user.batch ? String(user.batch) : null,
    };

    await setSessionCookie(session);
    return ok({ user: session });
  } catch (error) {
    return serverError(error);
  }
}
