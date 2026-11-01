import { q, type RealLifeModuleConfig } from "./types";

/**
 * Module 6 — City Hospital. 50 problems, all checkable in the browser.
 * Targets are generated from the reference answers by
 * scripts/mysql/gen-real-life-targets.ts.
 */
const questions = [
  // Easy — read, filter, sort
  q("RL-H01", "Easy", "List every doctor with their name and department.", "Select two columns from doctors and sort by doctor_id.", `SELECT doctor_name, department FROM doctors ORDER BY doctor_id;`),
  q("RL-H02", "Easy", "List the 20 oldest patients.", "ORDER BY age DESC, then add patient_id as a tie-breaker.", `SELECT patient_id, patient_name, age FROM patients ORDER BY age DESC, patient_id LIMIT 20;`),
  q("RL-H03", "Easy", "Show the 10 most recent appointments.", "Sort by appointment_date DESC and add appointment_id DESC as the tie-breaker.", `SELECT appointment_id, appointment_date, status FROM appointments ORDER BY appointment_date DESC, appointment_id DESC LIMIT 10;`),
  q("RL-H04", "Easy", "List female patients living in Pune.", "Two conditions joined with AND; sort by patient_id.", `SELECT patient_id, patient_name, age FROM patients WHERE gender = 'Female' AND city = 'Pune' ORDER BY patient_id;`),
  q("RL-H05", "Easy", "List doctors who charge more than 1,500.", "Filter on fee and sort the result.", `SELECT doctor_id, doctor_name, fee FROM doctors WHERE fee > 1500 ORDER BY fee DESC, doctor_id;`),
  q("RL-H06", "Easy", "Show the first 20 cancelled appointments.", "WHERE status, then ORDER BY appointment_id with a LIMIT.", `SELECT appointment_id, patient_id, appointment_date FROM appointments WHERE status = 'cancelled' ORDER BY appointment_id LIMIT 20;`),
  q("RL-H07", "Easy", "List patients who registered during 2025.", "Compare the date range, or use YEAR(registered_on).", `SELECT patient_id, patient_name, registered_on FROM patients WHERE registered_on >= '2025-01-01' AND registered_on < '2026-01-01' ORDER BY patient_id LIMIT 20;`),
  q("RL-H08", "Easy", "List each department once.", "DISTINCT removes repeats; sort alphabetically.", `SELECT DISTINCT department FROM doctors ORDER BY department;`),
  q("RL-H09", "Easy", "Show appointments that were rated 5.", "Filter on rating and sort by appointment_id.", `SELECT appointment_id, doctor_id, rating FROM appointments WHERE rating = 5 ORDER BY appointment_id LIMIT 20;`),
  q("RL-H10", "Easy", "Count all patients.", "One aggregate over the whole table.", `SELECT COUNT(*) AS total_patients FROM patients;`),

  // Medium — lists, ranges, patterns, functions, dates
  q("RL-H11", "Medium", "List patients aged 30 to 40 who live in Mumbai.", "BETWEEN works for ranges; sort by patient_id.", `SELECT patient_id, patient_name, age FROM patients WHERE age BETWEEN 30 AND 40 AND city = 'Mumbai' ORDER BY patient_id LIMIT 20;`),
  q("RL-H12", "Medium", "List Cardiology and Neurology doctors, most expensive first.", "Use IN for the list and sort by fee DESC with a tie-breaker.", `SELECT doctor_name, department, fee FROM doctors WHERE department IN ('Cardiology', 'Neurology') ORDER BY fee DESC, doctor_id;`),
  q("RL-H13", "Medium", "List patients whose first name starts with A.", "LIKE 'A%' matches the start of the stored name.", `SELECT patient_id, patient_name FROM patients WHERE patient_name LIKE 'A%' ORDER BY patient_id LIMIT 20;`),
  q("RL-H14", "Medium", "List patients from Pune, Mumbai or Delhi.", "Use IN instead of three OR conditions.", `SELECT patient_id, patient_name, city FROM patients WHERE city IN ('Pune', 'Mumbai', 'Delhi') ORDER BY patient_id LIMIT 20;`),
  q("RL-H15", "Medium", "List appointments in January 2025.", "Use a half-open date range from 2025-01-01 to 2025-02-01.", `SELECT appointment_id, appointment_date FROM appointments WHERE appointment_date >= '2025-01-01' AND appointment_date < '2025-02-01' ORDER BY appointment_date, appointment_id;`),
  q("RL-H16", "Medium", "Show each patient's name in capitals next to their city.", "UPPER(patient_name) with two aliases.", `SELECT UPPER(patient_name) AS patient, city FROM patients ORDER BY patient_id LIMIT 20;`),
  q("RL-H17", "Medium", "Show each appointment with its year, for the first 20 rows.", "YEAR(appointment_date) AS appointment_year.", `SELECT appointment_id, appointment_date, YEAR(appointment_date) AS appointment_year FROM appointments ORDER BY appointment_id LIMIT 20;`),
  q("RL-H18", "Medium", "Label every patient as 'Child', 'Adult' or 'Senior'.", "CASE WHEN age < 18 THEN ... WHEN age < 60 THEN ... ELSE ... END.", `SELECT patient_id, patient_name, age, CASE WHEN age < 18 THEN 'Child' WHEN age < 60 THEN 'Adult' ELSE 'Senior' END AS age_band FROM patients ORDER BY patient_id LIMIT 20;`),
  q("RL-H19", "Medium", "List appointments that have no diagnosis.", "Missing text is NULL; use IS NULL.", `SELECT appointment_id, status, diagnosis FROM appointments WHERE diagnosis IS NULL ORDER BY appointment_id LIMIT 20;`),
  q("RL-H20", "Medium", "List doctors who joined before 2015.", "Compare joined_on with a date literal.", `SELECT doctor_name, joined_on FROM doctors WHERE joined_on < '2015-01-01' ORDER BY joined_on, doctor_id;`),
  q("RL-H21", "Medium", "Show each patient's name and how many characters it has.", "LENGTH(patient_name) AS name_length.", `SELECT patient_name, LENGTH(patient_name) AS name_length FROM patients ORDER BY patient_id LIMIT 20;`),
  q("RL-H22", "Medium", "Count how many different cities patients come from.", "COUNT(DISTINCT city) returns one number.", `SELECT COUNT(DISTINCT city) AS cities FROM patients;`),

  // Hard — aggregation, grouping, joins
  q("RL-H23", "Hard", "Count appointments by status.", "GROUP BY status and sort by status.", `SELECT status, COUNT(*) AS appointments FROM appointments GROUP BY status ORDER BY status;`),
  q("RL-H24", "Hard", "Show the 10 doctors with the most appointments.", "Join doctors to appointments, GROUP BY doctor, ORDER BY the count.", `SELECT d.doctor_id, d.doctor_name, COUNT(*) AS appointments FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id GROUP BY d.doctor_id, d.doctor_name ORDER BY appointments DESC, d.doctor_id LIMIT 10;`),
  q("RL-H25", "Hard", "Show completed revenue per department.", "Join appointments to doctors, filter status, SUM the amount by department.", `SELECT d.department, SUM(a.amount) AS revenue FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.status = 'completed' GROUP BY d.department ORDER BY revenue DESC, d.department;`),
  q("RL-H26", "Hard", "Show the average consultation fee per department.", "AVG(fee) with GROUP BY department.", `SELECT department, ROUND(AVG(fee), 2) AS avg_fee FROM doctors GROUP BY department ORDER BY avg_fee DESC, department;`),
  q("RL-H27", "Hard", "Show departments with more than 300 appointments.", "Filter groups with HAVING, never WHERE on COUNT.", `SELECT d.department, COUNT(*) AS appointments FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id GROUP BY d.department HAVING COUNT(*) > 300 ORDER BY appointments DESC, d.department;`),
  q("RL-H28", "Hard", "Show the 5 cities with the most patients.", "GROUP BY city, order by the count, LIMIT 5.", `SELECT city, COUNT(*) AS patients FROM patients GROUP BY city ORDER BY patients DESC, city LIMIT 5;`),
  q("RL-H29", "Hard", "Show the 10 best-rated doctors who have at least 20 rated appointments.", "AVG(rating) ignoring NULLs, HAVING COUNT(rating) >= 20.", `SELECT d.doctor_id, d.doctor_name, ROUND(AVG(a.rating), 2) AS avg_rating, COUNT(a.rating) AS ratings FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id GROUP BY d.doctor_id, d.doctor_name HAVING COUNT(a.rating) >= 20 ORDER BY avg_rating DESC, d.doctor_id LIMIT 10;`),
  q("RL-H30", "Hard", "Show completed appointments and revenue per month of 2025.", "DATE_FORMAT(appointment_date, '%Y-%m') AS month, then GROUP BY it.", `SELECT DATE_FORMAT(a.appointment_date, '%Y-%m') AS month, COUNT(*) AS appointments, SUM(a.amount) AS revenue FROM appointments a WHERE a.status = 'completed' AND a.appointment_date >= '2025-01-01' AND a.appointment_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-H31", "Hard", "Count patients by blood group, rarest last.", "GROUP BY blood_group and sort by the count.", `SELECT blood_group, COUNT(*) AS patients FROM patients GROUP BY blood_group ORDER BY patients DESC, blood_group;`),
  q("RL-H32", "Hard", "Show total appointment amount by status.", "One SUM per status group; expect 0 for cancelled and no-show.", `SELECT status, SUM(amount) AS total_amount FROM appointments GROUP BY status ORDER BY status;`),
  q("RL-H33", "Hard", "Show each department's no-show percentage, worst first.", "Use 100 * SUM(CASE WHEN status='no_show' THEN 1 ELSE 0 END) / COUNT(*) and round to one decimal.", `SELECT d.department, ROUND(100 * SUM(CASE WHEN a.status = 'no_show' THEN 1 ELSE 0 END) / COUNT(*), 1) AS no_show_pct FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id GROUP BY d.department ORDER BY no_show_pct DESC, d.department;`),
  q("RL-H34", "Hard", "List doctors who have never had an appointment.", "LEFT JOIN and keep the rows where the appointment id is NULL.", `SELECT d.doctor_id, d.doctor_name, d.department FROM doctors d LEFT JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.appointment_id IS NULL ORDER BY d.doctor_id;`),
  q("RL-H35", "Hard", "Show patients with more than 5 completed appointments.", "Join, filter on status, GROUP BY patient, HAVING COUNT(*) > 5.", `SELECT p.patient_id, p.patient_name, COUNT(*) AS completed_visits FROM patients p JOIN appointments a ON a.patient_id = p.patient_id WHERE a.status = 'completed' GROUP BY p.patient_id, p.patient_name HAVING COUNT(*) > 5 ORDER BY completed_visits DESC, p.patient_id LIMIT 20;`),
  q("RL-H36", "Hard", "Show departments where the average completed bill is above 1,000.", "AVG(amount) per department with HAVING, after filtering completed rows.", `SELECT d.department, ROUND(AVG(a.amount), 2) AS avg_bill FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.status = 'completed' GROUP BY d.department HAVING AVG(a.amount) > 1000 ORDER BY avg_bill DESC, d.department;`),

  // Professional — subqueries, CTEs, windows, reporting
  q("RL-H37", "Professional", "Show patients who saw more than 3 different doctors.", "COUNT(DISTINCT doctor_id) per patient, then HAVING > 3.", `SELECT p.patient_id, p.patient_name, COUNT(DISTINCT a.doctor_id) AS doctors_seen FROM patients p JOIN appointments a ON a.patient_id = p.patient_id WHERE a.status = 'completed' GROUP BY p.patient_id, p.patient_name HAVING COUNT(DISTINCT a.doctor_id) > 3 ORDER BY doctors_seen DESC, p.patient_id LIMIT 20;`),
  q("RL-H38", "Professional", "Show the top 5 doctors by completed revenue.", "Join, filter completed, SUM(amount), order and limit.", `SELECT d.doctor_id, d.doctor_name, d.department, SUM(a.amount) AS revenue FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.status = 'completed' GROUP BY d.doctor_id, d.doctor_name, d.department ORDER BY revenue DESC, d.doctor_id LIMIT 5;`),
  q("RL-H39", "Professional", "Show each patient's most recent appointment date.", "Join and take MAX(appointment_date) per patient.", `SELECT p.patient_id, p.patient_name, MAX(a.appointment_date) AS last_visit FROM patients p JOIN appointments a ON a.patient_id = p.patient_id GROUP BY p.patient_id, p.patient_name ORDER BY last_visit DESC, p.patient_id LIMIT 20;`),
  q("RL-H40", "Professional", "Rank doctors by completed revenue with RANK().", "Add RANK() OVER (ORDER BY SUM(amount) DESC) to the grouped query.", `SELECT d.doctor_name, SUM(a.amount) AS revenue, RANK() OVER (ORDER BY SUM(a.amount) DESC) AS revenue_rank FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.status = 'completed' GROUP BY d.doctor_id, d.doctor_name ORDER BY revenue_rank, d.doctor_id LIMIT 10;`),
  q("RL-H41", "Professional", "Show monthly completed revenue for 2025 with a running total.", "Aggregate in a CTE, then SUM(revenue) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(appointment_date, '%Y-%m') AS month, SUM(amount) AS revenue FROM appointments WHERE status = 'completed' AND appointment_date >= '2025-01-01' AND appointment_date < '2026-01-01' GROUP BY month) SELECT month, revenue, SUM(revenue) OVER (ORDER BY month) AS running_total FROM m ORDER BY month;`),
  q("RL-H42", "Professional", "Show each month of 2025 next to the previous month's revenue and the change.", "LAG(revenue) OVER (ORDER BY month) in a CTE.", `WITH m AS (SELECT DATE_FORMAT(appointment_date, '%Y-%m') AS month, SUM(amount) AS revenue FROM appointments WHERE status = 'completed' AND appointment_date >= '2025-01-01' AND appointment_date < '2026-01-01' GROUP BY month) SELECT month, revenue, LAG(revenue) OVER (ORDER BY month) AS prev_revenue, revenue - LAG(revenue) OVER (ORDER BY month) AS change FROM m ORDER BY month;`),
  q("RL-H43", "Professional", "Show each department's share of completed revenue as a percentage.", "Divide by a scalar subquery of the overall completed revenue.", `SELECT d.department, SUM(a.amount) AS revenue, ROUND(100 * SUM(a.amount) / (SELECT SUM(amount) FROM appointments WHERE status = 'completed'), 1) AS pct_of_total FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.status = 'completed' GROUP BY d.department ORDER BY revenue DESC, d.department;`),
  q("RL-H44", "Professional", "List patients who never had a completed appointment.", "NOT EXISTS with a correlated subquery.", `SELECT p.patient_id, p.patient_name FROM patients p WHERE NOT EXISTS (SELECT 1 FROM appointments a WHERE a.patient_id = p.patient_id AND a.status = 'completed') ORDER BY p.patient_id LIMIT 20;`),
  q("RL-H45", "Professional", "Compare average spend of patients with 3+ visits to the average of everyone.", "Build one CTE per patient, then take AVG twice in the outer query.", `WITH per_patient AS (SELECT patient_id, COUNT(*) AS visits, SUM(amount) AS spend FROM appointments WHERE status = 'completed' GROUP BY patient_id) SELECT ROUND(AVG(spend), 2) AS avg_spend_all, ROUND((SELECT AVG(spend) FROM per_patient WHERE visits >= 3), 2) AS avg_spend_frequent FROM per_patient;`),
  q("RL-H46", "Professional", "List doctors who charge more than their own department's average fee.", "A correlated subquery on doctors x WHERE x.department = d.department.", `SELECT d.doctor_name, d.department, d.fee FROM doctors d WHERE d.fee > (SELECT AVG(x.fee) FROM doctors x WHERE x.department = d.department) ORDER BY d.department, d.fee DESC, d.doctor_id;`),
  q("RL-H47", "Professional", "Show the first appointment of every patient (one row each).", "ROW_NUMBER() OVER (PARTITION BY patient_id ORDER BY appointment_date, appointment_id).", `WITH ranked AS (SELECT a.patient_id, a.appointment_id, a.appointment_date, a.status, ROW_NUMBER() OVER (PARTITION BY a.patient_id ORDER BY a.appointment_date, a.appointment_id) AS rn FROM appointments a) SELECT patient_id, appointment_id, appointment_date, status FROM ranked WHERE rn = 1 ORDER BY patient_id LIMIT 20;`),
  q("RL-H48", "Professional", "Show patients with at least 2 no-shows, most first.", "Filter no_show, GROUP BY patient, HAVING COUNT(*) >= 2.", `SELECT p.patient_id, p.patient_name, COUNT(*) AS no_shows FROM patients p JOIN appointments a ON a.patient_id = p.patient_id WHERE a.status = 'no_show' GROUP BY p.patient_id, p.patient_name HAVING COUNT(*) >= 2 ORDER BY no_shows DESC, p.patient_id LIMIT 20;`),
  q("RL-H49", "Professional", "Build a city dashboard: completed appointments, revenue and average rating.", "Join patients to completed appointments, group by city, aggregate three things.", `SELECT p.city, COUNT(*) AS appointments, SUM(a.amount) AS revenue, ROUND(AVG(a.rating), 2) AS avg_rating FROM patients p JOIN appointments a ON a.patient_id = p.patient_id WHERE a.status = 'completed' GROUP BY p.city ORDER BY revenue DESC, p.city;`),
  q("RL-H50", "Professional", "Show each department's busiest month in 2025.", "Aggregate counts by department and month, rank with ROW_NUMBER(), keep rn = 1.", `WITH m AS (SELECT d.department, DATE_FORMAT(a.appointment_date, '%Y-%m') AS month, COUNT(*) AS appointments FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.appointment_date >= '2025-01-01' AND a.appointment_date < '2026-01-01' GROUP BY d.department, month), r AS (SELECT department, month, appointments, ROW_NUMBER() OVER (PARTITION BY department ORDER BY appointments DESC, month) AS rn FROM m) SELECT department, month, appointments FROM r WHERE rn = 1 ORDER BY department;`),
];

