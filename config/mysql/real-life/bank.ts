import { q, type RealLifeModuleConfig } from "./types";

/**
 * Module 7 — Retail Bank. 50 problems, all checkable in the browser.
 * Targets are generated from the reference answers by
 * scripts/mysql/gen-real-life-targets.ts.
 */
const questions = [
  // Easy
  q("RL-B01", "Easy", "List customers in Pune with a credit score above 750.", "Two filters with AND; sort by customer_id.", `SELECT customer_id, customer_name, credit_score FROM customers WHERE city = 'Pune' AND credit_score > 750 ORDER BY customer_id LIMIT 20;`),
  q("RL-B02", "Easy", "Show the 20 accounts with the highest balance.", "ORDER BY balance DESC with account_id as the tie-breaker.", `SELECT account_id, account_type, balance FROM accounts ORDER BY balance DESC, account_id LIMIT 20;`),
  q("RL-B03", "Easy", "Show the 20 most recent deposit transactions.", "Filter txn_type, then sort by date and id descending.", `SELECT txn_id, txn_date, amount FROM transactions WHERE txn_type = 'deposit' ORDER BY txn_date DESC, txn_id DESC LIMIT 20;`),
  q("RL-B04", "Easy", "List each transaction channel once.", "DISTINCT on channel.", `SELECT DISTINCT channel FROM transactions ORDER BY channel;`),
  q("RL-B05", "Easy", "List savings accounts opened during 2024.", "Filter account_type and a half-open date range.", `SELECT account_id, customer_id, open_date FROM accounts WHERE account_type = 'savings' AND open_date >= '2024-01-01' AND open_date < '2025-01-01' ORDER BY account_id LIMIT 20;`),
  q("RL-B06", "Easy", "List premium customers, alphabetically by name.", "WHERE segment = 'premium', ORDER BY name.", `SELECT customer_id, customer_name, city FROM customers WHERE segment = 'premium' ORDER BY customer_name, customer_id;`),
  q("RL-B07", "Easy", "Show the 20 largest transactions.", "Sort by amount DESC and break ties on txn_id.", `SELECT txn_id, txn_date, amount FROM transactions ORDER BY amount DESC, txn_id LIMIT 20;`),
  q("RL-B08", "Easy", "List the accounts held at the Pune Camp branch.", "Filter branch, then sort by account_id.", `SELECT account_id, customer_id, account_type FROM accounts WHERE branch = 'Pune Camp' ORDER BY account_id LIMIT 20;`),
  q("RL-B09", "Easy", "Count all customers.", "One COUNT over the customers table.", `SELECT COUNT(*) AS customers FROM customers;`),
  q("RL-B10", "Easy", "Show type and balance for the first 20 accounts.", "Two columns, ordered by the key.", `SELECT account_id, account_type, balance FROM accounts ORDER BY account_id LIMIT 20;`),

  // Medium
  q("RL-B11", "Medium", "List customers with a credit score between 600 and 700.", "BETWEEN is inclusive on both ends.", `SELECT customer_id, customer_name, credit_score FROM customers WHERE credit_score BETWEEN 600 AND 700 ORDER BY customer_id LIMIT 20;`),
  q("RL-B12", "Medium", "List current and credit accounts.", "Use IN for the two account types.", `SELECT account_id, account_type, balance FROM accounts WHERE account_type IN ('current', 'credit') ORDER BY account_id LIMIT 20;`),
  q("RL-B13", "Medium", "List customers whose name starts with S.", "LIKE 'S%'.", `SELECT customer_id, customer_name FROM customers WHERE customer_name LIKE 'S%' ORDER BY customer_id LIMIT 20;`),
  q("RL-B14", "Medium", "List transactions from October to December 2024.", "A half-open range from 2024-10-01 to 2025-01-01.", `SELECT txn_id, txn_date, amount FROM transactions WHERE txn_date >= '2024-10-01' AND txn_date < '2025-01-01' ORDER BY txn_date, txn_id LIMIT 20;`),
  q("RL-B15", "Medium", "Show each transaction's month in YYYY-MM form, first 20 rows.", "DATE_FORMAT(txn_date, '%Y-%m') AS month.", `SELECT txn_id, txn_date, DATE_FORMAT(txn_date, '%Y-%m') AS month FROM transactions ORDER BY txn_id LIMIT 20;`),
  q("RL-B16", "Medium", "Label every customer's credit score band.", "CASE WHEN credit_score >= 750 THEN 'Excellent' ... ELSE 'Poor' END.", `SELECT customer_id, customer_name, credit_score, CASE WHEN credit_score >= 750 THEN 'Excellent' WHEN credit_score >= 650 THEN 'Good' WHEN credit_score >= 550 THEN 'Fair' ELSE 'Poor' END AS band FROM customers ORDER BY customer_id LIMIT 20;`),
  q("RL-B17", "Medium", "List customers who joined before 2018.", "Compare join_date with the date literal.", `SELECT customer_id, customer_name, join_date FROM customers WHERE join_date < '2018-01-01' ORDER BY join_date, customer_id LIMIT 20;`),
  q("RL-B18", "Medium", "Show each transaction amount in thousands, rounded to one decimal.", "ROUND(amount / 1000, 1).", `SELECT txn_id, ROUND(amount / 1000, 1) AS amount_thousands FROM transactions ORDER BY txn_id LIMIT 20;`),
  q("RL-B19", "Medium", "Show how many days each account has been open at 2026-01-01.", "DATEDIFF('2026-01-01', open_date) AS days_open.", `SELECT account_id, open_date, DATEDIFF('2026-01-01', open_date) AS days_open FROM accounts ORDER BY account_id LIMIT 20;`),
  q("RL-B20", "Medium", "Count how many different branches hold accounts.", "COUNT(DISTINCT branch).", `SELECT COUNT(DISTINCT branch) AS branches FROM accounts;`),
  q("RL-B21", "Medium", "Show each city in capitals with the customer's name.", "UPPER is applied to the column, not the alias.", `SELECT customer_name, UPPER(city) AS city FROM customers ORDER BY customer_id LIMIT 20;`),
  q("RL-B22", "Medium", "List transfer transactions made through the app.", "Two equality filters.", `SELECT txn_id, txn_type, channel, amount FROM transactions WHERE txn_type = 'transfer' AND channel = 'app' ORDER BY txn_id LIMIT 20;`),

  // Hard
  q("RL-B23", "Hard", "Count accounts per branch.", "GROUP BY branch, then ORDER BY the count.", `SELECT branch, COUNT(*) AS accounts FROM accounts GROUP BY branch ORDER BY accounts DESC, branch;`),
  q("RL-B24", "Hard", "Show the average balance per account type.", "AVG(balance) grouped by account_type.", `SELECT account_type, ROUND(AVG(balance), 2) AS avg_balance FROM accounts GROUP BY account_type ORDER BY avg_balance DESC, account_type;`),
  q("RL-B25", "Hard", "Count customers per segment.", "GROUP BY segment.", `SELECT segment, COUNT(*) AS customers FROM customers GROUP BY segment ORDER BY customers DESC, segment;`),
  q("RL-B26", "Hard", "Show total transaction amount per channel.", "SUM(amount) grouped by channel.", `SELECT channel, SUM(amount) AS total_amount FROM transactions GROUP BY channel ORDER BY total_amount DESC, channel;`),
  q("RL-B27", "Hard", "Show branches with more than 90 accounts.", "Filter the groups with HAVING COUNT(*) > 90.", `SELECT branch, COUNT(*) AS accounts FROM accounts GROUP BY branch HAVING COUNT(*) > 90 ORDER BY accounts DESC, branch;`),
  q("RL-B28", "Hard", "Show the 5 cities with the most customers.", "GROUP BY city, order by count, LIMIT 5.", `SELECT city, COUNT(*) AS customers FROM customers GROUP BY city ORDER BY customers DESC, city LIMIT 5;`),
  q("RL-B29", "Hard", "Show the average credit score per segment.", "AVG(credit_score) grouped by segment.", `SELECT segment, ROUND(AVG(credit_score), 1) AS avg_score FROM customers GROUP BY segment ORDER BY avg_score DESC, segment;`),
  q("RL-B30", "Hard", "Show total transaction amount per month of 2025.", "DATE_FORMAT(txn_date, '%Y-%m') grouped and sorted.", `SELECT DATE_FORMAT(txn_date, '%Y-%m') AS month, SUM(amount) AS total_amount FROM transactions WHERE txn_date >= '2025-01-01' AND txn_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-B31", "Hard", "List accounts with no transactions.", "LEFT JOIN and keep the rows where txn_id IS NULL.", `SELECT a.account_id, a.account_type FROM accounts a LEFT JOIN transactions t ON t.account_id = a.account_id WHERE t.txn_id IS NULL ORDER BY a.account_id LIMIT 20;`),
  q("RL-B32", "Hard", "Show the average transaction amount per transaction type.", "AVG(amount) grouped by txn_type.", `SELECT txn_type, ROUND(AVG(amount), 2) AS avg_amount FROM transactions GROUP BY txn_type ORDER BY avg_amount DESC, txn_type;`),
  q("RL-B33", "Hard", "Count transactions per month of 2024.", "Filter 2024, group by the formatted month.", `SELECT DATE_FORMAT(txn_date, '%Y-%m') AS month, COUNT(*) AS transactions FROM transactions WHERE txn_date >= '2024-01-01' AND txn_date < '2025-01-01' GROUP BY month ORDER BY month;`),
  q("RL-B34", "Hard", "List customers who hold two accounts.", "Join customers to accounts, GROUP BY customer, HAVING COUNT(*) >= 2.", `SELECT c.customer_id, c.customer_name, COUNT(*) AS accounts FROM customers c JOIN accounts a ON a.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name HAVING COUNT(*) >= 2 ORDER BY accounts DESC, c.customer_id LIMIT 20;`),
  q("RL-B35", "Hard", "Show the 5 branches holding the most money.", "SUM(balance) per branch, ordered and limited.", `SELECT branch, SUM(balance) AS total_balance FROM accounts GROUP BY branch ORDER BY total_balance DESC, branch LIMIT 5;`),
  q("RL-B36", "Hard", "Show account types whose average deposit is above 20,000.", "Filter deposits first, then HAVING AVG(amount) > 20000.", `SELECT a.account_type, ROUND(AVG(t.amount), 2) AS avg_deposit FROM accounts a JOIN transactions t ON t.account_id = a.account_id WHERE t.txn_type = 'deposit' GROUP BY a.account_type HAVING AVG(t.amount) > 20000 ORDER BY avg_deposit DESC, a.account_type;`),

  // Professional
  q("RL-B37", "Professional", "Show the 10 customers with the most money across their accounts.", "Join customers to accounts and SUM(balance).", `SELECT c.customer_id, c.customer_name, SUM(a.balance) AS total_balance FROM customers c JOIN accounts a ON a.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name ORDER BY total_balance DESC, c.customer_id LIMIT 10;`),
  q("RL-B38", "Professional", "Show each branch's share of total deposits as a percentage.", "Divide the branch total by a scalar subquery of the grand total.", `SELECT branch, SUM(balance) AS total_balance, ROUND(100 * SUM(balance) / (SELECT SUM(balance) FROM accounts), 1) AS pct_of_total FROM accounts GROUP BY branch ORDER BY total_balance DESC, branch;`),
  q("RL-B39", "Professional", "Rank customers by credit score inside their city.", "RANK() OVER (PARTITION BY city ORDER BY credit_score DESC).", `SELECT city, customer_name, credit_score, RANK() OVER (PARTITION BY city ORDER BY credit_score DESC, customer_id) AS city_rank FROM customers ORDER BY city, city_rank LIMIT 20;`),
  q("RL-B40", "Professional", "Show monthly deposit totals for 2025 with a running total.", "Aggregate in a CTE, then SUM(...) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(txn_date, '%Y-%m') AS month, SUM(amount) AS deposits FROM transactions WHERE txn_type = 'deposit' AND txn_date >= '2025-01-01' AND txn_date < '2026-01-01' GROUP BY month) SELECT month, deposits, SUM(deposits) OVER (ORDER BY month) AS running_total FROM m ORDER BY month;`),
  q("RL-B41", "Professional", "Show the month-over-month change in transaction count for 2025.", "LAG(transactions) OVER (ORDER BY month) in a CTE.", `WITH m AS (SELECT DATE_FORMAT(txn_date, '%Y-%m') AS month, COUNT(*) AS transactions FROM transactions WHERE txn_date >= '2025-01-01' AND txn_date < '2026-01-01' GROUP BY month) SELECT month, transactions, LAG(transactions) OVER (ORDER BY month) AS prev_transactions, transactions - LAG(transactions) OVER (ORDER BY month) AS change FROM m ORDER BY month;`),
  q("RL-B42", "Professional", "List customers who have never transacted.", "NOT EXISTS over accounts joined to transactions.", `SELECT c.customer_id, c.customer_name FROM customers c WHERE NOT EXISTS (SELECT 1 FROM accounts a JOIN transactions t ON t.account_id = a.account_id WHERE a.customer_id = c.customer_id) ORDER BY c.customer_id LIMIT 20;`),
  q("RL-B43", "Professional", "Show the largest transaction for every account.", "ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY amount DESC, txn_id).", `WITH r AS (SELECT account_id, txn_id, txn_date, amount, ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY amount DESC, txn_id) AS rn FROM transactions) SELECT account_id, txn_id, txn_date, amount FROM r WHERE rn = 1 ORDER BY account_id LIMIT 20;`),
  q("RL-B44", "Professional", "List accounts whose balance is above the overall average.", "Compare with a scalar subquery.", `SELECT account_id, account_type, balance FROM accounts WHERE balance > (SELECT AVG(balance) FROM accounts) ORDER BY balance DESC, account_id LIMIT 20;`),
  q("RL-B45", "Professional", "Show each channel's share of 2025 transaction value.", "Group by channel, divide by the 2025 total.", `SELECT channel, SUM(amount) AS total_amount, ROUND(100 * SUM(amount) / (SELECT SUM(amount) FROM transactions WHERE txn_date >= '2025-01-01' AND txn_date < '2026-01-01'), 1) AS pct FROM transactions WHERE txn_date >= '2025-01-01' AND txn_date < '2026-01-01' GROUP BY channel ORDER BY total_amount DESC, channel;`),
  q("RL-B46", "Professional", "List customers whose total balance beats their city's average.", "Build one CTE of per-customer totals and one of city averages, then join them.", `WITH per AS (SELECT c.customer_id, c.customer_name, c.city, SUM(a.balance) AS total_balance FROM customers c JOIN accounts a ON a.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name, c.city), avg_city AS (SELECT city, AVG(total_balance) AS city_avg FROM per GROUP BY city) SELECT p.customer_name, p.city, p.total_balance, ROUND(ac.city_avg, 2) AS city_avg FROM per p JOIN avg_city ac ON ac.city = p.city WHERE p.total_balance > ac.city_avg ORDER BY p.total_balance DESC, p.customer_id LIMIT 20;`),
  q("RL-B47", "Professional", "Show the first transaction of every account (one row each).", "ROW_NUMBER() over each account ordered by date and id.", `WITH r AS (SELECT account_id, txn_id, txn_date, amount, ROW_NUMBER() OVER (PARTITION BY account_id ORDER BY txn_date, txn_id) AS rn FROM transactions) SELECT account_id, txn_id, txn_date, amount FROM r WHERE rn = 1 ORDER BY account_id LIMIT 20;`),
  q("RL-B48", "Professional", "List customers whose accounts sit in more than one branch.", "COUNT(DISTINCT branch) per customer with HAVING > 1.", `SELECT c.customer_id, c.customer_name, COUNT(DISTINCT a.branch) AS branches FROM customers c JOIN accounts a ON a.customer_id = c.customer_id GROUP BY c.customer_id, c.customer_name HAVING COUNT(DISTINCT a.branch) > 1 ORDER BY branches DESC, c.customer_id LIMIT 20;`),
  q("RL-B49", "Professional", "Build a segment dashboard: customers, accounts, balance and average score.", "Join customers to accounts, group by segment, aggregate four things.", `SELECT c.segment, COUNT(DISTINCT c.customer_id) AS customers, COUNT(a.account_id) AS accounts, SUM(a.balance) AS total_balance, ROUND(AVG(c.credit_score), 1) AS avg_score FROM customers c JOIN accounts a ON a.customer_id = c.customer_id GROUP BY c.segment ORDER BY total_balance DESC, c.segment;`),
  q("RL-B50", "Professional", "Show 2025 transaction value per month and channel.", "Group by month and channel and sort both ways.", `SELECT DATE_FORMAT(txn_date, '%Y-%m') AS month, channel, SUM(amount) AS total_amount FROM transactions WHERE txn_date >= '2025-01-01' AND txn_date < '2026-01-01' GROUP BY month, channel ORDER BY month, total_amount DESC;`),
];

