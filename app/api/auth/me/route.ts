import { ok } from "@/lib/api";
import { getSession } from "@/lib/auth";

export async function GET() {
  return ok({ user: getSession() });
}
