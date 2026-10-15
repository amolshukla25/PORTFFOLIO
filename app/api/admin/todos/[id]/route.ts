import mongoose from "mongoose";
import { z } from "zod";

import { fail, notFound, ok, parseBody, serverError } from "@/lib/api";
import { getSession } from "@/lib/auth";
import { Todo, type ITodo } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

const updateSchema = z.object({
  done: z.boolean().optional(),
  title: z.string().trim().min(1, "A task title is required.").max(200).optional(),
  notes: z.string().trim().max(1000).optional(),
});

interface RouteContext {
  params: Promise<{ id: string }>;
}

interface SerializedTodo {
  _id: string;
  date: string;
  title: string;
  notes: string;
  done: boolean;
  createdAt: string;
}

function serializeTodo(todo: ITodo & { _id: unknown }): SerializedTodo {
  return {
    _id: String(todo._id),
    date: todo.date,
    title: todo.title,
    notes: todo.notes ?? "",
    done: Boolean(todo.done),
    createdAt: new Date(todo.createdAt).toISOString(),
  };
}

/** PATCH /api/admin/todos/[id] — update a to-do for the public guest session. */
export async function PATCH(req: Request, { params }: RouteContext) {
  const parsed = await parseBody(req, updateSchema);
  if ("response" in parsed) return parsed.response;

  const update: Partial<Pick<ITodo, "done" | "title" | "notes">> = {};
  if (parsed.data.done !== undefined) update.done = parsed.data.done;
  if (parsed.data.title !== undefined) update.title = parsed.data.title;
  if (parsed.data.notes !== undefined) update.notes = parsed.data.notes;

  if (Object.keys(update).length === 0) {
    return fail("Nothing to update.", 400);
  }

  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) return notFound("To-do");

  try {
    await connectToDatabase();

    const session = getSession();

    const todo = await Todo.findOneAndUpdate(
      { _id: id, owner: session.userId },
      { $set: update },
      { new: true }
    ).lean();

    if (!todo) return notFound("To-do");

    return ok({
      todo: serializeTodo(todo as unknown as ITodo & { _id: unknown }),
    });
  } catch (error) {
    return serverError(error);
  }
}

/** DELETE /api/admin/todos/[id] — remove a to-do for the public guest session. */
export async function DELETE(_req: Request, { params }: RouteContext) {
  const { id } = await params;
  if (!mongoose.Types.ObjectId.isValid(id)) return notFound("To-do");

  try {
    await connectToDatabase();

    const session = getSession();

    const deleted = await Todo.findOneAndDelete({
      _id: id,
      owner: session.userId,
    });

    if (!deleted) return notFound("To-do");

    return ok({ ok: true });
  } catch (error) {
    return serverError(error);
  }
}
