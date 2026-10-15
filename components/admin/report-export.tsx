"use client";

import { FileSpreadsheet, FileText, Loader2 } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { formatDay, type PeriodKind } from "@/lib/dates";
import type { ActivityReport } from "@/lib/reports";

interface ReportExportProps {
  report: ActivityReport;
  period: PeriodKind;
  /** Anchor date (YYYY-MM-DD) the report was built for. */
  date: string;
}

/** Reads the last table's final Y so the next table continues below it. */
function lastTableY(target: unknown, fallback: number): number {
  const holder = target as { lastAutoTable?: { finalY?: number } };
  const finalY = holder.lastAutoTable?.finalY;
  return typeof finalY === "number" ? finalY : fallback;
}

export function ReportExport({ report, period, date }: ReportExportProps) {
  const { toast } = useToast();
  const [busy, setBusy] = React.useState<"csv" | "pdf" | null>(null);

  const fileBase = `activity-report-${report.range.from}-to-${report.range.to}`;

  async function downloadCsv() {
    setBusy("csv");
    try {
      const res = await fetch(
        `/api/admin/reports?period=${period}&date=${date}&format=csv`
      );
      if (!res.ok) throw new Error("Could not build the CSV file.");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${fileBase}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);

      toast({
        title: "CSV downloaded",
        description: `${report.range.label} is in your downloads folder.`,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setBusy(null);
    }
  }

  async function downloadPdf() {
    setBusy("pdf");
    try {
      const [{ jsPDF }, { autoTable }] = await Promise.all([
        import("jspdf"),
        import("jspdf-autotable"),
      ]);

      const doc = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      const accent: [number, number, number] = [37, 99, 235];

      doc.setFontSize(16);
      doc.text("Training activity report", 40, 46);

      doc.setFontSize(10);
      doc.text(`${report.range.label} (${period})`, 40, 66);
      doc.text(`Range: ${report.range.from} to ${report.range.to}`, 40, 80);
      doc.text(
        `Students: ${report.summary.students}   Logs: ${report.summary.totalLogs}   Avg score: ${report.summary.avgRating}   Hours: ${report.summary.totalHours}`,
        40,
        94
      );
      doc.text(
        `Assignments: ${report.summary.assignments}   Submissions: ${report.summary.submissions}   Pending: ${report.summary.pendingSubmissions}`,
        40,
        108
      );

      autoTable(doc, {
        startY: 126,
        head: [["Student", "Batch", "Days logged", "Avg score", "Hours", "Last logged"]],
        body: report.students.map((student) => [
          student.name,
          student.batchName,
          String(student.daysLogged),
          student.avgRating ? student.avgRating.toFixed(1) : "-",
          student.totalHours ? student.totalHours.toFixed(1) : "0",
          student.lastLoggedAt ? formatDay(student.lastLoggedAt) : "-",
        ]),
        theme: "grid",
        headStyles: { fillColor: accent, textColor: 255, fontStyle: "bold" },
        styles: { fontSize: 8, cellPadding: 4 },
      });

      const studentsEndY = lastTableY(doc, 150);

      autoTable(doc, {
        startY: studentsEndY + 26,
        head: [
          [
            "Assignment",
            "Batch",
            "Given",
            "Due",
            "Submitted",
            "Expected",
            "Submit %",
          ],
        ],
        body: report.assignments.map((assignment) => [
          assignment.title,
          assignment.batchName,
          formatDay(assignment.givenAt),
          assignment.dueDate ? formatDay(assignment.dueDate) : "-",
          String(assignment.submittedCount),
          String(assignment.expectedCount),
          `${assignment.submitRate}%`,
        ]),
        theme: "grid",
        headStyles: { fillColor: accent, textColor: 255, fontStyle: "bold" },
        styles: { fontSize: 8, cellPadding: 4 },
      });

      doc.save(`${fileBase}.pdf`);

      toast({
        title: "PDF downloaded",
        description: `${report.range.label} is in your downloads folder.`,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={downloadCsv}
        disabled={busy !== null}
      >
        {busy === "csv" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FileSpreadsheet className="mr-2 h-4 w-4" />
        )}
        Download CSV
      </Button>
      <Button
        type="button"
        size="sm"
        onClick={downloadPdf}
        disabled={busy !== null}
      >
        {busy === "pdf" ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FileText className="mr-2 h-4 w-4" />
        )}
        Download PDF
      </Button>
    </div>
  );
}
