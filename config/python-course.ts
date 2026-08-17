import type { Course } from "./courses";
import { ALL_PYTHON_CHALLENGES } from "./python-challenges";
import { MODULE_1 } from "./python-course-modules/module-1";
import { MODULE_2 } from "./python-course-modules/module-2";
import { MODULE_3 } from "./python-course-modules/module-3";
import { MODULE_4 } from "./python-course-modules/module-4";
import { MODULE_5 } from "./python-course-modules/module-5";
import { MODULE_6 } from "./python-course-modules/module-6";

const RAW_MODULES = [MODULE_1, MODULE_2, MODULE_3, MODULE_4, MODULE_5, MODULE_6];

const ENRICHED_MODULES = RAW_MODULES.map((mod) => ({
  ...mod,
  lessons: mod.lessons.map((les) => ({
    ...les,
    practice: ALL_PYTHON_CHALLENGES[les.id] || les.practice || [],
  })),
}));

/**
 * Complete Python Foundations Course — "From Zero to Professional".
 * Every lesson is its own page (/courses/python-basics/<lesson-id>),
 * so each topic can be individually optimized for search engines.
 * Each lesson ships with: teaching notes, runnable code, console output,
 * visualization tips, professional tips & tricks, 20 code quiz questions,
 * and 25 LeetCode-style Python Playground practice challenges.
 */
export const PYTHON_COURSE: Course = {
  id: "python-basics",
  title: "Complete Python Course: From Zero to Professional",
  shortDescription:
    "The easiest, most visual Python course — 25 lessons with code walk-throughs, visualization tips, pro tricks, 20 code quiz questions, and 25 LeetCode-style coding challenges in every lesson.",
  detailedDescription:
    "This is a complete, beginner-friendly Python course designed by Amol Shukla to take you from absolute zero to professional-level Python. Every lesson lives on its own page with easy-to-follow notes, runnable code, real console output, code-visualization tips, professional tricks, 20-question code quiz, and 25 LeetCode-style interactive coding challenges with an in-browser WebAssembly Python judge.",
  category: ["Python", "Programming Basics", "OOP Concepts", "Data Structures"],
  duration: "35 hrs",
  difficulty: "Beginner",
  rating: 5.0,
  instructor: "Amol Shukla",
  iconName: "code",
  modules: ENRICHED_MODULES,
};
