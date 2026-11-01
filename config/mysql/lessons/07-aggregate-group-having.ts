import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson07: MysqlLesson = {
  slug: "aggregate-group-having",
  shortTitle: "GROUP BY and HAVING",
  title: "COUNT, SUM, AVG, GROUP BY and HAVING in MySQL",
  summary: "Summarise rows with COUNT, SUM, AVG, MIN and MAX, make one row per group with GROUP BY, and filter groups with HAVING instead of WHERE.",
  module: 2,
  dataset: "shop",
  teaches: ["Aggregate functions", "COUNT(*) vs COUNT(column)", "COUNT DISTINCT", "SUM AVG MIN MAX", "GROUP BY", "HAVING", "WHERE vs HAVING", "ONLY_FULL_GROUP_BY"],
  quickAnswer: {
    question: "What is the difference between WHERE and HAVING in SQL?",
    answer:
      "WHERE filters individual rows before they are grouped; HAVING filters whole groups after GROUP BY has calculated aggregates. So WHERE city = 'Pune' keeps Pune customers, while HAVING COUNT(*) > 1 keeps only cities that have more than one customer. Aggregates such as COUNT can only be tested in HAVING.",
  },
  outcomes: [
    "Count rows, non-NULL values and distinct values — and explain the difference",
    "Total, average and find the minimum and maximum of a column",
    "Produce one result row per group with GROUP BY, including two-column groups",
    "Filter groups with HAVING and rows with WHERE in the same query",
    "Fix the ONLY_FULL_GROUP_BY error (1055)",
  ],
  sections: [
    {
      heading: "Aggregate functions turn many rows into one",
      body: `An **aggregate** reads a whole set of rows and returns a single value:

| Function | Returns |
|---|---|
| \`COUNT(*)\` | number of rows |
| \`COUNT(column)\` | number of rows where the column is **not NULL** |
| \`COUNT(DISTINCT column)\` | number of different non-NULL values |
| \`SUM(column)\` / \`AVG(column)\` | total / average (NULLs are ignored) |
| \`MIN(column)\` / \`MAX(column)\` | smallest / largest value — works on numbers, text and dates |`,
      sql: "SELECT COUNT(*)              AS customers,\n       COUNT(email)          AS known_emails,\n       COUNT(DISTINCT city)  AS cities\nFROM customers;",
      dataset: "shop",
      after: "Six rows, five emails (Charu's NULL is skipped) and four different cities — three different counts from one table.",
    },
    {
      heading: "SUM, AVG, MIN and MAX",
      body: "These work the same way. `AVG` ignores NULLs, which matters: the average of (100, NULL, 200) is 150, not 100.",
      sql: "SELECT SUM(price) AS catalogue_total,\n       AVG(price) AS average_price,\n       MIN(price) AS cheapest,\n       MAX(price) AS dearest\nFROM products;",
      dataset: "shop",
      after: "MySQL shows the average with extra decimals (445.000000). Wrap it in `ROUND(AVG(price), 2)` for reports.",
    },
    {
      heading: "GROUP BY: one row per group",
      body: `Without GROUP BY, an aggregate summarises the whole table into one row. **GROUP BY** first splits the rows into buckets — one bucket per distinct value — and then runs the aggregate inside each bucket. The columns in GROUP BY decide the **grain** of the result: \`GROUP BY city\` gives one row per city.`,
      diagram: "group-buckets",
      sql: "SELECT city, COUNT(*) AS customers\nFROM customers\nGROUP BY city\nORDER BY city;",
      dataset: "shop",
    },
    {
      heading: "Group by two columns",
      body: "List several columns to make smaller buckets. Here each bucket is one *category + price band* combination; we reuse CASE from lesson 6:",
      sql: "SELECT category,\n       CASE WHEN price >= 300 THEN '300+' ELSE 'under 300' END AS band,\n       COUNT(*) AS products,\n       SUM(price) AS value\nFROM products\nGROUP BY category, band\nORDER BY category, band;",
      dataset: "shop",
      after: "MySQL lets you GROUP BY a column alias such as `band`. Standard SQL would need you to repeat the CASE expression; both work here.",
    },
    {
      heading: "WHERE filters rows, HAVING filters groups",
      body: `The query runs in this logical order — memorise it:

1. **FROM** — read the table
2. **WHERE** — drop rows that fail the condition
3. **GROUP BY** — build the buckets
4. **HAVING** — drop buckets that fail the condition
5. **SELECT** — compute the output columns
6. **ORDER BY** / **LIMIT**

So WHERE cannot see aggregates (they do not exist yet), and HAVING is where you test them:`,
      sql: "SELECT status, COUNT(*) AS orders\nFROM orders\nWHERE order_date >= '2026-02-01'   -- rows: February and March only\nGROUP BY status\nHAVING COUNT(*) >= 1               -- groups: keep any status that appears\nORDER BY orders DESC, status;",
      dataset: "shop",
      callout: { kind: "mistake", text: "WHERE COUNT(*) > 1 fails with error 1111 (Invalid use of group function). Tests on aggregates belong in HAVING." },
    },
    {
      heading: "The ONLY_FULL_GROUP_BY rule (error 1055)",
      body: `Every column in SELECT must be either **in GROUP BY** or **inside an aggregate**. Otherwise MySQL cannot know which value to show for the group. Since MySQL 5.7 the \`ONLY_FULL_GROUP_BY\` mode (on by default) rejects such queries:

\`\`\`sql
-- Error 1055: customer_name is not in GROUP BY
SELECT city, customer_name, COUNT(*) FROM customers GROUP BY city;
\`\`\`

Fix it by grouping by the column, aggregating it (\`MIN(customer_name)\`, \`GROUP_CONCAT(customer_name)\`), or removing it. \`GROUP_CONCAT\` is handy for small groups:`,
      sql: "SELECT city,\n       COUNT(*) AS customers,\n       GROUP_CONCAT(customer_name ORDER BY customer_name SEPARATOR ', ') AS names\nFROM customers\nGROUP BY city\nORDER BY city;",
      dataset: "shop",
      callout: { kind: "tip", text: "The practice editor is more forgiving than MySQL about ONLY_FULL_GROUP_BY. Always test grouped queries in Workbench too." },
    },
    {
      heading: "Reconcile your groups",
      body: "A grouped report should add back up to the whole. Professionals check this every time — if the groups do not sum to the total, a filter or a NULL is hiding rows:",
      sql: "SELECT status, COUNT(*) AS orders\nFROM orders\nGROUP BY status\nWITH ROLLUP;",
      dataset: "shop",
      after: "`WITH ROLLUP` adds a final row with NULL in the group column and the grand total (8). 1 + 6 + 1 = 8, so nothing is missing.",
      callout: { kind: "business", text: "“Do the parts add up to the whole?” is the first question a finance reviewer asks. Answer it before they do." },
    },
    {
      heading: "Averages of averages (and other traps)",
      body: `Two summary mistakes are worth seeing once:

1. **Averaging the wrong rows.** \`AVG(unit_price)\` over order_items is the average *line* price, not the average product price — popular products appear many times and pull it towards themselves.
2. **Averaging averages.** If Pune's average order is 900 and Mumbai's is 1300, the overall average is **not** 1100 unless both cities have the same number of orders. Recalculate from the underlying rows instead.

Compare the two numbers below: the catalogue average treats each product once; the order-line average weights each product by how often it was sold.`,
      sql: "SELECT (SELECT ROUND(AVG(price), 2) FROM products)          AS avg_catalogue_price,\n       (SELECT ROUND(AVG(unit_price), 2) FROM order_items) AS avg_line_price;",
      dataset: "shop",
      after: "Neither number is wrong — they answer different questions. Write down which question your report answers before you choose the rows to average.",
    },
  ],
  mistakes: [
    { wrong: "SELECT city, COUNT(*) FROM customers WHERE COUNT(*) > 1 GROUP BY city;", why: "WHERE runs before grouping, so COUNT does not exist yet (error 1111).", fix: "… GROUP BY city HAVING COUNT(*) > 1;" },
    { wrong: "SELECT city, customer_name, COUNT(*) FROM customers GROUP BY city;", why: "customer_name is neither grouped nor aggregated (error 1055 under ONLY_FULL_GROUP_BY).", fix: "Group by it, aggregate it, or drop it." },
    { wrong: "COUNT(email) to count customers", why: "COUNT(column) skips NULLs, so Charu is not counted.", fix: "COUNT(*) counts rows; COUNT(email) counts known emails." },
  ],
  checkYourself: [
    "Why do COUNT(*), COUNT(email) and COUNT(DISTINCT city) give three different numbers?",
    "Put these in the order MySQL evaluates them: SELECT, HAVING, WHERE, GROUP BY, FROM.",
    "How would you prove that a grouped report covers every order?",
  ],
  faq: [
    { q: "What is the difference between COUNT(*) and COUNT(column)?", a: "COUNT(*) counts every row. COUNT(column) counts only rows where that column is not NULL. COUNT(DISTINCT column) counts different non-NULL values." },
    { q: "Can I use HAVING without GROUP BY?", a: "Yes. Then the whole table is one group, so HAVING COUNT(*) > 0 either returns the single summary row or nothing. It is rare in practice." },
    { q: "How do I fix MySQL error 1055 (ONLY_FULL_GROUP_BY)?", a: "Every selected column must be in GROUP BY or inside an aggregate. Add the column to GROUP BY, wrap it in MIN/MAX/GROUP_CONCAT, or remove it. Do not turn the mode off — it protects you from random values." },
  ],
  guided: {
    intro: "Turn a customer list into a city summary, then filter the summary.",
    steps: [
      "Run the query: one row per city with a customer count.",
      "Add COUNT(email) AS with_email to the SELECT — Pune shows 2 customers but 1 email.",
      "Add HAVING COUNT(*) > 1 after GROUP BY: only Mumbai and Pune remain.",
      "Add WHERE customer_id <= 4 before GROUP BY and notice that Mumbai drops to 1 customer and disappears.",
    ],
    sql: "SELECT city, COUNT(*) AS customers\nFROM customers\nGROUP BY city\nORDER BY city;",
    dataset: "shop",
    explain: "Delhi 1, Jaipur 1, Mumbai 2, Pune 2 — and 1 + 1 + 2 + 2 = 6 customers.",
  },
  questions: pick("L5", "L5-O1", "L5-O2", "L5-O3", "L5-O4", "L5-N01", "L5-N02", "L5-N03", "L5-N04", "L5-N05", "L5-N06", "L5-N07", "L5-N08", "L5-N09", "L5-N10", "L5-N11", "L5-N12", "L5-N13", "L5-N14", "L5-N15"),
  quiz: [
    { id: "q1", question: "customers has 6 rows and one NULL email. What does COUNT(email) return?", options: ["6", "5", "1", "NULL"], correctIndex: 1, explanation: "COUNT(column) ignores NULLs." },
    { id: "q2", question: "Where does a condition on COUNT(*) belong?", options: ["WHERE", "HAVING", "ORDER BY only", "FROM"], correctIndex: 1, explanation: "Aggregates are calculated after WHERE, so they are filtered in HAVING." },
    { id: "q3", question: "Which runs first?", options: ["HAVING", "GROUP BY", "WHERE", "SELECT"], correctIndex: 2, explanation: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY." },
    { id: "q4", question: "SELECT category, product_name, COUNT(*) FROM products GROUP BY category; in MySQL 8 with default settings…", options: ["Returns 3 rows", "Returns 6 rows", "Fails with error 1055", "Returns 1 row"], correctIndex: 2, explanation: "product_name is neither grouped nor aggregated, which ONLY_FULL_GROUP_BY rejects." },
  ],
};
