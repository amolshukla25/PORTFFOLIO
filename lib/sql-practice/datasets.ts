/**
 * Practice datasets for the MySQL course.
 *
 * The same rows feed three places:
 *  - the in-browser practice engine (SQLite via sql.js),
 *  - the downloadable MySQL scripts in /public/downloads (scripts/mysql/gen-downloads.ts),
 *  - the CI check that every reference answer runs (scripts/mysql/check-course.ts).
 * Keep this file free of browser-only or Node-only imports.
 */

export type DatasetId = "shop" | "large" | "none";

export type Row = (string | number | null)[];

export interface TableDef {
  name: string;
  /** Column DDL shared by MySQL and SQLite, one entry per column/constraint. */
  columns: string[];
  rows: Row[];
  /** Extra secondary indexes, mirroring the ones MySQL makes for foreign keys. */
  indexes?: { name: string; columns: string[] }[];
}

export interface Dataset {
  id: Exclude<DatasetId, "none">;
  schema: string;
  label: string;
  tables: TableDef[];
}

const SCHEMA_COLUMNS = {
  customers: [
    "customer_id INT PRIMARY KEY",
    "customer_name VARCHAR(80) NOT NULL",
    "city VARCHAR(60) NOT NULL",
    "email VARCHAR(120) UNIQUE",
  ],
  products: [
    "product_id INT PRIMARY KEY",
    "product_name VARCHAR(80) NOT NULL",
    "category VARCHAR(40) NOT NULL",
    "price DECIMAL(10,2) NOT NULL CHECK (price >= 0)",
  ],
  orders: [
    "order_id INT PRIMARY KEY",
    "customer_id INT NOT NULL",
    "order_date DATE NOT NULL",
    "status VARCHAR(20) NOT NULL",
    "FOREIGN KEY (customer_id) REFERENCES customers(customer_id)",
    "CHECK (status IN ('completed','cancelled','pending'))",
  ],
  order_items: [
    "order_id INT NOT NULL",
    "product_id INT NOT NULL",
    "quantity INT NOT NULL CHECK (quantity > 0)",
    "unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0)",
    "PRIMARY KEY (order_id, product_id)",
    "FOREIGN KEY (order_id) REFERENCES orders(order_id)",
    "FOREIGN KEY (product_id) REFERENCES products(product_id)",
  ],
};

const FK_INDEXES = {
  orders: [{ name: "customer_id", columns: ["customer_id"] }],
  order_items: [{ name: "product_id", columns: ["product_id"] }],
};

/** The 6 / 6 / 8 / 14-row Learning Shop used by every lesson. */
export const SHOP_DATASET: Dataset = {
  id: "shop",
  schema: "portfolio_retail_lab",
  label: "Learning Shop (small)",
  tables: [
    {
      name: "customers",
      columns: SCHEMA_COLUMNS.customers,
      rows: [
        [1, "Asha", "Pune", "asha@example.test"],
        [2, "Bilal", "Mumbai", "bilal@example.test"],
        [3, "Charu", "Pune", null],
        [4, "Dev", "Delhi", "dev@example.test"],
        [5, "Esha", "Mumbai", "esha@example.test"],
        [6, "Farah", "Jaipur", "farah@example.test"],
      ],
    },
    {
      name: "products",
      columns: SCHEMA_COLUMNS.products,
      rows: [
        [1, "Notebook", "Stationery", 100],
        [2, "Pen", "Stationery", 20],
        [3, "Desk lamp", "Electronics", 800],
        [4, "Mug", "Home", 250],
        [5, "Keyboard", "Electronics", 1200],
        [6, "Planner", "Stationery", 300],
      ],
    },
    {
      name: "orders",
      columns: SCHEMA_COLUMNS.orders,
      indexes: FK_INDEXES.orders,
      rows: [
        [101, 1, "2026-01-05", "completed"],
        [102, 2, "2026-01-08", "completed"],
        [103, 1, "2026-02-03", "completed"],
        [104, 3, "2026-02-10", "cancelled"],
        [105, 4, "2026-02-15", "completed"],
        [106, 2, "2026-03-02", "completed"],
        [107, 5, "2026-03-04", "pending"],
        [108, 4, "2026-03-11", "completed"],
      ],
    },
    {
      name: "order_items",
      columns: SCHEMA_COLUMNS.order_items,
      indexes: FK_INDEXES.order_items,
      rows: [
        [101, 1, 2, 100],
        [101, 2, 5, 20],
        [102, 3, 1, 800],
        [102, 4, 2, 250],
        [103, 5, 1, 1200],
        [103, 2, 10, 20],
        [104, 3, 1, 800],
        [105, 1, 3, 100],
        [105, 4, 1, 250],
        [106, 5, 1, 1200],
        [106, 1, 1, 100],
        [107, 6, 2, 300],
        [108, 3, 1, 800],
        [108, 4, 2, 250],
      ],
    },
  ],
};

