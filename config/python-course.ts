import type { Course } from "./courses";
import { MODULE_1 } from "./python-course/module-1";
import { MODULE_2 } from "./python-course/module-2";
import { MODULE_3 } from "./python-course/module-3";
import { MODULE_4 } from "./python-course/module-4";
import { MODULE_5 } from "./python-course/module-5";
import { MODULE_6 } from "./python-course/module-6";

/**
 * Complete Python Foundations Course — "From Zero to Professional".
 * Every lecture is its own page (/courses/python-basics/<lecture-id>),
 * so each topic can be individually optimized for search engines.
 * Each lesson ships with: teaching notes, runnable code, console output,
 * visualization tips, professional tips & tricks, and practice exercises.
 */
export const PYTHON_COURSE: Course = {
  id: "python-basics",
  title: "Complete Python Course: From Zero to Professional",
  shortDescription:
    "The easiest, most visual Python course — 25 lessons with code walk-throughs, visualization tips, pro tricks, and hands-on practice for every topic.",
  detailedDescription:
    "This is a complete, beginner-friendly Python course designed by Amol Shukla to take you from absolute zero to professional-level Python. Every lesson lives on its own page with easy-to-follow notes, runnable code, real console output, code-visualization tips, professional tricks, and practice exercises with solutions. You will master variables, control flow, data structures, functions, object-oriented programming, files, errors, JSON, testing, and finish by building a complete CLI project.",
  category: ["Python", "Programming Basics", "OOP Concepts", "Data Structures"],
  duration: "30 hrs",
  difficulty: "Beginner",
  rating: 5.0,
  instructor: "Amol Shukla",
  iconName: "code",
  modules: [MODULE_1, MODULE_2, MODULE_3, MODULE_4, MODULE_5, MODULE_6],
};
