import { pick } from "../bank";
import type { MysqlLesson } from "../types";

export const lesson02: MysqlLesson = {
  slug: "install-connect-mysql",
  shortTitle: "Install MySQL and connect",
  title: "How to install MySQL 8.4 and Workbench and run your first query",
  summary: "Install MySQL Community Server and Workbench on Windows, macOS or Linux, connect on port 3306, and fix the three most common connection errors.",
  module: 1,
  dataset: "none",
  teaches: ["Install MySQL", "MySQL Workbench", "MySQL connection", "Port 3306", "SELECT VERSION()", "MySQL error 1045", "MySQL error 2003"],
  quickAnswer: {
    question: "How do I install MySQL and run my first query?",
    answer:
      "Download MySQL Community Server 8.4 (LTS) and MySQL Workbench from dev.mysql.com, run the installer, set a root password, and keep the server running. In Workbench create a connection to host 127.0.0.1, port 3306, user root, then open a SQL tab and run SELECT VERSION();.",
  },
  outcomes: [
    "Install MySQL Community Server 8.4 and MySQL Workbench on your operating system",
    "Create and test a Workbench connection (host, port, user)",
    "Run SELECT VERSION() and other server checks",
    "Diagnose 'connection refused', 'access denied' and 'no database selected'",
  ],
  sections: [
    {
      heading: "What you are installing",
      body: `You need two pieces of software:

- **MySQL Community Server** — the database itself. It must be *running* for anything to work. Choose **8.4 LTS** (long-term support). Any version from **8.0.16** works for this course; older 8.0 releases ignore CHECK constraints, which lesson 12 uses.
- **MySQL Workbench** — the editor where you type SQL and see results.

Installing only Workbench is the most common beginner mistake: the editor opens, but there is no server to connect to.

Both are free from the official download page, **dev.mysql.com/downloads**. Pick the *Community* editions.`,
      callout: { kind: "tip", text: "No installation possible today (school laptop, no admin rights)? Use the practice editor on every lesson page — it runs in your browser. Install MySQL when you can; the job market expects you to know the real tool." },
    },
    {
      heading: "Install step by step",
      body: "Follow the tab for your operating system. Keep the password you choose somewhere private — you need it every time you connect.",
      tabs: [
        {
          label: "Windows",
          body: `1. Download **MySQL Installer for Windows** (the larger, full package) from dev.mysql.com/downloads/installer.
2. Run it and choose **Custom** (or *Developer Default*). Select **MySQL Server 8.4** and **MySQL Workbench**.
3. Keep **Config Type: Development Computer**, **Port 3306**, and **Use Strong Password Encryption**.
4. Set a **root password**. Optionally add a second user for daily practice.
5. Keep **Configure MySQL Server as a Windows Service** and **Start at System Startup** ticked, so the server runs automatically.
6. Finish, then open MySQL Workbench from the Start menu.`,
        },
        {
          label: "macOS",
          body: `1. Download the **macOS DMG** for MySQL Community Server 8.4 — choose **ARM64** for Apple Silicon (M1–M4) or **x86_64** for Intel Macs.
2. Open the .pkg and follow the installer. Choose **Use Strong Password Encryption** and set the **root password**.
3. Open **System Settings → MySQL** (at the bottom of the sidebar) and check that the server shows *running*. Turn on *Start MySQL when your computer starts up*.
4. Download and install **MySQL Workbench** (separate DMG), then drag it into Applications.
5. With Homebrew you can instead run \`brew install mysql\` and \`brew services start mysql\`.`,
        },
        {
          label: "Linux (Ubuntu)",
          body: `1. Install the server: \`sudo apt update && sudo apt install mysql-server\`.
2. Check it is running: \`sudo systemctl status mysql\` (start it with \`sudo systemctl start mysql\`).
3. Run \`sudo mysql_secure_installation\` to set a password policy and remove test users.
4. On Ubuntu, root logs in through the system account. Create a practice user:
   \`sudo mysql\` then \`CREATE USER 'learner'@'localhost' IDENTIFIED BY 'choose-a-password'; GRANT ALL ON *.* TO 'learner'@'localhost';\`
5. Install Workbench from dev.mysql.com (DEB package) or use the \`mysql\` command-line client.`,
        },
      ],
    },
    {
      heading: "Connect from MySQL Workbench",
      body: `1. On the Workbench home screen, click **+** next to *MySQL Connections*.
2. **Connection Name:** \`Local practice\`. **Hostname:** \`127.0.0.1\`. **Port:** \`3306\`. **Username:** \`root\` (or your practice user).
3. Click **Test Connection** and enter the password. You should see *Successfully made the MySQL connection*.
4. Click **OK**, then click the new tile to open it. A **SQL editor tab** opens.
5. Type a query and press the **lightning bolt** (Execute) or **Ctrl + Enter** (⌘ + Return on a Mac) to run the statement under the cursor.

Results appear in the *Result Grid* below the editor. Errors appear in the *Output* panel at the bottom — always read that panel when something seems to do nothing.`,
    },
    {
      heading: "Check the server you are connected to",
      body: "These read-only checks are the first thing a professional runs on an unfamiliar server. They work before any database is imported:",
      sql: "SELECT VERSION() AS version, CURRENT_USER() AS user_name, @@port AS port, DATABASE() AS selected_db;",
      dataset: "none",
      after: `\`DATABASE()\` returns **NULL** until you choose a database with \`USE\` — that is normal, not an error. On your own server the version will say something like \`8.4.x\` and the user will be \`root@localhost\`.`,
      callout: { kind: "remember", text: "Values starting with @@ are server settings (system variables). Functions such as VERSION() and NOW() end with brackets." },
    },
    {
      heading: "Troubleshooting the three most common errors",
      body: `| Message | What it means | Fix |
|---|---|---|
| **Can't connect to MySQL server on '127.0.0.1:3306' (10061 / 2003)** — *connection refused* | No server is listening there: it is stopped, or the host/port is wrong | Start the service (Windows *Services → MySQL84*, macOS *System Settings → MySQL*, Linux \`sudo systemctl start mysql\`). Check the port in the installer. |
| **Access denied for user 'root'@'localhost' (1045)** | The server is running but the user name or password is wrong | Re-type the password; check Caps Lock; on Ubuntu create a separate user as shown above. |
| **No database selected (1046)** | You ran a query that needs a table before choosing a database | Run \`USE portfolio_retail_lab;\` or double-click the database in the *Schemas* panel. |
| **You have an error in your SQL syntax (1064)** | A typo, a missing comma or a missing quote | Read the text after *near* — the mistake is just before it. |`,
      callout: { kind: "mistake", text: "Never paste your password into a lesson, a screenshot, a shared .sql file or a chat. Connection settings stay on your computer." },
    },
    {
      heading: "Save a connection-check script",
      body: `Create a file called \`00-connection-check.sql\` and keep it in your course folder. Running it at the start of each session proves that the server is up and tells you where you are:`,
      sql: "SELECT 1 AS connection_ok;\nSELECT VERSION() AS version, NOW() AS checked_at;",
      dataset: "none",
      after: "Each statement produces its own result tab in Workbench. In the practice editor they appear one under the other.",
    },
  ],
  mistakes: [
    { wrong: "Installing only MySQL Workbench", why: "Workbench is just an editor. Without MySQL Server running there is nothing to connect to (error 2003).", fix: "Install MySQL Community Server too and make sure its service is running." },
    { wrong: "Running SELECT * FROM customers; straight after connecting", why: "No database is selected yet, so MySQL does not know where the table is (error 1046).", fix: "USE portfolio_retail_lab; first, after importing it in lesson 3." },
    { wrong: "Pressing the plain lightning bolt with several statements and reading only the last tab", why: "Execute runs every statement; each gives its own result tab.", fix: "Use Ctrl + Enter to run just the statement under the cursor while learning." },
  ],
  checkYourself: [
    "What is the difference between MySQL Server and MySQL Workbench?",
    "What does 'connection refused' tell you, compared with 'access denied'?",
    "Why does DATABASE() return NULL right after you connect?",
  ],
  faq: [
    { q: "Which MySQL version should I install in 2026?", a: "MySQL 8.4 LTS. Any 8.0.16 or newer release works for this course; versions before 8.0.16 silently ignore CHECK constraints." },
    { q: "What is the default MySQL port?", a: "3306. Only change it if another program already uses that port, and then use the same port in your Workbench connection." },
    { q: "Can I learn MySQL without installing it?", a: "Yes, to start. Every lesson here has a browser practice editor with the course database built in. Install MySQL later to learn the real tool employers use." },
  ],
  guided: {
    intro: "Run these checks in Workbench after installing — or press Run here to see what the practice editor reports about itself.",
    steps: [
      "Open your Local practice connection in Workbench (or use the editor below).",
      "Run SELECT 1 + 1 AS two; — a result grid proves queries run.",
      "Run the server-check query and note your version and port in your notebook.",
      "Run SELECT * FROM customers; on purpose and read the error: no database is selected yet.",
    ],
    sql: "SELECT VERSION() AS version, CURRENT_USER() AS user_name, @@port AS port;",
    dataset: "none",
    explain: "One row. On your server: your MySQL version (8.0.16+), root@localhost (or your user) and 3306. The practice editor reports its own values.",
  },
  questions: pick("L2", "L2-O1", "L2-O2", "L2-O3", "L2-O4", "L2-N01", "L2-N02", "L2-N03", "L2-N04", "L2-N05", "L2-N06", "L2-N07", "L2-N08", "L2-N09", "L2-N10", "L2-N11", "L2-N12", "L2-N13", "L2-N14", "L2-N15"),
  quiz: [
    { id: "q1", question: "Workbench opens but says it cannot connect to 127.0.0.1:3306. What is the most likely cause?", options: ["Wrong password", "The MySQL Server service is not running", "No database is selected", "A typo in your query"], correctIndex: 1, explanation: "Connection refused (2003) means nothing is listening on that host and port — usually a stopped or missing server." },
    { id: "q2", question: "What does error 1045 'Access denied' mean?", options: ["The server is down", "The user name or password is wrong", "The table does not exist", "The port is blocked"], correctIndex: 1, explanation: "The server answered, so it is running; it rejected the credentials." },
    { id: "q3", question: "What is the default MySQL port?", options: ["80", "1433", "3306", "5432"], correctIndex: 2, explanation: "MySQL listens on 3306 by default. 5432 is PostgreSQL, 1433 is SQL Server." },
    { id: "q4", question: "Right after connecting, SELECT DATABASE(); returns NULL. What does that mean?", options: ["The connection failed", "No database is selected yet", "The server has no databases", "NULL is the database name"], correctIndex: 1, explanation: "DATABASE() shows the selected database. Choose one with USE name; first." },
  ],
};
