import { q, type RealLifeModuleConfig } from "./types";

/**
 * Module 9 — City College. 50 problems, all checkable in the browser.
 * Targets are generated from the reference answers by
 * scripts/mysql/gen-real-life-targets.ts.
 */
const questions = [
  // Easy
  q("RL-C01", "Easy", "List students enrolled in BSc Data Science.", "Filter on program and sort by student_id.", `SELECT student_id, student_name, admission_year FROM students WHERE program = 'BSc Data Science' ORDER BY student_id LIMIT 20;`),
  q("RL-C02", "Easy", "List courses worth 5 credits.", "Filter credits and sort by course_id.", `SELECT course_id, course_name, credits FROM courses WHERE credits = 5 ORDER BY course_id;`),
  q("RL-C03", "Easy", "Show the 20 highest exam results.", "ORDER BY marks DESC with result_id as tie-breaker.", `SELECT result_id, student_id, marks FROM exam_results ORDER BY marks DESC, result_id LIMIT 20;`),
  q("RL-C04", "Easy", "List every program once.", "DISTINCT on program.", `SELECT DISTINCT program FROM students ORDER BY program;`),
  q("RL-C05", "Easy", "List students admitted in 2025.", "Filter admission_year.", `SELECT student_id, student_name, program FROM students WHERE admission_year = 2025 ORDER BY student_id LIMIT 20;`),
  q("RL-C06", "Easy", "List Data Science department courses.", "Filter department.", `SELECT course_id, course_name FROM courses WHERE department = 'Data Science' ORDER BY course_id;`),
  q("RL-C07", "Easy", "Show the first 20 results with 90 marks or more.", "Filter marks >= 90 and sort by marks.", `SELECT result_id, course_id, marks FROM exam_results WHERE marks >= 90 ORDER BY marks DESC, result_id LIMIT 20;`),
  q("RL-C08", "Easy", "List enrollments for semester 2025-S1.", "Filter semester and sort by enrollment_id.", `SELECT enrollment_id, student_id, course_id FROM enrollments WHERE semester = '2025-S1' ORDER BY enrollment_id LIMIT 20;`),
  q("RL-C09", "Easy", "Count all students.", "One COUNT.", `SELECT COUNT(*) AS students FROM students;`),
  q("RL-C10", "Easy", "List students from Chennai.", "One city filter.", `SELECT student_id, student_name, program FROM students WHERE city = 'Chennai' ORDER BY student_id LIMIT 20;`),

  // Medium
  q("RL-C11", "Medium", "List students admitted between 2020 and 2022.", "BETWEEN works on years too.", `SELECT student_id, student_name, admission_year FROM students WHERE admission_year BETWEEN 2020 AND 2022 ORDER BY student_id LIMIT 20;`),
  q("RL-C12", "Medium", "List courses in Data Science or Computer Science.", "Use IN for the department list.", `SELECT course_id, course_name, department FROM courses WHERE department IN ('Data Science', 'Computer Science') ORDER BY course_id;`),
  q("RL-C13", "Medium", "List students whose name starts with P.", "LIKE 'P%'.", `SELECT student_id, student_name FROM students WHERE student_name LIKE 'P%' ORDER BY student_id LIMIT 20;`),
  q("RL-C14", "Medium", "List exam results from 2024.", "Half-open date range on exam_date.", `SELECT result_id, exam_date, marks FROM exam_results WHERE exam_date >= '2024-01-01' AND exam_date < '2025-01-01' ORDER BY result_id LIMIT 20;`),
  q("RL-C15", "Medium", "Show each result's exam year.", "YEAR(exam_date) AS exam_year.", `SELECT result_id, exam_date, YEAR(exam_date) AS exam_year FROM exam_results ORDER BY result_id LIMIT 20;`),
  q("RL-C16", "Medium", "Label each result as Pass or Fail.", "CASE WHEN marks >= 50 THEN 'Pass' ELSE 'Fail' END.", `SELECT result_id, marks, CASE WHEN marks >= 50 THEN 'Pass' ELSE 'Fail' END AS outcome FROM exam_results ORDER BY result_id LIMIT 20;`),
  q("RL-C17", "Medium", "List courses whose name contains Analytics.", "LIKE '%Analytics%'.", `SELECT course_id, course_name FROM courses WHERE course_name LIKE '%Analytics%' ORDER BY course_id;`),
  q("RL-C18", "Medium", "Show each student's name in capitals and their program.", "UPPER(student_name).", `SELECT UPPER(student_name) AS student, program FROM students ORDER BY student_id LIMIT 20;`),
  q("RL-C19", "Medium", "List enrollments before 2024-07-01.", "Compare enrolled_on with the date literal.", `SELECT enrollment_id, enrolled_on FROM enrollments WHERE enrolled_on < '2024-07-01' ORDER BY enrolled_on, enrollment_id LIMIT 20;`),
  q("RL-C20", "Medium", "Count how many different departments run courses.", "COUNT(DISTINCT department).", `SELECT COUNT(DISTINCT department) AS departments FROM courses;`),
  q("RL-C21", "Medium", "Show each course name in capitals with its credits.", "UPPER(course_name).", `SELECT UPPER(course_name) AS course, credits FROM courses ORDER BY course_id;`),
  q("RL-C22", "Medium", "List results between 40 and 50 marks.", "BETWEEN is inclusive.", `SELECT result_id, marks FROM exam_results WHERE marks BETWEEN 40 AND 50 ORDER BY marks, result_id LIMIT 20;`),

  // Hard
  q("RL-C23", "Hard", "Count exam results per grade.", "GROUP BY grade.", `SELECT grade, COUNT(*) AS results FROM exam_results GROUP BY grade ORDER BY results DESC, grade;`),
  q("RL-C24", "Hard", "Show the 10 courses with the highest average marks.", "GROUP BY course, AVG(marks), ordered and limited.", `SELECT c.course_id, c.course_name, ROUND(AVG(e.marks), 2) AS avg_marks FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.course_id, c.course_name ORDER BY avg_marks DESC, c.course_id LIMIT 10;`),
  q("RL-C25", "Hard", "Count students per program.", "GROUP BY program.", `SELECT program, COUNT(*) AS students FROM students GROUP BY program ORDER BY students DESC, program;`),
  q("RL-C26", "Hard", "List courses with more than 40 exam results.", "GROUP BY course with HAVING COUNT(*) > 40.", `SELECT c.course_id, c.course_name, COUNT(*) AS results FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.course_id, c.course_name HAVING COUNT(*) > 40 ORDER BY results DESC, c.course_id;`),
  q("RL-C27", "Hard", "Show the average marks per department.", "Join exam_results to courses, then group by department.", `SELECT c.department, ROUND(AVG(e.marks), 2) AS avg_marks FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.department ORDER BY avg_marks DESC, c.department;`),
  q("RL-C28", "Hard", "Show the pass rate per course, best first.", "100 * SUM(CASE WHEN marks >= 50) / COUNT(*), grouped by course.", `SELECT c.course_name, ROUND(100 * SUM(CASE WHEN e.marks >= 50 THEN 1 ELSE 0 END) / COUNT(*), 1) AS pass_pct FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.course_id, c.course_name ORDER BY pass_pct DESC, c.course_id LIMIT 20;`),
  q("RL-C29", "Hard", "Count enrollments per semester.", "GROUP BY semester, sorted.", `SELECT semester, COUNT(*) AS enrollments FROM enrollments GROUP BY semester ORDER BY semester;`),
  q("RL-C30", "Hard", "Count exam results per month of 2025.", "DATE_FORMAT(exam_date, '%Y-%m') grouped.", `SELECT DATE_FORMAT(exam_date, '%Y-%m') AS month, COUNT(*) AS results FROM exam_results WHERE exam_date >= '2025-01-01' AND exam_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-C31", "Hard", "List students with more than 6 exam results.", "GROUP BY student with HAVING COUNT(*) > 6.", `SELECT s.student_id, s.student_name, COUNT(*) AS results FROM students s JOIN exam_results e ON e.student_id = s.student_id GROUP BY s.student_id, s.student_name HAVING COUNT(*) > 6 ORDER BY results DESC, s.student_id LIMIT 20;`),
  q("RL-C32", "Hard", "List courses with no enrollments.", "LEFT JOIN and keep NULL enrollment ids.", `SELECT c.course_id, c.course_name FROM courses c LEFT JOIN enrollments e ON e.course_id = c.course_id WHERE e.enrollment_id IS NULL ORDER BY c.course_id;`),
  q("RL-C33", "Hard", "Show the average marks per program.", "Join students to results, group by program.", `SELECT s.program, ROUND(AVG(e.marks), 2) AS avg_marks FROM students s JOIN exam_results e ON e.student_id = s.student_id GROUP BY s.program ORDER BY avg_marks DESC, s.program;`),
  q("RL-C34", "Hard", "Show departments whose average marks are above 65.", "AVG per department with HAVING > 65.", `SELECT c.department, ROUND(AVG(e.marks), 2) AS avg_marks FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.department HAVING AVG(e.marks) > 65 ORDER BY avg_marks DESC, c.department;`),
  q("RL-C35", "Hard", "Show the 5 best students by average marks, with at least 5 results.", "HAVING COUNT(*) >= 5, order by AVG.", `SELECT s.student_id, s.student_name, ROUND(AVG(e.marks), 2) AS avg_marks, COUNT(*) AS results FROM students s JOIN exam_results e ON e.student_id = s.student_id GROUP BY s.student_id, s.student_name HAVING COUNT(*) >= 5 ORDER BY avg_marks DESC, s.student_id LIMIT 5;`),
  q("RL-C36", "Hard", "Count results per grade inside each department.", "Group by department and grade; sort both.", `SELECT c.department, e.grade, COUNT(*) AS results FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.department, e.grade ORDER BY c.department, results DESC, e.grade;`),

  // Professional
  q("RL-C37", "Professional", "List students enrolled in more than 3 courses.", "COUNT(DISTINCT course_id) per student with HAVING > 3.", `SELECT s.student_id, s.student_name, COUNT(DISTINCT e.course_id) AS courses FROM students s JOIN enrollments e ON e.student_id = s.student_id GROUP BY s.student_id, s.student_name HAVING COUNT(DISTINCT e.course_id) > 3 ORDER BY courses DESC, s.student_id LIMIT 20;`),
  q("RL-C38", "Professional", "Rank students by average marks.", "RANK() OVER (ORDER BY AVG(marks) DESC) in a CTE.", `WITH per AS (SELECT s.student_id, s.student_name, AVG(e.marks) AS avg_marks FROM students s JOIN exam_results e ON e.student_id = s.student_id GROUP BY s.student_id, s.student_name) SELECT student_name, ROUND(avg_marks, 2) AS avg_marks, RANK() OVER (ORDER BY avg_marks DESC) AS rnk FROM per ORDER BY rnk, student_id LIMIT 20;`),
  q("RL-C39", "Professional", "Show 2025 results per month with a running total.", "Aggregate in a CTE, then SUM(...) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(exam_date, '%Y-%m') AS month, COUNT(*) AS results FROM exam_results WHERE exam_date >= '2025-01-01' AND exam_date < '2026-01-01' GROUP BY month) SELECT month, results, SUM(results) OVER (ORDER BY month) AS running_total FROM m ORDER BY month;`),
  q("RL-C40", "Professional", "Show the month-over-month change in exam results for 2025.", "LAG(results) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(exam_date, '%Y-%m') AS month, COUNT(*) AS results FROM exam_results WHERE exam_date >= '2025-01-01' AND exam_date < '2026-01-01' GROUP BY month) SELECT month, results, LAG(results) OVER (ORDER BY month) AS prev_results, results - LAG(results) OVER (ORDER BY month) AS change FROM m ORDER BY month;`),
  q("RL-C41", "Professional", "List courses whose average marks beat their department's average.", "Two CTEs: course averages and department averages, then join.", `WITH course_avg AS (SELECT c.course_id, c.course_name, c.department, AVG(e.marks) AS avg_marks FROM courses c JOIN exam_results e ON e.course_id = c.course_id GROUP BY c.course_id, c.course_name, c.department), dept_avg AS (SELECT department, AVG(avg_marks) AS dept_avg FROM course_avg GROUP BY department) SELECT ca.course_name, ca.department, ROUND(ca.avg_marks, 2) AS avg_marks, ROUND(da.dept_avg, 2) AS dept_avg FROM course_avg ca JOIN dept_avg da ON da.department = ca.department WHERE ca.avg_marks > da.dept_avg ORDER BY ca.department, ca.avg_marks DESC LIMIT 20;`),
  q("RL-C42", "Professional", "List students who have failed at least one exam.", "EXISTS over exam_results with grade = 'F'.", `SELECT s.student_id, s.student_name FROM students s WHERE EXISTS (SELECT 1 FROM exam_results e WHERE e.student_id = s.student_id AND e.grade = 'F') ORDER BY s.student_id LIMIT 20;`),
  q("RL-C43", "Professional", "Show each student's first exam date.", "MIN(exam_date) per student.", `SELECT s.student_id, s.student_name, MIN(e.exam_date) AS first_exam FROM students s JOIN exam_results e ON e.student_id = s.student_id GROUP BY s.student_id, s.student_name ORDER BY first_exam DESC, s.student_id LIMIT 20;`),
  q("RL-C44", "Professional", "Show each department's share of all enrollments.", "Group enrollments by department, divide by the scalar total.", `SELECT c.department, COUNT(*) AS enrollments, ROUND(100 * COUNT(*) / (SELECT COUNT(*) FROM enrollments), 1) AS pct FROM enrollments e JOIN courses c ON c.course_id = e.course_id GROUP BY c.department ORDER BY enrollments DESC, c.department;`),
  q("RL-C45", "Professional", "List students whose average marks beat the overall average.", "Per-student CTE, then HAVING AVG > scalar subquery.", `WITH per AS (SELECT student_id, AVG(marks) AS avg_marks FROM exam_results GROUP BY student_id) SELECT s.student_id, s.student_name, ROUND(p.avg_marks, 2) AS avg_marks FROM per p JOIN students s ON s.student_id = p.student_id WHERE p.avg_marks > (SELECT AVG(marks) FROM exam_results) ORDER BY p.avg_marks DESC, s.student_id LIMIT 20;`),
  q("RL-C46", "Professional", "Build a semester dashboard: enrollments, results and average marks.", "Join enrollments to courses and results by student, month? Use a per-semester CTE.", `WITH en AS (SELECT semester, COUNT(*) AS enrollments FROM enrollments GROUP BY semester), res AS (SELECT e.semester, COUNT(*) AS results, ROUND(AVG(r.marks), 2) AS avg_marks FROM enrollments e JOIN exam_results r ON r.student_id = e.student_id GROUP BY e.semester) SELECT en.semester, en.enrollments, res.results, res.avg_marks FROM en LEFT JOIN res ON res.semester = en.semester ORDER BY en.semester;`),
  q("RL-C47", "Professional", "Show the best student in each department by average marks.", "Rank students per department with ROW_NUMBER and keep rn = 1.", `WITH per AS (SELECT s.student_id, s.student_name, c.department, AVG(e.marks) AS avg_marks FROM students s JOIN exam_results e ON e.student_id = s.student_id JOIN courses c ON c.course_id = e.course_id GROUP BY s.student_id, s.student_name, c.department), r AS (SELECT department, student_name, avg_marks, ROW_NUMBER() OVER (PARTITION BY department ORDER BY avg_marks DESC, student_id) AS rn FROM per) SELECT department, student_name, ROUND(avg_marks, 2) AS avg_marks FROM r WHERE rn = 1 ORDER BY department;`),
  q("RL-C48", "Professional", "List courses that have never been examined.", "NOT EXISTS against exam_results.", `SELECT c.course_id, c.course_name FROM courses c WHERE NOT EXISTS (SELECT 1 FROM exam_results e WHERE e.course_id = c.course_id) ORDER BY c.course_id;`),
  q("RL-C49", "Professional", "Show the grade distribution per program.", "Join students to results, group by program and grade.", `SELECT s.program, e.grade, COUNT(*) AS results FROM students s JOIN exam_results e ON e.student_id = s.student_id GROUP BY s.program, e.grade ORDER BY s.program, e.grade;`),
  q("RL-C50", "Professional", "Show the 2025 pass rate per month.", "Group by month and compute 100 * pass / total.", `SELECT DATE_FORMAT(exam_date, '%Y-%m') AS month, ROUND(100 * SUM(CASE WHEN marks >= 50 THEN 1 ELSE 0 END) / COUNT(*), 1) AS pass_pct FROM exam_results WHERE exam_date >= '2025-01-01' AND exam_date < '2026-01-01' GROUP BY month ORDER BY month;`),
];

export const collegeModule: RealLifeModuleConfig = {
  number: 9,
  slug: "real-life-college",
  shortTitle: "Real life: college records",
  title: "Real life database practice: college records (50 SQL problems)",
  summary: "Practise 50 SQL problems on a 2,000-result college database — students, courses, enrolments, marks and pass rates, checked in your browser.",
  dataset: "college",
  context:
    "City College is a fictional institution with 400 students across five programs, 40 courses in five departments, 1,200 enrolments and 2,000 exam results. Grades range from A+ to F, and marks are stored as whole numbers so pass rates are easy to reason about.",
  tables: [
    { name: "students", grain: "one student", columns: "student_id, student_name, city, program, admission_year, email" },
    { name: "courses", grain: "one course", columns: "course_id, course_name, department, credits, instructor" },
    { name: "enrollments", grain: "one student in one course for a semester", columns: "enrollment_id, student_id, course_id, semester, enrolled_on" },
    { name: "exam_results", grain: "one student's result in one exam", columns: "result_id, student_id, course_id, exam_date, marks, grade" },
  ],
  outcomes: [
    "Filter and sort 2,000 exam results",
    "Report pass rates and grade distributions with CASE and GROUP BY",
    "Join students to courses and results without mixing up grains",
    "Rank students and courses with CTEs and window functions",
  ],
  quickAnswer: {
    question: "What is in the college practice database?",
    answer:
      "Four tables: 400 students, 40 courses, 1,200 enrollments and 2,000 exam results with marks and a letter grade. Enrollments answer 'who is taking what' while exam_results answer 'how they did', so joins must name which one they mean. The database is already selected in every problem.",
  },
  guided: {
    heading: "Guided walkthrough: pass rate per department",
    intro: "A result belongs to a course, and a course belongs to a department — two hops to answer one management question.",
    steps: [
      "Start from `exam_results`, where one row is one student's result.",
      "Join `courses` on course_id to reach the department.",
      "Turn each result into 1 if marks ≥ 50, otherwise 0, and average it.",
      "Group by department, multiply by 100 and round to one decimal.",
    ],
    sql: "SELECT c.department, COUNT(*) AS results, ROUND(100 * SUM(CASE WHEN e.marks >= 50 THEN 1 ELSE 0 END) / COUNT(*), 1) AS pass_pct FROM exam_results e JOIN courses c ON c.course_id = e.course_id GROUP BY c.department ORDER BY pass_pct DESC, c.department;",
    explain:
      "CASE produces a 1 or 0 per result, so SUM counts passes and dividing by COUNT(*) gives the share. Keeping the count in the output shows how much evidence the percentage is based on.",
  },
  teaches: ["SQL practice", "education database", "JOIN", "CASE", "GROUP BY", "window functions", "reporting"],
  questions,
  quiz: [
    {
      id: "RL-C-Q1",
      question: "What is the difference between the enrollments and exam_results tables?",
      options: ["They hold the same rows", "Enrollments record who registered; results record how they scored in an exam", "Results are only for failed students", "Enrollments hold marks"],
      correctIndex: 1,
      explanation: "A student can enrol without an exam result yet, and results can repeat. Pick the table that matches the question's grain.",
    },
    {
      id: "RL-C-Q2",
      question: "How do you compute a pass rate?",
      options: ["AVG(marks)", "SUM(CASE WHEN marks >= 50 THEN 1 ELSE 0 END) / COUNT(*) * 100", "COUNT(marks) / 100", "MAX(marks) / COUNT(*)"],
      correctIndex: 1,
      explanation: "Turn each row into 1 or 0 and average it, then scale to a percentage.",
    },
    {
      id: "RL-C-Q3",
      question: "Joining exam_results to enrollments on student_id alone gives what?",
      options: ["One row per result", "Every result paired with every enrolment of that student — a cartesian product per student", "An error", "The same as joining on both keys"],
      correctIndex: 1,
      explanation: "A join needs every key that defines the relationship. On student_id alone, each result matches all of that student's enrolments.",
    },
  ],
  mistakes: [
    {
      wrong: "GROUP BY department while selecting course_name",
      why: "ONLY_FULL_GROUP_BY rejects columns that are neither grouped nor aggregated.",
      fix: "Group by both columns, or rank inside a CTE and select the winner outside.",
    },
    {
      wrong: "AVG(CASE WHEN marks >= 50 THEN 1 ELSE 0 END) * 100 written as SUM(...) / COUNT(1)",
      why: "Integer division can truncate; MySQL returns a decimal here, but other engines may not.",
      fix: "Multiply by 100 before dividing, or let AVG handle the fraction as in the reference answers.",
    },
    {
      wrong: "Assuming every enrollment has an exam result",
      why: "Enrollments and results are separate facts; counting one does not count the other.",
      fix: "Choose the table that matches the question and use LEFT JOIN when you need both sides.",
    },
  ],
  faq: [
    {
      q: "Do I need to install MySQL and import this data?",
      a: "No. The code arena loads the college database in your browser and preselects it for every problem. Download the .sql script to run the same queries in Workbench.",
    },
    {
      q: "Are the answers checked automatically?",
      a: "Yes. Your query and the reference answer run on fresh copies of the same rows and the results are compared row by row, so any correct query is accepted.",
    },
    {
      q: "Is the college data real?",
      a: "No. It is fictional and generated from a fixed seed so every learner sees the same rows and the same expected answers.",
    },
  ],
};
