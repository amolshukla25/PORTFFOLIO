import type { Module } from "../courses";

export const MODULE_3: Module = {
  id: "module-3-domain-specific",
  title: "Module 3: Domain-Specific Prompting",
  description:
    "Master specialized prompting techniques for coding, writing, analysis, and other professional domains.",
  lessons: [
    {
      id: "prompting-for-code",
      title: "Lesson 7: Prompting for Code Generation",
      shortDescription:
        "Write effective prompts for generating, debugging, and refactoring code across programming languages.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Code Generation Prompts

Getting LLMs to write code effectively requires understanding how to communicate technical requirements clearly. The best code prompts are specific about language, context, and constraints.

#### The CODE Framework

| Letter | Meaning | What to Include |
|---|---|---|
| **C** | Context | What is the project? What does the code need to do? |
| **O** | Output | What language, framework, style? |
| **D** | Dependencies | What libraries/APIs are available? |
| **E** | Examples | Show similar code or expected behavior |

> **Mental model:** Think of code prompts like giving specs to a developer — the more specific your requirements, the less revision needed.

---

### Generating New Code

**Basic Code Prompt:**

\`\`\`
Write a Python function that:
- Takes a list of dictionaries with 'name' and 'score' keys
- Returns a new list sorted by score in descending order
- Handles empty lists gracefully
- Includes type hints and docstring
\`\`\`

**Advanced Code Prompt:**

\`\`\`
You are a senior Python developer following PEP 8 style guidelines.

Create a function with these specifications:
- Function name: calculate_moving_average
- Input: data (list of floats), window_size (int)
- Output: list of floats (moving averages)
- Edge cases: empty data → empty list, window_size > len(data) → None
- Include: type hints, docstring with examples, error handling

Dependencies: Only use standard library (no numpy/pandas)

Example usage:
>>> calculate_moving_average([1, 2, 3, 4, 5], 3)
[2.0, 3.0, 4.0]
\`\`\`

**Key elements for code generation:**
1. Specify the programming language explicitly
2. Describe inputs, outputs, and edge cases
3. Mention style preferences (PEP 8, etc.)
4. Include example usage
5. Specify what libraries are available

---

### Debugging Code Prompts

**When you have an error:**

\`\`\`
I'm getting this error in my Python code:

[Error message]

Here's the code:
[Code snippet]

What's causing this error and how do I fix it?
\`\`\`

**For systematic debugging:**

\`\`\`
This code should [expected behavior] but instead [actual behavior]:

[Code]

Please:
1. Identify the bug(s)
2. Explain why they occur
3. Provide the corrected code
4. Explain what changed and why
\`\`\`

**When you don't understand the error:**

\`\`\`
I don't understand why this code fails:

[Code]
[Error message]

Please:
1. Explain what the error means in plain English
2. Walk through the code execution step-by-step
3. Identify where it goes wrong
4. Provide a fix with explanation
\`\`\`

---

### Refactoring Code Prompts

**Basic refactoring:**

\`\`\`
Refactor this code to be:
- More readable
- Following [language] best practices
- Better modularized

Here's the current code:
[Code]

Keep the same functionality but improve the structure.
\`\`\`

**Performance optimization:**

\`\`\`
This function works but is too slow for large datasets:

[Code]

Optimize it for:
- Better time complexity
- Memory efficiency
- Maintaining readability

Explain what optimizations you applied.
\`\`\`

**Code review style:**

\`\`\`
Review this code as a senior developer would:

[Code]

Provide feedback on:
1. Correctness
2. Performance
3. Readability
4. Security concerns
5. Best practices violations

Then provide an improved version.
\`\`\`

---

### Testing Code Prompts

**Unit test generation:**

\`\`\`
Write unit tests for this function:

[Function code]

Requirements:
- Use pytest framework
- Cover normal cases, edge cases, and error cases
- Include descriptive test names
- Aim for 90%+ code coverage
\`\`\`

**Test case generation:**

\`\`\`
For this function: [function signature]

Generate test cases that cover:
1. Happy path (expected inputs)
2. Boundary values (min, max, empty)
3. Error conditions (invalid inputs)
4. Edge cases specific to the logic

Present as a table with: Test Name | Input | Expected Output | Description
\`\`\`

---

### Code Explanation Prompts

**For learning:**

\`\`\`
Explain this code to a junior developer:

[Code]

Break it down:
1. What does this code do at a high level?
2. Line-by-line explanation
3. Key concepts used
4. Potential improvements
5. Common mistakes to avoid
\`\`\`

**For documentation:**

\`\`\`
Generate comprehensive documentation for this code:

[Code]

Include:
1. Overview description
2. Function/class documentation (JSDoc/docstring format)
3. Parameter descriptions
4. Return value documentation
5. Usage examples
6. Known limitations
\`\`\`

---

### Language-Specific Considerations

| Language | Key Prompt Details |
|---|---|
| **Python** | Mention PEP 8, type hints, virtual environments |
| **JavaScript/TypeScript** | Specify ES6+, async/await, module system |
| **React** | Hooks vs class components, state management approach |
| **SQL** | Database type, schema context, query optimization |
| **Go** | Error handling patterns, goroutines if applicable |
| **Rust** | Ownership model, unsafe blocks if needed |

---

### Common Mistakes to Avoid

- **Mistake:** Vague requirements like "make it better" — **Fix:** Specify exactly what improvements you want.
- **Mistake:** Not providing context about existing codebase — **Fix:** Share relevant code structure and conventions.
- **Mistake:** Forgetting to mention constraints — **Fix:** Always specify language version, available libraries, etc.
- **Mistake:** Not testing generated code — **Fix:** Always run and verify code before using it.

### Professional Tips & Tricks

- For complex functions, break into smaller prompts (one per component).
- Always test generated code in a safe environment first.
- Include error handling requirements upfront — don't add it later.
- Use "show your reasoning" for complex algorithms.

---

### Key Takeaways

- Use the CODE framework: Context, Output, Dependencies, Examples.
- Be explicit about language, style, and constraints.
- For debugging, include both the code and the error message.
- For refactoring, specify what aspects to improve.
- Always test generated code before using it in production.

**Next up:** Prompting for content creation and writing tasks.`,
      codeLanguage: "python",
      codeSnippet: `# Code Prompt Examples

## Example 1: Function Generation
Prompt: "Write a Python function to validate email addresses using regex"

Generated Code:
import re
from typing import Optional

def validate_email(email: str) -> bool:
    """
    Validate an email address using regex.
    
    Args:
        email: The email address to validate
        
    Returns:
        True if valid, False otherwise
        
    Examples:
        >>> validate_email("user@example.com")
        True
        >>> validate_email("invalid-email")
        False
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

## Example 2: Debugging Prompt
Prompt: "This code crashes with IndexError. Fix it."

Code:
def get_middle(lst):
    return lst[len(lst) // 2]

Fix: Add empty list check
def get_middle(lst):
    if not lst:
        return None
    return lst[len(lst) // 2]`,
      codeOutput: `Code Prompt Examples

## Example 1: Function Generation
Prompt: "Write a Python function to validate email addresses using regex"

Generated Code:
import re
from typing import Optional

def validate_email(email: str) -> bool:
    """
    Validate an email address using regex.
    
    Args:
        email: The email address to validate
        
    Returns:
        True if valid, False otherwise
        
    Examples:
        >>> validate_email("user@example.com")
        True
        >>> validate_email("invalid-email")
        False
    """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

## Example 2: Debugging Prompt
Prompt: "This code crashes with IndexError. Fix it."

Code:
def get_middle(lst):
    return lst[len(lst) // 2]

Fix: Add empty list check
def get_middle(lst):
    if not lst:
        return None
    return lst[len(lst) // 2]`,
      visualizationTips: [
        "Create a code prompt checklist with all required elements.",
        "Draw a flowchart for the debugging prompt process.",
        "Compare good vs bad code prompts side by side.",
      ],
      tipsAndTricks: [
        "For complex code, break into multiple prompts — one per function.",
        "Always specify the language version and available libraries.",
        "Include example inputs and outputs for clarity.",
      ],
      practice: [
        {
          id: "practice-code-prompt",
          title: "Code Generation Prompt",
          difficulty: "Medium",
          task: "Write a detailed prompt that would generate a Python class for managing a todo list with add, remove, complete, and list operations.",
          hint: "Include class structure, methods, data storage, and example usage.",
          solution: `Code Prompt:
"You are a Python developer creating a TodoList class.

Requirements:
- Class name: TodoList
- Storage: List of dictionaries with 'id', 'task', 'completed', 'created_at'
- Methods:
  - add_task(task: str) -> int: Add task, return its ID
  - remove_task(task_id: int) -> bool: Remove task, return success
  - complete_task(task_id: int) -> bool: Mark as completed
  - list_tasks(show_completed: bool = True) -> List[dict]: Return tasks
  - get_stats() -> dict: Return {total, completed, pending}

Include:
- Type hints
- Docstrings
- Error handling for invalid IDs
- Auto-incrementing IDs

Example:
todo = TodoList()
id1 = todo.add_task('Buy groceries')
todo.complete_task(id1)
print(todo.list_tasks())  # Shows completed task"`,
        },
        {
          id: "practice-debug-prompt",
          title: "Debug Prompt Exercise",
          difficulty: "Easy",
          task: "Write a debugging prompt for this code that should calculate factorial but returns wrong results for negative numbers and zero.",
          hint: "Include the code, expected behavior, actual behavior, and error message.",
          solution: `Debug Prompt:
"This factorial function returns incorrect results:

Code:
def factorial(n):
    result = 1
    for i in range(1, n):
        result *= i
    return result

Expected behavior:
- factorial(5) = 120
- factorial(0) = 1
- factorial(-1) should raise ValueError

Actual behavior:
- factorial(5) = 24 (wrong!)
- factorial(0) = 1 (correct by accident)
- factorial(-1) = 1 (should error)

Please identify and fix the bugs, explaining each issue."`,
        },
      ],
    },
    {
      id: "prompting-for-writing",
      title: "Lesson 8: Prompting for Content & Writing",
      shortDescription:
        "Master prompts for blog posts, marketing copy, technical writing, and creative content.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Writing Prompts That Work

Getting LLMs to produce high-quality writing requires understanding how to specify tone, style, audience, and purpose clearly.

#### The WRITE Framework

| Letter | Meaning | What to Include |
|---|---|---|
| **W** | Who | Target audience and their needs |
| **R** | Register | Tone, formality level, voice |
| **I** | Intent | Purpose of the content |
| **T** | Type | Format, length, structure |
| **E** | Examples | Reference content or style guides |

> **Mental model:** Think of writing prompts like giving a creative brief — the clearer the direction, the less revision needed.

---

### Blog Post Prompts

**Basic blog prompt:**

\`\`\`
Write a 1000-word blog post about [topic].

Target audience: [description]
Tone: [professional/casual/educational]
Purpose: [inform/persuade/entertain]
Include: [key points to cover]
\`\`\`

**Advanced blog prompt:**

\`\`\`
Write an engaging blog post for [audience] about [topic].

Structure:
1. Hook headline (under 10 words)
2. Introduction that identifies reader's pain point
3. 3-5 main sections with H2 headers
4. Actionable tips in each section
5. Conclusion with clear CTA

Tone: Conversational but authoritative (like HubSpot's blog)
Length: 1200-1500 words
SEO: Target keyword "[keyword]", include in title and first paragraph

Style guidelines:
- Short paragraphs (2-3 sentences)
- Use bullet points for lists
- Include at least 2 examples or case studies
- End sections with transition sentences

Do NOT:
- Use jargon without explanation
- Make unsupported claims
- Use clickbait or sensationalism
\`\`\`

---

### Marketing Copy Prompts

**Email subject lines:**

\`\`\`
Generate 10 email subject lines for [campaign/product].

Requirements:
- Under 50 characters each
- Include urgency or curiosity
- A/B test variations (question vs statement, emoji vs no emoji)
- Target audience: [description]

Show each with expected open rate reasoning.
\`\`\`

**Landing page copy:**

\`\`\`
Write landing page copy for [product/service].

Page structure:
1. Hero headline + subheadline
2. 3 benefit statements with icons
3. Social proof section
4. Features breakdown
5. FAQ section (5 questions)
6. Final CTA

Tone: Confident, benefit-focused, customer-centric
Target: [audience]
Key differentiator: [what makes this unique]

Write in short, punchy sentences. Use power words.
\`\`\`

**Ad copy:**

\`\`\`
Write 5 variations of ad copy for [platform: Facebook/Google/LinkedIn].

Each variation should:
- Have a different angle (pain point, benefit, social proof, etc.)
- Stay within platform character limits
- Include a clear CTA
- Target: [audience]

Provide headline + body for each variation.
\`\`\`

---

### Technical Writing Prompts

**Documentation:**

\`\`\`
Write technical documentation for [API/tool/feature].

Audience: Developers with [experience level]
Include:
1. Overview (what it does, why use it)
2. Prerequisites
3. Installation/setup
4. Quick start example
5. Detailed API reference
6. Common use cases
7. Troubleshooting FAQ

Style: Clear, concise, with code examples
Format: Markdown suitable for GitHub/docs site
\`\`\`

**User guides:**

\`\`\`
Create a user guide for [software/feature].

Audience: Non-technical users
Tone: Friendly, step-by-step, reassuring

Include:
1. What you'll learn
2. Before you start (prerequisites)
3. Step-by-step instructions with screenshots placeholders
4. Common issues and solutions
5. Tips for getting the most out of it

Use numbered steps, highlight important notes, and include "why" explanations.
\`\`\`

---

### Creative Writing Prompts

**Story generation:**

\`\`\`
Write a short story (500-800 words) with these elements:
- Genre: [genre]
- Setting: [time and place]
- Main character: [description]
- Conflict: [type of conflict]
- Theme: [theme to explore]

Style: [author or style reference]
Point of view: [first/third person]
Tone: [mood/atmosphere]
\`\`\`

**Dialogue writing:**

\`\`\`
Write a dialogue between [Character A] and [Character B].

Context: [situation]
Purpose: [what the scene accomplishes]
Character voices:
- A: [speaking style, quirks]
- B: [speaking style, quirks]

Include:
- Natural interruptions and overlaps
- Subtext (what's unsaid)
- Character-specific vocabulary
- Emotional progression
\`\`\`

---

### Content Repurposing Prompts

**Blog to social media:**

\`\`\`
Repurpose this blog post into social media content:

[Blog post or summary]

Create:
1. 3 Twitter/X posts (hook + value, under 280 chars)
2. 1 LinkedIn post (professional angle, 150-200 words)
3. 1 Instagram caption (engaging, with hashtag suggestions)
4. 1 TikTok script (hook in first 3 seconds, 30-60 seconds total)

Maintain the core message but adapt for each platform's audience.
\`\`\`

**Long to short form:**

\`\`\`
Condense this 2000-word article into:
1. Executive summary (100 words)
2. Key takeaways (5 bullet points)
3. Tweet thread (5-7 tweets)
4. Infographic outline (main points + visual suggestions)

Maintain accuracy while making it scannable.
\`\`\`

---

### Common Mistakes to Avoid

- **Mistake:** Not specifying audience — **Fix:** Always define who you're writing for.
- **Mistake:** Being vague about tone — **Fix:** Use specific descriptors or reference examples.
- **Mistake:** Skipping structure requirements — **Fix:** Outline the format you need.
- **Mistake:** Forgetting length constraints — **Fix:** Specify word count or character limits.

### Professional Tips & Tricks

- For long-form content, generate an outline first, then expand section by section.
- Use "voice of customer" data to inform your tone and messaging.
- Always include what NOT to include (competitor names, jargon, etc.).
- For brand content, provide style guide examples.

---

### Key Takeaways

- Use the WRITE framework: Who, Register, Intent, Type, Examples.
- Be specific about audience, tone, and structure.
- For marketing copy, test multiple variations.
- Technical writing should be clear, accurate, and well-organized.
- Content repurposing requires adapting message to platform norms.

**Next up:** Prompting for data analysis and research tasks.`,
      codeLanguage: "text",
      codeSnippet: `# Writing Prompt Templates

## Blog Post Template
"Write a [word count] blog post about [topic].

Target audience: [audience description]
Tone: [professional/casual/educational]
Purpose: [inform/persuade/entertain]

Structure:
1. Hook headline
2. Introduction with pain point
3. [Number] main sections
4. Actionable tips
5. Conclusion with CTA

Style: [reference example]
Include: [key points]
Avoid: [things to exclude]"

## Marketing Copy Template
"Write [content type] for [product/service].

Audience: [target customer]
Goal: [conversion/awareness/engagement]
Tone: [confriendly/urgent/authoritative]

Key message: [core benefit]
CTA: [desired action]

Provide [number] variations with different angles."

## Technical Writing Template
"Document [feature/API/tool].

Audience: [developer level]
Include:
1. Overview
2. Prerequisites
3. Quick start
4. Detailed reference
5. Examples
6. Troubleshooting

Style: Clear, concise, with code examples
Format: [Markdown/HTML/etc.]"

## Content Repurposing Template
"Repurpose this content for [platform]:

[Original content]

Adapt for:
- Platform-specific format
- Audience expectations
- Character/word limits
- Engagement best practices"`,
      codeOutput: `Writing Prompt Templates

## Blog Post Template
"Write a [word count] blog post about [topic].

Target audience: [audience description]
Tone: [professional/casual/educational]
Purpose: [inform/persuade/entertain]

Structure:
1. Hook headline
2. Introduction with pain point
3. [Number] main sections
4. Actionable tips
5. Conclusion with CTA

Style: [reference example]
Include: [key points]
Avoid: [things to exclude]"

## Marketing Copy Template
"Write [content type] for [product/service].

Audience: [target customer]
Goal: [conversion/awareness/engagement]
Tone: [confriendly/urgent/authoritative]

Key message: [core benefit]
CTA: [desired action]

Provide [number] variations with different angles."

## Technical Writing Template
"Document [feature/API/tool].

Audience: [developer level]
Include:
1. Overview
2. Prerequisites
3. Quick start
4. Detailed reference
5. Examples
6. Troubleshooting

Style: Clear, concise, with code examples
Format: [Markdown/HTML/etc.]"

## Content Repurposing Template
"Repurpose this content for [platform]:

[Original content]

Adapt for:
- Platform-specific format
- Audience expectations
- Character/word limits
- Engagement best practices"`,
      visualizationTips: [
        "Create a writing prompt cheat sheet with templates for different content types.",
        "Draw a flowchart for the content repurposing process.",
        "Compare good vs bad writing prompts side by side.",
      ],
      tipsAndTricks: [
        "For long content, generate an outline first, then expand section by section.",
        "Provide reference content that matches your desired style.",
        "Always specify what NOT to include to avoid unwanted content.",
      ],
      practice: [
        {
          id: "practice-blog-prompt",
          title: "Blog Post Prompt",
          difficulty: "Medium",
          task: "Write a detailed prompt that would generate a 1000-word blog post about 'The Future of Remote Work in 2026'.",
          hint: "Include audience, tone, structure, and key points to cover.",
          solution: `Blog Prompt:
"Write a 1000-word blog post about 'The Future of Remote Work in 2026'.

Target audience: HR managers and business leaders at mid-size companies
Tone: Forward-thinking, data-driven, practical
Purpose: Inform and help readers prepare for trends

Structure:
1. Hook headline (under 10 words)
2. Introduction: State why 2026 is a turning point
3. Section 1: AI-powered remote collaboration tools
4. Section 2: Hybrid work models that actually work
5. Section 3: Challenges and how to overcome them
6. Section 4: Predictions from industry experts
7. Conclusion: Actionable steps for 2026

Include:
- At least 3 statistics or data points
- Quotes from (hypothetical) experts
- Practical recommendations
- Transition sentences between sections

Avoid:
- Generic 'remote work is here to stay' platitudes
- Negative framing without solutions
- Company-specific promotions"`,
        },
        {
          id: "practice-marketing-copy",
          title: "Marketing Copy Exercise",
          difficulty: "Easy",
          task: "Write a prompt for generating 5 email subject lines for a Black Friday sale at an online clothing store.",
          hint: "Include audience, tone, and requirements for each subject line.",
          solution: `Subject Line Prompt:
"Generate 5 email subject lines for Black Friday sale at [Store Name].

Audience: Women aged 25-40 interested in sustainable fashion
Tone: Urgent but not pushy, value-focused

Requirements:
- Each under 50 characters
- Include at least 2 with emojis
- Mix of approaches: discount, urgency, curiosity, exclusivity
- Avoid spam trigger words (free, act now, etc.)

Show each with:
1. The subject line
2. Which approach it uses
3. Why it would work for this audience"`,
        },
      ],
    },
    {
      id: "prompting-for-analysis",
      title: "Lesson 9: Prompting for Data Analysis & Research",
      shortDescription:
        "Master prompts for analyzing data, conducting research, and generating insights.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Analysis Prompts That Deliver Insights

Getting LLMs to analyze data and generate insights requires structured prompts that guide the reasoning process.

#### The ANALYZE Framework

| Letter | Meaning | What to Include |
|---|---|---|
| **A** | Ask | The specific question you want answered |
| **N** | Numbers | The data or metrics to analyze |
| **A** | Angle | The perspective or lens for analysis |
| **L** | Level | Depth of analysis (summary vs detailed) |
| **Y** | Yield | Expected output format |
| **Z** | Zeal | Confidence level and caveats |
| **E** | Examples | Reference analyses or benchmarks |

> **Mental model:** Think of analysis prompts like giving a research brief — the clearer the question and constraints, the more actionable the insights.

---

### Data Analysis Prompts

**Basic data analysis:**

\`\`\`
Analyze this data and provide insights:

[Data in CSV, JSON, or table format]

Please provide:
1. Summary statistics (mean, median, mode, range)
2. Key trends or patterns
3. Anomalies or outliers
4. Actionable recommendations

Format: Executive summary first, then detailed analysis.
\`\`\`

**Comparative analysis:**

\`\`\`
Compare these two datasets/periods/options:

[Data set A]
[Data set B]

Analyze:
1. Key differences and similarities
2. Which performs better on each metric and why
3. Statistical significance of differences (if applicable)
4. Recommendations based on the comparison

Present as a structured comparison table with analysis.
\`\`\`

**Trend analysis:**

\`\`\`
Analyze trends in this time-series data:

[Data with timestamps]

Identify:
1. Overall direction (growth/decline/stable)
2. Seasonal patterns
3. Inflection points and possible causes
4. Forecast for next [period]

Include confidence level for predictions.
\`\`\`

---

### Research Prompts

**Literature review:**

\`\`\`
Conduct a research summary on [topic].

Please:
1. Identify the key themes and debates
2. Summarize major findings from authoritative sources
3. Note areas of consensus and disagreement
4. Identify gaps in current research
5. Suggest directions for future investigation

Cite sources where possible. Note your confidence level for each finding.
\`\`\`

**Competitive analysis:**

\`\`\`
Analyze the competitive landscape for [industry/product].

Provide:
1. Key players and their market positions
2. Strengths and weaknesses of each
3. Market trends affecting competition
4. Opportunities and threats
5. Strategic recommendations

Format: Executive summary + detailed breakdown by competitor.
\`\`\`

**Market research:**

\`\`\`
Research the [target market] for [product/service].

Include:
1. Market size and growth projections
2. Customer segments and personas
3. Buying behavior and decision factors
4. Price sensitivity analysis
5. Distribution channels
6. Regulatory considerations

Base analysis on available data. Note where you're making assumptions.
\`\`\`

---

### Insight Generation Prompts

**From raw data:**

\`\`\`
You are a data analyst examining this dataset:

[Data]

Generate insights that would be valuable for [stakeholder type].

Focus on:
1. What's happening (descriptive)
2. Why it's happening (diagnostic)
3. What might happen (predictive)
4. What to do about it (prescriptive)

Prioritize insights by business impact (high/medium/low).
\`\`\`

**From reports:**

\`\`\`
Read this report and extract the key insights:

[Report content or summary]

Please:
1. Identify the 3-5 most important findings
2. Explain why each matters
3. Note any surprising or counterintuitive results
4. Suggest follow-up questions
5. Rate your confidence in each insight (high/medium/low)
\`\`\`

---

### Question-Driven Analysis

**For exploring data:**

\`\`\`
I have data about [topic]. Help me explore it by answering these questions:

1. What is the distribution of [key metric]?
2. Are there correlations between [variable A] and [variable B]?
3. What are the top/bottom performers by [metric]?
4. Are there any segments that behave differently?
5. What would happen if [hypothetical scenario]?

For each answer, explain your reasoning and confidence level.
\`\`\`

**For decision support:**

\`\`\`
I need to make a decision about [decision].

Here's what I know:
- Option A: [description and pros/cons]
- Option B: [description and pros/cons]
- Option C: [description and pros/cons]

My priorities are: [weighted criteria]

Please:
1. Analyze each option against my criteria
2. Identify risks and mitigations for each
3. Recommend the best option with reasoning
4. Note what additional information would change your recommendation
\`\`\`

---

### Analytical Reasoning Prompts

**Root cause analysis:**

\`\`\`
Problem: [describe the problem]

Using the 5 Whys technique:
1. Why did this happen? → [answer]
2. Why did that happen? → [answer]
3. Why did that happen? → [answer]
4. Why did that happen? → [answer]
5. Why did that happen? → [answer]

Then identify:
- Root cause(s)
- Contributing factors
- Recommended solutions
- Prevention strategies
\`\`\`

**SWOT analysis:**

\`\`\`
Conduct a SWOT analysis for [subject].

Strengths: [internal positives]
Weaknesses: [internal negatives]
Opportunities: [external positives]
Threats: [external negatives]

For each category:
- List 3-5 items with brief explanations
- Prioritize by impact
- Suggest strategies that leverage strengths/opportunities and address weaknesses/threats
\`\`\`

---

### Common Mistakes to Avoid

- **Mistake:** Asking too broad a question — **Fix:** Narrow the scope to specific, answerable questions.
- **Mistake:** Not specifying output format — **Fix:** Define exactly what the analysis should look like.
- **Mistake:** Ignoring confidence levels — **Fix:** Always ask the model to rate its certainty.
- **Mistake:** Accepting insights without validation — **Fix:** Cross-reference with other sources.

### Professional Tips & Tricks

- Use structured frameworks (SWOT, 5 Whys, etc.) to guide analysis.
- Always ask for confidence levels — it helps you know when to verify.
- For critical decisions, ask for analysis from multiple perspectives.
- Document assumptions the model makes — they may affect conclusions.

---

### Key Takeaways

- Use the ANALYZE framework to structure analysis prompts.
- Be specific about what insights you need and for whom.
- Always request confidence levels for analytical conclusions.
- Use established frameworks to ensure comprehensive analysis.
- Validate critical insights with additional sources.

**Next up:** Building complete AI workflows with orchestration and chaining.`,
      codeLanguage: "text",
      codeSnippet: `# Analysis Prompt Templates

## Data Analysis Template
"Analyze this data:

[Data]

Provide:
1. Summary statistics
2. Key trends/patterns
3. Anomalies/outliers
4. Actionable recommendations

Format: Executive summary + detailed analysis
Confidence: Rate each insight (high/medium/low)"

## Research Template
"Research [topic]:

1. Key themes and debates
2. Major findings from authoritative sources
3. Areas of consensus/disagreement
4. Research gaps
5. Future directions

Cite sources. Note confidence levels."

## Decision Support Template
"Help me decide about [decision].

Options:
- Option A: [description]
- Option B: [description]
- Option C: [description]

My priorities: [weighted criteria]

Analyze each option, identify risks, recommend best choice."

## Root Cause Analysis Template
"Problem: [description]

Using 5 Whys:
1. Why? → [answer]
2. Why? → [answer]
3. Why? → [answer]
4. Why? → [answer]
5. Why? → [answer]

Identify root cause, contributing factors, solutions."`,
      codeOutput: `Analysis Prompt Templates

## Data Analysis Template
"Analyze this data:

[Data]

Provide:
1. Summary statistics
2. Key trends/patterns
3. Anomalies/outliers
4. Actionable recommendations

Format: Executive summary + detailed analysis
Confidence: Rate each insight (high/medium/low)"

## Research Template
"Research [topic]:

1. Key themes and debates
2. Major findings from authoritative sources
3. Areas of consensus/disagreement
4. Research gaps
5. Future directions

Cite sources. Note confidence levels."

## Decision Support Template
"Help me decide about [decision].

Options:
- Option A: [description]
- Option B: [description]
- Option C: [description]

My priorities: [weighted criteria]

Analyze each option, identify risks, recommend best choice."

## Root Cause Analysis Template
"Problem: [description]

Using 5 Whys:
1. Why? → [answer]
2. Why? → [answer]
3. Why? → [answer]
4. Why? → [answer]
5. Why? → [answer]

Identify root cause, contributing factors, solutions."`,
      visualizationTips: [
        "Create a decision tree for selecting the right analysis framework.",
        "Draw a flowchart for the research prompt process.",
        "Create a comparison table of different analysis techniques.",
      ],
      tipsAndTricks: [
        "Always ask for confidence levels — it helps you know when to verify.",
        "Use established frameworks (SWOT, 5 Whys) to ensure comprehensive analysis.",
        "For critical decisions, ask for analysis from multiple perspectives.",
      ],
      practice: [
        {
          id: "practice-data-analysis",
          title: "Data Analysis Prompt",
          difficulty: "Medium",
          task: "Write a prompt to analyze this sales data and generate actionable insights for the marketing team.",
          hint: "Include the data format, analysis requirements, and output format.",
          solution: `Data Analysis Prompt:
"Analyze this monthly sales data:

| Month | Revenue | Customers | Avg Order | Marketing Spend |
|-------|---------|-----------|-----------|-----------------|
| Jan   | $45,000 | 300       | $150      | $5,000          |
| Feb   | $52,000 | 350       | $149      | $6,500          |
| Mar   | $48,000 | 320       | $150      | $5,500          |
| Apr   | $61,000 | 400       | $153      | $8,000          |

Provide:
1. Revenue trend analysis
2. Customer acquisition efficiency
3. Marketing ROI by month
4. Recommendations for Q2

Format: Executive summary (3-4 sentences) + detailed breakdown
Audience: Marketing director who needs actionable insights"`,
        },
        {
          id: "practice-competitive-analysis",
          title: "Competitive Analysis Exercise",
          difficulty: "Hard",
          task: "Write a prompt to analyze the competitive landscape for a new AI writing assistant product.",
          hint: "Include market analysis, competitor breakdown, and strategic recommendations.",
          solution: `Competitive Analysis Prompt:
"Analyze the competitive landscape for an AI writing assistant targeting content marketers.

Provide:
1. Market overview
   - Market size and growth
   - Key trends
   - Customer segments

2. Competitor analysis (top 5)
   For each:
   - Key features
   - Pricing model
   - Strengths/weaknesses
   - Target audience

3. Competitive positioning
   - White space opportunities
   - Differentiation strategies
   - Barriers to entry

4. Strategic recommendations
   - Where to compete
   - How to differentiate
   - Risks to mitigate

Format: Executive summary + detailed sections
Confidence: Rate each finding (high/medium/low)
Note: This is hypothetical analysis based on industry knowledge"`,
        },
      ],
    },
  ],
};
