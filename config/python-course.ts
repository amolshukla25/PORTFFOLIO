import type { Course } from "./courses";

/**
 * Complete Python Foundations Course — "From Zero to Professional".
 * Every lecture is its own page (/courses/python-basics/<lecture-id>),
 * so each topic can be individually optimized for search engines.
 * Each lesson ships with: teaching notes, runnable code, console output,
 * visualization tips, professional tips & tricks, and practice exercises.
 */
export const PYTHON_COURSE: Course = {
  id: "python-basics",
  title: "Complete Python Course: From Zero to Professional",
  shortDescription:
    "The easiest, most visual Python course — 25 lessons with code walk-throughs, visualization tips, pro tricks, and hands-on practice for every topic.",
  detailedDescription:
    "This is a complete, beginner-friendly Python course designed by Amol Shukla to take you from absolute zero to professional-level Python. Every lesson lives on its own page with easy-to-follow notes, runnable code, real console output, code-visualization tips, professional tricks, and practice exercises with solutions. You will master variables, control flow, data structures, functions, object-oriented programming, files, errors, JSON, testing, and finish by building a complete CLI project.",
  category: ["Python", "Programming Basics", "OOP Concepts", "Data Structures"],
  duration: "30 hrs",
  difficulty: "Beginner",
  rating: 5.0,
  instructor: "Amol Shukla",
  iconName: "code",
  modules: [
    {
      id: "module-1-fundamentals",
      title: "Module 1: Python Fundamentals",
      description:
        "Set up Python, write your first program, and master variables, data types, strings, and operators with visual memory models.",
      lectures: [
        {
          id: "hello-world-python",
          title: "Lecture 1: Hello, Python! Setup & Your First Program",
          shortDescription:
            "Installing Python, the REPL, print statements, comments, and why indentation matters.",
          duration: "30 mins",
          readingTime: "4 mins read",
          contentMarkdown: `### Why Python is the Easiest Language to Learn
Python reads almost like plain English, so you can focus on *thinking* instead of fighting syntax. It is the #1 language for beginners, data science, and AI — which is why this course starts here.

#### Your First Program
The most famous first program is only one line:
- **\`print()\`** — writes text to the console. Whatever you put inside the parentheses is shown to the user.
- **Comments (\`#\`)** — notes for humans. Python ignores everything after a \`#\` on that line.

#### The REPL vs Script Files
- **REPL** (Read-Eval-Print Loop): type \`python\` in your terminal and test one line at a time — great for experiments.
- **Script file** (\`hello.py\`): save your program and run it with \`python hello.py\` — how real programs are built.

#### Indentation is Everything
Python uses indentation (spaces/tabs) to group blocks of code. This replaces the \`{ }\` braces of other languages. Keep it consistent — 4 spaces is the professional standard.

#### How to Visualize Code
Imagine Python reading your file **top to bottom, one line at a time**, like a person following a recipe. Every \`print()\` is a "shout" to the console — the order of shouts is the order of execution.`,
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
          title: "Lecture 2: Variables, Data Types & Input/Output",
          shortDescription:
            "Dynamic typing, type casting, memory references, printing statements, and reading standard input.",
          duration: "35 mins",
          readingTime: "4 mins read",
          contentMarkdown: `### Dynamic Typing in Python
Python is a dynamically typed language, meaning variables are references to objects in memory, and their types do not need to be declared explicitly.

#### Memory References
When you declare \`x = 10\`, Python allocates an integer object in heap memory and points the label \`x\` to it. If you subsequently assign \`x = "hello"\`, the variable label is simply pointed to a new string object, leaving the previous integer eligible for automatic garbage collection.

#### Reading User Input
Use \`input()\` to read a line of text from the user. **Everything input() returns is a string** — convert it with \`int()\`, \`float()\`, or \`str()\` before using it as a number.

#### Common Data Casting
- Convert values to integers using \`int(value)\`
- Convert values to strings using \`str(value)\`
- Convert values to floats using \`float(value)\``,
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
          title: "Lecture 3: Strings — Slicing, Methods & f-Strings",
          shortDescription:
            "String indexing and slicing, powerful string methods, and modern formatted strings.",
          duration: "40 mins",
          readingTime: "5 mins read",
          contentMarkdown: `### Strings are Sequences of Characters
A string is just a sequence of characters. Python lets you **index** (grab one character) and **slice** (grab a range) any sequence.

#### Indexing and Slicing
- **Index** \`name[0]\` gives the first character. Python also supports **negative indexes**: \`name[-1]\` is the last character.
- **Slice** \`name[1:4]\` grabs characters from index 1 up to (but not including) 4.
- \`name[:3]\` means "from the start", and \`name[3:]\` means "to the end".

#### String Methods
Strings come with built-in methods that return **new** strings (strings are immutable):
- \`.upper()\` / \`.lower()\` — change case
- \`.strip()\` — remove whitespace around text
- \`.split()\` — break into a list of words
- \`.replace(old, new)\` — swap text
- \`.startswith(...)\` / \`.endswith(...)\` — checks that return True/False

#### f-Strings — the Modern Way
F-strings let you embed expressions directly inside text with \`{curly_braces}\`. They are the fastest, cleanest way to format strings in professional Python.`,
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
          title: "Lecture 4: Operators & Expressions",
          shortDescription:
            "Arithmetic, comparison, logical, and assignment operators — plus expression evaluation order.",
          duration: "35 mins",
          readingTime: "4 mins read",
          contentMarkdown: `### Operators are the Verbs of Programming
Operators tell Python what to *do* with values. You already use them in math class — Python just gives them superpowers.

#### Arithmetic Operators
- \`+\` add, \`-\` subtract, \`*\` multiply, \`/\` divide (always float), \`//\` floor divide (integer), \`%\` modulo (remainder), \`**\` power.

#### Comparison Operators
Return **True** or **False**: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`. Use \`==\` to compare values — never single \`=\`.

#### Logical Operators
- \`and\` — both sides must be True
- \`or\` — at least one side True
- \`not\` — flips True to False

#### Precedence (Order of Operations)
Python follows math rules: **P**arentheses, **E**xponents, then \`* / // %\`, then \`+ -\`. When unsure, add parentheses — clarity beats cleverness.

#### Assignment Shortcuts
\`x += 5\` means \`x = x + 5\`. Works with \`-= \`, \`*= \`, \`/= \`, \`//= \`, \`%= \` and more.`,
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
    },
    {
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
          readingTime: "6 mins read",
          contentMarkdown: `### Controlling Execution Flow
A program is sequential by default. Conditionals and loops allow code branches to execute dynamically based on logical statements.

#### Comparison and Logic
- **Conditionals (\`if/elif/else\`):** Route the code path depending on boolean state evaluation.
- **Loops (\`for\`, \`while\`):** Repeat instructions. The \`for\` loop is used to iterate over a predetermined sequence (like a list, range, or dictionary keys). The \`while\` loop runs continuously until a predicate condition evaluates to false.

#### Loop Interrupts
- \`break\`: Exits the loop scope immediately.
- \`continue\`: Skips the rest of the current loop iteration and moves to the next pass.

#### Visualizing Conditionals
Draw a **decision tree**: each \`if\` is a fork in the road. Only ONE branch of an if/elif/else chain ever runs — Python checks from top to bottom and takes the first True branch.`,
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
          readingTime: "5 mins read",
          contentMarkdown: `### Taking Full Control of Loops
Beyond plain \`for\`/\`while\`, Python gives you fine-grained control so loops do exactly what you need.

#### The Three Interrupts
- **\`break\`** — stop the loop NOW (useful for search: 'found it, stop looking').
- **\`continue\`** — skip this item, go to the next iteration (useful for filtering inside loops).
- **\`pass\`** — do nothing; a placeholder when syntax requires a body but you are not ready.

#### The Secret else Clause
A loop's \`else\` block runs only if the loop finished **without** hitting \`break\`. This is a clean way to say 'search failed' after a loop.

#### Nested Loops
A loop inside a loop runs the inner loop completely for every single outer iteration — like a clock's minute hand moving 60 times per hour. Use them for grids, tables, and combinations.

#### Visualization
For nested loops, build a **trace table with two counters** (i for outer, j for inner) and watch the inner counter reset each time.`,
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
          readingTime: "5 mins read",
          contentMarkdown: `### The Most Pythonic Loop
A **list comprehension** builds a new list in a single expression. It is shorter, faster, and easier to read than a manual for-loop that appends.

#### Anatomy of a Comprehension
\`[expression for item in sequence if condition]\`
- **expression** — what each output item looks like
- **for item in sequence** — the loop
- **if condition** — optional filter

#### Dict and Set Comprehensions
The same idea works for dictionaries and sets — just change the brackets:
- **Dict:** \`{key: value for item in seq if cond}\`
- **Set:** \`{expression for item in seq if cond}\`

#### Generator Expressions
Replace \`[ ]\` with \`( )\` and you get a lazy, memory-friendly generator: it produces one item at a time instead of building the whole list. Use it for huge data.

#### When NOT to Use Them
If the logic needs more than one condition, or the body spans multiple lines, write a normal loop. Readability always wins.`,
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
    },
    {
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
          readingTime: "5 mins read",
          contentMarkdown: `### Lists: Your All-Purpose Container
A **list** is an ordered, mutable collection. "Mutable" means you can add, remove, or change items after creation. Lists are the workhorse of Python.

#### Essential List Methods
- \`append(x)\` — add one item to the end
- \`extend([...])\` — add many items
- \`insert(i, x)\` — insert at position i
- \`remove(x)\` — remove first matching item
- \`pop(i)\` — remove and return item at i
- \`sort()\` / \`sorted(list)\` — sort in place vs. return a new list
- \`len(list)\` — how many items

#### Tuples: Locked Lists
A **tuple** \`(1, 2, 3)\` is immutable — once created, it cannot change. Use tuples for fixed data like coordinates, colors, or configuration values. They are faster and safer than lists for data that must not change.

#### Slicing Works on Both
\`data[1:4]\`, \`data[::-1]\` (reverse), and negative indexes behave exactly like strings — lists and tuples are sequences too.`,
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
          readingTime: "6 mins read",
          contentMarkdown: `### Dictionaries: Data with Names
A **dictionary** stores key-value pairs — like a real dictionary where you look up a word (key) and read its meaning (value). Keys must be unique and immutable (strings, numbers, tuples).

#### Dictionary Essentials
- Create: \`user = {"name": "Amol", "age": 30}\`
- Read: \`user["name"]\` or safer \`user.get("name", "unknown")\`
- Add/update: \`user["city"] = "Mumbai"\`
- Delete: \`del user["age"]\`
- Iterate: \`for key, value in user.items():\`

#### Sets: Unique & Fast
A **set** is an unordered collection of unique items. Membership checks (\`x in set\`) are O(1) — instant, even with a million items. Perfect for removing duplicates.

#### Set Operations
- \`union (|)\`, \`intersection (&)\`, \`difference (-)\`, \`symmetric_difference (^)\` — set math for data.

#### Visualization
Picture a dictionary as a two-column table (key | value) with instant lookup, and a set as a bag of unique marbles — no order, no duplicates.`,
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
          readingTime: "5 mins read",
          contentMarkdown: `### The collections Module — Professional Tools
The \`collections\` module ships with specialized containers that solve common problems in one line.

#### Counter — Instant Tallies
\`Counter\` counts hashable items. It is perfect for word frequency, votes, and inventory. You get \`.most_common(n)\` for free.

#### defaultdict — Never Fear Missing Keys
A \`defaultdict\` returns a default value (like \`int\` → 0 or \`list\` → []) when a key is missing. It removes endless "if key not in dict" checks — ideal when grouping data.

#### deque — Fast Ends
A \`deque\` (double-ended queue) gives O(1) append/pop on BOTH ends — a queue structure. Lists are O(n) for left-side operations; deques are instant.

#### namedtuple — Self-Documenting Data
\`namedtuple\` creates lightweight objects with named fields, perfect for coordinates, records, and config — cleaner than tuples, lighter than classes.`,
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
          readingTime: "5 mins read",
          contentMarkdown: `### Nested Structures — Data Inside Data
Real-world data is nested: a student dict containing a list of scores, a list of dicts of employees. Python handles any depth — just mind the brackets.

#### Aliasing: Two Names, One Object
When you write \`b = a\` for a list, **b is not a copy** — both names point to the SAME list in memory. Change one, and the other changes too. This surprises beginners constantly.

#### Shallow vs Deep Copy
- \`a.copy()\` or \`list(a)\` — a **shallow copy**: the outer list is new, but nested objects are still shared.
- \`copy.deepcopy(a)\` — a **deep copy**: everything is duplicated, nothing shared.

#### Check Identity
- \`==\` compares VALUES.
- \`is\` compares IDENTITY (same object in memory).
- \`id(x)\` shows the memory address — great for debugging aliasing.

#### Visualization
Draw arrows from variable names to boxes. Aliasing = two arrows to one box. A copy = a new box with new arrows inside.`,
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
    },
    {
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
          readingTime: "6 mins read",
          contentMarkdown: `### Why Functions?
A **function** is a named block of reusable code. Write it once, call it many times. Functions are how you stop repeating yourself (DRY) and keep programs readable.

#### Anatomy
\`def greet(name):\` — the header ends with a colon, and the body is indented.
- **Parameters** — inputs the function receives.
- **Default arguments** — \`def greet(name, excited=True):\` lets callers omit optional inputs.
- **return** — hands a value back to the caller. Without it, the function returns \`None\`.

#### Docstrings
A triple-quoted string right after the def line documents what the function does. Professional teams treat them as non-negotiable.

#### Scope inside Functions
Variables created inside a function stay inside it (local scope). The function can READ global values but cannot change them without the \`global\` keyword.

#### Visualization
Picture a function as a machine: inputs go in the funnel (parameters), work happens inside, and the result rolls out (return). Trace each call separately — a fresh set of local boxes every time.`,
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
          readingTime: "5 mins read",
          contentMarkdown: `### Lambda — Tiny Anonymous Functions
A **lambda** is a one-line function without a name: \`lambda x: x * 2\`. Use it where you need a quick, throwaway function — especially as a \`key\` for sorting or with map/filter.

#### *args — Any Number of Positional Arguments
Putting \`*args\` in a function collects all extra positional arguments into a **tuple**. Perfect for sums, averages, and flexible APIs.

#### **kwargs — Any Number of Keyword Arguments
\`**kwargs\` collects extra named arguments into a **dictionary**. This is how frameworks pass arbitrary options to functions.

#### Order Matters
The parameter order is: normal params, then \`*args\`, then keyword-only params, then \`**kwargs\`.

#### When Lambdas Work Best
- Sorting with a key: \`items.sort(key=lambda item: item["price"])\`
- Passing behavior into functions (map/filter/sorted)
Keep lambdas to ONE expression — if it needs statements, write a def.`,
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
          readingTime: "7 mins read",
          contentMarkdown: `### Scope: Where Names Live
Python resolves names with the **LEGB** rule: Local → Enclosing → Global → Built-in. Python checks inner scopes first, then works outward.

#### Closures — Functions That Remember
A nested function that references variables from its enclosing scope is a **closure**. It 'remembers' those values even after the outer function returns — a powerful pattern for counters and factories.

#### Decorators — Wrap & Extend
A **decorator** is a function that takes another function and returns a new one with extra behavior. The \`@name\` syntax is just sugar for \`func = name(func)\`. Think of it as armor around a sword — the sword still works, but now it is protected.

#### Classic Decorator Uses
- Timing: measure how long a function runs
- Logging: print when a function is called
- Access control: check permissions before running
- Retry logic: retry on failure

#### Visualization
Draw scopes as nested boxes: the innermost local box can look OUT into bigger boxes but the outer boxes cannot look in. A closure carries its home box with it wherever it goes.`,
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
          readingTime: "5 mins read",
          contentMarkdown: `### Modules — Code in Files
A **module** is simply a .py file. Anything you can run, you can import: functions, classes, variables. Importing runs the module's top-level code once.

#### Import Styles
- \`import math\` then \`math.sqrt(16)\`
- \`from math import sqrt\` then \`sqrt(16)\` — imports a name directly
- \`from math import pi, sqrt\` — several names
- \`import math as m\` — alias for short names

#### Packages — Folders of Modules
A **package** is a folder of modules with an \`__init__.py\` (even empty) that marks it as importable. Big projects are organized as packages.

#### The __name__ Guard
\`if __name__ == "__main__":\` runs the block only when the file is executed directly — NOT when it is imported. This lets a file work as both a script and a library.

#### pip — The Package Installer
\`pip install requests\` installs third-party packages. Virtual environments (\`python -m venv .venv\`) keep each project's dependencies isolated — the professional standard.`,
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
    },
    {
      id: "module-5-oop",
      title: "Module 5: Object-Oriented Python",
      description:
        "Model the real world with classes, inheritance, encapsulation, magic methods, and dataclasses.",
      lectures: [
        {
          id: "classes-objects",
          title: "Lecture 16: Classes, Instances & Inheritance",
          shortDescription:
            "Object structure, __init__ constructor, instance parameters, methods, and parent-child overrides.",
          duration: "50 mins",
          readingTime: "7 mins read",
          contentMarkdown: `### The OOP Paradigm
Object-Oriented Programming (OOP) is a design template that groups related variables (attributes) and functions (methods) into cohesive packages called **Objects**.

#### Definitions
- **Class**: The blueprint template defining structure and actions.
- **Instance**: A concrete object initialized in memory from a Class template.
- **Constructor (\`__init__\`):** The initializer method run automatically when a new object is instantiated.
- **Inheritance**: Allows a child class to inherit attributes and methods from a parent class, enabling reusable code structures.

#### self — The Object Itself
Every instance method receives \`self\` first: it is the reference to the current object. \`self.name = name\` stores data ON the object.

#### Why OOP?
OOP helps you model real-world things (User, Order, Course) so that data and behavior live together — easier to reason about and reuse than scattered functions.`,
          codeLanguage: "python",
          codeSnippet: `# Class constructor and Inheritance demo
class Person:
    def __init__(self, name, role):
        self.name = name
        self.role = role

    def get_profile(self):
        return f"Name: {self.name}, Role: {self.role}"

# Child inherits from Person parent class
class Instructor(Person):
    def __init__(self, name, department, course):
        # Initialize parent attributes
        super().__init__(name, role="Instructor")
        self.department = department
        self.course = course

    # Override get_profile method
    def get_profile(self):
        parent_details = super().get_profile()
        return f"{parent_details} | Dept: {self.department} | Course: {self.course}"

# Instantiate objects
user = Person("Rahul", "Student")
teacher = Instructor("Amol Shukla", "AI Engineering", "Data Science")

print(user.get_profile())
print(teacher.get_profile())`,
          codeOutput: `Name: Rahul, Role: Student
Name: Amol Shukla, Role: Instructor | Dept: AI Engineering | Course: Data Science`,
          visualizationTips: [
            "Picture the class as a cookie cutter and instances as the cookies it stamps out.",
            "Draw one box per instance with its own attribute values — each box is independent.",
            "Visualize inheritance as a family tree: the child inherits the parent's traits and adds its own.",
          ],
          tipsAndTricks: [
            "super().__init__(...) keeps the parent setup without repeating code.",
            "Name classes in PascalCase (BankAccount) and methods/attributes in snake_case.",
            "Give every class a docstring describing its responsibility.",
          ],
          practice: [
            {
              id: "practice-dog",
              title: "Dog Class",
              difficulty: "Easy",
              task: "Create a Dog class with name and breed attributes and a bark() method returning 'Woof!'.",
              hint: "class Dog: def __init__(self, name, breed): ...",
              solution: `class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n\n    def bark(self):\n        return "Woof!"\n\nd = Dog("Rocky", "Labrador")\nprint(d.name, d.bark())`,
            },
            {
              id: "practice-bank",
              title: "Bank Account",
              difficulty: "Medium",
              task: "Create a BankAccount class with a balance, a deposit(amount) method, and a withdraw(amount) method.",
              hint: "self.balance += amount",
              solution: `class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n            return amount\n        return 0\n\nacc = BankAccount("Amol", 1000)\nacc.deposit(500)\nprint(acc.balance)  # 1500`,
            },
            {
              id: "practice-inheritance",
              title: "Student & Teacher",
              difficulty: "Medium",
              task: "Create a Person base class and a Student child class that adds a grade attribute, overriding __init__ with super().",
              hint: "super().__init__(name)",
              solution: `class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, grade):\n        super().__init__(name)\n        self.grade = grade\n\ns = Student("Riya", "A")\nprint(s.name, s.grade)`,
            },
          ],
        },
        {
          id: "inheritance-polymorphism",
          title: "Lecture 17: Inheritance & Polymorphism",
          shortDescription:
            "Deep-dive into inheritance, method overriding, polymorphism, isinstance, and the MRO.",
          duration: "50 mins",
          readingTime: "6 mins read",
          contentMarkdown: `### Inheritance — Code Reuse Down the Tree
A child class inherits every attribute and method from its parent, then adds or overrides what it needs. This eliminates duplication and expresses "is-a" relationships.

#### Overriding
Redefining a parent method in the child is **overriding**. The child's version wins for child instances. Call the parent's version with \`super().method()\`.

#### Polymorphism — Many Forms, One Interface
**Polymorphism** lets different classes be used through the same interface. If both \`Dog\` and \`Cat\` have \`.speak()\`, a loop can call \`.speak()\` on each without caring which class it is. "Call the method, let the object decide."

#### isinstance() and issubclass()
- \`isinstance(obj, Class)\` — is this object an instance of that class?
- \`issubclass(Child, Parent)\` — does this class inherit from that one?

#### The MRO — Method Resolution Order
Python searches methods from the child up the parent chain (left to right in multiple inheritance). \`ClassName.mro()\` prints the exact search order.

#### Visualization
Picture a family tree: the child looks for a method in its own room first; if not found, it walks up the stairs to the parent's room.`,
          codeLanguage: "python",
          codeSnippet: `# Inheritance + polymorphism
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "...generic sound..."

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# Polymorphism: same interface, different behavior
animals = [Dog("Rocky"), Cat("Whiskers"), Animal("Mystery")]
for a in animals:
    print(f"{a.name}: {a.speak()}")

# Type checks
print("Rocky is a Dog:", isinstance(animals[0], Dog))
print("Dog is Animal subclass:", issubclass(Dog, Animal))

# Method resolution order
print("Dog MRO:", [c.__name__ for c in Dog.mro()])`,
          codeOutput: `Rocky: Woof!
Whiskers: Meow!
Mystery: ...generic sound...
Rocky is a Dog: True
Dog is Animal subclass: True
Dog MRO: ['Dog', 'Animal', 'object']`,
          visualizationTips: [
            "Draw the class tree and trace a method call walking up until it finds the first implementation.",
            "For polymorphism, picture a universal remote that works on every device — same button, different result.",
            "Use Dog.mro() to literally print the search order Python will follow.",
          ],
          tipsAndTricks: [
            "Override + super() keeps parent logic while extending it — never copy-paste parent code.",
            "Use isinstance() instead of type() == ... when checking class relationships.",
            "Prefer composition (has-a) over deep inheritance chains for flexibility.",
          ],
          practice: [
            {
              id: "practice-vehicles",
              title: "Vehicle Sound",
              difficulty: "Easy",
              task: "Create Vehicle with move(), and Car and Bike children that override move() differently.",
              hint: "Each child returns a different string",
              solution: `class Vehicle:\n    def move(self):\n        return "moving"\n\nclass Car(Vehicle):\n    def move(self):\n        return "driving"\n\nclass Bike(Vehicle):\n    def move(self):\n        return "cycling"\n\nfor v in [Car(), Bike(), Vehicle()]:\n    print(v.move())`,
            },
            {
              id: "practice-polymorphism",
              title: "Shape Areas",
              difficulty: "Medium",
              task: "Create Shape, Rectangle, and Circle with an area() method, and sum areas of a list of shapes.",
              hint: "Each class defines its own area()",
              solution: `class Shape:\n    def area(self):\n        return 0\n\nclass Rectangle(Shape):\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14159 * self.r ** 2\n\nshapes = [Rectangle(3, 4), Circle(2)]\nprint(sum(s.area() for s in shapes))  # 24.566...`,
            },
            {
              id: "practice-mro",
              title: "MRO Inspector",
              difficulty: "Easy",
              task: "Print the method resolution order of the Dog class from the lesson.",
              hint: "Dog.mro()",
              solution: `class Animal: pass\nclass Dog(Animal): pass\nprint([c.__name__ for c in Dog.mro()])  # ['Dog', 'Animal', 'object']`,
            },
          ],
        },
        {
          id: "encapsulation-magic-methods",
          title: "Lecture 18: Encapsulation, Properties & Magic Methods",
          shortDescription:
            "Private attributes, @property for smart access, and dunder methods that customize objects.",
          duration: "55 mins",
          readingTime: "7 mins read",
          contentMarkdown: `### Encapsulation — Protecting Data
**Encapsulation** keeps an object's internal state safe by controlling how it is read and changed. Convention: a leading underscore (\`_balance\`) signals 'private — do not touch from outside'. Double underscore (\`__balance\`) triggers name mangling, making accidental access even harder.

#### @property — Smart Attribute Access
The \`@property\` decorator turns a method into an attribute: \`account.balance\` reads like data but runs code. Add a setter with \`@balance.setter\` to validate values — e.g., reject negative deposits.

#### Magic (Dunder) Methods
Double-underscore methods customize how objects behave with Python's operators:
- \`__str__\` — friendly text for print()
- \`__repr__\` — exact representation for developers
- \`__eq__\` — define == between objects
- \`__len__\` — make len(obj) work
- \`__lt__\` — enable sorting

#### Visualization
Picture the object as a house: \`_private\` items are in a room marked 'staff only', while properties are the front door with a doorman who checks every visitor.`,
          codeLanguage: "python",
          codeSnippet: `# Encapsulation + property + magic methods
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance   # protected by convention

    @property
    def balance(self):
        """Read-only view of the balance."""
        return self._balance

    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self._balance += amount

    def __str__(self):
        return f"{self.owner}'s account: Rs.{self._balance}"

    def __eq__(self, other):
        return self._balance == other._balance

acc = BankAccount("Amol", 1000)
acc.deposit(500)
print(acc)                       # uses __str__
print("Balance via property:", acc.balance)

acc2 = BankAccount("Riya", 1500)
print("Accounts equal:", acc == acc2)`,
          codeOutput: `Amol's account: Rs.1500
Balance via property: 1500
Accounts equal: True`,
          visualizationTips: [
            "Visualize _private as a 'staff only' room — the convention says do not enter.",
            "Picture @property as a guarded door: reading is safe, writing goes through a check (the setter).",
            "For __str__ vs __repr__, remember: str() is for people, repr() is for developers.",
          ],
          tipsAndTricks: [
            "Use @property to add validation without breaking existing code that reads attributes.",
            "Always implement __str__ for user-facing classes — debugging and printing become readable.",
            "Implement __eq__ and __lt__ together so your objects work with ==, sorting, and min/max.",
          ],
          practice: [
            {
              id: "practice-temperature",
              title: "Temperature Property",
              difficulty: "Medium",
              task: "Create a Temperature class with a private _celsius and a celsius property that rejects values below -273.15.",
              hint: "Set the default in __init__ via the property",
              solution: `class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    @property\n    def celsius(self):\n        return self._celsius\n\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n\nt = Temperature(25)\nprint(t.celsius)  # 25`,
            },
            {
              id: "practice-str-method",
              title: "Friendly Book",
              difficulty: "Easy",
              task: "Give a Book class a __str__ method that returns 'Title by Author'.",
              hint: "def __str__(self): return f\"{self.title} by {self.author}\"",
              solution: `class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n\n    def __str__(self):\n        return f"{self.title} by {self.author}"\n\nprint(Book("Python", "Amol"))  # Python by Amol`,
            },
            {
              id: "practice-eq",
              title: "Compare Points",
              difficulty: "Medium",
              task: "Make a Point class with x, y and an __eq__ method so two points with same coordinates compare equal.",
              hint: "def __eq__(self, other): return self.x == other.x and self.y == other.y",
              solution: `class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nprint(Point(1, 2) == Point(1, 2))  # True`,
            },
          ],
        },
        {
          id: "dataclasses",
          title: "Lecture 19: Dataclasses & Modern OOP",
          shortDescription:
            "Write less boilerplate with @dataclass, frozen data, and professional OOP best practices.",
          duration: "40 mins",
          readingTime: "5 mins read",
          contentMarkdown: `### Dataclasses — Boilerplate Be Gone
\`@dataclass\` auto-generates \`__init__\`, \`__repr__\`, and \`__eq__\` from your type-annotated fields. What used to take 30 lines takes 10.

#### Benefits
- **Less code**: just declare fields with type hints.
- **Free __eq__ and __repr__**: comparing and printing just work.
- **Ordered dataclasses**: \`@dataclass(order=True)\` adds sorting.
- **Frozen data**: \`@dataclass(frozen=True)\` makes instances immutable — perfect for configuration and constants.

#### Type Hints are Documentation
\`name: str\` and \`age: int\` tell readers (and tools like mypy) what each field holds. Modern Python code is expected to be annotated.

#### Best Practices
- Use dataclasses for data containers; use regular classes for objects with behavior.
- Give fields default values by putting them last.
- Keep methods focused — one clear responsibility per class.`,
          codeLanguage: "python",
          codeSnippet: `from dataclasses import dataclass, field

@dataclass
class Course:
    title: str
    lessons: int
    tags: list = field(default_factory=list)

    def summary(self):
        return f"{self.title} — {self.lessons} lessons"

@dataclass(frozen=True)
class Config:
    version: str = "1.0"
    debug: bool = False

# Free __init__, __repr__, __eq__
python = Course("Python", 25, ["python", "ai"])
print(python)
print(python.summary())
print("Equal:", python == Course("Python", 25, ["python", "ai"]))

cfg = Config()
print("Config version:", cfg.version)
# cfg.debug = True  # TypeError: frozen instance`,
          codeOutput: `Course(title='Python', lessons=25, tags=['python', 'ai'])
Python — 25 lessons
Equal: True
Config version: 1.0`,
          visualizationTips: [
            "Picture a dataclass as a form with labeled fields — the framework fills in the boring parts (init, repr, eq).",
            "Visualize frozen=True as a sealed box: read anytime, change never.",
            "default_factory makes a NEW list per instance — visualize each object getting its own empty box.",
          ],
          tipsAndTricks: [
            "Use field(default_factory=list) for mutable defaults — never [] directly (shared trap).",
            "Reach for dataclasses for DTOs, API payloads, and config objects.",
            "Combine dataclasses with type hints for self-documenting code that linters can verify.",
          ],
          practice: [
            {
              id: "practice-dataclass-product",
              title: "Product Dataclass",
              difficulty: "Easy",
              task: "Create a @dataclass Product with name, price, and quantity fields, and print one instance.",
              hint: "@dataclass above class with annotated fields",
              solution: `from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    quantity: int\n\nprint(Product("Laptop", 800, 3))\n# Product(name='Laptop', price=800, quantity=3)`,
            },
            {
              id: "practice-frozen-config",
              title: "Frozen Settings",
              difficulty: "Medium",
              task: "Create a frozen dataclass Settings with site_name and theme fields, and print them.",
              hint: "@dataclass(frozen=True)",
              solution: `from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Settings:\n    site_name: str = "Amol Shukla"\n    theme: str = "dark"\n\nprint(Settings().site_name)  # Amol Shukla`,
            },
            {
              id: "practice-default-factory",
              title: "Tags Per Student",
              difficulty: "Medium",
              task: "Create a dataclass Student with name and tags list using default_factory, and append to one student's tags.",
              hint: "tags: list = field(default_factory=list)",
              solution: `from dataclasses import dataclass, field\n\n@dataclass\nclass Student:\n    name: str\n    tags: list = field(default_factory=list)\n\ns1 = Student("Amol")\ns1.tags.append("python")\nprint(s1.tags)          # ['python']\nprint(Student("Riya").tags)  # [] — separate list!`,
            },
          ],
        },
      ],
    },
    {
      id: "module-6-professional",
      title: "Module 6: Files, Errors & Professional Python",
      description:
        "Handle files, tame errors, write generators, work with JSON, test like a pro, and build a full CLI project.",
      lectures: [
        {
          id: "file-handling",
          title: "Lecture 20: File Handling & Context Managers",
          shortDescription:
            "Read and write files safely with the with statement, work with paths, and handle CSV data.",
          duration: "45 mins",
          readingTime: "6 mins read",
          contentMarkdown: `### Files — Talking to the Disk
Programs that outlive a single run need persistence. Files store data between runs — reading config, saving results, processing CSV exports.

#### The with Statement — Safe & Automatic
\`with open("file.txt", "r") as f:\` guarantees the file is **closed** even if an error occurs. Never use bare \`open()\` without closing.

#### Modes
- \`"r"\` read, \`"w"\` write (overwrites!), \`"a"\` append, \`"r+"\` read+write
- \`"rb"\` / \`"wb"\` for binary files (images, pickles)

#### Reading Patterns
- \`f.read()\` — everything
- \`f.readline()\` — one line at a time
- \`for line in f:\` — iterate lines (best for big files)

#### CSV — Tabular Files
The \`csv\` module parses commas safely (quoted fields, escaping). Reading a CSV into a list of rows is a one-liner with \`list(csv.reader(f))\`.

#### Visualization
Picture the file as a cassette tape: read mode plays from the start; write mode records over the tape; append mode records at the end without erasing.`,
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
          title: "Lecture 21: Exception Handling — Fail Gracefully",
          shortDescription:
            "try/except/else/finally, raising your own errors, and writing code that never crashes the user.",
          duration: "45 mins",
          readingTime: "6 mins read",
          contentMarkdown: `### Errors Are Information
When Python hits a problem, it **raises an exception**. Unhandled, it crashes the program. Handled well, your program responds gracefully — the difference between professional and fragile software.

#### The try/except Shield
\`try:\` wraps risky code. If an exception occurs, execution jumps to the matching \`except\` block instead of crashing.
- Catch specific types: \`except ValueError:\`, \`except FileNotFoundError:\`
- Catch broadly as a fallback: \`except Exception as e:\` (print the message, keep going)
- \`else:\` runs only if no exception occurred
- \`finally:\` ALWAYS runs — perfect for cleanup

#### Raise Your Own
\`raise ValueError("message")\` lets you enforce rules and give users clear feedback.

#### Custom Exceptions
Subclass \`Exception\` to define domain errors like \`InsufficientFundsError\` — self-documenting and catchable.

#### Visualization
Picture exception handling as a safety net under a tightrope: the net (except) only catches specific falls (exception types); finally always lowers you to the ground.`,
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
          title: "Lecture 22: Iterators, Generators & itertools",
          shortDescription:
            "Lazy iteration with yield, memory-efficient pipelines, and the itertools toolbox.",
          duration: "45 mins",
          readingTime: "6 mins read",
          contentMarkdown: `### Iteration Without Memory Blowups
A **generator** produces values one at a time using \`yield\`. Unlike a list, it does not store everything in memory — perfect for huge or infinite sequences.

#### yield — Pause and Resume
When a function contains \`yield\`, calling it returns a generator object. Each \`next()\` runs until the next \`yield\`, then **pauses** — saving all local state.

#### Why Generators Matter
Processing a 10 GB log file: a list loads all 10 GB; a generator streams line by line, using kilobytes. Data pipelines, streaming, and AI training loops all rely on this.

#### Generator Expressions
\`(x * 2 for x in range(10))\` — a lazy comprehension. Pass it straight into \`sum()\`, \`max()\`, or a loop.

#### itertools — The Toolbox
\`itertools.islice\`, \`.chain\`, \`.product\`, \`.cycle\`, \`.count\` give you powerful iteration building blocks without reinventing them.

#### Visualization
Picture a generator as a book that only reveals one page at a time — you read a page, close the book, and reopen exactly where you left off.`,
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
          title: "Lecture 23: JSON & Working with Data",
          shortDescription:
            "Serialize Python objects to JSON, load API data, and build real-world data workflows.",
          duration: "45 mins",
          readingTime: "6 mins read",
          contentMarkdown: `### JSON — The Internet's Language
**JSON** (JavaScript Object Notation) is the universal format for APIs, configs, and data files. It looks exactly like Python dicts and lists — strings in double quotes, booleans lowercase.

#### The Four Functions
- \`json.dumps(data)\` — Python → JSON string
- \`json.loads(text)\` — JSON string → Python
- \`json.dump(data, f)\` — Python → JSON file
- \`json.load(f)\` — JSON file → Python

#### Type Mapping
\`dict\` ↔ object, \`list\` ↔ array, \`str\` ↔ string, \`int/float\` ↔ number, \`True/False\` ↔ true/false, \`None\` ↔ null.

#### Pretty Printing
\`json.dumps(data, indent=2)\` makes output readable — essential for debugging and sharing.

#### Real-World Flow
APIs return JSON → \`json.loads\` → work with dicts/lists → transform → \`json.dump\` to a file. This is the backbone of every data engineer's day.

#### Visualization
Picture JSON as a labeled crate system: outer braces are crates (objects), brackets are shelves (arrays), and keys are the labels on every box.`,
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
          title: "Lecture 24: Testing & Debugging Like a Pro",
          shortDescription:
            "assert, pytest, the debugger, and logging — write code that proves itself.",
          duration: "50 mins",
          readingTime: "7 mins read",
          contentMarkdown: `### Tests Are Not Optional
A professional program ships with tests that prove it works. Every time you change code, tests catch what you broke — instantly.

#### assert — The Quick Check
\`assert condition, "message"\` raises AssertionError if the condition is false. Great for sanity checks and tests.

#### pytest — The Standard
Tests are plain functions starting with \`test_\` containing asserts. Run with \`pytest\` — it discovers and runs them automatically, showing a green/red report.

#### The Debugger — Better than print()
- \`breakpoint()\` pauses execution and drops you into the interactive debugger.
- Commands: \`n\` (next), \`s\` (step into), \`c\` (continue), \`p var\` (print variable), \`q\` (quit).

#### Logging — Professional Print
The \`logging\` module writes timestamped, leveled messages (DEBUG/INFO/WARNING/ERROR) to console or files — far more useful than print() in production.

#### TDD in One Sentence
Write the test FIRST (it fails), then write the minimum code to make it pass — red, green, refactor.`,
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
          title: "Lecture 25: Capstone — Build a CLI Expense Tracker",
          shortDescription:
            "Bring everything together: functions, dicts, files, JSON, and a menu loop in one complete project.",
          duration: "90 mins",
          readingTime: "10 mins read",
          contentMarkdown: `### The Capstone Project
You have learned variables, control flow, data structures, functions, OOP, files, errors, and JSON. Now we combine ALL of it into a real, usable program: a **CLI Expense Tracker**.

#### Features We Build
- **Add** an expense (amount + category)
- **List** all expenses
- **Summary** — total spent and per-category totals
- **Persistence** — saved to expenses.json so data survives restarts
- **Validation** — reject invalid amounts with try/except

#### Architecture
- \`load_expenses()\` / \`save_expenses()\` — JSON persistence
- \`add_expense(expenses, amount, category)\` — validation + append
- \`print_summary(expenses)\` — aggregation with a dict of totals
- \`main()\` — the while True menu loop with break

#### How This Course Prepared You
Every line of this project uses a lesson you already completed. That is the point: professional Python is just these building blocks arranged well.

#### Next Steps
Try adding a delete feature, export to CSV, or a budget alert. Congratulations — you are no longer a beginner.`,
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
    },
  ],
};
