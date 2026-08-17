import type { PracticeExercise } from "../courses";

export const MODULE_5_CHALLENGES: Record<string, PracticeExercise[]> = {
  "classes-objects": [
    {
      id: "l16-ch-1",
      title: "Lesson 16 - Problem 1: BankAccount Class State 1",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_1\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_1:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-1",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_1('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-1",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_1('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-1",
          name: "Insufficient Funds",
          inputCode: "BankAccount_1('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_1:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-2",
      title: "Lesson 16 - Problem 2: BankAccount Class State 2",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_2\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_2:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-2",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_2('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-2",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_2('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-2",
          name: "Insufficient Funds",
          inputCode: "BankAccount_2('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_2:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-3",
      title: "Lesson 16 - Problem 3: BankAccount Class State 3",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_3\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_3:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-3",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_3('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-3",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_3('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-3",
          name: "Insufficient Funds",
          inputCode: "BankAccount_3('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_3:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-4",
      title: "Lesson 16 - Problem 4: BankAccount Class State 4",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_4\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_4:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-4",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_4('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-4",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_4('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-4",
          name: "Insufficient Funds",
          inputCode: "BankAccount_4('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_4:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-5",
      title: "Lesson 16 - Problem 5: BankAccount Class State 5",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_5\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_5:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-5",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_5('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-5",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_5('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-5",
          name: "Insufficient Funds",
          inputCode: "BankAccount_5('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_5:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-6",
      title: "Lesson 16 - Problem 6: BankAccount Class State 6",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_6\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_6:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-6",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_6('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-6",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_6('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-6",
          name: "Insufficient Funds",
          inputCode: "BankAccount_6('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_6:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-7",
      title: "Lesson 16 - Problem 7: BankAccount Class State 7",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_7\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_7:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-7",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_7('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-7",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_7('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-7",
          name: "Insufficient Funds",
          inputCode: "BankAccount_7('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_7:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-8",
      title: "Lesson 16 - Problem 8: BankAccount Class State 8",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_8\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_8:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-8",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_8('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-8",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_8('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-8",
          name: "Insufficient Funds",
          inputCode: "BankAccount_8('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_8:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-9",
      title: "Lesson 16 - Problem 9: BankAccount Class State 9",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_9\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_9:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-9",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_9('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-9",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_9('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-9",
          name: "Insufficient Funds",
          inputCode: "BankAccount_9('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_9:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-10",
      title: "Lesson 16 - Problem 10: BankAccount Class State 10",
      difficulty: "Easy",
      points: 10,
      task: "Create a class \`BankAccount_10\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_10:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-10",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_10('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-10",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_10('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-10",
          name: "Insufficient Funds",
          inputCode: "BankAccount_10('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_10:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-11",
      title: "Lesson 16 - Problem 11: BankAccount Class State 11",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_11\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_11:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-11",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_11('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-11",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_11('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-11",
          name: "Insufficient Funds",
          inputCode: "BankAccount_11('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_11:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-12",
      title: "Lesson 16 - Problem 12: BankAccount Class State 12",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_12\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_12:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-12",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_12('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-12",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_12('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-12",
          name: "Insufficient Funds",
          inputCode: "BankAccount_12('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_12:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-13",
      title: "Lesson 16 - Problem 13: BankAccount Class State 13",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_13\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_13:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-13",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_13('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-13",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_13('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-13",
          name: "Insufficient Funds",
          inputCode: "BankAccount_13('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_13:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-14",
      title: "Lesson 16 - Problem 14: BankAccount Class State 14",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_14\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_14:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-14",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_14('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-14",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_14('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-14",
          name: "Insufficient Funds",
          inputCode: "BankAccount_14('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_14:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-15",
      title: "Lesson 16 - Problem 15: BankAccount Class State 15",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_15\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_15:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-15",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_15('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-15",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_15('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-15",
          name: "Insufficient Funds",
          inputCode: "BankAccount_15('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_15:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-16",
      title: "Lesson 16 - Problem 16: BankAccount Class State 16",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_16\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_16:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-16",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_16('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-16",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_16('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-16",
          name: "Insufficient Funds",
          inputCode: "BankAccount_16('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_16:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-17",
      title: "Lesson 16 - Problem 17: BankAccount Class State 17",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_17\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_17:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-17",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_17('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-17",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_17('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-17",
          name: "Insufficient Funds",
          inputCode: "BankAccount_17('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_17:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-18",
      title: "Lesson 16 - Problem 18: BankAccount Class State 18",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_18\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_18:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-18",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_18('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-18",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_18('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-18",
          name: "Insufficient Funds",
          inputCode: "BankAccount_18('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_18:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-19",
      title: "Lesson 16 - Problem 19: BankAccount Class State 19",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_19\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_19:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-19",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_19('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-19",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_19('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-19",
          name: "Insufficient Funds",
          inputCode: "BankAccount_19('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_19:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-20",
      title: "Lesson 16 - Problem 20: BankAccount Class State 20",
      difficulty: "Medium",
      points: 20,
      task: "Create a class \`BankAccount_20\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_20:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-20",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_20('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-20",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_20('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-20",
          name: "Insufficient Funds",
          inputCode: "BankAccount_20('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_20:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-21",
      title: "Lesson 16 - Problem 21: BankAccount Class State 21",
      difficulty: "Hard",
      points: 30,
      task: "Create a class \`BankAccount_21\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_21:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-21",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_21('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-21",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_21('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-21",
          name: "Insufficient Funds",
          inputCode: "BankAccount_21('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_21:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-22",
      title: "Lesson 16 - Problem 22: BankAccount Class State 22",
      difficulty: "Hard",
      points: 30,
      task: "Create a class \`BankAccount_22\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_22:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-22",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_22('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-22",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_22('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-22",
          name: "Insufficient Funds",
          inputCode: "BankAccount_22('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_22:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-23",
      title: "Lesson 16 - Problem 23: BankAccount Class State 23",
      difficulty: "Hard",
      points: 30,
      task: "Create a class \`BankAccount_23\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_23:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-23",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_23('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-23",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_23('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-23",
          name: "Insufficient Funds",
          inputCode: "BankAccount_23('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_23:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-24",
      title: "Lesson 16 - Problem 24: BankAccount Class State 24",
      difficulty: "Hard",
      points: 30,
      task: "Create a class \`BankAccount_24\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_24:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-24",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_24('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-24",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_24('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-24",
          name: "Insufficient Funds",
          inputCode: "BankAccount_24('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_24:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    },
    {
      id: "l16-ch-25",
      title: "Lesson 16 - Problem 25: BankAccount Class State 25",
      difficulty: "Hard",
      points: 30,
      task: "Create a class \`BankAccount_25\` with \`__init__(self, owner, balance=0)\` and methods \`deposit(amount)\` and \`withdraw(amount)\` (returns False if insufficient funds, True otherwise).",
      starterCode: `class BankAccount_25:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True
`,
      testCases: [
        {
          id: "l16-t1-25",
          name: "Deposit & Balance",
          inputCode: "(lambda b: (b.deposit(50), b.balance))(BankAccount_25('Amol', 100))",
          expectedOutput: "(150, 150)",
          isHidden: false,
        },
        {
          id: "l16-t2-25",
          name: "Successful Withdraw",
          inputCode: "(lambda b: (b.withdraw(40), b.balance))(BankAccount_25('Amol', 100))",
          expectedOutput: "(True, 60)",
          isHidden: false,
        },
        {
          id: "l16-t3-25",
          name: "Insufficient Funds",
          inputCode: "BankAccount_25('Amol', 20).withdraw(50)",
          expectedOutput: "False",
          isHidden: true,
        }
      ],
      hint: "Maintain self.balance in instance state across deposit and withdraw invocations.",
      solution: `class BankAccount_25:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self.balance
    def withdraw(self, amount):
        if amount > self.balance: return False
        self.balance -= amount
        return True`,
    }
  ],
  "inheritance-polymorphism": [
    {
      id: "l17-ch-1",
      title: "Lesson 17 - Problem 1: Polymorphic Shape Calculator 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_1\` with \`area()\` and child classes \`Rectangle_1(w, h)\` and \`Circle_1(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_1:
    def area(self): return 0.0

class Rectangle_1(Shape_1):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_1(Shape_1):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-1",
          name: "Rectangle Area",
          inputCode: "Rectangle_1(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-1",
          name: "Circle Area",
          inputCode: "Circle_1(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-1",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_1(2, 3), Circle_1(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_1:
    def area(self): return 0.0
class Rectangle_1(Shape_1):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_1(Shape_1):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-2",
      title: "Lesson 17 - Problem 2: Polymorphic Shape Calculator 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_2\` with \`area()\` and child classes \`Rectangle_2(w, h)\` and \`Circle_2(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_2:
    def area(self): return 0.0

class Rectangle_2(Shape_2):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_2(Shape_2):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-2",
          name: "Rectangle Area",
          inputCode: "Rectangle_2(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-2",
          name: "Circle Area",
          inputCode: "Circle_2(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-2",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_2(2, 3), Circle_2(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_2:
    def area(self): return 0.0
class Rectangle_2(Shape_2):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_2(Shape_2):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-3",
      title: "Lesson 17 - Problem 3: Polymorphic Shape Calculator 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_3\` with \`area()\` and child classes \`Rectangle_3(w, h)\` and \`Circle_3(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_3:
    def area(self): return 0.0

class Rectangle_3(Shape_3):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_3(Shape_3):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-3",
          name: "Rectangle Area",
          inputCode: "Rectangle_3(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-3",
          name: "Circle Area",
          inputCode: "Circle_3(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-3",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_3(2, 3), Circle_3(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_3:
    def area(self): return 0.0
class Rectangle_3(Shape_3):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_3(Shape_3):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-4",
      title: "Lesson 17 - Problem 4: Polymorphic Shape Calculator 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_4\` with \`area()\` and child classes \`Rectangle_4(w, h)\` and \`Circle_4(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_4:
    def area(self): return 0.0

class Rectangle_4(Shape_4):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_4(Shape_4):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-4",
          name: "Rectangle Area",
          inputCode: "Rectangle_4(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-4",
          name: "Circle Area",
          inputCode: "Circle_4(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-4",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_4(2, 3), Circle_4(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_4:
    def area(self): return 0.0
class Rectangle_4(Shape_4):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_4(Shape_4):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-5",
      title: "Lesson 17 - Problem 5: Polymorphic Shape Calculator 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_5\` with \`area()\` and child classes \`Rectangle_5(w, h)\` and \`Circle_5(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_5:
    def area(self): return 0.0

class Rectangle_5(Shape_5):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_5(Shape_5):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-5",
          name: "Rectangle Area",
          inputCode: "Rectangle_5(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-5",
          name: "Circle Area",
          inputCode: "Circle_5(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-5",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_5(2, 3), Circle_5(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_5:
    def area(self): return 0.0
class Rectangle_5(Shape_5):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_5(Shape_5):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-6",
      title: "Lesson 17 - Problem 6: Polymorphic Shape Calculator 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_6\` with \`area()\` and child classes \`Rectangle_6(w, h)\` and \`Circle_6(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_6:
    def area(self): return 0.0

class Rectangle_6(Shape_6):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_6(Shape_6):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-6",
          name: "Rectangle Area",
          inputCode: "Rectangle_6(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-6",
          name: "Circle Area",
          inputCode: "Circle_6(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-6",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_6(2, 3), Circle_6(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_6:
    def area(self): return 0.0
class Rectangle_6(Shape_6):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_6(Shape_6):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-7",
      title: "Lesson 17 - Problem 7: Polymorphic Shape Calculator 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_7\` with \`area()\` and child classes \`Rectangle_7(w, h)\` and \`Circle_7(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_7:
    def area(self): return 0.0

class Rectangle_7(Shape_7):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_7(Shape_7):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-7",
          name: "Rectangle Area",
          inputCode: "Rectangle_7(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-7",
          name: "Circle Area",
          inputCode: "Circle_7(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-7",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_7(2, 3), Circle_7(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_7:
    def area(self): return 0.0
class Rectangle_7(Shape_7):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_7(Shape_7):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-8",
      title: "Lesson 17 - Problem 8: Polymorphic Shape Calculator 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_8\` with \`area()\` and child classes \`Rectangle_8(w, h)\` and \`Circle_8(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_8:
    def area(self): return 0.0

class Rectangle_8(Shape_8):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_8(Shape_8):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-8",
          name: "Rectangle Area",
          inputCode: "Rectangle_8(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-8",
          name: "Circle Area",
          inputCode: "Circle_8(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-8",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_8(2, 3), Circle_8(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_8:
    def area(self): return 0.0
class Rectangle_8(Shape_8):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_8(Shape_8):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-9",
      title: "Lesson 17 - Problem 9: Polymorphic Shape Calculator 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_9\` with \`area()\` and child classes \`Rectangle_9(w, h)\` and \`Circle_9(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_9:
    def area(self): return 0.0

class Rectangle_9(Shape_9):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_9(Shape_9):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-9",
          name: "Rectangle Area",
          inputCode: "Rectangle_9(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-9",
          name: "Circle Area",
          inputCode: "Circle_9(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-9",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_9(2, 3), Circle_9(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_9:
    def area(self): return 0.0
class Rectangle_9(Shape_9):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_9(Shape_9):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-10",
      title: "Lesson 17 - Problem 10: Polymorphic Shape Calculator 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement base class \`Shape_10\` with \`area()\` and child classes \`Rectangle_10(w, h)\` and \`Circle_10(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_10:
    def area(self): return 0.0

class Rectangle_10(Shape_10):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_10(Shape_10):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-10",
          name: "Rectangle Area",
          inputCode: "Rectangle_10(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-10",
          name: "Circle Area",
          inputCode: "Circle_10(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-10",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_10(2, 3), Circle_10(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_10:
    def area(self): return 0.0
class Rectangle_10(Shape_10):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_10(Shape_10):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-11",
      title: "Lesson 17 - Problem 11: Polymorphic Shape Calculator 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_11\` with \`area()\` and child classes \`Rectangle_11(w, h)\` and \`Circle_11(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_11:
    def area(self): return 0.0

class Rectangle_11(Shape_11):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_11(Shape_11):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-11",
          name: "Rectangle Area",
          inputCode: "Rectangle_11(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-11",
          name: "Circle Area",
          inputCode: "Circle_11(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-11",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_11(2, 3), Circle_11(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_11:
    def area(self): return 0.0
class Rectangle_11(Shape_11):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_11(Shape_11):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-12",
      title: "Lesson 17 - Problem 12: Polymorphic Shape Calculator 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_12\` with \`area()\` and child classes \`Rectangle_12(w, h)\` and \`Circle_12(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_12:
    def area(self): return 0.0

class Rectangle_12(Shape_12):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_12(Shape_12):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-12",
          name: "Rectangle Area",
          inputCode: "Rectangle_12(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-12",
          name: "Circle Area",
          inputCode: "Circle_12(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-12",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_12(2, 3), Circle_12(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_12:
    def area(self): return 0.0
class Rectangle_12(Shape_12):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_12(Shape_12):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-13",
      title: "Lesson 17 - Problem 13: Polymorphic Shape Calculator 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_13\` with \`area()\` and child classes \`Rectangle_13(w, h)\` and \`Circle_13(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_13:
    def area(self): return 0.0

class Rectangle_13(Shape_13):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_13(Shape_13):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-13",
          name: "Rectangle Area",
          inputCode: "Rectangle_13(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-13",
          name: "Circle Area",
          inputCode: "Circle_13(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-13",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_13(2, 3), Circle_13(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_13:
    def area(self): return 0.0
class Rectangle_13(Shape_13):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_13(Shape_13):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-14",
      title: "Lesson 17 - Problem 14: Polymorphic Shape Calculator 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_14\` with \`area()\` and child classes \`Rectangle_14(w, h)\` and \`Circle_14(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_14:
    def area(self): return 0.0

class Rectangle_14(Shape_14):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_14(Shape_14):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-14",
          name: "Rectangle Area",
          inputCode: "Rectangle_14(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-14",
          name: "Circle Area",
          inputCode: "Circle_14(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-14",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_14(2, 3), Circle_14(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_14:
    def area(self): return 0.0
class Rectangle_14(Shape_14):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_14(Shape_14):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-15",
      title: "Lesson 17 - Problem 15: Polymorphic Shape Calculator 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_15\` with \`area()\` and child classes \`Rectangle_15(w, h)\` and \`Circle_15(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_15:
    def area(self): return 0.0

class Rectangle_15(Shape_15):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_15(Shape_15):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-15",
          name: "Rectangle Area",
          inputCode: "Rectangle_15(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-15",
          name: "Circle Area",
          inputCode: "Circle_15(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-15",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_15(2, 3), Circle_15(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_15:
    def area(self): return 0.0
class Rectangle_15(Shape_15):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_15(Shape_15):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-16",
      title: "Lesson 17 - Problem 16: Polymorphic Shape Calculator 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_16\` with \`area()\` and child classes \`Rectangle_16(w, h)\` and \`Circle_16(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_16:
    def area(self): return 0.0

class Rectangle_16(Shape_16):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_16(Shape_16):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-16",
          name: "Rectangle Area",
          inputCode: "Rectangle_16(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-16",
          name: "Circle Area",
          inputCode: "Circle_16(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-16",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_16(2, 3), Circle_16(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_16:
    def area(self): return 0.0
class Rectangle_16(Shape_16):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_16(Shape_16):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-17",
      title: "Lesson 17 - Problem 17: Polymorphic Shape Calculator 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_17\` with \`area()\` and child classes \`Rectangle_17(w, h)\` and \`Circle_17(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_17:
    def area(self): return 0.0

class Rectangle_17(Shape_17):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_17(Shape_17):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-17",
          name: "Rectangle Area",
          inputCode: "Rectangle_17(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-17",
          name: "Circle Area",
          inputCode: "Circle_17(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-17",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_17(2, 3), Circle_17(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_17:
    def area(self): return 0.0
class Rectangle_17(Shape_17):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_17(Shape_17):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-18",
      title: "Lesson 17 - Problem 18: Polymorphic Shape Calculator 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_18\` with \`area()\` and child classes \`Rectangle_18(w, h)\` and \`Circle_18(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_18:
    def area(self): return 0.0

class Rectangle_18(Shape_18):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_18(Shape_18):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-18",
          name: "Rectangle Area",
          inputCode: "Rectangle_18(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-18",
          name: "Circle Area",
          inputCode: "Circle_18(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-18",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_18(2, 3), Circle_18(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_18:
    def area(self): return 0.0
class Rectangle_18(Shape_18):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_18(Shape_18):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-19",
      title: "Lesson 17 - Problem 19: Polymorphic Shape Calculator 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_19\` with \`area()\` and child classes \`Rectangle_19(w, h)\` and \`Circle_19(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_19:
    def area(self): return 0.0

class Rectangle_19(Shape_19):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_19(Shape_19):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-19",
          name: "Rectangle Area",
          inputCode: "Rectangle_19(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-19",
          name: "Circle Area",
          inputCode: "Circle_19(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-19",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_19(2, 3), Circle_19(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_19:
    def area(self): return 0.0
class Rectangle_19(Shape_19):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_19(Shape_19):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-20",
      title: "Lesson 17 - Problem 20: Polymorphic Shape Calculator 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement base class \`Shape_20\` with \`area()\` and child classes \`Rectangle_20(w, h)\` and \`Circle_20(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_20:
    def area(self): return 0.0

class Rectangle_20(Shape_20):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_20(Shape_20):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-20",
          name: "Rectangle Area",
          inputCode: "Rectangle_20(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-20",
          name: "Circle Area",
          inputCode: "Circle_20(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-20",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_20(2, 3), Circle_20(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_20:
    def area(self): return 0.0
class Rectangle_20(Shape_20):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_20(Shape_20):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-21",
      title: "Lesson 17 - Problem 21: Polymorphic Shape Calculator 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement base class \`Shape_21\` with \`area()\` and child classes \`Rectangle_21(w, h)\` and \`Circle_21(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_21:
    def area(self): return 0.0

class Rectangle_21(Shape_21):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_21(Shape_21):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-21",
          name: "Rectangle Area",
          inputCode: "Rectangle_21(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-21",
          name: "Circle Area",
          inputCode: "Circle_21(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-21",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_21(2, 3), Circle_21(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_21:
    def area(self): return 0.0
class Rectangle_21(Shape_21):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_21(Shape_21):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-22",
      title: "Lesson 17 - Problem 22: Polymorphic Shape Calculator 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement base class \`Shape_22\` with \`area()\` and child classes \`Rectangle_22(w, h)\` and \`Circle_22(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_22:
    def area(self): return 0.0

class Rectangle_22(Shape_22):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_22(Shape_22):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-22",
          name: "Rectangle Area",
          inputCode: "Rectangle_22(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-22",
          name: "Circle Area",
          inputCode: "Circle_22(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-22",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_22(2, 3), Circle_22(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_22:
    def area(self): return 0.0
class Rectangle_22(Shape_22):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_22(Shape_22):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-23",
      title: "Lesson 17 - Problem 23: Polymorphic Shape Calculator 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement base class \`Shape_23\` with \`area()\` and child classes \`Rectangle_23(w, h)\` and \`Circle_23(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_23:
    def area(self): return 0.0

class Rectangle_23(Shape_23):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_23(Shape_23):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-23",
          name: "Rectangle Area",
          inputCode: "Rectangle_23(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-23",
          name: "Circle Area",
          inputCode: "Circle_23(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-23",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_23(2, 3), Circle_23(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_23:
    def area(self): return 0.0
class Rectangle_23(Shape_23):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_23(Shape_23):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-24",
      title: "Lesson 17 - Problem 24: Polymorphic Shape Calculator 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement base class \`Shape_24\` with \`area()\` and child classes \`Rectangle_24(w, h)\` and \`Circle_24(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_24:
    def area(self): return 0.0

class Rectangle_24(Shape_24):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_24(Shape_24):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-24",
          name: "Rectangle Area",
          inputCode: "Rectangle_24(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-24",
          name: "Circle Area",
          inputCode: "Circle_24(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-24",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_24(2, 3), Circle_24(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_24:
    def area(self): return 0.0
class Rectangle_24(Shape_24):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_24(Shape_24):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    },
    {
      id: "l17-ch-25",
      title: "Lesson 17 - Problem 25: Polymorphic Shape Calculator 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement base class \`Shape_25\` with \`area()\` and child classes \`Rectangle_25(w, h)\` and \`Circle_25(r)\` that calculate their respective areas rounded to 2 decimal places.",
      starterCode: `import math

class Shape_25:
    def area(self): return 0.0

class Rectangle_25(Shape_25):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return round(float(self.w * self.h), 2)

class Circle_25(Shape_25):
    def __init__(self, r):
        self.r = r
    def area(self):
        return round(math.pi * (self.r ** 2), 2)
`,
      testCases: [
        {
          id: "l17-t1-25",
          name: "Rectangle Area",
          inputCode: "Rectangle_25(4, 5).area()",
          expectedOutput: "20.0",
          isHidden: false,
        },
        {
          id: "l17-t2-25",
          name: "Circle Area",
          inputCode: "Circle_25(3).area()",
          expectedOutput: "28.27",
          isHidden: false,
        },
        {
          id: "l17-t3-25",
          name: "Polymorphic Sum",
          inputCode: "sum(s.area() for s in [Rectangle_25(2, 3), Circle_25(1)])",
          expectedOutput: "9.14",
          isHidden: true,
        }
      ],
      hint: "Inherit from Shape and override the area() method polymorphically.",
      solution: `import math
class Shape_25:
    def area(self): return 0.0
class Rectangle_25(Shape_25):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return round(float(self.w * self.h), 2)
class Circle_25(Shape_25):
    def __init__(self, r): self.r = r
    def area(self): return round(math.pi * (self.r ** 2), 2)`,
    }
  ],
  "encapsulation-magic-methods": [
    {
      id: "l18-ch-1",
      title: "Lesson 18 - Problem 1: 2D Vector Magic Methods (__add__, __repr__) 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_1(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_1:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_1(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-1",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_1(1, 2) + Vector2D_1(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-1",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_1(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-1",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_1(1, 1) + Vector2D_1(2, 2) + Vector2D_1(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_1:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_1(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-2",
      title: "Lesson 18 - Problem 2: 2D Vector Magic Methods (__add__, __repr__) 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_2(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_2:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_2(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-2",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_2(1, 2) + Vector2D_2(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-2",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_2(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-2",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_2(1, 1) + Vector2D_2(2, 2) + Vector2D_2(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_2:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_2(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-3",
      title: "Lesson 18 - Problem 3: 2D Vector Magic Methods (__add__, __repr__) 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_3(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_3:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_3(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-3",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_3(1, 2) + Vector2D_3(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-3",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_3(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-3",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_3(1, 1) + Vector2D_3(2, 2) + Vector2D_3(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_3:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_3(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-4",
      title: "Lesson 18 - Problem 4: 2D Vector Magic Methods (__add__, __repr__) 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_4(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_4:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_4(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-4",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_4(1, 2) + Vector2D_4(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-4",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_4(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-4",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_4(1, 1) + Vector2D_4(2, 2) + Vector2D_4(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_4:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_4(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-5",
      title: "Lesson 18 - Problem 5: 2D Vector Magic Methods (__add__, __repr__) 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_5(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_5:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_5(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-5",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_5(1, 2) + Vector2D_5(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-5",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_5(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-5",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_5(1, 1) + Vector2D_5(2, 2) + Vector2D_5(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_5:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_5(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-6",
      title: "Lesson 18 - Problem 6: 2D Vector Magic Methods (__add__, __repr__) 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_6(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_6:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_6(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-6",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_6(1, 2) + Vector2D_6(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-6",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_6(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-6",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_6(1, 1) + Vector2D_6(2, 2) + Vector2D_6(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_6:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_6(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-7",
      title: "Lesson 18 - Problem 7: 2D Vector Magic Methods (__add__, __repr__) 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_7(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_7:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_7(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-7",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_7(1, 2) + Vector2D_7(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-7",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_7(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-7",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_7(1, 1) + Vector2D_7(2, 2) + Vector2D_7(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_7:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_7(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-8",
      title: "Lesson 18 - Problem 8: 2D Vector Magic Methods (__add__, __repr__) 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_8(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_8:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_8(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-8",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_8(1, 2) + Vector2D_8(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-8",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_8(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-8",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_8(1, 1) + Vector2D_8(2, 2) + Vector2D_8(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_8:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_8(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-9",
      title: "Lesson 18 - Problem 9: 2D Vector Magic Methods (__add__, __repr__) 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_9(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_9:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_9(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-9",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_9(1, 2) + Vector2D_9(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-9",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_9(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-9",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_9(1, 1) + Vector2D_9(2, 2) + Vector2D_9(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_9:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_9(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-10",
      title: "Lesson 18 - Problem 10: 2D Vector Magic Methods (__add__, __repr__) 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement class \`Vector2D_10(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_10:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_10(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-10",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_10(1, 2) + Vector2D_10(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-10",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_10(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-10",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_10(1, 1) + Vector2D_10(2, 2) + Vector2D_10(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_10:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_10(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-11",
      title: "Lesson 18 - Problem 11: 2D Vector Magic Methods (__add__, __repr__) 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_11(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_11:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_11(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-11",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_11(1, 2) + Vector2D_11(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-11",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_11(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-11",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_11(1, 1) + Vector2D_11(2, 2) + Vector2D_11(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_11:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_11(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-12",
      title: "Lesson 18 - Problem 12: 2D Vector Magic Methods (__add__, __repr__) 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_12(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_12:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_12(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-12",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_12(1, 2) + Vector2D_12(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-12",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_12(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-12",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_12(1, 1) + Vector2D_12(2, 2) + Vector2D_12(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_12:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_12(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-13",
      title: "Lesson 18 - Problem 13: 2D Vector Magic Methods (__add__, __repr__) 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_13(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_13:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_13(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-13",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_13(1, 2) + Vector2D_13(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-13",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_13(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-13",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_13(1, 1) + Vector2D_13(2, 2) + Vector2D_13(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_13:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_13(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-14",
      title: "Lesson 18 - Problem 14: 2D Vector Magic Methods (__add__, __repr__) 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_14(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_14:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_14(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-14",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_14(1, 2) + Vector2D_14(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-14",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_14(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-14",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_14(1, 1) + Vector2D_14(2, 2) + Vector2D_14(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_14:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_14(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-15",
      title: "Lesson 18 - Problem 15: 2D Vector Magic Methods (__add__, __repr__) 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_15(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_15:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_15(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-15",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_15(1, 2) + Vector2D_15(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-15",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_15(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-15",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_15(1, 1) + Vector2D_15(2, 2) + Vector2D_15(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_15:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_15(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-16",
      title: "Lesson 18 - Problem 16: 2D Vector Magic Methods (__add__, __repr__) 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_16(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_16:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_16(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-16",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_16(1, 2) + Vector2D_16(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-16",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_16(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-16",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_16(1, 1) + Vector2D_16(2, 2) + Vector2D_16(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_16:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_16(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-17",
      title: "Lesson 18 - Problem 17: 2D Vector Magic Methods (__add__, __repr__) 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_17(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_17:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_17(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-17",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_17(1, 2) + Vector2D_17(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-17",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_17(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-17",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_17(1, 1) + Vector2D_17(2, 2) + Vector2D_17(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_17:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_17(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-18",
      title: "Lesson 18 - Problem 18: 2D Vector Magic Methods (__add__, __repr__) 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_18(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_18:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_18(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-18",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_18(1, 2) + Vector2D_18(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-18",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_18(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-18",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_18(1, 1) + Vector2D_18(2, 2) + Vector2D_18(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_18:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_18(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-19",
      title: "Lesson 18 - Problem 19: 2D Vector Magic Methods (__add__, __repr__) 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_19(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_19:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_19(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-19",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_19(1, 2) + Vector2D_19(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-19",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_19(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-19",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_19(1, 1) + Vector2D_19(2, 2) + Vector2D_19(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_19:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_19(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-20",
      title: "Lesson 18 - Problem 20: 2D Vector Magic Methods (__add__, __repr__) 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement class \`Vector2D_20(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_20:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_20(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-20",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_20(1, 2) + Vector2D_20(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-20",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_20(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-20",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_20(1, 1) + Vector2D_20(2, 2) + Vector2D_20(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_20:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_20(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-21",
      title: "Lesson 18 - Problem 21: 2D Vector Magic Methods (__add__, __repr__) 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement class \`Vector2D_21(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_21:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_21(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-21",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_21(1, 2) + Vector2D_21(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-21",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_21(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-21",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_21(1, 1) + Vector2D_21(2, 2) + Vector2D_21(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_21:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_21(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-22",
      title: "Lesson 18 - Problem 22: 2D Vector Magic Methods (__add__, __repr__) 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement class \`Vector2D_22(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_22:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_22(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-22",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_22(1, 2) + Vector2D_22(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-22",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_22(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-22",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_22(1, 1) + Vector2D_22(2, 2) + Vector2D_22(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_22:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_22(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-23",
      title: "Lesson 18 - Problem 23: 2D Vector Magic Methods (__add__, __repr__) 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement class \`Vector2D_23(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_23:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_23(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-23",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_23(1, 2) + Vector2D_23(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-23",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_23(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-23",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_23(1, 1) + Vector2D_23(2, 2) + Vector2D_23(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_23:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_23(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-24",
      title: "Lesson 18 - Problem 24: 2D Vector Magic Methods (__add__, __repr__) 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement class \`Vector2D_24(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_24:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_24(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-24",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_24(1, 2) + Vector2D_24(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-24",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_24(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-24",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_24(1, 1) + Vector2D_24(2, 2) + Vector2D_24(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_24:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_24(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    },
    {
      id: "l18-ch-25",
      title: "Lesson 18 - Problem 25: 2D Vector Magic Methods (__add__, __repr__) 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement class \`Vector2D_25(x, y)\` supporting \`__add__\` (vector addition) and \`__repr__\` returning \`'Vector(x, y)'\`.",
      starterCode: `class Vector2D_25:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D_25(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
`,
      testCases: [
        {
          id: "l18-t1-25",
          name: "Vector Addition",
          inputCode: "repr(Vector2D_25(1, 2) + Vector2D_25(3, 4))",
          expectedOutput: "'Vector(4, 6)'",
          isHidden: false,
        },
        {
          id: "l18-t2-25",
          name: "Vector Repr",
          inputCode: "repr(Vector2D_25(0, 0))",
          expectedOutput: "'Vector(0, 0)'",
          isHidden: false,
        },
        {
          id: "l18-t3-25",
          name: "Chained Addition",
          inputCode: "repr(Vector2D_25(1, 1) + Vector2D_25(2, 2) + Vector2D_25(3, 3))",
          expectedOutput: "'Vector(6, 6)'",
          isHidden: true,
        }
      ],
      hint: "Implement def __add__(self, other): return Vector2D(self.x + other.x, self.y + other.y).",
      solution: `class Vector2D_25:
    def __init__(self, x, y):
        self.x = x; self.y = y
    def __add__(self, o):
        return Vector2D_25(self.x + o.x, self.y + o.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"`,
    }
  ],
  "dataclasses": [
    {
      id: "l19-ch-1",
      title: "Lesson 19 - Problem 1: Dataclass Serialization & Sorting 1",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_1\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_1:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-1",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_1(1, 'Chair', 45.0), Product_1(2, 'Desk', 120.0), Product_1(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-1",
          name: "Product Price Check",
          inputCode: "Product_1(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-1",
          name: "Product Name Check",
          inputCode: "Product_1(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_1:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-2",
      title: "Lesson 19 - Problem 2: Dataclass Serialization & Sorting 2",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_2\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_2:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-2",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_2(1, 'Chair', 45.0), Product_2(2, 'Desk', 120.0), Product_2(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-2",
          name: "Product Price Check",
          inputCode: "Product_2(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-2",
          name: "Product Name Check",
          inputCode: "Product_2(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_2:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-3",
      title: "Lesson 19 - Problem 3: Dataclass Serialization & Sorting 3",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_3\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_3:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-3",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_3(1, 'Chair', 45.0), Product_3(2, 'Desk', 120.0), Product_3(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-3",
          name: "Product Price Check",
          inputCode: "Product_3(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-3",
          name: "Product Name Check",
          inputCode: "Product_3(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_3:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-4",
      title: "Lesson 19 - Problem 4: Dataclass Serialization & Sorting 4",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_4\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_4:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-4",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_4(1, 'Chair', 45.0), Product_4(2, 'Desk', 120.0), Product_4(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-4",
          name: "Product Price Check",
          inputCode: "Product_4(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-4",
          name: "Product Name Check",
          inputCode: "Product_4(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_4:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-5",
      title: "Lesson 19 - Problem 5: Dataclass Serialization & Sorting 5",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_5\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_5:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-5",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_5(1, 'Chair', 45.0), Product_5(2, 'Desk', 120.0), Product_5(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-5",
          name: "Product Price Check",
          inputCode: "Product_5(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-5",
          name: "Product Name Check",
          inputCode: "Product_5(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_5:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-6",
      title: "Lesson 19 - Problem 6: Dataclass Serialization & Sorting 6",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_6\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_6:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-6",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_6(1, 'Chair', 45.0), Product_6(2, 'Desk', 120.0), Product_6(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-6",
          name: "Product Price Check",
          inputCode: "Product_6(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-6",
          name: "Product Name Check",
          inputCode: "Product_6(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_6:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-7",
      title: "Lesson 19 - Problem 7: Dataclass Serialization & Sorting 7",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_7\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_7:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-7",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_7(1, 'Chair', 45.0), Product_7(2, 'Desk', 120.0), Product_7(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-7",
          name: "Product Price Check",
          inputCode: "Product_7(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-7",
          name: "Product Name Check",
          inputCode: "Product_7(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_7:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-8",
      title: "Lesson 19 - Problem 8: Dataclass Serialization & Sorting 8",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_8\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_8:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-8",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_8(1, 'Chair', 45.0), Product_8(2, 'Desk', 120.0), Product_8(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-8",
          name: "Product Price Check",
          inputCode: "Product_8(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-8",
          name: "Product Name Check",
          inputCode: "Product_8(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_8:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-9",
      title: "Lesson 19 - Problem 9: Dataclass Serialization & Sorting 9",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_9\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_9:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-9",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_9(1, 'Chair', 45.0), Product_9(2, 'Desk', 120.0), Product_9(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-9",
          name: "Product Price Check",
          inputCode: "Product_9(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-9",
          name: "Product Name Check",
          inputCode: "Product_9(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_9:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-10",
      title: "Lesson 19 - Problem 10: Dataclass Serialization & Sorting 10",
      difficulty: "Easy",
      points: 10,
      task: "Define a dataclass \`Product_10\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_10:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-10",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_10(1, 'Chair', 45.0), Product_10(2, 'Desk', 120.0), Product_10(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-10",
          name: "Product Price Check",
          inputCode: "Product_10(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-10",
          name: "Product Name Check",
          inputCode: "Product_10(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_10:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-11",
      title: "Lesson 19 - Problem 11: Dataclass Serialization & Sorting 11",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_11\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_11:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-11",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_11(1, 'Chair', 45.0), Product_11(2, 'Desk', 120.0), Product_11(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-11",
          name: "Product Price Check",
          inputCode: "Product_11(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-11",
          name: "Product Name Check",
          inputCode: "Product_11(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_11:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-12",
      title: "Lesson 19 - Problem 12: Dataclass Serialization & Sorting 12",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_12\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_12:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-12",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_12(1, 'Chair', 45.0), Product_12(2, 'Desk', 120.0), Product_12(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-12",
          name: "Product Price Check",
          inputCode: "Product_12(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-12",
          name: "Product Name Check",
          inputCode: "Product_12(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_12:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-13",
      title: "Lesson 19 - Problem 13: Dataclass Serialization & Sorting 13",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_13\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_13:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-13",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_13(1, 'Chair', 45.0), Product_13(2, 'Desk', 120.0), Product_13(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-13",
          name: "Product Price Check",
          inputCode: "Product_13(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-13",
          name: "Product Name Check",
          inputCode: "Product_13(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_13:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-14",
      title: "Lesson 19 - Problem 14: Dataclass Serialization & Sorting 14",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_14\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_14:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-14",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_14(1, 'Chair', 45.0), Product_14(2, 'Desk', 120.0), Product_14(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-14",
          name: "Product Price Check",
          inputCode: "Product_14(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-14",
          name: "Product Name Check",
          inputCode: "Product_14(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_14:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-15",
      title: "Lesson 19 - Problem 15: Dataclass Serialization & Sorting 15",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_15\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_15:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-15",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_15(1, 'Chair', 45.0), Product_15(2, 'Desk', 120.0), Product_15(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-15",
          name: "Product Price Check",
          inputCode: "Product_15(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-15",
          name: "Product Name Check",
          inputCode: "Product_15(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_15:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-16",
      title: "Lesson 19 - Problem 16: Dataclass Serialization & Sorting 16",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_16\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_16:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-16",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_16(1, 'Chair', 45.0), Product_16(2, 'Desk', 120.0), Product_16(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-16",
          name: "Product Price Check",
          inputCode: "Product_16(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-16",
          name: "Product Name Check",
          inputCode: "Product_16(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_16:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-17",
      title: "Lesson 19 - Problem 17: Dataclass Serialization & Sorting 17",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_17\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_17:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-17",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_17(1, 'Chair', 45.0), Product_17(2, 'Desk', 120.0), Product_17(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-17",
          name: "Product Price Check",
          inputCode: "Product_17(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-17",
          name: "Product Name Check",
          inputCode: "Product_17(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_17:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-18",
      title: "Lesson 19 - Problem 18: Dataclass Serialization & Sorting 18",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_18\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_18:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-18",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_18(1, 'Chair', 45.0), Product_18(2, 'Desk', 120.0), Product_18(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-18",
          name: "Product Price Check",
          inputCode: "Product_18(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-18",
          name: "Product Name Check",
          inputCode: "Product_18(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_18:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-19",
      title: "Lesson 19 - Problem 19: Dataclass Serialization & Sorting 19",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_19\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_19:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-19",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_19(1, 'Chair', 45.0), Product_19(2, 'Desk', 120.0), Product_19(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-19",
          name: "Product Price Check",
          inputCode: "Product_19(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-19",
          name: "Product Name Check",
          inputCode: "Product_19(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_19:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-20",
      title: "Lesson 19 - Problem 20: Dataclass Serialization & Sorting 20",
      difficulty: "Medium",
      points: 20,
      task: "Define a dataclass \`Product_20\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_20:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-20",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_20(1, 'Chair', 45.0), Product_20(2, 'Desk', 120.0), Product_20(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-20",
          name: "Product Price Check",
          inputCode: "Product_20(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-20",
          name: "Product Name Check",
          inputCode: "Product_20(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_20:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-21",
      title: "Lesson 19 - Problem 21: Dataclass Serialization & Sorting 21",
      difficulty: "Hard",
      points: 30,
      task: "Define a dataclass \`Product_21\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_21:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-21",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_21(1, 'Chair', 45.0), Product_21(2, 'Desk', 120.0), Product_21(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-21",
          name: "Product Price Check",
          inputCode: "Product_21(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-21",
          name: "Product Name Check",
          inputCode: "Product_21(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_21:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-22",
      title: "Lesson 19 - Problem 22: Dataclass Serialization & Sorting 22",
      difficulty: "Hard",
      points: 30,
      task: "Define a dataclass \`Product_22\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_22:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-22",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_22(1, 'Chair', 45.0), Product_22(2, 'Desk', 120.0), Product_22(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-22",
          name: "Product Price Check",
          inputCode: "Product_22(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-22",
          name: "Product Name Check",
          inputCode: "Product_22(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_22:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-23",
      title: "Lesson 19 - Problem 23: Dataclass Serialization & Sorting 23",
      difficulty: "Hard",
      points: 30,
      task: "Define a dataclass \`Product_23\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_23:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-23",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_23(1, 'Chair', 45.0), Product_23(2, 'Desk', 120.0), Product_23(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-23",
          name: "Product Price Check",
          inputCode: "Product_23(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-23",
          name: "Product Name Check",
          inputCode: "Product_23(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_23:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-24",
      title: "Lesson 19 - Problem 24: Dataclass Serialization & Sorting 24",
      difficulty: "Hard",
      points: 30,
      task: "Define a dataclass \`Product_24\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_24:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-24",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_24(1, 'Chair', 45.0), Product_24(2, 'Desk', 120.0), Product_24(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-24",
          name: "Product Price Check",
          inputCode: "Product_24(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-24",
          name: "Product Name Check",
          inputCode: "Product_24(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_24:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    },
    {
      id: "l19-ch-25",
      title: "Lesson 19 - Problem 25: Dataclass Serialization & Sorting 25",
      difficulty: "Hard",
      points: 30,
      task: "Define a dataclass \`Product_25\` with fields \`id: int\`, \`name: str\`, \`price: float\` with \`order=True\` so products can be sorted by price ascending.",
      starterCode: `from dataclasses import dataclass, field

@dataclass(order=True)
class Product_25:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price
`,
      testCases: [
        {
          id: "l19-t1-25",
          name: "Sort Products by Price",
          inputCode: "[p.name for p in sorted([Product_25(1, 'Chair', 45.0), Product_25(2, 'Desk', 120.0), Product_25(3, 'Pen', 2.5)])]",
          expectedOutput: "['Pen', 'Chair', 'Desk']",
          isHidden: false,
        },
        {
          id: "l19-t2-25",
          name: "Product Price Check",
          inputCode: "Product_25(1, 'Book', 15.0).price",
          expectedOutput: "15.0",
          isHidden: false,
        },
        {
          id: "l19-t3-25",
          name: "Product Name Check",
          inputCode: "Product_25(99, 'Lamp', 30.0).name",
          expectedOutput: "'Lamp'",
          isHidden: true,
        }
      ],
      hint: "Use sort_index = self.price in __post_init__ or direct compare order.",
      solution: `from dataclasses import dataclass, field
@dataclass(order=True)
class Product_25:
    sort_index: float = field(init=False, repr=False)
    id: int = field(compare=False)
    name: str = field(compare=False)
    price: float
    def __post_init__(self):
        self.sort_index = self.price`,
    }
  ],
};
