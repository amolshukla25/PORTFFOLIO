"use client";

import { KeyRound, Pencil, Plus, Trash2, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { ConfirmDialog } from "@/components/common/confirm-dialog";
import { EmptyState } from "@/components/common/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/components/ui/use-toast";
import { formatDay } from "@/lib/dates";

export interface StudentRow {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  batchId: string | null;
  batchName: string | null;
  createdAt: string;
}

export interface BatchOption {
  _id: string;
  name: string;
  active: boolean;
}

interface StudentManagerProps {
  students: StudentRow[];
  batches: BatchOption[];
}

async function sendJson(
  url: string,
  method: "POST" | "PATCH" | "DELETE",
  body?: unknown
): Promise<void> {
  const res = await fetch(url, {
    method,
    headers: body === undefined ? undefined : { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error ?? "Something went wrong.");
  }
}

export function StudentManager({ students, batches }: StudentManagerProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [batchFilter, setBatchFilter] = React.useState("all");

  const visible =
    batchFilter === "all"
      ? students
      : batchFilter === "none"
        ? students.filter((student) => !student.batchId)
        : students.filter((student) => student.batchId === batchFilter);

  function reportSuccess(title: string, description?: string) {
    toast({ title, description });
    router.refresh();
  }

  function reportError(title: string, error: unknown) {
    toast({
      title,
      description: error instanceof Error ? error.message : "Please try again.",
      variant: "destructive",
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Label htmlFor="batch-filter" className="text-xs text-muted-foreground">
            Batch
          </Label>
          <Select
            id="batch-filter"
            value={batchFilter}
            onChange={(event) => setBatchFilter(event.target.value)}
            className="h-9 w-52"
          >
            <option value="all">All batches</option>
            {batches.map((batch) => (
              <option key={batch._id} value={batch._id}>
                {batch.name}
              </option>
            ))}
            <option value="none">Unassigned</option>
          </Select>
        </div>

        <CreateStudentDialog
          batches={batches}
          onDone={reportSuccess}
          onError={reportError}
        />
      </div>

      {visible.length === 0 ? (
        <EmptyState
          icon={Users}
          title={students.length === 0 ? "No students yet" : "No students in this view"}
          description={
            students.length === 0
              ? "Create a login for each student so they can log daily activity and submit assignments."
              : "Try a different batch filter."
          }
        />
      ) : (
        <Card className="border-border/60">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visible.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-xs text-muted-foreground">{student.email}</p>
                    </TableCell>
                    <TableCell>
                      {student.batchName ? (
                        <Badge variant="accent">{student.batchName}</Badge>
                      ) : (
                        <Badge variant="outline">Unassigned</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.active ? "success" : "destructive"}>
                        {student.active ? "Active" : "Disabled"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden text-xs text-muted-foreground md:table-cell">
                      {formatDay(student.createdAt)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <EditStudentDialog
                          student={student}
                          batches={batches}
                          onDone={reportSuccess}
                          onError={reportError}
                        />
                        <ResetPasswordDialog
                          student={student}
                          onDone={reportSuccess}
                          onError={reportError}
                        />
                        <DeleteStudentButton
                          student={student}
                          onDone={reportSuccess}
                          onError={reportError}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

interface DialogCallbacks {
  onDone: (title: string, description?: string) => void;
  onError: (title: string, error: unknown) => void;
}

function CreateStudentDialog({
  batches,
  onDone,
  onError,
}: { batches: BatchOption[] } & DialogCallbacks) {
  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [batchId, setBatchId] = React.useState(batches[0]?._id ?? "");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!batchId) {
      onError("Batch required", new Error("Create a batch first, then add students to it."));
      return;
    }

    try {
      setPending(true);
      await sendJson("/api/admin/students", "POST", {
        name,
        email,
        password,
        batchId,
      });
      onDone("Student created", `${email.trim()} can sign in at /student/login.`);
      setOpen(false);
      setName("");
      setEmail("");
      setPassword("");
      setBatchId(batches[0]?._id ?? "");
    } catch (error) {
      onError("Could not create student", error);
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add student
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a student</DialogTitle>
            <DialogDescription>
              This creates the email and password the student signs in with.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="student-name">Full name</Label>
              <Input
                id="student-name"
                required
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-email">Email</Label>
              <Input
                id="student-email"
                type="email"
                required
                autoComplete="off"
                placeholder="student@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-password">Temporary password</Label>
              <Input
                id="student-password"
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-batch">Batch</Label>
              <Select
                id="student-batch"
                value={batchId}
                onChange={(event) => setBatchId(event.target.value)}
                required
              >
                {batches.length === 0 ? (
                  <option value="">No batches yet</option>
                ) : null}
                {batches.map((batch) => (
                  <option key={batch._id} value={batch._id}>
                    {batch.name}
                    {batch.active ? "" : " (inactive)"}
                  </option>
                ))}
              </Select>
              {batches.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  Create a batch first — students are always grouped by batch.
                </p>
              ) : null}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending || batches.length === 0}>
              {pending ? "Creating…" : "Create student"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function EditStudentDialog({
  student,
  batches,
  onDone,
  onError,
}: { student: StudentRow; batches: BatchOption[] } & DialogCallbacks) {
  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [name, setName] = React.useState(student.name);
  const [batchId, setBatchId] = React.useState(student.batchId ?? "");
  const [active, setActive] = React.useState(student.active);

  React.useEffect(() => {
    if (open) {
      setName(student.name);
      setBatchId(student.batchId ?? "");
      setActive(student.active);
    }
  }, [open, student]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setPending(true);
      await sendJson(`/api/admin/students/${student._id}`, "PATCH", {
        name,
        batchId: batchId === "" ? null : batchId,
        active,
      });
      onDone("Student updated", student.email);
      setOpen(false);
    } catch (error) {
      onError("Could not update student", error);
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`Edit ${student.name}`}>
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit student</DialogTitle>
            <DialogDescription>{student.email}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor={`edit-name-${student._id}`}>Full name</Label>
              <Input
                id={`edit-name-${student._id}`}
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`edit-batch-${student._id}`}>Batch</Label>
              <Select
                id={`edit-batch-${student._id}`}
                value={batchId}
                onChange={(event) => setBatchId(event.target.value)}
              >
                <option value="">Unassigned</option>
                {batches.map((batch) => (
                  <option key={batch._id} value={batch._id}>
                    {batch.name}
                  </option>
                ))}
              </Select>
            </div>
            <label className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/20 px-3 py-2.5">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[hsl(var(--accent))]"
                checked={active}
                onChange={(event) => setActive(event.target.checked)}
              />
              <span className="text-sm">
                Account active
                <span className="block text-xs text-muted-foreground">
                  Disabled accounts cannot sign in.
                </span>
              </span>
            </label>
          </div>

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
              {pending ? "Saving…" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function ResetPasswordDialog({
  student,
  onDone,
  onError,
}: { student: StudentRow } & DialogCallbacks) {
  const [open, setOpen] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [password, setPassword] = React.useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setPending(true);
      await sendJson(`/api/admin/students/${student._id}`, "PATCH", { password });
      onDone("Password reset", `Share the new password with ${student.name}.`);
      setOpen(false);
      setPassword("");
    } catch (error) {
      onError("Could not reset password", error);
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Reset password for ${student.name}`}
        >
          <KeyRound className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Reset password</DialogTitle>
            <DialogDescription>
              Set a new password for {student.name} ({student.email}).
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2 py-4">
            <Label htmlFor={`reset-password-${student._id}`}>New password</Label>
            <Input
              id={`reset-password-${student._id}`}
              required
              minLength={6}
              autoComplete="new-password"
              placeholder="At least 6 characters"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

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
              {pending ? "Saving…" : "Set password"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function DeleteStudentButton({
  student,
  onDone,
  onError,
}: { student: StudentRow } & DialogCallbacks) {
  async function handleDelete() {
    try {
      await sendJson(`/api/admin/students/${student._id}`, "DELETE");
      onDone("Student deleted", `${student.name}'s activity and submissions were removed.`);
    } catch (error) {
      onError("Could not delete student", error);
    }
  }

  return (
    <ConfirmDialog
      trigger={
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Delete ${student.name}`}
          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      }
      title={`Delete ${student.name}?`}
      description="This also deletes their daily activity logs and assignment submissions. This cannot be undone."
      confirmLabel="Delete student"
      onConfirm={handleDelete}
    />
  );
}
