import type { PracticeExercise } from "../courses";

export const MODULE_3_CHALLENGES: Record<string, PracticeExercise[]> = {
  "lists-tuples": [
    {
      id: "l8-ch-1",
      title: "Lesson 8 - Problem 1: List Deduplicator & Sorter 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_1(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_1(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-1",
          name: "Duplicates List",
          inputCode: "unique_sorted_1([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-1",
          name: "Already Unique",
          inputCode: "unique_sorted_1([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-1",
          name: "Empty List",
          inputCode: "unique_sorted_1([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_1(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-2",
      title: "Lesson 8 - Problem 2: List Deduplicator & Sorter 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_2(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_2(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-2",
          name: "Duplicates List",
          inputCode: "unique_sorted_2([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-2",
          name: "Already Unique",
          inputCode: "unique_sorted_2([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-2",
          name: "Empty List",
          inputCode: "unique_sorted_2([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_2(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-3",
      title: "Lesson 8 - Problem 3: List Deduplicator & Sorter 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_3(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_3(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-3",
          name: "Duplicates List",
          inputCode: "unique_sorted_3([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-3",
          name: "Already Unique",
          inputCode: "unique_sorted_3([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-3",
          name: "Empty List",
          inputCode: "unique_sorted_3([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_3(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-4",
      title: "Lesson 8 - Problem 4: List Deduplicator & Sorter 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_4(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_4(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-4",
          name: "Duplicates List",
          inputCode: "unique_sorted_4([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-4",
          name: "Already Unique",
          inputCode: "unique_sorted_4([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-4",
          name: "Empty List",
          inputCode: "unique_sorted_4([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_4(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-5",
      title: "Lesson 8 - Problem 5: List Deduplicator & Sorter 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_5(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_5(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-5",
          name: "Duplicates List",
          inputCode: "unique_sorted_5([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-5",
          name: "Already Unique",
          inputCode: "unique_sorted_5([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-5",
          name: "Empty List",
          inputCode: "unique_sorted_5([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_5(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-6",
      title: "Lesson 8 - Problem 6: List Deduplicator & Sorter 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_6(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_6(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-6",
          name: "Duplicates List",
          inputCode: "unique_sorted_6([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-6",
          name: "Already Unique",
          inputCode: "unique_sorted_6([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-6",
          name: "Empty List",
          inputCode: "unique_sorted_6([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_6(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-7",
      title: "Lesson 8 - Problem 7: List Deduplicator & Sorter 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_7(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_7(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-7",
          name: "Duplicates List",
          inputCode: "unique_sorted_7([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-7",
          name: "Already Unique",
          inputCode: "unique_sorted_7([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-7",
          name: "Empty List",
          inputCode: "unique_sorted_7([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_7(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-8",
      title: "Lesson 8 - Problem 8: List Deduplicator & Sorter 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_8(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_8(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-8",
          name: "Duplicates List",
          inputCode: "unique_sorted_8([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-8",
          name: "Already Unique",
          inputCode: "unique_sorted_8([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-8",
          name: "Empty List",
          inputCode: "unique_sorted_8([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_8(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-9",
      title: "Lesson 8 - Problem 9: List Deduplicator & Sorter 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_9(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_9(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-9",
          name: "Duplicates List",
          inputCode: "unique_sorted_9([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-9",
          name: "Already Unique",
          inputCode: "unique_sorted_9([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-9",
          name: "Empty List",
          inputCode: "unique_sorted_9([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_9(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-10",
      title: "Lesson 8 - Problem 10: List Deduplicator & Sorter 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`unique_sorted_10(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_10(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-10",
          name: "Duplicates List",
          inputCode: "unique_sorted_10([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-10",
          name: "Already Unique",
          inputCode: "unique_sorted_10([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-10",
          name: "Empty List",
          inputCode: "unique_sorted_10([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_10(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-11",
      title: "Lesson 8 - Problem 11: List Deduplicator & Sorter 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_11(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_11(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-11",
          name: "Duplicates List",
          inputCode: "unique_sorted_11([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-11",
          name: "Already Unique",
          inputCode: "unique_sorted_11([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-11",
          name: "Empty List",
          inputCode: "unique_sorted_11([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_11(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-12",
      title: "Lesson 8 - Problem 12: List Deduplicator & Sorter 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_12(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_12(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-12",
          name: "Duplicates List",
          inputCode: "unique_sorted_12([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-12",
          name: "Already Unique",
          inputCode: "unique_sorted_12([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-12",
          name: "Empty List",
          inputCode: "unique_sorted_12([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_12(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-13",
      title: "Lesson 8 - Problem 13: List Deduplicator & Sorter 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_13(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_13(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-13",
          name: "Duplicates List",
          inputCode: "unique_sorted_13([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-13",
          name: "Already Unique",
          inputCode: "unique_sorted_13([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-13",
          name: "Empty List",
          inputCode: "unique_sorted_13([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_13(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-14",
      title: "Lesson 8 - Problem 14: List Deduplicator & Sorter 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_14(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_14(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-14",
          name: "Duplicates List",
          inputCode: "unique_sorted_14([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-14",
          name: "Already Unique",
          inputCode: "unique_sorted_14([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-14",
          name: "Empty List",
          inputCode: "unique_sorted_14([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_14(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-15",
      title: "Lesson 8 - Problem 15: List Deduplicator & Sorter 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_15(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_15(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-15",
          name: "Duplicates List",
          inputCode: "unique_sorted_15([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-15",
          name: "Already Unique",
          inputCode: "unique_sorted_15([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-15",
          name: "Empty List",
          inputCode: "unique_sorted_15([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_15(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-16",
      title: "Lesson 8 - Problem 16: List Deduplicator & Sorter 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_16(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_16(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-16",
          name: "Duplicates List",
          inputCode: "unique_sorted_16([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-16",
          name: "Already Unique",
          inputCode: "unique_sorted_16([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-16",
          name: "Empty List",
          inputCode: "unique_sorted_16([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_16(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-17",
      title: "Lesson 8 - Problem 17: List Deduplicator & Sorter 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_17(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_17(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-17",
          name: "Duplicates List",
          inputCode: "unique_sorted_17([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-17",
          name: "Already Unique",
          inputCode: "unique_sorted_17([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-17",
          name: "Empty List",
          inputCode: "unique_sorted_17([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_17(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-18",
      title: "Lesson 8 - Problem 18: List Deduplicator & Sorter 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_18(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_18(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-18",
          name: "Duplicates List",
          inputCode: "unique_sorted_18([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-18",
          name: "Already Unique",
          inputCode: "unique_sorted_18([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-18",
          name: "Empty List",
          inputCode: "unique_sorted_18([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_18(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-19",
      title: "Lesson 8 - Problem 19: List Deduplicator & Sorter 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_19(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_19(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-19",
          name: "Duplicates List",
          inputCode: "unique_sorted_19([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-19",
          name: "Already Unique",
          inputCode: "unique_sorted_19([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-19",
          name: "Empty List",
          inputCode: "unique_sorted_19([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_19(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-20",
      title: "Lesson 8 - Problem 20: List Deduplicator & Sorter 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`unique_sorted_20(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_20(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-20",
          name: "Duplicates List",
          inputCode: "unique_sorted_20([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-20",
          name: "Already Unique",
          inputCode: "unique_sorted_20([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-20",
          name: "Empty List",
          inputCode: "unique_sorted_20([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_20(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-21",
      title: "Lesson 8 - Problem 21: List Deduplicator & Sorter 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`unique_sorted_21(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_21(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-21",
          name: "Duplicates List",
          inputCode: "unique_sorted_21([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-21",
          name: "Already Unique",
          inputCode: "unique_sorted_21([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-21",
          name: "Empty List",
          inputCode: "unique_sorted_21([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_21(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-22",
      title: "Lesson 8 - Problem 22: List Deduplicator & Sorter 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`unique_sorted_22(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_22(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-22",
          name: "Duplicates List",
          inputCode: "unique_sorted_22([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-22",
          name: "Already Unique",
          inputCode: "unique_sorted_22([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-22",
          name: "Empty List",
          inputCode: "unique_sorted_22([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_22(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-23",
      title: "Lesson 8 - Problem 23: List Deduplicator & Sorter 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`unique_sorted_23(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_23(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-23",
          name: "Duplicates List",
          inputCode: "unique_sorted_23([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-23",
          name: "Already Unique",
          inputCode: "unique_sorted_23([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-23",
          name: "Empty List",
          inputCode: "unique_sorted_23([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_23(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-24",
      title: "Lesson 8 - Problem 24: List Deduplicator & Sorter 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`unique_sorted_24(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_24(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-24",
          name: "Duplicates List",
          inputCode: "unique_sorted_24([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-24",
          name: "Already Unique",
          inputCode: "unique_sorted_24([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-24",
          name: "Empty List",
          inputCode: "unique_sorted_24([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_24(items):
    return sorted(list(set(items)))`,
    },
    {
      id: "l8-ch-25",
      title: "Lesson 8 - Problem 25: List Deduplicator & Sorter 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`unique_sorted_25(items)\` that returns a new sorted list containing only unique items without duplicates.",
      starterCode: `def unique_sorted_25(items):
    # Write your solution here
    return sorted(list(set(items)))
`,
      testCases: [
        {
          id: "l8-t1-25",
          name: "Duplicates List",
          inputCode: "unique_sorted_25([3, 1, 2, 3, 1, 4])",
          expectedOutput: "[1, 2, 3, 4]",
          isHidden: false,
        },
        {
          id: "l8-t2-25",
          name: "Already Unique",
          inputCode: "unique_sorted_25([10, 5, 20])",
          expectedOutput: "[5, 10, 20]",
          isHidden: false,
        },
        {
          id: "l8-t3-25",
          name: "Empty List",
          inputCode: "unique_sorted_25([])",
          expectedOutput: "[]",
          isHidden: true,
        }
      ],
      hint: "Pass the items into set() to deduplicate and wrap with sorted() to sort.",
      solution: `def unique_sorted_25(items):
    return sorted(list(set(items)))`,
    }
  ],
  "sets-dictionaries": [
    {
      id: "l9-ch-1",
      title: "Lesson 9 - Problem 1: Word Frequency & Inversion 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_1(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_1(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-1",
          name: "Repeated Words",
          inputCode: "count_words_1('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-1",
          name: "Single Word",
          inputCode: "count_words_1('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-1",
          name: "Empty Sentence",
          inputCode: "count_words_1('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_1(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-2",
      title: "Lesson 9 - Problem 2: Word Frequency & Inversion 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_2(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_2(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-2",
          name: "Repeated Words",
          inputCode: "count_words_2('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-2",
          name: "Single Word",
          inputCode: "count_words_2('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-2",
          name: "Empty Sentence",
          inputCode: "count_words_2('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_2(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-3",
      title: "Lesson 9 - Problem 3: Word Frequency & Inversion 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_3(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_3(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-3",
          name: "Repeated Words",
          inputCode: "count_words_3('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-3",
          name: "Single Word",
          inputCode: "count_words_3('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-3",
          name: "Empty Sentence",
          inputCode: "count_words_3('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_3(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-4",
      title: "Lesson 9 - Problem 4: Word Frequency & Inversion 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_4(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_4(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-4",
          name: "Repeated Words",
          inputCode: "count_words_4('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-4",
          name: "Single Word",
          inputCode: "count_words_4('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-4",
          name: "Empty Sentence",
          inputCode: "count_words_4('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_4(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-5",
      title: "Lesson 9 - Problem 5: Word Frequency & Inversion 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_5(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_5(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-5",
          name: "Repeated Words",
          inputCode: "count_words_5('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-5",
          name: "Single Word",
          inputCode: "count_words_5('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-5",
          name: "Empty Sentence",
          inputCode: "count_words_5('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_5(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-6",
      title: "Lesson 9 - Problem 6: Word Frequency & Inversion 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_6(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_6(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-6",
          name: "Repeated Words",
          inputCode: "count_words_6('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-6",
          name: "Single Word",
          inputCode: "count_words_6('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-6",
          name: "Empty Sentence",
          inputCode: "count_words_6('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_6(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-7",
      title: "Lesson 9 - Problem 7: Word Frequency & Inversion 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_7(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_7(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-7",
          name: "Repeated Words",
          inputCode: "count_words_7('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-7",
          name: "Single Word",
          inputCode: "count_words_7('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-7",
          name: "Empty Sentence",
          inputCode: "count_words_7('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_7(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-8",
      title: "Lesson 9 - Problem 8: Word Frequency & Inversion 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_8(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_8(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-8",
          name: "Repeated Words",
          inputCode: "count_words_8('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-8",
          name: "Single Word",
          inputCode: "count_words_8('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-8",
          name: "Empty Sentence",
          inputCode: "count_words_8('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_8(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-9",
      title: "Lesson 9 - Problem 9: Word Frequency & Inversion 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_9(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_9(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-9",
          name: "Repeated Words",
          inputCode: "count_words_9('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-9",
          name: "Single Word",
          inputCode: "count_words_9('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-9",
          name: "Empty Sentence",
          inputCode: "count_words_9('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_9(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-10",
      title: "Lesson 9 - Problem 10: Word Frequency & Inversion 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`count_words_10(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_10(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-10",
          name: "Repeated Words",
          inputCode: "count_words_10('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-10",
          name: "Single Word",
          inputCode: "count_words_10('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-10",
          name: "Empty Sentence",
          inputCode: "count_words_10('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_10(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-11",
      title: "Lesson 9 - Problem 11: Word Frequency & Inversion 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_11(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_11(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-11",
          name: "Repeated Words",
          inputCode: "count_words_11('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-11",
          name: "Single Word",
          inputCode: "count_words_11('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-11",
          name: "Empty Sentence",
          inputCode: "count_words_11('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_11(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-12",
      title: "Lesson 9 - Problem 12: Word Frequency & Inversion 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_12(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_12(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-12",
          name: "Repeated Words",
          inputCode: "count_words_12('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-12",
          name: "Single Word",
          inputCode: "count_words_12('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-12",
          name: "Empty Sentence",
          inputCode: "count_words_12('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_12(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-13",
      title: "Lesson 9 - Problem 13: Word Frequency & Inversion 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_13(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_13(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-13",
          name: "Repeated Words",
          inputCode: "count_words_13('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-13",
          name: "Single Word",
          inputCode: "count_words_13('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-13",
          name: "Empty Sentence",
          inputCode: "count_words_13('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_13(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-14",
      title: "Lesson 9 - Problem 14: Word Frequency & Inversion 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_14(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_14(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-14",
          name: "Repeated Words",
          inputCode: "count_words_14('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-14",
          name: "Single Word",
          inputCode: "count_words_14('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-14",
          name: "Empty Sentence",
          inputCode: "count_words_14('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_14(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-15",
      title: "Lesson 9 - Problem 15: Word Frequency & Inversion 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_15(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_15(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-15",
          name: "Repeated Words",
          inputCode: "count_words_15('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-15",
          name: "Single Word",
          inputCode: "count_words_15('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-15",
          name: "Empty Sentence",
          inputCode: "count_words_15('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_15(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-16",
      title: "Lesson 9 - Problem 16: Word Frequency & Inversion 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_16(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_16(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-16",
          name: "Repeated Words",
          inputCode: "count_words_16('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-16",
          name: "Single Word",
          inputCode: "count_words_16('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-16",
          name: "Empty Sentence",
          inputCode: "count_words_16('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_16(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-17",
      title: "Lesson 9 - Problem 17: Word Frequency & Inversion 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_17(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_17(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-17",
          name: "Repeated Words",
          inputCode: "count_words_17('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-17",
          name: "Single Word",
          inputCode: "count_words_17('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-17",
          name: "Empty Sentence",
          inputCode: "count_words_17('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_17(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-18",
      title: "Lesson 9 - Problem 18: Word Frequency & Inversion 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_18(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_18(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-18",
          name: "Repeated Words",
          inputCode: "count_words_18('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-18",
          name: "Single Word",
          inputCode: "count_words_18('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-18",
          name: "Empty Sentence",
          inputCode: "count_words_18('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_18(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-19",
      title: "Lesson 9 - Problem 19: Word Frequency & Inversion 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_19(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_19(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-19",
          name: "Repeated Words",
          inputCode: "count_words_19('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-19",
          name: "Single Word",
          inputCode: "count_words_19('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-19",
          name: "Empty Sentence",
          inputCode: "count_words_19('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_19(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-20",
      title: "Lesson 9 - Problem 20: Word Frequency & Inversion 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`count_words_20(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_20(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-20",
          name: "Repeated Words",
          inputCode: "count_words_20('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-20",
          name: "Single Word",
          inputCode: "count_words_20('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-20",
          name: "Empty Sentence",
          inputCode: "count_words_20('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_20(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-21",
      title: "Lesson 9 - Problem 21: Word Frequency & Inversion 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`count_words_21(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_21(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-21",
          name: "Repeated Words",
          inputCode: "count_words_21('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-21",
          name: "Single Word",
          inputCode: "count_words_21('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-21",
          name: "Empty Sentence",
          inputCode: "count_words_21('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_21(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-22",
      title: "Lesson 9 - Problem 22: Word Frequency & Inversion 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`count_words_22(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_22(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-22",
          name: "Repeated Words",
          inputCode: "count_words_22('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-22",
          name: "Single Word",
          inputCode: "count_words_22('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-22",
          name: "Empty Sentence",
          inputCode: "count_words_22('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_22(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-23",
      title: "Lesson 9 - Problem 23: Word Frequency & Inversion 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`count_words_23(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_23(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-23",
          name: "Repeated Words",
          inputCode: "count_words_23('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-23",
          name: "Single Word",
          inputCode: "count_words_23('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-23",
          name: "Empty Sentence",
          inputCode: "count_words_23('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_23(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-24",
      title: "Lesson 9 - Problem 24: Word Frequency & Inversion 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`count_words_24(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_24(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-24",
          name: "Repeated Words",
          inputCode: "count_words_24('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-24",
          name: "Single Word",
          inputCode: "count_words_24('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-24",
          name: "Empty Sentence",
          inputCode: "count_words_24('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_24(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    },
    {
      id: "l9-ch-25",
      title: "Lesson 9 - Problem 25: Word Frequency & Inversion 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`count_words_25(sentence)\` that counts lowercase word frequencies in sentence and returns a dictionary of counts.",
      starterCode: `def count_words_25(sentence):
    # Write your solution here
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts
`,
      testCases: [
        {
          id: "l9-t1-25",
          name: "Repeated Words",
          inputCode: "count_words_25('apple banana apple')",
          expectedOutput: "{'apple': 2, 'banana': 1}",
          isHidden: false,
        },
        {
          id: "l9-t2-25",
          name: "Single Word",
          inputCode: "count_words_25('Python')",
          expectedOutput: "{'python': 1}",
          isHidden: false,
        },
        {
          id: "l9-t3-25",
          name: "Empty Sentence",
          inputCode: "count_words_25('')",
          expectedOutput: "{}",
          isHidden: true,
        }
      ],
      hint: "Use sentence.lower().split() and dict.get(w, 0) + 1.",
      solution: `def count_words_25(sentence):
    words = sentence.lower().split()
    counts = {}
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts`,
    }
  ],
  "advanced-collections": [
    {
      id: "l10-ch-1",
      title: "Lesson 10 - Problem 1: Deque & Counter Stream Analyzer 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_1(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_1(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-1",
          name: "Top 2",
          inputCode: "top_k_frequent_1(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-1",
          name: "Top 1",
          inputCode: "top_k_frequent_1([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-1",
          name: "All equal",
          inputCode: "top_k_frequent_1(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_1(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-2",
      title: "Lesson 10 - Problem 2: Deque & Counter Stream Analyzer 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_2(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_2(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-2",
          name: "Top 2",
          inputCode: "top_k_frequent_2(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-2",
          name: "Top 1",
          inputCode: "top_k_frequent_2([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-2",
          name: "All equal",
          inputCode: "top_k_frequent_2(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_2(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-3",
      title: "Lesson 10 - Problem 3: Deque & Counter Stream Analyzer 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_3(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_3(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-3",
          name: "Top 2",
          inputCode: "top_k_frequent_3(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-3",
          name: "Top 1",
          inputCode: "top_k_frequent_3([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-3",
          name: "All equal",
          inputCode: "top_k_frequent_3(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_3(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-4",
      title: "Lesson 10 - Problem 4: Deque & Counter Stream Analyzer 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_4(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_4(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-4",
          name: "Top 2",
          inputCode: "top_k_frequent_4(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-4",
          name: "Top 1",
          inputCode: "top_k_frequent_4([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-4",
          name: "All equal",
          inputCode: "top_k_frequent_4(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_4(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-5",
      title: "Lesson 10 - Problem 5: Deque & Counter Stream Analyzer 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_5(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_5(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-5",
          name: "Top 2",
          inputCode: "top_k_frequent_5(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-5",
          name: "Top 1",
          inputCode: "top_k_frequent_5([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-5",
          name: "All equal",
          inputCode: "top_k_frequent_5(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_5(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-6",
      title: "Lesson 10 - Problem 6: Deque & Counter Stream Analyzer 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_6(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_6(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-6",
          name: "Top 2",
          inputCode: "top_k_frequent_6(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-6",
          name: "Top 1",
          inputCode: "top_k_frequent_6([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-6",
          name: "All equal",
          inputCode: "top_k_frequent_6(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_6(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-7",
      title: "Lesson 10 - Problem 7: Deque & Counter Stream Analyzer 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_7(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_7(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-7",
          name: "Top 2",
          inputCode: "top_k_frequent_7(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-7",
          name: "Top 1",
          inputCode: "top_k_frequent_7([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-7",
          name: "All equal",
          inputCode: "top_k_frequent_7(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_7(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-8",
      title: "Lesson 10 - Problem 8: Deque & Counter Stream Analyzer 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_8(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_8(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-8",
          name: "Top 2",
          inputCode: "top_k_frequent_8(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-8",
          name: "Top 1",
          inputCode: "top_k_frequent_8([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-8",
          name: "All equal",
          inputCode: "top_k_frequent_8(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_8(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-9",
      title: "Lesson 10 - Problem 9: Deque & Counter Stream Analyzer 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_9(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_9(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-9",
          name: "Top 2",
          inputCode: "top_k_frequent_9(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-9",
          name: "Top 1",
          inputCode: "top_k_frequent_9([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-9",
          name: "All equal",
          inputCode: "top_k_frequent_9(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_9(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-10",
      title: "Lesson 10 - Problem 10: Deque & Counter Stream Analyzer 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`top_k_frequent_10(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_10(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-10",
          name: "Top 2",
          inputCode: "top_k_frequent_10(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-10",
          name: "Top 1",
          inputCode: "top_k_frequent_10([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-10",
          name: "All equal",
          inputCode: "top_k_frequent_10(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_10(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-11",
      title: "Lesson 10 - Problem 11: Deque & Counter Stream Analyzer 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_11(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_11(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-11",
          name: "Top 2",
          inputCode: "top_k_frequent_11(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-11",
          name: "Top 1",
          inputCode: "top_k_frequent_11([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-11",
          name: "All equal",
          inputCode: "top_k_frequent_11(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_11(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-12",
      title: "Lesson 10 - Problem 12: Deque & Counter Stream Analyzer 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_12(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_12(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-12",
          name: "Top 2",
          inputCode: "top_k_frequent_12(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-12",
          name: "Top 1",
          inputCode: "top_k_frequent_12([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-12",
          name: "All equal",
          inputCode: "top_k_frequent_12(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_12(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-13",
      title: "Lesson 10 - Problem 13: Deque & Counter Stream Analyzer 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_13(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_13(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-13",
          name: "Top 2",
          inputCode: "top_k_frequent_13(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-13",
          name: "Top 1",
          inputCode: "top_k_frequent_13([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-13",
          name: "All equal",
          inputCode: "top_k_frequent_13(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_13(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-14",
      title: "Lesson 10 - Problem 14: Deque & Counter Stream Analyzer 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_14(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_14(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-14",
          name: "Top 2",
          inputCode: "top_k_frequent_14(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-14",
          name: "Top 1",
          inputCode: "top_k_frequent_14([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-14",
          name: "All equal",
          inputCode: "top_k_frequent_14(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_14(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-15",
      title: "Lesson 10 - Problem 15: Deque & Counter Stream Analyzer 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_15(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_15(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-15",
          name: "Top 2",
          inputCode: "top_k_frequent_15(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-15",
          name: "Top 1",
          inputCode: "top_k_frequent_15([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-15",
          name: "All equal",
          inputCode: "top_k_frequent_15(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_15(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-16",
      title: "Lesson 10 - Problem 16: Deque & Counter Stream Analyzer 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_16(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_16(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-16",
          name: "Top 2",
          inputCode: "top_k_frequent_16(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-16",
          name: "Top 1",
          inputCode: "top_k_frequent_16([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-16",
          name: "All equal",
          inputCode: "top_k_frequent_16(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_16(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-17",
      title: "Lesson 10 - Problem 17: Deque & Counter Stream Analyzer 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_17(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_17(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-17",
          name: "Top 2",
          inputCode: "top_k_frequent_17(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-17",
          name: "Top 1",
          inputCode: "top_k_frequent_17([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-17",
          name: "All equal",
          inputCode: "top_k_frequent_17(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_17(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-18",
      title: "Lesson 10 - Problem 18: Deque & Counter Stream Analyzer 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_18(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_18(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-18",
          name: "Top 2",
          inputCode: "top_k_frequent_18(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-18",
          name: "Top 1",
          inputCode: "top_k_frequent_18([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-18",
          name: "All equal",
          inputCode: "top_k_frequent_18(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_18(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-19",
      title: "Lesson 10 - Problem 19: Deque & Counter Stream Analyzer 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_19(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_19(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-19",
          name: "Top 2",
          inputCode: "top_k_frequent_19(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-19",
          name: "Top 1",
          inputCode: "top_k_frequent_19([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-19",
          name: "All equal",
          inputCode: "top_k_frequent_19(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_19(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-20",
      title: "Lesson 10 - Problem 20: Deque & Counter Stream Analyzer 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`top_k_frequent_20(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_20(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-20",
          name: "Top 2",
          inputCode: "top_k_frequent_20(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-20",
          name: "Top 1",
          inputCode: "top_k_frequent_20([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-20",
          name: "All equal",
          inputCode: "top_k_frequent_20(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_20(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-21",
      title: "Lesson 10 - Problem 21: Deque & Counter Stream Analyzer 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`top_k_frequent_21(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_21(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-21",
          name: "Top 2",
          inputCode: "top_k_frequent_21(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-21",
          name: "Top 1",
          inputCode: "top_k_frequent_21([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-21",
          name: "All equal",
          inputCode: "top_k_frequent_21(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_21(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-22",
      title: "Lesson 10 - Problem 22: Deque & Counter Stream Analyzer 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`top_k_frequent_22(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_22(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-22",
          name: "Top 2",
          inputCode: "top_k_frequent_22(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-22",
          name: "Top 1",
          inputCode: "top_k_frequent_22([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-22",
          name: "All equal",
          inputCode: "top_k_frequent_22(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_22(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-23",
      title: "Lesson 10 - Problem 23: Deque & Counter Stream Analyzer 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`top_k_frequent_23(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_23(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-23",
          name: "Top 2",
          inputCode: "top_k_frequent_23(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-23",
          name: "Top 1",
          inputCode: "top_k_frequent_23([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-23",
          name: "All equal",
          inputCode: "top_k_frequent_23(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_23(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-24",
      title: "Lesson 10 - Problem 24: Deque & Counter Stream Analyzer 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`top_k_frequent_24(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_24(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-24",
          name: "Top 2",
          inputCode: "top_k_frequent_24(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-24",
          name: "Top 1",
          inputCode: "top_k_frequent_24([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-24",
          name: "All equal",
          inputCode: "top_k_frequent_24(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_24(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    },
    {
      id: "l10-ch-25",
      title: "Lesson 10 - Problem 25: Deque & Counter Stream Analyzer 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`top_k_frequent_25(items, k=2)\` using collections.Counter that returns a list of the top k most common elements.",
      starterCode: `from collections import Counter

def top_k_frequent_25(items, k=2):
    # Write your solution here
    c = Counter(items)
    return [elem for elem, count in c.most_common(k)]
`,
      testCases: [
        {
          id: "l10-t1-25",
          name: "Top 2",
          inputCode: "top_k_frequent_25(['a', 'b', 'a', 'c', 'a', 'b'], 2)",
          expectedOutput: "['a', 'b']",
          isHidden: false,
        },
        {
          id: "l10-t2-25",
          name: "Top 1",
          inputCode: "top_k_frequent_25([1, 2, 2, 3], 1)",
          expectedOutput: "[2]",
          isHidden: false,
        },
        {
          id: "l10-t3-25",
          name: "All equal",
          inputCode: "top_k_frequent_25(['x', 'y'], 1)",
          expectedOutput: "['x']",
          isHidden: true,
        }
      ],
      hint: "Use collections.Counter(items).most_common(k) and extract element keys.",
      solution: `from collections import Counter
def top_k_frequent_25(items, k=2):
    return [elem for elem, _ in Counter(items).most_common(k)]`,
    }
  ],
  "nested-copies": [
    {
      id: "l11-ch-1",
      title: "Lesson 11 - Problem 1: Deep Clone & Modifier 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_1(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_1(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-1",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_1([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-1",
          name: "Single Item",
          inputCode: "safe_deep_clone_1([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-1",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_1([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_1(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-2",
      title: "Lesson 11 - Problem 2: Deep Clone & Modifier 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_2(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_2(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-2",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_2([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-2",
          name: "Single Item",
          inputCode: "safe_deep_clone_2([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-2",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_2([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_2(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-3",
      title: "Lesson 11 - Problem 3: Deep Clone & Modifier 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_3(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_3(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-3",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_3([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-3",
          name: "Single Item",
          inputCode: "safe_deep_clone_3([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-3",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_3([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_3(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-4",
      title: "Lesson 11 - Problem 4: Deep Clone & Modifier 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_4(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_4(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-4",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_4([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-4",
          name: "Single Item",
          inputCode: "safe_deep_clone_4([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-4",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_4([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_4(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-5",
      title: "Lesson 11 - Problem 5: Deep Clone & Modifier 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_5(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_5(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-5",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_5([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-5",
          name: "Single Item",
          inputCode: "safe_deep_clone_5([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-5",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_5([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_5(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-6",
      title: "Lesson 11 - Problem 6: Deep Clone & Modifier 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_6(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_6(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-6",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_6([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-6",
          name: "Single Item",
          inputCode: "safe_deep_clone_6([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-6",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_6([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_6(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-7",
      title: "Lesson 11 - Problem 7: Deep Clone & Modifier 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_7(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_7(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-7",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_7([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-7",
          name: "Single Item",
          inputCode: "safe_deep_clone_7([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-7",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_7([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_7(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-8",
      title: "Lesson 11 - Problem 8: Deep Clone & Modifier 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_8(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_8(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-8",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_8([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-8",
          name: "Single Item",
          inputCode: "safe_deep_clone_8([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-8",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_8([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_8(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-9",
      title: "Lesson 11 - Problem 9: Deep Clone & Modifier 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_9(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_9(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-9",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_9([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-9",
          name: "Single Item",
          inputCode: "safe_deep_clone_9([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-9",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_9([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_9(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-10",
      title: "Lesson 11 - Problem 10: Deep Clone & Modifier 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`safe_deep_clone_10(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_10(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-10",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_10([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-10",
          name: "Single Item",
          inputCode: "safe_deep_clone_10([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-10",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_10([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_10(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-11",
      title: "Lesson 11 - Problem 11: Deep Clone & Modifier 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_11(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_11(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-11",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_11([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-11",
          name: "Single Item",
          inputCode: "safe_deep_clone_11([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-11",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_11([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_11(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-12",
      title: "Lesson 11 - Problem 12: Deep Clone & Modifier 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_12(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_12(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-12",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_12([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-12",
          name: "Single Item",
          inputCode: "safe_deep_clone_12([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-12",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_12([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_12(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-13",
      title: "Lesson 11 - Problem 13: Deep Clone & Modifier 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_13(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_13(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-13",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_13([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-13",
          name: "Single Item",
          inputCode: "safe_deep_clone_13([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-13",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_13([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_13(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-14",
      title: "Lesson 11 - Problem 14: Deep Clone & Modifier 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_14(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_14(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-14",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_14([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-14",
          name: "Single Item",
          inputCode: "safe_deep_clone_14([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-14",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_14([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_14(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-15",
      title: "Lesson 11 - Problem 15: Deep Clone & Modifier 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_15(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_15(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-15",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_15([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-15",
          name: "Single Item",
          inputCode: "safe_deep_clone_15([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-15",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_15([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_15(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-16",
      title: "Lesson 11 - Problem 16: Deep Clone & Modifier 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_16(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_16(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-16",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_16([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-16",
          name: "Single Item",
          inputCode: "safe_deep_clone_16([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-16",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_16([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_16(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-17",
      title: "Lesson 11 - Problem 17: Deep Clone & Modifier 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_17(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_17(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-17",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_17([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-17",
          name: "Single Item",
          inputCode: "safe_deep_clone_17([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-17",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_17([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_17(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-18",
      title: "Lesson 11 - Problem 18: Deep Clone & Modifier 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_18(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_18(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-18",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_18([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-18",
          name: "Single Item",
          inputCode: "safe_deep_clone_18([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-18",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_18([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_18(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-19",
      title: "Lesson 11 - Problem 19: Deep Clone & Modifier 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_19(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_19(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-19",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_19([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-19",
          name: "Single Item",
          inputCode: "safe_deep_clone_19([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-19",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_19([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_19(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-20",
      title: "Lesson 11 - Problem 20: Deep Clone & Modifier 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`safe_deep_clone_20(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_20(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-20",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_20([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-20",
          name: "Single Item",
          inputCode: "safe_deep_clone_20([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-20",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_20([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_20(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-21",
      title: "Lesson 11 - Problem 21: Deep Clone & Modifier 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`safe_deep_clone_21(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_21(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-21",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_21([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-21",
          name: "Single Item",
          inputCode: "safe_deep_clone_21([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-21",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_21([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_21(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-22",
      title: "Lesson 11 - Problem 22: Deep Clone & Modifier 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`safe_deep_clone_22(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_22(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-22",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_22([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-22",
          name: "Single Item",
          inputCode: "safe_deep_clone_22([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-22",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_22([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_22(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-23",
      title: "Lesson 11 - Problem 23: Deep Clone & Modifier 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`safe_deep_clone_23(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_23(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-23",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_23([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-23",
          name: "Single Item",
          inputCode: "safe_deep_clone_23([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-23",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_23([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_23(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-24",
      title: "Lesson 11 - Problem 24: Deep Clone & Modifier 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`safe_deep_clone_24(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_24(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-24",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_24([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-24",
          name: "Single Item",
          inputCode: "safe_deep_clone_24([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-24",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_24([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_24(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    },
    {
      id: "l11-ch-25",
      title: "Lesson 11 - Problem 25: Deep Clone & Modifier 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`safe_deep_clone_25(nested_data, append_val)\` that deep-clones nested_data using copy.deepcopy, appends append_val to the first list found, and returns a tuple (original, cloned).",
      starterCode: `import copy

def safe_deep_clone_25(nested_data, append_val):
    # Write your solution here
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)
`,
      testCases: [
        {
          id: "l11-t1-25",
          name: "2D List Clone",
          inputCode: "safe_deep_clone_25([[1, 2], [3]], 99)",
          expectedOutput: "([[1, 2], [3]], [[1, 2, 99], [3]])",
          isHidden: false,
        },
        {
          id: "l11-t2-25",
          name: "Single Item",
          inputCode: "safe_deep_clone_25([[10]], 20)",
          expectedOutput: "([[10]], [[10, 20]])",
          isHidden: false,
        },
        {
          id: "l11-t3-25",
          name: "Empty Nested List",
          inputCode: "safe_deep_clone_25([[]], 5)",
          expectedOutput: "([[]], [[5]])",
          isHidden: true,
        }
      ],
      hint: "Use copy.deepcopy(nested_data) to ensure complete memory isolation.",
      solution: `import copy
def safe_deep_clone_25(nested_data, append_val):
    cloned = copy.deepcopy(nested_data)
    cloned[0].append(append_val)
    return (nested_data, cloned)`,
    }
  ],
};
