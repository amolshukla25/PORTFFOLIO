import { pick } from "../bank";
import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string, check?: Question["check"]): Question => ({
  id: `C15-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql, ...(check ? { check } : {}),
});

const Q1 = "o.order_date >= '2026-01-01' AND o.order_date < '2026-04-01'";

export const README_TEMPLATE = `# Learning Shop — Q1 2026 retail performance report

**Author:** your name · **Date:** YYYY-MM-DD · **MySQL version:** 8.x

## Question
What did Learning Shop sell in Q1 2026, to whom, and what should management look at next?

## Data
- Database: portfolio_retail_lab (mysql-retail-lab.sql), 4 tables, imported on YYYY-MM-DD
- Import check: customers 6, products 6, orders 8, order_items 14

## Definitions
- Period: order_date >= '2026-01-01' AND order_date < '2026-04-01'
- Revenue: SUM(quantity * unit_price) for orders with status = 'completed'
- Order value: one row per order (aggregate items first)

## Results
| KPI | Value |
|---|---|
| Completed orders | … |
| Revenue (INR) | … |
| Average order value | … |

(Paste the key result grids or link the CSV exports.)

## Reconciliation
Total revenue = sum of months = sum of categories = … (difference 0)

## Data quality
Orphan items …, orders without items …, non-positive prices …, missing emails …

## Limitations
- Pending and cancelled orders are excluded from revenue.
- Months with no orders would not appear without a calendar table.
- 8 orders are too few to judge trends or index performance.

## How to run
Open capstone.sql in MySQL Workbench, run USE portfolio_retail_lab; then Execute All.`;

export const lesson15: MysqlLesson = {
  slug: "capstone-retail-report",
  shortTitle: "Capstone: audited retail report",
  title: "MySQL capstone project: build an audited retail sales report",
  summary: "Build a Q1 2026 sales report for Learning Shop: KPIs, breakdowns, reconciliation, data-quality checks and a README, scored with a rubric.",
  module: 5,
  minutesOverride: 180,
  dataset: "shop",
  teaches: ["SQL portfolio project", "Sales report SQL", "KPI query", "Revenue reconciliation", "Data quality report", "README for SQL project"],
  quickAnswer: {
    question: "What makes a good SQL portfolio project?",
    answer:
      "A clear business question, a reproducible script, stated definitions (period, revenue rule, grain), results that reconcile to one control total, data-quality checks, and a short README covering limitations. Reviewers trust a report they can rerun and check, not one with the most complex query.",
  },
  outcomes: [
    "Turn a business brief into a set of SQL questions with written definitions",
    "Produce KPIs and breakdowns that reconcile to one control total",
    "Add data-quality checks and document limitations honestly",
    "Hand over a runnable capstone.sql and README.md that a reviewer can score",
  ],
  sections: [
    {
      heading: "The brief",
      body: `> **From:** Owner, Learning Shop
> **To:** You, data analyst
>
> *I need a short report on Q1 2026 (January to March). How much did we really sell, which months, products, categories and cities drove it, who are our repeat customers, and how much did cancelled or pending orders cost us? Please make sure the numbers add up — last quarter's spreadsheet did not.*

Your job is to answer every question with SQL, show that the numbers reconcile, and explain the limits of the data. You have everything you need from lessons 1–14.`,
    },
    {
      heading: "Deliverables",
      body: `1. **capstone.sql** — one script that runs top to bottom on a fresh import of \`portfolio_retail_lab\`. Use a comment header for each section.
2. **README.md** — the template below, filled in.
3. **Results** — the key result grids as screenshots or CSV exports (Workbench: *Export recordset*).

Work through the 15 practice steps in this lesson; each one is a section of your script.`,
    },
    {
      heading: "Rules every query must follow",
      body: `Write these at the top of capstone.sql and stick to them:

- **Period:** \`order_date >= '2026-01-01' AND order_date < '2026-04-01'\` (half-open, lesson 5).
- **Revenue:** \`SUM(quantity * unit_price)\` from order_items, **completed orders only** (lesson 8).
- **Grain:** count orders with \`COUNT(DISTINCT order_id)\`; average order value is computed on one row per order (lesson 9).
- **Control total:** completed Q1 revenue = **6150.00**. Every breakdown must add back up to it.`,
      sql: `-- Section 0: control total\nSELECT COUNT(DISTINCT o.order_id) AS completed_orders,\n       SUM(i.quantity * i.unit_price) AS revenue\nFROM orders o\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed'\n  AND ${Q1};`,
      dataset: "shop",
    },
    {
      heading: "Suggested script structure",
      body: `\`\`\`sql
-- capstone.sql — Learning Shop Q1 2026 report
-- Author: … | MySQL 8.x | Run on a fresh import of portfolio_retail_lab
USE portfolio_retail_lab;

-- 0. Import check (lesson 3)
-- 1. Scope: orders by status (lesson 7)
-- 2. Headline KPIs: orders, revenue, average order value (lessons 8–9)
-- 3. Revenue by month, with month-over-month change (lesson 11)
-- 4. Revenue by category and by city (lessons 7–8)
-- 5. Product ranking (lesson 11)
-- 6. Customers: every customer incl. zero, repeat buyers (lessons 8–9)
-- 7. Lost revenue: cancelled and pending (lesson 6)
-- 8. Reconciliation: total = months = categories (lessons 9–10)
-- 9. Data quality checks (lesson 14)
\`\`\`

Use CTEs with clear names; one idea per CTE. Alias every column a manager will read.`,
    },
    {
      heading: "README template",
      body: "Copy this into README.md and replace every … with your results. Keep it to one page.\n\n```markdown\n" + README_TEMPLATE + "\n```",
    },
    {
      heading: "Rubric (100 points)",
      body: `| Area | Points | Full marks when… |
|---|---|---|
| **Correctness** | 40 | Every KPI and breakdown matches the data; status filter and grain are right everywhere |
| **Reconciliation** | 20 | Breakdowns add up to 6150.00 and the script proves it with a query, not by hand |
| **Readability** | 15 | Section comments, CTE names and column aliases a non-technical reader understands |
| **Documentation** | 15 | README states the question, definitions, results and at least three honest limitations |
| **Data quality** | 10 | Orphan, missing-item, price and email checks run and are reported |

**70+** is a pass; **85+** is portfolio-ready. Typical deductions: revenue that includes pending orders (−10), COUNT(*) after a join used as order count (−10), no reconciliation query (−15).`,
    },
    {
      heading: "Submit for review",
      body: `**Ikigai / batch students:** your trainer posts the capstone as an assignment in the student portal (*Student → Assignments*). Push capstone.sql and README.md to a GitHub repository (or a shared Drive folder), paste the link and a two-line summary of your findings, and submit. The trainer scores it with the rubric above.

**Self-learners:** publish the repository on GitHub and link it from your CV or LinkedIn. A clean, reconciled report is a stronger portfolio piece than a long list of certificates.

Before you submit, run the checklist:

- [ ] capstone.sql runs top to bottom on a fresh import with no errors
- [ ] Every revenue query filters status = 'completed' and the Q1 date range
- [ ] Reconciliation query shows a difference of 0
- [ ] README has definitions, results, reconciliation, data quality and limitations
- [ ] No passwords or connection strings in any file`,
      callout: { kind: "business", text: "In interviews, walk through your reconciliation and limitations first. It shows you can be trusted with numbers — the skill hiring managers test for most." },
    },
  ],
  mistakes: [
    { wrong: "Counting all statuses as revenue", why: "Pending and cancelled orders are not money received.", fix: "WHERE o.status = 'completed' in every revenue query (or one view that does it)." },
    { wrong: "Average order value = AVG(quantity * unit_price)", why: "That averages item lines (512.50), not orders (1025.00).", fix: "Aggregate to one row per order first." },
    { wrong: "Reconciling in a spreadsheet by hand", why: "Nobody can rerun it.", fix: "A reconciliation query in capstone.sql that returns the difference." },
  ],
  checkYourself: [
    "What is your control total, and which three breakdowns must add up to it?",
    "Which two limitations of this dataset would you tell the owner about first?",
    "Could a reviewer run your script on a fresh import without asking you anything?",
  ],
  faq: [
    { q: "What should a SQL portfolio project include?", a: "A business question, a runnable .sql script, clear definitions, results, a reconciliation to a control total, data-quality checks and a README with limitations." },
    { q: "How long does the capstone take?", a: "About three hours for most learners who have finished lessons 1–14: roughly two hours of SQL and one hour for checking and writing the README." },
    { q: "Can I use the large dataset instead?", a: "Yes, for an extended version: USE portfolio_retail_large; and report on 2025 vs 2026 H1. Your control totals will differ, so compute them first." },
  ],
  guided: {
    intro: "Start the capstone with the headline KPIs and prove them against the control total.",
    steps: [
      "Run the query: 6 completed orders, 6150.00 revenue, 1025.00 average order value.",
      "Copy it into capstone.sql under a '-- 2. Headline KPIs' comment.",
      "Work through the practice steps in order; each one is a section of your script.",
      "Finish with the reconciliation step (C15-08) — its difference must be 0.",
    ],
    sql: `SELECT COUNT(DISTINCT o.order_id) AS completed_orders,\n       SUM(i.quantity * i.unit_price) AS revenue,\n       ROUND(SUM(i.quantity * i.unit_price) / COUNT(DISTINCT o.order_id), 2) AS average_order_value\nFROM orders o\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed'\n  AND ${Q1};`,
    dataset: "shop",
    explain: "One row: completed_orders = 6, revenue = 6150.00, average_order_value = 1025.00.",
  },
  questions: [
    q(1, "Easy", "Scope: count Q1 2026 orders by status.", "3 rows: cancelled 1, completed 6, pending 1 (total 8)", "GROUP BY status with the Q1 half-open range.", `SELECT o.status, COUNT(*) AS orders FROM orders o WHERE ${Q1} GROUP BY o.status ORDER BY o.status;`),
    q(2, "Easy", "Control total: completed Q1 revenue.", "1 row: revenue = 6150.00", "Join orders to items, filter status and period.", `SELECT SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' AND ${Q1};`),
    ...pick("L9", "L9-O4"),
    q(3, "Medium", "Revenue by month for Q1.", "3 rows: 2026-01 1600.00, 2026-02 1950.00, 2026-03 2600.00", "GROUP BY DATE_FORMAT(o.order_date, '%Y-%m').", `SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' AND ${Q1} GROUP BY month ORDER BY month;`),
    q(4, "Medium", "Revenue by product category, highest first.", "3 rows: Electronics 4000.00, Home 1250.00, Stationery 900.00", "Join products for the category.", `SELECT p.category, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' AND ${Q1} GROUP BY p.category ORDER BY revenue DESC;`),
    q(5, "Medium", "Revenue by customer city, highest first.", "3 rows: Mumbai 2600.00, Delhi 1850.00, Pune 1700.00", "Join customers for the city.", `SELECT c.city, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'completed' AND ${Q1} GROUP BY c.city ORDER BY revenue DESC;`),
    q(6, "Medium", "Rank products by completed revenue (DENSE_RANK, 1 = highest).", "5 rows: Keyboard 2400.00 (1), Desk lamp 1600.00 (2), Mug 1250.00 (3), Notebook 600.00 (4), Pen 300.00 (5)", "Aggregate per product in a CTE, then DENSE_RANK() OVER (ORDER BY revenue DESC).", `WITH r AS (SELECT p.product_name, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' AND ${Q1} GROUP BY p.product_id, p.product_name) SELECT product_name, revenue, DENSE_RANK() OVER (ORDER BY revenue DESC) AS revenue_rank FROM r ORDER BY revenue_rank;`),
    q(7, "Hard", "Every customer with completed orders, revenue (0 if none) and share of total revenue in %, rounded to 1 decimal.", "6 rows: Bilal 2600.00 42.3, Dev 1850.00 30.1, Asha 1700.00 27.6, then Charu, Esha, Farah with 0", "CTE per customer, LEFT JOIN from customers, COALESCE, divide by the control total.", `WITH s AS (SELECT o.customer_id, COUNT(DISTINCT o.order_id) AS orders, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' AND ${Q1} GROUP BY o.customer_id), t AS (SELECT SUM(revenue) AS total FROM s) SELECT c.customer_name, COALESCE(s.orders, 0) AS orders, COALESCE(s.revenue, 0) AS revenue, ROUND(100 * COALESCE(s.revenue, 0) / t.total, 1) AS share_pct FROM customers c LEFT JOIN s ON s.customer_id = c.customer_id CROSS JOIN t ORDER BY revenue DESC, c.customer_id;`),
    q(8, "Hard", "Reconciliation: show total revenue, the sum of monthly revenue, the sum of category revenue and the largest difference.", "1 row: 6150.00, 6150.00, 6150.00, difference 0.00", "Three CTEs, then compare their totals in one SELECT.", `WITH base AS (SELECT o.order_date, p.category, i.quantity * i.unit_price AS amount FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' AND ${Q1}), by_month AS (SELECT DATE_FORMAT(order_date, '%Y-%m') AS m, SUM(amount) AS revenue FROM base GROUP BY m), by_category AS (SELECT category, SUM(amount) AS revenue FROM base GROUP BY category) SELECT (SELECT SUM(amount) FROM base) AS total, (SELECT SUM(revenue) FROM by_month) AS months_total, (SELECT SUM(revenue) FROM by_category) AS categories_total, GREATEST(ABS((SELECT SUM(amount) FROM base) - (SELECT SUM(revenue) FROM by_month)), ABS((SELECT SUM(amount) FROM base) - (SELECT SUM(revenue) FROM by_category))) AS max_difference;`),
    q(9, "Hard", "Lost revenue: value of cancelled and pending orders in Q1, by status.", "2 rows: cancelled 800.00, pending 600.00", "Same revenue formula, status <> 'completed'.", `SELECT o.status, SUM(i.quantity * i.unit_price) AS value FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status <> 'completed' AND ${Q1} GROUP BY o.status ORDER BY o.status;`),
    q(10, "Hard", "Repeat customers: customers with two or more completed Q1 orders.", "3 rows: Asha 2, Bilal 2, Dev 2", "GROUP BY customer, HAVING COUNT(*) >= 2.", `SELECT c.customer_name, COUNT(*) AS completed_orders FROM orders o JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'completed' AND ${Q1} GROUP BY c.customer_id, c.customer_name HAVING COUNT(*) >= 2 ORDER BY c.customer_id;`),
    q(11, "Hard", "Month-over-month change in completed revenue.", "3 rows: 2026-01 1600.00 NULL, 2026-02 1950.00 350.00, 2026-03 2600.00 650.00", "Monthly CTE, then revenue - LAG(revenue) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' AND ${Q1} GROUP BY month) SELECT month, revenue, revenue - LAG(revenue) OVER (ORDER BY month) AS change_vs_prev FROM m ORDER BY month;`),
    q(12, "Professional", "Data-quality section: orphan items, orders without items, non-positive prices and missing emails, one row each.", "4 rows: 0, 0, 0 and missing emails 1 (Charu)", "UNION ALL four COUNT queries with a check_name column.", "SELECT 'orphan items' AS check_name, COUNT(*) AS problems FROM order_items i LEFT JOIN orders o ON o.order_id = i.order_id WHERE o.order_id IS NULL UNION ALL SELECT 'orders without items', COUNT(*) FROM orders o WHERE NOT EXISTS (SELECT 1 FROM order_items i WHERE i.order_id = o.order_id) UNION ALL SELECT 'non-positive prices', COUNT(*) FROM products WHERE price <= 0 UNION ALL SELECT 'missing emails', COUNT(*) FROM customers WHERE email IS NULL;"),
    q(13, "Professional", "One-row executive summary: period, completed orders, revenue, average order value, buying customers and top product.", "1 row: 2026-Q1, 6, 6150.00, 1025.00, 3, Keyboard", "CTE of completed Q1 items; scalar subquery for the top product.", `WITH base AS (SELECT o.order_id, o.customer_id, i.product_id, i.quantity * i.unit_price AS amount FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' AND ${Q1}) SELECT '2026-Q1' AS period, COUNT(DISTINCT order_id) AS completed_orders, SUM(amount) AS revenue, ROUND(SUM(amount) / COUNT(DISTINCT order_id), 2) AS average_order_value, COUNT(DISTINCT customer_id) AS buying_customers, (SELECT p.product_name FROM base b JOIN products p ON p.product_id = b.product_id GROUP BY p.product_id, p.product_name ORDER BY SUM(b.amount) DESC LIMIT 1) AS top_product FROM base;`),
    q(14, "Professional", "Write the Limitations section of your README as SQL comments: at least three honest limits of this analysis.", "3+ comment lines, e.g. tiny sample, status rule, no calendar table, prices at time of sale", "Think about what the owner might wrongly conclude from these numbers.", "/* Limitations\n   1. Only 8 orders in Q1: trends and rankings are not statistically meaningful.\n   2. Revenue excludes 1 pending (600.00) and 1 cancelled (800.00) order.\n   3. Months with no orders would be missing without a calendar table.\n   4. unit_price is the price charged at the time of sale, not today's catalogue price. */", { manual: true }),
  ],
  quiz: [
    { id: "q1", question: "Which number should every breakdown in the capstone add up to?", options: ["8 orders", "6150.00 completed revenue", "14 order items", "1025.00"], correctIndex: 1, explanation: "6150.00 is the control total for completed Q1 revenue." },
    { id: "q2", question: "Which Q1 date filter is correct for DATE and DATETIME columns?", options: ["BETWEEN '2026-01-01' AND '2026-03-31'", "MONTH(order_date) <= 3", ">= '2026-01-01' AND < '2026-04-01'", "YEAR(order_date) = 2026"], correctIndex: 2, explanation: "The half-open range is exact for both types and can use an index." },
    { id: "q3", question: "What carries the most rubric points?", options: ["Readability", "Correctness", "Documentation", "Data quality"], correctIndex: 1, explanation: "Correctness is 40 of 100 points." },
    { id: "q4", question: "A reviewer cannot rerun your numbers. What is missing?", options: ["Charts", "A runnable script and stated definitions", "More complex SQL", "A larger dataset"], correctIndex: 1, explanation: "Reproducibility comes from a script that runs on a fresh import plus written definitions." },
  ],
};
