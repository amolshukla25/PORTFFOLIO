/**
 * Six extra "real life database" datasets for the practice modules.
 *
 * Each database has 20 columns spread over 2–5 related tables, and its busiest
 * table holds 2,000 rows, so learners practise the sort of query a junior
 * analyst actually writes: filters, joins, aggregation, dates and windows on
 * data that is too big to check by eye.
 *
 * Rows are generated from a fixed seed, so the browser, the downloadable MySQL
 * scripts and the CI check always agree. Generated on first use, never stored
 * as literals — the whole file stays small.
 */

import type { Dataset, Row } from "./datasets";

export type RealLifeDatasetId = "hospital" | "bank" | "ecommerce" | "college" | "rides" | "streaming";

export const REAL_LIFE_IDS: RealLifeDatasetId[] = ["hospital", "bank", "ecommerce", "college", "rides", "streaming"];

// ─── helpers ────────────────────────────────────────────────────────────────

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

const p2 = (n: number) => String(n).padStart(2, "0");

/** Deterministic 'YYYY-MM-DD' inside [start, start + days). */
function day(startUtc: number, days: number, r: number) {
  const d = new Date(startUtc + Math.floor(r * days) * 86400000);
  return `${d.getUTCFullYear()}-${p2(d.getUTCMonth() + 1)}-${p2(d.getUTCDate())}`;
}

const money = (x: number) => Math.round(x * 100) / 100;

const FIRST = ["Aarav", "Aditi", "Arjun", "Diya", "Ishaan", "Kavya", "Kabir", "Meera", "Neel", "Nisha", "Pranav", "Riya", "Rohan", "Saanvi", "Simran", "Tanvi", "Varun", "Vihaan", "Zara", "Harpreet", "Gurleen", "Manav", "Anaya", "Yash", "Ira", "Nikhil", "Pooja", "Rahul", "Sneha", "Aman"];
const LAST = ["Sharma", "Verma", "Gill", "Iyer", "Khan", "Patel", "Reddy", "Singh", "Mehta", "Das", "Nair", "Bose", "Kaur", "Joshi", "Rao", "Bhat", "Chopra", "Gupta"];
const CITIES = ["Pune", "Mumbai", "Delhi", "Jaipur", "Ludhiana", "Bengaluru", "Chennai", "Kolkata", "Hyderabad", "Ahmedabad"];

export interface Gen {
  r: () => number;
  /** integer in [lo, hi] */
  n: (lo: number, hi: number) => number;
  pick: <T>(list: readonly T[]) => T;
  name: () => string;
  city: () => string;
}

function gen(seed: number): Gen {
  const r = mulberry32(seed);
  const pick = <T,>(list: readonly T[]) => list[Math.floor(r() * list.length)];
  return {
    r,
    n: (lo, hi) => lo + Math.floor(r() * (hi - lo + 1)),
    pick,
    name: () => `${pick(FIRST)} ${pick(LAST)}`,
    city: () => pick(CITIES),
  };
}

/** Weighted pick: [value, weight][] */
function weighted<T>(g: Gen, list: readonly [T, number][]): T {
  const total = list.reduce((s, [, w]) => s + w, 0);
  let t = g.r() * total;
  for (const [v, w] of list) {
    if ((t -= w) <= 0) return v;
  }
  return list[list.length - 1][0];
}

const START = Date.UTC(2024, 0, 1);
const DAYS = 730; // 2024-01-01 .. 2025-12-30

// ─── 1. Hospital ────────────────────────────────────────────────────────────
// patients (8) + doctors (6) + appointments (8) = 22 columns, 2,000 appointments

const DEPARTMENTS = ["Cardiology", "Orthopaedics", "Dermatology", "Pediatrics", "Neurology", "General Medicine"];
const DIAGNOSES = ["Hypertension", "Fracture", "Allergy", "Viral fever", "Migraine", "Diabetes", "Back pain", "Asthma", "Infection", "Sprain"];
const BLOOD = ["A+", "B+", "O+", "AB+", "A-", "O-"];

