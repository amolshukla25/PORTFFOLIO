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

Before OOP, programs were a pile of variables and functions: \`user_name\`, \`user_age\`, \`print_user(user)\`. OOP bundles them: a \`User\` object holds its own data *and* knows how to act. This bundling — called **encapsulation** — keeps programs organized as they grow from 100 lines to 100,000 lines.

#### What You'll Learn in This Lesson

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

> **Mental model:** the class is the blueprint — it never exists as a physical thing. The instance is what you actually use. You can stamp out unlimited instances from one blueprint, each with its own data.

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

**What if you skip \`__init__\`?** Instances still work, but every attribute must be set manually after creation:

\`\`\`python
class Empty:
    pass

e = Empty()
e.name = "Amol"   # works, but clunky — attributes appear ad-hoc
\`\`\`

The \`__init__\` method guarantees every instance is born fully formed with the right attributes — the hallmark of reliable OOP.

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

**Why \`self\` is passed automatically:** \`dog.bark()\` is syntactic sugar for \`Dog.bark(dog)\`. Python injects the receiver as the first argument — that's why every method declares \`self\` first, even when it takes no other arguments.

**Class attributes vs instance attributes:**

| Kind | Defined | Shared? | Example |
|---|---|---|---|
| Class attribute | Inside class body | Shared by all instances | \`species = "Canis"\` |
| Instance attribute | In \`__init__\` via \`self\` | Unique per instance | \`self.name\` |

\`\`\`python
class Dog:
    species = "Canis familiaris"   # class attribute — shared

    def __init__(self, name):
        self.name = name            # instance attribute — unique

d1, d2 = Dog("Rocky"), Dog("Bella")
print(d1.species, d2.species)   # same for both
print(d1.name, d2.name)         # different for each
\`\`\`

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

> **Mental model:** inheritance is a family tree. The child is born with all the parent's traits and can add its own or change inherited ones. \`super()\` is the "call mom" button — reuse the parent's implementation instead of rewriting it.

---

### Why OOP?

| Benefit | Explanation |
|---|---|
| **Cohesion** | Data + behavior live together |
| **Reuse** | Inherit instead of copy-paste |
| **Modeling** | Code mirrors the real world |
| **Maintainability** | Change one class, not every call site |

**When should you NOT use OOP?** For tiny scripts, plain functions are simpler and perfectly fine. OOP earns its keep when you have many objects sharing structure and behavior — user accounts, products, database models, UI components. The rule: *functions first; classes when you see duplication across related data*.

---

### Common Mistakes to Avoid

- **Mistake:** Forgetting \`self\` as the first parameter — **Fix:** every instance method needs \`self\` first.
- **Mistake:** Defining a class but never creating an instance — **Fix:** \`obj = MyClass(...)\` actually runs the code.
- **Mistake:** Repeating parent setup instead of \`super().__init__(...)\` — **Fix:** call super and add only what's new.
- **Mistake:** Naming classes in snake_case — **Fix:** classes use PascalCase (\`BankAccount\`), functions/variables use snake_case.
- **Mistake:** Putting default attributes at the class level when they should be per-instance — **Fix:** mutable defaults belong in \`__init__\` via \`self\`.

### Professional Tips & Tricks

- \`super().__init__(...)\` keeps the parent setup without repeating code.
- Name classes in PascalCase (BankAccount) and methods/attributes in snake_case.
- Give every class a docstring describing its responsibility.
- Initialize all attributes in \`__init__\` — objects should be born complete.
- Use class attributes for shared constants; instance attributes for per-object data.

---

### Key Takeaways

- A class is a blueprint; an instance is a concrete object.
- \`__init__\` initializes every new instance.
- \`self\` is the object itself, passed automatically.
- Inheritance reuses parent code; \`super()\` reaches the parent.
- Overriding lets a child redefine a parent method.
- Class attributes are shared; instance attributes are per-object.

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
          id: "practice-pet-simulator",
          title: "Virtual Pet Lifecycle Model",
          difficulty: "Easy",
          task: "Create a `Pet` class with `name`, `species`, and `energy` (default 100). Implement `play(minutes)` which burns 5 energy per 10 mins, and `sleep(hours)` which restores energy.",
          hint: "Ensure energy stays clamped between 0 and 100.",
          solution: `class Pet:\n    def __init__(self, name: str, species: str):\n        self.name = name\n        self.species = species\n        self.energy = 100\n\n    def play(self, minutes: int):\n        cost = (minutes // 10) * 5\n        self.energy = max(0, self.energy - cost)\n        print(f"{self.name} played for {minutes}m. Energy is now {self.energy}%.")\n\n    def sleep(self, hours: int):\n        self.energy = min(100, self.energy + hours * 15)\n        print(f"{self.name} slept for {hours}h. Energy restored to {self.energy}%.")\n\ndog = Pet("Bruno", "Golden Retriever")\ndog.play(60)\ndog.sleep(2)`,
        },
        {
          id: "practice-bank-account-ledger",
          title: "Bank Account with Transaction History Ledger",
          difficulty: "Medium",
          task: "Build `BankAccount(account_number, owner, initial_balance=0.0)` that records every deposit and withdrawal into a `transactions` list of tuples with timestamps.",
          hint: "Append ('DEPOSIT' | 'WITHDRAW', amount, balance) to self.transactions.",
          solution: `from datetime import datetime\n\nclass BankAccount:\n    def __init__(self, account_no: str, owner: str, initial_balance: float = 0.0):\n        self.account_no = account_no\n        self.owner = owner\n        self.balance = initial_balance\n        self.ledger = []\n        if initial_balance > 0:\n            self.ledger.append(("OPENING", initial_balance, self.balance))\n\n    def deposit(self, amount: float):\n        if amount <= 0: raise ValueError("Deposit must be positive.")\n        self.balance += amount\n        self.ledger.append(("DEPOSIT", amount, self.balance))\n        return self.balance\n\n    def withdraw(self, amount: float):\n        if amount > self.balance: raise ValueError("Insufficient funds.")\n        self.balance -= amount\n        self.ledger.append(("WITHDRAWAL", amount, self.balance))\n        return self.balance\n\nacc = BankAccount("ACC-9021", "Amol Shukla", 500.0)\nacc.deposit(250.0)\nacc.withdraw(120.0)\nprint("Account Statement:")\nfor action, amt, bal in acc.ledger:\n    print(f"  {action:<12} | Amount: \${amt:>7.2f} | Balance: \${bal:>7.2f}")`,
        },
        {
          id: "practice-inventory-item-alerts",
          title: "E-Commerce Inventory SKU & Stock Alerts",
          difficulty: "Medium",
          task: "Create `InventoryItem` with `sku`, `title`, `unit_price`, `stock_qty`, and `reorder_threshold`. Implement `restock(qty)` and `sell(qty)` with low-stock warnings.",
          hint: "Print warning if stock_qty <= reorder_threshold.",
          solution: `class InventoryItem:\n    def __init__(self, sku: str, title: str, unit_price: float, stock_qty: int, reorder_threshold: int = 5):\n        self.sku = sku\n        self.title = title\n        self.unit_price = unit_price\n        self.stock_qty = stock_qty\n        self.threshold = reorder_threshold\n\n    def sell(self, qty: int) -> float:\n        if qty > self.stock_qty: raise ValueError("Out of stock.")\n        self.stock_qty -= qty\n        revenue = qty * self.unit_price\n        if self.stock_qty <= self.threshold:\n            print(f"⚠️ LOW STOCK ALERT: Only {self.stock_qty} units of '{self.title}' remaining!")\n        return revenue\n\nitem = InventoryItem("SKU-104", "Mechanical Keyboard", 89.99, 8, reorder_threshold=3)\nrev = item.sell(6)\nprint(f"Total sale revenue: \${rev:.2f}")`,
        },
        {
          id: "practice-class-vs-instance-attr",
          title: "Fleet Manager with Class-Level Registry",
          difficulty: "Medium",
          task: "Implement a `Drone` class that tracks total active drones and total flight hours globally across all instances using class attributes.",
          hint: "Use Drone.total_drones and update in __init__.",
          solution: `class Drone:\n    total_active_drones = 0\n    fleet_flight_hours = 0.0\n\n    def __init__(self, model: str):\n        self.model = model\n        self.hours_flown = 0.0\n        Drone.total_active_drones += 1\n\n    def fly(self, hours: float):\n        self.hours_flown += hours\n        Drone.fleet_flight_hours += hours\n        print(f"Drone '{self.model}' completed {hours}h mission.")\n\nd1 = Drone("SkyScout-X")\nd2 = Drone("HawkEye-Pro")\nd1.fly(2.5)\nd2.fly(4.0)\nprint(f"Total Active Drones: {Drone.total_active_drones}")\nprint(f"Fleet Flight Hours:  {Drone.fleet_flight_hours:.1f}h")`,
        },
        {
          id: "practice-alternative-constructor-classmethod",
          title: "Factory Class Methods & Alternative Constructors",
          difficulty: "Hard",
          task: "Create `User` with `name`, `email`, `role`. Provide `@classmethod` constructors: `from_csv_row('Amol,amol@ai.dev,admin')` and `from_json_dict({'username': 'Amol', ...})`.",
          hint: "Use @classmethod def from_csv_row(cls, line): ... return cls(...)",
          solution: `class User:\n    def __init__(self, name: str, email: str, role: str = "Member"):\n        self.name = name\n        self.email = email\n        self.role = role\n\n    @classmethod\n    def from_csv_row(cls, csv_line: str):\n        name, email, role = [x.strip() for x in csv_line.split(",")][:3]\n        return cls(name, email, role)\n\n    @classmethod\n    def from_dict(cls, data: dict):\n        return cls(data.get("name", ""), data.get("email", ""), data.get("role", "Member"))\n\nu1 = User.from_csv_row("Amol Shukla, amol@ai.dev, Admin")\nu2 = User.from_dict({"name": "Riya Sharma", "email": "riya@work.io"})\nprint(f"User 1: {u1.name} ({u1.email}) - {u1.role}")\nprint(f"User 2: {u2.name} ({u2.email}) - {u2.role}")`,
        },
        {
          id: "practice-vector-math-class",
          title: "2D Vector Physics Engine",
          difficulty: "Hard",
          task: "Write a `Vector2D(x, y)` class with methods `magnitude()`, `normalize()`, `dot_product(other)`, and `distance_to(other)`.",
          hint: "magnitude = math.sqrt(x**2 + y**2); dot = x1*x2 + y1*y2",
          solution: `import math\n\nclass Vector2D:\n    def __init__(self, x: float, y: float):\n        self.x = float(x)\n        self.y = float(y)\n\n    def magnitude(self) -> float:\n        return math.sqrt(self.x ** 2 + self.y ** 2)\n\n    def normalize(self):\n        mag = self.magnitude()\n        if mag == 0: return Vector2D(0, 0)\n        return Vector2D(self.x / mag, self.y / mag)\n\n    def dot(self, other: 'Vector2D') -> float:\n        return self.x * other.x + self.y * other.y\n\nv1 = Vector2D(3, 4)\nv2 = Vector2D(1, 2)\nprint(f"v1 Magnitude:  {v1.magnitude()}")\nprint(f"v1 Normalized: ({v1.normalize().x:.2f}, {v1.normalize().y:.2f})")\nprint(f"Dot Product:   {v1.dot(v2)}")`,
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

Inheritance is the difference between copying code and *reusing* code. When three classes share the same \`__init__\` pattern, you move that pattern to a parent once — and every child inherits it for free.

#### What You'll Learn in This Lesson

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

**The pattern:** the child's \`speak\` replaces the parent's for \`Dog\` instances, while \`Animal\` instances keep the generic version. Both methods coexist; which one runs depends on the object's actual class.

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

> **Mental model:** polymorphism is a universal remote. Same button (the method name), different result per device (per class). The loop doesn't care *what* each animal is — only that it can \`speak()\`.

**Why polymorphism matters:** it lets you write code that works on *categories* of objects instead of specific ones. Add a new class later (\`class Parrot(Animal)\`) and every existing loop, sort, and function that expects \`.speak()\` immediately works with it — zero changes.

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

> **Why \`type(x) == Dog\` is wrong:** \`type(dog) == Dog\` is True for a \`Dog\`, but \`type(dog) == Animal\` is False even though a Dog *is* an Animal. \`isinstance(dog, Animal)\` correctly returns True. When you check "is this object usable as X", \`isinstance\` is the honest answer.

---

### The MRO — Method Resolution Order

When Python calls a method, it searches the class tree in a defined order. \`ClassName.mro()\` prints it:

\`\`\`python
print(Dog.mro())
# [<class 'Dog'>, <class 'Animal'>, <class 'object'>]
\`\`\`

Python looks in \`Dog\` first, then \`Animal\`, then the root \`object\`. In multiple inheritance, the search goes left to right across parents.

> **Mental model:** the child looks for a method in its own room first; if not found, it walks up the stairs to the parent's room, then the grandparent's.

**Multiple inheritance example:**

\`\`\`python
class A:
    def greet(self):
        return "A"

class B:
    def greet(self):
        return "B"

class C(A, B):   # parents searched left to right
    pass

c = C()
print(c.greet())              # 'A' — A wins
print([cls.__name__ for cls in C.mro()])  # ['C', 'A', 'B', 'object']
\`\`\`

Multiple inheritance is powerful but easy to overuse — most real code stays with single inheritance plus composition.

---

### Composition vs Inheritance — Has-a vs Is-a

| Relationship | Means | Use |
|---|---|---|
| Inheritance | **is-a** | \`Dog\` *is an* \`Animal\` |
| Composition | **has-a** | A \`Car\` *has an* \`Engine\` |

\`\`\`python
class Engine:
    def start(self):
        return "Vroom!"

class Car:
    def __init__(self):
        self.engine = Engine()     # composition: has-a
    def start(self):
        return self.engine.start()
\`\`\`

Prefer composition for flexibility — a car with a different engine doesn't need a new class hierarchy.

---

### Common Mistakes to Avoid

- **Mistake:** Copy-pasting parent methods into children — **Fix:** override + \`super()\`.
- **Mistake:** \`type(x) == Dog\` instead of \`isinstance(x, Dog)\` — **Fix:** isinstance respects inheritance.
- **Mistake:** Deep inheritance chains (5+ levels) — **Fix:** prefer composition ("has-a") over inheritance for flexibility.
- **Mistake:** Forgetting to call \`super().__init__()\` in the child and getting uninitialized attributes — **Fix:** always initialize the parent.
- **Mistake:** Overusing multiple inheritance and creating confusing MROs — **Fix:** keep it simple; composition usually suffices.

### Professional Tips & Tricks

- Override + \`super()\` keeps parent logic while extending it — never copy-paste parent code.
- Use \`isinstance()\` instead of \`type() == ...\` when checking class relationships.
- Prefer composition (has-a) over deep inheritance chains for flexibility.
- Print \`ClassName.mro()\` to debug confusing method lookups.
- Design for polymorphism: code against the *interface* (speak, area, save), not specific classes.

---

### Key Takeaways

- Children inherit and override; \`super()\` reaches the parent.
- Polymorphism: same method name, different behavior per class.
- \`isinstance()\`/\`issubclass()\` check relationships.
- \`.mro()\` reveals Python's method search order.
- Is-a → inheritance; has-a → composition.

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
          id: "practice-vehicle-subclasses",
          title: "Electric & Autonomous Vehicle Hierarchy",
          difficulty: "Easy",
          task: "Create a base class `Vehicle` and derived class `ElectricCar` that adds `battery_kwh` and overrides `describe()` calling `super().describe()`.",
          hint: "super().__init__(make, model); super().describe()",
          solution: `class Vehicle:\n    def __init__(self, make: str, model: str):\n        self.make = make\n        self.model = model\n    def describe(self) -> str:\n        return f"{self.make} {self.model}"\n\nclass ElectricCar(Vehicle):\n    def __init__(self, make: str, model: str, battery_kwh: int):\n        super().__init__(make, model)\n        self.battery_kwh = battery_kwh\n    def describe(self) -> str:\n        return f"{super().describe()} (Electric, {self.battery_kwh} kWh)"\n\nprint(ElectricCar("Tesla", "Model S", 100).describe())`,
        },
        {
          id: "practice-polymorphic-shapes",
          title: "Polymorphic Canvas & Shape Renderer",
          difficulty: "Medium",
          task: "Create `Shape` base class with subclasses `Rectangle`, `Circle`, and `Triangle`. Write a standalone `render_canvas(shapes)` function that polymorphically calculates total area.",
          hint: "Triangle area = 0.5 * base * height; Circle area = math.pi * r**2",
          solution: `import math\n\nclass Shape:\n    def area(self) -> float: raise NotImplementedError\n\nclass Rectangle(Shape):\n    def __init__(self, w, h): self.w, self.h = w, h\n    def area(self): return self.w * self.h\n\nclass Circle(Shape):\n    def __init__(self, r): self.r = r\n    def area(self): return math.pi * (self.r ** 2)\n\nclass Triangle(Shape):\n    def __init__(self, b, h): self.b, self.h = b, h\n    def area(self): return 0.5 * self.b * self.h\n\ndef render_canvas(shapes: list[Shape]):\n    for s in shapes:\n        print(f"[{s.__class__.__name__:<9}] -> Area: {s.area():.2f}")\n    print(f"Total Combined Area: {sum(s.area() for s in shapes):.2f}")\n\nrender_canvas([Rectangle(4, 5), Circle(3), Triangle(6, 4)])`,
        },
        {
          id: "practice-payment-gateway-abc",
          title: "Abstract Base Class Payment Processing Pipeline",
          difficulty: "Hard",
          task: "Using `abc.ABC` and `@abstractmethod`, build a `PaymentProcessor` with concrete implementations `StripeProcessor`, `PayPalProcessor`, and `CryptoProcessor`.",
          hint: "from abc import ABC, abstractmethod; @abstractmethod def process_payment(self, amount)",
          solution: `from abc import ABC, abstractmethod\n\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def process_payment(self, amount: float) -> str:\n        pass\n\nclass StripeProcessor(PaymentProcessor):\n    def process_payment(self, amount: float) -> str:\n        return f"Stripe: Charged \${amount:.2f} via Credit Card Token."\n\nclass CryptoProcessor(PaymentProcessor):\n    def process_payment(self, amount: float) -> str:\n        return f"Crypto: Transferred \${amount:.2f} equivalent on Blockchain."\n\nfor gateway in [StripeProcessor(), CryptoProcessor()]:\n    print(gateway.process_payment(149.99))`,
        },
        {
          id: "practice-diamond-inheritance-mro",
          title: "Cooperative Multiple Inheritance Diamond (MRO)",
          difficulty: "Hard",
          task: "Implement the classic diamond problem with classes `A`, `B(A)`, `C(A)`, and `D(B, C)` using `super().__init__()`. Print `D.mro()` and explain the resolution path.",
          hint: "Ensure all intermediate classes call super().__init__()",
          solution: `class Base:\n    def log(self): print("Base init")\n\nclass Left(Base):\n    def log(self): super().log(); print("Left init")\n\nclass Right(Base):\n    def log(self): super().log(); print("Right init")\n\nclass Diamond(Left, Right):\n    def log(self): super().log(); print("Diamond init")\n\nd = Diamond()\nd.log()\nprint("\\nMethod Resolution Order (MRO):")\nprint(" -> ".join(c.__name__ for c in Diamond.mro()))`,
        },
        {
          id: "practice-notification-dispatcher",
          title: "Polymorphic Notification Broadcast System",
          difficulty: "Medium",
          task: "Build `NotificationChannel` with subclasses `EmailNotification`, `SMSNotification`, and `SlackWebhook`. Dispatch a single alert to a list of channels.",
          hint: "Loop through channels and call channel.send(message)",
          solution: `class NotificationChannel:\n    def send(self, recipient: str, message: str): pass\n\nclass EmailNotification(NotificationChannel):\n    def send(self, recipient: str, message: str):\n        print(f"📧 Email sent to {recipient}: '{message}'")\n\nclass SMSNotification(NotificationChannel):\n    def send(self, recipient: str, message: str):\n        print(f"📱 SMS sent to {recipient}: '{message}'")\n\nchannels = [EmailNotification(), SMSNotification()]\nfor ch in channels:\n    ch.send("amol@ai.dev", "Production server CPU load > 90%")`,
        },
        {
          id: "practice-subclass-registration-hook",
          title: "Auto-Registration Plugin Hook with `__init_subclass__`",
          difficulty: "Hard",
          task: "Use Python's `__init_subclass__` hook on a base `ReportGenerator` class to automatically register all derived report classes into a central registry dict by format type.",
          hint: "registry = {}; def __init_subclass__(cls, format_type, **kwargs): registry[format_type] = cls",
          solution: `class ReportGenerator:\n    registry = {}\n    def __init_subclass__(cls, report_format: str, **kwargs):\n        super().__init_subclass__(**kwargs)\n        cls.registry[report_format] = cls\n\nclass PDFReport(ReportGenerator, report_format="pdf"):\n    def generate(self, data): return f"[PDF Report for {data}]"\n\nclass CSVReport(ReportGenerator, report_format="csv"):\n    def generate(self, data): return f"[CSV Export for {data}]"\n\nprint("Registered Generators:", list(ReportGenerator.registry.keys()))\nprint(ReportGenerator.registry["pdf"]().generate("Sales 2026"))`,
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

> **Mental model:** \`_\` is a "staff only" sign. Nothing in Python *stops* you from entering — but the convention says "you probably shouldn't". \`__\` (double underscore) actually renames the attribute internally, making accidental access fail loudly.

#### What You'll Learn in This Lesson

- Protect internal state with private conventions
- Build smart attribute access with \`@property\`
- Customize objects with magic (dunder) methods

---

### Name Mangling — How __ Works

\`self.__balance\` is *renamed* by Python to \`self._ClassName__balance\` at runtime:

\`\`\`python
class Account:
    def __init__(self):
        self.__secret = 42

acc = Account()
# print(acc.__secret)   # AttributeError! renamed internally
print(acc._Account__secret)   # 42 — the mangled name
\`\`\`

The double underscore exists mainly to prevent *accidental* clashes in inheritance — a child class can't accidentally overwrite the parent's \`__secret\`. It is not true security.

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

**The getter-only property (read-only):** omit the \`@setter\` and the attribute becomes read-only — assignment raises \`AttributeError\`. Perfect for computed values:

\`\`\`python
class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h

    @property
    def area(self):          # computed, read-only
        return self.w * self.h

r = Rectangle(3, 4)
print(r.area)    # 12
# r.area = 99    # AttributeError: can't set attribute
\`\`\`

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

**More dunder methods worth knowing:**

| Method | Powers | Typical use |
|---|---|---|
| \`__add__\` | \`a + b\` | Vector math, money |
| \`__len__\` | \`len(obj)\` | Collections |
| \`__getitem__\` | \`obj[i]\` | Indexable objects |
| \`__iter__\` | \`for x in obj\` | Iterable objects |
| \`__call__\` | \`obj()\` | Callable objects |
| \`__enter__\`/\`__exit__\` | \`with obj:\` | Context managers (Lesson 20) |

Implementing \`__eq__\` and \`__lt__\` together gives you \`==\`, sorting, and \`min\`/\`max\` for free — professional objects behave exactly like built-ins.

---

### Common Mistakes to Avoid

- **Mistake:** Forgetting \`self\` in property methods — **Fix:** properties are methods; \`self\` first.
- **Mistake:** Naming a property and its backing attribute the same (\`self.balance\` + \`@property balance\`) — **Fix:** back it with \`self._balance\`.
- **Mistake:** Implementing only \`__eq__\` without \`__hash__\` and putting objects in sets — **Fix:** if you define \`__eq__\`, set \`__hash__ = None\` or define \`__hash__\` explicitly.
- **Mistake:** Expecting \`__\` attributes to be truly private — **Fix:** it's name mangling, not security; use \`_\` for the convention.
- **Mistake:** Returning a value from a setter — **Fix:** setters must return \`None\`.

### Professional Tips & Tricks

- Use \`@property\` to add validation without breaking existing code that reads attributes.
- Always implement \`__str__\` for user-facing classes — debugging and printing become readable.
- Implement \`__eq__\` and \`__lt__\` together so your objects work with \`==\`, sorting, and \`min\`/\`max\`.
- Use getter-only properties for computed values that must stay consistent.
- Prefer \`_\` conventions over \`__\` for most "private" data — simpler and idiomatic.

---

### Key Takeaways

- Encapsulation controls access to internal state: \`_name\` by convention, \`__name\` via name mangling.
- \`@property\` + \`@setter\` give attribute-like access with validation.
- Dunder methods hook objects into Python operators and built-ins.
- Implement \`__str__\`, \`__repr__\`, \`__eq__\`, and \`__lt__\` for professional objects.
- Getter-only properties make clean, computed, read-only attributes.

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
          id: "practice-celsius-fahrenheit-property",
          title: "Bi-Directional Temperature Property",
          difficulty: "Easy",
          task: "Create `Temperature` with a validated `celsius` property (rejects < -273.15) and a computed `fahrenheit` getter and setter that converts dynamically.",
          hint: "F = C * 9/5 + 32; C = (F - 32) * 5/9",
          solution: `class Temperature:\n    def __init__(self, celsius: float = 0.0):\n        self.celsius = celsius\n\n    @property\n    def celsius(self) -> float: return self._celsius\n\n    @celsius.setter\n    def celsius(self, value: float):\n        if value < -273.15: raise ValueError("Temperature below absolute zero!")\n        self._celsius = float(value)\n\n    @property\n    def fahrenheit(self) -> float: return self._celsius * 9 / 5 + 32\n\n    @fahrenheit.setter\n    def fahrenheit(self, value: float):\n        self.celsius = (value - 32) * 5 / 9\n\nt = Temperature(25)\nprint(f"25 C = {t.fahrenheit:.1f} F")\nt.fahrenheit = 212\nprint(f"212 F = {t.celsius:.1f} C")`,
        },
        {
          id: "practice-vector-operator-overloading",
          title: "Vector Magic Math Overloading (`__add__`, `__mul__`, `__abs__`)",
          difficulty: "Medium",
          task: "Create `Vector` with `__add__` (vector addition), `__mul__` (scalar multiplication), `__abs__` (length/magnitude), and `__repr__` formatting.",
          hint: "def __add__(self, other): return Vector(self.x + other.x, self.y + other.y)",
          solution: `import math\n\nclass Vector:\n    def __init__(self, x: float, y: float):\n        self.x, self.y = x, y\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __mul__(self, scalar: float):\n        return Vector(self.x * scalar, self.y * scalar)\n\n    def __abs__(self) -> float:\n        return math.hypot(self.x, self.y)\n\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\nprint(f"v1 + v2:  {v1 + v2}")\nprint(f"v1 * 3:   {v1 * 3}")\nprint(f"|v1|:     {abs(v1)}")`,
        },
        {
          id: "practice-custom-container-dunders",
          title: "Custom Sequence Container (`__len__`, `__getitem__`, `__contains__`)",
          difficulty: "Medium",
          task: "Build `Playlist` class containing song titles. Implement `__len__`, `__getitem__` (supports indexing and slicing), and `__contains__` (`'song' in playlist`).",
          hint: "def __getitem__(self, index): return self.songs[index]",
          solution: `class Playlist:\n    def __init__(self, name: str, songs=None):\n        self.name = name\n        self.songs = list(songs) if songs else []\n\n    def __len__(self): return len(self.songs)\n    def __getitem__(self, item): return self.songs[item]\n    def __contains__(self, song): return song in self.songs\n\npl = Playlist("Coding Flow", ["Lofi Beats", "Synthwave Night", "Chillstep"])\nprint(f"Playlist Length: {len(pl)}")\nprint(f"First Track:     {pl[0]}")\nprint(f"Has Synthwave?   {'Synthwave Night' in pl}")`,
        },
        {
          id: "practice-context-manager-dunder",
          title: "Timer Context Manager (`__enter__` & `__exit__`)",
          difficulty: "Hard",
          task: "Implement a context manager class `PerformanceTimer(label)` using `__enter__` and `__exit__` that measures block execution time.",
          hint: "def __enter__(self): self.start = time.perf_counter(); return self; def __exit__(self, exc_type, exc_val, exc_tb): ...",
          solution: `import time\n\nclass PerformanceTimer:\n    def __init__(self, label: str):\n        self.label = label\n\n    def __enter__(self):\n        self.start = time.perf_counter()\n        print(f"[{self.label}] Timer started...")\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.elapsed = time.perf_counter() - self.start\n        print(f"[{self.label}] Elapsed: {self.elapsed:.6f}s")\n        return False\n\nwith PerformanceTimer("Matrix Array Allocation"):\n    arr = [i ** 2 for i in range(250_000)]`,
        },
        {
          id: "practice-callable-class-dunder",
          title: "Callable State Machine (`__call__`)",
          difficulty: "Hard",
          task: "Create `ExponentialMovingAverage` class with `__call__(new_val)` that updates and returns an exponential moving average on each call.",
          hint: "self.avg = alpha * new_val + (1 - alpha) * self.avg",
          solution: `class ExponentialMovingAverage:\n    def __init__(self, alpha: float = 0.3):\n        self.alpha = alpha\n        self.current_avg = None\n\n    def __call__(self, value: float) -> float:\n        if self.current_avg is None:\n            self.current_avg = value\n        else:\n            self.current_avg = self.alpha * value + (1 - self.alpha) * self.current_avg\n        return round(self.current_avg, 2)\n\nema = ExponentialMovingAverage(alpha=0.4)\nstream = [100.0, 110.0, 105.0, 120.0, 115.0]\nfor tick in stream:\n    print(f"Tick: {tick} -> Updated EMA: {ema(tick)}")`,
        },
        {
          id: "practice-total-ordering-dunder",
          title: "Rich Comparison & Priority Total Ordering",
          difficulty: "Hard",
          task: "Use `@functools.total_ordering` and implement `__eq__` and `__lt__` on a `Task` class with `priority` (1-5) and `created_at` timestamp.",
          hint: "from functools import total_ordering; def __lt__(self, other): return self.priority < other.priority",
          solution: `from functools import total_ordering\n\n@total_ordering\nclass Task:\n    def __init__(self, title: str, priority: int):\n        self.title = title\n        self.priority = priority  # 1 = Highest, 5 = Lowest\n\n    def __eq__(self, other):\n        return self.priority == other.priority\n\n    def __lt__(self, other):\n        return self.priority < other.priority\n\n    def __repr__(self):\n        return f"Task('{self.title}', P{self.priority})"\n\ntasks = [Task("Clean logs", 4), Task("Security Patch", 1), Task("Add feature", 2)]\nprint("Prioritized Task Order:", sorted(tasks))`,
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

Dataclasses (Python 3.7+) have become the default way to define data containers in modern Python. If a class is mostly "hold these fields and let me compare/print them", a dataclass is the professional choice.

#### What You'll Learn in This Lesson

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

**The "before" picture — what the decorator saves you from writing:**

\`\`\`python
# Without dataclass — 15+ lines of ceremony
class Course:
    def __init__(self, title, lessons, tags):
        self.title = title
        self.lessons = lessons
        self.tags = tags

    def __repr__(self):
        return f"Course(title={self.title!r}, lessons={self.lessons!r}, tags={self.tags!r})"

    def __eq__(self, other):
        if not isinstance(other, Course):
            return NotImplemented
        return (self.title, self.lessons, self.tags) == (other.title, other.lessons, other.tags)
\`\`\`

The \`@dataclass\` decorator generates exactly this — correctly, every time.

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

**Why \`field(default_factory=...)\` and not just \`= []\`?** The default value is evaluated once at class definition. \`default_factory\` is a *function* that runs per instance — each object gets its own fresh container.

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

**Modifying a frozen dataclass — the sanctioned way:**

\`\`\`python
from dataclasses import replace
cfg2 = replace(cfg, debug=True)   # returns a NEW Config with debug=True
print(cfg2)                       # Config(version='1.0', debug=True)
print(cfg.debug)                  # False — original untouched
\`\`\`

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

**Field ordering matters** with \`order=True\`: objects compare by fields left to right. Put the primary sort key first (\`price\` before \`name\` above).

---

### Dataclasses vs NamedTuples vs Plain Classes

| Tool | When to use |
|---|---|
| **NamedTuple** | Tiny immutable records, no methods |
| **@dataclass** | Data containers with optional methods |
| **Plain class** | Objects with significant behavior |

**Dataclasses with methods** are fully supported — a dataclass can have regular methods alongside the auto-generated boilerplate:

\`\`\`python
@dataclass
class Course:
    title: str
    lessons: int

    def summary(self):          # a normal method
        return f"{self.title} — {self.lessons} lessons"
\`\`\`

---

### Real-World Dataclass Uses

- **DTOs (Data Transfer Objects):** API request/response payloads with type hints.
- **Configuration objects:** frozen settings loaded once.
- **Database models:** table rows as typed records.
- **Value objects:** coordinates, money, ranges with \`__eq__\`/\`order\`.
- **JSON serialization:** combined with \`dataclasses.asdict()\` for quick \`json.dumps\`.

---

### Common Mistakes to Avoid

- **Mistake:** \`tags: list = []\` as a default — **Fix:** \`field(default_factory=list)\`.
- **Mistake:** Expecting to modify a frozen dataclass — **Fix:** use \`dataclasses.replace(obj, field=value)\` for a modified copy.
- **Mistake:** Using dataclasses for objects with complex behavior — **Fix:** use a regular class.
- **Mistake:** Forgetting type annotations — **Fix:** dataclass fields need annotations: \`name: str\`.
- **Mistake:** Relying on field order for \`order=True\` comparisons without checking which field sorts first — **Fix:** put the primary sort key first.

### Professional Tips & Tricks

- Use \`field(default_factory=list)\` for mutable defaults — never \`[]\` directly (shared trap).
- Reach for dataclasses for DTOs, API payloads, and config objects.
- Combine dataclasses with type hints for self-documenting code that linters can verify.
- Use \`frozen=True\` for config and constants; \`replace()\` for safe "changes".
- Use \`dataclasses.asdict()\` for quick conversion to plain dicts for JSON.

---

### Key Takeaways

- \`@dataclass\` auto-generates \`__init__\`, \`__repr__\`, and \`__eq__\`.
- \`field(default_factory=list)\` gives each instance its own mutable default.
- \`frozen=True\` makes immutable, hashable data.
- \`order=True\` enables sorting.
- Use dataclasses for data containers; plain classes for behavioral objects.
- \`replace()\` modifies frozen instances by returning a new copy.

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
          id: "practice-product-dataclass-crud",
          title: "Product Inventory Model with `@dataclass`",
          difficulty: "Easy",
          task: "Create a `@dataclass` for `Product` with `sku: str`, `name: str`, `price: float`, and `stock: int = 0`. Instantiate and print representations.",
          hint: "from dataclasses import dataclass; @dataclass class Product: ...",
          solution: `from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    sku: str\n    name: str\n    price: float\n    stock: int = 0\n\np = Product("SKU-99", "Ergonomic Chair", 249.99, 12)\nprint(p)\nprint(f"Product: {p.name} | Total Inventory Value: \${p.price * p.stock:,.2f}")`,
        },
        {
          id: "practice-frozen-app-config",
          title: "Immutable App Config with `frozen=True`",
          difficulty: "Medium",
          task: "Create a `@dataclass(frozen=True)` for `DatabaseConfig` with `host`, `port`, `db_name`, and `ssl_enabled`. Verify that mutating fields raises an error.",
          hint: "frozen=True prevents reassignment and makes instances hashable.",
          solution: `from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass DatabaseConfig:\n    host: str = "localhost"\n    port: int = 5432\n    db_name: str = "production_db"\n    ssl_enabled: bool = True\n\ncfg = DatabaseConfig(host="db.internal.cluster", port=5432)\nprint(f"Active Config: {cfg}")\ntry:\n    cfg.port = 3306  # Raises FrozenInstanceError\nexcept Exception as err:\n    print(f"Immutability Guard Confirmed: {type(err).__name__}")`,
        },
        {
          id: "practice-post-init-computed-fields",
          title: "Computed Derived Fields with `__post_init__`",
          difficulty: "Medium",
          task: "Create an `InvoiceItem` dataclass with `unit_price`, `quantity`, and `tax_rate`. In `__post_init__`, calculate and assign `subtotal` and `total_with_tax`.",
          hint: "def __post_init__(self): self.subtotal = self.unit_price * self.quantity; self.total = self.subtotal * (1 + self.tax_rate)",
          solution: `from dataclasses import dataclass, field\n\n@dataclass\nclass InvoiceItem:\n    description: str\n    unit_price: float\n    quantity: int\n    tax_rate: float = 0.08\n    subtotal: float = field(init=False)\n    total_with_tax: float = field(init=False)\n\n    def __post_init__(self):\n        self.subtotal = round(self.unit_price * self.quantity, 2)\n        self.total_with_tax = round(self.subtotal * (1 + self.tax_rate), 2)\n\nitem = InvoiceItem("Cloud Compute Instance (Hourly)", 0.45, 720)\nprint(f"Item:     {item.description}")\nprint(f"Subtotal: \${item.subtotal:.2f}")\nprint(f"Total:    \${item.total_with_tax:.2f}")`,
        },
        {
          id: "practice-dataclass-default-factory",
          title: "Safe Mutable Defaults with `field(default_factory=...)`",
          difficulty: "Medium",
          task: "Build `UserTeam` dataclass with `team_name: str` and `members: list[str] = field(default_factory=list)`. Demonstrate that two instances do not share membership.",
          hint: "Never use members: list = [] (shared list trap!). Always use default_factory=list.",
          solution: `from dataclasses import dataclass, field\n\n@dataclass\nclass UserTeam:\n    team_name: str\n    members: list[str] = field(default_factory=list)\n    metadata: dict = field(default_factory=dict)\n\nt1 = UserTeam("Backend Core")\nt2 = UserTeam("AI Research")\nt1.members.append("Amol")\n\nprint(f"Team 1 Members: {t1.members}")\nprint(f"Team 2 Members: {t2.members} (Completely isolated!)")`,
        },
        {
          id: "practice-dataclass-json-serialization",
          title: "Nested Dataclass Serialization (`asdict` & `astuple`)",
          difficulty: "Hard",
          task: "Create nested dataclasses `Address` and `Customer`. Use `dataclasses.asdict` to serialize a customer tree into a dictionary and JSON payload.",
          hint: "from dataclasses import asdict; import json; json_str = json.dumps(asdict(customer), indent=2)",
          solution: `from dataclasses import dataclass, asdict\nimport json\n\n@dataclass\nclass Address:\n    street: str\n    city: str\n    zip_code: str\n\n@dataclass\nclass Customer:\n    id: int\n    name: str\n    address: Address\n    tags: list[str]\n\ncust = Customer(\n    id=101,\n    name="Amol Shukla",\n    address=Address("450 Tech Way", "San Francisco", "94107"),\n    tags=["enterprise", "vip"]\n)\n\npayload = asdict(cust)\nprint("JSON Serialized Payload:")\nprint(json.dumps(payload, indent=2))`,
        },
        {
          id: "practice-dataclass-ordering-comparison",
          title: "Prioritized Queue Sorting with `order=True`",
          difficulty: "Hard",
          task: "Create `@dataclass(order=True)` for `SupportTicket` where comparison is performed by `urgency_level` (ascending) while ignoring `title` and `timestamp`.",
          hint: "@dataclass(order=True); title: str = field(compare=False)",
          solution: `from dataclasses import dataclass, field\n\n@dataclass(order=True)\nclass SupportTicket:\n    urgency: int  # 1 = Highest, 5 = Lowest (used for sorting)\n    title: str = field(compare=False)\n    customer: str = field(compare=False)\n\ntickets = [\n    SupportTicket(3, "UI button typo", "Acme Corp"),\n    SupportTicket(1, "Database Connection Outage", "Globex Inc"),\n    SupportTicket(2, "Billing invoice discrepancy", "Initech")\n]\n\nprint("Tickets Sorted by Urgency Priority:")\nfor t in sorted(tickets):\n    print(f"  [P{t.urgency}] {t.title:<30} ({t.customer})")`,
        },
      ],
    },
  ],
};
