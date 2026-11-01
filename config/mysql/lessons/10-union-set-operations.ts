import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string, check?: Question["check"]): Question => ({
  id: `M10-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql, ...(check ? { check } : {}),
});

export const lesson10: MysqlLesson = {
  slug: "union-set-operations",
  shortTitle: "UNION and set thinking",
  title: "MySQL UNION vs UNION ALL, INTERSECT and EXCEPT",
  summary: "Stack the results of several queries with UNION and UNION ALL, compare sets with INTERSECT and EXCEPT, add total rows, and emulate a FULL OUTER JOIN.",
  module: 3,
  dataset: "shop",
  teaches: ["UNION", "UNION ALL", "UNION vs UNION ALL", "INTERSECT", "EXCEPT", "Set operations", "FULL OUTER JOIN in MySQL", "Total row"],
  quickAnswer: {
    question: "What is the difference between UNION and UNION ALL?",
    answer:
      "Both stack the rows of two SELECTs into one result. UNION removes duplicate rows, which costs a sort or hash step; UNION ALL keeps every row, including duplicates, and is faster. Use UNION ALL unless you specifically need duplicates removed. Both SELECTs must return the same number of columns.",
  },
  outcomes: [
    "Stack query results with UNION ALL and remove duplicates with UNION",
    "Follow the rules: same column count, compatible types, names from the first SELECT, one ORDER BY at the end",
    "Find common and missing values with INTERSECT and EXCEPT (MySQL 8.0.31+)",
    "Add a TOTAL row to a report and emulate FULL OUTER JOIN",
  ],
  sections: [
    {
      heading: "JOIN goes sideways, UNION goes down",
      body: `A **JOIN** adds *columns*: it puts related facts side by side. A **UNION** adds *rows*: it stacks the results of two queries on top of each other.

Use UNION when the same kind of row comes from different places — this year's and last year's tables, sales and refunds, problems found by different checks.`,
      sql: "SELECT 'customer' AS kind, customer_name AS name FROM customers\nUNION ALL\nSELECT 'product', product_name FROM products\nORDER BY kind, name;",
      dataset: "shop",
      after: "Twelve rows: six customers on top of six products. The column names come from the **first** SELECT (`kind`, `name`).",
    },
    {
      heading: "UNION ALL keeps everything, UNION removes duplicates",
      body: "Take the cities of customers 1–3 (Pune, Mumbai, Pune) and customers 4–6 (Delhi, Mumbai, Jaipur):",
      sql: "SELECT city FROM customers WHERE customer_id <= 3\nUNION\nSELECT city FROM customers WHERE customer_id > 3\nORDER BY city;",
      dataset: "shop",
      after: "`UNION` returns 4 distinct cities. Change it to `UNION ALL` and you get all 6 rows, Pune and Mumbai twice. Removing duplicates needs extra work from the server, so **use UNION ALL unless you need deduplication** — and say so in a comment when you do.",
      callout: { kind: "remember", text: "UNION = stacked and deduplicated. UNION ALL = stacked, every row kept, faster." },
    },
    {
      heading: "The rules of a UNION",
      body: `1. Every SELECT must return the **same number of columns** — otherwise error 1222.
2. Columns are matched **by position**, not by name, so keep the order identical. Types should be compatible (do not stack a date on top of a price).
3. The output column names come from the **first** SELECT.
4. **ORDER BY and LIMIT go once, at the very end**, and apply to the combined result. To sort or limit one part, wrap that part in brackets.`,
      sql: "SELECT order_id, 'needs follow-up' AS reason FROM orders WHERE status = 'pending'\nUNION ALL\nSELECT order_id, 'refund check' FROM orders WHERE status = 'cancelled'\nORDER BY order_id;",
      dataset: "shop",
    },
    {
      heading: "Add a TOTAL row",
      body: "Reports often end with a total. A grouped query UNION ALL a one-row total does it; a wrapper query sorts the total last:",
      sql: "SELECT label, orders FROM (\n  SELECT status AS label, COUNT(*) AS orders FROM orders GROUP BY status\n  UNION ALL\n  SELECT 'TOTAL', COUNT(*) FROM orders\n) AS report\nORDER BY label = 'TOTAL', label;",
      dataset: "shop",
      after: "`ORDER BY label = 'TOTAL'` sorts by a true/false value: false (0) first, true (1) last. The parts — 1 + 6 + 1 — reconcile to the total, 8.",
      callout: { kind: "business", text: "A TOTAL row that you calculate separately (not by summing the rows above) is a built-in check: if the two ever disagree, a filter is wrong." },
    },
    {
      heading: "INTERSECT and EXCEPT",
      body: `MySQL **8.0.31** added two more set operators:

- \`A INTERSECT B\` — rows that appear in **both** results.
- \`A EXCEPT B\` — rows in A that are **not** in B.

Like UNION, both remove duplicates. Which customers have never placed an order?`,
      sql: "SELECT customer_id FROM customers\nEXCEPT\nSELECT customer_id FROM orders\nORDER BY customer_id;",
      dataset: "shop",
      after: "Customer 6 (Farah). On MySQL older than 8.0.31, write the same thing with `NOT EXISTS` or a LEFT JOIN … IS NULL (lessons 8 and 9).",
    },
    {
      heading: "Emulate FULL OUTER JOIN",
      body: "MySQL has no FULL OUTER JOIN. Combine a LEFT JOIN (everything on the left) with a RIGHT JOIN (everything on the right) using UNION, which also removes the rows both halves share:",
      sql: "SELECT c.customer_id, c.customer_name, o.order_id\nFROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id\nUNION\nSELECT c.customer_id, c.customer_name, o.order_id\nFROM customers c RIGHT JOIN orders o ON o.customer_id = c.customer_id\nORDER BY customer_id, order_id;",
      dataset: "shop",
      after: "Nine rows: every order with its customer, plus Farah with no order. In this clean dataset every order has a customer, so the RIGHT JOIN half adds nothing new — with messy data it would surface orphan orders.",
    },
    {
      heading: "Set thinking: when to use which tool",
      body: `Many questions can be answered with more than one technique. Pick the one whose shape matches the question:

| Question | Natural tool | Why |
|---|---|---|
| *Show customer details next to each order* | JOIN | adds columns side by side |
| *One list of events from two places* | UNION ALL | stacks rows of the same shape |
| *Which ids appear in both lists?* | INTERSECT or IN / EXISTS | tests membership |
| *Which ids are missing from the other list?* | EXCEPT or NOT EXISTS | tests absence, safe with NULLs |
| *Totals plus a grand total* | GROUP BY + UNION ALL | parts and whole in one result |

When two approaches give the same rows, prefer the one a colleague will understand first. Then confirm both return the same row count on real data — a quick way to catch a mistake in either.`,
    },
  ],
  mistakes: [
    { wrong: "SELECT customer_id, customer_name FROM customers UNION SELECT product_id FROM products;", why: "Different column counts (error 1222).", fix: "Return the same number of columns from every SELECT." },
    { wrong: "Putting ORDER BY inside the first SELECT of a UNION", why: "It is either a syntax error or ignored; ORDER BY applies to the whole result.", fix: "Write one ORDER BY at the end (or wrap a part in brackets with its own LIMIT)." },
    { wrong: "Using UNION when you need every row", why: "UNION silently removes duplicate rows — two identical sales would count once.", fix: "UNION ALL, unless you really want deduplication." },
  ],
  checkYourself: [
    "When would you choose UNION over a JOIN?",
    "Why is UNION ALL usually faster than UNION?",
    "How would you find customers in Pune who have never ordered, without INTERSECT or EXCEPT?",
  ],
  faq: [
    { q: "Does MySQL support INTERSECT and EXCEPT?", a: "Yes, from MySQL 8.0.31. On older versions use IN / EXISTS for INTERSECT and NOT EXISTS or LEFT JOIN … IS NULL for EXCEPT." },
    { q: "Do UNION column names have to match?", a: "No. Columns are matched by position; the result uses the names from the first SELECT. Only the number of columns must match, and the types should be compatible." },
    { q: "Can I use ORDER BY with UNION?", a: "Yes, once at the end, and it sorts the combined result. Refer to the column names of the first SELECT." },
  ],
  guided: {
    intro: "Build a follow-up list from two different conditions.",
    steps: [
      "Run the query: pending and cancelled orders with a reason each.",
      "Add a third part: UNION ALL SELECT order_id, 'high value' FROM orders o WHERE (SELECT SUM(quantity * unit_price) FROM order_items i WHERE i.order_id = o.order_id) > 1300.",
      "Change the first UNION ALL to UNION — nothing changes, because no row is an exact duplicate.",
      "Remove the reason column from one part only and read error 1222.",
    ],
    sql: "SELECT order_id, 'needs follow-up' AS reason FROM orders WHERE status = 'pending'\nUNION ALL\nSELECT order_id, 'refund check' FROM orders WHERE status = 'cancelled'\nORDER BY order_id;",
    dataset: "shop",
    explain: "Two rows: (104, refund check) and (107, needs follow-up).",
  },
  questions: [
    q(1, "Easy", "Make one list of all customer names and all product names in a single column called name.", "12 rows: 6 customers and 6 products", "UNION ALL two single-column SELECTs.", "SELECT customer_name AS name FROM customers UNION ALL SELECT product_name FROM products;"),
    q(2, "Easy", "List the cities of customers 1–3 and of customers 4–6 as one de-duplicated list, A to Z.", "4 rows: Delhi, Jaipur, Mumbai, Pune", "UNION removes duplicates.", "SELECT city FROM customers WHERE customer_id <= 3 UNION SELECT city FROM customers WHERE customer_id > 3 ORDER BY city;"),
    q(3, "Easy", "Same as the previous problem, but keep the duplicates.", "6 rows: Pune and Mumbai appear twice", "UNION ALL.", "SELECT city FROM customers WHERE customer_id <= 3 UNION ALL SELECT city FROM customers WHERE customer_id > 3 ORDER BY city;"),
    q(4, "Easy", "List customers and products together with a kind column saying 'customer' or 'product'.", "12 rows; kind is customer for 6 rows and product for 6", "Add a text constant as the first column of each SELECT.", "SELECT 'customer' AS kind, customer_name AS name FROM customers UNION ALL SELECT 'product', product_name FROM products ORDER BY kind, name;"),
    q(5, "Medium", "Using UNION ALL, list pending orders and cancelled orders, in order_id order.", "2 rows: 104 cancelled, 107 pending", "Two SELECTs on orders with different WHERE; one ORDER BY at the end.", "SELECT order_id, status FROM orders WHERE status = 'pending' UNION ALL SELECT order_id, status FROM orders WHERE status = 'cancelled' ORDER BY order_id;"),
    q(6, "Medium", "List every customer_id that appears in orders, plus every customer from Jaipur, without duplicates.", "6 rows: 1, 2, 3, 4, 5, 6", "UNION the two id lists.", "SELECT customer_id FROM orders UNION SELECT customer_id FROM customers WHERE city = 'Jaipur' ORDER BY customer_id;"),
    q(7, "Medium", "Combine Electronics products costing 1000 or more with Stationery products costing under 50.", "2 rows: Keyboard 1200.00, Pen 20.00", "Two filtered SELECTs on products.", "SELECT product_name, price FROM products WHERE category = 'Electronics' AND price >= 1000 UNION ALL SELECT product_name, price FROM products WHERE category = 'Stationery' AND price < 50 ORDER BY price DESC;"),
    q(8, "Medium", "Order count per status, followed by a TOTAL row as the last row.", "4 rows: cancelled 1, completed 6, pending 1, TOTAL 8", "Wrap the UNION ALL and sort by label = 'TOTAL', label.", "SELECT label, orders FROM (SELECT status AS label, COUNT(*) AS orders FROM orders GROUP BY status UNION ALL SELECT 'TOTAL', COUNT(*) FROM orders) AS r ORDER BY label = 'TOTAL', label;"),
    q(9, "Medium", "Find customer ids that have a completed order AND live in Pune, using INTERSECT.", "1 row: 1 (Asha) — Charu's only order was cancelled", "SELECT customer_id … INTERSECT SELECT customer_id …", "SELECT customer_id FROM orders WHERE status = 'completed' INTERSECT SELECT customer_id FROM customers WHERE city = 'Pune';"),
    q(10, "Hard", "Find customers who never placed an order, using EXCEPT.", "1 row: 6", "All customer ids EXCEPT ids that appear in orders.", "SELECT customer_id FROM customers EXCEPT SELECT customer_id FROM orders ORDER BY customer_id;"),
    q(11, "Hard", "Which products were sold in completed orders but never in January? Use EXCEPT on product_id.", "1 row: 5 (Keyboard)", "Products in completed orders EXCEPT products in orders dated before 2026-02-01.", "SELECT i.product_id FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'completed' EXCEPT SELECT i.product_id FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.order_date < '2026-02-01' ORDER BY product_id;"),
    q(12, "Hard", "Emulate a FULL OUTER JOIN between customers and orders (customer_id, customer_name, order_id).", "9 rows; Farah appears with order_id NULL", "LEFT JOIN … UNION … RIGHT JOIN.", "SELECT c.customer_id, c.customer_name, o.order_id FROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id UNION SELECT c.customer_id, c.customer_name, o.order_id FROM customers c RIGHT JOIN orders o ON o.customer_id = c.customer_id ORDER BY customer_id, order_id;"),
    q(13, "Hard", "Run a UNION whose two SELECTs return 2 and 1 columns, and record the error number.", "Error 1222: different number of columns", "SELECT customer_id, customer_name … UNION SELECT product_id …", "SELECT customer_id, customer_name FROM customers UNION SELECT product_id FROM products;", { expectError: 1222 }),
    q(14, "Hard", "Build a timeline: completed orders as 'sale' and cancelled orders as 'refund', with their dates, oldest first.", "7 rows; 101 sale first, 104 refund on 2026-02-10, 108 sale last", "Two SELECTs with a text event column; ORDER BY order_date.", "SELECT order_date, order_id, 'sale' AS event FROM orders WHERE status = 'completed' UNION ALL SELECT order_date, order_id, 'refund' FROM orders WHERE status = 'cancelled' ORDER BY order_date, order_id;"),
    q(15, "Professional", "Finance wants completed revenue per month plus a TOTAL row that is calculated separately.", "4 rows: 2026-01 1600.00, 2026-02 1950.00, 2026-03 2600.00, TOTAL 6150.00", "Monthly GROUP BY UNION ALL one SUM over all completed items; sort TOTAL last.", "SELECT period, revenue FROM (SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS period, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY period UNION ALL SELECT 'TOTAL', SUM(i.quantity * i.unit_price) FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed') AS r ORDER BY period = 'TOTAL', period;"),
    q(16, "Professional", "One data-quality list: customers with no email and customers with no orders, each with an issue column.", "2 rows: Charu — missing email; Farah — no orders", "UNION ALL two checks that return customer_name and an issue label.", "SELECT customer_name, 'missing email' AS issue FROM customers WHERE email IS NULL UNION ALL SELECT c.customer_name, 'no orders' FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id) ORDER BY customer_name;"),
  ],
  quiz: [
    { id: "q1", question: "SELECT city FROM customers UNION SELECT city FROM customers; returns how many rows for the shop?", options: ["12", "6", "4", "1"], correctIndex: 2, explanation: "UNION removes duplicates across the whole result: 4 distinct cities." },
    { id: "q2", question: "Which is required for a UNION?", options: ["Same column names", "Same number of columns", "A JOIN condition", "ORDER BY in every SELECT"], correctIndex: 1, explanation: "Columns are matched by position; the counts must match." },
    { id: "q3", question: "Where does ORDER BY go in a UNION?", options: ["In every SELECT", "Only in the first SELECT", "Once, at the end", "It is not allowed"], correctIndex: 2, explanation: "One ORDER BY at the end sorts the combined result." },
    { id: "q4", question: "A EXCEPT B returns…", options: ["Rows in both", "Rows in A that are not in B", "Rows in B that are not in A", "All rows"], correctIndex: 1, explanation: "EXCEPT subtracts B from A (MySQL 8.0.31+)." },
  ],
};