export const bankModule: RealLifeModuleConfig = {
  number: 7,
  slug: "real-life-bank",
  shortTitle: "Real life: retail bank",
  title: "Real life database practice: retail banking (50 SQL problems)",
  summary: "Practise 50 SQL problems on a 2,000-transaction bank database — customer segments, balances, channels and monthly reporting, checked in your browser.",
  dataset: "bank",
  context:
    "Retail Bank is a fictional bank with 400 customers, about 600 accounts and 2,000 transactions. Each customer belongs to a retail, premium or business segment; each account sits in a branch; each transaction belongs to one account and carries a channel such as atm, app, netbanking or branch.",
  tables: [
    { name: "customers", grain: "one customer", columns: "customer_id, customer_name, city, segment, join_date, credit_score, email" },
    { name: "accounts", grain: "one bank account", columns: "account_id, customer_id, branch, account_type, open_date, balance" },
    { name: "transactions", grain: "one money movement", columns: "txn_id, account_id, txn_date, txn_type, channel, amount, balance_after" },
  ],
  outcomes: [
    "Answer branch and segment questions from 2,000 transactions",
    "Aggregate money without being fooled by zero rows or NULLs",
    "Report per month and per channel with GROUP BY",
    "Use window functions for rankings, running totals and month-over-month change",
  ],
  quickAnswer: {
    question: "What is in the retail bank practice database?",
    answer:
      "400 customers, around 600 accounts and 2,000 transactions in four branches and six cities. Customers have a segment and credit score, accounts have a branch, type and balance, and transactions carry a type, channel and amount. The database is already selected in every practice problem.",
  },
  guided: {
    heading: "Guided walkthrough: deposits by channel",
    intro: "Every transaction belongs to one account. Here we only need the transaction table, because the channel is stored on each transaction.",
    steps: [
      "One row of `transactions` is one money movement, with its own channel and amount.",
      "Filter `txn_type = 'deposit'` so withdrawals and payments do not distort the total.",
      "Group by channel and sum the amount.",
      "Sort by the total so the busiest channel is first.",
    ],
    sql: "SELECT channel, COUNT(*) AS deposits, SUM(amount) AS total_deposited FROM transactions WHERE txn_type = 'deposit' GROUP BY channel ORDER BY total_deposited DESC, channel;",
    explain:
      "No join is needed: everything the question asks for lives in transactions. Adding a join to accounts would be harmless here but would tempt you to sum one-to-many rows later — check the grain first.",
  },
  teaches: ["SQL practice", "banking database", "JOIN", "GROUP BY", "HAVING", "window functions", "financial reporting"],
  questions,
  quiz: [
    {
      id: "RL-B-Q1",
      question: "Customers and accounts are one-to-many. What must you do before summing account balances per customer?",
      options: ["Nothing special", "Group by the customer, then SUM the balance", "Use DISTINCT on every column", "Filter out customers with one account"],
      correctIndex: 1,
      explanation: "After joining, a customer appears once per account. Grouping by the customer and summing the balance gives the customer total.",
    },
    {
      id: "RL-B-Q2",
      question: "Why is `balance_after` a bad column to sum across transactions?",
      options: ["It is text", "It is a snapshot after each movement, so adding snapshots has no business meaning", "It is always NULL", "It is only for credit accounts"],
      correctIndex: 1,
      explanation: "Amounts are the movements; balance_after is a running snapshot. Sum the amount column for totals and use balance_after only for context.",
    },
    {
      id: "RL-B-Q3",
      question: "Which query counts accounts per branch correctly?",
      options: ["SELECT branch, COUNT(*) FROM accounts", "SELECT branch, COUNT(*) FROM accounts GROUP BY branch", "SELECT COUNT(branch) FROM accounts", "SELECT DISTINCT branch FROM accounts"],
      correctIndex: 1,
      explanation: "One row per group needs GROUP BY; without it MySQL returns a single mixed row (or errors under ONLY_FULL_GROUP_BY).",
    },
  ],
  mistakes: [
    {
      wrong: "Joining transactions to accounts and then summing amount to get a branch total",
      why: "Every transaction already belongs to exactly one account, so this join is safe — but the same pattern on a one-to-many table doubles the sum.",
      fix: "State the grain first: one transaction row stays one row. Aggregate before joining when the other side has many rows.",
    },
    {
      wrong: "WHERE SUM(amount) > 100000",
      why: "An aggregate cannot run in WHERE; MySQL raises error 1111.",
      fix: "Use HAVING SUM(amount) > 100000 after GROUP BY.",
    },
    {
      wrong: "Filtering dates with BETWEEN '2025-01-01' AND '2025-12-31'",
      why: "It breaks the moment a DATETIME with a time part is used; the last day is partly missed.",
      fix: "Use >= '2025-01-01' AND < '2026-01-01', as the reference answers do.",
    },
  ],
  faq: [
    {
      q: "Do I need to install MySQL and import this data?",
      a: "No. The code arena loads the bank database in your browser and preselects it for every problem. Download the .sql script when you want to run the same queries in Workbench.",
    },
    {
      q: "Are the answers checked automatically?",
      a: "Yes. Your query and the reference answer run on fresh copies of the same rows and the results are compared row by row, so any correct query is accepted.",
    },
    {
      q: "Is the bank data real?",
      a: "No. It is fictional and generated from a fixed seed so every learner sees the same rows and the same expected answers.",
    },
  ],
};
