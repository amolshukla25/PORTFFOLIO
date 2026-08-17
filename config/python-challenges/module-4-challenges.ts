import type { PracticeExercise } from "../courses";

export const MODULE_4_CHALLENGES: Record<string, PracticeExercise[]> = {
  "functions-basics": [
    {
      id: "l12-ch-1",
      title: "Lesson 12 - Problem 1: Keyword-Only Parameter Function 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_1(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_1(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-1",
          name: "Standard Bill",
          inputCode: "calculate_bill_1(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-1",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_1(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-1",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_1(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_1(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-2",
      title: "Lesson 12 - Problem 2: Keyword-Only Parameter Function 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_2(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_2(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-2",
          name: "Standard Bill",
          inputCode: "calculate_bill_2(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-2",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_2(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-2",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_2(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_2(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-3",
      title: "Lesson 12 - Problem 3: Keyword-Only Parameter Function 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_3(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_3(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-3",
          name: "Standard Bill",
          inputCode: "calculate_bill_3(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-3",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_3(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-3",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_3(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_3(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-4",
      title: "Lesson 12 - Problem 4: Keyword-Only Parameter Function 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_4(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_4(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-4",
          name: "Standard Bill",
          inputCode: "calculate_bill_4(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-4",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_4(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-4",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_4(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_4(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-5",
      title: "Lesson 12 - Problem 5: Keyword-Only Parameter Function 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_5(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_5(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-5",
          name: "Standard Bill",
          inputCode: "calculate_bill_5(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-5",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_5(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-5",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_5(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_5(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-6",
      title: "Lesson 12 - Problem 6: Keyword-Only Parameter Function 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_6(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_6(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-6",
          name: "Standard Bill",
          inputCode: "calculate_bill_6(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-6",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_6(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-6",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_6(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_6(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-7",
      title: "Lesson 12 - Problem 7: Keyword-Only Parameter Function 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_7(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_7(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-7",
          name: "Standard Bill",
          inputCode: "calculate_bill_7(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-7",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_7(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-7",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_7(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_7(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-8",
      title: "Lesson 12 - Problem 8: Keyword-Only Parameter Function 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_8(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_8(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-8",
          name: "Standard Bill",
          inputCode: "calculate_bill_8(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-8",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_8(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-8",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_8(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_8(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-9",
      title: "Lesson 12 - Problem 9: Keyword-Only Parameter Function 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_9(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_9(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-9",
          name: "Standard Bill",
          inputCode: "calculate_bill_9(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-9",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_9(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-9",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_9(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_9(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-10",
      title: "Lesson 12 - Problem 10: Keyword-Only Parameter Function 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`calculate_bill_10(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_10(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-10",
          name: "Standard Bill",
          inputCode: "calculate_bill_10(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-10",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_10(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-10",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_10(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_10(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-11",
      title: "Lesson 12 - Problem 11: Keyword-Only Parameter Function 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_11(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_11(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-11",
          name: "Standard Bill",
          inputCode: "calculate_bill_11(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-11",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_11(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-11",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_11(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_11(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-12",
      title: "Lesson 12 - Problem 12: Keyword-Only Parameter Function 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_12(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_12(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-12",
          name: "Standard Bill",
          inputCode: "calculate_bill_12(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-12",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_12(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-12",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_12(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_12(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-13",
      title: "Lesson 12 - Problem 13: Keyword-Only Parameter Function 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_13(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_13(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-13",
          name: "Standard Bill",
          inputCode: "calculate_bill_13(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-13",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_13(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-13",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_13(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_13(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-14",
      title: "Lesson 12 - Problem 14: Keyword-Only Parameter Function 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_14(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_14(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-14",
          name: "Standard Bill",
          inputCode: "calculate_bill_14(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-14",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_14(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-14",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_14(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_14(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-15",
      title: "Lesson 12 - Problem 15: Keyword-Only Parameter Function 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_15(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_15(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-15",
          name: "Standard Bill",
          inputCode: "calculate_bill_15(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-15",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_15(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-15",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_15(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_15(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-16",
      title: "Lesson 12 - Problem 16: Keyword-Only Parameter Function 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_16(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_16(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-16",
          name: "Standard Bill",
          inputCode: "calculate_bill_16(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-16",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_16(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-16",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_16(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_16(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-17",
      title: "Lesson 12 - Problem 17: Keyword-Only Parameter Function 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_17(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_17(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-17",
          name: "Standard Bill",
          inputCode: "calculate_bill_17(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-17",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_17(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-17",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_17(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_17(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-18",
      title: "Lesson 12 - Problem 18: Keyword-Only Parameter Function 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_18(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_18(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-18",
          name: "Standard Bill",
          inputCode: "calculate_bill_18(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-18",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_18(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-18",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_18(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_18(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-19",
      title: "Lesson 12 - Problem 19: Keyword-Only Parameter Function 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_19(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_19(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-19",
          name: "Standard Bill",
          inputCode: "calculate_bill_19(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-19",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_19(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-19",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_19(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_19(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-20",
      title: "Lesson 12 - Problem 20: Keyword-Only Parameter Function 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`calculate_bill_20(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_20(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-20",
          name: "Standard Bill",
          inputCode: "calculate_bill_20(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-20",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_20(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-20",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_20(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_20(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-21",
      title: "Lesson 12 - Problem 21: Keyword-Only Parameter Function 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`calculate_bill_21(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_21(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-21",
          name: "Standard Bill",
          inputCode: "calculate_bill_21(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-21",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_21(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-21",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_21(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_21(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-22",
      title: "Lesson 12 - Problem 22: Keyword-Only Parameter Function 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`calculate_bill_22(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_22(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-22",
          name: "Standard Bill",
          inputCode: "calculate_bill_22(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-22",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_22(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-22",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_22(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_22(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-23",
      title: "Lesson 12 - Problem 23: Keyword-Only Parameter Function 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`calculate_bill_23(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_23(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-23",
          name: "Standard Bill",
          inputCode: "calculate_bill_23(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-23",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_23(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-23",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_23(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_23(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-24",
      title: "Lesson 12 - Problem 24: Keyword-Only Parameter Function 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`calculate_bill_24(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_24(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-24",
          name: "Standard Bill",
          inputCode: "calculate_bill_24(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-24",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_24(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-24",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_24(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_24(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    },
    {
      id: "l12-ch-25",
      title: "Lesson 12 - Problem 25: Keyword-Only Parameter Function 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`calculate_bill_25(subtotal, *, tax_rate=0.05, discount=0.0)\` that computes final bill as (subtotal - discount) * (1 + tax_rate) rounded to 2 decimal places.",
      starterCode: `def calculate_bill_25(subtotal, *, tax_rate=0.05, discount=0.0):
    # Write your solution here
    total = (subtotal - discount) * (1 + tax_rate)
    return round(total, 2)
`,
      testCases: [
        {
          id: "l12-t1-25",
          name: "Standard Bill",
          inputCode: "calculate_bill_25(100, tax_rate=0.1, discount=10)",
          expectedOutput: "99.0",
          isHidden: false,
        },
        {
          id: "l12-t2-25",
          name: "Default Tax Rate",
          inputCode: "calculate_bill_25(100)",
          expectedOutput: "105.0",
          isHidden: false,
        },
        {
          id: "l12-t3-25",
          name: "Zero Subtotal",
          inputCode: "calculate_bill_25(0)",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "The * enforces keyword-only passing of tax_rate and discount.",
      solution: `def calculate_bill_25(subtotal, *, tax_rate=0.05, discount=0.0):
    return round((subtotal - discount) * (1 + tax_rate), 2)`,
    }
  ],
  "lambda-args-kwargs": [
    {
      id: "l13-ch-1",
      title: "Lesson 13 - Problem 1: Variadic Aggregator (*args, **kwargs) 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_1(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_1(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-1",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_1(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-1",
          name: "No Labels",
          inputCode: "flexible_summary_1(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-1",
          name: "No Numbers",
          inputCode: "flexible_summary_1(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_1(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-2",
      title: "Lesson 13 - Problem 2: Variadic Aggregator (*args, **kwargs) 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_2(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_2(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-2",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_2(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-2",
          name: "No Labels",
          inputCode: "flexible_summary_2(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-2",
          name: "No Numbers",
          inputCode: "flexible_summary_2(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_2(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-3",
      title: "Lesson 13 - Problem 3: Variadic Aggregator (*args, **kwargs) 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_3(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_3(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-3",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_3(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-3",
          name: "No Labels",
          inputCode: "flexible_summary_3(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-3",
          name: "No Numbers",
          inputCode: "flexible_summary_3(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_3(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-4",
      title: "Lesson 13 - Problem 4: Variadic Aggregator (*args, **kwargs) 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_4(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_4(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-4",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_4(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-4",
          name: "No Labels",
          inputCode: "flexible_summary_4(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-4",
          name: "No Numbers",
          inputCode: "flexible_summary_4(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_4(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-5",
      title: "Lesson 13 - Problem 5: Variadic Aggregator (*args, **kwargs) 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_5(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_5(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-5",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_5(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-5",
          name: "No Labels",
          inputCode: "flexible_summary_5(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-5",
          name: "No Numbers",
          inputCode: "flexible_summary_5(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_5(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-6",
      title: "Lesson 13 - Problem 6: Variadic Aggregator (*args, **kwargs) 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_6(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_6(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-6",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_6(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-6",
          name: "No Labels",
          inputCode: "flexible_summary_6(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-6",
          name: "No Numbers",
          inputCode: "flexible_summary_6(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_6(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-7",
      title: "Lesson 13 - Problem 7: Variadic Aggregator (*args, **kwargs) 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_7(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_7(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-7",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_7(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-7",
          name: "No Labels",
          inputCode: "flexible_summary_7(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-7",
          name: "No Numbers",
          inputCode: "flexible_summary_7(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_7(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-8",
      title: "Lesson 13 - Problem 8: Variadic Aggregator (*args, **kwargs) 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_8(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_8(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-8",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_8(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-8",
          name: "No Labels",
          inputCode: "flexible_summary_8(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-8",
          name: "No Numbers",
          inputCode: "flexible_summary_8(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_8(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-9",
      title: "Lesson 13 - Problem 9: Variadic Aggregator (*args, **kwargs) 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_9(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_9(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-9",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_9(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-9",
          name: "No Labels",
          inputCode: "flexible_summary_9(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-9",
          name: "No Numbers",
          inputCode: "flexible_summary_9(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_9(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-10",
      title: "Lesson 13 - Problem 10: Variadic Aggregator (*args, **kwargs) 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`flexible_summary_10(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_10(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-10",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_10(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-10",
          name: "No Labels",
          inputCode: "flexible_summary_10(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-10",
          name: "No Numbers",
          inputCode: "flexible_summary_10(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_10(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-11",
      title: "Lesson 13 - Problem 11: Variadic Aggregator (*args, **kwargs) 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_11(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_11(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-11",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_11(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-11",
          name: "No Labels",
          inputCode: "flexible_summary_11(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-11",
          name: "No Numbers",
          inputCode: "flexible_summary_11(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_11(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-12",
      title: "Lesson 13 - Problem 12: Variadic Aggregator (*args, **kwargs) 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_12(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_12(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-12",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_12(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-12",
          name: "No Labels",
          inputCode: "flexible_summary_12(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-12",
          name: "No Numbers",
          inputCode: "flexible_summary_12(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_12(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-13",
      title: "Lesson 13 - Problem 13: Variadic Aggregator (*args, **kwargs) 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_13(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_13(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-13",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_13(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-13",
          name: "No Labels",
          inputCode: "flexible_summary_13(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-13",
          name: "No Numbers",
          inputCode: "flexible_summary_13(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_13(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-14",
      title: "Lesson 13 - Problem 14: Variadic Aggregator (*args, **kwargs) 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_14(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_14(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-14",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_14(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-14",
          name: "No Labels",
          inputCode: "flexible_summary_14(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-14",
          name: "No Numbers",
          inputCode: "flexible_summary_14(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_14(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-15",
      title: "Lesson 13 - Problem 15: Variadic Aggregator (*args, **kwargs) 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_15(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_15(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-15",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_15(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-15",
          name: "No Labels",
          inputCode: "flexible_summary_15(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-15",
          name: "No Numbers",
          inputCode: "flexible_summary_15(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_15(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-16",
      title: "Lesson 13 - Problem 16: Variadic Aggregator (*args, **kwargs) 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_16(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_16(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-16",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_16(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-16",
          name: "No Labels",
          inputCode: "flexible_summary_16(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-16",
          name: "No Numbers",
          inputCode: "flexible_summary_16(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_16(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-17",
      title: "Lesson 13 - Problem 17: Variadic Aggregator (*args, **kwargs) 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_17(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_17(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-17",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_17(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-17",
          name: "No Labels",
          inputCode: "flexible_summary_17(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-17",
          name: "No Numbers",
          inputCode: "flexible_summary_17(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_17(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-18",
      title: "Lesson 13 - Problem 18: Variadic Aggregator (*args, **kwargs) 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_18(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_18(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-18",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_18(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-18",
          name: "No Labels",
          inputCode: "flexible_summary_18(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-18",
          name: "No Numbers",
          inputCode: "flexible_summary_18(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_18(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-19",
      title: "Lesson 13 - Problem 19: Variadic Aggregator (*args, **kwargs) 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_19(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_19(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-19",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_19(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-19",
          name: "No Labels",
          inputCode: "flexible_summary_19(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-19",
          name: "No Numbers",
          inputCode: "flexible_summary_19(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_19(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-20",
      title: "Lesson 13 - Problem 20: Variadic Aggregator (*args, **kwargs) 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`flexible_summary_20(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_20(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-20",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_20(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-20",
          name: "No Labels",
          inputCode: "flexible_summary_20(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-20",
          name: "No Numbers",
          inputCode: "flexible_summary_20(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_20(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-21",
      title: "Lesson 13 - Problem 21: Variadic Aggregator (*args, **kwargs) 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`flexible_summary_21(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_21(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-21",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_21(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-21",
          name: "No Labels",
          inputCode: "flexible_summary_21(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-21",
          name: "No Numbers",
          inputCode: "flexible_summary_21(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_21(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-22",
      title: "Lesson 13 - Problem 22: Variadic Aggregator (*args, **kwargs) 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`flexible_summary_22(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_22(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-22",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_22(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-22",
          name: "No Labels",
          inputCode: "flexible_summary_22(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-22",
          name: "No Numbers",
          inputCode: "flexible_summary_22(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_22(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-23",
      title: "Lesson 13 - Problem 23: Variadic Aggregator (*args, **kwargs) 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`flexible_summary_23(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_23(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-23",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_23(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-23",
          name: "No Labels",
          inputCode: "flexible_summary_23(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-23",
          name: "No Numbers",
          inputCode: "flexible_summary_23(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_23(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-24",
      title: "Lesson 13 - Problem 24: Variadic Aggregator (*args, **kwargs) 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`flexible_summary_24(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_24(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-24",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_24(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-24",
          name: "No Labels",
          inputCode: "flexible_summary_24(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-24",
          name: "No Numbers",
          inputCode: "flexible_summary_24(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_24(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    },
    {
      id: "l13-ch-25",
      title: "Lesson 13 - Problem 25: Variadic Aggregator (*args, **kwargs) 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`flexible_summary_25(*numbers, scale=1, **labels)\` that multiplies the sum of numbers by scale and returns a dict with 'total' and all keyword labels.",
      starterCode: `def flexible_summary_25(*numbers, scale=1, **labels):
    # Write your solution here
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res
`,
      testCases: [
        {
          id: "l13-t1-25",
          name: "Args and Kwargs",
          inputCode: "flexible_summary_25(1, 2, 3, scale=2, user='Amol')",
          expectedOutput: "{'total': 12, 'user': 'Amol'}",
          isHidden: false,
        },
        {
          id: "l13-t2-25",
          name: "No Labels",
          inputCode: "flexible_summary_25(10, 20)",
          expectedOutput: "{'total': 30}",
          isHidden: false,
        },
        {
          id: "l13-t3-25",
          name: "No Numbers",
          inputCode: "flexible_summary_25(status='OK')",
          expectedOutput: "{'total': 0, 'status': 'OK'}",
          isHidden: true,
        }
      ],
      hint: "sum(numbers) calculates the sum of all variadic positional arguments.",
      solution: `def flexible_summary_25(*numbers, scale=1, **labels):
    res = {'total': sum(numbers) * scale}
    res.update(labels)
    return res`,
    }
  ],
  "scope-closures-decorators": [
    {
      id: "l14-ch-1",
      title: "Lesson 14 - Problem 1: Stateful Closure Accumulator 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_1(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_1(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-1",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_1(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-1",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_1(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-1",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_1(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_1(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-2",
      title: "Lesson 14 - Problem 2: Stateful Closure Accumulator 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_2(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_2(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-2",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_2(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-2",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_2(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-2",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_2(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_2(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-3",
      title: "Lesson 14 - Problem 3: Stateful Closure Accumulator 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_3(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_3(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-3",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_3(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-3",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_3(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-3",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_3(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_3(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-4",
      title: "Lesson 14 - Problem 4: Stateful Closure Accumulator 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_4(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_4(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-4",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_4(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-4",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_4(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-4",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_4(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_4(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-5",
      title: "Lesson 14 - Problem 5: Stateful Closure Accumulator 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_5(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_5(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-5",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_5(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-5",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_5(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-5",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_5(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_5(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-6",
      title: "Lesson 14 - Problem 6: Stateful Closure Accumulator 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_6(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_6(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-6",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_6(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-6",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_6(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-6",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_6(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_6(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-7",
      title: "Lesson 14 - Problem 7: Stateful Closure Accumulator 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_7(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_7(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-7",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_7(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-7",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_7(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-7",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_7(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_7(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-8",
      title: "Lesson 14 - Problem 8: Stateful Closure Accumulator 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_8(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_8(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-8",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_8(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-8",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_8(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-8",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_8(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_8(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-9",
      title: "Lesson 14 - Problem 9: Stateful Closure Accumulator 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_9(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_9(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-9",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_9(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-9",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_9(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-9",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_9(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_9(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-10",
      title: "Lesson 14 - Problem 10: Stateful Closure Accumulator 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`create_accumulator_10(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_10(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-10",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_10(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-10",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_10(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-10",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_10(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_10(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-11",
      title: "Lesson 14 - Problem 11: Stateful Closure Accumulator 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_11(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_11(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-11",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_11(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-11",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_11(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-11",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_11(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_11(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-12",
      title: "Lesson 14 - Problem 12: Stateful Closure Accumulator 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_12(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_12(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-12",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_12(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-12",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_12(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-12",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_12(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_12(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-13",
      title: "Lesson 14 - Problem 13: Stateful Closure Accumulator 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_13(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_13(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-13",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_13(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-13",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_13(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-13",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_13(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_13(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-14",
      title: "Lesson 14 - Problem 14: Stateful Closure Accumulator 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_14(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_14(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-14",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_14(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-14",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_14(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-14",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_14(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_14(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-15",
      title: "Lesson 14 - Problem 15: Stateful Closure Accumulator 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_15(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_15(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-15",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_15(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-15",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_15(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-15",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_15(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_15(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-16",
      title: "Lesson 14 - Problem 16: Stateful Closure Accumulator 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_16(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_16(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-16",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_16(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-16",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_16(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-16",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_16(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_16(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-17",
      title: "Lesson 14 - Problem 17: Stateful Closure Accumulator 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_17(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_17(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-17",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_17(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-17",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_17(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-17",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_17(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_17(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-18",
      title: "Lesson 14 - Problem 18: Stateful Closure Accumulator 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_18(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_18(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-18",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_18(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-18",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_18(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-18",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_18(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_18(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-19",
      title: "Lesson 14 - Problem 19: Stateful Closure Accumulator 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_19(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_19(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-19",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_19(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-19",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_19(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-19",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_19(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_19(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-20",
      title: "Lesson 14 - Problem 20: Stateful Closure Accumulator 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`create_accumulator_20(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_20(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-20",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_20(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-20",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_20(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-20",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_20(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_20(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-21",
      title: "Lesson 14 - Problem 21: Stateful Closure Accumulator 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`create_accumulator_21(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_21(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-21",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_21(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-21",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_21(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-21",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_21(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_21(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-22",
      title: "Lesson 14 - Problem 22: Stateful Closure Accumulator 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`create_accumulator_22(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_22(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-22",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_22(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-22",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_22(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-22",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_22(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_22(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-23",
      title: "Lesson 14 - Problem 23: Stateful Closure Accumulator 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`create_accumulator_23(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_23(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-23",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_23(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-23",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_23(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-23",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_23(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_23(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-24",
      title: "Lesson 14 - Problem 24: Stateful Closure Accumulator 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`create_accumulator_24(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_24(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-24",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_24(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-24",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_24(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-24",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_24(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_24(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    },
    {
      id: "l14-ch-25",
      title: "Lesson 14 - Problem 25: Stateful Closure Accumulator 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`create_accumulator_25(initial=0)\` that returns a closure function that adds incoming values to the running total and returns it.",
      starterCode: `def create_accumulator_25(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add
`,
      testCases: [
        {
          id: "l14-t1-25",
          name: "Step Sequence",
          inputCode: "(lambda acc: [acc(5), acc(10), acc(2)])(create_accumulator_25(0))",
          expectedOutput: "[5, 15, 17]",
          isHidden: false,
        },
        {
          id: "l14-t2-25",
          name: "Initial Seed",
          inputCode: "(lambda acc: acc(20))(create_accumulator_25(100))",
          expectedOutput: "120",
          isHidden: false,
        },
        {
          id: "l14-t3-25",
          name: "Negative additions",
          inputCode: "(lambda acc: acc(-5))(create_accumulator_25(10))",
          expectedOutput: "5",
          isHidden: true,
        }
      ],
      hint: "Use the nonlocal keyword inside the inner function to rebind total.",
      solution: `def create_accumulator_25(initial=0):
    total = initial
    def add(val):
        nonlocal total
        total += val
        return total
    return add`,
    }
  ],
  "modules-packages": [
    {
      id: "l15-ch-1",
      title: "Lesson 15 - Problem 1: Dynamic Math Module Pipeline 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_1(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_1(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-1",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_1([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-1",
          name: "Single Number",
          inputCode: "math_pipeline_1([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-1",
          name: "Zero Elements",
          inputCode: "math_pipeline_1([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_1(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-2",
      title: "Lesson 15 - Problem 2: Dynamic Math Module Pipeline 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_2(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_2(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-2",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_2([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-2",
          name: "Single Number",
          inputCode: "math_pipeline_2([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-2",
          name: "Zero Elements",
          inputCode: "math_pipeline_2([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_2(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-3",
      title: "Lesson 15 - Problem 3: Dynamic Math Module Pipeline 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_3(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_3(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-3",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_3([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-3",
          name: "Single Number",
          inputCode: "math_pipeline_3([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-3",
          name: "Zero Elements",
          inputCode: "math_pipeline_3([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_3(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-4",
      title: "Lesson 15 - Problem 4: Dynamic Math Module Pipeline 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_4(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_4(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-4",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_4([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-4",
          name: "Single Number",
          inputCode: "math_pipeline_4([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-4",
          name: "Zero Elements",
          inputCode: "math_pipeline_4([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_4(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-5",
      title: "Lesson 15 - Problem 5: Dynamic Math Module Pipeline 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_5(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_5(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-5",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_5([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-5",
          name: "Single Number",
          inputCode: "math_pipeline_5([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-5",
          name: "Zero Elements",
          inputCode: "math_pipeline_5([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_5(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-6",
      title: "Lesson 15 - Problem 6: Dynamic Math Module Pipeline 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_6(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_6(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-6",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_6([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-6",
          name: "Single Number",
          inputCode: "math_pipeline_6([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-6",
          name: "Zero Elements",
          inputCode: "math_pipeline_6([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_6(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-7",
      title: "Lesson 15 - Problem 7: Dynamic Math Module Pipeline 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_7(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_7(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-7",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_7([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-7",
          name: "Single Number",
          inputCode: "math_pipeline_7([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-7",
          name: "Zero Elements",
          inputCode: "math_pipeline_7([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_7(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-8",
      title: "Lesson 15 - Problem 8: Dynamic Math Module Pipeline 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_8(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_8(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-8",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_8([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-8",
          name: "Single Number",
          inputCode: "math_pipeline_8([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-8",
          name: "Zero Elements",
          inputCode: "math_pipeline_8([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_8(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-9",
      title: "Lesson 15 - Problem 9: Dynamic Math Module Pipeline 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_9(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_9(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-9",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_9([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-9",
          name: "Single Number",
          inputCode: "math_pipeline_9([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-9",
          name: "Zero Elements",
          inputCode: "math_pipeline_9([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_9(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-10",
      title: "Lesson 15 - Problem 10: Dynamic Math Module Pipeline 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`math_pipeline_10(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_10(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-10",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_10([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-10",
          name: "Single Number",
          inputCode: "math_pipeline_10([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-10",
          name: "Zero Elements",
          inputCode: "math_pipeline_10([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_10(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-11",
      title: "Lesson 15 - Problem 11: Dynamic Math Module Pipeline 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_11(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_11(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-11",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_11([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-11",
          name: "Single Number",
          inputCode: "math_pipeline_11([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-11",
          name: "Zero Elements",
          inputCode: "math_pipeline_11([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_11(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-12",
      title: "Lesson 15 - Problem 12: Dynamic Math Module Pipeline 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_12(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_12(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-12",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_12([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-12",
          name: "Single Number",
          inputCode: "math_pipeline_12([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-12",
          name: "Zero Elements",
          inputCode: "math_pipeline_12([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_12(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-13",
      title: "Lesson 15 - Problem 13: Dynamic Math Module Pipeline 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_13(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_13(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-13",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_13([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-13",
          name: "Single Number",
          inputCode: "math_pipeline_13([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-13",
          name: "Zero Elements",
          inputCode: "math_pipeline_13([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_13(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-14",
      title: "Lesson 15 - Problem 14: Dynamic Math Module Pipeline 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_14(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_14(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-14",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_14([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-14",
          name: "Single Number",
          inputCode: "math_pipeline_14([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-14",
          name: "Zero Elements",
          inputCode: "math_pipeline_14([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_14(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-15",
      title: "Lesson 15 - Problem 15: Dynamic Math Module Pipeline 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_15(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_15(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-15",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_15([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-15",
          name: "Single Number",
          inputCode: "math_pipeline_15([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-15",
          name: "Zero Elements",
          inputCode: "math_pipeline_15([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_15(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-16",
      title: "Lesson 15 - Problem 16: Dynamic Math Module Pipeline 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_16(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_16(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-16",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_16([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-16",
          name: "Single Number",
          inputCode: "math_pipeline_16([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-16",
          name: "Zero Elements",
          inputCode: "math_pipeline_16([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_16(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-17",
      title: "Lesson 15 - Problem 17: Dynamic Math Module Pipeline 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_17(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_17(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-17",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_17([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-17",
          name: "Single Number",
          inputCode: "math_pipeline_17([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-17",
          name: "Zero Elements",
          inputCode: "math_pipeline_17([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_17(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-18",
      title: "Lesson 15 - Problem 18: Dynamic Math Module Pipeline 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_18(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_18(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-18",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_18([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-18",
          name: "Single Number",
          inputCode: "math_pipeline_18([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-18",
          name: "Zero Elements",
          inputCode: "math_pipeline_18([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_18(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-19",
      title: "Lesson 15 - Problem 19: Dynamic Math Module Pipeline 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_19(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_19(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-19",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_19([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-19",
          name: "Single Number",
          inputCode: "math_pipeline_19([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-19",
          name: "Zero Elements",
          inputCode: "math_pipeline_19([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_19(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-20",
      title: "Lesson 15 - Problem 20: Dynamic Math Module Pipeline 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`math_pipeline_20(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_20(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-20",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_20([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-20",
          name: "Single Number",
          inputCode: "math_pipeline_20([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-20",
          name: "Zero Elements",
          inputCode: "math_pipeline_20([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_20(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-21",
      title: "Lesson 15 - Problem 21: Dynamic Math Module Pipeline 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`math_pipeline_21(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_21(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-21",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_21([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-21",
          name: "Single Number",
          inputCode: "math_pipeline_21([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-21",
          name: "Zero Elements",
          inputCode: "math_pipeline_21([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_21(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-22",
      title: "Lesson 15 - Problem 22: Dynamic Math Module Pipeline 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`math_pipeline_22(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_22(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-22",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_22([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-22",
          name: "Single Number",
          inputCode: "math_pipeline_22([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-22",
          name: "Zero Elements",
          inputCode: "math_pipeline_22([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_22(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-23",
      title: "Lesson 15 - Problem 23: Dynamic Math Module Pipeline 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`math_pipeline_23(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_23(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-23",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_23([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-23",
          name: "Single Number",
          inputCode: "math_pipeline_23([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-23",
          name: "Zero Elements",
          inputCode: "math_pipeline_23([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_23(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-24",
      title: "Lesson 15 - Problem 24: Dynamic Math Module Pipeline 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`math_pipeline_24(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_24(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-24",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_24([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-24",
          name: "Single Number",
          inputCode: "math_pipeline_24([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-24",
          name: "Zero Elements",
          inputCode: "math_pipeline_24([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_24(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    },
    {
      id: "l15-ch-25",
      title: "Lesson 15 - Problem 25: Dynamic Math Module Pipeline 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`math_pipeline_25(numbers)\` using the standard library math module to calculate the square root of the sum of squares of numbers (hypot).",
      starterCode: `import math

def math_pipeline_25(numbers):
    # Write your solution here
    sum_sq = sum(x ** 2 for x in numbers)
    return round(math.sqrt(sum_sq), 2)
`,
      testCases: [
        {
          id: "l15-t1-25",
          name: "3-4-5 Triangle",
          inputCode: "math_pipeline_25([3, 4])",
          expectedOutput: "5.0",
          isHidden: false,
        },
        {
          id: "l15-t2-25",
          name: "Single Number",
          inputCode: "math_pipeline_25([10])",
          expectedOutput: "10.0",
          isHidden: false,
        },
        {
          id: "l15-t3-25",
          name: "Zero Elements",
          inputCode: "math_pipeline_25([0, 0])",
          expectedOutput: "0.0",
          isHidden: true,
        }
      ],
      hint: "math.sqrt(sum(x ** 2 for x in numbers)) returns the Euclidean norm.",
      solution: `import math
def math_pipeline_25(numbers):
    return round(math.sqrt(sum(x ** 2 for x in numbers)), 2)`,
    }
  ],
};
