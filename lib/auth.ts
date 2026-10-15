import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const IS_AUTH_DISABLED_SERVER = process.env.AUTH_ENABLED !== "true";
const IS_AUTH_DISABLED_CLIENT =
  typeof window !== "undefined" && process.env.NEXT_PUBLIC_AUTH_ENABLED !== "true";

/**
 * Session helpers for the admin/student portal.
 *
 * Sessions are stateless JWTs signed with AUTH_SECRET and stored in an
 * httpOnly cookie. Passwords are hashed with bcrypt.
 */

export const SESSION_COOKIE = "portfolio_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days
const BCRYPT_ROUNDS = 10;

export type UserRole = "admin" | "student";

/**
 * When auth is disabled, the portal is publicly viewable. In that mode
 * `getSession()` returns a placeholder session based on the URL route rather
 * than validating a real cookie, and the API accepts requests from anyone.
 *
 * Toggle this behavior by setting both of these in your environment:
 *
 *   AUTH_ENABLED=true
 *   NEXT_PUBLIC_AUTH_ENABLED=true
 *
 * With them set to true, real sessions are required and the login pages work
 * normally. Leave them unset or set to something other than "true" to disable
 * authentication for viewing the build.
 */
function isAuthDisabledRemote(): boolean {
  if (typeof window === "undefined") {
    return IS_AUTH_DISABLED_SERVER;
  }
  // Client-side read: during static generation we are not on the window, so
  // fall back to the server-side default.
  return IS_AUTH_DISABLED_CLIENT;
}

export function isAuthDisabled() {
  return isAuthDisabledRemote();
}

export interface SessionUser {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  batchId: string | null;
}

function getSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error(
      "Missing AUTH_SECRET environment variable. Add it to your .env file."
    );
  }
  return new TextEncoder().encode(secret);
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export function verifyPassword(
  password: string,
  passwordHash: string
): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}

export async function createSessionToken(user: SessionUser): Promise<string> {
  return new SignJWT({
    userId: user.userId,
    email: user.email,
    name: user.name,
    role: user.role,
    batchId: user.batchId,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SECONDS}s`)
    .sign(getSecret());
}

export async function verifySessionToken(
  token: string
): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (!payload.userId || !payload.role) return null;
    return {
      userId: String(payload.userId),
      email: String(payload.email ?? ""),
      name: String(payload.name ?? ""),
      role: payload.role === "admin" ? "admin" : "student",
      batchId: payload.batchId ? String(payload.batchId) : null,
    };
  } catch {
    return null;
  }
}

export async function setSessionCookie(user: SessionUser): Promise<void> {
  const token = await createSessionToken(user);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

/** Returns the signed-in user, or null when the session is missing/invalid. */
export async function getSession(): Promise<SessionUser | null> {
  if (isAuthDisabled()) {
    return placeholderSession();
  }

  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

/**
 * In disabled mode, `getSession()` returns a deterministic placeholder for the
 * route being viewed, so the portals stay usable without a real sign-in.
 */
function placeholderSession(): SessionUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const adminPath = "/admin";
  const studentPath = "/student";

  if (pathname.startsWith(adminPath)) {
    return {
      userId: "demo-admin",
      email: "admin@demo.local",
      name: "Amol Shukla",
      role: "admin",
      batchId: null,
    };
  }

  if (pathname.startsWith(studentPath)) {
    return {
      userId: "demo-student",
      email: "student@demo.local",
      name: "Demo Student",
      role: "student",
      batchId: null,
    };
  }

  return null;
}

/** For API routes: returns the admin session or null (caller returns 401). */
export async function requireAdmin(): Promise<SessionUser | null> {
  if (isAuthDisabled()) {
    return placeholderSession();
  }

  const session = await getSession();
  return session?.role === "admin" ? session : null;
}

/** For API routes: returns the student session or null (caller returns 401). */
export async function requireStudent(): Promise<SessionUser | null> {
  if (isAuthDisabled()) {
    return placeholderSession();
  }

  const session = await getSession();
  return session?.role === "student" ? session : null;
}

export function serverIsAuthDisabled(): boolean {
  return IS_AUTH_DISABLED_SERVER;
}
