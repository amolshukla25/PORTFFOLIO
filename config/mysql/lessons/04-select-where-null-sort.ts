import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson04: MysqlLesson = {
  slug: "setup-select-filter",
  shortTitle: "SELECT, WHERE, NULL and sorting",
  title: "SELECT, WHERE, NULL and ORDER BY in MySQL",
  summary: "Choose columns with SELECT, keep matching rows with WHERE, combine conditions with AND / OR / NOT, handle NULL correctly and sort results with ORDER BY.",
  module: 2,
  dataset: "shop",
  teaches: ["SELECT columns", "WHERE clause", "Comparison operators", "AND OR NOT", "Operator precedence", "IS NULL", "ORDER BY ASC DESC", "Calculated columns"],
  quickAnswer: {
    question: "How do you filter and sort rows in MySQL?",
    answer:
      "Use WHERE to keep only rows that match a condition and ORDER BY to sort them: SELECT product_name, price FROM products WHERE price >= 300 ORDER BY price DESC;. Combine conditions with AND / OR (add brackets when you mix them) and test missing values with IS NULL, never = NULL.",
  },
  outcomes: [
    "Pick exactly the columns you need and name calculated columns",
    "Filter rows with =, <>, <, >, <=, >= on numbers, text and dates",
    "Combine conditions with AND, OR and NOT — and know which runs first",
    "Find missing values with IS NULL / IS NOT NULL",
    "Sort by one or more columns, ascending or descending",
  ],
  sections: [
    {
      heading: "The shape of a query",
      body: `Almost every query you will write follows this order:

\`\`\`sql
SELECT   columns you want to see
FROM     the table they come from
WHERE    which rows to keep
ORDER BY how to sort the result;
\`\`\`

Only \`SELECT\` and \`FROM\` are required. Name the columns instead of using \`*\` — the result is narrower, faster and does not change when someone adds a column to the table.`,
      sql: "SELECT product_name, price\nFROM products\nORDER BY product_id;",
      dataset: "shop",
    },
    {
      heading: "Calculated columns",
      body: "You can calculate in the SELECT list. The table is not changed; only the output gets a new column. Give every calculated column an alias:",
      sql: "SELECT product_name, price, price * 1.18 AS price_with_gst\nFROM products\nORDER BY product_id;",
      dataset: "shop",
      after: "MySQL shows four decimals (118.0000) because multiplying a DECIMAL(10,2) by 1.18 keeps the extra precision. Lesson 6 shows ROUND() to tidy this.",
    },
    {
      heading: "WHERE keeps the rows that match",
      body: `WHERE tests every row and keeps those where the condition is **true**.

| Operator | Meaning | Example |
|---|---|---|
| \`=\` | equal | \`city = 'Pune'\` |
| \`<>\` or \`!=\` | not equal | \`status <> 'completed'\` |
| \`>\` \`>=\` \`<\` \`<=\` | greater / less | \`price >= 300\` |

Text and dates go in single quotes. In MySQL, text comparison ignores upper/lower case by default, so \`'pune'\` also matches \`Pune\`.`,
      sql: "SELECT customer_id, customer_name, city\nFROM customers\nWHERE city = 'Pune'\nORDER BY customer_id;",
      dataset: "shop",
      after: "Dates compare in calendar order when written as 'YYYY-MM-DD': `WHERE order_date >= '2026-02-01'` keeps February and March orders.",
    },
    {
      heading: "AND, OR, NOT — and which runs first",
      body: `- \`AND\` — both conditions must be true.
- \`OR\` — at least one must be true.
- \`NOT\` — reverses a condition.

**AND runs before OR**, exactly as \`*\` runs before \`+\`. That surprises people. Suppose you want *Stationery or Home products that cost under 200*:`,
      sql: "-- Wrong: reads as Stationery OR (Home AND price < 200)\nSELECT product_name, category, price\nFROM products\nWHERE category = 'Stationery' OR category = 'Home' AND price < 200\nORDER BY product_id;",
      dataset: "shop",
      after: "Planner (300.00) slipped in, because every Stationery row passes the first half on its own. Brackets fix it:",
    },
    {
      heading: "Brackets make the meaning explicit",
      body: "Whenever you mix AND with OR, add brackets — even when you think the default order is right. Reviewers will thank you.",
      sql: "SELECT product_name, category, price\nFROM products\nWHERE (category = 'Stationery' OR category = 'Home') AND price < 200\nORDER BY product_id;",
      dataset: "shop",
      callout: { kind: "remember", text: "Mixing AND with OR? Always add brackets." },
    },
    {
      heading: "NULL needs IS NULL",
      body: `Remember from lesson 1: NULL means *unknown*. Comparing anything with unknown gives unknown — not true — so \`WHERE email = NULL\` returns **no rows, without any error**. Use \`IS NULL\` and \`IS NOT NULL\`:`,
      sql: "SELECT customer_id, customer_name, email\nFROM customers\nWHERE email IS NULL;",
      dataset: "shop",
      after: "A second trap: `WHERE email <> 'asha@example.test'` also skips Charu, because comparing her NULL email gives unknown. If missing values should be included, say so: `WHERE email <> 'asha@example.test' OR email IS NULL`.",
      callout: { kind: "mistake", text: "WHERE email = NULL runs without error and silently returns zero rows. Always write IS NULL." },
    },
    {
      heading: "ORDER BY: sorting results",
      body: `SQL does **not** guarantee any row order unless you ask for one. \`ORDER BY\` sorts ascending (\`ASC\`, the default) or descending (\`DESC\`). List several columns to break ties — the second column only matters when the first is equal:`,
      sql: "SELECT product_name, category, price\nFROM products\nORDER BY category, price DESC;",
      dataset: "shop",
      after: "In MySQL, NULLs sort first in ascending order and last in descending order. Sorting by a column that is not unique? Add the primary key at the end (`ORDER BY price DESC, product_id`) so the order is repeatable.",
      callout: { kind: "business", text: "A report that sorts differently every time it runs looks broken to its reader, even when the numbers are right. Always end with a unique tiebreaker." },
    },
    {
      heading: "Write queries other people can read",
      body: `SQL ignores spaces and line breaks, so use them for the reader. A few habits make a query easy to review — and easy for *you* to debug next month:

- **One clause per line**, keywords in capitals: SELECT, FROM, WHERE, ORDER BY each start a line.
- **Name the columns** you need instead of \`*\`, in the order the reader should see them.
- **Alias calculated columns** with clear names: \`price_with_gst\`, not \`col3\`.
- **Comment the why**, not the what: \`-- exclude test customers\` tells a reviewer something the SQL cannot.
- **Put each condition on its own line** with AND / OR at the start, so a condition can be commented out while testing.`,
      sql: "-- Products a customer can buy for under 500, cheapest first\nSELECT product_name,\n       category,\n       price\nFROM products\nWHERE price < 500\n  AND category <> 'Electronics'   -- electronics ship separately\nORDER BY price, product_id;",
      dataset: "shop",
      callout: { kind: "business", text: "Teams review SQL like any other code. A query laid out one clause per line gets approved faster and breaks less often." },
    },
  ],
  mistakes: [
    { wrong: "WHERE email = NULL", why: "Comparing with NULL is never true, so no rows come back — and there is no error to warn you.", fix: "WHERE email IS NULL" },
    { wrong: "WHERE category = 'Stationery' OR category = 'Home' AND price < 200", why: "AND binds before OR, so the price limit only applies to Home.", fix: "WHERE (category = 'Stationery' OR category = 'Home') AND price < 200" },
    { wrong: "WHERE city = Pune", why: "Without quotes MySQL looks for a column called Pune (error 1054).", fix: "WHERE city = 'Pune'" },
    { wrong: "Relying on the order rows happen to come back in", why: "Without ORDER BY the order can change between runs, servers and versions.", fix: "Always add ORDER BY with a unique tiebreaker for reports." },
  ],
  checkYourself: [
    "Why does WHERE email = NULL return nothing instead of Charu?",
    "Rewrite a condition that mixes AND and OR so its meaning is obvious.",
    "Why is ORDER BY price DESC, product_id better than ORDER BY price DESC for a report?",
  ],
  faq: [
    { q: "Is SQL case-sensitive in MySQL?", a: "Keywords are not. Text comparisons are case-insensitive with MySQL's default utf8mb4 collation, so 'pune' = 'Pune'. Table names can be case-sensitive on Linux servers, so match their exact case." },
    { q: "What is the difference between <> and != in MySQL?", a: "None — both mean not equal. <> is the SQL standard; != is accepted by MySQL and most other databases." },
    { q: "Why does my WHERE with NULL return no rows?", a: "Because = NULL compares with an unknown value and is never true. Use IS NULL or IS NOT NULL." },
  ],
  guided: {
    intro: "Build one query step by step: columns first, then a filter, then the sort.",
    steps: [
      "Run the query as it is: customers in Pune, ordered by id.",
      "Change Pune to Mumbai and run again — Bilal and Esha.",
      "Add AND email IS NOT NULL to the WHERE and run. Nothing changes for Mumbai; try it again with Pune and watch Charu disappear.",
      "Change ORDER BY customer_id to ORDER BY customer_name DESC.",
    ],
    sql: "SELECT customer_id, customer_name, city\nFROM customers\nWHERE city = 'Pune'\nORDER BY customer_id;",
    dataset: "shop",
    explain: "Two rows: (1, Asha, Pune) and (3, Charu, Pune).",
  },
  questions: pick("L4", "L4-O1", "L4-O2", "L4-O3", "L4-O4", "L4-N01", "L4-N02", "L4-N03", "L4-N04", "L4-N05", "L4-N06", "L4-N07", "L4-N08", "L4-N09", "L4-N10", "L4-N11", "L4-N12", "L4-N13", "L4-N14", "L4-N15"),
  quiz: [
    { id: "q1", question: "How many rows does SELECT * FROM customers WHERE email = NULL; return?", options: ["1 (Charu)", "0", "5", "An error"], correctIndex: 1, explanation: "= NULL is never true. You need IS NULL to find Charu." },
    { id: "q2", question: "In WHERE a OR b AND c, what runs first?", options: ["a OR b", "b AND c", "Left to right", "It is an error"], correctIndex: 1, explanation: "AND binds more tightly than OR, so it reads a OR (b AND c)." },
    { id: "q3", question: "Without ORDER BY, in what order do rows come back?", options: ["Primary-key order", "Insert order", "No guaranteed order", "Alphabetical order"], correctIndex: 2, explanation: "SQL only guarantees order when you specify ORDER BY." },
    { id: "q4", question: "Which query lists the most expensive products first?", options: ["ORDER BY price", "ORDER BY price ASC", "ORDER BY price DESC", "SORT price DESC"], correctIndex: 2, explanation: "DESC sorts from highest to lowest; ASC (the default) is lowest first." },
  ],
};
