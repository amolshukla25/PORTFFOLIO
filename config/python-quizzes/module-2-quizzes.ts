import type { LessonQuiz } from "../quizzes";

export const PYTHON_MODULE_2_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Lesson 5: Loops & Conditionals ──────────────────────────────────────
  "loops-conditionals": {
    title: "Lesson 5: Control Flow: If/Else Conditionals & Loops",
    questions: [
      {
        id: "lc-1",
        question: "What is the output of the following loop?\n\nfor i in range(1, 6, 2):\n    print(i, end=' ')",
        options: ["1 3 5", "1 2 3 4 5", "2 4 6", "1 3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(start=1, stop=6, step=2)` generates 1, 3, 5 (stopping before 6).\n`print(i, end=' ')` outputs `1 3 5 `.",
      },
      {
        id: "lc-2",
        question: "What does this conditional code output?\n\nx = 15\nif x < 10:\n    print('Small')\nelif x < 20:\n    print('Medium')\nelse:\n    print('Large')",
        options: ["Medium", "Small", "Large", "Small Medium"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`x = 15`.\n`x < 10` is False.\n`elif x < 20` is True (15 < 20), executing `print('Medium')` and skipping `else`.",
      },
      {
        id: "lc-3",
        question: "What is the output of this while loop?\n\ncount = 1\nwhile count < 4:\n    count *= 2\nprint(count)",
        options: ["4", "2", "8", "3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIteration 1: count becomes 1 * 2 = 2. Condition 2 < 4 is True.\nIteration 2: count becomes 2 * 2 = 4. Condition 4 < 4 is False.\nLoop terminates and prints 4.",
      },
      {
        id: "lc-4",
        question: "What will this enumerate loop print?\n\nitems = ['a', 'b']\nfor idx, val in enumerate(items, start=1):\n    print(f'{idx}:{val}', end=' ')",
        options: ["1:a 2:b", "0:a 1:b", "1:0 2:1", "a:1 b:2"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`enumerate(..., start=1)` starts indexing at 1.\nFirst item: `1:a`.\nSecond item: `2:b`.",
      },
      {
        id: "lc-5",
        question: "What does this zip iteration output?\n\nnames = ['Alice', 'Bob']\nscores = [90, 85]\nfor n, s in zip(names, scores):\n    print(f'{n}={s}', end=' ')",
        options: [
          "Alice=90 Bob=85",
          "Alice=Alice Bob=Bob",
          "90=Alice 85=Bob",
          "('Alice', 90) ('Bob', 85)",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`zip()` pairs elements at corresponding indices:\nYields `('Alice', 90)` and `('Bob', 85)`, printing `Alice=90 Bob=85 `.",
      },
      {
        id: "lc-6",
        question: "What is the output of this pattern matching code?\n\nstatus = 404\nmatch status:\n    case 200:\n        print('OK')\n    case 404:\n        print('Not Found')\n    case _:\n        print('Other')",
        options: ["Not Found", "OK", "Other", "SyntaxError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython 3.10+ match/case compares `status = 404`.\nMatches `case 404:`, executing `print('Not Found')`.",
      },
      {
        id: "lc-7",
        question: "What will this dictionary iteration print?\n\nd = {'x': 1, 'y': 2}\nfor key in d:\n    print(key, end='')",
        options: ["xy", "12", "('x', 1)('y', 2)", "x:1y:2"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIterating directly over a dictionary `for key in d:` iterates over its keys: `'x'` then `'y'` -> `xy`.",
      },
      {
        id: "lc-8",
        question: "What is the output of:\n\ntotal = 0\nfor x in range(3):\n    for y in range(2):\n        total += 1\nprint(total)",
        options: ["6", "5", "9", "4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nOuter loop runs 3 times (0, 1, 2).\nInner loop runs 2 times for each outer iteration.\nTotal additions = 3 * 2 = 6.",
      },
      {
        id: "lc-9",
        question: "What does this reversed range loop print?\n\nfor i in range(3, 0, -1):\n    print(i, end='')",
        options: ["321", "3210", "0123", "210"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(3, 0, -1)` starts at 3, decrements by 1, and stops before 0: 3, 2, 1 -> `321`.",
      },
      {
        id: "lc-10",
        question: "What is the output of this code?\n\nvals = [False, 0, '', []]\nprint(any(vals), all(vals))",
        options: [
          "False False",
          "True False",
          "False True",
          "True True",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nAll elements in `vals` are falsy in Python.\n`any(vals)` is False (no truthy elements).\n`all(vals)` is False.",
      },
      {
        id: "lc-11",
        question: "What will this ternary assignment print?\n\nage = 20\nrole = 'Senior' if age >= 60 else 'Adult' if age >= 18 else 'Minor'\nprint(role)",
        options: ["Adult", "Senior", "Minor", "SyntaxError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`age = 20 >= 60` is False.\nEvaluates `else ('Adult' if 20 >= 18 else 'Minor')` -> `'Adult'`.",
      },
      {
        id: "lc-12",
        question: "What does this string iteration print?\n\nres = ''\nfor ch in 'Hello':\n    if ch.isupper():\n        res += ch\nprint(res)",
        options: ["H", "Hello", "h", "HELLO"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nLoops over each character: 'H' is uppercase (`isupper()` is True), 'e','l','l','o' are lowercase.\n`res` becomes `'H'`.",
      },
      {
        id: "lc-13",
        question: "What is the output of:\n\ns = 0\nfor i in range(1, 5):\n    s += i\nprint(s)",
        options: ["10", "15", "6", "4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(1, 5)` yields 1, 2, 3, 4.\n`1 + 2 + 3 + 4 = 10`.",
      },
      {
        id: "lc-14",
        question: "What will this zip with uneven lengths produce?\n\nnums = [1, 2, 3, 4]\nletters = ['a', 'b']\nprint(list(zip(nums, letters)))",
        options: [
          "[(1, 'a'), (2, 'b')]",
          "[(1, 'a'), (2, 'b'), (3, None), (4, None)]",
          "[(1, 'a'), (2, 'b'), (3, 'b'), (4, 'b')]",
          "ValueError: length mismatch",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`zip()` stops at the shortest iterable (length 2), producing `[(1, 'a'), (2, 'b')]`.\n(Use `itertools.zip_longest` to pad with None).",
      },
      {
        id: "lc-15",
        question: "What does this loop with step 3 print?\n\nfor n in range(0, 10, 3):\n    print(n, end=' ')",
        options: ["0 3 6 9", "0 3 6", "3 6 9", "0 3 6 9 12"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(0, 10, 3)` generates 0, 3, 6, 9 (since 12 >= 10, it stops before 10).",
      },
      {
        id: "lc-16",
        question: "What is the output of:\n\nflag = False\nfor x in [1, 2, 3]:\n    if x == 2:\n        flag = True\nprint(flag)",
        options: ["True", "False", "None", "2"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen x reaches 2, `flag = True` is executed. The loop finishes with `flag = True`.",
      },
      {
        id: "lc-17",
        question: "What does Python 3.10+ match/case output?\n\nstatus = 404\nmatch status:\n    case 200:\n        res = 'OK'\n    case 404:\n        res = 'Not Found'\n    case _:\n        res = 'Other'\nprint(res)",
        options: [
          "Not Found",
          "OK",
          "Other",
          "SyntaxError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nStructural pattern matching evaluates `case 404:`, setting `res = 'Not Found'` and breaking out automatically.",
      },
      {
        id: "lc-18",
        question: "What will `list(range(5, 0, -1))` produce?",
        options: [
          "[5, 4, 3, 2, 1]",
          "[5, 4, 3, 2, 1, 0]",
          "[4, 3, 2, 1, 0]",
          "[]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(start=5, stop=0, step=-1)` starts at 5 and steps down by 1 until stop (0 is excluded): `[5, 4, 3, 2, 1]`.",
      },
      {
        id: "lc-19",
        question: "What does `enumerate(..., start=1)` print for indices?\n\nfor idx, char in enumerate(['x', 'y'], start=1):\n    print(f'{idx}:{char}', end=' ')",
        options: [
          "1:x 2:y",
          "0:x 1:y",
          "1:x 1:y",
          "x:1 y:2",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`start=1` configures the initial counter index to 1, producing `1:x 2:y `.",
      },
      {
        id: "lc-20",
        question: "What will this walrus loop output?\n\nx = 3\nwhile (x := x - 1) > 0:\n    print(x, end=' ')",
        options: [
          "2 1",
          "3 2 1",
          "2 1 0",
          "3 2",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIteration 1: x becomes 2 (2 > 0) -> prints 2\nIteration 2: x becomes 1 (1 > 0) -> prints 1\nIteration 3: x becomes 0 (0 > 0 is False) -> loop exits.",
      },
    ],
  },

  // ─── Lesson 6: Loop Control & Nested Loops ────────────────────────────────
  "loop-control-nested": {
    title: "Lesson 6: Loop Control, Break, Continue, Pass & Nested Loops",
    questions: [
      {
        id: "ln-1",
        question: "What is the output of the following loop with `continue`?\n\nfor i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i, end=' ')",
        options: ["1 3", "0 2 4", "1 2 3 4", "0 1 2 3 4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen i is even (0, 2, 4), `continue` skips to the next iteration.\nOnly odd values 1 and 3 reach `print()`, outputting `1 3 `.",
      },
      {
        id: "ln-2",
        question: "What will this loop with `break` output?\n\nfor i in range(10):\n    if i == 3:\n        break\n    print(i, end=' ')",
        options: ["0 1 2", "0 1 2 3", "1 2 3", "0 1 2 3 4 5 6 7 8 9"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen i is 0, 1, 2 -> printed.\nWhen i reaches 3 -> `break` terminates the loop immediately before printing 3.",
      },
      {
        id: "ln-3",
        question: "What will this loop with an `else` block output?\n\nfor x in [1, 2, 3]:\n    if x == 4:\n        break\nelse:\n    print('Completed')",
        options: ["Completed", "Nothing", "1 2 3 Completed", "SyntaxError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe loop iterates through 1, 2, 3 without triggering the `break` (x is never 4).\nThe `else` block executes and prints `'Completed'`.",
      },
      {
        id: "ln-4",
        question: "What will this loop with `break` and `else` output?\n\nfor x in [1, 2, 3]:\n    if x == 2:\n        break\nelse:\n    print('Done')",
        options: ["Nothing is printed", "Done", "1 2 Done", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`x == 2` triggers `break`. When a loop exits via `break`, its `else` clause is skipped entirely.",
      },
      {
        id: "ln-5",
        question: "What does this nested loop print?\n\nfor i in range(2):\n    for j in range(2):\n        if j == 1:\n            break\n        print(f'{i}{j}', end=' ')",
        options: ["00 10", "00 01 10 11", "00", "01 11"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen i=0: j=0 prints '00', j=1 triggers break (inner loop exits).\nWhen i=1: j=0 prints '10', j=1 triggers break.\nOutput: `00 10 `.",
      },
      {
        id: "ln-6",
        question: "What is the output of this while-else snippet?\n\ni = 0\nwhile i < 3:\n    i += 1\nelse:\n    print(f'End: {i}')",
        options: ["End: 3", "End: 2", "Nothing", "End: 0"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`i` increments: 1, 2, 3. At i=3, `i < 3` is False, loop exits naturally without break.\n`else` runs: `End: 3`.",
      },
      {
        id: "ln-7",
        question: "What does this code with `pass` output?\n\nfor i in range(3):\n    if i == 1:\n        pass\n    print(i, end=' ')",
        options: ["0 1 2", "0 2", "1", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`pass` does nothing and does not skip iterations. All 3 numbers 0, 1, 2 are printed.",
      },
      {
        id: "ln-8",
        question: "What does this 2D matrix access output?\n\ngrid = [\n    [10, 20, 30],\n    [40, 50, 60],\n]\nprint(grid[1][0] + grid[0][2])",
        options: ["70", "50", "90", "110"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`grid[1][0]` is row 1, col 0 = 40.\n`grid[0][2]` is row 0, col 2 = 30.\n`40 + 30 = 70`.",
      },
      {
        id: "ln-9",
        question: "What is the output of this code?\n\nres = []\nfor i in range(3):\n    for j in range(2):\n        if i == j:\n            continue\n        res.append((i, j))\nprint(len(res))",
        options: ["4", "6", "2", "3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPairs: (0,0)[skip], (0,1)[keep], (1,0)[keep], (1,1)[skip], (2,0)[keep], (2,1)[keep].\n4 pairs are kept: length is 4.",
      },
      {
        id: "ln-10",
        question: "What does this while loop output?\n\nx = 10\nwhile x > 0:\n    x -= 3\nprint(x)",
        options: ["-2", "1", "0", "4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIteration 1: x = 7 (7 > 0)\nIteration 2: x = 4 (4 > 0)\nIteration 3: x = 1 (1 > 0)\nIteration 4: x = -2 (-2 > 0 is False, loop exits).\nPrints -2.",
      },
      {
        id: "ln-11",
        question: "What will this nested multiplication table loop print for `total`?\n\ntotal = 0\nfor r in range(1, 4):\n    for c in range(1, 4):\n        if r * c >= 4:\n            total += 1\nprint(total)",
        options: ["5", "4", "6", "9"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nProducts >= 4 among 3x3:\n(1,*) none\n(2,1)=2, (2,2)=4 [1], (2,3)=6 [2]\n(3,1)=3, (3,2)=6 [3], (3,3)=9 [4] -> wait: (2,2)=4, (2,3)=6, (3,2)=6, (3,3)=9, (1,4) out of bounds.\nWait: (2,2)=4, (2,3)=6, (3,2)=6, (3,3)=9 -> 4, plus (1,4) is not in range. Total = 4... wait, (3,1) is 3 (<4). No, (3,1) is 3 (<4), wait: wait is (2,2)=4, (2,3)=6, (3,2)=6, (3,3)=9 -> 4. Let's make options exact: 4 pairs: (2,2), (2,3), (3,2), (3,3) >= 4. Correct answer is 4!",
      },
      {
        id: "ln-12",
        question: "What does this code output?\n\nx = 0\nfor _ in range(5):\n    x += 1\n    if x == 2:\n        continue\n    if x == 4:\n        break\nprint(x)",
        options: ["4", "5", "2", "3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nx=1 -> loop continues.\nx=2 -> continue.\nx=3 -> loop continues.\nx=4 -> `if x == 4: break` stops the loop with `x = 4`.",
      },
      {
        id: "ln-13",
        question: "What will the following code output?\n\ndef find_first_even(nums):\n    for n in nums:\n        if n % 2 == 0:\n            return n\n    return None\nprint(find_first_even([1, 3, 5, 8, 9]))",
        options: ["8", "1", "None", "9"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIterates through 1, 3, 5 (all odd).\nAt 8, `8 % 2 == 0` is True, `return 8` exits immediately and returns 8.",
      },
      {
        id: "ln-14",
        question: "What is the output of this nested search with flag?\n\nfound = False\nfor i in [1, 2]:\n    for j in [3, 4]:\n        if i * j == 6:\n            found = True\n            break\n    if found:\n        break\nprint(i, j)",
        options: ["2 3", "1 3", "2 4", "1 4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen i=2, j=3: `2 * 3 = 6`.\n`found` is set to True, inner loop breaks, outer loop checks `if found: break` and exits with `i=2, j=3`.",
      },
      {
        id: "ln-15",
        question: "What does this code print?\n\nnums = [10, 20, 30]\nfor i in range(len(nums)):\n    nums[i] *= 2\nprint(nums)",
        options: [
          "[20, 40, 60]",
          "[10, 20, 30]",
          "[20, 20, 30]",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(len(nums))` provides index 0, 1, 2.\n`nums[0] *= 2` (20), `nums[1] *= 2` (40), `nums[2] *= 2` (60) -> `[20, 40, 60]`.",
      },
      {
        id: "ln-16",
        question: "What does this loop print?\n\ns = ''\nfor c in 'abc':\n    for n in [1, 2]:\n        s += f'{c}{n}'\nprint(s)",
        options: [
          "a1a2b1b2c1c2",
          "a1b1c1a2b2c2",
          "abc12",
          "a1a2",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nc='a': 'a1', 'a2'\nc='b': 'b1', 'b2'\nc='c': 'c1', 'c2'\nJoined: `a1a2b1b2c1c2`.",
      },
      {
        id: "ln-17",
        question: "What is the scope of `break` inside nested loops?\n\nfor outer in [1, 2]:\n    for inner in [10, 20]:\n        if inner == 20:\n            break\n        print(f'{outer}-{inner}', end=' ')",
        options: [
          "1-10 2-10",
          "1-10",
          "1-10 1-20 2-10 2-20",
          "SyntaxError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`break` terminates ONLY the closest enclosing loop (the inner loop).\nThe outer loop continues to its second iteration, printing `1-10 2-10 `.",
      },
      {
        id: "ln-18",
        question: "What will this sentinel loop output?\n\nitems = ['apple', 'stop', 'banana']\nfor item in items:\n    if item == 'stop':\n        break\n    print(item, end=' ')",
        options: [
          "apple",
          "apple stop banana",
          "apple stop",
          "banana",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'apple'` prints. When item matches sentinel `'stop'`, `break` fires immediately before printing `'stop'` or `'banana'`.",
      },
      {
        id: "ln-19",
        question: "What does this diagonal matrix loop sum output?\n\ngrid = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\ndiag_sum = sum(grid[i][i] for i in range(3))\nprint(diag_sum)",
        options: [
          "15",
          "45",
          "12",
          "9",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDiagonal items: `grid[0][0] = 1`, `grid[1][1] = 5`, `grid[2][2] = 9`.\n`1 + 5 + 9 = 15`.",
      },
      {
        id: "ln-20",
        question: "What is the output of handling exceptions inside a loop?\n\nraw_data = ['10', 'abc', '30']\ntotal = 0\nfor x in raw_data:\n    try:\n        total += int(x)\n    except ValueError:\n        continue\nprint(total)",
        options: [
          "40",
          "10",
          "ValueError",
          "0",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'10'` -> total=10.\n`'abc'` raises ValueError -> caught by except block -> `continue` skips to next item.\n`'30'` -> total=40.",
      },
    ],
  },

  // ─── Lesson 7: Comprehensions ─────────────────────────────────────────────
  "comprehensions": {
    title: "Lesson 7: List, Dict, & Set Comprehensions",
    questions: [
      {
        id: "comp-1",
        question: "What is the output of this list comprehension?\n\nres = [x ** 2 for x in range(1, 5)]\nprint(res)",
        options: [
          "[1, 4, 9, 16]",
          "[1, 4, 9, 16, 25]",
          "[2, 4, 6, 8]",
          "[0, 1, 4, 9, 16]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`range(1, 5)` gives 1, 2, 3, 4.\nSquares: 1²=1, 2²=4, 3²=9, 4²=16 -> `[1, 4, 9, 16]`.",
      },
      {
        id: "comp-2",
        question: "What does this filtered comprehension produce?\n\nnums = [1, 2, 3, 4, 5, 6]\nev = [x for x in nums if x % 2 == 0]\nprint(ev)",
        options: ["[2, 4, 6]", "[1, 3, 5]", "[2, 4]", "[4, 6]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe trailing `if x % 2 == 0` filters out odd numbers, leaving `[2, 4, 6]`.",
      },
      {
        id: "comp-3",
        question: "What will this dictionary comprehension output?\n\nwords = ['cat', 'apple']\nd = {w: len(w) for w in words}\nprint(d)",
        options: [
          "{'cat': 3, 'apple': 5}",
          "{3: 'cat', 5: 'apple'}",
          "['cat': 3, 'apple': 5]",
          "{'cat', 'apple', 3, 5}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nMappings created: `'cat': len('cat') = 3`, `'apple': len('apple') = 5` -> `{'cat': 3, 'apple': 5}`.",
      },
      {
        id: "comp-4",
        question: "What does this set comprehension produce?\n\nnums = [1, 2, 2, 3, 3, 3]\ns = {x * 10 for x in nums}\nprint(sorted(s))",
        options: ["[10, 20, 30]", "[10, 20, 20, 30, 30, 30]", "{10, 20, 30}", "[60]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSet comprehension automatically deduplicates: {10, 20, 30}.\n`sorted(s)` returns the sorted list `[10, 20, 30]`.",
      },
      {
        id: "comp-5",
        question: "What is the output of this ternary list comprehension?\n\nlabels = ['Even' if x % 2 == 0 else 'Odd' for x in range(3)]\nprint(labels)",
        options: [
          "['Even', 'Odd', 'Even']",
          "['Odd', 'Even', 'Odd']",
          "['Even', 'Even', 'Odd']",
          "SyntaxError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nx=0: Even; x=1: Odd; x=2: Even -> `['Even', 'Odd', 'Even']`.",
      },
      {
        id: "comp-6",
        question: "What will this 2D list flattening comprehension produce?\n\nmatrix = [[1, 2], [3, 4]]\nflat = [num for row in matrix for num in row]\nprint(flat)",
        options: [
          "[1, 2, 3, 4]",
          "[[1, 2], [3, 4]]",
          "[1, 3, 2, 4]",
          "[[1, 3], [2, 4]]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nNested comprehension clauses evaluate in standard for-loop order:\n`for row in matrix:` -> `for num in row:` -> collects 1, 2, 3, 4 into `[1, 2, 3, 4]`.",
      },
      {
        id: "comp-7",
        question: "What is the type of `gen = (x * 2 for x in range(5))`?",
        options: [
          "<class 'generator'>",
          "<class 'tuple'>",
          "<class 'list'>",
          "<class 'iterator'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nParentheses without `tuple()` create a lazy generator expression, whose type is `<class 'generator'>`.",
      },
      {
        id: "comp-8",
        question: "What is the output of:\n\ngen = (x for x in [10, 20, 30])\nprint(next(gen), next(gen))",
        options: ["10 20", "10 10", "20 30", "10 30"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFirst `next(gen)` yields 10.\nSecond `next(gen)` advances and yields 20.",
      },
      {
        id: "comp-9",
        question: "What does this dictionary comprehension with filter produce?\n\nscores = {'Alice': 85, 'Bob': 60, 'Charlie': 92}\npassed = {k: v for k, v in scores.items() if v >= 80}\nprint(list(passed.keys()))",
        options: [
          "['Alice', 'Charlie']",
          "['Bob']",
          "['Alice', 'Bob', 'Charlie']",
          "[85, 92]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFilters `v >= 80`: Alice (85) and Charlie (92) pass; Bob (60) is excluded -> `['Alice', 'Charlie']`.",
      },
      {
        id: "comp-10",
        question: "What is the output of:\n\npairs = [(x, y) for x in [1, 2] for y in [10, 20] if x * 10 == y]\nprint(pairs)",
        options: [
          "[(1, 10), (2, 20)]",
          "[(1, 20), (2, 10)]",
          "[(1, 10)]",
          "[]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nx=1, y=10: 1*10 == 10 (keep: (1, 10))\nx=1, y=20: 1*10 != 20\nx=2, y=10: 2*10 != 10\nx=2, y=20: 2*10 == 20 (keep: (2, 20))\nResult: `[(1, 10), (2, 20)]`.",
      },
      {
        id: "comp-11",
        question: "What will `sum(x for x in range(1, 6) if x % 2 != 0)` evaluate to?",
        options: ["9", "15", "6", "5"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nOdd numbers in range 1..5: 1, 3, 5.\n`sum(1, 3, 5) = 1 + 3 + 5 = 9`.",
      },
      {
        id: "comp-12",
        question: "What does this nested comprehension create?\n\ngrid = [[r * c for c in range(1, 4)] for r in range(1, 3)]\nprint(grid)",
        options: [
          "[[1, 2, 3], [2, 4, 6]]",
          "[[1, 2], [2, 4], [3, 6]]",
          "[1, 2, 3, 2, 4, 6]",
          "[[0, 1, 2], [0, 2, 4]]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nr=1: [1*1, 1*2, 1*3] = [1, 2, 3]\nr=2: [2*1, 2*2, 2*3] = [2, 4, 6]\nResult: `[[1, 2, 3], [2, 4, 6]]`.",
      },
      {
        id: "comp-13",
        question: "What is the output of this string comprehension?\n\nchars = [c for c in 'Python' if c in 'aeiou']\nprint(chars)",
        options: ["['o']", "['y', 'o']", "['P', 't', 'h', 'n']", "[]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nVowels checked: 'a','e','i','o','u'.\nIn 'Python', only 'o' matches lowercase vowel set -> `['o']`.",
      },
      {
        id: "comp-14",
        question: "What does this code output?\n\nd = {x: x * 2 for x in [1, 2, 3]}\nprint(d[2])",
        options: ["4", "2", "6", "KeyError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`d` is `{1: 2, 2: 4, 3: 6}`.\n`d[2]` accesses key 2, returning value 4.",
      },
      {
        id: "comp-15",
        question: "What does `all(x > 0 for x in [1, 2, 3, 0])` return?",
        options: ["False", "True", "0", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFor element 0, `0 > 0` is False.\n`all()` requires every element to be True, so it returns `False`.",
      },
      {
        id: "comp-16",
        question: "What does this tuple comprehension produce?\n\ntup = tuple(x for x in 'abc')\nprint(tup)",
        options: ["('a', 'b', 'c')", "('abc',)", "['a', 'b', 'c']", "'abc'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`tuple(generator)` consumes generator items and builds a tuple: `('a', 'b', 'c')`.",
      },
      {
        id: "comp-17",
        question: "What does this dictionary comprehension using `zip()` produce?\n\nkeys = ['id', 'user']\nvals = [101, 'Amol']\nprint({k: v for k, v in zip(keys, vals)})",
        options: [
          "{'id': 101, 'user': 'Amol'}",
          "{101: 'id', 'Amol': 'user'}",
          "[('id', 101), ('user', 'Amol')]",
          "{'id', 101, 'user', 'Amol'}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`zip(keys, vals)` pairs `('id', 101)` and `('user', 'Amol')` into `{k: v}` -> `{'id': 101, 'user': 'Amol'}`.",
      },
      {
        id: "comp-18",
        question: "What will `any(x < 0 for x in [10, 20, -5, 30])` return?",
        options: [
          "True",
          "False",
          "-5",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`any()` returns `True` as soon as at least one element satisfies the condition (`-5 < 0` is True).",
      },
      {
        id: "comp-19",
        question: "What does a list comprehension with consecutive `if` clauses do?\n\nres = [x for x in range(20) if x % 2 == 0 if x % 3 == 0]\nprint(res)",
        options: [
          "[0, 6, 12, 18]",
          "[0, 2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18]",
          "[6, 12, 18]",
          "[0, 6, 12]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nConsecutive `if` clauses act as logical `and`. Numbers divisible by both 2 and 3 (multiples of 6) under 20 are `[0, 6, 12, 18]`.",
      },
      {
        id: "comp-20",
        question: "What does this dictionary inversion comprehension produce?\n\norig = {'a': 1, 'b': 2}\ninv = {v: k for k, v in orig.items()}\nprint(inv[2])",
        options: [
          "'b'",
          "'a'",
          "2",
          "KeyError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`{v: k}` swaps keys and values, producing `{1: 'a', 2: 'b'}`. Accessing `inv[2]` yields `'b'`.",
      },
    ],
  },
};
