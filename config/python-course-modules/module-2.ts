import type { Module } from "../courses";

export const MODULE_2: Module = {
  id: "module-2-control-flow",
  title: "Module 2: Control Flow",
  description:
    "Make decisions with conditionals, repeat work with loops, and write elegant comprehensions.",
  lessons: [
    {
      id: "loops-conditionals",
      title: "Lesson 5: Conditional Branches & Loops",
      shortDescription:
        "Evaluating truth tables, if/elif/else routing, for and while loops, break, and continue.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Controlling Execution Flow

A program runs **sequentially** by default — top to bottom, one line after another. Conditionals and loops are what give your program the power to **make decisions** and **repeat work**. Together they turn a static script into dynamic, intelligent software.

Think about it this way: without conditionals, every run of a program produces the identical output, forever. Without loops, you would write the same line a thousand times to repeat a task a thousand times. These two tools are the difference between a calculator and a program.

#### What You'll Learn in This Lesson

- Route code with \`if\` / \`elif\` / \`else\`
- Understand truthiness — which values count as True or False
- Iterate with \`for\` loops over sequences and \`range()\`
- Loop with \`while\` until a condition becomes False
- Interrupt loops with \`break\` and \`continue\`

---

### Truthiness — What Counts as True?

In Python, *every* value has a truth value. The following are always **falsy**:

| Falsy values | |
|---|---|
| \`False\` | \`None\` |
| \`0\` | \`0.0\` |
| \`""\` (empty string) | \`[]\` (empty list) |
| \`{}\` (empty dict) | \`()\` (empty tuple) |

Everything else is **truthy** — including negative numbers, the string \`"0"\`, and empty sets. This lets you write terse checks like \`if items:\` (true when the list has anything in it).

> **Mental model:** an empty container or a zero-like value "weighs nothing" and counts as False; anything with content or magnitude counts as True. When you see \`if x:\`, translate it as "if x has anything in it" or "if x is not zero".

#### Why Truthiness Matters in Real Code

Truthiness is what lets professional code avoid clumsy verbosity:

\`\`\`python
# Clumsy
if len(items) > 0:
    process(items)

# Pythonic — items being non-empty means True
if items:
    process(items)
\`\`\`

The second version is shorter, reads naturally, and is the style used in virtually all real Python codebases — from Django to PyTorch.

---

### Conditionals — The if / elif / else Chain

A conditional routes the code path based on a boolean expression:

\`\`\`python
score = 85

if score >= 90:
    print("Grade: A+")
elif score >= 75:
    print("Grade: B")
elif score >= 60:
    print("Grade: C")
else:
    print("Grade: F")
\`\`\`

Key rules:

- **Only ONE branch ever runs** — Python checks from top to bottom and takes the first \`True\` branch, then skips the rest.
- \`elif\` means "else if" and can appear any number of times.
- \`else\` is optional and catches everything not caught above.
- Order matters: check the *most specific* condition first (90 before 75).

> **Decision-tree mental model:** each \`if\` is a fork in the road. You walk down the first path whose sign says "True", and you never come back.

#### Nested Conditionals — Decisions Inside Decisions

An \`if\` block can contain another \`if\` — useful when a second decision only makes sense after the first:

\`\`\`python
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Welcome in!")
    else:
        print("Need ID")
else:
    print("Too young")
\`\`\`

Nesting is fine up to two or three levels — beyond that, restructure with \`and\`/\`or\` or helper functions to keep code flat and readable.

---

### The for Loop — Iterating Over Sequences

The \`for\` loop walks through every item of a sequence:

\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

You can loop over strings, lists, tuples, dict keys, sets — anything iterable. For a range of numbers, use \`range()\`:

| Call | Produces |
|---|---|
| \`range(5)\` | \`0, 1, 2, 3, 4\` |
| \`range(1, 5)\` | \`1, 2, 3, 4\` |
| \`range(1, 10, 2)\` | \`1, 3, 5, 7, 9\` (step 2) |
| \`range(5, 0, -1)\` | \`5, 4, 3, 2, 1\` (countdown) |

**\`range()\` has three forms:**

| Form | Meaning |
|---|---|
| \`range(stop)\` | 0 to stop-1 |
| \`range(start, stop)\` | start to stop-1 |
| \`range(start, stop, step)\` | start to stop-1, jumping by step |

> **Trace-table tip:** write a small table with columns for the loop variable and the output. Step through each iteration — this is exactly what Python does.

#### Accumulating in a Loop — The Counter Pattern

The single most common loop task is *accumulating* a total:

\`\`\`python
total = 0
for n in range(1, 6):     # 1 + 2 + 3 + 4 + 5
    total += n
print(total)              # 15
\`\`\`

**Trace table for this loop:**

| Iteration | n | total before | total after |
|---|---|---|---|
| 1 | 1 | 0 | 1 |
| 2 | 2 | 1 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 4 | 6 | 10 |
| 5 | 5 | 10 | 15 |

This pattern — initialize before the loop, update inside — powers sums, counts, maximums, and building lists for the rest of the course.

---

### The while Loop — Loop Until False

The \`while\` loop repeats **as long as** its condition is True:

\`\`\`python
count = 3
while count > 0:
    print(count)
    count -= 1
print("Blast off!")
\`\`\`

**Danger:** if the condition never becomes False, the loop runs forever (an *infinite loop*). Always make sure something inside the loop moves the condition toward False.

**Choosing between \`for\` and \`while\`:**

| Situation | Use |
|---|---|
| You know how many times (or are iterating a collection) | \`for\` |
| You repeat until a condition changes, and the count is unknown | \`while\` |
| Example: "ask for password until correct" | \`while\` |
| Example: "process every line in a file" | \`for\` |

---

### break and continue — Loop Interrupts

| Keyword | Effect | Use case |
|---|---|---|
| \`break\` | Exits the loop immediately | "Found it — stop searching" |
| \`continue\` | Skips to the next iteration | "Skip this one, keep going" |

\`\`\`python
for n in range(1, 11):
    if n % 3 == 0:
        continue          # skip multiples of 3
    if n == 8:
        break             # stop at 8
    print(n)              # 1 2 4 5 7
\`\`\`

> **Mental model:** \`break\` slams on the brakes and leaves the car. \`continue\` jumps over one pothole but keeps driving the same route.

---

### Common Mistakes to Avoid

- **Mistake:** \`if score = 90:\` — **Fix:** comparison needs \`==\`, not \`=\`.
- **Mistake:** An infinite \`while True:\` with no \`break\` — **Fix:** ensure the condition or a break eventually stops it.
- **Mistake:** Checking \`elif\` conditions in the wrong order (e.g., \`>= 60\` before \`>= 90\`) — **Fix:** order from most to least specific.
- **Mistake:** Forgetting to update the loop variable in a \`while\` loop — **Fix:** an unchanged condition means an infinite loop.
- **Mistake:** Indenting the loop body inconsistently — **Fix:** every statement that belongs to the loop must share the same indent.

### Professional Tips & Tricks

- Put the most likely condition first for slightly faster, clearer code.
- \`while True + break\` is a clean pattern for menus and input validation loops.
- \`range(start, stop, step)\` gives you full control over for-loop stepping.
- Use trace tables on paper for the first few loops — the muscle memory pays off forever.

---

### Key Takeaways

- \`if/elif/else\` runs exactly one branch — first True wins.
- Truthiness lets you write \`if items:\` instead of \`if len(items) > 0:\`.
- \`for\` iterates over sequences; \`while\` repeats until False.
- \`break\` stops a loop; \`continue\` skips one iteration.
- Always ensure while loops can terminate.
- The accumulate-inside-a-loop pattern is the foundation of nearly every algorithm.

**Next up:** Loop control in depth — nested loops, the loop \`else\` clause, and \`pass\`.`,
      codeLanguage: "python",
      codeSnippet: `# Grade checker script showcasing conditionals and loops
scores = [45, 88, 72, 95, 60, 30]
passing_score = 60

print("Evaluating exam scores:")
for score in scores:
    if score >= 90:
        print(f"Score {score}: Grade A+ (Excellent!)")
    elif score >= passing_score:
        print(f"Score {score}: Passing grade")
    else:
        # Check if failing critically
        if score < 40:
            print(f"Score {score}: Failed critically (Needs revision)")
            continue
        print(f"Score {score}: Failed")`,
      codeOutput: `Evaluating exam scores:
Score 45: Failed
Score 88: Passing grade
Score 72: Passing grade
Score 95: Grade A+ (Excellent!)
Score 60: Passing grade
Score 30: Failed critically (Needs revision)`,
      visualizationTips: [
        "Draw a fork-in-the-road diagram for each if/elif/else — only one road is taken per trip.",
        "Use a trace table with columns: score, condition result, output.",
        "Step through scores = [45, 88] in Python Tutor to watch the pointer move through the loop.",
      ],
      tipsAndTricks: [
        "Put the most likely condition first for slightly faster, clearer code.",
        "while True + break is a clean pattern for menus and input validation loops.",
        "range(start, stop, step) gives you full control over for-loop stepping.",
      ],
      practice: [
        {
          id: "practice-even-odd-classifier",
          title: "Parity & Divisibility Classifier",
          difficulty: "Easy",
          task: "Loop over numbers 1 to 20. Print whether each number is even or odd, and flag if it is also divisible by 5.",
          hint: "Use n % 2 == 0 and n % 5 == 0 with conditional branches.",
          solution: `for n in range(1, 21):\n    status = "EVEN" if n % 2 == 0 else "ODD"\n    extra = " [DIVISIBLE BY 5]" if n % 5 == 0 else ""\n    print(f"{n:>2}: {status}{extra}")`,
        },
        {
          id: "practice-atm-pin-validator",
          title: "ATM PIN Validator with Max Attempts",
          difficulty: "Medium",
          task: "Simulate an ATM PIN validation loop: allow up to 3 attempts to enter the correct PIN ('4829'). If correct, print 'Access Granted'; if all 3 fail, print 'Account Locked'.",
          hint: "Use a while or for loop with attempts counter and break on success.",
          solution: `correct_pin = "4829"\nsimulated_inputs = ["1111", "0000", "4829"]\n\nfor attempt in range(1, 4):\n    pin = simulated_inputs[attempt - 1]\n    if pin == correct_pin:\n        print(f"Attempt {attempt}: PIN accepted. Access Granted! 💳")\n        break\n    print(f"Attempt {attempt}: Incorrect PIN.")\nelse:\n    print("Access Denied: Account Locked after 3 failed attempts.")`,
        },
        {
          id: "practice-grade-gpa-classifier",
          title: "Grade & GPA Tier Classifier",
          difficulty: "Medium",
          task: "Write a function mapping numerical scores (0-100) to Letter Grade and GPA (A: 90+, 4.0; B: 80-89, 3.0; C: 70-79, 2.0; D: 60-69, 1.0; F: <60, 0.0). Process a list of student records.",
          hint: "Use elif ladder ordered from highest score downwards.",
          solution: `students = [("Amol", 94), ("Riya", 82), ("Sam", 68), ("John", 54)]\n\nfor name, score in students:\n    if score >= 90:\n        grade, gpa = "A", 4.0\n    elif score >= 80:\n        grade, gpa = "B", 3.0\n    elif score >= 70:\n        grade, gpa = "C", 2.0\n    elif score >= 60:\n        grade, gpa = "D", 1.0\n    else:\n        grade, gpa = "F", 0.0\n    print(f"{name:<6} -> Score: {score} | Grade: {grade} (GPA: {gpa})")`,
        },
        {
          id: "practice-fizzbuzz-plus",
          title: "FizzBuzz Custom Multiples Engine",
          difficulty: "Medium",
          task: "Print numbers 1 to 30 with rules: 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for both, and 'Jazz' for multiples of 7.",
          hint: "Construct an output string by appending 'Fizz', 'Buzz', 'Jazz' conditionally.",
          solution: `for i in range(1, 31):\n    out = ""\n    if i % 3 == 0: out += "Fizz"\n    if i % 5 == 0: out += "Buzz"\n    if i % 7 == 0: out += "Jazz"\n    print(f"{i}: {out if out else i}")`,
        },
        {
          id: "practice-match-case-router",
          title: "HTTP Status Code Match/Case Router",
          difficulty: "Hard",
          task: "Implement a status handler using Python 3.10+ match/case for HTTP status codes: 200 (OK), 301 (Redirect), 400 (Bad Request), 404 (Not Found), 500 (Internal Error), and default fallback.",
          hint: "Use match status: case 200: ... case _: ...",
          solution: `def handle_status(code):\n    match code:\n        case 200 | 201:\n            return "SUCCESS: Request completed successfully."\n        case 301 | 302:\n            return "REDIRECT: Resource has moved."\n        case 400 | 422:\n            return "CLIENT ERROR: Invalid payload or parameters."\n        case 404:\n            return "NOT FOUND: The requested resource does not exist."\n        case 500 | 502 | 503:\n            return "SERVER ERROR: Internal server fault."\n        case _:\n            return f"UNKNOWN: Unhandled HTTP status {code}."\n\nfor s in [200, 404, 500, 418]:\n    print(f"{s} -> {handle_status(s)}")`,
        },
        {
          id: "practice-collatz-conjecture",
          title: "Collatz Conjecture Step Calculator",
          difficulty: "Hard",
          task: "Given n = 27, run the 3n + 1 sequence: if n is even, n = n // 2; if odd, n = 3 * n + 1. Loop until n = 1, printing each step, total steps, and maximum peak value reached.",
          hint: "Use while n != 1 with step counter and peak tracker.",
          solution: `n = 27\nsteps, peak = 0, n\nprint(f"Starting Collatz sequence for n={n}:")\n\nwhile n != 1:\n    n = n // 2 if n % 2 == 0 else 3 * n + 1\n    steps += 1\n    if n > peak: peak = n\n\nprint(f"Reached 1 in {steps} steps! Peak value reached: {peak}")`,
        },
      ],
    },
    {
      id: "loop-control-nested",
      title: "Lesson 6: Loop Control, Nested Loops & The else Clause",
      shortDescription:
        "Master break, continue, pass, loop else clauses, and nested loops with trace tables.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Taking Full Control of Loops

Plain \`for\` and \`while\` loops get you 80% of the way. The remaining 20% — fine-grained control — is what separates beginner code from professional code. This lesson covers the three interrupts, the secret \`else\` clause, and nested loops.

#### What You'll Learn in This Lesson

- Use \`break\`, \`continue\`, and \`pass\` precisely
- Master the loop \`else\` clause — Python's hidden gem
- Build nested loops for grids, tables, and combinations
- Use \`enumerate()\` and \`zip()\` to iterate like a pro

---

### The Three Interrupts

| Keyword | Behavior | Perfect for |
|---|---|---|
| \`break\` | Stop the loop NOW | Searching: "found it, stop looking" |
| \`continue\` | Skip this item, next iteration | Filtering inside loops |
| \`pass\` | Do nothing | Placeholder where syntax needs a body |

\`pass\` is subtle: it is not a loop keyword, but a statement that does nothing. Use it when the grammar requires a block but you are not ready to write it:

\`\`\`python
for item in items:
    pass  # TODO: implement later — prevents an IndentationError
\`\`\`

> **When to use \`pass\`:** any place Python requires an indented block but you have nothing to write yet — empty function bodies, empty class bodies, empty exception handlers. It is the "I'll finish this later" placeholder.

---

### The Secret else Clause

A loop's \`else\` block runs **only if the loop finished without hitting \`break\`**. This is a clean, Pythonic way to say "search failed":

\`\`\`python
numbers = [4, 8, 15, 16, 23, 42]
target = 16

for n in numbers:
    if n == target:
        print(f"Found {target} at position {numbers.index(n)}")
        break
else:
    print(f"{target} not found")
\`\`\`

- Found it → \`break\` runs → \`else\` is **skipped**.
- Not found → loop ends naturally → \`else\` **runs**.

> Without \`else\`, you would need a boolean flag (\`found = False\` ...) — the loop \`else\` removes that boilerplate. It is one of the most "Pythonic" features in the language.

#### The Flag-Variable Alternative (and Why else Is Better)

The non-else way to write the same logic:

\`\`\`python
found = False
for n in numbers:
    if n == target:
        print("Found it!")
        found = True
        break
if not found:
    print("Not found")
\`\`\`

The loop \`else\` version is shorter, has no flag to forget, and keeps the "not found" handling right next to the search. This pattern appears in real code constantly — prime-number checks, password validators, and duplicate detectors.

---

### Nested Loops — Loops Inside Loops

A loop inside a loop runs the **inner loop completely for every single outer iteration**:

\`\`\`python
for i in range(1, 4):        # outer: 3 times
    for j in range(1, 4):    # inner: runs fully 3 times
        print(f"{i}x{j}={i*j}", end="  ")
    print()                  # newline after each row
\`\`\`

\`\`\`text
1x1=1  1x2=2  1x3=3
2x1=2  2x2=4  2x3=6
3x1=3  3x2=6  3x3=9
\`\`\`

- The **outer** counter moves slowly — like the hour hand.
- The **inner** counter resets every row — like the minute hand doing a full sweep per hour.
- Use nested loops for grids, multiplication tables, and combinations.

> **Trace with two counters:** build a table with columns \`i\` and \`j\`. For every value of \`i\`, list all values of \`j\`. You will literally see the pattern.

#### Iteration Counts

With \`m\` outer iterations and \`n\` inner iterations, the inner body runs \`m × n\` times total. For the 3×3 table above, that is 9 printed cells — and a \`for i in range(10): for j in range(10):\` grid prints 100 cells. This multiply-out is how you estimate whether nested loops will be fast enough for large data (a 10,000 × 10,000 nested loop is 100 million steps — slow!).

---

### enumerate() and zip() — Pro Iteration Tools

\`enumerate()\` gives you both the index and the value:

\`\`\`python
names = ["Amol", "Riya", "Sam"]
for i, name in enumerate(names, start=1):
    print(f"{i}. {name}")
# 1. Amol
# 2. Riya
# 3. Sam
\`\`\`

\`zip()\` pairs two sequences side by side:

\`\`\`python
names = ["Amol", "Riya"]
scores = [95, 88]
for name, score in zip(names, scores):
    print(name, score)
# Amol 95
# Riya 88
\`\`\`

> **Mental model:** \`enumerate\` hands out numbered tickets as each person enters. \`zip\` is a zipper joining two rows of teeth into one.

**\`zip\` with more than two lists** works the same way, and it stops at the shortest input — perfect for combining parallel lists of scores, names, and grades.

---

### Common Mistakes to Avoid

- **Mistake:** Using a flag variable when \`else\` would work — **Fix:** prefer the loop \`else\` for "not found" logic.
- **Mistake:** 3+ levels of nested loops — **Fix:** break them into functions; deep nesting is a readability killer.
- **Mistake:** Forgetting to update the counter in a \`while\` loop — **Fix:** always move toward the exit condition.
- **Mistake:** Putting \`else\` at the wrong indentation — **Fix:** the loop \`else\` must be at the *same indent* as the \`for\`/\`while\`, not inside the loop body.
- **Mistake:** Using \`pass\` where you meant \`continue\` — **Fix:** \`pass\` does nothing and falls through; \`continue\` jumps to the next iteration.

### Professional Tips & Tricks

- Prefer \`break + else\` over a boolean flag like \`found = False\` — it is more Pythonic.
- Avoid deeply nested loops (3+ levels); break them into functions.
- \`for i, v in enumerate(items)\` gives both index and value.
- Use \`zip(names, scores, grades)\` to walk parallel lists in lockstep.
- Print loop counters while debugging — instant trace table.

---

### Key Takeaways

- \`break\` exits, \`continue\` skips, \`pass\` is a placeholder.
- Loop \`else\` runs only when no \`break\` happened — perfect for search-failed logic.
- Nested loops = inner loop completes fully per outer iteration.
- \`enumerate()\` and \`zip()\` remove index/bookkeeping boilerplate.
- Inner body runs \`m × n\` times in nested loops — always estimate the total.

**Next up:** Comprehensions — build lists, dicts, and sets in one elegant line.`,
      codeLanguage: "python",
      codeSnippet: `# break / continue / else / nested loops
print("--- search with break + else ---")
numbers = [4, 8, 15, 16, 23, 42]
target = 16
for n in numbers:
    if n == target:
        print(f"Found {target} at position {numbers.index(n)}")
        break
else:
    print(f"{target} not found")

print("--- skip with continue ---")
for n in range(1, 11):
    if n % 3 == 0:
        continue
    print(n, end=" ")
print()

print("--- multiplication table (nested loops) ---")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end="  ")
    print()`,
      codeOutput: `--- search with break + else ---
Found 16 at position 3
--- skip with continue ---
1 2 4 5 7 8 10
--- multiplication table (nested loops) ---
1x1=1  1x2=2  1x3=3
2x1=2  2x2=4  2x3=6
3x1=3  3x2=6  3x3=9`,
      visualizationTips: [
        "Trace a nested loop like a table: outer counter moves slowly, inner counter resets every row.",
        "For break/else, ask: 'did the loop end because it found something, or because it ran out of items?'",
        "Print the loop counters inside the loop while debugging — instant trace table.",
      ],
      tipsAndTricks: [
        "Prefer break + else over a boolean flag like found = False — it is more Pythonic.",
        "Avoid deeply nested loops (3+ levels); break them into functions.",
        "for i in range(n) with enumerate() gives both index and value: for i, v in enumerate(items).",
      ],
      practice: [
        {
          id: "practice-pyramid-pattern",
          title: "Centered Star Pyramid & Diamond Drawer",
          difficulty: "Medium",
          task: "Write a program using nested loops to print an equilateral star pyramid of height 5, where row i has (2*i + 1) stars centered with spaces.",
          hint: "For row i in range(h): print(' ' * (h - i - 1) + '*' * (2 * i + 1))",
          solution: `height = 5\nfor i in range(height):\n    spaces = " " * (height - i - 1)\n    stars = "*" * (2 * i + 1)\n    print(spaces + stars)`,
        },
        {
          id: "practice-matrix-multiplication-table",
          title: "Tabular Multiplication Grid (1 to 10)",
          difficulty: "Medium",
          task: "Generate a formatted 10x10 multiplication table with properly aligned column widths using nested for loops.",
          hint: "Use f'{r*c:>4}' with end=''.",
          solution: `for r in range(1, 11):\n    for c in range(1, 11):\n        print(f"{r * c:>4}", end="")\n    print()`,
        },
        {
          id: "practice-prime-sieve-loop",
          title: "Prime Sieve with For-Else & Break",
          difficulty: "Hard",
          task: "Find all prime numbers between 2 and 50 using nested loops with the `for...else` construct and `break`.",
          hint: "If a divisor is found, break. The else block runs only if no divisors were found.",
          solution: `primes = []\nfor n in range(2, 51):\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            break\n    else:\n        primes.append(n)\nprint(f"Primes up to 50: {primes}")`,
        },
        {
          id: "practice-nested-search-break",
          title: "Target Coordinate Search with Early Exit",
          difficulty: "Medium",
          task: "Search a 4x4 matrix for target value 42. Print its row and column coordinates and break out of BOTH loops immediately upon finding it.",
          hint: "Use a found flag or wrap inside a helper function.",
          solution: `grid = [\n    [10, 20, 30, 40],\n    [15, 25, 42, 55],\n    [90, 80, 70, 60],\n]\ntarget = 42\nfound = False\nfor r_idx, row in enumerate(grid):\n    for c_idx, val in enumerate(row):\n        if val == target:\n            print(f"Target {target} located at Row {r_idx}, Col {c_idx}!")\n            found = True\n            break\n    if found:\n        break`,
        },
        {
          id: "practice-skip-and-aggregate",
          title: "Selective Ledger Aggregator",
          difficulty: "Medium",
          task: "Given transactions = [100, -20, 'INVALID', 250, None, -50, 400], calculate total income, total expenses, and skipped count using `continue`.",
          hint: "Check isinstance(tx, (int, float)) and use continue on invalid items.",
          solution: `transactions = [100, -20, "INVALID", 250, None, -50, 400]\nincome, expenses, skipped = 0, 0, 0\n\nfor tx in transactions:\n    if not isinstance(tx, (int, float)):\n        skipped += 1\n        continue\n    if tx > 0:\n        income += tx\n    else:\n        expenses += abs(tx)\n\nprint(f"Total Income:   \${income}")\nprint(f"Total Expenses: \${expenses}")\nprint(f"Skipped Items:  {skipped}")`,
        },
        {
          id: "practice-matrix-transpose",
          title: "In-Place Matrix Transposition",
          difficulty: "Hard",
          task: "Given a 3x3 matrix, transpose it (swap rows with columns: grid[r][c] <-> grid[c][r]) using nested loops without creating a new matrix.",
          hint: "Loop for r in range(n) and for c in range(r + 1, n).",
          solution: `matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9],\n]\nn = len(matrix)\nfor r in range(n):\n    for c in range(r + 1, n):\n        matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]\n\nprint("Transposed Matrix:")\nfor row in matrix:\n    print(row)`,
        },
      ],
    },
    {
      id: "comprehensions",
      title: "Lesson 7: Comprehensions — Clean, Fast Loops",
      shortDescription:
        "Build lists, dicts, and sets in one elegant line with comprehensions and generator expressions.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### The Most Pythonic Loop

A **list comprehension** builds a new list in a single expression. It is shorter, faster, and easier to read than a manual \`for\` loop that appends. Once you learn to read them, comprehensions become the tool you reach for first.

Comprehensions are one of the defining features of Python — many other languages have copied them since. They appear on virtually every interview question, in every codebase, and in every data-processing script. This lesson makes you fluent in reading and writing them.

#### What You'll Learn in This Lesson

- Read and write list comprehensions with filters
- Build dict and set comprehensions
- Use generator expressions for memory-friendly data
- Know when NOT to use a comprehension

---

### Anatomy of a Comprehension

\`\`\`python
[expression for item in sequence if condition]
\`\`\`

| Part | Meaning |
|---|---|
| \`expression\` | What each output item looks like |
| \`for item in sequence\` | The loop |
| \`if condition\` | Optional filter — item skipped when False |

Example — squares of all numbers:

\`\`\`python
numbers = [1, 2, 3, 4]
squares = [n ** 2 for n in numbers]     # [1, 4, 9, 16]
evens = [n for n in numbers if n % 2 == 0]   # [2, 4]
\`\`\`

> **Read it right-to-left:** first the loop ("for each n in numbers"), then the filter ("if ..."), then the expression ("produce n ** 2"). Visualize a factory line: items enter on the conveyor belt, get checked at the gate, and come out transformed.

---

### Comprehension vs Manual Loop

| Manual loop | Comprehension |
|---|---|
| \`result = []\` | \`result = [n ** 2 for n in numbers]\` |
| \`for n in numbers:\` | — |
| \`result.append(n ** 2)\` | — |

The comprehension is one line, runs faster (C-level loop under the hood), and cannot accidentally forget the append. Measurable speed differences appear on big lists.

**Why is it faster?** Python optimizes comprehensions at the interpreter level — the loop runs in C rather than going through Python's slower per-instruction machinery. For a million items, comprehensions are typically 1.5–2× faster than manual append loops.

---

### Dict and Set Comprehensions

The same idea works for dictionaries and sets — just change the brackets:

| Kind | Syntax | Example |
|---|---|---|
| List | \`[expr for item in seq]\` | \`[n for n in range(5)]\` |
| Set | \`{expr for item in seq}\` | \`{n % 3 for n in range(9)}\` |
| Dict | \`{key: value for item in seq}\` | \`{n: n ** 2 for n in range(3)}\` |

\`\`\`python
cubes = {n: n ** 3 for n in numbers if n % 2 == 1}
letters = {ch.lower() for ch in "Abracadabra"}   # unique letters
\`\`\`

**Dict comprehensions** are everywhere in data work — converting lists of records into lookup tables:

\`\`\`python
users = [{"id": 1, "name": "Amol"}, {"id": 2, "name": "Riya"}]
by_id = {u["id"]: u["name"] for u in users}
print(by_id[2])   # Riya
\`\`\`

---

### Generator Expressions — Lazy & Memory-Friendly

Replace the square brackets with parentheses and you get a **generator expression**:

\`\`\`python
gen = (n * 10 for n in range(5))
print(list(gen))   # [0, 10, 20, 30, 40]
\`\`\`

- A list comprehension **builds the whole list** in memory.
- A generator produces **one item at a time** — perfect for huge data.
- Use generators directly in \`sum()\`, \`max()\`, \`any()\`, \`min()\` to avoid intermediate lists:

\`\`\`python
total = sum(n * n for n in range(1_000_000))   # no giant list created
\`\`\`

> **Mental model:** a list comprehension is a completed warehouse shelf; a generator is a live conveyor belt that hands you one item at a time. The belt uses almost no storage.

---

### When NOT to Use a Comprehension

Comprehensions are powerful but not always the answer:

- Logic needs more than one condition → write a normal loop.
- The body spans multiple lines → write a normal loop.
- You only need the side effect (like printing) → a normal loop is clearer.
- Readability always wins. If the comprehension is hard to read, it is too clever.

**The readability test:** if you cannot understand the comprehension at a glance, split it — either into a loop or into a helper function. Professionals optimize for the next reader, not for the shortest possible line.

---

### Common Mistakes to Avoid

- **Mistake:** Putting the condition after the expression but with wrong order — **Fix:** remember: \`[expr for item in seq if cond]\` — the \`if\` always comes after the \`for\`.
- **Mistake:** Using a comprehension for side effects like \`print\` — **Fix:** use a regular loop; comprehensions are for building collections.
- **Mistake:** A comprehension too long to fit on one line — **Fix:** switch to a loop. One-liners are only elegant when short.
- **Mistake:** Forgetting the colon in a dict comprehension (\`{n: n**2 ...}\`) — **Fix:** dict comprehensions always have \`key: value\` with a colon.
- **Mistake:** Using \`{}\` expecting a set — **Fix:** \`{}\` is an empty *dict*; an empty set is \`set()\`.

### Professional Tips & Tricks

- Comprehensions are faster than manual append loops — measurable on big lists.
- Use a generator expression in sum(), max(), or any() to avoid building intermediate lists.
- Keep comprehensions on one line; if it does not fit, use a regular loop.
- Use \`{k: v for ...}\` to build instant lookup tables from lists of records.
- Read comprehensions right-to-left: loop → filter → expression.

---

### Key Takeaways

- \`[expr for item in seq if cond]\` builds lists in one line.
- Same pattern with \`{}\` builds sets and dicts.
- Parentheses \`( )\` make a lazy, memory-friendly generator.
- Use comprehensions for transformations; use loops for side effects and complex logic.
- Generator expressions in sum/max/any avoid huge intermediate lists.

**Next up:** Module 3 — data structures. Lists & tuples first.`,
      codeLanguage: "python",
      codeSnippet: `# Comprehensions in action
numbers = [1, 2, 3, 4, 5, 6, 7, 8]

# Squares of all numbers
squares = [n ** 2 for n in numbers]
print("Squares:", squares)

# Even numbers only
evens = [n for n in numbers if n % 2 == 0]
print("Evens:", evens)

# Dict comprehension: number -> its cube
cubes = {n: n ** 3 for n in numbers if n % 2 == 1}
print("Cubes of odds:", cubes)

# Set comprehension with a string
letters = {ch.lower() for ch in "Abracadabra"}
print("Unique letters:", sorted(letters))

# Generator expression (lazy)
gen = (n * 10 for n in range(5))
print("Generator:", list(gen))`,
      codeOutput: `Squares: [1, 4, 9, 16, 25, 36, 49, 64]
Evens: [2, 4, 6, 8]
Cubes of odds: {1: 1, 3: 27, 5: 125, 7: 343}
Unique letters: ['a', 'b', 'c', 'd', 'r']
Generator: [0, 10, 20, 30, 40]`,
      visualizationTips: [
        "Read a comprehension right-to-left: first the loop, then the filter, then the expression.",
        "Visualize it as a factory line: items enter the conveyor belt (for), get checked (if), and come out transformed (expression).",
        "Compare a for+append loop with its comprehension in Python Tutor to see identical results with less code.",
      ],
      tipsAndTricks: [
        "Comprehensions are faster than manual append loops — measurable on big lists.",
        "Use a generator expression in sum(), max(), or any() to avoid building intermediate lists.",
        "Keep comprehensions on one line; if it does not fit, use a regular loop.",
      ],
      practice: [
        {
          id: "practice-word-lengths",
          title: "Word Length & Casing Normalizer",
          difficulty: "Easy",
          task: "Given words = ['python', 'ai', 'cloud', 'architecture'], use a list comprehension to create a list of tuples `(word.upper(), len(word))`.",
          hint: "[(w.upper(), len(w)) for w in words]",
          solution: `words = ['python', 'ai', 'cloud', 'architecture']\nstats = [(w.upper(), len(w)) for w in words]\nprint(stats)\n# Output: [('PYTHON', 6), ('AI', 2), ('CLOUD', 5), ('ARCHITECTURE', 12)]`,
        },
        {
          id: "practice-filter-matrix-flatten",
          title: "2D Matrix Flatten & Prime Filter",
          difficulty: "Medium",
          task: "Flatten a 3x3 matrix into a 1D list and filter only numbers that are divisible by 3 or greater than 50 using a nested list comprehension.",
          hint: "[val for row in matrix for val in row if val % 3 == 0 or val > 50]",
          solution: `matrix = [\n    [12, 5, 80],\n    [33, 14, 99],\n    [4, 18, 7]\n]\nfiltered = [val for row in matrix for val in row if val % 3 == 0 or val > 50]\nprint(f"Filtered Elements: {filtered}")`,
        },
        {
          id: "practice-dict-inversion-grouping",
          title: "Dictionary Inversion with Categorization",
          difficulty: "Medium",
          task: "Given marks = {'Amol': 88, 'Riya': 42, 'Sam': 65, 'Maya': 95}, build a dictionary comprehension categorizing each student as 'Pass' or 'Fail'.",
          hint: "{name: ('Pass' if score >= 60 else 'Fail') for name, score in marks.items()}",
          solution: `marks = {'Amol': 88, 'Riya': 42, 'Sam': 65, 'Maya': 95}\nstatus = {name: ("Pass" if score >= 60 else "Fail") for name, score in marks.items()}\nprint(status)`,
        },
        {
          id: "practice-set-domain-dedup",
          title: "Unique Email Domain Collector",
          difficulty: "Medium",
          task: "Given a list of customer emails containing duplicates, extract a sorted set of unique domain names using a set comprehension.",
          hint: "{e.split('@')[1].lower() for e in emails}",
          solution: `emails = [\n    "user1@gmail.com", "admin@company.org", "info@GMAIL.COM",\n    "help@domain.io", "support@company.org"\n]\ndomains = {e.split("@")[1].lower() for e in emails}\nprint(f"Unique Domains: {sorted(domains)}")`,
        },
        {
          id: "practice-matrix-transpose-comp",
          title: "Single-Line Matrix Transposition",
          difficulty: "Hard",
          task: "Transpose a 3x4 grid into a 4x3 grid using a single nested list comprehension.",
          hint: "[[row[i] for row in matrix] for i in range(len(matrix[0]))]",
          solution: `matrix = [\n    [1, 2, 3, 4],\n    [5, 6, 7, 8],\n    [9, 10, 11, 12],\n]\ntransposed = [[row[c] for row in matrix] for c in range(len(matrix[0]))]\nprint("Original (3x4):", matrix)\nprint("Transposed (4x3):", transposed)`,
        },
        {
          id: "practice-generator-pipeline",
          title: "Memory-Safe Log Event Aggregator",
          difficulty: "Hard",
          task: "Use a generator expression with sum() to parse and sum numeric byte sizes from simulated log strings 'GET /api 200 1420B' without loading all sizes into a list.",
          hint: "sum(int(line.split()[-1].rstrip('B')) for line in logs if '200' in line)",
          solution: `logs = [\n    "GET /index 200 450B",\n    "POST /login 200 120B",\n    "GET /data 404 0B",\n    "GET /dashboard 200 2800B"\n]\ntotal_bytes = sum(int(entry.split()[-1].rstrip("B")) for entry in logs if "200" in entry)\nprint(f"Total Successful Bytes Transferred: {total_bytes} B")`,
        },
      ],
    },
  ],
};
