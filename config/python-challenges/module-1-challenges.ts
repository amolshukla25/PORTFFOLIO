import type { PracticeExercise } from "../courses";

export const MODULE_1_CHALLENGES: Record<string, PracticeExercise[]> = {
  "hello-world-python": [
    {
      id: "l1-ch-1",
      title: "Lesson 1 - Problem 1: Hello Python Program 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_1(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_1(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-1",
          name: "Sample Name",
          inputCode: "greet_user_1('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-1",
          name: "Empty String",
          inputCode: "greet_user_1('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-1",
          name: "Hidden Test Case",
          inputCode: "greet_user_1('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_1(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-2",
      title: "Lesson 1 - Problem 2: Hello Python Program 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_2(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_2(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-2",
          name: "Sample Name",
          inputCode: "greet_user_2('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-2",
          name: "Empty String",
          inputCode: "greet_user_2('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-2",
          name: "Hidden Test Case",
          inputCode: "greet_user_2('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_2(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-3",
      title: "Lesson 1 - Problem 3: Hello Python Program 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_3(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_3(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-3",
          name: "Sample Name",
          inputCode: "greet_user_3('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-3",
          name: "Empty String",
          inputCode: "greet_user_3('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-3",
          name: "Hidden Test Case",
          inputCode: "greet_user_3('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_3(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-4",
      title: "Lesson 1 - Problem 4: Hello Python Program 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_4(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_4(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-4",
          name: "Sample Name",
          inputCode: "greet_user_4('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-4",
          name: "Empty String",
          inputCode: "greet_user_4('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-4",
          name: "Hidden Test Case",
          inputCode: "greet_user_4('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_4(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-5",
      title: "Lesson 1 - Problem 5: Hello Python Program 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_5(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_5(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-5",
          name: "Sample Name",
          inputCode: "greet_user_5('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-5",
          name: "Empty String",
          inputCode: "greet_user_5('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-5",
          name: "Hidden Test Case",
          inputCode: "greet_user_5('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_5(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-6",
      title: "Lesson 1 - Problem 6: Hello Python Program 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_6(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_6(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-6",
          name: "Sample Name",
          inputCode: "greet_user_6('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-6",
          name: "Empty String",
          inputCode: "greet_user_6('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-6",
          name: "Hidden Test Case",
          inputCode: "greet_user_6('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_6(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-7",
      title: "Lesson 1 - Problem 7: Hello Python Program 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_7(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_7(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-7",
          name: "Sample Name",
          inputCode: "greet_user_7('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-7",
          name: "Empty String",
          inputCode: "greet_user_7('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-7",
          name: "Hidden Test Case",
          inputCode: "greet_user_7('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_7(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-8",
      title: "Lesson 1 - Problem 8: Hello Python Program 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_8(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_8(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-8",
          name: "Sample Name",
          inputCode: "greet_user_8('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-8",
          name: "Empty String",
          inputCode: "greet_user_8('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-8",
          name: "Hidden Test Case",
          inputCode: "greet_user_8('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_8(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-9",
      title: "Lesson 1 - Problem 9: Hello Python Program 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_9(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_9(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-9",
          name: "Sample Name",
          inputCode: "greet_user_9('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-9",
          name: "Empty String",
          inputCode: "greet_user_9('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-9",
          name: "Hidden Test Case",
          inputCode: "greet_user_9('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_9(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-10",
      title: "Lesson 1 - Problem 10: Hello Python Program 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`greet_user_10(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_10(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-10",
          name: "Sample Name",
          inputCode: "greet_user_10('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-10",
          name: "Empty String",
          inputCode: "greet_user_10('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-10",
          name: "Hidden Test Case",
          inputCode: "greet_user_10('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_10(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-11",
      title: "Lesson 1 - Problem 11: Hello Python Program 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_11(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_11(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-11",
          name: "Sample Name",
          inputCode: "greet_user_11('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-11",
          name: "Empty String",
          inputCode: "greet_user_11('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-11",
          name: "Hidden Test Case",
          inputCode: "greet_user_11('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_11(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-12",
      title: "Lesson 1 - Problem 12: Hello Python Program 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_12(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_12(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-12",
          name: "Sample Name",
          inputCode: "greet_user_12('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-12",
          name: "Empty String",
          inputCode: "greet_user_12('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-12",
          name: "Hidden Test Case",
          inputCode: "greet_user_12('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_12(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-13",
      title: "Lesson 1 - Problem 13: Hello Python Program 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_13(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_13(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-13",
          name: "Sample Name",
          inputCode: "greet_user_13('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-13",
          name: "Empty String",
          inputCode: "greet_user_13('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-13",
          name: "Hidden Test Case",
          inputCode: "greet_user_13('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_13(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-14",
      title: "Lesson 1 - Problem 14: Hello Python Program 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_14(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_14(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-14",
          name: "Sample Name",
          inputCode: "greet_user_14('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-14",
          name: "Empty String",
          inputCode: "greet_user_14('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-14",
          name: "Hidden Test Case",
          inputCode: "greet_user_14('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_14(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-15",
      title: "Lesson 1 - Problem 15: Hello Python Program 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_15(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_15(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-15",
          name: "Sample Name",
          inputCode: "greet_user_15('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-15",
          name: "Empty String",
          inputCode: "greet_user_15('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-15",
          name: "Hidden Test Case",
          inputCode: "greet_user_15('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_15(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-16",
      title: "Lesson 1 - Problem 16: Hello Python Program 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_16(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_16(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-16",
          name: "Sample Name",
          inputCode: "greet_user_16('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-16",
          name: "Empty String",
          inputCode: "greet_user_16('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-16",
          name: "Hidden Test Case",
          inputCode: "greet_user_16('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_16(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-17",
      title: "Lesson 1 - Problem 17: Hello Python Program 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_17(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_17(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-17",
          name: "Sample Name",
          inputCode: "greet_user_17('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-17",
          name: "Empty String",
          inputCode: "greet_user_17('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-17",
          name: "Hidden Test Case",
          inputCode: "greet_user_17('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_17(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-18",
      title: "Lesson 1 - Problem 18: Hello Python Program 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_18(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_18(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-18",
          name: "Sample Name",
          inputCode: "greet_user_18('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-18",
          name: "Empty String",
          inputCode: "greet_user_18('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-18",
          name: "Hidden Test Case",
          inputCode: "greet_user_18('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_18(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-19",
      title: "Lesson 1 - Problem 19: Hello Python Program 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_19(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_19(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-19",
          name: "Sample Name",
          inputCode: "greet_user_19('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-19",
          name: "Empty String",
          inputCode: "greet_user_19('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-19",
          name: "Hidden Test Case",
          inputCode: "greet_user_19('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_19(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-20",
      title: "Lesson 1 - Problem 20: Hello Python Program 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`greet_user_20(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_20(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-20",
          name: "Sample Name",
          inputCode: "greet_user_20('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-20",
          name: "Empty String",
          inputCode: "greet_user_20('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-20",
          name: "Hidden Test Case",
          inputCode: "greet_user_20('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_20(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-21",
      title: "Lesson 1 - Problem 21: Hello Python Program 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`greet_user_21(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_21(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-21",
          name: "Sample Name",
          inputCode: "greet_user_21('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-21",
          name: "Empty String",
          inputCode: "greet_user_21('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-21",
          name: "Hidden Test Case",
          inputCode: "greet_user_21('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_21(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-22",
      title: "Lesson 1 - Problem 22: Hello Python Program 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`greet_user_22(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_22(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-22",
          name: "Sample Name",
          inputCode: "greet_user_22('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-22",
          name: "Empty String",
          inputCode: "greet_user_22('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-22",
          name: "Hidden Test Case",
          inputCode: "greet_user_22('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_22(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-23",
      title: "Lesson 1 - Problem 23: Hello Python Program 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`greet_user_23(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_23(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-23",
          name: "Sample Name",
          inputCode: "greet_user_23('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-23",
          name: "Empty String",
          inputCode: "greet_user_23('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-23",
          name: "Hidden Test Case",
          inputCode: "greet_user_23('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_23(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-24",
      title: "Lesson 1 - Problem 24: Hello Python Program 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`greet_user_24(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_24(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-24",
          name: "Sample Name",
          inputCode: "greet_user_24('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-24",
          name: "Empty String",
          inputCode: "greet_user_24('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-24",
          name: "Hidden Test Case",
          inputCode: "greet_user_24('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_24(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    },
    {
      id: "l1-ch-25",
      title: "Lesson 1 - Problem 25: Hello Python Program 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`greet_user_25(name)\` that returns a formatted greeting string for name. If name is empty, return 'Hello, World!'.",
      starterCode: `def greet_user_25(name):
    # Write your solution here
    if not name:
        return "Hello, World!"
    return f"Hello, {name}!"
`,
      testCases: [
        {
          id: "l1-t1-25",
          name: "Sample Name",
          inputCode: "greet_user_25('Amol')",
          expectedOutput: "Hello, Amol!",
          isHidden: false,
        },
        {
          id: "l1-t2-25",
          name: "Empty String",
          inputCode: "greet_user_25('')",
          expectedOutput: "Hello, World!",
          isHidden: false,
        },
        {
          id: "l1-t3-25",
          name: "Hidden Test Case",
          inputCode: "greet_user_25('Python')",
          expectedOutput: "Hello, Python!",
          isHidden: true,
        }
      ],
      hint: "Use an if condition to check if the string is falsy or empty.",
      solution: `def greet_user_25(name):
    return f"Hello, {name}!" if name else "Hello, World!"`,
    }
  ],
  "variables-data-types": [
    {
      id: "l2-ch-1",
      title: "Lesson 2 - Problem 1: Data Type Analyzer 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_1(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_1(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-1",
          name: "Integer Test",
          inputCode: "type_inspector_1(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-1",
          name: "String Test",
          inputCode: "type_inspector_1('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-1",
          name: "List Test",
          inputCode: "type_inspector_1([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_1(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-2",
      title: "Lesson 2 - Problem 2: Data Type Analyzer 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_2(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_2(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-2",
          name: "Integer Test",
          inputCode: "type_inspector_2(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-2",
          name: "String Test",
          inputCode: "type_inspector_2('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-2",
          name: "List Test",
          inputCode: "type_inspector_2([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_2(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-3",
      title: "Lesson 2 - Problem 3: Data Type Analyzer 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_3(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_3(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-3",
          name: "Integer Test",
          inputCode: "type_inspector_3(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-3",
          name: "String Test",
          inputCode: "type_inspector_3('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-3",
          name: "List Test",
          inputCode: "type_inspector_3([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_3(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-4",
      title: "Lesson 2 - Problem 4: Data Type Analyzer 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_4(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_4(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-4",
          name: "Integer Test",
          inputCode: "type_inspector_4(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-4",
          name: "String Test",
          inputCode: "type_inspector_4('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-4",
          name: "List Test",
          inputCode: "type_inspector_4([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_4(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-5",
      title: "Lesson 2 - Problem 5: Data Type Analyzer 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_5(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_5(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-5",
          name: "Integer Test",
          inputCode: "type_inspector_5(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-5",
          name: "String Test",
          inputCode: "type_inspector_5('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-5",
          name: "List Test",
          inputCode: "type_inspector_5([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_5(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-6",
      title: "Lesson 2 - Problem 6: Data Type Analyzer 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_6(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_6(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-6",
          name: "Integer Test",
          inputCode: "type_inspector_6(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-6",
          name: "String Test",
          inputCode: "type_inspector_6('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-6",
          name: "List Test",
          inputCode: "type_inspector_6([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_6(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-7",
      title: "Lesson 2 - Problem 7: Data Type Analyzer 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_7(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_7(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-7",
          name: "Integer Test",
          inputCode: "type_inspector_7(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-7",
          name: "String Test",
          inputCode: "type_inspector_7('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-7",
          name: "List Test",
          inputCode: "type_inspector_7([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_7(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-8",
      title: "Lesson 2 - Problem 8: Data Type Analyzer 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_8(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_8(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-8",
          name: "Integer Test",
          inputCode: "type_inspector_8(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-8",
          name: "String Test",
          inputCode: "type_inspector_8('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-8",
          name: "List Test",
          inputCode: "type_inspector_8([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_8(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-9",
      title: "Lesson 2 - Problem 9: Data Type Analyzer 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_9(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_9(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-9",
          name: "Integer Test",
          inputCode: "type_inspector_9(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-9",
          name: "String Test",
          inputCode: "type_inspector_9('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-9",
          name: "List Test",
          inputCode: "type_inspector_9([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_9(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-10",
      title: "Lesson 2 - Problem 10: Data Type Analyzer 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`type_inspector_10(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_10(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-10",
          name: "Integer Test",
          inputCode: "type_inspector_10(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-10",
          name: "String Test",
          inputCode: "type_inspector_10('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-10",
          name: "List Test",
          inputCode: "type_inspector_10([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_10(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-11",
      title: "Lesson 2 - Problem 11: Data Type Analyzer 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_11(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_11(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-11",
          name: "Integer Test",
          inputCode: "type_inspector_11(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-11",
          name: "String Test",
          inputCode: "type_inspector_11('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-11",
          name: "List Test",
          inputCode: "type_inspector_11([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_11(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-12",
      title: "Lesson 2 - Problem 12: Data Type Analyzer 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_12(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_12(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-12",
          name: "Integer Test",
          inputCode: "type_inspector_12(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-12",
          name: "String Test",
          inputCode: "type_inspector_12('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-12",
          name: "List Test",
          inputCode: "type_inspector_12([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_12(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-13",
      title: "Lesson 2 - Problem 13: Data Type Analyzer 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_13(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_13(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-13",
          name: "Integer Test",
          inputCode: "type_inspector_13(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-13",
          name: "String Test",
          inputCode: "type_inspector_13('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-13",
          name: "List Test",
          inputCode: "type_inspector_13([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_13(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-14",
      title: "Lesson 2 - Problem 14: Data Type Analyzer 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_14(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_14(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-14",
          name: "Integer Test",
          inputCode: "type_inspector_14(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-14",
          name: "String Test",
          inputCode: "type_inspector_14('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-14",
          name: "List Test",
          inputCode: "type_inspector_14([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_14(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-15",
      title: "Lesson 2 - Problem 15: Data Type Analyzer 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_15(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_15(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-15",
          name: "Integer Test",
          inputCode: "type_inspector_15(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-15",
          name: "String Test",
          inputCode: "type_inspector_15('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-15",
          name: "List Test",
          inputCode: "type_inspector_15([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_15(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-16",
      title: "Lesson 2 - Problem 16: Data Type Analyzer 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_16(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_16(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-16",
          name: "Integer Test",
          inputCode: "type_inspector_16(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-16",
          name: "String Test",
          inputCode: "type_inspector_16('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-16",
          name: "List Test",
          inputCode: "type_inspector_16([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_16(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-17",
      title: "Lesson 2 - Problem 17: Data Type Analyzer 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_17(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_17(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-17",
          name: "Integer Test",
          inputCode: "type_inspector_17(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-17",
          name: "String Test",
          inputCode: "type_inspector_17('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-17",
          name: "List Test",
          inputCode: "type_inspector_17([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_17(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-18",
      title: "Lesson 2 - Problem 18: Data Type Analyzer 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_18(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_18(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-18",
          name: "Integer Test",
          inputCode: "type_inspector_18(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-18",
          name: "String Test",
          inputCode: "type_inspector_18('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-18",
          name: "List Test",
          inputCode: "type_inspector_18([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_18(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-19",
      title: "Lesson 2 - Problem 19: Data Type Analyzer 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_19(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_19(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-19",
          name: "Integer Test",
          inputCode: "type_inspector_19(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-19",
          name: "String Test",
          inputCode: "type_inspector_19('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-19",
          name: "List Test",
          inputCode: "type_inspector_19([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_19(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-20",
      title: "Lesson 2 - Problem 20: Data Type Analyzer 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`type_inspector_20(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_20(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-20",
          name: "Integer Test",
          inputCode: "type_inspector_20(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-20",
          name: "String Test",
          inputCode: "type_inspector_20('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-20",
          name: "List Test",
          inputCode: "type_inspector_20([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_20(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-21",
      title: "Lesson 2 - Problem 21: Data Type Analyzer 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`type_inspector_21(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_21(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-21",
          name: "Integer Test",
          inputCode: "type_inspector_21(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-21",
          name: "String Test",
          inputCode: "type_inspector_21('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-21",
          name: "List Test",
          inputCode: "type_inspector_21([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_21(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-22",
      title: "Lesson 2 - Problem 22: Data Type Analyzer 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`type_inspector_22(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_22(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-22",
          name: "Integer Test",
          inputCode: "type_inspector_22(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-22",
          name: "String Test",
          inputCode: "type_inspector_22('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-22",
          name: "List Test",
          inputCode: "type_inspector_22([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_22(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-23",
      title: "Lesson 2 - Problem 23: Data Type Analyzer 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`type_inspector_23(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_23(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-23",
          name: "Integer Test",
          inputCode: "type_inspector_23(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-23",
          name: "String Test",
          inputCode: "type_inspector_23('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-23",
          name: "List Test",
          inputCode: "type_inspector_23([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_23(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-24",
      title: "Lesson 2 - Problem 24: Data Type Analyzer 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`type_inspector_24(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_24(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-24",
          name: "Integer Test",
          inputCode: "type_inspector_24(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-24",
          name: "String Test",
          inputCode: "type_inspector_24('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-24",
          name: "List Test",
          inputCode: "type_inspector_24([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_24(val):
    return type(val).__name__`,
    },
    {
      id: "l2-ch-25",
      title: "Lesson 2 - Problem 25: Data Type Analyzer 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`type_inspector_25(val)\` that returns the string representation of val's type name (e.g. 'int', 'str', 'list', 'float', 'bool').",
      starterCode: `def type_inspector_25(val):
    # Write your solution here
    return type(val).__name__
`,
      testCases: [
        {
          id: "l2-t1-25",
          name: "Integer Test",
          inputCode: "type_inspector_25(42)",
          expectedOutput: "int",
          isHidden: false,
        },
        {
          id: "l2-t2-25",
          name: "String Test",
          inputCode: "type_inspector_25('hello')",
          expectedOutput: "str",
          isHidden: false,
        },
        {
          id: "l2-t3-25",
          name: "List Test",
          inputCode: "type_inspector_25([1, 2, 3])",
          expectedOutput: "list",
          isHidden: true,
        }
      ],
      hint: "type(val).__name__ returns the simple string name of any Python object class.",
      solution: `def type_inspector_25(val):
    return type(val).__name__`,
    }
  ],
  "numbers-strings-math": [
    {
      id: "l3-ch-1",
      title: "Lesson 3 - Problem 1: String Math Transformer 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_1(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_1(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-1",
          name: "Thousands Comma",
          inputCode: "format_currency_1(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-1",
          name: "Custom Symbol",
          inputCode: "format_currency_1(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-1",
          name: "Zero Value",
          inputCode: "format_currency_1(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_1(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-2",
      title: "Lesson 3 - Problem 2: String Math Transformer 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_2(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_2(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-2",
          name: "Thousands Comma",
          inputCode: "format_currency_2(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-2",
          name: "Custom Symbol",
          inputCode: "format_currency_2(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-2",
          name: "Zero Value",
          inputCode: "format_currency_2(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_2(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-3",
      title: "Lesson 3 - Problem 3: String Math Transformer 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_3(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_3(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-3",
          name: "Thousands Comma",
          inputCode: "format_currency_3(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-3",
          name: "Custom Symbol",
          inputCode: "format_currency_3(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-3",
          name: "Zero Value",
          inputCode: "format_currency_3(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_3(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-4",
      title: "Lesson 3 - Problem 4: String Math Transformer 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_4(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_4(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-4",
          name: "Thousands Comma",
          inputCode: "format_currency_4(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-4",
          name: "Custom Symbol",
          inputCode: "format_currency_4(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-4",
          name: "Zero Value",
          inputCode: "format_currency_4(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_4(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-5",
      title: "Lesson 3 - Problem 5: String Math Transformer 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_5(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_5(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-5",
          name: "Thousands Comma",
          inputCode: "format_currency_5(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-5",
          name: "Custom Symbol",
          inputCode: "format_currency_5(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-5",
          name: "Zero Value",
          inputCode: "format_currency_5(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_5(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-6",
      title: "Lesson 3 - Problem 6: String Math Transformer 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_6(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_6(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-6",
          name: "Thousands Comma",
          inputCode: "format_currency_6(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-6",
          name: "Custom Symbol",
          inputCode: "format_currency_6(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-6",
          name: "Zero Value",
          inputCode: "format_currency_6(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_6(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-7",
      title: "Lesson 3 - Problem 7: String Math Transformer 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_7(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_7(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-7",
          name: "Thousands Comma",
          inputCode: "format_currency_7(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-7",
          name: "Custom Symbol",
          inputCode: "format_currency_7(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-7",
          name: "Zero Value",
          inputCode: "format_currency_7(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_7(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-8",
      title: "Lesson 3 - Problem 8: String Math Transformer 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_8(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_8(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-8",
          name: "Thousands Comma",
          inputCode: "format_currency_8(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-8",
          name: "Custom Symbol",
          inputCode: "format_currency_8(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-8",
          name: "Zero Value",
          inputCode: "format_currency_8(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_8(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-9",
      title: "Lesson 3 - Problem 9: String Math Transformer 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_9(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_9(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-9",
          name: "Thousands Comma",
          inputCode: "format_currency_9(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-9",
          name: "Custom Symbol",
          inputCode: "format_currency_9(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-9",
          name: "Zero Value",
          inputCode: "format_currency_9(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_9(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-10",
      title: "Lesson 3 - Problem 10: String Math Transformer 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`format_currency_10(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_10(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-10",
          name: "Thousands Comma",
          inputCode: "format_currency_10(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-10",
          name: "Custom Symbol",
          inputCode: "format_currency_10(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-10",
          name: "Zero Value",
          inputCode: "format_currency_10(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_10(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-11",
      title: "Lesson 3 - Problem 11: String Math Transformer 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_11(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_11(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-11",
          name: "Thousands Comma",
          inputCode: "format_currency_11(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-11",
          name: "Custom Symbol",
          inputCode: "format_currency_11(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-11",
          name: "Zero Value",
          inputCode: "format_currency_11(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_11(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-12",
      title: "Lesson 3 - Problem 12: String Math Transformer 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_12(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_12(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-12",
          name: "Thousands Comma",
          inputCode: "format_currency_12(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-12",
          name: "Custom Symbol",
          inputCode: "format_currency_12(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-12",
          name: "Zero Value",
          inputCode: "format_currency_12(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_12(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-13",
      title: "Lesson 3 - Problem 13: String Math Transformer 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_13(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_13(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-13",
          name: "Thousands Comma",
          inputCode: "format_currency_13(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-13",
          name: "Custom Symbol",
          inputCode: "format_currency_13(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-13",
          name: "Zero Value",
          inputCode: "format_currency_13(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_13(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-14",
      title: "Lesson 3 - Problem 14: String Math Transformer 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_14(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_14(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-14",
          name: "Thousands Comma",
          inputCode: "format_currency_14(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-14",
          name: "Custom Symbol",
          inputCode: "format_currency_14(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-14",
          name: "Zero Value",
          inputCode: "format_currency_14(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_14(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-15",
      title: "Lesson 3 - Problem 15: String Math Transformer 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_15(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_15(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-15",
          name: "Thousands Comma",
          inputCode: "format_currency_15(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-15",
          name: "Custom Symbol",
          inputCode: "format_currency_15(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-15",
          name: "Zero Value",
          inputCode: "format_currency_15(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_15(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-16",
      title: "Lesson 3 - Problem 16: String Math Transformer 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_16(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_16(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-16",
          name: "Thousands Comma",
          inputCode: "format_currency_16(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-16",
          name: "Custom Symbol",
          inputCode: "format_currency_16(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-16",
          name: "Zero Value",
          inputCode: "format_currency_16(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_16(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-17",
      title: "Lesson 3 - Problem 17: String Math Transformer 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_17(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_17(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-17",
          name: "Thousands Comma",
          inputCode: "format_currency_17(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-17",
          name: "Custom Symbol",
          inputCode: "format_currency_17(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-17",
          name: "Zero Value",
          inputCode: "format_currency_17(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_17(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-18",
      title: "Lesson 3 - Problem 18: String Math Transformer 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_18(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_18(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-18",
          name: "Thousands Comma",
          inputCode: "format_currency_18(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-18",
          name: "Custom Symbol",
          inputCode: "format_currency_18(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-18",
          name: "Zero Value",
          inputCode: "format_currency_18(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_18(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-19",
      title: "Lesson 3 - Problem 19: String Math Transformer 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_19(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_19(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-19",
          name: "Thousands Comma",
          inputCode: "format_currency_19(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-19",
          name: "Custom Symbol",
          inputCode: "format_currency_19(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-19",
          name: "Zero Value",
          inputCode: "format_currency_19(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_19(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-20",
      title: "Lesson 3 - Problem 20: String Math Transformer 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`format_currency_20(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_20(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-20",
          name: "Thousands Comma",
          inputCode: "format_currency_20(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-20",
          name: "Custom Symbol",
          inputCode: "format_currency_20(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-20",
          name: "Zero Value",
          inputCode: "format_currency_20(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_20(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-21",
      title: "Lesson 3 - Problem 21: String Math Transformer 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`format_currency_21(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_21(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-21",
          name: "Thousands Comma",
          inputCode: "format_currency_21(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-21",
          name: "Custom Symbol",
          inputCode: "format_currency_21(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-21",
          name: "Zero Value",
          inputCode: "format_currency_21(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_21(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-22",
      title: "Lesson 3 - Problem 22: String Math Transformer 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`format_currency_22(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_22(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-22",
          name: "Thousands Comma",
          inputCode: "format_currency_22(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-22",
          name: "Custom Symbol",
          inputCode: "format_currency_22(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-22",
          name: "Zero Value",
          inputCode: "format_currency_22(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_22(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-23",
      title: "Lesson 3 - Problem 23: String Math Transformer 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`format_currency_23(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_23(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-23",
          name: "Thousands Comma",
          inputCode: "format_currency_23(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-23",
          name: "Custom Symbol",
          inputCode: "format_currency_23(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-23",
          name: "Zero Value",
          inputCode: "format_currency_23(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_23(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-24",
      title: "Lesson 3 - Problem 24: String Math Transformer 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`format_currency_24(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_24(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-24",
          name: "Thousands Comma",
          inputCode: "format_currency_24(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-24",
          name: "Custom Symbol",
          inputCode: "format_currency_24(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-24",
          name: "Zero Value",
          inputCode: "format_currency_24(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_24(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    },
    {
      id: "l3-ch-25",
      title: "Lesson 3 - Problem 25: String Math Transformer 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`format_currency_25(amount, symbol='\$')\` that formats a numeric amount into a formatted currency string like '\$1,234.50'.",
      starterCode: `def format_currency_25(amount, symbol='\$'):
    # Write your solution here
    return f"{symbol}{amount:,.2f}"
`,
      testCases: [
        {
          id: "l3-t1-25",
          name: "Thousands Comma",
          inputCode: "format_currency_25(1234.5)",
          expectedOutput: "\$1,234.50",
          isHidden: false,
        },
        {
          id: "l3-t2-25",
          name: "Custom Symbol",
          inputCode: "format_currency_25(99, '€')",
          expectedOutput: "€99.00",
          isHidden: false,
        },
        {
          id: "l3-t3-25",
          name: "Zero Value",
          inputCode: "format_currency_25(0)",
          expectedOutput: "\$0.00",
          isHidden: true,
        }
      ],
      hint: "Use Python format specifier :,.2f inside an f-string.",
      solution: `def format_currency_25(amount, symbol='\$'):
    return f"{symbol}{amount:,.2f}"`,
    }
  ],
  "operators-expressions": [
    {
      id: "l4-ch-1",
      title: "Lesson 4 - Problem 1: Bitwise and Arithmetic Evaluator 1",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_1(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_1(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-1",
          name: "Shift 3 places",
          inputCode: "bitwise_power_1(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-1",
          name: "Shift 0 places",
          inputCode: "bitwise_power_1(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-1",
          name: "Shift 4 places",
          inputCode: "bitwise_power_1(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_1(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-2",
      title: "Lesson 4 - Problem 2: Bitwise and Arithmetic Evaluator 2",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_2(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_2(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-2",
          name: "Shift 3 places",
          inputCode: "bitwise_power_2(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-2",
          name: "Shift 0 places",
          inputCode: "bitwise_power_2(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-2",
          name: "Shift 4 places",
          inputCode: "bitwise_power_2(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_2(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-3",
      title: "Lesson 4 - Problem 3: Bitwise and Arithmetic Evaluator 3",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_3(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_3(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-3",
          name: "Shift 3 places",
          inputCode: "bitwise_power_3(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-3",
          name: "Shift 0 places",
          inputCode: "bitwise_power_3(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-3",
          name: "Shift 4 places",
          inputCode: "bitwise_power_3(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_3(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-4",
      title: "Lesson 4 - Problem 4: Bitwise and Arithmetic Evaluator 4",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_4(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_4(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-4",
          name: "Shift 3 places",
          inputCode: "bitwise_power_4(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-4",
          name: "Shift 0 places",
          inputCode: "bitwise_power_4(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-4",
          name: "Shift 4 places",
          inputCode: "bitwise_power_4(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_4(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-5",
      title: "Lesson 4 - Problem 5: Bitwise and Arithmetic Evaluator 5",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_5(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_5(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-5",
          name: "Shift 3 places",
          inputCode: "bitwise_power_5(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-5",
          name: "Shift 0 places",
          inputCode: "bitwise_power_5(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-5",
          name: "Shift 4 places",
          inputCode: "bitwise_power_5(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_5(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-6",
      title: "Lesson 4 - Problem 6: Bitwise and Arithmetic Evaluator 6",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_6(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_6(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-6",
          name: "Shift 3 places",
          inputCode: "bitwise_power_6(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-6",
          name: "Shift 0 places",
          inputCode: "bitwise_power_6(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-6",
          name: "Shift 4 places",
          inputCode: "bitwise_power_6(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_6(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-7",
      title: "Lesson 4 - Problem 7: Bitwise and Arithmetic Evaluator 7",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_7(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_7(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-7",
          name: "Shift 3 places",
          inputCode: "bitwise_power_7(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-7",
          name: "Shift 0 places",
          inputCode: "bitwise_power_7(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-7",
          name: "Shift 4 places",
          inputCode: "bitwise_power_7(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_7(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-8",
      title: "Lesson 4 - Problem 8: Bitwise and Arithmetic Evaluator 8",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_8(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_8(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-8",
          name: "Shift 3 places",
          inputCode: "bitwise_power_8(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-8",
          name: "Shift 0 places",
          inputCode: "bitwise_power_8(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-8",
          name: "Shift 4 places",
          inputCode: "bitwise_power_8(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_8(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-9",
      title: "Lesson 4 - Problem 9: Bitwise and Arithmetic Evaluator 9",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_9(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_9(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-9",
          name: "Shift 3 places",
          inputCode: "bitwise_power_9(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-9",
          name: "Shift 0 places",
          inputCode: "bitwise_power_9(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-9",
          name: "Shift 4 places",
          inputCode: "bitwise_power_9(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_9(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-10",
      title: "Lesson 4 - Problem 10: Bitwise and Arithmetic Evaluator 10",
      difficulty: "Easy",
      points: 10,
      task: "Implement function \`bitwise_power_10(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_10(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-10",
          name: "Shift 3 places",
          inputCode: "bitwise_power_10(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-10",
          name: "Shift 0 places",
          inputCode: "bitwise_power_10(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-10",
          name: "Shift 4 places",
          inputCode: "bitwise_power_10(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_10(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-11",
      title: "Lesson 4 - Problem 11: Bitwise and Arithmetic Evaluator 11",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_11(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_11(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-11",
          name: "Shift 3 places",
          inputCode: "bitwise_power_11(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-11",
          name: "Shift 0 places",
          inputCode: "bitwise_power_11(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-11",
          name: "Shift 4 places",
          inputCode: "bitwise_power_11(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_11(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-12",
      title: "Lesson 4 - Problem 12: Bitwise and Arithmetic Evaluator 12",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_12(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_12(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-12",
          name: "Shift 3 places",
          inputCode: "bitwise_power_12(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-12",
          name: "Shift 0 places",
          inputCode: "bitwise_power_12(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-12",
          name: "Shift 4 places",
          inputCode: "bitwise_power_12(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_12(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-13",
      title: "Lesson 4 - Problem 13: Bitwise and Arithmetic Evaluator 13",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_13(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_13(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-13",
          name: "Shift 3 places",
          inputCode: "bitwise_power_13(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-13",
          name: "Shift 0 places",
          inputCode: "bitwise_power_13(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-13",
          name: "Shift 4 places",
          inputCode: "bitwise_power_13(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_13(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-14",
      title: "Lesson 4 - Problem 14: Bitwise and Arithmetic Evaluator 14",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_14(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_14(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-14",
          name: "Shift 3 places",
          inputCode: "bitwise_power_14(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-14",
          name: "Shift 0 places",
          inputCode: "bitwise_power_14(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-14",
          name: "Shift 4 places",
          inputCode: "bitwise_power_14(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_14(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-15",
      title: "Lesson 4 - Problem 15: Bitwise and Arithmetic Evaluator 15",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_15(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_15(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-15",
          name: "Shift 3 places",
          inputCode: "bitwise_power_15(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-15",
          name: "Shift 0 places",
          inputCode: "bitwise_power_15(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-15",
          name: "Shift 4 places",
          inputCode: "bitwise_power_15(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_15(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-16",
      title: "Lesson 4 - Problem 16: Bitwise and Arithmetic Evaluator 16",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_16(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_16(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-16",
          name: "Shift 3 places",
          inputCode: "bitwise_power_16(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-16",
          name: "Shift 0 places",
          inputCode: "bitwise_power_16(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-16",
          name: "Shift 4 places",
          inputCode: "bitwise_power_16(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_16(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-17",
      title: "Lesson 4 - Problem 17: Bitwise and Arithmetic Evaluator 17",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_17(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_17(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-17",
          name: "Shift 3 places",
          inputCode: "bitwise_power_17(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-17",
          name: "Shift 0 places",
          inputCode: "bitwise_power_17(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-17",
          name: "Shift 4 places",
          inputCode: "bitwise_power_17(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_17(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-18",
      title: "Lesson 4 - Problem 18: Bitwise and Arithmetic Evaluator 18",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_18(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_18(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-18",
          name: "Shift 3 places",
          inputCode: "bitwise_power_18(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-18",
          name: "Shift 0 places",
          inputCode: "bitwise_power_18(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-18",
          name: "Shift 4 places",
          inputCode: "bitwise_power_18(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_18(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-19",
      title: "Lesson 4 - Problem 19: Bitwise and Arithmetic Evaluator 19",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_19(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_19(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-19",
          name: "Shift 3 places",
          inputCode: "bitwise_power_19(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-19",
          name: "Shift 0 places",
          inputCode: "bitwise_power_19(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-19",
          name: "Shift 4 places",
          inputCode: "bitwise_power_19(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_19(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-20",
      title: "Lesson 4 - Problem 20: Bitwise and Arithmetic Evaluator 20",
      difficulty: "Medium",
      points: 20,
      task: "Implement function \`bitwise_power_20(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_20(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-20",
          name: "Shift 3 places",
          inputCode: "bitwise_power_20(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-20",
          name: "Shift 0 places",
          inputCode: "bitwise_power_20(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-20",
          name: "Shift 4 places",
          inputCode: "bitwise_power_20(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_20(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-21",
      title: "Lesson 4 - Problem 21: Bitwise and Arithmetic Evaluator 21",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`bitwise_power_21(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_21(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-21",
          name: "Shift 3 places",
          inputCode: "bitwise_power_21(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-21",
          name: "Shift 0 places",
          inputCode: "bitwise_power_21(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-21",
          name: "Shift 4 places",
          inputCode: "bitwise_power_21(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_21(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-22",
      title: "Lesson 4 - Problem 22: Bitwise and Arithmetic Evaluator 22",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`bitwise_power_22(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_22(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-22",
          name: "Shift 3 places",
          inputCode: "bitwise_power_22(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-22",
          name: "Shift 0 places",
          inputCode: "bitwise_power_22(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-22",
          name: "Shift 4 places",
          inputCode: "bitwise_power_22(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_22(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-23",
      title: "Lesson 4 - Problem 23: Bitwise and Arithmetic Evaluator 23",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`bitwise_power_23(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_23(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-23",
          name: "Shift 3 places",
          inputCode: "bitwise_power_23(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-23",
          name: "Shift 0 places",
          inputCode: "bitwise_power_23(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-23",
          name: "Shift 4 places",
          inputCode: "bitwise_power_23(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_23(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-24",
      title: "Lesson 4 - Problem 24: Bitwise and Arithmetic Evaluator 24",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`bitwise_power_24(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_24(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-24",
          name: "Shift 3 places",
          inputCode: "bitwise_power_24(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-24",
          name: "Shift 0 places",
          inputCode: "bitwise_power_24(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-24",
          name: "Shift 4 places",
          inputCode: "bitwise_power_24(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_24(n, power_of_two):
    return n << power_of_two`,
    },
    {
      id: "l4-ch-25",
      title: "Lesson 4 - Problem 25: Bitwise and Arithmetic Evaluator 25",
      difficulty: "Hard",
      points: 30,
      task: "Implement function \`bitwise_power_25(n, power_of_two)\` that multiplies n by (2 ** power_of_two) using bit-shift operators \`<<\`.",
      starterCode: `def bitwise_power_25(n, power_of_two):
    # Write your solution here
    return n << power_of_two
`,
      testCases: [
        {
          id: "l4-t1-25",
          name: "Shift 3 places",
          inputCode: "bitwise_power_25(5, 3)",
          expectedOutput: "40",
          isHidden: false,
        },
        {
          id: "l4-t2-25",
          name: "Shift 0 places",
          inputCode: "bitwise_power_25(10, 0)",
          expectedOutput: "10",
          isHidden: false,
        },
        {
          id: "l4-t3-25",
          name: "Shift 4 places",
          inputCode: "bitwise_power_25(2, 4)",
          expectedOutput: "32",
          isHidden: true,
        }
      ],
      hint: "n << k is equivalent to n * (2 ** k) but computed in a single CPU cycle.",
      solution: `def bitwise_power_25(n, power_of_two):
    return n << power_of_two`,
    }
  ],
};