function buildHospital(): Dataset {
  const g = gen(2026_0401);
  const patients: Row[] = [];
  for (let id = 1; id <= 600; id++) {
    patients.push([
      id,
      g.name(),
      weighted(g, [["Female", 52], ["Male", 46], ["Other", 2]]),
      g.n(1, 88),
      g.city(),
      `9${g.n(10_000_000, 99_999_999)}`,
      day(START, DAYS, g.r()),
      g.pick(BLOOD),
    ]);
  }

  const doctors: Row[] = [];
  const doctorFee: number[] = [];
  for (let id = 1; id <= 60; id++) {
    const fee = g.n(4, 25) * 100;
    doctorFee.push(fee);
    doctors.push([
      id,
      `Dr ${g.name()}`,
      g.pick(DEPARTMENTS),
      g.city(),
      fee,
      day(Date.UTC(2010, 0, 1), 5000, g.r()),
    ]);
  }

  const appointments: Row[] = [];
  for (let id = 1; id <= 2000; id++) {
    const doctorId = g.n(1, doctors.length);
    const status = weighted(g, [["completed", 80], ["cancelled", 12], ["no_show", 8]]);
    appointments.push([
      id,
      g.n(1, patients.length),
      doctorId,
      day(START, DAYS, g.r()),
      status,
      status === "completed" ? g.pick(DIAGNOSES) : null,
      status === "completed" ? doctorFee[doctorId - 1] : 0,
      status === "completed" ? g.n(3, 5) : null,
    ]);
  }

  return {
    id: "hospital",
    schema: "portfolio_hospital",
    label: "City Hospital (2,000 appointments)",
    tables: [
      {
        name: "patients",
        columns: ["patient_id INT PRIMARY KEY", "patient_name VARCHAR(80) NOT NULL", "gender VARCHAR(10) NOT NULL", "age INT NOT NULL", "city VARCHAR(60) NOT NULL", "phone VARCHAR(15)", "registered_on DATE NOT NULL", "blood_group VARCHAR(4)"],
        rows: patients,
      },
      {
        name: "doctors",
        columns: ["doctor_id INT PRIMARY KEY", "doctor_name VARCHAR(80) NOT NULL", "department VARCHAR(40) NOT NULL", "city VARCHAR(60) NOT NULL", "fee DECIMAL(10,2) NOT NULL", "joined_on DATE NOT NULL"],
        rows: doctors,
      },
      {
        name: "appointments",
        columns: ["appointment_id INT PRIMARY KEY", "patient_id INT NOT NULL", "doctor_id INT NOT NULL", "appointment_date DATE NOT NULL", "status VARCHAR(20) NOT NULL", "diagnosis VARCHAR(60)", "amount DECIMAL(10,2) NOT NULL", "rating INT", "FOREIGN KEY (patient_id) REFERENCES patients(patient_id)", "FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id)", "CHECK (status IN ('completed','cancelled','no_show'))"],
        rows: appointments,
      },
    ],
  };
}

// ─── 2. Bank ────────────────────────────────────────────────────────────────
// customers (7) + accounts (6) + transactions (7) = 20 columns, 2,000 transactions

const BRANCHES = ["Pune Camp", "Mumbai Andheri", "Delhi CP", "Jaipur MI Road", "Bengaluru HSR", "Chennai T Nagar"];

