import type { LessonQuiz } from "../quizzes";

export const PYTHON_MODULE_1_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Lesson 1: Hello, Python! ─────────────────────────────────────────────
  "hello-world-python": {
    title: "Lesson 1: Hello, Python! Setup & Your First Program",
    questions: [
      {
        id: "hw-1",
        question: "What will the following code output to the terminal?\n\nprint('Hello, Python!')",
        options: [
          "'Hello, Python!'",
          "Hello, Python!",
          "print('Hello, Python!')",
          "Error: missing semicolon",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`print('Hello, Python!')` writes the string without surrounding quote characters to stdout.\nPython does not require semicolons.",
      },
      {
        id: "hw-2",
        question: "What is the output of the following code?\n\n# print('Apple')\nprint('Banana') # print('Cherry')",
        options: [
          "Apple\\nBanana\\nCherry",
          "Banana",
          "Apple Banana",
          "Banana Cherry",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\nLine 1 starts with `#` so the entire line is ignored.\nLine 2 executes `print('Banana')` and ignores `# print('Cherry')` after the hash.",
      },
      {
        id: "hw-3",
        question: "What will the following code output?\n\nprint('Python', '3.12', sep='-')",
        options: [
          "Python 3.12",
          "Python-3.12",
          "Python--3.12",
          "Python, 3.12",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`print('Python', '3.12', sep='-')` replaces the default single-space separator with a hyphen `-`, producing `Python-3.12`.",
      },
      {
        id: "hw-4",
        question: "What is the output of running this code?\n\nprint('Alpha', end=' -> ')\nprint('Beta')",
        options: [
          "Alpha\\nBeta",
          "Alpha -> Beta",
          "Alpha ->\\nBeta",
          "AlphaBeta",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`print('Alpha', end=' -> ')` replaces the default newline `\\n` with `' -> '`.\nThe next `print('Beta')` outputs on the exact same line: `Alpha -> Beta`.",
      },
      {
        id: "hw-5",
        question: "What will happen when executing this snippet?\n\nPrint('Hello World')",
        options: [
          "Outputs: Hello World",
          "Raises NameError: name 'Print' is not defined",
          "Outputs: None",
          "Raises SyntaxError: invalid keyword",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\nPython is case-sensitive: built-in functions are lowercase.\n`Print(...)` with capital P causes `NameError: name 'Print' is not defined`.",
      },
      {
        id: "hw-6",
        question: "What error will the interpreter throw on this code?\n\n  print('Indented')",
        options: [
          "IndentationError: unexpected indent",
          "SyntaxError: invalid whitespace",
          "TypeError: cannot indent top-level",
          "No error: Python ignores leading spaces",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython top-level code cannot have unexpected leading indentation.\nRunning `  print('Indented')` raises `IndentationError: unexpected indent`.",
      },
      {
        id: "hw-7",
        question: "What does this multi-line string code print?\n\nmsg = '''Line 1\nLine 2'''\nprint(len(msg.splitlines()))",
        options: ["1", "2", "3", "0"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\nTriple quotes `'''...'''` create multi-line strings preserving newlines.\n`msg.splitlines()` yields `['Line 1', 'Line 2']` with length 2.",
      },
      {
        id: "hw-8",
        question: "What is the result of running:\n\nprint('A', 'B', 'C', sep='+', end='!')",
        options: [
          "A+B+C!",
          "A B C!",
          "A+B+C",
          "+A+B+C!",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`sep='+'` joins elements with `+` -> `'A+B+C'`.\n`end='!'` appends `!` instead of a newline -> `A+B+C!`.",
      },
      {
        id: "hw-9",
        question: "What will the following code produce?\n\nx = 10\n# x = x + 5\nx = x * 2\nprint(x)",
        options: ["10", "30", "20", "25"],
        correctIndex: 2,
        explanation:
          "Code walkthrough:\n`x = 10`\nLine 2 is commented out (`# x = x + 5`).\n`x = x * 2` multiplies 10 by 2 = 20.\n`print(x)` outputs 20.",
      },
      {
        id: "hw-10",
        question: "What is the return value of the `print()` function?\n\nres = print('Test')\nprint(res)",
        options: ["'Test'", "0", "None", "True"],
        correctIndex: 2,
        explanation:
          "Code walkthrough:\n`print('Test')` writes to stdout and returns the singleton `None`.\nAssigning `res = print('Test')` sets `res` to `None`.",
      },
      {
        id: "hw-11",
        question: "Which command runs a Python script named `app.py` from the shell?",
        options: [
          "python app.py",
          "run app.py",
          "execute app.py",
          "python::app.py",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nTo invoke the Python interpreter on a script file from the terminal:\n`python app.py` (or `python3 app.py` on Linux/macOS).",
      },
      {
        id: "hw-12",
        question: "What is the output of this code?\n\nprint(1, 2, 3)\nprint(4, 5)",
        options: [
          "1 2 3\\n4 5",
          "1 2 3 4 5",
          "12345",
          "(1, 2, 3)\\n(4, 5)",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nEach `print()` call defaults to `sep=' '` and `end='\\n'`.\nFirst line: `1 2 3`.\nSecond line: `4 5`.",
      },
      {
        id: "hw-13",
        question: "What does this escape code produce?\n\nprint('Line A\\nLine B\\tTabbed')",
        options: [
          "Line A and Line B on separate lines, with Tabbed indented by a tab",
          "Line A\\nLine B\\tTabbed literally",
          "SyntaxError: unknown escape sequence",
          "Line A Line B Tabbed on one line",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`\\n` inserts a newline character.\n`\\t` inserts a horizontal tab space.",
      },
      {
        id: "hw-14",
        question: "What does the following statement print?\n\nimport sys\nprint(type(sys.version))",
        options: [
          "<class 'str'>",
          "<class 'float'>",
          "<class 'int'>",
          "<class 'tuple'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`sys.version` is a string containing the Python version number and build metadata, so its type is `<class 'str'>`.",
      },
      {
        id: "hw-15",
        question: "What is the output of this block?\n\nif True:\n    x = 'Inside'\nprint(x)",
        options: [
          "Inside",
          "NameError: x is not defined",
          "None",
          "UnboundLocalError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python, `if` statements do NOT create a new local variable scope (unlike functions).\n`x` declared inside `if True:` is accessible at the module scope.",
      },
      {
        id: "hw-16",
        question: "What will `print('Hello', end='')` followed by `print('World')` print?",
        options: [
          "HelloWorld",
          "Hello World",
          "Hello\\nWorld",
          "Error",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`end=''` removes the trailing newline completely.\nThe subsequent `print('World')` starts immediately after 'Hello', outputting `HelloWorld`.",
      },
      {
        id: "hw-17",
        question: "What does the following statement output?\n\nprint('A', 'B', 'C', sep='*', end='!')",
        options: [
          "A*B*C!",
          "A B C!",
          "A*B*C\\n!",
          "*A*B*C*!",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`sep='*'` separates each positional argument with an asterisk.\n`end='!'` appends an exclamation mark instead of a newline, producing `A*B*C!`.",
      },
      {
        id: "hw-18",
        question: "What will this multi-line print statement output?\n\nprint('''Alpha\nBeta''')",
        options: [
          "Alpha\\nBeta",
          "Alpha Beta",
          "'''Alpha\\nBeta'''",
          "SyntaxError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nTriple-quoted strings (`'''` or `\"\"\"`) preserve multi-line raw structure including newlines across lines.",
      },
      {
        id: "hw-19",
        question: "What is the output of the following escaped string?\n\nprint('Path: C:\\\\new\\\\test')",
        options: [
          "Path: C:\\new\\test",
          "Path: C:\\\\new\\\\test",
          "Path: C:\\n\\t",
          "SyntaxError: invalid escape",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nEach `\\\\` escapes the backslash character to output a single literal `\\`.\n`C:\\\\new\\\\test` outputs `C:\\new\\test`.",
      },
      {
        id: "hw-20",
        question: "What will running `print(type(print))` output?",
        options: [
          "<class 'builtin_function_or_method'>",
          "<class 'function'>",
          "<class 'type'>",
          "<class 'str'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`print` is an internal CPython built-in function, which Python inspects as `<class 'builtin_function_or_method'>`.",
      },
    ],
  },

  // ─── Lesson 2: Variables & Basic I/O ─────────────────────────────────────
  "variables-io": {
    title: "Lesson 2: Variables & Basic I/O",
    questions: [
      {
        id: "v-1",
        question: "What is the output of the following code?\n\nx = '5'\ny = 10\nprint(int(x) + y)",
        options: ["'510'", "15", "TypeError", "'15'"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`x` is string `'5'`.\n`int(x)` casts `'5'` to integer 5.\n`5 + 10` evaluates to integer `15`.",
      },
      {
        id: "v-2",
        question: "What will this code print?\n\na, b = 10, 20\na, b = b, a + b\nprint(a, b)",
        options: ["20 30", "10 20", "20 20", "30 20"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nRight-hand side evaluated first: `(b, a + b)` -> `(20, 10 + 20)` -> `(20, 30)`.\nAssigned to `a, b`: `a = 20`, `b = 30`.",
      },
      {
        id: "v-3",
        question: "What does this code output?\n\nx = 100\nx = 'Hundred'\nprint(type(x))",
        options: [
          "<class 'int'>",
          "<class 'str'>",
          "TypeError: cannot change type",
          "<class 'object'>",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\nPython is dynamically typed: variables point to objects.\nReassigning `x` to `'Hundred'` makes `type(x)` return `<class 'str'>`.",
      },
      {
        id: "v-4",
        question: "What will `print(type(3 / 1))` output in Python 3?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\nIn Python 3, the `/` true division operator always returns a `float`.\n`3 / 1` produces `3.0`, whose type is `<class 'float'>`.",
      },
      {
        id: "v-5",
        question: "What is the output of this code?\n\nval = bool(0) + bool('False')\nprint(val)",
        options: ["0", "1", "2", "False"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`bool(0)` is `False` (int 0).\n`bool('False')` is `True` (non-empty string is truthy).\n`False + True` evaluates as `0 + 1 = 1`.",
      },
      {
        id: "v-6",
        question: "What will this snippet output?\n\na = b = [1, 2]\na.append(3)\nprint(b)",
        options: ["[1, 2]", "[1, 2, 3]", "None", "TypeError"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`a = b = [1, 2]` points both `a` and `b` to the same list in memory.\nMutating `a.append(3)` mutates that shared list, so `b` prints `[1, 2, 3]`.",
      },
      {
        id: "v-7",
        question: "What does this input simulation output?\n\n# User enters: 25\nage = input('Age: ')\nprint(type(age))",
        options: [
          "<class 'int'>",
          "<class 'str'>",
          "<class 'float'>",
          "<class 'input'>",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`input()` always returns a string (`str`), even if the user typed numeric characters.\nTo get an integer, you must explicitly call `int(age)`.",
      },
      {
        id: "v-8",
        question: "What is the output of this f-string formatting?\n\npi = 3.14159\nprint(f'{pi:.2f}')",
        options: ["3.14", "3.14159", "3.1", "3.142"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`{pi:.2f}` formats the float with 2 digits after the decimal point: `'3.14'`.",
      },
      {
        id: "v-9",
        question: "What will `print(int(float('7.9')))` output?",
        options: ["7", "8", "7.9", "ValueError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`float('7.9')` parses string `'7.9'` to float `7.9`.\n`int(7.9)` truncates decimal digits towards 0, resulting in integer `7`.",
      },
      {
        id: "v-10",
        question: "What happens when executing:\n\nint('7.9')",
        options: [
          "Returns 7",
          "Returns 8",
          "Raises ValueError: invalid literal for int() with base 10: '7.9'",
          "Returns None",
        ],
        correctIndex: 2,
        explanation:
          "Code walkthrough:\n`int()` cannot parse strings with decimal dots directly; it expects whole number strings like `'7'`.\nIt raises `ValueError`.",
      },
      {
        id: "v-11",
        question: "What is the output of this identity comparison?\n\nx = 256\ny = 256\nprint(x is y)",
        options: ["True", "False", "None", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCPython interns small integers in range [-5, 256].\nBoth `x` and `y` reference the exact same cached integer object in memory, so `x is y` is `True`.",
      },
      {
        id: "v-12",
        question: "What is the output of the following code?\n\nname = 'Alice'\nage = 24\nprint(f'{name=}, {age=}')",
        options: [
          "name='Alice', age=24",
          "Alice, 24",
          "{name=Alice}, {age=24}",
          "SyntaxError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython 3.8+ f-string debugging syntax `f'{var=}'` prints the variable name, `=`, and its repr: `name='Alice', age=24`.",
      },
      {
        id: "v-13",
        question: "What does this code print?\n\nx = None\nprint(x is None, x == None)",
        options: [
          "True True",
          "True False",
          "False True",
          "False False",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`None` is a singleton object in Python.\nPEP 8 recommends `is None`, but both `is None` and `== None` evaluate to `True`.",
      },
      {
        id: "v-14",
        question: "What is the output of:\n\nx, *y, z = [10, 20, 30, 40, 50]\nprint(y)",
        options: [
          "[20, 30, 40]",
          "(20, 30, 40)",
          "20, 30, 40",
          "[10, 20, 30, 40, 50]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nExtended iterable unpacking assigns `x = 10`, `z = 50`, and packs remaining middle values into list `y = [20, 30, 40]`.",
      },
      {
        id: "v-15",
        question: "What will `print(type(1_000_000))` output in Python 3.6+?",
        options: [
          "<class 'int'>",
          "<class 'str'>",
          "SyntaxError: invalid underscore in number",
          "<class 'float'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython allows underscores `_` in numeric literals for readability.\n`1_000_000` is parsed as integer `1000000` of `<class 'int'>`.",
      },
      {
        id: "v-16",
        question: "What does this code print?\n\nfirst, second = 'AB'\nprint(first, second)",
        options: ["A B", "'AB'", "['A', 'B']", "ValueError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nStrings are unpackable 2-character iterables here.\n`first` gets `'A'`, `second` gets `'B'`, printed as `A B`.",
      },
      {
        id: "v-17",
        question: "What is the data type of `z = 3 + 4j` in Python?\n\nprint(type(3 + 4j))",
        options: [
          "<class 'complex'>",
          "<class 'float'>",
          "<class 'imaginary'>",
          "SyntaxError: invalid syntax",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython has built-in support for complex numbers where `j` represents the imaginary unit $\\sqrt{-1}$, classified under `<class 'complex'>`.",
      },
      {
        id: "v-18",
        question: "What is the output of checking single-item tuples?\n\nx = (42)\ny = (42,)\nprint(type(x), type(y))",
        options: [
          "<class 'int'> <class 'tuple'>",
          "<class 'tuple'> <class 'tuple'>",
          "<class 'int'> <class 'int'>",
          "<class 'tuple'> <class 'int'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nParentheses alone do not create a tuple; a trailing comma is required.\n`(42)` is integer 42; `(42,)` is a 1-element tuple.",
      },
      {
        id: "v-19",
        question: "What will `print(isinstance(True, int))` output?",
        options: [
          "True",
          "False",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python, `bool` is an explicit subclass of `int` (`issubclass(bool, int) == True`).\nTherefore, `isinstance(True, int)` evaluates to `True`.",
      },
      {
        id: "v-20",
        question: "What is the output of mutating aliased variables?\n\na = b = [10, 20]\na.append(30)\nprint(b)",
        options: [
          "[10, 20, 30]",
          "[10, 20]",
          "None",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nChained assignment `a = b = [10, 20]` binds both variables to the exact same list in memory.\nMutating `a` via `.append(30)` is reflected in `b`.",
      },
    ],
  },

  // ─── Lesson 3: Strings Mastery ───────────────────────────────────────────
  "strings-mastery": {
    title: "Lesson 3: Strings & String Methods Mastery",
    questions: [
      {
        id: "s-1",
        question: "What is the output of this slicing code?\n\ns = 'Python'\nprint(s[1:4])",
        options: ["'yth'", "'ytho'", "'Pyt'", "'tho'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`s[1:4]` starts at index 1 ('y') up to but excluding index 4 ('o'): index 1 ('y'), 2 ('t'), 3 ('h') -> `'yth'`.",
      },
      {
        id: "s-2",
        question: "What will the following code output?\n\ns = 'Developer'\nprint(s[::-1])",
        options: ["'repoleveD'", "'Developer'", "'r'", "'D'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSlice step `-1` traverses the string backwards from the last character to the first, reversing it: `'repoleveD'`.",
      },
      {
        id: "s-3",
        question: "What happens when running this code?\n\ntext = 'hello'\ntext[0] = 'H'",
        options: [
          "text becomes 'Hello'",
          "Raises TypeError: 'str' object does not support item assignment",
          "text becomes ('H', 'e', 'l', 'l', 'o')",
          "Raises IndexError",
        ],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\nPython strings are immutable.\nAttempting in-place character assignment `text[0] = 'H'` throws `TypeError`.",
      },
      {
        id: "s-4",
        question: "What is the output of this code?\n\ns = '  python 3.12  '\nprint(s.strip().upper())",
        options: [
          "'PYTHON 3.12'",
          "'  PYTHON 3.12  '",
          "'python 3.12'",
          "'PYTHON3.12'",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`s.strip()` strips whitespace -> `'python 3.12'`.\n`.upper()` transforms to uppercase -> `'PYTHON 3.12'`.",
      },
      {
        id: "s-5",
        question: "What does this split code produce?\n\nitems = 'apple,banana,,cherry'.split(',')\nprint(len(items))",
        options: ["3", "4", "2", "Error"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`split(',')` splits at every comma, including between consecutive commas: `['apple', 'banana', '', 'cherry']` (4 elements).",
      },
      {
        id: "s-6",
        question: "What will this join expression output?\n\nprint('-'.join(['2026', '08', '18']))",
        options: [
          "2026-08-18",
          "['2026-08-18']",
          "-2026-08-18-",
          "2026 08 18",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'-'.join(list)` joins elements with `'-'` as delimiter -> `'2026-08-18'`.",
      },
      {
        id: "s-7",
        question: "What does `find()` vs `index()` do when a substring is not found?\n\ns = 'coding'\nprint(s.find('z'))",
        options: ["-1", "ValueError", "None", "False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`s.find('z')` returns `-1` on failure.\nIn contrast, `s.index('z')` would raise a `ValueError`.",
      },
      {
        id: "s-8",
        question: "What does this replace code print?\n\ntext = 'banana'\nprint(text.replace('a', 'o', 2))",
        options: ["'bonona'", "'bonana'", "'banana'", "'bonono'"],
        correctIndex: 1,
        explanation:
          "Code walkthrough:\n`text.replace('a', 'o', 2)` replaces only the first 2 occurrences of 'a' with 'o' -> `'bonana'`.",
      },
      {
        id: "s-9",
        question: "What is the output of this format check?\n\ntext = 'agent123'\nprint(text.isalnum(), text.isalpha())",
        options: [
          "True False",
          "True True",
          "False False",
          "False True",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`isalnum()` is True (contains only letters and digits).\n`isalpha()` is False (contains digits '123').",
      },
      {
        id: "s-10",
        question: "What does this raw string print?\n\npath = r'C:\\Users\\notes\\new.txt'\nprint('\\n' in path)",
        options: ["False", "True", "SyntaxError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPrefix `r` creates a raw string literal where `\\n` is treated as two literal characters (`\\` and `n`), not a newline byte.",
      },
      {
        id: "s-11",
        question: "What does the following code print?\n\nword = 'Python'\nprint(word.center(10, '*'))",
        options: [
          "'**Python**'",
          "'***Python*'",
          "'*Python***'",
          "'Python****'",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`center(10, '*')` pads total width to 10 characters with `'*'`: 2 stars on each side -> `'**Python**'`.",
      },
      {
        id: "s-12",
        question: "What will `print('mississippi'.count('ss'))` output?",
        options: ["2", "4", "1", "3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`count('ss')` finds non-overlapping occurrences of `'ss'` at indices 2..3 and 5..6, returning 2.",
      },
      {
        id: "s-13",
        question: "What is the output of this code?\n\nprint('hello world'.title())",
        options: [
          "Hello World",
          "Hello world",
          "HELLO WORLD",
          "hello world",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`title()` capitalizes the first letter of each word -> `'Hello World'`.",
      },
      {
        id: "s-14",
        question: "What does `partition()` return in Python?\n\ns = 'user@example.com'\nprint(s.partition('@'))",
        options: [
          "('user', '@', 'example.com')",
          "['user', 'example.com']",
          "('user', 'example.com')",
          "{'user': 'example.com'}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`partition(sep)` splits at the first separator into a 3-tuple: `(head, sep, tail)` -> `('user', '@', 'example.com')`.",
      },
      {
        id: "s-15",
        question: "What does this slice print?\n\nmsg = 'ABCDEFGH'\nprint(msg[::2])",
        options: ["'ACEG'", "'BDFH'", "'ABCDEFGH'", "'AH'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`msg[::2]` steps through every second character: index 0 ('A'), 2 ('C'), 4 ('E'), 6 ('G') -> `'ACEG'`.",
      },
      {
        id: "s-16",
        question: "What is the output of this zfill call?\n\nprint('42'.zfill(5))",
        options: ["'00042'", "'42000'", "'00420'", "'  042'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`zfill(5)` left-pads the string with zeros until reaching width 5 -> `'00042'`.",
      },
      {
        id: "s-17",
        question: "What does tuple-based `startswith()` evaluate to?\n\nprint('Python 3.12'.startswith(('Java', 'Go', 'Py')))",
        options: [
          "True",
          "False",
          "TypeError: tuple not allowed",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`startswith()` accepts a tuple of prefix choices and returns `True` if any prefix matches (`'Py'` matches `'Python 3.12'`).",
      },
      {
        id: "s-18",
        question: "What is the output of `removesuffix()` in Python 3.9+?\n\nfilename = 'report.final.pdf'\nprint(filename.removesuffix('.pdf'))",
        options: [
          "'report.final'",
          "'report'",
          "'report.final.pdf'",
          "AttributeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`removesuffix('.pdf')` cleanly strips the exact trailing suffix `.pdf` without affecting dots earlier in the filename -> `'report.final'`.",
      },
      {
        id: "s-19",
        question: "What does string alignment format specifier `{:>8}` do?\n\nprint(f\"{'Dev':>8}\")",
        options: [
          "'     Dev'",
          "'Dev     '",
          "'   Dev  '",
          "'>8Dev'",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`>` indicates right alignment within a total field width of 8 characters (5 leading space pads + 3 letters 'Dev').",
      },
      {
        id: "s-20",
        question: "What is the type of encoded bytes in Python 3?\n\nraw = 'Python'.encode('utf-8')\nprint(type(raw), raw)",
        options: [
          "<class 'bytes'> b'Python'",
          "<class 'str'> 'Python'",
          "<class 'bytearray'> [80, 121, 116, 104, 111, 110]",
          "<class 'int'> 6",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`.encode('utf-8')` transforms unicode string to an immutable binary sequence of `<class 'bytes'>` prefixed with `b'...'`.",
      },
    ],
  },

  // ─── Lesson 4: Operators & Expressions ───────────────────────────────────
  "operators-expressions": {
    title: "Lesson 4: Operators & Expressions",
    questions: [
      {
        id: "o-1",
        question: "What is the output of this floor division code?\n\nprint(17 // 5, -17 // 5)",
        options: [
          "3 -4",
          "3 -3",
          "3.4 -3.4",
          "3 -3.4",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`//` rounds down to the nearest integer towards negative infinity.\n`17 // 5 = 3`\n`-17 // 5 = -3.4` rounded down = `-4`.",
      },
      {
        id: "o-2",
        question: "What does this power and modulo code print?\n\nprint(2 ** 3 ** 2)",
        options: ["512", "64", "36", "18"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe exponentiation operator `**` has right-to-left associativity: `3 ** 2 = 9`, then `2 ** 9 = 512`.",
      },
      {
        id: "o-3",
        question: "What will the following code output?\n\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)",
        options: [
          "True False",
          "True True",
          "False True",
          "False False",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`a == b` compares values (both are `[1, 2]`) -> `True`.\n`a is b` compares memory identity (`id(a) == id(b)`) -> `False` because two separate list objects were created.",
      },
      {
        id: "o-4",
        question: "What does this chained comparison evaluate to?\n\nx = 5\nprint(1 < x < 10)",
        options: ["True", "False", "TypeError", "1"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`1 < x < 10` is evaluated as `(1 < 5) and (5 < 10)` -> `True and True` -> `True`.",
      },
      {
        id: "o-5",
        question: "What is the output of this short-circuit expression?\n\nprint([] or 'Fallback')",
        options: ["'Fallback'", "[]", "True", "False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`or` returns the first truthy operand. `[]` is falsy, so it evaluates and returns `'Fallback'`.",
      },
      {
        id: "o-6",
        question: "What is the output of this `and` expression?\n\nprint('Cat' and 'Dog')",
        options: ["'Dog'", "'Cat'", "True", "False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`and` returns the first falsy value, or the last truthy value if all are truthy.\nBoth `'Cat'` and `'Dog'` are truthy, returning `'Dog'`.",
      },
      {
        id: "o-7",
        question: "What will this bitwise code print?\n\nprint(5 & 3, 5 | 3, 5 ^ 3)",
        options: [
          "1 7 6",
          "1 8 2",
          "5 3 0",
          "0 7 6",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n5 = `101` in binary; 3 = `011` in binary.\n`5 & 3` (AND) = `001` (1)\n`5 | 3` (OR) = `111` (7)\n`5 ^ 3` (XOR) = `110` (6).",
      },
      {
        id: "o-8",
        question: "What is the output of the walrus operator snippet?\n\nif (n := len('Python')) > 4:\n    print(n * 2)",
        options: ["12", "6", "True", "SyntaxError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`:=` (walrus operator) assigns `n = len('Python')` (6) in-place.\n`6 > 4` is True, printing `6 * 2 = 12`.",
      },
      {
        id: "o-9",
        question: "What will the following code output?\n\nx = 10\nx += 5 * 2\nprint(x)",
        options: ["20", "30", "25", "10"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nRight-hand side `5 * 2` is evaluated first (= 10).\n`x += 10` adds 10 to 10 = 20.",
      },
      {
        id: "o-10",
        question: "What is the result of `10 % -3` in Python?\n\nprint(10 % -3)",
        options: ["-2", "1", "-1", "2"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python, modulo result shares the sign of the divisor (-3).\n`10 = (-3 * -4) + (-2)`, so `10 % -3 = -2`.",
      },
      {
        id: "o-11",
        question: "What is the output of this membership check?\n\nnums = [1, 2, [3, 4]]\nprint(3 in nums)",
        options: ["False", "True", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`3` is not a direct element of `nums` (`nums` contains 1, 2, and the list `[3, 4]`).\n`3 in nums` evaluates to `False`.",
      },
      {
        id: "o-12",
        question: "What does this code print?\n\nprint(True == 1, False == 0, True + True)",
        options: [
          "True True 2",
          "False False 2",
          "True True True",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`bool` is a subclass of `int` in Python.\n`True` has integer value 1, `False` has 0. `1 + 1 = 2`.",
      },
      {
        id: "o-13",
        question: "What is the output of this bit-shift operation?\n\nprint(1 << 3, 16 >> 2)",
        options: ["8 4", "3 4", "8 8", "16 4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`1 << 3` shifts binary 1 left by 3 places: `1 * 2³ = 8`.\n`16 >> 2` shifts 16 right by 2 places: `16 // 4 = 4`.",
      },
      {
        id: "o-14",
        question: "What does `not 0 and 5` evaluate to?\n\nprint(not 0 and 5)",
        options: ["5", "True", "0", "False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`0` is falsy, so `not 0` is `True`.\n`True and 5` evaluates and returns the last truthy value: `5`.",
      },
      {
        id: "o-15",
        question: "What is the output of:\n\na = 10\nb = 20\nprint('YES' if a > b else 'NO')",
        options: ["NO", "YES", "True", "False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn the ternary expression `'YES' if 10 > 20 else 'NO'`, `10 > 20` is False, returning `'NO'`.",
      },
      {
        id: "o-16",
        question: "What is the output of:\n\nprint((2 + 3) * (4 - 1))",
        options: ["15", "11", "9", "14"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nParentheses take top precedence:\n`(2 + 3) = 5`\n`(4 - 1) = 3`\n`5 * 3 = 15`.",
      },
      {
        id: "o-17",
        question: "What does bitwise NOT `~x` produce in Python?\n\nprint(~5)",
        options: [
          "-6",
          "-5",
          "4",
          "-4",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nBitwise invert `~x` is defined as `-(x + 1)`. For 5, `-(5 + 1) = -6`.",
      },
      {
        id: "o-18",
        question: "What does list repetition multiplication produce?\n\nitems = [0] * 4\nprint(items)",
        options: [
          "[0, 0, 0, 0]",
          "[0, 4]",
          "0",
          "[4]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`[0] * 4` repeats the elements inside the list 4 times, creating `[0, 0, 0, 0]`.",
      },
      {
        id: "o-19",
        question: "What will `print(x is not y)` output for distinct lists with identical values?\n\nx = [1, 2]\ny = [1, 2]\nprint(x is not y)",
        options: [
          "True",
          "False",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`x` and `y` are two distinct list objects in memory (`id(x) != id(y)`). `x is not y` evaluates to `True`.",
      },
      {
        id: "o-20",
        question: "How do tuples compare with relational operators?\n\nprint((1, 2, 5) < (1, 2, 40))",
        options: [
          "True",
          "False",
          "TypeError",
          "(1, 2, 5)",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nTuples are compared element-by-element lexicographically (1==1, 2==2, 5 < 40 -> `True`).",
      },
    ],
  },
};
