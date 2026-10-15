import { ok } from "@/lib/api";
import { getSession } from "@/lib/auth";

export async function POST() {
  return ok({ user: getSession() });
}
