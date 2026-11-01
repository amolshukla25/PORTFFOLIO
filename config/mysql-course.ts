import type { Course } from "./courses";
import { skillLesson, type SkillLab } from "./skill-labs";

const labs: SkillLab[] = [
  {
    id: "what-is-a-database", title: "Start here: databases, tables and your first SQL sentence",
    summary: "No SQL experience needed. Meet a tiny shop and learn what a database, table, row and column mean.",
    explanation: "Imagine keeping a shop notebook. One page lists customers; another lists products. A database keeps those pages organised. A table is one kind of list, a row is one record, and a column is one fact about that record. In the products table, Notebook is a product_name and 100 is its price in INR. A primary key is a unique label such as product_id: two products can share a name but must not share that key. MySQL is the program that stores and queries these tables; SQL is the language you use to ask it questions. You do not need Python. Start with SELECT, which means show me a value. It does not change stored data. Read SELECT 1 AS first_result as: show the number 1 and call its output column first_result. The semicolon finishes the statement. Open Guided Practice to run this tiny example; the shop data comes later.",
    language: "sql", example: "SELECT 1 AS first_result;", output: "One row, one column named first_result, containing 1. No database import is required yet.",
    tasks: [
      { level: "Easy", task: "Show the number 2 with the column name my_number.", check: "One row, my_number = 2. No tables required.", hint: "Change the number and the name after AS in the example.", solution: "SELECT 2 AS my_number;" },
      { level: "Medium", task: "Ask MySQL to add 2 and 3.", check: "One column named total containing 5.", hint: "SQL can evaluate 2 + 3 directly after SELECT.", solution: "SELECT 2 + 3 AS total;" },
      { level: "Hard", task: "Display your shop's name as text.", check: "One column named shop containing Learning Shop. Text needs single quotes.", hint: "Put 'Learning Shop' after SELECT and use AS shop.", solution: "SELECT 'Learning Shop' AS shop;" },
      { level: "Professional", task: "Prepare a two-column welcome result for your practice notebook.", check: "One row: shop = Learning Shop, next_step = Connect MySQL. This is a small handoff task, not an advanced database exercise.", hint: "Separate output expressions with a comma.", solution: "SELECT 'Learning Shop' AS shop, 'Connect MySQL' AS next_step;" },
    ],
  },
  {
    id: "install-connect-mysql", title: "Set up MySQL and run your first query",
    summary: "Install the database server, connect with Workbench and understand where SQL is executed before importing any tables.",
    explanation: "You need two things: MySQL Community Server 8.0+ (8.4 recommended), which stores data, and a client such as MySQL Workbench, where you write SQL. Installing only Workbench does not install a running server. Get installers from https://dev.mysql.com/downloads/ and follow the installer for your OS. During server setup create a local password and keep it private. In Workbench create a connection: host 127.0.0.1, port 3306 unless you changed it, and the user you created. Test Connection, enter the password when asked, then open a SQL editor tab. Type SELECT 1; and execute the statement using the lightning button. Results appear below the editor. Connection refused usually means the server is stopped or the host/port is wrong; access denied usually means the user/password is wrong. Never paste a password into a lesson, screenshot or shared script. The server must be running even when Workbench is open. Database import is the next lesson, not a prerequisite for this one.",
    language: "sql", example: "SELECT VERSION() AS mysql_version;", output: "One row containing your server version. It should be MySQL 8.0 or newer; the exact patch number depends on your installation.",
    tasks: [
      { level: "Easy", task: "Test your connection with SELECT 1.", check: "The result grid contains 1, not a connection error.", hint: "Open the connection before opening a query tab. No import is needed.", solution: "SELECT 1;" },
      { level: "Medium", task: "Check which server you connected to.", check: "Record your version locally; it must be MySQL 8.0+. Do not publish credentials.", hint: "VERSION() is a function, so keep its parentheses.", solution: "SELECT VERSION() AS mysql_version;" },
      { level: "Hard", task: "Check whether a database is selected.", check: "DATABASE() returns NULL before selecting a schema, or the selected schema name. NULL here is not a connection failure.", hint: "You can be connected without choosing a database.", solution: "SELECT DATABASE() AS selected_database;" },
      { level: "Professional", task: "Save a safe connection-check script for your next session.", check: "A saved .sql file contains only checks, no password or private connection string; both statements run after reconnecting.", hint: "Save the query editor as connection-check.sql.", solution: "SELECT 1 AS connection_ok;\nSELECT VERSION() AS mysql_version;" },
    ],
  },
  {
    id: "import-explore-retail", title: "Import the shop database and explore its four tables",
    summary: "Download the prepared data, import it once and find your way around before writing business queries.",
    explanation: "Open the Database option above and download mysql-retail-lab.sql. In Workbench choose File → Open SQL Script, select the downloaded file and execute the whole script. It creates portfolio_retail_lab and loads the sample records. Refresh the Schemas sidebar if the new database is not visible. Run USE portfolio_retail_lab; to choose it for this editor session. SHOW TABLES; lists its four tables. DESCRIBE products; lists the product columns and their types. SELECT * FROM products; shows every product record; the star means all columns. These are inspection commands, not edits. If you see unknown database, import the complete script. If you see no database selected, run USE again. If an import reports an error, inspect it rather than continuing with partial data. Reimporting preserves existing seed rows, so it is not a reset button. Work only in this fictional practice database.",
    language: "sql", example: "USE portfolio_retail_lab;\nSHOW TABLES;\nDESCRIBE products;\nSELECT * FROM products ORDER BY product_id;", output: "Four tables: customers, products, orders, order_items. products contains 6 rows, from Notebook (id 1) to Planner (id 6).",
    tasks: [
      { level: "Easy", task: "Choose the imported database.", check: "DATABASE() returns portfolio_retail_lab.", hint: "USE selects a schema for the current session.", solution: "USE portfolio_retail_lab;\nSELECT DATABASE();" },
      { level: "Medium", task: "Inspect the customers table's column definitions.", check: "customer_id, customer_name, city, email. customer_id is the primary key.", hint: "DESCRIBE displays structure rather than customer records.", solution: "DESCRIBE customers;" },
      { level: "Hard", task: "Read the product list without changing it.", check: "6 rows; id 1 Notebook 100.00 and id 6 Planner 300.00.", hint: "SELECT * reads all columns; ORDER BY product_id makes the order repeatable.", solution: "SELECT * FROM products ORDER BY product_id;" },
      { level: "Professional", task: "Confirm that the import is complete before practising.", check: "6 customers, 6 products, 8 orders, 14 items. COUNT is previewed here only as an import check and taught later.", hint: "Run each count separately and compare the numbers with the Database tab.", solution: "SELECT COUNT(*) AS customers FROM customers;\nSELECT COUNT(*) AS products FROM products;\nSELECT COUNT(*) AS orders FROM orders;\nSELECT COUNT(*) AS items FROM order_items;" },
    ],
  },
  {
    id: "setup-select-filter", title: "MySQL setup, SELECT, WHERE and sorting",
    summary: "Import a prepared retail database, select columns, handle NULL and filter results without building your own question data.",
    explanation: "SELECT chooses output columns; FROM chooses the table; WHERE keeps matching rows; ORDER BY defines a repeatable order. SQL does not guarantee row order without ORDER BY. NULL means missing or unknown: use IS NULL, never = NULL. SQL strings use single quotes. Start with a small inspection query before changing data.",
    language: "sql", example: "USE portfolio_retail_lab;\nSELECT customer_id, customer_name, city\nFROM customers\nWHERE city = 'Pune'\nORDER BY customer_id;", output: "Two rows: (1, Asha, Pune), (3, Charu, Pune).",
    tasks: [
      { level: "Easy", task: "List product names and prices in product-id order.", check: "6 rows; Notebook is 100.00 and Planner is 300.00.", hint: "Choose product_name and price; sort by product_id.", solution: "SELECT product_name, price FROM products ORDER BY product_id;" },
      { level: "Medium", task: "Find products costing at least 300, most expensive first.", check: "Keyboard, Desk lamp, Planner, in that order.", hint: "Use >= and DESC; use product_id as a tie-breaker.", solution: "SELECT product_name, price FROM products WHERE price >= 300 ORDER BY price DESC, product_id;" },
      { level: "Hard", task: "Find customers whose email is missing.", check: "Only Charu, customer_id 3. Explain why = NULL is wrong.", hint: "SQL comparisons with NULL are unknown, not true.", solution: "SELECT customer_id, customer_name FROM customers WHERE email IS NULL;" },
      { level: "Professional", task: "Prepare a stable two-row extract for a customer service team.", check: "First page ids 1,2; second page 3,4. Document that offset pages can shift when source data changes.", hint: "Use ORDER BY before LIMIT/OFFSET.", solution: "SELECT customer_id, customer_name, city FROM customers ORDER BY customer_id LIMIT 2 OFFSET 0;\nSELECT customer_id, customer_name, city FROM customers ORDER BY customer_id LIMIT 2 OFFSET 2;" },
    ],
  },
  {
    id: "aggregate-group-having", title: "Aggregations, GROUP BY and HAVING",
    summary: "Build reliable grouped summaries and distinguish row filters from group filters.",
    explanation: "COUNT(*) counts rows; COUNT(email) excludes NULL emails. SUM and AVG summarise numeric values. GROUP BY sets the output grain. WHERE filters source rows before aggregation; HAVING filters groups after aggregation. MySQL's ONLY_FULL_GROUP_BY helps catch ambiguous selection: every selected non-aggregate column should belong to the grouping key.",
    language: "sql", example: "SELECT city, COUNT(*) AS customers\nFROM customers\nGROUP BY city\nORDER BY city;", output: "Delhi 1, Jaipur 1, Mumbai 2, Pune 2.",
    tasks: [
      { level: "Easy", task: "Count all customers and known emails.", check: "6 customers and 5 known emails.", hint: "Compare COUNT(*) with COUNT(email).", solution: "SELECT COUNT(*) AS customers, COUNT(email) AS known_emails FROM customers;" },
      { level: "Medium", task: "Count products per category.", check: "Electronics 2, Home 1, Stationery 3.", hint: "Group by category and sort the output.", solution: "SELECT category, COUNT(*) AS products FROM products GROUP BY category ORDER BY category;" },
      { level: "Hard", task: "Return only cities with more than one customer.", check: "Mumbai 2 and Pune 2.", hint: "Use HAVING COUNT(*) > 1, not WHERE COUNT(*).", solution: "SELECT city, COUNT(*) AS customers FROM customers GROUP BY city HAVING COUNT(*) > 1 ORDER BY city;" },
      { level: "Professional", task: "Produce an order-status reconciliation for an operations report.", check: "completed 6, cancelled 1, pending 1; groups sum to 8. Do not call pending orders revenue.", hint: "One order is one row in orders; no join is needed.", solution: "SELECT status, COUNT(*) AS orders FROM orders GROUP BY status ORDER BY status;\nSELECT COUNT(*) AS control_total FROM orders;" },
    ],
  },
  {
    id: "joins-and-grain", title: "INNER JOIN, LEFT JOIN and avoiding double counting",
    summary: "Join related tables, retain customers with no orders and calculate revenue at the correct grain.",
    explanation: "INNER JOIN keeps matching keys; LEFT JOIN keeps every left-side row and fills unmatched right-side columns with NULL. Joining orders to items expands one order into many rows. Therefore COUNT(*) after that join counts items, not orders. Use COUNT(DISTINCT order_id) for order counts. Join on keys, not names. Keep status filtering explicit.",
    language: "sql", example: "SELECT SUM(i.quantity * i.unit_price) AS revenue\nFROM orders o JOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed';", output: "Completed revenue: 6150.00.",
    tasks: [
      { level: "Easy", task: "Attach customer names to every order.", check: "8 rows, not 14. Order 101 belongs to Asha.", hint: "Join orders.customer_id to customers.customer_id.", solution: "SELECT o.order_id, c.customer_name FROM orders o JOIN customers c ON c.customer_id=o.customer_id ORDER BY o.order_id;" },
      { level: "Medium", task: "Find customers who have never placed any order.", check: "Farah only. Esha has a pending order and must not be included.", hint: "LEFT JOIN then test the right-side primary key for NULL.", solution: "SELECT c.customer_name FROM customers c LEFT JOIN orders o ON o.customer_id=c.customer_id WHERE o.order_id IS NULL;" },
      { level: "Hard", task: "Calculate each completed order total.", check: "101=300, 102=1300, 103=1400, 105=550, 106=1300, 108=1300; sum=6150.", hint: "Group quantity * unit_price by order id after filtering status.", solution: "SELECT o.order_id, SUM(i.quantity*i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.order_id ORDER BY o.order_id;" },
      { level: "Professional", task: "Deliver completed order count and revenue in one audited result.", check: "6 orders and 6150 revenue. Explain why a raw COUNT(*) returns 12 item rows.", hint: "Distinct counts protect the order grain, but never use SUM(DISTINCT amount) to fix a bad join.", solution: "SELECT COUNT(DISTINCT o.order_id) AS orders, SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed';" },
    ],
  },
  {
    id: "subqueries-ctes", title: "Subqueries, CTEs and reusable reporting steps",
    summary: "Break business questions into named intermediate results and compare groups safely.",
    explanation: "A subquery is a query used inside another query. A CTE (WITH name AS (...)) gives an intermediate result a readable name for one statement; it is not a permanent table. Aggregate to one row per order first, then analyse those totals. Avoid mixing order totals and item prices in the same comparison.",
    language: "sql", example: "WITH totals AS (\n SELECT o.order_id, SUM(i.quantity*i.unit_price) AS total\n FROM orders o JOIN order_items i ON i.order_id=o.order_id\n WHERE o.status='completed' GROUP BY o.order_id\n) SELECT ROUND(AVG(total),2) AS average_order FROM totals;", output: "Average completed order value: 1025.00.",
    tasks: [
      { level: "Easy", task: "Find products priced above the catalogue average.", check: "Desk lamp and Keyboard; average price is 445.", hint: "Use a scalar subquery returning AVG(price).", solution: "SELECT product_name FROM products WHERE price > (SELECT AVG(price) FROM products) ORDER BY product_id;" },
      { level: "Medium", task: "Use a CTE to calculate completed revenue per customer.", check: "Asha=1700, Bilal=2600, Dev=1850.", hint: "Group joined completed items by customer_id inside the CTE.", solution: "WITH spend AS (SELECT o.customer_id, SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.customer_id) SELECT c.customer_name,s.revenue FROM spend s JOIN customers c ON c.customer_id=s.customer_id ORDER BY c.customer_id;" },
      { level: "Hard", task: "Find completed orders above average completed order value.", check: "102,103,106,108. Compare against 1025, not an item average.", hint: "Reference the order-total CTE twice.", solution: "WITH totals AS (SELECT o.order_id,SUM(i.quantity*i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.order_id) SELECT order_id,total FROM totals WHERE total > (SELECT AVG(total) FROM totals) ORDER BY order_id;" },
      { level: "Professional", task: "Include zero-spend customers in a customer report.", check: "All 6 customers; Charu, Esha, Farah have 0 completed revenue. Total remains 6150.", hint: "LEFT JOIN the pre-aggregated CTE and COALESCE missing revenue.", solution: "WITH spend AS (SELECT o.customer_id,SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.customer_id) SELECT c.customer_id,c.customer_name,COALESCE(s.revenue,0) AS revenue FROM customers c LEFT JOIN spend s ON s.customer_id=c.customer_id ORDER BY c.customer_id;" },
    ],
  },
  {
    id: "dates-case-windows", title: "Date analysis, CASE and window functions",
    summary: "Create monthly revenue, rank orders and calculate running totals with MySQL 8 window functions.",
    explanation: "DATE_FORMAT(order_date, '%Y-%m') creates a reporting month. CASE labels rows without changing their grain. A window function calculates across related rows while retaining each row: SUM(...) OVER for cumulative values, DENSE_RANK for shared ranks and LAG for the previous row. Specify an ordered ROWS frame for deterministic cumulative totals. Dates in this lab are fixed, so examples never depend on today's date.",
    language: "sql", example: "SELECT DATE_FORMAT(o.order_date,'%Y-%m') AS month, SUM(i.quantity*i.unit_price) AS revenue\nFROM orders o JOIN order_items i ON i.order_id=o.order_id\nWHERE o.status='completed' GROUP BY month ORDER BY month;", output: "2026-01: 1600; 2026-02: 1950; 2026-03: 2600.",
    tasks: [
      { level: "Easy", task: "List February orders using a half-open date range.", check: "103,104,105; cancelled orders remain because no status filter was requested.", hint: "Use >= February 1 and < March 1.", solution: "SELECT order_id FROM orders WHERE order_date >= '2026-02-01' AND order_date < '2026-03-01' ORDER BY order_id;" },
      { level: "Medium", task: "Label products as premium if price is at least 800.", check: "Desk lamp and Keyboard premium; four standard.", hint: "CASE WHEN ... THEN ... ELSE ... END.", solution: "SELECT product_name,CASE WHEN price>=800 THEN 'premium' ELSE 'standard' END AS tier FROM products ORDER BY product_id;" },
      { level: "Hard", task: "Rank completed orders by their total, preserving ties.", check: "103 rank 1; 102,106,108 rank 2; 105 rank 3; 101 rank 4.", hint: "First aggregate to order grain, then DENSE_RANK by total DESC.", solution: "WITH t AS (SELECT o.order_id,SUM(i.quantity*i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.order_id) SELECT *,DENSE_RANK() OVER(ORDER BY total DESC) AS revenue_rank FROM t ORDER BY total DESC,order_id;" },
      { level: "Professional", task: "Create monthly and cumulative revenue for a finance handoff.", check: "Monthly 1600,1950,2600; cumulative 1600,3550,6150. State that absent months need a calendar table in a larger dataset.", hint: "Use a monthly CTE followed by ordered SUM OVER.", solution: "WITH m AS (SELECT DATE_FORMAT(o.order_date,'%Y-%m') AS month,SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY month) SELECT month,revenue,SUM(revenue) OVER(ORDER BY month ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_revenue FROM m ORDER BY month;" },
    ],
  },
  {
    id: "transactions-quality-performance", title: "Transactions, constraints, indexes and a professional SQL capstone",
    summary: "Practise safe changes, validate data quality and explain query plans without claiming performance from a tiny dataset.",
    explanation: "InnoDB transactions group DML changes: START TRANSACTION, inspect, then COMMIT or ROLLBACK. DDL such as CREATE/ALTER may implicitly commit; do not treat a rollback as an undo for schema changes. Primary keys prevent duplicate identity; foreign keys protect relationships. An index can improve lookup but adds storage and write cost. EXPLAIN describes the optimizer's plan; an eight-row table cannot demonstrate production speed. Never practise destructive queries on live data.",
    language: "sql", example: "START TRANSACTION;\nUPDATE products SET price=110 WHERE product_id=1;\nSELECT product_id,price FROM products WHERE product_id=1;\nROLLBACK;\nSELECT product_id,price FROM products WHERE product_id=1;", output: "Inside transaction Notebook price is 110.00; after rollback it is 100.00.",
    tasks: [
      { level: "Easy", task: "Preview the exact row before changing it.", check: "One Notebook row, id 1, price 100. Never run UPDATE without checking the predicate.", hint: "Use the same WHERE in SELECT as the proposed UPDATE.", solution: "SELECT * FROM products WHERE product_id=1;" },
      { level: "Medium", task: "Change an order status and roll it back.", check: "Order 107 is completed inside the transaction and pending afterwards.", hint: "Use START TRANSACTION and ROLLBACK; do not commit.", solution: "START TRANSACTION;\nUPDATE orders SET status='completed' WHERE order_id=107;\nSELECT status FROM orders WHERE order_id=107;\nROLLBACK;\nSELECT status FROM orders WHERE order_id=107;" },
      { level: "Hard", task: "Audit for orphan order items and inspect a date-filter plan.", check: "Zero orphan rows. Record EXPLAIN's key, rows and type; no timing/speedup claim.", hint: "LEFT JOIN orders for orphans; EXPLAIN a bounded date query. Tiny data may favour a full scan.", solution: "SELECT COUNT(*) AS orphans FROM order_items i LEFT JOIN orders o ON o.order_id=i.order_id WHERE o.order_id IS NULL;\nEXPLAIN SELECT order_id FROM orders WHERE order_date >= '2026-02-01' AND order_date < '2026-03-01';\n-- Candidate for a larger workload: CREATE INDEX idx_orders_date ON orders(order_date);\n-- Inspect SHOW INDEX FROM orders before adding an index; DDL is not rolled back." },
      { level: "Professional", task: "Hand off an audited retail performance report.", check: "6 completed orders, 6150 revenue, 1025 average order value; customer report totals reconcile; document status rule, grain, fixed date range and missing-month limitation.", hint: "Build on the CTE and monthly reports. Include SQL and a README, not just screenshots.", solution: "SELECT COUNT(DISTINCT o.order_id) AS completed_orders,SUM(i.quantity*i.unit_price) AS revenue,ROUND(SUM(i.quantity*i.unit_price)/NULLIF(COUNT(DISTINCT o.order_id),0),2) AS average_order_value FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' AND o.order_date >= '2026-01-01' AND o.order_date < '2026-04-01';" },
    ],
  },
];

