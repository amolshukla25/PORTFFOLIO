import type { LessonQuiz } from "../quizzes";

export const PYTHON_MODULE_6_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Lesson 20: File Handling ─────────────────────────────────────────────
  "file-handling": {
    title: "Lesson 20: File I/O, Context Managers & CSV Processing",
    questions: [
      {
        id: "fh-1",
        question: "What is the primary advantage of using `with open(...)` context manager?\n\nwith open('data.txt', 'r') as f:\n    content = f.read()",
        options: [
          "Guarantees the file descriptor is safely closed automatically upon block exit, even if exceptions occur",
          "Reads the file 100x faster",
          "Encrypts the file contents",
          "Prevents any other program from reading the disk",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`with open(...)` automatically calls `f.close()` upon exiting the block, preventing resource leaks.",
      },
      {
        id: "fh-2",
        question: "What is the difference between `'w'` and `'a'` file modes?\n\nopen('log.txt', 'w')\nopen('log.txt', 'a')",
        options: [
          "`'w'` truncates and overwrites existing file content; `'a'` appends new data to the end without deleting existing content",
          "`'w'` is for words; `'a'` is for arrays",
          "`'a'` creates a new file but `'w'` cannot",
          "`'w'` is read-only",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'w'` (write) erases and rewrites the file from offset 0; `'a'` (append) appends writes to the end of the file.",
      },
      {
        id: "fh-3",
        question: "What does `file.readlines()` return?\n\n# data.txt has 3 lines\nwith open('data.txt') as f:\n    lines = f.readlines()\nprint(type(lines), len(lines))",
        options: [
          "<class 'list'> 3",
          "<class 'str'> 3",
          "<class 'generator'> 3",
          "<class 'tuple'> 3",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`readlines()` reads all remaining lines into a Python `list` of strings, including newline characters.",
      },
      {
        id: "fh-4",
        question: "What is the most memory-efficient way to process a 10GB text file line-by-line in Python?\n\nwith open('large.log') as f:\n    for line in f:\n        process(line)",
        options: [
          "Iterating directly over file object `for line in f:` as a lazy iterator (O(1) memory)",
          "Using `f.read()`",
          "Using `f.readlines()`",
          "Loading into a pandas DataFrame",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFile objects are iterators that stream one line into RAM at a time via internal buffering, keeping memory usage constant.",
      },
      {
        id: "fh-5",
        question: "How do you read binary files (like images or PDFs) in Python?\n\nwith open('image.png', 'rb') as f:\n    data = f.read()",
        options: [
          "Pass mode `'rb'` (read binary), which returns a `bytes` object",
          "Pass mode `'r'`",
          "Pass mode `'b'`",
          "Binary files cannot be opened in Python",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'rb'` reads raw binary bytes (`bytes` class) rather than decoding text as UTF-8 string.",
      },
      {
        id: "fh-6",
        question: "Why should `encoding='utf-8'` always be explicitly specified when opening text files?\n\nopen('notes.txt', 'r', encoding='utf-8')",
        options: [
          "Prevents platform-dependent encoding bugs (e.g. Windows cp1252 vs Unix UTF-8) when reading non-ASCII characters",
          "Compiles text to Unicode bytecode",
          "Compresses the file",
          "Required by Python syntax",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWithout explicit `encoding='utf-8'`, Python falls back to system defaults, causing `UnicodeDecodeError` across different OS platforms.",
      },
      {
        id: "fh-7",
        question: "What does `f.seek(0)` do?\n\nwith open('doc.txt', 'r') as f:\n    f.read()\n    f.seek(0)\n    second_read = f.read()",
        options: [
          "Resets the file read/write pointer back to byte offset 0 (start of file)",
          "Deletes byte 0",
          "Seeks the character '0'",
          "Closes the file",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`f.seek(offset)` moves the file position pointer. `f.seek(0)` rewinds back to the beginning of the file.",
      },
      {
        id: "fh-8",
        question: "What does `f.tell()` return?\n\nwith open('test.txt', 'w') as f:\n    f.write('Hello')\n    print(f.tell())",
        options: [
          "5 (the current integer byte cursor position in the file)",
          "0",
          "'Hello'",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`f.tell()` returns the current integer position of the file cursor (5 bytes written).",
      },
      {
        id: "fh-9",
        question: "What does `csv.DictReader` produce?\n\nimport csv\nwith open('users.csv') as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row['name'])",
        options: [
          "Maps each row to a dictionary using header row values as keys",
          "A list of lists",
          "A JSON string",
          "A tuple of column names",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`csv.DictReader` parses the CSV header and maps each subsequent row into a dictionary.",
      },
      {
        id: "fh-10",
        question: "How do you write rows safely using `csv.writer`?\n\nimport csv\nwith open('out.csv', 'w', newline='', encoding='utf-8') as f:\n    writer = csv.writer(f)\n    writer.writerow(['Name', 'Score'])\n    writer.writerow(['Amol', 98])",
        options: [
          "Pass `newline=''` to `open()` to prevent blank lines on Windows CSV writes",
          "Use json.dump()",
          "Add `\\r\\n` manually",
          "Omit encoding",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`newline=''` is mandatory in Python CSV file opening so the `csv` module controls line termination correctly without double newlines.",
      },
      {
        id: "fh-11",
        question: "What does `pathlib.Path` provide in modern Python 3.4+?\n\nfrom pathlib import Path\np = Path('data') / 'sub' / 'file.txt'\nprint(p.exists())",
        options: [
          "An object-oriented filesystem path abstraction supporting `/` path joining across OS platforms",
          "A string replacement for sys.path",
          "A disk formatting tool",
          "An FTP client",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pathlib.Path` provides clean object-oriented path manipulation with operators like `/` and methods like `.read_text()`.",
      },
      {
        id: "fh-12",
        question: "What does `Path('notes.txt').read_text(encoding='utf-8')` do?\n\nfrom pathlib import Path\ncontent = Path('notes.txt').read_text(encoding='utf-8')",
        options: [
          "Opens, reads full text content as a string, and closes the file in a single line",
          "Reads line 1 only",
          "Converts text to binary",
          "Creates a new empty file",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Path.read_text()` handles opening, reading, and closing automatically in one concise call.",
      },
      {
        id: "fh-13",
        question: "What happens when opening a non-existent file in `'r'` mode?\n\nopen('missing_file.txt', 'r')",
        options: [
          "Raises FileNotFoundError (subclass of OSError)",
          "Creates an empty file",
          "Returns None",
          "Freezes the thread",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nOpening a missing file in read mode raises `FileNotFoundError`.",
      },
      {
        id: "fh-14",
        question: "What does mode `'x'` do when opening a file in Python 3?\n\nopen('new_file.txt', 'x')",
        options: [
          "Exclusive creation: creates and opens the file for writing, but raises FileExistsError if the file already exists",
          "Executes the file as Python code",
          "Deletes the file",
          "Extracts an archive",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'x'` (exclusive mode) fails if the file exists, preventing accidental overwrite of existing files.",
      },
      {
        id: "fh-15",
        question: "What is `os.path.join('folder', 'sub', 'file.txt')`?\n\nimport os\npath = os.path.join('a', 'b', 'c.txt')",
        options: [
          "Constructs a path using the host OS separator (`\\` on Windows, `/` on Linux)",
          "Joins strings with comma",
          "Creates the directories on disk",
          "Returns a list of folders",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`os.path.join` constructs valid platform-independent file paths using appropriate directory separators.",
      },
      {
        id: "fh-16",
        question: "What does `f.flush()` do on an open writable file stream?\n\nwith open('stream.log', 'w') as f:\n    f.write('Event')\n    f.flush()",
        options: [
          "Forces internal memory buffers to write directly to operating system disk storage immediately",
          "Clears the file to 0 bytes",
          "Closes the file",
          "Deletes the log",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`flush()` flushes the internal I/O write buffer to disk without closing the file.",
      },
    ],
  },

  // ─── Lesson 21: Exception Handling ────────────────────────────────────────
  "exception-handling": {
    title: "Lesson 21: Exception Handling, Custom Exceptions & Robust Systems",
    questions: [
      {
        id: "eh-1",
        question: "What is the output of this try-except block?\n\ntry:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    res = 'Handled'\nprint(res)",
        options: ["'Handled'", "0", "ZeroDivisionError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`10 / 0` triggers `ZeroDivisionError`, which is caught by the `except` block: `res` becomes `'Handled'`.",
      },
      {
        id: "eh-2",
        question: "When does the `else` clause in a `try-except-else-finally` structure execute?\n\ntry:\n    x = 10 + 5\nexcept TypeError:\n    print('Err')\nelse:\n    print('Success')\nfinally:\n    print('Done')",
        options: [
          "Only when NO exceptions occurred in the `try` block",
          "Only when an exception was handled",
          "Every single time",
          "Only if `finally` is omitted",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe `else` block runs if and only if the `try` block executed completely without raising any exceptions.",
      },
      {
        id: "eh-3",
        question: "When does the `finally` block execute?\n\ntry:\n    f = open('data.txt')\nfinally:\n    print('Always runs')",
        options: [
          "Always runs unconditionally, whether an exception occurred or not (even across `return` or `break`)",
          "Runs only on exceptions",
          "Runs only if no error",
          "Runs only in debug mode",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`finally` is guaranteed to execute before the block exits under all circumstances, ensuring cleanup.",
      },
      {
        id: "eh-4",
        question: "How do you create a custom exception class in Python?\n\nclass InsufficientFundsError(Exception):\n    pass",
        options: [
          "Define a class that inherits from the built-in `Exception` (or `ValueError`) class",
          "Write `error InsufficientFundsError:`",
          "Inherit from `object` directly",
          "Use `@exception` decorator",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCustom exceptions subclass `Exception` (or specific standard exceptions) so they can be caught by standard exception handlers.",
      },
      {
        id: "eh-5",
        question: "What does `raise ... from original_error` achieve in Python 3 exception chaining?\n\ntry:\n    int('invalid')\nexcept ValueError as err:\n    raise CustomError('Failed') from err",
        options: [
          "Preserves the root-cause traceback (`__cause__`) for clear debugging",
          "Silences the original error",
          "Ignores CustomError",
          "Converts error to warning",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nExplicit exception chaining (`raise ... from err`) sets `__cause__`, displaying the full diagnostic chain in tracebacks.",
      },
      {
        id: "eh-6",
        question: "What is the output of catching multiple exception types in one tuple?\n\ndef parse(val):\n    try:\n        return int(val)\n    except (ValueError, TypeError):\n        return -1\nprint(parse('bad'), parse(None))",
        options: ["-1 -1", "ValueError TypeError", "None None", "-1 None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`except (ValueError, TypeError):` handles both string parse errors and null type errors, returning `-1` for both.",
      },
      {
        id: "eh-7",
        question: "What does a bare `raise` statement do inside an `except` block?\n\ntry:\n    do_work()\nexcept Exception:\n    log_error()\n    raise",
        options: [
          "Re-raises the exact active exception currently being handled",
          "Raises a new RuntimeError",
          "Suppresses the error",
          "Restarts the function",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nA bare `raise` without arguments re-raises the current exception with its original traceback intact.",
      },
      {
        id: "eh-8",
        question: "What is the base class of all non-system-exiting exceptions in Python?\n\nprint(issubclass(ValueError, Exception), issubclass(Exception, BaseException))",
        options: [
          "True True (`Exception` is the base for standard errors; `BaseException` is root)",
          "False True",
          "True False",
          "False False",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Exception` inherits from `BaseException` (which also roots `KeyboardInterrupt` and `SystemExit`). Catch `Exception` in business logic.",
      },
      {
        id: "eh-9",
        question: "What does `contextlib.suppress()` do?\n\nimport os\nfrom contextlib import suppress\nwith suppress(FileNotFoundError):\n    os.remove('non_existent.txt')",
        options: [
          "Silently catches and ignores the specified exception type within the `with` block",
          "Throws a warning",
          "Creates the missing file",
          "Deletes all files",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`suppress(FileNotFoundError)` provides a clean context manager equivalent to `try ... except FileNotFoundError: pass`.",
      },
      {
        id: "eh-10",
        question: "What will `assert x > 0, 'Must be positive'` raise if `x = -5`?\n\nx = -5\nassert x > 0, 'Must be positive'",
        options: [
          "AssertionError: Must be positive",
          "ValueError: Must be positive",
          "SyntaxError",
          "Silently ignored",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`assert condition, message` raises `AssertionError(message)` when the condition evaluates to False.",
      },
      {
        id: "eh-11",
        question: "What is Python's EAFP coding philosophy compared to LBYL?\n\n# EAFP: Easier to Ask for Forgiveness than Permission\n# LBYL: Look Before You Leap",
        options: [
          "EAFP prefers running code inside `try-except` blocks rather than preemptively checking with nested `if` conditions",
          "EAFP is forbidden in Python",
          "LBYL is faster in all scenarios",
          "EAFP only works for files",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPythonic code embraces EAFP: execute the optimistic path and handle exceptions cleanly if they occur.",
      },
      {
        id: "eh-12",
        question: "What is `ExceptionGroup` and `except*` in Python 3.11+?\n\ntry:\n    # asynchronous tasks\n    pass\nexcept* ValueError as eg:\n    pass",
        options: [
          "Syntax for raising and handling multiple independent exceptions concurrently (e.g. asyncio task groups)",
          "A list of strings",
          "A deprecated Python 2 feature",
          "A dictionary of errors",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython 3.11 introduced `ExceptionGroup` and `except*` to catch and handle subsets of concurrent exceptions.",
      },
      {
        id: "eh-13",
        question: "What does `traceback.format_exc()` return?\n\nimport traceback\ntry:\n    1 / 0\nexcept ZeroDivisionError:\n    tb_str = traceback.format_exc()",
        options: [
          "The full exception stack trace as a formatted string for logging",
          "The integer line number only",
          "None",
          "A list of variables",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`traceback.format_exc()` returns the entire formatted traceback string.",
      },
      {
        id: "eh-14",
        question: "What is the output of:\n\ndef get_val():\n    try:\n        return 1\n    finally:\n        return 2\nprint(get_val())",
        options: ["2", "1", "1 2", "SyntaxError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nA `return` inside `finally` overrides any return statement in `try`, returning `2`.",
      },
      {
        id: "eh-15",
        question: "What exception is raised when looking up a missing key in a dictionary vs index in a list?\n\nprint(issubclass(KeyError, LookupError), issubclass(IndexError, LookupError))",
        options: [
          "True True (both KeyError and IndexError inherit from LookupError)",
          "False True",
          "True False",
          "False False",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`LookupError` is the common base class for both `KeyError` (missing dict key) and `IndexError` (out-of-bounds sequence index).",
      },
      {
        id: "eh-16",
        question: "What happens when you catch `except:` without specifying an exception class?\n\ntry: ...\nexcept: ...",
        options: [
          "Catches ALL exceptions including `KeyboardInterrupt` (Ctrl+C) and `SystemExit`, making programs hard to terminate",
          "Only catches ValueError",
          "Raises a SyntaxError in Python 3",
          "Silently terminates Python",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nBare `except:` catches `BaseException`, intercepting Ctrl+C exits. Always use `except Exception:` instead.",
      },
    ],
  },

  // ─── Lesson 22: Iterators & Generators ────────────────────────────────────
  "iterators-generators": {
    title: "Lesson 22: Iterators, Generators, `yield` & Itertools",
    questions: [
      {
        id: "ig-1",
        question: "What does the `yield` keyword do inside a function?\n\ndef count_up():\n    yield 1\n    yield 2\n    yield 3",
        options: [
          "Turns the function into a generator function that pauses execution and yields values one-by-one lazily",
          "Permanently returns and destroys the function frame",
          "Creates a multithreaded process",
          "Converts numbers to strings",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`yield` produces a value and suspends function state, resuming on the next `next()` call.",
      },
      {
        id: "ig-2",
        question: "What exception is raised when an iterator has no more elements?\n\ng = (x for x in [1])\nnext(g)\nnext(g)",
        options: [
          "StopIteration",
          "IndexError",
          "GeneratorExit",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen an iterator is exhausted, calling `next()` raises `StopIteration`.",
      },
      {
        id: "ig-3",
        question: "What dunder methods must a class implement to satisfy the Python Iterator protocol?\n\nclass MyIterator:\n    def __iter__(self): return self\n    def __next__(self): ...",
        options: [
          "`__iter__()` and `__next__()`",
          "`__start__()` and `__step__()`",
          "`__len__()` and `__getitem__()`",
          "`__yield__()`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe iterator protocol requires `__iter__()` (returning the iterator itself) and `__next__()` (returning the next value or raising StopIteration).",
      },
      {
        id: "ig-4",
        question: "What does `yield from` do in Python 3.3+?\n\ndef sub_gen():\n    yield 'A'\n    yield 'B'\ndef main_gen():\n    yield from sub_gen()\n    yield 'C'\nprint(list(main_gen()))",
        options: [
          "['A', 'B', 'C'] (delegates iteration transparently to the sub-generator)",
          "[['A', 'B'], 'C']",
          "['C']",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`yield from iterable` delegates iteration directly to a sub-iterable, yielding all its elements seamlessly.",
      },
      {
        id: "ig-5",
        question: "What does `itertools.count(start=10, step=5)` produce?\n\nfrom itertools import count, islice\ngen = count(10, 5)\nprint(list(islice(gen, 3)))",
        options: ["[10, 15, 20]", "[10, 11, 12]", "[0, 5, 10]", "[15, 20, 25]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`count(10, 5)` generates an infinite arithmetic sequence: 10, 15, 20, 25... `islice(gen, 3)` takes first 3 -> `[10, 15, 20]`.",
      },
      {
        id: "ig-6",
        question: "What does `itertools.chain()` do?\n\nfrom itertools import chain\ncombined = list(chain([1, 2], ['a', 'b']))\nprint(combined)",
        options: [
          "[1, 2, 'a', 'b']",
          "[(1, 'a'), (2, 'b')]",
          "[[1, 2], ['a', 'b']]",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`chain(it1, it2, ...)` chains multiple iterables consecutively into one linear stream.",
      },
      {
        id: "ig-7",
        question: "What does `itertools.product()` compute?\n\nfrom itertools import product\nprint(list(product([1, 2], ['A', 'B'])))",
        options: [
          "[(1, 'A'), (1, 'B'), (2, 'A'), (2, 'B')]",
          "[(1, 'A'), (2, 'B')]",
          "[1, 2, 'A', 'B']",
          "[2, 'AB']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`product()` calculates Cartesian product of input iterables: `(1,'A'), (1,'B'), (2,'A'), (2,'B')`.",
      },
      {
        id: "ig-8",
        question: "What is the output of `itertools.permutations('AB')` vs `combinations('AB', 2)`?\n\nfrom itertools import permutations, combinations\nprint(list(permutations('AB')), list(combinations('AB', 2)))",
        options: [
          "[('A', 'B'), ('B', 'A')] [('A', 'B')]",
          "[('A', 'B')] [('A', 'B'), ('B', 'A')]",
          "['AB', 'BA'] ['AB', 'BA']",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`permutations` considers order: `('A','B')` and `('B','A')`.\n`combinations` ignores order: only `('A','B')`.",
      },
      {
        id: "ig-9",
        question: "What does `generator.send(value)` do?\n\ndef echo():\n    received = yield 'Ready'\n    yield f'Echo: {received}'\ng = echo()\nprint(next(g))\nprint(g.send('Hello'))",
        options: [
          "'Ready' followed by 'Echo: Hello'",
          "'Echo: None' 'Ready'",
          "TypeError",
          "'Hello'",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`next(g)` primes generator to first yield ('Ready'). `g.send('Hello')` sends 'Hello' into `received` and yields `'Echo: Hello'`.",
      },
      {
        id: "ig-10",
        question: "What does `itertools.accumulate([1, 2, 3, 4])` yield?\n\nfrom itertools import accumulate\nprint(list(accumulate([1, 2, 3, 4])))",
        options: [
          "[1, 3, 6, 10]",
          "[10]",
          "[1, 2, 3, 4]",
          "[24]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`accumulate()` produces running accumulated sums: 1, 1+2=3, 3+3=6, 6+4=10 -> `[1, 3, 6, 10]`.",
      },
      {
        id: "ig-11",
        question: "What does `next(iter, default)` do when iterator is exhausted?\n\ng = (x for x in [])\nprint(next(g, 'Fallback'))",
        options: ["'Fallback'", "StopIteration", "None", "[]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nProviding a second argument to `next(it, default)` returns the default value instead of raising `StopIteration`.",
      },
      {
        id: "ig-12",
        question: "What is the difference between an iterable and an iterator in Python?\n\n# iterable: has __iter__()\n# iterator: has __iter__() and __next__()",
        options: [
          "An iterable can produce an iterator (e.g. list, dict); an iterator is the stateful stream object yielding items with `next()`",
          "They are identical",
          "Iterators cannot be used in for-loops",
          "Iterables are stored on disk",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCalling `iter(my_list)` returns an iterator object maintaining current position cursor.",
      },
      {
        id: "ig-13",
        question: "What is the output of an infinite Fibonacci generator with `islice`?\n\nfrom itertools import islice\ndef fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\nprint(list(islice(fib(), 5)))",
        options: [
          "[0, 1, 1, 2, 3]",
          "[1, 1, 2, 3, 5]",
          "[0, 1, 2, 3, 4]",
          "Infinite loop",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`fib()` yields 0, 1, 1, 2, 3, 5... Taking the first 5 elements produces `[0, 1, 1, 2, 3]`.",
      },
      {
        id: "ig-14",
        question: "What does `g.close()` do to a running generator?\n\ndef gen():\n    try: yield 1\n    finally: print('Closed')\ng = gen()\nnext(g)\ng.close()",
        options: [
          "Raises GeneratorExit inside the generator and runs finally blocks",
          "Crashes Python",
          "Silently deletes g",
          "Returns None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`g.close()` throws `GeneratorExit` at the suspension point, allowing cleanup in `finally` blocks.",
      },
      {
        id: "ig-15",
        question: "What does `itertools.cycle('AB')` do?\n\nfrom itertools import cycle, islice\nprint(list(islice(cycle('AB'), 4)))",
        options: [
          "['A', 'B', 'A', 'B']",
          "['A', 'B']",
          "['AB', 'AB']",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`cycle()` infinitely repeats elements of the iterable in circular sequence.",
      },
      {
        id: "ig-16",
        question: "What is the memory consumption of generating 1,000,000 numbers with a generator vs a list?\n\nimport sys\ng = (x for x in range(1000000))\nl = [x for x in range(1000000)]\nprint(sys.getsizeof(g) < sys.getsizeof(l))",
        options: ["True", "False", "Equal", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nGenerator `g` takes tiny constant O(1) memory (~100 bytes) while list `l` allocates megabytes for 1 million integers.",
      },
    ],
  },

  // ─── Lesson 23: JSON Data ─────────────────────────────────────────────────
  "json-data": {
    title: "Lesson 23: JSON Serialization, APIs, Datetime & Custom Encoders",
    questions: [
      {
        id: "jd-1",
        question: "What is the difference between `json.dumps()` and `json.dump()`?\n\nimport json\njson.dumps(data)\njson.dump(data, file_obj)",
        options: [
          "`json.dumps()` serializes Python objects to a JSON string; `json.dump()` writes JSON directly to an open file stream",
          "`json.dumps()` is for lists only",
          "`json.dump()` is deprecated",
          "They are identical aliases",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe 's' in `dumps` stands for string (`dump to string`); `dump` writes to a file-like object.",
      },
      {
        id: "jd-2",
        question: "What is the difference between `json.loads()` and `json.load()`?\n\nimport json\njson.loads('{\"a\": 1}')\njson.load(file_obj)",
        options: [
          "`json.loads()` parses a JSON string into Python dict/list; `json.load()` reads and parses directly from a file object",
          "`json.loads()` is for files only",
          "`json.load()` converts to XML",
          "They are identical",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`json.loads()` ('load from string') parses JSON strings; `json.load()` reads from a file.",
      },
      {
        id: "jd-3",
        question: "How do Python primitives map to JSON types?\n\nimport json\nprint(json.dumps({'a': True, 'b': None}))",
        options: [
          "'{\"a\": true, \"b\": null}'",
          "'{\"a\": True, \"b\": None}'",
          "'{\"a\": 1, \"b\": 0}'",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython `True` maps to JSON `true`; Python `None` maps to JSON `null`.",
      },
      {
        id: "jd-4",
        question: "How do you pretty-print formatted JSON with indentation?\n\nimport json\nprint(json.dumps({'name': 'Amol'}, indent=2))",
        options: [
          "Pass `indent=2` to format output across multiple indented lines",
          "Pass `pretty=True`",
          "Pass `format=2`",
          "Use pprint()",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`indent=2` formats the JSON string with 2-space indentation per nesting level.",
      },
      {
        id: "jd-5",
        question: "Why does `json.dumps({'time': datetime.now()})` raise TypeError by default?\n\nfrom datetime import datetime\nimport json\njson.dumps({'now': datetime.now()})",
        options: [
          "Raises TypeError: Object of type datetime is not JSON serializable (JSON specification does not define a native date type)",
          "Converts to timestamp automatically",
          "Converts to string 'now'",
          "Returns None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nStandard JSON has only numbers, strings, booleans, arrays, objects, and null. Custom types like datetime require a custom serializer.",
      },
      {
        id: "jd-6",
        question: "How do you serialize `datetime` using `default` serializer function?\n\nfrom datetime import datetime\nimport json\ndef date_encoder(obj):\n    if isinstance(obj, datetime):\n        return obj.isoformat()\n    raise TypeError\nprint(json.dumps({'time': datetime(2026, 8, 18)}, default=date_encoder))",
        options: [
          "'{\"time\": \"2026-08-18T00:00:00\"}'",
          "TypeError",
          "'{\"time\": null}'",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`default=date_encoder` intercepts unhandled types and returns an ISO 8601 string representation.",
      },
      {
        id: "jd-7",
        question: "What happens when serializing a Python set to JSON?\n\nimport json\njson.dumps({1, 2, 3})",
        options: [
          "Raises TypeError: Object of type set is not JSON serializable",
          "Serializes to JSON array `[1, 2, 3]`",
          "Serializes to `\"{1, 2, 3}\"`",
          "Returns null",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSets cannot be serialized directly to JSON; you must convert to a list `list(my_set)` first.",
      },
      {
        id: "jd-8",
        question: "What does `sort_keys=True` do in `json.dumps()`?\n\nimport json\nprint(json.dumps({'b': 1, 'a': 2}, sort_keys=True))",
        options: [
          "'{\"a\": 2, \"b\": 1}' (sorts dictionary keys alphabetically)",
          "'{\"b\": 1, \"a\": 2}'",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`sort_keys=True` outputs dictionary keys in sorted alphabetical order, useful for deterministic hashing and comparisons.",
      },
      {
        id: "jd-9",
        question: "How do you ensure non-ASCII characters (e.g. Unicode emojis or accents) are preserved in JSON output?\n\nimport json\nprint(json.dumps({'msg': 'café'}, ensure_ascii=False))",
        options: [
          "Pass `ensure_ascii=False` so characters are output as UTF-8 rather than `\\u00e9` escapes",
          "Pass `unicode=True`",
          "Pass `ascii=False`",
          "JSON only supports ASCII",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`ensure_ascii=False` prevents escaping Unicode characters to `\\uXXXX`, keeping text readable.",
      },
      {
        id: "jd-10",
        question: "What is `urllib.request` or `requests.get().json()` used for in Python?\n\n# requests.get('https://api.example.com/data').json()",
        options: [
          "Fetching data from HTTP APIs and parsing the response body as a Python dictionary",
          "Sending emails",
          "Creating databases",
          "Formatting HTML",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCalling `.json()` on an HTTP response deserializes JSON payloads directly into Python dicts.",
      },
      {
        id: "jd-11",
        question: "What does `json.JSONDecoder` subclassing allow?\n\nclass CustomDecoder(json.JSONDecoder): pass",
        options: [
          "Customizing how raw JSON tokens are transformed into domain Python objects",
          "Decrypting files",
          "Writing C code",
          "Formatting tables",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSubclassing `JSONDecoder` or using `object_hook` allows automatically reconstructing custom class instances from JSON dicts.",
      },
      {
        id: "jd-12",
        question: "What does `object_hook` do in `json.loads()`?\n\nimport json\ndef as_point(d):\n    if 'x' in d and 'y' in d: return (d['x'], d['y'])\n    return d\nprint(json.loads('{\"x\": 10, \"y\": 20}', object_hook=as_point))",
        options: ["(10, 20)", "{'x': 10, 'y': 20}", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`object_hook` is called with the result of any JSON object decoded, transforming `{'x': 10, 'y': 20}` into tuple `(10, 20)`.",
      },
      {
        id: "jd-13",
        question: "What exception is raised when parsing malformed JSON string?\n\nimport json\njson.loads('{invalid_json}')",
        options: [
          "json.JSONDecodeError",
          "ValueError: bad format",
          "SyntaxError",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`json.loads()` raises `json.decoder.JSONDecodeError` (a subclass of `ValueError`) on invalid JSON syntax.",
      },
      {
        id: "jd-14",
        question: "What is the output of:\n\nimport json\nprint(json.loads('true'), json.loads('null'))",
        options: ["True None", "true null", "'true' 'null'", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`json.loads('true')` decodes to boolean `True`; `'null'` decodes to `None`.",
      },
      {
        id: "jd-15",
        question: "Can Python tuple keys be serialized to standard JSON?\n\nimport json\njson.dumps({(1, 2): 'val'})",
        options: [
          "Raises TypeError: keys must be str, int, float, bool or None, not tuple",
          "Serializes to '{\"(1, 2)\": \"val\"}'",
          "Serializes to '{\"1,2\": \"val\"}'",
          "Returns null",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nJSON objects strictly require string keys. Complex keys like tuples raise a `TypeError`.",
      },
      {
        id: "jd-16",
        question: "What does `json.dumps([1, 2, 3], separators=(',', ':'))` produce?\n\nimport json\nprint(json.dumps({'a': 1, 'b': 2}, separators=(',', ':')))",
        options: [
          "'{\"a\":1,\"b\":2}' (compact minified JSON without whitespace)",
          "'{\"a\": 1, \"b\": 2}'",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`separators=(',', ':')` eliminates whitespace around colons and commas for compact payload serialization.",
      },
    ],
  },

  // ─── Lesson 24: Testing & Debugging ───────────────────────────────────────
  "testing-debugging": {
    title: "Lesson 24: Unit Testing with Pytest & Unittest, Logging & Debugging",
    questions: [
      {
        id: "td-1",
        question: "How do you write a test assertion in `pytest`?\n\ndef test_add():\n    assert 2 + 2 == 4",
        options: [
          "Use standard Python `assert` statements directly (pytest rewrites bytecode for rich error diffs)",
          "Call `self.assertEqual()`",
          "Write `expect(2+2).to.equal(4)`",
          "Return True or False",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pytest` uses Python's plain `assert` keyword and provides detailed failure introspection automatically.",
      },
      {
        id: "td-2",
        question: "How do you test that a specific exception is raised in `pytest`?\n\nimport pytest\ndef test_zero_division():\n    with pytest.raises(ZeroDivisionError):\n        1 / 0",
        options: [
          "Use `with pytest.raises(ExpectedException):` context manager",
          "Use `try ... except` manually",
          "Write `@pytest.expect_error`",
          "Call `pytest.fail()`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`with pytest.raises(Error):` asserts that the code inside the block raises the specified exception.",
      },
      {
        id: "td-3",
        question: "What is a `@pytest.fixture` used for?\n\nimport pytest\n@pytest.fixture\ndef sample_user():\n    return {'name': 'Amol', 'id': 101}\n\ndef test_user(sample_user):\n    assert sample_user['id'] == 101",
        options: [
          "Provides reusable test setup, mock data, or database connections injected as arguments into test functions",
          "Fixes broken Python code",
          "Locks tests from running",
          "Runs tests in infinite loop",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFixtures provide modular dependency injection for test setup and teardown.",
      },
      {
        id: "td-4",
        question: "How do you parametrize a test to run multiple test cases in `pytest`?\n\nimport pytest\n@pytest.mark.parametrize('input, expected', [\n    (2, 4),\n    (3, 9),\n    (4, 16)\n])\ndef test_square(input, expected):\n    assert input ** 2 == expected",
        options: [
          "Use `@pytest.mark.parametrize` decorator",
          "Use a for-loop inside the test",
          "Write 3 separate test files",
          "Use `pytest.repeat()`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@pytest.mark.parametrize` generates distinct test executions for each input/expected tuple.",
      },
      {
        id: "td-5",
        question: "What are the 5 standard logging levels in Python's `logging` module in increasing order of severity?",
        options: [
          "DEBUG -> INFO -> WARNING -> ERROR -> CRITICAL",
          "INFO -> DEBUG -> WARNING -> ERROR -> FATAL",
          "LOW -> MEDIUM -> HIGH -> SEVERE",
          "TRACE -> LOG -> WARN -> FAIL",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nStandard severity order: DEBUG (10), INFO (20), WARNING (30), ERROR (40), CRITICAL (50).",
      },
      {
        id: "td-6",
        question: "What built-in function triggers the Python interactive debugger in Python 3.7+?\n\ndef calculate(x):\n    breakpoint()\n    return x * 2",
        options: [
          "`breakpoint()` (which invokes `pdb` by default)",
          "`debug()`",
          "`stop()`",
          "`sys.pause()`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`breakpoint()` drops into the interactive `pdb` debugger at that line during execution.",
      },
      {
        id: "td-7",
        question: "What does the `unittest` standard library test case require?\n\nimport unittest\nclass TestApp(unittest.TestCase):\n    def test_upper(self):\n        self.assertEqual('foo'.upper(), 'FOO')",
        options: [
          "Subclassing `unittest.TestCase` and naming test methods with `test_` prefix",
          "Using only lambdas",
          "Writing C++ tests",
          "Inheriting from object",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`unittest` discovers and runs methods starting with `test_` inside `unittest.TestCase` subclasses.",
      },
      {
        id: "td-8",
        question: "What is `unittest.mock.patch` used for?\n\nfrom unittest.mock import patch\n@patch('requests.get')\ndef test_api(mock_get):\n    mock_get.return_value.status_code = 200",
        options: [
          "Replacing real external dependencies (HTTP calls, DBs, disk I/O) with controllable fake mock objects during testing",
          "Patching operating system security bugs",
          "Compiling Python to bytecode",
          "Encrypting tests",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`mock.patch` intercepts target calls and substitutes Mock objects with custom return values and call tracking.",
      },
      {
        id: "td-9",
        question: "What does `mock_func.assert_called_once_with('arg')` verify?\n\nfrom unittest.mock import MagicMock\nm = MagicMock()\nm('hello')\nm.assert_called_once_with('hello')",
        options: [
          "Asserts that `m` was called exactly 1 time with parameter `'hello'`",
          "Calls `m` again with 'hello'",
          "Deletes `m`",
          "Returns None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`assert_called_once_with` validates both call count (1) and exact argument matching.",
      },
      {
        id: "td-10",
        question: "What does `cProfile.run('my_func()')` do in Python?\n\nimport cProfile\ncProfile.run('sum([x for x in range(10000)])')",
        options: [
          "Profiles code execution, outputting call counts, per-call execution time, and cumulative bottlenecks",
          "Runs the function on GPU",
          "Tests for memory leaks only",
          "Converts code to C",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`cProfile` is Python's built-in deterministic performance profiler.",
      },
      {
        id: "td-11",
        question: "What command runs all tests matching `test_*.py` using pytest from the terminal?",
        options: [
          "pytest",
          "python run tests",
          "pip test",
          "python::test",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pytest` automatically discovers all `test_*.py` and `*_test.py` files and executes test functions.",
      },
      {
        id: "td-12",
        question: "What does `setUp()` and `tearDown()` do in `unittest.TestCase`?\n\nclass MyTest(unittest.TestCase):\n    def setUp(self): self.data = [1, 2]\n    def tearDown(self): self.data = None",
        options: [
          "`setUp` runs BEFORE each test method; `tearDown` runs AFTER each test method",
          "Runs once per module",
          "Compiles tests",
          "Only runs on failure",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`setUp()` and `tearDown()` execute before and after each individual test method to isolate test state.",
      },
      {
        id: "td-13",
        question: "What does `logger.exception('Failed')` do inside an except block?\n\nimport logging\ntry: 1 / 0\nexcept ZeroDivisionError:\n    logging.exception('Calculation failed')",
        options: [
          "Logs ERROR level message and automatically attaches the full exception traceback",
          "Silences the error",
          "Crashes the application",
          "Returns 0",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`logging.exception` logs at ERROR level and includes exc_info automatically.",
      },
      {
        id: "td-14",
        question: "What is code test coverage (e.g. `pytest --cov`)?\n\n# pytest --cov=myapp",
        options: [
          "The percentage of codebase statements and branches executed during test suite runs",
          "The number of test files written",
          "The file size of tests",
          "The speed of test execution",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCode coverage measures which lines of application code were exercised by test suites.",
      },
      {
        id: "td-15",
        question: "What does `pdb` command `n` (next) vs `s` (step) do in the debugger?\n\n# (Pdb) n vs (Pdb) s",
        options: [
          "`n` executes the next line (stepping OVER function calls); `s` steps INTO the function call on the current line",
          "`n` exits the debugger",
          "`s` stops the program",
          "They are identical",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn pdb, `n` steps over lines, while `s` steps into function implementations.",
      },
      {
        id: "td-16",
        question: "What does `@pytest.mark.skip(reason='WIP')` do?\n\n@pytest.mark.skip(reason='Refactoring')\ndef test_feature():\n    pass",
        options: [
          "Skips execution of the test and marks it as skipped in test report",
          "Fails the test",
          "Runs the test in background",
          "Deletes the test",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@pytest.mark.skip` skips running unfinished or disabled tests gracefully.",
      },
    ],
  },

  // ─── Lesson 25: Mini-Project: Expense Tracker ─────────────────────────────
  "mini-project-expense-tracker": {
    title: "Lesson 25: Capstone Project: CLI Expense Tracker & Personal Finance Manager",
    questions: [
      {
        id: "mp-1",
        question: "What dataclass schema cleanly models an Expense entry?\n\nfrom dataclasses import dataclass\nfrom datetime import datetime\n@dataclass\nclass Expense:\n    id: int\n    category: str\n    amount: float\n    date: str",
        options: [
          "A strongly-typed dataclass with id, category, amount, and date fields",
          "A single string",
          "A raw integer",
          "A global variable",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nUsing `@dataclass` gives automatic `__init__`, clean representations, and validation for expense items.",
      },
      {
        id: "mp-2",
        question: "How do you calculate total spending by category using `defaultdict`?\n\nfrom collections import defaultdict\nexpenses = [\n    {'cat': 'Food', 'amt': 20.0},\n    {'cat': 'Food', 'amt': 15.0},\n    {'cat': 'Tech', 'amt': 50.0}\n]\ntotals = defaultdict(float)\nfor e in expenses:\n    totals[e['cat']] += e['amt']\nprint(dict(totals))",
        options: [
          "{'Food': 35.0, 'Tech': 50.0}",
          "{'Food': 20.0, 'Tech': 50.0}",
          "85.0",
          "{'Food': 2, 'Tech': 1}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`defaultdict(float)` accumulates category amounts: Food (20.0 + 15.0 = 35.0), Tech (50.0).",
      },
      {
        id: "mp-3",
        question: "How do you load and persist expense records to a JSON file safely?\n\nimport json\nfrom pathlib import Path\ndef save_expenses(expenses, path='data.json'):\n    Path(path).write_text(json.dumps(expenses, indent=2))",
        options: [
          "Serialize list of dicts with `json.dumps()` and write via `Path.write_text()`",
          "Print to terminal only",
          "Append raw strings with `+`",
          "Save in RAM only",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPersisting state to a JSON file ensures user expense history persists between CLI runs.",
      },
      {
        id: "mp-4",
        question: "How do you parse CLI command-line arguments using `argparse`?\n\nimport argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--amount', type=float, required=True)\nparser.add_argument('--category', default='General')",
        options: [
          "`argparse.ArgumentParser()` with typed `--amount` and default `--category` arguments",
          "Using `input()` in an infinite loop",
          "Reading `sys.argv[0]` only",
          "Manual string slicing",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`argparse` provides professional CLI argument parsing with automatic `--help` flags and type conversion.",
      },
      {
        id: "mp-5",
        question: "What does this expense deletion by ID comprehension achieve?\n\nexpenses = [{'id': 1, 'amt': 10}, {'id': 2, 'amt': 20}]\ntarget_id = 1\nexpenses = [e for e in expenses if e['id'] != target_id]\nprint(len(expenses))",
        options: ["1", "2", "0", "KeyError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFiltering with `e['id'] != target_id` retains all records except ID 1, leaving 1 expense.",
      },
      {
        id: "mp-6",
        question: "How do you export expense records to a CSV report?\n\nimport csv\ndef export_csv(records, filename='report.csv'):\n    with open(filename, 'w', newline='', encoding='utf-8') as f:\n        writer = csv.DictWriter(f, fieldnames=['id', 'cat', 'amt'])\n        writer.writeheader()\n        writer.writerows(records)",
        options: [
          "Use `csv.DictWriter` with `writeheader()` and `writerows()`",
          "Use `f.write(str(records))`",
          "Use json.dump()",
          "Export is not possible",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`csv.DictWriter` writes column headers and maps dictionary keys directly into formatted CSV rows.",
      },
      {
        id: "mp-7",
        question: "How do you calculate monthly budget alerts?\n\nbudget = 500.0\ntotal_spent = 540.0\nif total_spent > budget:\n    print(f'Alert: Exceeded budget by ${total_spent - budget:.2f}')",
        options: [
          "Alert: Exceeded budget by $40.00",
          "Under budget",
          "Alert: Exceeded budget by $-40.00",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`540.0 - 500.0 = 40.00`, printing `'Alert: Exceeded budget by $40.00'`.",
      },
      {
        id: "mp-8",
        question: "How do you find the highest single expense in a list of Expense objects?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Exp:\n    name: str\n    amt: float\nitems = [Exp('Coffee', 4.5), Exp('Flight', 350.0), Exp('Lunch', 15.0)]\ntop = max(items, key=lambda e: e.amt)\nprint(top.name, top.amt)",
        options: [
          "Flight 350.0",
          "Coffee 4.5",
          "Lunch 15.0",
          "350.0",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`max(items, key=lambda e: e.amt)` finds the item with the highest `amt` value: `Flight 350.0`.",
      },
      {
        id: "mp-9",
        question: "How do you safely validate numeric user input in a CLI loop?\n\ndef get_amount():\n    while True:\n        try:\n            val = float(input('Amount: '))\n            if val <= 0: raise ValueError\n            return val\n        except ValueError:\n            print('Invalid amount, try again.')",
        options: [
          "Use a `while True` loop with `try-except ValueError` and positivity validation",
          "Call float() once without try-except",
          "Accept negative amounts",
          "Check isdigit() on floats",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWrapping input parsing in `try-except ValueError` prevents application crashes on invalid user input.",
      },
      {
        id: "mp-10",
        question: "What is the output of category percentage calculation?\n\ntotal = 200.0\nfood_amt = 50.0\npct = (food_amt / total) * 100\nprint(f'{pct:.1f}%')",
        options: ["25.0%", "50.0%", "0.25%", "25%"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`50.0 / 200.0 = 0.25 * 100 = 25.0%`.",
      },
      {
        id: "mp-11",
        question: "How do you filter expenses between two dates in Python?\n\nfrom datetime import datetime\ndef in_range(date_str, start, end):\n    d = datetime.strptime(date_str, '%Y-%m-%d')\n    return start <= d <= end",
        options: [
          "Parse strings with `datetime.strptime()` and use chained comparison `start <= d <= end`",
          "Compare string lengths",
          "Subtract strings directly",
          "Use int()",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nParsing date strings to `datetime` objects allows chronologically accurate comparisons and date range filtering.",
      },
      {
        id: "mp-12",
        question: "What architecture pattern separates data storage from CLI user interface logic?\n\n# tracker_core.py (Data & Business Logic)\n# cli_interface.py (Input & Output)\n# storage.py (JSON / CSV persistence)",
        options: [
          "Layered architecture (Separation of Concerns: Models, Services/Storage, CLI View)",
          "Monolithic spaghetti script",
          "Storing code in JSON",
          "Disabling functions",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSeparating domain models, persistence layers, and CLI presentation keeps code modular, testable, and maintainable.",
      },
      {
        id: "mp-13",
        question: "How do you generate an auto-incrementing ID for new expenses?\n\nexpenses = [{'id': 1}, {'id': 5}]\nnext_id = max((e['id'] for e in expenses), default=0) + 1\nprint(next_id)",
        options: ["6", "2", "1", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`max(..., default=0) + 1` finds the maximum existing ID (5) and increments it to 6.",
      },
      {
        id: "mp-14",
        question: "How do you format a summary table of expenses in CLI?\n\nheaders = f'{\"ID\":<5} {\"Category\":<12} {\"Amount\":>8}'\nrow = f'{1:<5} {\"Groceries\":<12} {\"$45.50\":>8}'\nprint(headers)\nprint(row)",
        options: [
          "Format string alignment specifiers: `<` for left-aligned, `>` for right-aligned",
          "Using tabs only",
          "Concatenating with comma",
          "Using upper()",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nF-string field width and alignment (`{col:<width}`) creates clean aligned CLI tabular layouts.",
      },
      {
        id: "mp-15",
        question: "How do you test the expense manager calculation logic with pytest?\n\ndef test_category_total():\n    manager = ExpenseTracker()\n    manager.add_expense('Food', 25.0)\n    manager.add_expense('Food', 15.0)\n    assert manager.get_total_by_category('Food') == 40.0",
        options: [
          "Instantiate `ExpenseTracker()`, add test items, and assert total equals 40.0",
          "Test with live user input()",
          "Print and visually inspect",
          "Write to production disk",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nUnit tests invoke tracker methods directly without requiring interactive terminal prompts.",
      },
      {
        id: "mp-16",
        question: "What is the return code of a successful Python CLI script execution?\n\nimport sys\ndef main():\n    # process logic\n    sys.exit(0)",
        options: [
          "0 (exit code 0 indicates success in operating systems; non-zero indicates an error)",
          "1",
          "-1",
          "100",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Unix and Windows POSIX standards, exit code 0 indicates successful execution, while non-zero values signal errors.",
      },
    ],
  },
};
