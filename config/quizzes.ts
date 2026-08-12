/**
 * Interactive quizzes for every lesson in the Learning Hub.
 *
 * Keyed by lesson id (see config/python-course/module-*.ts and
 * config/courses.ts). Rendered by components/courses/lesson-quiz.tsx
 * at the bottom of every lesson page.
 */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonQuiz {
  title: string;
  questions: QuizQuestion[];
}

export const LESSON_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Module 1: Python Fundamentals ────────────────────────────────────────
  "hello-world-python": {
    title: "Hello, Python!",
    questions: [
      {
        id: "hw-1",
        question: "Which command prints text to the console in Python?",
        options: ["console.log()", "print()", "echo()", "write()"],
        correctIndex: 1,
        explanation:
          "print() writes whatever is inside the parentheses to the console — Python's most-used function.",
      },
      {
        id: "hw-2",
        question: "What does the # character mean in Python code?",
        options: [
          "It starts a comment",
          "It starts a string",
          "It imports a module",
          "It is an error",
        ],
        correctIndex: 0,
        explanation:
          "# begins a comment. Everything after it on the same line is ignored by Python.",
      },
      {
        id: "hw-3",
        question: "Why does Python care about indentation (spaces at the start of a line)?",
        options: [
          "It is only for style",
          "It defines blocks of code",
          "It makes the file bigger",
          "It is optional",
        ],
        correctIndex: 1,
        explanation:
          "Indentation defines blocks. Code at the same indent level belongs to the same block — Python has no braces like C or Java.",
      },
    ],
  },
  "variables-io": {
    title: "Variables & I/O",
    questions: [
      {
        id: "v-1",
        question: "Which line creates a valid variable in Python?",
        options: [
          "2myvar = 5",
          "my-var = 5",
          "my_var = 5",
          "class = 5",
        ],
        correctIndex: 2,
        explanation:
          "Variable names can contain letters, digits and underscores — but cannot start with a digit or be a reserved keyword.",
      },
      {
        id: "v-2",
        question: "What does input() always return?",
        options: ["An integer", "A string", "A float", "A boolean"],
        correctIndex: 1,
        explanation:
          "input() returns a string. To use numbers you must convert, e.g. int(input()) or float(input()).",
      },
      {
        id: "v-3",
        question: "Which type does Python use for whole numbers without a decimal point?",
        options: ["float", "str", "int", "bool"],
        correctIndex: 2,
        explanation:
          "int is Python's integer type (e.g. 42). float is for decimals like 3.14.",
      },
      {
        id: "v-4",
        question: "What is the type of the value True in Python?",
        options: ["int", "str", "bool", "float"],
        correctIndex: 2,
        explanation:
          "True and False are booleans (type bool) — and secretly integers: True equals 1, False equals 0.",
      },
      {
        id: "v-5",
        question: "Which value represents 'nothing here' in Python?",
        options: ["0", "False", "None", "null"],
        correctIndex: 2,
        explanation:
          "None is Python's special 'no value' object — its type is NoneType.",
      },
    ],
  },
  "strings-mastery": {
    title: "Strings Mastery",
    questions: [
      {
        id: "s-1",
        question: "What is the result of 'Hello' + ' World'?",
        options: [
          "'Hello World'",
          "'Hello+ World'",
          "An error",
          "'Hello World '",
        ],
        correctIndex: 0,
        explanation:
          "The + operator concatenates strings, joining them into one: 'Hello World'.",
      },
      {
        id: "s-2",
        question: "Which method converts a string to uppercase?",
        options: ["upper()", "big()", "capital()", "up()"],
        correctIndex: 0,
        explanation:
          "text.upper() returns the string with all characters uppercased.",
      },
      {
        id: "s-3",
        question: "What is the length of the string 'Python'?",
        options: ["5", "6", "7", "Python"],
        correctIndex: 1,
        explanation:
          "len('Python') returns 6 — one character for each letter, including zero-based indexing of 0..5.",
      },
    ],
  },
  "operators-expressions": {
    title: "Operators & Expressions",
    questions: [
      {
        id: "o-1",
        question: "What does the ** operator do?",
        options: ["Multiplication", "Exponentiation", "Modulo", "Floor division"],
        correctIndex: 1,
        explanation: "** raises the left operand to the power of the right: 2 ** 3 → 8.",
      },
      {
        id: "o-2",
        question: "What is the result of 17 // 5?",
        options: ["3.4", "3", "2", "4"],
        correctIndex: 1,
        explanation:
          "// is floor division — it divides and rounds down to the nearest whole number: 17 // 5 → 3.",
      },
      {
        id: "o-3",
        question: "What is the result of 10 % 3?",
        options: ["1", "3", "0", "3.33"],
        correctIndex: 0,
        explanation:
          "% is the modulo operator — it returns the remainder: 10 % 3 → 1.",
      },
    ],
  },
  "loops-conditionals": {
    title: "Loops & Conditionals",
    questions: [
      {
        id: "lc-1",
        question: "How many times does this loop run? for i in range(3):",
        options: ["2", "3", "4", "Infinite"],
        correctIndex: 1,
        explanation:
          "range(3) produces 0, 1, 2 — exactly three iterations.",
      },
      {
        id: "lc-2",
        question: "Which keyword is used to decide between branches?",
        options: ["switch", "case", "if", "when"],
        correctIndex: 2,
        explanation:
          "Python uses if / elif / else to branch on conditions.",
      },
      {
        id: "lc-3",
        question: "What does break do inside a loop?",
        options: [
          "Skips to the next iteration",
          "Exits the loop immediately",
          "Restarts the loop",
          "Pauses the program",
        ],
        correctIndex: 1,
        explanation:
          "break exits the nearest loop entirely; continue skips only the current iteration.",
      },
    ],
  },
  "loop-control-nested": {
    title: "Loop Control & Nested Loops",
    questions: [
      {
        id: "ln-1",
        question: "What does continue do inside a loop?",
        options: [
          "Exits the loop",
          "Skips the rest of the current iteration",
          "Restarts the loop from 0",
          "Raises an error",
        ],
        correctIndex: 1,
        explanation:
          "continue jumps straight to the next iteration, skipping any code after it in the loop body.",
      },
      {
        id: "ln-2",
        question: "Which statement makes a loop with no condition run forever?",
        options: ["while True:", "for x in []:", "for x in range(1):", "if 1:"],
        correctIndex: 0,
        explanation:
          "while True: loops forever unless a break or return escapes it — useful for menus and games.",
      },
      {
        id: "ln-3",
        question: "In a nested loop, break affects which loop?",
        options: [
          "The outermost loop",
          "The nearest enclosing loop",
          "All loops",
          "The next loop after it",
        ],
        correctIndex: 1,
        explanation:
          "break always exits the innermost loop that contains it — the nearest enclosing loop.",
      },
    ],
  },
  "comprehensions": {
    title: "Comprehensions",
    questions: [
      {
        id: "c-1",
        question: "What does [x * 2 for x in range(3)] produce?",
        options: ["[0, 2, 4]", "[2, 4, 6]", "[1, 2, 3]", "[0, 1, 2]"],
        correctIndex: 0,
        explanation:
          "Each x from 0, 1, 2 is doubled: [0, 2, 4] — a list comprehension builds a new list inline.",
      },
      {
        id: "c-2",
        question: "How do you filter items in a list comprehension?",
        options: [
          "With a for clause",
          "With an if clause at the end",
          "With a while clause",
          "You cannot filter",
        ],
        correctIndex: 1,
        explanation:
          "The optional if at the end keeps only items where the condition is True.",
      },
      {
        id: "c-3",
        question: "Which comprehension builds a dictionary?",
        options: [
          "[k: v for k, v in items]",
          "{k: v for k, v in items}",
          "(k, v for k, v in items)",
          "dict(k, v for items)",
        ],
        correctIndex: 1,
        explanation:
          "Curly braces with key: value produce a dict comprehension: {k: v for k, v in items}.",
      },
    ],
  },
  "lists-tuples": {
    title: "Lists & Tuples",
    questions: [
      {
        id: "lt-1",
        question: "Which statement is true about lists?",
        options: [
          "They are immutable",
          "They can change after creation",
          "They cannot hold different types",
          "They use parentheses",
        ],
        correctIndex: 1,
        explanation:
          "Lists are mutable — you can append, insert, remove and reassign elements after creation.",
      },
      {
        id: "lt-2",
        question: "What is the main difference between a tuple and a list?",
        options: [
          "Tuples are faster to type",
          "Tuples are immutable",
          "Lists cannot hold numbers",
          "There is no difference",
        ],
        correctIndex: 1,
        explanation:
          "Tuples are immutable — once created they cannot be changed. Lists are mutable.",
      },
      {
        id: "lt-3",
        question: "What is the index of the last element in a list of length 5?",
        options: ["4", "5", "-1", "Both 4 and -1"],
        correctIndex: 3,
        explanation:
          "The last element is at index 4 (0-based) or index -1 (negative indexing from the end).",
      },
    ],
  },
  "sets-dictionaries": {
    title: "Sets & Dictionaries",
    questions: [
      {
        id: "sd-1",
        question: "Which property is unique to a set?",
        options: [
          "Ordered elements",
          "No duplicate values",
          "Key-value pairs",
          "Mutable keys",
        ],
        correctIndex: 1,
        explanation:
          "Sets automatically remove duplicates — each element appears only once.",
      },
      {
        id: "sd-2",
        question: "How do you access the value for key 'name' in dict d?",
        options: [
          "d('name')",
          "d.name",
          "d['name']",
          "d->name",
        ],
        correctIndex: 2,
        explanation:
          "Square-bracket lookup d['name'] returns the value stored under that key.",
      },
      {
        id: "sd-3",
        question: "Which method adds a key-value pair to a dictionary?",
        options: ["append()", "add()", "d[key] = value", "push()"],
        correctIndex: 2,
        explanation:
          "Assigning d[key] = value inserts or updates the entry — no separate method needed.",
      },
    ],
  },
  "advanced-collections": {
    title: "Advanced Collections",
    questions: [
      {
        id: "ac-1",
        question: "Which import provides Counter for counting items?",
        options: [
          "from collections import Counter",
          "import counter",
          "from itertools import Counter",
          "from math import Counter",
        ],
        correctIndex: 0,
        explanation:
          "Counter lives in the collections module: from collections import Counter.",
      },
      {
        id: "ac-2",
        question: "What does defaultdict return for a missing key?",
        options: [
          "None",
          "A KeyError",
          "A default value from the factory",
          "An empty string",
        ],
        correctIndex: 2,
        explanation:
          "defaultdict never raises KeyError — it calls the factory (e.g. list, int) to create a default.",
      },
      {
        id: "ac-3",
        question: "What does deque optimize?",
        options: [
          "Sorting",
          "Appending and popping at both ends",
          "Searching",
          "Memory size of numbers",
        ],
        correctIndex: 1,
        explanation:
          "deque (double-ended queue) gives O(1) append/pop at both ends — faster than a list at the front.",
      },
    ],
  },
  "nested-copies": {
    title: "Nested Data & Copies",
    questions: [
      {
        id: "nc-1",
        question: "What is the value of a[0] after: a = [1,2]; b = a; b[0] = 99?",
        options: ["1", "99", "An error", "None"],
        correctIndex: 1,
        explanation:
          "b = a copies the reference, not the list. Both names point to the same list, so the change shows in a too.",
      },
      {
        id: "nc-2",
        question: "Which import provides copy.deepcopy()?",
        options: ["from copy import deepcopy", "import deepcopy", "from utils import deepcopy", "from clone import deepcopy"],
        correctIndex: 0,
        explanation: "deepcopy lives in the copy module: from copy import deepcopy.",
      },
      {
        id: "nc-3",
        question: "When does a shallow copy (copy.copy) cause shared data?",
        options: [
          "Always",
          "When the container holds nested mutable objects",
          "Never",
          "Only for strings",
        ],
        correctIndex: 1,
        explanation:
          "A shallow copy duplicates the outer container but shares nested objects — mutating a nested list affects both.",
      },
    ],
  },
  "functions-basics": {
    title: "Functions Basics",
    questions: [
      {
        id: "fb-1",
        question: "Which keyword defines a function?",
        options: ["func", "function", "def", "define"],
        correctIndex: 2,
        explanation: "Python uses def to define functions: def greet(): ...",
      },
      {
        id: "fb-2",
        question: "What does return do?",
        options: [
          "Prints a value",
          "Sends a value back to the caller",
          "Ends the program",
          "Repeats the function",
        ],
        correctIndex: 1,
        explanation:
          "return hands a value back to the caller so it can be stored or used.",
      },
      {
        id: "fb-3",
        question: "What is a default parameter?",
        options: [
          "A parameter that cannot change",
          "A parameter with a fallback value if none is passed",
          "A required parameter",
          "A keyword-only parameter",
        ],
        correctIndex: 1,
        explanation:
          "def f(x=10): gives x a default of 10 when the caller omits it.",
      },
    ],
  },
  "lambda-args-kwargs": {
    title: "Lambda, *args & **kwargs",
    questions: [
      {
        id: "lk-1",
        question: "What does lambda x: x + 1 represent?",
        options: [
          "A loop",
          "An anonymous one-line function",
          "A class",
          "A module",
        ],
        correctIndex: 1,
        explanation:
          "lambda creates a small anonymous function — here, one that adds 1 to its argument.",
      },
      {
        id: "lk-2",
        question: "What does *args collect?",
        options: [
          "Keyword arguments as a dict",
          "Extra positional arguments as a tuple",
          "Only the first argument",
          "Arguments as a set",
        ],
        correctIndex: 1,
        explanation: "*args bundles extra positional arguments into a tuple.",
      },
      {
        id: "lk-3",
        question: "What does **kwargs collect?",
        options: [
          "Positional args as a list",
          "Extra keyword arguments as a dict",
          "Default arguments",
          "Lambda functions",
        ],
        correctIndex: 1,
        explanation: "**kwargs gathers extra name=value arguments into a dictionary.",
      },
    ],
  },
  "scope-closures-decorators": {
    title: "Scope, Closures & Decorators",
    questions: [
      {
        id: "sc-1",
        question: "Which keyword lets a function modify a global variable?",
        options: ["global", "public", "extern", "static"],
        correctIndex: 0,
        explanation: "Declaring global x inside a function lets you reassign the module-level x.",
      },
      {
        id: "sc-2",
        question: "What is a closure?",
        options: [
          "A function that remembers variables from its enclosing scope",
          "A closed loop",
          "An anonymous class",
          "A file that cannot open",
        ],
        correctIndex: 0,
        explanation:
          "A closure is a nested function that keeps access to variables from the scope where it was defined.",
      },
      {
        id: "sc-3",
        question: "What does a decorator do?",
        options: [
          "Deletes functions",
          "Wraps a function to add behavior",
          "Speeds up loops",
          "Renames functions",
        ],
        correctIndex: 1,
        explanation:
          "A decorator takes a function, wraps it with extra logic, and returns the enhanced version.",
      },
    ],
  },
  "modules-packages": {
    title: "Modules & Packages",
    questions: [
      {
        id: "mp-1",
        question: "Which keyword imports a module?",
        options: ["include", "using", "import", "require"],
        correctIndex: 2,
        explanation: "import math makes math module functions available.",
      },
      {
        id: "mp-2",
        question: "How do you import only the sqrt function from math?",
        options: [
          "from math import sqrt",
          "import sqrt",
          "use math.sqrt",
          "include math.sqrt",
        ],
        correctIndex: 0,
        explanation: "from math import sqrt pulls just that name into the current namespace.",
      },
      {
        id: "mp-3",
        question: "What is a package in Python?",
        options: [
          "A single function",
          "A directory of modules with __init__.py",
          "A compiled binary",
          "A virtual environment",
        ],
        correctIndex: 1,
        explanation:
          "A package is a folder containing modules plus an __init__.py file that marks it as importable.",
      },
    ],
  },
  "classes-objects": {
    title: "Classes & Objects",
    questions: [
      {
        id: "co-1",
        question: "Which keyword defines a class?",
        options: ["struct", "object", "class", "type"],
        correctIndex: 2,
        explanation: "class Dog: defines a new class named Dog.",
      },
      {
        id: "co-2",
        question: "What does __init__ do?",
        options: [
          "Deletes an object",
          "Initializes a new object's attributes",
          "Prints the object",
          "Compares objects",
        ],
        correctIndex: 1,
        explanation:
          "__init__ is the constructor — it runs when you create an instance and sets up its attributes.",
      },
      {
        id: "co-3",
        question: "What does self refer to inside a method?",
        options: [
          "The class itself",
          "The current instance",
          "The module",
          "The parent class",
        ],
        correctIndex: 1,
        explanation:
          "self is the specific instance the method was called on.",
      },
    ],
  },
  "inheritance-polymorphism": {
    title: "Inheritance & Polymorphism",
    questions: [
      {
        id: "ip-1",
        question: "How does class Dog inherit from Animal?",
        options: [
          "class Dog extends Animal",
          "class Dog(Animal):",
          "class Animal(Dog):",
          "Dog inherits Animal",
        ],
        correctIndex: 1,
        explanation: "Putting the parent in parentheses — class Dog(Animal): — creates inheritance.",
      },
      {
        id: "ip-2",
        question: "What is method overriding?",
        options: [
          "Defining the same method twice in a file",
          "A child class redefining a parent method",
          "Deleting a method",
          "Renaming a method",
        ],
        correctIndex: 1,
        explanation:
          "A subclass can override a method by redefining it with the same name — polymorphic calls use the override.",
      },
      {
        id: "ip-3",
        question: "What does super() do?",
        options: [
          "Deletes the parent",
          "Calls a method on the parent class",
          "Creates a super class",
          "Slows down the code",
        ],
        correctIndex: 1,
        explanation: "super() lets you call the parent's version of a method, e.g. super().__init__().",
      },
    ],
  },
  "encapsulation-magic-methods": {
    title: "Encapsulation & Magic Methods",
    questions: [
      {
        id: "em-1",
        question: "What does a single leading underscore (_value) signal?",
        options: [
          "A private attribute by convention",
          "A required attribute",
          "A constant",
          "An error",
        ],
        correctIndex: 0,
        explanation:
          "_name is a convention meaning 'internal — don't touch from outside' (not enforced by Python).",
      },
      {
        id: "em-2",
        question: "Which magic method controls string conversion for print()?",
        options: ["__init__", "__str__", "__len__", "__call__"],
        correctIndex: 1,
        explanation: "__str__ returns the human-friendly string used by print() and str().",
      },
      {
        id: "em-3",
        question: "What are magic methods (dunder methods)?",
        options: [
          "Secret hacks",
          "Special methods surrounded by double underscores that hook into Python syntax",
          "Deprecated functions",
          "Built-in constants",
        ],
        correctIndex: 1,
        explanation:
          "Dunder methods like __init__, __len__, __eq__ let your objects work with Python's operators and built-ins.",
      },
    ],
  },
  dataclasses: {
    title: "Dataclasses",
    questions: [
      {
        id: "dc-1",
        question: "Which import brings in dataclasses?",
        options: [
          "from dataclasses import dataclass",
          "import dataclass",
          "from classes import dataclass",
          "from data import dataclass",
        ],
        correctIndex: 0,
        explanation: "from dataclasses import dataclass is the standard import.",
      },
      {
        id: "dc-2",
        question: "What does @dataclass generate for you?",
        options: [
          "Nothing",
          "__init__, __repr__, and __eq__ automatically",
          "Only __init__",
          "Only __str__",
        ],
        correctIndex: 1,
        explanation:
          "The decorator auto-generates __init__, __repr__, __eq__ and more from the annotated fields.",
      },
      {
        id: "dc-3",
        question: "How is a field marked read-only?",
        options: [
          "frozen=True on the decorator",
          "final=True on the field",
          "readonly keyword",
          "const keyword",
        ],
        correctIndex: 0,
        explanation: "@dataclass(frozen=True) makes instances immutable — assigning raises FrozenInstanceError.",
      },
    ],
  },
  "iterators-generators": {
    title: "Iterators & Generators",
    questions: [
      {
        id: "ig-1",
        question: "Which keyword makes a function a generator?",
        options: ["yield", "return", "pause", "emit"],
        correctIndex: 0,
        explanation:
          "Using yield instead of return turns a function into a generator that produces values lazily.",
      },
      {
        id: "ig-2",
        question: "What is lazy evaluation?",
        options: [
          "Computing everything upfront",
          "Producing values only when asked",
          "Skipping errors",
          "Caching results forever",
        ],
        correctIndex: 1,
        explanation:
          "Generators compute one value at a time on demand — great for huge or infinite sequences.",
      },
      {
        id: "ig-3",
        question: "What does next(gen) do?",
        options: [
          "Restarts the generator",
          "Asks the generator for its next value",
          "Deletes the generator",
          "Copies the generator",
        ],
        correctIndex: 1,
        explanation: "next(gen) resumes the generator until the next yield and returns that value.",
      },
    ],
  },
  "exception-handling": {
    title: "Exception Handling",
    questions: [
      {
        id: "eh-1",
        question: "Which keyword catches an exception?",
        options: ["try/except", "catch", "throw", "handle"],
        correctIndex: 0,
        explanation: "Python uses try/except — there is no catch keyword.",
      },
      {
        id: "eh-2",
        question: "Which block always runs, whether or not an error occurred?",
        options: ["else", "finally", "except", "final"],
        correctIndex: 1,
        explanation: "finally runs unconditionally — perfect for cleanup like closing files.",
      },
      {
        id: "eh-3",
        question: "How do you raise an error deliberately?",
        options: ["throw Error()", "raise ValueError('msg')", "error()", "except ValueError"],
        correctIndex: 1,
        explanation: "raise creates and throws an exception you control, with your own message.",
      },
    ],
  },
  "file-handling": {
    title: "File Handling",
    questions: [
      {
        id: "fh-1",
        question: "Which mode opens a file for reading?",
        options: ["'w'", "'r'", "'a'", "'x'"],
        correctIndex: 1,
        explanation: "'r' opens for reading (default). 'w' overwrites, 'a' appends.",
      },
      {
        id: "fh-2",
        question: "What is the safest way to open a file?",
        options: [
          "open() alone",
          "The with statement",
          "file() function",
          "read() without open",
        ],
        correctIndex: 1,
        explanation:
          "with open(...) as f: guarantees the file is closed automatically, even on errors.",
      },
      {
        id: "fh-3",
        question: "What does f.readline() return?",
        options: [
          "All lines as a list",
          "The entire file as one string",
          "The next line including its newline",
          "The file size",
        ],
        correctIndex: 2,
        explanation: "readline() reads one line at a time; read() reads everything; readlines() returns a list.",
      },
    ],
  },
  "json-data": {
    title: "JSON & Data",
    questions: [
      {
        id: "j-1",
        question: "Which function converts a Python dict to a JSON string?",
        options: ["json.load()", "json.dumps()", "json.parse()", "json.stringify()"],
        correctIndex: 1,
        explanation: "json.dumps() serializes Python objects to a JSON string.",
      },
      {
        id: "j-2",
        question: "Which function parses a JSON string into a Python dict?",
        options: ["json.loads()", "json.dumps()", "json.read()", "json.open()"],
        correctIndex: 0,
        explanation: "json.loads() parses a JSON string; json.load() reads from a file object.",
      },
      {
        id: "j-3",
        question: "What Python type does a JSON array become?",
        options: ["Tuple", "List", "Set", "String"],
        correctIndex: 1,
        explanation: "JSON arrays map to Python lists; JSON objects map to dicts.",
      },
    ],
  },
  "testing-debugging": {
    title: "Testing & Debugging",
    questions: [
      {
        id: "td-1",
        question: "Which statement verifies a condition in tests?",
        options: ["assert", "verify", "check", "expect"],
        correctIndex: 0,
        explanation: "assert condition raises AssertionError when the condition is False.",
      },
      {
        id: "td-2",
        question: "Which library provides test functions and methods?",
        options: ["pytest", "numpy", "requests", "flask"],
        correctIndex: 0,
        explanation:
          "pytest is the most popular testing framework — you write test_ functions and run pytest.",
      },
      {
        id: "td-3",
        question: "What is a breakpoint?",
        options: [
          "A syntax error",
          "A pause point in code to inspect state",
          "The end of a file",
          "A type of exception",
        ],
        correctIndex: 1,
        explanation:
          "A breakpoint pauses execution so you can inspect variables — in Python, breakpoint() drops into the debugger.",
      },
    ],
  },
  "mini-project-expense-tracker": {
    title: "Expense Tracker Mini-Project",
    questions: [
      {
        id: "exp-1",
        question: "Which data structure is ideal for storing expense categories and amounts?",
        options: ["A dictionary", "A string", "A boolean", "An integer"],
        correctIndex: 0,
        explanation:
          "A dict maps each category name to its total amount — perfect for this tracker.",
      },
      {
        id: "exp-2",
        question: "How do you add a new expense to a dict total?",
        options: [
          "totals[key] = totals.get(key, 0) + amount",
          "totals.append(key)",
          "totals + key",
          "add(totals, key)",
        ],
        correctIndex: 0,
        explanation:
          "totals.get(key, 0) safely reads the existing total (or 0) before adding the amount.",
      },
      {
        id: "exp-3",
        question: "Which loop keeps a menu running until the user chooses to quit?",
        options: ["for _ in range(5):", "while True: with break on quit", "foreach", "repeat(10):"],
        correctIndex: 1,
        explanation:
          "while True: loops the menu forever, and a break on the quit option exits cleanly.",
      },
    ],
  },

  // ─── Data Science Hub ─────────────────────────────────────────────────────
  "python-basics": {
    title: "Python Data Science Ecosystem",
    questions: [
      {
        id: "ds-1",
        question: "Why are NumPy arrays faster than Python lists for large data?",
        options: [
          "They use interpreted loops",
          "They store data in contiguous memory and use vectorized C operations",
          "They compress the data",
          "They are smaller by design",
        ],
        correctIndex: 1,
        explanation:
          "Contiguous homogeneous storage plus vectorized C-level operations remove Python's per-element overhead.",
      },
      {
        id: "ds-2",
        question: "What does a list comprehension [x**2 for x in range(10) if x % 2 == 0] produce?",
        options: [
          "Squares of all numbers 0–9",
          "Squares of even numbers 0–9",
          "Squares of odd numbers 0–9",
          "Just 0 and 2",
        ],
        correctIndex: 1,
        explanation:
          "The if keeps only even x values (0, 2, 4, 6, 8), and each is squared.",
      },
      {
        id: "ds-3",
        question: "Why use a virtual environment?",
        options: [
          "To speed up Python",
          "To isolate dependencies per project",
          "To compress notebooks",
          "To encrypt code",
        ],
        correctIndex: 1,
        explanation: "Virtual environments keep each project's packages separate — avoiding version clashes.",
      },
    ],
  },
  "numpy-pandas": {
    title: "NumPy & Pandas",
    questions: [
      {
        id: "np-1",
        question: "How do you fill missing values with a column's mean?",
        options: [
          "df.dropna()",
          "df.fillna(df.mean())",
          "df.replace(mean)",
          "df.clean()",
        ],
        correctIndex: 1,
        explanation: "df.fillna(df.mean()) replaces NaN cells with the column mean.",
      },
      {
        id: "np-2",
        question: "What does df.groupby('Dept').mean() do?",
        options: [
          "Sorts the rows",
          "Averages numeric columns per department",
          "Drops duplicates",
          "Renames columns",
        ],
        correctIndex: 1,
        explanation:
          "groupby splits rows by department and .mean() aggregates each group's numeric columns.",
      },
      {
        id: "np-3",
        question: "What is the key difference between .loc and .iloc?",
        options: [
          "No difference",
          ".loc is label-based, .iloc is integer-position based",
          ".loc is faster",
          ".iloc works only on numbers",
        ],
        correctIndex: 1,
        explanation:
          ".loc selects by row/column labels; .iloc selects by zero-based integer positions.",
      },
    ],
  },
  visualization: {
    title: "Data Visualization",
    questions: [
      {
        id: "vz-1",
        question: "Which library is a high-level wrapper on Matplotlib?",
        options: ["Seaborn", "Pandas", "Scikit-learn", "Requests"],
        correctIndex: 0,
        explanation:
          "Seaborn builds on Matplotlib with statistical defaults and tight pandas integration.",
      },
      {
        id: "vz-2",
        question: "What is the best chart for showing a distribution's shape?",
        options: ["A pie chart", "A histogram or KDE plot", "A line chart", "A table"],
        correctIndex: 1,
        explanation:
          "Histograms and KDE plots reveal how values are spread — skewed, normal, bimodal, etc.",
      },
      {
        id: "vz-3",
        question: "What does a correlation heatmap visualize?",
        options: [
          "Time trends",
          "Pairwise correlations between numeric features",
          "Missing values",
          "Category counts",
        ],
        correctIndex: 1,
        explanation:
          "Each cell shows how strongly two numeric features move together (-1 to +1).",
      },
    ],
  },
  "supervised-learning": {
    title: "Supervised Learning",
    questions: [
      {
        id: "ml-1",
        question: "Why do we split data into train and test sets?",
        options: [
          "To make training faster",
          "To evaluate the model on unseen data",
          "To double the dataset",
          "To remove noise",
        ],
        correctIndex: 1,
        explanation:
          "Testing on unseen data reveals whether the model generalizes instead of just memorizing.",
      },
      {
        id: "ml-2",
        question: "What does Mean Squared Error measure?",
        options: [
          "How fast training runs",
          "The average squared difference between predictions and true values",
          "The size of the dataset",
          "The number of features",
        ],
        correctIndex: 1,
        explanation:
          "MSE averages the squared prediction errors — lower is better.",
      },
      {
        id: "ml-3",
        question: "Which sklearn function splits the dataset?",
        options: [
          "train_test_split()",
          "split_data()",
          "cross_validate()",
          "partition()",
        ],
        correctIndex: 0,
        explanation: "from sklearn.model_selection import train_test_split is the standard workflow.",
      },
    ],
  },
  "agentic-ai": {
    title: "Agentic AI Pipelines",
    questions: [
      {
        id: "ag-1",
        question: "What does the ReAct loop stand for?",
        options: [
          "React + Active",
          "Reason + Act",
          "Read + Act",
          "Real-time Actions",
        ],
        correctIndex: 1,
        explanation:
          "ReAct alternates Thought → Action → Observation until it can produce a final answer.",
      },
      {
        id: "ag-2",
        question: "In an agent, what is a tool?",
        options: [
          "A Python library",
          "A callable the model can invoke with arguments",
          "A debugger",
          "A file format",
        ],
        correctIndex: 1,
        explanation:
          "Tools are functions exposed to the LLM — it decides when to call them and what arguments to pass.",
      },
      {
        id: "ag-3",
        question: "Why must agentic runtimes be sandboxed?",
        options: [
          "To save money",
          "Because agents can execute generated code, which could be unsafe",
          "To make them faster",
          "To reduce tokens",
        ],
        correctIndex: 1,
        explanation:
          "Agents that write and run code need isolated sandboxes (e.g. Docker) to prevent malicious or buggy execution.",
      },
    ],
  },

  // ─── Digital Marketing Course ─────────────────────────────────────────────
  "intro-digital-marketing": {
    title: "Introduction to Digital Marketing",
    questions: [
      {
        id: "dm-1",
        question: "What is digital marketing?",
        options: [
          "Only social media advertising",
          "Promoting products/services through digital channels",
          "Selling products online",
          "Building websites",
        ],
        correctIndex: 1,
        explanation:
          "Digital marketing encompasses all marketing efforts that use electronic devices or the internet to reach customers.",
      },
      {
        id: "dm-2",
        question: "Which of these is NOT a key component of digital marketing?",
        options: [
          "SEO",
          "Email Marketing",
          "Traditional TV Advertising",
          "Content Marketing",
        ],
        correctIndex: 2,
        explanation:
          "Traditional TV advertising is part of traditional marketing, not digital marketing.",
      },
      {
        id: "dm-3",
        question: "Why is digital marketing measurable?",
        options: [
          "Because you can count followers",
          "Because every click, impression, and conversion can be tracked",
          "Because it's cheaper",
          "Because it's easier",
        ],
        correctIndex: 1,
        explanation:
          "Digital marketing provides detailed analytics that track user interactions in real-time.",
      },
    ],
  },
  "buyer-personas": {
    title: "Buyer Personas & Customer Journey",
    questions: [
      {
        id: "bp-1",
        question: "What is a buyer persona?",
        options: [
          "A real customer profile",
          "A semi-fictional representation of your ideal customer",
          "A marketing strategy",
          "A social media profile",
        ],
        correctIndex: 1,
        explanation:
          "Buyer personas are semi-fictional representations based on market research and real data about your customers.",
      },
      {
        id: "bp-2",
        question: "What are the 5 stages of the customer journey?",
        options: [
          "Awareness, Interest, Decision, Action, Loyalty",
          "Awareness, Consideration, Decision, Retention, Advocacy",
          "Research, Compare, Buy, Use, Recommend",
          "Discover, Learn, Purchase, Use, Review",
        ],
        correctIndex: 1,
        explanation:
          "The 5 stages are Awareness, Consideration, Decision, Retention, and Advocacy.",
      },
      {
        id: "bp-3",
        question: "Why is post-purchase experience important?",
        options: [
          "It isn't important",
          "It costs 5x more to acquire a new customer than retain an existing one",
          "It only matters for B2B companies",
          "It only affects social media",
        ],
        correctIndex: 1,
        explanation:
          "Retention and advocacy stages provide the highest ROI because acquiring new customers is much more expensive.",
      },
    ],
  },
  "smart-goals": {
    title: "SMART Marketing Goals",
    questions: [
      {
        id: "sg-1",
        question: "What does SMART stand for in goal setting?",
        options: [
          "Simple, Measurable, Achievable, Relevant, Timely",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Strategic, Measurable, Actionable, Realistic, Timed",
          "Smart, Meaningful, Attainable, Results-oriented, Tracked"
        ],
        correctIndex: 1,
        explanation:
          "SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound.",
      },
      {
        id: "sg-2",
        question: "Which is a SMART goal?",
        options: [
          "Get more followers",
          "Increase Instagram followers by 15% in 3 months",
          "Do better on social media",
          "Improve marketing",
        ],
        correctIndex: 1,
        explanation:
          "This goal is Specific (Instagram followers), Measurable (15%), Achievable (realistic), Relevant (marketing), and Time-bound (3 months).",
      },
    ],
  },

  // ─── Stock Market Course ─────────────────────────────────────────────────
  "intro-stock-market": {
    title: "Introduction to the Stock Market",
    questions: [
      {
        id: "sm-1",
        question: "What happens when you buy a stock?",
        options: [
          "You lend money to the company",
          "You purchase a small piece of ownership in the company",
          "You become an employee",
          "You guarantee returns",
        ],
        correctIndex: 1,
        explanation:
          "Buying stock means purchasing shares, which represent ownership stakes in a company.",
      },
      {
        id: "sm-2",
        question: "What is market capitalization?",
        options: [
          "The number of shares a company has",
          "The total value of all shares (price × shares outstanding)",
          "The company's annual revenue",
          "The company's profit margin",
        ],
        correctIndex: 1,
        explanation:
          "Market cap is calculated by multiplying the current stock price by the total number of outstanding shares.",
      },
      {
        id: "sm-3",
        question: "What is a bull market?",
        options: [
          "A market with falling prices",
          "A market with rising prices",
          "A market with stable prices",
          "A market with high volatility",
        ],
        correctIndex: 1,
        explanation:
          "A bull market is characterized by rising stock prices and investor optimism.",
      },
    ],
  },
  "types-of-stocks": {
    title: "Types of Stocks & Asset Classes",
    questions: [
      {
        id: "ts-1",
        question: "What characterizes a growth stock?",
        options: [
          "High dividend payments",
          "Expected to grow faster than the market",
          "Low risk, stable returns",
          "Only available in certain countries",
        ],
        correctIndex: 1,
        explanation:
          "Growth stocks are companies expected to grow earnings at an above-average rate compared to the market.",
      },
      {
        id: "ts-2",
        question: "What is the main advantage of index funds?",
        options: [
          "Higher returns than individual stocks",
          "Instant diversification across many companies",
          "No risk of loss",
          "Guaranteed dividends",
        ],
        correctIndex: 1,
        explanation:
          "Index funds provide instant diversification by holding a basket of stocks that mirror a market index.",
      },
      {
        id: "ts-3",
        question: "Why is diversification important?",
        options: [
          "It guarantees profits",
          "It can reduce risk without proportionally reducing returns",
          "It eliminates all risk",
          "It's required by law",
        ],
        correctIndex: 1,
        explanation:
          "Diversification spreads investments across different assets, reducing the impact of any single investment's poor performance.",
      },
    ],
  },
  "fundamental-analysis": {
    title: "Fundamental Analysis",
    questions: [
      {
        id: "fa-1",
        question: "What does the P/E ratio measure?",
        options: [
          "A company's debt level",
          "How much you're paying for $1 of earnings",
          "The company's cash flow",
          "The stock's trading volume",
        ],
        correctIndex: 1,
        explanation:
          "The P/E (Price-to-Earnings) ratio shows how much investors are willing to pay per dollar of the company's earnings.",
      },
      {
        id: "fa-2",
        question: "What is a margin of safety?",
        options: [
          "A guaranteed profit",
          "The difference between intrinsic value and market price",
          "A type of investment account",
          "A risk management tool for banks",
        ],
        correctIndex: 1,
        explanation:
          "A margin of safety is the buffer between a stock's intrinsic value and its current market price, protecting against estimation errors.",
      },
    ],
  },

  // ─── Prompt Engineering Course ────────────────────────────────────────────
  "intro-prompt-engineering": {
    title: "Introduction to Prompt Engineering",
    questions: [
      {
        id: "pe-1",
        question: "What is prompt engineering?",
        options: [
          "Coding AI models from scratch",
          "Crafting inputs that guide LLMs to produce desired outputs",
          "Building computer hardware",
          "Writing traditional software code",
        ],
        correctIndex: 1,
        explanation:
          "Prompt engineering is the skill of creating effective inputs (prompts) to get better results from large language models.",
      },
      {
        id: "pe-2",
        question: "Why is being specific important in prompts?",
        options: [
          "It isn't important",
          "Vague prompts get vague results",
          "It makes the prompt shorter",
          "It costs less tokens",
        ],
        correctIndex: 1,
        explanation:
          "Specific prompts provide clear instructions that help the model understand exactly what you want.",
      },
      {
        id: "pe-3",
        question: "What should you do if your first prompt doesn't give good results?",
        options: [
          "Give up",
          "Try a different AI model",
          "Iterate and refine your prompt",
          "Use more technical jargon",
        ],
        correctIndex: 2,
        explanation:
          "Iteration is key — your first prompt is rarely your best. Refine based on what you received.",
      },
    ],
  },
  "core-prompting-techniques": {
    title: "Core Prompting Techniques",
    questions: [
      {
        id: "cpt-1",
        question: "What is zero-shot prompting?",
        options: [
          "Using no examples in your prompt",
          "Asking the model to not respond",
          "Using only one example",
          "Turning off the AI",
        ],
        correctIndex: 0,
        explanation:
          "Zero-shot prompting means giving the model a task with no examples, relying on its pre-trained knowledge.",
      },
      {
        id: "cpt-2",
        question: "When should you use chain-of-thought prompting?",
        options: [
          "For simple classification tasks",
          "For math, logic, and complex reasoning tasks",
          "For creative writing",
          "For translation tasks",
        ],
        correctIndex: 1,
        explanation:
          "Chain-of-thought prompting asks the model to show its reasoning step by step, which improves accuracy for complex tasks.",
      },
      {
        id: "cpt-3",
        question: "What is few-shot prompting?",
        options: [
          "Using very few words",
          "Providing examples of the desired input-output pattern",
          "Asking short questions",
          "Using a small model",
        ],
        correctIndex: 1,
        explanation:
          "Few-shot prompting provides several examples to show the model the pattern you want before asking for new output.",
      },
    ],
  },
  "structured-outputs": {
    title: "Structured Outputs & Templates",
    questions: [
      {
        id: "so-1",
        question: "Why is it important to specify output format in prompts?",
        options: [
          "It isn't important",
          "To ensure consistent, usable outputs",
        ],
        correctIndex: 1,
        explanation:
          "Specifying format ensures you get outputs that are consistent and ready to use without reformatting.",
      },
      {
        id: "so-2",
        question: "What is a prompt template?",
        options: [
          "A single-use prompt",
          "A reusable framework that can be filled with different variables",
          "A template for the AI model's responses",
          "A coding template",
        ],
        correctIndex: 1,
        explanation:
          "Prompt templates are reusable frameworks with placeholders that can be customized for different situations.",
      },
    ],
  },
};
