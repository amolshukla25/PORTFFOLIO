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

#### What You'll Learn in This lesson

- Open files safely with the \`with\` statement
- Read files line by line, chunk by chunk
- Write and append data
- Handle CSV tabular data with the \`csv\` module

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

---

### Common Mistakes to Avoid

- **Mistake:** Opening a file for \`"w"\` when you meant to append — **Fix:** use \`"a"\` to keep existing data.
- **Mistake:** Forgetting \`encoding="utf-8"\` and getting mojibake — **Fix:** always specify the encoding.
- **Mistake:** Reading a file without \`with\` and leaking handles — **Fix:** always use the \`with\` statement.

### Professional Tips & Tricks

- Always specify \`encoding='utf-8'\` — avoids cross-platform encoding bugs.
- Never open without \`with\` — a leaked open file handle can corrupt data or exhaust resources.
- Use \`pathlib.Path\` for modern, cross-platform path handling.

---

### Key Takeaways

- \`with open(...) as f:\` closes files automatically — always use it.
- \`"r"\` read, \`"w"\` write (overwrites!), \`"a"\` append.
- \`for line in f:\` streams big files memory-efficiently.
- The \`csv\` module handles tabular data safely.
- Always pass \`encoding="utf-8"\` and \`newline=""\` for CSVs.

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
          id: "practice-append",
          title: "Append a Note",
          difficulty: "Easy",
          task: "Open 'notes.txt' in append mode and add one line of text, then read the whole file and print it.",
          hint: 'open("notes.txt", "a") then f.write(...)',
          solution: `with open("notes.txt", "a") as f:\n    f.write("Practice makes progress!\\n")\n\nwith open("notes.txt") as f:\n    print(f.read())`,
        },
        {
          id: "practice-count-lines",
          title: "Line Counter",
          difficulty: "Medium",
          task: "Count how many lines are in a file called 'data.txt' (create it first with a few lines).",
          hint: "for line in f: count += 1",
          solution: `with open("data.txt", "w") as f:\n    f.write("one\\ntwo\\nthree\\n")\n\ncount = 0\nwith open("data.txt") as f:\n    for line in f:\n        count += 1\nprint(count)  # 3`,
        },
        {
          id: "practice-csv-avg",
          title: "CSV Scores Average",
          difficulty: "Medium",
          task: "Write a CSV with two scores per student, then read it and print the average of all scores.",
          hint: "Sum every numeric cell, divide by the count",
          solution: `import csv\n\nwith open("scores.csv", "w", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["Amol", 80])\n    w.writerow(["Riya", 90])\n\nwith open("scores.csv") as f:\n    rows = list(csv.reader(f))\n    scores = [int(r[1]) for r in rows]\n    print(sum(scores) / len(scores))  # 85.0`,
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

#### What You'll Learn in This lesson

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

---

### Common Mistakes to Avoid

- **Mistake:** Bare \`except:\` — **Fix:** it hides bugs and even catches \`KeyboardInterrupt\`. Always name the exception type.
- **Mistake:** Catching \`Exception\` broadly at the top — **Fix:** catch specific types first, broad ones last.
- **Mistake:** Swallowing errors silently (\`except: pass\`) — **Fix:** log or print the message — silent excepts are debugging nightmares.

### Professional Tips & Tricks

- Catch the most specific exception first, broad ones last.
- Never use a bare \`except:\` — it hides bugs and catches even KeyboardInterrupt.
- Log or print the exception message — silent except blocks are debugging nightmares.

---

### Key Takeaways

- \`try\`/\`except\` catches errors and keeps the program alive.
- \`else\` runs on success; \`finally\` always runs.
- \`raise ValueError("msg")\` enforces rules with clear feedback.
- Subclass \`Exception\` for domain-specific errors.
- Catch specific types; never use bare \`except\`.

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
          id: "practice-safe-input",
          title: "Safe Integer Input",
          difficulty: "Medium",
          task: "Wrap int(input(...)) in try/except and print 'Invalid number' if the user types non-numeric text.",
          hint: "except ValueError:",
          solution: `try:\n    n = int(input("Enter a number: "))\n    print("You entered:", n)\nexcept ValueError:\n    print("Invalid number")`,
        },
        {
          id: "practice-file-exists",
          title: "Missing File Handler",
          difficulty: "Easy",
          task: "Try to open 'ghost.txt' and print a friendly message when it is missing.",
          hint: "except FileNotFoundError:",
          solution: `try:\n    with open("ghost.txt") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("File not found — creating it next run!")`,
        },
        {
          id: "practice-custom-error",
          title: "Custom Error",
          difficulty: "Hard",
          task: "Create a custom exception NotEnoughStock and raise it when quantity > stock in a small function.",
          hint: "class NotEnoughStock(Exception): pass",
          solution: `class NotEnoughStock(Exception):\n    pass\n\ndef order(quantity, stock=5):\n    if quantity > stock:\n        raise NotEnoughStock(f"Only {stock} left")\n    return "Order placed"\n\ntry:\n    print(order(10))\nexcept NotEnoughStock as e:\n    print("Caught:", e)`,
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

#### What You'll Learn in This lesson

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

---

### Generator Expressions

\`(x * 2 for x in range(10))\` — a lazy comprehension. Pass it straight into \`sum()\`, \`max()\`, or a loop:

\`\`\`python
total = sum(x * x for x in range(1, 101))   # 338350 — no giant list
\`\`\`

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

---

### Common Mistakes to Avoid

- **Mistake:** Iterating a generator twice and getting nothing the second time — **Fix:** generators are one-shot; rebuild or convert to a list if you need two passes.
- **Mistake:** Mixing \`yield\` and \`return value\` in the same function — **Fix:** in a generator, \`return\` ends iteration (and \`return value\` is invalid); use \`yield\` for values.
- **Mistake:** Materializing huge lists when a generator would do — **Fix:** reach for \`(expr for ...)\` or \`itertools\`.

### Professional Tips & Tricks

- Use generators for file lines, API pagination, and any stream — never materialize huge lists.
- Prefer \`(expr for ...)\` over \`[expr for ...]\` when passing to sum/max/any.
- \`itertools.islice\` lets you peek at infinite generators safely.

---

### Key Takeaways

- \`yield\` creates a lazy, stateful generator.
- Generators use O(1) memory and are one-shot.
- Generator expressions \`(expr for ...)\` feed into \`sum\`/\`max\`/\`any\`.
- \`itertools\` provides \`islice\`, \`chain\`, \`product\`, and more.

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
          id: "practice-countdown",
          title: "Countdown Generator",
          difficulty: "Easy",
          task: "Write a generator countdown(n) that yields n, n-1, ..., 0.",
          hint: "while n >= 0: yield n; n -= 1",
          solution: `def countdown(n):\n    while n >= 0:\n        yield n\n        n -= 1\n\nprint(list(countdown(3)))  # [3, 2, 1, 0]`,
        },
        {
          id: "practice-squares",
          title: "Lazy Squares",
          difficulty: "Medium",
          task: "Use a generator expression to compute the sum of squares of 1..100 without building a list.",
          hint: "sum(x * x for x in range(1, 101))",
          solution: `total = sum(x * x for x in range(1, 101))\nprint(total)  # 338350`,
        },
        {
          id: "practice-file-lines",
          title: "Streaming Lines",
          difficulty: "Hard",
          task: "Write a generator read_lines(path) that yields each line of a file stripped of whitespace.",
          hint: "with open(path) as f: for line in f: yield line.strip()",
          solution: `def read_lines(path):\n    with open(path) as f:\n        for line in f:\n            yield line.strip()\n\nfor line in read_lines("data.txt"):\n    print(line)`,
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

#### What You'll Learn in This lesson

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

---

### Common Mistakes to Avoid

- **Mistake:** \`json.dumps({1, 2, 3})\` (a set) — **Fix:** TypeError; convert to a list first.
- **Mistake:** Forgetting that JSON booleans are \`true\`/\`false\` and \`null\` — **Fix:** Python parses them to \`True\`/\`False\`/\`None\` automatically.
- **Mistake:** Double-encoding — calling \`json.dumps\` on an already-dumped string — **Fix:** dump once, at the end.

### Professional Tips & Tricks

- Use \`json.dumps(..., ensure_ascii=False)\` to keep non-English characters readable.
- Wrap \`json.loads\` in \`try/except json.JSONDecodeError\` for robust parsing.
- Flatten nested JSON with helper functions before analysis — pandas can take dicts directly.

---

### Key Takeaways

- Four functions: \`dumps\`/\`loads\` (strings) and \`dump\`/\`load\` (files).
- Python and JSON map cleanly: dict↔object, list↔array, True↔true, None↔null.
- \`indent=2\` pretty-prints; \`ensure_ascii=False\` keeps Unicode readable.
- Sets, tuples, and dates need conversion before serialization.

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
          id: "practice-config-json",
          title: "Save & Load Config",
          difficulty: "Medium",
          task: "Save a config dict {'theme': 'dark', 'language': 'python'} to config.json, then load it back and print the theme.",
          hint: "json.dump then json.load",
          solution: `import json\n\nconfig = {"theme": "dark", "language": "python"}\nwith open("config.json", "w") as f:\n    json.dump(config, f)\n\nwith open("config.json") as f:\n    loaded = json.load(f)\nprint(loaded["theme"])  # dark`,
        },
        {
          id: "practice-parse-api",
          title: "Parse API Payload",
          difficulty: "Easy",
          task: "Given the JSON string '{\"status\": \"ok\", \"data\": [1, 2, 3]}', parse it and print the sum of data.",
          hint: "json.loads(...) then sum(payload['data'])",
          solution: `import json\npayload = json.loads('{"status": "ok", "data": [1, 2, 3]}')\nprint(sum(payload["data"]))  # 6`,
        },
        {
          id: "practice-indent",
          title: "Pretty Print",
          difficulty: "Easy",
          task: "Convert a nested dict {'user': {'name': 'Amol', 'scores': [10, 20]}} to a pretty JSON string with indent=2.",
          hint: "json.dumps(data, indent=2)",
          solution: `import json\ndata = {"user": {"name": "Amol", "scores": [10, 20]}}\nprint(json.dumps(data, indent=2))`,
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

#### What You'll Learn in This lesson

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

---

### TDD in One Sentence

**Write the test FIRST** (it fails), then write the minimum code to make it pass — red, green, refactor.

---

### Common Mistakes to Avoid

- **Mistake:** Testing the implementation instead of the behavior — **Fix:** assert on outputs and effects, not internals.
- **Mistake:** Only testing the happy path — **Fix:** test edge cases: zero, negatives, empty inputs, maximums.
- **Mistake:** \`print()\` debugging in production — **Fix:** use the \`logging\` module.

### Professional Tips & Tricks

- Name tests descriptively: \`test_withdraw_insufficient_funds()\`.
- Test edge cases: zero, negatives, empty inputs, and the maximums.
- Use \`pytest -v\` for verbose output and \`pytest -k keyword\` to run a subset.

---

### Key Takeaways

- \`assert\` gives quick checks; pytest gives professional test suites.
- \`breakpoint()\` + \`n\`/\`s\`/\`p\` beats print-debugging.
- \`logging\` with levels is the production-grade replacement for print.
- TDD: write the failing test first, then make it pass.

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
          id: "practice-test-function",
          title: "Write a Test",
          difficulty: "Medium",
          task: "Write a function is_adult(age) returning age >= 18, then write two tests for it.",
          hint: "def test_...(): assert is_adult(20)",
          solution: `def is_adult(age):\n    return age >= 18\n\ndef test_adult():\n    assert is_adult(20) is True\n\ndef test_minor():\n    assert is_adult(16) is False`,
        },
        {
          id: "practice-assert",
          title: "Assert Guard",
          difficulty: "Easy",
          task: "Write an assert that checks len('python') == 6 with a helpful message.",
          hint: "assert len('python') == 6, 'expected six characters'",
          solution: `assert len("python") == 6, "expected six characters"\nprint("Assertion passed")`,
        },
        {
          id: "practice-logging",
          title: "Log Levels",
          difficulty: "Medium",
          task: "Configure logging and emit an INFO message and a WARNING message.",
          hint: "logging.info(...) and logging.warning(...)",
          solution: `import logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info("App started")\nlogging.warning("Disk space low")`,
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

#### What You'll Learn in This lesson

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

Each function does **one job** — the golden rule of function design.

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

### Professional Tips & Tricks

- Keep \`main()\` thin: it only routes menu choices to functions — each function does one job.
- The try/except around input makes the program survive bad data — test it with 'abc'.
- Extend the capstone with CSV export and a delete option to practice everything again.

---

### Key Takeaways

- Design the function list before writing code.
- JSON gives your program memory across runs.
- Validate all user input with try/except.
- One function = one job; \`main()\` only routes.
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
          id: "practice-extend-delete",
          title: "Add a Delete Feature",
          difficulty: "Hard",
          task: "Extend the expense tracker with option 4: delete the last expense using pop() and save.",
          hint: "elif choice == '4': expenses.pop(); save_expenses(expenses)",
          solution: `elif choice == "4":\n    if expenses:\n        removed = expenses.pop()\n        print("Removed:", removed)\n        save_expenses(expenses)\n    else:\n        print("Nothing to delete")`,
        },
        {
          id: "practice-csv-export",
          title: "Export to CSV",
          difficulty: "Hard",
          task: "Add a function export_csv(expenses) that writes amount,category rows to expenses.csv.",
          hint: "Use csv.writer and iterate expenses",
          solution: `import csv\n\ndef export_csv(expenses):\n    with open("expenses.csv", "w", newline="") as f:\n        w = csv.writer(f)\n        w.writerow(["amount", "category"])\n        for e in expenses:\n            w.writerow([e["amount"], e["category"]])\n    print("Exported to expenses.csv")`,
        },
        {
          id: "practice-budget-alert",
          title: "Budget Alert",
          difficulty: "Medium",
          task: "In print_summary, print '⚠ Budget exceeded!' if total is above 5000.",
          hint: "if total > 5000: print('Budget exceeded!')",
          solution: `total = sum(e["amount"] for e in expenses)\nprint(f"Total spent: Rs.{total}")\nif total > 5000:\n    print("Budget exceeded!")`,
        },
      ],
    },
  ],
};
