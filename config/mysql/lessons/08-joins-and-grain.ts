import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson08: MysqlLesson = {
  slug: "joins-and-grain",
  shortTitle: "Joins and grain",
  title: "MySQL JOIN explained: INNER, LEFT, self join and double counting",
  summary: "Combine tables with INNER JOIN and LEFT JOIN, find rows with no match, join a table to itself, and avoid the double counting that row expansion causes.",
  module: 3,
  dataset: "shop",
  teaches: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN", "Self join", "Table alias", "Anti-join", "Join row expansion", "COUNT DISTINCT after join"],
  quickAnswer: {
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer:
      "INNER JOIN returns only rows that have a match in both tables. LEFT JOIN returns every row from the left table and fills the right table's columns with NULL where there is no match. Use LEFT JOIN … WHERE right.id IS NULL to find rows with no match, such as customers who never ordered.",
  },
  outcomes: [
    "Join two, three and four tables on their keys with table aliases",
    "Choose between INNER JOIN and LEFT JOIN, and find unmatched rows",
    "Explain why joins multiply rows, and count correctly with COUNT(DISTINCT …)",
    "Join a table to itself, and know what RIGHT JOIN and CROSS JOIN do",
  ],
  sections: [
    {
      heading: "Why joins exist",
      body: "The shop stores each fact once: a customer's city lives only in customers, a product's price only in products. Orders refer to them by id. A **join** puts the pieces back together for a report by matching keys. The `ON` clause says which columns must be equal:",
      sql: "SELECT o.order_id, o.order_date, c.customer_name, c.city\nFROM orders o\nJOIN customers c ON c.customer_id = o.customer_id\nORDER BY o.order_id;",
      dataset: "shop",
      after: "`orders o` gives the table a short **alias**. Once you alias, prefix every column (`o.order_id`, `c.city`) so a reader — and MySQL — knows where it comes from. `JOIN` on its own means `INNER JOIN`.",
    },
    {
      heading: "INNER JOIN keeps only matches",
      body: "An inner join returns a row only when the ON condition finds a partner on **both** sides. Farah (customer 6) has no orders, so she does not appear above. Usually that is what you want — but not when the question is *“list all customers”*.",
      diagram: "venn",
    },
    {
      heading: "LEFT JOIN keeps every row on the left",
      body: "A `LEFT JOIN` keeps **every** row of the left (first) table. Where no partner exists, the right table's columns are NULL:",
      sql: "SELECT c.customer_id, c.customer_name, o.order_id, o.status\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.customer_id\nORDER BY c.customer_id, o.order_id;",
      dataset: "shop",
      after: "Farah now appears with NULL order columns. Customers with two orders appear twice — once per match.",
    },
    {
      heading: "Find rows with no match (anti-join)",
      body: "Add `WHERE right_table.key IS NULL` to a LEFT JOIN and only the unmatched rows remain. This answers *who never ordered?*, *which products never sold?*, *which orders have no items?*:",
      sql: "SELECT c.customer_id, c.customer_name\nFROM customers c\nLEFT JOIN orders o ON o.customer_id = c.customer_id\nWHERE o.order_id IS NULL;",
      dataset: "shop",
      callout: { kind: "mistake", text: "Filtering the right table in WHERE (WHERE o.status = 'completed') after a LEFT JOIN removes the NULL rows and quietly turns it back into an INNER JOIN. Put that filter in the ON clause instead: LEFT JOIN orders o ON o.customer_id = c.customer_id AND o.status = 'completed'." },
    },
    {
      heading: "Joins multiply rows — mind the grain",
      body: `Joining **orders** (one row per order) to **order_items** (one row per item) gives one row per *item*. Order 101 had one row; after the join it has two. This is called **row expansion**, and it is the number-one source of wrong totals in SQL.`,
      diagram: "join-expansion",
      sql: "SELECT COUNT(*)                   AS joined_rows,\n       COUNT(DISTINCT o.order_id)  AS completed_orders,\n       SUM(i.quantity * i.unit_price) AS revenue\nFROM orders o\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed';",
      dataset: "shop",
      after: "12 joined rows, but only **6 orders**. `COUNT(*)` after the join counts items. Use `COUNT(DISTINCT o.order_id)` for orders. Revenue (6150.00) is correct because quantity × unit_price lives at the item grain.",
      callout: { kind: "remember", text: "After a join, ask: what does one row mean now? Count and sum at that grain, or aggregate first and join after." },
    },
    {
      heading: "Three and four tables",
      body: "Chain joins one at a time. Each `JOIN … ON` adds one table using a key it shares with a table already in the query:",
      sql: "SELECT o.order_id, c.customer_name, p.product_name, i.quantity, i.unit_price,\n       i.quantity * i.unit_price AS line_total\nFROM orders o\nJOIN customers   c ON c.customer_id = o.customer_id\nJOIN order_items i ON i.order_id    = o.order_id\nJOIN products    p ON p.product_id  = i.product_id\nWHERE o.order_id IN (101, 102)\nORDER BY o.order_id, p.product_id;",
      dataset: "shop",
    },
    {
      heading: "Self join: a table joined to itself",
      body: "Give the same table two aliases and it can be compared with itself — for example, pairs of customers who live in the same city:",
      sql: "SELECT a.customer_name AS customer, b.customer_name AS neighbour, a.city\nFROM customers a\nJOIN customers b\n  ON b.city = a.city\n AND b.customer_id > a.customer_id   -- each pair once, no self-pairs\nORDER BY a.city, a.customer_id;",
      dataset: "shop",
      after: "Self joins also model hierarchies (an employees table where manager_id points to another employee) and *before/after* comparisons.",
    },
    {
      heading: "RIGHT JOIN and CROSS JOIN (briefly)",
      body: `- **RIGHT JOIN** is a LEFT JOIN written the other way round: it keeps every row of the *right* table. Most teams always write LEFT JOIN and put the table they want to keep first, so queries read the same way.
- **CROSS JOIN** pairs every row of one table with every row of the other (6 customers × 6 products = 36 rows). It is useful for building grids — every city × every category — and dangerous by accident: a JOIN with a missing or wrong ON condition behaves like one.
- MySQL has no FULL OUTER JOIN; combine a LEFT JOIN and a RIGHT JOIN with UNION (lesson 10).`,
      sql: "SELECT COUNT(*) AS pairs\nFROM customers\nCROSS JOIN products;",
      dataset: "shop",
    },
  ],
  mistakes: [
    { wrong: "COUNT(*) after joining orders to order_items", why: "Counts item rows (12), not orders (6).", fix: "COUNT(DISTINCT o.order_id)" },
    { wrong: "LEFT JOIN orders o … WHERE o.status = 'completed'", why: "Rows with no order have NULL status and are removed, so the LEFT JOIN acts like an INNER JOIN.", fix: "Move the condition into ON: … ON o.customer_id = c.customer_id AND o.status = 'completed'" },
    { wrong: "Joining on names (ON p.product_name = …)", why: "Names change and can repeat; ids are the keys.", fix: "Join on primary / foreign keys." },
    { wrong: "SELECT order_id FROM orders o JOIN order_items i ON …", why: "order_id exists in both tables, so MySQL raises error 1052 (ambiguous).", fix: "Prefix with the alias: o.order_id." },
  ],
  checkYourself: [
    "Why does Farah appear with LEFT JOIN but not with INNER JOIN?",
    "Orders joined to items gives 12 rows for 6 completed orders. Explain why, and how to count orders.",
    "Where should a filter on the right-hand table go in a LEFT JOIN, and why?",
  ],
  faq: [
    { q: "Is JOIN the same as INNER JOIN in MySQL?", a: "Yes. JOIN, INNER JOIN and CROSS JOIN with an ON clause all produce an inner join in MySQL." },
    { q: "How do I find records that do not exist in another table?", a: "LEFT JOIN the other table and keep rows where its key IS NULL, or use WHERE NOT EXISTS (SELECT 1 FROM other WHERE other.key = this.key). Both are shown in this course." },
    { q: "Does MySQL support FULL OUTER JOIN?", a: "No. Emulate it with a LEFT JOIN UNION a RIGHT JOIN of the same tables." },
  ],
  guided: {
    intro: "Calculate completed revenue correctly, and see how a raw count goes wrong.",
    steps: [
      "Run the query: total completed revenue is 6150.00.",
      "Add COUNT(*) AS rows_after_join to the SELECT — it says 12.",
      "Add COUNT(DISTINCT o.order_id) AS orders — it says 6. That is the real order count.",
      "Remove the WHERE line and compare: cancelled and pending items now inflate revenue.",
    ],
    sql: "SELECT SUM(i.quantity * i.unit_price) AS revenue\nFROM orders o\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed';",
    dataset: "shop",
    explain: "One row: revenue = 6150.00 (completed orders only).",
  },
  questions: pick("L6", "L6-O1", "L6-O2", "L6-O3", "L6-O4", "L6-N01", "L6-N02", "L6-N03", "L6-N04", "L6-N05", "L6-N06", "L6-N07", "L6-N08", "L6-N09", "L6-N10", "L6-N11", "L6-N12", "L6-N13", "L6-N14", "L6-N15"),
  quiz: [
    { id: "q1", question: "Which join lists all 6 customers, including those with no orders?", options: ["INNER JOIN orders", "customers LEFT JOIN orders", "customers RIGHT JOIN orders", "CROSS JOIN orders"], correctIndex: 1, explanation: "LEFT JOIN keeps every row of the left table (customers)." },
    { id: "q2", question: "orders (8 rows) joined to order_items (14 rows) on order_id returns how many rows?", options: ["8", "14", "22", "112"], correctIndex: 1, explanation: "Every item matches exactly one order, so the join has one row per item." },
    { id: "q3", question: "How do you count orders after joining orders to order_items?", options: ["COUNT(*)", "COUNT(i.product_id)", "COUNT(DISTINCT o.order_id)", "SUM(1)"], correctIndex: 2, explanation: "DISTINCT order_id removes the repeats caused by row expansion." },
    { id: "q4", question: "LEFT JOIN … WHERE o.order_id IS NULL returns…", options: ["Orders with no customer", "Left-table rows that have no match", "All rows", "Nothing"], correctIndex: 1, explanation: "Unmatched rows have NULL in every right-table column — that is the anti-join pattern." },
  ],
};
