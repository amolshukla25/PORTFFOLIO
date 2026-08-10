export interface Lecture {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  readingTime: string;
  contentMarkdown: string;
  codeSnippet: string;
  codeLanguage: string;
  codeOutput: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
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

export const COURSES: Course[] = [
  {
    id: "python-basics",
    title: "Python Foundations for Engineers",
    shortDescription: "Master control structures, nested loops, functional scoping, and object-oriented programming (OOP) paradigms.",
    detailedDescription: "Designed for beginners and developers transitioning to Python, this course provides a rigorous foundation in language core features. You will study execution scoping, control loops, functions, and model real-world business items using Object-Oriented structures.",
    category: ["Python", "Programming Basics", "OOP Concepts"],
    duration: "12 hrs",
    difficulty: "Beginner",
    rating: 4.8,
    instructor: "Amol Shukla",
    iconName: "code",
    modules: [
      {
        id: "python-syntax-control",
        title: "Module 1: Syntax & Program Flow",
        description: "Variables, basic operations, input/output pipelines, conditional branching, and iteration loops.",
        lectures: [
          {
            id: "variables-io",
            title: "Lecture 1: Variables, Operations & Input/Output",
            shortDescription: "Type casting, dynamic variable allocation, printing statements, and standard inputs.",
            duration: "35 mins",
            readingTime: "4 mins read",
            contentMarkdown: `### Dynamic Typing in Python
Python is a dynamically typed language, meaning variables are references to objects in memory, and their types do not need to be declared explicitly.

#### Memory References
When you declare \`x = 10\`, Python allocates an integer object in heap memory and points the label \`x\` to it. If you subsequently assign \`x = "hello"\`, the variable label is simply pointed to a new string object, leaving the previous integer eligible for automatic garbage collection.

#### Common Data Casting
- Convert values to integers using \`int(value)\`
- Convert values to strings using \`str(value)\`
- Convert values to floats using \`float(value)\``,
            codeLanguage: "python",
            codeSnippet: `# Variables and casting demonstration
age = "24"  # String representation
print("Type before casting:", type(age))

# Cast string to integer to perform math addition
age_int = int(age)
next_year_age = age_int + 1
print("Type after casting:", type(age_int))
print(f"Age next year: {next_year_age}")

# Dynamic type swap
label = 100
print("Label type:", type(label))
label = "Dynamic Label Swapped"
print("Label new type:", type(label))`,
            codeOutput: `Type before casting: <class 'str'>
Type after casting: <class 'int'>
Age next year: 25
Label type: <class 'int'>
Label new type: <class 'str'>`
          },
          {
            id: "loops-conditionals",
            title: "Lecture 2: Conditional Branches & Loops",
            shortDescription: "Evaluating truth tables, nested loops, break, and continue instructions.",
            duration: "45 mins",
            readingTime: "6 mins read",
            contentMarkdown: `### Controlling Execution Flow
A program is sequential by default. Conditionals and loops allow code branches to execute dynamically based on logical statements.

#### Comparison and Logic
- **Conditionals (\`if/elif/else\`):** Route the code path depending on boolean state evaluation.
- **Loops (\`for\`, \`while\`):** Repeat instructions. The \`for\` loop is used to iterate over a predetermined sequence (like a list, range, or dictionary keys). The \`while\` loop runs continuously until a predicate condition evaluates to false.

#### Loop Interrupts
- \`break\`: Exits the loop scope immediately.
- \`continue\`: Skips the rest of the current loop iteration and moves to the next pass.`,
            codeLanguage: "python",
            codeSnippet: `# Grade checker script showcasing conditionals and loops
scores = [45, 88, 72, 95, 60, 30]
passing_score = 60

print("Evaluating exam scores:")
for score in scores:
    if score >= 90:
        print(f"Score {score}: Grade A+ (Excellent!)")
    elif score >= passing_score:
        print(f"Score {score}: Passing grade")
    else:
        # Check if failing critically
        if score < 40:
            print(f"Score {score}: Failed critically (Needs revision)")
            continue
        print(f"Score {score}: Failed")`,
            codeOutput: `Evaluating exam scores:
Score 45: Failed
Score 88: Passing grade
Score 72: Passing grade
Score 95: Grade A+ (Excellent!)
Score 60: Passing grade
Score 30: Failed critically (Needs revision)`
          }
        ]
      },
      {
        id: "python-oop",
        title: "Module 2: Object-Oriented Python",
        description: "Organize script logic using classes, object initializers, inheritance structures, and encapsulation.",
        lectures: [
          {
            id: "classes-objects",
            title: "Lecture 3: Classes, Instances, & Inheritance",
            shortDescription: "Object structure, __init__ constructor, instance parameters, methods, and parent-child overrides.",
            duration: "50 mins",
            readingTime: "7 mins read",
            contentMarkdown: `### The OOP Paradigm
Object-Oriented Programming (OOP) is a design template that groups related variables (attributes) and functions (methods) into cohesive packages called **Objects**.

#### Definitions
- **Class**: The blueprint template defining structure and actions.
- **Instance**: A concrete object initialized in memory from a Class template.
- **Constructor (\`__init__\`):** The initializer method run automatically when a new object is instantiated.
- **Inheritance**: Allows a child class to inherit attributes and methods from a parent class, enabling reusable code structures.`,
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
Name: Amol Shukla, Role: Instructor | Dept: AI Engineering | Course: Data Science`
          }
        ]
      }
    ]
  },
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
        lectures: [
          {
            id: "python-basics",
            title: "Lecture 1: The Python Data Science Ecosystem",
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
        lectures: [
          {
            id: "numpy-pandas",
            title: "Lecture 2: NumPy Arrays & Pandas Wrangling",
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
        lectures: [
          {
            id: "visualization",
            title: "Lecture 3: Visualizing Patterns with Seaborn & Matplotlib",
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
        lectures: [
          {
            id: "supervised-learning",
            title: "Lecture 4: Predictive Modeling with Scikit-Learn",
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
        lectures: [
          {
            id: "agentic-ai",
            title: "Lecture 5: Developing Intelligent Agentic Data Pipelines",
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