function buildBank(): Dataset {
  const g = gen(2026_0402);
  const customers: Row[] = [];
  for (let id = 1; id <= 400; id++) {
    const name = g.name();
    customers.push([
      id,
      name,
      g.city(),
      weighted(g, [["retail", 70], ["premium", 22], ["business", 8]]),
      day(Date.UTC(2016, 0, 1), 3200, g.r()),
      g.n(300, 900),
      `${name.split(" ")[0].toLowerCase()}.${id}@example.test`,
    ]);
  }

  const accounts: Row[] = [];
  let accountId = 1;
  for (const [cid] of customers.map((c, i) => [i + 1] as const)) {
    const count = g.n(1, 2);
    for (let k = 0; k < count; k++) {
      accounts.push([
        accountId++,
        cid,
        g.pick(BRANCHES),
        weighted(g, [["savings", 62], ["current", 23], ["credit", 15]]),
        day(Date.UTC(2016, 0, 1), 3400, g.r()),
        money(g.n(5, 8000) * 100 + g.r()),
      ]);
    }
  }

  const transactions: Row[] = [];
  for (let id = 1; id <= 2000; id++) {
    const amount = money(g.n(50, 40000) + g.r());
    transactions.push([
      id,
      g.n(1, accounts.length),
      day(START, DAYS, g.r()),
      weighted(g, [["deposit", 30], ["withdrawal", 26], ["payment", 30], ["transfer", 14]]),
      weighted(g, [["atm", 32], ["app", 30], ["netbanking", 24], ["branch", 14]]),
      amount,
      money(g.n(1000, 500000) + g.r()),
    ]);
  }

  return {
    id: "bank",
    schema: "portfolio_bank",
    label: "Retail Bank (2,000 transactions)",
    tables: [
      {
        name: "customers",
        columns: ["customer_id INT PRIMARY KEY", "customer_name VARCHAR(80) NOT NULL", "city VARCHAR(60) NOT NULL", "segment VARCHAR(20) NOT NULL", "join_date DATE NOT NULL", "credit_score INT NOT NULL", "email VARCHAR(120)", "CHECK (credit_score BETWEEN 300 AND 900)"],
        rows: customers,
      },
      {
        name: "accounts",
        columns: ["account_id INT PRIMARY KEY", "customer_id INT NOT NULL", "branch VARCHAR(60) NOT NULL", "account_type VARCHAR(20) NOT NULL", "open_date DATE NOT NULL", "balance DECIMAL(12,2) NOT NULL", "FOREIGN KEY (customer_id) REFERENCES customers(customer_id)", "CHECK (account_type IN ('savings','current','credit'))"],
        rows: accounts,
      },
      {
        name: "transactions",
        columns: ["txn_id INT PRIMARY KEY", "account_id INT NOT NULL", "txn_date DATE NOT NULL", "txn_type VARCHAR(20) NOT NULL", "channel VARCHAR(20) NOT NULL", "amount DECIMAL(12,2) NOT NULL", "balance_after DECIMAL(12,2) NOT NULL", "FOREIGN KEY (account_id) REFERENCES accounts(account_id)", "CHECK (amount > 0)"],
        rows: transactions,
      },
    ],
  };
}

// ─── 3. E-commerce ──────────────────────────────────────────────────────────
// sellers (4) + products (6) + customers (4) + orders (5) + order_items (5) = 24
// columns, 2,000 orders

const CATEGORIES = ["Electronics", "Home", "Stationery", "Books", "Sports", "Fashion"];
const PAYMENTS = ["upi", "card", "cod", "netbanking"];

