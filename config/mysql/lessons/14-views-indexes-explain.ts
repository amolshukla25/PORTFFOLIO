import { pick } from "../bank";
import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string, extra: Partial<Question> = {}): Question => ({
  id: `M14-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql, ...extra,
});

const ORDER_TOTALS_VIEW =
  "CREATE VIEW completed_order_totals AS SELECT o.order_id, o.customer_id, o.order_date, SUM(i.quantity * i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY o.order_id, o.customer_id, o.order_date;";

export const lesson14: MysqlLesson = {
  slug: "views-indexes-explain",
  shortTitle: "Views, indexes and EXPLAIN",
  title: "MySQL views, indexes and EXPLAIN: reusable queries and faster lookups",
  summary: "Save a query as a view, add the right index, read EXPLAIN (type, key, rows) on a 4,000-order dataset, and turn data-quality checks into reusable views.",
  module: 5,
  dataset: "shop",
  teaches: ["CREATE VIEW", "CREATE OR REPLACE VIEW", "Index", "CREATE INDEX", "Composite index", "Leftmost prefix", "EXPLAIN", "Query plan type ref range ALL", "Data quality checks"],
  quickAnswer: {
    question: "What does EXPLAIN show in MySQL?",
    answer:
      "EXPLAIN shows how MySQL plans to run a query without running it. Read three columns first: type (ALL = full table scan; ref, range or const = using an index), key (the index chosen, or NULL) and rows (MySQL's estimate of rows to examine). A full scan on a large table usually means a missing or unusable index.",
  },
  outcomes: [
    "Save a reporting query as a view and query it like a table",
    "Explain what an index is, when it helps and what it costs",
    "Create single-column and composite indexes and apply the leftmost-prefix rule",
    "Read EXPLAIN's type, key and rows columns",
    "Package data-quality checks as views",
  ],
  sections: [
    {
      heading: "Views: save a query under a name",
      body: "A **view** is a stored SELECT. It holds no data of its own — every time you read it, MySQL runs the query underneath. Views give a complicated query a simple name, keep business rules (*revenue = completed orders only*) in one place, and can expose only some columns to some users.",
      sql: `${ORDER_TOTALS_VIEW.replace(" AS SELECT", " AS\nSELECT").replace(" FROM orders", "\nFROM orders").replace(" WHERE", "\nWHERE").replace(" GROUP BY", "\nGROUP BY")}\n\nSELECT * FROM completed_order_totals ORDER BY order_id;`,
      dataset: "shop",
      after: "Six rows, one per completed order. Anyone who needs order totals now writes `SELECT … FROM completed_order_totals` and cannot forget the status filter or the grain.",
    },
    {
      heading: "Build on a view, change a view",
      body: "Views can be joined, filtered and grouped like tables — and used by other views. `CREATE OR REPLACE VIEW` changes the definition without dropping it first; `DROP VIEW name` removes it (the underlying tables are untouched).",
      sql: `${ORDER_TOTALS_VIEW}\nSELECT c.customer_name, COUNT(*) AS orders, SUM(t.total) AS revenue\nFROM completed_order_totals t\nJOIN customers c ON c.customer_id = t.customer_id\nGROUP BY c.customer_id, c.customer_name\nORDER BY revenue DESC;`,
      dataset: "shop",
      callout: { kind: "remember", text: "A view is a saved query, not a saved result. It always shows the current data, and it is only as fast as the query inside it." },
    },
    {
      heading: "What an index is",
      body: `Without help, finding all orders of customer 42 means reading **every** order — a *full table scan*. An **index** is a sorted copy of one or more columns with pointers back to the rows, like the index at the back of a book: jump to “42”, read the page numbers, done.

MySQL (InnoDB) already indexes:
- every **PRIMARY KEY** (the table itself is stored in primary-key order),
- every **UNIQUE** column,
- every **FOREIGN KEY** column — that is the \`customer_id\` index you saw in lesson 3.

Indexes are not free: each one uses disk space and must be updated on every INSERT, UPDATE and DELETE. Add them for real queries, not *just in case*.`,
    },
    {
      heading: "Reading EXPLAIN",
      body: `Put \`EXPLAIN\` in front of a SELECT to see the plan instead of the result. On the **large dataset** (4,000 orders), filter orders by date — a column with no index:`,
      sql: "EXPLAIN SELECT order_id, order_date FROM orders\nWHERE order_date >= '2026-03-01' AND order_date < '2026-04-01';",
      dataset: "large",
      after: `The columns to read first:

| Column | Meaning | Good signs |
|---|---|---|
| **type** | how rows are found | \`const\`, \`eq_ref\`, \`ref\`, \`range\` use an index; **\`ALL\` = full scan** |
| **key** | index actually used | a name, not NULL |
| **rows** | estimated rows examined | close to the number you need |
| **Extra** | notes | *Using index* is great; *Using filesort* / *Using temporary* cost extra on big results |

Here type is **ALL** and rows is about 4,000: MySQL reads every order to find one month.`,
    },
    {
      heading: "Add an index and compare",
      body: "Create an index on `order_date` and run the same EXPLAIN:",
      sql: "CREATE INDEX idx_orders_order_date ON orders (order_date);\nEXPLAIN SELECT order_id, order_date FROM orders\nWHERE order_date >= '2026-03-01' AND order_date < '2026-04-01';",
      dataset: "large",
      after: "Now type is **range**, key is **idx_orders_order_date**, and rows drops to roughly the orders in March. The index even contains both selected columns (order_date plus the primary key), so Extra says *Using index*: MySQL never touches the table itself.",
      callout: { kind: "mistake", text: "Wrapping an indexed column in a function hides it from the index: WHERE YEAR(order_date) = 2026 scans everything. Write a range instead: order_date >= '2026-01-01' AND order_date < '2027-01-01'." },
    },
    {
      heading: "Composite indexes and the leftmost prefix",
      body: `An index on several columns, \`(status, order_date)\`, is sorted by status first, then by date inside each status. It can serve queries that filter on:

- \`status\` alone ✔
- \`status\` **and** \`order_date\` ✔ (best for *completed orders in March*)
- \`order_date\` alone ✘ — the dates are scattered across the status groups.

That is the **leftmost-prefix rule**: an index helps from its first column onwards. Put the column you test with \`=\` first and the range column last.`,
      sql: "CREATE INDEX idx_orders_status_date ON orders (status, order_date);\nEXPLAIN SELECT COUNT(*) FROM orders\nWHERE status = 'completed'\n  AND order_date >= '2026-03-01' AND order_date < '2026-04-01';",
      dataset: "large",
      callout: { kind: "business", text: "Never claim a speed-up from a tiny table: with 8 orders MySQL may ignore every index because scanning is cheaper. Measure on realistic data, and record EXPLAIN before and after." },
    },
    {
      heading: "Data-quality checks as views",
      body: "Professionals run the same checks after every import: orphans, duplicates, impossible values. Save them as one view that returns **zero problems** when the data is healthy:",
      sql: "CREATE VIEW data_quality AS\nSELECT 'orphan items' AS check_name, COUNT(*) AS problems\n  FROM order_items i LEFT JOIN orders o ON o.order_id = i.order_id WHERE o.order_id IS NULL\nUNION ALL\nSELECT 'orders without items', COUNT(*)\n  FROM orders o WHERE NOT EXISTS (SELECT 1 FROM order_items i WHERE i.order_id = o.order_id)\nUNION ALL\nSELECT 'non-positive prices', COUNT(*) FROM products WHERE price <= 0\nUNION ALL\nSELECT 'missing customer emails', COUNT(*) FROM customers WHERE email IS NULL;\n\nSELECT * FROM data_quality;",
      dataset: "shop",
      after: "Three zeros and one known exception (Charu has no email). Constraints from lesson 12 make the first three impossible; the view proves it and catches anything a future change breaks.",
    },
  ],
  mistakes: [
    { wrong: "Adding an index to every column", why: "Each index slows every write and uses space; most will never be used.", fix: "Index columns used in WHERE, JOIN and ORDER BY of real, frequent queries." },
    { wrong: "WHERE YEAR(order_date) = 2026", why: "A function on the column prevents index use (type ALL).", fix: "WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01'" },
    { wrong: "Index (order_date, status) for WHERE status = 'completed'", why: "Leftmost-prefix: the index is sorted by date first.", fix: "Index (status, order_date) — equality column first." },
    { wrong: "Thinking a view stores a copy of the data", why: "It re-runs its query every time.", fix: "Use a real table (refreshed by a job) when you need a stored snapshot." },
  ],
  checkYourself: [
    "In EXPLAIN, what do type = ALL and key = NULL tell you together?",
    "Which queries can use an index on (status, order_date), and which cannot?",
    "What does a view store?",
  ],
  faq: [
    { q: "Does a MySQL view store data?", a: "No. A view stores only its SELECT statement; the data is read from the base tables each time. MySQL has no materialised views — use a summary table refreshed on a schedule instead." },
    { q: "How do I know if MySQL uses my index?", a: "Run EXPLAIN on the query. The key column names the index used; type ref, range, eq_ref or const means index access, while ALL means a full table scan." },
    { q: "Do foreign keys create indexes in MySQL?", a: "Yes. InnoDB requires an index on foreign-key columns and creates one automatically if none exists." },
  ],
  guided: {
    intro: "Create a view, then use it to answer two questions without repeating the logic.",
    steps: [
      "Run the script: the view is created and its six rows are listed.",
      "Replace the last SELECT with SELECT ROUND(AVG(total), 2) FROM completed_order_totals; — 1025.00 again.",
      "Switch to the Large dataset and run the script again — the same view now summarises 4,000 orders.",
      "On Large, run EXPLAIN SELECT * FROM orders WHERE customer_id = 42; and find the key column (it uses the foreign-key index).",
    ],
    sql: `${ORDER_TOTALS_VIEW}\nSELECT * FROM completed_order_totals ORDER BY order_id;`,
    dataset: "shop",
    explain: "Six rows: 101 300.00, 102 1300.00, 103 1400.00, 105 550.00, 106 1300.00, 108 1300.00.",
  },
  questions: [
    q(1, "Easy", "Create the completed_order_totals view (order_id, customer_id, order_date, total for completed orders) and list it.", "6 rows; totals 300, 1300, 1400, 550, 1300, 1300", "CREATE VIEW … AS SELECT … GROUP BY …; then SELECT * FROM the view.", `${ORDER_TOTALS_VIEW} SELECT * FROM completed_order_totals ORDER BY order_id;`),
    q(2, "Easy", "Using the view, list completed orders worth more than 1000.", "4 rows: 102, 103, 106, 108", "Filter the view like a table.", `${ORDER_TOTALS_VIEW} SELECT order_id, total FROM completed_order_totals WHERE total > 1000 ORDER BY order_id;`),
    q(3, "Medium", "Create a second view customer_revenue on top of completed_order_totals (customer_name, orders, revenue) and list it, highest revenue first.", "3 rows: Bilal 2600.00, Dev 1850.00, Asha 1700.00", "A view can select from another view.", `${ORDER_TOTALS_VIEW} CREATE VIEW customer_revenue AS SELECT c.customer_name, COUNT(*) AS orders, SUM(t.total) AS revenue FROM completed_order_totals t JOIN customers c ON c.customer_id = t.customer_id GROUP BY c.customer_id, c.customer_name; SELECT * FROM customer_revenue ORDER BY revenue DESC;`),
    q(4, "Medium", "Create a view of Pune customers, then replace it with CREATE OR REPLACE VIEW so it shows Mumbai customers, and query it.", "2 rows: Bilal, Esha", "CREATE OR REPLACE VIEW keeps the name and swaps the query.", "CREATE VIEW city_customers AS SELECT customer_id, customer_name FROM customers WHERE city = 'Pune'; CREATE OR REPLACE VIEW city_customers AS SELECT customer_id, customer_name FROM customers WHERE city = 'Mumbai'; SELECT * FROM city_customers ORDER BY customer_id;"),
    q(5, "Medium", "Create an index on orders(order_date) and list the index names on orders.", "PRIMARY, customer_id and idx_orders_order_date", "CREATE INDEX …; SHOW INDEX FROM orders;", "CREATE INDEX idx_orders_order_date ON orders (order_date); SHOW INDEX FROM orders;", { check: { manual: true } }),
    q(6, "Hard", "Create a view unsold_products listing products that never appear in a completed order, and query it.", "1 row: Planner", "NOT EXISTS with a join to orders filtered on status.", "CREATE VIEW unsold_products AS SELECT p.product_id, p.product_name FROM products p WHERE NOT EXISTS (SELECT 1 FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE i.product_id = p.product_id AND o.status = 'completed'); SELECT * FROM unsold_products;"),
    q(7, "Hard", "Large dataset: count customer 42's orders by status.", "Up to 3 rows (completed / cancelled / pending) whose counts add up to customer 42's order count", "WHERE customer_id = 42 GROUP BY status — this lookup uses the foreign-key index.", "SELECT status, COUNT(*) AS orders FROM orders WHERE customer_id = 42 GROUP BY status ORDER BY status;", { dataset: "large" }),
    q(8, "Hard", "Large dataset: add a composite index for status + order_date, then count completed orders in March 2026.", "1 row: the number of completed March 2026 orders (same answer with or without the index)", "CREATE INDEX … ON orders (status, order_date); then a half-open date range.", "CREATE INDEX idx_orders_status_date ON orders (status, order_date); SELECT COUNT(*) AS completed_march FROM orders WHERE status = 'completed' AND order_date >= '2026-03-01' AND order_date < '2026-04-01';", { dataset: "large" }),
    q(9, "Professional", "Create a monthly_revenue view (month, revenue for completed orders) and query it with a running total.", "3 rows: 2026-01 1600 / 1600, 2026-02 1950 / 3550, 2026-03 2600 / 6150", "View for the grouping; window SUM in the outer query.", "CREATE VIEW monthly_revenue AS SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY month; SELECT month, revenue, SUM(revenue) OVER (ORDER BY month ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM monthly_revenue ORDER BY month;"),
    ...pick("L9", "L9-O3", "L9-N10", "L9-N11", "L9-N12", "L9-N13", "L9-N15"),
  ],
  quiz: [
    { id: "q1", question: "EXPLAIN shows type = ALL and key = NULL on a big table. What does it mean?", options: ["The query is cached", "A full table scan with no index used", "The query failed", "All indexes were used"], correctIndex: 1, explanation: "ALL means every row is read; NULL key means no index helped." },
    { id: "q2", question: "Which query can use an index on (status, order_date)?", options: ["WHERE order_date > '2026-03-01'", "WHERE status = 'completed' AND order_date > '2026-03-01'", "WHERE YEAR(order_date) = 2026", "WHERE customer_id = 4"], correctIndex: 1, explanation: "The index starts with status; date alone or a function on the date cannot use it." },
    { id: "q3", question: "What does a view store?", options: ["A copy of the rows", "Its SELECT statement", "An index", "Nothing — it is deleted after use"], correctIndex: 1, explanation: "Views are saved queries that run on read." },
    { id: "q4", question: "What is the main cost of an extra index?", options: ["Slower SELECTs", "Slower writes and more storage", "Less security", "It disables foreign keys"], correctIndex: 1, explanation: "Every INSERT, UPDATE and DELETE must also maintain each index." },
  ],
};
