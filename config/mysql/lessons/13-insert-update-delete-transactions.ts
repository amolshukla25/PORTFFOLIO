import { pick } from "../bank";
import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string): Question => ({
  id: `M13-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql,
});

export const lesson13: MysqlLesson = {
  slug: "insert-update-delete-transactions",
  shortTitle: "INSERT, UPDATE, DELETE and transactions",
  title: "MySQL INSERT, UPDATE, DELETE and transactions (COMMIT and ROLLBACK)",
  summary: "Change data safely: INSERT rows, UPDATE and DELETE with a previewed WHERE, delete child rows first, and wrap changes in a transaction.",
  module: 5,
  dataset: "shop",
  teaches: ["INSERT INTO", "INSERT … SELECT", "UPDATE", "DELETE", "START TRANSACTION", "COMMIT", "ROLLBACK", "ROW_COUNT()", "Safe updates error 1175", "ACID"],
  quickAnswer: {
    question: "How do you safely update data in MySQL?",
    answer:
      "Preview first with a SELECT using the exact WHERE you plan to use and note the row count. Then run START TRANSACTION, the UPDATE, and check ROW_COUNT() and the changed rows. If the count and values are right, COMMIT; otherwise ROLLBACK and nothing is changed.",
  },
  outcomes: [
    "Insert one or many rows, with and without a column list, and copy rows with INSERT … SELECT",
    "Update and delete only the intended rows by previewing the WHERE clause",
    "Delete child rows before parents when foreign keys protect them",
    "Use START TRANSACTION, COMMIT and ROLLBACK, and check ROW_COUNT()",
  ],
  sections: [
    {
      heading: "INSERT: add rows",
      body: "Always name the columns you are filling. The statement keeps working when someone adds a column later, and readers can see which value goes where. Several rows can go in one statement:",
      sql: "INSERT INTO customers (customer_id, customer_name, city, email) VALUES\n  (7, 'Gita',     'Ludhiana', NULL),\n  (8, 'Harpreet', 'Ludhiana', 'harpreet@example.test');\nSELECT * FROM customers WHERE city = 'Ludhiana';",
      dataset: "shop",
      after: "`INSERT … SELECT` copies rows from a query instead of typing values — useful for archive tables and loading staging data: `INSERT INTO archive_orders SELECT * FROM orders WHERE order_date < '2026-02-01';`.",
    },
    {
      heading: "UPDATE: change existing rows",
      body: "`UPDATE table SET column = value WHERE condition`. The WHERE decides **which rows change** — leave it out and **every row** changes. Professionals preview first with the identical WHERE:",
      sql: "-- 1. preview: exactly one row?\nSELECT product_id, product_name, price FROM products WHERE product_id = 4;\n-- 2. change it\nUPDATE products SET price = price * 1.10 WHERE product_id = 4;\n-- 3. verify\nSELECT product_id, product_name, price FROM products WHERE product_id = 4;",
      dataset: "shop",
      after: "Mug goes from 250.00 to 275.00. `SET` can change several columns at once: `SET price = 275, category = 'Kitchen'`.",
      callout: { kind: "tip", text: "MySQL Workbench's Safe Updates mode refuses UPDATE / DELETE without a key column in WHERE (error 1175). That protects you — keep it on, and filter by the primary key." },
    },
    {
      heading: "DELETE: remove rows",
      body: "`DELETE FROM table WHERE condition` removes whole rows. Like UPDATE, it needs a previewed WHERE. Foreign keys add one more rule: you cannot delete a parent that still has children. Order 104 has an item, so the item must go first:",
      sql: "DELETE FROM order_items WHERE order_id = 104;\nDELETE FROM orders      WHERE order_id = 104;\nSELECT COUNT(*) AS orders_left FROM orders;",
      dataset: "shop",
      after: "Deleting the order first fails with error 1451 (*Cannot delete or update a parent row*). `TRUNCATE TABLE` empties a whole table quickly, but it is DDL: it cannot be rolled back and fails if other tables reference it.",
      callout: { kind: "mistake", text: "DELETE FROM orders; — no WHERE — removes every order. Write the WHERE first, then go back and type DELETE." },
    },
    {
      heading: "Transactions: all or nothing",
      body: `A **transaction** groups statements so they succeed or fail together. Moving stock, paying an invoice, cancelling an order and its items — half-done is worse than not done.

\`\`\`sql
START TRANSACTION;   -- changes are now provisional
  … INSERT / UPDATE / DELETE …
COMMIT;              -- make them permanent
-- or
ROLLBACK;            -- throw them all away
\`\`\`

By default MySQL runs in **autocommit** mode: each statement commits on its own the moment it finishes. START TRANSACTION switches that off until COMMIT or ROLLBACK.`,
      sql: "START TRANSACTION;\nUPDATE orders SET status = 'completed' WHERE order_id = 107;\nSELECT order_id, status FROM orders WHERE order_id = 107;\nROLLBACK;\nSELECT order_id, status FROM orders WHERE order_id = 107;",
      dataset: "shop",
      after: "Inside the transaction 107 is *completed*; after ROLLBACK it is *pending* again. Other users never saw the provisional change.",
      callout: { kind: "remember", text: "ACID: Atomic (all or nothing), Consistent (constraints hold), Isolated (others do not see half-done work), Durable (committed means saved). InnoDB, MySQL's default engine, gives you all four." },
    },
    {
      heading: "The safe change pattern",
      body: `Use this five-step pattern for every change to data that matters:

1. **Preview** — \`SELECT … WHERE <condition>\` and note the row count.
2. **Begin** — \`START TRANSACTION;\`
3. **Change** — run the UPDATE / DELETE with the *same* WHERE.
4. **Verify** — \`SELECT ROW_COUNT();\` right after the change must equal the preview count; re-run the preview to see the new values.
5. **Decide** — \`COMMIT;\` if everything matches, otherwise \`ROLLBACK;\`.`,
      sql: "SELECT COUNT(*) AS will_change FROM products WHERE category = 'Stationery';\nSTART TRANSACTION;\nUPDATE products SET price = ROUND(price * 0.95, 2) WHERE category = 'Stationery';\nSELECT ROW_COUNT() AS changed;\nSELECT product_name, price FROM products WHERE category = 'Stationery' ORDER BY product_id;\nROLLBACK;",
      dataset: "shop",
      after: "Preview says 3, ROW_COUNT says 3, and the new prices look right — this would be safe to COMMIT. We rolled back so the shop stays unchanged for the next lesson.",
      callout: { kind: "business", text: "In a team, the preview count and ROW_COUNT go into the change ticket. “Expected 3, changed 3, committed at 14:02” is what auditors want to read." },
    },
    {
      heading: "What ROLLBACK cannot undo",
      body: `- **DDL** — CREATE, ALTER, DROP, TRUNCATE — commits automatically, even in the middle of a transaction (lesson 12).
- **Tables that are not InnoDB** (for example the old MyISAM engine) ignore transactions.
- **Anything already committed** — including by autocommit before you typed START TRANSACTION.

In the practice editor, the **Reset database** button restores the original shop whatever you did.`,
    },
  ],
  mistakes: [
    { wrong: "UPDATE products SET price = 0;", why: "No WHERE — every product now costs 0 (and autocommit saved it).", fix: "Preview with SELECT … WHERE, then UPDATE … WHERE inside a transaction." },
    { wrong: "DELETE FROM orders WHERE order_id = 104;  -- first", why: "order_items still references the order: error 1451.", fix: "Delete the child rows (order_items) first, or design the FK with ON DELETE CASCADE on purpose." },
    { wrong: "INSERT INTO customers VALUES ('Gita', 'Ludhiana');", why: "Without a column list you must give every column in table order (error 1136).", fix: "INSERT INTO customers (customer_id, customer_name, city) VALUES (7, 'Gita', 'Ludhiana');" },
    { wrong: "Expecting ROLLBACK to undo an ALTER TABLE", why: "DDL commits implicitly.", fix: "Keep DDL out of data-fix transactions." },
  ],
  checkYourself: [
    "List the five steps of the safe change pattern.",
    "Why must order_items rows be deleted before their order?",
    "What does autocommit mean, and how does START TRANSACTION change it?",
  ],
  faq: [
    { q: "How do I undo an UPDATE in MySQL?", a: "Only if it is still inside an open transaction: run ROLLBACK. With autocommit on, a finished UPDATE is permanent and must be reversed with another UPDATE or restored from a backup." },
    { q: "What is MySQL error 1175 (safe update mode)?", a: "MySQL Workbench blocks UPDATE and DELETE statements whose WHERE does not use a key column. Filter by the primary key, or deliberately turn the option off under Edit → Preferences → SQL Editor." },
    { q: "What is the difference between DELETE and TRUNCATE?", a: "DELETE removes chosen rows, can use WHERE and can be rolled back. TRUNCATE empties the whole table, resets AUTO_INCREMENT, is DDL (no rollback) and fails if a foreign key references the table." },
  ],
  guided: {
    intro: "Change one value inside a transaction, check it, then undo it.",
    steps: [
      "Run the script as it is: Notebook is 110.00 inside the transaction and 100.00 after ROLLBACK.",
      "Replace ROLLBACK with COMMIT and run again: the change stays.",
      "Press Reset database to restore the original prices.",
      "Try the five-step pattern on a different product with a preview count first.",
    ],
    sql: "START TRANSACTION;\nUPDATE products SET price = 110 WHERE product_id = 1;\nSELECT product_id, price FROM products WHERE product_id = 1;\nROLLBACK;\nSELECT product_id, price FROM products WHERE product_id = 1;",
    dataset: "shop",
    explain: "First result: 1 | 110.00 (inside the transaction). Second result: 1 | 100.00 (after ROLLBACK).",
  },
  questions: [
    ...pick("L9", "L9-O1", "L9-N03"),
    q(1, "Easy", "Insert a new product 7, 'Eraser', Stationery, 10.00, then list all Stationery products.", "4 rows: Notebook, Pen, Planner, Eraser", "INSERT INTO products (product_id, product_name, category, price) VALUES (…);", "INSERT INTO products (product_id, product_name, category, price) VALUES (7, 'Eraser', 'Stationery', 10.00); SELECT product_id, product_name, price FROM products WHERE category = 'Stationery' ORDER BY product_id;"),
    q(2, "Easy", "Insert customers 7 Gita (Ludhiana, no email) and 8 Harpreet (Ludhiana, harpreet@example.test) in one statement, then list Ludhiana customers.", "2 rows: Gita (email NULL), Harpreet", "One INSERT with two value lists.", "INSERT INTO customers (customer_id, customer_name, city, email) VALUES (7, 'Gita', 'Ludhiana', NULL), (8, 'Harpreet', 'Ludhiana', 'harpreet@example.test'); SELECT customer_id, customer_name, email FROM customers WHERE city = 'Ludhiana' ORDER BY customer_id;"),
    ...pick("L9", "L9-N01", "L9-N02"),
    q(3, "Medium", "Record a new pending order 109 for Farah (customer 6) dated 2026-03-15, then show Farah's orders.", "1 row: 109, 2026-03-15, pending", "Name the columns in the INSERT.", "INSERT INTO orders (order_id, customer_id, order_date, status) VALUES (109, 6, '2026-03-15', 'pending'); SELECT order_id, order_date, status FROM orders WHERE customer_id = 6;"),
    q(4, "Medium", "Raise the Mug's price by 10% and show its new price.", "1 row: Mug 275.00", "UPDATE products SET price = price * 1.10 WHERE product_id = 4;", "UPDATE products SET price = price * 1.10 WHERE product_id = 4; SELECT product_name, price FROM products WHERE product_id = 4;"),
    q(5, "Medium", "Cancel pending order 107, then show how many orders have each status.", "2 rows: cancelled 2, completed 6", "UPDATE … WHERE order_id = 107 AND status = 'pending'; then GROUP BY status.", "UPDATE orders SET status = 'cancelled' WHERE order_id = 107 AND status = 'pending'; SELECT status, COUNT(*) AS orders FROM orders GROUP BY status ORDER BY status;"),
    ...pick("L9", "L9-O2", "L9-N08"),
    q(6, "Hard", "Delete the order items that belong to cancelled orders (use a subquery), then count the remaining items.", "1 row: items_left = 13", "DELETE FROM order_items WHERE order_id IN (SELECT order_id FROM orders WHERE status = 'cancelled');", "DELETE FROM order_items WHERE order_id IN (SELECT order_id FROM orders WHERE status = 'cancelled'); SELECT COUNT(*) AS items_left FROM order_items;"),
    q(7, "Hard", "Give every Stationery product 5% off, rounded to 2 decimals, and list the new Stationery prices.", "3 rows: Notebook 95.00, Pen 19.00, Planner 285.00", "UPDATE … SET price = ROUND(price * 0.95, 2) WHERE category = 'Stationery'.", "UPDATE products SET price = ROUND(price * 0.95, 2) WHERE category = 'Stationery'; SELECT product_name, price FROM products WHERE category = 'Stationery' ORDER BY product_id;"),
    ...pick("L9", "L9-N09"),
    q(8, "Professional", "Remove cancelled order 104 for good: in one transaction delete its items and the order, verify the counts, and COMMIT.", "1 row: orders_left = 7, items_left = 13 (and the change is committed)", "Child rows first; one SELECT with two scalar subqueries for the check; then COMMIT.", "START TRANSACTION; DELETE FROM order_items WHERE order_id = 104; DELETE FROM orders WHERE order_id = 104; SELECT (SELECT COUNT(*) FROM orders) AS orders_left, (SELECT COUNT(*) FROM order_items) AS items_left; COMMIT;"),
    ...pick("L9", "L9-N14"),
  ],
  quiz: [
    { id: "q1", question: "What happens if you run UPDATE products SET price = 0; with autocommit on?", options: ["Nothing until COMMIT", "Every product's price becomes 0 permanently", "MySQL asks for confirmation", "Only the first row changes"], correctIndex: 1, explanation: "No WHERE means every row; autocommit saves it immediately." },
    { id: "q2", question: "Which statement makes provisional changes permanent?", options: ["SAVE", "END", "COMMIT", "ROLLBACK"], correctIndex: 2, explanation: "COMMIT ends the transaction and keeps its changes; ROLLBACK discards them." },
    { id: "q3", question: "Why does DELETE FROM orders WHERE order_id = 104 fail while the order has items?", options: ["Syntax error", "The foreign key from order_items protects the parent row", "Orders cannot be deleted", "Safe update mode"], correctIndex: 1, explanation: "Error 1451: delete child rows first or use ON DELETE CASCADE." },
    { id: "q4", question: "What should ROW_COUNT() show right after a safe UPDATE?", options: ["0", "The preview count you expected", "The table size", "-1"], correctIndex: 1, explanation: "It returns the rows changed by the previous statement; compare it with your preview." },
  ],
};
