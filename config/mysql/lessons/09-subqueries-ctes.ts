import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson09: MysqlLesson = {
  slug: "subqueries-ctes",
  shortTitle: "Subqueries and CTEs",
  title: "MySQL subqueries, EXISTS and CTEs (WITH) step by step",
  summary: "Use a query inside a query: scalar subqueries, IN and EXISTS / NOT EXISTS, derived tables, and readable multi-step reports with WITH (common table expressions).",
  module: 3,
  dataset: "shop",
  teaches: ["Subquery", "Scalar subquery", "IN subquery", "EXISTS", "NOT EXISTS", "Correlated subquery", "Derived table", "CTE WITH clause", "COALESCE after LEFT JOIN"],
  quickAnswer: {
    question: "What is a CTE in MySQL?",
    answer:
      "A CTE (common table expression) is a named, temporary result defined with WITH name AS (SELECT …) at the start of a query. The main query can then read it like a table. It exists only while that one statement runs, and it makes multi-step logic readable. MySQL supports CTEs from version 8.0.",
  },
  outcomes: [
    "Compare each row with a single calculated value using a scalar subquery",
    "Filter with IN (subquery), EXISTS and NOT EXISTS — and know the NOT IN + NULL trap",
    "Aggregate first in a derived table or CTE, then join or filter",
    "Chain several CTEs into a readable, reviewable report",
  ],
  sections: [
    {
      heading: "A query inside a query",
      body: "A **subquery** is a SELECT in brackets used inside another statement. The simplest kind returns exactly one value — a **scalar subquery** — and can stand anywhere a number could:",
      sql: "SELECT product_name, price\nFROM products\nWHERE price > (SELECT AVG(price) FROM products)\nORDER BY price DESC;",
      dataset: "shop",
      after: "MySQL runs the inner query first (average = 445), then compares every product with it. You cannot write `WHERE price > AVG(price)` directly — aggregates are not allowed in WHERE (lesson 7).",
    },
    {
      heading: "IN with a subquery",
      body: "When the inner query returns a **list** of values, use IN. Which customers have at least one completed order?",
      sql: "SELECT customer_id, customer_name\nFROM customers\nWHERE customer_id IN (\n  SELECT customer_id FROM orders WHERE status = 'completed'\n)\nORDER BY customer_id;",
      dataset: "shop",
      callout: { kind: "mistake", text: "NOT IN (subquery) returns nothing if the subquery returns even one NULL. With nullable columns, use NOT EXISTS instead." },
    },
    {
      heading: "EXISTS and NOT EXISTS",
      body: "`EXISTS (subquery)` is true when the subquery returns at least one row. The subquery usually refers to the outer row — that makes it a **correlated subquery**, re-evaluated per row. `NOT EXISTS` is the safe, readable way to ask *which rows have no match?*:",
      sql: "SELECT p.product_id, p.product_name\nFROM products p\nWHERE NOT EXISTS (\n  SELECT 1\n  FROM order_items i\n  JOIN orders o ON o.order_id = i.order_id\n  WHERE i.product_id = p.product_id\n    AND o.status = 'completed'\n)\nORDER BY p.product_id;",
      dataset: "shop",
      after: "Planner was only ordered in pending order 107, so it has never been *sold*. `SELECT 1` is a convention: EXISTS only cares whether a row exists, not what it contains.",
    },
    {
      heading: "Derived tables: aggregate first, then use the result",
      body: "A subquery in FROM is a **derived table**. It is how you fix the grain problem from lesson 8: first build one row per order, then analyse those totals.",
      sql: "SELECT ROUND(AVG(t.total), 2) AS average_order_value\nFROM (\n  SELECT o.order_id, SUM(i.quantity * i.unit_price) AS total\n  FROM orders o\n  JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed'\n  GROUP BY o.order_id\n) AS t;",
      dataset: "shop",
      after: "6150 ÷ 6 orders = 1025.00. Averaging the item lines instead (6150 ÷ 12) would give 512.50 — a different, wrong answer to *what is the average order worth?*. A derived table must have an alias (`AS t`).",
    },
    {
      heading: "CTEs: name each step with WITH",
      body: `A **CTE** does the same as a derived table but puts the step *first* and gives it a name, so the query reads top to bottom like a recipe:

\`\`\`sql
WITH step_name AS (
  SELECT …
)
SELECT … FROM step_name;
\`\`\`

The CTE exists only while this one statement runs. It is not saved — that is what views are for (lesson 14).`,
      sql: "WITH order_totals AS (\n  SELECT o.order_id, o.customer_id, SUM(i.quantity * i.unit_price) AS total\n  FROM orders o\n  JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed'\n  GROUP BY o.order_id, o.customer_id\n)\nSELECT order_id, total\nFROM order_totals\nWHERE total > (SELECT AVG(total) FROM order_totals)\nORDER BY order_id;",
      dataset: "shop",
      after: "Orders above the 1025 average: 102, 103, 106 and 108. Notice the CTE is used twice — in FROM and inside the scalar subquery.",
    },
    {
      heading: "Chain CTEs for a full report",
      body: "Separate several CTEs with commas. Each one can read the ones before it. Here: revenue per customer, then every customer — including those with no completed orders — shown with 0:",
      sql: "WITH order_totals AS (\n  SELECT o.order_id, o.customer_id, SUM(i.quantity * i.unit_price) AS total\n  FROM orders o\n  JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed'\n  GROUP BY o.order_id, o.customer_id\n),\ncustomer_revenue AS (\n  SELECT customer_id, COUNT(*) AS orders, SUM(total) AS revenue\n  FROM order_totals\n  GROUP BY customer_id\n)\nSELECT c.customer_name,\n       COALESCE(r.orders, 0)  AS orders,\n       COALESCE(r.revenue, 0) AS revenue\nFROM customers c\nLEFT JOIN customer_revenue r ON r.customer_id = c.customer_id\nORDER BY revenue DESC, c.customer_id;",
      dataset: "shop",
      after: "The revenue column sums to 6150, the same control total as lesson 8. `COALESCE(…, 0)` turns *no data* (NULL from the LEFT JOIN) into a real zero for the report.",
      callout: { kind: "business", text: "Reviewers can check a CTE report one step at a time: run each CTE on its own, confirm its row count and total, then move on. That is why analysts prefer CTEs for anything they hand over." },
    },
    {
      heading: "Subqueries in the SELECT list",
      body: "A scalar subquery can also produce a column. When it refers to the outer row it is correlated: MySQL runs it once per row. It reads naturally for small lookups — *how many orders does each customer have?* — and keeps customers with zero orders without a LEFT JOIN:",
      sql: "SELECT c.customer_name,\n       (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.customer_id) AS orders,\n       (SELECT MAX(o.order_date) FROM orders o WHERE o.customer_id = c.customer_id) AS last_order\nFROM customers c\nORDER BY c.customer_id;",
      dataset: "shop",
      after: "Farah shows 0 orders and a NULL last order. On very large tables a correlated subquery per column can be slow; a grouped CTE joined once is usually faster and easier to extend.",
      callout: { kind: "tip", text: "Choose the form that reads best for the question: IN / EXISTS for filters, a scalar subquery for one extra value, a CTE for anything with more than one step." },
    },
  ],
  mistakes: [
    { wrong: "WHERE price > AVG(price)", why: "Aggregates are not allowed in WHERE (error 1111).", fix: "WHERE price > (SELECT AVG(price) FROM products)" },
    { wrong: "WHERE customer_id NOT IN (SELECT referrer_id FROM …)  -- column has NULLs", why: "One NULL in the list makes NOT IN unknown for every row, so nothing is returned.", fix: "WHERE NOT EXISTS (SELECT 1 FROM … WHERE referrer_id = c.customer_id)" },
    { wrong: "Averaging order_items rows to get the average order value", why: "That is the average item line (512.50), not the average order (1025.00).", fix: "Aggregate to one row per order in a CTE, then AVG." },
    { wrong: "FROM (SELECT …)  -- no alias", why: "Every derived table needs a name (error 1248).", fix: "FROM (SELECT …) AS t" },
  ],
  checkYourself: [
    "When does a subquery have to return exactly one value, and what happens if it returns two?",
    "Why is NOT EXISTS safer than NOT IN?",
    "What is the difference between a CTE and a view?",
  ],
  faq: [
    { q: "Does MySQL support CTEs (WITH clause)?", a: "Yes, from MySQL 8.0, including recursive CTEs (WITH RECURSIVE). MySQL 5.7 does not support them." },
    { q: "Is a CTE faster than a subquery?", a: "Usually they perform the same: MySQL can merge both into the outer query. Choose CTEs for readability and when one step is reused." },
    { q: "When should I use EXISTS instead of IN?", a: "Use EXISTS / NOT EXISTS when checking whether related rows exist, especially for 'no match' questions, because NOT IN breaks when the subquery returns NULL." },
  ],
  guided: {
    intro: "Build the average-order-value report in two steps, checking each one.",
    steps: [
      "Run the query: the average of the six completed order totals is 1025.00.",
      "Replace the last SELECT with SELECT * FROM totals ORDER BY order_id; to inspect the step — 6 rows.",
      "Check that the six totals add up to 6150 with SELECT SUM(total) FROM totals;.",
      "Now find orders above the average: SELECT order_id, total FROM totals WHERE total > (SELECT AVG(total) FROM totals);",
    ],
    sql: "WITH totals AS (\n  SELECT o.order_id, SUM(i.quantity * i.unit_price) AS total\n  FROM orders o\n  JOIN order_items i ON i.order_id = o.order_id\n  WHERE o.status = 'completed'\n  GROUP BY o.order_id\n)\nSELECT ROUND(AVG(total), 2) AS average_order\nFROM totals;",
    dataset: "shop",
    explain: "One row: average_order = 1025.00.",
  },
  questions: pick("L7", "L7-O1", "L7-O2", "L7-O3", "L7-O4", "L7-N01", "L7-N02", "L7-N03", "L7-N04", "L7-N05", "L7-N06", "L7-N07", "L7-N08", "L7-N09", "L7-N10", "L7-N11", "L7-N12", "L7-N13", "L7-N14", "L7-N15"),
  quiz: [
    { id: "q1", question: "What must a scalar subquery return?", options: ["Any number of rows", "Exactly one column and at most one row", "A table with an alias", "Only numbers"], correctIndex: 1, explanation: "A scalar subquery stands in for a single value. More rows raise error 1242." },
    { id: "q2", question: "Why can NOT IN return no rows unexpectedly?", options: ["It is slow", "The subquery returned a NULL", "IN needs ORDER BY", "It only works on numbers"], correctIndex: 1, explanation: "x NOT IN (…, NULL) is never true, so every row is filtered out." },
    { id: "q3", question: "How long does a CTE exist?", options: ["Until the server restarts", "Until you DROP it", "Only while its statement runs", "For the session"], correctIndex: 2, explanation: "A CTE is part of one statement. Use a view or table to keep a result." },
    { id: "q4", question: "Average order value for the shop is 1025.00. Why does AVG over order_items rows give 512.50?", options: ["Rounding", "It averages item lines, not orders", "It includes cancelled orders", "AVG ignores NULL"], correctIndex: 1, explanation: "12 item lines share the 6150 revenue; you need one row per order before averaging." },
  ],
};
