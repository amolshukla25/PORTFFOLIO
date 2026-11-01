import { pick } from "../bank";
import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string, check?: Question["check"]): Question => ({
  id: `M12-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql, ...(check ? { check } : {}),
});

export const lesson12: MysqlLesson = {
  slug: "create-tables-constraints",
  shortTitle: "Create tables: types and constraints",
  title: "MySQL CREATE TABLE: data types, primary keys, foreign keys and CHECK constraints",
  summary: "Design tables: choose data types, add PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, DEFAULT and CHECK constraints, use ALTER TABLE, and normalise.",
  module: 5,
  dataset: "shop",
  teaches: ["CREATE TABLE", "MySQL data types", "DECIMAL vs FLOAT", "VARCHAR", "PRIMARY KEY", "AUTO_INCREMENT", "FOREIGN KEY", "UNIQUE", "NOT NULL", "DEFAULT", "CHECK constraint", "ALTER TABLE", "Normalisation"],
  quickAnswer: {
    question: "How do you create a table with a primary key and foreign key in MySQL?",
    answer:
      "List each column with its data type, then the constraints: CREATE TABLE reviews (review_id INT AUTO_INCREMENT PRIMARY KEY, product_id INT NOT NULL, rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5), FOREIGN KEY (product_id) REFERENCES products(product_id));. MySQL then rejects duplicates, missing values, out-of-range ratings and reviews for products that do not exist.",
  },
  outcomes: [
    "Choose suitable data types for ids, money, text and dates",
    "Write CREATE TABLE with PRIMARY KEY, AUTO_INCREMENT, NOT NULL, UNIQUE, DEFAULT and CHECK",
    "Link tables with FOREIGN KEY and read the errors constraints raise (1062, 1048, 1452, 3819)",
    "Change an existing table with ALTER TABLE — and know DDL cannot be rolled back",
    "Spot repeated data and split it into related tables (normalisation)",
  ],
  sections: [
    {
      heading: "Why table design matters",
      body: `Until now you only *read* tables someone else designed. A good design makes wrong data **impossible to store**: a negative price, an order for a customer who does not exist, two products with the same id. Every check the database enforces is a bug your reports will never have to work around.

That is what **constraints** are: rules attached to a table that MySQL checks on every INSERT and UPDATE.`,
    },
    {
      heading: "Choosing data types",
      body: `| Data | Type | Why |
|---|---|---|
| Ids and counts | \`INT\` (up to ~2.1 billion) or \`BIGINT\` | whole numbers, fast to compare and index |
| Money | \`DECIMAL(10,2)\` | **exact** decimals; 10 digits, 2 after the point |
| Measurements | \`DOUBLE\` | approximate — fine for sensor readings, never for money |
| Short text | \`VARCHAR(n)\` | up to n characters; pick a realistic n |
| Fixed codes | \`CHAR(n)\` | always n characters, e.g. \`CHAR(2)\` state code |
| Long text | \`TEXT\` | descriptions and comments |
| Calendar date | \`DATE\` | \`2026-02-15\` |
| Date and time | \`DATETIME\` | \`2026-02-15 14:30:00\` |
| Yes / no | \`BOOLEAN\` | stored as \`TINYINT(1)\`: 1 = true, 0 = false |`,
      callout: { kind: "mistake", text: "Never store money in FLOAT or DOUBLE: 0.1 + 0.2 is not exactly 0.3 in binary floating point. Use DECIMAL." },
    },
    {
      heading: "CREATE TABLE with constraints",
      body: `A new **reviews** table for the shop. Read each line as a rule:

- \`AUTO_INCREMENT PRIMARY KEY\` — MySQL assigns 1, 2, 3 … and guarantees uniqueness.
- \`NOT NULL\` — the value is required.
- \`DEFAULT 'new'\` — used when the INSERT does not give a value.
- \`CHECK (…)\` — any condition the row must satisfy (enforced from MySQL **8.0.16**).
- \`FOREIGN KEY … REFERENCES\` — the value must exist in the other table.`,
      sql: "CREATE TABLE reviews (\n  review_id  INT AUTO_INCREMENT PRIMARY KEY,\n  product_id INT NOT NULL,\n  rating     INT NOT NULL,\n  comment    VARCHAR(200),\n  status     VARCHAR(10) NOT NULL DEFAULT 'new',\n  CHECK (rating BETWEEN 1 AND 5),\n  FOREIGN KEY (product_id) REFERENCES products(product_id)\n);\nINSERT INTO reviews (product_id, rating, comment) VALUES\n  (4, 5, 'Perfect size'),\n  (2, 3, NULL);\nSELECT * FROM reviews;",
      dataset: "shop",
      after: "The INSERT names only three columns. MySQL filled `review_id` (1, 2) and `status` ('new') itself, and left the optional comment NULL.",
    },
    {
      heading: "What the constraints stop",
      body: `Each broken rule has its own error number. Knowing them saves time when an import fails:

| Error | Rule broken | Example |
|---|---|---|
| **1062** Duplicate entry | PRIMARY KEY or UNIQUE | a second product with id 1 |
| **1048** Column cannot be null | NOT NULL | \`INSERT … VALUES (3, NULL, …)\` |
| **1364** Field doesn't have a default value | NOT NULL column left out (strict mode) | omitting a required column |
| **1452** Foreign key constraint fails | FOREIGN KEY | a review for product 99 |
| **3819** Check constraint is violated | CHECK | a rating of 6 |`,
      sql: "CREATE TABLE reviews (\n  review_id  INT AUTO_INCREMENT PRIMARY KEY,\n  product_id INT NOT NULL,\n  rating     INT NOT NULL CHECK (rating BETWEEN 1 AND 5),\n  FOREIGN KEY (product_id) REFERENCES products(product_id)\n);\nINSERT INTO reviews (product_id, rating) VALUES (4, 6);",
      dataset: "shop",
      after: "The row is rejected and nothing is stored. Try product 99 instead of a bad rating and you get error 1452.",
    },
    {
      heading: "Foreign keys and ON DELETE",
      body: `A foreign key also controls what happens when the **parent** row is deleted:

- default (\`RESTRICT\`) — refuse to delete a product that still has reviews. Safest.
- \`ON DELETE CASCADE\` — delete the reviews too. Convenient, but one DELETE can remove thousands of rows.
- \`ON DELETE SET NULL\` — keep the reviews but blank the link (the column must allow NULL).

The shop uses the default everywhere, which is why lesson 13 deletes order items *before* their order.`,
    },
    {
      heading: "ALTER TABLE: change a table later",
      body: "Requirements change. `ALTER TABLE` adds, changes, renames and removes columns and constraints without recreating the table:",
      sql: "ALTER TABLE customers ADD COLUMN phone VARCHAR(15);\nSELECT customer_id, customer_name, phone FROM customers ORDER BY customer_id;",
      dataset: "shop",
      after: `Other forms you will use:

\`\`\`sql
ALTER TABLE customers MODIFY phone VARCHAR(20);          -- change the type
ALTER TABLE customers RENAME COLUMN phone TO mobile;     -- rename
ALTER TABLE customers DROP COLUMN mobile;                -- remove (data is lost)
ALTER TABLE products ADD CONSTRAINT chk_name CHECK (product_name <> '');
\`\`\``,
      callout: { kind: "mistake", text: "CREATE, ALTER and DROP commit immediately in MySQL — ROLLBACK cannot undo them. Back up (or practise on a copy) before changing a table that holds real data." },
    },
    {
      heading: "Normalisation in plain words",
      body: `Imagine one wide sheet where every order line repeats the customer's name, city and email, and the product's name and price. Problems appear quickly: Bilal moves city and you must edit ten rows; one row is missed and now he lives in two cities.

**Normalisation** means *store each fact once, in the table where it belongs, and link with ids*:

1. **One value per cell** — no "Pen, Mug" lists inside a column; make a row per item (that is order_items).
2. **Every column describes the whole key** — order_items' key is (order_id, product_id), so it holds quantity and unit_price, not the customer's city.
3. **No facts about other facts** — a customer's city lives in customers, not in orders.

The shop is already normalised; that is why reports need joins. The one deliberate exception is \`unit_price\` in order_items: it records the price **at the time of sale**, which is a different fact from today's price in products.`,
      callout: { kind: "business", text: "Copying today's price into each order line is a design decision, not duplication: invoices must not change when the catalogue price does." },
    },
  ],
  mistakes: [
    { wrong: "price FLOAT", why: "Binary floating point cannot store most decimals exactly; totals drift.", fix: "price DECIMAL(10,2)" },
    { wrong: "Expecting ROLLBACK to undo CREATE / ALTER / DROP", why: "DDL commits implicitly in MySQL.", fix: "Test on a copy; keep a script to recreate the table." },
    { wrong: "Adding CHECK on MySQL 8.0.15 or older", why: "Older versions parse CHECK but silently ignore it.", fix: "Use MySQL 8.0.16+ (8.4 recommended)." },
    { wrong: "Storing 'Pen, Mug' in one column", why: "You can no longer count, join or filter items reliably.", fix: "One row per item in a child table." },
  ],
  checkYourself: [
    "Which type would you use for a product price, and why not FLOAT?",
    "Name the constraint behind errors 1062, 1452 and 3819.",
    "Why does order_items store unit_price even though products already has a price?",
  ],
  faq: [
    { q: "What is the difference between a primary key and a unique key?", a: "Both forbid duplicates. A table has one primary key and it can never be NULL; it is the row's identity. A table can have many UNIQUE keys and they allow NULL values." },
    { q: "Does MySQL enforce CHECK constraints?", a: "Yes, from MySQL 8.0.16. Earlier versions accept the syntax but do not enforce it." },
    { q: "What is the difference between VARCHAR and TEXT in MySQL?", a: "VARCHAR(n) has a declared maximum length and can be fully indexed; use it for names, emails and codes. TEXT is for long free text such as descriptions and has indexing limits." },
  ],
  guided: {
    intro: "Create a table, fill it, and watch each constraint protect it.",
    steps: [
      "Run the script: it creates reviews and inserts two valid rows.",
      "Add INSERT INTO reviews (product_id, rating) VALUES (4, 6); before the SELECT and run — error 3819.",
      "Change the rating to 4 and the product to 99 — error 1452.",
      "Press Reset database in the editor when you are done, so later lessons start clean.",
    ],
    sql: "CREATE TABLE reviews (\n  review_id  INT AUTO_INCREMENT PRIMARY KEY,\n  product_id INT NOT NULL,\n  rating     INT NOT NULL CHECK (rating BETWEEN 1 AND 5),\n  status     VARCHAR(10) NOT NULL DEFAULT 'new',\n  FOREIGN KEY (product_id) REFERENCES products(product_id)\n);\nINSERT INTO reviews (product_id, rating) VALUES (4, 5), (2, 3);\nSELECT * FROM reviews;",
    dataset: "shop",
    explain: "Two rows: (1, 4, 5, new) and (2, 2, 3, new). review_id and status were filled in by MySQL.",
  },
  questions: [
    q(1, "Easy", "Create a suppliers table (supplier_id INT primary key, supplier_name VARCHAR(80) NOT NULL, city VARCHAR(60)) and DESCRIBE it.", "3 rows: supplier_id int PRI NO; supplier_name varchar(80) NO; city varchar(60) YES", "CREATE TABLE …; then DESCRIBE suppliers;", "CREATE TABLE suppliers (supplier_id INT PRIMARY KEY, supplier_name VARCHAR(80) NOT NULL, city VARCHAR(60)); DESCRIBE suppliers;"),
    q(2, "Easy", "Create the suppliers table, insert (1, 'Paper Co', 'Ludhiana') and (2, 'Bright Lights', NULL), then list them.", "2 rows; Bright Lights has city NULL", "INSERT INTO suppliers VALUES (…), (…);", "CREATE TABLE suppliers (supplier_id INT PRIMARY KEY, supplier_name VARCHAR(80) NOT NULL, city VARCHAR(60)); INSERT INTO suppliers VALUES (1, 'Paper Co', 'Ludhiana'), (2, 'Bright Lights', NULL); SELECT * FROM suppliers ORDER BY supplier_id;"),
    q(3, "Easy", "Create categories (category_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40) NOT NULL UNIQUE), insert Stationery, Electronics and Home without ids, and list them.", "3 rows: 1 Stationery, 2 Electronics, 3 Home", "Leave category_id out of the INSERT column list.", "CREATE TABLE categories (category_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(40) NOT NULL UNIQUE); INSERT INTO categories (name) VALUES ('Stationery'), ('Electronics'), ('Home'); SELECT * FROM categories ORDER BY category_id;"),
    q(4, "Medium", "Add a phone column (VARCHAR(15)) to customers and show id, name and phone.", "6 rows; phone is NULL for everyone", "ALTER TABLE customers ADD COLUMN phone VARCHAR(15);", "ALTER TABLE customers ADD COLUMN phone VARCHAR(15); SELECT customer_id, customer_name, phone FROM customers ORDER BY customer_id;"),
    q(5, "Medium", "Create reviews with a status column that defaults to 'new', insert two reviews without a status, and list them.", "2 rows, both with status new", "status VARCHAR(10) NOT NULL DEFAULT 'new'.", "CREATE TABLE reviews (review_id INT PRIMARY KEY, product_id INT NOT NULL, rating INT NOT NULL, status VARCHAR(10) NOT NULL DEFAULT 'new', FOREIGN KEY (product_id) REFERENCES products(product_id), CHECK (rating BETWEEN 1 AND 5)); INSERT INTO reviews (review_id, product_id, rating) VALUES (1, 4, 5), (2, 2, 3); SELECT * FROM reviews ORDER BY review_id;"),
    q(6, "Medium", "With a CHECK (rating BETWEEN 1 AND 5) on reviews, try to insert a rating of 6. Record the error.", "Error 3819: check constraint violated", "Create the table with the CHECK, then INSERT the bad row.", "CREATE TABLE reviews (review_id INT PRIMARY KEY, product_id INT NOT NULL, rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5)); INSERT INTO reviews VALUES (1, 4, 6);", { expectError: 3819 }),
    q(7, "Medium", "With a foreign key from reviews.product_id to products, try to review product 99. Record the error.", "Error 1452: foreign key constraint fails", "FOREIGN KEY (product_id) REFERENCES products(product_id).", "CREATE TABLE reviews (review_id INT PRIMARY KEY, product_id INT NOT NULL, rating INT NOT NULL, FOREIGN KEY (product_id) REFERENCES products(product_id)); INSERT INTO reviews VALUES (1, 99, 4);", { expectError: 1452 }),
    q(8, "Medium", "Insert a supplier with supplier_name NULL into a table where it is NOT NULL. Record the error.", "Error 1048: Column 'supplier_name' cannot be null", "Pass NULL explicitly in VALUES.", "CREATE TABLE suppliers (supplier_id INT PRIMARY KEY, supplier_name VARCHAR(80) NOT NULL); INSERT INTO suppliers VALUES (1, NULL);", { expectError: 1048 }),
    q(9, "Hard", "Create newsletter (email VARCHAR(120) UNIQUE) and insert the same email twice. Record the error.", "Error 1062: Duplicate entry", "UNIQUE allows NULLs but not repeats.", "CREATE TABLE newsletter (signup_id INT PRIMARY KEY, email VARCHAR(120) UNIQUE); INSERT INTO newsletter VALUES (1, 'asha@example.test'), (2, 'asha@example.test');", { expectError: 1062 }),
    q(10, "Hard", "Create product_suppliers with a composite primary key (product_id, supplier_id), insert (1,1), (1,2), (2,1) and list them.", "3 rows: (1,1), (1,2), (2,1)", "PRIMARY KEY (product_id, supplier_id) — the pair must be unique.", "CREATE TABLE product_suppliers (product_id INT NOT NULL, supplier_id INT NOT NULL, PRIMARY KEY (product_id, supplier_id)); INSERT INTO product_suppliers VALUES (1, 1), (1, 2), (2, 1); SELECT * FROM product_suppliers ORDER BY product_id, supplier_id;"),
    q(11, "Hard", "Use information_schema.columns to list the column names and types of products, in table order.", "4 rows: product_id int, product_name varchar(80), category varchar(40), price decimal(10,2)", "Filter table_schema = DATABASE() AND table_name = 'products'; ORDER BY ordinal_position.", "SELECT column_name, column_type FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = 'products' ORDER BY ordinal_position;"),
    q(12, "Professional", "Design payments: payment_id auto, order_id FK, amount DECIMAL(10,2) > 0, paid_on DATE NOT NULL, method limited to upi / card / cash. Record a 300.00 UPI payment for order 101 on 2026-01-05 and show it with the customer name.", "1 row: 101, Asha, 300.00, upi", "CHECK (amount > 0), CHECK (method IN (…)), then a 3-table join.", "CREATE TABLE payments (payment_id INT AUTO_INCREMENT PRIMARY KEY, order_id INT NOT NULL, amount DECIMAL(10,2) NOT NULL CHECK (amount > 0), paid_on DATE NOT NULL, method VARCHAR(10) NOT NULL CHECK (method IN ('upi','card','cash')), FOREIGN KEY (order_id) REFERENCES orders(order_id)); INSERT INTO payments (order_id, amount, paid_on, method) VALUES (101, 300.00, '2026-01-05', 'upi'); SELECT p.order_id, c.customer_name, p.amount, p.method FROM payments p JOIN orders o ON o.order_id = p.order_id JOIN customers c ON c.customer_id = o.customer_id;"),
    q(13, "Professional", "Create a stock table (product_id PK and FK, on_hand INT NOT NULL DEFAULT 0 with CHECK on_hand >= 0) and fill it with one row per existing product using INSERT … SELECT. Show the row count and total stock.", "1 row: products_tracked = 6, total_on_hand = 0", "INSERT INTO stock (product_id) SELECT product_id FROM products;", "CREATE TABLE stock (product_id INT PRIMARY KEY, on_hand INT NOT NULL DEFAULT 0 CHECK (on_hand >= 0), FOREIGN KEY (product_id) REFERENCES products(product_id)); INSERT INTO stock (product_id) SELECT product_id FROM products; SELECT COUNT(*) AS products_tracked, SUM(on_hand) AS total_on_hand FROM stock;"),
    ...pick("L9", "L9-N04", "L9-N05", "L9-N06", "L9-N07"),
  ],
  quiz: [
    { id: "q1", question: "Which type should store a product price?", options: ["FLOAT", "VARCHAR(10)", "DECIMAL(10,2)", "INT"], correctIndex: 2, explanation: "DECIMAL stores exact decimal values — essential for money." },
    { id: "q2", question: "An INSERT fails with error 1452. Which constraint did it break?", options: ["PRIMARY KEY", "CHECK", "FOREIGN KEY", "NOT NULL"], correctIndex: 2, explanation: "1452 means the referenced parent row does not exist." },
    { id: "q3", question: "You run ALTER TABLE inside a transaction and then ROLLBACK. What happens to the change?", options: ["It is undone", "It stays — DDL commits implicitly", "The table is dropped", "MySQL asks you"], correctIndex: 1, explanation: "DDL statements cause an implicit commit in MySQL." },
    { id: "q4", question: "Why does order_items keep its own unit_price?", options: ["Mistake in the design", "To record the price at the time of sale", "Foreign keys require it", "To make joins faster"], correctIndex: 1, explanation: "Catalogue prices change; an invoice must keep the price that was charged." },
  ],
};
