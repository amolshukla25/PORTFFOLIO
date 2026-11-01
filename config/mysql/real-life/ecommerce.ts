import { q, type RealLifeModuleConfig } from "./types";

/**
 * Module 8 — Marketplace. 50 problems, all checkable in the browser.
 * Targets are generated from the reference answers by
 * scripts/mysql/gen-real-life-targets.ts.
 */
const REVENUE = "ROUND(i.quantity * i.unit_price * (100 - i.discount) / 100, 2)";

const questions = [
  // Easy
  q("RL-E01", "Easy", "List Electronics products with their price.", "Filter on category and sort by product_id.", `SELECT product_id, product_name, price FROM products WHERE category = 'Electronics' ORDER BY product_id;`),
  q("RL-E02", "Easy", "Show the 20 most recent delivered orders.", "Filter status, sort by order_date and order_id descending.", `SELECT order_id, order_date, status FROM orders WHERE status = 'delivered' ORDER BY order_date DESC, order_id DESC LIMIT 20;`),
  q("RL-E03", "Easy", "List customers who live in Delhi.", "One equality filter.", `SELECT customer_id, customer_name FROM customers WHERE city = 'Delhi' ORDER BY customer_id LIMIT 20;`),
  q("RL-E04", "Easy", "List sellers rated 4.5 or higher.", "Filter on rating and sort by rating DESC.", `SELECT seller_id, seller_name, rating FROM sellers WHERE rating >= 4.5 ORDER BY rating DESC, seller_id;`),
  q("RL-E05", "Easy", "List products that are out of stock.", "stock = 0.", `SELECT product_id, product_name, stock FROM products WHERE stock = 0 ORDER BY product_id LIMIT 20;`),
  q("RL-E06", "Easy", "Show the first 20 orders paid by UPI.", "Filter payment_mode = 'upi'.", `SELECT order_id, order_date, payment_mode FROM orders WHERE payment_mode = 'upi' ORDER BY order_id LIMIT 20;`),
  q("RL-E07", "Easy", "List products priced above 2,000.", "Filter and sort by price descending.", `SELECT product_id, product_name, price FROM products WHERE price > 2000 ORDER BY price DESC, product_id LIMIT 20;`),
  q("RL-E08", "Easy", "List every product category once.", "DISTINCT, sorted.", `SELECT DISTINCT category FROM products ORDER BY category;`),
  q("RL-E09", "Easy", "Count all orders.", "COUNT(*) on orders.", `SELECT COUNT(*) AS orders FROM orders;`),
  q("RL-E10", "Easy", "Show the line items of order 1.", "Filter order_id = 1.", `SELECT order_id, product_id, quantity, unit_price FROM order_items WHERE order_id = 1 ORDER BY product_id;`),

  // Medium
  q("RL-E11", "Medium", "List products priced between 500 and 1,500.", "BETWEEN, then sort by price.", `SELECT product_name, price FROM products WHERE price BETWEEN 500 AND 1500 ORDER BY price, product_id LIMIT 20;`),
  q("RL-E12", "Medium", "List cancelled and returned orders.", "Use IN for both statuses.", `SELECT order_id, status, order_date FROM orders WHERE status IN ('cancelled', 'returned') ORDER BY order_id LIMIT 20;`),
  q("RL-E13", "Medium", "List customers whose name starts with K.", "LIKE 'K%'.", `SELECT customer_id, customer_name FROM customers WHERE customer_name LIKE 'K%' ORDER BY customer_id LIMIT 20;`),
  q("RL-E14", "Medium", "List orders placed in the first quarter of 2025.", "Half-open range 2025-01-01 to 2025-04-01.", `SELECT order_id, order_date FROM orders WHERE order_date >= '2025-01-01' AND order_date < '2025-04-01' ORDER BY order_date, order_id LIMIT 20;`),
  q("RL-E15", "Medium", "Show the payable amount for the first 20 order lines.", "quantity * unit_price * (100 - discount) / 100, rounded to 2 decimals.", `SELECT order_id, product_id, ROUND(quantity * unit_price * (100 - discount) / 100, 2) AS payable FROM order_items ORDER BY order_id, product_id LIMIT 20;`),
  q("RL-E16", "Medium", "Label every order with a fulfilment stage.", "CASE WHEN delivered THEN 'Closed' WHEN shipped THEN 'In transit' ELSE 'Needs review' END.", `SELECT order_id, status, CASE WHEN status = 'delivered' THEN 'Closed' WHEN status = 'shipped' THEN 'In transit' ELSE 'Needs review' END AS stage FROM orders ORDER BY order_id LIMIT 20;`),
  q("RL-E17", "Medium", "Show product names in capitals with their category.", "UPPER(product_name).", `SELECT UPPER(product_name) AS product, category FROM products ORDER BY product_id LIMIT 20;`),
  q("RL-E18", "Medium", "Label each seller by rating band.", "CASE on rating: 4.5+ 'Top', 4.0+ 'Good', else 'Watch'.", `SELECT seller_id, seller_name, rating, CASE WHEN rating >= 4.5 THEN 'Top' WHEN rating >= 4 THEN 'Good' ELSE 'Watch' END AS band FROM sellers ORDER BY rating DESC, seller_id LIMIT 20;`),
  q("RL-E19", "Medium", "List customers who signed up in 2025.", "Compare signup_date with the year range.", `SELECT customer_id, customer_name, signup_date FROM customers WHERE signup_date >= '2025-01-01' AND signup_date < '2026-01-01' ORDER BY customer_id LIMIT 20;`),
  q("RL-E20", "Medium", "Count how many different cities customers come from.", "COUNT(DISTINCT city).", `SELECT COUNT(DISTINCT city) AS cities FROM customers;`),
  q("RL-E21", "Medium", "Show each product name and its character length.", "LENGTH(product_name).", `SELECT product_name, LENGTH(product_name) AS name_length FROM products ORDER BY product_id LIMIT 20;`),
  q("RL-E22", "Medium", "List cash-on-delivery orders in 2024.", "Two filters: payment_mode and the 2024 range.", `SELECT order_id, order_date FROM orders WHERE payment_mode = 'cod' AND order_date >= '2024-01-01' AND order_date < '2025-01-01' ORDER BY order_id LIMIT 20;`),

  // Hard
  q("RL-E23", "Hard", "Count orders by status.", "GROUP BY status.", `SELECT status, COUNT(*) AS orders FROM orders GROUP BY status ORDER BY orders DESC, status;`),
  q("RL-E24", "Hard", "Show delivered revenue per category.", "Join order_items, orders and products; filter delivered; sum the payable amount.", `SELECT p.category, SUM(${REVENUE}) AS revenue FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'delivered' GROUP BY p.category ORDER BY revenue DESC, p.category;`),
  q("RL-E25", "Hard", "Show the average product price per category.", "AVG(price), grouped by category.", `SELECT category, ROUND(AVG(price), 2) AS avg_price FROM products GROUP BY category ORDER BY avg_price DESC, category;`),
  q("RL-E26", "Hard", "List customers with more than 5 orders.", "Join, GROUP BY customer, HAVING COUNT(*) > 5.", `SELECT c.customer_id, c.customer_name, COUNT(*) AS orders FROM customers c JOIN orders o ON o.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name HAVING COUNT(*) > 5 ORDER BY orders DESC, c.customer_id LIMIT 20;`),
  q("RL-E27", "Hard", "List sellers who list more than 3 products.", "GROUP BY seller with HAVING COUNT(*) > 3.", `SELECT s.seller_id, s.seller_name, COUNT(*) AS products FROM sellers s JOIN products p ON p.seller_id = s.seller_id GROUP BY s.seller_id, s.seller_name HAVING COUNT(*) > 3 ORDER BY products DESC, s.seller_id LIMIT 20;`),
  q("RL-E28", "Hard", "Show delivered revenue per month of 2025.", "DATE_FORMAT(order_date, '%Y-%m') grouped, filtered to delivered.", `SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(${REVENUE}) AS revenue FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'delivered' AND o.order_date >= '2025-01-01' AND o.order_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-E29", "Hard", "Show categories that list more than 25 products.", "COUNT(*) per category with HAVING > 25.", `SELECT category, COUNT(*) AS products FROM products GROUP BY category HAVING COUNT(*) > 25 ORDER BY products DESC, category;`),
  q("RL-E30", "Hard", "Show the 5 products that sold the most units in delivered orders.", "SUM(quantity) per product, ordered and limited.", `SELECT p.product_id, p.product_name, SUM(i.quantity) AS units FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'delivered' GROUP BY p.product_id, p.product_name ORDER BY units DESC, p.product_id LIMIT 5;`),
  q("RL-E31", "Hard", "List sellers whose average product price is above 1,500.", "AVG(price) per seller with HAVING.", `SELECT s.seller_id, s.seller_name, ROUND(AVG(p.price), 2) AS avg_price FROM sellers s JOIN products p ON p.seller_id = s.seller_id GROUP BY s.seller_id, s.seller_name HAVING AVG(p.price) > 1500 ORDER BY avg_price DESC, s.seller_id;`),
  q("RL-E32", "Hard", "Show the average delivered order value per payment mode.", "Sum the payable amount per order in a CTE, then average by payment mode.", `WITH per_order AS (SELECT o.order_id, o.payment_mode, SUM(${REVENUE}) AS order_value FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'delivered' GROUP BY o.order_id, o.payment_mode) SELECT payment_mode, ROUND(AVG(order_value), 2) AS avg_order_value FROM per_order GROUP BY payment_mode ORDER BY avg_order_value DESC, payment_mode;`),
  q("RL-E33", "Hard", "Show the return rate per category, highest first.", "100 * SUM(CASE WHEN status='returned') / COUNT(*) over delivered-or-returned lines.", `SELECT p.category, ROUND(100 * SUM(CASE WHEN o.status = 'returned' THEN 1 ELSE 0 END) / COUNT(*), 1) AS return_pct FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status IN ('delivered', 'returned') GROUP BY p.category ORDER BY return_pct DESC, p.category;`),
  q("RL-E34", "Hard", "List orders with more than 2 line items.", "GROUP BY order with HAVING COUNT(*) > 2.", `SELECT order_id, COUNT(*) AS lines FROM order_items GROUP BY order_id HAVING COUNT(*) > 2 ORDER BY lines DESC, order_id LIMIT 20;`),
  q("RL-E35", "Hard", "List products that have never been ordered.", "NOT EXISTS against order_items.", `SELECT p.product_id, p.product_name FROM products p WHERE NOT EXISTS (SELECT 1 FROM order_items i WHERE i.product_id = p.product_id) ORDER BY p.product_id LIMIT 20;`),
  q("RL-E36", "Hard", "Show cities with more than 150 customers.", "GROUP BY city with HAVING COUNT(*) > 150.", `SELECT city, COUNT(*) AS customers FROM customers GROUP BY city HAVING COUNT(*) > 150 ORDER BY customers DESC, city;`),

  // Professional
  q("RL-E37", "Professional", "Show the 10 customers with the highest delivered spend.", "Join orders and items, filter delivered, sum payable per customer.", `SELECT c.customer_id, c.customer_name, SUM(${REVENUE}) AS spend FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN customers c ON c.customer_id = o.customer_id WHERE o.status = 'delivered' GROUP BY c.customer_id, c.customer_name ORDER BY spend DESC, c.customer_id LIMIT 10;`),
  q("RL-E38", "Professional", "Show each category's share of delivered revenue.", "Divide the category total by a scalar subquery of all delivered revenue.", `SELECT p.category, SUM(${REVENUE}) AS revenue, ROUND(100 * SUM(${REVENUE}) / (SELECT SUM(ROUND(i.quantity * i.unit_price * (100 - i.discount) / 100, 2)) FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'delivered'), 1) AS pct FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'delivered' GROUP BY p.category ORDER BY revenue DESC, p.category;`),
  q("RL-E39", "Professional", "Rank products by delivered revenue inside their category.", "RANK() OVER (PARTITION BY category ORDER BY revenue DESC) in a CTE.", `WITH r AS (SELECT p.category, p.product_name, SUM(${REVENUE}) AS revenue, RANK() OVER (PARTITION BY p.category ORDER BY SUM(${REVENUE}) DESC) AS rnk FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'delivered' GROUP BY p.category, p.product_id, p.product_name) SELECT category, product_name, revenue, rnk FROM r ORDER BY category, rnk LIMIT 20;`),
  q("RL-E40", "Professional", "Show 2025 delivered revenue by month with a running total.", "Aggregate in a CTE, then SUM(...) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(${REVENUE}) AS revenue FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'delivered' AND o.order_date >= '2025-01-01' AND o.order_date < '2026-01-01' GROUP BY month) SELECT month, revenue, SUM(revenue) OVER (ORDER BY month) AS running_total FROM m ORDER BY month;`),
  q("RL-E41", "Professional", "Show the month-over-month change in delivered orders for 2025.", "Count orders per month in a CTE, then LAG.", `WITH m AS (SELECT DATE_FORMAT(order_date, '%Y-%m') AS month, COUNT(*) AS orders FROM orders WHERE status = 'delivered' AND order_date >= '2025-01-01' AND order_date < '2026-01-01' GROUP BY month) SELECT month, orders, LAG(orders) OVER (ORDER BY month) AS prev_orders, orders - LAG(orders) OVER (ORDER BY month) AS change FROM m ORDER BY month;`),
  q("RL-E42", "Professional", "List customers with 3 or more delivered orders.", "GROUP BY customer over delivered orders, HAVING COUNT(*) >= 3.", `SELECT c.customer_id, c.customer_name, COUNT(*) AS delivered_orders FROM customers c JOIN orders o ON o.customer_id = c.customer_id WHERE o.status = 'delivered' GROUP BY c.customer_id, c.customer_name HAVING COUNT(*) >= 3 ORDER BY delivered_orders DESC, c.customer_id LIMIT 20;`),
  q("RL-E43", "Professional", "Show the best-selling product in each category by units.", "Rank products per category by SUM(quantity) and keep rn = 1.", `WITH r AS (SELECT p.category, p.product_name, SUM(i.quantity) AS units, ROW_NUMBER() OVER (PARTITION BY p.category ORDER BY SUM(i.quantity) DESC, p.product_id) AS rn FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'delivered' GROUP BY p.category, p.product_id, p.product_name) SELECT category, product_name, units FROM r WHERE rn = 1 ORDER BY category;`),
  q("RL-E44", "Professional", "List customers who have never placed an order.", "NOT EXISTS against orders.", `SELECT c.customer_id, c.customer_name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id) ORDER BY c.customer_id LIMIT 20;`),
  q("RL-E45", "Professional", "List products priced above their category's average.", "Correlated subquery on products x WHERE x.category = p.category.", `SELECT p.product_name, p.category, p.price FROM products p WHERE p.price > (SELECT AVG(x.price) FROM products x WHERE x.category = p.category) ORDER BY p.category, p.price DESC, p.product_id LIMIT 20;`),
  q("RL-E46", "Professional", "Show the 10 sellers with the most delivered revenue.", "Join products, items and orders; group by seller.", `SELECT s.seller_id, s.seller_name, SUM(${REVENUE}) AS revenue FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id JOIN sellers s ON s.seller_id = p.seller_id WHERE o.status = 'delivered' GROUP BY s.seller_id, s.seller_name ORDER BY revenue DESC, s.seller_id LIMIT 10;`),
  q("RL-E47", "Professional", "Show each customer's first order date.", "MIN(order_date) per customer.", `SELECT c.customer_id, c.customer_name, MIN(o.order_date) AS first_order FROM customers c JOIN orders o ON o.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name ORDER BY first_order DESC, c.customer_id LIMIT 20;`),
  q("RL-E48", "Professional", "Build a 2025 monthly dashboard: delivered orders, revenue and average order value.", "Aggregate order values per order in a CTE, then group by month.", `WITH per_order AS (SELECT o.order_id, DATE_FORMAT(o.order_date, '%Y-%m') AS month, SUM(${REVENUE}) AS order_value FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'delivered' AND o.order_date >= '2025-01-01' AND o.order_date < '2026-01-01' GROUP BY o.order_id, month) SELECT month, COUNT(*) AS orders, SUM(order_value) AS revenue, ROUND(AVG(order_value), 2) AS avg_order_value FROM per_order GROUP BY month ORDER BY month;`),
  q("RL-E49", "Professional", "Show each payment mode's share of delivered revenue in 2025.", "Group by payment_mode and divide by the 2025 delivered total.", `SELECT o.payment_mode, SUM(${REVENUE}) AS revenue, ROUND(100 * SUM(${REVENUE}) / (SELECT SUM(ROUND(i.quantity * i.unit_price * (100 - i.discount) / 100, 2)) FROM order_items i JOIN orders o2 ON o2.order_id = i.order_id WHERE o2.status = 'delivered' AND o2.order_date >= '2025-01-01' AND o2.order_date < '2026-01-01'), 1) AS pct FROM order_items i JOIN orders o ON o.order_id = i.order_id WHERE o.status = 'delivered' AND o.order_date >= '2025-01-01' AND o.order_date < '2026-01-01' GROUP BY o.payment_mode ORDER BY revenue DESC, o.payment_mode;`),
  q("RL-E50", "Professional", "Show each seller's best-selling product by delivered units.", "Rank products per seller with ROW_NUMBER and keep rn = 1.", `WITH r AS (SELECT s.seller_name, p.product_name, SUM(i.quantity) AS units, ROW_NUMBER() OVER (PARTITION BY s.seller_id ORDER BY SUM(i.quantity) DESC, p.product_id) AS rn FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id JOIN sellers s ON s.seller_id = p.seller_id WHERE o.status = 'delivered' GROUP BY s.seller_id, s.seller_name, p.product_id, p.product_name) SELECT seller_name, product_name, units FROM r WHERE rn = 1 ORDER BY units DESC, seller_name LIMIT 20;`),
];

