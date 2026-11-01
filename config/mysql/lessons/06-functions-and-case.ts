import type { MysqlLesson, Question } from "../types";

const q = (n: number, level: Question["level"], prompt: string, target: string, hint: string, answerSql: string): Question => ({
  id: `M06-${String(n).padStart(2, "0")}`, level, prompt, target, hint, answerSql,
});

export const lesson06: MysqlLesson = {
  slug: "functions-and-case",
  shortTitle: "Functions and CASE",
  title: "MySQL string, number and date functions, COALESCE and CASE",
  summary: "Clean and label data inside a query: CONCAT, UPPER, SUBSTRING, ROUND, COALESCE, IFNULL, YEAR, DATEDIFF and CASE WHEN — with the NULL traps explained.",
  module: 2,
  dataset: "shop",
  teaches: ["CONCAT", "UPPER LOWER", "CHAR_LENGTH", "SUBSTRING", "REPLACE", "ROUND", "COALESCE", "IFNULL", "YEAR MONTH", "DATEDIFF", "CASE WHEN"],
  quickAnswer: {
    question: "How does CASE WHEN work in MySQL?",
    answer:
      "CASE checks conditions in order and returns the value of the first one that is true: CASE WHEN price >= 800 THEN 'premium' WHEN price >= 100 THEN 'mid' ELSE 'budget' END. If nothing matches and there is no ELSE, it returns NULL. Use it in SELECT to label rows or in ORDER BY to control sorting.",
  },
  outcomes: [
    "Join and reshape text with CONCAT, UPPER, LOWER, SUBSTRING, REPLACE and CHAR_LENGTH",
    "Round money correctly with ROUND, and know CEIL and FLOOR",
    "Replace NULL with a default using COALESCE or IFNULL — and know why CONCAT returns NULL",
    "Pull parts out of dates with YEAR, MONTH, DAYNAME and DATEDIFF",
    "Label and sort rows with CASE WHEN … THEN … ELSE … END",
  ],
  sections: [
    {
      heading: "What a function is",
      body: "A function takes values in brackets and returns one value per row: `UPPER('pune')` returns `PUNE`. Functions do not change the table — they only change what the query shows. You can nest them: `UPPER(LEFT(customer_name, 1))`.",
    },
    {
      heading: "Text functions",
      body: `| Function | Returns | Example → result |
|---|---|---|
| \`CONCAT(a, b, …)\` | joined text | \`CONCAT('Asha', ' - ', 'Pune')\` → Asha - Pune |
| \`UPPER(s)\` / \`LOWER(s)\` | changed case | \`UPPER('Pen')\` → PEN |
| \`CHAR_LENGTH(s)\` | number of characters | \`CHAR_LENGTH('Mug')\` → 3 |
| \`SUBSTRING(s, start, len)\` | part of text (start at 1) | \`SUBSTRING('Keyboard', 1, 3)\` → Key |
| \`LEFT(s, n)\` / \`RIGHT(s, n)\` | first / last n characters | \`RIGHT('Planner', 3)\` → ner |
| \`REPLACE(s, from, to)\` | text with a part swapped | \`REPLACE('Desk lamp', ' ', '_')\` → Desk_lamp |
| \`TRIM(s)\` | text without outer spaces | \`TRIM('  Pen ')\` → Pen |
| \`SUBSTRING_INDEX(s, d, n)\` | text before the n-th delimiter (after it when n is negative) | \`SUBSTRING_INDEX('a@b.test', '@', -1)\` → b.test |`,
      sql: "SELECT customer_name,\n       CONCAT(customer_name, ' (', city, ')') AS label,\n       UPPER(LEFT(customer_name, 1)) AS initial,\n       SUBSTRING_INDEX(email, '@', -1) AS email_domain\nFROM customers\nORDER BY customer_id;",
      dataset: "shop",
      after: "Look at Charu: her email is NULL, so the domain is NULL too. Functions pass NULL through.",
    },
    {
      heading: "The CONCAT NULL trap",
      body: "In MySQL, if **any** argument of `CONCAT` is NULL, the whole result is NULL. That silently erases labels for rows with missing data:",
      sql: "SELECT customer_name,\n       CONCAT('Email: ', email) AS plain_concat,\n       CONCAT_WS(' | ', customer_name, email) AS with_ws\nFROM customers\nWHERE customer_id IN (1, 3);",
      dataset: "shop",
      after: "`CONCAT_WS(separator, …)` (*with separator*) skips NULL values instead. Or replace the NULL first with COALESCE, shown next.",
      callout: { kind: "mistake", text: "CONCAT('Email: ', NULL) is NULL, not 'Email: '. Wrap optional columns in COALESCE(column, '') or use CONCAT_WS." },
    },
    {
      heading: "COALESCE and IFNULL: defaults for missing values",
      body: "`COALESCE(a, b, c)` returns the first value that is not NULL. `IFNULL(a, b)` is MySQL's two-argument version. Both are how you print *not given* instead of an empty cell, or treat a missing amount as 0:",
      sql: "SELECT customer_name,\n       COALESCE(email, 'not given') AS email_shown,\n       IFNULL(email, 'not given')   AS same_with_ifnull\nFROM customers\nORDER BY customer_id;",
      dataset: "shop",
      after: "COALESCE is standard SQL and works in every database, so prefer it in shared code. You will use `COALESCE(revenue, 0)` in lesson 9 to show customers with no orders as 0 instead of NULL.",
    },
    {
      heading: "Number functions",
      body: "`ROUND(x, d)` rounds to d decimals (half away from zero). `CEIL` rounds up and `FLOOR` rounds down to a whole number. `ABS` drops the sign and `MOD(a, b)` gives the remainder.",
      sql: "SELECT product_name, price,\n       ROUND(price * 1.18, 2) AS price_with_gst,\n       CEIL(price / 7)        AS ceil_week,\n       FLOOR(price / 7)       AS floor_week\nFROM products\nORDER BY product_id;",
      dataset: "shop",
      callout: { kind: "business", text: "Round at the end, not in the middle. Summing already-rounded line values can be a few paise off the rounded total, which auditors notice." },
    },
    {
      heading: "Date functions",
      body: "Dates are stored as `YYYY-MM-DD`. These functions extract or compare parts of a date. (Lesson 11 adds `DATE_FORMAT` and monthly reporting.)",
      sql: "SELECT order_id, order_date,\n       YEAR(order_date)    AS yr,\n       MONTH(order_date)   AS mon,\n       DAYNAME(order_date) AS weekday,\n       DATEDIFF('2026-03-31', order_date) AS days_before_quarter_end\nFROM orders\nORDER BY order_id\nLIMIT 4;",
      dataset: "shop",
      after: "`DATEDIFF(later, earlier)` returns whole days. `CURDATE()` returns today's date and `NOW()` the date and time — useful in real reports, but they make answers change every day, so this course uses fixed dates.",
    },
    {
      heading: "CASE WHEN: if-then logic in SQL",
      body: `CASE checks its WHEN conditions **from top to bottom** and returns the THEN value of the **first** true one. ELSE catches everything else; without ELSE you get NULL.

\`\`\`sql
CASE
  WHEN condition_1 THEN value_1
  WHEN condition_2 THEN value_2
  ELSE fallback
END
\`\`\`

Because order matters, write the most specific condition first:`,
      sql: "SELECT product_name, price,\n       CASE\n         WHEN price >= 800 THEN 'premium'\n         WHEN price >= 100 THEN 'mid'\n         ELSE 'budget'\n       END AS price_band\nFROM products\nORDER BY price DESC;",
      dataset: "shop",
      after: "If you reversed the first two WHENs, Keyboard (1200.00) would be labelled *mid*, because `price >= 100` would be true first.",
    },
    {
      heading: "CASE in ORDER BY",
      body: "CASE can create a custom sort order — for example, show pending orders first because someone must act on them, then the rest by date:",
      sql: "SELECT order_id, status, order_date\nFROM orders\nORDER BY CASE status WHEN 'pending' THEN 1 WHEN 'cancelled' THEN 2 ELSE 3 END,\n         order_date;",
      dataset: "shop",
      after: "This is the *simple* CASE form: `CASE column WHEN value THEN …`. It compares one column with fixed values; the *searched* form above (`CASE WHEN condition`) can test anything.",
      callout: { kind: "remember", text: "CASE returns the first match. Put narrow conditions before broad ones, and always write an ELSE." },
    },
  ],
  mistakes: [
    { wrong: "CONCAT('Email: ', email)", why: "Returns NULL for every customer without an email.", fix: "CONCAT('Email: ', COALESCE(email, 'not given'))" },
    { wrong: "CASE WHEN price >= 100 THEN 'mid' WHEN price >= 800 THEN 'premium' END", why: "The first true condition wins, so nothing is ever premium.", fix: "Put WHEN price >= 800 first." },
    { wrong: "SUBSTRING(name, 0, 3)", why: "SQL strings start at position 1; position 0 returns an empty string.", fix: "SUBSTRING(name, 1, 3)" },
    { wrong: "CASE … END without ELSE", why: "Unmatched rows silently become NULL.", fix: "Always add ELSE 'other' (or another explicit value)." },
  ],
  checkYourself: [
    "Why does CONCAT('Email: ', email) show NULL for Charu, and what are two fixes?",
    "What is the difference between COALESCE and IFNULL?",
    "In a CASE with several WHENs, which THEN value is returned?",
  ],
  faq: [
    { q: "What is the difference between COALESCE and IFNULL in MySQL?", a: "IFNULL(a, b) takes exactly two arguments and is MySQL-specific. COALESCE(a, b, c, …) takes any number and is standard SQL, so it works in every database." },
    { q: "Why does CONCAT return NULL in MySQL?", a: "Because one of its arguments is NULL. MySQL's CONCAT returns NULL if any argument is NULL. Use CONCAT_WS or wrap the column in COALESCE." },
    { q: "Can I use CASE in WHERE or ORDER BY?", a: "Yes. CASE is an expression, so it works anywhere a value is allowed: SELECT, WHERE, ORDER BY, GROUP BY and inside aggregates such as SUM(CASE WHEN … THEN 1 ELSE 0 END)." },
  ],
  guided: {
    intro: "Build a customer contact sheet that never shows a blank cell.",
    steps: [
      "Run the query. Charu's contact column shows NULL — that is the CONCAT trap.",
      "Wrap email in COALESCE(email, 'no email') inside the CONCAT and run again.",
      "Add a column: CASE WHEN email IS NULL THEN 'ask for email' ELSE 'ok' END AS action.",
      "Sort so customers needing action come first: ORDER BY email IS NULL DESC, customer_id.",
    ],
    sql: "SELECT customer_name,\n       UPPER(city) AS city,\n       CONCAT(customer_name, ' <', email, '>') AS contact\nFROM customers\nORDER BY customer_id;",
    dataset: "shop",
    explain: "Six rows. Every contact reads like Asha <asha@example.test>, except Charu, whose contact is NULL because her email is NULL.",
  },
  questions: [
    q(1, "Easy", "Show every customer name in capital letters.", "6 rows: ASHA, BILAL, CHARU, DEV, ESHA, FARAH", "UPPER(customer_name).", "SELECT UPPER(customer_name) AS name_upper FROM customers ORDER BY customer_id;"),
    q(2, "Easy", "Show each product name and how many characters it has.", "6 rows: Notebook 8, Pen 3, Desk lamp 9, Mug 3, Keyboard 8, Planner 7", "CHAR_LENGTH counts characters, including the space.", "SELECT product_name, CHAR_LENGTH(product_name) AS name_length FROM products ORDER BY product_id;"),
    q(3, "Easy", "Make a label like Asha (Pune) for every customer.", "6 rows: Asha (Pune) … Farah (Jaipur)", "CONCAT(customer_name, ' (', city, ')').", "SELECT CONCAT(customer_name, ' (', city, ')') AS label FROM customers ORDER BY customer_id;"),
    q(4, "Easy", "Show each product's price including 18% GST, rounded to 2 decimals.", "6 rows: 118.00, 23.60, 944.00, 295.00, 1416.00, 354.00", "ROUND(price * 1.18, 2).", "SELECT product_name, ROUND(price * 1.18, 2) AS price_with_gst FROM products ORDER BY product_id;"),
    q(5, "Easy", "Show the year and month number of every order.", "8 rows; all 2026; months 1, 1, 2, 2, 2, 3, 3, 3", "YEAR() and MONTH().", "SELECT order_id, YEAR(order_date) AS yr, MONTH(order_date) AS mon FROM orders ORDER BY order_id;"),
    q(6, "Medium", "Show every customer's email, or 'not given' when it is missing, using IFNULL.", "6 rows; Charu shows not given", "IFNULL(email, 'not given').", "SELECT customer_name, IFNULL(email, 'not given') AS email FROM customers ORDER BY customer_id;"),
    q(7, "Medium", "Label products budget (under 100), mid (100 to 799) or premium (800 and above).", "Notebook mid, Pen budget, Desk lamp premium, Mug mid, Keyboard premium, Planner mid", "Check the highest band first, end with ELSE.", "SELECT product_name, CASE WHEN price >= 800 THEN 'premium' WHEN price >= 100 THEN 'mid' ELSE 'budget' END AS band FROM products ORDER BY product_id;"),
    q(8, "Medium", "Show the email domain (the part after @) for every customer.", "6 rows; five show example.test, Charu shows NULL", "SUBSTRING_INDEX(email, '@', -1).", "SELECT customer_name, SUBSTRING_INDEX(email, '@', -1) AS domain FROM customers ORDER BY customer_id;"),
    q(9, "Medium", "Show how many days each order was placed before 2026-03-31.", "8 rows; 101 is 85 days, 108 is 20 days", "DATEDIFF(later, earlier).", "SELECT order_id, DATEDIFF('2026-03-31', order_date) AS days_before FROM orders ORDER BY order_id;"),
    q(10, "Medium", "Show customer-friendly status text: completed → Delivered, cancelled → Cancelled, pending → Awaiting payment.", "8 rows; 104 Cancelled, 107 Awaiting payment, the rest Delivered", "Simple CASE: CASE status WHEN 'completed' THEN …", "SELECT order_id, CASE status WHEN 'completed' THEN 'Delivered' WHEN 'cancelled' THEN 'Cancelled' WHEN 'pending' THEN 'Awaiting payment' ELSE status END AS status_text FROM orders ORDER BY order_id;"),
    q(11, "Medium", "Show the weekday name of every order date.", "8 rows; 101 (2026-01-05) is Monday", "DAYNAME(order_date).", "SELECT order_id, order_date, DAYNAME(order_date) AS weekday FROM orders ORDER BY order_id;"),
    q(12, "Hard", "Line totals with a bulk discount: lines with quantity 5 or more get 10% off. Round to 2 decimals.", "14 rows; order 101 Pen 100 → 90.00, order 103 Pen 200 → 180.00, every other line full price", "ROUND(quantity * unit_price * CASE WHEN quantity >= 5 THEN 0.9 ELSE 1 END, 2).", "SELECT order_id, product_id, quantity * unit_price AS gross, ROUND(quantity * unit_price * CASE WHEN quantity >= 5 THEN 0.9 ELSE 1 END, 2) AS net FROM order_items ORDER BY order_id, product_id;"),
    q(13, "Hard", "Show 'Contact: ' followed by the email for every customer, so that no row is NULL.", "6 rows; Charu shows Contact: none", "Plain CONCAT gives NULL for Charu; use COALESCE inside it.", "SELECT customer_name, CONCAT('Contact: ', COALESCE(email, 'none')) AS contact FROM customers ORDER BY customer_id;"),
    q(14, "Hard", "List products with Electronics first, then all other products by price, cheapest first.", "Desk lamp, Keyboard, then Pen, Notebook, Mug, Planner", "ORDER BY CASE WHEN category = 'Electronics' THEN 0 ELSE 1 END, price.", "SELECT product_name, category, price FROM products ORDER BY CASE WHEN category = 'Electronics' THEN 0 ELSE 1 END, price;"),
    q(15, "Hard", "Mask emails for a screenshot: first letter, then ***, then @ and the domain.", "6 rows; Asha → a***@example.test; Charu → NULL", "CONCAT(LEFT(email, 1), '***@', SUBSTRING_INDEX(email, '@', -1)).", "SELECT customer_name, CONCAT(LEFT(email, 1), '***@', SUBSTRING_INDEX(email, '@', -1)) AS masked_email FROM customers ORDER BY customer_id;"),
    q(16, "Professional", "Customer contact sheet: name in capitals, city, email or 'no email', and action = 'ask for email' when missing else 'ok'. Missing emails first, then by name.", "6 rows; CHARU first with no email / ask for email, then ASHA, BILAL, DEV, ESHA, FARAH", "Sort by a CASE that puts NULL emails first.", "SELECT UPPER(customer_name) AS customer, city, COALESCE(email, 'no email') AS email, CASE WHEN email IS NULL THEN 'ask for email' ELSE 'ok' END AS action FROM customers ORDER BY CASE WHEN email IS NULL THEN 0 ELSE 1 END, customer_name;"),
    q(17, "Professional", "Invoice text for order 101: one line per item like 'Product 1 x2 = 200.00'.", "2 rows: Product 1 x2 = 200.00; Product 2 x5 = 100.00", "FORMAT(quantity * unit_price, 2) turns the amount into text with 2 decimals.", "SELECT CONCAT('Product ', product_id, ' x', quantity, ' = ', FORMAT(quantity * unit_price, 2)) AS invoice_line FROM order_items WHERE order_id = 101 ORDER BY product_id;"),
  ],
  quiz: [
    { id: "q1", question: "What does CONCAT('Hi ', NULL) return in MySQL?", options: ["'Hi '", "'Hi NULL'", "NULL", "An error"], correctIndex: 2, explanation: "Any NULL argument makes CONCAT return NULL. CONCAT_WS skips NULLs." },
    { id: "q2", question: "COALESCE(NULL, NULL, 'x', 'y') returns…", options: ["NULL", "'x'", "'y'", "'xy'"], correctIndex: 1, explanation: "COALESCE returns the first non-NULL argument." },
    { id: "q3", question: "A CASE has no ELSE and no WHEN matches. What is returned?", options: ["0", "An empty string", "NULL", "The first THEN value"], correctIndex: 2, explanation: "Without ELSE, an unmatched CASE returns NULL." },
    { id: "q4", question: "What does SUBSTRING('Keyboard', 1, 3) return?", options: ["eyb", "Key", "Keyb", "board"], correctIndex: 1, explanation: "Positions start at 1, so it takes 3 characters starting with K." },
  ],
};
