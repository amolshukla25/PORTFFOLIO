import { fail, ok, serverError } from "@/lib/api";
import {
  fromDateKey,
  isValidDateKey,
  todayKey,
  type PeriodKind,
} from "@/lib/dates";
import { buildReport, reportToCsv } from "@/lib/reports";

/**
 * GET /api/admin/reports?period=weekly|monthly&date=YYYY-MM-DD&format=json|csv
 *
 * JSON powers the on-screen preview, CSV is the download.
 */
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);

    const period: PeriodKind =
      url.searchParams.get("period") === "monthly" ? "monthly" : "weekly";

    const date = url.searchParams.get("date") ?? todayKey();
    if (!isValidDateKey(date)) {
      return fail("Invalid date. Use YYYY-MM-DD.", 400);
    }

    const report = await buildReport(period, fromDateKey(date));

    if (url.searchParams.get("format") !== "csv") {
      return ok(report);
    }

    const filename = `activity-report-${report.range.from}-to-${report.range.to}.csv`;

    return new Response(reportToCsv(report), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return serverError(error);
  }
}
