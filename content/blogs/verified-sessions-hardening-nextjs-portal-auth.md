---
title: "From Stateless JWT to Verified Sessions: Hardening Portal Auth in Next.js 16"
date: "2026-10-27"
description: "When users say sign-in 'doesn't work', the credentials are often fine. Three real defects behind that complaint, and the session design that fixes them."
tags: ["Authentication", "Next.js", "Security", "JWT", "MongoDB"]
coverImage: "/blogs/covers/verified-sessions-hardening-nextjs-portal-auth.webp"
---

"Login is broken" is one of the least useful bug reports in software, and one of the most common. It can mean the password check fails, the cookie never sticks, the redirect loops, the session expires mid-task, or the account is simply not allowed in — and those five failures look identical from the outside.

This is the diagnostic path I took through the admin and student portal on this site, what the stripped-down test harness showed, and the two defects that were actually worth fixing.

## The architecture under test

The portal is deliberately small:

- **Passwords** are hashed with bcrypt (10 rounds) and never leave the database.
- **Sessions** are HS256 JWTs signed with an `AUTH_SECRET`, stored in an `httpOnly`, `SameSite=Lax` cookie that is `Secure` in production, with a seven-day lifetime.
- **Page guards** live in the route-group layout: `/admin` and `/student` are separate groups, each checking the session role before rendering.
- **API guards** are per-route (`requireAdmin()` / `requireStudent()`), returning 401 rather than rendering anything.

The credential check itself is about ten lines:

```ts
const valid = await verifyPassword(password, user.passwordHash);
if (!valid) return fail("Invalid email or password.", 401);
```

Nothing exotic. Which is exactly why the complaint was suspicious: the cryptography was unlikely to be the problem.

## Testing it like an attacker, not like a user

A browser cannot distinguish these states easily — a failed login looks the same whether the server rejected the password or never answered. `curl` can, because it shows you the status code and the `Set-Cookie` header.

Six checks were enough to localize the problem:

| Request | Result | Meaning |
| --- | --- | --- |
| `POST /api/auth/login` (correct password) | `200` + cookie | Credential check works |
| `POST /api/auth/login` (wrong password) | `401` | Rejection works |
| `POST /api/auth/login` (correct password, wrong portal) | `401` | Role separation works |
| `GET /admin` with cookie | `200` | Session is honored |
| `GET /admin` without cookie | `307` → `/admin/login` | Page guard works |
| `GET /api/admin/batches` without cookie | `401` | API guard works |

Every layer behaved. So the "broken" login was not broken at all — it was **rejecting people for a reason it refused to name.**

## Defect 1: the server knew why sign-in failed and said the wrong thing

New accounts register as students with `active: false` and no batch, waiting for a trainer to approve them. That is a deliberate workflow, and it was working exactly as designed.

The problem was the order of checks in the login handler:

```ts
const user = await User.findOne({ email });
if (!user || !user.active) {
  return fail("Invalid email or password.", 401);   // ← lies to pending students
}

const valid = await verifyPassword(password, user.passwordHash);
if (!valid || user.role !== role) {
  return fail("Invalid email or password.", 401);
}
```

A student who registered, waited, and typed the correct password got `Invalid email or password` — the one message guaranteed to make them try password resets and support requests. Every unapproved account was sitting in that state, all of them convinced their password was wrong.

The fix is to authenticate first and authorize second, then say what actually happened:

```ts
if (!user) return fail("Invalid email or password.", 401);

const valid = await verifyPassword(password, user.passwordHash);
if (!valid) return fail("Invalid email or password.", 401);

if (user.role !== role) return fail("Invalid email or password.", 401);

// Credentials are proven correct — safe to explain the block.
if (user.active === false) {
  return fail(
    user.role === "student"
      ? "Your account is waiting for trainer approval. Sign in once your trainer has assigned your batch and activated your account."
      : "This account has been disabled.",
    403
  );
}
```

The ordering is not cosmetic. Returning "pending approval" *before* verifying the password would turn the endpoint into an account-enumeration oracle: type any email, learn whether it exists. Verifying first and disclosing second gives a legitimate user a useful error and an attacker nothing but a 401.

