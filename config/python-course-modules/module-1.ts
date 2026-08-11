import type { Module } from "../courses";

export const MODULE_1: Module = {
  id: "module-1-fundamentals",
  title: "Module 1: Python Fundamentals",
  description:
    "Set up Python, write your first program, and master variables, data types, strings, and operators with visual memory models.",
  lessons: [
    {
      id: "hello-world-python",
      title: "Lesson 1: Hello, Python! Setup & Your First Program",
      shortDescription:
        "Installing Python, the REPL, print statements, comments, and why indentation matters.",
      duration: "30 mins",
      readingTime: "6 mins read",
      contentMarkdown: `### What is Python?

Python is a general-purpose, high-level programming language created by Guido van Rossum and first released in 1991. It was designed with one guiding philosophy: **code should be readable and easy to write**. Because Python reads almost like plain English, you can focus on *thinking* about the problem instead of fighting the syntax. Today Python is the #1 language for beginners, data science, machine learning, artificial intelligence, and web back-ends — which is exactly why this course starts here.

#### What You'll Learn in This lesson

- Install Python and verify it works on your machine
- Write and run your very first program
- Understand the difference between the REPL and script files
- Master the \`print()\` function and its formatting options
- Write comments to document your code
- Understand why indentation is not optional in Python

---

### Installing Python (Step by Step)

1. Go to [python.org/downloads](https://www.python.org/downloads/) and download the latest stable version (3.11 or newer).
2. Run the installer. **Important:** tick the checkbox **"Add Python to PATH"** before clicking *Install Now* — this lets you run \`python\` from any terminal.
3. Open a terminal (Command Prompt on Windows, Terminal on macOS/Linux) and verify the installation:

\`\`\`bash
python --version
# Output: Python 3.12.4
\`\`\`

If you see a version number, Python is ready. If you see *"python is not recognized"*, you missed the PATH checkbox — reinstall and tick it.

#### The REPL vs Script Files

There are two ways to run Python code:

| Method | How to start it | Best for |
|---|---|---|
| **REPL** (Read-Eval-Print Loop) | Type \`python\` in your terminal | Testing one line at a time, quick experiments |
| **Script file** | Save a \`.py\` file, run \`python hello.py\` | Real programs with many lines |

The REPL reads your input, evaluates it, prints the result, and loops back for more — an instant playground. Script files are how real software is built: you save your code, run the whole file, and share it with others.

---

### Your First Program

The most famous first program in the world is exactly one line:

\`\`\`python
print("Hello, world!")
\`\`\`

Save it as \`hello.py\` and run \`python hello.py\`. The output is:

\`\`\`text
Hello, world!
\`\`\`

#### The print() Function — Your First Tool

\`print()\` writes text to the console. Whatever you put inside the parentheses is shown to the user. It has a few powerful options:

| Parameter | What it does | Example |
|---|---|---|
| \`sep\` | Separator between multiple values (default is a space) | \`print("A", "B", sep=" | ")\` |
| \`end\` | What to print at the end (default is a newline) | \`print("Hi", end="!")\` |

You can print any number of values in one call, mixing strings and numbers freely.

#### Comments — Notes for Humans

A comment is a note to yourself or other programmers. Python ignores everything after a \`#\` on that line:

\`\`\`python
# This is a comment — Python skips it entirely
print("This runs")  # Comments can also go after code
# print("This line is commented out, so it will NOT run")
\`\`\`

Comments are how you explain *why* code exists, not *what* it does — the code itself shows the *what*.

---

### Indentation is Everything

Most languages group blocks of code with curly braces (\`{ }\`). Python uses **indentation** (spaces or tabs) instead. This is a feature, not a quirk: it forces every programmer to write neatly formatted code.

- A block of code is indented 4 spaces by default.
- **Never mix tabs and spaces** — it causes an \`IndentationError\`.
- Inconsistent indentation is the #1 cause of "my code suddenly broke" for beginners.

\`\`\`python
if True:
    print("Inside the if-block")   # 4 spaces
    print("Still inside")           # same indent = same block
print("Back at top level")          # no indent = outside
\`\`\`

#### How to Visualize Code Execution

Imagine Python reading your file **top to bottom, one line at a time**, like a person following a recipe. Every \`print()\` is a "shout" to the console — the order of the shouts is exactly the order of execution. There is no jumping ahead and no skipping lines (until we learn about loops and functions in later lessons).

---

### Common Mistakes to Avoid

- **Mistake:** \`print "Hello"\` (forgetting parentheses) — **Fix:** \`print("Hello")\`. Python 3 requires parentheses; the old Python 2 syntax no longer works.
- **Mistake:** Mixing tabs and spaces for indentation — **Fix:** configure your editor to convert tabs to 4 spaces.
- **Mistake:** Naming a file \`print.py\` or \`math.py\` — **Fix:** avoid names that collide with Python keywords or built-in modules.

### Professional Tips & Tricks

- Use 4 spaces for indentation — never mix tabs and spaces.
- Name your files with lowercase letters and underscores: \`hello_world.py\`.
- Use \`print()\` freely while learning — it is your flashlight for seeing what code does.

---

### Key Takeaways

- Python is readable, popular, and the best first language to learn.
- The REPL is for experiments; \`.py\` script files are for real programs.
- \`print()\` displays output and supports \`sep\` and \`end\`.
- Comments (\`#\`) document code and are ignored by Python.
- Consistent 4-space indentation defines code blocks — and is non-negotiable.

**Next up:** Variables, data types, and how Python reads input from the user.`,
      codeLanguage: "python",
      codeSnippet: `# My very first Python program
print("Hello, world!")

# Print multiple values in one line
print("Amol", "teaches", "Python", 2026)

# print() with a custom separator
print("AI", "ML", "Python", sep=" | ")

# Comments are ignored by Python
# print("This line will NOT run")`,
      codeOutput: `Hello, world!
Amol teaches Python 2026
AI | ML | Python`,
      visualizationTips: [
        "Run this code in your head line-by-line and shout each print() output out loud — the order you shout is the output order.",
        "Use Python Tutor (pythontutor.com) to see each line light up as it executes.",
        "Imagine your code as a recipe: Python follows it from the first line to the last, never skipping ahead.",
      ],
      tipsAndTricks: [
        "Use 4 spaces for indentation — never mix tabs and spaces.",
        "Name your files with lowercase letters and underscores: hello_world.py.",
        "Use print() freely while learning — it is your flashlight for seeing what code does.",
      ],
      practice: [
        {
          id: "practice-hello-name",
          title: "Personalized Greeting",
          difficulty: "Easy",
          task: "Write a program that prints your name, your favorite programming topic, and the current year on three separate lines.",
          hint: "You need three print() statements.",
          solution: `print("Amol")\nprint("Python")\nprint(2026)`,
        },
        {
          id: "practice-print-sup",
          title: "Print Without Newline",
          difficulty: "Easy",
          task: "Use the end parameter so that 'Hello' and 'Python' print on the same line separated by a space.",
          hint: 'print("Hello", end=" ") then print("Python")',
          solution: `print("Hello", end=" ")\nprint("Python")\n# Output: Hello Python`,
        },
        {
          id: "practice-comments",
          title: "Explain Your Code",
          difficulty: "Easy",
          task: "Write two print() statements and add a comment above each one explaining what it does.",
          hint: "Comments start with #",
          solution: `# Print a greeting\nprint("Namaste!")\n# Print a fact\nprint("Python is easy to learn.")`,
        },
      ],
    },
    {
      id: "variables-io",
      title: "Lesson 2: Variables, Data Types & Input/Output",
      shortDescription:
        "Dynamic typing, type casting, memory references, printing statements, and reading standard input.",
      duration: "35 mins",
      readingTime: "7 mins read",
      contentMarkdown: `### What is a Variable?

A **variable** is a named label that points to a value stored in memory. Think of it as a sticky note attached to a box: the note has a name (like \`age\`), and the box holds a value (like \`24\`). You can move the note to a different box anytime — that is called **reassignment**.

#### What You'll Learn in This lesson

- Create and reuse variables with proper naming rules
- Understand Python's dynamic typing and the \`type()\` function
- Read input from the user with \`input()\`
- Cast values between types with \`int()\`, \`float()\`, and \`str()\`
- Understand how variables reference objects in memory

---

### Dynamic Typing in Python

Python is a **dynamically typed** language. This means:

- You do **not** declare a variable's type — you just assign a value.
- A variable can hold a number now and a string later.
- The type is a property of the *value*, not the *variable name*.

\`\`\`python
label = 100          # label points to an integer
print(type(label))   # <class 'int'>
label = "text"       # now label points to a string
print(type(label))   # <class 'str'>
\`\`\`

Use the built-in \`type()\` function as a spyglass to check what kind of object a variable really holds. It is invaluable for debugging.

#### Memory References — What Really Happens

When you write \`x = 10\`, Python allocates an integer object in memory and points the label \`x\` at it. If you then write \`x = "hello"\`, the label is simply pointed at a *new* string object. The old integer is now unreachable, and Python's **garbage collector** automatically reclaims it.

> **Mental model:** variables are never boxes that "contain" values — they are name-tags tied to objects. Reassignment just moves the tag.

#### Naming Rules (Non-Negotiable)

| Rule | Example |
|---|---|
| Start with a letter or underscore | \`name\`, \`_count\` |
| Use letters, digits, underscores after the first char | \`user_age2\` |
| Case matters: \`Age\` and \`age\` are different | — |
| Cannot use Python keywords | \`if\`, \`for\`, \`class\` are reserved |
| Convention: snake_case for variables | \`total_price\`, \`user_name\` |

---

### Reading User Input — The input() Function

Use \`input()\` to read a line of text typed by the user:

\`\`\`python
name = input("What is your name? ")
print("Nice to meet you,", name)
\`\`\`

**Critical rule:** \`input()\` always returns a **string**, even if the user types a number. If you try to do math with it directly, you get a \`TypeError\`:

\`\`\`python
age = input("Age: ")     # user types 25
print(age + 1)           # TypeError: can only concatenate str
\`\`\`

---

### Type Casting — Converting Between Types

Casting changes the type of a value. The three casts you will use constantly:

| Function | Converts to | Example |
|---|---|---|
| \`int(value)\` | Integer | \`int("24")\` → \`24\` |
| \`float(value)\` | Float | \`float("3.5")\` → \`3.5\` |
| \`str(value)\` | String | \`str(100)\` → \`"100"\` |

The standard pattern for reading numbers is **input, then cast**:

\`\`\`python
age = int(input("Your age: "))     # "25" -> 25
price = float(input("Price: "))    # "9.99" -> 9.99
\`\`\`

If the user types something that cannot be converted (like \`"abc"\`), Python raises a \`ValueError\`. We will learn how to catch these errors gracefully in Lesson 21.

#### Comparison: Dynamic vs Static Typing

| Aspect | Python (dynamic) | C / Java / TypeScript (static) |
|---|---|---|
| Type declaration | Not needed | Required |
| Reassign to new type | Allowed | Not allowed |
| Catch type bugs | At runtime | At compile time |
| Beginner friendliness | High | Lower |

---

### Common Mistakes to Avoid

- **Mistake:** Doing math on \`input()\` results directly — **Fix:** cast with \`int()\` or \`float()\` first.
- **Mistake:** Using reserved words or invalid characters in names (\`2nd_year\`, \`my-name\`) — **Fix:** use \`second_year\`, \`my_name\`.
- **Mistake:** Thinking \`age = "25"\` makes \`age\` a number — **Fix:** check with \`type(age)\`; it is a string until you cast it.

### Professional Tips & Tricks

- \`input()\` always returns a string — convert before doing math, or you will get a TypeError.
- Use f-strings (\`f"...{var}..."\`) instead of messy \`+\` concatenation.
- Give variables meaningful names: \`user_age\` beats \`ua\`.

---

### Key Takeaways

- Variables are name-tags pointing to objects in memory; Python uses dynamic typing.
- \`input()\` reads text and always returns a string.
- Cast values with \`int()\`, \`float()\`, and \`str()\`.
- \`type()\` is your debugging spyglass.
- Follow snake_case naming and avoid Python keywords.

**Next up:** Strings — slicing, methods, and the modern f-string formatting.`,
      codeLanguage: "python",
      codeSnippet: `# Variables and casting demonstration
age = "24"  # String representation
print("Type before casting:", type(age))

# Cast string to integer to perform math addition
age_int = int(age)
next_year_age = age_int + 1
print("Type after casting:", type(age_int))
print(f"Age next year: {next_year_age}")

# Dynamic type swap
label = 100
print("Label type:", type(label))
label = "Dynamic Label Swapped"
print("Label new type:", type(label))

# Read user input and convert it
name = input("What is your name? ")
print("Nice to meet you,", name)`,
      codeOutput: `Type before casting: <class 'str'>
Type after casting: <class 'int'>
Age next year: 25
Label type: <class 'int'>
Label new type: <class 'str'>
What is your name? Amol
Nice to meet you, Amol`,
      visualizationTips: [
        "Picture variables as name-tags tied to boxes in memory — reassigning points the tag at a different box.",
        "Use type() as a spyglass to check what kind of object a variable really holds.",
        "Draw a small arrow diagram: age -> \"24\" (str), then age -> 24 (int).",
      ],
      tipsAndTricks: [
        "input() always returns a string — convert before doing math, or you will get a TypeError.",
        "Use f-strings (f\"...{var}...\") instead of messy + concatenation.",
        "Give variables meaningful names: user_age beats ua.",
      ],
      practice: [
        {
          id: "practice-age-calc",
          title: "Age in Dog Years",
          difficulty: "Easy",
          task: "Ask the user for their age, convert it to an integer, multiply by 7, and print their age in dog years.",
          hint: "age = int(input(...))",
          solution: `age = int(input("Your age: "))\ndog_years = age * 7\nprint("Dog years:", dog_years)`,
        },
        {
          id: "practice-temp-convert",
          title: "Temperature Converter",
          difficulty: "Medium",
          task: "Read a temperature in Celsius as a float and print it in Fahrenheit using F = C * 9/5 + 32.",
          hint: "c = float(input(...)); f = c * 9/5 + 32",
          solution: `c = float(input("Celsius: "))\nf = c * 9 / 5 + 32\nprint(f"{c}C = {f}F")`,
        },
        {
          id: "practice-type-spy",
          title: "Type Detective",
          difficulty: "Easy",
          task: "Create three variables (int, float, string) and print the type of each one.",
          hint: "Use type() inside print()",
          solution: `a = 10\nb = 3.14\nc = "text"\nprint(type(a))\nprint(type(b))\nprint(type(c))`,
        },
      ],
    },
    {
      id: "strings-mastery",
      title: "Lesson 3: Strings — Slicing, Methods & f-Strings",
      shortDescription:
        "String indexing and slicing, powerful string methods, and modern formatted strings.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### What is a String?

A **string** is a sequence of characters — letters, digits, spaces, symbols. You create one with single quotes, double quotes, or triple quotes:

\`\`\`python
single = 'hello'
double = "hello"
multi = """multi-line
string"""
\`\`\`

Strings are **immutable**: once created, you cannot change a string in place. Any operation that "changes" a string actually creates a brand-new one.

#### What You'll Learn in This lesson

- Index and slice strings with positive and negative indexes
- Use the most important string methods
- Master f-strings — the modern, professional way to format text
- Understand why strings are immutable

---

### Indexing — Grabbing One Character

Every character in a string has a position (an **index**), counting from 0:

\`\`\`text
Index:   0    1    2    3    4
Value:   A    m    o    l    s
        -5   -4   -3   -2   -1    <- negative indexes
\`\`\`

- \`name[0]\` → first character
- \`name[4]\` → fifth character
- \`name[-1]\` → last character (negative indexes count from the end)
- \`name[-2]\` → second-to-last character

Trying to access an index that does not exist raises \`IndexError: string index out of range\`.

#### Slicing — Grabbing a Range

A **slice** extracts a range of characters using the syntax \`start:end\` — and the end is **exclusive** (it stops just before \`end\`):

| Slice | Meaning | \`name = "Amol Shukla"\` |
|---|---|---|
| \`name[0:4]\` | chars 0,1,2,3 | \`"Amol"\` |
| \`name[5:]\` | from index 5 to the end | \`"Shukla"\` |
| \`name[:4]\` | from the start to index 4 | \`"Amol"\` |
| \`name[:]\` | the whole string | \`"Amol Shukla"\` |
| \`name[::2]\` | every 2nd character | \`"AoSkl"\` |
| \`name[::-1]\` | reversed | \`"alkuhS lomA"\` |

> **Fence-post rule:** a slice \`s[1:4]\` includes posts 1, 2, and 3 but stops *before* post 4.

---

### String Methods — Built-in Superpowers

Strings ship with dozens of methods. The most important ones:

| Method | What it does | Example → Result |
|---|---|---|
| \`.upper()\` | All uppercase | \`"hi".upper()\` → \`"HI"\` |
| \`.lower()\` | All lowercase | \`"HI".lower()\` → \`"hi"\` |
| \`.strip()\` | Remove surrounding whitespace | \`"  hi  ".strip()\` → \`"hi"\` |
| \`.split()\` | Split into a list | \`"a b c".split()\` → \`["a", "b", "c"]\` |
| \`.replace(a, b)\` | Swap text | \`"a-b".replace("-", "_")\` → \`"a_b"\` |
| \`.startswith(x)\` | Starts with x? | \`"py".startswith("p")\` → \`True\` |
| \`.endswith(x)\` | Ends with x? | \`"py".endswith("y")\` → \`True\` |
| \`.find(x)\` | Index of first x | \`"abc".find("b")\` → \`1\` |
| \`.count(x)\` | How many times x appears | \`"aaa".count("a")\` → \`3\` |

Because strings are immutable, **every method returns a new string** — the original is untouched. You can chain methods:

\`\`\`python
email = "  Amol@Example.COM  "
clean = email.strip().lower()
# "amol@example.com"
\`\`\`

---

### f-Strings — The Modern Way to Format

f-strings (formatted strings) embed expressions directly inside text using curly braces:

\`\`\`python
course = "Python"
lessons = 25
print(f"Welcome to {course} — {lessons} lessons!")
# Welcome to Python — 25 lessons!
\`\`\`

You can even run expressions and format numbers inside the braces:

\`\`\`python
price = 9.567
print(f"Price: {price:.2f}")   # Price: 9.57
print(f"Sum: {2 + 3}")         # Sum: 5
\`\`\`

#### f-strings vs the Old Ways

| Method | Example | Verdict |
|---|---|---|
| \`+\` concatenation | \`"Hi " + name + "!"\` | Clunky, error-prone |
| \`.format()\` | \`"Hi {}".format(name)\` | Fine, but verbose |
| **f-string** | \`f"Hi {name}!"\` | **Fast, clean, modern** |

Professional Python code in 2026 uses f-strings almost exclusively.

---

### Common Mistakes to Avoid

- **Mistake:** \`name[5]\` when the string has only 5 characters — **Fix:** remember indexes start at 0; the last valid index is \`len(name) - 1\`.
- **Mistake:** Expecting \`"Hello".upper()\` to change \`"Hello"\` — **Fix:** methods return new strings; assign the result: \`text = text.upper()\`.
- **Mistake:** \`"count: " + 5\` — **Fix:** use an f-string: \`f"count: {5}"\`.

### Professional Tips & Tricks

- f-strings beat + concatenation: faster, safer, and readable.
- Chain methods: \`email.strip().lower().replace(' ', '_')\`.
- Use \`.split()\` to turn messy text into clean lists — the basis of data cleaning.

---

### Key Takeaways

- Strings are immutable sequences of characters with 0-based indexes.
- Negative indexes count from the end; \`[::-1]\` reverses a string.
- String methods return new strings — assign the result.
- f-strings with \`{...}\` are the professional formatting standard.
- Slicing works identically on lists and tuples (Lesson 8).

**Next up:** Operators & expressions — how Python does math and logic.`,
      codeLanguage: "python",
      codeSnippet: `# String indexing, slicing, methods and f-strings
name = "Amol Shukla"

# Indexing (first and last characters)
print("First char:", name[0])
print("Last char:", name[-1])

# Slicing (first name = 0:4)
print("First name:", name[0:4])
print("Surname:", name[5:])

# Methods return NEW strings
email = "  Amol@Example.COM  "
print("Cleaned:", email.strip().lower())
print("Words:", email.strip().split("@"))

# f-strings
course = "Python"
lessons = 25
print(f"Welcome to {course} — {lessons} lessons!")`,
      codeOutput: `First char: A
Last char: a
First name: Amol
Surname: Shukla
Cleaned: amol@example.com
Words: ['Amol', 'example.COM']
Welcome to Python — 25 lessons!`,
      visualizationTips: [
        "Draw a string as a row of numbered boxes (0,1,2...) and point at each box with your finger while indexing.",
        "For slices, remember the fence-post rule: s[1:4] includes posts 1,2,3 but stops before post 4.",
        "Use the interactive REPL to try name[::2] and see every second character — slicing with steps.",
      ],
      tipsAndTricks: [
        "f-strings beat + concatenation: faster, safer, and readable.",
        "Chain methods: email.strip().lower().replace(' ', '_')",
        "Use .split() to turn messy text into clean lists — the basis of data cleaning.",
      ],
      practice: [
        {
          id: "practice-email-user",
          title: "Extract Username",
          difficulty: "Easy",
          task: "Given email = 'amol.shukla@example.com', print only the part before the @ symbol.",
          hint: "email.split('@')[0]",
          solution: `email = 'amol.shukla@example.com'\nprint(email.split('@')[0])\n# Output: amol.shukla`,
        },
        {
          id: "practice-palindrome-check",
          title: "Reverse Slicing",
          difficulty: "Medium",
          task: "Print a word and its reverse using a slice with step -1, e.g. 'racecar' reversed.",
          hint: "word[::-1]",
          solution: `word = "racecar"\nprint(word)\nprint(word[::-1])`,
        },
        {
          id: "practice-format-report",
          title: "Format a Report Line",
          difficulty: "Easy",
          task: "Using an f-string, print: 'Student Amol scored 92 out of 100.' using variables name and score.",
          hint: 'f"Student {name} scored {score} out of 100."',
          solution: `name = "Amol"\nscore = 92\nprint(f"Student {name} scored {score} out of 100.")`,
        },
      ],
    },
    {
      id: "operators-expressions",
      title: "Lesson 4: Operators & Expressions",
      shortDescription:
        "Arithmetic, comparison, logical, and assignment operators — plus expression evaluation order.",
      duration: "35 mins",
      readingTime: "7 mins read",
      contentMarkdown: `### What are Operators?

Operators are the **verbs of programming** — they tell Python what to *do* with values. You already use them in math class; Python just gives them superpowers like integer division and modulo. An **expression** is any combination of values and operators that Python can evaluate to a single result.

#### What You'll Learn in This lesson

- Use arithmetic, comparison, and logical operators
- Understand operator precedence (order of operations)
- Use assignment shortcuts like \`+=\`
- Split numbers into digits with \`//\` and \`%\`

---

### Arithmetic Operators

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` | Addition | \`7 + 3\` | \`10\` |
| \`-\` | Subtraction | \`7 - 3\` | \`4\` |
| \`*\` | Multiplication | \`7 * 3\` | \`21\` |
| \`/\` | Division (always float) | \`7 / 2\` | \`3.5\` |
| \`//\` | Floor division (integer) | \`7 // 2\` | \`3\` |
| \`%\` | Modulo (remainder) | \`7 % 2\` | \`1\` |
| \`**\` | Power | \`2 ** 3\` | \`8\` |

Two operators deserve special attention:

- **\`//\` floor division** drops the decimal part: \`17 // 5\` is \`3\` (not 3.4).
- **\`%\` modulo** returns the remainder: \`17 % 5\` is \`2\`, because \`17 = 3*5 + 2\`.

> **Pizza visualization for modulo:** 17 slices ÷ 5 friends = 3 full slices each, and 2 slices left over. The \`//\` gives you 3, the \`%\` gives you 2.

---

### Comparison Operators

Comparisons always return a boolean — \`True\` or \`False\`:

| Operator | Meaning | Example |
|---|---|---|
| \`==\` | Equal to | \`5 == 5\` → \`True\` |
| \`!=\` | Not equal | \`5 != 4\` → \`True\` |
| \`>\` | Greater than | \`5 > 4\` → \`True\` |
| \`<\` | Less than | \`5 < 4\` → \`False\` |
| \`>=\` | Greater or equal | \`5 >= 5\` → \`True\` |
| \`<=\` | Less or equal | \`4 <= 5\` → \`True\` |

**Never confuse \`=\` (assignment) with \`==\` (comparison).** A single \`=\` stores a value; a double \`==\` asks a question.

---

### Logical Operators

Logical operators combine booleans:

| Operator | Rule | Example |
|---|---|---|
| \`and\` | Both sides True | \`True and False\` → \`False\` |
| \`or\` | At least one side True | \`True or False\` → \`True\` |
| \`not\` | Flips True ↔ False | \`not True\` → \`False\` |

| A | B | A \`and\` B | A \`or\` B | \`not\` A |
|---|---|---|---|---|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

These let you write real-world rules: *"Can enter if age ≥ 18 **and** has ID"*.

---

### Precedence — Order of Operations

Python follows standard math rules. From highest to lowest priority:

1. **P**arentheses \`( )\`
2. **E**xponents \`**\`
3. \`*\`, \`/\`, \`//\`, \`%\` (left to right)
4. \`+\`, \`-\` (left to right)
5. Comparisons (\`==\`, \`>\`, ...)
6. \`not\`, then \`and\`, then \`or\`
7. Assignment \`=\`

\`\`\`python
print(3 + 4 * 2)      # 11  (multiplication first)
print((3 + 4) * 2)    # 14  (parentheses override)
\`\`\`

**Rule of thumb:** when in doubt, add parentheses. Clarity beats cleverness every time.

---

### Assignment Shortcuts

\`x += 5\` is shorthand for \`x = x + 5\`. The shortcut works with most operators:

| Shortcut | Equivalent |
|---|---|
| \`x += 5\` | \`x = x + 5\` |
| \`x -= 5\` | \`x = x - 5\` |
| \`x *= 5\` | \`x = x * 5\` |
| \`x /= 5\` | \`x = x / 5\` |
| \`x //= 5\` | \`x = x // 5\` |
| \`x %= 5\` | \`x = x % 5\` |

---

### Common Mistakes to Avoid

- **Mistake:** Using \`=\` inside an \`if\` condition — **Fix:** always use \`==\` for comparison.
- **Mistake:** Expecting \`7 / 2\` to give \`3\` — **Fix:** \`/\` always gives a float (\`3.5\`); use \`//\` for integer division.
- **Mistake:** Forgetting that \`and\` binds tighter than \`or\` — **Fix:** add parentheses to make the logic explicit.

### Professional Tips & Tricks

- Never use \`=\` inside conditions — that is assignment. Use \`==\` for comparison.
- Wrap long boolean conditions in parentheses for readability.
- Use \`//\` and \`%\` together to split numbers into digits, coins, or time units.

---

### Key Takeaways

- Arithmetic: \`/\` always floats; \`//\` floors; \`%\` gives the remainder.
- Comparisons return \`True\`/\`False\`; \`==\` compares, \`=\` assigns.
- \`and\`/\`or\`/\`not\` combine booleans.
- Parentheses control precedence — use them liberally.
- \`+=\`, \`-=\`, \`*=\` are assignment shortcuts.

**Next up:** Control flow — conditionals and loops that make decisions.`,
      codeLanguage: "python",
      codeSnippet: `# Operators in action
a, b = 17, 5

print("Addition:", a + b)
print("Division:", a / b)      # float division
print("Floor div:", a // b)    # drops the remainder
print("Modulo:", a % b)        # remainder (17 = 3*5 + 2)

# Comparison + logical operators
score = 85
passed = score >= 40
distinction = score >= 75
print("Passed:", passed)
print("Distinction:", distinction)
print("Passed AND distinction:", passed and distinction)
print("NOT failed:", not (score < 40))

# Precedence: parentheses rule!
print("3 + 4 * 2 =", 3 + 4 * 2)     # 11, not 14
print("(3 + 4) * 2 =", (3 + 4) * 2) # 14

# Assignment shortcuts
total = 10
total += 5   # total = 15
total *= 2   # total = 30
print("Total after shortcuts:", total)`,
      codeOutput: `Addition: 22
Division: 3.4
Floor div: 3
Modulo: 2
Passed: True
Distinction: True
Passed AND distinction: True
NOT failed: True
3 + 4 * 2 = 11
(3 + 4) * 2 = 14
Total after shortcuts: 30`,
      visualizationTips: [
        "Make a trace table: write each variable, update its value row by row as you read the code.",
        "Say 'evaluate the right side first' out loud for every assignment — that is how Python thinks.",
        "Visualize modulo as a pizza: 17 slices ÷ 5 friends = 3 full slices each, 2 slices left over.",
      ],
      tipsAndTricks: [
        "Never use = inside conditions — that is assignment. Use == for comparison.",
        "Wrap long boolean conditions in parentheses for readability.",
        "Use // and % together to split numbers into digits, coins, or time units.",
      ],
      practice: [
        {
          id: "practice-coin-split",
          title: "Split 100 Rupees",
          difficulty: "Easy",
          task: "Use floor division and modulo to show how many 25-rupee coins fit in 100 rupees and what remains.",
          hint: "100 // 25 and 100 % 25",
          solution: `print("Coins:", 100 // 25)\nprint("Remainder:", 100 % 25)`,
        },
        {
          id: "practice-leap-check",
          title: "Logic Gate",
          difficulty: "Medium",
          task: "Given age = 20 and has_id = True, print whether the person can enter (age >= 18 and has_id).",
          hint: "result = age >= 18 and has_id",
          solution: `age = 20\nhas_id = True\ncan_enter = age >= 18 and has_id\nprint(can_enter)  # True`,
        },
        {
          id: "practice-seconds-math",
          title: "Seconds in an Hour",
          difficulty: "Easy",
          task: "Compute and print the number of seconds in 3 hours using exponent or multiplication.",
          hint: "3 * 60 * 60",
          solution: `print(3 * 60 * 60)  # 10800`,
        },
      ],
    },
  ],
};
