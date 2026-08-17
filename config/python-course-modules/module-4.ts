import type { Module } from "../courses";

export const MODULE_4: Module = {
  id: "module-4-functions",
  title: "Module 4: Functions & Modularity",
  description:
    "Write reusable functions, lambdas, decorators, and organize code into modules and packages.",
  lessons: [
    {
      id: "functions-basics",
      title: "Lesson 12: Functions — Reusable Building Blocks",
      shortDescription:
        "Define functions, parameters, default arguments, return values, and docstrings.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Why Functions?

A **function** is a named block of reusable code. Write it once, call it many times. Functions are how you stop repeating yourself (the **DRY** principle: *Don't Repeat Yourself*) and keep programs readable. If you find yourself copying and pasting the same 5 lines, that code belongs in a function.

Functions are the single most important organizational tool in programming. Every real program — from a web server to a data pipeline — is a collection of functions working together. This lesson gives you the complete mental model: how to write them, call them, and reason about them.

#### What You'll Learn in This Lesson

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

> **Mental model:** a function is a machine. Inputs go in the funnel (parameters), work happens inside, and the result rolls out (return). Trace each call separately — a fresh set of local boxes every time.

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

**Which style should you use?** Positional for short, obvious calls (\`area(5, 4)\`); keyword for clarity when a call has several arguments or the meaning isn't obvious. Professionals mix both: \`send_email("riya@example.com", subject="Hello", urgent=True)\`.

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

**The mutable-default trap in detail:**

\`\`\`python
def add_item(item, cart=[]):      # BAD — cart is shared across calls!
    cart.append(item)
    return cart

print(add_item("apple"))    # ['apple']
print(add_item("banana"))   # ['apple', 'banana'] — the first call's list leaked in!
\`\`\`

The default \`[]\` is created **once** when the function is defined, then reused on every call. The fix is the \`None\` sentinel pattern:

\`\`\`python
def add_item(item, cart=None):    # GOOD
    if cart is None:
        cart = []
    cart.append(item)
    return cart
\`\`\`

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

> **print() vs return — the eternal beginner question:** \`print()\` *shows* a value on the screen; \`return\` *hands* a value to the caller. A function that only prints cannot be used in further calculations. A function that returns can: \`double = area(5, 4) * 2\`. When in doubt, **return** — you can always print at the call site.

---

### Docstrings — Documentation Built In

A triple-quoted string right after the \`def\` line documents what the function does:

\`\`\`python
def calculate_grade(score, bonus=0):
    """Return a letter grade for a score plus optional bonus."""
    ...
\`\`\`

Professional teams treat docstrings as **non-negotiable**. Tools like \`help()\`, IDEs, and documentation generators read them automatically.

**Writing a good docstring** — the three W's:

1. **What** it does (one sentence, imperative: "Return...", "Compute...", "Validate...").
2. **What** it takes (parameters) and returns, when it isn't obvious.
3. **What** can go wrong (exceptions raised).

\`\`\`python
def withdraw(balance, amount):
    """Subtract amount from balance.

    Args:
        balance: Current account balance (float).
        amount: Amount to withdraw (float).

    Returns:
        New balance after withdrawal.

    Raises:
        ValueError: If amount exceeds balance.
    """
\`\`\`

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
- It **cannot change** them without the \`global\` keyword (Lesson 14).
- Each call creates a **fresh set of local boxes** — no leftovers between calls.

**Why scope is a feature, not a limitation:** because functions can't accidentally overwrite your global variables, large programs stay safe. Each function is an isolated universe — that isolation is what makes code predictable and testable.

---

### Common Mistakes to Avoid

- **Mistake:** \`def f(items=[])\` — mutable default shared across calls — **Fix:** use \`def f(items=None): items = [] if items is None else items\`.
- **Mistake:** Forgetting \`return\` and getting \`None\` back — **Fix:** remember: no return = None.
- **Mistake:** Calling a function before defining it in the file — **Fix:** definitions run top-to-bottom; define before you call (or put calls in a \`main()\`).
- **Mistake:** Using \`print()\` when you need the value for further math — **Fix:** \`return\` the value.
- **Mistake:** Naming a function with an uppercase letter or spaces — **Fix:** snake_case: \`calculate_grade\`, not \`CalculateGrade\`.

### Professional Tips & Tricks

- One function = one job. If a function does three things, split it.
- Use keyword arguments at call sites: \`calculate_grade(score=88, bonus=5)\`.
- Write the docstring FIRST — it forces you to think about what the function should do.
- Prefer \`return\` over \`print\` inside functions — returned values are reusable.
- Keep functions short (roughly under 20 lines); long functions are a signal to split.

---

### Key Takeaways

- \`def name(params):\` defines a function; the body must be indented.
- Defaults make parameters optional; defaults go last.
- Every function returns a value — explicit \`return\` or \`None\`.
- Docstrings document functions and are read by \`help()\` and IDEs.
- Local scope keeps function variables isolated.
- Never use mutable defaults; use the \`None\` sentinel pattern.

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
          id: "practice-geo-calculator",
          title: "Geometric Area & Perimeter Engine",
          difficulty: "Easy",
          task: "Write a function `circle_metrics(radius)` that computes area ($π r^2$) and circumference ($2 π r$), returning them as a formatted named tuple or pair.",
          hint: "Use math.pi from the math module.",
          solution: `import math\n\ndef circle_metrics(radius):\n    """Calculate and return (area, circumference) for a given circle radius."""\n    area = math.pi * (radius ** 2)\n    circumference = 2 * math.pi * radius\n    return round(area, 2), round(circumference, 2)\n\na, c = circle_metrics(5)\nprint(f"Radius: 5 -> Area: {a} sq units | Circumference: {c} units")`,
        },
        {
          id: "practice-tiered-discount-calc",
          title: "Tiered E-Commerce Discount Calculator",
          difficulty: "Medium",
          task: "Write `calculate_cart_total(subtotal, discount_percent=0.0, tax_rate=0.08, free_shipping_threshold=100.0)` returning the final price.",
          hint: "Apply discount first, add tax, then add $10 shipping if below threshold.",
          solution: `def calculate_cart_total(subtotal, discount_percent=0.0, tax_rate=0.08, shipping_fee=10.0, free_shipping_threshold=100.0):\n    discounted = subtotal * (1 - discount_percent / 100)\n    tax = discounted * tax_rate\n    shipping = 0.0 if discounted >= free_shipping_threshold else shipping_fee\n    total = discounted + tax + shipping\n    return round(total, 2)\n\nprint(f"Cart 1 Total: \${calculate_cart_total(120, discount_percent=10):.2f}")\nprint(f"Cart 2 Total: \${calculate_cart_total(45, discount_percent=0):.2f}")`,
        },
        {
          id: "practice-prime-factors-fn",
          title: "Prime Factorization Engine",
          difficulty: "Medium",
          task: "Write a function `get_prime_factors(n)` that decomposes an integer `n` into its prime factors list (e.g. 84 -> [2, 2, 3, 7]).",
          hint: "Divide by 2 while possible, then test odd numbers up to sqrt(n).",
          solution: `def get_prime_factors(n):\n    factors = []\n    divisor = 2\n    while divisor * divisor <= n:\n        if n % divisor == 0:\n            factors.append(divisor)\n            n //= divisor\n        else:\n            divisor += 1\n    if n > 1:\n        factors.append(n)\n    return factors\n\nprint(f"Prime factors of 84:  {get_prime_factors(84)}")\nprint(f"Prime factors of 360: {get_prime_factors(360)}")`,
        },
        {
          id: "practice-text-stats-analyzer",
          title: "Text Readability & Statistics Engine",
          difficulty: "Medium",
          task: "Write `analyze_text(content)` returning a dictionary with total characters, word count, sentence count (split on . ! ?), and average word length.",
          hint: "Use regex or string split to count sentences and words.",
          solution: `def analyze_text(content):\n    words = content.split()\n    sentences = [s.strip() for s in content.replace("!", ".").replace("?", ".").split(".") if s.strip()]\n    avg_len = sum(len(w.strip('.,!?')) for w in words) / max(len(words), 1)\n    return {\n        "char_count": len(content),\n        "word_count": len(words),\n        "sentence_count": len(sentences),\n        "avg_word_length": round(avg_len, 2)\n    }\n\nreport = analyze_text("Python is amazing! It is easy to learn and very fast to build prototypes.")\nfor k, v in report.items():\n    print(f"{k:<16}: {v}")`,
        },
        {
          id: "practice-type-annotated-validator",
          title: "Type-Annotated User Record Validator",
          difficulty: "Hard",
          task: "Write `validate_user_record(name: str, age: int, email: str, roles: list[str]) -> tuple[bool, list[str]]` with detailed validation error messages.",
          hint: "Check age >= 18, '@' in email, and len(roles) > 0.",
          solution: `def validate_user_record(name: str, age: int, email: str, roles: list[str]) -> tuple[bool, list[str]]:\n    errors: list[str] = []\n    if not name.strip(): errors.append("Name cannot be empty.")\n    if age < 18 or age > 120: errors.append(f"Age {age} is outside valid range (18-120).")\n    if "@" not in email or "." not in email: errors.append(f"Invalid email format: '{email}'.")\n    if not roles: errors.append("User must have at least one role assigned.")\n    return (len(errors) == 0, errors)\n\nvalid, errs = validate_user_record("Amol", 25, "amol@ai.io", ["admin"])\nprint(f"Is Valid? {valid} | Errors: {errs}")`,
        },
        {
          id: "practice-functional-composer",
          title: "Functional Pipe & Compose Engine",
          difficulty: "Hard",
          task: "Write `compose(*functions)` that takes any number of single-argument functions and returns a new function executing them in right-to-left order.",
          hint: "def composed(x): for f in reversed(functions): x = f(x); return x",
          solution: `def compose(*functions):\n    def composed_fn(arg):\n        result = arg\n        for fn in reversed(functions):\n            result = fn(result)\n        return result\n    return composed_fn\n\nclean_str = str.strip\nlowercase = str.lower\nslugify = lambda s: "-".join(s.split())\n\npipeline = compose(slugify, lowercase, clean_str)\nprint("Pipeline Result:", pipeline("   Python Functional Programming 2026   "))`,
        },
      ],
    },
    {
      id: "lambda-args-kwargs",
      title: "Lesson 13: Lambda, *args & **kwargs",
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

#### What You'll Learn in This Lesson

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

**Other classic lambda uses:**

\`\`\`python
# map: apply to every item
squares = list(map(lambda x: x ** 2, [1, 2, 3]))     # [1, 4, 9]

# filter: keep items passing the test
evens = list(filter(lambda x: x % 2 == 0, range(10)))  # [0, 2, 4, 6, 8]

# max with a key
longest = max(["python", "ai", "code"], key=len)      # 'python'
\`\`\`

In modern Python, list comprehensions often replace \`map\`/\`filter\` — but lambdas with \`key=\` in sort/max/min remain irreplaceable.

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

> **Mental model:** \`*args\` is a funnel that pours any number of loose values into one bag (a tuple). The bag arrives inside the function ready to loop over.

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

> **Mental model:** \`**kwargs\` is a coat-check desk — every named item (\`name=value\`) is hung on a labeled hook in a dictionary.

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

**Keyword-only parameters** (after a bare \`*\`) can only be passed by name — they protect against accidental misordering:

\`\`\`python
def connect(host, *, port=443):
    print(host, port)

connect("example.com")              # example.com 443
connect("example.com", port=8080)   # example.com 8080
# connect("example.com", 8080)      # TypeError! port is keyword-only
\`\`\`

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

**A real-world use — forwarding arguments.** Wrappers and decorators (Lesson 14) capture everything with \`*args, **kwargs\` and forward it unchanged:

\`\`\`python
def logged_call(func):
    def wrapper(*args, **kwargs):
        print("Calling", func.__name__)
        return func(*args, **kwargs)   # forward everything
    return wrapper
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
- **Mistake:** Forgetting \`*\` when calling \`add(*nums)\` — **Fix:** without the star, you pass a single list as one argument.
- **Mistake:** Naming the parameters \`args\`/\`kwargs\` and thinking the names matter — **Fix:** the \`*\`/\`**\` syntax is what does the work.

### Professional Tips & Tricks

- Use lambdas only for tiny logic; for anything complex, def a real function.
- \`*args\` is perfect for variadic sums, logs, and wrappers that must pass arguments through.
- \`**kwargs\` lets you write configurable functions without exploding the signature.
- Use bare \`*\` to force keyword-only arguments and prevent misordering bugs.
- In decorators and wrappers, always forward \`*args, **kwargs\` unchanged.

---

### Key Takeaways

- \`lambda x: expr\` is a nameless one-expression function.
- \`*args\` → tuple of extra positional args; \`**kwargs\` → dict of extra keyword args.
- Parameter order: normal → \`*args\` → keyword-only → \`**kwargs\`.
- \`*list\` and \`**dict\` unpack when calling functions.
- Lambdas shine as \`key=\` functions for sort/max/min.

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
          id: "practice-lambda-complex-sort",
          title: "Complex Multi-Criteria Lambda Sorter",
          difficulty: "Easy",
          task: "Sort a list of product dictionaries `[{'name': 'A', 'price': 50, 'rating': 4.8}, ...]` by rating descending, and price ascending as tiebreaker using a lambda key.",
          hint: "sorted(products, key=lambda p: (-p['rating'], p['price']))",
          solution: `products = [\n    {"name": "Mug", "price": 15, "rating": 4.5},\n    {"name": "Book", "price": 25, "rating": 4.9},\n    {"name": "Pen", "price": 5, "rating": 4.5},\n    {"name": "Desk Mat", "price": 30, "rating": 4.9}\n]\nsorted_prods = sorted(products, key=lambda p: (-p["rating"], p["price"]))\nprint("Top Rated Products:")\nfor p in sorted_prods:\n    print(f"  ⭐ {p['rating']} | \${p['price']:<2} | {p['name']}")`,
        },
        {
          id: "practice-variadic-stats-args",
          title: "Variadic Numerical Summary (*args)",
          difficulty: "Medium",
          task: "Write `stats_summary(*numbers)` that accepts any number of numeric arguments and returns a dictionary with count, sum, mean, min, max, and variance.",
          hint: "Calculate mean = sum/n, variance = sum((x - mean)**2 for x in numbers) / n.",
          solution: `def stats_summary(*numbers):\n    if not numbers: return {}\n    n = len(numbers)\n    total = sum(numbers)\n    mean = total / n\n    variance = sum((x - mean)**2 for x in numbers) / n\n    return {\n        "count": n,\n        "sum": total,\n        "mean": round(mean, 2),\n        "min": min(numbers),\n        "max": max(numbers),\n        "variance": round(variance, 2)\n    }\n\nprint("Summary for (10, 20, 30, 40, 50):", stats_summary(10, 20, 30, 40, 50))`,
        },
        {
          id: "practice-dynamic-html-tag",
          title: "Dynamic HTML Element Builder (**kwargs)",
          difficulty: "Medium",
          task: "Write `html_element(tag, text='', **attrs)` that generates a clean HTML string `<tag attr='val'>text</tag>`, converting `cls` to `class` attribute.",
          hint: "Loop through attrs.items(), replacing 'cls' with 'class'.",
          solution: `def html_element(tag, text="", **attrs):\n    attr_str = "".join(\n        f' {"class" if k == "cls" else k}="{v}"'\n        for k, v in attrs.items()\n    )\n    return f"<{tag}{attr_str}>{text}</{tag}>"\n\nprint(html_element("button", "Submit Application", cls="btn btn-primary", id="submit-btn", disabled="true"))\nprint(html_element("a", "Visit Documentation", href="https://docs.python.org", target="_blank"))`,
        },
        {
          id: "practice-filter-map-lambdas",
          title: "Functional Map & Filter Pipeline",
          difficulty: "Medium",
          task: "Given raw prices in dollars `[19.99, 4.50, 150.00, 89.00, 12.00]`, filter items >= $20, apply a 15% luxury discount, and format as formatted string list.",
          hint: "Combine list(map(..., filter(...))) with lambda expressions.",
          solution: `prices = [19.99, 4.50, 150.00, 89.00, 12.00]\nqualifying = filter(lambda p: p >= 20.0, prices)\ndiscounted = map(lambda p: f"\${p * 0.85:.2f}", qualifying)\nprint(f"Luxury Discounted Items: {list(discounted)}")`,
        },
        {
          id: "practice-generic-forwarder",
          title: "API Middleware Event Logger (*args, **kwargs)",
          difficulty: "Hard",
          task: "Write a function `invoke_with_logging(func, *args, **kwargs)` that logs function name, positional arg count, keyword names, and returns execution result.",
          hint: "print(f'Calling {func.__name__} with args={args}, kwargs={kwargs}'); return func(*args, **kwargs)",
          solution: `def invoke_with_logging(func, *args, **kwargs):\n    print(f"[AUDIT LOG] Invoking '{func.__name__}' | Positional: {len(args)} | Named: {list(kwargs.keys())}")\n    result = func(*args, **kwargs)\n    print(f"[AUDIT LOG] Result returned: {result}")\n    return result\n\ndef create_user(username, email, role="Member", is_active=True):\n    return {"username": username, "email": email, "role": role, "active": is_active}\n\nu = invoke_with_logging(create_user, "amol25", "amol@ai.dev", role="Admin")`,
        },
        {
          id: "practice-currying-lambda-factory",
          title: "Currying & Partial Application Factory",
          difficulty: "Hard",
          task: "Write `curry(func)` that converts a 2-argument function `f(a, b)` into a curried function `g(a)(b)` using lambdas.",
          hint: "def curry(f): return lambda a: lambda b: f(a, b)",
          solution: `def curry(f):\n    """Convert a two-argument function into a chain of single-argument lambdas."""\n    return lambda a: lambda b: f(a, b)\n\ndef power(base, exponent):\n    return base ** exponent\n\ncurried_power = curry(power)\nsquare_of = curried_power(2)\ncube_of = curried_power(3)\n\nprint(f"2 ** 5 = {curried_power(2)(5)}")\nprint(f"3 ** 4 = {curried_power(3)(4)}")`,
        },
      ],
    },
    {
      id: "scope-closures-decorators",
      title: "Lesson 14: Scope, Closures & Decorators",
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

> **Mental model:** scopes are nested rooms. Python looks in your room first (local), then the room you're inside (enclosing), then the house (global), then the city (built-ins). First room with the name wins.

#### What You'll Learn in This Lesson

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

**Why do you even need \`global\`?** Without it, writing \`count += 1\` inside a function would create a *new local* variable called \`count\` (and crash with \`UnboundLocalError\`, since you're reading it before assignment). \`global\` tells Python "no, I mean the module-level one".

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

**A second closure example — factory functions:**

\`\`\`python
def make_multiplier(n):
    def multiply(x):
        return x * n
    return multiply

times_3 = make_multiplier(3)
times_5 = make_multiplier(5)
print(times_3(10))   # 30
print(times_5(10))   # 50
\`\`\`

Each closure (\`times_3\`, \`times_5\`) remembers its *own* \`n\` — independent backpacks.

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

> **Mental model:** the decorator is a wrapping station. Your function goes in, gets wrapped in extra behavior, and the *wrapped* version comes out under the same name.

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

**Why it matters:** without \`@wraps\`, \`slow_task.__name__\` becomes \`"wrapper"\` instead of \`"slow_task"\` — breaking debuggers, documentation, and anything that inspects function metadata. \`@wraps\` copies the identity over.

---

### Real-World Decorators You Already Use

If you have used Flask or FastAPI, you have seen decorators in action:

\`\`\`python
from flask import Flask
app = Flask(__name__)

@app.route("/")          # a decorator!
def home():
    return "Hello"
\`\`\`

The machinery you learned here — \`@name\` = \`f = name(f)\` — is exactly what powers these web frameworks.

---

### Common Mistakes to Avoid

- **Mistake:** Using \`global\` when you meant \`nonlocal\` (or vice versa) — **Fix:** \`global\` = module level; \`nonlocal\` = enclosing function.
- **Mistake:** A decorator that forgets to \`return func(*args, **kwargs)\` — **Fix:** always return the wrapped result.
- **Mistake:** Missing \`@wraps\` and losing the function's identity — **Fix:** decorate the wrapper.
- **Mistake:** Forgetting \`nonlocal\` in a closure and getting \`UnboundLocalError\` — **Fix:** declare \`nonlocal count\` before modifying it.
- **Mistake:** Applying a decorator without the \`@\` and forgetting to reassign — **Fix:** \`f = decorator(f)\` or use the \`@\` sugar.

### Professional Tips & Tricks

- Use \`nonlocal\` (not \`global\`) to modify an enclosing function's variable.
- Decorate with \`@functools.wraps(func)\` so the wrapped function keeps its name and docstring.
- Decorators are the foundation of Flask/FastAPI route decorators — this is the same machinery.
- Keep decorators generic with \`*args, **kwargs\` so they work on any function.
- For parameterized decorators, add one more wrapping layer (\`def repeat(times): def deco(func): ...\`).

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
          id: "practice-counter-closure",
          title: "Stateful Counter & Accumulator Closure",
          difficulty: "Easy",
          task: "Write `create_counter(start=0)` returning a closure function that increments and returns its internal counter each time it is called using `nonlocal`.",
          hint: "def count(): nonlocal val; val += 1; return val",
          solution: `def create_counter(start=0):\n    count = start\n    def step(by=1):\n        nonlocal count\n        count += by\n        return count\n    return step\n\nc1 = create_counter(10)\nprint(f"Counter 1: {c1()}")   # 11\nprint(f"Counter 1: {c1(5)}")  # 16\nprint(f"Counter 1: {c1()}")   # 17`,
        },
        {
          id: "practice-timer-decorator",
          title: "Execution Benchmark Decorator (@timing)",
          difficulty: "Medium",
          task: "Write a `@timing` decorator using `time.perf_counter()` and `functools.wraps` that measures and prints execution duration for any function.",
          hint: "import functools, time; start = time.perf_counter(); res = func(*args, **kwargs); elapsed = time.perf_counter() - start",
          solution: `import time\nimport functools\n\ndef timing(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        res = func(*args, **kwargs)\n        duration = time.perf_counter() - start\n        print(f"⏱️ [{func.__name__}] executed in {duration:.6f}s")\n        return res\n    return wrapper\n\n@timing\ndef compute_squares(n):\n    return sum(i * i for i in range(n))\n\nprint(f"Result: {compute_squares(100_000)}")`,
        },
        {
          id: "practice-retry-decorator",
          title: "Resilient Retry Decorator with Backoff",
          difficulty: "Hard",
          task: "Write a parameterized decorator `@retry(max_attempts=3, delay=0.1)` that re-runs a function if it raises an Exception, failing only after exhausting attempts.",
          hint: "def retry(max_attempts=3, delay=0.1): def decorator(func): def wrapper(...)",
          solution: `import time\nimport functools\n\ndef retry(max_attempts=3, delay=0.05):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f"Attempt {attempt}/{max_attempts} failed: {e}")\n                    if attempt == max_attempts:\n                        raise\n                    time.sleep(delay)\n        return wrapper\n    return decorator\n\ncalls = 0\n@retry(max_attempts=3)\ndef flaky_network_call():\n    global calls\n    calls += 1\n    if calls < 3:\n        raise ConnectionError("Network unreachable")\n    return "Success: Data payload fetched!"\n\nprint(flaky_network_call())`,
        },
        {
          id: "practice-rate-limiter-closure",
          title: "Sliding Rate Limiter Closure",
          difficulty: "Hard",
          task: "Write `make_rate_limiter(max_calls=3, period_sec=1.0)` that returns a validator function which permits execution only if call count within period is within limits.",
          hint: "Store timestamps list; prune older timestamps with [t for t in timestamps if now - t < period].",
          solution: `import time\n\ndef make_rate_limiter(max_calls=3, period=1.0):\n    timestamps = []\n    def is_allowed():\n        now = time.time()\n        nonlocal timestamps\n        timestamps = [t for t in timestamps if now - t < period]\n        if len(timestamps) < max_calls:\n            timestamps.append(now)\n            return True\n        return False\n    return is_allowed\n\nlimiter = make_rate_limiter(max_calls=2, period=1.0)\nprint("Call 1:", limiter())  # True\nprint("Call 2:", limiter())  # True\nprint("Call 3:", limiter())  # False (Rate limited)`,
        },
        {
          id: "practice-rbac-decorator",
          title: "Role-Based Access Control (RBAC) Decorator",
          difficulty: "Hard",
          task: "Write a `@requires_role('admin')` decorator that inspects the current user context (passed via kwargs or context) and raises `PermissionError` if unauthorized.",
          hint: "Check kwargs.get('current_user_role') in allowed_roles.",
          solution: `import functools\n\ndef requires_role(*allowed_roles):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, user_role="guest", **kwargs):\n            if user_role not in allowed_roles:\n                raise PermissionError(f"Access Denied: Role '{user_role}' lacks required permissions: {allowed_roles}")\n            return func(*args, user_role=user_role, **kwargs)\n        return wrapper\n    return decorator\n\n@requires_role("admin", "superadmin")\ndef delete_database(user_role="guest"):\n    return "Database purge initiated by admin."\n\nprint(delete_database(user_role="admin"))\ntry:\n    delete_database(user_role="editor")\nexcept PermissionError as err:\n    print(err)`,
        },
        {
          id: "practice-memoize-cache-decorator",
          title: "Memoization Cache Decorator with Cache Hit Counter",
          difficulty: "Hard",
          task: "Build a custom `@memoize` caching decorator from scratch that stores arguments in a dictionary cache, prints cache hits/misses, and accelerates recursive Fibonacci.",
          hint: "cache = {}; def wrapper(*args): if args in cache: return cache[args]; res = func(*args); cache[args] = res; return res",
          solution: `import functools\n\ndef memoize(func):\n    cache = {}\n    hits = misses = 0\n    @functools.wraps(func)\n    def wrapper(*args):\n        nonlocal hits, misses\n        if args in cache:\n            hits += 1\n            return cache[args]\n        misses += 1\n        result = func(*args)\n        cache[args] = result\n        return result\n    wrapper.stats = lambda: f"Hits: {hits}, Misses: {misses}"\n    return wrapper\n\n@memoize\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\n\nprint(f"Fib(30) = {fib(30)}")\nprint(f"Fib Cache Performance: {fib.stats()}")`,
        },
      ],
    },
    {
      id: "modules-packages",
      title: "Lesson 15: Modules, Packages & Imports",
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

Modules are how Python stays organized. Every library you \`pip install\` is ultimately a collection of modules — and your own projects should be too.

#### What You'll Learn in This Lesson

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

**A warning on star imports:** \`from module import *\` dumps every public name into your namespace — it can silently overwrite your variables and is banned in most professional style guides.

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

**The \`__init__.py\` file** can be empty (just a marker) or it can pre-import convenient names so users write \`from utils import clean_text\` instead of the deeper path. In Python 3.3+, packages without \`__init__.py\` (namespace packages) also work — but explicit is better.

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

> **Mental model:** \`__name__\` is a magic variable that answers "how was this file started?" If the answer is "as the main program", run the demo code. If "as a library", stay quiet and only offer the functions.

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

**Why virtual environments are non-negotiable in 2026:**

- Project A needs pandas 2.0; Project B needs pandas 1.5. Globally installed, they fight.
- A corrupted global environment can break your whole machine's Python.
- \`requirements.txt\` + venv = anyone can reproduce your exact environment: \`pip install -r requirements.txt\`.

---

### Common Mistakes to Avoid

- **Mistake:** Importing a module whose name shadows a built-in (e.g., \`math.py\` in your project) — **Fix:** rename your file.
- **Mistake:** Circular imports (A imports B, B imports A) — **Fix:** move shared code to a third module or import inside functions.
- **Mistake:** Putting executable code at module top level — **Fix:** wrap it in \`if __name__ == "__main__":\`.
- **Mistake:** \`from module import *\` polluting the namespace — **Fix:** import explicitly or by module name.
- **Mistake:** Installing packages globally instead of in a venv — **Fix:** create and activate a virtual environment per project.

### Professional Tips & Tricks

- Import at the top of the file, one import per line, in a consistent order (stdlib, third-party, local).
- Always guard executable code with \`if __name__ == '__main__':\` so it can be imported safely.
- Use relative imports (\`from . import utils\`) inside packages.
- Freeze your dependencies with \`pip freeze > requirements.txt\` for reproducibility.
- Alias long library names: \`import pandas as pd\`, \`import numpy as np\`.

---

### Key Takeaways

- A module is a \`.py\` file; a package is a folder of modules with \`__init__.py\`.
- Four import styles: direct, from-import, multi-name, alias.
- The \`__name__\` guard makes files script + library.
- \`pip install\` adds packages; virtual environments isolate them.
- Keep imports at the top and guard executable code.

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
          id: "practice-math-statistics-pipeline",
          title: "Math & Statistics Standard Library Pipeline",
          difficulty: "Easy",
          task: "Import `math` and `statistics` to calculate the mean, standard deviation, and log2 values of dataset `[4, 8, 15, 16, 23, 42]`.",
          hint: "statistics.mean(), statistics.stdev(), math.log2()",
          solution: `import math\nimport statistics\n\ndata = [4, 8, 15, 16, 23, 42]\nmean_val = statistics.mean(data)\nstdev_val = statistics.stdev(data)\nlog2_vals = [round(math.log2(x), 2) for x in data]\n\nprint(f"Mean:     {mean_val:.2f}")\nprint(f"Std Dev:  {stdev_val:.2f}")\nprint(f"Log2:     {log2_vals}")`,
        },
        {
          id: "practice-datetime-timezone-calc",
          title: "Timezone & Business SLA Duration Calculator",
          difficulty: "Medium",
          task: "Use `datetime` and `timedelta` to compute a 72-hour SLA deadline from current UTC time, formatted in ISO 8601 string format.",
          hint: "from datetime import datetime, timezone, timedelta; now = datetime.now(timezone.utc)",
          solution: `from datetime import datetime, timezone, timedelta\n\nnow_utc = datetime.now(timezone.utc)\nsla_duration = timedelta(hours=72)\ndeadline = now_utc + sla_duration\n\nprint(f"Ticket Created: {now_utc.strftime('%Y-%m-%d %H:%M:%S %Z')}")\nprint(f"SLA Deadline:   {deadline.strftime('%Y-%m-%d %H:%M:%S %Z')}")\nprint(f"ISO Format:     {deadline.isoformat()}")`,
        },
        {
          id: "practice-pathlib-inspector",
          title: "Modern Filesystem Inspection with pathlib",
          difficulty: "Medium",
          task: "Use `pathlib.Path` to parse a file path string `'/projects/portfolio/static/data.csv'`, extracting parent directory, stem name, file extension, and constructing a new sibling path.",
          hint: "from pathlib import Path; p = Path('/path/file.ext'); p.parent, p.stem, p.suffix",
          solution: `from pathlib import Path\n\nfilepath = Path("/projects/portfolio/static/data.csv")\nbackup_path = filepath.with_name(f"{filepath.stem}_backup{filepath.suffix}")\n\nprint(f"Original:    {filepath}")\nprint(f"Parent Dir:  {filepath.parent}")\nprint(f"File Stem:   {filepath.stem}")\nprint(f"Extension:   {filepath.suffix}")\nprint(f"Backup Path: {backup_path}")`,
        },
        {
          id: "practice-cli-subcommand-argparse",
          title: "CLI Flag & Argument Parser Simulation",
          difficulty: "Hard",
          task: "Write a mini command-line parser using `sys.argv` or `argparse` with subcommands (`serve`, `build`, `test`) and flags (`--port`, `--env`).",
          hint: "import argparse; parser = argparse.ArgumentParser()",
          solution: `import argparse\n\nparser = argparse.ArgumentParser(description="Portfolio Micro-Service CLI")\nparser.add_argument("--env", choices=["dev", "prod", "test"], default="dev", help="Execution environment")\nparser.add_argument("--port", type=int, default=3000, help="HTTP server port")\nparser.add_argument("--debug", action="store_true", help="Enable verbose debug logging")\n\n# Simulated args parsing\nargs = parser.parse_args(["--env", "prod", "--port", "8080", "--debug"])\nprint(f"Parsed CLI Config: Environment={args.env} | Port={args.port} | Debug={args.debug}")`,
        },
        {
          id: "practice-module-guard-pattern",
          title: "Dual Mode Library & Test Harness (`__name__` guard)",
          difficulty: "Medium",
          task: "Demonstrate a complete Python module structure: exports public functions (`tokenize`, `hash_string`), defines `__all__`, and runs a self-test suite only when executed directly.",
          hint: "if __name__ == '__main__': ...",
          solution: `__all__ = ["tokenize", "hash_string"]\nimport hashlib\n\ndef tokenize(text: str) -> list[str]:\n    return [w.strip().lower() for w in text.split() if w.strip()]\n\ndef hash_string(val: str) -> str:\n    return hashlib.sha256(val.encode()).hexdigest()[:12]\n\nif __name__ == "__main__":\n    print("--- Running Module Self-Test Suite ---")\n    sample = "Hello Python World"\n    tokens = tokenize(sample)\n    assert len(tokens) == 3, "Tokenize test failed"\n    h = hash_string(sample)\n    print(f"Tokens: {tokens} | SHA256 (12 chars): {h}")\n    print("All unit assertions passed successfully!")`,
        },
        {
          id: "practice-dynamic-importlib",
          title: "Dynamic Plugin Registry with importlib",
          difficulty: "Hard",
          task: "Use `importlib.import_module` to dynamically load a standard library module by string name ('json' or 'math') and safely invoke a target function.",
          hint: "import importlib; mod = importlib.import_module(module_name); getattr(mod, func_name)",
          solution: `import importlib\n\ndef execute_plugin(module_name: str, function_name: str, *args, **kwargs):\n    try:\n        mod = importlib.import_module(module_name)\n        fn = getattr(mod, function_name)\n        return fn(*args, **kwargs)\n    except (ModuleNotFoundError, AttributeError) as err:\n        return f"Plugin Error: {err}"\n\nprint("Dynamic Math Sqrt:", execute_plugin("math", "sqrt", 169))\nprint("Dynamic JSON Dumps:", execute_plugin("json", "dumps", {"status": "active"}))`,
        },
      ],
    },
  ],
};