function buildEcommerce(): Dataset {
  const g = gen(2026_0403);
  const sellers: Row[] = [];
  for (let id = 1; id <= 50; id++) {
    sellers.push([id, `${g.pick(["Shop", "Store", "Bazaar", "Mart", "Traders"])} ${g.pick(LAST)}`, g.city(), money(3 + g.r() * 2)]);
  }

  const productNames: Record<string, string[]> = {
    Electronics: ["Headphones", "Keyboard", "Mouse", "Power bank", "Webcam", "USB hub", "Desk lamp", "Speaker"],
    Home: ["Mug", "Water bottle", "Cushion", "Wall clock", "Plant pot", "Lunch box", "Table mat", "Photo frame"],
    Stationery: ["Notebook", "Pen", "Planner", "Sticky notes", "Marker set", "Stapler", "Sketchbook", "Geometry box"],
    Books: ["SQL handbook", "Python primer", "Data stories", "Excel recipes", "Startup notes", "Design basics"],
    Sports: ["Yoga mat", "Skipping rope", "Cricket ball", "Badminton set", "Dumbbells", "Football"],
    Fashion: ["T-shirt", "Jeans", "Cap", "Socks", "Backpack", "Jacket"],
  };
  const products: Row[] = [];
  let pid = 1;
  for (const category of CATEGORIES) {
    for (const base of productNames[category]) {
      if (pid > 200) break;
      const variant = g.n(1, 3);
      products.push([pid, g.n(1, 50), `${base}${variant > 1 ? ` v${variant}` : ""}`, category, g.n(10, 300) * 10, g.n(0, 250)]);
      pid++;
    }
  }
  while (products.length < 200) {
    const category = g.pick(CATEGORIES);
    products.push([pid, g.n(1, 50), `${g.pick(productNames[category])} ${pid}`, category, g.n(10, 300) * 10, g.n(0, 250)]);
    pid++;
  }

  const customers: Row[] = [];
  for (let id = 1; id <= 500; id++) {
    customers.push([id, g.name(), g.city(), day(START, DAYS, g.r())]);
  }

  const orders: Row[] = [];
  const items: Row[] = [];
  for (let id = 1; id <= 2000; id++) {
    const customerId = 1 + Math.floor(Math.pow(g.r(), 1.5) * customers.length);
    const date = day(START, DAYS, g.r());
    const status = weighted(g, [["delivered", 78], ["shipped", 10], ["cancelled", 8], ["returned", 4]]);
    orders.push([id, customerId, date, status, g.pick(PAYMENTS)]);

    const lines = g.n(1, 3);
    const used = new Set<number>();
    for (let l = 0; l < lines; l++) {
      const productId = g.n(1, products.length);
      if (used.has(productId)) continue;
      used.add(productId);
      const price = products[productId - 1][4] as number;
      items.push([id, productId, g.n(1, 5), price, g.n(0, 30)]);
    }
  }

  return {
    id: "ecommerce",
    schema: "portfolio_ecommerce",
    label: "Marketplace (2,000 orders)",
    tables: [
      {
        name: "sellers",
        columns: ["seller_id INT PRIMARY KEY", "seller_name VARCHAR(80) NOT NULL", "city VARCHAR(60) NOT NULL", "rating DECIMAL(3,2) NOT NULL"],
        rows: sellers,
      },
      {
        name: "products",
        columns: ["product_id INT PRIMARY KEY", "seller_id INT NOT NULL", "product_name VARCHAR(80) NOT NULL", "category VARCHAR(40) NOT NULL", "price DECIMAL(10,2) NOT NULL", "stock INT NOT NULL", "FOREIGN KEY (seller_id) REFERENCES sellers(seller_id)", "CHECK (price >= 0)"],
        rows: products,
      },
      {
        name: "customers",
        columns: ["customer_id INT PRIMARY KEY", "customer_name VARCHAR(80) NOT NULL", "city VARCHAR(60) NOT NULL", "signup_date DATE NOT NULL"],
        rows: customers,
      },
      {
        name: "orders",
        columns: ["order_id INT PRIMARY KEY", "customer_id INT NOT NULL", "order_date DATE NOT NULL", "status VARCHAR(20) NOT NULL", "payment_mode VARCHAR(20) NOT NULL", "FOREIGN KEY (customer_id) REFERENCES customers(customer_id)", "CHECK (status IN ('delivered','shipped','cancelled','returned'))"],
        rows: orders,
      },
      {
        name: "order_items",
        columns: ["order_id INT NOT NULL", "product_id INT NOT NULL", "quantity INT NOT NULL", "unit_price DECIMAL(10,2) NOT NULL", "discount INT NOT NULL", "PRIMARY KEY (order_id, product_id)", "FOREIGN KEY (order_id) REFERENCES orders(order_id)", "FOREIGN KEY (product_id) REFERENCES products(product_id)", "CHECK (quantity > 0)"],
        rows: items,
      },
    ],
  };
}