// ─── Large dataset ──────────────────────────────────────────────────────────
// Deterministic, so the browser, the download and the CI test agree row for
// row. Same four tables and columns as the shop, so every query transfers.

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FIRST = ["Aarav", "Aditi", "Arjun", "Diya", "Ishaan", "Kavya", "Kabir", "Meera", "Neel", "Nisha", "Pranav", "Riya", "Rohan", "Saanvi", "Simran", "Tanvi", "Varun", "Vihaan", "Zara", "Harpreet", "Gurleen", "Manav", "Anaya", "Yash", "Ira"];
const LAST = ["Sharma", "Verma", "Gill", "Iyer", "Khan", "Patel", "Reddy", "Singh", "Mehta", "Das", "Nair", "Bose", "Kaur", "Joshi", "Rao"];
const CITIES = ["Pune", "Mumbai", "Delhi", "Jaipur", "Ludhiana", "Bengaluru", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad"];
const CATALOG: [string, string, number][] = [
  ["Notebook", "Stationery", 100], ["Pen", "Stationery", 20], ["Planner", "Stationery", 300], ["Sticky notes", "Stationery", 60],
  ["Marker set", "Stationery", 180], ["Stapler", "Stationery", 220], ["Geometry box", "Stationery", 150], ["Sketchbook", "Stationery", 240],
  ["Desk lamp", "Electronics", 800], ["Keyboard", "Electronics", 1200], ["Mouse", "Electronics", 650], ["USB hub", "Electronics", 900],
  ["Headphones", "Electronics", 2200], ["Webcam", "Electronics", 2800], ["Power bank", "Electronics", 1500], ["Calculator", "Electronics", 700],
  ["Mug", "Home", 250], ["Water bottle", "Home", 400], ["Cushion", "Home", 550], ["Wall clock", "Home", 900],
  ["Plant pot", "Home", 350], ["Lunch box", "Home", 450], ["Photo frame", "Home", 300], ["Table mat", "Home", 200],
  ["SQL handbook", "Books", 650], ["Python primer", "Books", 550], ["Data stories", "Books", 480], ["Excel recipes", "Books", 420],
  ["Startup notes", "Books", 380], ["Design basics", "Books", 520], ["Yoga mat", "Sports", 900], ["Skipping rope", "Sports", 250],
  ["Cricket ball", "Sports", 300], ["Badminton set", "Sports", 1600], ["Dumbbells", "Sports", 1800], ["Football", "Sports", 950],
  ["Sports bottle", "Sports", 350], ["Gym gloves", "Sports", 500], ["Resistance band", "Sports", 400], ["Tennis balls", "Sports", 450],
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

let largeCache: Dataset | null = null;

export function buildLargeDataset(): Dataset {
  if (largeCache) return largeCache;
  const rand = mulberry32(20260101);
  const pick = <T,>(list: T[]) => list[Math.floor(rand() * list.length)];

  const customers: Row[] = [];
  for (let id = 1; id <= 300; id++) {
    const first = pick(FIRST);
    const last = pick(LAST);
    const email = rand() < 0.06 ? null : `${first}.${last}${id}@example.test`.toLowerCase();
    customers.push([id, `${first} ${last}`, pick(CITIES), email]);
  }

  const products: Row[] = CATALOG.map(([name, cat, price], i) => [i + 1, name, cat, price]);

  const orders: Row[] = [];
  const items: Row[] = [];
  const start = Date.UTC(2025, 0, 1);
  const days = 546; // 2025-01-01 .. 2026-06-30
  for (let i = 0; i < 4000; i++) {
    const orderId = 10001 + i;
    const customerId = 1 + Math.floor(Math.pow(rand(), 1.6) * 300); // some customers buy much more
    const d = new Date(start + Math.floor(rand() * days) * 86400000);
    const date = `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
    const r = rand();
    const status = r < 0.85 ? "completed" : r < 0.93 ? "cancelled" : "pending";
    orders.push([orderId, customerId, date, status]);

    const lines = 1 + Math.floor(rand() * 4);
    const used = new Set<number>();
    for (let l = 0; l < lines; l++) {
      const productId = 1 + Math.floor(rand() * products.length);
      if (used.has(productId)) continue;
      used.add(productId);
      const base = products[productId - 1][3] as number;
      // 2025 orders were sold at the old price list (10% lower) for some lines.
      const unit = date < "2025-07-01" && rand() < 0.5 ? Math.round(base * 0.9) : base;
      items.push([orderId, productId, 1 + Math.floor(rand() * 5), unit]);
    }
  }
  orders.sort((a, b) => (a[0] as number) - (b[0] as number));

  largeCache = {
    id: "large",
    schema: "portfolio_retail_large",
    label: "Learning Shop (large: 4,000 orders)",
    tables: [
      { name: "customers", columns: SCHEMA_COLUMNS.customers, rows: customers },
      { name: "products", columns: SCHEMA_COLUMNS.products, rows: products },
      { name: "orders", columns: SCHEMA_COLUMNS.orders, rows: orders, indexes: FK_INDEXES.orders },
      { name: "order_items", columns: SCHEMA_COLUMNS.order_items, rows: items, indexes: FK_INDEXES.order_items },
    ],
  };
  return largeCache;
}

export function getDataset(id: DatasetId): Dataset | null {
  if (id === "shop") return SHOP_DATASET;
  if (id === "large") return buildLargeDataset();
  return null;
}

export function sqlLiteral(v: string | number | null): string {
  if (v === null) return "NULL";
  if (typeof v === "number") return String(v);
  return `'${v.replace(/'/g, "''")}'`;
}
