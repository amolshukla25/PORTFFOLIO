import type { Course } from "./courses";
import { skillLesson, type SkillLab } from "./skill-labs";

const setup = `Prerequisite: a local MySQL 8.0+ server (8.4 recommended) and MySQL Workbench or the mysql client. This is a **separate SQL course**, not a Python exercise arena. No Python is needed.

1. [Download the ready-to-run MySQL database](/downloads/mysql-retail-lab.sql).
2. Workbench: File → Open SQL Script → choose the file → Execute All. CLI: \`mysql -u YOUR_USER -p < mysql-retail-lab.sql\`.
3. Run \`USE portfolio_retail_lab;\` before the queries below.
4. Confirm 6 customers, 6 products, 8 orders and 14 order_items. Completed revenue must be **6150.00**.

The download creates only a dedicated training database, with fictional people, no passwords, no DROP statements and no external services. Reimporting does not reset modified seed data. Do write exercises in a transaction and roll them back.

**Data dictionary:** customers has one row per customer; products one row per product; orders one row per order; order_items one row per order/product pair. Each item stores its historical selling price. Never use the current product price to calculate historical revenue. Cancelled and pending orders do not count as completed revenue.

[Official MySQL tutorial](https://dev.mysql.com/doc/refman/8.4/en/tutorial.html)`;

const labs: SkillLab[] = [
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
  detailedDescription: "A standalone MySQL 8 course with a downloadable seeded .sql database and 24 guided skill-development assignments. Each topic includes a worked query, expected results, hints and reference answers, progressing from Easy to Professional without MCQs or a Python code judge.",
  category: ["MySQL", "SQL", "Databases", "Data Analysis"], duration: "18 hrs", difficulty: "Beginner", rating: 4.9, instructor: "Amol Shukla", iconName: "database",
  modules: labs.map((lab, i) => ({ id: `mysql-${i+1}`, title: `Module ${i+1}: ${lab.title}`, description: lab.summary, lessons: [skillLesson(lab, setup)] })),
};