// ─── 4. College ─────────────────────────────────────────────────────────────
// students (6) + courses (5) + enrollments (5) + exam_results (6) = 22 columns,
// 2,000 exam results

const PROGRAMS = ["BSc Data Science", "BCom Honours", "BBA", "BSc Computer Science", "BA Economics"];
const DEPTS = ["Data Science", "Commerce", "Management", "Computer Science", "Economics"];

function gradeFor(marks: number) {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 50) return "D";
  return "F";
}

function buildCollege(): Dataset {
  const g = gen(2026_0404);
  const students: Row[] = [];
  for (let id = 1; id <= 400; id++) {
    const name = g.name();
    students.push([id, name, g.city(), g.pick(PROGRAMS), g.n(2019, 2025), `${name.split(" ")[0].toLowerCase()}${id}@college.test`]);
  }

  const courses: Row[] = [];
  for (let id = 1; id <= 40; id++) {
    const department = g.pick(DEPTS);
    courses.push([id, `${department} ${["Fundamentals", "Practicum", "Analytics", "Ethics", "Studio"][id % 5]} ${id}`, department, g.pick([3, 4, 5]), `Prof ${g.pick(LAST)}`]);
  }

  const enrollments: Row[] = [];
  const seen = new Set<string>();
  let enrollmentId = 1;
  while (enrollmentId <= 1200) {
    const studentId = g.n(1, students.length);
    const courseId = g.n(1, courses.length);
    const key = `${studentId}-${courseId}`;
    if (seen.has(key)) continue;
    seen.add(key);
    enrollments.push([enrollmentId++, studentId, courseId, g.pick(["2024-S1", "2024-S2", "2025-S1", "2025-S2"]), day(START, DAYS, g.r())]);
  }

  const results: Row[] = [];
  for (let id = 1; id <= 2000; id++) {
    const marks = weighted(g, [[g.n(85, 100), 20], [g.n(70, 84), 35], [g.n(55, 69), 27], [g.n(35, 54), 13], [g.n(0, 34), 5]]);
    results.push([id, g.n(1, students.length), g.n(1, courses.length), day(START, DAYS, g.r()), marks, gradeFor(marks)]);
  }

  return {
    id: "college",
    schema: "portfolio_college",
    label: "City College (2,000 exam results)",
    tables: [
      {
        name: "students",
        columns: ["student_id INT PRIMARY KEY", "student_name VARCHAR(80) NOT NULL", "city VARCHAR(60) NOT NULL", "program VARCHAR(60) NOT NULL", "admission_year INT NOT NULL", "email VARCHAR(120)"],
        rows: students,
      },
      {
        name: "courses",
        columns: ["course_id INT PRIMARY KEY", "course_name VARCHAR(80) NOT NULL", "department VARCHAR(40) NOT NULL", "credits INT NOT NULL", "instructor VARCHAR(80) NOT NULL"],
        rows: courses,
      },
      {
        name: "enrollments",
        columns: ["enrollment_id INT PRIMARY KEY", "student_id INT NOT NULL", "course_id INT NOT NULL", "semester VARCHAR(10) NOT NULL", "enrolled_on DATE NOT NULL", "FOREIGN KEY (student_id) REFERENCES students(student_id)", "FOREIGN KEY (course_id) REFERENCES courses(course_id)"],
        rows: enrollments,
      },
      {
        name: "exam_results",
        columns: ["result_id INT PRIMARY KEY", "student_id INT NOT NULL", "course_id INT NOT NULL", "exam_date DATE NOT NULL", "marks INT NOT NULL", "grade VARCHAR(2) NOT NULL", "FOREIGN KEY (student_id) REFERENCES students(student_id)", "FOREIGN KEY (course_id) REFERENCES courses(course_id)", "CHECK (marks BETWEEN 0 AND 100)"],
        rows: results,
      },
    ],
  };
}

