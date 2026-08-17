import type { Module } from "../courses";

export const MODULE_6: Module = {
  id: "module-6-professional",
  title: "Module 6: Files, Errors & Professional Python",
  description:
    "Handle files, tame errors, write generators, work with JSON, test like a pro, and build a full CLI project.",
  lessons: [
    {
      id: "file-handling",
      title: "Lesson 20: File Handling & Context Managers",
      shortDescription:
        "Read and write files safely with the with statement, work with paths, and handle CSV data.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Files — Talking to the Disk

Programs that outlive a single run need **persistence** — the ability to save data and read it back later. Files store data between runs: reading config, saving results, processing CSV exports. Without file handling, every program forgets everything when it closes.

Everything from a saved game to a bank statement is just bytes in a file. Python's file tools are the gateway to the disk — and they are surprisingly easy once you master the \`with\` pattern.

#### What You'll Learn in This Lesson

- Open files safely with the \`with\` statement
- Read files line by line, chunk by chunk
- Write and append data
- Handle CSV tabular data with the \`csv\` module
- Work with paths using \`pathlib\`

---

### The with Statement — Safe & Automatic

\`with\` guarantees the file is **closed** even if an error occurs mid-operation:

\`\`\`python
with open("students.txt", "w", encoding="utf-8") as f:
    f.write("Amol,Python\\n")
# File is automatically closed here — even if an error happened above
\`\`\`

**Never** use bare \`open()\` without closing — a leaked open file handle can corrupt data or exhaust system resources. The \`with\` block is the professional standard.

> **Mental model:** the \`with\` block is a safety bubble. When the bubble pops (normally or via an error), the file is closed automatically.

**What's really happening?** The file object implements the **context manager** protocol — \`__enter__\` (opened for you) and \`__exit__\` (always called when the block ends, even on exceptions). That \`__exit__\` is what guarantees the cleanup.

---

### File Modes

| Mode | Meaning | Behavior |
|---|---|---|
| \`"r"\` | Read | File must exist; read-only |
| \`"w"\` | Write | **Overwrites** the whole file |
| \`"a"\` | Append | Adds to the end, keeps existing |
| \`"r+"\` | Read + write | Both, file must exist |
| \`"rb"\` / \`"wb"\` | Binary | Images, audio, pickles |

**Warning:** \`"w"\` erases the file contents the moment you open it. If you want to keep existing data, use \`"a"\` (append).

> **The most common beginner data-loss bug:** opening with \`"w"\` when you meant \`"a"\`. The file is truncated the instant \`open()\` succeeds — before a single line is written. Always double-check your mode.

---

### Reading Patterns

| Pattern | What you get | Best for |
|---|---|---|
| \`f.read()\` | The whole file as one string | Small files |
| \`f.readline()\` | One line at a time | Processing in order |
| \`for line in f:\` | Iterates lines lazily | **Big files** — memory friendly |
| \`f.readlines()\` | List of all lines | When you need the list |

\`\`\`python
with open("students.txt", "r", encoding="utf-8") as f:
    for line in f:               # never loads the whole file
        print("Read:", line.strip())
\`\`\`

For a 10 GB log file, \`for line in f:\` streams it line by line using almost no memory.

> **Mental model:** \`for line in f\` is a lazy conveyor belt — one line exists at a time. \`f.read()\` is a forklift that picks up the entire warehouse at once. Choose the tool that matches your file size.

---

### pathlib — Modern Path Handling

The old \`os.path\` module is clunky. \`pathlib\` gives you clean, cross-platform path objects:

\`\`\`python
from pathlib import Path

data_dir = Path("data")
data_dir.mkdir(exist_ok=True)              # create folder if missing

file_path = data_dir / "students.txt"      # / joins paths cleanly!
print(file_path.exists())                  # True / False
print(file_path.name)                      # students.txt
print(file_path.suffix)                    # .txt
print(file_path.read_text())               # read whole file as text
file_path.write_text("hello\\n")           # write text
\`\`\`

No more \`os.path.join\` string gymnastics — \`/\` does the joining, and it works identically on Windows and macOS/Linux.

---

### CSV — Tabular Files

The \`csv\` module parses commas safely — handling quoted fields, escaping, and newlines inside fields:

\`\`\`python
import csv

# Write
with open("students.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "course"])
    writer.writerow(["Amol", "Python"])

# Read
with open("students.csv", "r", encoding="utf-8") as f:
    rows = list(csv.reader(f))
    print(rows)   # [['name', 'course'], ['Amol', 'Python']]
\`\`\`

> **Always pass \`newline=""\` when writing CSVs** — otherwise you get blank lines between rows on Windows.

**csv.DictReader — CSV with headers as dicts:**

\`\`\`python
with open("students.csv", "r", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        print(row["name"], row["course"])   # access by header name
\`\`\`

Once a CSV row is a dict, every lesson from Module 3 applies: \`.get()\`, comprehensions, grouping — instant data workflow.

---

### Common Mistakes to Avoid

- **Mistake:** Opening a file for \`"w"\` when you meant to append — **Fix:** use \`"a"\` to keep existing data.
- **Mistake:** Forgetting \`encoding="utf-8"\` and getting mojibake — **Fix:** always specify the encoding.
- **Mistake:** Reading a file without \`with\` and leaking handles — **Fix:** always use the \`with\` statement.
- **Mistake:** \`f.read()\` on a giant file and running out of memory — **Fix:** iterate with \`for line in f\`.
- **Mistake:** Forgetting \`newline=""\` when writing CSVs — **Fix:** pass it on every CSV write.

### Professional Tips & Tricks

- Always specify \`encoding='utf-8'\` — avoids cross-platform encoding bugs.
- Never open without \`with\` — a leaked open file handle can corrupt data or exhaust resources.
- Use \`pathlib.Path\` for modern, cross-platform path handling.
- Use \`csv.DictReader\` to turn rows into dicts instantly.
- Check \`Path.exists()\` before reading to avoid \`FileNotFoundError\` (or catch it — Lesson 21).

---

### Key Takeaways

- \`with open(...) as f:\` closes files automatically — always use it.
- \`"r"\` read, \`"w"\` write (overwrites!), \`"a"\` append.
- \`for line in f:\` streams big files memory-efficiently.
- The \`csv\` module handles tabular data safely.
- Always pass \`encoding="utf-8"\` and \`newline=""\` for CSVs.
- \`pathlib.Path\` makes path handling clean and cross-platform.

**Next up:** Exception handling — making your programs fail gracefully.`,
      codeLanguage: "python",
      codeSnippet: `import csv

# Write data to a file
with open("students.txt", "w", encoding="utf-8") as f:
    f.write("Amol,Python\\n")
    f.write("Riya,AI\\n")

# Read it back line by line
with open("students.txt", "r", encoding="utf-8") as f:
    for line in f:
        print("Read:", line.strip())

# Work with CSV properly
with open("students.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "course"])
    writer.writerow(["Amol", "Python"])
    writer.writerow(["Riya", "Data Science"])

with open("students.csv", "r", encoding="utf-8") as f:
    rows = list(csv.reader(f))
    print("CSV rows:", rows)`,
      codeOutput: `Read: Amol,Python
Read: Riya,AI
CSV rows: [['name', 'course'], ['Amol', 'Python'], ['Riya', 'Data Science']]`,
      visualizationTips: [
        "Picture the file as a tape: each read/write moves the head forward.",
        "Trace write mode as 'erase the tape, then record' — that is why 'w' overwrites.",
        "Visualize the with block as a safety bubble that automatically closes the file when popped.",
      ],
      tipsAndTricks: [
        "Always specify encoding='utf-8' — avoids cross-platform encoding bugs.",
        "Never open without with — a leaked open file handle can corrupt data or exhaust resources.",
        "Use pathlib.Path for modern, cross-platform path handling.",
      ],
      practice: [
        {
          id: "practice-append-notes",
          title: "Append & Verify File Persistence",
          difficulty: "Easy",
          task: "Write a program that appends a timestamped log entry to 'activity.log' with utf-8 encoding, then reads and prints all contents.",
          hint: "with open('activity.log', 'a', encoding='utf-8') as f: f.write(...)",
          solution: `from datetime import datetime\n\nwith open("activity.log", "a", encoding="utf-8") as f:\n    f.write(f"[{datetime.now().isoformat()}] User login successful\\n")\n\nwith open("activity.log", "r", encoding="utf-8") as f:\n    print(f.read().strip())`,
        },
        {
          id: "practice-file-word-line-stats",
          title: "File Content & Word Frequency Analyzer",
          difficulty: "Medium",
          task: "Write a script that reads 'document.txt', counting total lines, total words, total characters, and top 3 most common words.",
          hint: "from collections import Counter; Counter(text.split()).most_common(3)",
          solution: `from collections import Counter\n\n# Create sample file\nwith open("document.txt", "w", encoding="utf-8") as f:\n    f.write("Python is fast.\\nPython is readable.\\nPython powers machine learning and data engineering.\\n")\n\nwith open("document.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n\nlines = content.strip().splitlines()\nwords = [w.strip(".,").lower() for w in content.split()]\nprint(f"Total Lines: {len(lines)}")\nprint(f"Total Words: {len(words)}")\nprint(f"Top 3 Words: {Counter(words).most_common(3)}")`,
        },
        {
          id: "practice-csv-student-ledger",
          title: "CSV Student Gradebook Generator & Aggregator",
          difficulty: "Medium",
          task: "Write a program using `csv.DictWriter` and `csv.DictReader` that saves student grade records to 'grades.csv' and computes the class average.",
          hint: "Use csv.DictWriter(f, fieldnames=['name', 'score']); w.writeheader()",
          solution: `import csv\n\nrecords = [\n    {"name": "Amol Shukla", "score": 94},\n    {"name": "Riya Sharma", "score": 88},\n    {"name": "Sam Taylor", "score": 76}\n]\n\nwith open("grades.csv", "w", newline="", encoding="utf-8") as f:\n    writer = csv.DictWriter(f, fieldnames=["name", "score"])\n    writer.writeheader()\n    writer.writerows(records)\n\nwith open("grades.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    scores = [int(row["score"]) for row in reader]\n    avg = sum(scores) / len(scores)\n    print(f"Processed {len(scores)} students. Class Average: {avg:.2f}%")`,
        },
        {
          id: "practice-binary-file-copy",
          title: "Binary Chunk File Copier",
          difficulty: "Medium",
          task: "Write a function `copy_binary(src, dst, chunk_size=4096)` that copies a binary file chunk-by-chunk using 'rb' and 'wb' modes without loading the entire file into memory.",
          hint: "while chunk := f_in.read(chunk_size): f_out.write(chunk)",
          solution: `def copy_binary(src_path: str, dst_path: str, chunk_size: int = 4096):\n    total_bytes = 0\n    with open(src_path, "rb") as f_in, open(dst_path, "wb") as f_out:\n        while chunk := f_in.read(chunk_size):\n            f_out.write(chunk)\n            total_bytes += len(chunk)\n    return total_bytes\n\n# Create sample binary file\nwith open("sample.bin", "wb") as f: f.write(b"\\x00\\xFF" * 1024)\nbytes_copied = copy_binary("sample.bin", "sample_copy.bin")\nprint(f"Copied {bytes_copied} bytes safely in binary chunks.")`,
        },
        {
          id: "practice-atomic-file-writer",
          title: "Atomic File Writer with Crash Protection",
          difficulty: "Hard",
          task: "Write `atomic_save(filepath, content)` that writes data to a temporary file (`.tmp`) first and renames it atomically to prevent file corruption on crash.",
          hint: "import os; write to tmp; os.replace(tmp_path, final_path)",
          solution: `import os\nimport tempfile\n\ndef atomic_save(filepath: str, content: str):\n    dirname = os.path.dirname(filepath) or "."\n    with tempfile.NamedTemporaryFile("w", dir=dirname, delete=False, encoding="utf-8") as tf:\n        tf.write(content)\n        temp_path = tf.name\n    os.replace(temp_path, filepath)\n    print(f"Atomically committed data to: {filepath}")\n\natomic_save("critical_data.txt", "Essential State: Transaction #99281 Complete")`,
        },
        {
          id: "practice-log-stream-searcher",
          title: "Multi-Column Access Log Parser",
          difficulty: "Hard",
          task: "Parse Apache/Nginx-style log lines from a file. Extract IP, timestamp, HTTP method, URL endpoint, and response code into a structured list of dictionaries.",
          hint: "Use regex or line.split() with structured index unpacking.",
          solution: `logs = [\n    '192.168.1.10 - [18/Aug/2026:10:00:01] "GET /api/v1/users HTTP/1.1" 200 450',\n    '10.0.0.45 - [18/Aug/2026:10:00:05] "POST /api/v1/auth HTTP/1.1" 401 120',\n    '172.16.0.8 - [18/Aug/2026:10:00:12] "GET /api/v1/metrics HTTP/1.1" 500 0'\n]\n\nparsed = []\nfor entry in logs:\n    ip = entry.split(" - [")[0]\n    status = int(entry.split()[-2])\n    endpoint = entry.split('"')[1].split()[1]\n    parsed.append({"ip": ip, "endpoint": endpoint, "status": status})\n\nprint("Parsed Access Events:")\nfor p in parsed:\n    flag = "🟢" if p["status"] == 200 else "🔴"\n    print(f"  {flag} [{p['status']}] {p['endpoint']:<18} from {p['ip']}")`,
        },
      ],
    },
    {
      id: "exception-handling",
      title: "Lesson 21: Exception Handling — Fail Gracefully",
      shortDescription:
        "try/except/else/finally, raising your own errors, and writing code that never crashes the user.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Errors Are Information

When Python hits a problem, it **raises an exception**. Unhandled, an exception crashes the program with an ugly traceback. Handled well, your program responds gracefully — this is the difference between professional and fragile software.

Nobody writes bug-free code. Professionals write code that *anticipates* failure and handles it with dignity. Every real program — websites, games, banking apps — leans on exception handling to survive bad input, missing files, and network hiccups.

#### What You'll Learn in This Lesson

- Protect risky code with \`try\`/\`except\`
- Use \`else\` and \`finally\` correctly
- Raise your own errors with \`raise\`
- Create custom exception classes

---

### The try/except Shield

\`try:\` wraps risky code. If an exception occurs, execution jumps to the matching \`except\` block instead of crashing:

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
    result = None
print(result)   # None — program kept running!
\`\`\`

Catch **specific** types whenever possible:

\`\`\`python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That was not a number!")
\`\`\`

| Common exception | Happens when |
|---|---|
| \`ValueError\` | Wrong value (e.g., \`int("abc")\`) |
| \`TypeError\` | Wrong type (e.g., \`"a" + 1\`) |
| \`FileNotFoundError\` | Missing file |
| \`KeyError\` | Missing dict key |
| \`IndexError\` | Index out of range |
| \`ZeroDivisionError\` | Division by zero |

> **Mental model:** \`except\` blocks are labeled boxes that catch only their matching error type. A \`ZeroDivisionError\` box won't catch a \`ValueError\` — each error falls into its own labeled box.

**Catching multiple types — the tuple form:**

\`\`\`python
try:
    value = int(data["price"]) / items
except (KeyError, ValueError, ZeroDivisionError):
    print("Bad data — skipping")
\`\`\`

---

### The Full Structure: try / except / else / finally

\`\`\`python
try:
    risky_operation()
except ValueError as e:
    print("Handled:", e)      # runs ONLY on error
else:
    print("Success!")         # runs ONLY when no error
finally:
    cleanup()                 # ALWAYS runs — even on errors
\`\`\`

| Block | Runs when |
|---|---|
| \`try\` | Always (the risky code) |
| \`except\` | An exception was raised |
| \`else\` | No exception happened |
| \`finally\` | **Always** — for cleanup |

> **Mental model:** \`except\` blocks are labeled boxes that catch only their matching error type. \`finally\` is the janitor — it shows up no matter what.

**Why have both \`else\` and \`finally\`?** \`else\` runs only on *success* — so you don't accidentally handle the success path inside the try where an exception there would be caught too. \`finally\` runs *unconditionally* — the right place for closing files, releasing locks, and cleanup.

---

### Raise Your Own Errors

\`raise\` lets you enforce rules and give users clear feedback:

\`\`\`python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

try:
    set_age(-5)
except ValueError as e:
    print("Caught:", e)   # Caught: Age cannot be negative
\`\`\`

**Why raise instead of returning \`None\`?** A raised error *forces* the caller to deal with the problem — it can't be silently ignored. Returning \`None\` often leads to a \`NoneType\` crash three lines later, far from the real bug. Raise early, raise loudly.

---

### Custom Exceptions — Domain Errors

Subclass \`Exception\` to define errors that mean something in *your* domain:

\`\`\`python
class NotEnoughStock(Exception):
    pass

def order(quantity, stock=5):
    if quantity > stock:
        raise NotEnoughStock(f"Only {stock} left")
    return "Order placed"

try:
    print(order(10))
except NotEnoughStock as e:
    print("Caught:", e)   # Caught: Only 5 left
\`\`\`

Custom exceptions are self-documenting and catchable precisely.

**When to define a custom exception:** when the same error can occur in many places and you want to catch it specifically, or when the error is unique to your domain (a game: \`GameOver\`; a store: \`OutOfStock\`). A hierarchy helps large codebases:

\`\`\`python
class StoreError(Exception): ...
class OutOfStock(StoreError): ...
class InvalidPayment(StoreError): ...
\`\`\`

Now \`except StoreError\` catches every store problem while still letting you handle \`OutOfStock\` specifically.

---

### Common Mistakes to Avoid

- **Mistake:** Bare \`except:\` — **Fix:** it hides bugs and even catches \`KeyboardInterrupt\`. Always name the exception type.
- **Mistake:** Catching \`Exception\` broadly at the top — **Fix:** catch specific types first, broad ones last.
- **Mistake:** Swallowing errors silently (\`except: pass\`) — **Fix:** log or print the message — silent excepts are debugging nightmares.
- **Mistake:** Raising inside \`else\` — **Fix:** \`else\` is for the success path; keep raises in \`try\` or normal flow.
- **Mistake:** Returning \`None\` on error instead of raising — **Fix:** raise early so the caller must handle it.

### Professional Tips & Tricks

- Catch the most specific exception first, broad ones last.
- Never use a bare \`except:\` — it hides bugs and catches even KeyboardInterrupt.
- Log or print the exception message — silent except blocks are debugging nightmares.
- Use \`else\` for success-only logic and \`finally\` for guaranteed cleanup.
- Raise domain-specific custom exceptions so callers can catch precisely.

---

### Key Takeaways

- \`try\`/\`except\` catches errors and keeps the program alive.
- \`else\` runs on success; \`finally\` always runs.
- \`raise ValueError("msg")\` enforces rules with clear feedback.
- Subclass \`Exception\` for domain-specific errors.
- Catch specific types; never use bare \`except\`.
- Raise early and loudly — never let errors vanish silently.

**Next up:** Iterators, generators & itertools — lazy, memory-friendly iteration.`,
      codeLanguage: "python",
      codeSnippet: `# Exception handling in action
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: cannot divide by zero")
        return None
    except TypeError:
        print("Error: numbers required")
        return None
    else:
        print("Division successful")
        return result
    finally:
        print("Cleanup done")

print("10 / 2 =", divide(10, 2))
print("10 / 0 =", divide(10, 0))

# Raising with validation
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age

try:
    set_age(-5)
except ValueError as e:
    print("Caught:", e)`,
      codeOutput: `Division successful
Cleanup done
10 / 2 = 5.0
Error: cannot divide by zero
Cleanup done
10 / 0 = None
Caught: Age cannot be negative`,
      visualizationTips: [
        "Trace the flow: try -> (ok?) else -> finally. try -> (error!) except -> finally.",
        "Picture except blocks as labeled boxes that catch only their matching error type.",
        "Visualize finally as the janitor — it shows up no matter what happens.",
      ],
      tipsAndTricks: [
        "Catch the most specific exception first, broad ones last.",
        "Never use a bare except: — it hides bugs and catches even KeyboardInterrupt.",
        "Log or print the exception message — silent except blocks are debugging nightmares.",
      ],
      practice: [
        {
          id: "practice-safe-type-parser",
          title: "Fault-Tolerant Type Conversion",
          difficulty: "Easy",
          task: "Write `safe_cast(val, target_type, default=None)` that attempts type conversion inside try/except and falls back to default on ValueError/TypeError.",
          hint: "try: return target_type(val) except (ValueError, TypeError): return default",
          solution: `def safe_cast(val, target_type, default=None):\n    try:\n        return target_type(val)\n    except (ValueError, TypeError):\n        return default\n\nprint("Cast '42' -> int:", safe_cast("42", int))\nprint("Cast 'abc' -> int:", safe_cast("abc", int, default=0))\nprint("Cast None -> float:", safe_cast(None, float, default=0.0))`,
        },
        {
          id: "practice-multi-exception-matrix",
          title: "Multi-Tier Error Dispatcher",
          difficulty: "Medium",
          task: "Write a calculator function `safe_divide_lookup(dict_data, key_a, key_b)` handling `KeyError` (missing keys), `ZeroDivisionError` (divide by zero), and `TypeError` gracefully.",
          hint: "Multiple except clauses with distinct user feedback.",
          solution: `def safe_divide_lookup(data: dict, key_a: str, key_b: str):\n    try:\n        num = data[key_a]\n        den = data[key_b]\n        return num / den\n    except KeyError as err:\n        return f"Error: Key {err} is missing in dataset."\n    except ZeroDivisionError:\n        return "Error: Division by zero is undefined."\n    except TypeError as err:\n        return f"Error: Operands must be numeric ({err})."\n\ndata = {"revenue": 12000, "units": 0, "status": "active"}\nprint("Revenue / Units:", safe_divide_lookup(data, "revenue", "units"))\nprint("Revenue / Cost:",  safe_divide_lookup(data, "revenue", "cost"))`,
        },
        {
          id: "practice-custom-exception-hierarchy",
          title: "Domain Exception Hierarchy (`AppError` -> `ValidationError`)",
          difficulty: "Hard",
          task: "Create a base `BankAppError(Exception)` with subclasses `InsufficientBalanceError` and `AccountFrozenError`. Write a withdrawal routine raising them with contextual attributes.",
          hint: "class InsufficientBalanceError(BankAppError): def __init__(self, requested, available): ...",
          solution: `class BankAppError(Exception): pass\n\nclass InsufficientBalanceError(BankAppError):\n    def __init__(self, requested: float, available: float):\n        super().__init__(f"Requested \${requested:.2f} but available balance is only \${available:.2f}.")\n        self.requested = requested\n        self.available = available\n\nclass AccountFrozenError(BankAppError): pass\n\ndef withdraw(balance: float, amount: float, is_frozen: bool):\n    if is_frozen: raise AccountFrozenError("Account is frozen by security policy.")\n    if amount > balance: raise InsufficientBalanceError(amount, balance)\n    return balance - amount\n\ntry:\n    withdraw(100.0, 250.0, is_frozen=False)\nexcept InsufficientBalanceError as err:\n    print(f"Handled Exception: {err}")`,
        },
        {
          id: "practice-try-else-finally-flow",
          title: "Complete Resource Lifecycle (`else` & `finally`)",
          difficulty: "Medium",
          task: "Demonstrate the complete `try -> except -> else -> finally` execution lifecycle in a database transaction simulator.",
          hint: "The else block executes only on success; finally always executes for cleanup.",
          solution: `def process_transaction(amount):\n    print(f"\\n--- Initiating Transaction of \${amount} ---")\n    try:\n        if amount <= 0: raise ValueError("Amount must be positive.")\n        fee = amount * 0.02\n    except ValueError as err:\n        print(f"[EXCEPT] Transaction Failed: {err}")\n    else:\n        print(f"[ELSE] Transaction Succeeded! Fee: \${fee:.2f}")\n    finally:\n        print("[FINALLY] Database connection closed and resources released.")\n\nprocess_transaction(500)\nprocess_transaction(-20)`,
        },
        {
          id: "practice-exception-chaining-from",
          title: "Exception Chaining (`raise ... from err`)",
          difficulty: "Hard",
          task: "Wrap low-level database socket connection errors in high-level `ServiceUnavailableError` using `raise ... from original_error` to preserve tracebacks.",
          hint: "except ConnectionRefusedError as err: raise ServiceUnavailableError('API down') from err",
          solution: `class ServiceUnavailableError(Exception): pass\n\ndef query_external_api():\n    try:\n        # Simulate low-level network failure\n        raise ConnectionRefusedError("TCP handshake timeout at 10.0.0.1:5432")\n    except ConnectionRefusedError as orig_err:\n        raise ServiceUnavailableError("Payment Microservice is temporarily unreachable.") from orig_err\n\ntry:\n    query_external_api()\nexcept ServiceUnavailableError as err:\n    print(f"Top-level: {err}")\n    print(f"Root Cause: {err.__cause__}")`,
        },
        {
          id: "practice-exception-suppress-logger",
          title: "Exception Suppressor & Sentry Reporter Context Manager",
          difficulty: "Hard",
          task: "Build a context manager `SuppressAndLog(*exception_types)` using `__enter__` and `__exit__` that catches specified errors, logs them, and prevents application crashes.",
          hint: "In __exit__, return True if exc_type and issubclass(exc_type, exception_types) else False",
          solution: `class SuppressAndLog:\n    def __init__(self, *exceptions):\n        self.exceptions = exceptions\n\n    def __enter__(self):\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if exc_type and issubclass(exc_type, self.exceptions):\n            print(f"[LOG SUPPRESSED] Silenced non-fatal error: {exc_type.__name__} - {exc_val}")\n            return True  # Suppresses exception!\n        return False\n\nwith SuppressAndLog(ZeroDivisionError, FileNotFoundError):\n    result = 10 / 0\nprint("Program continued running smoothly after suppressed error!")`,
        },
      ],
    },
    {
      id: "iterators-generators",
      title: "Lesson 22: Iterators, Generators & itertools",
      shortDescription:
        "Lazy iteration with yield, memory-efficient pipelines, and the itertools toolbox.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Iteration Without Memory Blowups

A **generator** produces values one at a time using \`yield\`. Unlike a list, it does **not** store everything in memory at once — perfect for huge or even infinite sequences.

This is the lesson where your Python goes from "works on small data" to "handles real-world data". Generators are the reason Python can process files larger than RAM, stream infinite sequences, and feed machine-learning pipelines without memory crashes.

#### What You'll Learn in This Lesson

- Write generators with \`yield\`
- Understand lazy evaluation
- Use generator expressions
- Apply \`itertools\` building blocks

---

### yield — Pause and Resume

When a function contains \`yield\`, calling it returns a generator object. Each \`next()\` runs the code until the next \`yield\`, then **pauses** — saving all local state:

\`\`\`python
def countdown(n):
    while n >= 0:
        yield n
        n -= 1

for num in countdown(3):     # 3 2 1 0
    print(num)
\`\`\`

> **Mental model:** a generator is a book that reveals one page at a time. You read a page, close the book, and reopen exactly where you left off. The bookmark (local state) is saved.

**Watch the difference between \`return\` and \`yield\`:**

| \`return\` | \`yield\` |
|---|---|
| Function ends, one value handed back | Function pauses, value handed out, resumes later |
| Caller gets the value immediately | Caller gets a generator object to pull from |
| State is lost | Local state is saved between yields |

---

### Why Generators Matter

Processing a 10 GB log file: a list loads all 10 GB into memory; a generator streams line by line using kilobytes.

\`\`\`python
big_list = [x * 2 for x in range(10_000_000)]   # builds 10M items — ~89 MB
big_gen  = (x * 2 for x in range(10_000_000))   # builds nothing yet — 112 bytes
\`\`\`

Data pipelines, streaming, and AI training loops all rely on this lazy pattern.

| | List | Generator |
|---|---|---|
| Builds all items | Immediately | Lazily |
| Memory | O(n) | O(1) |
| Can be iterated again | Yes | No (consumed) |
| Indexable | Yes | No |

> **The one-shot rule:** a generator is a conveyor belt, not a warehouse. Once you've taken every item, the belt is empty — iterate again and you get nothing. If you need two passes, convert to a list (and pay the memory cost) or rebuild the generator.

---

### Generator Expressions

\`(x * 2 for x in range(10))\` — a lazy comprehension. Pass it straight into \`sum()\`, \`max()\`, or a loop:

\`\`\`python
total = sum(x * x for x in range(1, 101))   # 338350 — no giant list
\`\`\`

**List vs generator expression — which to use?**

| Use a list \`[...]\` | Use a generator \`(...)\` |
|---|---|
| You need the items multiple times | Single pass is enough |
| You need indexing | Passing to sum/max/min/any |
| Small data | Large or infinite data |
| You need to inspect the result | You only need the aggregate |

---

### itertools — The Toolbox

\`itertools\` ships with powerful iteration building blocks:

| Tool | What it does | Example |
|---|---|---|
| \`islice(gen, n)\` | Take the first n items | Peek at infinite generators |
| \`chain(a, b)\` | Combine sequences | \`list(chain([1,2],[3,4]))\` |
| \`count()\` | Infinite counter | \`count(10, 2)\` → 10, 12, 14... |
| \`cycle(seq)\` | Repeat forever | \`cycle("AB")\` → A B A B... |
| \`product(a, b)\` | Cartesian product | \`product("AB", [1,2])\` |
| \`groupby(data)\` | Group consecutive items | Log aggregation |

\`\`\`python
from itertools import islice, chain
print(list(islice((x for x in range(100) if x % 2 == 0), 5)))  # first 5 evens
print(list(chain([1, 2], [3, 4])))                              # [1, 2, 3, 4]
\`\`\`

**Peeking at an infinite sequence safely:**

\`\`\`python
from itertools import count, islice
evens = count(0, 2)                          # 0, 2, 4, 6, ... forever
print(list(islice(evens, 5)))                # [0, 2, 4, 6, 8] — take 5, no crash
\`\`\`

> **Mental model:** \`islice\` is a "take n items and stop" guard — the only safe way to look at an infinite generator.

---

### Real-World Generator Patterns

- **Reading huge files:** \`for line in open("big.log")\` — one line in memory at a time (Lesson 20).
- **API pagination:** a generator that fetches the next page only when asked.
- **Infinite data:** \`count()\`, \`cycle()\` for round-robin load balancing and game logic.
- **Pipelines:** chain generators — \`clean(parse(raw(f)))\` — each stage lazy, total memory O(1).

---

### Common Mistakes to Avoid

- **Mistake:** Iterating a generator twice and getting nothing the second time — **Fix:** generators are one-shot; rebuild or convert to a list if you need two passes.
- **Mistake:** Mixing \`yield\` and \`return value\` in the same function — **Fix:** in a generator, \`return\` ends iteration (and \`return value\` is invalid); use \`yield\` for values.
- **Mistake:** Materializing huge lists when a generator would do — **Fix:** reach for \`(expr for ...)\` or \`itertools\`.
- **Mistake:** Forgetting the parentheses in a generator expression passed to a function — **Fix:** \`sum(x for x in ...)\` is fine without extra parens when it's the only argument.
- **Mistake:** Calling \`len()\` or indexing a generator — **Fix:** generators have no length and no indexes; convert to a list first if you need them.

### Professional Tips & Tricks

- Use generators for file lines, API pagination, and any stream — never materialize huge lists.
- Prefer \`(expr for ...)\` over \`[expr for ...]\` when passing to sum/max/any.
- \`itertools.islice\` lets you peek at infinite generators safely.
- Chain lazy stages into pipelines: each stage yields, total memory stays O(1).
- Remember the one-shot rule: rebuild generators for a second pass.

---

### Key Takeaways

- \`yield\` creates a lazy, stateful generator.
- Generators use O(1) memory and are one-shot.
- Generator expressions \`(expr for ...)\` feed into \`sum\`/\`max\`/\`any\`.
- \`itertools\` provides \`islice\`, \`chain\`, \`product\`, and more.
- \`islice\` makes infinite generators safe to peek at.

**Next up:** JSON & working with real-world data.`,
      codeLanguage: "python",
      codeSnippet: `# Generator: lazy Fibonacci sequence
def fibonacci(limit):
    a, b = 0, 1
    while a <= limit:
        yield a
        a, b = b, a + b

print("Fibonacci up to 50:")
for num in fibonacci(50):
    print(num, end=" ")
print()

# Memory comparison
big_list = [x * 2 for x in range(10_000_000)]   # builds 10M items
big_gen  = (x * 2 for x in range(10_000_000))   # builds nothing yet
import sys
print("List size (MB):", sys.getsizeof(big_list) / 1e6)
print("Generator size (bytes):", sys.getsizeof(big_gen))

# itertools tools
from itertools import islice, chain
print("First 5 evens:", list(islice((x for x in range(100) if x % 2 == 0), 5)))
print("Chained:", list(chain([1, 2], [3, 4])))`,
      codeOutput: `Fibonacci up to 50:
0 1 1 2 3 5 8 13 21 34
List size (MB): 89.5
Generator size (bytes): 112
Chained: [1, 2, 3, 4]`,
      visualizationTips: [
        "Picture yield as 'pause and bookmark' — next() reopens the book at the bookmark.",
        "Visualize a generator as a water pipe: only the current drop exists at any moment.",
        "Compare sys.getsizeof(list) vs generator to SEE the memory difference.",
      ],
      tipsAndTricks: [
        "Use generators for file lines, API pagination, and any stream — never materialize huge lists.",
        "Prefer (expr for ...) over [expr for ...] when passing to sum/max/any.",
        "itertools.islice lets you peek at infinite generators safely.",
      ],
      practice: [
        {
          id: "practice-stepped-range-generator",
          title: "Stepped Floating Point Range Generator",
          difficulty: "Easy",
          task: "Write a generator `frange(start, stop, step)` that yields floating point values from start up to (but not including) stop.",
          hint: "while curr < stop: yield round(curr, 4); curr += step",
          solution: `def frange(start: float, stop: float, step: float = 0.1):\n    curr = start\n    while curr < stop:\n        yield round(curr, 4)\n        curr += step\n\nprint("frange(0.0, 1.0, 0.25):", list(frange(0.0, 1.0, 0.25)))`,
        },
        {
          id: "practice-infinite-primes-stream",
          title: "Infinite Prime Number Stream Generator",
          difficulty: "Medium",
          task: "Write an infinite generator `infinite_primes()` that yields prime numbers endlessly on demand. Use `itertools.islice` to take the first 10 primes.",
          hint: "import itertools; while True: if is_prime(candidate): yield candidate; candidate += 1",
          solution: `import itertools\n\ndef infinite_primes():\n    def is_prime(n):\n        if n < 2: return False\n        for i in range(2, int(n ** 0.5) + 1):\n            if n % i == 0: return False\n        return True\n    \n    num = 2\n    while True:\n        if is_prime(num):\n            yield num\n        num += 1\n\nfirst_10 = list(itertools.islice(infinite_primes(), 10))\nprint(f"First 10 Primes: {first_10}")`,
        },
        {
          id: "practice-memory-safe-chunk-reader",
          title: "Memory-Safe Large File Line Batcher",
          difficulty: "Medium",
          task: "Write a generator `chunked_reader(lines, chunk_size=3)` that yields batches of lines as list chunks to process large logs without loading all into RAM.",
          hint: "batch = []; for line in lines: batch.append(line); if len(batch) == chunk_size: yield batch; batch = []",
          solution: `def chunked_reader(iterable, chunk_size: int = 3):\n    batch = []\n    for item in iterable:\n        batch.append(item)\n        if len(batch) == chunk_size:\n            yield batch\n            batch = []\n    if batch:\n        yield batch\n\nsimulated_stream = [f"Log #{i}" for i in range(1, 9)]\nfor idx, chunk in enumerate(chunked_reader(simulated_stream, 3), 1):\n    print(f"Batch #{idx}: {chunk}")`,
        },
        {
          id: "practice-itertools-data-pipeline",
          title: "Itertools Data Pipeline (`groupby`, `chain`, `accumulate`)",
          difficulty: "Hard",
          task: "Process sales records by category using `itertools.groupby`: sort by category, calculate running cumulative revenue using `itertools.accumulate`, and chain totals.",
          hint: "from itertools import groupby, accumulate; groupby requires prior sorting by the group key.",
          solution: `from itertools import groupby, accumulate\n\nsales = [\n    ("Electronics", 250),\n    ("Books", 30),\n    ("Electronics", 120),\n    ("Books", 45),\n    ("Clothing", 80)\n]\nsorted_sales = sorted(sales, key=lambda x: x[0])\n\nprint("Grouped & Accumulated Revenue:")\nfor cat, items in groupby(sorted_sales, key=lambda x: x[0]):\n    amounts = [amt for _, amt in items]\n    cum_sums = list(accumulate(amounts))\n    print(f"[{cat:<11}] Amounts: {amounts} -> Running Totals: {cum_sums}")`,
        },
        {
          id: "practice-custom-iterator-class",
          title: "Custom Bidirectional Ring Buffer Iterator Class",
          difficulty: "Hard",
          task: "Build `RingIterator` class with `__iter__` and `__next__` that continuously cycles through an array of server nodes infinitely.",
          hint: "def __next__(self): val = self.items[self.idx]; self.idx = (self.idx + 1) % len(self.items); return val",
          solution: `class RingIterator:\n    def __init__(self, servers: list[str]):\n        self.servers = servers\n        self.index = 0\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if not self.servers: raise StopIteration\n        node = self.servers[self.index]\n        self.index = (self.index + 1) % len(self.servers)\n        return node\n\ncluster = RingIterator(["node-us-east", "node-us-west", "node-eu-central"])\nprint("Load Balancer Round-Robin Dispatches:")\nfor req_id in range(1, 6):\n    print(f"  Request #{req_id} -> Dispatched to: {next(cluster)}")`,
        },
        {
          id: "practice-coroutine-filter-pipeline",
          title: "Generator Coroutine Consumer (`yield` with `send`)",
          difficulty: "Hard",
          task: "Implement a generator coroutine `pattern_matcher(keyword)` that uses `(yield)` inside an infinite loop to receive text events via `.send()` and prints matches.",
          hint: "def pattern_matcher(term): while True: text = (yield); if term in text: print(f'Matched: {text}')",
          solution: `def pattern_matcher(keyword: str):\n    print(f"[Matcher Initialized for: '{keyword}']")\n    matches_found = 0\n    try:\n        while True:\n            text = (yield matches_found)\n            if text and keyword.lower() in text.lower():\n                matches_found += 1\n                print(f"  🎯 Found '{keyword}' in: '{text}' (Total: {matches_found})")\n    except GeneratorExit:\n        print("[Matcher Closed]")\n\nstream_filter = pattern_matcher("ERROR")\nnext(stream_filter)  # Prime the coroutine\nstream_filter.send("INFO: System initialized")\nstream_filter.send("ERROR: Database connection timeout")\nstream_filter.send("WARN: High memory usage")\nstream_filter.send("ERROR: Failed to save transaction")\nstream_filter.close()`,
        },
      ],
    },
    {
      id: "json-data",
      title: "Lesson 23: JSON & Working with Data",
      shortDescription:
        "Serialize Python objects to JSON, load API data, and build real-world data workflows.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### JSON — The Internet's Language

**JSON** (JavaScript Object Notation) is the universal format for APIs, configs, and data files. It looks almost exactly like Python dicts and lists — strings in double quotes, booleans lowercase (\`true\`/\`false\`), and \`null\` instead of \`None\`.

Nearly every website you use talks JSON. When a browser fetches data from a server, when a mobile app syncs, when a machine-learning model receives training config — JSON is the lingua franca. Learning it opens the door to consuming real-world data.

#### What You'll Learn in This Lesson

- Convert between Python and JSON with the four functions
- Pretty-print JSON for readability
- Save and load JSON files
- Understand the type mapping

---

### The Four Functions

| Function | Direction | Example |
|---|---|---|
| \`json.dumps(data)\` | Python → JSON **string** | \`json.dumps({"a": 1})\` |
| \`json.loads(text)\` | JSON string → Python | \`json.loads('{"a": 1}')\` |
| \`json.dump(data, f)\` | Python → JSON **file** | \`json.dump(d, open("f.json","w"))\` |
| \`json.load(f)\` | JSON file → Python | \`json.load(open("f.json"))\` |

Remember: **d**ump goes to a string/file (serialize), **l**oad parses from a string/file (deserialize).

> **Memory trick:** the "s" versions work on **s**trings; the no-s versions work on file objects. \`dumps\`/\`loads\` ↔ strings; \`dump\`/\`load\` ↔ files.

---

### Type Mapping

| Python | JSON |
|---|---|
| \`dict\` | object \`{...}\` |
| \`list\` | array \`[...]\` |
| \`str\` | string |
| \`int\` / \`float\` | number |
| \`True\` / \`False\` | \`true\` / \`false\` |
| \`None\` | \`null\` |

**Not serializable by default:** \`set\`, \`tuple\`, custom objects, \`datetime\`. You'll get a \`TypeError\` — convert them first or pass a \`default=\` function.

**The \`default=\` escape hatch:**

\`\`\`python
import json
from datetime import datetime

data = {"created": datetime.now()}

def convert(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    raise TypeError(f"Not serializable: {obj!r}")

print(json.dumps(data, default=convert))  # {"created": "2026-08-11T..."}
\`\`\`

---

### Pretty Printing

\`json.dumps(data, indent=2)\` makes output readable — essential for debugging and sharing:

\`\`\`python
import json

student = {"name": "Riya", "courses": ["Python", "AI"], "active": True}
print(json.dumps(student, indent=2))
\`\`\`

\`\`\`json
{
  "name": "Riya",
  "courses": [
    "Python",
    "AI"
  ],
  "active": true
}
\`\`\`

Other useful options: \`sort_keys=True\` (sorted keys), \`ensure_ascii=False\` (keep non-English characters readable).

---

### The Real-World Flow

\`\`\`python
# 1. API returns JSON text
api_response = '{"status": "ok", "data": [1, 2, 3]}'

# 2. Parse it into Python
payload = json.loads(api_response)
print(sum(payload["data"]))   # 6

# 3. Work with dicts/lists...
# 4. Save the result
with open("result.json", "w", encoding="utf-8") as f:
    json.dump(payload, f, indent=2)
\`\`\`

This **parse → transform → save** pipeline is the backbone of every data engineer's day.

> **Mental model:** \`dumps\` packs a suitcase (Python → JSON); \`loads\` unpacks it (JSON → Python). Draw the nesting outside-in: \`{\` = crate, \`[\` = shelf.

**Fetching live JSON from an API (with \`requests\`):**

\`\`\`python
import requests
import json

response = requests.get("https://api.github.com/users/amolshukla")
data = response.json()          # requests parses JSON for you
print(data["public_repos"])     # work with it as plain Python
\`\`\`

---

### Validating with try/except

Real-world JSON is not always well-formed. Professional code wraps parsing:

\`\`\`python
import json

raw = '{"broken": '   # invalid JSON
try:
    data = json.loads(raw)
except json.JSONDecodeError as e:
    print("Bad JSON:", e)
\`\`\`

This is the Lesson 21 pattern applied to data — one line of protection prevents a crash on every bad payload.

---

### Common Mistakes to Avoid

- **Mistake:** \`json.dumps({1, 2, 3})\` (a set) — **Fix:** TypeError; convert to a list first.
- **Mistake:** Forgetting that JSON booleans are \`true\`/\`false\` and \`null\` — **Fix:** Python parses them to \`True\`/\`False\`/\`None\` automatically.
- **Mistake:** Double-encoding — calling \`json.dumps\` on an already-dumped string — **Fix:** dump once, at the end.
- **Mistake:** \`json.load\` vs \`json.loads\` confusion — **Fix:** \`loads\` = string; \`load\` = file.
- **Mistake:** Not handling \`JSONDecodeError\` on external data — **Fix:** wrap \`loads\` in try/except.

### Professional Tips & Tricks

- Use \`json.dumps(..., ensure_ascii=False)\` to keep non-English characters readable.
- Wrap \`json.loads\` in \`try/except json.JSONDecodeError\` for robust parsing.
- Flatten nested JSON with helper functions before analysis — pandas can take dicts directly.
- Use \`default=\` to serialize dates and custom objects.
- Use \`indent=2\` and \`sort_keys=True\` for shareable, readable output.

---

### Key Takeaways

- Four functions: \`dumps\`/\`loads\` (strings) and \`dump\`/\`load\` (files).
- Python and JSON map cleanly: dict↔object, list↔array, True↔true, None↔null.
- \`indent=2\` pretty-prints; \`ensure_ascii=False\` keeps Unicode readable.
- Sets, tuples, and dates need conversion before serialization.
- Wrap parsing in try/except for robustness.

**Next up:** Testing & debugging — writing code that proves itself.`,
      codeLanguage: "python",
      codeSnippet: `import json

# Python -> JSON string
student = {"name": "Riya", "courses": ["Python", "AI"], "active": True}
json_text = json.dumps(student, indent=2)
print("JSON output:")
print(json_text)

# JSON string -> Python
parsed = json.loads(json_text)
print("Parsed name:", parsed["name"])
print("First course:", parsed["courses"][0])

# Save to a file and read back
with open("student.json", "w", encoding="utf-8") as f:
    json.dump(student, f, indent=2)

with open("student.json", "r", encoding="utf-8") as f:
    restored = json.load(f)
print("Round-trip equal:", restored == student)`,
      codeOutput: `JSON output:
{
  "name": "Riya",
  "courses": [
    "Python",
    "AI"
  ],
  "active": true
}
Parsed name: Riya
First course: Python
Round-trip equal: True`,
      visualizationTips: [
        "Trace dumps as 'pack a suitcase' and loads as 'unpack a suitcase'.",
        "Draw the nesting: { } = crate, [ ] = shelf — read from outside in.",
        "Print with indent=2 to literally see the structure — formatting is visualization.",
      ],
      tipsAndTricks: [
        "Use json.dumps(..., ensure_ascii=False) to keep non-English characters readable.",
        "Wrap json.loads in try/except json.JSONDecodeError for robust parsing.",
        "Flatten nested JSON with helper functions before analysis — pandas can take dicts directly.",
      ],
      practice: [
        {
          id: "practice-json-settings-sync",
          title: "Application State JSON Persistence Engine",
          difficulty: "Easy",
          task: "Write a program that initializes an application settings dict, serializes it to 'settings.json' with `indent=4`, then loads it back and modifies a preference.",
          hint: "json.dump(config, f, indent=4) then json.load(f)",
          solution: `import json\n\nsettings = {\n    "app_name": "Python Learning Hub",\n    "version": "2.4.0",\n    "preferences": {\n        "theme": "nord-dark",\n        "editor_font_size": 14,\n        "auto_save": True\n    }\n}\n\n# Serialize\nwith open("settings.json", "w", encoding="utf-8") as f:\n    json.dump(settings, f, indent=4)\n\n# Deserialize and update\nwith open("settings.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\nloaded["preferences"]["editor_font_size"] = 16\n\nprint(f"Loaded App Name: {loaded['app_name']}")\nprint(f"Updated Font Size: {loaded['preferences']['editor_font_size']}px")`,
        },
        {
          id: "practice-rest-api-response-parser",
          title: "Complex Nested REST API Response Parser",
          difficulty: "Medium",
          task: "Parse a simulated GitHub API JSON response string containing repository items: extract repo names, star counts, and filter repos with over 500 stars.",
          hint: "json.loads(api_response_str); filter with comprehension",
          solution: `import json\n\napi_payload = '''\n{\n  "total_count": 3,\n  "items": [\n    {"name": "fastapi", "stars": 65000, "owner": {"login": "tiangolo"}},\n    {"name": "tiny-project", "stars": 42, "owner": {"login": "dev1"}},\n    {"name": "pydantic", "stars": 19500, "owner": {"login": "pydantic"}}\n  ]\n}\n'''\n\ndata = json.loads(api_payload)\npopular = [\n    f"{item['owner']['login']}/{item['name']} (⭐ {item['stars']:,})"\n    for item in data["items"]\n    if item["stars"] > 500\n]\nprint("Popular Repositories (>500 stars):")\nfor r in popular:\n    print(f"  -> {r}")`,
        },
        {
          id: "practice-custom-json-datetime-encoder",
          title: "Custom JSON Encoder for Datetime & Set Objects",
          difficulty: "Medium",
          task: "Subclass `json.JSONEncoder` to serialize Python objects that default JSON cannot handle (`datetime`, `set`, `Decimal`).",
          hint: "class CustomEncoder(json.JSONEncoder): def default(self, obj): if isinstance(obj, datetime): return obj.isoformat()",
          solution: `import json\nfrom datetime import datetime, timezone\nfrom decimal import Decimal\n\nclass EnhancedJSONEncoder(json.JSONEncoder):\n    def default(self, obj):\n        if isinstance(obj, datetime):\n            return obj.isoformat()\n        if isinstance(obj, set):\n            return sorted(list(obj))\n        if isinstance(obj, Decimal):\n            return float(obj)\n        return super().default(obj)\n\npayload = {\n    "timestamp": datetime.now(timezone.utc),\n    "unique_roles": {"admin", "editor", "analyst"},\n    "total_amount": Decimal("149.95")\n}\n\njson_out = json.dumps(payload, cls=EnhancedJSONEncoder, indent=2)\nprint("Custom Serialized JSON:\\n", json_out)`,
        },
        {
          id: "practice-streaming-jsonlines-ndjson",
          title: "High-Throughput JSONL (NDJSON) Stream Parser",
          difficulty: "Hard",
          task: "Read a simulated `.jsonl` stream where each line is an independent JSON object. Aggregate metrics without reading the entire dataset into memory.",
          hint: "for line in lines: record = json.loads(line.strip())",
          solution: `import json\n\njsonl_data = '''{"event": "page_view", "user": "usr_1", "duration": 4.5}\n{"event": "purchase", "user": "usr_2", "duration": 12.0}\n{"event": "page_view", "user": "usr_3", "duration": 2.1}\n{"event": "purchase", "user": "usr_1", "duration": 8.4}'''\n\ntotal_purchases = 0\ntotal_duration = 0.0\n\nfor line in jsonl_data.strip().splitlines():\n    record = json.loads(line)\n    if record.get("event") == "purchase":\n        total_purchases += 1\n    total_duration += record.get("duration", 0.0)\n\nprint(f"Total Purchases Recorded: {total_purchases}")\nprint(f"Total Session Duration:    {total_duration:.1f}s")`,
        },
        {
          id: "practice-deep-json-path-query",
          title: "JSONPath-Style Deep Key Lookup Engine",
          difficulty: "Hard",
          task: "Write a function `json_get(data, 'user.profile.address.city', default=None)` that navigates arbitrarily nested dicts using dot notation safely.",
          hint: "keys = path.split('.'); curr = data; for k in keys: curr = curr.get(k, {})",
          solution: `def json_get(data: dict, path: str, default=None):\n    keys = path.split(".")\n    curr = data\n    for k in keys:\n        if not isinstance(curr, dict) or k not in curr:\n            return default\n        curr = curr[k]\n    return curr\n\npayload = {\n    "org": {\n        "departments": {\n            "engineering": {\n                "lead": "Amol Shukla",\n                "headcount": 42\n            }\n        }\n    }\n}\n\nprint("Engineering Lead:", json_get(payload, "org.departments.engineering.lead"))\nprint("Design Lead:     ", json_get(payload, "org.departments.design.lead", default="Vacant"))`,
        },
        {
          id: "practice-json-schema-guard",
          title: "Dynamic JSON Schema Contract Validator",
          difficulty: "Hard",
          task: "Build a lightweight schema validator `validate_json_schema(payload, schema)` that verifies required fields and expected data types (`int`, `str`, `list`).",
          hint: "schema = {'id': int, 'username': str, 'roles': list}; check isinstance(payload[k], exp_type)",
          solution: `def validate_json_schema(payload: dict, schema: dict) -> tuple[bool, list[str]]:\n    errors = []\n    for field, expected_type in schema.items():\n        if field not in payload:\n            errors.append(f"Missing required field '{field}'.")\n        elif not isinstance(payload[field], expected_type):\n            errors.append(f"Field '{field}' expected {expected_type.__name__}, got {type(payload[field]).__name__}.")\n    return len(errors) == 0, errors\n\nuser_schema = {"id": int, "username": str, "roles": list, "active": bool}\npayload_sample = {"id": 101, "username": "amol25", "roles": "admin", "active": True}\n\nis_valid, issues = validate_json_schema(payload_sample, user_schema)\nprint(f"Validation Passed? {is_valid}")\nprint(f"Schema Violations: {issues}")`,
        },
      ],
    },
    {
      id: "testing-debugging",
      title: "Lesson 24: Testing & Debugging Like a Pro",
      shortDescription:
        "assert, pytest, the debugger, and logging — write code that proves itself.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Tests Are Not Optional

A professional program ships with tests that **prove** it works. Every time you change code, tests catch what you broke — instantly. Without tests, you are trusting "it worked when I tried it once".

This is the mindset shift that separates hobby code from production software. Companies ship with test suites that run on every commit — a failing test blocks the release. This lesson gives you that professional toolkit.

#### What You'll Learn in This Lesson

- Write quick checks with \`assert\`
- Build real tests with pytest
- Debug interactively with \`breakpoint()\`
- Log professionally with the \`logging\` module

---

### assert — The Quick Check

\`assert condition, "message"\` raises \`AssertionError\` if the condition is False:

\`\`\`python
assert len("python") == 6, "expected six characters"
print("Assertion passed")
\`\`\`

Great for sanity checks and quick validations. But asserts vanish with \`python -O\` — for real tests, use pytest.

**Assertions are the grammar of tests.** Every test you will ever write is, at heart, a collection of assertions: "this equals that", "this raises that", "this is True".

---

### pytest — The Professional Standard

Tests are plain functions starting with \`test_\` containing asserts. \`pytest\` discovers and runs them automatically:

\`\`\`python
# test_price.py
def price_after_tax(price, tax_rate=0.18):
    return round(price * (1 + tax_rate), 2)

def test_normal_price():
    assert price_after_tax(100) == 118.0

def test_zero_price():
    assert price_after_tax(0) == 0.0

def test_high_tax():
    assert price_after_tax(100, 0.5) == 150.0
\`\`\`

Run with \`pytest\`:

\`\`\`text
collected 3 items
test_price.py .....                                               [100%]
============================= 3 passed in 0.02s =============================
\`\`\`

Useful flags: \`pytest -v\` (verbose), \`pytest -k name\` (run a subset), \`pytest -x\` (stop on first failure).

> **Mental model:** each test is a referee with a checklist — green for pass, red for fail. The suite is your safety net: change code, run tests, and the net catches any broken behavior instantly.

**Testing exceptions with pytest:**

\`\`\`python
import pytest

def test_division_by_zero():
    with pytest.raises(ZeroDivisionError):
        result = 1 / 0
\`\`\`

---

### The Debugger — Better than print()

\`print()\` debugging works, but the interactive debugger is far more powerful:

\`\`\`python
def mystery(a, b):
    result = a * b
    breakpoint()      # execution PAUSES here
    return result + 1
\`\`\`

When \`breakpoint()\` runs, you drop into an interactive prompt:

| Command | Meaning |
|---|---|
| \`n\` | Next line |
| \`s\` | Step into a function |
| \`c\` | Continue to the next breakpoint |
| \`p var\` | Print a variable's value |
| \`q\` | Quit |

> **Mental model:** \`breakpoint()\` is a pause button that freezes the program mid-flight so you can inspect every variable.

**Why the debugger beats \`print()\`:** you can inspect *any* variable at the pause point without editing code and re-running; you can step line by line; and you can continue from where you stopped. \`print()\` requires guessing what to print and re-running each time.

---

### Logging — Professional Print

The \`logging\` module writes timestamped, leveled messages to console or files — far more useful than \`print()\` in production:

\`\`\`python
import logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

logging.debug("details only during development")
logging.info("normal flow events")
logging.warning("something might be wrong")
logging.error("something failed")
\`\`\`

Levels (increasing severity): \`DEBUG\` < \`INFO\` < \`WARNING\` < \`ERROR\` < \`CRITICAL\`.

**Why logging over print in production:**

| print() | logging |
|---|---|
| Screen only | Console, files, network |
| No levels | DEBUG → CRITICAL levels |
| No timestamps | Timestamps & formats built in |
| No easy disabling | \`level=\` filters whole categories |
| One-off | Structured, searchable output |

---

### TDD in One Sentence

**Write the test FIRST** (it fails), then write the minimum code to make it pass — red, green, refactor.

The loop:

1. **Red:** write a failing test for the behavior you want.
2. **Green:** write the smallest code that makes it pass.
3. **Refactor:** clean up, keeping the tests green.

This forces you to think about *behavior* before *implementation* — and guarantees every feature is covered.

---

### Common Mistakes to Avoid

- **Mistake:** Testing the implementation instead of the behavior — **Fix:** assert on outputs and effects, not internals.
- **Mistake:** Only testing the happy path — **Fix:** test edge cases: zero, negatives, empty inputs, maximums.
- **Mistake:** \`print()\` debugging in production — **Fix:** use the \`logging\` module.
- **Mistake:** A test that asserts nothing — **Fix:** every test needs at least one \`assert\` (or \`pytest.raises\`).
- **Mistake:** Tests that depend on other tests or on global state — **Fix:** keep tests independent and deterministic.

### Professional Tips & Tricks

- Name tests descriptively: \`test_withdraw_insufficient_funds()\`.
- Test edge cases: zero, negatives, empty inputs, and the maximums.
- Use \`pytest -v\` for verbose output and \`pytest -k keyword\` to run a subset.
- Use \`breakpoint()\` + \`n\`/\`s\`/\`p\` instead of print-debugging.
- Replace production \`print()\` with \`logging\` — leveled, timestamped, filterable.

---

### Key Takeaways

- \`assert\` gives quick checks; pytest gives professional test suites.
- \`breakpoint()\` + \`n\`/\`s\`/\`p\` beats print-debugging.
- \`logging\` with levels is the production-grade replacement for print.
- TDD: write the failing test first, then make it pass.
- Test behavior, not implementation — and cover edge cases.

**Next up:** The capstone — build a complete CLI expense tracker.`,
      codeLanguage: "python",
      codeSnippet: `# A function we want to trust
def price_after_tax(price, tax_rate=0.18):
    """Return price plus tax, rounded to 2 decimals."""
    return round(price * (1 + tax_rate), 2)

# Tests using pytest style (run with: pytest)
def test_normal_price():
    assert price_after_tax(100) == 118.0

def test_zero_price():
    assert price_after_tax(0) == 0.0

def test_high_tax():
    assert price_after_tax(100, 0.5) == 150.0

# Logging instead of print
import logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logging.info("Calculating price for 100")
print("Result:", price_after_tax(100))`,
      codeOutput: `INFO: Calculating price for 100
Result: 118.0

# Running pytest:
# ============================ test session starts ============================
# collected 3 items
# test_*.py .....                                                      [100%]
# ============================= 3 passed in 0.02s =============================`,
      visualizationTips: [
        "Picture each test as a referee with a checklist — green for pass, red for fail.",
        "Visualize breakpoint() as a pause button that freezes the program mid-flight so you can inspect it.",
        "Draw the red-green-refactor loop: fail (red) -> pass (green) -> clean up (refactor).",
      ],
      tipsAndTricks: [
        "Name tests descriptively: test_withdraw_insufficient_funds().",
        "Test edge cases: zero, negatives, empty inputs, and the maximums.",
        "Use pytest -v for verbose output and pytest -k keyword to run a subset.",
      ],
      practice: [
        {
          id: "practice-pytest-assertions",
          title: "Unit Testing & Boundary Assertions with Pytest",
          difficulty: "Easy",
          task: "Write a function `calculate_tax(income: float) -> float` and create a comprehensive unit test function testing zero income, standard tax brackets, and negative value exceptions.",
          hint: "def test_tax_calculation(): assert calculate_tax(50000) == 7500.0",
          solution: `def calculate_tax(income: float) -> float:\n    if income < 0: raise ValueError("Income cannot be negative.")\n    if income <= 10000: return 0.0\n    return round((income - 10000) * 0.15, 2)\n\ndef test_tax_brackets():\n    assert calculate_tax(0) == 0.0\n    assert calculate_tax(10000) == 0.0\n    assert calculate_tax(20000) == 1500.0\n    print("All tax calculation assertions passed!")\n\ntest_tax_brackets()`,
        },
        {
          id: "practice-pytest-parameterize-matrix",
          title: "Parameterized Testing Matrix",
          difficulty: "Medium",
          task: "Create test cases verifying palindrome string detection using test data tuples `[(input_str, expected_bool)]` covering whitespace, casing, and punctuation edge cases.",
          hint: "test_matrix = [('racecar', True), ('hello', False), ('A man a plan a canal Panama', True)]",
          solution: `def is_palindrome(text: str) -> bool:\n    clean = "".join(c.lower() for c in text if c.isalnum())\n    return clean == clean[::-1]\n\ntest_cases = [\n    ("racecar", True),\n    ("Python", False),\n    ("A man, a plan, a canal: Panama!", True),\n    ("", True),\n    ("12321", True)\n]\n\nfor text, expected in test_cases:\n    result = is_palindrome(text)\n    assert result == expected, f"Failed for '{text}': got {result}, expected {expected}"\nprint("All 5 parameterized palindrome cases passed!")`,
        },
        {
          id: "practice-pytest-exception-testing",
          title: "Exception Raising Assertion (`pytest.raises`)",
          difficulty: "Medium",
          task: "Write unit test assertions verifying that invalid user registrations correctly trigger `ValueError` with expected error substring matching.",
          hint: "try: register_user(''); assert False except ValueError as e: assert 'cannot be empty' in str(e)",
          solution: `def register_user(username: str, age: int):\n    if not username: raise ValueError("Username cannot be empty.")\n    if age < 13: raise ValueError("User must be at least 13 years old.")\n    return {"username": username, "age": age}\n\ndef test_invalid_username():\n    try:\n        register_user("", 20)\n        assert False, "Expected ValueError was not raised."\n    except ValueError as err:\n        assert "cannot be empty" in str(err)\n\ndef test_underage_user():\n    try:\n        register_user("kiddo", 10)\n        assert False, "Expected ValueError was not raised."\n    except ValueError as err:\n        assert "at least 13" in str(err)\n\ntest_invalid_username()\ntest_underage_user()\nprint("Exception guard assertions verified successfully!")`,
        },
        {
          id: "practice-mocking-external-api",
          title: "API Mocking with `unittest.mock`",
          difficulty: "Hard",
          task: "Use `unittest.mock.patch` to mock an external HTTP request function `fetch_weather(city)` so tests run reliably without network calls.",
          hint: "from unittest.mock import patch; with patch('__main__.http_get') as mock_get: mock_get.return_value.json.return_value = {...}",
          solution: `from unittest.mock import MagicMock\n\ndef get_current_temp(city: str, api_client) -> float:\n    response = api_client.get(f"https://weather.api/v1/{city}")\n    if response.status_code != 200: raise ConnectionError("Weather service down")\n    return response.json()["temperature"]\n\n# Mocking client\nmock_client = MagicMock()\nmock_client.get.return_value.status_code = 200\nmock_client.get.return_value.json.return_value = {"city": "New York", "temperature": 23.5}\n\ntemp = get_current_temp("New York", mock_client)\nassert temp == 23.5\nmock_client.get.assert_called_once_with("https://weather.api/v1/New York")\nprint(f"Mocked Weather Test Passed: {temp} °C")`,
        },
        {
          id: "practice-pytest-fixture-lifecycle",
          title: "Test Fixture Database Setup & Teardown",
          difficulty: "Hard",
          task: "Build a test harness mimicking a pytest fixture using a context manager: sets up an in-memory test database, seeds test data, yields to test logic, and cleans up.",
          hint: "from contextlib import contextmanager; @contextmanager def db_fixture(): db = {}; yield db; db.clear()",
          solution: `from contextlib import contextmanager\n\n@contextmanager\ndef temp_db_fixture():\n    db = {"users": ["alice", "bob"]}\n    print("[FIXTURE SETUP] Temporary in-memory DB initialized with 2 seed users.")\n    try:\n        yield db\n    finally:\n        db.clear()\n        print("[FIXTURE TEARDOWN] DB flushed and memory cleaned.")\n\nwith temp_db_fixture() as test_db:\n    test_db["users"].append("charlie")\n    assert len(test_db["users"]) == 3\n    print("Test executed successfully with active fixture context!")`,
        },
        {
          id: "practice-structured-json-logger",
          title: "Production JSON Logging Formatter",
          difficulty: "Hard",
          task: "Configure Python's `logging` system with custom formatting that outputs structured JSON lines containing timestamp, level, module, message, and execution thread.",
          hint: "class JSONFormatter(logging.Formatter): def format(self, record): return json.dumps({...})",
          solution: `import logging\nimport json\n\nclass JSONLogFormatter(logging.Formatter):\n    def format(self, record):\n        log_entry = {\n            "timestamp": self.formatTime(record),\n            "level": record.levelname,\n            "logger": record.name,\n            "message": record.getMessage(),\n            "line": record.lineno\n        }\n        return json.dumps(log_entry)\n\nlogger = logging.getLogger("AppAudit")\nhandler = logging.StreamHandler()\nhandler.setFormatter(JSONLogFormatter())\nlogger.addHandler(handler)\nlogger.setLevel(logging.INFO)\n\nlogger.info("Service initialized on port 8080")\nlogger.warning("Cache hit ratio dropped below 80%")`,
        },
      ],
    },
    {
      id: "mini-project-expense-tracker",
      title: "Lesson 25: Capstone — Build a CLI Expense Tracker",
      shortDescription:
        "Bring everything together: functions, dicts, files, JSON, and a menu loop in one complete project.",
      duration: "90 mins",
      readingTime: "14 mins read",
      contentMarkdown: `### The Capstone Project

You have learned variables, control flow, data structures, functions, OOP, files, errors, and JSON. Now we combine **all of it** into a real, usable program: a **CLI Expense Tracker**. This is the moment you stop being a beginner.

This project mirrors how real software is built: a small set of focused functions, persistence to disk, validation of user input, and a menu loop. If you can build this from memory, you are ready to start building your own projects.

#### What You'll Learn in This Lesson

- Design a small program's architecture before writing code
- Persist data to JSON so it survives restarts
- Validate user input with try/except
- Structure a menu-driven CLI application

---

### Features We Build

| Feature | What it does | Skills used |
|---|---|---|
| **Add** | Add an expense (amount + category) | Functions, validation |
| **List / Summary** | Total spent + per-category totals | Dicts, loops |
| **Persistence** | Saved to \`expenses.json\` | JSON, files |
| **Validation** | Reject invalid amounts | try/except, raise |

---

### Architecture — Think Before You Code

The whole program is a small set of focused functions:

| Function | Responsibility |
|---|---|
| \`load_expenses()\` | Read JSON from disk (or return \`[]\`) |
| \`save_expenses(expenses)\` | Write the list to JSON |
| \`add_expense(expenses, amount, category)\` | Validate + append |
| \`print_summary(expenses)\` | Aggregate totals by category |
| \`main()\` | The \`while True\` menu loop |

Each function does **one job** — the golden rule of function design (Lesson 12).

> **Mental model:** map each menu option to the function it calls. The menu is the front door; the functions are the rooms behind it. \`main()\` stays thin — it only routes.

---

### Building It Step by Step

**Step 1 — Load:** if \`expenses.json\` doesn't exist, start empty. Otherwise \`json.load\` it.

\`\`\`python
def load_expenses():
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)
\`\`\`

**Step 2 — Save:** dump the list with \`indent=2\` for readable JSON.

**Step 3 — Add with validation:** reject non-positive amounts by raising \`ValueError\`.

**Step 4 — Summary:** a dict of totals using \`.get()\` — exactly the pattern from Lesson 9:

\`\`\`python
by_category = {}
for e in expenses:
    by_category[e["category"]] = by_category.get(e["category"], 0) + e["amount"]
\`\`\`

**Step 5 — The menu loop:** \`while True\` + \`break\` from Lesson 5, with try/except around input:

\`\`\`python
while True:
    print("\\n1. Add expense  2. Summary  3. Exit")
    choice = input("Choose: ")
    if choice == "1":
        try:
            amount = float(input("Amount: "))
            category = input("Category: ").strip()
            add_expense(expenses, amount, category)
            save_expenses(expenses)
        except ValueError as e:
            print("Invalid input:", e)
    elif choice == "2":
        print_summary(expenses)
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Unknown choice")
\`\`\`

---

### How This Course Prepared You

Every line of this project uses a lesson you already completed:

- \`while True\` + \`break\` → Lesson 5
- Dicts + \`.get()\` → Lesson 9
- Functions → Lesson 12
- try/except + \`raise\` → Lesson 21
- JSON + files → lessons 20 & 23
- The \`__name__\` guard → Lesson 15

That is the point: professional Python is just these building blocks arranged well.

---

### Testing Your Capstone

Apply Lesson 24's habits to the project:

\`\`\`python
def test_add_expense():
    expenses = []
    add_expense(expenses, 250, "food")
    assert expenses == [{"amount": 250, "category": "food"}]

def test_add_rejects_zero():
    expenses = []
    try:
        add_expense(expenses, 0, "food")
    except ValueError:
        pass
    else:
        raise AssertionError("Expected ValueError for amount 0")
\`\`\`

---

### Extension Ideas

| Extension | Skills practiced |
|---|---|
| **Delete** an expense | Lists + \`pop()\` |
| **Export to CSV** | The \`csv\` module |
| **Budget alert** | Conditionals + logging |
| **Date tracking** | \`datetime\` + dicts |
| **Refactor to classes** | OOP from Module 5 |

---

### Common Mistakes to Avoid

- **Mistake:** One giant \`main()\` with everything inline — **Fix:** split into focused functions.
- **Mistake:** Letting bad input crash the menu — **Fix:** wrap input parsing in try/except.
- **Mistake:** Forgetting to save after adding — **Fix:** call \`save_expenses()\` after every mutation.
- **Mistake:** \`float(input(...))\` on empty input crashing — **Fix:** validate and handle \`ValueError\`.
- **Mistake:** Reading the JSON file before it exists — **Fix:** check \`os.path.exists\` first (or catch \`FileNotFoundError\`).

### Professional Tips & Tricks

- Keep \`main()\` thin: it only routes menu choices to functions — each function does one job.
- The try/except around input makes the program survive bad data — test it with 'abc'.
- Extend the capstone with CSV export and a delete option to practice everything again.
- Write a few pytest tests for \`add_expense\` — tests make the project feel professional.
- Use \`__name__ == "__main__"\` so the module is also importable.

---

### Key Takeaways

- Design the function list before writing code.
- JSON gives your program memory across runs.
- Validate all user input with try/except.
- One function = one job; \`main()\` only routes.
- Test the core functions with pytest.
- **You are no longer a beginner.** 🎉

**Next steps:** Review the syllabus, redo any lesson, or explore the Applied Data Science course in the Learning Hub.`,
      codeLanguage: "python",
      codeSnippet: `import json
import os

DATA_FILE = "expenses.json"


def load_expenses():
    """Load expenses from JSON, or start empty."""
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_expenses(expenses):
    """Persist expenses to JSON."""
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(expenses, f, indent=2)


def add_expense(expenses, amount, category):
    """Validate and append one expense."""
    if amount <= 0:
        raise ValueError("Amount must be positive")
    expenses.append({"amount": amount, "category": category})
    print(f"Added Rs.{amount} to {category}")


def print_summary(expenses):
    """Print total and per-category totals."""
    if not expenses:
        print("No expenses yet.")
        return
    total = sum(e["amount"] for e in expenses)
    print(f"Total spent: Rs.{total}")
    by_category = {}
    for e in expenses:
        by_category[e["category"]] = by_category.get(e["category"], 0) + e["amount"]
    for cat, amt in by_category.items():
        print(f"  {cat}: Rs.{amt}")


def main():
    expenses = load_expenses()
    while True:
        print("\\n1. Add expense  2. Summary  3. Exit")
        choice = input("Choose: ")
        if choice == "1":
            try:
                amount = float(input("Amount: "))
                category = input("Category: ").strip()
                add_expense(expenses, amount, category)
                save_expenses(expenses)
            except ValueError as e:
                print("Invalid input:", e)
        elif choice == "2":
            print_summary(expenses)
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Unknown choice")


if __name__ == "__main__":
    main()`,
      codeOutput: `1. Add expense  2. Summary  3. Exit
Choose: 1
Amount: 250
Category: food
Added Rs.250.0 to food

1. Add expense  2. Summary  3. Exit
Choose: 1
Amount: 1200
Category: travel
Added Rs.1200.0 to travel

1. Add expense  2. Summary  3. Exit
Choose: 2
Total spent: Rs.1450.0
  food: Rs.250.0
  travel: Rs.1200.0

1. Add expense  2. Summary  3. Exit
Choose: 3
Goodbye!`,
      visualizationTips: [
        "Map each menu option to the function it calls — draw the call flow as a small diagram.",
        "Visualize expenses.json as the program's memory between runs: a box that survives restarts.",
        "Trace one full cycle: input -> function -> dict/list update -> save to file -> reload on next run.",
      ],
      tipsAndTricks: [
        "Keep main() thin: it only routes menu choices to functions — each function does one job.",
        "The try/except around input makes the program survive bad data — test it with 'abc'.",
        "Extend the capstone with CSV export and a delete option to practice everything again.",
      ],
      practice: [
        {
          id: "practice-extend-delete-item",
          title: "Delete Expense by ID / Index with Undo Stack",
          difficulty: "Medium",
          task: "Implement `delete_expense(expenses, index)` with boundary checking and maintain a `deleted_history` stack so users can undo accidental deletions.",
          hint: "deleted = expenses.pop(idx); undo_stack.append(deleted)",
          solution: `def delete_expense(expenses: list[dict], index: int, undo_stack: list[dict]):\n    if 0 <= index < len(expenses):\n        removed = expenses.pop(index)\n        undo_stack.append(removed)\n        print(f"[DELETED] Expense: {removed['category']} - \${removed['amount']:.2f}")\n        return True\n    print("[ERROR] Invalid expense index.")\n    return False\n\ndef undo_delete(expenses: list[dict], undo_stack: list[dict]):\n    if undo_stack:\n        restored = undo_stack.pop()\n        expenses.append(restored)\n        print(f"[RESTORED] Expense: {restored['category']} - \${restored['amount']:.2f}")\n        return True\n    print("[INFO] Nothing to undo.")\n    return False\n\nledger = [{"amount": 50.0, "category": "Food"}, {"amount": 120.0, "category": "Travel"}]\nundo = []\ndelete_expense(ledger, 0, undo)\nundo_delete(ledger, undo)\nprint("Current Ledger:", ledger)`,
        },
        {
          id: "practice-csv-export-report",
          title: "Formatted CSV & Tabular Summary Exporter",
          difficulty: "Medium",
          task: "Add `export_csv_report(expenses, filename='expenses.csv')` that formats amounts with 2 decimal places, adds category headers, and includes a summary row with grand total.",
          hint: "import csv; writer.writerow(['TOTAL', '', grand_total])",
          solution: `import csv\n\ndef export_csv_report(expenses: list[dict], filename: str = "expenses.csv"):\n    with open(filename, "w", newline="", encoding="utf-8") as f:\n        writer = csv.writer(f)\n        writer.writerow(["ID", "Category", "Amount ($)"])\n        for idx, item in enumerate(expenses, 1):\n            writer.writerow([idx, item["category"].capitalize(), f"{item['amount']:.2f}"])\n        writer.writerow([])\n        total = sum(item["amount"] for item in expenses)\n        writer.writerow(["", "GRAND TOTAL", f"{total:.2f}"])\n    print(f"Exported complete financial ledger to '{filename}'.")\n\nsample_data = [{"amount": 25.50, "category": "food"}, {"amount": 99.00, "category": "books"}]\nexport_csv_report(sample_data)`,
        },
        {
          id: "practice-category-budget-alerts",
          title: "Category Monthly Budgets & Warning Triggers",
          difficulty: "Medium",
          task: "Implement `check_category_budgets(expenses, budgets)` where `budgets = {'food': 300, 'travel': 500}`. Flag categories that exceeded or are nearing 90% of budget.",
          hint: "spending[cat] = sum(...); if spent > budget: print alert",
          solution: `def check_category_budgets(expenses: list[dict], budgets: dict[str, float]):\n    category_totals = {}\n    for e in expenses:\n        c = e["category"].lower()\n        category_totals[c] = category_totals.get(c, 0.0) + e["amount"]\n    \n    print("Budget Status Report:")\n    for cat, limit in budgets.items():\n        spent = category_totals.get(cat, 0.0)\n        pct = (spent / limit) * 100 if limit > 0 else 0\n        status = "[OVER BUDGET]" if spent > limit else "[WARNING >90%]" if pct >= 90 else "[HEALTHY]"\n        print(f"  {cat.capitalize():<10}: \${spent:>7.2f} / \${limit:>7.2f} ({pct:>5.1f}%) -> {status}")\n\ncurrent_expenses = [\n    {"amount": 280.0, "category": "food"},\n    {"amount": 550.0, "category": "travel"},\n    {"amount": 40.0, "category": "entertainment"}\n]\nbudget_limits = {"food": 300.0, "travel": 500.0, "entertainment": 100.0}\ncheck_category_budgets(current_expenses, budget_limits)`,
        },
        {
          id: "practice-date-range-filter",
          title: "Date Range & Keyword Filter Search Engine",
          difficulty: "Hard",
          task: "Write `filter_expenses(expenses, start_date=None, end_date=None, category=None, min_amount=0.0)` that performs multi-criteria filtering on expense records.",
          hint: "from datetime import datetime; date_val = datetime.fromisoformat(e['date'])",
          solution: `from datetime import datetime\n\ndef filter_expenses(expenses: list[dict], category=None, min_amount=0.0, max_amount=float('inf')) -> list[dict]:\n    filtered = []\n    for e in expenses:\n        if category and e["category"].lower() != category.lower():\n            continue\n        if not (min_amount <= e["amount"] <= max_amount):\n            continue\n        filtered.append(e)\n    return filtered\n\nitems = [\n    {"amount": 15.0, "category": "food", "note": "coffee"},\n    {"amount": 120.0, "category": "travel", "note": "flight"},\n    {"amount": 85.0, "category": "food", "note": "dinner"}\n]\nprint("Food expenses >= $20:", filter_expenses(items, category="food", min_amount=20.0))`,
        },
        {
          id: "practice-category-breakdown-chart",
          title: "ASCII Terminal Category Spending Breakdown Bar Chart",
          difficulty: "Hard",
          task: "Generate an ASCII terminal bar chart rendering percentage share of expenditure per category (e.g. `Food: [##########] 45.2%`).",
          hint: "bar = '#' * int(pct / 5); print(f'{cat}: [{bar:<20}] {pct:.1f}%')",
          solution: `def render_ascii_breakdown(expenses: list[dict]):\n    totals = {}\n    for e in expenses:\n        c = e["category"].capitalize()\n        totals[c] = totals.get(c, 0.0) + e["amount"]\n    \n    grand_total = sum(totals.values())\n    if grand_total == 0: return\n    \n    print("\\n=== SPENDING BREAKDOWN CHART ===")\n    for cat, amt in sorted(totals.items(), key=lambda x: -x[1]):\n        pct = (amt / grand_total) * 100\n        bars = "#" * int(pct / 5)\n        print(f"{cat:<12} | {bars:<20} | {pct:>5.1f}% (\${amt:,.2f})")\n\ndata = [\n    {"amount": 450, "category": "Housing"},\n    {"amount": 250, "category": "Food"},\n    {"amount": 150, "category": "Travel"},\n    {"amount": 100, "category": "Utilities"}\n]\nrender_ascii_breakdown(data)`,
        },
        {
          id: "practice-encrypted-backup-sync",
          title: "Automated Timestamped Ledger Backup & Restore Engine",
          difficulty: "Hard",
          task: "Implement `backup_ledger(filepath, backup_dir='backups/')` that creates timestamped copies of the database file and keeps only the 5 most recent backups.",
          hint: "import shutil, glob; shutil.copy2(filepath, backup_path); manage prune",
          solution: `import os\nimport shutil\nfrom datetime import datetime\n\ndef backup_ledger(data_file: str, backup_dir: str = "backups", max_backups: int = 5):\n    os.makedirs(backup_dir, exist_ok=True)\n    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")\n    dest = os.path.join(backup_dir, f"expenses_{timestamp}.json")\n    \n    # Simulate base file if not exists\n    if not os.path.exists(data_file):\n        with open(data_file, "w") as f: f.write("[]")\n        \n    shutil.copy2(data_file, dest)\n    print(f"Backup created: {dest}")\n    \n    # Prune old backups\n    existing = sorted([os.path.join(backup_dir, f) for f in os.listdir(backup_dir)])\n    while len(existing) > max_backups:\n        oldest = existing.pop(0)\n        os.remove(oldest)\n        print(f"Pruned older backup archive: {oldest}")\n\nbackup_ledger("expenses.json")`,
        },
      ],
    },
  ],
};
