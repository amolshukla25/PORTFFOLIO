/**
 * Date helpers for daily activity logs, weekly/monthly reports and to-dos.
 *
 * Day keys are always local calendar days (YYYY-MM-DD) — never UTC — so a
 * log written at 11pm IST belongs to that same day.
 */

export type PeriodKind = "weekly" | "monthly";

export interface DateRange {
  from: string;
  to: string;
  label: string;
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

/** Local calendar day key, e.g. "2026-10-15". */
export function toDateKey(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}

export function todayKey(): string {
  return toDateKey(new Date());
}

/** Parses a YYYY-MM-DD key into a local Date at midnight. */
export function fromDateKey(key: string): Date {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

export function isValidDateKey(key: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(key);
}

/** Monday-based start of week. */
export function startOfWeek(date: Date): Date {
  const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = result.getDay(); // 0 = Sunday
  const diff = day === 0 ? -6 : 1 - day;
  result.setDate(result.getDate() + diff);
  return result;
}

export function endOfWeek(date: Date): Date {
  const start = startOfWeek(date);
  start.setDate(start.getDate() + 6);
  return start;
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function shortDate(key: string): string {
  const date = fromDateKey(key);
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

/** Builds the report range for a period anchored on `anchor` (default: today). */
export function rangeForPeriod(
  period: PeriodKind,
  anchor: Date = new Date()
): DateRange {
  if (period === "weekly") {
    const from = startOfWeek(anchor);
    const to = endOfWeek(anchor);
    return {
      from: toDateKey(from),
      to: toDateKey(to),
      label: `Week of ${shortDate(toDateKey(from))} – ${shortDate(
        toDateKey(to)
      )} ${to.getFullYear()}`,
    };
  }

  const from = startOfMonth(anchor);
  const to = endOfMonth(anchor);
  return {
    from: toDateKey(from),
    to: toDateKey(to),
    label: `${MONTHS[from.getMonth()]} ${from.getFullYear()}`,
  };
}

/** Every day key in an inclusive range, used for "missing log" detection. */
export function eachDayKey(from: string, to: string): string[] {
  const keys: string[] = [];
  const cursor = fromDateKey(from);
  const end = fromDateKey(to);
  while (cursor <= end) {
    keys.push(toDateKey(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return keys;
}

/** Formats an ISO/Date value for display, e.g. "15 Oct 2026". */
export function formatDay(value: string | Date | null | undefined): string {
  if (!value) return "—";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

/** Formats a date-time for display, e.g. "15 Oct 2026, 4:32 pm". */
export function formatDateTime(value: string | Date | null | undefined): string {
  if (!value) return "—";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return "—";
  return `${formatDay(date)}, ${date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  })}`;
}
