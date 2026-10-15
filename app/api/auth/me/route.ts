import { ok, serverError } from "@/lib/api";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getSession();
    return ok({ user });
  } catch (error) {
    return serverError(error);
  }
}
