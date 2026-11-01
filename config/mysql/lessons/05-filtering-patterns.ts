import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string): Question => ({
  id: `M05-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql,
});

export const lesson05: MysqlLesson = {
  slug: "filtering-patterns",
  shortTitle: "IN, BETWEEN, LIKE, DISTINCT, LIMIT",
  title: "MySQL IN, BETWEEN, LIKE, DISTINCT and LIMIT with examples",
  summary: "Filter with lists (IN), ranges (BETWEEN) and text patterns (LIKE), remove duplicates with DISTINCT, and page through results with LIMIT and OFFSET.",
  module: 2,
  dataset: "shop",
  teaches: ["IN operator", "NOT IN", "BETWEEN", "LIKE wildcards % and _", "DISTINCT", "LIMIT", "OFFSET pagination", "Top-N query"],
  quickAnswer: {
    question: "What do IN, BETWEEN and LIKE do in MySQL?",
    answer:
      "IN matches any value in a list (city IN ('Pune','Mumbai')). BETWEEN matches an inclusive range (price BETWEEN 100 AND 300 includes both ends). LIKE matches text patterns: % stands for any number of characters and _ for exactly one, so name LIKE 'E%' finds names starting with E.",
  },
  outcomes: [
    "Replace long OR chains with IN and NOT IN",
    "Filter number and date ranges with BETWEEN — and know when a half-open range is safer",
    "Search text with LIKE, % and _",
    "Remove duplicate rows with DISTINCT",
    "Return the top N rows and page through results with LIMIT / OFFSET",
  ],
  sections: [
    {
      heading: "IN: match any value in a list",
      body: "`WHERE city = 'Pune' OR city = 'Mumbai' OR city = 'Delhi'` works, but it is long and easy to break. `IN` says the same thing in one place:",
      sql: "SELECT customer_name, city\nFROM customers\nWHERE city IN ('Pune', 'Mumbai')\nORDER BY customer_id;",
      dataset: "shop",
      after: "`NOT IN` keeps rows whose value is **not** in the list: `WHERE city NOT IN ('Pune', 'Mumbai')` returns Dev and Farah. Lesson 9 shows how the list can come from another query: `WHERE customer_id IN (SELECT customer_id FROM orders)`.",
      callout: { kind: "mistake", text: "NOT IN with a NULL inside the list — NOT IN ('Pune', NULL) — returns no rows at all, because comparing with NULL is never true. Keep NULLs out of NOT IN lists." },
    },
    {
      heading: "BETWEEN: inclusive ranges",
      body: "`BETWEEN low AND high` keeps values from low **to** high, **including both ends**. It works for numbers, text and dates:",
      sql: "SELECT product_name, price\nFROM products\nWHERE price BETWEEN 100 AND 300\nORDER BY price;",
      dataset: "shop",
      after: "Notebook (100.00) and Planner (300.00) are included because both ends count. `NOT BETWEEN 100 AND 300` returns the others.",
    },
    {
      heading: "Date ranges: BETWEEN or half-open?",
      body: `For a \`DATE\` column, \`BETWEEN '2026-02-01' AND '2026-02-28'\` returns all of February. But if the column also stores a time (\`DATETIME\`), an order at \`2026-02-28 14:30\` is *after* \`'2026-02-28'\` (which means midnight) and is lost.

Professionals use a **half-open range** — greater-or-equal the first day, strictly less than the first day of the next period. It is correct for both DATE and DATETIME, and for any month length:`,
      sql: "SELECT order_id, order_date, status\nFROM orders\nWHERE order_date >= '2026-02-01'\n  AND order_date <  '2026-03-01'\nORDER BY order_id;",
      dataset: "shop",
      callout: { kind: "tip", text: "Month filter pattern: date >= 'first day of month' AND date < 'first day of next month'. No need to know whether the month has 28, 30 or 31 days." },
    },
    {
      heading: "LIKE: search text with wildcards",
      body: `\`LIKE\` compares text against a **pattern**:

| Pattern | Matches | Example |
|---|---|---|
| \`'E%'\` | starts with E | Esha |
| \`'%a'\` | ends with a | Asha, Esha |
| \`'%lamp%'\` | contains *lamp* anywhere | Desk lamp |
| \`'___'\` | exactly three characters | Pen, Mug |

\`%\` means *any number of characters (even zero)*, and \`_\` means *exactly one character*. With MySQL's default collation LIKE ignores case, so \`'e%'\` finds Esha too.`,
      sql: "SELECT customer_name\nFROM customers\nWHERE customer_name LIKE '%a'\nORDER BY customer_id;",
      dataset: "shop",
      after: "To search for a real % or _ character, escape it with a backslash: `LIKE '%50\\%%'` finds text containing *50%*.",
      callout: { kind: "business", text: "A leading wildcard (LIKE '%lamp%') cannot use an index, so on a large table it scans every row. Fine for learning; on production search boxes teams use FULLTEXT indexes or a search engine." },
    },
    {
      heading: "DISTINCT: remove duplicate rows",
      body: "`SELECT DISTINCT` removes repeated rows from the **result**. It applies to the whole row, not just the first column:",
      sql: "SELECT DISTINCT city\nFROM customers\nORDER BY city;",
      dataset: "shop",
      after: "Six customers, four distinct cities. `SELECT DISTINCT city, customer_name` would return all six rows again, because every (city, name) pair is unique. DISTINCT treats all NULLs as one value.",
    },
    {
      heading: "LIMIT and OFFSET: top-N and pages",
      body: "`LIMIT n` returns at most n rows. Combined with ORDER BY it answers *top-N* questions such as *the three cheapest products*:",
      sql: "SELECT product_name, price\nFROM products\nORDER BY price\nLIMIT 3;",
      dataset: "shop",
      after: "`LIMIT 2 OFFSET 2` skips two rows and returns the next two — page 2 when each page shows two rows. MySQL also accepts the short form `LIMIT 2, 2` (offset first, then count).",
      callout: { kind: "mistake", text: "LIMIT without ORDER BY returns *some* rows, not the first or the best. Always sort before you limit." },
    },
    {
      heading: "Putting it together",
      body: "Clauses always appear in this order: `SELECT … FROM … WHERE … ORDER BY … LIMIT`. A typical catalogue query combines several of today's tools:",
      sql: "SELECT product_name, category, price\nFROM products\nWHERE category IN ('Stationery', 'Home')\n  AND price BETWEEN 50 AND 500\n  AND product_name NOT LIKE 'P%'\nORDER BY price DESC\nLIMIT 2;",
      dataset: "shop",
    },
  ],
  mistakes: [
    { wrong: "WHERE order_date BETWEEN '2026-02-01' AND '2026-02-28'  -- on a DATETIME column", why: "'2026-02-28' means midnight, so orders later that day are excluded.", fix: "WHERE order_date >= '2026-02-01' AND order_date < '2026-03-01'" },
    { wrong: "WHERE customer_name LIKE 'E'", why: "Without a wildcard LIKE behaves like =, so only a name exactly equal to 'E' matches.", fix: "WHERE customer_name LIKE 'E%'" },
    { wrong: "SELECT product_name FROM products LIMIT 3;  -- “the 3 cheapest”", why: "No ORDER BY, so the rows are arbitrary.", fix: "ORDER BY price LIMIT 3" },
    { wrong: "WHERE email NOT LIKE '%.test'  -- expecting Charu", why: "Charu's email is NULL, and NULL NOT LIKE anything is unknown, so she is filtered out.", fix: "WHERE email NOT LIKE '%.test' OR email IS NULL" },
  ],
  checkYourself: [
    "Does price BETWEEN 100 AND 300 include 300? Why might you prefer >= and < for dates?",
    "What is the difference between % and _ in a LIKE pattern?",
    "Why must LIMIT almost always come with ORDER BY?",
  ],
  faq: [
    { q: "Is BETWEEN inclusive in MySQL?", a: "Yes. a BETWEEN 1 AND 10 is the same as a >= 1 AND a <= 10, so both ends are included." },
    { q: "Is MySQL LIKE case-sensitive?", a: "Not with the default utf8mb4_0900_ai_ci collation: LIKE 'e%' matches Esha. Use a binary or _cs collation, or LIKE BINARY, for case-sensitive matching." },
    { q: "How do I get the top 5 rows in MySQL?", a: "Sort and then limit: SELECT … ORDER BY column DESC LIMIT 5;. MySQL uses LIMIT where SQL Server uses TOP and Oracle uses FETCH FIRST." },
  ],
  guided: {
    intro: "Start from a list filter and add one tool at a time.",
    steps: [
      "Run the query: Stationery and Home products.",
      "Add AND price BETWEEN 100 AND 300 to the WHERE and run — Pen drops out.",
      "Add AND product_name LIKE '%e%' — which product disappears?",
      "Finish with ORDER BY price DESC LIMIT 1 to get the most expensive match.",
    ],
    sql: "SELECT product_name, category, price\nFROM products\nWHERE category IN ('Stationery', 'Home')\nORDER BY product_id;",
    dataset: "shop",
    explain: "Four rows: Notebook, Pen, Mug and Planner.",
  },
  questions: [
    q(1, "Easy", "List the products in the Stationery or Home category using IN.", "4 rows: Notebook, Pen, Mug, Planner", "category IN ('Stationery', 'Home').", "SELECT product_name, category FROM products WHERE category IN ('Stationery', 'Home') ORDER BY product_id;"),
    q(2, "Easy", "List each city that has a customer, once, A to Z.", "4 rows: Delhi, Jaipur, Mumbai, Pune", "SELECT DISTINCT city.", "SELECT DISTINCT city FROM customers ORDER BY city;"),
    q(3, "Easy", "Find products priced from 100 to 300 inclusive, cheapest first.", "3 rows: Notebook 100.00, Mug 250.00, Planner 300.00", "BETWEEN includes both ends.", "SELECT product_name, price FROM products WHERE price BETWEEN 100 AND 300 ORDER BY price;"),
    q(4, "Easy", "Find customers whose name starts with E.", "1 row: Esha", "LIKE 'E%'.", "SELECT customer_name FROM customers WHERE customer_name LIKE 'E%';"),
    q(5, "Easy", "Show the three cheapest products.", "3 rows: Pen 20.00, Notebook 100.00, Mug 250.00", "ORDER BY price, then LIMIT 3.", "SELECT product_name, price FROM products ORDER BY price LIMIT 3;"),
    q(6, "Medium", "List February 2026 orders using BETWEEN on order_date.", "3 rows: 103, 104, 105", "order_date is a DATE, so BETWEEN '2026-02-01' AND '2026-02-28' is safe here.", "SELECT order_id, order_date FROM orders WHERE order_date BETWEEN '2026-02-01' AND '2026-02-28' ORDER BY order_id;"),
    q(7, "Medium", "Find products whose name contains the letter o anywhere.", "2 rows: Notebook, Keyboard", "Wildcards on both sides: '%o%'.", "SELECT product_name FROM products WHERE product_name LIKE '%o%' ORDER BY product_id;"),
    q(8, "Medium", "List customers who are not in Pune or Mumbai.", "2 rows: Dev (Delhi), Farah (Jaipur)", "NOT IN ('Pune', 'Mumbai').", "SELECT customer_name, city FROM customers WHERE city NOT IN ('Pune', 'Mumbai') ORDER BY customer_id;"),
    q(9, "Medium", "List each order status once, A to Z.", "3 rows: cancelled, completed, pending", "DISTINCT on status.", "SELECT DISTINCT status FROM orders ORDER BY status;"),
    q(10, "Medium", "Show page 2 of the product list, 2 products per page, in product_id order.", "2 rows: Desk lamp, Mug", "LIMIT 2 OFFSET 2.", "SELECT product_id, product_name FROM products ORDER BY product_id LIMIT 2 OFFSET 2;"),
    q(11, "Medium", "Find product names that are exactly three characters long using LIKE.", "2 rows: Pen, Mug", "Each _ matches one character.", "SELECT product_name FROM products WHERE product_name LIKE '___' ORDER BY product_id;"),
    q(12, "Hard", "Find customers whose email does NOT end in .test — including customers with no email.", "1 row: Charu (email NULL)", "NOT LIKE alone drops NULLs; add OR email IS NULL.", "SELECT customer_name, email FROM customers WHERE email NOT LIKE '%.test' OR email IS NULL;"),
    q(13, "Hard", "List each customer_id that appears in orders, once.", "5 rows: 1, 2, 3, 4, 5 (customer 6 never ordered)", "DISTINCT customer_id from orders.", "SELECT DISTINCT customer_id FROM orders ORDER BY customer_id;"),
    q(14, "Hard", "Find the single most expensive Stationery product.", "1 row: Planner 300.00", "Filter, sort descending, LIMIT 1.", "SELECT product_name, price FROM products WHERE category = 'Stationery' ORDER BY price DESC LIMIT 1;"),
    q(15, "Hard", "List orders from 2026-01-08 to 2026-03-02 inclusive that were not cancelled.", "4 rows: 102, 103, 105, 106", "BETWEEN for the dates, <> for the status.", "SELECT order_id, order_date, status FROM orders WHERE order_date BETWEEN '2026-01-08' AND '2026-03-02' AND status <> 'cancelled' ORDER BY order_id;"),
    q(16, "Professional", "A support agent types “sh” into a search box. Return customers whose name or email contains it.", "2 rows: Asha, Esha", "Two LIKE conditions joined with OR; LIKE ignores case.", "SELECT customer_id, customer_name, email FROM customers WHERE customer_name LIKE '%sh%' OR email LIKE '%sh%' ORDER BY customer_id;"),
    q(17, "Professional", "Price-list page 1: non-Electronics products priced 100–800, names A to Z, 2 per page.", "2 rows: Mug 250.00, Notebook 100.00", "category <> 'Electronics', BETWEEN, ORDER BY product_name, LIMIT 2.", "SELECT product_name, price FROM products WHERE category <> 'Electronics' AND price BETWEEN 100 AND 800 ORDER BY product_name LIMIT 2;"),
  ],
  quiz: [
    { id: "q1", question: "Which rows does price BETWEEN 100 AND 300 keep?", options: ["101 to 299", "100 to 299", "100 to 300, both included", "Only 100 and 300"], correctIndex: 2, explanation: "BETWEEN is inclusive at both ends." },
    { id: "q2", question: "Which pattern finds names that END with 'a'?", options: ["'a%'", "'%a'", "'_a'", "'%a%'"], correctIndex: 1, explanation: "% before the a allows any characters before it, and nothing after it." },
    { id: "q3", question: "What does SELECT DISTINCT city, customer_name FROM customers; return for the shop?", options: ["4 rows", "6 rows", "1 row", "An error"], correctIndex: 1, explanation: "DISTINCT applies to the whole row; every (city, name) pair is unique, so all 6 rows remain." },
    { id: "q4", question: "Which clause order is valid?", options: ["SELECT … LIMIT 3 ORDER BY price", "SELECT … WHERE … ORDER BY … LIMIT 3", "SELECT … ORDER BY … WHERE …", "LIMIT 3 SELECT …"], correctIndex: 1, explanation: "The order is SELECT, FROM, WHERE, ORDER BY, LIMIT." },
  ],
};
