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

export interface ActivityEntry {
  _id: string;
  date: string;
  topic: string;
  notes: string;
  hours: number | null;
  rating: number;
}

interface ActivityFormProps {
  /** Today's saved entry, when the student already checked in. */
  today: ActivityEntry | null;
}

export function ActivityForm({ today }: ActivityFormProps) {
  const router = useRouter();
  const { toast } = useToast();

  const [topic, setTopic] = React.useState(today?.topic ?? "");
  const [notes, setNotes] = React.useState(today?.notes ?? "");
  const [hours, setHours] = React.useState(
    today?.hours !== null && today?.hours !== undefined ? String(today.hours) : ""
  );
  const [rating, setRating] = React.useState<number | null>(
    today?.rating ?? null
  );
  const [pending, setPending] = React.useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTopic = topic.trim();
    if (trimmedTopic.length < 2) {
      toast({
        title: "Add a topic",
        description: "Write what you studied today.",
        variant: "destructive",
      });
      return;
    }

    if (!rating) {
      toast({
        title: "Pick your score",
        description: "Tap 1 to 5 stars for how much you got from today.",
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
        title: today ? "Today's entry updated" : "Activity logged",
        description: "Your trainer can now see today's progress.",
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
      <div className="space-y-2">
        <Label htmlFor="topic">What did you study today?</Label>
        <Input
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          placeholder="e.g. Python functions, prompt patterns, vector databases"
          maxLength={160}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes (optional)</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Anything you built, struggled with, or want to revise."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hours">Hours studied (optional)</Label>
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

      <div className="space-y-2 rounded-lg border border-border/60 bg-muted/20 p-4">
        <Label>How much did you get from today&apos;s session?</Label>
        <p className="text-xs text-muted-foreground">
          1 star means nothing at all, 5 stars means you got it fully.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <StarRatingInput value={rating} onChange={setRating} disabled={pending} />
          <span className="text-sm font-medium text-muted-foreground">
            {rating ? `${rating} / 5` : "Not rated yet"}
          </span>
        </div>
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving…
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            {today ? "Update today's entry" : "Save today's activity"}
          </>
        )}
      </Button>
    </form>
  );
}
