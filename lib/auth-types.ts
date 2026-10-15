export interface SessionUser {
  userId: string;
  email: string;
  name: string;
  role: "admin" | "student";
  batchId: string | null;
}
