"use client";

import {
  BookOpenCheck,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  Loader2,
  Pencil,
  Plus,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { ConfirmDialog } from "@/components/common/confirm-dialog";
import { EmptyState } from "@/components/common/empty-state";
import {
  StaggerGroup,
  staggerItemVariants,
} from "@/components/common/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { formatDay } from "@/lib/dates";
import { motion } from "framer-motion";

/** The batch card, promoted to a motion component so it can stagger in. */
const MotionCard = motion.create(Card);

export interface BatchRow {
  _id: string;
  name: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
  active: boolean;
  studentCount: number;
}

interface BatchFormState {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

const EMPTY_FORM: BatchFormState = {
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  active: true,
};

/** Converts a stored ISO value into a local "YYYY-MM-DD" for <input type="date">. */
function toDateInputValue(value: string | null): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (part: number) => String(part).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

interface BatchFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  batch?: BatchRow | null;
  onSaved: () => void;
}

function BatchFormDialog({
  open,
  onOpenChange,
  batch,
  onSaved,
}: BatchFormDialogProps) {
  const { toast } = useToast();
  const [form, setForm] = React.useState<BatchFormState>(EMPTY_FORM);
  const [saving, setSaving] = React.useState(false);
  const isEdit = Boolean(batch);

  React.useEffect(() => {
    if (!open) return;
    setForm(
      batch
        ? {
            name: batch.name,
            description: batch.description,
            startDate: toDateInputValue(batch.startDate),
            endDate: toDateInputValue(batch.endDate),
            active: batch.active,
          }
        : EMPTY_FORM
    );
  }, [open, batch]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = form.name.trim();
    if (name.length < 2) {
      toast({
        variant: "destructive",
        title: "Batch name is too short",
        description: "Use at least 2 characters.",
      });
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(
        isEdit ? `/api/admin/batches/${batch!._id}` : "/api/admin/batches",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            description: form.description.trim(),
            startDate: form.startDate || null,
            endDate: form.endDate || null,
            ...(isEdit ? { active: form.active } : {}),
          }),
        }
      );
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Could not save batch",
          description: data.error ?? "Please try again.",
        });
        return;
      }

      toast({
        title: isEdit ? "Batch updated" : "Batch created",
        description: `${name} is ready.`,
      });
      onOpenChange(false);
      onSaved();
    } catch {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Please try again.",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit batch" : "New batch"}</DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update the batch details or start and end dates."
              : "Create a batch to group students together."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="batch-name">Batch name</Label>
            <Input
              id="batch-name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              placeholder="e.g. Agentic AI — Oct 2026"
              maxLength={80}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="batch-description">Description</Label>
            <Input
              id="batch-description"
              value={form.description}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, description: event.target.value }))
              }
              placeholder="Optional — what this batch covers"
              maxLength={500}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="batch-start">Starts</Label>
              <Input
                id="batch-start"
                type="date"
                value={form.startDate}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, startDate: event.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batch-end">Ends</Label>
              <Input
                id="batch-end"
                type="date"
                value={form.endDate}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, endDate: event.target.value }))
                }
              />
            </div>
          </div>

          {isEdit ? (
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-input"
                checked={form.active}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, active: event.target.checked }))
                }
              />
              Active batch
            </label>
          ) : null}

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving…
                </>
              ) : isEdit ? (
                "Save changes"
              ) : (
                "Create batch"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function BatchManager({ batches }: { batches: BatchRow[] }) {
  const router = useRouter();
  const { toast } = useToast();
  const [createOpen, setCreateOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<BatchRow | null>(null);
  const [deletingId, setDeletingId] = React.useState<string | null>(null);

  function refresh() {
    router.refresh();
  }

  async function handleDelete(batch: BatchRow) {
    setDeletingId(batch._id);
    try {
      const res = await fetch(`/api/admin/batches/${batch._id}`, {
        method: "DELETE",
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Could not delete batch",
          description: data.error ?? "Please try again.",
        });
        return;
      }

      toast({ title: "Batch deleted", description: `${batch.name} was removed.` });
      refresh();
    } catch {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Please try again.",
      });
    } finally {
      setDeletingId(null);
    }
  }

  const totalStudents = batches.reduce(
    (sum, batch) => sum + batch.studentCount,
    0
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {batches.length} batch{batches.length === 1 ? "" : "es"} ·{" "}
          {totalStudents} student{totalStudents === 1 ? "" : "s"} enrolled
        </p>
        <Dialog open={createOpen} onOpenChange={setCreateOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" /> New batch
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>

      {batches.length === 0 ? (
        <EmptyState
          icon={GraduationCap}
          title="No batches yet"
          description="Create your first batch, then add students to it."
        >
          <Button size="sm" onClick={() => setCreateOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Create a batch
          </Button>
        </EmptyState>
      ) : (
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {batches.map((batch) => (
            <MotionCard
              key={batch._id}
              variants={staggerItemVariants}
              className="card-hover flex h-full flex-col border-border/60"
            >
              <CardHeader className="space-y-2 pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base leading-snug">
                    <Link
                      href={`/admin/batches/${batch._id}`}
                      className="transition-colors hover:text-accent"
                    >
                      {batch.name}
                    </Link>
                  </CardTitle>
                  <Badge variant={batch.active ? "success" : "outline"}>
                    {batch.active ? "Active" : "Archived"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {batch.description || "No description yet."}
                </p>
              </CardHeader>

              <CardContent className="mt-auto space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">
                    <Users className="h-3 w-3" />
                    {batch.studentCount} student
                    {batch.studentCount === 1 ? "" : "s"}
                  </Badge>
                  {batch.startDate || batch.endDate ? (
                    <Badge variant="outline">
                      <CalendarDays className="h-3 w-3" />
                      {formatDay(batch.startDate)} – {formatDay(batch.endDate)}
                    </Badge>
                  ) : null}
                </div>

                {/* Everything the trainer needs for this batch, scoped to it. */}
                <div className="space-y-2 border-t border-border/60 pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Open in this batch
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="justify-start px-2.5 text-xs"
                    >
                      <Link href={`/admin/students?batchId=${batch._id}`}>
                        <Users className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                        Students
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="justify-start px-2.5 text-xs"
                    >
                      <Link href={`/admin/activities?batchId=${batch._id}`}>
                        <BookOpenCheck className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                        Daily activity
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="justify-start px-2.5 text-xs"
                    >
                      <Link href={`/admin/assignments?batchId=${batch._id}`}>
                        <ClipboardList className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                        Assignments
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="justify-start px-2.5 text-xs"
                    >
                      <Link href={`/admin/todos?batchId=${batch._id}`}>
                        <ListChecks className="mr-1.5 h-3.5 w-3.5 shrink-0" />
                        Daily to-dos
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Button asChild size="sm">
                    <Link href={`/admin/batches/${batch._id}`}>
                      <LayoutDashboard className="mr-1.5 h-3.5 w-3.5" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditing(batch)}
                  >
                    <Pencil className="mr-1.5 h-3.5 w-3.5" /> Edit
                  </Button>
                  <ConfirmDialog
                    title={`Delete "${batch.name}"?`}
                    description="This cannot be undone. Batches with students must be emptied first."
                    confirmLabel="Delete batch"
                    onConfirm={() => handleDelete(batch)}
                    trigger={
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={deletingId === batch._id}
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        {deletingId === batch._id ? (
                          <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="mr-1.5 h-3.5 w-3.5" />
                        )}
                        Delete
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </MotionCard>
          ))}
        </StaggerGroup>
      )}

      <BatchFormDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        batch={null}
        onSaved={refresh}
      />

      <BatchFormDialog
        open={Boolean(editing)}
        onOpenChange={(open) => {
          if (!open) setEditing(null);
        }}
        batch={editing}
        onSaved={refresh}
      />
    </div>
  );
}
