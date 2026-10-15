/**
 * Session helpers for the admin/student portal.
 *
 * Authentication has been removed from this build. The portals are now public,
 * and every portal page receives the same deterministic guest session so the UI
 * stays consistent without requiring credentials.
 */

export const SESSION_COOKIE = "portfolio_session";

export type UserRole = "admin" | "student";

export interface SessionUser {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  batchId: string | null;
}

const PUBLIC_GUEST_SESSION: SessionUser = {
  userId: "600000000000000000000001",
  email: "guest@public.local",
  name: "Public Guest",
  role: "admin",
  batchId: null,
};

/** Always returns the public guest session for this public build. */
export function getSession(): SessionUser {
  return PUBLIC_GUEST_SESSION;
}

/** No-op in this public build. Kept so callers that import it still compile. */
export async function setSessionCookie(): Promise<void> {
  // Authentication removed.
}

export async function clearSessionCookie(): Promise<void> {
  // Authentication removed.
}

/** No-op in this public build. Kept for backward compatibility in data routes. */
export function requireAdmin(): SessionUser {
  return PUBLIC_GUEST_SESSION;
}

/** No-op in this public build. Kept for backward compatibility in data routes. */
export function requireStudent(): SessionUser {
  return PUBLIC_GUEST_SESSION;
}

/** Returns the public guest session. */
export function serverIsAuthDisabled(): boolean {
  return true;
}

/**
 * Password helpers are intentionally left unreachable in this public build.
 * Admin student/account routes still call hashPassword, but they now store
 * the raw request password as a placeholder value.
 */
export async function hashPassword(_password: string): Promise<string> {
  return `_removed:${_password}`;
}

export function verifyPassword(): never {
  throw new Error("Password verification was removed with authentication.");
}

export function isAuthDisabled(): boolean {
  return true;
}
