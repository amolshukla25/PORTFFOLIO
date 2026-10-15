"use client";

import { Filter, RotateCcw, UserX } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { EmptyState } from "@/components/common/empty-state";
import { StarDisplay } from "@/components/common/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { shortDate } from "@/lib/dates";

export interface ActivityRow {
  _id: string;
  date: string;
  topic: string;
  notes: string;
  hours: number | null;
  rating: number;
  studentName: string;
  studentEmail: string;
  batchName: string;
}

export interface MissingRow {
  _id: string;
  name: string;
  email: string;
  batchName: string;
  daysMissing: number;
}

export interface BatchOption {
  _id: string;
  name: string;
}

interface ActivityTableProps {
  activities: ActivityRow[];
  missing: MissingRow[];
  batches: BatchOption[];
  filters: { from: string; to: string; batchId: string };
}

export function ActivityTable({
  activities,
  missing,
  batches,
  filters,
}: ActivityTableProps) {
  const router = useRouter();
  const [from, setFrom] = React.useState(filters.from);
  const [to, setTo] = React.useState(filters.to);
  const [batchId, setBatchId] = React.useState(filters.batchId);

  function applyFilters(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (batchId) params.set("batchId", batchId);
    const query = params.toString();
    router.push(`/admin/activities${query ? `?${query}` : ""}`);
  }

  function resetFilters() {
    setFrom("");
    setTo("");
    setBatchId("");
    router.push("/admin/activities");
  }

  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardContent className="p-5">
          <form
            onSubmit={applyFilters}
            className="flex flex-wrap items-end gap-3"
          >
            <div className="space-y-1.5">
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                type="date"
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                className="w-full sm:w-44"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                type="date"
                value={to}
                onChange={(event) => setTo(event.target.value)}
                className="w-full sm:w-44"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="batch">Batch</Label>
              <Select
                id="batch"
                value={batchId}
                onChange={(event) => setBatchId(event.target.value)}
                className="w-full sm:w-52"
              >
                <option value="">All batches</option>
                {batches.map((batch) => (
                  <option key={batch._id} value={batch._id}>
                    {batch.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button type="submit" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Apply
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={resetFilters}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">Daily logs</CardTitle>
          <Badge variant="accent">
            {activities.length} {activities.length === 1 ? "entry" : "entries"}
          </Badge>
        </CardHeader>
        <CardContent>
          {activities.length === 0 ? (
            <EmptyState
              title="No activity in this range"
              description="Try widening the dates or clearing the batch filter."
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>What they studied</TableHead>
                  <TableHead>Hours</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>
                      <p className="font-medium">{row.studentName}</p>
                      <p className="text-xs text-muted-foreground">
                        {row.studentEmail}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{row.batchName}</Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-sm">
                      {shortDate(row.date)}
                    </TableCell>
                    <TableCell className="max-w-md">
                      <p className="font-medium">{row.topic}</p>
                      {row.notes ? (
                        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                          {row.notes}
                        </p>
                      ) : null}
                    </TableCell>
                    <TableCell className="text-sm">
                      {row.hours !== null ? `${row.hours} h` : "—"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <StarDisplay value={row.rating} />
                        <span className="text-xs font-medium text-muted-foreground">
                          {row.rating}/5
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base">No log in this range</CardTitle>
          {missing.length > 0 ? (
            <Badge variant="destructive">
              {missing.length} {missing.length === 1 ? "student" : "students"}
            </Badge>
          ) : null}
        </CardHeader>
        <CardContent>
          {missing.length === 0 ? (
            <EmptyState
              title="Everyone logged activity"
              description="Every active student in this range has at least one entry."
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Days missing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {missing.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.email}
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{student.batchName}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={student.daysMissing > 3 ? "destructive" : "star"}>
                        <UserX className="h-3 w-3" />
                        {student.daysMissing}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
