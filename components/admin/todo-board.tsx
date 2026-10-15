"use client";

import { Check, Loader2, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { ConfirmDialog } from "@/components/common/confirm-dialog";
import { EmptyState } from "@/components/common/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export interface TodoItem {
  _id: string;
  date: string;
  title: string;
  notes: string;
  done: boolean;
  createdAt: string;
}

interface TodoBoardProps {
  date: string;
  initialTodos: TodoItem[];
}

function sortTodos(todos: TodoItem[]): TodoItem[] {
  return [...todos].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return a.createdAt.localeCompare(b.createdAt);
  });
}

export function TodoBoard({ date, initialTodos }: TodoBoardProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [todos, setTodos] = React.useState<TodoItem[]>(
    sortTodos(initialTodos)
  );
  const [title, setTitle] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [adding, setAdding] = React.useState(false);
  const [busyId, setBusyId] = React.useState<string | null>(null);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    setTodos(sortTodos(initialTodos));
  }, [initialTodos]);

  const doneCount = todos.filter((todo) => todo.done).length;
  const progress = todos.length
    ? Math.round((doneCount / todos.length) * 100)
    : 0;

  function refresh() {
    startTransition(() => router.refresh());
  }

  async function handleAdd(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    setAdding(true);
    try {
      const res = await fetch("/api/admin/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmed, notes: notes.trim(), date }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        todo?: TodoItem;
      };

      if (!res.ok || !data.todo) {
        toast({
          title: "Could not add the task",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
        return;
      }

      setTodos((current) => sortTodos([...current, data.todo as TodoItem]));
      setTitle("");
      setNotes("");
      toast({ title: "Task added", description: trimmed });
      refresh();
    } catch {
      toast({
        title: "Network error",
        description: "Could not reach the server.",
        variant: "destructive",
      });
    } finally {
      setAdding(false);
    }
  }

  async function handleToggle(todo: TodoItem) {
    setBusyId(todo._id);
    const nextDone = !todo.done;

    // Optimistic flip; the refresh below reconciles with the server.
    setTodos((current) =>
      sortTodos(
        current.map((item) =>
          item._id === todo._id ? { ...item, done: nextDone } : item
        )
      )
    );

    try {
      const res = await fetch(`/api/admin/todos/${todo._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: nextDone }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setTodos((current) =>
          sortTodos(
            current.map((item) =>
              item._id === todo._id ? { ...item, done: todo.done } : item
            )
          )
        );
        toast({
          title: "Could not update the task",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: nextDone ? "Marked as done" : "Marked as pending",
        description: todo.title,
      });
      refresh();
    } catch {
      setTodos((current) =>
        sortTodos(
          current.map((item) =>
            item._id === todo._id ? { ...item, done: todo.done } : item
          )
        )
      );
      toast({
        title: "Network error",
        description: "Could not reach the server.",
        variant: "destructive",
      });
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(todo: TodoItem) {
    try {
      const res = await fetch(`/api/admin/todos/${todo._id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        toast({
          title: "Could not delete the task",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
        return;
      }

      setTodos((current) => current.filter((item) => item._id !== todo._id));
      toast({ title: "Task deleted", description: todo.title });
      refresh();
    } catch {
      toast({
        title: "Network error",
        description: "Could not reach the server.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
      <Card className="border-border/60">
        <CardHeader className="flex-row flex-wrap items-center justify-between gap-2 space-y-0">
          <CardTitle className="text-base">Plan for the day</CardTitle>
          <div className="flex items-center gap-3">
            <div className="hidden w-32 sm:block">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-success transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <Badge variant={doneCount === todos.length && todos.length > 0 ? "success" : "outline"}>
              {doneCount} of {todos.length} done
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="todo-title">Task</Label>
                <Input
                  id="todo-title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. Prepare Assignment 4 for Batch A"
                  maxLength={200}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="todo-notes">Notes (optional)</Label>
                <Input
                  id="todo-notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Anything to remember"
                  maxLength={1000}
                />
              </div>
            </div>
            <Button type="submit" size="sm" disabled={adding || !title.trim()}>
              {adding ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding…
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" /> Add task
                </>
              )}
            </Button>
          </form>

          {todos.length === 0 ? (
            <EmptyState
              icon={Check}
              title="Nothing planned for this day"
              description="Add your first task above — you can tick it off as you go."
            />
          ) : (
            <ul className="space-y-2">
              {todos.map((todo) => {
                const busy = busyId === todo._id;
                return (
                  <li
                    key={todo._id}
                    className={cn(
                      "flex items-start gap-3 rounded-lg border px-3 py-2.5 transition-colors",
                      todo.done
                        ? "border-success/30 bg-success/5"
                        : "border-border/60 bg-muted/20"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(todo)}
                      disabled={busy}
                      aria-pressed={todo.done}
                      aria-label={todo.done ? "Mark as pending" : "Mark as done"}
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60",
                        todo.done
                          ? "border-success bg-success text-white"
                          : "border-muted-foreground/40 hover:border-accent"
                      )}
                    >
                      {busy ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : todo.done ? (
                        <Check className="h-3 w-3" />
                      ) : null}
                    </button>

                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "text-sm",
                          todo.done
                            ? "text-muted-foreground line-through"
                            : "font-medium"
                        )}
                      >
                        {todo.title}
                      </p>
                      {todo.notes ? (
                        <p className="text-xs text-muted-foreground">
                          {todo.notes}
                        </p>
                      ) : null}
                    </div>

                    <ConfirmDialog
                      title="Delete this task?"
                      description={todo.title}
                      confirmLabel="Delete"
                      onConfirm={() => handleDelete(todo)}
                      trigger={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                          aria-label="Delete task"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      }
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card className="h-fit border-border/60">
        <CardHeader>
          <CardTitle className="text-base">Which day?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="todo-date">Date</Label>
            <Input
              id="todo-date"
              type="date"
              value={date}
              onChange={(event) => {
                const next = event.target.value;
                if (next) router.push(`/admin/todos?date=${next}`);
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            To-dos are private to your admin account and saved per day.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => router.push("/admin/todos")}
            disabled={isPending}
          >
            Jump to today
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