export const ecommerceModule: RealLifeModuleConfig = {
  number: 8,
  slug: "real-life-marketplace",
  shortTitle: "Real life: e-commerce marketplace",
  title: "Real life database practice: e-commerce marketplace (50 SQL problems)",
  summary: "Practise 50 SQL problems on a 2,000-order marketplace database — catalog, customers, revenue and returns, checked in your browser.",
  dataset: "ecommerce",
  context:
    "Marketplace is a fictional shopping site: 50 sellers list 200 products, 500 customers place 2,000 orders, and each order has one to three lines whose price and discount determine the final payable amount. This is the classic five-table schema behind almost every online store.",
  tables: [
    { name: "sellers", grain: "one seller", columns: "seller_id, seller_name, city, rating" },
    { name: "products", grain: "one listed product", columns: "product_id, seller_id, product_name, category, price, stock" },
    { name: "customers", grain: "one customer", columns: "customer_id, customer_name, city, signup_date" },
    { name: "orders", grain: "one order", columns: "order_id, customer_id, order_date, status, payment_mode" },
    { name: "order_items", grain: "one product line in an order", columns: "order_id, product_id, quantity, unit_price, discount" },
  ],
  outcomes: [
    "Read a five-table schema and pick the tables a question needs",
    "Calculate payable revenue with quantity, price and discount",
    "Aggregate order lines to orders without double counting",
    "Rank products and sellers with window functions and CTEs",
  ],
  quickAnswer: {
    question: "What does the marketplace practice database contain?",
    answer:
      "Five related tables: 50 sellers, 200 products, 500 customers, 2,000 orders and roughly 4,000 order lines. Revenue is quantity × unit_price minus discount; order_items holds the lines, so any revenue question has to join it to orders. The database is already selected in every problem.",
  },
  guided: {
    heading: "Guided walkthrough: delivered revenue per category",
    intro: "Revenue lives on the order line, the category lives on the product, and the status lives on the order — so this one needs all three tables.",
    steps: [
      "Start from `order_items`: one row is one product line, not one order.",
      "Join `orders` on order_id to reach status and order date.",
      "Join `products` on product_id to reach the category.",
      "Filter `status = 'delivered'`, then sum quantity × unit_price × (100 − discount) / 100 per category.",
    ],
    sql: "SELECT p.category, SUM(ROUND(i.quantity * i.unit_price * (100 - i.discount) / 100, 2)) AS revenue FROM order_items i JOIN orders o ON o.order_id = i.order_id JOIN products p ON p.product_id = i.product_id WHERE o.status = 'delivered' GROUP BY p.category ORDER BY revenue DESC, p.category;",
    explain:
      "Each order line joins exactly one order and one product, so no row is duplicated. Summing the rounded line total keeps the result at two decimals, which is what a finance report expects.",
  },
  teaches: ["SQL practice", "e-commerce database", "JOIN", "revenue", "GROUP BY", "window functions", "data analysis"],
  questions,
  quiz: [
    {
      id: "RL-E-Q1",
      question: "Where does an order's revenue actually live?",
      options: ["On orders", "On order_items, as quantity × unit_price minus discount", "On products", "On customers"],
      correctIndex: 1,
      explanation: "An order row has no money column. The line items hold quantity, price and discount, so revenue has to be computed there and then summed.",
    },
    {
      id: "RL-E-Q2",
      question: "Why can summing `products.price` after joining orders and order_items overstate revenue?",
      options: ["Because price is a string", "Because a product appears once per order line, so its price is added repeatedly", "Because discounts are ignored", "Because MySQL rounds the values"],
      correctIndex: 1,
      explanation: "Joining a product to its many order lines repeats the product row. Always aggregate the line values, not the catalogue attributes.",
    },
    {
      id: "RL-E-Q3",
      question: "Which join keeps orders that have no line items?",
      options: ["INNER JOIN", "LEFT JOIN from orders to order_items", "RIGHT JOIN from products", "CROSS JOIN"],
      correctIndex: 1,
      explanation: "A LEFT JOIN starting from orders keeps every order and fills NULLs where no line exists.",
    },
  ],
  mistakes: [
    {
      wrong: "GROUP BY p.category while selecting p.product_name",
      why: "MySQL with ONLY_FULL_GROUP_BY rejects columns that are neither grouped nor aggregated.",
      fix: "Group by every non-aggregated column, or wrap the query in a CTE and rank inside it.",
    },
    {
      wrong: "Summing order totals after joining order_items and products to sellers",
      why: "Every extra one-to-many join repeats rows and multiplies the total.",
      fix: "Aggregate at the grain of the answer (per seller) and join pre-aggregated CTEs, never raw lines twice.",
    },
    {
      wrong: "Forgetting the discount column",
      why: "Orders are paid after discount, so quantity × unit_price alone overstates revenue.",
      fix: "Multiply by (100 - discount) / 100 as every reference answer does.",
    },
  ],
  faq: [
    {
      q: "Do I need to install MySQL and import this data?",
      a: "No. The code arena loads the marketplace database in your browser and preselects it for every problem. Download the .sql script to run the same queries in Workbench.",
    },
    {
      q: "Are the answers checked automatically?",
      a: "Yes. Your query and the reference answer run on fresh copies of the same rows and the results are compared row by row, so any correct query is accepted.",
    },
    {
      q: "Is the marketplace data real?",
      a: "No. It is fictional and generated from a fixed seed so every learner sees the same rows and the same expected answers.",
    },
  ],
};
