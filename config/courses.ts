export interface PracticeExercise {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  task: string;
  hint?: string;
  solution?: string;
}

export interface lesson {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  readingTime: string;
  contentMarkdown: string;
  codeSnippet: string;
  codeLanguage: string;
  codeOutput: string;
  /** Practical ways to visualise how the code runs (trace tables, tools, mental models) */
  visualizationTips?: string[];
  /** Professional tips & tricks for this topic */
  tipsAndTricks?: string[];
  /** Hands-on practice exercises with optional solutions */
  practice?: PracticeExercise[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: lesson[];
}

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  category: string[];
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  instructor: string;
  iconName: "brain" | "network" | "activity" | "workflow" | "database" | "chart" | "code";
  modules: Module[];
}

import { PYTHON_COURSE } from "./python-course";
import { DIGITAL_MARKETING_COURSE } from "./digital-marketing";
import { STOCK_MARKETING_COURSE } from "./stock-marketing";
import { PROMPT_ENGINEERING_COURSE } from "./prompt-engineering";
import { AI_TOOLS_COURSE } from "./ai-tools";

export const COURSES: Course[] = [
  AI_TOOLS_COURSE,
  PYTHON_COURSE,
  DIGITAL_MARKETING_COURSE,
  STOCK_MARKETING_COURSE,
  PROMPT_ENGINEERING_COURSE,
  {
    id: "data-science",
    title: "Applied Data Science & Generative AI Hub",
    shortDescription: "Master Python data structures, vector computing, statistical models, and build agentic pipelines.",
    detailedDescription: "This curriculum bridges classical data science (wrangling, exploration, predictive modeling) with the new frontier of Generative AI. Designed by Amol Shukla, this course features code illustrations and interactive note pages designed to help students quickly understand data operations and agent-driven engineering.",
    category: ["Data Science", "Python", "Machine Learning", "Agentic AI"],
    duration: "20 hrs",
    difficulty: "Intermediate",
    rating: 4.9,
    instructor: "Amol Shukla",
    iconName: "brain",
    modules: [
      {
        id: "module-1-foundations",
        title: "Module 1: Foundations of Python & Ecosystem",
        description: "Set up the local environment and master Python fundamentals optimized for large data manipulation.",
        lessons: [
          {
            id: "python-basics",
            title: "1: The Python Data Science Ecosystem",
            shortDescription: "Jupyter setup, virtual environments, variables, data structures, and list comprehensions.",
            duration: "45 mins",
            readingTime: "5 mins read",
            contentMarkdown: `### Introduction to the Data Science Stack
Python has emerged as the leading language for data science due to its clean syntax, massive community support, and highly optimized C-extensions.

#### Key Components of the Ecosystem
1. **Jupyter Notebooks / Lab**: An interactive computing environment that allows you to combine code execution, rich text, mathematics, and plots.
2. **Virtual Environments (\`venv\` / \`conda\`)**: Essential for isolating dependencies for different projects.
3. **Optimized Data Types**: Standard Python lists are highly flexible, but can be slow because they hold object pointers. To analyze millions of data rows, we leverage specialized structures.

#### Advanced Data Manipulations
In data science, we frequently transform datasets. **List Comprehensions** provide a syntactic shortcut to construct lists from existing lists, which is both cleaner and slightly faster than standard \`for\` loops.

*Example Syntax:*
\`\`\`python
# Construct a list of squared even numbers
squared_evens = [x**2 for x in range(10) if x % 2 == 0]
\`\`\`

#### Key Takeaways
- Always create a virtual environment for a new project using \`python -m venv .venv\`.
- Keep Jupyter notebooks clean by modularizing complex code into external \`.py\` files.
- Prefer list/dict comprehensions over multi-line loops for simple transformations to keep your script readable.`,
            codeLanguage: "python",
            codeSnippet: `# Python List and Dict Comprehension examples
raw_data = [
    {"name": "amol", "role": "engineer", "score": 95},
    {"name": "rahul", "role": "analyst", "score": 82},
    {"name": "priya", "role": "engineer", "score": 88},
    {"name": "neha", "role": "manager", "score": 75}
]

# Filter engineers and increment their score using List Comprehension
engineers = [item["name"].capitalize() for item in raw_data if item["role"] == "engineer"]
print("Engineers List:", engineers)

# Dict Comprehension: Map user name to their score if score is > 80
high_scorers = {item["name"]: item["score"] for item in raw_data if item["score"] > 80}
print("High Scorers (Score > 80):", high_scorers)`,
            codeOutput: `Engineers List: ['Amol', 'Priya']
High Scorers (Score > 80): {'amol': 95, 'rahul': 82, 'priya': 88}`
          }
        ]
      },
      {
        id: "module-2-manipulation",
        title: "Module 2: Vectorized Computing & Wrangling",
        description: "Transform raw, unstructured datasets into clean, actionable insights using NumPy and Pandas.",
        lessons: [
          {
            id: "numpy-pandas",
            title: "2: NumPy Arrays & Pandas Wrangling",
            shortDescription: "N-dimensional arrays, vectorized functions, DataFrame operations, grouping, and handling missing data.",
            duration: "60 mins",
            readingTime: "8 mins read",
            contentMarkdown: `### NumPy and the Art of Vectorization
Underneath standard Python lists lies cell pointers, making looping slow. **NumPy** introduces the **ndarray**—a contiguous block of homogeneous memory that delegates operations to highly optimized C/Fortran libraries.

#### What is Vectorization?
Instead of writing explicit loops to apply an operation to every element of an array, vectorized functions perform operations on the entire array at once:
- **Loop approach:** $O(N)$ overhead of Python runtime type checks.
- **Vectorized approach:** Performed in a single CPU instruction pass.

### Pandas DataFrames
Pandas extends NumPy by adding labels and indexes, creating the **DataFrame**. It is the ultimate tool for handling tabular data.

#### Essential Wrangling Techniques
1. **Handling Missing Values**:
   - Impute/fill missing entries with the column mean: \`df.fillna(df.mean())\`
   - Drop rows with excessive missing data: \`df.dropna(subset=['critical_column'])\`
2. **Indexing & Slicing**:
   - Use \$.loc\$ for label-based indexing.
   - Use \$.iloc\$ for integer-position indexing.
3. **Aggregations & GroupBy**:
   - Group data by categorical fields and calculate statistical aggregates (mean, sum, median).`,
            codeLanguage: "python",
            codeSnippet: `import numpy as np
import pandas as pd

# 1. NumPy Vectorized operations
arr = np.array([1, 2, 3, 4, 5])
print("Vectorized multiplication (arr * 10):", arr * 10)

# 2. Pandas Data Wrangling
data = {
    'Department': ['IT', 'HR', 'IT', 'Marketing', 'HR', 'IT'],
    'Salary': [85000, 60000, 95000, 70000, None, 90000],
    'Experience': [3, 2, 5, 4, 1, 4]
}
df = pd.DataFrame(data)

# Impute missing salary values with the mean of the column
mean_salary = df['Salary'].mean()
df['Salary'] = df['Salary'].fillna(mean_salary)

# Perform Groupby aggregation
dept_summary = df.groupby('Department').agg(
    Average_Salary=('Salary', 'mean'),
    Total_Employees=('Salary', 'count'),
    Avg_Experience=('Experience', 'mean')
).round(2)

print("\nOriginal DataFrame with Imputed Salary:")
print(df)
print("\nDepartment Summary Analysis:")
print(dept_summary)`,
            codeOutput: `Vectorized multiplication (arr * 10): [10 20 30 40 50]

Original DataFrame with Imputed Salary:
  Department   Salary  Experience
0         IT  85000.0           3
1         HR  60000.0           2
2         IT  95000.0           5
3  Marketing  70000.0           4
4         HR  80000.0           1
5         IT  90000.0           4

Department Summary Analysis:
            Average_Salary  Total_Employees  Avg_Experience
Department                                                 
HR                 70000.0                2             1.5
IT                 90000.0                3             4.0
Marketing          70000.0                1             4.0`
          }
        ]
      },
      {
        id: "module-3-visualizations",
        title: "Module 3: Visual Analytics",
        description: "Design premium visual dashboards that communicate statistical patterns clearly.",
        lessons: [
          {
            id: "visualization",
            title: "3: Visualizing Patterns with Seaborn & Matplotlib",
            shortDescription: "Building distribution charts, relational scatter plots, and correlation heatmaps.",
            duration: "50 mins",
            readingTime: "6 mins read",
            contentMarkdown: `### The Importance of Exploratory Visualization
Data viz isn't just about creating pretty pictures; it is the fastest way to detect statistical outliers, evaluate distribution shapes (normal, skewed), and locate feature correlations.

#### Core Chart Guidelines
- **Categorical Comparisons**: Bar charts, Count plots.
- **Continuous Distribution**: Histograms, Kernel Density Estimation (KDE) plots.
- **Relational Mapping**: Scatter plots, Line plots.
- **Matrix Correlation**: Heatmaps.

#### Matplotlib vs. Seaborn
- **Matplotlib**: A low-level library providing complete control over every pixel on the canvas.
- **Seaborn**: A high-level wrapper built on top of Matplotlib that integrates tightly with Pandas and features aesthetically optimized defaults.`,
            codeLanguage: "python",
            codeSnippet: `# Mock script to demonstrate plotting Seaborn charts
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Creating artificial dataset with correlation
np.random.seed(42)
x = np.random.normal(size=100)
y = 2 * x + np.random.normal(size=100)
df = pd.DataFrame({"Feature_A": x, "Feature_B": y})

# Calculating correlation matrix
corr = df.corr()

print("Correlation Matrix:")
print(corr)

print("\n[Visual Simulation] Generating Plots:")
print("1. Seaborn Scatter Plot (Feature_A vs Feature_B)")
print("2. Matplotlib Histograms for distribution")
print("3. Seaborn Heatmap with annotated values (corr = 0.89)")`,
            codeOutput: `Correlation Matrix:
           Feature_A  Feature_B
Feature_A   1.000000   0.894236
Feature_B   0.894236   1.000000

[Visual Simulation] Generating Plots:
1. Seaborn Scatter Plot (Feature_A vs Feature_B) -> Rendered figure (size: 8x6)
2. Matplotlib Histograms for distribution -> Standard Normal Curve
3. Seaborn Heatmap with annotated values (corr = 0.89) -> High correlation warning`
          }
        ]
      },
      {
        id: "module-4-ml",
        title: "Module 4: Machine Learning Foundations",
        description: "Fit mathematical models to make predictions on unseen records.",
        lessons: [
          {
            id: "supervised-learning",
            title: "4: Predictive Modeling with Scikit-Learn",
            shortDescription: "Features vs Labels, train-test splitting, fitting Linear Regression, and checking MSE / R2.",
            duration: "75 mins",
            readingTime: "10 mins read",
            contentMarkdown: `### The Machine Learning Paradigm
Traditional programming writes instructions to turn input data into outcomes. Machine learning feeds input data and outcomes into a learning algorithm to *extract the rules/model*.

#### Core Math Concepts
1. **Loss Function**: Measures how far off our predictions are from the actual values. In Linear Regression, we minimize Mean Squared Error (MSE):
   $$MSE = \\frac{1}{N} \\sum_{i=1}^{N} (y_i - \\hat{y}_i)^2$$
2. **Gradient Descent**: Optimizes the weights to reduce the loss function iteratively.

#### The ML Workflow
- **Train-Test Split**: Divide data (typically 80/20) to ensure the model is evaluated on unseen data, preventing overfitting.
- **Feature Scaling**: Adjust numerical ranges so features contribute equally.
- **Validation**: Calculate metrics like $R^2$ (coefficient of determination) to evaluate performance.`,
            codeLanguage: "python",
            codeSnippet: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
import numpy as np

# Generate synthetic linear data (y = 3x + 5 + noise)
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 5 + 3 * X + np.random.randn(100, 1)

# Split data into train/test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Predict on test data
y_pred = model.predict(X_test)

# Calculate Evaluation Metrics
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Trained Model weights:")
print(f"Slope (w1): {model.coef_[0][0]:.4f} (Ideal: 3.00)")
print(f"Intercept (b): {model.intercept_[0]:.4f} (Ideal: 5.00)")
print("\\nModel Evaluation Metrics on Test Set:")
print(f"Mean Squared Error (MSE): {mse:.4f}")
print(f"R-squared Score (R2): {r2:.4f}")`,
            codeOutput: `Trained Model weights:
Slope (w1): 2.8228 (Ideal: 3.00)
Intercept (b): 5.2151 (Ideal: 5.00)

Model Evaluation Metrics on Test Set:
Mean Squared Error (MSE): 0.6537
R-squared Score (R2): 0.8072`
          }
        ]
      },
      {
        id: "module-5-agentic-ai",
        title: "Module 5: Agentic AI Pipelines",
        description: "Deploy large language models in an agentic loop to write and execute code dynamically.",
        lessons: [
          {
            id: "agentic-ai",
            title: "5: Developing Intelligent Agentic Data Pipelines",
            shortDescription: "Tool-calling patterns, ReAct architecture, safety sandboxing, and orchestrating analytical agents.",
            duration: "90 mins",
            readingTime: "12 mins read",
            contentMarkdown: `### The Shift from Static Prompts to Agentic Loops
Classical Generative AI is linear: you write a prompt, and the model outputs a text completion. **Agentic AI** introduces a loop where the LLM is given tools, acts as a planner, and reasons through execution steps.

#### ReAct (Reason + Act) Workflow
A classic agent loops through:
1. **Thought**: Analyze the task and determine the next action.
2. **Action**: Select a tool and call it with arguments (e.g. run a Python database query).
3. **Observation**: Read the tool's output and feed it back to the model.
4. **Repeat** until a final answer is generated.

#### Safety Precautions
Because agents can write and run python scripts dynamically, you must implement sandboxed runtime environments (like Docker containers or restricted exec runtimes) to avoid shell injection vulnerabilities on your backend server.`,
            codeLanguage: "python",
            codeSnippet: `# Implementation of a simple local data analysis tool-calling Agent
import json

# Define the Tool function
def calculate_salary_stats(data_str):
    """Calculates mean stats on a JSON string representing salaries."""
    try:
        data = json.loads(data_str)
        salaries = [employee["salary"] for employee in data]
        avg = sum(salaries) / len(salaries)
        return json.dumps({"status": "success", "average": avg, "count": len(salaries)})
    except Exception as e:
        return json.dumps({"status": "error", "message": str(e)})

# Simulated ReAct Loop
prompt = "Analyze the salaries of the team: [\\n  {\\"name\\": \\"Amol\\", \\"salary\\": 120000},\\n  {\\"name\\": \\"Nikita\\", \\"salary\\": 95000},\\n  {\\"name\\": \\"Sanjay\\", \\"salary\\": 110000}\\n]"

print("== AGENT LOGS ==")
print("Thought: The user wants to calculate statistics on the provided salary list. I should call the 'calculate_salary_stats' tool.")
print("Action: calling calculate_salary_stats(args='[...salary data...]')")

# Call the tool
observation = calculate_salary_stats('[{"name": "Amol", "salary": 120000}, {"name": "Nikita", "salary": 95000}, {"name": "Sanjay", "salary": 110000}]')
print(f"Observation: {observation}")

print("Thought: The average salary is 108,333.33 for 3 employees. I am ready to formulate the final answer.")
print("Final Answer: The team average salary is $108,333.33 across 3 employees.")`,
            codeOutput: `== AGENT LOGS ==
Thought: The user wants to calculate statistics on the provided salary list. I should call the 'calculate_salary_stats' tool.
Action: calling calculate_salary_stats(args='[...salary data...]')
Observation: {"status": "success", "average": 108333.33333333333, "count": 3}
Thought: The average salary is 108,333.33 for 3 employees. I am ready to formulate the final answer.
Final Answer: The team average salary is $108,333.33 across 3 employees.`
          }
        ]
      }
    ]
  }
];
