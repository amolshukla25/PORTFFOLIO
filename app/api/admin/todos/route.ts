import { z } from "zod";

import { fail, ok, parseBody, serverError, unauthorized } from "@/lib/api";
import { requireAdmin } from "@/lib/auth";
import { isValidDateKey, todayKey } from "@/lib/dates";
import { Todo, type ITodo } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const createSchema = z.object({
  title: z.string().trim().min(1, "A task title is required.").max(200),
  notes: z.string().trim().max(1000).optional(),
  date: z.string().optional(),
  /** Batch the task belongs to; omit or null for a general task. */
  batchId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid batch.")
    .nullish(),
});

interface SerializedTodo {
  _id: string;
  date: string;
  title: string;
  notes: string;
  done: boolean;
  batchId: string | null;
  createdAt: string;
}

function serializeTodo(todo: ITodo & { _id: unknown }): SerializedTodo {
  return {
    _id: String(todo._id),
    date: todo.date,
    title: todo.title,
    notes: todo.notes ?? "",
    done: Boolean(todo.done),
    batchId: todo.batch ? String(todo.batch) : null,
    createdAt: new Date(todo.createdAt).toISOString(),
  };
}

/**
 * GET /api/admin/todos?date=YYYY-MM-DD&batchId=<id>
 * Lists the signed-in admin's to-dos for a day (defaults to today).
 * Passing batchId narrows the list to that batch's tasks.
 */
export async function GET(req: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const requested = url.searchParams.get("date");
    const date =
      requested && isValidDateKey(requested) ? requested : todayKey();
    const batchId = url.searchParams.get("batchId");

    const filter: Record<string, unknown> = { owner: session.userId, date };
    if (batchId) filter.batch = batchId;

    const todos = await Todo.find(filter)
      .sort({ done: 1, createdAt: 1 })
      .lean();

    return ok({
      date,
      todos: todos.map((todo) =>
        serializeTodo(todo as ITodo & { _id: unknown })
      ),
    });
  } catch (error) {
    return serverError(error);
  }
}

/**
 * POST /api/admin/todos
 * Creates a to-do for the signed-in admin, optionally tagged to a batch.
 */
export async function POST(req: Request) {
  const session = await requireAdmin();
  if (!session) return unauthorized();

  const parsed = await parseBody(req, createSchema);
  if ("response" in parsed) return parsed.response;

  const { title, notes, date, batchId } = parsed.data;
  if (date && !isValidDateKey(date)) {
    return fail("Invalid date. Use YYYY-MM-DD.", 400);
  }

  try {
    await connectToDatabase();

    const todo = await Todo.create({
      owner: session.userId,
      batch: batchId ?? null,
      date: date ?? todayKey(),
      title,
      notes: notes ?? "",
      done: false,
    });

    return ok(
      { todo: serializeTodo(todo as unknown as ITodo & { _id: unknown }) },
      201
    );
  } catch (error) {
    return serverError(error);
  }
}
