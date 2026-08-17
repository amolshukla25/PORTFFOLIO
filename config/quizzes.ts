/**
 * Interactive quizzes for every lesson in the Learning Hub.
 *
 * Keyed by lesson id (see config/python-course/module-*.ts and
 * config/courses.ts). Rendered by components/courses/lesson-quiz.tsx
 * at the bottom of every lesson page.
 */

import { PYTHON_MODULE_1_QUIZZES } from "./python-quizzes/module-1-quizzes";
import { PYTHON_MODULE_2_QUIZZES } from "./python-quizzes/module-2-quizzes";
import { PYTHON_MODULE_3_QUIZZES } from "./python-quizzes/module-3-quizzes";
import { PYTHON_MODULE_4_QUIZZES } from "./python-quizzes/module-4-quizzes";
import { PYTHON_MODULE_5_QUIZZES } from "./python-quizzes/module-5-quizzes";
import { PYTHON_MODULE_6_QUIZZES } from "./python-quizzes/module-6-quizzes";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonQuiz {
  title: string;
  questions: QuizQuestion[];
}

export const LESSON_QUIZZES: Record<string, LessonQuiz> = {
  // ─── Complete Python Course (Modules 1 - 6: 25 Lessons, 16 Code Questions Each) ───
  ...PYTHON_MODULE_1_QUIZZES,
  ...PYTHON_MODULE_2_QUIZZES,
  ...PYTHON_MODULE_3_QUIZZES,
  ...PYTHON_MODULE_4_QUIZZES,
  ...PYTHON_MODULE_5_QUIZZES,
  ...PYTHON_MODULE_6_QUIZZES,

  // ─── Data Science Hub ─────────────────────────────────────────────────────
  "python-basics": {
    title: "Python Data Science Ecosystem",
    questions: [
      {
        id: "ds-1",
        question: "Why are NumPy arrays faster than Python lists for large data?",
        options: [
          "They use interpreted loops",
          "They store data in contiguous memory and use vectorized C operations",
          "They compress the data",
          "They are smaller by design",
        ],
        correctIndex: 1,
        explanation:
          "Contiguous homogeneous storage plus vectorized C-level operations remove Python's per-element overhead.",
      },
      {
        id: "ds-2",
        question: "What does a list comprehension [x**2 for x in range(10) if x % 2 == 0] produce?",
        options: [
          "Squares of all numbers 0–9",
          "Squares of even numbers 0–9",
          "Squares of odd numbers 0–9",
          "Just 0 and 2",
        ],
        correctIndex: 1,
        explanation:
          "The if keeps only even x values (0, 2, 4, 6, 8), and each is squared.",
      },
      {
        id: "ds-3",
        question: "Why use a virtual environment?",
        options: [
          "To speed up Python",
          "To isolate dependencies per project",
          "To compress notebooks",
          "To encrypt code",
        ],
        correctIndex: 1,
        explanation: "Virtual environments keep each project's packages separate — avoiding version clashes.",
      },
    ],
  },
  "numpy-pandas": {
    title: "NumPy & Pandas",
    questions: [
      {
        id: "np-1",
        question: "How do you fill missing values with a column's mean?",
        options: [
          "df.dropna()",
          "df.fillna(df.mean())",
          "df.replace(mean)",
          "df.clean()",
        ],
        correctIndex: 1,
        explanation: "df.fillna(df.mean()) replaces NaN cells with the column mean.",
      },
      {
        id: "np-2",
        question: "What does df.groupby('Dept').mean() do?",
        options: [
          "Sorts the rows",
          "Averages numeric columns per department",
          "Drops duplicates",
          "Renames columns",
        ],
        correctIndex: 1,
        explanation:
          "groupby splits rows by department and .mean() aggregates each group's numeric columns.",
      },
      {
        id: "np-3",
        question: "What is the key difference between .loc and .iloc?",
        options: [
          "No difference",
          ".loc is label-based, .iloc is integer-position based",
          ".loc is faster",
          ".iloc works only on numbers",
        ],
        correctIndex: 1,
        explanation:
          ".loc selects by row/column labels; .iloc selects by zero-based integer positions.",
      },
    ],
  },
  visualization: {
    title: "Data Visualization",
    questions: [
      {
        id: "vz-1",
        question: "Which library is a high-level wrapper on Matplotlib?",
        options: ["Seaborn", "Pandas", "Scikit-learn", "Requests"],
        correctIndex: 0,
        explanation:
          "Seaborn builds on Matplotlib with statistical defaults and tight pandas integration.",
      },
      {
        id: "vz-2",
        question: "What is the best chart for showing a distribution's shape?",
        options: ["A pie chart", "A histogram or KDE plot", "A line chart", "A table"],
        correctIndex: 1,
        explanation:
          "Histograms and KDE plots reveal how values are spread — skewed, normal, bimodal, etc.",
      },
      {
        id: "vz-3",
        question: "What does a correlation heatmap visualize?",
        options: [
          "Time trends",
          "Pairwise correlations between numeric features",
          "Missing values",
          "Category counts",
        ],
        correctIndex: 1,
        explanation:
          "Each cell shows how strongly two numeric features move together (-1 to +1).",
      },
    ],
  },
  "supervised-learning": {
    title: "Supervised Learning",
    questions: [
      {
        id: "ml-1",
        question: "Why do we split data into train and test sets?",
        options: [
          "To make training faster",
          "To evaluate the model on unseen data",
          "To double the dataset",
          "To remove noise",
        ],
        correctIndex: 1,
        explanation:
          "Testing on unseen data reveals whether the model generalizes instead of just memorizing.",
      },
      {
        id: "ml-2",
        question: "What does Mean Squared Error measure?",
        options: [
          "How fast training runs",
          "The average squared difference between predictions and true values",
          "The size of the dataset",
          "The number of features",
        ],
        correctIndex: 1,
        explanation:
          "MSE averages the squared prediction errors — lower is better.",
      },
      {
        id: "ml-3",
        question: "Which sklearn function splits the dataset?",
        options: [
          "train_test_split()",
          "split_data()",
          "cross_validate()",
          "partition()",
        ],
        correctIndex: 0,
        explanation: "from sklearn.model_selection import train_test_split is the standard workflow.",
      },
    ],
  },
  "agentic-ai": {
    title: "Agentic AI Pipelines",
    questions: [
      {
        id: "ag-1",
        question: "What does the ReAct loop stand for?",
        options: [
          "React + Active",
          "Reason + Act",
          "Read + Act",
          "Real-time Actions",
        ],
        correctIndex: 1,
        explanation:
          "ReAct alternates Thought → Action → Observation until it can produce a final answer.",
      },
      {
        id: "ag-2",
        question: "In an agent, what is a tool?",
        options: [
          "A Python library",
          "A callable the model can invoke with arguments",
          "A debugger",
          "A file format",
        ],
        correctIndex: 1,
        explanation:
          "Tools are functions exposed to the LLM — it decides when to call them and what arguments to pass.",
      },
      {
        id: "ag-3",
        question: "Why must agentic runtimes be sandboxed?",
        options: [
          "To save money",
          "Because agents can execute generated code, which could be unsafe",
          "To make them faster",
          "To reduce tokens",
        ],
        correctIndex: 1,
        explanation:
          "Agents that write and run code need isolated sandboxes (e.g. Docker) to prevent malicious or buggy execution.",
      },
    ],
  },

  // ─── Digital Marketing Course ─────────────────────────────────────────────
  "intro-digital-marketing": {
    title: "Introduction to Digital Marketing",
    questions: [
      {
        id: "dm-1",
        question: "What is digital marketing?",
        options: [
          "Only social media advertising",
          "Promoting products/services through digital channels",
          "Selling products online",
          "Building websites",
        ],
        correctIndex: 1,
        explanation:
          "Digital marketing encompasses all marketing efforts that use electronic devices or the internet to reach customers.",
      },
      {
        id: "dm-2",
        question: "Which of these is NOT a key component of digital marketing?",
        options: [
          "SEO",
          "Email Marketing",
          "Traditional TV Advertising",
          "Content Marketing",
        ],
        correctIndex: 2,
        explanation:
          "Traditional TV advertising is part of traditional marketing, not digital marketing.",
      },
      {
        id: "dm-3",
        question: "Why is digital marketing measurable?",
        options: [
          "Because you can count followers",
          "Because every click, impression, and conversion can be tracked",
          "Because it's cheaper",
          "Because it's easier",
        ],
        correctIndex: 1,
        explanation:
          "Digital marketing provides detailed analytics that track user interactions in real-time.",
      },
    ],
  },
  "buyer-personas": {
    title: "Buyer Personas & Customer Journey",
    questions: [
      {
        id: "bp-1",
        question: "What is a buyer persona?",
        options: [
          "A real customer profile",
          "A semi-fictional representation of your ideal customer",
          "A marketing strategy",
          "A social media profile",
        ],
        correctIndex: 1,
        explanation:
          "Buyer personas are semi-fictional representations based on market research and real data about your customers.",
      },
      {
        id: "bp-2",
        question: "What are the 5 stages of the customer journey?",
        options: [
          "Awareness, Interest, Decision, Action, Loyalty",
          "Awareness, Consideration, Decision, Retention, Advocacy",
          "Research, Compare, Buy, Use, Recommend",
          "Discover, Learn, Purchase, Use, Review",
        ],
        correctIndex: 1,
        explanation:
          "The 5 stages are Awareness, Consideration, Decision, Retention, and Advocacy.",
      },
      {
        id: "bp-3",
        question: "Why is post-purchase experience important?",
        options: [
          "It isn't important",
          "It costs 5x more to acquire a new customer than retain an existing one",
          "It only matters for B2B companies",
          "It only affects social media",
        ],
        correctIndex: 1,
        explanation:
          "Retention and advocacy stages provide the highest ROI because acquiring new customers is much more expensive.",
      },
    ],
  },
  "smart-goals": {
    title: "SMART Marketing Goals",
    questions: [
      {
        id: "sg-1",
        question: "What does SMART stand for in goal setting?",
        options: [
          "Simple, Measurable, Achievable, Relevant, Timely",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Strategic, Measurable, Actionable, Realistic, Timed",
          "Smart, Meaningful, Attainable, Results-oriented, Tracked"
        ],
        correctIndex: 1,
        explanation:
          "SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound.",
      },
      {
        id: "sg-2",
        question: "Which is a SMART goal?",
        options: [
          "Get more followers",
          "Increase Instagram followers by 15% in 3 months",
          "Do better on social media",
          "Improve marketing",
        ],
        correctIndex: 1,
        explanation:
          "This goal is Specific (Instagram followers), Measurable (15%), Achievable (realistic), Relevant (marketing), and Time-bound (3 months).",
      },
    ],
  },

  // ─── Stock Market Course ─────────────────────────────────────────────────
  "intro-stock-market": {
    title: "Introduction to the Stock Market",
    questions: [
      {
        id: "sm-1",
        question: "What happens when you buy a stock?",
        options: [
          "You lend money to the company",
          "You purchase a small piece of ownership in the company",
          "You become an employee",
          "You guarantee returns",
        ],
        correctIndex: 1,
        explanation:
          "Buying stock means purchasing shares, which represent ownership stakes in a company.",
      },
      {
        id: "sm-2",
        question: "What is market capitalization?",
        options: [
          "The number of shares a company has",
          "The total value of all shares (price × shares outstanding)",
          "The company's annual revenue",
          "The company's profit margin",
        ],
        correctIndex: 1,
        explanation:
          "Market cap is calculated by multiplying the current stock price by the total number of outstanding shares.",
      },
      {
        id: "sm-3",
        question: "What is a bull market?",
        options: [
          "A market with falling prices",
          "A market with rising prices",
          "A market with stable prices",
          "A market with high volatility",
        ],
        correctIndex: 1,
        explanation:
          "A bull market is characterized by rising stock prices and investor optimism.",
      },
    ],
  },
  "types-of-stocks": {
    title: "Types of Stocks & Asset Classes",
    questions: [
      {
        id: "ts-1",
        question: "What characterizes a growth stock?",
        options: [
          "High dividend payments",
          "Expected to grow faster than the market",
          "Low risk, stable returns",
          "Only available in certain countries",
        ],
        correctIndex: 1,
        explanation:
          "Growth stocks are companies expected to grow earnings at an above-average rate compared to the market.",
      },
      {
        id: "ts-2",
        question: "What is the main advantage of index funds?",
        options: [
          "Higher returns than individual stocks",
          "Instant diversification across many companies",
          "No risk of loss",
          "Guaranteed dividends",
        ],
        correctIndex: 1,
        explanation:
          "Index funds provide instant diversification by holding a basket of stocks that mirror a market index.",
      },
      {
        id: "ts-3",
        question: "Why is diversification important?",
        options: [
          "It guarantees profits",
          "It can reduce risk without proportionally reducing returns",
          "It eliminates all risk",
          "It's required by law",
        ],
        correctIndex: 1,
        explanation:
          "Diversification spreads investments across different assets, reducing the impact of any single investment's poor performance.",
      },
    ],
  },
  "fundamental-analysis": {
    title: "Fundamental Analysis",
    questions: [
      {
        id: "fa-1",
        question: "What does the P/E ratio measure?",
        options: [
          "A company's debt level",
          "How much you're paying for $1 of earnings",
          "The company's cash flow",
          "The stock's trading volume",
        ],
        correctIndex: 1,
        explanation:
          "The P/E (Price-to-Earnings) ratio shows how much investors are willing to pay per dollar of the company's earnings.",
      },
      {
        id: "fa-2",
        question: "What is a margin of safety?",
        options: [
          "A guaranteed profit",
          "The difference between intrinsic value and market price",
          "A type of investment account",
          "A risk management tool for banks",
        ],
        correctIndex: 1,
        explanation:
          "A margin of safety is the buffer between a stock's intrinsic value and its current market price, protecting against estimation errors.",
      },
    ],
  },

  // ─── Prompt Engineering Course ────────────────────────────────────────────
  "intro-prompt-engineering": {
    title: "Introduction to Prompt Engineering",
    questions: [
      {
        id: "pe-1",
        question: "What is prompt engineering?",
        options: [
          "Coding AI models from scratch",
          "Crafting inputs that guide LLMs to produce desired outputs",
          "Building computer hardware",
          "Writing traditional software code",
        ],
        correctIndex: 1,
        explanation:
          "Prompt engineering is the skill of creating effective inputs (prompts) to get better results from large language models.",
      },
      {
        id: "pe-2",
        question: "Why is being specific important in prompts?",
        options: [
          "It isn't important",
          "Vague prompts get vague results",
          "It makes the prompt shorter",
          "It costs less tokens",
        ],
        correctIndex: 1,
        explanation:
          "Specific prompts provide clear instructions that help the model understand exactly what you want.",
      },
      {
        id: "pe-3",
        question: "What should you do if your first prompt doesn't give good results?",
        options: [
          "Give up",
          "Try a different AI model",
          "Iterate and refine your prompt",
          "Use more technical jargon",
        ],
        correctIndex: 2,
        explanation:
          "Iteration is key — your first prompt is rarely your best. Refine based on what you received.",
      },
    ],
  },
  "core-prompting-techniques": {
    title: "Core Prompting Techniques",
    questions: [
      {
        id: "cpt-1",
        question: "What is zero-shot prompting?",
        options: [
          "Using no examples in your prompt",
          "Asking the model to not respond",
          "Using only one example",
          "Turning off the AI",
        ],
        correctIndex: 0,
        explanation:
          "Zero-shot prompting means giving the model a task with no examples, relying on its pre-trained knowledge.",
      },
      {
        id: "cpt-2",
        question: "When should you use chain-of-thought prompting?",
        options: [
          "For simple classification tasks",
          "For math, logic, and complex reasoning tasks",
          "For creative writing",
          "For translation tasks",
        ],
        correctIndex: 1,
        explanation:
          "Chain-of-thought prompting asks the model to show its reasoning step by step, which improves accuracy for complex tasks.",
      },
      {
        id: "cpt-3",
        question: "What is few-shot prompting?",
        options: [
          "Using very few words",
          "Providing examples of the desired input-output pattern",
          "Asking short questions",
          "Using a small model",
        ],
        correctIndex: 1,
        explanation:
          "Few-shot prompting provides several examples to show the model the pattern you want before asking for new output.",
      },
    ],
  },
  "structured-outputs": {
    title: "Structured Outputs & Templates",
    questions: [
      {
        id: "so-1",
        question: "Why is it important to specify output format in prompts?",
        options: [
          "It isn't important",
          "To ensure consistent, usable outputs",
        ],
        correctIndex: 1,
        explanation:
          "Specifying format ensures you get outputs that are consistent and ready to use without reformatting.",
      },
      {
        id: "so-2",
        question: "What is a prompt template?",
        options: [
          "A single-use prompt",
          "A reusable framework that can be filled with different variables",
          "A template for the AI model's responses",
          "A coding template",
        ],
        correctIndex: 1,
        explanation:
          "Prompt templates are reusable frameworks with placeholders that can be customized for different situations.",
      },
    ],
  },

  // ─── Module 2: Advanced Prompting Techniques ─────────────────────────────
  "chain-of-thought-variants": {
    title: "Chain-of-Thought Variants",
    questions: [
      {
        id: "cotv-1",
        question: "What is the simplest chain-of-thought variant?",
        options: [
          "Few-shot CoT",
          "Zero-shot CoT",
          "Self-consistency CoT",
          "Auto-CoT",
        ],
        correctIndex: 1,
        explanation:
          "Zero-shot CoT is the simplest — just add 'Let's think step by step' to your prompt.",
      },
      {
        id: "cotv-2",
        question: "When should you use self-consistency CoT?",
        options: [
          "For simple tasks",
          "When accuracy is critical and you can afford multiple API calls",
          "When you need fast responses",
          "For creative writing",
        ],
        correctIndex: 1,
        explanation:
          "Self-consistency generates multiple solutions and takes the majority vote — best for high-stakes accuracy.",
      },
      {
        id: "cotv-3",
        question: "What does Auto-CoT do?",
        options: [
          "Automatically selects the best CoT variant",
          "Generates its own reasoning examples when you don't have good ones",
          "Runs CoT without any configuration",
          "Turns off chain-of-thought automatically",
        ],
        correctIndex: 1,
        explanation:
          "Auto-CoT generates its own examples when you don't have good ones available.",
      },
    ],
  },
  "self-reflection-techniques": {
    title: "Self-Reflection & Self-Critique",
    questions: [
      {
        id: "sr-1",
        question: "What is the basic self-reflection pattern?",
        options: [
          "Write and submit",
          "Generate, evaluate, refine",
          "Ask and answer",
          "Create and destroy",
        ],
        correctIndex: 1,
        explanation:
          "The Generate → Evaluate → Refine pattern is the foundation of self-reflection.",
      },
      {
        id: "sr-2",
        question: "What is Chain of Verification?",
        options: [
          "Verifying the user's identity",
          "Fact-checking the model's own claims",
          "Checking for grammar errors",
          "Validating input format",
        ],
        correctIndex: 1,
        explanation:
          "Chain of Verification extracts factual claims and verifies each one independently.",
      },
    ],
  },
  "error-recovery-patterns": {
    title: "Error Recovery & Edge Case Handling",
    questions: [
      {
        id: "er-1",
        question: "What is defensive prompting?",
        options: [
          "Aggressive language in prompts",
          "Anticipating errors and building safeguards into prompts",
          "Defending against prompt injection",
          "Using only safe words",
        ],
        correctIndex: 1,
        explanation:
          "Defensive prompting anticipates errors and includes instructions to handle them gracefully.",
      },
      {
        id: "er-2",
        question: "What is graceful degradation?",
        options: [
          "Letting the model fail silently",
          "Getting partial results with clear explanations when full completion isn't possible",
          "Degrading the model's performance",
          "Removing features from the output",
        ],
        correctIndex: 1,
        explanation:
          "Graceful degradation gets useful partial results even when the full task can't be completed.",
      },
    ],
  },

  // ─── Module 3: Domain-Specific Prompting ──────────────────────────────────
  "prompting-for-code": {
    title: "Prompting for Code Generation",
    questions: [
      {
        id: "pc-1",
        question: "What does the CODE framework stand for?",
        options: [
          "Create, Optimize, Debug, Execute",
          "Context, Output, Dependencies, Examples",
          "Computer, Operating, Development, Environment",
          "Code, Organize, Design, Engineer",
        ],
        correctIndex: 1,
        explanation:
          "CODE stands for Context, Output, Dependencies, and Examples — the key elements for code prompts.",
      },
      {
        id: "pc-2",
        question: "What should you include when asking for code generation?",
        options: [
          "Just the task description",
          "Language, constraints, examples, and edge cases",
          "Only the programming language",
          "Previous code you've written",
        ],
        correctIndex: 1,
        explanation:
          "Good code prompts include language, constraints, examples, and edge cases.",
      },
    ],
  },
  "prompting-for-writing": {
    title: "Prompting for Content & Writing",
    questions: [
      {
        id: "pw-1",
        question: "What does the WRITE framework stand for?",
        options: [
          "Words, Research, Ideas, Templates, Editing",
          "Who, Register, Intent, Type, Examples",
          "Write, Review, Improve, Transform, Execute",
          "Writing, Reading, Investigating, Thinking, Exploring",
        ],
        correctIndex: 1,
        explanation:
          "WRITE stands for Who (audience), Register (tone), Intent (purpose), Type (format), Examples (reference).",
      },
      {
        id: "pw-2",
        question: "Why is specifying audience important in writing prompts?",
        options: [
          "It isn't important",
          "Different audiences require different tones, vocabulary, and approaches",
          "It makes the prompt longer",
          "It's required by the AI model",
        ],
        correctIndex: 1,
        explanation:
          "Audience determines tone, vocabulary, complexity, and what matters to the reader.",
      },
    ],
  },
  "prompting-for-analysis": {
    title: "Prompting for Data Analysis",
    questions: [
      {
        id: "pa-1",
        question: "What does the ANALYZE framework stand for?",
        options: [
          "Analyze, Navigate, Assess, Learn, Yield, Zero, Execute",
          "Ask, Numbers, Angle, Level, Yield, Zeal, Examples",
          "Assess, Notice, Analyze, Locate, Yield, Examine",
          "Ask, Negotiate, Assess, Locate, Yield, Examine",
        ],
        correctIndex: 1,
        explanation:
          "ANALYZE stands for Ask, Numbers, Angle, Level, Yield, Zeal, Examples.",
      },
      {
        id: "pa-2",
        question: "Why should you always ask for confidence levels in analysis?",
        options: [
          "It isn't necessary",
          "It helps you know when to verify conclusions with other sources",
          "It makes the analysis longer",
          "The model requires it",
        ],
        correctIndex: 1,
        explanation:
          "Confidence levels tell you which conclusions to trust and which to verify.",
      },
    ],
  },

  // ─── Module 4: Building AI Workflows ─────────────────────────────────────
  "prompt-chaining": {
    title: "Prompt Chaining & Sequential Processing",
    questions: [
      {
        id: "chain-1",
        question: "What is prompt chaining?",
        options: [
          "Using multiple prompts at once",
          "Breaking complex tasks into sequential steps where each output feeds the next",
          "Chaining together different AI models",
          "Creating very long prompts",
        ],
        correctIndex: 1,
        explanation:
          "Prompt chaining breaks complex tasks into steps, where each step's output becomes the next step's input.",
      },
      {
        id: "chain-2",
        question: "What is a branching chain pattern?",
        options: [
          "A chain that goes in circles",
          "Splitting into parallel paths that merge later",
          "A chain with no clear start or end",
          "A chain that branches off and never returns",
        ],
        correctIndex: 1,
        explanation:
          "Branching chains split into parallel paths (like analyzing multiple competitors) then merge results.",
      },
      {
        id: "chain-3",
        question: "Why include validation checkpoints between chain steps?",
        options: [
          "To make the chain longer",
          "To catch issues early before they propagate",
          "To confuse the model",
          "It's required by the framework",
        ],
        correctIndex: 1,
        explanation:
          "Validation checkpoints catch issues early, preventing errors from propagating through the chain.",
      },
    ],
  },
  "multi-agent-orchestration": {
    title: "Multi-Agent Orchestration",
    questions: [
      {
        id: "ma-1",
        question: "What is a multi-agent system?",
        options: [
          "A single AI with multiple capabilities",
          "Multiple AI agents working together, each with specialized roles",
          "A system with multiple users",
          "An AI that can do everything",
        ],
        correctIndex: 1,
        explanation:
          "Multi-agent systems assign different roles to different prompt instances, each specializing in one task.",
      },
      {
        id: "ma-2",
        question: "What is the debate pattern in multi-agent systems?",
        options: [
          "Agents arguing with each other",
          "Multiple agents argue different perspectives, then synthesize",
          "Agents compete to produce the best output",
          "A single agent considers multiple viewpoints",
        ],
        correctIndex: 1,
        explanation:
          "The debate pattern has agents argue different sides, then a synthesizer creates a balanced analysis.",
      },
      {
        id: "ma-3",
        question: "What is the voting pattern?",
        options: [
          "Agents vote on which prompt to use",
          "Multiple agents independently solve a problem, majority wins",
          "Users vote on the best output",
          "Agents take turns solving problems",
        ],
        correctIndex: 1,
        explanation:
          "Voting has multiple agents independently solve the same problem, then takes the majority answer.",
      },
    ],
  },
  "real-world-applications": {
    title: "Real-World Applications",
    questions: [
      {
        id: "rw-1",
        question: "What should you do before implementing an AI workflow?",
        options: [
          "Start coding immediately",
          "Define success metrics and map the existing workflow",
          "Buy the most expensive AI tools",
          "Hire more staff",
        ],
        correctIndex: 1,
        explanation:
          "Always define success metrics and understand the current workflow before automating.",
      },
      {
        id: "rw-2",
        question: "What is the most common pitfall in real-world AI implementation?",
        options: [
          "Using too many agents",
          "Automating a broken process",
          "Not using AI at all",
          "Spending too little money",
        ],
        correctIndex: 1,
        explanation:
          "Automating a broken process just makes the problems happen faster — fix the process first.",
      },
    ],
  },

  // ─── AI Tools Course · LLM Track ─────────────────────────────────────────
  "what-is-an-llm": {
    title: "What Is an LLM?",
    questions: [
      {
        id: "llm-1",
        question: "What is the core task every LLM is trained to do?",
        options: [
          "Search the internet",
          "Predict the next token in a sequence",
          "Store facts in a database",
          "Run calculations",
        ],
        correctIndex: 1,
        explanation:
          "LLMs are trained to predict the next token — everything else (chat, coding, agents) builds on that loop.",
      },
      {
        id: "llm-2",
        question: "What does 'autoregressive generation' mean?",
        options: [
          "The model generates all tokens at once",
          "Each generated token is fed back in as input for the next prediction",
          "The model rewrites its own training data",
          "The model responds only once per session",
        ],
        correctIndex: 1,
        explanation:
          "Autoregressive means output feeds back into input, one token at a time.",
      },
      {
        id: "llm-3",
        question: "Why do LLMs hallucinate?",
        options: [
          "They are programmed to lie",
          "They pick the most plausible next token, not the verified-true one",
          "Only small models do",
          "It is a bug that can be patched",
        ],
        correctIndex: 1,
        explanation:
          "The training objective is plausibility, not truth — so confident-sounding inventions are inevitable.",
      },
    ],
  },
  "context-window-basics": {
    title: "The Context Window",
    questions: [
      {
        id: "cw-1",
        question: "What does the context window include?",
        options: [
          "Only the system prompt",
          "Input tokens plus output tokens combined",
          "Only the latest user message",
          "The model's training data",
        ],
        correctIndex: 1,
        explanation:
          "The window is the total working memory — everything the model processes in one request.",
      },
      {
        id: "cw-2",
        question: "What typically happens when a prompt exceeds the context window?",
        options: [
          "The model answers anyway",
          "The oldest content is silently truncated",
          "The model upgrades its window",
          "The request is rejected with an explanation",
        ],
        correctIndex: 1,
        explanation:
          "Long inputs usually get truncated from the start — older context quietly disappears.",
      },
      {
        id: "cw-3",
        question: "Where should your most important instructions go?",
        options: [
          "In the middle of the prompt",
          "At the start and the end",
          "Only in the output format",
          "Nowhere special",
        ],
        correctIndex: 1,
        explanation:
          "Models attend most to the start and end of the context — the middle gets the least attention.",
      },
    ],
  },
  "temperature-explained": {
    title: "Temperature Explained",
    questions: [
      {
        id: "tmp-1",
        question: "What does a low temperature (0–0.3) do?",
        options: [
          "Makes output more creative",
          "Makes output predictable and deterministic",
          "Speeds up the model",
          "Adds randomness",
        ],
        correctIndex: 1,
        explanation:
          "Low temperature collapses the distribution onto the most likely tokens — great for code and math.",
      },
      {
        id: "tmp-2",
        question: "Which temperature is best for brainstorming ad headlines?",
        options: ["0.1", "0.9–1.5", "Exactly 0.5", "Temperature doesn't matter"],
        correctIndex: 1,
        explanation:
          "Creative tasks want variety — higher temperature lets the model explore unlikely-but-interesting tokens.",
      },
      {
        id: "tmp-3",
        question: "Lowering temperature makes a model smarter. True or false?",
        options: [
          "True — it improves reasoning",
          "False — it only makes output more consistent, not more correct",
          "True — only for math",
          "False — it makes output worse",
        ],
        correctIndex: 1,
        explanation:
          "Temperature controls consistency, not capability — a wrong answer at low temperature is confidently wrong.",
      },
    ],
  },
  "why-llms-hallucinate": {
    title: "Why LLMs Hallucinate",
    questions: [
      {
        id: "hal-1",
        question: "Which is NOT a root cause of hallucinations?",
        options: [
          "Knowledge cutoff after training",
          "Next-token objective optimizes plausibility",
          "The model intentionally deceives users",
          "Rare facts never seen during training",
        ],
        correctIndex: 2,
        explanation:
          "Hallucinations are structural, not intentional — the model has no concept of truth, only likelihood.",
      },
      {
        id: "hal-2",
        question: "Why is 'are you sure?' a weak hallucination check?",
        options: [
          "It works perfectly",
          "The model's confidence is not calibrated to truth — it will often double down",
          "It costs too many tokens",
          "Models refuse to answer",
        ],
        correctIndex: 1,
        explanation:
          "Confidence and correctness are separate; asking for certainty rarely reveals a hallucination.",
      },
      {
        id: "hal-3",
        question: "What is the strongest fix for hallucination over your own documents?",
        options: [
          "Lower temperature to 0",
          "Ground the answer in retrieved context (RAG) with citations",
          "Ask the model to be careful",
          "Use a bigger model",
        ],
        correctIndex: 1,
        explanation:
          "Putting the source material in the prompt removes the need to 'recall from nowhere'.",
      },
    ],
  },
  "agentic-loop-basics": {
    title: "Agentic Loops & AI Agents",
    questions: [
      {
        id: "agt-1",
        question: "What are the phases of the agentic loop?",
        options: [
          "Read, Write, Repeat",
          "Think, Act, Observe, Repeat, Answer",
          "Prompt, Respond, End",
          "Search, Download, Save",
        ],
        correctIndex: 1,
        explanation:
          "The loop is Think → Act → Observe → repeat until done, then a final answer.",
      },
      {
        id: "agt-2",
        question: "Who actually executes an agent's tool call?",
        options: [
          "The LLM itself",
          "Your application code, based on the model's proposed call",
          "The tool's vendor",
          "Another model",
        ],
        correctIndex: 1,
        explanation:
          "The LLM only proposes calls — your code runs them and returns results the model observes.",
      },
      {
        id: "agt-3",
        question: "Why must agents have stop conditions?",
        options: [
          "To make logs shorter",
          "Without them, agents can loop forever and burn tokens/budget",
          "APIs require them",
          "To speed up training",
        ],
        correctIndex: 1,
        explanation:
          "Max steps, budget caps, and clear completion criteria prevent runaway loops.",
      },
    ],
  },
  "rag-deep-dive": {
    title: "RAG — Retrieval-Augmented Generation",
    questions: [
      {
        id: "rag-1",
        question: "What are the four stages of the RAG pipeline?",
        options: [
          "Index, Retrieve, Augment, Generate",
          "Search, Copy, Paste, Print",
          "Train, Test, Deploy, Monitor",
          "Embed, Store, Query, Delete",
        ],
        correctIndex: 0,
        explanation:
          "Index the docs, retrieve relevant chunks, augment the prompt, then generate.",
      },
      {
        id: "rag-2",
        question: "What problem does RAG solve best?",
        options: [
          "Model speed",
          "Grounding answers in your own up-to-date documents",
          "Creative writing",
          "Token costs",
        ],
        correctIndex: 1,
        explanation:
          "RAG injects current, domain-specific facts at query time — no retraining needed.",
      },
      {
        id: "rag-3",
        question: "Which is the biggest lever for retrieval quality?",
        options: [
          "Using the biggest embedding model available",
          "Chunking on semantic boundaries with metadata and testing top-k",
          "Lowering temperature to 0",
          "Adding more documents",
        ],
        correctIndex: 1,
        explanation:
          "Retrieval quality is dominated by chunking strategy, metadata, and search tuning — not model size.",
      },
    ],
  },

  // ─── AI Tools Course · Prompt Engineering Track ──────────────────────────
  "prompt-anatomy": {
    title: "Anatomy of an Effective Prompt",
    questions: [
      {
        id: "paa-1",
        question: "Which five blocks make up an effective prompt?",
        options: [
          "Hello, World, Test, Debug, Deploy",
          "Role, Context, Task, Format, Constraints",
          "Subject, Verb, Object, Adverb, Noun",
          "Input, Output, Error, Retry, Done",
        ],
        correctIndex: 1,
        explanation:
          "Role, Context, Task, Format, and Constraints cover what the model needs to perform well.",
      },
      {
        id: "paa-2",
        question: "What is the difference between system and user prompts?",
        options: [
          "No difference",
          "System = persistent instructions; user = the current specific request",
          "System prompts are longer",
          "User prompts control the model",
        ],
        correctIndex: 1,
        explanation:
          "The system prompt sets consistent behavior; the user message carries the current task.",
      },
      {
        id: "paa-3",
        question: "What is the best response to a bad first output?",
        options: [
          "Give up on the model",
          "Iterate: refine the prompt based on what you got",
          "Raise the temperature",
          "Ask the same question again verbatim",
        ],
        correctIndex: 1,
        explanation:
          "Prompting is a loop — diagnose the gap and adjust the prompt, then re-run.",
      },
    ],
  },

  // ─── AI Tools Course · Prompt Engineering Track (Expanded) ───────────────
  "self-consistency-sampling": {
    title: "Self-Consistency",
    questions: [
      {
        id: "sc-1",
        question: "What does self-consistency do?",
        options: [
          "Run the same prompt once with more tokens",
          "Run a reasoning prompt several times and take the majority answer",
          "Lower the temperature to 0",
          "Use a bigger model",
        ],
        correctIndex: 1,
        explanation:
          "Self-consistency samples multiple reasoning paths and votes — wrong paths are diverse, the right one repeats.",
      },
      {
        id: "sc-2",
        question: "When does self-consistency help the most?",
        options: [
          "Creative writing",
          "Math and multi-step reasoning",
          "Remembering facts from training data",
          "Generating images",
        ],
        correctIndex: 1,
        explanation:
          "It fixes reasoning errors. Memory errors are shared across all runs, so voting doesn't help facts.",
      },
      {
        id: "sc-3",
        question: "What temperature should you use for the samples?",
        options: ["0 (identical answers)", "0.5–0.7 (varied paths)", "2.0 (maximum chaos)", "It doesn't matter"],
        correctIndex: 1,
        explanation:
          "Too low gives clones; too high gives noise. 0.5–0.7 gives diverse-but-sensible reasoning paths.",
      },
    ],
  },
  "tree-of-thought-prompting": {
    title: "Tree of Thought & Personas",
    questions: [
      {
        id: "tot-1",
        question: "How is tree of thought different from chain-of-thought?",
        options: [
          "It is faster",
          "It explores several reasoning branches before choosing",
          "It uses no reasoning at all",
          "It only works on code",
        ],
        correctIndex: 1,
        explanation:
          "CoT walks one path; ToT explores multiple branches and compares them before deciding.",
      },
      {
        id: "tot-2",
        question: "What makes a persona prompt effective?",
        options: [
          "'Be an expert'",
          "A specific role with expertise, perspective, and constraints",
          "Longer text",
          "Shouting in capitals",
        ],
        correctIndex: 1,
        explanation:
          "Specific personas ('senior tax consultant', 'skeptical code reviewer') steer what the model attends to.",
      },
    ],
  },
  "prompt-chaining-workflows": {
    title: "Prompt Chaining",
    questions: [
      {
        id: "chain-1",
        question: "What is the main benefit of prompt chaining over one giant prompt?",
        options: [
          "It always costs more tokens",
          "Focused context per step and review points between steps",
          "The model gets smarter",
          "It avoids all errors",
        ],
        correctIndex: 1,
        explanation:
          "Each step sees only what it needs, and you can catch and redirect errors between steps.",
      },
      {
        id: "chain-2",
        question: "What is a validation checkpoint?",
        options: [
          "A tool that runs the chain",
          "A step that checks the output before continuing",
          "The end of the chain",
          "A type of model",
        ],
        correctIndex: 1,
        explanation:
          "Validation steps catch issues early instead of letting errors propagate through the chain.",
      },
    ],
  },
  "pe-code-generation": {
    title: "Prompting for Code",
    questions: [
      {
        id: "cg-1",
        question: "What does the CODE framework stand for?",
        options: [
          "Create, Optimize, Debug, Execute",
          "Context, Output, Dependencies, Examples",
          "Code, Organize, Design, Engineer",
          "Compile, Operate, Deploy, Execute",
        ],
        correctIndex: 1,
        explanation:
          "Context, Output, Dependencies, Examples — the contract a code prompt needs.",
      },
      {
        id: "cg-2",
        question: "What should you ALWAYS do with generated code?",
        options: [
          "Deploy it immediately",
          "Run it, review it, and test edge cases",
          "Trust it because it looks confident",
          "Only use it in comments",
        ],
        correctIndex: 1,
        explanation:
          "Generated code can be subtly wrong — verify by running and testing, never trust it blindly.",
      },
    ],
  },
  "pe-content-writing": {
    title: "Prompting for Writing",
    questions: [
      {
        id: "cw-1",
        question: "What does the WRITE framework stand for?",
        options: [
          "Words, Research, Ideas, Templates, Editing",
          "Who, Register, Intent, Type, Examples",
          "Write, Review, Improve, Test, Edit",
          "Warm, Real, Intimate, Terse, Effective",
        ],
        correctIndex: 1,
        explanation:
          "Who (audience), Register (tone), Intent (purpose), Type (format), Examples (style reference).",
      },
      {
        id: "cw-2",
        question: "Why pin a concrete reader like 'Priya, a busy non-technical founder'?",
        options: [
          "It makes the prompt longer",
          "It forces a specific level of tone and vocabulary",
          "Models write better for named people",
          "It isn't useful",
        ],
        correctIndex: 1,
        explanation:
          "A concrete reader pins the register the model can't reach with 'general audience'.",
      },
    ],
  },
  "pe-prompt-injection-safety": {
    title: "Prompt Injection Defense",
    questions: [
      {
        id: "pi-1",
        question: "What is prompt injection?",
        options: [
          "A faster way to write prompts",
          "Hidden instructions inside untrusted text that hijack the model",
          "Using too many tokens",
          "A type of model fine-tuning",
        ],
        correctIndex: 1,
        explanation:
          "Attackers smuggle instructions into user input, web pages, or documents to override the system prompt.",
      },
      {
        id: "pi-2",
        question: "Which defense matters MOST for agents with destructive tools?",
        options: [
          "A longer system prompt",
          "Code-side guardrails: whitelisted tools and human approval",
          "Higher temperature",
          "More examples",
        ],
        correctIndex: 1,
        explanation:
          "Prompts alone can't stop a hijacked model — enforce tool whitelists and approval in your code.",
      },
      {
        id: "pi-3",
        question: "How should untrusted user text be placed in a prompt?",
        options: [
          "Directly next to the instructions",
          "Wrapped in tags like <user_input> and declared as data",
          "It should never be included",
          "Uppercase so the model knows",
        ],
        correctIndex: 1,
        explanation:
          "Delimiters + 'this is data, not instructions' separates content from commands.",
      },
    ],
  },
  "pe-prompt-evaluation": {
    title: "Evaluating Prompts",
    questions: [
      {
        id: "ev-1",
        question: "What is a golden set?",
        options: [
          "The best prompt you've written",
          "A fixed set of tasks with expected answers used to score changes",
          "A paid AI service",
          "A model's training data",
        ],
        correctIndex: 1,
        explanation:
          "A golden set is your regression test — run every prompt change against the same cases.",
      },
      {
        id: "ev-2",
        question: "When A/B testing prompts, what should you change at a time?",
        options: [
          "Everything at once for speed",
          "One variable, with the golden set fixed",
          "The golden set, to match the prompt",
          "Nothing — prompts can't be tested",
        ],
        correctIndex: 1,
        explanation:
          "Change one thing and keep the test set fixed — otherwise you can't tell what caused the change.",
      },
    ],
  },
};
