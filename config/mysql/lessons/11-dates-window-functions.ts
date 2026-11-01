import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson11: MysqlLesson = {
  slug: "dates-case-windows",
  shortTitle: "Dates and window functions",
  title: "MySQL date reporting and window functions: ROW_NUMBER, RANK, LAG, running totals",
  summary: "Report by month with DATE_FORMAT, then use window functions — ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD and SUM OVER — on the shop and on a 4,000-order dataset.",
  module: 4,
  dataset: "shop",
  teaches: ["DATE_FORMAT", "Monthly revenue", "Window functions", "OVER PARTITION BY", "ROW_NUMBER", "RANK vs DENSE_RANK", "LAG LEAD", "Running total", "Top N per group", "Window frame ROWS BETWEEN"],
  quickAnswer: {
    question: "What is a window function in MySQL?",
    answer:
      "A window function calculates across a set of related rows but, unlike GROUP BY, keeps every row in the result. You write it with OVER: SUM(revenue) OVER (ORDER BY month) gives a running total, and ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) numbers each customer's orders. MySQL supports them from 8.0.",
  },
  outcomes: [
    "Group sales by month with DATE_FORMAT and filter periods with half-open ranges",
    "Explain how a window function differs from GROUP BY",
    "Number, rank and pick the top N rows per group with ROW_NUMBER, RANK and DENSE_RANK",
    "Compare each row with the previous one using LAG and LEAD",
    "Build running totals with SUM() OVER and a ROWS frame",
  ],
  sections: [
    {
      heading: "Monthly reporting with DATE_FORMAT",
      body: `\`DATE_FORMAT(date, pattern)\` turns a date into text. The pattern \`'%Y-%m'\` gives \`2026-02\`, which sorts correctly as text and makes a perfect *reporting month*. Other useful codes: \`%d\` day, \`%b\` short month name (Feb), \`%W\` weekday name, \`%Y-%u\` year-week.`,
      sql: "SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month,\n       COUNT(DISTINCT o.order_id)        AS orders,\n       SUM(i.quantity * i.unit_price)    AS revenue\nFROM orders o\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed'\nGROUP BY month\nORDER BY month;",
      dataset: "shop",
      after: "1600 + 1950 + 2600 = 6150 — the same control total as every earlier lesson.",
      callout: { kind: "mistake", text: "Grouping by MONTH(order_date) alone merges January 2025 with January 2026. Group by year and month together — '%Y-%m' does both." },
    },
    {
      heading: "Months with no sales disappear",
      body: "GROUP BY only creates groups for values that exist. If a month had no completed orders, it would simply be missing — and a chart would draw a straight line over the gap. Real reports join to a **calendar** of all months. A recursive CTE can generate one:",
      sql: "WITH RECURSIVE months AS (\n  SELECT DATE('2026-01-01') AS month_start\n  UNION ALL\n  SELECT DATE_ADD(month_start, INTERVAL 1 MONTH) FROM months WHERE month_start < '2026-04-01'\n)\nSELECT DATE_FORMAT(m.month_start, '%Y-%m') AS month,\n       COUNT(o.order_id) AS orders\nFROM months m\nLEFT JOIN orders o\n  ON o.order_date >= m.month_start\n AND o.order_date <  DATE_ADD(m.month_start, INTERVAL 1 MONTH)\nGROUP BY m.month_start\nORDER BY m.month_start;",
      dataset: "shop",
      after: "April 2026 now shows 0 orders instead of vanishing. You do not need to master recursive CTEs yet — just remember that **missing months must be added on purpose**.",
    },
    {
      heading: "Window functions keep every row",
      body: `GROUP BY collapses rows into one per group. A **window function** looks at a set of related rows — the *window* — but **returns a value for every row**. You recognise it by \`OVER (…)\`:

\`\`\`sql
function() OVER (PARTITION BY … ORDER BY … ROWS BETWEEN …)
\`\`\`

- **PARTITION BY** — split rows into independent groups (like GROUP BY, without collapsing). Leave it out to use all rows.
- **ORDER BY** — the order inside each partition (needed for numbering, ranking, LAG and running totals).
- **Frame** (\`ROWS BETWEEN …\`) — which rows around the current one to include.`,
      sql: "SELECT order_id, customer_id, order_date,\n       COUNT(*) OVER (PARTITION BY customer_id) AS orders_by_customer,\n       ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS nth_order\nFROM orders\nORDER BY customer_id, order_date;",
      dataset: "shop",
      after: "Every order is still there, yet each row also knows how many orders its customer placed and whether it was their 1st or 2nd.",
    },
    {
      heading: "ROW_NUMBER, RANK and DENSE_RANK",
      body: `All three number rows by an order, but treat **ties** differently. With completed order totals 1400, 1300, 1300, 1300, 550, 300:

| Function | Ties | Values |
|---|---|---|
| \`ROW_NUMBER()\` | always unique | 1, 2, 3, 4, 5, 6 |
| \`RANK()\` | same rank, then a gap | 1, 2, 2, 2, 5, 6 |
| \`DENSE_RANK()\` | same rank, no gap | 1, 2, 2, 2, 3, 4 |`,
      sql: "WITH totals AS (\n  SELECT o.order_id, SUM(i.quantity * i.unit_price) AS total\n  FROM orders o JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed'\n  GROUP BY o.order_id\n)\nSELECT order_id, total,\n       ROW_NUMBER() OVER (ORDER BY total DESC, order_id) AS row_num,\n       RANK()       OVER (ORDER BY total DESC)           AS rnk,\n       DENSE_RANK() OVER (ORDER BY total DESC)           AS dense_rnk\nFROM totals\nORDER BY total DESC, order_id;",
      dataset: "shop",
    },
    {
      heading: "Top N per group",
      body: "*The best-selling product in each category*, *each customer's latest order* — these need ROW_NUMBER inside a CTE, then a filter, because window results cannot be used in WHERE directly. Here on the **large dataset** (4,000 orders, 40 products):",
      sql: "WITH product_revenue AS (\n  SELECT p.category, p.product_name,\n         SUM(i.quantity * i.unit_price) AS revenue\n  FROM orders o\n  JOIN order_items i ON i.order_id = o.order_id\n  JOIN products p    ON p.product_id = i.product_id\n  WHERE o.status = 'completed'\n  GROUP BY p.category, p.product_id, p.product_name\n),\nranked AS (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY revenue DESC) AS rn\n  FROM product_revenue\n)\nSELECT category, product_name, revenue\nFROM ranked\nWHERE rn = 1\nORDER BY revenue DESC;",
      dataset: "large",
      after: "Change `rn = 1` to `rn <= 3` for the top three per category. Use DENSE_RANK instead of ROW_NUMBER if ties should all be included.",
      callout: { kind: "tip", text: "Switch the practice editor to the Large dataset to run this. Download mysql-retail-large.sql to run it in Workbench (schema portfolio_retail_large)." },
    },
    {
      heading: "LAG and LEAD: compare with the previous row",
      body: "`LAG(column)` reads the value from the previous row in the window; `LEAD(column)` from the next. They make *change vs last month* and *days since the previous order* easy:",
      sql: "SELECT order_id, order_date,\n       LAG(order_date) OVER (ORDER BY order_date) AS previous_order,\n       DATEDIFF(order_date, LAG(order_date) OVER (ORDER BY order_date)) AS gap_days\nFROM orders\nORDER BY order_date;",
      dataset: "shop",
      after: "The first row has no previous row, so LAG returns NULL. `LAG(x, 1, 0)` would return 0 instead.",
    },
    {
      heading: "Running totals and the window frame",
      body: "`SUM(x) OVER (ORDER BY …)` adds up everything from the first row to the current one. State the frame explicitly — `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` — because the default frame (`RANGE`) treats tied ORDER BY values as one step, which surprises people.",
      diagram: "window-frame",
      sql: "WITH monthly AS (\n  SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month,\n         SUM(i.quantity * i.unit_price) AS revenue\n  FROM orders o JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed' AND o.order_date >= '2026-01-01'\n  GROUP BY month\n)\nSELECT month, revenue,\n       SUM(revenue) OVER (ORDER BY month ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS year_to_date,\n       ROUND(AVG(revenue) OVER (ORDER BY month ROWS BETWEEN 2 PRECEDING AND CURRENT ROW), 2) AS moving_avg_3m\nFROM monthly\nORDER BY month;",
      dataset: "large",
      after: "On the large dataset this gives year-to-date revenue for January–June 2026 and a 3-month moving average that smooths out noisy months.",
      callout: { kind: "business", text: "Year-to-date, month-over-month change and rank within region are the three numbers almost every sales dashboard asks for. You can now write all three." },
    },
  ],
  mistakes: [
    { wrong: "GROUP BY MONTH(order_date)", why: "Merges the same month from different years.", fix: "GROUP BY DATE_FORMAT(order_date, '%Y-%m') (or YEAR and MONTH together)." },
    { wrong: "WHERE ROW_NUMBER() OVER (…) = 1", why: "Window functions are calculated after WHERE (error 3593).", fix: "Compute it in a CTE, then filter in the outer query." },
    { wrong: "SUM(x) OVER (ORDER BY day) with repeated days", why: "The default RANGE frame adds all rows with the same day at once.", fix: "Add ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW (and a unique tiebreaker)." },
    { wrong: "Using RANK when you need exactly N rows", why: "Ties can give more than N rows with rank ≤ N.", fix: "ROW_NUMBER with a tiebreaker for exactly N; DENSE_RANK to include ties on purpose." },
  ],
  checkYourself: [
    "What is the difference between GROUP BY customer_id and PARTITION BY customer_id?",
    "Totals 1400, 1300, 1300, 550: what do RANK and DENSE_RANK return?",
    "Why must a top-N-per-group query use a CTE?",
  ],
  faq: [
    { q: "Which MySQL version supports window functions?", a: "MySQL 8.0 and newer. MySQL 5.7 has no window functions or CTEs." },
    { q: "What is the difference between RANK and DENSE_RANK?", a: "Both give tied rows the same rank. RANK then skips numbers (1, 2, 2, 4); DENSE_RANK does not (1, 2, 2, 3)." },
    { q: "How do I get the latest order per customer in MySQL?", a: "Number each customer's orders with ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) in a CTE, then keep rows where the number is 1." },
  ],
  guided: {
    intro: "Build a finance-ready monthly report with a running total.",
    steps: [
      "Run the query: monthly completed revenue and the cumulative total.",
      "Check the last cumulative value: 6150.00, the course control total.",
      "Add LAG(revenue) OVER (ORDER BY month) AS previous_month and a column revenue - LAG(revenue) OVER (ORDER BY month) AS change.",
      "Switch the editor to the Large dataset and run it again — 18 months from 2025-01 to 2026-06.",
    ],
    sql: "WITH m AS (\n  SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month,\n         SUM(i.quantity * i.unit_price) AS revenue\n  FROM orders o\n  JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed'\n  GROUP BY month\n)\nSELECT month, revenue,\n       SUM(revenue) OVER (ORDER BY month ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_revenue\nFROM m\nORDER BY month;",
    dataset: "shop",
    explain: "Three rows: 2026-01 1600 / 1600, 2026-02 1950 / 3550, 2026-03 2600 / 6150.",
  },
  questions: [
    ...pick("L8", "L8-O1", "L8-O2", "L8-O3", "L8-O4", "L8-N01", "L8-N02", "L8-N03", "L8-N04", "L8-N05", "L8-N06", "L8-N07", "L8-N08", "L8-N09", "L8-N10", "L8-N11", "L8-N12", "L8-N13", "L8-N14", "L8-N15"),
    {
      id: "M11-01",
      level: "Professional",
      prompt: "On the large dataset, show completed revenue per month for 2025 with its rank (highest month = 1).",
      target: "12 rows, one per month of 2025; exactly one month has rank 1. Check the 12 values sum to the 2025 total.",
      hint: "Monthly CTE filtered with order_date >= '2025-01-01' AND < '2026-01-01', then RANK() OVER (ORDER BY revenue DESC).",
      answerSql: "WITH m AS (SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' AND o.order_date >= '2025-01-01' AND o.order_date < '2026-01-01' GROUP BY month) SELECT month, revenue, RANK() OVER (ORDER BY revenue DESC) AS revenue_rank FROM m ORDER BY month;",
      dataset: "large",
    },
  ],
  quiz: [
    { id: "q1", question: "What does a window function do that GROUP BY does not?", options: ["Sorts rows", "Keeps every row while calculating across related rows", "Removes duplicates", "Filters groups"], correctIndex: 1, explanation: "OVER computes across a window but returns a value on every row." },
    { id: "q2", question: "Totals 900, 800, 800, 500 ordered DESC. What does DENSE_RANK give 500?", options: ["3", "4", "2", "5"], correctIndex: 0, explanation: "DENSE_RANK: 1, 2, 2, 3 — no gap after the tie." },
    { id: "q3", question: "LAG(order_date) on the first row returns…", options: ["The same date", "NULL", "0", "An error"], correctIndex: 1, explanation: "There is no previous row, so LAG returns NULL unless you give a default." },
    { id: "q4", question: "Why group by DATE_FORMAT(order_date, '%Y-%m') rather than MONTH(order_date)?", options: ["It is faster", "MONTH merges the same month from different years", "MONTH is not allowed in GROUP BY", "No reason"], correctIndex: 1, explanation: "January 2025 and January 2026 would fall into one group with MONTH alone." },
  ],
};
