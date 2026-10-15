import { z } from "zod";

import { fail, ok, parseBody, serverError } from "@/lib/api";
import { hashPassword } from "@/lib/auth";
import { User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const registrationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  password: z.string().min(8, "Use at least 8 characters.").max(72, "Use at most 72 characters.")
    .refine((value) => new TextEncoder().encode(value).length <= 72, "Password must be at most 72 bytes."),
});

export async function POST(req: Request) {
  const parsed = await parseBody(req, registrationSchema);
  if ("response" in parsed) return parsed.response;

  const email = parsed.data.email.toLowerCase();

  try {
    await connectToDatabase();
    const existing = await User.findOne({ email }).select("_id").lean();
    if (existing) return fail("An account with this email already exists. Sign in or contact your trainer.", 409);

    await User.create({
      name: parsed.data.name,
      email,
      passwordHash: await hashPassword(parsed.data.password),
      role: "student",
      active: false,
      batch: null,
    });

    return ok({ message: "Registration received. Your trainer must assign a batch and activate your account before you can sign in." }, 201);
  } catch (error) {
    if (typeof error === "object" && error !== null && (error as { code?: number }).code === 11000) {
      return fail("An account with this email already exists. Sign in or contact your trainer.", 409);
    }
    return serverError(error);
  }
}
