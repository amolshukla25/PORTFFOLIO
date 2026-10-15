"use client";

import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { StarRatingInput } from "@/components/common/star-rating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { shortDate } from "@/lib/dates";

export interface ActivityEntry {
  _id: string;
  date: string;
  session: string;
  topic: string;
  notes: string;
  hours: number | null;
  rating: number;
}

interface ActivityFormProps {
  /** Every day the student has already logged, newest first. */
  entries: ActivityEntry[];
  /** Today's day key (YYYY-MM-DD) — the latest day that can be logged. */
  today: string;
}

/**
 * Day-wise session log.
 *
 * A day is the unit: pick the date (defaults to today), name the session that
 * happened, score the feedback 1–5 and leave a remark. The (student, date)
 * index in Mongo is unique, so saving the same day again edits it.
 */
export function ActivityForm({ entries, today }: ActivityFormProps) {
  const [date, setDate] = React.useState(today);
  const entry = entries.find((item) => item.date === date) ?? null;

  const sessionSuggestions = React.useMemo(
    () =>
      Array.from(
        new Set(entries.map((item) => item.session.trim()).filter(Boolean))
      ).slice(0, 12),
    [entries]
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-[minmax(0,13rem)_1fr] sm:items-end">
        <div className="space-y-2">
          <Label htmlFor="activity-date">Which day?</Label>
          <Input
            id="activity-date"
            type="date"
            value={date}
            max={today}
            onChange={(event) => setDate(event.target.value || today)}
          />
        </div>
        <p className="text-xs text-muted-foreground sm:pb-3">
          {entry
            ? `${shortDate(date)} is already logged — saving updates that day.`
            : `Nothing saved for ${shortDate(date)} yet.`}{" "}
          Missed a day? Pick the date and log it now.
        </p>
      </div>

      {/* Remounting on date change resets the fields to that day's saved entry. */}
      <EntryFields
        key={date}
        date={date}
        entry={entry}
        sessionSuggestions={sessionSuggestions}
      />
    </div>
  );
}

interface EntryFieldsProps {
  date: string;
  entry: ActivityEntry | null;
  sessionSuggestions: string[];
}

function EntryFields({ date, entry, sessionSuggestions }: EntryFieldsProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [session, setSession] = React.useState(entry?.session ?? "");
  const [topic, setTopic] = React.useState(entry?.topic ?? "");
  const [notes, setNotes] = React.useState(entry?.notes ?? "");
  const [hours, setHours] = React.useState(
    entry?.hours !== null && entry?.hours !== undefined ? String(entry.hours) : ""
  );
  const [rating, setRating] = React.useState<number | null>(
    entry?.rating ?? null
  );
  const [pending, setPending] = React.useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedSession = session.trim();
    if (trimmedSession.length < 2) {
      toast({
        title: "Add the session",
        description: "Write which session you attended, e.g. Session 6 – Data cleaning.",
        variant: "destructive",
      });
      return;
    }

    const trimmedTopic = topic.trim();
    if (trimmedTopic.length < 2) {
      toast({
        title: "Add a topic",
        description: "Write what you covered in the session.",
        variant: "destructive",
      });
      return;
    }

    if (!rating) {
      toast({
        title: "Pick your feedback score",
        description: "Tap 1 to 5 stars for how the session went for you.",
        variant: "destructive",
      });
      return;
    }

    let parsedHours: number | null = null;
    if (hours.trim() !== "") {
      parsedHours = Number(hours);
      if (!Number.isFinite(parsedHours) || parsedHours < 0 || parsedHours > 24) {
        toast({
          title: "Check the hours",
          description: "Enter a number between 0 and 24.",
          variant: "destructive",
        });
        return;
      }
    }

    try {
      setPending(true);
      const res = await fetch("/api/student/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          session: trimmedSession,
          topic: trimmedTopic,
          notes: notes.trim(),
          hours: parsedHours,
          rating,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        toast({
          title: "Could not save",
          description: data.error ?? "Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: entry ? "Session updated" : "Session logged",
        description: `${shortDate(date)} · ${trimmedSession} saved.`,
      });
      router.refresh();
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="session">Which session did you have?</Label>
          <Input
            id="session"
            list="session-options"
            value={session}
            onChange={(event) => setSession(event.target.value)}
            placeholder="e.g. Session 6 – Data cleaning"
            maxLength={120}
          />
          <datalist id="session-options">
            {sessionSuggestions.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
          <p className="text-xs text-muted-foreground">
            Session number or name, so your trainer can match the day to the plan.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hours">Hours in the session (optional)</Label>
          <Input
            id="hours"
            type="number"
            min={0}
            max={24}
            step={0.5}
            value={hours}
            onChange={(event) => setHours(event.target.value)}
            placeholder="2.5"
            className="max-w-[8rem]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic">What did the session cover?</Label>
        <Input
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          placeholder="e.g. Python functions, prompt patterns, vector databases"
          maxLength={160}
        />
      </div>

      <div className="space-y-2 rounded-xl border border-border/70 bg-muted/30 p-4">
        <Label>Feedback on the session (1–5)</Label>
        <p className="text-xs text-muted-foreground">
          1 means the session didn&apos;t land at all, 5 means you got everything
          out of it.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <StarRatingInput value={rating} onChange={setRating} disabled={pending} />
          <span className="text-sm font-medium text-muted-foreground">
            {rating ? `${rating} / 5` : "Not rated yet"}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="remark">Remark (optional)</Label>
        <Textarea
          id="remark"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Anything the trainer should know — doubts, what to revise, what went well."
          rows={3}
        />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving…
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            {entry ? "Update this day's session" : "Save this day's session"}
          </>
        )}
      </Button>
    </form>
  );
}
