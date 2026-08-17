import type { PracticeExercise } from "../courses";

export const MODULE_2_CHALLENGES: Record<string, PracticeExercise[]> = {
  "conditionals-logic": [
    {
      id: "l5-ch-1",
      title: "Lesson 5 - Problem 1: FizzBuzz Router & Matcher 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_1(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_1(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-1",
          name: "Divisible by 15",
          inputCode: "classify_number_1(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-1",
          name: "Divisible by 3",
          inputCode: "classify_number_1(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-1",
          name: "Divisible by 5",
          inputCode: "classify_number_1(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-1",
          name: "Neither",
          inputCode: "classify_number_1(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_1(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-2",
      title: "Lesson 5 - Problem 2: FizzBuzz Router & Matcher 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_2(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_2(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-2",
          name: "Divisible by 15",
          inputCode: "classify_number_2(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-2",
          name: "Divisible by 3",
          inputCode: "classify_number_2(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-2",
          name: "Divisible by 5",
          inputCode: "classify_number_2(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-2",
          name: "Neither",
          inputCode: "classify_number_2(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_2(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-3",
      title: "Lesson 5 - Problem 3: FizzBuzz Router & Matcher 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_3(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_3(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-3",
          name: "Divisible by 15",
          inputCode: "classify_number_3(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-3",
          name: "Divisible by 3",
          inputCode: "classify_number_3(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-3",
          name: "Divisible by 5",
          inputCode: "classify_number_3(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-3",
          name: "Neither",
          inputCode: "classify_number_3(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_3(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-4",
      title: "Lesson 5 - Problem 4: FizzBuzz Router & Matcher 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_4(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_4(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-4",
          name: "Divisible by 15",
          inputCode: "classify_number_4(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-4",
          name: "Divisible by 3",
          inputCode: "classify_number_4(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-4",
          name: "Divisible by 5",
          inputCode: "classify_number_4(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-4",
          name: "Neither",
          inputCode: "classify_number_4(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_4(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-5",
      title: "Lesson 5 - Problem 5: FizzBuzz Router & Matcher 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_5(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_5(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-5",
          name: "Divisible by 15",
          inputCode: "classify_number_5(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-5",
          name: "Divisible by 3",
          inputCode: "classify_number_5(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-5",
          name: "Divisible by 5",
          inputCode: "classify_number_5(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-5",
          name: "Neither",
          inputCode: "classify_number_5(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_5(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-6",
      title: "Lesson 5 - Problem 6: FizzBuzz Router & Matcher 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_6(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_6(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-6",
          name: "Divisible by 15",
          inputCode: "classify_number_6(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-6",
          name: "Divisible by 3",
          inputCode: "classify_number_6(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-6",
          name: "Divisible by 5",
          inputCode: "classify_number_6(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-6",
          name: "Neither",
          inputCode: "classify_number_6(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_6(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-7",
      title: "Lesson 5 - Problem 7: FizzBuzz Router & Matcher 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_7(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_7(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-7",
          name: "Divisible by 15",
          inputCode: "classify_number_7(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-7",
          name: "Divisible by 3",
          inputCode: "classify_number_7(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-7",
          name: "Divisible by 5",
          inputCode: "classify_number_7(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-7",
          name: "Neither",
          inputCode: "classify_number_7(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_7(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-8",
      title: "Lesson 5 - Problem 8: FizzBuzz Router & Matcher 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_8(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_8(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-8",
          name: "Divisible by 15",
          inputCode: "classify_number_8(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-8",
          name: "Divisible by 3",
          inputCode: "classify_number_8(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-8",
          name: "Divisible by 5",
          inputCode: "classify_number_8(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-8",
          name: "Neither",
          inputCode: "classify_number_8(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_8(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-9",
      title: "Lesson 5 - Problem 9: FizzBuzz Router & Matcher 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_9(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_9(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-9",
          name: "Divisible by 15",
          inputCode: "classify_number_9(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-9",
          name: "Divisible by 3",
          inputCode: "classify_number_9(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-9",
          name: "Divisible by 5",
          inputCode: "classify_number_9(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-9",
          name: "Neither",
          inputCode: "classify_number_9(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_9(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-10",
      title: "Lesson 5 - Problem 10: FizzBuzz Router & Matcher 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`classify_number_10(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_10(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-10",
          name: "Divisible by 15",
          inputCode: "classify_number_10(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-10",
          name: "Divisible by 3",
          inputCode: "classify_number_10(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-10",
          name: "Divisible by 5",
          inputCode: "classify_number_10(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-10",
          name: "Neither",
          inputCode: "classify_number_10(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_10(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-11",
      title: "Lesson 5 - Problem 11: FizzBuzz Router & Matcher 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_11(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_11(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-11",
          name: "Divisible by 15",
          inputCode: "classify_number_11(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-11",
          name: "Divisible by 3",
          inputCode: "classify_number_11(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-11",
          name: "Divisible by 5",
          inputCode: "classify_number_11(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-11",
          name: "Neither",
          inputCode: "classify_number_11(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_11(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-12",
      title: "Lesson 5 - Problem 12: FizzBuzz Router & Matcher 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_12(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_12(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-12",
          name: "Divisible by 15",
          inputCode: "classify_number_12(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-12",
          name: "Divisible by 3",
          inputCode: "classify_number_12(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-12",
          name: "Divisible by 5",
          inputCode: "classify_number_12(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-12",
          name: "Neither",
          inputCode: "classify_number_12(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_12(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-13",
      title: "Lesson 5 - Problem 13: FizzBuzz Router & Matcher 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_13(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_13(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-13",
          name: "Divisible by 15",
          inputCode: "classify_number_13(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-13",
          name: "Divisible by 3",
          inputCode: "classify_number_13(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-13",
          name: "Divisible by 5",
          inputCode: "classify_number_13(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-13",
          name: "Neither",
          inputCode: "classify_number_13(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_13(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-14",
      title: "Lesson 5 - Problem 14: FizzBuzz Router & Matcher 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_14(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_14(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-14",
          name: "Divisible by 15",
          inputCode: "classify_number_14(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-14",
          name: "Divisible by 3",
          inputCode: "classify_number_14(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-14",
          name: "Divisible by 5",
          inputCode: "classify_number_14(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-14",
          name: "Neither",
          inputCode: "classify_number_14(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_14(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-15",
      title: "Lesson 5 - Problem 15: FizzBuzz Router & Matcher 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_15(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_15(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-15",
          name: "Divisible by 15",
          inputCode: "classify_number_15(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-15",
          name: "Divisible by 3",
          inputCode: "classify_number_15(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-15",
          name: "Divisible by 5",
          inputCode: "classify_number_15(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-15",
          name: "Neither",
          inputCode: "classify_number_15(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_15(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-16",
      title: "Lesson 5 - Problem 16: FizzBuzz Router & Matcher 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_16(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_16(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-16",
          name: "Divisible by 15",
          inputCode: "classify_number_16(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-16",
          name: "Divisible by 3",
          inputCode: "classify_number_16(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-16",
          name: "Divisible by 5",
          inputCode: "classify_number_16(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-16",
          name: "Neither",
          inputCode: "classify_number_16(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_16(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-17",
      title: "Lesson 5 - Problem 17: FizzBuzz Router & Matcher 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_17(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_17(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-17",
          name: "Divisible by 15",
          inputCode: "classify_number_17(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-17",
          name: "Divisible by 3",
          inputCode: "classify_number_17(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-17",
          name: "Divisible by 5",
          inputCode: "classify_number_17(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-17",
          name: "Neither",
          inputCode: "classify_number_17(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_17(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-18",
      title: "Lesson 5 - Problem 18: FizzBuzz Router & Matcher 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_18(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_18(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-18",
          name: "Divisible by 15",
          inputCode: "classify_number_18(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-18",
          name: "Divisible by 3",
          inputCode: "classify_number_18(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-18",
          name: "Divisible by 5",
          inputCode: "classify_number_18(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-18",
          name: "Neither",
          inputCode: "classify_number_18(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_18(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-19",
      title: "Lesson 5 - Problem 19: FizzBuzz Router & Matcher 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_19(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_19(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-19",
          name: "Divisible by 15",
          inputCode: "classify_number_19(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-19",
          name: "Divisible by 3",
          inputCode: "classify_number_19(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-19",
          name: "Divisible by 5",
          inputCode: "classify_number_19(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-19",
          name: "Neither",
          inputCode: "classify_number_19(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_19(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-20",
      title: "Lesson 5 - Problem 20: FizzBuzz Router & Matcher 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`classify_number_20(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_20(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-20",
          name: "Divisible by 15",
          inputCode: "classify_number_20(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-20",
          name: "Divisible by 3",
          inputCode: "classify_number_20(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-20",
          name: "Divisible by 5",
          inputCode: "classify_number_20(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-20",
          name: "Neither",
          inputCode: "classify_number_20(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_20(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-21",
      title: "Lesson 5 - Problem 21: FizzBuzz Router & Matcher 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`classify_number_21(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_21(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-21",
          name: "Divisible by 15",
          inputCode: "classify_number_21(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-21",
          name: "Divisible by 3",
          inputCode: "classify_number_21(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-21",
          name: "Divisible by 5",
          inputCode: "classify_number_21(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-21",
          name: "Neither",
          inputCode: "classify_number_21(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_21(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-22",
      title: "Lesson 5 - Problem 22: FizzBuzz Router & Matcher 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`classify_number_22(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_22(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-22",
          name: "Divisible by 15",
          inputCode: "classify_number_22(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-22",
          name: "Divisible by 3",
          inputCode: "classify_number_22(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-22",
          name: "Divisible by 5",
          inputCode: "classify_number_22(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-22",
          name: "Neither",
          inputCode: "classify_number_22(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_22(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-23",
      title: "Lesson 5 - Problem 23: FizzBuzz Router & Matcher 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`classify_number_23(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_23(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-23",
          name: "Divisible by 15",
          inputCode: "classify_number_23(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-23",
          name: "Divisible by 3",
          inputCode: "classify_number_23(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-23",
          name: "Divisible by 5",
          inputCode: "classify_number_23(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-23",
          name: "Neither",
          inputCode: "classify_number_23(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_23(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-24",
      title: "Lesson 5 - Problem 24: FizzBuzz Router & Matcher 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`classify_number_24(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_24(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-24",
          name: "Divisible by 15",
          inputCode: "classify_number_24(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-24",
          name: "Divisible by 3",
          inputCode: "classify_number_24(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-24",
          name: "Divisible by 5",
          inputCode: "classify_number_24(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-24",
          name: "Neither",
          inputCode: "classify_number_24(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_24(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    },
    {
      id: "l5-ch-25",
      title: "Lesson 5 - Problem 25: FizzBuzz Router & Matcher 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`classify_number_25(n)\` that returns 'FizzBuzz' if divisible by 15, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, or str(n) otherwise.",
      starterCode: `def classify_number_25(n):
    # Write your solution here
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)
`,
      testCases: [
        {
          id: "l5-t1-25",
          name: "Divisible by 15",
          inputCode: "classify_number_25(30)",
          expectedOutput: "FizzBuzz",
          isHidden: false,
        },
        {
          id: "l5-t2-25",
          name: "Divisible by 3",
          inputCode: "classify_number_25(9)",
          expectedOutput: "Fizz",
          isHidden: false,
        },
        {
          id: "l5-t3-25",
          name: "Divisible by 5",
          inputCode: "classify_number_25(10)",
          expectedOutput: "Buzz",
          isHidden: false,
        },
        {
          id: "l5-t4-25",
          name: "Neither",
          inputCode: "classify_number_25(7)",
          expectedOutput: "7",
          isHidden: true,
        }
      ],
      hint: "Check divisibility by 15 (or 3 and 5) first before checking 3 or 5 alone.",
      solution: `def classify_number_25(n):
    if n % 15 == 0: return 'FizzBuzz'
    if n % 3 == 0: return 'Fizz'
    if n % 5 == 0: return 'Buzz'
    return str(n)`,
    }
  ],
  "loop-control-nested": [
    {
      id: "l6-ch-1",
      title: "Lesson 6 - Problem 1: Nested Loop Matrix Aggregator 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_1(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_1(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-1",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_1([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-1",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_1([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-1",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_1([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_1(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-2",
      title: "Lesson 6 - Problem 2: Nested Loop Matrix Aggregator 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_2(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_2(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-2",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_2([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-2",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_2([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-2",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_2([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_2(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-3",
      title: "Lesson 6 - Problem 3: Nested Loop Matrix Aggregator 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_3(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_3(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-3",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_3([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-3",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_3([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-3",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_3([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_3(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-4",
      title: "Lesson 6 - Problem 4: Nested Loop Matrix Aggregator 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_4(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_4(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-4",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_4([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-4",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_4([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-4",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_4([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_4(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-5",
      title: "Lesson 6 - Problem 5: Nested Loop Matrix Aggregator 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_5(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_5(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-5",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_5([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-5",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_5([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-5",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_5([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_5(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-6",
      title: "Lesson 6 - Problem 6: Nested Loop Matrix Aggregator 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_6(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_6(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-6",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_6([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-6",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_6([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-6",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_6([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_6(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-7",
      title: "Lesson 6 - Problem 7: Nested Loop Matrix Aggregator 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_7(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_7(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-7",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_7([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-7",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_7([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-7",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_7([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_7(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-8",
      title: "Lesson 6 - Problem 8: Nested Loop Matrix Aggregator 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_8(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_8(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-8",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_8([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-8",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_8([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-8",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_8([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_8(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-9",
      title: "Lesson 6 - Problem 9: Nested Loop Matrix Aggregator 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_9(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_9(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-9",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_9([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-9",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_9([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-9",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_9([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_9(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-10",
      title: "Lesson 6 - Problem 10: Nested Loop Matrix Aggregator 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`sum_matrix_diagonals_10(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_10(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-10",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_10([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-10",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_10([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-10",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_10([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_10(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-11",
      title: "Lesson 6 - Problem 11: Nested Loop Matrix Aggregator 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_11(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_11(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-11",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_11([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-11",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_11([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-11",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_11([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_11(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-12",
      title: "Lesson 6 - Problem 12: Nested Loop Matrix Aggregator 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_12(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_12(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-12",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_12([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-12",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_12([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-12",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_12([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_12(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-13",
      title: "Lesson 6 - Problem 13: Nested Loop Matrix Aggregator 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_13(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_13(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-13",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_13([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-13",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_13([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-13",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_13([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_13(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-14",
      title: "Lesson 6 - Problem 14: Nested Loop Matrix Aggregator 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_14(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_14(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-14",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_14([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-14",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_14([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-14",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_14([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_14(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-15",
      title: "Lesson 6 - Problem 15: Nested Loop Matrix Aggregator 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_15(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_15(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-15",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_15([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-15",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_15([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-15",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_15([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_15(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-16",
      title: "Lesson 6 - Problem 16: Nested Loop Matrix Aggregator 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_16(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_16(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-16",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_16([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-16",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_16([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-16",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_16([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_16(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-17",
      title: "Lesson 6 - Problem 17: Nested Loop Matrix Aggregator 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_17(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_17(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-17",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_17([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-17",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_17([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-17",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_17([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_17(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-18",
      title: "Lesson 6 - Problem 18: Nested Loop Matrix Aggregator 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_18(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_18(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-18",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_18([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-18",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_18([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-18",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_18([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_18(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-19",
      title: "Lesson 6 - Problem 19: Nested Loop Matrix Aggregator 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_19(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_19(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-19",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_19([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-19",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_19([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-19",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_19([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_19(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-20",
      title: "Lesson 6 - Problem 20: Nested Loop Matrix Aggregator 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`sum_matrix_diagonals_20(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_20(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-20",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_20([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-20",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_20([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-20",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_20([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_20(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-21",
      title: "Lesson 6 - Problem 21: Nested Loop Matrix Aggregator 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`sum_matrix_diagonals_21(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_21(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-21",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_21([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-21",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_21([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-21",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_21([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_21(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-22",
      title: "Lesson 6 - Problem 22: Nested Loop Matrix Aggregator 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`sum_matrix_diagonals_22(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_22(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-22",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_22([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-22",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_22([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-22",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_22([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_22(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-23",
      title: "Lesson 6 - Problem 23: Nested Loop Matrix Aggregator 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`sum_matrix_diagonals_23(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_23(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-23",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_23([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-23",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_23([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-23",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_23([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_23(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-24",
      title: "Lesson 6 - Problem 24: Nested Loop Matrix Aggregator 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`sum_matrix_diagonals_24(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_24(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-24",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_24([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-24",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_24([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-24",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_24([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_24(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    },
    {
      id: "l6-ch-25",
      title: "Lesson 6 - Problem 25: Nested Loop Matrix Aggregator 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`sum_matrix_diagonals_25(matrix)\` that computes the sum of the primary diagonal elements (\`matrix[i][i]\`) of an NxN 2D list.",
      starterCode: `def sum_matrix_diagonals_25(matrix):
    # Write your solution here
    return sum(matrix[i][i] for i in range(len(matrix)))
`,
      testCases: [
        {
          id: "l6-t1-25",
          name: "3x3 Matrix",
          inputCode: "sum_matrix_diagonals_25([[1,2,3],[4,5,6],[7,8,9]])",
          expectedOutput: "15",
          isHidden: false,
        },
        {
          id: "l6-t2-25",
          name: "2x2 Matrix",
          inputCode: "sum_matrix_diagonals_25([[10,20],[30,40]])",
          expectedOutput: "50",
          isHidden: false,
        },
        {
          id: "l6-t3-25",
          name: "1x1 Matrix",
          inputCode: "sum_matrix_diagonals_25([[99]])",
          expectedOutput: "99",
          isHidden: true,
        }
      ],
      hint: "Loop with i from 0 to len(matrix)-1 and accumulate matrix[i][i].",
      solution: `def sum_matrix_diagonals_25(matrix):
    return sum(matrix[i][i] for i in range(len(matrix)))`,
    }
  ],
  "comprehensions": [
    {
      id: "l7-ch-1",
      title: "Lesson 7 - Problem 1: Comprehension Filter & Inverter 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_1(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_1(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-1",
          name: "Mixed Numbers",
          inputCode: "square_evens_1([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-1",
          name: "All Odds",
          inputCode: "square_evens_1([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-1",
          name: "All Evens",
          inputCode: "square_evens_1([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_1(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-2",
      title: "Lesson 7 - Problem 2: Comprehension Filter & Inverter 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_2(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_2(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-2",
          name: "Mixed Numbers",
          inputCode: "square_evens_2([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-2",
          name: "All Odds",
          inputCode: "square_evens_2([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-2",
          name: "All Evens",
          inputCode: "square_evens_2([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_2(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-3",
      title: "Lesson 7 - Problem 3: Comprehension Filter & Inverter 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_3(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_3(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-3",
          name: "Mixed Numbers",
          inputCode: "square_evens_3([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-3",
          name: "All Odds",
          inputCode: "square_evens_3([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-3",
          name: "All Evens",
          inputCode: "square_evens_3([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_3(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-4",
      title: "Lesson 7 - Problem 4: Comprehension Filter & Inverter 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_4(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_4(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-4",
          name: "Mixed Numbers",
          inputCode: "square_evens_4([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-4",
          name: "All Odds",
          inputCode: "square_evens_4([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-4",
          name: "All Evens",
          inputCode: "square_evens_4([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_4(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-5",
      title: "Lesson 7 - Problem 5: Comprehension Filter & Inverter 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_5(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_5(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-5",
          name: "Mixed Numbers",
          inputCode: "square_evens_5([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-5",
          name: "All Odds",
          inputCode: "square_evens_5([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-5",
          name: "All Evens",
          inputCode: "square_evens_5([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_5(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-6",
      title: "Lesson 7 - Problem 6: Comprehension Filter & Inverter 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_6(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_6(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-6",
          name: "Mixed Numbers",
          inputCode: "square_evens_6([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-6",
          name: "All Odds",
          inputCode: "square_evens_6([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-6",
          name: "All Evens",
          inputCode: "square_evens_6([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_6(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-7",
      title: "Lesson 7 - Problem 7: Comprehension Filter & Inverter 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_7(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_7(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-7",
          name: "Mixed Numbers",
          inputCode: "square_evens_7([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-7",
          name: "All Odds",
          inputCode: "square_evens_7([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-7",
          name: "All Evens",
          inputCode: "square_evens_7([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_7(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-8",
      title: "Lesson 7 - Problem 8: Comprehension Filter & Inverter 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_8(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_8(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-8",
          name: "Mixed Numbers",
          inputCode: "square_evens_8([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-8",
          name: "All Odds",
          inputCode: "square_evens_8([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-8",
          name: "All Evens",
          inputCode: "square_evens_8([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_8(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-9",
      title: "Lesson 7 - Problem 9: Comprehension Filter & Inverter 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_9(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_9(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-9",
          name: "Mixed Numbers",
          inputCode: "square_evens_9([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-9",
          name: "All Odds",
          inputCode: "square_evens_9([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-9",
          name: "All Evens",
          inputCode: "square_evens_9([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_9(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-10",
      title: "Lesson 7 - Problem 10: Comprehension Filter & Inverter 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`square_evens_10(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_10(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-10",
          name: "Mixed Numbers",
          inputCode: "square_evens_10([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-10",
          name: "All Odds",
          inputCode: "square_evens_10([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-10",
          name: "All Evens",
          inputCode: "square_evens_10([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_10(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-11",
      title: "Lesson 7 - Problem 11: Comprehension Filter & Inverter 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_11(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_11(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-11",
          name: "Mixed Numbers",
          inputCode: "square_evens_11([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-11",
          name: "All Odds",
          inputCode: "square_evens_11([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-11",
          name: "All Evens",
          inputCode: "square_evens_11([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_11(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-12",
      title: "Lesson 7 - Problem 12: Comprehension Filter & Inverter 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_12(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_12(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-12",
          name: "Mixed Numbers",
          inputCode: "square_evens_12([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-12",
          name: "All Odds",
          inputCode: "square_evens_12([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-12",
          name: "All Evens",
          inputCode: "square_evens_12([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_12(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-13",
      title: "Lesson 7 - Problem 13: Comprehension Filter & Inverter 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_13(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_13(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-13",
          name: "Mixed Numbers",
          inputCode: "square_evens_13([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-13",
          name: "All Odds",
          inputCode: "square_evens_13([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-13",
          name: "All Evens",
          inputCode: "square_evens_13([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_13(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-14",
      title: "Lesson 7 - Problem 14: Comprehension Filter & Inverter 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_14(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_14(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-14",
          name: "Mixed Numbers",
          inputCode: "square_evens_14([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-14",
          name: "All Odds",
          inputCode: "square_evens_14([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-14",
          name: "All Evens",
          inputCode: "square_evens_14([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_14(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-15",
      title: "Lesson 7 - Problem 15: Comprehension Filter & Inverter 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_15(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_15(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-15",
          name: "Mixed Numbers",
          inputCode: "square_evens_15([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-15",
          name: "All Odds",
          inputCode: "square_evens_15([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-15",
          name: "All Evens",
          inputCode: "square_evens_15([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_15(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-16",
      title: "Lesson 7 - Problem 16: Comprehension Filter & Inverter 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_16(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_16(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-16",
          name: "Mixed Numbers",
          inputCode: "square_evens_16([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-16",
          name: "All Odds",
          inputCode: "square_evens_16([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-16",
          name: "All Evens",
          inputCode: "square_evens_16([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_16(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-17",
      title: "Lesson 7 - Problem 17: Comprehension Filter & Inverter 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_17(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_17(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-17",
          name: "Mixed Numbers",
          inputCode: "square_evens_17([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-17",
          name: "All Odds",
          inputCode: "square_evens_17([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-17",
          name: "All Evens",
          inputCode: "square_evens_17([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_17(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-18",
      title: "Lesson 7 - Problem 18: Comprehension Filter & Inverter 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_18(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_18(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-18",
          name: "Mixed Numbers",
          inputCode: "square_evens_18([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-18",
          name: "All Odds",
          inputCode: "square_evens_18([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-18",
          name: "All Evens",
          inputCode: "square_evens_18([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_18(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-19",
      title: "Lesson 7 - Problem 19: Comprehension Filter & Inverter 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_19(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_19(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-19",
          name: "Mixed Numbers",
          inputCode: "square_evens_19([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-19",
          name: "All Odds",
          inputCode: "square_evens_19([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-19",
          name: "All Evens",
          inputCode: "square_evens_19([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_19(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-20",
      title: "Lesson 7 - Problem 20: Comprehension Filter & Inverter 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`square_evens_20(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_20(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-20",
          name: "Mixed Numbers",
          inputCode: "square_evens_20([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-20",
          name: "All Odds",
          inputCode: "square_evens_20([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-20",
          name: "All Evens",
          inputCode: "square_evens_20([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_20(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-21",
      title: "Lesson 7 - Problem 21: Comprehension Filter & Inverter 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`square_evens_21(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_21(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-21",
          name: "Mixed Numbers",
          inputCode: "square_evens_21([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-21",
          name: "All Odds",
          inputCode: "square_evens_21([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-21",
          name: "All Evens",
          inputCode: "square_evens_21([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_21(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-22",
      title: "Lesson 7 - Problem 22: Comprehension Filter & Inverter 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`square_evens_22(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_22(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-22",
          name: "Mixed Numbers",
          inputCode: "square_evens_22([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-22",
          name: "All Odds",
          inputCode: "square_evens_22([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-22",
          name: "All Evens",
          inputCode: "square_evens_22([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_22(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-23",
      title: "Lesson 7 - Problem 23: Comprehension Filter & Inverter 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`square_evens_23(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_23(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-23",
          name: "Mixed Numbers",
          inputCode: "square_evens_23([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-23",
          name: "All Odds",
          inputCode: "square_evens_23([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-23",
          name: "All Evens",
          inputCode: "square_evens_23([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_23(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-24",
      title: "Lesson 7 - Problem 24: Comprehension Filter & Inverter 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`square_evens_24(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_24(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-24",
          name: "Mixed Numbers",
          inputCode: "square_evens_24([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-24",
          name: "All Odds",
          inputCode: "square_evens_24([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-24",
          name: "All Evens",
          inputCode: "square_evens_24([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_24(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    },
    {
      id: "l7-ch-25",
      title: "Lesson 7 - Problem 25: Comprehension Filter & Inverter 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`square_evens_25(numbers)\` that uses a list comprehension to return squares of only the even integers in the given list.",
      starterCode: `def square_evens_25(numbers):
    # Write your solution here
    return [x ** 2 for x in numbers if x % 2 == 0]
`,
      testCases: [
        {
          id: "l7-t1-25",
          name: "Mixed Numbers",
          inputCode: "square_evens_25([1, 2, 3, 4, 5, 6])",
          expectedOutput: "[4, 16, 36]",
          isHidden: false,
        },
        {
          id: "l7-t2-25",
          name: "All Odds",
          inputCode: "square_evens_25([1, 3, 5])",
          expectedOutput: "[]",
          isHidden: false,
        },
        {
          id: "l7-t3-25",
          name: "All Evens",
          inputCode: "square_evens_25([2, 10])",
          expectedOutput: "[4, 100]",
          isHidden: true,
        }
      ],
      hint: "Use [x ** 2 for x in numbers if x % 2 == 0].",
      solution: `def square_evens_25(numbers):
    return [x ** 2 for x in numbers if x % 2 == 0]`,
    }
  ],
};