export const hospitalModule: RealLifeModuleConfig = {
  number: 6,
  slug: "real-life-hospital",
  shortTitle: "Real life: hospital records",
  title: "Real life database practice: hospital records (50 SQL problems)",
  summary: "Practise 50 SQL problems on a 2,000-appointment hospital database — filtering, joins, grouping and window functions, checked in your browser.",
  dataset: "hospital",
  context:
    "City Hospital is a fictional multi-speciality hospital. Patients register once, doctors sit in six departments, and every visit becomes one appointment that is completed, cancelled or missed. The appointments table holds 2,000 rows across two years, so the answers are too big to eyeball — you have to let SQL count for you.",
  tables: [
    { name: "patients", grain: "one registered patient", columns: "patient_id, patient_name, gender, age, city, phone, registered_on, blood_group" },
    { name: "doctors", grain: "one doctor", columns: "doctor_id, doctor_name, department, city, fee, joined_on" },
    { name: "appointments", grain: "one visit to one doctor", columns: "appointment_id, patient_id, doctor_id, appointment_date, status, diagnosis, amount, rating" },
  ],
  outcomes: [
    "Filter and sort 2,000 appointments without scrolling the grid",
    "Join appointments to patients and doctors without double counting",
    "Report per department and per month with GROUP BY and HAVING",
    "Use window functions for rankings, running totals and month-over-month change",
  ],
  quickAnswer: {
    question: "What does the hospital practice database contain?",
    answer:
      "Three related tables: 600 patients, 60 doctors in six departments, and 2,000 appointments that link a patient to a doctor with a date, status, diagnosis, amount and rating. Every practice problem runs on it in the browser, with the database already selected.",
  },
  guided: {
    heading: "Guided walkthrough: revenue by department",
    intro: "Start from the appointment amount, attach the doctor to get its department, keep only completed visits and add the money up per department.",
    steps: [
      "One row of `appointments` is one visit, and it stores the amount charged.",
      "One row of `doctors` is one doctor and it holds the department, so join on `doctor_id`.",
      "Cancelled and no-show appointments have amount 0 — filter `status = 'completed'` so the average is honest.",
      "Group by department, sum the amount, and sort the result so the biggest earner is first.",
    ],
    sql: "SELECT d.department, COUNT(*) AS visits, SUM(a.amount) AS revenue, ROUND(AVG(a.amount), 2) AS avg_bill FROM doctors d JOIN appointments a ON a.doctor_id = d.doctor_id WHERE a.status = 'completed' GROUP BY d.department ORDER BY revenue DESC, d.department;",
    explain:
      "The join never duplicates a row because a visit points to exactly one doctor. Filtering before grouping keeps the aggregates to real revenue, and the ORDER BY makes the report readable at a glance.",
  },
  teaches: ["SQL practice", "hospital database", "JOIN", "GROUP BY", "HAVING", "window functions", "data analysis"],
  questions,
  quiz: [
    {
      id: "RL-H-Q1",
      question: "Why does filtering `status = 'completed'` happen before the SUM?",
      options: ["Because WHERE runs after GROUP BY", "Because cancelled visits carry amount 0 and must not inflate the per-visit average", "Because SUM cannot ignore NULLs", "Because GROUP BY needs a WHERE clause"],
      correctIndex: 1,
      explanation: "WHERE keeps the rows that take part in the aggregation. Completed visits are the ones with real revenue, so filtering first gives an honest count and average.",
    },
    {
      id: "RL-H-Q2",
      question: "A visit links to one patient and one doctor. What happens if you join patients and doctors in the same query without grouping?",
      options: ["Nothing, the row count stays the same", "One row per appointment is preserved, but grouping by a wide set of columns can multiply totals if another table is joined too", "MySQL refuses the query", "The amount column is summed automatically"],
      correctIndex: 1,
      explanation: "These joins are one-to-one from the visit, so rows are not duplicated. Add a one-to-many table (like order lines) and totals would multiply — that is why grain matters before every join.",
    },
    {
      id: "RL-H-Q3",
      question: "Which clause filters groups rather than rows?",
      options: ["WHERE", "HAVING", "LIMIT", "ORDER BY"],
      correctIndex: 1,
      explanation: "HAVING runs after GROUP BY, so it can test an aggregate such as COUNT(*) > 300.",
    },
  ],
  mistakes: [
    {
      wrong: "WHERE COUNT(*) > 5",
      why: "WHERE runs before grouping, so an aggregate is not allowed there (MySQL error 1111).",
      fix: "Move the condition to HAVING COUNT(*) > 5.",
    },
    {
      wrong: "JOIN doctors without ON, then SUM(amount)",
      why: "A missing join condition pairs every visit with every doctor and multiplies revenue.",
      fix: "Always join with ON a.doctor_id = d.doctor_id and check COUNT(*) before trusting SUM.",
    },
    {
      wrong: "Assuming a NULL rating is a zero rating",
      why: "Only completed visits are rated; AVG and COUNT ignore NULL correctly, but AVG(rating) over all rows is not an average of visits.",
      fix: "Filter to completed rows, or use COUNT(rating) to see how many ratings the average is based on.",
    },
  ],
  faq: [
    {
      q: "Do I need to install MySQL and import this data?",
      a: "No. The code arena loads the hospital database in your browser and preselects it for every problem. The .sql download is there for when you want to run the same queries in Workbench.",
    },
    {
      q: "Are the answers checked automatically?",
      a: "Yes. Your query and the reference answer run on fresh copies of the same 2,000 rows and the results are compared row by row, so any correct query is accepted.",
    },
    {
      q: "Is the hospital data real?",
      a: "No. It is fictional, generated from a fixed seed so every learner sees exactly the same rows and the same answers.",
    },
  ],
};
