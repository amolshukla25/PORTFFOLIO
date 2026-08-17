import type { LessonQuiz } from "../quizzes";

export const PYTHON_MODULE_4_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Lesson 12: Functions Basics ──────────────────────────────────────────
  "functions-basics": {
    title: "Lesson 12: Python Functions: Parameters, Returns & Type Hints",
    questions: [
      {
        id: "fb-1",
        question: "What is the output of the following function call?\n\ndef greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\nprint(greet('Amol'))",
        options: [
          "'Hello, Amol!'",
          "'Amol, Hello!'",
          "TypeError: missing argument",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`greeting` defaults to `'Hello'` when omitted in the function call, producing `'Hello, Amol!'`.",
      },
      {
        id: "fb-2",
        question: "What is the dangerous bug in this mutable default argument function?\n\ndef add_item(val, target=[]):\n    target.append(val)\n    return target\nprint(add_item(1))\nprint(add_item(2))",
        options: [
          "[1] followed by [1, 2] (the default list is shared across calls)",
          "[1] followed by [2]",
          "TypeError: cannot mutate default argument",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDefault parameter values in Python are evaluated once at function definition time.\nThe same list is mutated across successive calls, producing `[1, 2]` on the second call.",
      },
      {
        id: "fb-3",
        question: "What is the standard idiom to avoid mutable default argument bugs in Python?\n\ndef append_safe(val, target=None):\n    if target is None:\n        target = []\n    target.append(val)\n    return target",
        options: [
          "Set default to `None` and instantiate a new list inside the function body",
          "Use a tuple instead",
          "Add global keyword",
          "Use pass",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nUsing `default=None` and assigning `target = []` inside the function ensures a fresh, independent list is created on every call.",
      },
      {
        id: "fb-4",
        question: "What is the return value of a function that has no explicit `return` statement?\n\ndef do_nothing():\n    x = 10\nprint(do_nothing())",
        options: ["None", "0", "10", "UnboundLocalError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python, functions without an explicit `return` statement implicitly return `None`.",
      },
      {
        id: "fb-5",
        question: "What does this multiple return value function return?\n\ndef min_max(nums):\n    return min(nums), max(nums)\nres = min_max([4, 1, 9, 2])\nprint(type(res), res)",
        options: [
          "<class 'tuple'> (1, 9)",
          "<class 'list'> [1, 9]",
          "<class 'int'> 1",
          "<class 'set'> {1, 9}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nComma-separated values in a return statement are automatically packed into a tuple: `(1, 9)`.",
      },
      {
        id: "fb-6",
        question: "What is the output of keyword arguments out of order?\n\ndef divide(a, b):\n    return a / b\nprint(divide(b=2, a=10))",
        options: ["5.0", "0.2", "TypeError", "5"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nExplicit keyword arguments bind by parameter name regardless of order: `a=10`, `b=2` -> `10 / 2 = 5.0`.",
      },
      {
        id: "fb-7",
        question: "What does the positional-only parameter `/` enforce in Python 3.8+?\n\ndef func(a, b, /, c):\n    return a + b + c",
        options: [
          "`a` and `b` must be passed positionally and cannot be passed by keyword",
          "`c` must be positional only",
          "`a` and `b` are divided",
          "Disables all keyword arguments",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nParameters before `/` are positional-only. Calling `func(a=1, b=2, c=3)` raises a TypeError.",
      },
      {
        id: "fb-8",
        question: "What does the keyword-only parameter `*` enforce?\n\ndef configure(*, debug=False, log_level='INFO'):\n    return f'{debug}:{log_level}'",
        options: [
          "Arguments after `*` must be passed as keyword arguments (e.g. `configure(debug=True)`)",
          "Takes arbitrary positional arguments",
          "Multiplies arguments",
          "Forces debug to be a list",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nA bare `*` in parameter list requires all subsequent parameters to be passed strictly as named keyword arguments.",
      },
      {
        id: "fb-9",
        question: "What does the `__doc__` attribute access on a function?\n\ndef square(n: int) -> int:\n    \"\"\"Calculates square of n.\"\"\"\n    return n * n\nprint(square.__doc__.strip())",
        options: [
          "'Calculates square of n.'",
          "None",
          "int -> int",
          "'square'",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe triple-quoted docstring immediately following the function header is stored in `func.__doc__`.",
      },
      {
        id: "fb-10",
        question: "Do Python type annotations enforce runtime type checks by default?\n\ndef greet(name: str) -> str:\n    return 'Hello ' + name\nprint(greet(123))",
        options: [
          "No, Python does not enforce type hints at runtime; it raises TypeError during string concatenation `'Hello ' + 123`",
          "Yes, Python raises a static compile-time error",
          "Python automatically converts 123 to '123'",
          "Type annotations are prohibited in Python 3",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython type hints are metadata for IDEs and linters (like mypy); Python's runtime does not validate them automatically.",
      },
      {
        id: "fb-11",
        question: "What is the output of:\n\ndef calc(x, y=2, z=3):\n    return x + y * z\nprint(calc(5, z=4))",
        options: ["13", "28", "11", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`x = 5`, `y = 2` (default), `z = 4`.\n`x + y * z = 5 + (2 * 4) = 5 + 8 = 13`.",
      },
      {
        id: "fb-12",
        question: "What does `func.__annotations__` contain?\n\ndef add(a: int, b: int = 0) -> int:\n    return a + b\nprint(add.__annotations__['return'])",
        options: [
          "<class 'int'>",
          "'int'",
          "None",
          "0",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`func.__annotations__` is a dictionary storing parameter and return type hint objects.",
      },
      {
        id: "fb-13",
        question: "What happens when positional arguments follow keyword arguments in a call?\n\ndef fn(a, b):\n    return a + b\nfn(a=1, 2)",
        options: [
          "Raises SyntaxError: positional argument follows keyword argument",
          "Returns 3",
          "Returns None",
          "Raises TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython syntax strictly forbids positional arguments after keyword arguments in function call invocations.",
      },
      {
        id: "fb-14",
        question: "What is the output of:\n\ndef scale(factor):\n    def multiply(val):\n        return val * factor\n    return multiply\ndouble = scale(2)\nprint(double(5))",
        options: ["10", "7", "25", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`scale(2)` returns inner closure `multiply` with `factor=2`. `double(5)` computes `5 * 2 = 10`.",
      },
      {
        id: "fb-15",
        question: "What is the output of:\n\ndef f():\n    return 1, 2, 3\na, b, c = f()\nprint(b)",
        options: ["2", "1", "3", "(1, 2, 3)"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nUnpacking the returned tuple `(1, 2, 3)` binds `a=1`, `b=2`, `c=3`.",
      },
      {
        id: "fb-16",
        question: "What will `print(type(lambda x: x))` output?",
        options: [
          "<class 'function'>",
          "<class 'lambda'>",
          "<class 'expression'>",
          "<class 'anonymous'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python, lambda expressions construct first-class function objects of type `<class 'function'>`.",
      },
    ],
  },

  // ─── Lesson 13: Lambda, *args & **kwargs ──────────────────────────────────
  "lambda-args-kwargs": {
    title: "Lesson 13: Lambda Functions, *args, **kwargs & Unpacking",
    questions: [
      {
        id: "lak-1",
        question: "What is the output of this lambda function?\n\nsq = lambda x: x ** 2\nprint(sq(5))",
        options: ["25", "10", "None", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`lambda x: x ** 2` defines an anonymous single-expression function that squares its argument: 5² = 25.",
      },
      {
        id: "lak-2",
        question: "What does `*args` receive inside a function?\n\ndef show(*args):\n    return type(args), args\nprint(show(1, 2, 3))",
        options: [
          "(<class 'tuple'>, (1, 2, 3))",
          "(<class 'list'>, [1, 2, 3])",
          "(<class 'set'>, {1, 2, 3})",
          "(<class 'dict'>, {'1': 2})",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`*args` collects any number of positional arguments into an immutable `tuple`.",
      },
      {
        id: "lak-3",
        question: "What does `**kwargs` receive inside a function?\n\ndef info(**kwargs):\n    return type(kwargs), kwargs\nprint(info(a=1, b=2))",
        options: [
          "(<class 'dict'>, {'a': 1, 'b': 2})",
          "(<class 'tuple'>, (('a', 1), ('b', 2)))",
          "(<class 'list'>, ['a', 'b'])",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`**kwargs` collects arbitrary keyword arguments into a standard Python `dict`.",
      },
      {
        id: "lak-4",
        question: "What is the output of argument unpacking in this function call?\n\ndef add(a, b, c):\n    return a + b + c\nnums = [1, 2, 3]\nprint(add(*nums))",
        options: ["6", "[1, 2, 3]", "TypeError", "123"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`*nums` unpacks the list elements into individual positional arguments: `add(1, 2, 3) = 6`.",
      },
      {
        id: "lak-5",
        question: "What is the output of dictionary unpacking `**` in this call?\n\ndef profile(name, role):\n    return f'{name}:{role}'\ndata = {'name': 'Amol', 'role': 'Admin'}\nprint(profile(**data))",
        options: [
          "'Amol:Admin'",
          "{'name': 'Amol', 'role': 'Admin'}",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`**data` unpacks keys and values as keyword arguments: `profile(name='Amol', role='Admin')`.",
      },
      {
        id: "lak-6",
        question: "What is the output of `map()` with a lambda?\n\nnums = [1, 2, 3]\nres = list(map(lambda x: x * 10, nums))\nprint(res)",
        options: ["[10, 20, 30]", "[1, 2, 3]", "[10]", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`map(func, iterable)` applies the lambda to each element: 1*10, 2*10, 3*10 -> `[10, 20, 30]`.",
      },
      {
        id: "lak-7",
        question: "What does `filter()` with a lambda produce?\n\nnums = [10, 15, 20, 25]\nres = list(filter(lambda x: x % 2 == 0, nums))\nprint(res)",
        options: ["[10, 20]", "[15, 25]", "[10, 15, 20, 25]", "[]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`filter()` keeps elements where the lambda evaluates to True (even numbers): `[10, 20]`.",
      },
      {
        id: "lak-8",
        question: "What does `functools.reduce()` compute in this code?\n\nfrom functools import reduce\nnums = [1, 2, 3, 4]\nres = reduce(lambda acc, x: acc * x, nums)\nprint(res)",
        options: ["24", "10", "1234", "16"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`reduce()` accumulates across the list: `((1 * 2) * 3) * 4 = 24`.",
      },
      {
        id: "lak-9",
        question: "What is the correct parameter ordering in a Python function definition?",
        options: [
          "def func(standard, default=val, *args, kw_only, **kwargs):",
          "def func(**kwargs, *args, standard):",
          "def func(*args, standard, **kwargs):",
          "def func(default=val, standard, *args):",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nValid signature order: standard positional -> defaults -> `*args` -> keyword-only -> `**kwargs`.",
      },
      {
        id: "lak-10",
        question: "What will `sorted()` with lambda key output?\n\nwords = ['cherry', 'banana', 'fig']\nprint(sorted(words, key=lambda w: len(w)))",
        options: [
          "['fig', 'cherry', 'banana']",
          "['banana', 'cherry', 'fig']",
          "['fig', 'banana', 'cherry']",
          "[3, 6, 6]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nLengths: 'fig'(3), 'cherry'(6), 'banana'(6). Sorted by length: `['fig', 'cherry', 'banana']`.",
      },
      {
        id: "lak-11",
        question: "What is the output of:\n\ndef total(start, *numbers):\n    return start + sum(numbers)\nprint(total(100, 1, 2, 3))",
        options: ["106", "6", "100", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`start = 100`, `numbers = (1, 2, 3)`.\n`100 + sum((1, 2, 3)) = 100 + 6 = 106`.",
      },
      {
        id: "lak-12",
        question: "What does this forwarding decorator pattern output?\n\ndef wrapper(*args, **kwargs):\n    return args, kwargs\nprint(wrapper(1, 2, name='Amol'))",
        options: [
          "((1, 2), {'name': 'Amol'})",
          "([1, 2], {'name': 'Amol'})",
          "(1, 2, 'Amol')",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`*args` catches `(1, 2)` and `**kwargs` catches `{'name': 'Amol'}`.",
      },
      {
        id: "lak-13",
        question: "What is the output of merging dictionaries using unpacking in Python 3.5+?\n\nd1 = {'a': 1}\nd2 = {'b': 2}\nmerged = {**d1, **d2, 'c': 3}\nprint(merged)",
        options: [
          "{'a': 1, 'b': 2, 'c': 3}",
          "[{'a': 1}, {'b': 2}, {'c': 3}]",
          "TypeError",
          "{'c': 3}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`{**d1, **d2, ...}` unpacks key-value pairs into a new combined dictionary `{'a': 1, 'b': 2, 'c': 3}`.",
      },
      {
        id: "lak-14",
        question: "What happens when you pass a statement (like `pass` or `print=1`) inside a lambda body?",
        options: [
          "Raises SyntaxError: lambdas can only contain a single expression, not statements",
          "Executes silently",
          "Returns None",
          "Converts to a generator",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nLambdas are restricted syntactically to a single expression that automatically returns its value; statements like `return`, `pass`, `assert` are illegal.",
      },
      {
        id: "lak-15",
        question: "What does this code print?\n\nf = lambda x, y=10: x + y\nprint(f(5), f(5, 20))",
        options: ["15 25", "15 15", "5 25", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`f(5)` uses default `y=10` -> 15.\n`f(5, 20)` overrides `y=20` -> 25.",
      },
      {
        id: "lak-16",
        question: "What is the output of:\n\ndef f(*args):\n    return len(args)\nprint(f(*[1, 2], *[3, 4]))",
        options: ["4", "2", "1", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`*[1, 2], *[3, 4]` unpacks into 4 positional arguments `(1, 2, 3, 4)`. `len(args)` is 4.",
      },
    ],
  },

  // ─── Lesson 14: Scope, Closures & Decorators ──────────────────────────────
  "scope-closures-decorators": {
    title: "Lesson 14: Scopes (LEGB), Closures & Decorators",
    questions: [
      {
        id: "scd-1",
        question: "What does the LEGB rule stand for in Python variable resolution?",
        options: [
          "Local -> Enclosing -> Global -> Built-in",
          "Lexical -> Environmental -> Global -> Binary",
          "Local -> External -> Generic -> Base",
          "Loop -> Function -> Global -> Bytecode",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython resolves variable names in strict LEGB order: Local scope first, then Enclosing functions, then Global module scope, then Built-in scope.",
      },
      {
        id: "scd-2",
        question: "What will the following code output?\n\nx = 10\ndef modify():\n    global x\n    x = 20\nmodify()\nprint(x)",
        options: ["20", "10", "UnboundLocalError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe `global x` declaration allows `modify()` to reassign the module-level variable `x` to 20.",
      },
      {
        id: "scd-3",
        question: "What does the `nonlocal` keyword do in a closure?\n\ndef outer():\n    count = 0\n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    return inner\nc = outer()\nprint(c(), c())",
        options: ["1 2", "1 1", "UnboundLocalError", "0 1"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`nonlocal count` binds `count` to the enclosing function's scope, allowing mutation across calls: returns 1, then 2.",
      },
      {
        id: "scd-4",
        question: "What is the output of this simple decorator?\n\ndef my_decorator(func):\n    def wrapper():\n        return func().upper()\n    return wrapper\n\n@my_decorator\ndef greet():\n    return 'hello'\n\nprint(greet())",
        options: ["'HELLO'", "'hello'", "None", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@my_decorator` is syntactic sugar for `greet = my_decorator(greet)`.\nCalling `greet()` runs `wrapper()` which converts `'hello'` to `'HELLO'`.",
      },
      {
        id: "scd-5",
        question: "Why should `functools.wraps` be used inside decorators?\n\nfrom functools import wraps\ndef deco(f):\n    @wraps(f)\n    def wrapper(*args, **kwargs):\n        return f(*args, **kwargs)\n    return wrapper",
        options: [
          "It preserves the original function's name (`__name__`) and docstring (`__doc__`)",
          "It speeds up execution by compiling to C code",
          "It makes the function thread-safe",
          "It is required by Python syntax",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWithout `@wraps(f)`, the decorated function's `__name__` becomes `'wrapper'`. `@wraps(f)` copies original metadata.",
      },
      {
        id: "scd-6",
        question: "What error does this code produce?\n\nx = 5\ndef f():\n    print(x)\n    x = 10\nf()",
        options: [
          "UnboundLocalError: local variable 'x' referenced before assignment",
          "Prints 5",
          "Prints 10",
          "NameError: name 'x' is not defined",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nBecause `x = 10` assigns to `x` inside `f()`, Python marks `x` as a local variable for the entire function.\nAccessing `print(x)` before `x = 10` raises `UnboundLocalError`.",
      },
      {
        id: "scd-7",
        question: "What is the output of this closure factory?\n\ndef make_multiplier(n):\n    return lambda x: x * n\ntriple = make_multiplier(3)\nprint(triple(7))",
        options: ["21", "10", "3", "7"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`make_multiplier(3)` returns a closure holding `n=3`. `triple(7)` evaluates `7 * 3 = 21`.",
      },
      {
        id: "scd-8",
        question: "What will this famous late-binding closure loop output?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])",
        options: [
          "[2, 2, 2]",
          "[0, 1, 2]",
          "[0, 0, 0]",
          "[1, 1, 1]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython closures bind variables by reference, not value.\nWhen the loop finishes, `i = 2`. Calling all functions evaluates `i` (2), giving `[2, 2, 2]`.\n(Fix: `lambda i=i: i`).",
      },
      {
        id: "scd-9",
        question: "How do you fix the late-binding closure issue?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])",
        options: [
          "[0, 1, 2]",
          "[2, 2, 2]",
          "[3, 3, 3]",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSetting a default argument `i=i` binds the current loop value at definition time: `[0, 1, 2]`.",
      },
      {
        id: "scd-10",
        question: "What does this decorator with arguments do?\n\ndef repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            res = []\n            for _ in range(n):\n                res.append(func(*args, **kwargs))\n            return res\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef ping(): return 'pong'\nprint(ping())",
        options: [
          "['pong', 'pong', 'pong']",
          "'pongpongpong'",
          "'pong'",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@repeat(3)` calls `repeat(3)` which returns a decorator that runs `ping()` 3 times into a list.",
      },
      {
        id: "scd-11",
        question: "What built-in decorator from `functools` provides automatic LRU memoization caching?\n\nfrom functools import lru_cache\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n < 2: return n\n    return fib(n-1) + fib(n-2)",
        options: [
          "@lru_cache",
          "@cache_memo",
          "@fast_fib",
          "@memoize",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@functools.lru_cache` memoizes function call results, optimizing recursive functions like `fib(n)` from O(2ⁿ) to O(n).",
      },
      {
        id: "scd-12",
        question: "What is the output of stacked decorators?\n\ndef add_stars(f):\n    return lambda: f'*{f()}*'\ndef add_dashes(f):\n    return lambda: f'-{f()}-'\n\n@add_stars\n@add_dashes\ndef msg(): return 'Hi'\nprint(msg())",
        options: [
          "'*-Hi-*'",
          "'-*Hi*-'",
          "'*Hi*'",
          "'-Hi-'",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDecorators apply bottom-up: `@add_dashes` runs first (`-Hi-`), then `@add_stars` wraps that (`*-Hi-*`).",
      },
      {
        id: "scd-13",
        question: "What does `func.__closure__` inspect?",
        options: [
          "A tuple of cell objects containing closed-over free variables",
          "The function source code",
          "The return value cache",
          "The memory address",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`func.__closure__` holds cell references to captured enclosing variables in a closure.",
      },
      {
        id: "scd-14",
        question: "What is the output of:\n\ndef counter():\n    num = 100\n    return lambda: num\nf = counter()\nprint(f())",
        options: ["100", "None", "UnboundLocalError", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe inner lambda retains access to `num = 100` from the enclosing scope even after `counter()` has finished executing.",
      },
      {
        id: "scd-15",
        question: "What happens when you declare a variable inside a function without `global` or `nonlocal`?",
        options: [
          "It is strictly local to that function execution",
          "It is automatically shared across all functions",
          "It is saved to disk",
          "It overwrites built-in functions",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nVariables created inside functions belong to the Local scope and are destroyed when the function returns.",
      },
      {
        id: "scd-16",
        question: "What does `locals()` return inside a function?",
        options: [
          "A dictionary of all local variables and their current values in the local scope",
          "A list of global variables",
          "The function name",
          "A tuple of parameter types",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`locals()` returns a dictionary mapping local variable names to their values in the current frame.",
      },
    ],
  },

  // ─── Lesson 15: Modules & Packages ────────────────────────────────────────
  "modules-packages": {
    title: "Lesson 15: Python Modules, Packages, Virtual Environments & Pip",
    questions: [
      {
        id: "mp-1",
        question: "What does the `if __name__ == '__main__':` idiom ensure?\n\n# script.py\ndef main():\n    print('Running standalone')\nif __name__ == '__main__':\n    main()",
        options: [
          "`main()` runs only when executed directly (`python script.py`), but NOT when imported as a module (`import script`)",
          "The code runs in parallel across all CPU cores",
          "Forces the script to run as root/administrator",
          "Deletes temporary cache files",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen run directly, Python sets `__name__ = '__main__'`. When imported, `__name__` equals the module name (`'script'`).",
      },
      {
        id: "mp-2",
        question: "What file is placed inside a folder to mark it as a Python package?",
        options: [
          "__init__.py",
          "__main__.py",
          "package.json",
          "setup.py",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nAn `__init__.py` file (even empty) initializes a package directory and executes upon package import.",
      },
      {
        id: "mp-3",
        question: "What command creates a Python virtual environment named `.venv`?",
        options: [
          "python -m venv .venv",
          "pip install venv .venv",
          "python new-env .venv",
          "venv create .venv",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`python -m venv .venv` uses the built-in `venv` module to create an isolated Python runtime and site-packages folder.",
      },
      {
        id: "mp-4",
        question: "How do you install all project dependencies from a `requirements.txt` file?",
        options: [
          "pip install -r requirements.txt",
          "python install requirements.txt",
          "pip add requirements.txt",
          "pip freeze requirements.txt",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pip install -r requirements.txt` reads package specifications line-by-line and installs them.",
      },
      {
        id: "mp-5",
        question: "What does `pip freeze > requirements.txt` do?",
        options: [
          "Exports currently installed packages and exact version numbers into requirements.txt",
          "Freezes execution of running Python scripts",
          "Uninstalls all third-party libraries",
          "Locks the operating system files",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pip freeze` lists all installed dependencies with pinned versions (`package==1.2.3`), which `>` redirects to a file.",
      },
      {
        id: "mp-6",
        question: "What does `import math as m` do in Python?\n\nimport math as m\nprint(m.sqrt(16))",
        options: [
          "Imports `math` module under the alias `m` and prints 4.0",
          "Renames math.py on disk",
          "Imports only the `sqrt` function",
          "Raises an ImportError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`as m` provides a convenient local alias for the imported module namespace: `m.sqrt(16) = 4.0`.",
      },
      {
        id: "mp-7",
        question: "Why is `from module import *` discouraged by PEP 8?\n\nfrom math import *",
        options: [
          "It pollutes the local namespace and can silently overwrite existing variables/functions",
          "It runs 10x slower",
          "It is completely illegal syntax",
          "It deletes the module from disk",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWildcard imports obscure which names come from where and create accidental name collision bugs.",
      },
      {
        id: "mp-8",
        question: "What is `sys.path` in Python?\n\nimport sys\nprint(type(sys.path))",
        options: [
          "A list of directory paths where Python searches for imported modules",
          "The file path to the python.exe binary",
          "The system environment variables",
          "A string containing the current working directory",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`sys.path` is an initialized list of strings containing directories searched in order during `import` statements.",
      },
      {
        id: "mp-9",
        question: "What does `__all__` define inside a module or `__init__.py`?\n\n__all__ = ['add', 'subtract']",
        options: [
          "The explicit list of public symbols exported when a user does `from module import *`",
          "All dependencies required by pip",
          "All unit tests to run",
          "A list of author names",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__all__` defines the public API of a module, restricting what `import *` exports.",
      },
      {
        id: "mp-10",
        question: "What is the purpose of `__file__` inside a module?\n\nimport os\nprint(os.path.basename(__file__))",
        options: [
          "Holds the file path string of the current executing Python script",
          "Holds the file size",
          "Holds the author's name",
          "Holds the Python version",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__file__` is a built-in module variable containing the path to the current module file.",
      },
      {
        id: "mp-11",
        question: "What happens when a module is imported multiple times in the same program?\n\nimport math\nimport math\nimport math",
        options: [
          "It is loaded and executed once; subsequent imports retrieve the cached module from `sys.modules`",
          "It is re-executed 3 separate times",
          "Raises a DuplicateImportError",
          "Crashes with a memory leak",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython caches loaded modules in `sys.modules`. Repeated imports simply return the cached reference in O(1) time.",
      },
      {
        id: "mp-12",
        question: "How do you reload an already imported module for testing?\n\nimport importlib\nimport my_module\nimportlib.reload(my_module)",
        options: [
          "`importlib.reload(module)` re-executes the module code and refreshes its definitions",
          "Restart the computer",
          "`my_module.reload()`",
          "`import my_module again`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`importlib.reload(module)` reloads a previously imported module without restarting the Python interpreter.",
      },
      {
        id: "mp-13",
        question: "What is a circular import in Python?\n\n# a.py imports b; b.py imports a",
        options: [
          "Two or more modules attempting to import each other before either has finished initializing, often leading to AttributeError or ImportError",
          "An import loop that spins CPU at 100%",
          "A package with circular disk sectors",
          "A feature that speeds up code",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCircular imports occur when module A needs module B while B is still in the middle of executing A's import.",
      },
      {
        id: "mp-14",
        question: "What is the difference between relative imports `from .utils import helper` vs absolute imports `from mypkg.utils import helper`?",
        options: [
          "Relative imports use leading dots `.` to navigate relative to the current module within a package; absolute imports specify full path from package root",
          "Relative imports only work in Python 2",
          "Absolute imports cannot import submodules",
          "Relative imports are compiled to C",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`.` denotes current directory, `..` denotes parent package directory in package relative imports.",
      },
      {
        id: "mp-15",
        question: "What does `dir(module)` return?\n\nimport math\nprint('sqrt' in dir(math))",
        options: ["True", "False", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`dir(math)` returns a sorted list of all valid attribute and function names defined inside the `math` module.",
      },
      {
        id: "mp-16",
        question: "How do you check if a package is installed from the terminal?",
        options: [
          "pip show <package_name>",
          "python find <package_name>",
          "pip search",
          "python::check",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pip show <package>` displays installation metadata, version, location, and dependencies of an installed package.",
      },
    ],
  },
};
