import { q, type RealLifeModuleConfig } from "./types";

/**
 * Module 10 — City Rides. 50 problems, all checkable in the browser.
 * Targets are generated from the reference answers by
 * scripts/mysql/gen-real-life-targets.ts.
 */
const questions = [
  // Easy
  q("RL-R01", "Easy", "List drivers rated 4.5 or higher.", "Filter rating and sort by rating DESC.", `SELECT driver_id, driver_name, rating FROM drivers WHERE rating >= 4.5 ORDER BY rating DESC, driver_id;`),
  q("RL-R02", "Easy", "Show the 20 longest completed trips.", "Filter status completed, order by distance DESC.", `SELECT trip_id, distance_km, fare FROM trips WHERE status = 'completed' ORDER BY distance_km DESC, trip_id LIMIT 20;`),
  q("RL-R03", "Easy", "List riders with a wallet balance above 1,000.", "Filter wallet_balance.", `SELECT rider_id, rider_name, wallet_balance FROM riders WHERE wallet_balance > 1000 ORDER BY wallet_balance DESC, rider_id LIMIT 20;`),
  q("RL-R04", "Easy", "List each vehicle type once.", "DISTINCT on vehicle_type.", `SELECT DISTINCT vehicle_type FROM drivers ORDER BY vehicle_type;`),
  q("RL-R05", "Easy", "List drivers who joined before 2021.", "Compare joined_on with the date literal.", `SELECT driver_name, joined_on FROM drivers WHERE joined_on < '2021-01-01' ORDER BY joined_on, driver_id;`),
  q("RL-R06", "Easy", "Show the 20 most expensive completed trips.", "Filter completed, order by fare DESC.", `SELECT trip_id, fare, distance_km FROM trips WHERE status = 'completed' ORDER BY fare DESC, trip_id LIMIT 20;`),
  q("RL-R07", "Easy", "List trips where no driver was found.", "Filter status = 'no_driver'.", `SELECT trip_id, rider_id, trip_date FROM trips WHERE status = 'no_driver' ORDER BY trip_id LIMIT 20;`),
  q("RL-R08", "Easy", "List riders who live in Mumbai.", "One city filter.", `SELECT rider_id, rider_name FROM riders WHERE city = 'Mumbai' ORDER BY rider_id LIMIT 20;`),
  q("RL-R09", "Easy", "Count all trips.", "COUNT(*) on trips.", `SELECT COUNT(*) AS trips FROM trips;`),
  q("RL-R10", "Easy", "Show the first 20 trips paid by card.", "Filter payment_mode = 'card'.", `SELECT trip_id, trip_date, fare FROM trips WHERE payment_mode = 'card' ORDER BY trip_id LIMIT 20;`),

  // Medium
  q("RL-R11", "Medium", "List completed trips between 10 and 20 km.", "BETWEEN plus the status filter.", `SELECT trip_id, distance_km, fare FROM trips WHERE status = 'completed' AND distance_km BETWEEN 10 AND 20 ORDER BY distance_km, trip_id LIMIT 20;`),
  q("RL-R12", "Medium", "List SUV and premium drivers.", "Use IN for the vehicle types.", `SELECT driver_id, driver_name, vehicle_type FROM drivers WHERE vehicle_type IN ('suv', 'premium') ORDER BY driver_id;`),
  q("RL-R13", "Medium", "List riders whose name starts with A.", "LIKE 'A%'.", `SELECT rider_id, rider_name FROM riders WHERE rider_name LIKE 'A%' ORDER BY rider_id LIMIT 20;`),
  q("RL-R14", "Medium", "List trips from the first quarter of 2025.", "Half-open range 2025-01-01 to 2025-04-01.", `SELECT trip_id, trip_date FROM trips WHERE trip_date >= '2025-01-01' AND trip_date < '2025-04-01' ORDER BY trip_date, trip_id LIMIT 20;`),
  q("RL-R15", "Medium", "Show fare per kilometre for the first 20 completed trips.", "ROUND(fare / distance_km, 2) AS fare_per_km.", `SELECT trip_id, fare, distance_km, ROUND(fare / distance_km, 2) AS fare_per_km FROM trips WHERE status = 'completed' ORDER BY trip_id LIMIT 20;`),
  q("RL-R16", "Medium", "Label each completed trip as Short, Medium or Long.", "CASE WHEN distance_km < 5 THEN ... WHEN < 15 THEN ... ELSE ... END.", `SELECT trip_id, distance_km, CASE WHEN distance_km < 5 THEN 'Short' WHEN distance_km < 15 THEN 'Medium' ELSE 'Long' END AS band FROM trips WHERE status = 'completed' ORDER BY trip_id LIMIT 20;`),
  q("RL-R17", "Medium", "List completed trips with a surge multiplier above 1.", "Filter surge_multiplier > 1.", `SELECT trip_id, surge_multiplier, fare FROM trips WHERE status = 'completed' AND surge_multiplier > 1 ORDER BY surge_multiplier DESC, trip_id LIMIT 20;`),
  q("RL-R18", "Medium", "List riders who signed up during 2024.", "Date range on signup_date.", `SELECT rider_id, rider_name, signup_date FROM riders WHERE signup_date >= '2024-01-01' AND signup_date < '2025-01-01' ORDER BY rider_id LIMIT 20;`),
  q("RL-R19", "Medium", "Show each driver's city in capitals.", "UPPER(city) with an alias.", `SELECT driver_name, UPPER(city) AS city FROM drivers ORDER BY driver_id LIMIT 20;`),
  q("RL-R20", "Medium", "Count how many different cities riders come from.", "COUNT(DISTINCT city).", `SELECT COUNT(DISTINCT city) AS cities FROM riders;`),
  q("RL-R21", "Medium", "Show each rider's name and its character length.", "LENGTH(rider_name).", `SELECT rider_name, LENGTH(rider_name) AS name_length FROM riders ORDER BY rider_id LIMIT 20;`),
  q("RL-R22", "Medium", "List trips with no driver assigned.", "The driver id is NULL when nobody accepted.", `SELECT trip_id, rider_id, status FROM trips WHERE driver_id IS NULL ORDER BY trip_id LIMIT 20;`),

  // Hard
  q("RL-R23", "Hard", "Count trips by status.", "GROUP BY status.", `SELECT status, COUNT(*) AS trips FROM trips GROUP BY status ORDER BY trips DESC, status;`),
  q("RL-R24", "Hard", "Show completed revenue per vehicle type.", "Join trips to drivers, filter completed, SUM(fare).", `SELECT d.vehicle_type, SUM(t.fare) AS revenue FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.vehicle_type ORDER BY revenue DESC, d.vehicle_type;`),
  q("RL-R25", "Hard", "Show the average completed fare per driver city.", "Join drivers, filter completed, AVG(fare) by city.", `SELECT d.city, ROUND(AVG(t.fare), 2) AS avg_fare FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.city ORDER BY avg_fare DESC, d.city;`),
  q("RL-R26", "Hard", "List drivers with more than 15 completed trips.", "GROUP BY driver with HAVING COUNT(*) > 15.", `SELECT d.driver_id, d.driver_name, COUNT(*) AS trips FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.driver_id, d.driver_name HAVING COUNT(*) > 15 ORDER BY trips DESC, d.driver_id LIMIT 20;`),
  q("RL-R27", "Hard", "Show the 5 cities with the most riders.", "GROUP BY city, order by count, LIMIT 5.", `SELECT city, COUNT(*) AS riders FROM riders GROUP BY city ORDER BY riders DESC, city LIMIT 5;`),
  q("RL-R28", "Hard", "Show completed revenue per month of 2025.", "DATE_FORMAT(trip_date, '%Y-%m') grouped.", `SELECT DATE_FORMAT(trip_date, '%Y-%m') AS month, SUM(fare) AS revenue FROM trips WHERE status = 'completed' AND trip_date >= '2025-01-01' AND trip_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-R29", "Hard", "Show the average driver rating per vehicle type.", "AVG(rating) grouped by vehicle_type.", `SELECT vehicle_type, ROUND(AVG(rating), 2) AS avg_rating FROM drivers GROUP BY vehicle_type ORDER BY avg_rating DESC, vehicle_type;`),
  q("RL-R30", "Hard", "Count trips per month of 2025.", "Filter 2025 and group by the formatted month.", `SELECT DATE_FORMAT(trip_date, '%Y-%m') AS month, COUNT(*) AS trips FROM trips WHERE trip_date >= '2025-01-01' AND trip_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-R31", "Hard", "List drivers with no trips at all.", "LEFT JOIN and keep rows where trip_id IS NULL.", `SELECT d.driver_id, d.driver_name FROM drivers d LEFT JOIN trips t ON t.driver_id = d.driver_id WHERE t.trip_id IS NULL ORDER BY d.driver_id LIMIT 20;`),
  q("RL-R32", "Hard", "Show the average distance by trip status.", "AVG(distance_km) grouped by status.", `SELECT status, ROUND(AVG(distance_km), 2) AS avg_distance FROM trips GROUP BY status ORDER BY avg_distance DESC, status;`),
  q("RL-R33", "Hard", "Show the cancellation rate per rider city.", "Join riders, compute 100 * cancelled / total, per city.", `SELECT r.city, ROUND(100 * SUM(CASE WHEN t.status = 'cancelled' THEN 1 ELSE 0 END) / COUNT(*), 1) AS cancelled_pct FROM riders r JOIN trips t ON t.rider_id = r.rider_id GROUP BY r.city ORDER BY cancelled_pct DESC, r.city;`),
  q("RL-R34", "Hard", "List riders with more than 5 completed trips.", "GROUP BY rider with HAVING COUNT(*) > 5.", `SELECT r.rider_id, r.rider_name, COUNT(*) AS trips FROM riders r JOIN trips t ON t.rider_id = r.rider_id WHERE t.status = 'completed' GROUP BY r.rider_id, r.rider_name HAVING COUNT(*) > 5 ORDER BY trips DESC, r.rider_id LIMIT 20;`),
  q("RL-R35", "Hard", "Show vehicle types with an average completed fare above 400.", "AVG(fare) per vehicle type with HAVING.", `SELECT d.vehicle_type, ROUND(AVG(t.fare), 2) AS avg_fare FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.vehicle_type HAVING AVG(t.fare) > 400 ORDER BY avg_fare DESC, d.vehicle_type;`),
  q("RL-R36", "Hard", "Show completed revenue by payment mode.", "Filter completed and SUM(fare) per payment_mode.", `SELECT payment_mode, COUNT(*) AS trips, SUM(fare) AS revenue FROM trips WHERE status = 'completed' GROUP BY payment_mode ORDER BY revenue DESC, payment_mode;`),

  // Professional
  q("RL-R37", "Professional", "Show the 10 drivers with the highest completed revenue.", "Join drivers to trips, filter completed, SUM(fare).", `SELECT d.driver_id, d.driver_name, d.vehicle_type, SUM(t.fare) AS revenue FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.driver_id, d.driver_name, d.vehicle_type ORDER BY revenue DESC, d.driver_id LIMIT 10;`),
  q("RL-R38", "Professional", "Rank drivers by completed revenue.", "RANK() OVER (ORDER BY SUM(fare) DESC) in a CTE.", `WITH per AS (SELECT d.driver_id, d.driver_name, SUM(t.fare) AS revenue FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.driver_id, d.driver_name) SELECT driver_name, revenue, RANK() OVER (ORDER BY revenue DESC) AS rnk FROM per ORDER BY rnk, driver_id LIMIT 20;`),
  q("RL-R39", "Professional", "Show 2025 monthly revenue with a running total.", "Aggregate in a CTE, then SUM(...) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(trip_date, '%Y-%m') AS month, SUM(fare) AS revenue FROM trips WHERE status = 'completed' AND trip_date >= '2025-01-01' AND trip_date < '2026-01-01' GROUP BY month) SELECT month, revenue, SUM(revenue) OVER (ORDER BY month) AS running_total FROM m ORDER BY month;`),
  q("RL-R40", "Professional", "Show the month-over-month change in trips for 2025.", "LAG(trips) OVER (ORDER BY month).", `WITH m AS (SELECT DATE_FORMAT(trip_date, '%Y-%m') AS month, COUNT(*) AS trips FROM trips WHERE trip_date >= '2025-01-01' AND trip_date < '2026-01-01' GROUP BY month) SELECT month, trips, LAG(trips) OVER (ORDER BY month) AS prev_trips, trips - LAG(trips) OVER (ORDER BY month) AS change FROM m ORDER BY month;`),
  q("RL-R41", "Professional", "List riders who never completed a trip.", "NOT EXISTS for completed trips per rider.", `SELECT r.rider_id, r.rider_name FROM riders r WHERE NOT EXISTS (SELECT 1 FROM trips t WHERE t.rider_id = r.rider_id AND t.status = 'completed') ORDER BY r.rider_id LIMIT 20;`),
  q("RL-R42", "Professional", "Show each rider's longest completed trip.", "ROW_NUMBER() PARTITION BY rider ORDER BY distance DESC.", `WITH r AS (SELECT rider_id, trip_id, trip_date, distance_km, ROW_NUMBER() OVER (PARTITION BY rider_id ORDER BY distance_km DESC, trip_id) AS rn FROM trips WHERE status = 'completed') SELECT rider_id, trip_id, trip_date, distance_km FROM r WHERE rn = 1 ORDER BY rider_id LIMIT 20;`),
  q("RL-R43", "Professional", "Show each vehicle type's share of completed revenue.", "Divide vehicle revenue by the scalar total.", `SELECT d.vehicle_type, SUM(t.fare) AS revenue, ROUND(100 * SUM(t.fare) / (SELECT SUM(fare) FROM trips WHERE status = 'completed'), 1) AS pct FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.vehicle_type ORDER BY revenue DESC, d.vehicle_type;`),
  q("RL-R44", "Professional", "List drivers whose revenue beats their city's average.", "Two CTEs: driver revenue and city averages, then join.", `WITH per AS (SELECT d.driver_id, d.driver_name, d.city, SUM(t.fare) AS revenue FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.driver_id, d.driver_name, d.city), city_avg AS (SELECT city, AVG(revenue) AS avg_revenue FROM per GROUP BY city) SELECT p.driver_name, p.city, p.revenue, ROUND(c.avg_revenue, 2) AS city_avg FROM per p JOIN city_avg c ON c.city = p.city WHERE p.revenue > c.avg_revenue ORDER BY p.revenue DESC, p.driver_id LIMIT 20;`),
  q("RL-R45", "Professional", "Build a 2025 monthly dashboard: trips, revenue and average distance.", "Filter 2025, group by month, three aggregates.", `SELECT DATE_FORMAT(trip_date, '%Y-%m') AS month, COUNT(*) AS trips, SUM(fare) AS revenue, ROUND(AVG(distance_km), 2) AS avg_distance FROM trips WHERE trip_date >= '2025-01-01' AND trip_date < '2026-01-01' GROUP BY month ORDER BY month;`),
  q("RL-R46", "Professional", "Show the first completed trip of every driver.", "ROW_NUMBER() PARTITION BY driver ORDER BY trip_date, trip_id.", `WITH r AS (SELECT driver_id, trip_id, trip_date, ROW_NUMBER() OVER (PARTITION BY driver_id ORDER BY trip_date, trip_id) AS rn FROM trips WHERE status = 'completed') SELECT driver_id, trip_id, trip_date FROM r WHERE rn = 1 ORDER BY driver_id LIMIT 20;`),
  q("RL-R47", "Professional", "List riders with more than 2 cancelled trips.", "Filter cancelled, group by rider, HAVING COUNT(*) > 2.", `SELECT r.rider_id, r.rider_name, COUNT(*) AS cancelled FROM riders r JOIN trips t ON t.rider_id = r.rider_id WHERE t.status = 'cancelled' GROUP BY r.rider_id, r.rider_name HAVING COUNT(*) > 2 ORDER BY cancelled DESC, r.rider_id LIMIT 20;`),
  q("RL-R48", "Professional", "List riders whose total spend beats the average rider spend.", "Per-rider CTE, then compare with a scalar subquery.", `WITH per AS (SELECT rider_id, SUM(fare) AS spend FROM trips WHERE status = 'completed' GROUP BY rider_id) SELECT r.rider_id, r.rider_name, p.spend FROM per p JOIN riders r ON r.rider_id = p.rider_id WHERE p.spend > (SELECT AVG(spend) FROM per) ORDER BY p.spend DESC, r.rider_id LIMIT 20;`),
  q("RL-R49", "Professional", "Build a city dashboard: trips, completed revenue and average driver rating.", "Join riders to trips, group by rider city.", `SELECT r.city, COUNT(*) AS trips, SUM(CASE WHEN t.status = 'completed' THEN t.fare ELSE 0 END) AS revenue, ROUND(AVG(t.surge_multiplier), 2) AS avg_surge FROM riders r JOIN trips t ON t.rider_id = r.rider_id GROUP BY r.city ORDER BY revenue DESC, r.city;`),
  q("RL-R50", "Professional", "Show trips and completed revenue by weekday.", "DAYNAME(trip_date) gives the weekday name; group by it.", `SELECT DAYNAME(trip_date) AS weekday, COUNT(*) AS trips, SUM(CASE WHEN status = 'completed' THEN fare ELSE 0 END) AS revenue FROM trips GROUP BY weekday ORDER BY revenue DESC, weekday;`),
];

export const ridesModule: RealLifeModuleConfig = {
  number: 10,
  slug: "real-life-rides",
  shortTitle: "Real life: ride-hailing",
  title: "Real life database practice: ride-hailing (50 SQL problems)",
  summary: "Practise 50 SQL problems on a 2,000-trip ride-hailing database — drivers, riders, fares, surge and city performance, checked in your browser.",
  dataset: "rides",
  context:
    "City Rides is a fictional ride-hailing service: 200 drivers, 500 riders and 2,000 trips. A trip records the rider, the driver (or NULL when nobody accepted), distance, fare, status, payment mode and surge multiplier. Cancellations and no-driver trips carry a fare of 0, so revenue questions must filter them out.",
  tables: [
    { name: "drivers", grain: "one driver", columns: "driver_id, driver_name, city, vehicle_type, rating, joined_on" },
    { name: "riders", grain: "one rider", columns: "rider_id, rider_name, city, signup_date, wallet_balance" },
    { name: "trips", grain: "one requested trip", columns: "trip_id, rider_id, driver_id, trip_date, distance_km, fare, status, payment_mode, surge_multiplier" },
  ],
  outcomes: [
    "Handle optional relationships such as a missing driver",
    "Separate completed revenue from cancelled and unmatched trips",
    "Report per city, vehicle type and month",
    "Use window functions for rankings and month-over-month change",
  ],
  quickAnswer: {
    question: "What does the ride-hailing practice database contain?",
    answer:
      "200 drivers, 500 riders and 2,000 trips across ten cities. Each trip has a rider, an optional driver, distance, fare, status and surge multiplier. Revenue means SUM(fare) over completed trips only — the other statuses store 0. The database is already selected in every problem.",
  },
  guided: {
    heading: "Guided walkthrough: completed revenue by vehicle type",
    intro: "The fare lives on the trip, but the vehicle type lives on the driver, so this needs one join and one filter.",
    steps: [
      "Start from `trips`; one row is one requested trip.",
      "Join `drivers` on driver_id. Unmatched trips have a NULL driver and drop out of an INNER JOIN — which is what we want for revenue.",
      "Filter `status = 'completed'`; cancelled trips store fare 0.",
      "Group by vehicle type, sum the fare and sort.",
    ],
    sql: "SELECT d.vehicle_type, COUNT(*) AS trips, SUM(t.fare) AS revenue FROM drivers d JOIN trips t ON t.driver_id = d.driver_id WHERE t.status = 'completed' GROUP BY d.vehicle_type ORDER BY revenue DESC, d.vehicle_type;",
    explain:
      "The INNER JOIN quietly removes no-driver trips, and the status filter removes cancellations. Both steps matter: without them the average fare per trip would be diluted by zeros.",
  },
  teaches: ["SQL practice", "ride-hailing database", "JOIN", "NULL handling", "GROUP BY", "window functions", "reporting"],
  questions,
  quiz: [
    {
      id: "RL-R-Q1",
      question: "Why can driver_id be NULL on a trip?",
      options: ["The data is corrupt", "No driver accepted the request, so there is no driver to store", "The driver was deleted", "MySQL defaults integers to NULL"],
      correctIndex: 1,
      explanation: "A requested trip can exist before any driver accepts. NULL is the honest value for 'no driver yet'.",
    },
    {
      id: "RL-R-Q2",
      question: "How should cancelled trips affect a revenue report?",
      options: ["Include their fare", "Filter to status = 'completed'", "Divide by two", "Ignore the status column"],
      correctIndex: 1,
      explanation: "Cancelled and no-driver trips store fare 0; including them inflates trip counts and drags averages down.",
    },
    {
      id: "RL-R-Q3",
      question: "What does an INNER JOIN from trips to drivers do to no-driver trips?",
      options: ["Keeps them with NULL driver details", "Drops them", "Duplicates them", "Raises an error"],
      correctIndex: 1,
      explanation: "INNER JOIN keeps only matching rows. Use LEFT JOIN from trips when unmatched trips must stay in the result.",
    },
  ],
  mistakes: [
    {
      wrong: "AVG(fare) over all trips",
      why: "Cancelled and unmatched trips have fare 0, so the average is pulled down and no longer means 'average completed fare'.",
      fix: "Filter status = 'completed' first, or use AVG(CASE WHEN status = 'completed' THEN fare END).",
    },
    {
      wrong: "Counting trips after joining drivers with LEFT JOIN and then COUNT(driver_id)",
      why: "COUNT(column) skips NULLs, so unmatched trips disappear from the count.",
      fix: "Use COUNT(*) to count trips, or COUNT(driver_id) only when you mean 'trips with a driver'.",
    },
    {
      wrong: "Dividing fare by distance without guarding zero",
      why: "A zero distance would make the query fail or return NULL.",
      fix: "Filter to completed trips (all have a positive distance) or wrap the division in NULLIF.",
    },
  ],
  faq: [
    {
      q: "Do I need to install MySQL and import this data?",
      a: "No. The code arena loads the rides database in your browser and preselects it for every problem. Download the .sql script to run the same queries in Workbench.",
    },
    {
      q: "Are the answers checked automatically?",
      a: "Yes. Your query and the reference answer run on fresh copies of the same rows and the results are compared row by row, so any correct query is accepted.",
    },
    {
      q: "Is the ride data real?",
      a: "No. It is fictional and generated from a fixed seed so every learner sees the same rows and the same expected answers.",
    },
  ],
};
