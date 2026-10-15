import { CheckCircle2, Clock, ListChecks } from "lucide-react";
import type { Metadata } from "next";

import { TodoBoard } from "@/components/admin/todo-board";
import { PageHeader } from "@/components/portal/portal-page-header";
import { StatCard } from "@/components/common/stat-card";
import { getSession } from "@/lib/auth";
import { isValidDateKey, shortDate, todayKey } from "@/lib/dates";
import { Todo } from "@/lib/db/models";
import { connectToDatabase } from "@/lib/mongodb";

export const metadata: Metadata = {
  title: "Daily to-dos",
  robots: { index: false, follow: false },
};

interface AdminTodosPageProps {
  searchParams: Promise<{ date?: string }>;
}

export default async function AdminTodosPage({
  searchParams,
}: AdminTodosPageProps) {
  const params = await searchParams;
  const session = await getSession();

  const date =
    params.date && isValidDateKey(params.date) ? params.date : todayKey();

  await connectToDatabase();

  const todos = await Todo.find({ owner: session!.userId, date })
    .sort({ done: 1, createdAt: 1 })
    .lean();

  const serialized = todos.map((todo) => ({
    _id: String(todo._id),
    date: todo.date,
    title: todo.title,
    notes: todo.notes ?? "",
    done: Boolean(todo.done),
    createdAt: new Date(todo.createdAt).toISOString(),
  }));

  const doneCount = serialized.filter((todo) => todo.done).length;
  const remainingCount = serialized.length - doneCount;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Daily to-dos"
        description="Plan each day and tick off what you actually got through."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Planned"
          value={serialized.length}
          icon={ListChecks}
          hint={`For ${shortDate(date)}`}
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

      <TodoBoard date={date} initialTodos={serialized} />
    </div>
  );
}
