import type { LessonQuiz } from "../quizzes";

export const PYTHON_MODULE_5_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Lesson 16: Classes & Objects ─────────────────────────────────────────
  "classes-objects": {
    title: "Lesson 16: Classes, Objects, `__init__`, `self` & Instance State",
    questions: [
      {
        id: "co-1",
        question: "What is the purpose of the `__init__` method in a Python class?\n\nclass User:\n    def __init__(self, name):\n        self.name = name",
        options: [
          "It acts as the constructor/initializer called automatically when creating a new class instance",
          "It deletes the object from memory",
          "It exports the class as a dictionary",
          "It forces the class to be static",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__init__` initializes instance attributes when `User('Amol')` is instantiated.",
      },
      {
        id: "co-2",
        question: "What does the `self` parameter represent in class methods?\n\nclass Dog:\n    def bark(self):\n        return 'Woof!'",
        options: [
          "The explicit reference to the current instance of the class invoking the method",
          "The parent class pointer",
          "The class bytecode pointer",
          "A reserved keyword that creates a thread",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nWhen calling `d.bark()`, Python automatically passes instance `d` as the first parameter `self`.",
      },
      {
        id: "co-3",
        question: "What is the output of class attribute vs instance attribute resolution?\n\nclass Car:\n    wheels = 4\n\nc1 = Car()\nc2 = Car()\nc1.wheels = 6\nprint(c1.wheels, c2.wheels, Car.wheels)",
        options: [
          "6 4 4",
          "6 6 6",
          "4 4 4",
          "6 6 4",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`c1.wheels = 6` creates an instance attribute on `c1` shadowing class attribute `wheels` (4).\n`c2` and `Car` still see the class attribute 4.",
      },
      {
        id: "co-4",
        question: "What is the difference between `@classmethod` and `@staticmethod`?\n\nclass MyClass:\n    @classmethod\n    def cm(cls): return cls\n    @staticmethod\n    def sm(): return 'static'",
        options: [
          "`@classmethod` receives the class (`cls`) as its first parameter; `@staticmethod` receives neither `self` nor `cls`",
          "`@staticmethod` cannot be called on instances",
          "`@classmethod` runs during compilation",
          "They are identical aliases",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nClass methods receive `cls` (useful for factory constructors); static methods behave like plain functions attached to the class namespace.",
      },
      {
        id: "co-5",
        question: "What does `isinstance()` check in this code?\n\nclass Animal: pass\nclass Dog(Animal): pass\nd = Dog()\nprint(isinstance(d, Animal), isinstance(d, Dog))",
        options: [
          "True True",
          "False True",
          "True False",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Dog` inherits from `Animal`, so instance `d` is an instance of both `Dog` and `Animal`.",
      },
      {
        id: "co-6",
        question: "What will `issubclass()` return?\n\nclass A: pass\nclass B(A): pass\nprint(issubclass(B, A), issubclass(A, B))",
        options: [
          "True False",
          "True True",
          "False True",
          "False False",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`B` is a subclass of `A` (True), but `A` is not a subclass of `B` (False).",
      },
      {
        id: "co-7",
        question: "What does `hasattr()` and `getattr()` do?\n\nclass Person:\n    age = 25\np = Person()\nprint(hasattr(p, 'age'), getattr(p, 'age', 0))",
        options: [
          "True 25",
          "True None",
          "False 0",
          "25 25",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`hasattr(p, 'age')` returns True; `getattr(p, 'age', 0)` retrieves attribute value 25 safely.",
      },
      {
        id: "co-8",
        question: "What does `__dict__` inspect on an instance?\n\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\np = Point(3, 4)\nprint(p.__dict__)",
        options: [
          "{'x': 3, 'y': 4}",
          "['x', 'y']",
          "(3, 4)",
          "<dict of methods>",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`p.__dict__` is the dictionary mapping instance variable names to their current values.",
      },
      {
        id: "co-9",
        question: "What is the output of:\n\nclass Counter:\n    count = 0\n    def __init__(self):\n        Counter.count += 1\na = Counter()\nb = Counter()\nprint(Counter.count)",
        options: ["2", "1", "0", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nEvery instantiation runs `__init__` and increments the class attribute `Counter.count` from 0 -> 1 -> 2.",
      },
      {
        id: "co-10",
        question: "What happens when you define `__new__` vs `__init__` in a class?\n\nclass Singleton:\n    def __new__(cls, *args, **kwargs):\n        return super().__new__(cls)",
        options: [
          "`__new__` is the actual allocator that creates the instance object in memory; `__init__` initializes its attributes afterwards",
          "`__new__` only runs when deleting the object",
          "`__new__` is deprecated in Python 3",
          "`__init__` runs before `__new__`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__new__` creates and returns the raw instance object; `__init__` receives that created instance as `self` to set up attributes.",
      },
      {
        id: "co-11",
        question: "What does `delattr(obj, 'attr')` do?\n\nclass Item:\n    def __init__(self):\n        self.price = 50\ni = Item()\ndelattr(i, 'price')\nprint(hasattr(i, 'price'))",
        options: ["False", "True", "50", "AttributeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`delattr(i, 'price')` removes attribute `'price'` from instance `i`, so `hasattr` returns False.",
      },
      {
        id: "co-12",
        question: "What is the output of a class method factory constructor?\n\nclass Date:\n    def __init__(self, y, m, d):\n        self.y, self.m, self.d = y, m, d\n    @classmethod\n    def from_str(cls, s):\n        y, m, d = map(int, s.split('-'))\n        return cls(y, m, d)\nd = Date.from_str('2026-08-18')\nprint(d.y)",
        options: ["2026", "'2026'", "18", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Date.from_str` parses string `'2026-08-18'` and calls `cls(2026, 8, 18)` to instantiate and return a `Date` object.",
      },
      {
        id: "co-13",
        question: "What is the output of:\n\nclass Greeter:\n    def hello(self, name):\n        return f'Hi {name}'\ng = Greeter()\nfn = g.hello\nprint(fn('Amol'))",
        options: ["'Hi Amol'", "TypeError", "None", "'Hi self'"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`g.hello` is a bound method with `self` already attached to instance `g`. Calling `fn('Amol')` works seamlessly.",
      },
      {
        id: "co-14",
        question: "What will `setattr(p, 'z', 100)` do if `z` is not yet an attribute of instance `p`?\n\nclass Point: pass\np = Point()\nsetattr(p, 'z', 100)\nprint(p.z)",
        options: ["100", "AttributeError", "None", "False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`setattr(p, 'z', 100)` dynamically adds the attribute `'z' = 100` onto instance `p`.",
      },
      {
        id: "co-15",
        question: "What does `type(ClassInstance)` return?\n\nclass App: pass\na = App()\nprint(type(a) is App)",
        options: ["True", "False", "None", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`type(a)` returns the class `<class '__main__.App'>`, which is identical to `App`.",
      },
      {
        id: "co-16",
        question: "What is the output of:\n\nclass Test:\n    pass\nt = Test()\nprint(isinstance(t, object))",
        options: ["True", "False", "None", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn Python 3, all classes inherit from the root `object` base class.",
      },
      {
        id: "co-17",
        question: "What does `@classmethod` receive as its first parameter?\n\nclass Factory:\n    @classmethod\n    def create(cls):\n        return cls()",
        options: [
          "The class object itself (`cls`), not the instance",
          "The instance (`self`)",
          "The module object",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@classmethod` transforms a method to receive the class object (`cls`) as its first argument rather than an instance.",
      },
      {
        id: "co-18",
        question: "What does `@staticmethod` in a class do?\n\nclass MathUtil:\n    @staticmethod\n    def add(a, b):\n        return a + b",
        options: [
          "Defines a regular utility function bound to the class namespace without passing self or cls",
          "Prevents the class from being instantiated",
          "Makes the method immutable",
          "Runs the method in a thread",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@staticmethod` does not receive an implicit first argument (`self` or `cls`), acting as a scoped plain function.",
      },
      {
        id: "co-19",
        question: "What does `getattr(obj, 'name', 'Default')` do?\n\nclass Item: pass\ni = Item()\nprint(getattr(i, 'title', 'Untitled'))",
        options: [
          "'Untitled'",
          "AttributeError",
          "None",
          "''",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`getattr(obj, attr, default)` safely fetches attribute `'title'`, returning `'Untitled'` fallback when missing.",
      },
      {
        id: "co-20",
        question: "What will checking `isinstance(obj, Class)` return for inheritance chains?\n\nclass Animal: pass\nclass Dog(Animal): pass\nprint(isinstance(Dog(), Animal))",
        options: [
          "True",
          "False",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`isinstance()` respects inheritance hierarchies: an instance of child class `Dog` is an instance of `Animal`.",
      },
    ],
  },

  // ─── Lesson 17: Inheritance & Polymorphism ────────────────────────────────
  "inheritance-polymorphism": {
    title: "Lesson 17: Inheritance, Polymorphism, `super()` & MRO",
    questions: [
      {
        id: "ip-1",
        question: "What does `super().__init__()` do in a derived class constructor?\n\nclass Base:\n    def __init__(self, id):\n        self.id = id\nclass Child(Base):\n    def __init__(self, id, name):\n        super().__init__(id)\n        self.name = name",
        options: [
          "Delegates attribute initialization to the parent class `Base.__init__` using MRO",
          "Overwrites Child methods",
          "Creates a new Base instance in a separate thread",
          "Returns None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`super().__init__(id)` invokes the initializer of the superclass in the Method Resolution Order chain.",
      },
      {
        id: "ip-2",
        question: "What is Method Resolution Order (MRO) in Python?\n\nclass A: pass\nclass B(A): pass\nprint([c.__name__ for c in B.__mro__])",
        options: [
          "['B', 'A', 'object']",
          "['A', 'B', 'object']",
          "['object', 'A', 'B']",
          "['B', 'object']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython uses the C3 Linearization algorithm to order method searches: `B -> A -> object`.",
      },
      {
        id: "ip-3",
        question: "What is the output of polymorphism in this duck typing example?\n\nclass Dog:\n    def speak(self): return 'Woof'\nclass Cat:\n    def speak(self): return 'Meow'\nfor pet in [Dog(), Cat()]:\n    print(pet.speak(), end=' ')",
        options: ["Woof Meow", "Woof Woof", "Meow Meow", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPolymorphism allows different objects implementing the same interface (`speak()`) to be used interchangeably: prints `Woof Meow `.",
      },
      {
        id: "ip-4",
        question: "What happens in multiple inheritance diamond problem?\n\nclass A:\n    def f(self): return 'A'\nclass B(A):\n    def f(self): return 'B'\nclass C(A):\n    def f(self): return 'C'\nclass D(B, C): pass\nprint(D().f())",
        options: ["'B'", "'C'", "'A'", "AmbiguityError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIn `class D(B, C)`, `B` is listed first in MRO: `D -> B -> C -> A -> object`. `B.f()` is resolved first -> `'B'`.",
      },
      {
        id: "ip-5",
        question: "How do you define an abstract base class (ABC) and abstract method in Python?\n\nfrom abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass",
        options: [
          "Inherit from `abc.ABC` and decorate methods with `@abstractmethod`",
          "Use the `interface` keyword",
          "Write `virtual def area()`",
          "Set `area = None`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nSubclassing `ABC` and applying `@abstractmethod` prevents direct instantiation of subclasses until all abstract methods are implemented.",
      },
      {
        id: "ip-6",
        question: "What happens if a child class forgets to implement an `@abstractmethod`?\n\nfrom abc import ABC, abstractmethod\nclass Animal(ABC):\n    @abstractmethod\n    def sound(self): pass\nclass Cat(Animal): pass\nc = Cat()",
        options: [
          "Raises TypeError: Can't instantiate abstract class Cat without an implementation for abstract method 'sound'",
          "Instantiates successfully with sound returning None",
          "Raises SyntaxError at class definition time",
          "Deletes Cat",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nInstantiating a subclass missing required abstract method implementations raises a `TypeError` at instantiation time.",
      },
      {
        id: "ip-7",
        question: "What is the output of method overriding?\n\nclass Parent:\n    def show(self): return 'Parent'\nclass Child(Parent):\n    def show(self): return 'Child'\nprint(Child().show())",
        options: ["'Child'", "'Parent'", "'Parent Child'", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Child` overrides `show()`, so calling `Child().show()` executes the child method version.",
      },
      {
        id: "ip-8",
        question: "What does `super().method()` return when extending parent behavior?\n\nclass Base:\n    def cost(self): return 100\nclass Extra(Base):\n    def cost(self): return super().cost() + 25\nprint(Extra().cost())",
        options: ["125", "25", "100", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`super().cost()` evaluates to 100; `100 + 25 = 125`.",
      },
      {
        id: "ip-9",
        question: "What is the output of `isinstance()` with multiple classes in a tuple?\n\nx = [1, 2]\nprint(isinstance(x, (list, tuple, set)))",
        options: ["True", "False", "TypeError", "[True, False, False]"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`isinstance(obj, (A, B, C))` returns True if `obj` is an instance of ANY class in the tuple.",
      },
      {
        id: "ip-10",
        question: "What is composition vs inheritance in OOP?\n\nclass Engine:\n    def start(self): return 'Vroom'\nclass Car:\n    def __init__(self):\n        self.engine = Engine()",
        options: [
          "Composition models 'has-a' relationships by holding references to other objects; inheritance models 'is-a'",
          "Composition is slower",
          "Inheritance does not support classes",
          "Composition is illegal in Python",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Car` has an `Engine` (composition), offering greater flexibility than subclassing `Engine`.",
      },
      {
        id: "ip-11",
        question: "What does `Class.__bases__` return?\n\nclass A: pass\nclass B(A): pass\nprint(B.__bases__)",
        options: [
          "(<class '__main__.A'>,)",
          "(<class '__main__.B'>,)",
          "[A]",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__bases__` is a tuple of direct base superclasses of class B.",
      },
      {
        id: "ip-12",
        question: "What is the output of:\n\nclass Base:\n    def __init__(self):\n        self.tag = 'Base'\nclass Sub(Base):\n    def __init__(self):\n        self.tag = 'Sub'\ns = Sub()\nprint(s.tag)",
        options: ["Sub", "Base", "BaseSub", "AttributeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`Sub.__init__` overrides `Base.__init__` without calling `super()`, setting `s.tag = 'Sub'`.",
      },
      {
        id: "ip-13",
        question: "What does the Python principle 'Duck Typing' refer to?\n\n# 'If it walks like a duck and quacks like a duck, it's a duck'",
        options: [
          "Checking for the presence of methods/behaviors rather than strict nominal type inheritance",
          "Classes named after animals",
          "Disabling type hints",
          "Converting all objects to strings",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDuck typing means code works with any object that provides the required methods (`.read()`, `.quack()`) without requiring subclassing.",
      },
      {
        id: "ip-14",
        question: "What is the output of:\n\nclass Top:\n    val = 1\nclass Mid(Top):\n    pass\nclass Bot(Mid):\n    pass\nprint(Bot.val)",
        options: ["1", "None", "AttributeError", "0"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nAttribute lookup searches up the inheritance hierarchy: finds `val = 1` in `Top`.",
      },
      {
        id: "ip-15",
        question: "What happens when `super()` is used in cooperative multiple inheritance?\n\nclass A: pass\nclass B(A):\n    def run(self):\n        super().run()",
        options: [
          "Calls the next class along the runtime MRO chain",
          "Always calls only the first parent listed",
          "Raises a SyntaxError",
          "Creates an infinite loop",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`super()` dynamically traverses the MRO, enabling clean cooperative multiple inheritance.",
      },
      {
        id: "ip-16",
        question: "What does `B.mro()` return compared to `B.__mro__`?\n\nclass A: pass\nclass B(A): pass\nprint(B.mro() == list(B.__mro__))",
        options: ["True", "False", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`B.mro()` returns the MRO as a list, while `B.__mro__` returns it as a tuple; their contents are identical.",
      },
      {
        id: "ip-17",
        question: "What happens when an abstract method is not implemented in a child class?\n\nfrom abc import ABC, abstractmethod\nclass Base(ABC):\n    @abstractmethod\n    def run(self): pass\nclass Child(Base): pass\n# Child()",
        options: [
          "Raises TypeError: Can't instantiate abstract class Child with abstract method run",
          "Creates child successfully",
          "Silently returns None",
          "SyntaxError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nPython's ABC module enforces contract compliance: subclasses missing abstract method implementations cannot be instantiated.",
      },
      {
        id: "ip-18",
        question: "What does `issubclass(Child, Parent)` check?\n\nclass A: pass\nclass B(A): pass\nprint(issubclass(B, A), issubclass(A, B))",
        options: [
          "True False",
          "True True",
          "False False",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`issubclass(B, A)` is True because B inherits from A. `issubclass(A, B)` is False.",
      },
      {
        id: "ip-19",
        question: "What does `__init_subclass__` hook allow in Python 3.6+?\n\nclass PluginBase:\n    registry = []\n    def __init_subclass__(cls, **kwargs):\n        super().__init_subclass__(**kwargs)\n        cls.registry.append(cls)",
        options: [
          "Automatically customizes and registers child classes upon class creation without metaclasses",
          "Deletes child classes",
          "Initializes instance attributes",
          "Encrypts subclass code",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__init_subclass__` is invoked whenever the containing class is subclassed, enabling clean class registration.",
      },
      {
        id: "ip-20",
        question: "What is the output of inspecting the Method Resolution Order of object?\n\nprint(object.mro())",
        options: [
          "[<class 'object'>]",
          "[]",
          "None",
          "AttributeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`object` is the ultimate root base class of all new-style classes in Python, with `[<class 'object'>]` as its MRO.",
      },
    ],
  },

  // ─── Lesson 18: Encapsulation & Magic Methods ─────────────────────────────
  "encapsulation-magic-methods": {
    title: "Lesson 18: Encapsulation, Properties, `__str__`, `__repr__` & Dunder Methods",
    questions: [
      {
        id: "emm-1",
        question: "What is name mangling for double-underscore private attributes?\n\nclass BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\nacc = BankAccount(100)\nprint(acc._BankAccount__balance)",
        options: [
          "100 (Python mangles `__balance` to `_ClassName__attribute` to prevent accidental subclass collisions)",
          "Raises AttributeError",
          "None",
          "BankAccount.__balance",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nAttributes with leading double underscores (e.g. `__balance`) are renamed to `_ClassName__attribute` by Python's name mangler.",
      },
      {
        id: "emm-2",
        question: "What is the difference between `__str__` and `__repr__`?\n\nclass User:\n    def __str__(self): return 'User: Amol'\n    def __repr__(self): return 'User(name=\"Amol\")'",
        options: [
          "`__str__` provides a human-friendly readable display; `__repr__` provides an unambiguous developer/debugging representation",
          "`__repr__` is for numbers only",
          "`__str__` is deprecated",
          "They must always return identical strings",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`print(u)` or `str(u)` calls `__str__`; inspecting in REPL or `repr(u)` calls `__repr__`.",
      },
      {
        id: "emm-3",
        question: "What does the `@property` decorator do?\n\nclass Circle:\n    def __init__(self, r):\n        self._r = r\n    @property\n    def radius(self):\n        return self._r\n\nc = Circle(5)\nprint(c.radius)",
        options: [
          "Allows calling the `radius` getter method using clean attribute syntax (`c.radius` instead of `c.radius()`)",
          "Makes the radius read-only at hardware level",
          "Converts radius to a string",
          "Deletes radius",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@property` turns a method into a managed getter property accessed like an attribute: `c.radius`.",
      },
      {
        id: "emm-4",
        question: "How do you define a setter for a `@property`?\n\nclass Temperature:\n    def __init__(self, c):\n        self._c = c\n    @property\n    def temp(self):\n        return self._c\n    @temp.setter\n    def temp(self, val):\n        if val < -273.15: raise ValueError\n        self._c = val",
        options: [
          "Use `@<property_name>.setter` decorator above the setter method",
          "Use `@set_property`",
          "Use `@setter`",
          "Write `def set_temp()`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@temp.setter` defines the validation logic executed when someone writes `t.temp = 25`.",
      },
      {
        id: "emm-5",
        question: "What dunder method enables the `+` operator for custom classes?\n\nclass Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\nv = Vector(1, 2) + Vector(3, 4)\nprint(v.x, v.y)",
        options: ["4 6", "1 2 3 4", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`v1 + v2` translates to `v1.__add__(v2)`, returning `Vector(1+3, 2+4) = Vector(4, 6)`.",
      },
      {
        id: "emm-6",
        question: "What dunder method enables `len(obj)`?\n\nclass Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    def __len__(self):\n        return len(self.songs)\n\nprint(len(Playlist(['Song A', 'Song B'])))",
        options: ["2", "TypeError", "['Song A', 'Song B']", "0"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`len(p)` invokes `p.__len__()`, which returns integer `2`.",
      },
      {
        id: "emm-7",
        question: "What dunder method enables square bracket indexing `obj[key]`?\n\nclass CustomList:\n    def __init__(self, items):\n        self._items = items\n    def __getitem__(self, idx):\n        return self._items[idx] * 2\n\ncl = CustomList([10, 20])\nprint(cl[1])",
        options: ["40", "20", "10", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`cl[1]` calls `cl.__getitem__(1)`, returning `20 * 2 = 40`.",
      },
      {
        id: "emm-8",
        question: "What dunder method makes an object callable like a function `obj()`?\n\nclass Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, val):\n        return val * self.factor\n\ntriple = Multiplier(3)\nprint(triple(10))",
        options: ["30", "10", "TypeError: 'Multiplier' is not callable", "3"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDefining `__call__` allows instances to be invoked as functions: `triple(10)` calls `triple.__call__(10) = 30`.",
      },
      {
        id: "emm-9",
        question: "What dunder methods implement the Context Manager protocol for `with` statements?\n\nclass ManagedResource:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, tb):\n        pass",
        options: [
          "`__enter__` and `__exit__`",
          "`__start__` and `__stop__`",
          "`__open__` and `__close__`",
          "`__with__` and `__end__`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`with obj:` enters via `obj.__enter__()` and guarantees cleanup via `obj.__exit__()` even on exceptions.",
      },
      {
        id: "emm-10",
        question: "What dunder method defines equality comparison `obj1 == obj2`?\n\nclass Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        return (self.x, self.y) == (other.x, other.y)\n\nprint(Point(1, 2) == Point(1, 2))",
        options: ["True", "False", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__eq__` overloads `==`. Comparing coordinates `(1, 2) == (1, 2)` returns `True`.",
      },
      {
        id: "emm-11",
        question: "What does `__contains__` implement?\n\nclass Bag:\n    def __init__(self, items):\n        self.items = items\n    def __contains__(self, item):\n        return item in self.items\n\nb = Bag(['apple', 'banana'])\nprint('apple' in b)",
        options: ["True", "False", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`item in b` invokes `b.__contains__(item)` to evaluate membership.",
      },
      {
        id: "emm-12",
        question: "What does `__slots__` achieve in a class?\n\nclass CompactPoint:\n    __slots__ = ('x', 'y')\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y",
        options: [
          "Eliminates per-instance `__dict__`, significantly reducing RAM usage and preventing arbitrary attribute assignment",
          "Encrypts attribute values",
          "Makes the class private",
          "Enables multithreading",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__slots__` allocates fixed descriptor slots instead of a dynamic dictionary, optimizing memory when creating millions of instances.",
      },
      {
        id: "emm-13",
        question: "What is the output if `__str__` is missing but `__repr__` is defined?\n\nclass Item:\n    def __repr__(self):\n        return '<Item 42>'\nprint(str(Item()))",
        options: [
          "'<Item 42>'",
          "'<object object at 0x...>'",
          "None",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIf `__str__` is not defined, Python automatically falls back to `__repr__` for string conversion.",
      },
      {
        id: "emm-14",
        question: "What does `__bool__` control?\n\nclass Account:\n    def __init__(self, bal):\n        self.bal = bal\n    def __bool__(self):\n        return self.bal > 0\n\nprint(bool(Account(0)), bool(Account(50)))",
        options: ["False True", "True False", "True True", "False False"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__bool__` determines truthiness: `Account(0)` is False (0 > 0 is False); `Account(50)` is True.",
      },
      {
        id: "emm-15",
        question: "What is the single leading underscore convention `_variable` in Python?\n\nclass API:\n    def _internal_helper(self):\n        pass",
        options: [
          "A PEP 8 naming convention signaling an internal/private implementation detail for other developers",
          "Enforced strict private access by the compiler",
          "Marks the variable as global",
          "Deletes the method",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nA single leading underscore `_attr` is a standard convention indicating internal/protected use without name mangling.",
      },
      {
        id: "emm-16",
        question: "What does `__hash__` do when implementing custom hashable classes?\n\nclass Key:\n    def __init__(self, val):\n        self.val = val\n    def __hash__(self):\n        return hash(self.val)\n    def __eq__(self, other):\n        return self.val == other.val",
        options: [
          "Allows the custom object to be stored in sets and used as dictionary keys",
          "Encrypts the object with SHA256",
          "Calculates length",
          "Creates a copy",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nImplementing both `__hash__` and `__eq__` makes objects hashable for dictionary keys and set elements.",
      },
      {
        id: "emm-17",
        question: "What magic method implements the length operator `len(obj)`?\n\nclass Custom:\n    def __len__(self): return 42\nprint(len(Custom()))",
        options: [
          "42",
          "TypeError",
          "0",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`len(obj)` invokes the underlying `__len__()` dunder method on the object.",
      },
      {
        id: "emm-18",
        question: "What magic method implements index subscripting `obj[key]`?\n\nclass Registry:\n    def __getitem__(self, key): return f'val_{key}'\nr = Registry()\nprint(r['test'])",
        options: [
          "'val_test'",
          "KeyError",
          "TypeError",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nIndex subscript syntax `obj[key]` delegates directly to `__getitem__(self, key)`.",
      },
      {
        id: "emm-19",
        question: "What magic method enables calling an object like a function `obj()`?\n\nclass Multiplier:\n    def __init__(self, n): self.n = n\n    def __call__(self, x): return self.n * x\ntriple = Multiplier(3)\nprint(triple(10))",
        options: [
          "30",
          "TypeError: object is not callable",
          "10",
          "3",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nImplementing `__call__()` makes class instances callable like regular functions.",
      },
      {
        id: "emm-20",
        question: "What does `@property.setter` require on a class?\n\nclass Account:\n    def __init__(self): self._balance = 0\n    @property\n    def balance(self): return self._balance\n    @balance.setter\n    def balance(self, v): self._balance = v",
        options: [
          "A matching @property getter method of the same name declared before the setter",
          "Private keyword",
          "dataclass decorator",
          "ABC import",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nThe getter must be declared first with `@property`, which then provides the `@<name>.setter` decorator.",
      },
    ],
  },

  // ─── Lesson 19: Dataclasses ───────────────────────────────────────────────
  "dataclasses": {
    title: "Lesson 19: Dataclasses, Field Configuration, Immutability & Validation",
    questions: [
      {
        id: "dc-1",
        question: "What does the `@dataclass` decorator generate automatically?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Product:\n    name: str\n    price: float",
        options: [
          "Generates `__init__`, `__repr__`, and `__eq__` methods based on class type annotations",
          "Generates a SQLite database table",
          "Generates HTML forms",
          "Creates a C struct binary",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@dataclass` eliminates boilerplate by auto-generating standard methods like `__init__`, `__repr__`, and `__eq__`.",
      },
      {
        id: "dc-2",
        question: "What will `print(Product('Laptop', 999.0))` output for a dataclass?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Product:\n    name: str\n    price: float\nprint(Product('Laptop', 999.0))",
        options: [
          "Product(name='Laptop', price=999.0)",
          "<Product object at 0x...>",
          "{'name': 'Laptop', 'price': 999.0}",
          "('Laptop', 999.0)",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@dataclass` auto-generates a clean `__repr__` formatting all fields and values: `Product(name='Laptop', price=999.0)`.",
      },
      {
        id: "dc-3",
        question: "How do you create an immutable (frozen) dataclass that prevents attribute modification?\n\nfrom dataclasses import dataclass\n@dataclass(frozen=True)\nclass Config:\n    host: str\n    port: int",
        options: [
          "Pass `frozen=True` to the `@dataclass` decorator",
          "Use the `const` keyword",
          "Set `__slots__ = ()`",
          "Wrap in `frozenset()`",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@dataclass(frozen=True)` makes the instance read-only: assigning `c.port = 80` raises `FrozenInstanceError`.",
      },
      {
        id: "dc-4",
        question: "How do you specify a mutable default argument (like a list) in a dataclass?\n\nfrom dataclasses import dataclass, field\n@dataclass\nclass Group:\n    members: list = field(default_factory=list)",
        options: [
          "Use `field(default_factory=list)`",
          "members: list = []",
          "members: list = None",
          "default_list()",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDataclasses prohibit `members: list = []` directly; `default_factory=list` creates a fresh list for every new instance.",
      },
      {
        id: "dc-5",
        question: "What is the purpose of `__post_init__` in a dataclass?\n\nfrom dataclasses import dataclass\n@dataclass\nclass User:\n    name: str\n    age: int\n    def __post_init__(self):\n        if self.age < 0: raise ValueError",
        options: [
          "Executes immediately after the generated `__init__` to perform custom validation or compute derived fields",
          "Executes when deleting the object",
          "Overrides the class decorator",
          "Runs before memory allocation",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__post_init__` runs right after generated initialization, ideal for validation (`self.age >= 0`) or calculating derived properties.",
      },
      {
        id: "dc-6",
        question: "How do you convert a dataclass instance to a dictionary?\n\nfrom dataclasses import dataclass, asdict\n@dataclass\nclass Point:\n    x: int\n    y: int\nprint(asdict(Point(1, 2)))",
        options: [
          "{'x': 1, 'y': 2}",
          "Point(x=1, y=2)",
          "[('x', 1), ('y', 2)]",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`dataclasses.asdict(instance)` converts dataclass fields recursively into a standard Python `dict`.",
      },
      {
        id: "dc-7",
        question: "How do you convert a dataclass instance to a tuple?\n\nfrom dataclasses import dataclass, astuple\n@dataclass\nclass Point:\n    x: int\n    y: int\nprint(astuple(Point(10, 20)))",
        options: ["(10, 20)", "[10, 20]", "{10, 20}", "Point(10, 20)"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`dataclasses.astuple(instance)` converts field values into a standard tuple `(10, 20)`.",
      },
      {
        id: "dc-8",
        question: "How do you exclude a sensitive field (like password) from `__repr__`?\n\nfrom dataclasses import dataclass, field\n@dataclass\nclass User:\n    username: str\n    password: str = field(repr=False)\nprint(User('amol', 'secret123'))",
        options: [
          "User(username='amol')",
          "User(username='amol', password='***')",
          "User(username='amol', password='secret123')",
          "TypeError",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`field(repr=False)` omits the field from the generated string representation for security.",
      },
      {
        id: "dc-9",
        question: "How do you enable ordering comparisons (`<`, `<=`, `>`, `>=`) on a dataclass?\n\nfrom dataclasses import dataclass\n@dataclass(order=True)\nclass Score:\n    points: int",
        options: [
          "Pass `order=True` to the `@dataclass` decorator",
          "Pass `sort=True`",
          "Write `@dataclass(comparable=True)`",
          "Ordering is enabled by default",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`@dataclass(order=True)` generates `__lt__`, `__le__`, `__gt__`, and `__ge__` methods comparing fields in definition order.",
      },
      {
        id: "dc-10",
        question: "What does `dataclasses.replace()` do?\n\nfrom dataclasses import dataclass, replace\n@dataclass\nclass Point:\n    x: int\n    y: int\np1 = Point(1, 2)\np2 = replace(p1, x=10)\nprint(p1.x, p2.x)",
        options: ["1 10", "10 10", "1 2", "Error"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`replace(p1, x=10)` returns a new dataclass object with field `x` updated to 10, leaving `p1` unchanged.",
      },
      {
        id: "dc-11",
        question: "What does `KW_ONLY` do in Python 3.10+ dataclasses?\n\nfrom dataclasses import dataclass, KW_ONLY\n@dataclass\nclass Server:\n    host: str\n    _: KW_ONLY\n    port: int = 8080",
        options: [
          "Forces all fields declared after `_ : KW_ONLY` to be passed as keyword arguments only",
          "Disables keyword arguments",
          "Converts fields to keys",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`_ : KW_ONLY` marks subsequent fields as keyword-only in the auto-generated `__init__`.",
      },
      {
        id: "dc-12",
        question: "What is the output of equality comparison between dataclass instances?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Item:\n    id: int\nprint(Item(1) == Item(1))",
        options: ["True", "False", "TypeError", "None"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nAuto-generated `__eq__` compares field values: `Item(1) == Item(1)` evaluates to `True`.",
      },
      {
        id: "dc-13",
        question: "What is `dataclasses.fields(ClassOrInstance)`?\n\nfrom dataclasses import dataclass, fields\n@dataclass\nclass User:\n    name: str\nprint([f.name for f in fields(User)])",
        options: ["['name']", "['name', 'str']", "[]", "TypeError"],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`fields()` returns a tuple of `Field` descriptor objects describing the dataclass schema.",
      },
      {
        id: "dc-14",
        question: "Can a dataclass inherit from another dataclass?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Person:\n    name: str\n@dataclass\nclass Employee(Person):\n    salary: float\ne = Employee('Amol', 85000.0)\nprint(e.name, e.salary)",
        options: [
          "Amol 85000.0",
          "TypeError",
          "None 85000.0",
          "Amol None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nDataclass inheritance combines fields: base fields come first in `__init__`, followed by subclass fields.",
      },
      {
        id: "dc-15",
        question: "What happens if a field with a default value precedes a field without a default in dataclass inheritance?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Base:\n    x: int = 0\n@dataclass\nclass Sub(Base):\n    y: int",
        options: [
          "Raises TypeError: non-default argument 'y' follows default argument",
          "Compiles successfully",
          "y defaults to 0",
          "None",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\nJust like standard functions, Python parameter ordering forbids required arguments after default arguments in `__init__`.",
      },
      {
        id: "dc-16",
        question: "What is the difference between `@dataclass(slots=True)` in Python 3.10+ vs standard dataclass?\n\nfrom dataclasses import dataclass\n@dataclass(slots=True)\nclass FastPoint:\n    x: float\n    y: float",
        options: [
          "Auto-generates `__slots__` for faster attribute access and reduced memory footprint",
          "Creates disk slots",
          "Disables initialization",
          "Allows only 2 fields",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`slots=True` automatically configures `__slots__` on the class, combining dataclass ergonomics with slot memory optimizations.",
      },
      {
        id: "dc-17",
        question: "What does `dataclasses.asdict()` do?\n\nfrom dataclasses import dataclass, asdict\n@dataclass\nclass Point: x: int; y: int\nprint(asdict(Point(1, 2)))",
        options: [
          "{'x': 1, 'y': 2}",
          "Point(x=1, y=2)",
          "(1, 2)",
          "['x', 'y']",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`asdict(instance)` converts a dataclass object recursively into a standard Python dictionary.",
      },
      {
        id: "dc-18",
        question: "What does `__post_init__` do in a dataclass?\n\nfrom dataclasses import dataclass\n@dataclass\nclass Item:\n    price: float\n    qty: int\n    def __post_init__(self): self.total = self.price * self.qty",
        options: [
          "Executes additional initialization logic immediately after generated __init__ finishes",
          "Replaces __init__ entirely",
          "Runs before field assignment",
          "Validates types at compile time",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`__post_init__` is called automatically at the end of generated `__init__` for computed fields or validation.",
      },
      {
        id: "dc-19",
        question: "What does `@dataclass(order=True)` generate?\n\nfrom dataclasses import dataclass\n@dataclass(order=True)\nclass User: id: int; name: str",
        options: [
          "Rich comparison dunder methods (__lt__, __le__, __gt__, __ge__) based on tuple comparison of fields",
          "A sorted dictionary",
          "Database indices",
          "Threading locks",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`order=True` synthesizes comparison methods allowing instances to be sorted naturally.",
      },
      {
        id: "dc-20",
        question: "What does `field(compare=False)` do in a dataclass?\n\nfrom dataclasses import dataclass, field\n@dataclass(order=True)\nclass Task:\n    priority: int\n    desc: str = field(compare=False)",
        options: [
          "Excludes the field from comparison and sorting logic",
          "Prevents field from being printed",
          "Makes field immutable",
          "Deletes the field",
        ],
        correctIndex: 0,
        explanation:
          "Code walkthrough:\n`compare=False` instructs dataclass comparison methods to ignore that field during equality and relational checks.",
      },
    ],
  },
};
