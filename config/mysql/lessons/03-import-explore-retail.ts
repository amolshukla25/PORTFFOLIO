import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson03: MysqlLesson = {
  slug: "import-explore-retail",
  shortTitle: "Import and explore the shop data",
  title: "Import a sample MySQL database and explore its tables",
  summary: "Import the Learning Shop practice database, then explore it with USE, SHOW TABLES, DESCRIBE and SELECT * before writing any analysis.",
  module: 1,
  dataset: "shop",
  teaches: ["Import .sql file in MySQL Workbench", "USE database", "SHOW TABLES", "DESCRIBE table", "SELECT *", "Foreign key", "Table grain", "information_schema"],
  quickAnswer: {
    question: "How do I import a .sql file into MySQL Workbench?",
    answer:
      "In MySQL Workbench choose File → Open SQL Script, select the .sql file, then click the lightning bolt to execute the whole script. Refresh the Schemas panel, run USE database_name; to select it, and SHOW TABLES; to confirm the tables arrived.",
  },
  outcomes: [
    "Import a .sql script in Workbench or the command line and confirm it worked",
    "Select a database with USE and list its tables",
    "Read a table's structure with DESCRIBE and spot primary and foreign keys",
    "Describe the grain (what one row means) of each table in the shop",
  ],
  sections: [
    {
      heading: "Meet Learning Shop",
      body: `Every lesson in this course uses one small, fictional shop in India, so you can check every answer by eye. It has four tables:

- **customers** — 6 people in Pune, Mumbai, Delhi and Jaipur. One has no email (NULL).
- **products** — 6 items in three categories: Stationery, Electronics, Home. Prices are in INR.
- **orders** — 8 orders from January to March 2026, each *completed*, *cancelled* or *pending*.
- **order_items** — 14 lines: which product, how many, and the price paid at the time.

The tables connect through ids: an order belongs to one customer, and each order item belongs to one order and one product.`,
      diagram: "er",
      callout: { kind: "business", text: "This four-table shape — customers, products, orders, order lines — is the core of almost every e-commerce, retail and billing database you will meet at work." },
    },
    {
      heading: "Import the database",
      body: "Download the script from the **Database** step of this lesson (or /downloads/mysql-retail-lab.sql). Then import it once:",
      tabs: [
        { label: "Workbench", body: "1. **File → Open SQL Script…** and pick `mysql-retail-lab.sql`.\n2. Click the **lightning bolt** (execute all). The last result shows 6, 6, 8 and 14 rows.\n3. In the **Schemas** panel click the refresh icon. `portfolio_retail_lab` appears.\n4. Read the **Output** panel: every line should have a green tick." },
        { label: "Command line", body: "From the folder that holds the file:\n\n`mysql -u root -p < mysql-retail-lab.sql`\n\nEnter your password when asked. The row-count table prints at the end." },
        { label: "Practice editor", body: "Nothing to do — the practice editor on this page already contains the same four tables and rows. Use **Reset database** whenever you want the original data back." },
      ],
      after: "The script creates the database only if it does not exist and uses `INSERT IGNORE`, so running it twice never duplicates rows — but it also does not undo changes you made. To start completely fresh, use `mysql-retail-lab-reset.sql`, which drops and recreates the practice database.",
      callout: { kind: "mistake", text: "Only run the reset script on your own practice server. DROP DATABASE deletes everything inside portfolio_retail_lab immediately." },
    },
    {
      heading: "Choose the database with USE",
      body: "A MySQL server can hold many databases (also called schemas). `USE` tells your editor session which one to read from, so you can write `customers` instead of `portfolio_retail_lab.customers`:",
      sql: "USE portfolio_retail_lab;\nSELECT DATABASE() AS selected_db;",
      dataset: "shop",
      after: "In Workbench you can also double-click the database in the Schemas panel; its name turns bold.",
    },
    {
      heading: "List the tables and read their structure",
      body: "`SHOW TABLES` lists what is inside. `DESCRIBE` (or its short form `DESC`) shows each column, its data type, whether it can be NULL, and its key:",
      sql: "DESCRIBE orders;",
      dataset: "shop",
      after: `How to read the **Key** column:

- **PRI** — part of the primary key. \`order_id\` is unique for every order.
- **MUL** — an index that allows repeats. Here it is \`customer_id\`, a **foreign key**: it must match a real \`customer_id\` in customers.
- **Null = NO** means the column is required.

Data types tell you what each column holds: \`INT\` whole numbers, \`VARCHAR(20)\` text up to 20 characters, \`DATE\` a calendar date, \`DECIMAL(10,2)\` exact money values with two decimals.`,
    },
    {
      heading: "Look at the rows with SELECT *",
      body: "`SELECT *` means *all columns*. It is perfect for exploring a small table. Always add `ORDER BY` so the rows come back in a predictable order:",
      sql: "SELECT * FROM order_items ORDER BY order_id, product_id;",
      dataset: "shop",
      after: "On real tables with millions of rows, add `LIMIT 10` while exploring, and name the columns you need in finished reports instead of using `*`.",
    },
    {
      heading: "Grain: what does one row mean?",
      body: `Before any analysis, write down the **grain** of each table — what one row represents. Most reporting mistakes come from mixing grains.

| Table | One row is… | Primary key |
|---|---|---|
| customers | one customer | customer_id |
| products | one product | product_id |
| orders | one order | order_id |
| order_items | one product inside one order | order_id + product_id |

Order 101 has **two** rows in order_items (Notebook and Pen) but **one** row in orders. If you count rows after joining the two, you will count items, not orders — lesson 8 shows how to avoid that trap.`,
      callout: { kind: "remember", text: "Grain first, query second. Ask “what does one row mean?” before every COUNT or SUM." },
    },
    {
      heading: "Confirm the import with a row-count check",
      body: "Professionals finish every import with a check total. This query counts each table in one result (you will learn `COUNT` and `UNION ALL` properly later):",
      sql: "SELECT 'customers' AS table_name, COUNT(*) AS row_count FROM customers\nUNION ALL SELECT 'products', COUNT(*) FROM products\nUNION ALL SELECT 'orders', COUNT(*) FROM orders\nUNION ALL SELECT 'order_items', COUNT(*) FROM order_items;",
      dataset: "shop",
      after: "Expected: 6, 6, 8, 14. If any number differs, read the import Output panel before continuing.",
    },
  ],
  mistakes: [
    { wrong: "SELECT * FROM customers;  -- straight after connecting", why: "Error 1046: no database selected.", fix: "USE portfolio_retail_lab; first, or write portfolio_retail_lab.customers." },
    { wrong: "Re-importing to “reset” changed data", why: "The lab script uses INSERT IGNORE: existing rows are kept, so your changes stay.", fix: "Run mysql-retail-lab-reset.sql on your practice server, or press Reset database in the practice editor." },
    { wrong: "Assuming SELECT * returns rows in id order", why: "Without ORDER BY, SQL does not promise any order.", fix: "Add ORDER BY customer_id (or the key you want)." },
  ],
  checkYourself: [
    "Which column in orders links an order to its customer, and what does MUL mean next to it?",
    "Why does order 101 appear once in orders but twice in order_items?",
    "What four numbers prove that the import is complete?",
  ],
  faq: [
    { q: "What is the difference between a database and a schema in MySQL?", a: "In MySQL they are the same thing: CREATE DATABASE and CREATE SCHEMA are synonyms. Other systems such as PostgreSQL treat a schema as a folder inside a database." },
    { q: "Is DESCRIBE the same as SHOW COLUMNS?", a: "Yes. DESCRIBE table, DESC table and SHOW COLUMNS FROM table return the same structure: field, type, null, key, default and extra." },
    { q: "Where can I download a sample MySQL database for practice?", a: "This course's Learning Shop scripts are free at /downloads/mysql-retail-lab.sql (small) and /downloads/mysql-retail-large.sql (4,000 orders). Both run on MySQL 8.0.16 or newer." },
  ],
  guided: {
    intro: "Explore the shop exactly as you would on a new job: select it, list the tables, read one structure, then look at the rows.",
    steps: [
      "Run the script below as it is. It returns three results, one per SELECT-type statement.",
      "In the DESCRIBE result, find the PRI row and the type of price.",
      "Compare the product list with the Database step: 6 rows, Notebook 100.00 to Planner 300.00.",
      "Replace products with customers in both places and run again. Which customer has a NULL email?",
    ],
    sql: "USE portfolio_retail_lab;\nSHOW TABLES;\nDESCRIBE products;\nSELECT * FROM products ORDER BY product_id;",
    dataset: "shop",
    explain: "Four tables (customers, order_items, orders, products); product_id is PRI and price is decimal(10,2); six products from Notebook (100.00) to Planner (300.00).",
  },
  questions: pick("L3", "L3-O1", "L3-O2", "L3-O3", "L3-O4", "L3-N01", "L3-N02", "L3-N03", "L3-N04", "L3-N05", "L3-N06", "L3-N07", "L3-N08", "L3-N09", "L3-N10", "L3-N11", "L3-N12", "L3-N13", "L3-N14", "L3-N15"),
  quiz: [
    { id: "q1", question: "What does USE portfolio_retail_lab; do?", options: ["Imports the database", "Selects it for the following queries", "Deletes and recreates it", "Shows its tables"], correctIndex: 1, explanation: "USE chooses the default database for your session. It does not import or change anything." },
    { id: "q2", question: "In DESCRIBE orders, customer_id shows Key = MUL. What does that tell you?", options: ["It is the primary key", "It must be unique", "It is indexed and may repeat — here, a foreign key", "It allows NULL"], correctIndex: 2, explanation: "MUL marks a non-unique index. The foreign key to customers created it." },
    { id: "q3", question: "What is the grain of order_items?", options: ["One order", "One customer", "One product inside one order", "One product"], correctIndex: 2, explanation: "Its primary key is order_id + product_id: one line per product per order." },
    { id: "q4", question: "You re-imported mysql-retail-lab.sql but your edited prices did not go back. Why?", options: ["The import failed", "INSERT IGNORE keeps existing rows", "Workbench caches data", "Prices cannot be changed"], correctIndex: 1, explanation: "INSERT IGNORE skips rows whose keys already exist. Use the reset script to start fresh." },
  ],
};
