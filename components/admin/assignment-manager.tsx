"use client";

import {
  ClipboardList,
  ExternalLink,
  Loader2,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { ConfirmDialog } from "@/components/common/confirm-dialog";
import { EmptyState } from "@/components/common/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { Select } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { formatDay, todayKey } from "@/lib/dates";
import { cn } from "@/lib/utils";

export interface BatchOption {
  id: string;
  name: string;
}

export interface AssignmentRow {
  id: string;
  title: string;
  description: string;
  batchId: string;
  batchName: string;
  /** ISO string. */
  givenAt: string;
  /** ISO string or null. */
  dueDate: string | null;
  submittedCount: number;
  expectedCount: number;
  pendingCount: number;
}

interface AssignmentManagerProps {
  assignments: AssignmentRow[];
  batches: BatchOption[];
  /** Pre-selects the batch when arriving from a batch card. */
  initialBatchId?: string;
}

/**
 * Admin-side assignment list: create assignments for a batch and see how many
 * students have submitted at a glance.
 */
export function AssignmentManager({
  assignments,
  batches,
  initialBatchId,
}: AssignmentManagerProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const defaultBatchId =
    initialBatchId && batches.some((batch) => batch.id === initialBatchId)
      ? initialBatchId
      : batches[0]?.id ?? "";
  const [batchId, setBatchId] = React.useState(defaultBatchId);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [givenAt, setGivenAt] = React.useState(todayKey());
  const [dueDate, setDueDate] = React.useState("");

  function resetForm() {
    setBatchId(defaultBatchId);
    setTitle("");
    setDescription("");
    setGivenAt(todayKey());
    setDueDate("");
    setError(null);
  }

  async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!batchId) {
      setError("Create a batch first, then assign work to it.");
      return;
    }

    try {
      setPending(true);
      const res = await fetch("/api/admin/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          batchId,
          title,
          description,
          givenAt,
          dueDate: dueDate || null,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Could not create the assignment.");
        return;
      }

      const batchName =
        batches.find((batch) => batch.id === batchId)?.name ?? "the batch";
      toast({
        title: "Assignment created",
        description: `Given to ${batchName}.`,
      });
      setOpen(false);
      resetForm();
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  const noBatches = batches.length === 0;

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Dialog
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (!next) resetForm();
          }}
        >
          <DialogTrigger asChild>
            <Button size="sm" disabled={noBatches}>
              <Plus className="mr-2 h-4 w-4" />
              New assignment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>New assignment</DialogTitle>
              <DialogDescription>
                Record what you gave the batch and when — submissions are
                tracked automatically.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreate} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="assignment-batch">Batch</Label>
                <Select
                  id="assignment-batch"
                  value={batchId}
                  onChange={(event) => setBatchId(event.target.value)}
                  required
                >
                  {batches.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                      {batch.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="assignment-title">Title</Label>
                <Input
                  id="assignment-title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. Build a RAG pipeline over your notes"
                  minLength={2}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="assignment-description">
                  Instructions (optional)
                </Label>
                <Textarea
                  id="assignment-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="What should students submit?"
                  rows={3}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="assignment-given">Given on</Label>
                  <Input
                    id="assignment-given"
                    type="date"
                    value={givenAt}
                    onChange={(event) => setGivenAt(event.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignment-due">Due (optional)</Label>
                  <Input
                    id="assignment-due"
                    type="date"
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                  />
                </div>
              </div>

              {error ? (
                <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  {error}
                </p>
              ) : null}

              <DialogFooter className="gap-2 sm:gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  disabled={pending}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={pending}>
                  {pending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating…
                    </>
                  ) : (
                    "Create assignment"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {noBatches ? (
        <EmptyState
          icon={ClipboardList}
          title="No batches yet"
          description="Create a batch first — assignments are always given to a batch."
        >
          <Link
            href="/admin/batches"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Go to batches
          </Link>
        </EmptyState>
      ) : assignments.length === 0 ? (
        <EmptyState
          icon={ClipboardList}
          title="No assignments given yet"
          description="Create your first assignment and students will see it in their portal."
        />
      ) : (
        <Card className="border-border/60">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Given</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => {
                  const percent =
                    assignment.expectedCount > 0
                      ? Math.round(
                          (assignment.submittedCount /
                            assignment.expectedCount) *
                            100
                        )
                      : 0;

                  return (
                    <TableRow key={assignment.id}>
                      <TableCell className="max-w-[16rem]">
                        <Link
                          href={`/admin/assignments/${assignment.id}`}
                          className="font-medium hover:text-accent"
                        >
                          {assignment.title}
                        </Link>
                        {assignment.description ? (
                          <p className="truncate text-xs text-muted-foreground">
                            {assignment.description}
                          </p>
                        ) : null}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{assignment.batchName}</Badge>
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm">
                        {formatDay(assignment.givenAt)}
                      </TableCell>
                      <TableCell className="whitespace-nowrap text-sm">
                        {assignment.dueDate
                          ? formatDay(assignment.dueDate)
                          : "—"}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                            <div
                              className={cn(
                                "h-full rounded-full",
                                percent === 100 ? "bg-success" : "bg-accent"
                              )}
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <span className="whitespace-nowrap text-xs text-muted-foreground">
                            {assignment.submittedCount} /{" "}
                            {assignment.expectedCount}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {assignment.pendingCount === 0 &&
                        assignment.expectedCount > 0 ? (
                          <Badge variant="success">All submitted</Badge>
                        ) : (
                          <Badge variant="star">
                            {assignment.pendingCount} pending
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/assignments/${assignment.id}`}
                            className={buttonVariants({
                              variant: "outline",
                              size: "sm",
                            })}
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            View
                          </Link>
                          <AssignmentDeleteButton
                            assignmentId={assignment.id}
                            assignmentTitle={assignment.title}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

interface AssignmentDeleteButtonProps {
  assignmentId: string;
  assignmentTitle: string;
  /** When set, the user is sent here after a successful delete. */
  redirectTo?: string;
}

/** Deletes an assignment (and its submissions) after a confirmation. */
export function AssignmentDeleteButton({
  assignmentId,
  assignmentTitle,
  redirectTo,
}: AssignmentDeleteButtonProps) {
  const router = useRouter();
  const { toast } = useToast();

  async function handleDelete() {
    try {
      const res = await fetch(`/api/admin/assignments/${assignmentId}`, {
        method: "DELETE",
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        toast({
          title: "Could not delete the assignment",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Assignment deleted",
        description: `“${assignmentTitle}” and its submissions were removed.`,
      });

      if (redirectTo) {
        router.push(redirectTo);
      }
      router.refresh();
    } catch {
      toast({
        title: "Network error",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <ConfirmDialog
      trigger={
        <Button type="button" variant="destructive" size="sm">
          <Trash2 className="h-3.5 w-3.5" />
        </Button>
      }
      title="Delete this assignment?"
      description="The assignment and every submission for it will be removed. This cannot be undone."
      onConfirm={handleDelete}
    />
  );
}
