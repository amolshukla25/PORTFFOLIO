/**
 * Existing practice questions: the 36 original lesson tasks (ids Lx-O1…O4) and
 * the 135-problem bank (ids Lx-N01…N15). Keys are the ORIGINAL 9-lesson numbers;
 * lesson files pick from here. Every answer was run against MySQL 8.0 on the
 * shop seed data. Edit questions here, not in components.
 */

import type { Question } from "./types";

export const BANK: Record<string, Question[]> = 
{
  "L1": [
    {
      "id": "L1-O1",
      "level": "Easy",
      "prompt": "Show the number 2 with the column name my_number.",
      "target": "One row, my_number = 2. No tables required.",
      "hint": "Change the number and the name after AS in the example.",
      "answerSql": "SELECT 2 AS my_number;",
      "dataset": "none"
    },
    {
      "id": "L1-O2",
      "level": "Medium",
      "prompt": "Ask MySQL to add 2 and 3.",
      "target": "One column named total containing 5.",
      "hint": "SQL can evaluate 2 + 3 directly after SELECT.",
      "answerSql": "SELECT 2 + 3 AS total;",
      "dataset": "none"
    },
    {
      "id": "L1-O3",
      "level": "Hard",
      "prompt": "Display your shop's name as text.",
      "target": "One column named shop containing Learning Shop. Text needs single quotes.",
      "hint": "Put 'Learning Shop' after SELECT and use AS shop.",
      "answerSql": "SELECT 'Learning Shop' AS shop;",
      "dataset": "none"
    },
    {
      "id": "L1-O4",
      "level": "Professional",
      "prompt": "Prepare a two-column welcome result for your practice notebook.",
      "target": "One row: shop = Learning Shop, next_step = Connect MySQL. This is a small handoff task, not an advanced database exercise.",
      "hint": "Separate output expressions with a comma.",
      "answerSql": "SELECT 'Learning Shop' AS shop, 'Connect MySQL' AS next_step;",
      "dataset": "none"
    },
    {
      "id": "L1-N01",
      "level": "Easy",
      "prompt": "Show the number 10 in a column called ten.",
      "target": "1 row: ten = 10",
      "hint": "SELECT value AS name.",
      "answerSql": "SELECT 10 AS ten;",
      "dataset": "none"
    },
    {
      "id": "L1-N02",
      "level": "Easy",
      "prompt": "Show the word Hello in a column called greeting.",
      "target": "1 row: greeting = Hello",
      "hint": "Text goes in single quotes.",
      "answerSql": "SELECT 'Hello' AS greeting;",
      "dataset": "none"
    },
    {
      "id": "L1-N03",
      "level": "Easy",
      "prompt": "Multiply 12 by 5 and call it result.",
      "target": "1 row: result = 60",
      "hint": "Use * for multiply.",
      "answerSql": "SELECT 12 * 5 AS result;",
      "dataset": "none"
    },
    {
      "id": "L1-N04",
      "level": "Easy",
      "prompt": "Show 100 minus 35 as change_due.",
      "target": "1 row: change_due = 65",
      "hint": "Use - for subtract.",
      "answerSql": "SELECT 100 - 35 AS change_due;",
      "dataset": "none"
    },
    {
      "id": "L1-N05",
      "level": "Medium",
      "prompt": "Show three columns in one row: a = 1, b = 2, c = 3.",
      "target": "1 row: a = 1, b = 2, c = 3",
      "hint": "Separate expressions with commas.",
      "answerSql": "SELECT 1 AS a, 2 AS b, 3 AS c;",
      "dataset": "none"
    },
    {
      "id": "L1-N06",
      "level": "Medium",
      "prompt": "A notebook costs 100. Show the price of 3 notebooks as total.",
      "target": "1 row: total = 300",
      "hint": "Write the arithmetic after SELECT.",
      "answerSql": "SELECT 3 * 100 AS total;",
      "dataset": "none"
    },
    {
      "id": "L1-N07",
      "level": "Medium",
      "prompt": "Show the price of a 250 mug after 10% discount as sale_price.",
      "target": "1 row: sale_price = 225.0",
      "hint": "Multiply by 0.9.",
      "answerSql": "SELECT 250 * 0.9 AS sale_price;",
      "dataset": "none"
    },
    {
      "id": "L1-N08",
      "level": "Medium",
      "prompt": "Show the shop name and city in one row: Learning Shop, Pune.",
      "target": "1 row: shop = Learning Shop, city = Pune",
      "hint": "Two text values, two aliases.",
      "answerSql": "SELECT 'Learning Shop' AS shop, 'Pune' AS city;",
      "dataset": "none"
    },
    {
      "id": "L1-N09",
      "level": "Medium",
      "prompt": "Calculate 2 + 3 * 4 and explain why the answer is not 20.",
      "target": "1 row: answer = 14",
      "hint": "Multiplication runs before addition.",
      "answerSql": "SELECT 2 + 3 * 4 AS answer;",
      "dataset": "none"
    },
    {
      "id": "L1-N10",
      "level": "Hard",
      "prompt": "Force the addition to happen first: (2 + 3) * 4.",
      "target": "1 row: answer = 20",
      "hint": "Brackets change the order.",
      "answerSql": "SELECT (2 + 3) * 4 AS answer;",
      "dataset": "none"
    },
    {
      "id": "L1-N11",
      "level": "Hard",
      "prompt": "Show a column name that has a space in it: unit price = 100.",
      "target": "1 row: unit price = 100 (backticks keep the space in the name)",
      "hint": "Wrap the alias in backticks in MySQL.",
      "answerSql": "SELECT 100 AS `unit price`;",
      "dataset": "none"
    },
    {
      "id": "L1-N12",
      "level": "Hard",
      "prompt": "Show NULL with the alias missing_value and explain what NULL means.",
      "target": "1 row: missing_value = NULL",
      "hint": "NULL is a value meaning unknown, not zero.",
      "answerSql": "SELECT NULL AS missing_value;",
      "dataset": "none"
    },
    {
      "id": "L1-N13",
      "level": "Hard",
      "prompt": "Show what 5 + NULL returns.",
      "target": "1 row: result = NULL",
      "hint": "Any arithmetic with NULL gives NULL.",
      "answerSql": "SELECT 5 + NULL AS result;",
      "dataset": "none"
    },
    {
      "id": "L1-N14",
      "level": "Professional",
      "prompt": "Create a one-row receipt preview: item Pen, qty 5, price 20, line_total.",
      "target": "1 row: item = Pen, qty = 5, price = 20, line_total = 100",
      "hint": "line_total = qty * price.",
      "answerSql": "SELECT 'Pen' AS item, 5 AS qty, 20 AS price, 5 * 20 AS line_total;",
      "dataset": "none"
    },
    {
      "id": "L1-N15",
      "level": "Professional",
      "prompt": "Write the same query twice: once on one line, once split over four lines with a -- comment. Both must give the same result.",
      "target": "1 row: item = Pen, line_total = 100",
      "hint": "Spaces, new lines and comments do not change results.",
      "answerSql": "/* receipt preview */ SELECT 'Pen' AS item, 5 * 20 AS line_total;",
      "dataset": "none"
    }
  ],
  "L2": [
    {
      "id": "L2-O1",
      "level": "Easy",
      "prompt": "Test your connection with SELECT 1.",
      "target": "The result grid contains 1, not a connection error.",
      "hint": "Open the connection before opening a query tab. No import is needed.",
      "answerSql": "SELECT 1;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-O2",
      "level": "Medium",
      "prompt": "Check which server you connected to.",
      "target": "Record your version locally; it must be MySQL 8.0+. Do not publish credentials.",
      "hint": "VERSION() is a function, so keep its parentheses.",
      "answerSql": "SELECT VERSION() AS mysql_version;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-O3",
      "level": "Hard",
      "prompt": "Check whether a database is selected.",
      "target": "DATABASE() returns NULL before selecting a schema, or the selected schema name. NULL here is not a connection failure.",
      "hint": "You can be connected without choosing a database.",
      "answerSql": "SELECT DATABASE() AS selected_database;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-O4",
      "level": "Professional",
      "prompt": "Save a safe connection-check script for your next session.",
      "target": "A saved .sql file contains only checks, no password or private connection string; both statements run after reconnecting.",
      "hint": "Save the query editor as connection-check.sql.",
      "answerSql": "SELECT 1 AS connection_ok;\nSELECT VERSION() AS mysql_version;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N01",
      "level": "Easy",
      "prompt": "Run SELECT 1 + 1 to prove the editor runs queries.",
      "target": "1 row: two = 2",
      "hint": "Ctrl+Enter or the lightning button.",
      "answerSql": "SELECT 1 + 1 AS two;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N02",
      "level": "Easy",
      "prompt": "Show today's date from the server.",
      "target": "1 row with today's date",
      "hint": "CURDATE() returns the server date.",
      "answerSql": "SELECT CURDATE() AS today;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N03",
      "level": "Easy",
      "prompt": "Show the current date and time.",
      "target": "1 row with date and time",
      "hint": "NOW() includes the time.",
      "answerSql": "SELECT NOW() AS right_now;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N04",
      "level": "Easy",
      "prompt": "Show which MySQL user you are logged in as.",
      "target": "1 row like you@localhost",
      "hint": "CURRENT_USER() is a function.",
      "answerSql": "SELECT CURRENT_USER() AS me;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N05",
      "level": "Medium",
      "prompt": "List all databases on the server.",
      "target": "Includes mysql, information_schema, sys",
      "hint": "SHOW is an inspection command.",
      "answerSql": "SHOW DATABASES;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N06",
      "level": "Medium",
      "prompt": "Show which port the server listens on.",
      "target": "Usually 3306",
      "hint": "Server settings start with @@.",
      "answerSql": "SELECT @@port AS port;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N07",
      "level": "Medium",
      "prompt": "Show the server version and edition in one row.",
      "target": "8.0.16+ and Community Server",
      "hint": "@@version_comment holds the edition.",
      "answerSql": "SELECT VERSION() AS version, @@version_comment AS edition;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N08",
      "level": "Medium",
      "prompt": "Show the server's time zone settings.",
      "target": "Often SYSTEM, SYSTEM",
      "hint": "@@global.time_zone and @@session.time_zone.",
      "answerSql": "SELECT @@global.time_zone AS global_tz, @@session.time_zone AS session_tz;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N09",
      "level": "Medium",
      "prompt": "Check whether ONLY_FULL_GROUP_BY is on (you need it in lesson 5).",
      "target": "Text contains ONLY_FULL_GROUP_BY",
      "hint": "Look inside @@sql_mode.",
      "answerSql": "SELECT @@sql_mode;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N10",
      "level": "Hard",
      "prompt": "Run SELEC 1; on purpose and copy the error number.",
      "target": "Error 1064 (syntax error)",
      "hint": "Read the error panel, not the grid.",
      "answerSql": "SELEC 1;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N11",
      "level": "Hard",
      "prompt": "Run SELECT * FROM customers; before choosing a database.",
      "target": "Error 1046: No database selected",
      "hint": "DATABASE() is NULL here.",
      "answerSql": "SELECT * FROM customers;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N12",
      "level": "Hard",
      "prompt": "Run two statements in one go and see both result tabs.",
      "target": "Two result tabs: 1 and 2",
      "hint": "End each with a semicolon.",
      "answerSql": "SELECT 1 AS first; SELECT 2 AS second;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N13",
      "level": "Hard",
      "prompt": "Show the character set of your connection.",
      "target": "utf8mb4 on MySQL 8",
      "hint": "@@character_set_client.",
      "answerSql": "SELECT @@character_set_client AS charset;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N14",
      "level": "Professional",
      "prompt": "Write a setup checklist script: version, user, port, sql_mode, selected database — five columns, one row.",
      "target": "1 row, 5 columns; selected_db is NULL",
      "hint": "Combine the functions above in one SELECT.",
      "answerSql": "SELECT VERSION() AS version, CURRENT_USER() AS user_name, @@port AS port, @@sql_mode AS sql_mode, DATABASE() AS selected_db;",
      "check": {
        "manual": true
      },
      "dataset": "none"
    },
    {
      "id": "L2-N15",
      "level": "Professional",
      "prompt": "Write a 3-line troubleshooting note: what 'connection refused', 'access denied' and error 1046 each mean and the fix.",
      "target": "Note saved in your .sql file, no passwords inside",
      "hint": "Use the lesson text.",
      "answerSql": "/* refused: server stopped or wrong host/port */ /* access denied: wrong user/password */ /* 1046: run USE portfolio_retail_lab; */",
      "check": {
        "manual": true
      },
      "dataset": "none"
    }
  ],
  "L3": [
    {
      "id": "L3-O1",
      "level": "Easy",
      "prompt": "Choose the imported database.",
      "target": "DATABASE() returns portfolio_retail_lab.",
      "hint": "USE selects a schema for the current session.",
      "answerSql": "USE portfolio_retail_lab;\nSELECT DATABASE();"
    },
    {
      "id": "L3-O2",
      "level": "Medium",
      "prompt": "Inspect the customers table's column definitions.",
      "target": "customer_id, customer_name, city, email. customer_id is the primary key.",
      "hint": "DESCRIBE displays structure rather than customer records.",
      "answerSql": "DESCRIBE customers;"
    },
    {
      "id": "L3-O3",
      "level": "Hard",
      "prompt": "Read the product list without changing it.",
      "target": "6 rows; id 1 Notebook 100.00 and id 6 Planner 300.00.",
      "hint": "SELECT * reads all columns; ORDER BY product_id makes the order repeatable.",
      "answerSql": "SELECT * FROM products ORDER BY product_id;"
    },
    {
      "id": "L3-O4",
      "level": "Professional",
      "prompt": "Confirm that the import is complete before practising.",
      "target": "6 customers, 6 products, 8 orders, 14 items. COUNT is previewed here only as an import check and taught later.",
      "hint": "Run each count separately and compare the numbers with the Database tab.",
      "answerSql": "SELECT COUNT(*) AS customers FROM customers;\nSELECT COUNT(*) AS products FROM products;\nSELECT COUNT(*) AS orders FROM orders;\nSELECT COUNT(*) AS items FROM order_items;",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L3-N01",
      "level": "Easy",
      "prompt": "List every customer with all columns.",
      "target": "6 rows; Charu (id 3) has email NULL",
      "hint": "SELECT * reads all columns.",
      "answerSql": "SELECT * FROM customers ORDER BY customer_id;"
    },
    {
      "id": "L3-N02",
      "level": "Easy",
      "prompt": "List every order with all columns.",
      "target": "8 rows; first (101, 1, 2026-01-05, completed), last (108, 4, 2026-03-11, completed)",
      "hint": "Order by the key.",
      "answerSql": "SELECT * FROM orders ORDER BY order_id;"
    },
    {
      "id": "L3-N03",
      "level": "Easy",
      "prompt": "List every order item.",
      "target": "14 rows; first (101, 1, 2, 100.00), last (108, 4, 2, 250.00)",
      "hint": "Two-column key: sort by both.",
      "answerSql": "SELECT * FROM order_items ORDER BY order_id, product_id;"
    },
    {
      "id": "L3-N04",
      "level": "Easy",
      "prompt": "Inspect the orders table structure.",
      "target": "4 columns: order_id INT PRI, customer_id INT MUL, order_date DATE, status VARCHAR(20)",
      "hint": "DESCRIBE shows columns and types.",
      "answerSql": "DESCRIBE orders;"
    },
    {
      "id": "L3-N05",
      "level": "Medium",
      "prompt": "Inspect the order_items structure and name its key columns.",
      "target": "order_id and product_id are both PRI",
      "hint": "Look at the Key column.",
      "answerSql": "DESCRIBE order_items;"
    },
    {
      "id": "L3-N06",
      "level": "Medium",
      "prompt": "Show the full CREATE statement for products.",
      "target": "Shows PRIMARY KEY and the CHECK (price >= 0)",
      "hint": "SHOW CREATE TABLE.",
      "answerSql": "SHOW CREATE TABLE products;",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L3-N07",
      "level": "Medium",
      "prompt": "List the indexes on orders.",
      "target": "PRIMARY on order_id plus an index on customer_id (from the foreign key)",
      "hint": "SHOW INDEX FROM.",
      "answerSql": "SHOW INDEX FROM orders;",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L3-N08",
      "level": "Medium",
      "prompt": "Show only the customer_name and city columns of customers.",
      "target": "6 rows: (Asha, Pune); (Bilal, Mumbai); (Charu, Pune); (Dev, Delhi); (Esha, Mumbai); (Farah, Jaipur)",
      "hint": "Name the columns you need.",
      "answerSql": "SELECT customer_name, city FROM customers ORDER BY customer_id;"
    },
    {
      "id": "L3-N09",
      "level": "Medium",
      "prompt": "Show the first 3 products only.",
      "target": "3 rows: Notebook 100.00, Pen 20.00, Desk lamp 800.00",
      "hint": "LIMIT after ORDER BY.",
      "answerSql": "SELECT * FROM products ORDER BY product_id LIMIT 3;"
    },
    {
      "id": "L3-N10",
      "level": "Hard",
      "prompt": "Count the columns of every table using information_schema.",
      "target": "customers 4, order_items 4, orders 4, products 4",
      "hint": "information_schema.columns, group by table_name.",
      "answerSql": "SELECT table_name, COUNT(*) AS columns_count FROM information_schema.columns WHERE table_schema = 'portfolio_retail_lab' GROUP BY table_name ORDER BY table_name;"
    },
    {
      "id": "L3-N11",
      "level": "Hard",
      "prompt": "List all foreign keys in the schema.",
      "target": "3 rows: order_items.order_id→orders, order_items.product_id→products, orders.customer_id→customers",
      "hint": "key_column_usage where referenced_table_name is not null.",
      "answerSql": "SELECT table_name, column_name, referenced_table_name FROM information_schema.key_column_usage WHERE table_schema='portfolio_retail_lab' AND referenced_table_name IS NOT NULL ORDER BY table_name, column_name;"
    },
    {
      "id": "L3-N12",
      "level": "Hard",
      "prompt": "Read the products table from another database without USE, by using the full name.",
      "target": "6 rows: Notebook, Pen, Desk lamp, Mug, Keyboard, Planner",
      "hint": "schema.table",
      "answerSql": "SELECT product_name FROM portfolio_retail_lab.products ORDER BY product_id;"
    },
    {
      "id": "L3-N13",
      "level": "Hard",
      "prompt": "Show order_items rows for order 101 only.",
      "target": "2 rows: (101, 1, 2, 100.00); (101, 2, 5, 20.00)",
      "hint": "WHERE on the first key column.",
      "answerSql": "SELECT * FROM order_items WHERE order_id = 101;"
    },
    {
      "id": "L3-N14",
      "level": "Professional",
      "prompt": "Write an import-check script that shows each table name and row count in one result.",
      "target": "4 rows: customers 6, products 6, orders 8, order_items 14",
      "hint": "UNION ALL four COUNT queries.",
      "answerSql": "SELECT 'customers' AS table_name, COUNT(*) AS row_count FROM customers UNION ALL SELECT 'products', COUNT(*) FROM products UNION ALL SELECT 'orders', COUNT(*) FROM orders UNION ALL SELECT 'order_items', COUNT(*) FROM order_items;"
    },
    {
      "id": "L3-N15",
      "level": "Professional",
      "prompt": "Write a data dictionary note: one line per table saying what one row means (its grain).",
      "target": "4 lines, grain stated for each table",
      "hint": "customers = one customer, order_items = one product line in an order.",
      "answerSql": "/* customers: one row per customer */ /* products: one row per product */ /* orders: one row per order */ /* order_items: one row per product within an order */",
      "check": {
        "manual": true
      }
    }
  ],
  "L4": [
    {
      "id": "L4-O1",
      "level": "Easy",
      "prompt": "List product names and prices in product-id order.",
      "target": "6 rows; Notebook is 100.00 and Planner is 300.00.",
      "hint": "Choose product_name and price; sort by product_id.",
      "answerSql": "SELECT product_name, price FROM products ORDER BY product_id;"
    },
    {
      "id": "L4-O2",
      "level": "Medium",
      "prompt": "Find products costing at least 300, most expensive first.",
      "target": "Keyboard, Desk lamp, Planner, in that order.",
      "hint": "Use >= and DESC; use product_id as a tie-breaker.",
      "answerSql": "SELECT product_name, price FROM products WHERE price >= 300 ORDER BY price DESC, product_id;"
    },
    {
      "id": "L4-O3",
      "level": "Hard",
      "prompt": "Find customers whose email is missing.",
      "target": "Only Charu, customer_id 3. Explain why = NULL is wrong.",
      "hint": "SQL comparisons with NULL are unknown, not true.",
      "answerSql": "SELECT customer_id, customer_name FROM customers WHERE email IS NULL;"
    },
    {
      "id": "L4-O4",
      "level": "Professional",
      "prompt": "Prepare a stable two-row extract for a customer service team.",
      "target": "First page ids 1,2; second page 3,4. Document that offset pages can shift when source data changes.",
      "hint": "Use ORDER BY before LIMIT/OFFSET.",
      "answerSql": "SELECT customer_id, customer_name, city FROM customers ORDER BY customer_id LIMIT 2 OFFSET 0;\nSELECT customer_id, customer_name, city FROM customers ORDER BY customer_id LIMIT 2 OFFSET 2;",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L4-N01",
      "level": "Easy",
      "prompt": "List all customers from Mumbai.",
      "target": "2 rows: (2, Bilal); (5, Esha)",
      "hint": "WHERE city = 'Mumbai'.",
      "answerSql": "SELECT customer_id, customer_name FROM customers WHERE city = 'Mumbai' ORDER BY customer_id;"
    },
    {
      "id": "L4-N02",
      "level": "Easy",
      "prompt": "List products in the Stationery category.",
      "target": "3 rows: (Notebook, 100.00); (Pen, 20.00); (Planner, 300.00)",
      "hint": "Filter on category.",
      "answerSql": "SELECT product_name, price FROM products WHERE category = 'Stationery' ORDER BY product_id;"
    },
    {
      "id": "L4-N03",
      "level": "Easy",
      "prompt": "List all cancelled orders.",
      "target": "1 row: order_id = 104, customer_id = 3",
      "hint": "Filter on status.",
      "answerSql": "SELECT order_id, customer_id FROM orders WHERE status = 'cancelled';"
    },
    {
      "id": "L4-N04",
      "level": "Easy",
      "prompt": "List products sorted by name A to Z.",
      "target": "6 rows: Desk lamp, Keyboard, Mug, Notebook, Pen, Planner",
      "hint": "ORDER BY product_name.",
      "answerSql": "SELECT product_name FROM products ORDER BY product_name;"
    },
    {
      "id": "L4-N05",
      "level": "Medium",
      "prompt": "List products cheaper than 300.",
      "target": "3 rows: (Pen, 20.00); (Notebook, 100.00); (Mug, 250.00)",
      "hint": "Use <.",
      "answerSql": "SELECT product_name, price FROM products WHERE price < 300 ORDER BY price;"
    },
    {
      "id": "L4-N06",
      "level": "Medium",
      "prompt": "List orders that are not completed.",
      "target": "2 rows: (104, cancelled); (107, pending)",
      "hint": "Use <> or !=.",
      "answerSql": "SELECT order_id, status FROM orders WHERE status <> 'completed' ORDER BY order_id;"
    },
    {
      "id": "L4-N07",
      "level": "Medium",
      "prompt": "List Stationery products costing more than 50.",
      "target": "2 rows: (Notebook, 100.00); (Planner, 300.00)",
      "hint": "Combine with AND.",
      "answerSql": "SELECT product_name, price FROM products WHERE category = 'Stationery' AND price > 50 ORDER BY product_id;"
    },
    {
      "id": "L4-N08",
      "level": "Medium",
      "prompt": "List customers from Pune or Delhi.",
      "target": "3 rows: (Asha, Pune); (Charu, Pune); (Dev, Delhi)",
      "hint": "Use OR (IN comes next lesson).",
      "answerSql": "SELECT customer_name, city FROM customers WHERE city = 'Pune' OR city = 'Delhi' ORDER BY customer_id;"
    },
    {
      "id": "L4-N09",
      "level": "Medium",
      "prompt": "List customers who do have an email.",
      "target": "5 rows: everyone except Charu",
      "hint": "IS NOT NULL.",
      "answerSql": "SELECT customer_name, email FROM customers WHERE email IS NOT NULL ORDER BY customer_id;"
    },
    {
      "id": "L4-N10",
      "level": "Hard",
      "prompt": "List customers sorted by city, then by name within each city.",
      "target": "6 rows: (Dev, Delhi); (Farah, Jaipur); (Bilal, Mumbai); (Esha, Mumbai); (Asha, Pune); (Charu, Pune)",
      "hint": "Two sort keys.",
      "answerSql": "SELECT customer_name, city FROM customers ORDER BY city, customer_name;"
    },
    {
      "id": "L4-N11",
      "level": "Hard",
      "prompt": "Show each product with a new column price_with_gst = price * 1.18.",
      "target": "6 rows; Notebook 118.00, Pen 23.60, Desk lamp 944.00, Mug 295.00, Keyboard 1416.00, Planner 354.00",
      "hint": "Calculated column with an alias.",
      "answerSql": "SELECT product_name, price, price * 1.18 AS price_with_gst FROM products ORDER BY product_id;"
    },
    {
      "id": "L4-N12",
      "level": "Hard",
      "prompt": "Find Electronics products OR any product under 50, and explain the brackets in: category = 'Home' AND (price < 300 OR price > 1000).",
      "target": "3 rows: Pen, Desk lamp, Keyboard",
      "hint": "AND runs before OR; brackets make intent clear.",
      "answerSql": "SELECT product_name FROM products WHERE category = 'Electronics' OR price < 50 ORDER BY product_id;"
    },
    {
      "id": "L4-N13",
      "level": "Hard",
      "prompt": "Show all customers with the missing email replaced by the text 'no email' (preview of COALESCE).",
      "target": "6 rows; Charu shows no email",
      "hint": "COALESCE returns the first non-NULL value.",
      "answerSql": "SELECT customer_name, COALESCE(email, 'no email') AS email FROM customers ORDER BY customer_id;"
    },
    {
      "id": "L4-N14",
      "level": "Professional",
      "prompt": "Prepare the 2 most expensive products for a price-review meeting.",
      "target": "2 rows: (Keyboard, 1200.00); (Desk lamp, 800.00)",
      "hint": "ORDER BY price DESC + LIMIT 2.",
      "answerSql": "SELECT product_name, price FROM products ORDER BY price DESC, product_id LIMIT 2;"
    },
    {
      "id": "L4-N15",
      "level": "Professional",
      "prompt": "Give the delivery team every completed order, newest first, with order_id and date only.",
      "target": "6 rows: 108, 106, 105, 103, 102, 101",
      "hint": "Filter, then sort DESC.",
      "answerSql": "SELECT order_id, order_date FROM orders WHERE status = 'completed' ORDER BY order_date DESC;"
    }
  ],
  "L5": [
    {
      "id": "L5-O1",
      "level": "Easy",
      "prompt": "Count all customers and known emails.",
      "target": "6 customers and 5 known emails.",
      "hint": "Compare COUNT(*) with COUNT(email).",
      "answerSql": "SELECT COUNT(*) AS customers, COUNT(email) AS known_emails FROM customers;"
    },
    {
      "id": "L5-O2",
      "level": "Medium",
      "prompt": "Count products per category.",
      "target": "Electronics 2, Home 1, Stationery 3.",
      "hint": "Group by category and sort the output.",
      "answerSql": "SELECT category, COUNT(*) AS products FROM products GROUP BY category ORDER BY category;"
    },
    {
      "id": "L5-O3",
      "level": "Hard",
      "prompt": "Return only cities with more than one customer.",
      "target": "Mumbai 2 and Pune 2.",
      "hint": "Use HAVING COUNT(*) > 1, not WHERE COUNT(*).",
      "answerSql": "SELECT city, COUNT(*) AS customers FROM customers GROUP BY city HAVING COUNT(*) > 1 ORDER BY city;"
    },
    {
      "id": "L5-O4",
      "level": "Professional",
      "prompt": "Produce an order-status reconciliation for an operations report.",
      "target": "completed 6, cancelled 1, pending 1; groups sum to 8. Do not call pending orders revenue.",
      "hint": "One order is one row in orders; no join is needed.",
      "answerSql": "SELECT status, COUNT(*) AS orders FROM orders GROUP BY status ORDER BY status;\nSELECT COUNT(*) AS control_total FROM orders;",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L5-N01",
      "level": "Easy",
      "prompt": "Count all products.",
      "target": "1 row: products = 6",
      "hint": "COUNT(*).",
      "answerSql": "SELECT COUNT(*) AS products FROM products;"
    },
    {
      "id": "L5-N02",
      "level": "Easy",
      "prompt": "Find the highest product price.",
      "target": "1 row: highest = 1200.00",
      "hint": "MAX.",
      "answerSql": "SELECT MAX(price) AS highest FROM products;"
    },
    {
      "id": "L5-N03",
      "level": "Easy",
      "prompt": "Find the lowest product price.",
      "target": "1 row: lowest = 20.00",
      "hint": "MIN.",
      "answerSql": "SELECT MIN(price) AS lowest FROM products;"
    },
    {
      "id": "L5-N04",
      "level": "Easy",
      "prompt": "Find the average product price.",
      "target": "1 row: average_price = 445",
      "hint": "AVG.",
      "answerSql": "SELECT AVG(price) AS average_price FROM products;"
    },
    {
      "id": "L5-N05",
      "level": "Medium",
      "prompt": "Count orders per customer_id.",
      "target": "5 rows: (1, 2); (2, 2); (3, 1); (4, 2); (5, 1)",
      "hint": "GROUP BY customer_id.",
      "answerSql": "SELECT customer_id, COUNT(*) AS orders FROM orders GROUP BY customer_id ORDER BY customer_id;"
    },
    {
      "id": "L5-N06",
      "level": "Medium",
      "prompt": "Show total quantity sold per product_id across all order items.",
      "target": "6 rows: (1, 6); (2, 15); (3, 3); (4, 5); (5, 2); (6, 2)",
      "hint": "SUM(quantity).",
      "answerSql": "SELECT product_id, SUM(quantity) AS units FROM order_items GROUP BY product_id ORDER BY product_id;"
    },
    {
      "id": "L5-N07",
      "level": "Medium",
      "prompt": "Show the average price per category.",
      "target": "3 rows: Electronics 1000, Home 250, Stationery 140",
      "hint": "GROUP BY category.",
      "answerSql": "SELECT category, AVG(price) AS avg_price FROM products GROUP BY category ORDER BY category;"
    },
    {
      "id": "L5-N08",
      "level": "Medium",
      "prompt": "Count how many distinct cities customers live in.",
      "target": "1 row: cities = 4",
      "hint": "COUNT(DISTINCT city).",
      "answerSql": "SELECT COUNT(DISTINCT city) AS cities FROM customers;"
    },
    {
      "id": "L5-N09",
      "level": "Medium",
      "prompt": "Show how many items (rows) each order has.",
      "target": "8 rows; 104 and 107 have 1, the rest have 2",
      "hint": "Group order_items by order_id.",
      "answerSql": "SELECT order_id, COUNT(*) AS line_count FROM order_items GROUP BY order_id ORDER BY order_id;"
    },
    {
      "id": "L5-N10",
      "level": "Hard",
      "prompt": "Show categories whose average price is above 400.",
      "target": "1 row: Electronics, 1000",
      "hint": "HAVING AVG(price) > 400.",
      "answerSql": "SELECT category, AVG(price) AS avg_price FROM products GROUP BY category HAVING AVG(price) > 400;"
    },
    {
      "id": "L5-N11",
      "level": "Hard",
      "prompt": "Show customer_ids with 2 or more completed orders.",
      "target": "3 rows: (1, 2); (2, 2); (4, 2)",
      "hint": "WHERE before GROUP BY, HAVING after.",
      "answerSql": "SELECT customer_id, COUNT(*) AS completed_orders FROM orders WHERE status = 'completed' GROUP BY customer_id HAVING COUNT(*) >= 2 ORDER BY customer_id;"
    },
    {
      "id": "L5-N12",
      "level": "Hard",
      "prompt": "Find product_ids that sold 5 or more units in total.",
      "target": "3 rows: (1, 6); (2, 15); (4, 5)",
      "hint": "SUM(quantity) in HAVING.",
      "answerSql": "SELECT product_id, SUM(quantity) AS units FROM order_items GROUP BY product_id HAVING SUM(quantity) >= 5 ORDER BY product_id;"
    },
    {
      "id": "L5-N13",
      "level": "Hard",
      "prompt": "Show line value per order from order_items only (no status filter) and keep orders worth more than 1000.",
      "target": "4 rows: 102 1300, 103 1400, 106 1300, 108 1300",
      "hint": "SUM(quantity * unit_price).",
      "answerSql": "SELECT order_id, SUM(quantity * unit_price) AS order_value FROM order_items GROUP BY order_id HAVING SUM(quantity * unit_price) > 1000 ORDER BY order_id;"
    },
    {
      "id": "L5-N14",
      "level": "Professional",
      "prompt": "Category price summary for the buying team: count, min, max, average (2 decimals), most products first.",
      "target": "3 rows: (Stationery, 3, 20, 300, 140.00); (Electronics, 2, 800, 1200, 1000.00); (Home, 1, 250, 250, 250.00)",
      "hint": "Several aggregates in one SELECT; ROUND.",
      "answerSql": "SELECT category, COUNT(*) AS products, MIN(price) AS min_price, MAX(price) AS max_price, ROUND(AVG(price), 2) AS avg_price FROM products GROUP BY category ORDER BY products DESC, category;"
    },
    {
      "id": "L5-N15",
      "level": "Professional",
      "prompt": "Orders per month (all statuses) with a control total that matches 8.",
      "target": "3 rows: (2026-01, 2); (2026-02, 3); (2026-03, 3)",
      "hint": "Group by DATE_FORMAT month; check the sum.",
      "answerSql": "SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, COUNT(*) AS orders FROM orders GROUP BY month ORDER BY month;"
    }
  ],
  "L6": [
    {
      "id": "L6-O1",
      "level": "Easy",
      "prompt": "Attach customer names to every order.",
      "target": "8 rows, not 14. Order 101 belongs to Asha.",
      "hint": "Join orders.customer_id to customers.customer_id.",
      "answerSql": "SELECT o.order_id, c.customer_name FROM orders o JOIN customers c ON c.customer_id=o.customer_id ORDER BY o.order_id;"
    },
    {
      "id": "L6-O2",
      "level": "Medium",
      "prompt": "Find customers who have never placed any order.",
      "target": "Farah only. Esha has a pending order and must not be included.",
      "hint": "LEFT JOIN then test the right-side primary key for NULL.",
      "answerSql": "SELECT c.customer_name FROM customers c LEFT JOIN orders o ON o.customer_id=c.customer_id WHERE o.order_id IS NULL;"
    },
    {
      "id": "L6-O3",
      "level": "Hard",
      "prompt": "Calculate each completed order total.",
      "target": "101=300, 102=1300, 103=1400, 105=550, 106=1300, 108=1300; sum=6150.",
      "hint": "Group quantity * unit_price by order id after filtering status.",
      "answerSql": "SELECT o.order_id, SUM(i.quantity*i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.order_id ORDER BY o.order_id;"
    },
    {
      "id": "L6-O4",
      "level": "Professional",
      "prompt": "Deliver completed order count and revenue in one audited result.",
      "target": "6 orders and 6150 revenue. Explain why a raw COUNT(*) returns 12 item rows.",
      "hint": "Distinct counts protect the order grain, but never use SUM(DISTINCT amount) to fix a bad join.",
      "answerSql": "SELECT COUNT(DISTINCT o.order_id) AS orders, SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed';"
    },
    {
      "id": "L6-N01",
      "level": "Easy",
      "prompt": "Show each order item with the product name.",
      "target": "14 rows; first (101, Notebook, 2), last (108, Mug, 2)",
      "hint": "Join order_items to products on product_id.",
      "answerSql": "SELECT i.order_id, p.product_name, i.quantity FROM order_items i JOIN products p ON p.product_id = i.product_id ORDER BY i.order_id, p.product_id;"
    },
    {
      "id": "L6-N02",
      "level": "Easy",
      "prompt": "Show every order with customer name and city.",
      "target": "8 rows; first (101, Asha, Pune), last (108, Dev, Delhi)",
      "hint": "Join orders to customers.",
      "answerSql": "SELECT o.order_id, c.customer_name, c.city FROM orders o JOIN customers c ON c.customer_id = o.customer_id ORDER BY o.order_id;"
    },
    {
      "id": "L6-N03",
      "level": "Easy",
      "prompt": "List orders placed by customers from Mumbai.",
      "target": "3 rows: (102, Bilal); (106, Bilal); (107, Esha)",
      "hint": "Join, then WHERE c.city.",
      "answerSql": "SELECT o.order_id, c.customer_name FROM orders o JOIN customers c ON c.customer_id = o.customer_id WHERE c.city = 'Mumbai' ORDER BY o.order_id;"
    },
    {
      "id": "L6-N04",
      "level": "Easy",
      "prompt": "List every customer and their order ids, keeping customers with no orders.",
      "target": "9 rows; first (Asha, 101), last (Farah, NULL)",
      "hint": "LEFT JOIN from customers.",
      "answerSql": "SELECT c.customer_name, o.order_id FROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id ORDER BY c.customer_id, o.order_id;"
    },
    {
      "id": "L6-N05",
      "level": "Medium",
      "prompt": "Show order 103 as a receipt: product, quantity, unit_price, line_total.",
      "target": "2 rows: (Pen, 10, 20.00, 200.00); (Keyboard, 1, 1200.00, 1200.00)",
      "hint": "line_total = quantity * unit_price.",
      "answerSql": "SELECT p.product_name, i.quantity, i.unit_price, i.quantity * i.unit_price AS line_total FROM order_items i JOIN products p ON p.product_id = i.product_id WHERE i.order_id = 103 ORDER BY p.product_id;"
    },
    {
      "id": "L6-N06",
      "level": "Medium",
      "prompt": "Count orders per customer name, including customers with zero orders.",
      "target": "6 rows: Asha 2, Bilal 2, Charu 1, Dev 2, Esha 1, Farah 0",
      "hint": "COUNT(o.order_id), not COUNT(*).",
      "answerSql": "SELECT c.customer_name, COUNT(o.order_id) AS orders FROM customers c LEFT JOIN orders o ON o.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name ORDER BY c.customer_id;"
    },
    {
      "id": "L6-N07",
      "level": "Medium",
      "prompt": "Find products never sold in a completed order (a pending order does not count).",
      "target": "1 row: Planner",
      "hint": "LEFT JOIN to a subquery of completed items, test for NULL.",
      "answerSql": "SELECT p.product_name FROM products p LEFT JOIN (SELECT DISTINCT i.product_id FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'completed') s ON s.product_id = p.product_id WHERE s.product_id IS NULL;"
    },
    {
      "id": "L6-N08",
      "level": "Medium",
      "prompt": "Show completed revenue per product name.",
      "target": "5 rows: Keyboard 2400, Desk lamp 1600, Mug 1250, Notebook 600, Pen 300",
      "hint": "Three tables: orders, order_items, products.",
      "answerSql": "SELECT p.product_name, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' GROUP BY p.product_id, p.product_name ORDER BY revenue DESC, p.product_id;"
    },
    {
      "id": "L6-N09",
      "level": "Medium",
      "prompt": "Show completed revenue per category.",
      "target": "3 rows: Electronics 4000, Home 1250, Stationery 900",
      "hint": "Group by category after joining.",
      "answerSql": "SELECT p.category, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' GROUP BY p.category ORDER BY revenue DESC;"
    },
    {
      "id": "L6-N10",
      "level": "Hard",
      "prompt": "Show completed revenue per city.",
      "target": "3 rows: Mumbai 2600, Delhi 1850, Pune 1700",
      "hint": "Join three tables.",
      "answerSql": "SELECT c.city, SUM(i.quantity * i.unit_price) AS revenue FROM customers c JOIN orders o ON o.customer_id = c.customer_id JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY c.city ORDER BY revenue DESC;"
    },
    {
      "id": "L6-N11",
      "level": "Hard",
      "prompt": "Count completed orders per customer after joining to items — get 2 for Asha, not 4.",
      "target": "3 rows: Asha 2, Bilal 2, Dev 2",
      "hint": "COUNT(DISTINCT o.order_id).",
      "answerSql": "SELECT c.customer_name, COUNT(DISTINCT o.order_id) AS orders FROM customers c JOIN orders o ON o.customer_id = c.customer_id JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY c.customer_id, c.customer_name ORDER BY c.customer_id;"
    },
    {
      "id": "L6-N12",
      "level": "Hard",
      "prompt": "List customers who have orders but no completed order.",
      "target": "2 rows: Charu, Esha",
      "hint": "Group + HAVING on a completed-count.",
      "answerSql": "SELECT c.customer_name FROM customers c JOIN orders o ON o.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name HAVING SUM(o.status = 'completed') = 0 ORDER BY c.customer_id;"
    },
    {
      "id": "L6-N13",
      "level": "Hard",
      "prompt": "Show which products each customer bought in completed orders (distinct pairs).",
      "target": "10 rows; first (Asha, Keyboard), last (Dev, Notebook)",
      "hint": "DISTINCT on name pairs.",
      "answerSql": "SELECT DISTINCT c.customer_name, p.product_name FROM customers c JOIN orders o ON o.customer_id = c.customer_id JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' ORDER BY c.customer_name, p.product_name;"
    },
    {
      "id": "L6-N14",
      "level": "Professional",
      "prompt": "Find order lines where unit_price differs from the current catalogue price (price-change audit).",
      "target": "0 rows — every historical price matches; explain why the check is still worth keeping",
      "hint": "Compare i.unit_price <> p.price.",
      "answerSql": "SELECT i.order_id, p.product_name, i.unit_price, p.price FROM order_items i JOIN products p ON p.product_id = i.product_id WHERE i.unit_price <> p.price;"
    },
    {
      "id": "L6-N15",
      "level": "Professional",
      "prompt": "Status reconciliation: value of items in completed, cancelled and pending orders; total must be 7550.",
      "target": "3 rows: cancelled 800, completed 6150, pending 600",
      "hint": "Group joined items by o.status.",
      "answerSql": "SELECT o.status, SUM(i.quantity * i.unit_price) AS item_value FROM orders o JOIN order_items i ON i.order_id = o.order_id GROUP BY o.status ORDER BY o.status;"
    }
  ],
  "L7": [
    {
      "id": "L7-O1",
      "level": "Easy",
      "prompt": "Find products priced above the catalogue average.",
      "target": "Desk lamp and Keyboard; average price is 445.",
      "hint": "Use a scalar subquery returning AVG(price).",
      "answerSql": "SELECT product_name FROM products WHERE price > (SELECT AVG(price) FROM products) ORDER BY product_id;"
    },
    {
      "id": "L7-O2",
      "level": "Medium",
      "prompt": "Use a CTE to calculate completed revenue per customer.",
      "target": "Asha=1700, Bilal=2600, Dev=1850.",
      "hint": "Group joined completed items by customer_id inside the CTE.",
      "answerSql": "WITH spend AS (SELECT o.customer_id, SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.customer_id) SELECT c.customer_name,s.revenue FROM spend s JOIN customers c ON c.customer_id=s.customer_id ORDER BY c.customer_id;"
    },
    {
      "id": "L7-O3",
      "level": "Hard",
      "prompt": "Find completed orders above average completed order value.",
      "target": "102,103,106,108. Compare against 1025, not an item average.",
      "hint": "Reference the order-total CTE twice.",
      "answerSql": "WITH totals AS (SELECT o.order_id,SUM(i.quantity*i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.order_id) SELECT order_id,total FROM totals WHERE total > (SELECT AVG(total) FROM totals) ORDER BY order_id;"
    },
    {
      "id": "L7-O4",
      "level": "Professional",
      "prompt": "Include zero-spend customers in a customer report.",
      "target": "All 6 customers; Charu, Esha, Farah have 0 completed revenue. Total remains 6150.",
      "hint": "LEFT JOIN the pre-aggregated CTE and COALESCE missing revenue.",
      "answerSql": "WITH spend AS (SELECT o.customer_id,SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.customer_id) SELECT c.customer_id,c.customer_name,COALESCE(s.revenue,0) AS revenue FROM customers c LEFT JOIN spend s ON s.customer_id=c.customer_id ORDER BY c.customer_id;"
    },
    {
      "id": "L7-N01",
      "level": "Easy",
      "prompt": "Find the most expensive product using a subquery.",
      "target": "1 row: Keyboard, 1200.00",
      "hint": "WHERE price = (SELECT MAX(price) ...).",
      "answerSql": "SELECT product_name, price FROM products WHERE price = (SELECT MAX(price) FROM products);"
    },
    {
      "id": "L7-N02",
      "level": "Easy",
      "prompt": "Find the cheapest product using a subquery.",
      "target": "1 row: Pen, 20.00",
      "hint": "MIN inside the subquery.",
      "answerSql": "SELECT product_name, price FROM products WHERE price = (SELECT MIN(price) FROM products);"
    },
    {
      "id": "L7-N03",
      "level": "Easy",
      "prompt": "List customers who have placed at least one order.",
      "target": "5 rows: Asha, Bilal, Charu, Dev, Esha",
      "hint": "WHERE customer_id IN (SELECT customer_id FROM orders).",
      "answerSql": "SELECT customer_name FROM customers WHERE customer_id IN (SELECT customer_id FROM orders) ORDER BY customer_id;"
    },
    {
      "id": "L7-N04",
      "level": "Easy",
      "prompt": "List customers who have never ordered, using NOT IN.",
      "target": "1 row: Farah",
      "hint": "orders.customer_id has no NULLs, so NOT IN is safe here.",
      "answerSql": "SELECT customer_name FROM customers WHERE customer_id NOT IN (SELECT customer_id FROM orders);"
    },
    {
      "id": "L7-N05",
      "level": "Medium",
      "prompt": "List products that appear in any completed order.",
      "target": "5 rows: Notebook, Pen, Desk lamp, Mug, Keyboard",
      "hint": "IN with a subquery that joins.",
      "answerSql": "SELECT product_name FROM products WHERE product_id IN (SELECT i.product_id FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'completed') ORDER BY product_id;"
    },
    {
      "id": "L7-N06",
      "level": "Medium",
      "prompt": "Use EXISTS to list customers with a completed order.",
      "target": "3 rows: Asha, Bilal, Dev",
      "hint": "Correlated subquery on c.customer_id.",
      "answerSql": "SELECT c.customer_name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id AND o.status = 'completed') ORDER BY c.customer_id;"
    },
    {
      "id": "L7-N07",
      "level": "Medium",
      "prompt": "Show each product with the overall average price next to it.",
      "target": "6 rows; avg_price is 445 on every row",
      "hint": "Scalar subquery in SELECT.",
      "answerSql": "SELECT product_name, price, (SELECT AVG(price) FROM products) AS avg_price FROM products ORDER BY product_id;"
    },
    {
      "id": "L7-N08",
      "level": "Medium",
      "prompt": "Use a CTE to get revenue per completed order, then the biggest order.",
      "target": "1 row: 103, 1400.00",
      "hint": "ORDER BY total DESC LIMIT 1 on the CTE.",
      "answerSql": "WITH t AS (SELECT o.order_id, SUM(i.quantity * i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY o.order_id) SELECT order_id, total FROM t ORDER BY total DESC LIMIT 1;"
    },
    {
      "id": "L7-N09",
      "level": "Medium",
      "prompt": "Use a CTE to get units per product, then list products that sold more than 2 units.",
      "target": "4 rows: Pen 15, Notebook 6, Mug 5, Desk lamp 3",
      "hint": "Aggregate in the CTE, filter outside.",
      "answerSql": "WITH u AS (SELECT product_id, SUM(quantity) AS units FROM order_items GROUP BY product_id) SELECT p.product_name, u.units FROM u JOIN products p ON p.product_id = u.product_id WHERE u.units > 2 ORDER BY u.units DESC;"
    },
    {
      "id": "L7-N10",
      "level": "Hard",
      "prompt": "Show each product with the average price of its own category.",
      "target": "6 rows; Stationery avg 140, Electronics 1000, Home 250",
      "hint": "Correlated subquery on category.",
      "answerSql": "SELECT p.product_name, p.category, p.price, (SELECT AVG(p2.price) FROM products p2 WHERE p2.category = p.category) AS category_avg FROM products p ORDER BY p.product_id;"
    },
    {
      "id": "L7-N11",
      "level": "Hard",
      "prompt": "List products priced above their category average.",
      "target": "2 rows: Keyboard 1200, Planner 300",
      "hint": "Correlated subquery in WHERE.",
      "answerSql": "SELECT product_name, category, price FROM products p WHERE price > (SELECT AVG(price) FROM products p2 WHERE p2.category = p.category) ORDER BY product_id;"
    },
    {
      "id": "L7-N12",
      "level": "Hard",
      "prompt": "Find the customer with the highest completed revenue using two CTEs.",
      "target": "1 row: Bilal, 2600.00",
      "hint": "CTE 1 = spend, CTE 2 = max spend.",
      "answerSql": "WITH spend AS (SELECT o.customer_id, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY o.customer_id), top AS (SELECT MAX(revenue) AS m FROM spend) SELECT c.customer_name, s.revenue FROM spend s JOIN top ON s.revenue = top.m JOIN customers c ON c.customer_id = s.customer_id;"
    },
    {
      "id": "L7-N13",
      "level": "Hard",
      "prompt": "Show each completed order's share of total completed revenue as a percentage (2 decimals).",
      "target": "6 rows: 101 4.88, 102 21.14, 103 22.76, 105 8.94, 106 21.14, 108 21.14",
      "hint": "Divide by a scalar subquery of the total.",
      "answerSql": "WITH t AS (SELECT o.order_id, SUM(i.quantity * i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY o.order_id) SELECT order_id, total, ROUND(100 * total / (SELECT SUM(total) FROM t), 2) AS pct FROM t ORDER BY order_id;"
    },
    {
      "id": "L7-N14",
      "level": "Professional",
      "prompt": "Customer segment report: label each customer 'none', 'low' (< 1800) or 'high' (>= 1800) by completed revenue, and count per segment.",
      "target": "3 rows: high 2, low 1, none 3",
      "hint": "CTE for spend, LEFT JOIN, CASE, then group.",
      "answerSql": "WITH spend AS (SELECT o.customer_id, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY o.customer_id), seg AS (SELECT c.customer_id, CASE WHEN s.revenue IS NULL THEN 'none' WHEN s.revenue < 1800 THEN 'low' ELSE 'high' END AS segment FROM customers c LEFT JOIN spend s ON s.customer_id = c.customer_id) SELECT segment, COUNT(*) AS customers FROM seg GROUP BY segment ORDER BY segment;"
    },
    {
      "id": "L7-N15",
      "level": "Professional",
      "prompt": "Category report: completed revenue per category and its share of the 6150 total, largest first.",
      "target": "3 rows: Electronics 4000 (65.04), Home 1250 (20.33), Stationery 900 (14.63)",
      "hint": "CTE per category, then divide by its SUM.",
      "answerSql": "WITH r AS (SELECT p.category, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' GROUP BY p.category) SELECT category, revenue, ROUND(100 * revenue / (SELECT SUM(revenue) FROM r), 2) AS pct FROM r ORDER BY revenue DESC;"
    }
  ],
  "L8": [
    {
      "id": "L8-O1",
      "level": "Easy",
      "prompt": "List February orders using a half-open date range.",
      "target": "103,104,105; cancelled orders remain because no status filter was requested.",
      "hint": "Use >= February 1 and < March 1.",
      "answerSql": "SELECT order_id FROM orders WHERE order_date >= '2026-02-01' AND order_date < '2026-03-01' ORDER BY order_id;"
    },
    {
      "id": "L8-O2",
      "level": "Medium",
      "prompt": "Label products as premium if price is at least 800.",
      "target": "Desk lamp and Keyboard premium; four standard.",
      "hint": "CASE WHEN ... THEN ... ELSE ... END.",
      "answerSql": "SELECT product_name,CASE WHEN price>=800 THEN 'premium' ELSE 'standard' END AS tier FROM products ORDER BY product_id;"
    },
    {
      "id": "L8-O3",
      "level": "Hard",
      "prompt": "Rank completed orders by their total, preserving ties.",
      "target": "103 rank 1; 102,106,108 rank 2; 105 rank 3; 101 rank 4.",
      "hint": "First aggregate to order grain, then DENSE_RANK by total DESC.",
      "answerSql": "WITH t AS (SELECT o.order_id,SUM(i.quantity*i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY o.order_id) SELECT *,DENSE_RANK() OVER(ORDER BY total DESC) AS revenue_rank FROM t ORDER BY total DESC,order_id;"
    },
    {
      "id": "L8-O4",
      "level": "Professional",
      "prompt": "Create monthly and cumulative revenue for a finance handoff.",
      "target": "Monthly 1600,1950,2600; cumulative 1600,3550,6150. State that absent months need a calendar table in a larger dataset.",
      "hint": "Use a monthly CTE followed by ordered SUM OVER.",
      "answerSql": "WITH m AS (SELECT DATE_FORMAT(o.order_date,'%Y-%m') AS month,SUM(i.quantity*i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' GROUP BY month) SELECT month,revenue,SUM(revenue) OVER(ORDER BY month ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_revenue FROM m ORDER BY month;"
    },
    {
      "id": "L8-N01",
      "level": "Easy",
      "prompt": "Show each order with its year and month number.",
      "target": "8 rows; first (101, 2026, 1), last (108, 2026, 3)",
      "hint": "YEAR() and MONTH().",
      "answerSql": "SELECT order_id, YEAR(order_date) AS yr, MONTH(order_date) AS mon FROM orders ORDER BY order_id;"
    },
    {
      "id": "L8-N02",
      "level": "Easy",
      "prompt": "Show each order with the weekday name of its date.",
      "target": "8 rows; 101 Monday … 108 Wednesday",
      "hint": "DAYNAME().",
      "answerSql": "SELECT order_id, order_date, DAYNAME(order_date) AS weekday FROM orders ORDER BY order_id;"
    },
    {
      "id": "L8-N03",
      "level": "Easy",
      "prompt": "List orders placed in January 2026 using a half-open range.",
      "target": "2 rows: 101, 102",
      "hint": ">= '2026-01-01' AND < '2026-02-01'.",
      "answerSql": "SELECT order_id, order_date FROM orders WHERE order_date >= '2026-01-01' AND order_date < '2026-02-01' ORDER BY order_id;"
    },
    {
      "id": "L8-N04",
      "level": "Easy",
      "prompt": "Label orders as 'revenue' if completed, else 'not revenue'.",
      "target": "8 rows; 104 and 107 are 'not revenue'",
      "hint": "CASE WHEN status = 'completed'.",
      "answerSql": "SELECT order_id, CASE WHEN status = 'completed' THEN 'revenue' ELSE 'not revenue' END AS label FROM orders ORDER BY order_id;"
    },
    {
      "id": "L8-N05",
      "level": "Medium",
      "prompt": "Show days between each order and 2026-03-31.",
      "target": "8 rows; first (101, 85), last (108, 20)",
      "hint": "DATEDIFF(later, earlier).",
      "answerSql": "SELECT order_id, DATEDIFF('2026-03-31', order_date) AS days_ago FROM orders ORDER BY order_id;"
    },
    {
      "id": "L8-N06",
      "level": "Medium",
      "prompt": "Number all orders in date order.",
      "target": "8 rows; 101 is 1, 108 is 8",
      "hint": "ROW_NUMBER() OVER (ORDER BY order_date).",
      "answerSql": "SELECT order_id, order_date, ROW_NUMBER() OVER (ORDER BY order_date) AS seq FROM orders ORDER BY seq;"
    },
    {
      "id": "L8-N07",
      "level": "Medium",
      "prompt": "Number each customer's orders 1, 2, ... in date order.",
      "target": "8 rows; Asha 101 → 1, 103 → 2",
      "hint": "PARTITION BY customer_id.",
      "answerSql": "SELECT customer_id, order_id, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS nth_order FROM orders ORDER BY customer_id, nth_order;"
    },
    {
      "id": "L8-N08",
      "level": "Medium",
      "prompt": "Rank products by price, highest first, using RANK.",
      "target": "6 rows: Keyboard 1, Desk lamp 2, Planner 3, Mug 4, Notebook 5, Pen 6",
      "hint": "RANK() OVER (ORDER BY price DESC).",
      "answerSql": "SELECT product_name, price, RANK() OVER (ORDER BY price DESC) AS price_rank FROM products ORDER BY price_rank, product_id;"
    },
    {
      "id": "L8-N09",
      "level": "Medium",
      "prompt": "Count completed vs other orders per month in one row per month.",
      "target": "3 rows: (2026-01, 2, 0); (2026-02, 2, 1); (2026-03, 2, 1)",
      "hint": "SUM(CASE WHEN ... THEN 1 ELSE 0 END).",
      "answerSql": "SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed, SUM(CASE WHEN status <> 'completed' THEN 1 ELSE 0 END) AS other FROM orders GROUP BY month ORDER BY month;"
    },
    {
      "id": "L8-N10",
      "level": "Hard",
      "prompt": "Show each customer's first order date.",
      "target": "5 rows: (1, 01-05); (2, 01-08); (3, 02-10); (4, 02-15); (5, 03-04), all 2026",
      "hint": "MIN(order_date) per customer, or ROW_NUMBER = 1.",
      "answerSql": "SELECT customer_id, MIN(order_date) AS first_order FROM orders GROUP BY customer_id ORDER BY customer_id;"
    },
    {
      "id": "L8-N11",
      "level": "Hard",
      "prompt": "Show each order with the previous order date and days since it (all orders, by date).",
      "target": "8 rows; first gap NULL, last (108, prev 2026-03-04, 7 days)",
      "hint": "LAG(order_date).",
      "answerSql": "SELECT order_id, order_date, LAG(order_date) OVER (ORDER BY order_date) AS prev_date, DATEDIFF(order_date, LAG(order_date) OVER (ORDER BY order_date)) AS gap_days FROM orders ORDER BY order_date;"
    },
    {
      "id": "L8-N12",
      "level": "Hard",
      "prompt": "Show monthly completed revenue with the change from the previous month.",
      "target": "3 rows: (2026-01, 1600, NULL); (2026-02, 1950, 350); (2026-03, 2600, 650)",
      "hint": "Monthly CTE, then revenue - LAG(revenue).",
      "answerSql": "WITH m AS (SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY month) SELECT month, revenue, revenue - LAG(revenue) OVER (ORDER BY month) AS change_vs_prev FROM m ORDER BY month;"
    },
    {
      "id": "L8-N13",
      "level": "Hard",
      "prompt": "Find each customer's most recent order (all statuses).",
      "target": "5 rows: (1, 103); (2, 106); (3, 104); (4, 108); (5, 107)",
      "hint": "ROW_NUMBER DESC inside a CTE, keep 1.",
      "answerSql": "WITH r AS (SELECT customer_id, order_id, order_date, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rn FROM orders) SELECT customer_id, order_id, order_date FROM r WHERE rn = 1 ORDER BY customer_id;"
    },
    {
      "id": "L8-N14",
      "level": "Professional",
      "prompt": "Customer running total: completed order totals in date order and cumulative spend per customer.",
      "target": "6 rows; running ends at Asha 1700, Bilal 2600, Dev 1850",
      "hint": "Order-total CTE, then SUM OVER (PARTITION BY customer ORDER BY date).",
      "answerSql": "WITH t AS (SELECT o.order_id, o.customer_id, o.order_date, SUM(i.quantity * i.unit_price) AS total FROM orders o JOIN order_items i ON i.order_id = o.order_id WHERE o.status = 'completed' GROUP BY o.order_id, o.customer_id, o.order_date) SELECT customer_id, order_id, total, SUM(total) OVER (PARTITION BY customer_id ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_spend FROM t ORDER BY customer_id, order_date;"
    },
    {
      "id": "L8-N15",
      "level": "Professional",
      "prompt": "Top product per category by completed revenue (ties kept).",
      "target": "3 rows: Electronics Keyboard 2400; Home Mug 1250; Stationery Notebook 600",
      "hint": "Revenue per product CTE, DENSE_RANK PARTITION BY category, keep 1.",
      "answerSql": "WITH r AS (SELECT p.category, p.product_name, SUM(i.quantity * i.unit_price) AS revenue FROM orders o JOIN order_items i ON i.order_id = o.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'completed' GROUP BY p.category, p.product_id, p.product_name), k AS (SELECT *, DENSE_RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS rk FROM r) SELECT category, product_name, revenue FROM k WHERE rk = 1 ORDER BY category;"
    }
  ],
  "L9": [
    {
      "id": "L9-O1",
      "level": "Easy",
      "prompt": "Preview the exact row before changing it.",
      "target": "One Notebook row, id 1, price 100. Never run UPDATE without checking the predicate.",
      "hint": "Use the same WHERE in SELECT as the proposed UPDATE.",
      "answerSql": "SELECT * FROM products WHERE product_id=1;"
    },
    {
      "id": "L9-O2",
      "level": "Medium",
      "prompt": "Change an order status and roll it back.",
      "target": "Order 107 is completed inside the transaction and pending afterwards.",
      "hint": "Use START TRANSACTION and ROLLBACK; do not commit.",
      "answerSql": "START TRANSACTION;\nUPDATE orders SET status='completed' WHERE order_id=107;\nSELECT status FROM orders WHERE order_id=107;\nROLLBACK;\nSELECT status FROM orders WHERE order_id=107;"
    },
    {
      "id": "L9-O3",
      "level": "Hard",
      "prompt": "Audit for orphan order items and inspect a date-filter plan.",
      "target": "Zero orphan rows. Record EXPLAIN's key, rows and type; no timing/speedup claim.",
      "hint": "LEFT JOIN orders for orphans; EXPLAIN a bounded date query. Tiny data may favour a full scan.",
      "answerSql": "SELECT COUNT(*) AS orphans FROM order_items i LEFT JOIN orders o ON o.order_id=i.order_id WHERE o.order_id IS NULL;\nEXPLAIN SELECT order_id FROM orders WHERE order_date >= '2026-02-01' AND order_date < '2026-03-01';\n-- Candidate for a larger workload: CREATE INDEX idx_orders_date ON orders(order_date);\n-- Inspect SHOW INDEX FROM orders before adding an index; DDL is not rolled back.",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L9-O4",
      "level": "Professional",
      "prompt": "Hand off an audited retail performance report.",
      "target": "6 completed orders, 6150 revenue, 1025 average order value; customer report totals reconcile; document status rule, grain, fixed date range and missing-month limitation.",
      "hint": "Build on the CTE and monthly reports. Include SQL and a README, not just screenshots.",
      "answerSql": "SELECT COUNT(DISTINCT o.order_id) AS completed_orders,SUM(i.quantity*i.unit_price) AS revenue,ROUND(SUM(i.quantity*i.unit_price)/NULLIF(COUNT(DISTINCT o.order_id),0),2) AS average_order_value FROM orders o JOIN order_items i ON i.order_id=o.order_id WHERE o.status='completed' AND o.order_date >= '2026-01-01' AND o.order_date < '2026-04-01';"
    },
    {
      "id": "L9-N01",
      "level": "Easy",
      "prompt": "Inside a transaction, change Pen's price to 25, check it, then ROLLBACK.",
      "target": "25.00 inside; 20.00 after ROLLBACK",
      "hint": "START TRANSACTION … ROLLBACK.",
      "answerSql": "START TRANSACTION; UPDATE products SET price = 25 WHERE product_id = 2; SELECT price FROM products WHERE product_id = 2; ROLLBACK;"
    },
    {
      "id": "L9-N02",
      "level": "Easy",
      "prompt": "Insert a new customer 7 'Gita', Ludhiana, then roll it back.",
      "target": "7 inside; 6 after ROLLBACK",
      "hint": "INSERT INTO customers VALUES (...).",
      "answerSql": "START TRANSACTION; INSERT INTO customers VALUES (7, 'Gita', 'Ludhiana', 'gita@example.test'); SELECT COUNT(*) FROM customers; ROLLBACK;"
    },
    {
      "id": "L9-N03",
      "level": "Easy",
      "prompt": "Count how many rows an UPDATE would touch before running it: products in Stationery.",
      "target": "1 row: rows_to_change = 3",
      "hint": "Run the same WHERE as a COUNT first.",
      "answerSql": "SELECT COUNT(*) AS rows_to_change FROM products WHERE category = 'Stationery';"
    },
    {
      "id": "L9-N04",
      "level": "Easy",
      "prompt": "Try to insert a product with id 1 again and record the error.",
      "target": "Error 1062: Duplicate entry '1' for key PRIMARY",
      "hint": "The primary key blocks duplicates.",
      "answerSql": "INSERT INTO products VALUES (1, 'Copy', 'Stationery', 50);",
      "check": {
        "expectError": 1062
      }
    },
    {
      "id": "L9-N05",
      "level": "Medium",
      "prompt": "Try to insert an order for customer 99 and record the error.",
      "target": "Error 1452: foreign key constraint fails",
      "hint": "Foreign key to customers.",
      "answerSql": "INSERT INTO orders VALUES (200, 99, '2026-04-01', 'completed');",
      "check": {
        "expectError": 1452
      }
    },
    {
      "id": "L9-N06",
      "level": "Medium",
      "prompt": "Try to insert a product with price -5 and record the error.",
      "target": "Error 3819: check constraint violated",
      "hint": "CHECK (price >= 0) needs 8.0.16+.",
      "answerSql": "INSERT INTO products VALUES (9, 'Broken', 'Home', -5);",
      "check": {
        "expectError": 3819
      }
    },
    {
      "id": "L9-N07",
      "level": "Medium",
      "prompt": "Try an order status 'shipped' and record the error.",
      "target": "Error 3819: check constraint violated",
      "hint": "The status CHECK allows 3 values.",
      "answerSql": "INSERT INTO orders VALUES (201, 1, '2026-04-01', 'shipped');",
      "check": {
        "expectError": 3819
      }
    },
    {
      "id": "L9-N08",
      "level": "Medium",
      "prompt": "Give Electronics a 10% price cut inside a transaction, show the new prices, roll back.",
      "target": "Desk lamp 720, Keyboard 1080 inside; 800 / 1200 after",
      "hint": "UPDATE ... SET price = price * 0.9.",
      "answerSql": "START TRANSACTION; UPDATE products SET price = price * 0.9 WHERE category = 'Electronics'; SELECT product_name, price FROM products WHERE category = 'Electronics' ORDER BY product_id; ROLLBACK;"
    },
    {
      "id": "L9-N09",
      "level": "Medium",
      "prompt": "Delete the cancelled order 104 inside a transaction. Why must its items go first?",
      "target": "7 orders inside; 8 after ROLLBACK",
      "hint": "Child rows (order_items) reference the order.",
      "answerSql": "START TRANSACTION; DELETE FROM order_items WHERE order_id = 104; DELETE FROM orders WHERE order_id = 104; SELECT COUNT(*) FROM orders; ROLLBACK;"
    },
    {
      "id": "L9-N10",
      "level": "Hard",
      "prompt": "Data-quality check: find duplicate customer emails (excluding NULL).",
      "target": "0 rows — UNIQUE prevents duplicates",
      "hint": "GROUP BY email HAVING COUNT(*) > 1.",
      "answerSql": "SELECT email, COUNT(*) AS n FROM customers WHERE email IS NOT NULL GROUP BY email HAVING COUNT(*) > 1;"
    },
    {
      "id": "L9-N11",
      "level": "Hard",
      "prompt": "Data-quality check: find order lines whose quantity or unit_price is zero or negative.",
      "target": "0 rows",
      "hint": "WHERE quantity <= 0 OR unit_price <= 0.",
      "answerSql": "SELECT * FROM order_items WHERE quantity <= 0 OR unit_price <= 0;"
    },
    {
      "id": "L9-N12",
      "level": "Hard",
      "prompt": "Data-quality check: find orders with no items at all.",
      "target": "0 rows",
      "hint": "LEFT JOIN orders to order_items, test NULL.",
      "answerSql": "SELECT o.order_id FROM orders o LEFT JOIN order_items i ON i.order_id = o.order_id WHERE i.order_id IS NULL;"
    },
    {
      "id": "L9-N13",
      "level": "Hard",
      "prompt": "Run EXPLAIN on a lookup by customer_id and record type, key and rows.",
      "target": "Usually type ref on the customer_id index; a tiny table may show ALL. No speed claim.",
      "hint": "EXPLAIN SELECT ... WHERE customer_id = 1.",
      "answerSql": "EXPLAIN SELECT * FROM orders WHERE customer_id = 1;",
      "check": {
        "manual": true
      }
    },
    {
      "id": "L9-N14",
      "level": "Professional",
      "prompt": "Safe price update: preview, START TRANSACTION, UPDATE Mug to 275, verify exactly 1 row changed, ROLLBACK.",
      "target": "changed = 1; Mug back to 250.00 after ROLLBACK",
      "hint": "ROW_COUNT() right after the UPDATE.",
      "answerSql": "SELECT * FROM products WHERE product_id = 4; START TRANSACTION; UPDATE products SET price = 275 WHERE product_id = 4; SELECT ROW_COUNT() AS changed; ROLLBACK;"
    },
    {
      "id": "L9-N15",
      "level": "Professional",
      "prompt": "One-result data-quality report: orphan items, orders without items, negative prices, duplicate emails — each with its count.",
      "target": "4 rows, every count 0",
      "hint": "UNION ALL four COUNT queries with a check_name column.",
      "answerSql": "SELECT 'orphan_items' AS check_name, COUNT(*) AS problems FROM order_items i LEFT JOIN orders o ON o.order_id = i.order_id WHERE o.order_id IS NULL UNION ALL SELECT 'orders_without_items', COUNT(*) FROM orders o LEFT JOIN order_items i ON i.order_id = o.order_id WHERE i.order_id IS NULL UNION ALL SELECT 'negative_prices', COUNT(*) FROM products WHERE price < 0 UNION ALL SELECT 'duplicate_emails', COUNT(*) FROM (SELECT email FROM customers WHERE email IS NOT NULL GROUP BY email HAVING COUNT(*) > 1) d;"
    }
  ]
};

export function pick(lesson: string, ...ids: string[]): Question[] {
  const all = BANK[lesson];
  return ids.map((id) => {
    const q = all.find((x) => x.id === id);
    if (!q) throw new Error(`Question ${id} not found in ${lesson}`);
    return q;
  });
}