// ─── 5. Ride-hailing ────────────────────────────────────────────────────────
// drivers (6) + riders (5) + trips (9) = 20 columns, 2,000 trips

const VEHICLES = ["bike", "auto", "sedan", "suv", "premium"];

function buildRides(): Dataset {
  const g = gen(2026_0405);
  const drivers: Row[] = [];
  for (let id = 1; id <= 200; id++) {
    drivers.push([id, g.name(), g.city(), g.pick(VEHICLES), money(3.5 + g.r() * 1.5), day(Date.UTC(2019, 0, 1), 2400, g.r())]);
  }

  const riders: Row[] = [];
  for (let id = 1; id <= 500; id++) {
    riders.push([id, g.name(), g.city(), day(Date.UTC(2020, 0, 1), 2200, g.r()), money(g.n(0, 2000) + g.r())]);
  }

  const trips: Row[] = [];
  for (let id = 1; id <= 2000; id++) {
    const distance = money(1 + g.r() * 39);
    const surge = weighted(g, [[1, 70], [1.2, 18], [1.5, 9], [2, 3]]);
    const fare = money(40 + distance * g.n(8, 18) * surge);
    const status = weighted(g, [["completed", 90], ["cancelled", 6], ["no_driver", 4]]);
    trips.push([
      id,
      g.n(1, riders.length),
      status === "no_driver" ? null : g.n(1, drivers.length),
      day(START, DAYS, g.r()),
      distance,
      status === "completed" ? fare : 0,
      status,
      status === "completed" ? weighted(g, [["upi", 45], ["cash", 30], ["card", 15], ["wallet", 10]]) : null,
      surge,
    ]);
  }

  return {
    id: "rides",
    schema: "portfolio_rides",
    label: "City Rides (2,000 trips)",
    tables: [
      {
        name: "drivers",
        columns: ["driver_id INT PRIMARY KEY", "driver_name VARCHAR(80) NOT NULL", "city VARCHAR(60) NOT NULL", "vehicle_type VARCHAR(20) NOT NULL", "rating DECIMAL(3,2) NOT NULL", "joined_on DATE NOT NULL"],
        rows: drivers,
      },
      {
        name: "riders",
        columns: ["rider_id INT PRIMARY KEY", "rider_name VARCHAR(80) NOT NULL", "city VARCHAR(60) NOT NULL", "signup_date DATE NOT NULL", "wallet_balance DECIMAL(10,2) NOT NULL"],
        rows: riders,
      },
      {
        name: "trips",
        columns: ["trip_id INT PRIMARY KEY", "rider_id INT NOT NULL", "driver_id INT", "trip_date DATE NOT NULL", "distance_km DECIMAL(6,2) NOT NULL", "fare DECIMAL(10,2) NOT NULL", "status VARCHAR(20) NOT NULL", "payment_mode VARCHAR(20)", "surge_multiplier DECIMAL(4,2) NOT NULL", "FOREIGN KEY (rider_id) REFERENCES riders(rider_id)", "FOREIGN KEY (driver_id) REFERENCES drivers(driver_id)", "CHECK (status IN ('completed','cancelled','no_driver'))"],
        rows: trips,
      },
    ],
  };
}

// ─── 6. Streaming ───────────────────────────────────────────────────────────
// users (6) + plans (4) + titles (6) + watch_sessions (7) = 23 columns, 2,000
// watch sessions

const GENRES = ["Drama", "Comedy", "Thriller", "Documentary", "Sci-Fi", "Romance", "Action"];
const DEVICES = ["phone", "laptop", "tv", "tablet"];

