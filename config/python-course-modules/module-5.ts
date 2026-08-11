import type { Module } from "../courses";

export const MODULE_5: Module = {
  id: "module-5-oop",
  title: "Module 5: Object-Oriented Python",
  description:
    "Model the real world with classes, inheritance, encapsulation, magic methods, and dataclasses.",
  lessons: [
    {
      id: "classes-objects",
      title: "Lesson 16: Classes, Instances & Inheritance",
      shortDescription:
        "Object structure, __init__ constructor, instance parameters, methods, and parent-child overrides.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The OOP Paradigm

Object-Oriented Programming (OOP) is a design philosophy that groups related data (**attributes**) and behavior (**methods**) into cohesive packages called **objects**. Instead of scattering data and functions around your program, you model real-world things — a User, an Order, a Course — as objects where the data and its operations live together.

#### What You'll Learn in This lesson

- Define classes and create instances
- Initialize objects with \`__init__\`
- Write methods and understand \`self\`
- Inherit from parent classes and override methods

---

### Class vs Instance

| Term | Meaning | Analogy |
|---|---|---|
| **Class** | The blueprint / template | A cookie cutter |
| **Instance** | A concrete object made from the class | One cookie stamped out |

\`\`\`python
class Person:
    def __init__(self, name, role):
        self.name = name
        self.role = role

    def get_profile(self):
        return f"Name: {self.name}, Role: {self.role}"

user = Person("Rahul", "Student")   # user is an INSTANCE
print(user.get_profile())           # Name: Rahul, Role: Student
\`\`\`

---

### __init__ — The Constructor

\`__init__\` is the **initializer**: it runs automatically the moment you create an instance. It receives the creation arguments and stores them on the object:

\`\`\`python
class Person:
    def __init__(self, name, role):   # runs on Person(...)
        self.name = name              # store ON the object
        self.role = role
\`\`\`

The \`self\` parameter is the object itself — it is passed automatically, so you never pass it explicitly.

> **Mental model:** \`self.name = name\` means "attach a label called name to THIS object, pointing at the value". Each instance gets its own independent labels.

---

### Methods — Functions Attached to Objects

A method is a function defined inside a class. Its first parameter is always \`self\`:

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return "Woof!"

    def describe(self):
        return f"{self.name} is a {self.breed}"
\`\`\`

Call a method on an instance with the dot: \`dog.bark()\`. Python automatically passes \`dog\` as \`self\`.

---

### Inheritance — Child Classes Reuse Parent Code

A child class **inherits** all attributes and methods from its parent, then adds or overrides what it needs. This expresses **"is-a"** relationships: an \`Instructor\` *is a* \`Person\`.

\`\`\`python
class Instructor(Person):          # (Person) = inherit
    def __init__(self, name, department, course):
        super().__init__(name, role="Instructor")   # call parent's __init__
        self.department = department
        self.course = course

    def get_profile(self):         # OVERRIDE the parent method
        parent = super().get_profile()
        return f"{parent} | Dept: {self.department} | Course: {self.course}"
\`\`\`

Key points:

- \`super()\` gives access to the parent class — \`super().__init__(...)\` reuses the parent's setup without repeating code.
- **Overriding** means redefining a parent method in the child; the child's version wins for child instances.
- A child gets everything the parent has — attributes, methods, even the parent's parent.

---

### Why OOP?

| Benefit | Explanation |
|---|---|
| **Cohesion** | Data + behavior live together |
| **Reuse** | Inherit instead of copy-paste |
| **Modeling** | Code mirrors the real world |
| **Maintainability** | Change one class, not every call site |

---

### Common Mistakes to Avoid

- **Mistake:** Forgetting \`self\` as the first parameter — **Fix:** every instance method needs \`self\` first.
- **Mistake:** Defining a class but never creating an instance — **Fix:** \`obj = MyClass(...)\` actually runs the code.
- **Mistake:** Repeating parent setup instead of \`super().__init__(...)\` — **Fix:** call super and add only what's new.
- **Mistake:** Naming classes in snake_case — **Fix:** classes use PascalCase (\`BankAccount\`), functions/variables use snake_case.

### Professional Tips & Tricks

- \`super().__init__(...)\` keeps the parent setup without repeating code.
- Name classes in PascalCase (BankAccount) and methods/attributes in snake_case.
- Give every class a docstring describing its responsibility.

---

### Key Takeaways

- A class is a blueprint; an instance is a concrete object.
- \`__init__\` initializes every new instance.
- \`self\` is the object itself, passed automatically.
- Inheritance reuses parent code; \`super()\` reaches the parent.
- Overriding lets a child redefine a parent method.

**Next up:** Inheritance & polymorphism in depth.`,
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
      title: "Lesson 17: Inheritance & Polymorphism",
      shortDescription:
        "Deep-dive into inheritance, method overriding, polymorphism, isinstance, and the MRO.",
      duration: "50 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Inheritance — Code Reuse Down the Tree

A child class inherits every attribute and method from its parent, then adds or overrides what it needs. This eliminates duplication and expresses **"is-a"** relationships: a \`Dog\` *is an* \`Animal\`, a \`Car\` *is a* \`Vehicle\`.

#### What You'll Learn in This lesson

- Override parent methods and call \`super()\`
- Use polymorphism — one interface, many behaviors
- Check types with \`isinstance()\` and \`issubclass()\`
- Understand the Method Resolution Order (MRO)

---

### Overriding — Child Writes Its Own Version

Redefining a parent method in the child is **overriding**. The child's version wins for child instances. Call the parent's version with \`super().method()\`:

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "...generic sound..."

class Dog(Animal):
    def speak(self):                 # OVERRIDE
        return "Woof!"
\`\`\`

**Override + super()** keeps parent logic while extending it — never copy-paste parent code into the child.

---

### Polymorphism — Many Forms, One Interface

**Polymorphism** lets different classes be used through the same interface. If both \`Dog\` and \`Cat\` have a \`.speak()\` method, a loop can call \`.speak()\` on each without caring which class it is:

\`\`\`python
animals = [Dog("Rocky"), Cat("Whiskers"), Animal("Mystery")]
for animal in animals:
    print(f"{animal.name}: {animal.speak()}")
\`\`\`

\`\`\`text
Rocky: Woof!
Whiskers: Meow!
Mystery: ...generic sound...
\`\`\`

"Call the method, let the object decide." Python doesn't check types before calling — it just tries the method. This is called **duck typing**: *if it walks like a duck and quacks like a duck, it's a duck*.

---

### isinstance() and issubclass()

| Function | Question | Example |
|---|---|---|
| \`isinstance(obj, Class)\` | Is this object an instance? | \`isinstance(dog, Dog)\` → True |
| \`issubclass(Child, Parent)\` | Does it inherit? | \`issubclass(Dog, Animal)\` → True |

\`\`\`python
print(isinstance(animals[0], Dog))        # True
print(isinstance(animals[0], Animal))     # True — a Dog IS an Animal
print(issubclass(Dog, Animal))            # True
\`\`\`

Use \`isinstance()\` instead of \`type(x) == ...\` — it understands inheritance.

---

### The MRO — Method Resolution Order

When Python calls a method, it searches the class tree in a defined order. \`ClassName.mro()\` prints it:

\`\`\`python
print(Dog.mro())
# [<class 'Dog'>, <class 'Animal'>, <class 'object'>]
\`\`\`

Python looks in \`Dog\` first, then \`Animal\`, then the root \`object\`. In multiple inheritance, the search goes left to right across parents.

> **Mental model:** the child looks for a method in its own room first; if not found, it walks up the stairs to the parent's room, then the grandparent's.

---

### Common Mistakes to Avoid

- **Mistake:** Copy-pasting parent methods into children — **Fix:** override + \`super()\`.
- **Mistake:** \`type(x) == Dog\` instead of \`isinstance(x, Dog)\` — **Fix:** isinstance respects inheritance.
- **Mistake:** Deep inheritance chains (5+ levels) — **Fix:** prefer composition ("has-a") over inheritance for flexibility.

### Professional Tips & Tricks

- Override + \`super()\` keeps parent logic while extending it — never copy-paste parent code.
- Use \`isinstance()\` instead of \`type() == ...\` when checking class relationships.
- Prefer composition (has-a) over deep inheritance chains for flexibility.

---

### Key Takeaways

- Children inherit and override; \`super()\` reaches the parent.
- Polymorphism: same method name, different behavior per class.
- \`isinstance()\`/\`issubclass()\` check relationships.
- \`.mro()\` reveals Python's method search order.

**Next up:** Encapsulation, properties & magic methods.`,
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
      title: "Lesson 18: Encapsulation, Properties & Magic Methods",
      shortDescription:
        "Private attributes, @property for smart access, and dunder methods that customize objects.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Encapsulation — Protecting Data

**Encapsulation** keeps an object's internal state safe by controlling how it is read and changed. Python uses conventions and tools rather than hard enforcement:

| Syntax | Meaning |
|---|---|
| \`self.name\` | Public — anyone can access |
| \`self._name\` | "Protected" by convention — don't touch from outside |
| \`self.__name\` | Name-mangled — harder to accidentally access |

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance    # protected by convention
\`\`\`

#### What You'll Learn in This lesson

- Protect internal state with private conventions
- Build smart attribute access with \`@property\`
- Customize objects with magic (dunder) methods

---

### @property — Smart Attribute Access

The \`@property\` decorator turns a method into an attribute. \`account.balance\` reads like plain data but runs code:

\`\`\`python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance

    @property
    def balance(self):              # read like an attribute
        return self._balance

    @balance.setter
    def balance(self, amount):      # validate on write
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount

acc = BankAccount("Amol", 1000)
print(acc.balance)                  # 1000 — no parentheses!
acc.balance = 1500                  # setter validates
\`\`\`

**Why bother?** You can add validation now *without breaking* existing code that reads \`acc.balance\` as a plain attribute.

> **Mental model:** \`@property\` is a guarded door. Reading is safe; writing goes through a check (the setter).

---

### Magic (Dunder) Methods — Customize Your Objects

Double-underscore methods ("dunder" = double underscore) hook your objects into Python's operators and built-ins:

| Method | Powers | Example |
|---|---|---|
| \`__str__\` | Friendly text for \`print()\` | \`print(acc)\` |
| \`__repr__\` | Exact representation for developers | \`repr(acc)\` |
| \`__eq__\` | \`==\` between objects | \`acc == other\` |
| \`__lt__\` | Sorting / \`<\` | \`sorted(objects)\` |
| \`__len__\` | \`len(obj)\` | \`len(collection)\` |
| \`__getitem__\` | \`obj[key]\` | \`obj[0]\` |

\`\`\`python
class BankAccount:
    ...
    def __str__(self):
        return f"{self.owner}'s account: Rs.{self._balance}"

    def __eq__(self, other):
        return self._balance == other._balance

print(acc)                    # Amol's account: Rs.1000  (uses __str__)
print(acc == other)           # uses __eq__
\`\`\`

> **__str__ vs __repr__:** \`str()\` is for people; \`repr()\` is for developers. Implement both; \`__str__\` falls back to \`__repr__\` if missing.

---

### Common Mistakes to Avoid

- **Mistake:** Forgetting \`self\` in property methods — **Fix:** properties are methods; \`self\` first.
- **Mistake:** Naming a property and its backing attribute the same (\`self.balance\` + \`@property balance\`) — **Fix:** back it with \`self._balance\`.
- **Mistake:** Implementing only \`__eq__\` without \`__hash__\` and putting objects in sets — **Fix:** if you define \`__eq__\`, set \`__hash__ = None\` or define \`__hash__\` explicitly.

### Professional Tips & Tricks

- Use \`@property\` to add validation without breaking existing code that reads attributes.
- Always implement \`__str__\` for user-facing classes — debugging and printing become readable.
- Implement \`__eq__\` and \`__lt__\` together so your objects work with \`==\`, sorting, and \`min\`/\`max\`.

---

### Key Takeaways

- Encapsulation controls access to internal state: \`_name\` by convention, \`__name\` via name mangling.
- \`@property\` + \`@setter\` give attribute-like access with validation.
- Dunder methods hook objects into Python operators and built-ins.
- Implement \`__str__\`, \`__repr__\`, \`__eq__\`, and \`__lt__\` for professional objects.

**Next up:** Dataclasses — modern, boilerplate-free OOP.`,
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
      title: "Lesson 19: Dataclasses & Modern OOP",
      shortDescription:
        "Write less boilerplate with @dataclass, frozen data, and professional OOP best practices.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### Dataclasses — Boilerplate Be Gone

Writing a simple data class by hand means writing \`__init__\`, \`__repr__\`, and \`__eq__\` — dozens of lines of boring code. The \`@dataclass\` decorator auto-generates all of it from your type-annotated fields:

\`\`\`python
from dataclasses import dataclass

@dataclass
class Course:
    title: str
    lessons: int
    tags: list = field(default_factory=list)

python = Course("Python", 25, ["python", "ai"])
print(python)              # Course(title='Python', lessons=25, tags=['python', 'ai'])
print(python == Course("Python", 25, ["python", "ai"]))   # True — free __eq__
\`\`\`

#### What You'll Learn in This lesson

- Define dataclasses with type-annotated fields
- Use \`field()\` and \`default_factory\` for mutable defaults
- Freeze data with \`frozen=True\`
- Add ordering with \`order=True\`

---

### The Free Boilerplate

| Without @dataclass | With @dataclass |
|---|---|
| \`__init__\` written by hand | Auto-generated |
| \`__repr__\` written by hand | Auto-generated |
| \`__eq__\` written by hand | Auto-generated |
| Type hints optional | Type hints required |

What used to take 30 lines takes 10 — and is impossible to get wrong.

---

### field() and default_factory — Safe Mutable Defaults

The classic Python trap is \`def f(items=[])\` — a shared mutable default. Dataclasses solve it with \`field(default_factory=...)\`:

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    tags: list = field(default_factory=list)   # NEW list per instance

s1 = Student("Amol")
s1.tags.append("python")
print(s1.tags)                # ['python']
print(Student("Riya").tags)   # [] — separate list!
\`\`\`

> **Never write** \`tags: list = []\` — every instance would share one list.

---

### Frozen Data — Immutable by Design

\`@dataclass(frozen=True)\` makes instances immutable — perfect for configuration and constants:

\`\`\`python
@dataclass(frozen=True)
class Config:
    version: str = "1.0"
    debug: bool = False

cfg = Config()
print(cfg.version)       # 1.0
# cfg.debug = True       # TypeError: frozen instance
\`\`\`

Immutable data is safer: it cannot be accidentally changed, and instances can be hashed and used as dict keys.

---

### order=True — Sorting for Free

\`@dataclass(order=True)\` adds \`__lt__\`, \`__le__\`, \`__gt__\`, \`__ge__\` — your objects become sortable:

\`\`\`python
@dataclass(order=True)
class Product:
    price: float
    name: str

items = [Product(300, "Monitor"), Product(25, "Mouse")]
print(sorted(items))   # cheapest first
\`\`\`

---

### Dataclasses vs NamedTuples vs Plain Classes

| Tool | When to use |
|---|---|
| **NamedTuple** | Tiny immutable records, no methods |
| **@dataclass** | Data containers with optional methods |
| **Plain class** | Objects with significant behavior |

---

### Common Mistakes to Avoid

- **Mistake:** \`tags: list = []\` as a default — **Fix:** \`field(default_factory=list)\`.
- **Mistake:** Expecting to modify a frozen dataclass — **Fix:** use \`dataclasses.replace(obj, field=value)\` for a modified copy.
- **Mistake:** Using dataclasses for objects with complex behavior — **Fix:** use a regular class.

### Professional Tips & Tricks

- Use \`field(default_factory=list)\` for mutable defaults — never \`[]\` directly (shared trap).
- Reach for dataclasses for DTOs, API payloads, and config objects.
- Combine dataclasses with type hints for self-documenting code that linters can verify.

---

### Key Takeaways

- \`@dataclass\` auto-generates \`__init__\`, \`__repr__\`, and \`__eq__\`.
- \`field(default_factory=list)\` gives each instance its own mutable default.
- \`frozen=True\` makes immutable, hashable data.
- \`order=True\` enables sorting.
- Use dataclasses for data containers; plain classes for behavioral objects.

**Next up:** Module 6 — files, errors & professional Python.`,
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
};
