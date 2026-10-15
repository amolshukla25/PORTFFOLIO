"use client";

import {
  CheckCircle2,
  ClipboardList,
  Clock,
  ExternalLink,
  Loader2,
  Send,
} from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { EmptyState } from "@/components/common/empty-state";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { formatDateTime, formatDay } from "@/lib/dates";

export interface StudentAssignmentRow {
  id: string;
  title: string;
  description: string;
  /** ISO string. */
  givenAt: string;
  /** ISO string or null. */
  dueDate: string | null;
  submitted: boolean;
  /** ISO string or null. */
  submittedAt: string | null;
  note: string;
  link: string;
}

interface AssignmentListProps {
  assignments: StudentAssignmentRow[];
}

export function AssignmentList({ assignments }: AssignmentListProps) {
  if (assignments.length === 0) {
    return (
      <EmptyState
        icon={ClipboardList}
        title="No assignments yet"
        description="When your trainer assigns work to your batch it will show up here."
      />
    );
  }

  const pendingCount = assignments.filter(
    (assignment) => !assignment.submitted
  ).length;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={pendingCount > 0 ? "star" : "success"}>
          {pendingCount > 0
            ? `${pendingCount} still to submit`
            : "Everything submitted"}
        </Badge>
        <span className="text-xs text-muted-foreground">
          {assignments.length} assignment
          {assignments.length === 1 ? "" : "s"} for your batch
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {assignments.map((assignment) => (
          <Card
            key={assignment.id}
            className={
              assignment.submitted
                ? "border-success/30"
                : "border-border/60"
            }
          >
            <CardHeader className="space-y-2 pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-base font-semibold leading-snug">
                  {assignment.title}
                </CardTitle>
                {assignment.submitted ? (
                  <Badge variant="success" className="shrink-0">
                    <CheckCircle2 className="h-3 w-3" />
                    Submitted
                  </Badge>
                ) : (
                  <Badge variant="star" className="shrink-0">
                    <Clock className="h-3 w-3" />
                    Pending
                  </Badge>
                )}
              </div>
              {assignment.description ? (
                <p className="text-sm text-muted-foreground">
                  {assignment.description}
                </p>
              ) : null}
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span>Given {formatDay(assignment.givenAt)}</span>
                <span>
                  {assignment.dueDate
                    ? `Due ${formatDay(assignment.dueDate)}`
                    : "No due date"}
                </span>
                {assignment.submittedAt ? (
                  <span className="text-success">
                    Submitted {formatDateTime(assignment.submittedAt)}
                  </span>
                ) : null}
              </div>

              {assignment.submitted &&
              (assignment.note || assignment.link) ? (
                <div className="rounded-md border border-border/60 bg-muted/20 px-3 py-2 text-xs">
                  {assignment.note ? (
                    <p className="text-muted-foreground">{assignment.note}</p>
                  ) : null}
                  {assignment.link ? (
                    <a
                      href={assignment.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-medium text-accent hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Submitted link
                    </a>
                  ) : null}
                </div>
              ) : null}

              <SubmitAssignmentDialog assignment={assignment} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SubmitAssignmentDialog({
  assignment,
}: {
  assignment: StudentAssignmentRow;
}) {
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [note, setNote] = React.useState(assignment.note);
  const [link, setLink] = React.useState(assignment.link);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    try {
      setPending(true);
      const res = await fetch(
        `/api/student/assignments/${assignment.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ note, link }),
        }
      );
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Could not submit your work.");
        return;
      }

      toast({
        title: assignment.submitted ? "Submission updated" : "Submitted",
        description: `“${assignment.title}” was sent to your trainer.`,
      });
      setOpen(false);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant={assignment.submitted ? "outline" : "default"}
          className="w-full sm:w-auto"
        >
          <Send className="mr-2 h-3.5 w-3.5" />
          {assignment.submitted ? "Update submission" : "Submit work"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {assignment.submitted ? "Update your submission" : "Submit work"}
          </DialogTitle>
          <DialogDescription>
            {assignment.title} · given {formatDay(assignment.givenAt)}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`note-${assignment.id}`}>
              What did you do? (optional)
            </Label>
            <Textarea
              id={`note-${assignment.id}`}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="Short note about your submission"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`link-${assignment.id}`}>
              Link to your work (optional)
            </Label>
            <Input
              id={`link-${assignment.id}`}
              value={link}
              onChange={(event) => setLink(event.target.value)}
              placeholder="https://github.com/you/repo"
            />
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
                  Sending…
                </>
              ) : assignment.submitted ? (
                "Update submission"
              ) : (
                "Submit"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