function buildStreaming(): Dataset {
  const g = gen(2026_0406);
  const plans: Row[] = [
    [1, "Basic", 149, 1],
    [2, "Standard", 299, 2],
    [3, "Premium", 499, 4],
    [4, "Annual", 1499, 4],
  ];

  const users: Row[] = [];
  for (let id = 1; id <= 400; id++) {
    users.push([
      id,
      g.name(),
      g.pick(["India", "India", "India", "Nepal", "UAE", "Singapore"]),
      weighted(g, [[1, 30], [2, 40], [3, 22], [4, 8]]),
      day(Date.UTC(2021, 0, 1), 2000, g.r()),
      weighted(g, [["active", 82], ["paused", 10], ["cancelled", 8]]),
    ]);
  }

  const titles: Row[] = [];
  for (let id = 1; id <= 150; id++) {
    titles.push([
      id,
      `${g.pick(["The", "Last", "Silent", "Hidden", "Midnight", "Golden", "Broken", "New"])} ${g.pick(["City", "River", "Promise", "Signal", "Garden", "Road", "Story", "Season"])} ${id}`,
      g.pick(["movie", "series"]),
      g.pick(GENRES),
      g.n(1990, 2025),
      g.pick(["U", "U/A 7+", "U/A 13+", "U/A 16+", "A"]),
    ]);
  }

  const sessions: Row[] = [];
  for (let id = 1; id <= 2000; id++) {
    const minutes = g.n(5, 180);
    sessions.push([
      id,
      g.n(1, users.length),
      g.n(1, titles.length),
      day(START, DAYS, g.r()),
      minutes,
      g.pick(DEVICES),
      minutes >= 60 ? 1 : 0,
    ]);
  }

  return {
    id: "streaming",
    schema: "portfolio_streaming",
    label: "Streaming Service (2,000 watch sessions)",
    tables: [
      {
        name: "plans",
        columns: ["plan_id INT PRIMARY KEY", "plan_name VARCHAR(40) NOT NULL", "monthly_price DECIMAL(8,2) NOT NULL", "max_streams INT NOT NULL"],
        rows: plans,
      },
      {
        name: "users",
        columns: ["user_id INT PRIMARY KEY", "user_name VARCHAR(80) NOT NULL", "country VARCHAR(40) NOT NULL", "plan_id INT NOT NULL", "signup_date DATE NOT NULL", "status VARCHAR(20) NOT NULL", "FOREIGN KEY (plan_id) REFERENCES plans(plan_id)", "CHECK (status IN ('active','paused','cancelled'))"],
        rows: users,
      },
      {
        name: "titles",
        columns: ["title_id INT PRIMARY KEY", "title_name VARCHAR(120) NOT NULL", "kind VARCHAR(10) NOT NULL", "genre VARCHAR(30) NOT NULL", "release_year INT NOT NULL", "age_rating VARCHAR(10) NOT NULL", "CHECK (kind IN ('movie','series'))"],
        rows: titles,
      },
      {
        name: "watch_sessions",
        columns: ["session_id INT PRIMARY KEY", "user_id INT NOT NULL", "title_id INT NOT NULL", "watch_date DATE NOT NULL", "minutes_watched INT NOT NULL", "device VARCHAR(20) NOT NULL", "completed INT NOT NULL", "FOREIGN KEY (user_id) REFERENCES users(user_id)", "FOREIGN KEY (title_id) REFERENCES titles(title_id)", "CHECK (minutes_watched > 0)"],
        rows: sessions,
      },
    ],
  };
}

const BUILDERS: Record<RealLifeDatasetId, () => Dataset> = {
  hospital: buildHospital,
  bank: buildBank,
  ecommerce: buildEcommerce,
  college: buildCollege,
  rides: buildRides,
  streaming: buildStreaming,
};

const cache = new Map<RealLifeDatasetId, Dataset>();

/** Built once per session; the worker, the scripts and the download generator reuse it. */
export function buildRealLifeDataset(id: RealLifeDatasetId): Dataset {
  let ds = cache.get(id);
  if (!ds) {
    ds = BUILDERS[id]();
    cache.set(id, ds);
  }
  return ds;
}
