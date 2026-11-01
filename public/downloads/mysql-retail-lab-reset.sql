-- RESET the Learning Shop practice database to its original rows.
-- WARNING: this DELETES the database portfolio_retail_lab and everything you
-- created inside it, then recreates it from scratch. Practice servers only.
-- MySQL 8.0.16+ (8.4 recommended). Workbench: File > Open SQL Script > Execute.
DROP DATABASE IF EXISTS portfolio_retail_lab;
CREATE DATABASE IF NOT EXISTS portfolio_retail_lab CHARACTER SET utf8mb4;
USE portfolio_retail_lab;

CREATE TABLE IF NOT EXISTS customers (
 customer_id INT PRIMARY KEY,
 customer_name VARCHAR(80) NOT NULL,
 city VARCHAR(60) NOT NULL,
 email VARCHAR(120) UNIQUE
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS products (
 product_id INT PRIMARY KEY,
 product_name VARCHAR(80) NOT NULL,
 category VARCHAR(40) NOT NULL,
 price DECIMAL(10,2) NOT NULL CHECK (price >= 0)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS orders (
 order_id INT PRIMARY KEY,
 customer_id INT NOT NULL,
 order_date DATE NOT NULL,
 status VARCHAR(20) NOT NULL,
 FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
 CHECK (status IN ('completed','cancelled','pending'))
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS order_items (
 order_id INT NOT NULL,
 product_id INT NOT NULL,
 quantity INT NOT NULL CHECK (quantity > 0),
 unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0),
 PRIMARY KEY (order_id, product_id),
 FOREIGN KEY (order_id) REFERENCES orders(order_id),
 FOREIGN KEY (product_id) REFERENCES products(product_id)
) ENGINE=InnoDB;

INSERT IGNORE INTO customers VALUES
 (1,'Asha','Pune','asha@example.test'),
 (2,'Bilal','Mumbai','bilal@example.test'),
 (3,'Charu','Pune',NULL),
 (4,'Dev','Delhi','dev@example.test'),
 (5,'Esha','Mumbai','esha@example.test'),
 (6,'Farah','Jaipur','farah@example.test');
INSERT IGNORE INTO products VALUES
 (1,'Notebook','Stationery',100.00),
 (2,'Pen','Stationery',20.00),
 (3,'Desk lamp','Electronics',800.00),
 (4,'Mug','Home',250.00),
 (5,'Keyboard','Electronics',1200.00),
 (6,'Planner','Stationery',300.00);
INSERT IGNORE INTO orders VALUES
 (101,1,'2026-01-05','completed'),
 (102,2,'2026-01-08','completed'),
 (103,1,'2026-02-03','completed'),
 (104,3,'2026-02-10','cancelled'),
 (105,4,'2026-02-15','completed'),
 (106,2,'2026-03-02','completed'),
 (107,5,'2026-03-04','pending'),
 (108,4,'2026-03-11','completed');
INSERT IGNORE INTO order_items VALUES
 (101,1,2,100.00),(101,2,5,20.00),
 (102,3,1,800.00),(102,4,2,250.00),
 (103,5,1,1200.00),(103,2,10,20.00),
 (104,3,1,800.00),
 (105,1,3,100.00),(105,4,1,250.00),
 (106,5,1,1200.00),(106,1,1,100.00),
 (107,6,2,300.00),
 (108,3,1,800.00),(108,4,2,250.00);

-- Seed verification: 6 customers, 6 products, 8 orders, 14 order_items.
-- Completed revenue = 6150.00; cancelled/pending items are not revenue.
SELECT 'customers' AS table_name, COUNT(*) AS row_count FROM customers
UNION ALL SELECT 'products', COUNT(*) FROM products
UNION ALL SELECT 'orders', COUNT(*) FROM orders
UNION ALL SELECT 'order_items', COUNT(*) FROM order_items;
