import type { Course } from "./courses";
import { MYSQL_COURSE_FACTS, MYSQL_MODULES, MYSQL_SYLLABUS } from "./mysql/syllabus";

/**
 * Catalogue entry for the MySQL course. Built only from the small generated
 * syllabus so the shared client bundle never carries lesson prose; the lesson
 * page loads the full lesson from config/mysql on the server.
 */
const hours = MYSQL_COURSE_FACTS.hours;

export const MYSQL_COURSE: Course = {
  id: "mysql",
  title: "MySQL: Practical SQL from Beginner to Professional",
  shortDescription: `Learn SQL on a ready-made retail database with ${MYSQL_COURSE_FACTS.problems} practice problems you can run and check in the browser.`,
  detailedDescription: `Start from what a database is and finish with an audited sales report. ${MYSQL_COURSE_FACTS.lessons} lessons in ${MYSQL_COURSE_FACTS.modules} modules cover SELECT, filtering, functions, GROUP BY, joins, subqueries, CTEs, UNION, window functions, table design, transactions, views and indexes. Every lesson has worked examples with real MySQL output, a guided exercise, ${MYSQL_COURSE_FACTS.problems} practice problems in total with automatic checking, and a short quiz. No prior SQL or programming needed.`,
  category: ["MySQL", "SQL", "Databases", "Data Analysis"],
  duration: `${hours} hrs`,
  difficulty: "Beginner",
  instructor: "Amol Shukla",
  iconName: "database",
  modules: MYSQL_MODULES.map((m) => ({
    id: `mysql-module-${m.number}`,
    title: `Module ${m.number}: ${m.title}`,
    description: m.description,
    lessons: MYSQL_SYLLABUS.filter((l) => l.module === m.number).map((l) => ({
      id: l.slug,
      title: l.title,
      shortDescription: l.summary,
      duration: `${l.minutes} mins`,
      readingTime: `${Math.max(3, Math.round(l.words / 200))} mins read`,
      contentMarkdown: "",
      codeSnippet: "",
      codeLanguage: "sql",
      codeOutput: "",
    })),
  })),
};
