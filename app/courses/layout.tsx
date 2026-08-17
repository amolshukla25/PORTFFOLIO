import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Amol Shukla Academy",
    default: "AI Tools & Technology Courses by Amol Shukla",
  },
  description:
    "Master AI Tools & Technology, Large Language Models (LLM), Prompt Engineering, and Python engineering with comprehensive courses curated by Amol Shukla.",
  authors: [{ name: "Amol Shukla" }],
  keywords: [
    "Amol Shukla",
    "Amol Shukla Courses",
    "Amol Shukla AI",
    "Amol Shukla LLM",
    "Prompt Engineering Amol Shukla",
    "Python Course Amol Shukla",
    "AI Tools and Technology",
    "Generative AI Masterclass",
  ],
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-ice-500 selection:text-white">
      <div className="flex-1 w-full">{children}</div>

      <footer className="border-t border-ink-3 bg-ink-0/90 py-10 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ice-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ice-400" />
            <p>
              © {new Date().getFullYear()} <strong>Amol Shukla</strong>. All rights reserved.
            </p>
          </div>
          <p className="text-center sm:text-right">
            AI Tools & Technology · Prompt Engineering · LLM Architecture · Python Systems
          </p>
        </div>
      </footer>
    </div>
  );
}
