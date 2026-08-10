import type { Module } from "../courses";

export const MODULE_2: Module = {
  id: "module-2-control-flow",
  title: "Module 2: Control Flow",
  description:
    "Make decisions with conditionals, repeat work with loops, and write elegant comprehensions.",
  lectures: [
    {
      id: "loops-conditionals",
      title: "Lecture 5: Conditional Branches & Loops",
      shortDescription:
        "Evaluating truth tables, if/elif/else routing, for and while loops, break, and continue.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Controlling Execution Flow

A program runs **sequentially** by default — top to bottom, one line after another. Conditionals and loops are what give your program the power to **make decisions** and **repeat work**. Together they turn a static script into dynamic, intelligent software.

#### What You'll Learn in This Lecture

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

> **Trace-table tip:** write a small table with columns for the loop variable and the output. Step through each iteration — this is exactly what Python does.

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

---

### Common Mistakes to Avoid

- **Mistake:** \`if score = 90:\` — **Fix:** comparison needs \`==\`, not \`=\`.
- **Mistake:** An infinite \`while True:\` with no \`break\` — **Fix:** ensure the condition or a break eventually stops it.
- **Mistake:** Checking \`elif\` conditions in the wrong order (e.g., \`>= 60\` before \`>= 90\`) — **Fix:** order from most to least specific.

### Professional Tips & Tricks

- Put the most likely condition first for slightly faster, clearer code.
- \`while True + break\` is a clean pattern for menus and input validation loops.
- \`range(start, stop, step)\` gives you full control over for-loop stepping.

---

### Key Takeaways

- \`if/elif/else\` runs exactly one branch — first True wins.
- Truthiness lets you write \`if items:\` instead of \`if len(items) > 0:\`.
- \`for\` iterates over sequences; \`while\` repeats until False.
- \`break\` stops a loop; \`continue\` skips one iteration.
- Always ensure while loops can terminate.

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
          id: "practice-even-odd",
          title: "Even or Odd",
          difficulty: "Easy",
          task: "Loop over numbers 1 to 10 and print whether each is even or odd.",
          hint: "Use % 2 and if/else inside a for loop",
          solution: `for n in range(1, 11):\n    if n % 2 == 0:\n        print(f"{n} is even")\n    else:\n        print(f"{n} is odd")`,
        },
        {
          id: "practice-while-guess",
          title: "Guess the Number",
          difficulty: "Medium",
          task: "Write a while loop that prints numbers from 10 down to 1, then prints 'Blast off!'.",
          hint: "n = 10; while n > 0: print(n); n -= 1",
          solution: `n = 10\nwhile n > 0:\n    print(n)\n    n -= 1\nprint("Blast off!")`,
        },
        {
          id: "practice-grade-chain",
          title: "Grade Chain",
          difficulty: "Medium",
          task: "Given score = 74, print 'A' if >= 90, 'B' if >= 75, 'C' if >= 60, else 'F'.",
          hint: "Build an if/elif/else chain from highest to lowest",
          solution: `score = 74\nif score >= 90:\n    print("A")\nelif score >= 75:\n    print("B")\nelif score >= 60:\n    print("C")\nelse:\n    print("F")\n# Output: C`,
        },
      ],
    },
    {
      id: "loop-control-nested",
      title: "Lecture 6: Loop Control, Nested Loops & The else Clause",
      shortDescription:
        "Master break, continue, pass, loop else clauses, and nested loops with trace tables.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Taking Full Control of Loops

Plain \`for\` and \`while\` loops get you 80% of the way. The remaining 20% — fine-grained control — is what separates beginner code from professional code. This lecture covers the three interrupts, the secret \`else\` clause, and nested loops.

#### What You'll Learn in This Lecture

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

---

### Common Mistakes to Avoid

- **Mistake:** Using a flag variable when \`else\` would work — **Fix:** prefer the loop \`else\` for "not found" logic.
- **Mistake:** 3+ levels of nested loops — **Fix:** break them into functions; deep nesting is a readability killer.
- **Mistake:** Forgetting to update the counter in a \`while\` loop — **Fix:** always move toward the exit condition.

### Professional Tips & Tricks

- Prefer \`break + else\` over a boolean flag like \`found = False\` — it is more Pythonic.
- Avoid deeply nested loops (3+ levels); break them into functions.
- \`for i, v in enumerate(items)\` gives both index and value.

---

### Key Takeaways

- \`break\` exits, \`continue\` skips, \`pass\` is a placeholder.
- Loop \`else\` runs only when no \`break\` happened — perfect for search-failed logic.
- Nested loops = inner loop completes fully per outer iteration.
- \`enumerate()\` and \`zip()\` remove index/bookkeeping boilerplate.

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
          id: "practice-first-prime",
          title: "First Prime Finder",
          difficulty: "Medium",
          task: "Find and print the first prime number greater than 10 using break and else.",
          hint: "For each candidate, test divisibility with an inner loop; break out if divisible.",
          solution: `for n in range(11, 100):\n    for d in range(2, n):\n        if n % d == 0:\n            break\n    else:\n        print("First prime > 10:", n)\n        break`,
        },
        {
          id: "practice-grid-pattern",
          title: "Star Grid",
          difficulty: "Easy",
          task: "Use nested loops to print a 3x3 grid of asterisks.",
          hint: "Outer loop = rows, inner loop = columns",
          solution: `for i in range(3):\n    for j in range(3):\n        print("*", end=" ")\n    print()`,
        },
        {
          id: "practice-sum-skip",
          title: "Sum Without Multiples",
          difficulty: "Medium",
          task: "Sum all numbers from 1 to 20 that are NOT multiples of 4, using continue.",
          hint: "if n % 4 == 0: continue; else add to total",
          solution: `total = 0\nfor n in range(1, 21):\n    if n % 4 == 0:\n        continue\n    total += n\nprint(total)  # 150`,
        },
      ],
    },
    {
      id: "comprehensions",
      title: "Lecture 7: Comprehensions — Clean, Fast Loops",
      shortDescription:
        "Build lists, dicts, and sets in one elegant line with comprehensions and generator expressions.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### The Most Pythonic Loop

A **list comprehension** builds a new list in a single expression. It is shorter, faster, and easier to read than a manual \`for\` loop that appends. Once you learn to read them, comprehensions become the tool you reach for first.

#### What You'll Learn in This Lecture

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

---

### When NOT to Use a Comprehension

Comprehensions are powerful but not always the answer:

- Logic needs more than one condition → write a normal loop.
- The body spans multiple lines → write a normal loop.
- You only need the side effect (like printing) → a normal loop is clearer.
- Readability always wins. If the comprehension is hard to read, it is too clever.

---

### Common Mistakes to Avoid

- **Mistake:** Putting the condition after the expression but with wrong order — **Fix:** remember: \`[expr for item in seq if cond]\` — the \`if\` always comes after the \`for\`.
- **Mistake:** Using a comprehension for side effects like \`print\` — **Fix:** use a regular loop; comprehensions are for building collections.
- **Mistake:** A comprehension too long to fit on one line — **Fix:** switch to a loop. One-liners are only elegant when short.

### Professional Tips & Tricks

- Comprehensions are faster than manual append loops — measurable on big lists.
- Use a generator expression in sum(), max(), or any() to avoid building intermediate lists.
- Keep comprehensions on one line; if it does not fit, use a regular loop.

---

### Key Takeaways

- \`[expr for item in seq if cond]\` builds lists in one line.
- Same pattern with \`{}\` builds sets and dicts.
- Parentheses \`( )\` make a lazy, memory-friendly generator.
- Use comprehensions for transformations; use loops for side effects and complex logic.

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
          title: "Word Lengths",
          difficulty: "Easy",
          task: "Given words = ['python', 'ai', 'code'], build a list of each word's length with a comprehension.",
          hint: "[len(w) for w in words]",
          solution: `words = ['python', 'ai', 'code']\nlengths = [len(w) for w in words]\nprint(lengths)  # [6, 2, 4]`,
        },
        {
          id: "practice-filter-squares",
          title: "Squares of Evens",
          difficulty: "Medium",
          task: "Build a list of squares for even numbers between 1 and 10 (inclusive).",
          hint: "[n**2 for n in range(1, 11) if n % 2 == 0]",
          solution: `squares = [n**2 for n in range(1, 11) if n % 2 == 0]\nprint(squares)  # [4, 16, 36, 64, 100]`,
        },
        {
          id: "practice-dict-marks",
          title: "Passing Students Dict",
          difficulty: "Medium",
          task: "Given marks = {'Amol': 88, 'Riya': 42, 'Sam': 65}, build a dict of students who passed (>= 60).",
          hint: "{name: score for name, score in marks.items() if score >= 60}",
          solution: `marks = {'Amol': 88, 'Riya': 42, 'Sam': 65}\npassed = {name: score for name, score in marks.items() if score >= 60}\nprint(passed)  # {'Amol': 88, 'Sam': 65}`,
        },
      ],
    },
  ],
};
