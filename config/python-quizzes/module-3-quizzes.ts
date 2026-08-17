import type { LessonQuiz } from "../quizzes";

export const PYTHON_MODULE_3_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Lesson 8: Lists & Tuples ─────────────────────────────────────────────
  "lists-tuples": {
    title: "Lesson 8: Python Lists & Tuples in Depth",
    questions: [
      {
        id: "lt-1",
        question: "What will the following list append vs extend code print?\n\na = [1, 2]\na.append([3, 4])\nb = [1, 2]\nb.extend([3, 4])\nprint(len(a), len(b))",
        options: ["3 4", "4 4", "3 3", "2 4"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`a.append([3, 4])` adds the list as a single element: `[1, 2, [3, 4]]` (len = 3).\n`b.extend([3, 4])` unpacks and appends each element: `[1, 2, 3, 4]` (len = 4).",
      },
      {
        id: "lt-2",
        question: "What is the output of this pop operation?\n\nnums = [10, 20, 30, 40]\nval = nums.pop(1)\nprint(val, nums)",
        options: [
          "20 [10, 30, 40]",
          "10 [20, 30, 40]",
          "40 [10, 20, 30]",
          "20 [10, 20, 30, 40]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`nums.pop(1)` removes and returns element at index 1 (`20`).\n`nums` becomes `[10, 30, 40]`.",
      },
      {
        id: "lt-3",
        question: "What does this single-element tuple type check output?\n\nt1 = (5)\nt2 = (5,)\nprint(type(t1), type(t2))",
        options: [
          "<class 'int'> <class 'tuple'>",
          "<class 'tuple'> <class 'tuple'>",
          "<class 'int'> <class 'int'>",
          "<class 'tuple'> <class 'int'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nParentheses without a trailing comma `(5)` are evaluated as integer grouping.\n`(5,)` with a comma creates a `<class 'tuple'>`.",
      },
      {
        id: "lt-4",
        question: "What is the output of sorting with a custom lambda key?\n\npairs = [(1, 'banana'), (2, 'apple'), (3, 'cherry')]\npairs.sort(key=lambda x: x[1])\nprint([p[1] for p in pairs])",
        options: [
          "['apple', 'banana', 'cherry']",
          "['banana', 'apple', 'cherry']",
          "['cherry', 'banana', 'apple']",
          "[1, 2, 3]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`key=lambda x: x[1]` sorts by the fruit string at index 1 alphabetically: `'apple'`, `'banana'`, `'cherry'`.",
      },
      {
        id: "lt-5",
        question: "What will this tuple unpacking code print?\n\nfirst, *rest, last = [10, 20, 30, 40, 50]\nprint(first, rest, last)",
        options: [
          "10 [20, 30, 40] 50",
          "10 (20, 30, 40) 50",
          "10 20 50",
          "[10] [20, 30, 40] [50]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`first` gets 10, `last` gets 50, and `*rest` captures intermediate items into a list `[20, 30, 40]`.",
      },
      {
        id: "lt-6",
        question: "What does `list.insert(1, 'X')` do to `['A', 'B', 'C']`?\n\nletters = ['A', 'B', 'C']\nletters.insert(1, 'X')\nprint(letters)",
        options: [
          "['A', 'X', 'B', 'C']",
          "['X', 'A', 'B', 'C']",
          "['A', 'X', 'C']",
          "['A', 'B', 'X', 'C']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`insert(index, element)` inserts before index 1 without overwriting, shifting 'B' and 'C' right: `['A', 'X', 'B', 'C']`.",
      },
      {
        id: "lt-7",
        question: "What is the output of:\n\nnums = [1, 2, 3, 2, 1]\nprint(nums.index(2), nums.count(2))",
        options: ["1 2", "3 2", "1 1", "0 2"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`nums.index(2)` finds the first occurrence of 2 (at index 1).\n`nums.count(2)` counts total frequency (2 times).",
      },
      {
        id: "lt-8",
        question: "What happens when executing:\n\ntup = (1, 2, 3)\ntup[0] = 10",
        options: [
          "Raises TypeError: 'tuple' object does not support item assignment",
          "tup becomes (10, 2, 3)",
          "Raises IndexError",
          "Silently ignored",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nTuples are immutable in Python.\nModifying an index in-place raises a `TypeError`.",
      },
      {
        id: "lt-9",
        question: "What will `print([1, 2] + [3, 4])` and `print([1, 2] * 2)` output?\n\nprint([1, 2] + [3, 4], [1, 2] * 2)",
        options: [
          "[1, 2, 3, 4] [1, 2, 1, 2]",
          "[4, 6] [2, 4]",
          "[1, 2, 3, 4] [[1, 2], [1, 2]]",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`+` concatenates lists -> `[1, 2, 3, 4]`.\n`*` repeats elements -> `[1, 2, 1, 2]`.",
      },
      {
        id: "lt-10",
        question: "What is the output of:\n\ncoords = {(0, 0): 'Origin', (1, 2): 'Target'}\nprint(coords[(1, 2)])",
        options: ["'Target'", "'Origin'", "KeyError", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nTuples are immutable and hashable, making them valid dictionary keys.\n`coords[(1, 2)]` retrieves `'Target'`.",
      },
      {
        id: "lt-11",
        question: "What does this slice deletion code output?\n\nnums = [0, 1, 2, 3, 4, 5]\ndel nums[1:4]\nprint(nums)",
        options: [
          "[0, 4, 5]",
          "[0, 1, 5]",
          "[0, 3, 4, 5]",
          "[1, 2, 3]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`del nums[1:4]` deletes indices 1, 2, 3 (values 1, 2, 3).\nRemaining elements: `[0, 4, 5]`.",
      },
      {
        id: "lt-12",
        question: "What does `sorted()` return compared to `.sort()`?\n\na = [3, 1, 2]\nb = sorted(a)\nc = a.sort()\nprint(b, c)",
        options: [
          "[1, 2, 3] None",
          "[1, 2, 3] [1, 2, 3]",
          "None [1, 2, 3]",
          "[3, 1, 2] None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`sorted(a)` returns a new sorted list `[1, 2, 3]`.\n`a.sort()` modifies `a` in-place and returns `None`.",
      },
      {
        id: "lt-13",
        question: "What is the output of this list slicing assignment?\n\nnums = [10, 20, 30, 40]\nnums[1:3] = [99]\nprint(nums)",
        options: [
          "[10, 99, 40]",
          "[10, 99, 30, 40]",
          "[10, [99], 40]",
          "ValueError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSlice replacement `nums[1:3]` replaces elements at index 1 and 2 (20, 30) with `[99]`, resulting in `[10, 99, 40]`.",
      },
      {
        id: "lt-14",
        question: "What will `print(min(['10', '2', '300']))` output?",
        options: ["'10'", "'2'", "'300'", "2"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nString comparison compares character ASCII values from left to right.\n`'1'` has lower ASCII value than `'2'` and `'3'`, so `'10'` is the minimum string.",
      },
      {
        id: "lt-15",
        question: "What does `nums.clear()` do?\n\nnums = [1, 2, 3]\nnums.clear()\nprint(nums)",
        options: ["[]", "None", "0", "NameError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`clear()` removes all elements from the list in-place, leaving an empty list `[]`.",
      },
      {
        id: "lt-16",
        question: "What is the output of:\n\nt = (1, [2, 3])\nt[1].append(4)\nprint(t)",
        options: [
          "(1, [2, 3, 4])",
          "TypeError",
          "(1, [2, 3])",
          "(1, 2, 3, 4)",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhile the tuple itself cannot be reassigned, the list contained at `t[1]` is mutable.\nMutating `t[1].append(4)` succeeds, producing `(1, [2, 3, 4])`.",
      },
    ],
  },

  // ─── Lesson 9: Sets & Dictionaries ────────────────────────────────────────
  "sets-dictionaries": {
    title: "Lesson 9: Sets, Dictionaries, Hash Maps & Lookup Performance",
    questions: [
      {
        id: "sd-1",
        question: "What does `d.get('role', 'Guest')` return when key `'role'` is absent?\n\nd = {'name': 'Alice'}\nprint(d.get('role', 'Guest'))",
        options: ["'Guest'", "None", "KeyError", "''"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`.get(key, default)` checks for `'role'` in `d`. Since it's missing, it returns `'Guest'` without raising KeyError.",
      },
      {
        id: "sd-2",
        question: "What is the output of this set intersection and union code?\n\ns1 = {1, 2, 3}\ns2 = {3, 4, 5}\nprint(s1 & s2, s1 | s2)",
        options: [
          "{3} {1, 2, 3, 4, 5}",
          "{1, 2, 4, 5} {3}",
          "[3] [1, 2, 3, 4, 5]",
          "{3} {3}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`s1 & s2` (intersection) finds common elements: `{3}`.\n`s1 | s2` (union) combines all elements: `{1, 2, 3, 4, 5}`.",
      },
      {
        id: "sd-3",
        question: "What does this set difference output?\n\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a - b, a ^ b)",
        options: [
          "{1, 2} {1, 2, 5, 6}",
          "{5, 6} {3, 4}",
          "{1, 2} {3, 4}",
          "{1, 2, 5, 6} {1, 2}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`a - b` (difference) = elements in a not in b: `{1, 2}`.\n`a ^ b` (symmetric difference) = elements in either but not both: `{1, 2, 5, 6}`.",
      },
      {
        id: "sd-4",
        question: "What is the output of dictionary merging in Python 3.9+?\n\nd1 = {'a': 1, 'b': 2}\nd2 = {'b': 99, 'c': 3}\nmerged = d1 | d2\nprint(merged)",
        options: [
          "{'a': 1, 'b': 99, 'c': 3}",
          "{'a': 1, 'b': 2, 'c': 3}",
          "{'a': 1, 'b': [2, 99], 'c': 3}",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe `|` operator merges dicts; keys from the right-hand operand (`d2`) overwrite keys from the left (`'b': 99`).",
      },
      {
        id: "sd-5",
        question: "What happens when executing this unhashable set addition?\n\ns = {1, 2}\ns.add([3, 4])",
        options: [
          "Raises TypeError: unhashable type: 'list'",
          "s becomes {1, 2, [3, 4]}",
          "s becomes {1, 2, 3, 4}",
          "Silently ignored",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSets require hashable (immutable) elements.\nLists are mutable and unhashable, raising `TypeError`.",
      },
      {
        id: "sd-6",
        question: "What is the difference between `empty1 = {}` and `empty2 = set()`?\n\nprint(type({}), type(set()))",
        options: [
          "<class 'dict'> <class 'set'>",
          "<class 'set'> <class 'set'>",
          "<class 'dict'> <class 'dict'>",
          "<class 'set'> <class 'dict'>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`{}` creates an empty dictionary by historical convention in Python.\n`set()` must be used to instantiate an empty set.",
      },
      {
        id: "sd-7",
        question: "What does `setdefault()` do in this code?\n\nd = {'count': 5}\nres = d.setdefault('count', 0)\nres2 = d.setdefault('total', 100)\nprint(res, res2, d['total'])",
        options: [
          "5 100 100",
          "0 100 100",
          "5 0 0",
          "5 100 KeyError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`'count'` already exists with value 5, so `setdefault` returns 5 without overwriting.\n`'total'` is missing, so it inserts `'total': 100` and returns 100.",
      },
      {
        id: "sd-8",
        question: "What is the output of `dict.pop()` with fallback?\n\nd = {'a': 1}\nval = d.pop('b', 404)\nprint(val, 'b' in d)",
        options: [
          "404 False",
          "None False",
          "KeyError",
          "404 True",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`d.pop('b', 404)` returns the fallback 404 since `'b'` is not in `d`.\n`'b' in d` evaluates to False.",
      },
      {
        id: "sd-9",
        question: "What will `print({True: 'yes', 1: 'one', 1.0: 'float_one'})` output?",
        options: [
          "{True: 'float_one'}",
          "{True: 'yes', 1: 'one', 1.0: 'float_one'}",
          "{1: 'one'}",
          "TypeError: duplicate key",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python, `hash(True) == hash(1) == hash(1.0)` and `True == 1 == 1.0`.\nThey are considered the same key: the first key `True` is preserved, but its value is updated to `'float_one'`.",
      },
      {
        id: "sd-10",
        question: "What is the difference between `remove()` and `discard()` on a set?\n\ns = {1, 2}\ns.discard(99)\nprint('Discarded')\ns.remove(99)",
        options: [
          "Prints 'Discarded', then raises KeyError on remove(99)",
          "Raises KeyError on discard(99)",
          "Prints 'Discarded' with no error",
          "Removes nothing and prints nothing",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`s.discard(99)` does nothing if 99 is absent.\n`s.remove(99)` raises a `KeyError` if the element is not found in the set.",
      },
      {
        id: "sd-11",
        question: "What does this dictionary update output?\n\nd = {'x': 1}\nd.update(y=2, z=3)\nprint(sorted(d.items()))",
        options: [
          "[('x', 1), ('y', 2), ('z', 3)]",
          "[('x', 1)]",
          "['x', 'y', 'z']",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`d.update(keyword_args)` adds kwargs as key-value pairs in-place -> `{'x': 1, 'y': 2, 'z': 3}`.",
      },
      {
        id: "sd-12",
        question: "What is the output of `frozenset` usage in a set?\n\nfs = frozenset([1, 2])\nouter_set = {fs, frozenset([3, 4])}\nprint(len(outer_set))",
        options: ["2", "4", "TypeError", "1"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`frozenset` is immutable and hashable, so it can legally be stored as an element inside another set.",
      },
      {
        id: "sd-13",
        question: "What is the output of:\n\ns = set('mississippi')\nprint(len(s))",
        options: ["4", "11", "5", "1"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nUnique characters in 'mississippi' are {'m', 'i', 's', 'p'} (4 characters). `len(s)` is 4.",
      },
      {
        id: "sd-14",
        question: "What does this code print?\n\nd = {'a': 1, 'b': 2}\nkeys = d.keys()\nd['c'] = 3\nprint(len(keys))",
        options: ["3", "2", "TypeError", "0"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`d.keys()` returns a dynamic dictionary view object.\nWhen `d` is updated, the view reflects the new key immediately, so `len(keys)` is 3.",
      },
      {
        id: "sd-15",
        question: "What will `print({x: x % 2 == 0 for x in range(3)})` produce?",
        options: [
          "{0: True, 1: False, 2: True}",
          "{0: False, 1: True, 2: False}",
          "{True: [0, 2], False: [1]}",
          "[True, False, True]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n0 % 2 == 0 -> True\n1 % 2 == 0 -> False\n2 % 2 == 0 -> True\nResult: `{0: True, 1: False, 2: True}`.",
      },
      {
        id: "sd-16",
        question: "What is the output of `dict.fromkeys()`?\n\nd = dict.fromkeys(['a', 'b'], 0)\nprint(d)",
        options: [
          "{'a': 0, 'b': 0}",
          "{'a': None, 'b': None}",
          "['a': 0, 'b': 0]",
          "{'a', 'b', 0}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`dict.fromkeys(keys, initial_val)` creates a new dict with specified keys all initialized to 0: `{'a': 0, 'b': 0}`.",
      },
    ],
  },

  // ─── Lesson 10: Advanced Collections ──────────────────────────────────────
  "advanced-collections": {
    title: "Lesson 10: Advanced Collections: defaultdict, Counter, deque & namedtuple",
    questions: [
      {
        id: "ac-1",
        question: "What does this `defaultdict(list)` code output?\n\nfrom collections import defaultdict\nd = defaultdict(list)\nd['fruits'].append('apple')\nprint(d['fruits'], d['vegetables'])",
        options: [
          "['apple'] []",
          "['apple'] KeyError",
          "['apple'] None",
          "['apple'] ['apple']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nAccessing missing key `'vegetables'` automatically calls `list()` to initialize an empty list `[]` without throwing KeyError.",
      },
      {
        id: "ac-2",
        question: "What will this `Counter` operation print?\n\nfrom collections import Counter\nc = Counter('abracadabra')\nprint(c.most_common(2))",
        options: [
          "[('a', 5), ('b', 2)]",
          "[('a', 5), ('r', 2)]",
          "{'a': 5, 'b': 2}",
          "['a', 'b']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nCharacter frequencies in 'abracadabra': 'a':5, 'b':2, 'r':2, 'c':1, 'd':1.\n`most_common(2)` returns the top 2 as `[('a', 5), ('b', 2)]` (or 'r':2).",
      },
      {
        id: "ac-3",
        question: "What is the output of this `deque(maxlen=3)` sliding buffer?\n\nfrom collections import deque\nq = deque(maxlen=3)\nfor i in range(5):\n    q.append(i)\nprint(list(q))",
        options: ["[2, 3, 4]", "[0, 1, 2]", "[0, 1, 2, 3, 4]", "[3, 4]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`deque(maxlen=3)` keeps only the 3 most recent items.\nAdding 0, 1, 2, 3, 4 drops 0 and 1, leaving `[2, 3, 4]`.",
      },
      {
        id: "ac-4",
        question: "What does `appendleft()` and `popleft()` do on a deque?\n\nfrom collections import deque\nq = deque([10, 20])\nq.appendleft(5)\nval = q.popleft()\nprint(val, list(q))",
        options: [
          "5 [10, 20]",
          "10 [5, 20]",
          "20 [5, 10]",
          "5 [5, 10, 20]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`q.appendleft(5)` makes `q = [5, 10, 20]`.\n`q.popleft()` pops from index 0 in O(1) time, returning `5` and leaving `[10, 20]`.",
      },
      {
        id: "ac-5",
        question: "What does this `namedtuple` code output?\n\nfrom collections import namedtuple\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(10, 20)\nprint(p.x + p[1])",
        options: ["30", "10", "20", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nNamedtuple fields can be accessed by name `p.x` (10) or by index `p[1]` (20).\n`10 + 20 = 30`.",
      },
      {
        id: "ac-6",
        question: "What is the output of `Counter` arithmetic?\n\nfrom collections import Counter\nc1 = Counter({'a': 3, 'b': 1})\nc2 = Counter({'a': 1, 'b': 2})\nprint((c1 + c2)['a'], (c1 - c2)['b'])",
        options: ["4 0", "4 -1", "2 0", "3 1"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`c1 + c2` adds counts: 'a' becomes 3 + 1 = 4.\n`c1 - c2` subtracts counts and drops non-positive values: 1 - 2 = -1 (omitted / returns 0).",
      },
      {
        id: "ac-7",
        question: "What will this `defaultdict(int)` word frequency code print?\n\nfrom collections import defaultdict\ncounts = defaultdict(int)\nfor w in ['cat', 'dog', 'cat']:\n    counts[w] += 1\nprint(counts['cat'], counts['bird'])",
        options: ["2 0", "2 KeyError", "2 None", "1 0"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`int()` returns 0 as default.\n`'cat'` is incremented twice (2).\nMissing `'bird'` returns default `0`.",
      },
      {
        id: "ac-8",
        question: "What does `deque.rotate(2)` do to `deque([1, 2, 3, 4, 5])`?\n\nfrom collections import deque\nq = deque([1, 2, 3, 4, 5])\nq.rotate(2)\nprint(list(q))",
        options: [
          "[4, 5, 1, 2, 3]",
          "[3, 4, 5, 1, 2]",
          "[2, 3, 4, 5, 1]",
          "[5, 4, 3, 2, 1]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`rotate(2)` shifts elements 2 positions to the right, wrapping 4 and 5 to the front: `[4, 5, 1, 2, 3]`.",
      },
      {
        id: "ac-9",
        question: "What does `namedtuple._asdict()` produce?\n\nfrom collections import namedtuple\nUser = namedtuple('User', ['name', 'age'])\nu = User('Amol', 25)\nprint(u._asdict())",
        options: [
          "{'name': 'Amol', 'age': 25}",
          "('name', 'age')",
          "['name', 'age']",
          "{'Amol': 25}",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`u._asdict()` converts named tuple fields into a standard dictionary: `{'name': 'Amol', 'age': 25}`.",
      },
      {
        id: "ac-10",
        question: "What is the output of `ChainMap` lookup?\n\nfrom collections import ChainMap\ndefaults = {'theme': 'light', 'lang': 'en'}\nuser = {'theme': 'dark'}\ncfg = ChainMap(user, defaults)\nprint(cfg['theme'], cfg['lang'])",
        options: [
          "dark en",
          "light en",
          "dark None",
          "KeyError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`ChainMap` searches maps in order: finds `'theme'` in `user` ('dark') and `'lang'` in `defaults` ('en').",
      },
      {
        id: "ac-11",
        question: "What happens when you try to modify a `namedtuple` attribute?\n\nfrom collections import namedtuple\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(1, 2)\np.x = 10",
        options: [
          "Raises AttributeError: can't set attribute",
          "p becomes Point(x=10, y=2)",
          "Creates a new Point",
          "Silently ignored",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`namedtuple` instances are immutable tuples. Modifying attributes raises `AttributeError` (use `p._replace(x=10)` instead).",
      },
      {
        id: "ac-12",
        question: "What does `p._replace(x=10)` return on a namedtuple?\n\nfrom collections import namedtuple\nPoint = namedtuple('Point', ['x', 'y'])\np1 = Point(1, 2)\np2 = p1._replace(x=10)\nprint(p1.x, p2.x)",
        options: ["1 10", "10 10", "1 2", "AttributeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`_replace()` returns a new named tuple with specified fields modified, leaving `p1` unchanged.",
      },
      {
        id: "ac-13",
        question: "What does `OrderedDict.move_to_end('a')` do?\n\nfrom collections import OrderedDict\nod = OrderedDict([('a', 1), ('b', 2), ('c', 3)])\nod.move_to_end('a')\nprint(list(od.keys()))",
        options: [
          "['b', 'c', 'a']",
          "['a', 'b', 'c']",
          "['c', 'b', 'a']",
          "['b', 'a', 'c']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`move_to_end('a')` repositions key `'a'` to the right end (last position): `['b', 'c', 'a']`.",
      },
      {
        id: "ac-14",
        question: "What will `Counter('apple').total()` return in Python 3.10+?\n\nfrom collections import Counter\nc = Counter('apple')\nprint(c.total())",
        options: ["5", "4", "len('apple')", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`c.total()` sums all counts: 1('a') + 2('p') + 1('l') + 1('e') = 5.",
      },
      {
        id: "ac-15",
        question: "What does `Counter.elements()` produce?\n\nfrom collections import Counter\nc = Counter({'a': 2, 'b': 1})\nprint(sorted(c.elements()))",
        options: ["['a', 'a', 'b']", "['a', 'b']", "[2, 1]", "['ab']"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`c.elements()` yields an iterator repeating each element according to its count: `'a'` twice and `'b'` once.",
      },
      {
        id: "ac-16",
        question: "What does this code with `defaultdict(lambda: 'N/A')` output?\n\nfrom collections import defaultdict\nd = defaultdict(lambda: 'N/A')\nprint(d['unknown'])",
        options: ["'N/A'", "None", "KeyError", "''"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe custom factory lambda returns `'N/A'` whenever an uninitialized key is queried.",
      },
    ],
  },

  // ─── Lesson 11: Nested Data & Copies ──────────────────────────────────────
  "nested-copies": {
    title: "Lesson 11: Nested Data Structures & Shallow vs Deep Copy",
    questions: [
      {
        id: "nc-1",
        question: "What is the output of this shallow copy modification?\n\nimport copy\na = [[1, 2], [3, 4]]\nb = copy.copy(a)\nb[0].append(99)\nprint(a[0])",
        options: ["[1, 2, 99]", "[1, 2]", "[[1, 2], 99]", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`copy.copy(a)` creates a shallow copy.\n`b[0]` and `a[0]` point to the same nested list in memory, so `a[0]` becomes `[1, 2, 99]`.",
      },
      {
        id: "nc-2",
        question: "What will `copy.deepcopy()` output in the same scenario?\n\nimport copy\na = [[1, 2], [3, 4]]\nb = copy.deepcopy(a)\nb[0].append(99)\nprint(a[0], b[0])",
        options: [
          "[1, 2] [1, 2, 99]",
          "[1, 2, 99] [1, 2, 99]",
          "[1, 2] [1, 2]",
          "Error",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`deepcopy()` clones all nested structures recursively.\nModifying `b[0]` leaves `a[0]` completely untouched `[1, 2]`.",
      },
      {
        id: "nc-3",
        question: "What bug occurs in this 2D list initialization?\n\ngrid = [[0] * 2] * 2\ngrid[0][0] = 1\nprint(grid)",
        options: [
          "[[1, 0], [1, 0]]",
          "[[1, 0], [0, 0]]",
          "[[1, 1], [0, 0]]",
          "IndexError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`[[0] * 2] * 2` replicates the exact same row reference twice.\n`grid[0]` and `grid[1]` are identical objects in memory, so both rows show `[1, 0]`.",
      },
      {
        id: "nc-4",
        question: "How do you create an independent 2x2 grid correctly?\n\ngrid = [[0 for _ in range(2)] for _ in range(2)]\ngrid[0][0] = 1\nprint(grid)",
        options: [
          "[[1, 0], [0, 0]]",
          "[[1, 0], [1, 0]]",
          "[[0, 0], [0, 0]]",
          "[[1, 1], [1, 1]]",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nList comprehension instantiates a fresh new inner list on each outer iteration, making each row independent.",
      },
      {
        id: "nc-5",
        question: "What is the output of nested dictionary chained `.get()`?\n\nuser = {'profile': {'name': 'Amol'}}\ncity = user.get('profile', {}).get('city', 'Unknown')\nprint(city)",
        options: ["'Unknown'", "None", "KeyError", "'Amol'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`user.get('profile', {})` returns `{'name': 'Amol'}`.\nCalling `.get('city', 'Unknown')` safely yields `'Unknown'` without raising KeyError.",
      },
      {
        id: "nc-6",
        question: "What is the output of:\n\na = [10, 20]\nb = a\nb.append(30)\nprint(a is b, len(a))",
        options: ["True 3", "False 2", "True 2", "False 3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`b = a` assigns by reference (no copy).\nBoth names point to the same list object (`a is b` is True) with 3 elements.",
      },
      {
        id: "nc-7",
        question: "What does this slice copy output for a 1D primitive list?\n\nx = [1, 2, 3]\ny = x[:]\ny[0] = 99\nprint(x[0], y[0])",
        options: ["1 99", "99 99", "1 1", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`x[:]` makes a shallow copy of the 1D list.\nBecause integers are immutable primitives, reassigning `y[0]` does not affect `x[0]`.",
      },
      {
        id: "nc-8",
        question: "What does this dict copy code output?\n\nd1 = {'scores': [80, 90]}\nd2 = d1.copy()\nd2['scores'].append(100)\nprint(d1['scores'])",
        options: [
          "[80, 90, 100]",
          "[80, 90]",
          "KeyError",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`d1.copy()` is a shallow copy.\nThe list `d1['scores']` is shared by reference with `d2['scores']`, so appending 100 alters `d1`.",
      },
      {
        id: "nc-9",
        question: "What is the output of JSON serialization clone for nested dicts?\n\nimport json\norig = {'a': [1, 2]}\ncloned = json.loads(json.dumps(orig))\ncloned['a'].append(3)\nprint(orig['a'], cloned['a'])",
        options: [
          "[1, 2] [1, 2, 3]",
          "[1, 2, 3] [1, 2, 3]",
          "[1, 2] [1, 2]",
          "Error",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`json.loads(json.dumps(orig))` creates a fresh deep clone of standard JSON objects.",
      },
      {
        id: "nc-10",
        question: "What will `id(a) == id(b)` output for `a = [1]; b = a.copy()`?",
        options: ["False", "True", "None", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`a.copy()` allocates a new list in memory with a different memory address, so `id(a) == id(b)` is False.",
      },
      {
        id: "nc-11",
        question: "What happens when `copy.deepcopy` copies a circular reference?\n\nimport copy\na = [1]\na.append(a)\nb = copy.deepcopy(a)\nprint(b[1] is b)",
        options: ["True", "False", "RecursionError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`deepcopy` maintains an internal memo dictionary mapping original objects to copied objects, correctly preserving self-references without infinite recursion.",
      },
      {
        id: "nc-12",
        question: "What is the output of:\n\ndata = {'items': [{'id': 1}, {'id': 2}]}\nprint(data['items'][1]['id'])",
        options: ["2", "1", "[{'id': 2}]", "{'id': 2}"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`data['items']` is the list.\nIndex `[1]` is the dict `{'id': 2}`.\nKey `['id']` returns `2`.",
      },
      {
        id: "nc-13",
        question: "What does this dictionary unpacking shallow copy produce?\n\noriginal = {'a': [1], 'b': 2}\nclone = {**original}\nclone['a'].append(99)\nclone['b'] = 200\nprint(original['a'], original['b'])",
        options: [
          "[1, 99] 2",
          "[1] 2",
          "[1, 99] 200",
          "[1] 200",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`{**original}` is shallow: nested list `'a'` is shared (`[1, 99]`), but primitive `'b'` rebinds in `clone` only (`original['b']` stays 2).",
      },
      {
        id: "nc-14",
        question: "What will `copy.copy((1, 2, 3)) is (1, 2, 3)` evaluate to in Python?",
        options: [
          "True (Python optimizes immutable tuples by returning the exact same instance)",
          "False",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nFor completely immutable objects (like tuples of ints), `copy.copy()` returns the object itself since immutability makes copying unnecessary.",
      },
      {
        id: "nc-15",
        question: "What is the output of:\n\ntree = {'val': 1, 'left': {'val': 2, 'left': None}}\nprint(tree['left']['left'] is None)",
        options: ["True", "False", "KeyError", "1"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`tree['left']` is `{'val': 2, 'left': None}`.\n`tree['left']['left']` is `None`, so `is None` is True.",
      },
      {
        id: "nc-16",
        question: "What does this code output?\n\na = [[0]]\nb = a * 3\nb[0][0] = 5\nprint(b)",
        options: [
          "[[5], [5], [5]]",
          "[[5], [0], [0]]",
          "[[5, 0, 0]]",
          "Error",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`a * 3` duplicates the reference to `[0]` three times.\nModifying `b[0][0] = 5` affects all 3 elements: `[[5], [5], [5]]`.",
      },
    ],
  },
};