`403` versus `401` matters too — "I know who you are, and you may not enter" is a different answer from "I don't know who you are", and it is the one a client UI should branch on.

## Defect 2: sessions outlived the account state they depended on

The JWT carried `userId`, `email`, `name`, `role` and `batchId`, and the guard trusted all of it for seven days. That is the appeal of stateless sessions — no database read — and it is also the hole.

Concretely, three things silently failed to take effect:

1. **Deactivating a student.** Their live cookie still said `role: student`, so the portal kept letting them in until the token expired.
2. **Resetting a password.** Changing the hash does not invalidate an already-issued token. The old session survived the reset that was supposed to end it.
3. **Deleting an account.** Requests with the stale token reached handlers holding a `userId` for a row that no longer existed.

The fix keeps JWTs but stops treating them as the final authority. Every request now re-checks the account row, and a `sessionVersion` counter is embedded in the token:

```ts
export async function getSession(): Promise<SessionUser | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const record = await verifySessionToken(token);
  if (!record) return null;

  const user = await User.findById(record.userId)
    .select("role active batch sessionVersion")
    .lean();

  if (!user || user.active === false) return null;
  if (user.role !== record.role) return null;
  if ((user.sessionVersion ?? 0) !== record.sessionVersion) return null;

  return { ...record, batchId: user.batch ? String(user.batch) : null };
}
```

Password resets and self-service changes bump `sessionVersion`, so every other device is logged out on its next request while the device that changed the password gets a fresh cookie re-issued. A trainer disabling an account takes effect immediately. The batch ID is now read from the row, so re-assigning a student does not wait for a token to expire.

The cost is one indexed lookup per authenticated request. For a portal serving dozens of users, that is invisible. At a scale where it is not, the standard answer is a short-lived access token plus a revocation check only on sensitive operations — a different design, not this one.

## What is still missing (and why I am saying so)

Three gaps remain, deliberately unclosed:

- **No login rate limiting.** A per-IP attempt counter would be trivial in memory, but on serverless each instance keeps its own — it would look like protection without being protection. This needs a shared store (Redis or the database) to be honest.
- **No CSRF tokens.** `SameSite=Lax` blocks cross-site `POST` cookies, which covers the realistic attack, but it is a browser default rather than an explicit defence-in-depth control.
- **No session-expiry UX.** When a session dies mid-task, the API returns 401 and a client component shows a toast. It should redirect to sign-in. That is a UI work item, not an auth design one.

Publishing the gaps matters more than hiding them behind a "secure" claim. Every one of these systems has a next step; saying which is the difference between documentation and marketing.

## The audit checklist that found all of this

1. Test with `curl`, not a browser — status codes and headers are the evidence.
2. Verify the legitimate path first. If it returns 200 and sets a cookie, your crypto is fine and the bug is in policy.
3. Check every *invalidation* path: disable, delete, password reset, role change. These are where stateless sessions leak.
4. Confirm the guard exists at both layers — page and API. A page redirect is UX; a 401 on the endpoint is security.
5. Confirm wrong-portal access is rejected, not merely discouraged.
6. Time-box the session, and know what the user sees when it ends.

## Frequently Asked Questions

### Do I need to check the database on every request with JWT sessions?

Only if account state can change while a token is valid — deactivation, deletion, password reset. If sessions are short-lived (minutes) and tokens are refreshed centrally, the revocation window is small enough to skip the read. With a seven-day cookie, trusting the token means a week of stale authority.

### Why return 403 instead of 401 for a pending account?

`401` means "not authenticated"; `403` means "authenticated but not allowed". A client can use that distinction to show a different screen, and it keeps the "invalid credentials" answer reserved for real credential failures.

### Is `SameSite=Lax` enough protection against CSRF?

For most applications it removes the practical risk, since cross-site form posts no longer carry the session cookie. It is still a single control; adding a per-session CSRF token on state-changing requests costs little and removes the dependence on browser behaviour.
