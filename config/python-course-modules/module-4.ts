import type { Module } from "../courses";

export const MODULE_4: Module = {
  id: "module-4-functions",
  title: "Module 4: Functions & Modularity",
  description:
    "Write reusable functions, lambdas, decorators, and organize code into modules and packages.",
  lectures: [
    {
      id: "functions-basics",
      title: "Lecture 12: Functions — Reusable Building Blocks",
      shortDescription:
        "Define functions, parameters, default arguments, return values, and docstrings.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Why Functions?

A **function** is a named block of reusable code. Write it once, call it many times. Functions are how you stop repeating yourself (the **DRY** principle: *Don't Repeat Yourself*) and keep programs readable. If you find yourself copying and pasting the same 5 lines, that code belongs in a function.

#### What You'll Learn in This Lecture

- Define functions with \`def\`
- Pass parameters and use default arguments
- Return values — and understand \`None\`
- Write docstrings that document your code
- Understand local vs global scope

---

### Function Anatomy

\`\`\`python
def greet(name, excited=True):
    """Return a friendly greeting."""
    message = f"Hello, {name}!"
    if excited:
        message += " 🎉"
    return message
\`\`\`

| Part | Purpose |
|---|---|
| \`def\` | Keyword that defines a function |
| \`greet\` | Function name (snake_case) |
| \`name, excited=True\` | Parameters (inputs) |
| \`:\` | Ends the header — body must be indented |
| \`"""..."""\` | Docstring — documentation |
| \`return message\` | Hands a value back to the caller |

Call it like this:

\`\`\`python
print(greet("Amol"))          # Hello, Amol! 🎉  (uses default)
print(greet("Riya", False))   # Hello, Riya!
print(greet(name="Sam"))      # keyword argument — self-documenting
\`\`\`

---

### Parameters vs Arguments

- **Parameters** are the names in the function definition.
- **Arguments** are the values you pass when calling.

| Calling style | Example | Notes |
|---|---|---|
| Positional | \`area(5, 4)\` | Order matters |
| Keyword | \`area(length=5, width=4)\` | Order-free, self-documenting |
| Default | \`discount(200)\` | Omits optional params |

\`\`\`python
def area(length, width):
    return length * width

area(5, 4)                  # positional
area(width=4, length=5)     # keyword — order doesn't matter
\`\`\`

---

### Default Arguments

Parameters can have default values, making them optional:

\`\`\`python
def discount(price, percent=10):
    return price * (1 - percent / 100)

print(discount(200))       # 180.0  (uses 10%)
print(discount(200, 50))   # 100.0  (overrides to 50%)
\`\`\`

Rules:
- Defaults come **after** required parameters: \`def f(a, b=1):\` ✅, \`def f(a=1, b):\` ❌
- Defaults are evaluated once at definition time — never use a mutable default like \`def f(items=[])\` (see the mistakes section).

---

### return — and the Mystery of None

\`return\` hands a value back to the caller and **exits the function immediately**:

\`\`\`python
def shout(text):
    print(text.upper())   # prints, but returns NOTHING

result = shout("hello")   # HELLO
print(result)             # None
\`\`\`

**Every function returns something.** If you don't write \`return\`, Python returns \`None\` automatically. \`None\` is a special value meaning "nothing here".

| Behavior | Returns |
|---|---|
| Has \`return value\` | That value |
| Has bare \`return\` | \`None\` |
| No return statement | \`None\` |

---

### Docstrings — Documentation Built In

A triple-quoted string right after the \`def\` line documents what the function does:

\`\`\`python
def calculate_grade(score, bonus=0):
    """Return a letter grade for a score plus optional bonus."""
    ...
\`\`\`

Professional teams treat docstrings as **non-negotiable**. Tools like \`help()\`, IDEs, and documentation generators read them automatically.

---

### Scope — Where Names Live

Variables created inside a function stay inside it (local scope):

\`\`\`python
language = "Python"       # global scope

def show():
    print(language)       # can READ globals ✅
    greeting = "Hi"       # local to show() — dies when show() ends
\`\`\`

- A function can **read** global variables.
- It **cannot change** them without the \`global\` keyword (Lecture 14).
- Each call creates a **fresh set of local boxes** — no leftovers between calls.

> **Mental model:** a function is a machine. Inputs go in the funnel (parameters), work happens inside, and the result rolls out (return). Trace each call separately — a fresh set of local boxes every time.

---

### Common Mistakes to Avoid

- **Mistake:** \`def f(items=[])\` — mutable default shared across calls — **Fix:** use \`def f(items=None): items = [] if items is None else items\`.
- **Mistake:** Forgetting \`return\` and getting \`None\` back — **Fix:** remember: no return = None.
- **Mistake:** Calling a function before defining it in the file — **Fix:** definitions run top-to-bottom; define before you call (or put calls in a \`main()\`).

### Professional Tips & Tricks

- One function = one job. If a function does three things, split it.
- Use keyword arguments at call sites: \`calculate_grade(score=88, bonus=5)\`.
- Write the docstring FIRST — it forces you to think about what the function should do.

---

### Key Takeaways

- \`def name(params):\` defines a function; the body must be indented.
- Defaults make parameters optional; defaults go last.
- Every function returns a value — explicit \`return\` or \`None\`.
- Docstrings document functions and are read by \`help()\` and IDEs.
- Local scope keeps function variables isolated.

**Next up:** Lambda, \`*args\` & \`**kwargs\` — flexible and anonymous functions.`,
      codeLanguage: "python",
      codeSnippet: `# Defining and calling functions
def calculate_grade(score, bonus=0):
    """Return a letter grade for a score plus optional bonus."""
    total = score + bonus
    if total >= 90:
        return "A"
    if total >= 75:
        return "B"
    if total >= 60:
        return "C"
    return "F"

# Call with default bonus
print("Score 88:", calculate_grade(88))

# Call with explicit bonus
print("Score 88 + 5:", calculate_grade(88, 5))

# Named arguments make calls self-documenting
print("Named:", calculate_grade(score=72, bonus=3))

# Functions without return give None
def shout(text):
    print(text.upper())

result = shout("hello")
print("Return value:", result)`,
      codeOutput: `Score 88: B
Score 88 + 5: A
Named: C
HELLO
Return value: None`,
      visualizationTips: [
        "Trace each function call separately — parameters and locals live in their own box.",
        "Draw the 'return' as the machine dropping the result into the caller's hands.",
        "Use print() inside the function while learning to watch the machine work.",
      ],
      tipsAndTricks: [
        "One function = one job. If a function does three things, split it.",
        "Use keyword arguments at call sites: calculate_grade(score=88, bonus=5).",
        "Write the docstring FIRST — it forces you to think about what the function should do.",
      ],
      practice: [
        {
          id: "practice-area",
          title: "Rectangle Area",
          difficulty: "Easy",
          task: "Write a function area(length, width) that returns the area of a rectangle, and test it.",
          hint: "def area(length, width): return length * width",
          solution: `def area(length, width):\n    return length * width\n\nprint(area(5, 4))  # 20`,
        },
        {
          id: "practice-defaults",
          title: "Discount Function",
          difficulty: "Medium",
          task: "Write discount(price, percent=10) that returns the discounted price. Test with and without percent.",
          hint: "return price * (1 - percent / 100)",
          solution: `def discount(price, percent=10):\n    return price * (1 - percent / 100)\n\nprint(discount(200))      # 180.0\nprint(discount(200, 50))  # 100.0`,
        },
        {
          id: "practice-docstring",
          title: "Documented Function",
          difficulty: "Easy",
          task: "Write a function is_even(n) that returns True for even numbers, with a proper docstring.",
          hint: "return n % 2 == 0",
          solution: `def is_even(n):\n    """Return True if n is even."""\n    return n % 2 == 0\n\nprint(is_even(4))  # True`,
        },
      ],
    },
    {
      id: "lambda-args-kwargs",
      title: "Lecture 13: Lambda, *args & **kwargs",
      shortDescription:
        "Anonymous one-line functions and flexible functions that accept any number of arguments.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Lambda — Tiny Anonymous Functions

A **lambda** is a one-line function without a name:

\`\`\`python
double = lambda x: x * 2
print(double(5))   # 10
\`\`\`

It is exactly equivalent to \`def double(x): return x * 2\`, but written as an expression. Lambdas shine where you need a quick, throwaway function — especially as a sort \`key\` or with \`map\`/\`filter\`.

#### What You'll Learn in This Lecture

- Write lambdas and use them as sort keys
- Accept any number of arguments with \`*args\`
- Accept any number of keyword arguments with \`**kwargs\`
- Unpack sequences and dicts with \`*\` and \`**\`

---

### Lambda as a Sort Key

The most common lambda use case — custom sorting:

\`\`\`python
products = [
    {"name": "Laptop", "price": 800},
    {"name": "Mouse", "price": 25},
    {"name": "Monitor", "price": 300},
]
products.sort(key=lambda p: p["price"])
# Sorts by price — ['Mouse', 'Monitor', 'Laptop']
\`\`\`

The lambda receives each item and returns the value to sort by. You can also sort by length, last letter, or any computed property:

\`\`\`python
words = ["apple", "banana", "cherry"]
print(sorted(words, key=lambda w: w[-1]))   # sort by last letter
\`\`\`

> **Mental model:** each item gets a "score tag" from the lambda, then items are ordered by their tags.

---

### *args — Any Number of Positional Arguments

Putting \`*args\` in a function collects all extra positional arguments into a **tuple**:

\`\`\`python
def total(*args):
    return sum(args)

print(total(1, 2, 3))    # 6
print(total(5, 10))      # 15
print(total())           # 0
\`\`\`

The name \`args\` is a convention — the \`*\` is what matters. This pattern is perfect for sums, averages, and flexible APIs.

---

### **kwargs — Any Number of Keyword Arguments

\`**kwargs\` collects extra named arguments into a **dictionary**:

\`\`\`python
def profile(name, **kwargs):
    print(f"Name: {name}")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

profile("Amol", role="Trainer", city="Mumbai")
# Name: Amol
#   role: Trainer
#   city: Mumbai
\`\`\`

Frameworks use this to pass arbitrary options to functions without exploding the signature.

---

### Parameter Order — The Golden Rule

The order is fixed:

\`\`\`text
def f(normal, *args, keyword_only, **kwargs):
\`\`\`

1. Normal parameters
2. \`*args\`
3. Keyword-only parameters (after \`*\`)
4. \`**kwargs\`

---

### Unpacking with * and **

The \`*\` and \`**\` also work in reverse — unpacking collections when calling:

\`\`\`python
def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add(*nums))              # 6  — list unpacked into 3 args

config = {"a": 1, "b": 2, "c": 3}
print(add(**config))           # 6  — dict unpacked into keyword args
\`\`\`

---

### When Lambdas Work Best — and When Not

| ✅ Use a lambda | ❌ Use a def |
|---|---|
| Sort keys | More than one expression |
| Passing behavior to map/filter | Statements (if, loops) |
| Tiny one-off logic | Anything you'd reuse by name |

Keep lambdas to **ONE expression**. If it needs statements, write a \`def\`.

---

### Common Mistakes to Avoid

- **Mistake:** Writing \`lambda x: if x > 0: ...\` — **Fix:** lambdas cannot contain statements; use a def.
- **Mistake:** Ordering parameters wrong (\`def f(**kwargs, *args)\`) — **Fix:** follow the golden order.
- **Mistake:** Capturing a loop variable in a lambda — **Fix:** give the lambda a default: \`lambda x, i=i: ...\`.

### Professional Tips & Tricks

- Use lambdas only for tiny logic; for anything complex, def a real function.
- \`*args\` is perfect for variadic sums, logs, and wrappers that must pass arguments through.
- \`**kwargs\` lets you write configurable functions without exploding the signature.

---

### Key Takeaways

- \`lambda x: expr\` is a nameless one-expression function.
- \`*args\` → tuple of extra positional args; \`**kwargs\` → dict of extra keyword args.
- Parameter order: normal → \`*args\` → keyword-only → \`**kwargs\`.
- \`*list\` and \`**dict\` unpack when calling functions.

**Next up:** Scope, closures & decorators — the professional power tools.`,
      codeLanguage: "python",
      codeSnippet: `# Lambda as a sort key
products = [
    {"name": "Laptop", "price": 800},
    {"name": "Mouse", "price": 25},
    {"name": "Monitor", "price": 300},
]
products.sort(key=lambda p: p["price"])
print("Cheapest first:", [p["name"] for p in products])

# *args collects positional arguments into a tuple
def total(*args):
    return sum(args)

print("total(1,2,3):", total(1, 2, 3))
print("total(5, 10):", total(5, 10))

# **kwargs collects keyword arguments into a dict
def profile(name, **kwargs):
    print(f"Name: {name}")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

profile("Amol", role="Trainer", city="Mumbai")`,
      codeOutput: `Cheapest first: ['Mouse', 'Monitor', 'Laptop']
total(1,2,3): 6
total(5, 10): 15
Name: Amol
  role: Trainer
  city: Mumbai`,
      visualizationTips: [
        "Picture *args as a funnel collecting loose items into one bag (tuple).",
        "Picture **kwargs as a coat-check desk collecting named items into a labeled cabinet (dict).",
        "For sort keys, visualize each item getting a 'score tag' from the lambda, then being ordered by that tag.",
      ],
      tipsAndTricks: [
        "Use lambdas only for tiny logic; for anything complex, def a real function.",
        "*args is perfect for variadic sums, logs, and wrappers that must pass arguments through.",
        "**kwargs lets you write configurable functions without exploding the signature.",
      ],
      practice: [
        {
          id: "practice-lambda-sort",
          title: "Sort by Last Letter",
          difficulty: "Medium",
          task: "Sort the list words = ['apple', 'banana', 'cherry'] by their LAST letter using a lambda key.",
          hint: "key=lambda w: w[-1]",
          solution: `words = ['apple', 'banana', 'cherry']\nprint(sorted(words, key=lambda w: w[-1]))\n# ['banana', 'apple', 'cherry']`,
        },
        {
          id: "practice-flex-avg",
          title: "Flexible Average",
          difficulty: "Medium",
          task: "Write average(*numbers) that returns the average of any number of values.",
          hint: "return sum(numbers) / len(numbers)",
          solution: `def average(*numbers):\n    return sum(numbers) / len(numbers)\n\nprint(average(10, 20, 30))  # 20.0`,
        },
        {
          id: "practice-config",
          title: "Config Printer",
          difficulty: "Medium",
          task: "Write show_config(app_name, **options) that prints the app name and each option on its own line.",
          hint: "Iterate options.items()",
          solution: `def show_config(app_name, **options):\n    print("App:", app_name)\n    for k, v in options.items():\n        print(f"  {k}: {v}")\n\nshow_config("portfolio", theme="dark", lang="python")`,
        },
      ],
    },
    {
      id: "scope-closures-decorators",
      title: "Lecture 14: Scope, Closures & Decorators",
      shortDescription:
        "LEGB scoping rules, closures that remember, and decorators that wrap functions with extra behavior.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Scope — Where Names Live

Python resolves names with the **LEGB** rule. When code refers to a name, Python searches in this order:

1. **L**ocal — inside the current function
2. **E**nclosing — in outer (nested) functions
3. **G**lobal — at module top level
4. **B**uilt-in — Python's built-in names like \`print\`, \`len\`, \`sum\`

The first match wins. This is why you can have a local variable named \`len\` shadowing the built-in (don't do that).

#### What You'll Learn in This Lecture

- Apply the LEGB scoping rules
- Modify outer variables with \`global\` and \`nonlocal\`
- Build closures — functions that remember
- Write decorators that wrap functions with extra behavior

---

### global and nonlocal

- \`global\` lets a function modify a module-level variable.
- \`nonlocal\` lets a nested function modify an *enclosing function's* variable.

\`\`\`python
count = 0

def increment_global():
    global count
    count += 1

increment_global()
print(count)   # 1
\`\`\`

> **Tip:** in modern code, \`global\` is rare — passing values in/out via parameters and returns is cleaner. But \`nonlocal\` is essential for closures (next).

---

### Closures — Functions That Remember

A nested function that references variables from its enclosing scope is a **closure**. It "remembers" those values **even after the outer function returns**:

\`\`\`python
def make_counter():
    count = 0
    def increment():
        nonlocal count      # modify the enclosing variable
        count += 1
        return count
    return increment

counter = make_counter()
print(counter())   # 1
print(counter())   # 2
print(counter())   # 3
\`\`\`

The inner function \`increment\` carries a "backpack" containing \`count\` — it survives because \`increment\` still references it. This powers counters, factories, and much of functional programming in Python.

> **Mental model:** a closure is a function with its own luggage — wherever it goes, its remembered variables come along.

---

### Decorators — Wrap & Extend

A **decorator** is a function that takes another function and returns a new one with extra behavior:

\`\`\`python
def timer(func):
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.6f}s")
        return result
    return wrapper

@timer
def slow_task():
    return sum(range(100000))
\`\`\`

The \`@timer\` syntax is just sugar for:

\`\`\`python
slow_task = timer(slow_task)
\`\`\`

**Think of a decorator as armor around a sword:** the sword (original function) still works, but now it's protected (or timed, or logged).

#### Classic Decorator Uses

| Use case | What it adds |
|---|---|
| Timing | Measures execution time |
| Logging | Prints when a function is called |
| Access control | Checks permissions before running |
| Retry logic | Retries on failure |
| Caching | Stores results of expensive calls |

---

### The @wraps Gotcha

Without care, a decorator hides the original function's name and docstring:

\`\`\`python
from functools import wraps

def timer(func):
    @wraps(func)              # copies __name__, __doc__, etc.
    def wrapper(*args, **kwargs):
        ...
    return wrapper
\`\`\`

Always use \`@wraps(func)\` in real decorators — otherwise \`help()\` and debugging tools show the wrapper instead of your function.

---

### Common Mistakes to Avoid

- **Mistake:** Using \`global\` when you meant \`nonlocal\` (or vice versa) — **Fix:** \`global\` = module level; \`nonlocal\` = enclosing function.
- **Mistake:** A decorator that forgets to \`return func(*args, **kwargs)\` — **Fix:** always return the wrapped result.
- **Mistake:** Missing \`@wraps\` and losing the function's identity — **Fix:** decorate the wrapper.

### Professional Tips & Tricks

- Use \`nonlocal\` (not \`global\`) to modify an enclosing function's variable.
- Decorate with \`@functools.wraps(func)\` so the wrapped function keeps its name and docstring.
- Decorators are the foundation of Flask/FastAPI route decorators — this is the same machinery.

---

### Key Takeaways

- LEGB: Local → Enclosing → Global → Built-in.
- \`global\` reaches module scope; \`nonlocal\` reaches enclosing function scope.
- Closures remember enclosing variables — perfect for counters and factories.
- Decorators wrap functions with extra behavior; \`@name\` is sugar for \`f = name(f)\`.
- Always use \`@wraps\` to preserve function metadata.

**Next up:** Modules, packages & imports — organizing code into files.`,
      codeLanguage: "python",
      codeSnippet: `# Closure: counter that remembers
def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print("Call 1:", counter())
print("Call 2:", counter())
print("Call 3:", counter())

# Decorator: time any function
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.6f}s")
        return result
    return wrapper

@timer
def slow_task():
    total = sum(range(100000))
    return total

print("Sum:", slow_task())`,
      codeOutput: `Call 1: 1
Call 2: 2
Call 3: 3
slow_task took 0.004812s
Sum: 4999950000`,
      visualizationTips: [
        "Draw scopes as nested boxes and imagine a telescope pointing outward from the innermost box.",
        "For closures, picture the inner function carrying a backpack with the outer variables inside.",
        "For decorators, picture wrapping a gift: the wrapper is the paper, the original function is the gift inside.",
      ],
      tipsAndTricks: [
        "Use nonlocal (not global) to modify an enclosing function's variable.",
        "Decorate with @functools.wraps(func) so the wrapped function keeps its name and docstring.",
        "Decorators are the foundation of Flask/FastAPI route decorators — this is the same machinery.",
      ],
      practice: [
        {
          id: "practice-global",
          title: "Global vs Local",
          difficulty: "Easy",
          task: "Write code that shows a variable defined outside a function is readable inside it.",
          hint: "Define name = 'Python' at top level, print it inside a function.",
          solution: `language = "Python"\n\ndef show():\n    print(language)  # reads the global\n\nshow()  # Python`,
        },
        {
          id: "practice-log-decorator",
          title: "Logging Decorator",
          difficulty: "Medium",
          task: "Write a decorator @log that prints 'Calling <name>' before running the wrapped function.",
          hint: "def log(func): def wrapper(*args, **kwargs): print(...); return func(*args, **kwargs)",
          solution: `def log(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef greet():\n    print("Hello!")\n\ngreet()`,
        },
        {
          id: "practice-closure-mult",
          title: "Multiplier Factory",
          difficulty: "Hard",
          task: "Write make_multiplier(n) that returns a function multiplying any number by n.",
          hint: "Inner function returns x * n",
          solution: `def make_multiplier(n):\n    def multiply(x):\n        return x * n\n    return multiply\n\ntimes3 = make_multiplier(3)\nprint(times3(7))  # 21`,
        },
      ],
    },
    {
      id: "modules-packages",
      title: "Lecture 15: Modules, Packages & Imports",
      shortDescription:
        "Organize code into files, import between them, use the __name__ guard, and install packages with pip.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Modules — Code in Files

A **module** is simply a \`.py\` file. Anything you can run, you can import: functions, classes, variables. When a file is imported, its top-level code runs **once**, and its names become available to the importer.

\`\`\`python
# math_helper.py
def square(x):
    return x ** 2
\`\`\`

\`\`\`python
# main.py
import math_helper
print(math_helper.square(5))   # 25
\`\`\`

#### What You'll Learn in This Lecture

- Import modules with all four import styles
- Understand packages — folders of modules
- Use the \`__name__\` guard to make files both script + library
- Install third-party packages with pip

---

### Import Styles

| Style | Usage | Example |
|---|---|---|
| \`import module\` | \`module.name\` | \`import math\` → \`math.sqrt(16)\` |
| \`from module import name\` | \`name\` directly | \`from math import sqrt\` → \`sqrt(16)\` |
| \`from module import a, b\` | Several names | \`from math import pi, sqrt\` |
| \`import module as m\` | Alias | \`import math as m\` → \`m.sqrt(16)\` |

**Which to use?** \`import module\` keeps the namespace explicit (no name clashes). \`from module import name\` is shorter but can clash. Alias imports are great for long names like \`import matplotlib.pyplot as plt\`.

---

### Packages — Folders of Modules

A **package** is a folder of modules containing an \`__init__.py\` file (even an empty one) that marks the folder as importable:

\`\`\`text
my_project/
├── __init__.py
├── main.py
└── utils/
    ├── __init__.py
    └── strings.py
\`\`\`

\`\`\`python
from utils.strings import clean_text
\`\`\`

Big projects are organized as packages — one folder per feature, modules inside.

---

### The __name__ Guard — Script + Library in One File

\`if __name__ == "__main__":\` runs a block **only when the file is executed directly**, not when imported:

\`\`\`python
def square(x):
    return x ** 2

if __name__ == "__main__":
    # Runs only when: python math_helper.py
    print("square(5) =", square(5))
\`\`\`

- Direct run: \`__name__\` is set to \`"__main__"\` → block runs.
- Imported: \`__name__\` is set to the module name → block skipped.

This lets every file be **both** a runnable script and a safe importable library.

---

### pip — The Package Installer

Third-party packages are installed with \`pip\`:

\`\`\`bash
pip install requests
pip install numpy pandas matplotlib
\`\`\`

**Virtual environments** keep each project's dependencies isolated — the professional standard:

\`\`\`bash
python -m venv .venv        # create
source .venv/bin/activate   # activate (Windows: .venv\\Scripts\\activate)
pip install requests        # install into THIS project only
\`\`\`

Never \`pip install\` globally — different projects need different versions.

---

### Common Mistakes to Avoid

- **Mistake:** Importing a module whose name shadows a built-in (e.g., \`math.py\` in your project) — **Fix:** rename your file.
- **Mistake:** Circular imports (A imports B, B imports A) — **Fix:** move shared code to a third module or import inside functions.
- **Mistake:** Putting executable code at module top level — **Fix:** wrap it in \`if __name__ == "__main__":\`.

### Professional Tips & Tricks

- Import at the top of the file, one import per line, in a consistent order (stdlib, third-party, local).
- Always guard executable code with \`if __name__ == '__main__':\` so it can be imported safely.
- Use relative imports (\`from . import utils\`) inside packages.

---

### Key Takeaways

- A module is a \`.py\` file; a package is a folder of modules with \`__init__.py\`.
- Four import styles: direct, from-import, multi-name, alias.
- The \`__name__\` guard makes files script + library.
- \`pip install\` adds packages; virtual environments isolate them.

**Next up:** Module 5 — object-oriented programming with classes.`,
      codeLanguage: "python",
      codeSnippet: `# math_helper.py
def square(x):
    """Return x squared."""
    return x ** 2


def cube(x):
    """Return x cubed."""
    return x ** 3


if __name__ == "__main__":
    # Runs only when executed directly, not when imported
    print("Running math_helper directly")
    print("square(5) =", square(5))`,
      codeOutput: `Running math_helper directly
square(5) = 25`,
      visualizationTips: [
        "Picture modules as library shelves: import pulls the right book (file) off the shelf.",
        "Picture packages as shelves inside a room: folder -> modules -> names.",
        "Trace the __name__ trick: direct run sets __name__ to '__main__'; import sets it to the module name.",
      ],
      tipsAndTricks: [
        "Import at the top of the file, one import per line, in a consistent order (stdlib, third-party, local).",
        "Always guard executable code with if __name__ == '__main__': so it can be imported safely.",
        "Use relative imports (from . import utils) inside packages.",
      ],
      practice: [
        {
          id: "practice-math-module",
          title: "Use the math Module",
          difficulty: "Easy",
          task: "Import math and print the square root of 144 and the value of pi.",
          hint: "math.sqrt(144), math.pi",
          solution: `import math\nprint(math.sqrt(144))  # 12.0\nprint(math.pi)         # 3.141592653589793`,
        },
        {
          id: "practice-alias",
          title: "Alias Imports",
          difficulty: "Easy",
          task: "Import the datetime module as dt and print the current year.",
          hint: "dt.datetime.now().year",
          solution: `import datetime as dt\nprint(dt.datetime.now().year)`,
        },
        {
          id: "practice-guard",
          title: "Script + Library",
          difficulty: "Medium",
          task: "Write a module with a function and a __name__ guard that prints 'Run directly' only when executed directly.",
          hint: "if __name__ == '__main__': print('Run directly')",
          solution: `def helper():\n    return "hi"\n\nif __name__ == "__main__":\n    print("Run directly")\n    print(helper())`,
        },
      ],
    },
  ],
};
