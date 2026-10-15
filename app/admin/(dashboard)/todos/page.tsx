import { CheckCircle2, Clock, ListChecks } from "lucide-react";
import type { Metadata } from "next";

import { TodoBoard } from "@/components/admin/todo-board";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StatCard } from "@/components/common/stat-card";
import { getSession } from "@/lib/auth";
import { isValidDateKey, shortDate, todayKey } from "@/lib/dates";
import { Batch, Todo } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Daily to-dos",
  robots: { index: false, follow: false },
};

interface AdminTodosPageProps {
  searchParams: Promise<{ date?: string; batchId?: string }>;
}

export default async function AdminTodosPage({
  searchParams,
}: AdminTodosPageProps) {
  const params = await searchParams;
  const session = await getSession();

  const date =
    params.date && isValidDateKey(params.date) ? params.date : todayKey();
  const batchId = params.batchId ?? "";

  await connectToDatabase();

  const filter: Record<string, unknown> = {
    owner: session!.userId,
    date,
  };
  if (batchId) filter.batch = batchId;

  const [todos, batches] = await Promise.all([
    Todo.find(filter).sort({ done: 1, createdAt: 1 }).lean(),
    Batch.find().sort({ name: 1 }).select("name").lean(),
  ]);

  const batchOptions = batches.map((batch) => ({
    _id: String(batch._id),
    name: batch.name,
  }));
  const batchName =
    batchOptions.find((batch) => batch._id === batchId)?.name ?? null;

  const serialized = todos.map((todo) => ({
    _id: String(todo._id),
    date: todo.date,
    title: todo.title,
    notes: todo.notes ?? "",
    done: Boolean(todo.done),
    batchId: todo.batch ? String(todo.batch) : null,
    createdAt: new Date(todo.createdAt).toISOString(),
  }));

  const doneCount = serialized.filter((todo) => todo.done).length;
  const remainingCount = serialized.length - doneCount;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Daily to-dos"
        description={
          batchName
            ? `Tasks for ${batchName} on ${shortDate(date)} — plan the day and tick off what got done.`
            : "Plan each day and tick off what you actually got through. Tag a task to a batch to keep it with that batch."
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Planned"
          value={serialized.length}
          icon={ListChecks}
          hint={`${batchName ?? "All batches"} · ${shortDate(date)}`}
        />
        <StatCard
          label="Completed"
          value={doneCount}
          icon={CheckCircle2}
          tone="success"
          hint={
            serialized.length
              ? `${Math.round((doneCount / serialized.length) * 100)}% of the day`
              : "Nothing planned yet"
          }
        />
        <StatCard
          label="Remaining"
          value={remainingCount}
          icon={Clock}
          tone={remainingCount === 0 ? "success" : "star"}
          hint={remainingCount === 0 ? "All clear for today" : "Still to do"}
        />
      </div>

      <TodoBoard
        date={date}
        initialTodos={serialized}
        batches={batchOptions}
        batchId={batchId}
      />
    </div>
  );
}
