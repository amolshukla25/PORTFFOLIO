import { ok } from "@/lib/api";
import { clearSessionCookie } from "@/lib/auth";

export async function POST() {
  // Authentication removed: logout is now a no-op.
  await clearSessionCookie();
  return ok({ ok: true });
}
