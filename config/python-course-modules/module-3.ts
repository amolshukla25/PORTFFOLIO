import type { Module } from "../courses";

export const MODULE_3: Module = {
  id: "module-3-data-structures",
  title: "Module 3: Data Structures",
  description:
    "Master lists, tuples, sets, dictionaries, and the powerful tools in the collections module.",
  lessons: [
    {
      id: "lists-tuples",
      title: "Lesson 8: Lists & Tuples",
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

Think of a list as a **row of labeled boxes** — each box holds a value, the boxes are in a fixed order, and you can put things in, take things out, or swap contents at any time. That flexibility is why lists dominate everyday Python.

#### What You'll Learn in This Lesson

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

**append vs extend — the classic confusion:**

| Code | Result |
|---|---|
| \`a = [1, 2]; a.append([3, 4])\` | \`[1, 2, [3, 4]]\` — nested list added as ONE item |
| \`b = [1, 2]; b.extend([3, 4])\` | \`[1, 2, 3, 4]\` — items flattened into the list |

> **Mental model:** \`append\` adds one box to the row (whatever is inside it, even another row). \`extend\` unpacks a whole tray and shelves each item separately.

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

The \`key\` receives each item and returns the value used for comparison — sort by length, by last letter, by a dict field, by anything. This is one of the most-used patterns in professional Python.

> **Memory note:** \`sorted()\` builds a new list, so for a huge list where you don't need the original, \`.sort()\` is more memory-friendly.

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

**Tuples as dict keys:** because tuples are immutable (and hashable), they can serve as dictionary keys — for example, a \`(latitude, longitude)\` pair mapping to a city name. Lists cannot.

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

**Extended unpacking** with \`*\` handles uneven lengths:

\`\`\`python
first, *rest = [1, 2, 3, 4]
print(first)   # 1
print(rest)    # [2, 3, 4]

head, *middle, tail = "Python"
print(head, middle, tail)   # P ['y', 't', 'h', 'o'] n
\`\`\`

---

### Slicing Works on Both

Everything you learned about string slicing (Lesson 3) works on lists and tuples:

\`\`\`python
data = [10, 20, 30, 40, 50]
print(data[1:4])      # [20, 30, 40]
print(data[::-1])     # [50, 40, 30, 20, 10] — reversed
print(data[::2])      # [10, 30, 50]
\`\`\`

**Copy with slicing:** \`copy = original[:]\` creates a real copy. We will see why this matters in Lesson 11.

---

### Real-World List Patterns

- **Stack** (last-in, first-out): \`push = lst.append(x)\`, \`pop = lst.pop()\`.
- **Queue** (first-in, first-out): \`enqueue = lst.append(x)\`, \`dequeue = lst.pop(0)\` (for big queues, \`collections.deque\` is faster — Lesson 10).
- **Comprehension building:** \`[f(x) for x in data]\` (Lesson 7).
- **In-place unique:** \`list(set(items))\` (Lesson 9).
- **Max / min / sum:** \`max(lst)\`, \`min(lst)\`, \`sum(lst)\` — built-ins that work directly on lists.

---

### Common Mistakes to Avoid

- **Mistake:** \`fruits[5]\` on a 3-item list — **Fix:** check \`len(fruits)\`; the last index is always \`len - 1\`.
- **Mistake:** Expecting \`sorted()\` to change the original — **Fix:** \`sorted()\` returns a new list; \`.sort()\` mutates.
- **Mistake:** Writing \`(5)\` and expecting a tuple — **Fix:** add the trailing comma: \`(5,)\`.
- **Mistake:** \`b = a\` thinking it copies the list — **Fix:** \`b = a[:]\` or \`b = a.copy()\` (see Lesson 11).
- **Mistake:** \`append\` when you meant \`extend\` — **Fix:** use \`extend\` to merge item-by-item.
- **Mistake:** Trying to change a tuple — **Fix:** if you need mutability, use a list.

### Professional Tips & Tricks

- Use \`sort(key=...)\` for custom ordering, e.g. \`names.sort(key=len)\`.
- Prefer tuples for function return values — they are lighter and clearly 'fixed'.
- Copy lists with slicing: \`copy = original[:]\` — this avoids mutating the original.
- Use extended unpacking \`first, *rest = items\` to peel off the head of a list.

---

### Key Takeaways

- Lists are ordered and mutable; tuples are ordered and immutable.
- \`append\`/\`extend\`/\`insert\`/\`pop\` are your core list tools.
- \`.sort()\` mutates; \`sorted()\` returns a new list.
- Tuple unpacking (\`a, b = b, a\`) makes swapping trivial.
- Slicing works identically on strings, lists, and tuples.
- Tuples are hashable — they can be dict keys; lists cannot.

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
          id: "practice-cart-stack",
          title: "Shopping Cart Stack & Order Dispatcher",
          difficulty: "Easy",
          task: "Simulate a shopping cart: append items 'Laptop', 'Headphones', 'Mouse'. Pop the last item, insert 'Keyboard' at index 1, and print the final cart.",
          hint: "Use .append(), .pop(), and .insert(index, item).",
          solution: `cart = []\ncart.append("Laptop")\ncart.append("Headphones")\ncart.append("Mouse")\npopped = cart.pop()\ncart.insert(1, "Keyboard")\nprint(f"Removed item: {popped}")\nprint(f"Updated Cart: {cart}")`,
        },
        {
          id: "practice-multi-key-sorter",
          title: "Multi-Key Tuple & Student Sorter",
          difficulty: "Medium",
          task: "Sort a list of student records `(name, grade, age)` by grade descending, and then by age ascending as a tiebreaker.",
          hint: "Use sorted(students, key=lambda s: (-s[1], s[2]))",
          solution: `students = [\n    ("Amol", 88, 22),\n    ("Riya", 95, 20),\n    ("Sam", 88, 19),\n    ("John", 75, 21),\n    ("Priya", 95, 23)\n]\nsorted_students = sorted(students, key=lambda s: (-s[1], s[2]))\nprint("Ranked Students:")\nfor rank, s in enumerate(sorted_students, 1):\n    print(f"#{rank}: {s[0]} | Score: {s[1]} | Age: {s[2]}")`,
        },
        {
          id: "practice-list-chunker",
          title: "Batch Chunking & Pagination Engine",
          difficulty: "Medium",
          task: "Write a function `chunk_list(data, size)` that splits a list of 14 items into smaller sublists of length `size = 4` using slicing.",
          hint: "Loop with range(0, len(data), size) and slice data[i:i+size]",
          solution: `def chunk_list(data, size):\n    return [data[i:i + size] for i in range(0, len(data), size)]\n\nitems = list(range(1, 15))\nchunks = chunk_list(items, 4)\nprint(f"Original: {items}")\nprint(f"Chunked:  {chunks}")`,
        },
        {
          id: "practice-moving-average",
          title: "Moving Window Average Filter",
          difficulty: "Medium",
          task: "Given daily stock prices = [100, 102, 105, 107, 106, 110, 112], compute the 3-day moving average for each possible window.",
          hint: "Loop from index 0 to len(prices) - 3: window = prices[i:i+3]; avg = sum(window)/3",
          solution: `prices = [100, 102, 105, 107, 106, 110, 112]\nw_size = 3\nmoving_avgs = [round(sum(prices[i:i + w_size]) / w_size, 2) for i in range(len(prices) - w_size + 1)]\nprint(f"3-Day Moving Averages: {moving_avgs}")`,
        },
        {
          id: "practice-tuple-extended-unpacking",
          title: "Extended Tuple Unpacking (*rest pattern)",
          difficulty: "Easy",
          task: "Given scores = [98, 85, 91, 78, 88, 92], extract the top score (first), lowest score (last), and all middle scores in a single assignment.",
          hint: "sorted_scores = sorted(scores); first, *middle, last = sorted_scores",
          solution: `scores = [98, 85, 91, 78, 88, 92]\nscores.sort(reverse=True)\nhighest, *middle, lowest = scores\nprint(f"Top Score:    {highest}")\nprint(f"Middle Range: {middle}")\nprint(f"Lowest Score: {lowest}")`,
        },
        {
          id: "practice-sliding-sublist-sum",
          title: "Max Subarray Sum (Kadane's Intuition)",
          difficulty: "Hard",
          task: "Find the maximum sum of any contiguous subarray within nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4].",
          hint: "Maintain current_sum = max(n, current_sum + n) and max_sum = max(max_sum, current_sum)",
          solution: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\nmax_so_far = current_max = nums[0]\n\nfor x in nums[1:]:\n    current_max = max(x, current_max + x)\n    max_so_far = max(max_so_far, current_max)\n\nprint(f"Maximum Contiguous Subarray Sum: {max_so_far}")`,
        },
      ],
    },
    {
      id: "sets-dictionaries",
      title: "Lesson 9: Sets & Dictionaries",
      shortDescription:
        "Unordered sets for lightning-fast membership, and key-value dictionaries for real-world data.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Dictionaries — Data with Names

A **dictionary** stores key-value pairs — like a real dictionary where you look up a word (the key) and read its meaning (the value). Keys must be **unique** and **immutable** (strings, numbers, tuples). Values can be anything.

\`\`\`python
student = {"name": "Riya", "course": "Python", "score": 92}
\`\`\`

Dictionaries are the most important data structure in Python after lists. Almost every API response, database row, and configuration file ends up as a dict. Master dicts and you can model almost any real-world record.

#### What You'll Learn in This Lesson

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

#### Checking for Keys — in vs get

| Approach | Behavior |
|---|---|
| \`"k" in d\` | Returns \`True\`/\`False\` — no error, no default needed |
| \`d.get("k")\` | Returns \`None\` if missing |
| \`d.get("k", default)\` | Returns \`default\` if missing |
| \`d["k"]\` | **Raises** \`KeyError\` if missing |

Use \`in\` when you need a yes/no answer; use \`.get()\` when you need a value with a fallback; use \`d["k"]\` only when you are certain the key exists.

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

**Why O(1)?** Like dict keys, set items are hashed — Python computes a number from the item and jumps directly to its storage slot. Compare that with a list, where \`x in list\` may scan every element (O(n)). For a million items, that is a million comparisons versus one hash computation.

---

### Set Operations — Math for Data

| Operation | Symbol | Method | Meaning |
|---|---|---|---|
| Union | \`A \| B\` | \`A.union(B)\` | Items in either |
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

**Real-world combos:**

- **Count unique visitors:** \`len(set(user_ids))\`.
- **Common friends on social media:** \`set(friends_a) & set(friends_b)\`.
- **Words not in the dictionary:** \`set(words) - set(dictionary)\`.
- **Group by category:** a dict of lists, keyed by category (Lesson 10's \`defaultdict\` makes this elegant).

---

### Common Mistakes to Avoid

- **Mistake:** \`d["missing"]\` crashing — **Fix:** use \`.get("missing", default)\`.
- **Mistake:** Trying to use a list as a dict key or set member — **Fix:** convert to a tuple first.
- **Mistake:** Mutating a dict/set while iterating over it — **Fix:** iterate over a copy: \`for k in list(d):\`.
- **Mistake:** Expecting sets to keep insertion order — **Fix:** sets are unordered; use a list or dict if order matters.
- **Mistake:** \`remove()\` crashing on a missing element — **Fix:** use \`.discard()\` when absence is acceptable.

### Professional Tips & Tricks

- Always use \`.get()\` for optional keys — never let a missing key crash your program.
- Use \`collections.Counter\` for counting — it is a dict subclass made for tallying.
- Convert a list to a set to remove duplicates in one line: \`list(set(items))\`.
- Use \`in\` on sets for membership — O(1) versus O(n) for lists on large data.
- Merge two dicts cleanly with \`{**a, **b}\` or \`a \| b\` (Python 3.9+).

---

### Key Takeaways

- Dicts map unique immutable keys to values with O(1) lookup.
- \`.get()\` prevents KeyErrors; \`.items()\` powers clean iteration.
- Sets store unique items and give instant membership checks.
- \`|\`, \`&\`, \`-\`, \`^\` perform set math.
- Use \`list(set(items))\` to deduplicate in one line.
- Use \`in\` for membership and \`.get()\` for safe value access.

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
          id: "practice-contact-book-crud",
          title: "Phonebook CRUD Directory",
          difficulty: "Easy",
          task: "Create a contacts dictionary. Implement operations: add new contact, update existing contact's email, delete contact safely with .pop(), and lookup with fallback default.",
          hint: "Use contacts.get(name, 'Not Found') and contacts.pop(name, None)",
          solution: `contacts = {"Amol": "amol@example.com", "Riya": "riya@work.io"}\ncontacts["Sam"] = "sam@code.dev"           # Create\ncontacts["Amol"] = "amol.shukla@ai.com"     # Update\nremoved = contacts.pop("Riya", None)        # Delete\n\nprint(f"Removed: {removed}")\nprint(f"Lookup Maya: {contacts.get('Maya', 'Maya not found')}")\nprint(f"Final Directory: {contacts}")`,
        },
        {
          id: "practice-word-freq-counter",
          title: "Word Frequency & Stopword Remover",
          difficulty: "Medium",
          task: "Count frequency of significant words in a paragraph: convert to lowercase, filter out common stopwords {'the', 'is', 'and', 'in', 'of', 'to', 'a'}, and store counts in a dict.",
          hint: "Filter words with if w not in stopwords: counts[w] = counts.get(w, 0) + 1",
          solution: `text = "Python is the language of data and AI. Python is powerful and concise."\nstopwords = {"the", "is", "and", "in", "of", "to", "a"}\nwords = [w.strip(".,!").lower() for w in text.split()]\n\ncounts = {}\nfor w in words:\n    if w and w not in stopwords:\n        counts[w] = counts.get(w, 0) + 1\n\nprint("Word Frequencies (Stopwords Filtered):")\nfor word, freq in sorted(counts.items(), key=lambda x: -x[1]):\n    print(f"  {word:<10} : {freq}")`,
        },
        {
          id: "practice-jaccard-similarity",
          title: "Set-Based Jaccard Similarity Calculator",
          difficulty: "Medium",
          task: "Calculate the Jaccard similarity coefficient between two skill profiles skill_a and skill_b using sets: J(A, B) = len(A ∩ B) / len(A ∪ B).",
          hint: "intersection = s1 & s2; union = s1 | s2; similarity = len(intersection) / len(union)",
          solution: `profile_a = {"Python", "SQL", "Docker", "Machine Learning", "FastAPI"}\nprofile_b = {"Python", "Docker", "Kubernetes", "AWS", "FastAPI"}\n\ncommon = profile_a & profile_b\ntotal_unique = profile_a | profile_b\njaccard_index = len(common) / len(total_unique)\n\nprint(f"Shared Skills:  {common}")\nprint(f"All Skills:     {total_unique}")\nprint(f"Skill Match:    {jaccard_index * 100:.1f}%")`,
        },
        {
          id: "practice-dict-deep-merge",
          title: "Config Override & Dictionary Merger",
          difficulty: "Medium",
          task: "Merge a default configuration dict with user-provided overrides using the Python 3.9+ merge operator (|) and update missing keys.",
          hint: "merged = default_config | user_config",
          solution: `default_config = {\n    "theme": "dark",\n    "timeout": 30,\n    "retries": 3,\n    "debug": False\n}\nuser_config = {\n    "timeout": 60,\n    "debug": True,\n    "api_key": "sk-test-999"\n}\n\nfinal_config = default_config | user_config\nprint("Active Application Configuration:")\nfor k, v in final_config.items():\n    print(f"  {k:<10}: {v}")`,
        },
        {
          id: "practice-inverted-search-index",
          title: "Inverted Index Search Engine",
          difficulty: "Hard",
          task: "Build an inverted search index mapping individual words to the set of document IDs where they appear.",
          hint: "Loop over docs: for word in words: index[word].add(doc_id)",
          solution: `docs = {\n    1: "Python for data analysis and backend APIs",\n    2: "Full-stack web apps with Next.js and Python",\n    3: "Data engineering pipelines and distributed cloud systems"\n}\n\nindex = {}\nfor doc_id, text in docs.items():\n    for word in set(text.lower().split()):\n        index.setdefault(word, set()).add(doc_id)\n\nprint(f"Docs containing 'python': {index.get('python', set())}")\nprint(f"Docs containing 'data':   {index.get('data', set())}")`,
        },
        {
          id: "practice-symmetric-diff-analyzer",
          title: "Database Sync & Discrepancy Finder",
          difficulty: "Hard",
          task: "Find items present in legacy_db but missing in new_db, items added in new_db, and symmetric discrepancies using set difference (- and ^).",
          hint: "deleted = legacy - new; added = new - legacy; changed = legacy ^ new",
          solution: `legacy_users = {"usr_1", "usr_2", "usr_3", "usr_4"}\nnew_users    = {"usr_2", "usr_4", "usr_5", "usr_6"}\n\nremoved = legacy_users - new_users\nadded = new_users - legacy_users\ndiscrepancies = legacy_users ^ new_users\n\nprint(f"Removed Users:      {removed}")\nprint(f"Newly Added Users:  {added}")\nprint(f"Total Discrepancies: {discrepancies}")`,
        },
      ],
    },
    {
      id: "advanced-collections",
      title: "Lesson 10: Advanced Collections — Counter, defaultdict & deque",
      shortDescription:
        "Supercharge your data with Counter, defaultdict, deque, and namedtuple from the collections module.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### The collections Module — Professional Tools

The \`collections\` module ships with specialized containers that solve common problems in one line. Once you know them, you will wonder how you lived without them. This lesson covers the four you will use constantly.

These containers are pure Python's answer to the "I keep writing the same boilerplate" problem — every one of them replaces several lines of manual logic with a single, readable construction.

#### What You'll Learn in This Lesson

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

**Useful Counter operations:**

| Operation | Code | Result for votes above |
|---|---|---|
| Total count | \`sum(tally.values())\` | 6 |
| Most common n | \`tally.most_common(2)\` | \`[('ai', 3), ('python', 2)]\` |
| Add two counters | \`tally + Counter(["ai"])\` | \`{'ai': 4, ...}\` |
| Top item | \`tally.most_common(1)[0][0]\` | \`'ai'\` |

Counters power frequency analysis in everything from word clouds to vote counting to sales reports.

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

**Compare the two styles:**

\`\`\`python
# Manual — 4 lines of ceremony per group
groups = {}
for dept, name in employees:
    if dept not in groups:
        groups[dept] = []
    groups[dept].append(name)

# defaultdict — 3 lines total, no ceremony
groups = defaultdict(list)
for dept, name in employees:
    groups[dept].append(name)
\`\`\`

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

> **Mental model:** a deque is a train with doors at both ends — boarding and leaving is instant at either end, unlike a list where people at the front must shuffle over.

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

**namedtuple vs dataclass:** if you need *just* named fields with no methods, \`namedtuple\` is ideal. If you want defaults, validation, or methods, the \`@dataclass\` decorator (Lesson 19) is the modern choice.

---

### Common Mistakes to Avoid

- **Mistake:** Passing an unhashable (like a list) to \`Counter\` — **Fix:** Counter needs hashable items.
- **Mistake:** Reading from a \`defaultdict\` and unintentionally creating keys — **Fix:** use \`defaultdict\` only for writes, or use \`.get()\` when reading counts.
- **Mistake:** \`queue[0]\` style random access on a huge deque — **Fix:** deques are for ends; use a list for random access.
- **Mistake:** Using a plain dict and re-writing the \`if key not in\` ceremony — **Fix:** reach for \`defaultdict\` when grouping.
- **Mistake:** \`namedtuple\` field names that clash with keywords (e.g. \`class\`) — **Fix:** rename the field (\`cls\`).

### Professional Tips & Tricks

- \`most_common(n)\` turns 'analyze frequencies' into one line.
- \`defaultdict(list)\` is the go-to for grouping — dict comprehension of lists, without boilerplate.
- Use \`deque(maxlen=100)\` for a rolling buffer that auto-drops the oldest item.
- Use \`namedtuple\` for return values that should be readable at a glance.
- Counters support arithmetic (\`+ \`, \`- \`) — combine tallies from different sources.

---

### Key Takeaways

- \`Counter\` tallies items and ranks them with \`.most_common()\`.
- \`defaultdict(factory)\` auto-creates missing keys.
- \`deque\` gives O(1) operations on both ends — the right tool for queues.
- \`namedtuple\` gives named fields with tuple performance.
- \`deque(maxlen=n)\` makes rolling buffers effortless.

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
          id: "practice-char-distribution",
          title: "Character Frequency & Mode Analyzer",
          difficulty: "Easy",
          task: "Use collections.Counter to analyze character distribution in 'abracadabra', find the top 2 most common letters, and total vowel counts.",
          hint: "from collections import Counter; c = Counter(text); c.most_common(2)",
          solution: `from collections import Counter\ntext = "abracadabra"\ncounts = Counter(text)\nprint(f"Top 2 characters: {counts.most_common(2)}")\nvowel_count = sum(counts[v] for v in "aeiou")\nprint(f"Total vowels: {vowel_count}")`,
        },
        {
          id: "practice-defaultdict-grouper",
          title: "Multi-Category Product Grouping",
          difficulty: "Medium",
          task: "Given an e-commerce inventory of `(category, item_name, price)`, group items by category using `defaultdict(list)` and calculate average price per category.",
          hint: "from collections import defaultdict; groups[cat].append((item, price))",
          solution: `from collections import defaultdict\ninventory = [\n    ("Electronics", "Laptop", 1200),\n    ("Books", "Python Mastery", 35),\n    ("Electronics", "Headphones", 150),\n    ("Books", "AI Ethics", 28),\n    ("Clothing", "Jacket", 80)\n]\n\ngroups = defaultdict(list)\nfor cat, item, price in inventory:\n    groups[cat].append((item, price))\n\nprint("Category Inventory Summary:")\nfor cat, items in groups.items():\n    avg_price = sum(p for _, p in items) / len(items)\n    print(f"[{cat}] ({len(items)} items, Avg: \${avg_price:.2f}): {[i for i, _ in items]}")`,
        },
        {
          id: "practice-deque-sliding-window",
          title: "Real-Time Sliding Window with Deque",
          difficulty: "Medium",
          task: "Create a bounded sliding window of max size 3 using `deque(maxlen=3)`. Stream 6 sensor readings, printing the current window and moving average after each reading.",
          hint: "from collections import deque; d = deque(maxlen=3); d.append(val)",
          solution: `from collections import deque\nsensor_stream = [22.4, 23.1, 22.9, 24.5, 25.0, 24.2]\nwindow = deque(maxlen=3)\n\nfor val in sensor_stream:\n    window.append(val)\n    avg = sum(window) / len(window)\n    print(f"Stream In: {val:<4} | Window: {list(window)} | Moving Avg: {avg:.2f} °C")`,
        },
        {
          id: "practice-namedtuple-entity",
          title: "Immutable Domain Model with namedtuple",
          difficulty: "Medium",
          task: "Define a `Point3D` and `Transaction` schema using `collections.namedtuple`. Instantiate objects, access fields by name, and calculate Euclidean distance between two points.",
          hint: "from collections import namedtuple; Point = namedtuple('Point', ['x', 'y', 'z'])",
          solution: `from collections import namedtuple\nimport math\n\nPoint3D = namedtuple("Point3D", ["x", "y", "z"])\np1 = Point3D(1.0, 2.0, 3.0)\np2 = Point3D(4.0, 6.0, 8.0)\n\ndist = math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2 + (p2.z - p1.z)**2)\nprint(f"Point 1: {p1}")\nprint(f"Point 2: {p2}")\nprint(f"3D Distance: {dist:.3f}")`,
        },
        {
          id: "practice-nested-graph-defaultdict",
          title: "Adjacency List Graph Engine",
          difficulty: "Hard",
          task: "Build an undirected weighted graph representation using `defaultdict(dict)`. Add bidirectional edges and find all direct neighbors and weights for a queried node.",
          hint: "graph[u][v] = weight; graph[v][u] = weight",
          solution: `from collections import defaultdict\ngraph = defaultdict(dict)\n\ndef add_edge(u, v, weight):\n    graph[u][v] = weight\n    graph[v][u] = weight\n\nadd_edge("NYC", "BOS", 215)\nadd_edge("NYC", "DC", 225)\nadd_edge("BOS", "MTL", 310)\n\nprint("NYC Direct Connections:")\nfor dest, miles in graph["NYC"].items():\n    print(f"  -> {dest}: {miles} miles")`,
        },
        {
          id: "practice-task-queue-priority",
          title: "Bi-Directional Task Dispatcher",
          difficulty: "Hard",
          task: "Implement a task scheduler using `deque` where urgent tasks are inserted at the front (`appendleft`) and standard tasks at the back (`append`). Serve tasks in FIFO order (`popleft`).",
          hint: "q.appendleft(urgent_task) vs q.append(normal_task)",
          solution: `from collections import deque\ntasks = deque()\n\ntasks.append("Regular Email Sync")\ntasks.append("Nightly DB Backup")\ntasks.appendleft("🚨 CRITICAL: Payment Gateway Timeout")\ntasks.append("Generate Analytics Report")\n\nprint("Executing Dispatcher Queue:")\nwhile tasks:\n    current = tasks.popleft()\n    print(f"  Dispatching: {current}")`,
        },
      ],
    },
    {
      id: "nested-copies",
      title: "Lesson 11: Nested Structures, Aliasing & Copies",
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

#### What You'll Learn in This Lesson

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

Remember Lesson 2's mental model: \`=\` moves a name-tag to an object — it never copies the object. Aliasing is that rule biting back: two tags on one object means one change, two visible effects.

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

> **Mental model:** shallow copy = photocopying the outer box but keeping the same inner boxes inside. Deep copy = rebuilding every single box from scratch.

**When is shallow copy safe?** When your structure is flat — no nested mutable objects. \`data = [1, 2, 3]\` copied shallowly is fully independent, because integers are immutable. The problem only appears with nested lists/dicts.

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

> **Professional rule:** always compare to \`None\` with \`is\` — \`if x is None:\`, never \`if x == None:\`. It is faster, unambiguous, and the universal convention.

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

**Why does \`*\` on a *string* or number work fine but fail on a list?** Integers and strings are immutable, so sharing is harmless — no one can change a shared 0. Lists are mutable, so every "row" points at the same list you can mutate. The comprehension builds fresh lists each iteration.

---

### Real-World Debugging Flow

When a program "mysteriously" mutates data:

1. **Ask:** did I copy, or did I alias? Search for bare \`b = a\`.
2. **Ask:** shallow or deep? Nested structures need \`deepcopy\`.
3. **Verify:** \`print(id(a), id(b))\` — identical ids mean one object.
4. **Fix:** use \`.copy()\`, \`[:]\`, or \`copy.deepcopy()\` at the assignment site.

---

### Common Mistakes to Avoid

- **Mistake:** \`b = a\` then mutating \`b\` and seeing \`a\` change — **Fix:** use \`a[:]\`, \`.copy()\`, or \`copy.deepcopy()\`.
- **Mistake:** Shallow copy on nested data and still seeing shared inner lists — **Fix:** use \`copy.deepcopy()\` for nested structures.
- **Mistake:** \`[[0]*3]*3\` matrices sharing rows — **Fix:** build with a comprehension.
- **Mistake:** \`x == None\` instead of \`x is None\` — **Fix:** use \`is\` for singletons.
- **Mistake:** Using \`is\` to compare strings/numbers — **Fix:** \`is\` is for identity; use \`==\` for values.

### Professional Tips & Tricks

- If you need an independent list, always use \`.copy()\` or slicing — never bare assignment.
- Use deepcopy only when structures are nested; it is slower.
- Prefer immutable tuples for data you never change — they cannot be aliased-mutated.
- Compare \`None\` with \`is\`, never \`==\`.
- For nested access, read outside-in and keep the brackets straight.

---

### Key Takeaways

- Nested access reads outside-in; mind the brackets.
- Assignment (\`b = a\`) creates an alias, not a copy.
- Shallow copies share inner objects; deep copies share nothing.
- \`==\` compares values; \`is\` compares identity.
- Build matrices with comprehensions, never \`[[0]*3]*3\`.
- Use \`is None\` — never \`== None\`.

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
          id: "practice-alias-detective",
          title: "Alias Detective & Memory Address Inspector",
          difficulty: "Easy",
          task: "Demonstrate aliasing: create list a = [10, 20]. Assign b = a and c = a.copy(). Append 30 to a. Print values and hex(id()) of all three to prove which share memory.",
          hint: "hex(id(a)) == hex(id(b)) but != hex(id(c))",
          solution: `a = [10, 20]\nb = a\nc = a.copy()\n\na.append(30)\nprint(f"a: {a} (id: {hex(id(a))})")\nprint(f"b: {b} (id: {hex(id(b))})")\nprint(f"c: {c} (id: {hex(id(c))})")`,
        },
        {
          id: "practice-safe-matrix-allocation",
          title: "Safe 2D Grid Dynamic Initialization",
          difficulty: "Medium",
          task: "Explain and demonstrate why `[[0] * 3] * 3` creates shared row references (aliasing bug), and fix it using list comprehension `[[0] * 3 for _ in range(3)]`.",
          hint: "Mutate cell [0][0] in both grids and observe the difference.",
          solution: `buggy_grid = [[0] * 3] * 3\nbuggy_grid[0][0] = 99\nprint("Buggy Grid (all rows mutated):", buggy_grid)\n\nsafe_grid = [[0] * 3 for _ in range(3)]\nsafe_grid[0][0] = 99\nprint("Safe Grid (single cell mutated):", safe_grid)`,
        },
        {
          id: "practice-shallow-vs-deepcopy",
          title: "Nested Document Shallow vs Deep Copy Arena",
          difficulty: "Medium",
          task: "Create a user profile dict with a nested 'preferences' dictionary. Compare behavior when mutating preferences in a `.copy()` vs `copy.deepcopy()`.",
          hint: "import copy; shallow = user.copy(); deep = copy.deepcopy(user)",
          solution: `import copy\nuser = {"name": "Amol", "settings": {"theme": "light", "notifications": True}}\n\nshallow = user.copy()\ndeep = copy.deepcopy(user)\n\nshallow["settings"]["theme"] = "dark" # Mutates original user!\ndeep["settings"]["notifications"] = False # Isolated\n\nprint(f"Original user theme:        {user['settings']['theme']} (changed by shallow)")\nprint(f"Original user notifications: {user['settings']['notifications']} (unaffected by deep)")`,
        },
        {
          id: "practice-recursive-dict-cleaner",
          title: "Recursive Deep Dict Key Sanitizer",
          difficulty: "Hard",
          task: "Write a recursive function `sanitize_dict(d)` that traverses an arbitrarily nested dictionary and converts all string keys to lowercase and trims whitespace.",
          hint: "Check isinstance(v, dict) and recurse; else return cleaned key-value pairs.",
          solution: `def sanitize_dict(d):\n    clean = {}\n    for k, v in d.items():\n        clean_key = k.strip().lower()\n        if isinstance(v, dict):\n            clean[clean_key] = sanitize_dict(v)\n        elif isinstance(v, list):\n            clean[clean_key] = [sanitize_dict(item) if isinstance(item, dict) else item for item in v]\n        else:\n            clean[clean_key] = v\n    return clean\n\nraw_payload = {\n    "  USER_NAME ": "amol25",\n    "META_INFO ": {\n        "ROLE_TYPE ": "ADMIN",\n        "Access_Level ": 5\n    }\n}\nprint("Sanitized Payload:", sanitize_dict(raw_payload))`,
        },
        {
          id: "practice-state-history-undo-redo",
          title: "Undo/Redo State History Engine",
          difficulty: "Hard",
          task: "Implement a simple state history manager using `copy.deepcopy()` to save snapshots of a document model so users can perform `commit()`, `undo()`, and `redo()`.",
          hint: "Maintain history stack of deepcopied state dicts.",
          solution: `import copy\n\nclass HistoryManager:\n    def __init__(self, initial_state):\n        self.history = [copy.deepcopy(initial_state)]\n        self.cursor = 0\n\n    def commit(self, new_state):\n        self.history = self.history[:self.cursor + 1]\n        self.history.append(copy.deepcopy(new_state))\n        self.cursor += 1\n\n    def undo(self):\n        if self.cursor > 0:\n            self.cursor -= 1\n        return copy.deepcopy(self.history[self.cursor])\n\n    def redo(self):\n        if self.cursor < len(self.history) - 1:\n            self.cursor += 1\n        return copy.deepcopy(self.history[self.cursor])\n\nmanager = HistoryManager({"doc": "Version 1"})\nmanager.commit({"doc": "Version 2: Added intro"})\nmanager.commit({"doc": "Version 3: Added code"})\nprint("Current:", manager.history[manager.cursor])\nprint("Undo:", manager.undo())\nprint("Undo again:", manager.undo())\nprint("Redo:", manager.redo())`,
        },
        {
          id: "practice-nested-list-flattener",
          title: "Arbitrary Nested List Flattener",
          difficulty: "Hard",
          task: "Write a recursive function `flatten_deep(nested)` that flattens any irregularly nested list like `[1, [2, [3, 4], 5], [6, 7], 8]` into a single flat list `[1, 2, 3, 4, 5, 6, 7, 8]`.",
          hint: "Loop over elements: if isinstance(x, list), yield from flatten_deep(x); else yield x",
          solution: `def flatten_deep(nested):\n    result = []\n    for item in nested:\n        if isinstance(item, (list, tuple)):\n            result.extend(flatten_deep(item))\n        else:\n            result.append(item)\n    return result\n\nnested_data = [1, [2, [3, 4], 5], [6, [7, [8, 9]]]]\nprint(f"Original: {nested_data}")\nprint(f"Flattened: {flatten_deep(nested_data)}")`,
        },
      ],
    },
  ],
};