export const MYSQL_COURSE: Course = {
  id: "mysql", title: "MySQL: Practical SQL from Beginner to Professional",
  shortDescription: "Learn SQL with a ready-made retail database: filtering, grouping, joins, CTEs, windows, transactions and audited reporting.",
  detailedDescription: "Start with what a database is, connect to MySQL, import a prepared shop dataset and build practical SQL skills. Nine modules separate Lesson, Database, Guided Practice and Practice Questions, with 36 progressive assignments and optional hints and reference answers. No Python or prior SQL knowledge required.",
  category: ["MySQL", "SQL", "Databases", "Data Analysis"], duration: "18 hrs", difficulty: "Beginner", rating: 4.9, instructor: "Amol Shukla", iconName: "database",
  modules: labs.map((lab, i) => {
    const base = skillLesson(lab, "");
    return {
      // Keep the original module ids and lesson URLs stable.
      id: i < 3 ? `mysql-start-${i+1}` : `mysql-${i-2}`,
      title: `Module ${i+1}: ${lab.title}`,
      description: lab.summary,
      lessons: [{
        ...base,
        duration: i < 3 ? "25 mins" : "60 mins",
        readingTime: i < 3 ? "5 mins read" : "10 mins read",
        mysqlLab: lab,
        contentMarkdown: `## Your goal\n\n${lab.summary}\n\n## Understand the idea\n\n${lab.explanation}`,
      }],
    };
  }),
};
