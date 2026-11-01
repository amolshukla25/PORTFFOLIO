import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

import { User } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

/**
 * Session helpers for the admin/student portal.
 *
 * Sessions are stateless JWTs signed with AUTH_SECRET and stored in an
 * httpOnly cookie. Passwords are hashed with bcrypt.
 *
 * The JWT alone is never trusted: `getSession()` re-checks the account row on
 * every request (exists, still active, same role, same session version) so
 * disabling a student, deleting them, or resetting their password ends their
 * existing sessions immediately instead of up to seven days later.
 */

export const SESSION_COOKIE = "portfolio_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days
const BCRYPT_ROUNDS = 10;

export type UserRole = "admin" | "student";

export interface SessionUser {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  batchId: string | null;
}

/** Signed-in user plus the internal session-version counter from the token. */
export interface SessionRecord extends SessionUser {
  sessionVersion: number;
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

export async function createSessionToken(
  user: SessionUser,
  sessionVersion = 0
): Promise<string> {
  return new SignJWT({
    userId: user.userId,
    email: user.email,
    name: user.name,
    role: user.role,
    batchId: user.batchId,
    sv: sessionVersion,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE_SECONDS}s`)
    .sign(getSecret());
}

export async function verifySessionToken(
  token: string
): Promise<SessionRecord | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: ["HS256"],
    });
    if (
      typeof payload.userId !== "string" ||
      !/^[0-9a-fA-F]{24}$/.test(payload.userId) ||
      (payload.role !== "admin" && payload.role !== "student")
    ) return null;
    return {
      userId: String(payload.userId),
      email: String(payload.email ?? ""),
      name: String(payload.name ?? ""),
      role: payload.role === "admin" ? "admin" : "student",
      batchId: payload.batchId ? String(payload.batchId) : null,
      sessionVersion: typeof payload.sv === "number" ? payload.sv : 0,
    };
  } catch {
    return null;
  }
}

export async function setSessionCookie(
  user: SessionUser,
  sessionVersion = 0
): Promise<void> {
  const token = await createSessionToken(user, sessionVersion);
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

/**
 * Returns the signed-in user, or null when the session is missing, invalid,
 * or no longer backed by an active account.
 */
export async function getSession(): Promise<SessionUser | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const record = await verifySessionToken(token);
  if (!record) return null;

  try {
    await connectToDatabase();
  } catch {
    return null;
  }

  const user = await User.findById(record.userId)
    .select("role active batch sessionVersion")
    .lean();

  if (!user || user.active === false) return null;
  if (user.role !== record.role) return null;
  if ((user.sessionVersion ?? 0) !== record.sessionVersion) return null;

  // Read the batch from the account row so a trainer re-assigning a student
  // takes effect without waiting for the token to expire.
  return {
    userId: String(user._id),
    email: record.email,
    name: record.name,
    role: user.role,
    batchId: user.batch ? String(user.batch) : null,
  };
}

/** For API routes: returns the admin session or null (caller returns 401). */
export async function requireAdmin(): Promise<SessionUser | null> {
  const session = await getSession();
  return session?.role === "admin" ? session : null;
}

/** For API routes: returns the student session or null (caller returns 401). */
export async function requireStudent(): Promise<SessionUser | null> {
  const session = await getSession();
  return session?.role === "student" ? session : null;
}
