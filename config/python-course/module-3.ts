import type { Module } from "../courses";

export const MODULE_3: Module = {
  id: "module-3-data-structures",
  title: "Module 3: Data Structures",
  description:
    "Master lists, tuples, sets, dictionaries, and the powerful tools in the collections module.",
  lectures: [
    {
      id: "lists-tuples",
      title: "Lecture 8: Lists & Tuples",
      shortDescription:
        "Mutable lists, immutable tuples, slicing, sorting, and common list methods.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Lists — Your All-Purpose Container

A **list** is an ordered, mutable collection. "Mutable" means you can add, remove, or change items after creation. Lists are the workhorse of Python — you will use them in almost every program you write.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
mixed = [1, "two", 3.0, True]     # lists can hold mixed types
empty = []
\`\`\`

#### What You'll Learn in This Lecture

- Create and manipulate lists with the essential methods
- Understand the difference between mutable lists and immutable tuples
- Slice and sort like a professional
- Use tuple unpacking for clean code

---

### Essential List Methods

| Method | What it does |
|---|---|
| \`append(x)\` | Add one item to the end |
| \`extend([...])\` | Add many items (like + but in place) |
| \`insert(i, x)\` | Insert x at position i |
| \`remove(x)\` | Remove the first matching item |
| \`pop(i)\` | Remove and return the item at i (default: last) |
| \`sort()\` | Sort in place (mutates the list) |
| \`index(x)\` | Find the position of x |
| \`count(x)\` | How many times x appears |
| \`copy()\` | Return a shallow copy |
| \`clear()\` | Remove everything |
| \`len(lst)\` | Number of items (built-in function) |

\`\`\`python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits.insert(1, "blueberry")
print(fruits)   # ['apple', 'blueberry', 'banana', 'cherry', 'date']
last = fruits.pop()
print(last)     # date
\`\`\`

---

### Sorting — In Place vs New List

Python has **two** sorting tools — confusing at first, but simple once you know:

| Tool | Mutates? | Returns | Use when |
|---|---|---|---|
| \`list.sort()\` | Yes | \`None\` | You want to change the original |
| \`sorted(list)\` | No | New list | You want to keep the original |

\`\`\`python
numbers = [42, 7, 19, 3]
numbers.sort()
print(numbers)                              # [3, 7, 19, 42]
print(sorted([3, 1, 2], reverse=True))      # [3, 2, 1] — original untouched
\`\`\`

Both accept a \`key\` for custom ordering and \`reverse=True\` for descending order:

\`\`\`python
names = ["python", "ai", "machine learning"]
print(sorted(names, key=len))   # ['ai', 'python', 'machine learning']
\`\`\`

---

### Tuples — Locked Lists

A **tuple** \`(1, 2, 3)\` is immutable — once created, it can never change. No append, no insert, no reassignment of items.

\`\`\`python
point = (3, 4)
# point[0] = 9   # TypeError: 'tuple' object does not support item assignment
\`\`\`

Use tuples for **fixed data**: coordinates, colors, RGB values, configuration constants, function return values. They are faster and safer than lists for data that must not change.

| | List \`[...]\` | Tuple \`(...)\` |
|---|---|---|
| Mutable | ✅ Yes | ❌ No |
| Speed | Slower | Faster |
| Use for | Dynamic collections | Fixed records |
| Example | Shopping cart | A point (x, y) |

> **Note:** a single-element tuple needs a trailing comma: \`(5,)\` — otherwise \`(5)\` is just the number 5 in parentheses.

---

### Tuple Unpacking — Elegant Swaps

Assigning a tuple to multiple variables "unpacks" it:

\`\`\`python
point = (3, 4)
x, y = point          # x=3, y=4
print(x, y)           # 3 4

a, b = 5, 10
a, b = b, a           # swap without a temp variable!
print(a, b)           # 10 5
\`\`\`

Functions that return multiple values use tuples under the hood — unpacking is how you grab them.

---

### Slicing Works on Both

Everything you learned about string slicing (Lecture 3) works on lists and tuples:

\`\`\`python
data = [10, 20, 30, 40, 50]
print(data[1:4])      # [20, 30, 40]
print(data[::-1])     # [50, 40, 30, 20, 10] — reversed
print(data[::2])      # [10, 30, 50]
\`\`\`

**Copy with slicing:** \`copy = original[:]\` creates a real copy. We will see why this matters in Lecture 11.

---

### Common Mistakes to Avoid

- **Mistake:** \`fruits[5]\` on a 3-item list — **Fix:** check \`len(fruits)\`; the last index is always \`len - 1\`.
- **Mistake:** Expecting \`sorted()\` to change the original — **Fix:** \`sorted()\` returns a new list; \`.sort()\` mutates.
- **Mistake:** Writing \`(5)\` and expecting a tuple — **Fix:** add the trailing comma: \`(5,)\`.
- **Mistake:** \`b = a\` thinking it copies the list — **Fix:** \`b = a[:]\` or \`b = a.copy()\` (see Lecture 11).

### Professional Tips & Tricks

- Use \`sort(key=...)\` for custom ordering, e.g. \`names.sort(key=len)\`.
- Prefer tuples for function return values — they are lighter and clearly 'fixed'.
- Copy lists with slicing: \`copy = original[:]\` — this avoids mutating the original.

---

### Key Takeaways

- Lists are ordered and mutable; tuples are ordered and immutable.
- \`append\`/\`extend\`/\`insert\`/\`pop\` are your core list tools.
- \`.sort()\` mutates; \`sorted()\` returns a new list.
- Tuple unpacking (\`a, b = b, a\`) makes swapping trivial.
- Slicing works identically on strings, lists, and tuples.

**Next up:** Sets & dictionaries — fast lookups and key-value data.`,
      codeLanguage: "python",
      codeSnippet: `# Lists: mutable and flexible
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits.insert(1, "blueberry")
print("After adds:", fruits)

# Sorting (in place vs new list)
numbers = [42, 7, 19, 3]
numbers.sort()
print("Sorted in place:", numbers)
print("Descending:", sorted(numbers, reverse=True))

# Tuples: immutable
point = (3, 4)
x, y = point          # tuple unpacking
print("Coordinates:", x, y)

# Tuples protect data
colors = ("red", "green", "blue")
print("First color:", colors[0], "| Count:", len(colors))`,
      codeOutput: `After adds: ['apple', 'blueberry', 'banana', 'cherry', 'date']
Sorted in place: [3, 7, 19, 42]
Descending: [42, 19, 7, 3]
Coordinates: 3 4
First color: red | Count: 3`,
      visualizationTips: [
        "Draw a list as a row of boxes with index numbers underneath (0, 1, 2...).",
        "For slicing, place your fingers at the two boundary positions and read what is between them.",
        "Compare lists vs tuples as a backpack you can repack vs a sealed box you cannot open to change.",
      ],
      tipsAndTricks: [
        "Use sort(key=...) for custom ordering, e.g. names.sort(key=len).",
        "Prefer tuples for function return values — they are lighter and clearly 'fixed'.",
        "Copy lists with slicing: copy = original[:] — this avoids mutating the original.",
      ],
      practice: [
        {
          id: "practice-stack",
          title: "Shopping Cart Stack",
          difficulty: "Easy",
          task: "Start with an empty list, append three items, then pop and print the last item.",
          hint: "cart.append(...) then cart.pop()",
          solution: `cart = []\ncart.append("pen")\ncart.append("book")\ncart.append("laptop")\nprint(cart.pop())  # laptop`,
        },
        {
          id: "practice-sort-len",
          title: "Sort by Length",
          difficulty: "Medium",
          task: "Given words = ['python', 'ai', 'machine learning'], sort them by length using a key.",
          hint: "sorted(words, key=len)",
          solution: `words = ['python', 'ai', 'machine learning']\nprint(sorted(words, key=len))\n# ['ai', 'python', 'machine learning']`,
        },
        {
          id: "practice-unpack",
          title: "Swap Without Temp",
          difficulty: "Medium",
          task: "Swap the values of two variables a and b using tuple unpacking (no third variable).",
          hint: "a, b = b, a",
          solution: `a, b = 5, 10\na, b = b, a\nprint(a, b)  # 10 5`,
        },
      ],
    },
    {
      id: "sets-dictionaries",
      title: "Lecture 9: Sets & Dictionaries",
      shortDescription:
        "Unordered sets for lightning-fast membership, and key-value dictionaries for real-world data.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Dictionaries — Data with Names

A **dictionary** stores key-value pairs — like a real dictionary where you look up a word (the key) and read its meaning (the value). Keys must be **unique** and **immutable** (strings, numbers, tuples). Values can be anything.

\`\`\`python
student = {"name": "Riya", "course": "Python", "score": 92}
\`\`\`

#### What You'll Learn in This Lecture

- Create, read, update, and delete dictionary entries
- Use \`.get()\` for safe access and \`.items()\` for iteration
- Understand sets and their lightning-fast membership checks
- Apply set math: union, intersection, difference

---

### Dictionary Essentials

| Operation | Syntax | Notes |
|---|---|---|
| Create | \`d = {"k": "v"}\` or \`d = dict(k="v")\` | — |
| Read | \`d["k"]\` | Raises \`KeyError\` if missing |
| Safe read | \`d.get("k", default)\` | Returns default if missing |
| Add / update | \`d["k"] = "v2"\` | Creates or overwrites |
| Delete | \`del d["k"]\` | Raises KeyError if missing |
| Pop | \`d.pop("k", default)\` | Removes and returns |
| All keys | \`d.keys()\` | View of keys |
| All values | \`d.values()\` | View of values |
| All pairs | \`d.items()\` | View of (key, value) tuples |

**The golden rule:** use \`.get()\` for optional keys — never let a missing key crash your program.

\`\`\`python
student = {"name": "Riya", "score": 92}
print(student.get("grade", "Not assigned"))   # Not assigned
student["grade"] = "A"                        # add a new key
for key, value in student.items():
    print(f"  {key}: {value}")
\`\`\`

> **Mental model:** a dictionary is a two-column table (key | value) with instant lookup. Python does not scan the table — it computes a hash of the key and jumps straight to the right row.

---

### Sets — Unique & Fast

A **set** is an unordered collection of **unique** items. Two superpowers:

1. **Deduplication:** converting a list to a set removes duplicates in one line.
2. **Speed:** membership checks (\`x in set\`) are O(1) — instant, even with a million items.

\`\`\`python
colors = {"red", "green", "blue"}
colors.add("yellow")
colors.remove("red")         # raises KeyError if missing
colors.discard("purple")     # safe — no error if missing
\`\`\`

**Note:** sets are unordered — you cannot index them (\`s[0]\` fails). And they can only hold *hashable* items, so lists and dicts cannot be set members.

---

### Set Operations — Math for Data

| Operation | Symbol | Method | Meaning |
|---|---|---|---|
| Union | \`A | B\` | \`A.union(B)\` | Items in either |
| Intersection | \`A & B\` | \`A.intersection(B)\` | Items in both |
| Difference | \`A - B\` | \`A.difference(B)\` | In A, not in B |
| Symmetric diff | \`A ^ B\` | \`A.symmetric_difference(B)\` | In exactly one |

\`\`\`python
batch1 = {"Amol", "Riya", "Sam"}
batch2 = {"Riya", "Sam", "Neha"}
print(batch1 | batch2)   # {'Amol', 'Riya', 'Sam', 'Neha'}
print(batch1 & batch2)   # {'Riya', 'Sam'}
print(batch1 - batch2)   # {'Amol'}
\`\`\`

> **Venn diagram:** picture two overlapping circles. Union = everything, intersection = the overlap, difference = one circle minus the overlap.

---

### When to Use What

| Need | Use | Why |
|---|---|---|
| Ordered, changeable items | List | Workhorse collection |
| Fixed record | Tuple | Immutable, fast |
| Lookup by name | Dict | Key → value, O(1) |
| Membership / dedupe | Set | O(1) \`in\` checks |

---

### Common Mistakes to Avoid

- **Mistake:** \`d["missing"]\` crashing — **Fix:** use \`.get("missing", default)\`.
- **Mistake:** Trying to use a list as a dict key or set member — **Fix:** convert to a tuple first.
- **Mistake:** Mutating a dict/set while iterating over it — **Fix:** iterate over a copy: \`for k in list(d):\`.
- **Mistake:** Expecting sets to keep insertion order — **Fix:** sets are unordered; use a list or dict if order matters.

### Professional Tips & Tricks

- Always use \`.get()\` for optional keys — never let a missing key crash your program.
- Use \`collections.Counter\` for counting — it is a dict subclass made for tallying.
- Convert a list to a set to remove duplicates in one line: \`list(set(items))\`.

---

### Key Takeaways

- Dicts map unique immutable keys to values with O(1) lookup.
- \`.get()\` prevents KeyErrors; \`.items()\` powers clean iteration.
- Sets store unique items and give instant membership checks.
- \`|\`, \`&\`, \`-\`, \`^\` perform set math.
- Use \`list(set(items))\` to deduplicate in one line.

**Next up:** The \`collections\` module — Counter, defaultdict, deque & namedtuple.`,
      codeLanguage: "python",
      codeSnippet: `# Dictionaries: key-value data
student = {"name": "Riya", "course": "Python", "score": 92}

# Reading with .get() — safe access
print("Name:", student["name"])
print("Grade:", student.get("grade", "Not assigned"))

# Adding / updating
student["grade"] = "A"
print("Updated:", student)

# Iterating items
for key, value in student.items():
    print(f"  {key}: {value}")

# Sets: uniqueness + set math
batch1 = {"Amol", "Riya", "Sam"}
batch2 = {"Riya", "Sam", "Neha"}
print("Unique students:", batch1 | batch2)
print("In both batches:", batch1 & batch2)
print("Only in batch1:", batch1 - batch2)`,
      codeOutput: `Name: Riya
Grade: Not assigned
Updated: {'name': 'Riya', 'course': 'Python', 'score': 92, 'grade': 'A'}
  name: Riya
  course: Python
  score: 92
  grade: A
Unique students: {'Amol', 'Riya', 'Sam', 'Neha'}
In both batches: {'Riya', 'Sam'}
Only in batch1: {'Amol'}`,
      visualizationTips: [
        "Draw a dict as a two-column table: key | value. Lookups jump straight to the right row.",
        "Visualize set operations as overlapping circles (Venn diagrams) — union, intersection, difference.",
        "Use 'x in container' as a mental instant-lookup for sets vs a linear scan for lists.",
      ],
      tipsAndTricks: [
        "Always use .get() for optional keys — never let a missing key crash your program.",
        "Use collections.Counter for counting — it is a dict subclass made for tallying.",
        "Convert a list to a set to remove duplicates in one line: list(set(items)).",
      ],
      practice: [
        {
          id: "practice-phonebook",
          title: "Mini Phonebook",
          difficulty: "Easy",
          task: "Create a dict with three names and phone numbers, then print the number for one name using .get().",
          hint: "phonebook.get('Amol')",
          solution: `phonebook = {"Amol": "9876543210", "Riya": "9123456789", "Sam": "9000000000"}\nprint(phonebook.get("Amol"))`,
        },
        {
          id: "practice-word-count",
          title: "Word Frequency",
          difficulty: "Medium",
          task: "Count how many times each word appears in the list words = ['cat', 'dog', 'cat', 'bird'] and print the result as a dict.",
          hint: "Loop and use counts.get(w, 0) + 1, or collections.Counter",
          solution: `words = ["cat", "dog", "cat", "bird"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint(counts)  # {'cat': 2, 'dog': 1, 'bird': 1}`,
        },
        {
          id: "practice-set-filter",
          title: "Common Friends",
          difficulty: "Easy",
          task: "Given two lists of friends, print only the friends who appear in both lists using a set intersection.",
          hint: "set(f1) & set(f2)",
          solution: `f1 = ["a", "b", "c"]\nf2 = ["b", "c", "d"]\nprint(set(f1) & set(f2))  # {'b', 'c'}`,
        },
      ],
    },
    {
      id: "advanced-collections",
      title: "Lecture 10: Advanced Collections — Counter, defaultdict & deque",
      shortDescription:
        "Supercharge your data with Counter, defaultdict, deque, and namedtuple from the collections module.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### The collections Module — Professional Tools

The \`collections\` module ships with specialized containers that solve common problems in one line. Once you know them, you will wonder how you lived without them. This lecture covers the four you will use constantly.

#### What You'll Learn in This Lecture

- Tally anything instantly with \`Counter\`
- Stop fearing missing keys with \`defaultdict\`
- Build fast queues with \`deque\`
- Create self-documenting records with \`namedtuple\`

---

### Counter — Instant Tallies

\`Counter\` counts hashable items and gives you \`.most_common()\` for free:

\`\`\`python
from collections import Counter

votes = ["python", "python", "ai", "ml", "ai", "ai"]
tally = Counter(votes)
print(tally)                    # Counter({'ai': 3, 'python': 2, 'ml': 1})
print(tally.most_common(2))     # [('ai', 3), ('python', 2)]
\`\`\`

It also works on any iterable — including strings (counts characters):

\`\`\`python
print(Counter("mississippi").most_common(1))  # [('s', 4)]
\`\`\`

> **Mental model:** a tally sheet where every item adds one tick.

---

### defaultdict — Never Fear Missing Keys

A normal dict raises \`KeyError\` on missing keys. A \`defaultdict\` returns a **default value** instead — automatically creating the entry:

\`\`\`python
from collections import defaultdict

teams = defaultdict(list)
teams["IT"].append("Amol")   # no KeyError — key auto-created!
teams["IT"].append("Sam")
teams["HR"].append("Riya")
print(dict(teams))   # {'IT': ['Amol', 'Sam'], 'HR': ['Riya']}
\`\`\`

The argument to \`defaultdict\` is a *factory* — a function that creates the default:

| Factory | Default value |
|---|---|
| \`defaultdict(list)\` | \`[]\` |
| \`defaultdict(int)\` | \`0\` |
| \`defaultdict(set)\` | \`set()\` |
| \`defaultdict(dict)\` | \`{}\` |

This removes endless \`if key not in dict:\` boilerplate — ideal when grouping data.

---

### deque — Fast Operations on Both Ends

A \`deque\` (double-ended queue) gives O(1) append/pop on **both** ends. Lists are O(n) for left-side operations; deques are instant:

\`\`\`python
from collections import deque

queue = deque(["a", "b"])
queue.append("c")        # add to right end
queue.appendleft("z")    # add to left end
queue.popleft()          # remove from left
print(list(queue))       # ['a', 'b', 'c']
\`\`\`

| | List | deque |
|---|---|---|
| Append right | O(1) | O(1) |
| Pop left / insert left | O(n) | **O(1)** |
| Random access | O(1) | O(n) |

Use \`deque\` for queues, recent-history buffers, and any structure needing fast left-end operations. \`deque(maxlen=100)\` auto-drops the oldest item — a rolling buffer.

---

### namedtuple — Self-Documenting Data

\`namedtuple\` creates lightweight objects with named fields — cleaner than a plain tuple, lighter than a class:

\`\`\`python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)     # 3 4  — access by name
print(p[0])         # 3   — still works by index
\`\`\`

Perfect for coordinates, records, and configuration — you get readability without writing a full class.

---

### Common Mistakes to Avoid

- **Mistake:** Passing an unhashable (like a list) to \`Counter\` — **Fix:** Counter needs hashable items.
- **Mistake:** Reading from a \`defaultdict\` and unintentionally creating keys — **Fix:** use \`defaultdict\` only for writes, or use \`.get()\` when reading counts.
- **Mistake:** \`queue[0]\` style random access on a huge deque — **Fix:** deques are for ends; use a list for random access.

### Professional Tips & Tricks

- \`most_common(n)\` turns 'analyze frequencies' into one line.
- \`defaultdict(list)\` is the go-to for grouping — dict comprehension of lists, without boilerplate.
- Use \`deque(maxlen=100)\` for a rolling buffer that auto-drops the oldest item.

---

### Key Takeaways

- \`Counter\` tallies items and ranks them with \`.most_common()\`.
- \`defaultdict(factory)\` auto-creates missing keys.
- \`deque\` gives O(1) operations on both ends — the right tool for queues.
- \`namedtuple\` gives named fields with tuple performance.

**Next up:** Nested structures, aliasing & copies — where beginners lose hours.`,
      codeLanguage: "python",
      codeSnippet: `from collections import Counter, defaultdict, deque, namedtuple

# Counter: tally votes
votes = ["python", "python", "ai", "ml", "ai", "ai"]
tally = Counter(votes)
print("Tally:", tally)
print("Top 2:", tally.most_common(2))

# defaultdict: group by department
employees = [("IT", "Amol"), ("HR", "Riya"), ("IT", "Sam")]
teams = defaultdict(list)
for dept, name in employees:
    teams[dept].append(name)
print("Teams:", dict(teams))

# deque: fast queue
queue = deque(["a", "b"])
queue.append("c")
queue.popleft()
print("Queue:", list(queue))

# namedtuple: readable records
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print("Point:", p.x, p.y)`,
      codeOutput: `Tally: Counter({'ai': 3, 'python': 2, 'ml': 1})
Top 2: [('ai', 3), ('python', 2)]
Teams: {'IT': ['Amol', 'Sam'], 'HR': ['Riya']}
Queue: ['b', 'c']
Point: 3 4`,
      visualizationTips: [
        "Picture Counter as a tally sheet where every item adds one tick.",
        "Visualize defaultdict as a table that auto-fills an empty cell with a default the first time it is touched.",
        "Draw a deque as a train with doors at both ends — boarding and leaving is instant at either end.",
      ],
      tipsAndTricks: [
        "most_common(n) turns 'analyze frequencies' into one line.",
        "defaultdict(list) is the go-to for grouping — dict comprehension of lists, without boilerplate.",
        "Use deque(maxlen=100) for a rolling buffer that auto-drops the oldest item.",
      ],
      practice: [
        {
          id: "practice-most-common",
          title: "Most Frequent Letter",
          difficulty: "Easy",
          task: "Use Counter to find the most common character in 'mississippi'.",
          hint: "Counter('mississippi').most_common(1)",
          solution: `from collections import Counter\nprint(Counter("mississippi").most_common(1))  # [('s', 4)]`,
        },
        {
          id: "practice-group-scores",
          title: "Group by Score",
          difficulty: "Medium",
          task: "Given pairs [('A', 10), ('B', 20), ('A', 30)], group the scores by letter using defaultdict(list).",
          hint: "d[letter].append(score)",
          solution: `from collections import defaultdict\npairs = [("A", 10), ("B", 20), ("A", 30)]\ngroups = defaultdict(list)\nfor letter, score in pairs:\n    groups[letter].append(score)\nprint(dict(groups))  # {'A': [10, 30], 'B': [20]}`,
        },
        {
          id: "practice-queue-sim",
          title: "Ticket Queue",
          difficulty: "Medium",
          task: "Simulate a queue: start with ['t1','t2'], add 't3', serve (popleft) two people, and print who remains.",
          hint: "Use deque and popleft()",
          solution: `from collections import deque\nq = deque(["t1", "t2"])\nq.append("t3")\nq.popleft()\nq.popleft()\nprint(list(q))  # ['t3']`,
        },
      ],
    },
    {
      id: "nested-copies",
      title: "Lecture 11: Nested Structures, Aliasing & Copies",
      shortDescription:
        "Build nested dicts and lists, understand how references behave, and copy safely.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Nested Structures — Data Inside Data

Real-world data is rarely flat. A student dict contains a list of scores. A company is a list of employee dicts. Python handles any nesting depth — you just need to keep the brackets straight:

\`\`\`python
employees = [
    {"name": "Amol", "skills": ["python", "ai"]},
    {"name": "Riya", "skills": ["sql", "pandas"]},
]
print(employees[0]["name"])        # Amol
print(employees[0]["skills"][0])   # python
\`\`\`

Read nested access **outside-in**: the outermost bracket first, then work inward.

#### What You'll Learn in This Lecture

- Build and navigate nested lists and dicts
- Understand aliasing — two names, one object
- Copy safely with shallow vs deep copies
- Distinguish \`==\` (value) from \`is\` (identity)

---

### Aliasing — Two Names, One Object

This is the trap that confuses every beginner:

\`\`\`python
original = [1, 2, [3, 4]]
alias = original          # NOT a copy!
alias.append(99)
print(original)           # [1, 2, [3, 4], 99] — original changed too!
\`\`\`

When you write \`b = a\`, both names point to the **SAME list in memory**. Change one, and the other changes too. There is only one object — just two labels for it.

> **Draw arrows:** \`alias\` and \`original\` are two arrows pointing at the same box. There is no second box.

---

### Shallow vs Deep Copy

To get an independent copy, you must ask for one — and there are two depths:

| Copy | How | Nested objects? |
|---|---|---|
| **Shallow** | \`a.copy()\`, \`list(a)\`, \`a[:]\` | Still **shared** |
| **Deep** | \`copy.deepcopy(a)\` | Fully **independent** |

\`\`\`python
import copy

original = [1, 2, [3, 4]]

shallow = original.copy()
shallow[2].append(100)
print(original)      # [1, 2, [3, 4], 100] — inner list STILL shared!

deep = copy.deepcopy(original)
deep[2].append(200)
print(original)      # [1, 2, [3, 4], 100] — deep copy is fully independent
\`\`\`

- A **shallow copy** creates a new outer container, but the *inner* objects are still the same objects.
- A **deep copy** duplicates everything, recursively — nothing is shared.

---

### == vs is vs id

Three different questions:

| Operator | Asks | Example |
|---|---|---|
| \`==\` | Do they have the same **value**? | \`[1,2] == [1,2]\` → True |
| \`is\` | Are they the **same object** in memory? | \`[1,2] is [1,2]\` → False |
| \`id(x)\` | What is the object's memory address? | debugging tool |

\`\`\`python
a = [1, 2]
b = a          # same object
c = [1, 2]     # different object, same value
print(a == c)  # True  — same values
print(a is c)  # False — different objects
print(a is b)  # True  — same object
\`\`\`

Use \`==\` for comparisons in normal code. Use \`is\` for singletons (\`is None\`, \`is True\`) and identity checks.

---

### The [[0] * 3] * 3 Trap

Creating a matrix the "obvious" way is a classic bug:

\`\`\`python
bad = [[0] * 3] * 3      # 3 references to the SAME inner list!
bad[0][0] = 1
print(bad)               # [[1, 0, 0], [1, 0, 0], [1, 0, 0]]  — oops!
\`\`\`

The \`*\` operator repeats *references*, not copies. The correct way:

\`\`\`python
good = [[0] * 3 for _ in range(3)]   # 3 independent lists
good[0][0] = 1
print(good)              # [[1, 0, 0], [0, 0, 0], [0, 0, 0]]  — correct!
\`\`\`

---

### Common Mistakes to Avoid

- **Mistake:** \`b = a\` then mutating \`b\` and seeing \`a\` change — **Fix:** use \`a[:]\`, \`.copy()\`, or \`copy.deepcopy()\`.
- **Mistake:** Shallow copy on nested data and still seeing shared inner lists — **Fix:** use \`copy.deepcopy()\` for nested structures.
- **Mistake:** \`[[0]*3]*3\` matrices sharing rows — **Fix:** build with a comprehension.

### Professional Tips & Tricks

- If you need an independent list, always use \`.copy()\` or slicing — never bare assignment.
- Use deepcopy only when structures are nested; it is slower.
- Prefer immutable tuples for data you never change — they cannot be aliased-mutated.

---

### Key Takeaways

- Nested access reads outside-in; mind the brackets.
- Assignment (\`b = a\`) creates an alias, not a copy.
- Shallow copies share inner objects; deep copies share nothing.
- \`==\` compares values; \`is\` compares identity.
- Build matrices with comprehensions, never \`[[0]*3]*3\`.

**Next up:** Module 4 — functions, your reusable building blocks.`,
      codeLanguage: "python",
      codeSnippet: `import copy

# Nested structure: list of dicts
employees = [
    {"name": "Amol", "skills": ["python", "ai"]},
    {"name": "Riya", "skills": ["sql", "pandas"]},
]
print("First employee:", employees[0]["name"])
print("Skills:", employees[0]["skills"])

# Aliasing: b refers to the SAME list
original = [1, 2, [3, 4]]
alias = original
alias.append(99)
print("Original mutated by alias:", original)

# Shallow copy: outer is new, inner list still shared
shallow = original.copy()
shallow[2].append(100)
print("Shallow copy affects original inner:", original)

# Deep copy: fully independent
deep = copy.deepcopy(original)
deep[2].append(200)
print("Deep copy leaves original untouched:", original)`,
      codeOutput: `First employee: Amol
Skills: ['python', 'ai']
Original mutated by alias: [1, 2, [3, 4], 99]
Shallow copy affects original inner: [1, 2, [3, 4], 99, 100]
Deep copy leaves original untouched: [1, 2, [3, 4], 99, 100]`,
      visualizationTips: [
        "Draw arrows: alias = second arrow to the same box; copy = a brand-new box.",
        "Check id(original) vs id(alias) — identical ids mean one object.",
        "For nested data, picture boxes inside boxes: shallow copy reuses the inner boxes, deep copy rebuilds them all.",
      ],
      tipsAndTricks: [
        "If you need an independent list, always use .copy() or slicing — never bare assignment.",
        "Use deepcopy only when structures are nested; it is slower.",
        "prefer immutable tuples for data you never change — they cannot be aliased-mutated.",
      ],
      practice: [
        {
          id: "practice-aliasing",
          title: "Alias Detective",
          difficulty: "Easy",
          task: "Create a = [1, 2], then b = a, then b.append(3). Print a and explain what happens.",
          hint: "b = a does NOT copy",
          solution: `a = [1, 2]\nb = a\nb.append(3)\nprint(a)  # [1, 2, 3] — b and a are the same list!`,
        },
        {
          id: "practice-matrix",
          title: "Build a 3x3 Grid",
          difficulty: "Medium",
          task: "Create a 3x3 grid (list of lists) where every cell contains 0.",
          hint: "[[0] * 3 for _ in range(3)] — never [[0]*3]*3!",
          solution: `grid = [[0] * 3 for _ in range(3)]\nprint(grid)  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]`,
        },
        {
          id: "practice-deepcopy",
          title: "Safe Copy",
          difficulty: "Medium",
          task: "Given data = {'team': ['a', 'b']}, make an independent deep copy, add 'c' to the copy's team, and print both.",
          hint: "copy.deepcopy(data)",
          solution: `import copy\ndata = {"team": ["a", "b"]}\ncopy_data = copy.deepcopy(data)\ncopy_data["team"].append("c")\nprint(data)       # {'team': ['a', 'b']}\nprint(copy_data)  # {'team': ['a', 'b', 'c']}`,
        },
      ],
    },
  ],
};
