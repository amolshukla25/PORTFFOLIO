import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson01: MysqlLesson = {
  slug: "what-is-a-database",
  shortTitle: "What a database is",
  title: "What is a database? Tables, rows and your first SQL query",
  summary: "No SQL experience needed. Learn what a database, table, row, column and primary key are, then write your first SELECT statement.",
  module: 1,
  dataset: "none",
  teaches: ["What is a database", "Relational tables", "Rows and columns", "Primary key", "SELECT statement", "Column alias", "NULL"],
  quickAnswer: {
    question: "What is a database and what is SQL?",
    answer:
      "A database is an organised store of data kept in tables: each table lists one kind of thing, each row is one record and each column is one fact about it. SQL (Structured Query Language) is the language you use to ask the database questions. MySQL is a database server that understands SQL.",
  },
  outcomes: [
    "Explain database, table, row, column and primary key with a real example",
    "Tell the difference between MySQL (the server), SQL (the language) and Workbench (the editor)",
    "Write SELECT statements that show numbers, text and calculations with clear column names",
    "Say what NULL means and why 5 + NULL is NULL",
  ],
  sections: [
    {
      heading: "What is a database?",
      body: `Think of a small shop that keeps its records in a notebook. One page lists **customers**, another lists **products**, and a third lists every **order**. As the shop grows, the notebook becomes hard to search: *How many notebooks did we sell in February? Which customer has not ordered yet?*

A **database** is that notebook, organised so a computer can answer such questions in milliseconds. Data lives in **tables**:

| product_id | product_name | category | price |
|---|---|---|---|
| 1 | Notebook | Stationery | 100.00 |
| 2 | Pen | Stationery | 20.00 |
| 3 | Desk lamp | Electronics | 800.00 |

- A **table** holds one kind of thing — here, products.
- A **row** (also called a record) is one product: *Notebook, Stationery, 100.00*.
- A **column** (a field) is one fact that every row has: *price*.
- A **primary key** is a column whose value is unique for every row — \`product_id\`. Two products could share a name, but never an id.

A database that stores data in related tables like this is a **relational database**. MySQL, PostgreSQL, SQL Server and Oracle are all relational databases, and the SQL you learn here transfers to all of them with small changes.`,
      callout: { kind: "remember", text: "Table = one kind of thing. Row = one record. Column = one fact. Primary key = the unique label for each row." },
    },
    {
      heading: "MySQL, SQL and Workbench: three different things",
      body: `Beginners often mix these up, so let us separate them now:

1. **MySQL Server** is the program that stores the tables and runs your queries. It runs quietly in the background (on your laptop, a company server or the cloud).
2. **SQL** is the language. You write a sentence such as \`SELECT product_name FROM products;\` and the server answers with a grid of results.
3. **MySQL Workbench** is an editor: a window where you type SQL, press *Run*, and see the results. Other editors (DBeaver, the command line, this page's practice editor) do the same job.

You do not need Python or any other programming language. SQL is a language of its own, and it reads almost like English.`,
    },
    {
      heading: "Your first SQL statement: SELECT",
      body: `\`SELECT\` means *show me*. It is the most used word in SQL and it never changes stored data, so you cannot break anything with it. The smallest possible query asks MySQL to show a value:`,
      sql: "SELECT 1 AS first_result;",
      dataset: "none",
      after: `Read it as: *show the number 1 and name the output column \`first_result\`*. The word \`AS\` gives the column a name, called an **alias**. The semicolon \`;\` ends the statement, like a full stop ends a sentence.`,
    },
    {
      heading: "Text, numbers and column names",
      body: `Numbers are written as they are. **Text must be in single quotes** — without quotes MySQL thinks the word is a column name. You can show several columns by separating them with commas:`,
      sql: "SELECT 'Learning Shop' AS shop, 'Pune' AS city, 2026 AS year;",
      dataset: "none",
      after: `If you want a space inside a column name, wrap the alias in backticks: \`\`SELECT 100 AS \`unit price\`;\`\`. Most teams avoid spaces and use \`snake_case\` names such as \`unit_price\`.`,
      callout: { kind: "mistake", text: "SELECT Hello; fails with “Unknown column 'Hello'”. Text needs quotes: SELECT 'Hello';" },
    },
    {
      heading: "Calculations and the order of operations",
      body: `SQL can calculate directly. It uses \`+ - * /\` and follows normal maths rules: multiplication and division happen before addition and subtraction. Brackets change the order.`,
      sql: "SELECT 2 + 3 * 4 AS answer, (2 + 3) * 4 AS with_brackets, 250 * 0.9 AS sale_price;",
      dataset: "none",
      after: `In MySQL, \`/\` always gives a decimal result (\`7 / 2\` is \`3.5000\`). Later you will use the same arithmetic on columns, for example \`quantity * unit_price\` to get a line total.`,
    },
    {
      heading: "NULL: the value that means “unknown”",
      body: `Sometimes a fact is missing — a customer who never gave an email address. SQL stores this as **NULL**. NULL is *not* zero and *not* an empty text; it means *we do not know*. Anything calculated from an unknown value is also unknown:`,
      sql: "SELECT NULL AS missing_value, 5 + NULL AS still_unknown, 0 AS zero_is_a_value;",
      dataset: "none",
      after: `You will meet NULL again in lesson 4 (finding rows where a value is missing) and lesson 6 (replacing NULL with a default using \`COALESCE\`).`,
      callout: { kind: "remember", text: "NULL means unknown. 5 + NULL = NULL. You test for it with IS NULL, never = NULL." },
    },
    {
      heading: "How MySQL reads a statement",
      body: `- **Keywords are not case-sensitive.** \`select\`, \`SELECT\` and \`Select\` are the same. This course writes keywords in capitals so they stand out.
- **Spaces and new lines do not matter.** Split long queries over several lines so they are easy to read.
- **Comments are ignored.** \`-- like this\` comments out the rest of a line; \`/* like this */\` can span lines. Use comments to explain *why* a query exists.
- **One statement ends at the semicolon.** You can put several statements in one script; each gives its own result.`,
      sql: "-- receipt preview for one item\nSELECT\n  'Pen' AS item,\n  5 AS qty,\n  20 AS price,\n  5 * 20 AS line_total;",
      dataset: "none",
      callout: { kind: "business", text: "Every report you build later is just a longer SELECT. Clear aliases and comments are what make it reviewable by a manager or teammate." },
    },
  ],
  mistakes: [
    { wrong: "SELECT Hello;", why: "Without quotes MySQL looks for a column named Hello and fails with error 1054 (Unknown column).", fix: "SELECT 'Hello';" },
    { wrong: "SELECT 100 AS unit price;", why: "The space ends the alias, so MySQL sees an extra word and raises a syntax error (1064).", fix: "SELECT 100 AS unit_price;  -- or AS `unit price`" },
    { wrong: "Treating NULL as 0", why: "NULL means unknown, so 5 + NULL is NULL, not 5.", fix: "Keep NULL in mind whenever data can be missing; lesson 6 shows COALESCE(value, 0)." },
  ],
  checkYourself: [
    "In the products table, what is one row and what is one column?",
    "Why must product_id be unique, while product_name does not have to be?",
    "What does SELECT 2 + 3 * 4 return, and why not 20?",
  ],
  faq: [
    { q: "Do I need to know programming before learning SQL?", a: "No. SQL is its own language and reads close to English. This course assumes no programming or database experience." },
    { q: "Is MySQL free?", a: "Yes. MySQL Community Server and MySQL Workbench are free to download for Windows, macOS and Linux. You can also practise on this page without installing anything." },
    { q: "What is the difference between SQL and MySQL?", a: "SQL is the language for asking questions of relational databases. MySQL is one database server that understands SQL; PostgreSQL, SQL Server and SQLite are others." },
  ],
  guided: {
    intro: "Run your first queries in the practice editor below. No database or installation is needed for this lesson.",
    steps: [
      "Press Run (or Ctrl + Enter) to execute the query that is already in the editor.",
      "Read the result grid: one row, one column named first_result.",
      "Change 1 to your favourite number and the alias to my_number, then run it again.",
      "Add a second column: , 'your name' AS learner — remember the single quotes.",
    ],
    sql: "SELECT 1 AS first_result;",
    dataset: "none",
    explain: "One row with one column named first_result containing 1. SELECT shows values; it never changes stored data.",
  },
  questions: pick("L1", "L1-O1", "L1-O2", "L1-O3", "L1-O4", "L1-N01", "L1-N02", "L1-N03", "L1-N04", "L1-N05", "L1-N06", "L1-N07", "L1-N08", "L1-N09", "L1-N10", "L1-N11", "L1-N12", "L1-N13", "L1-N14", "L1-N15"),
  quiz: [
    { id: "q1", question: "In a products table, what is one row?", options: ["One fact such as price", "One product with all its facts", "The whole list of products", "The name of the table"], correctIndex: 1, explanation: "A row is one record — one product with its id, name, category and price. A column is one fact." },
    { id: "q2", question: "Which column is the best primary key for products?", options: ["product_name", "category", "product_id", "price"], correctIndex: 2, explanation: "A primary key must be unique for every row. Names, categories and prices can repeat; product_id is assigned uniquely." },
    { id: "q3", question: "What does SELECT 5 + NULL AS r; return?", options: ["5", "0", "NULL", "An error"], correctIndex: 2, explanation: "NULL means unknown, and any arithmetic with an unknown value is unknown." },
    { id: "q4", question: "Why does SELECT Hello; fail?", options: ["SELECT needs a FROM", "Text must be in single quotes", "Keywords must be lowercase", "The semicolon is wrong"], correctIndex: 1, explanation: "Without quotes MySQL reads Hello as a column name and reports Unknown column 'Hello'." },
  ],
};
