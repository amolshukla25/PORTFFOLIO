import { q, type RealLifeModuleConfig } from "./types";

/**
 * Module 11 — Streaming Service. 50 problems, all checkable in the browser.
 * Targets are generated from the reference answers by
 * scripts/mysql/gen-real-life-targets.ts.
 */
const questions = [
  // Easy
  q("RL-S01", "Easy", "List movies released after 2020.", "Filter kind and release_year.", `SELECT title_id, title_name, release_year FROM titles WHERE kind = 'movie' AND release_year > 2020 ORDER BY title_id LIMIT 20;`),
  q("RL-S02", "Easy", "List active users in India.", "Two filters: status and country.", `SELECT user_id, user_name, plan_id FROM users WHERE status = 'active' AND country = 'India' ORDER BY user_id LIMIT 20;`),
  q("RL-S03", "Easy", "List plans from cheapest to most expensive.", "ORDER BY monthly_price.", `SELECT plan_id, plan_name, monthly_price FROM plans ORDER BY monthly_price, plan_id;`),
  q("RL-S04", "Easy", "Show the first 20 watch sessions on TV.", "Filter device = 'tv'.", `SELECT session_id, watch_date, minutes_watched FROM watch_sessions WHERE device = 'tv' ORDER BY session_id LIMIT 20;`),
  q("RL-S05", "Easy", "List Drama titles.", "Filter genre.", `SELECT title_id, title_name FROM titles WHERE genre = 'Drama' ORDER BY title_id LIMIT 20;`),
  q("RL-S06", "Easy", "List users on plan 3.", "Filter plan_id.", `SELECT user_id, user_name, status FROM users WHERE plan_id = 3 ORDER BY user_id LIMIT 20;`),
  q("RL-S07", "Easy", "Show the 20 longest watch sessions.", "ORDER BY minutes_watched DESC.", `SELECT session_id, minutes_watched, device FROM watch_sessions ORDER BY minutes_watched DESC, session_id LIMIT 20;`),
  q("RL-S08", "Easy", "List every genre once.", "DISTINCT on genre.", `SELECT DISTINCT genre FROM titles ORDER BY genre;`),
  q("RL-S09", "Easy", "Count all watch sessions.", "COUNT(*) on watch_sessions.", `SELECT COUNT(*) AS sessions FROM watch_sessions;`),
  q("RL-S10", "Easy", "List titles rated A.", "Filter age_rating.", `SELECT title_id, title_name, release_year FROM titles WHERE age_rating = 'A' ORDER BY title_id LIMIT 20;`),

  // Medium
  q("RL-S11", "Medium", "List movies released between 2010 and 2020.", "BETWEEN on release_year plus the kind filter.", `SELECT title_id, title_name, release_year FROM titles WHERE kind = 'movie' AND release_year BETWEEN 2010 AND 2020 ORDER BY release_year, title_id LIMIT 20;`),
  q("RL-S12", "Medium", "List paused and cancelled users.", "Use IN for the two statuses.", `SELECT user_id, user_name, status FROM users WHERE status IN ('paused', 'cancelled') ORDER BY user_id LIMIT 20;`),
  q("RL-S13", "Medium", "List users whose name starts with S.", "LIKE 'S%'.", `SELECT user_id, user_name FROM users WHERE user_name LIKE 'S%' ORDER BY user_id LIMIT 20;`),
  q("RL-S14", "Medium", "List watch sessions from 2024.", "Half-open date range.", `SELECT session_id, watch_date FROM watch_sessions WHERE watch_date >= '2024-01-01' AND watch_date < '2025-01-01' ORDER BY session_id LIMIT 20;`),
  q("RL-S15", "Medium", "Show each session's month, first 20 rows.", "DATE_FORMAT(watch_date, '%Y-%m') AS month.", `SELECT session_id, watch_date, DATE_FORMAT(watch_date, '%Y-%m') AS month FROM watch_sessions ORDER BY session_id LIMIT 20;`),
  q("RL-S16", "Medium", "Label each session as Short, Normal or Long.", "CASE WHEN minutes_watched < 30 THEN 'Short' WHEN < 90 THEN 'Normal' ELSE 'Long' END.", `SELECT session_id, minutes_watched, CASE WHEN minutes_watched < 30 THEN 'Short' WHEN minutes_watched < 90 THEN 'Normal' ELSE 'Long' END AS band FROM watch_sessions ORDER BY session_id LIMIT 20;`),
  q("RL-S17", "Medium", "List titles whose name contains City.", "LIKE '%City%'.", `SELECT title_id, title_name FROM titles WHERE title_name LIKE '%City%' ORDER BY title_id LIMIT 20;`),
  q("RL-S18", "Medium", "List users who signed up during 2025.", "Date range on signup_date.", `SELECT user_id, user_name, signup_date FROM users WHERE signup_date >= '2025-01-01' AND signup_date < '2026-01-01' ORDER BY user_id LIMIT 20;`),
  q("RL-S19", "Medium", "Show each country in capitals with the user's name.", "UPPER(country).", `SELECT user_name, UPPER(country) AS country FROM users ORDER BY user_id LIMIT 20;`),
  q("RL-S20", "Medium", "Count how many different devices are used.", "COUNT(DISTINCT device).", `SELECT COUNT(DISTINCT device) AS devices FROM watch_sessions;`),
  q("RL-S21", "Medium", "Show each title and its name length.", "LENGTH(title_name).", `SELECT title_name, LENGTH(title_name) AS name_length FROM titles ORDER BY title_id LIMIT 20;`),
  q("RL-S22", "Medium", "List unfinished watch sessions.", "completed = 0.", `SELECT session_id, minutes_watched, device FROM watch_sessions WHERE completed = 0 ORDER BY session_id LIMIT 20;`),

  // Hard
  q("RL-S23", "Hard", "Count watch sessions per device.", "GROUP BY device.", `SELECT device, COUNT(*) AS sessions FROM watch_sessions GROUP BY device ORDER BY sessions DESC, device;`),
  q("RL-S24", "Hard", "Show the average minutes watched per genre.", "Join sessions to titles, AVG by genre.", `SELECT t.genre, ROUND(AVG(w.minutes_watched), 1) AS avg_minutes FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre ORDER BY avg_minutes DESC, t.genre;`),
  q("RL-S25", "Hard", "Count users per plan.", "GROUP BY plan_id, ordered.", `SELECT plan_id, COUNT(*) AS users FROM users GROUP BY plan_id ORDER BY users DESC, plan_id;`),
  q("RL-S26", "Hard", "List titles with more than 20 watch sessions.", "GROUP BY title with HAVING COUNT(*) > 20.", `SELECT t.title_id, t.title_name, COUNT(*) AS sessions FROM titles t JOIN watch_sessions w ON w.title_id = t.title_id GROUP BY t.title_id, t.title_name HAVING COUNT(*) > 20 ORDER BY sessions DESC, t.title_id LIMIT 20;`),
  q("RL-S27", "Hard", "Show the average watch minutes per plan.", "Join users to sessions, group by plan_id.", `SELECT u.plan_id, ROUND(AVG(w.minutes_watched), 1) AS avg_minutes FROM users u JOIN watch_sessions w ON w.user_id = u.user_id GROUP BY u.plan_id ORDER BY avg_minutes DESC, u.plan_id;`),
  q("RL-S28", "Hard", "Show the completion rate per genre.", "100 * SUM(completed) / COUNT(*), grouped by genre.", `SELECT t.genre, ROUND(100 * SUM(w.completed) / COUNT(*), 1) AS completed_pct FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre ORDER BY completed_pct DESC, t.genre;`),
  q("RL-S29", "Hard", "Count watch sessions per month of 2025.", "Filter 2025, group by the formatted month.", `SELECT DATE_FORMAT(watch_date, '%Y-%m') AS month, COUNT(*) AS sessions FROM watch_sessions WHERE watch_date >= '2025-01-01' AND watch_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-S30", "Hard", "List users with more than 10 watch sessions.", "GROUP BY user with HAVING COUNT(*) > 10.", `SELECT u.user_id, u.user_name, COUNT(*) AS sessions FROM users u JOIN watch_sessions w ON w.user_id = u.user_id GROUP BY u.user_id, u.user_name HAVING COUNT(*) > 10 ORDER BY sessions DESC, u.user_id LIMIT 20;`),
  q("RL-S31", "Hard", "List titles that have never been watched.", "LEFT JOIN and keep rows where session_id IS NULL.", `SELECT t.title_id, t.title_name FROM titles t LEFT JOIN watch_sessions w ON w.title_id = t.title_id WHERE w.session_id IS NULL ORDER BY t.title_id LIMIT 20;`),
  q("RL-S32", "Hard", "Show the average session length per country.", "Join users to sessions, AVG by country.", `SELECT u.country, ROUND(AVG(w.minutes_watched), 1) AS avg_minutes FROM users u JOIN watch_sessions w ON w.user_id = u.user_id GROUP BY u.country ORDER BY avg_minutes DESC, u.country;`),
  q("RL-S33", "Hard", "Show genres with an average session above 90 minutes.", "AVG by genre with HAVING.", `SELECT t.genre, ROUND(AVG(w.minutes_watched), 1) AS avg_minutes FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre HAVING AVG(w.minutes_watched) > 90 ORDER BY avg_minutes DESC, t.genre;`),
  q("RL-S34", "Hard", "Show monthly revenue per plan from active users.", "Join plans to users, filter active, multiply price by user count.", `SELECT p.plan_name, COUNT(*) AS active_users, SUM(p.monthly_price) AS monthly_revenue FROM plans p JOIN users u ON u.plan_id = p.plan_id WHERE u.status = 'active' GROUP BY p.plan_id, p.plan_name ORDER BY monthly_revenue DESC, p.plan_name;`),
  q("RL-S35", "Hard", "List users with no watch sessions.", "LEFT JOIN and keep NULL session ids.", `SELECT u.user_id, u.user_name FROM users u LEFT JOIN watch_sessions w ON w.user_id = u.user_id WHERE w.session_id IS NULL ORDER BY u.user_id LIMIT 20;`),
  q("RL-S36", "Hard", "Compare watch sessions for movies and series.", "Join sessions to titles, GROUP BY kind, aggregate count and minutes.", `SELECT t.kind, COUNT(*) AS sessions, SUM(w.minutes_watched) AS minutes FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.kind ORDER BY sessions DESC, t.kind;`),

  // Professional
  q("RL-S37", "Professional", "Show the 10 titles with the most minutes watched.", "SUM(minutes_watched) per title, ordered and limited.", `SELECT t.title_id, t.title_name, SUM(w.minutes_watched) AS minutes FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.title_id, t.title_name ORDER BY minutes DESC, t.title_id LIMIT 10;`),
  q("RL-S38", "Professional", "Show each genre's share of watched minutes.", "Group by genre, divide by the scalar total minutes.", `SELECT t.genre, SUM(w.minutes_watched) AS minutes, ROUND(100 * SUM(w.minutes_watched) / (SELECT SUM(minutes_watched) FROM watch_sessions), 1) AS pct FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre ORDER BY minutes DESC, t.genre;`),
  q("RL-S39", "Professional", "Rank titles by minutes watched inside their genre.", "RANK() OVER (PARTITION BY genre ORDER BY SUM(minutes) DESC) in a CTE.", `WITH per AS (SELECT t.genre, t.title_id, t.title_name, SUM(w.minutes_watched) AS minutes, RANK() OVER (PARTITION BY t.genre ORDER BY SUM(w.minutes_watched) DESC, t.title_id) AS rnk FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre, t.title_id, t.title_name) SELECT genre, title_name, minutes, rnk FROM per ORDER BY genre, rnk LIMIT 20;`),
  q("RL-S40", "Professional", "Show 2025 monthly minutes with a running total.", "Aggregate in a CTE, then SUM(...) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(watch_date, '%Y-%m') AS month, SUM(minutes_watched) AS minutes FROM watch_sessions WHERE watch_date >= '2025-01-01' AND watch_date < '2026-01-01' GROUP BY month) SELECT month, minutes, SUM(minutes) OVER (ORDER BY month) AS running_total FROM m ORDER BY month;`),
  q("RL-S41", "Professional", "Show the month-over-month change in sessions for 2025.", "LAG(sessions) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(watch_date, '%Y-%m') AS month, COUNT(*) AS sessions FROM watch_sessions WHERE watch_date >= '2025-01-01' AND watch_date < '2026-01-01' GROUP BY month) SELECT month, sessions, LAG(sessions) OVER (ORDER BY month) AS prev_sessions, sessions - LAG(sessions) OVER (ORDER BY month) AS change FROM m ORDER BY month;`),
  q("RL-S42", "Professional", "List users who never watched anything.", "NOT EXISTS against watch_sessions.", `SELECT u.user_id, u.user_name FROM users u WHERE NOT EXISTS (SELECT 1 FROM watch_sessions w WHERE w.user_id = u.user_id) ORDER BY u.user_id LIMIT 20;`),
  q("RL-S43", "Professional", "Show each user's longest watch session.", "ROW_NUMBER() PARTITION BY user ORDER BY minutes DESC.", `WITH r AS (SELECT user_id, session_id, watch_date, minutes_watched, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY minutes_watched DESC, session_id) AS rn FROM watch_sessions) SELECT user_id, session_id, watch_date, minutes_watched FROM r WHERE rn = 1 ORDER BY user_id LIMIT 20;`),
  q("RL-S44", "Professional", "List titles watched above their genre's average minutes.", "Two CTEs: title minutes and genre averages, then join.", `WITH per AS (SELECT t.genre, t.title_id, t.title_name, SUM(w.minutes_watched) AS minutes FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre, t.title_id, t.title_name), avg_genre AS (SELECT genre, AVG(minutes) AS avg_minutes FROM per GROUP BY genre) SELECT p.title_name, p.genre, p.minutes, ROUND(a.avg_minutes, 1) AS genre_avg FROM per p JOIN avg_genre a ON a.genre = p.genre WHERE p.minutes > a.avg_minutes ORDER BY p.minutes DESC, p.title_id LIMIT 20;`),
  q("RL-S45", "Professional", "Build a 2025 monthly dashboard: sessions, minutes and average minutes.", "Filter 2025, group by month, three aggregates.", `SELECT DATE_FORMAT(watch_date, '%Y-%m') AS month, COUNT(*) AS sessions, SUM(minutes_watched) AS minutes, ROUND(AVG(minutes_watched), 1) AS avg_minutes FROM watch_sessions WHERE watch_date >= '2025-01-01' AND watch_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-S46", "Professional", "Show the first watch session of every user.", "ROW_NUMBER() PARTITION BY user ORDER BY watch_date, session_id.", `WITH r AS (SELECT user_id, session_id, watch_date, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY watch_date, session_id) AS rn FROM watch_sessions) SELECT user_id, session_id, watch_date FROM r WHERE rn = 1 ORDER BY user_id LIMIT 20;`),
  q("RL-S47", "Professional", "List users who watched more than 15 different titles.", "COUNT(DISTINCT title_id) per user with HAVING > 15.", `SELECT u.user_id, u.user_name, COUNT(DISTINCT w.title_id) AS titles FROM users u JOIN watch_sessions w ON w.user_id = u.user_id GROUP BY u.user_id, u.user_name HAVING COUNT(DISTINCT w.title_id) > 15 ORDER BY titles DESC, u.user_id LIMIT 20;`),
  q("RL-S48", "Professional", "Show each plan's share of all watch sessions.", "Group sessions by plan through users, divide by the scalar total.", `SELECT p.plan_name, COUNT(*) AS sessions, ROUND(100 * COUNT(*) / (SELECT COUNT(*) FROM watch_sessions), 1) AS pct FROM watch_sessions w JOIN users u ON u.user_id = w.user_id JOIN plans p ON p.plan_id = u.plan_id GROUP BY p.plan_id, p.plan_name ORDER BY sessions DESC, p.plan_name;`),
  q("RL-S49", "Professional", "Build a country dashboard: users, sessions and minutes watched.", "Join users to sessions and group by country.", `SELECT u.country, COUNT(DISTINCT u.user_id) AS users, COUNT(*) AS sessions, SUM(w.minutes_watched) AS minutes FROM users u JOIN watch_sessions w ON w.user_id = u.user_id GROUP BY u.country ORDER BY minutes DESC, u.country;`),
  q("RL-S50", "Professional", "Show watch minutes by device and completion status.", "Group by device and completed, summing minutes.", `SELECT device, completed, COUNT(*) AS sessions, SUM(minutes_watched) AS minutes FROM watch_sessions GROUP BY device, completed ORDER BY device, completed;`),
];

export const streamingModule: RealLifeModuleConfig = {
  number: 11,
  slug: "real-life-streaming",
  shortTitle: "Real life: streaming service",
  title: "Real life database practice: streaming service (50 SQL problems)",
  summary: "Practise 50 SQL problems on a 2,000-session streaming database — plans, titles, watch time and completion rates, checked in your browser.",
  dataset: "streaming",
  context:
    "Streamflix is a fictional streaming service: four plans, 400 users, 150 titles and 2,000 watch sessions. A session records who watched which title, for how many minutes, on which device, and whether they finished it. Revenue questions combine plan price with the users still active on that plan.",
  tables: [
    { name: "plans", grain: "one subscription plan", columns: "plan_id, plan_name, monthly_price, max_streams" },
    { name: "users", grain: "one subscriber", columns: "user_id, user_name, country, plan_id, signup_date, status" },
    { name: "titles", grain: "one movie or series", columns: "title_id, title_name, kind, genre, release_year, age_rating" },
    { name: "watch_sessions", grain: "one viewing session", columns: "session_id, user_id, title_id, watch_date, minutes_watched, device, completed" },
  ],
  outcomes: [
    "Join a four-table streaming schema without duplicating minutes",
    "Report watch time per genre, device and month",
    "Compute completion rates and plan revenue",
    "Rank titles and users with CTEs and window functions",
  ],
  quickAnswer: {
    question: "What is in the streaming practice database?",
    answer:
      "Four tables: four plans, 400 users, 150 titles and 2,000 watch sessions. A session stores minutes watched, device and whether the title was finished, so watch-time questions aggregate watch_sessions while revenue questions use plans and active users. The database is already selected in every problem.",
  },
  guided: {
    heading: "Guided walkthrough: total watch minutes per genre",
    intro: "Minutes live on the session, the genre lives on the title. One join is enough.",
    steps: [
      "Start from `watch_sessions`, where one row is one viewing session.",
      "Join `titles` on title_id to reach the genre.",
      "Group by genre and sum minutes_watched.",
      "Sort by the total so the genre that keeps people watching is first.",
    ],
    sql: "SELECT t.genre, COUNT(*) AS sessions, SUM(w.minutes_watched) AS minutes, ROUND(AVG(w.minutes_watched), 1) AS avg_minutes FROM watch_sessions w JOIN titles t ON t.title_id = w.title_id GROUP BY t.genre ORDER BY minutes DESC, t.genre;",
    explain:
      "Each session joins exactly one title, so minutes are counted once. Adding `users` here would also be safe (one user per session), but adding it twice or joining another one-to-many table would multiply the minutes.",
  },
  teaches: ["SQL practice", "streaming database", "JOIN", "GROUP BY", "completion rate", "window functions", "reporting"],
  questions,
  quiz: [
    {
      id: "RL-S-Q1",
      question: "Why can summing minutes after joining users and plans go wrong?",
      options: ["It cannot go wrong", "If you join a one-to-many table as well, every session is repeated and minutes multiply", "Because minutes are text", "Because plans have no price"],
      correctIndex: 1,
      explanation: "One user has one plan, so that join is safe. But join another table with several rows per session and each session's minutes get counted once per row.",
    },
    {
      id: "RL-S-Q2",
      question: "What does completed = 1 mean on a watch session?",
      options: ["The user finished the title", "The user paid", "The title is a movie", "The session was the first one"],
      correctIndex: 0,
      explanation: "The flag records whether the viewing reached the end, which is what a completion rate measures.",
    },
    {
      id: "RL-S-Q3",
      question: "How do you compute monthly revenue from active users?",
      options: ["SUM(minutes_watched)", "SUM(plan monthly_price) over active users, grouped by plan", "COUNT(DISTINCT title_id)", "AVG(minutes_watched) * 30"],
      correctIndex: 1,
      explanation: "Revenue here is a list price per active subscriber per month, so multiply each active user by their plan's price.",
    },
  ],
  mistakes: [
    {
      wrong: "SUM(minutes_watched) after joining titles and users without checking the grain",
      why: "One session has one user and one title, so those joins are safe — but a second one-to-many join would repeat minutes.",
      fix: "Write down what one row of the result should be, and aggregate before joining anything with many rows per key.",
    },
    {
      wrong: "AVG(completed) treated as a percentage of users",
      why: "It is a percentage of sessions, and sessions are not evenly spread across users.",
      fix: "Say what the denominator is: sessions for a completion rate, distinct users for a user-level rate.",
    },
    {
      wrong: "Counting cancelled users as revenue",
      why: "Plan price is only revenue while the subscription is active.",
      fix: "Filter status = 'active' before multiplying plan price by users.",
    },
  ],
  faq: [
    {
      q: "Do I need to install MySQL and import this data?",
      a: "No. The code arena loads the streaming database in your browser and preselects it for every problem. Download the .sql script to run the same queries in Workbench.",
    },
    {
      q: "Are the answers checked automatically?",
      a: "Yes. Your query and the reference answer run on fresh copies of the same rows and the results are compared row by row, so any correct query is accepted.",
    },
    {
      q: "Is the streaming data real?",
      a: "No. It is fictional and generated from a fixed seed so every learner sees the same rows and the same expected answers.",
    },
  ],
};
