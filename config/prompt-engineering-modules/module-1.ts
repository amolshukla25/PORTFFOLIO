import type { Module } from "../courses";

export const MODULE_1: Module = {
  id: "module-1-pe-foundations",
  title: "Module 1: Foundations of Prompt Engineering",
  description:
    "Understand how large language models work and master the fundamentals of writing effective prompts.",
  lessons: [
    {
      id: "intro-prompt-engineering",
      title: "Lesson 1: Introduction to Prompt Engineering",
      shortDescription:
        "What is prompt engineering, why it matters in 2026, and how LLMs process your inputs.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### What is Prompt Engineering?

Prompt engineering is the art and science of crafting inputs (prompts) that guide large language models (LLMs) to produce desired outputs. It's the skill that separates casual AI users from power users who get 10x better results.

#### Why Prompt Engineering Matters in 2026

- **AI is Everywhere**: ChatGPT, Claude, Gemini — AI assistants are integrated into every tool.
- **Better Outputs = Better Work**: The same model can give mediocre or exceptional results based on your prompt.
- **Career Advantage**: Prompt engineering is now a valued skill in marketing, coding, research, and more.
- **Cost Efficiency**: Better prompts mean fewer tokens used and less time iterating.

> **Mental model:** Think of prompt engineering like giving directions to a brilliant but literal assistant — the clearer your instructions, the better the result.

#### How LLMs Process Your Input

| Stage | What Happens | Your Influence |
|---|---|---|
| **Tokenization** | Your text is broken into tokens | Word choice affects token count |
| **Context Window** | Model reads all tokens at once | Length limits affect what's included |
| **Pattern Matching** | Model identifies patterns in your prompt | Structure and examples guide patterns |
| **Prediction** | Model predicts next tokens based on patterns | Your prompt sets the prediction trajectory |
| **Generation** | Model outputs tokens one by one | Temperature and parameters affect creativity |

#### The Prompt Engineering Mindset

1. **Be Specific**: Vague prompts get vague results.
2. **Provide Context**: Help the model understand the situation.
3. **Give Examples**: Show, don't just tell.
4. **Iterate**: Your first prompt is rarely your best.
5. **Understand Limitations**: Know what LLMs can and cannot do.

---

### Common Prompting Mistakes

| Mistake | Example | Better Approach |
|---|---|---|
| Too vague | "Write about marketing" | "Write a 500-word blog post about email marketing best practices for e-commerce stores" |
| No context | "Fix this code" | "This Python function should calculate average but returns None. Fix the bug." |
| Assuming knowledge | "Use our style guide" | "Write in a professional but friendly tone, similar to HubSpot's blog" |
| Ignoring format | "Give me information" | "Provide a markdown table comparing the top 5 CRM tools" |

> **Key insight:** The model has no memory of previous conversations (unless you use conversation history). Every prompt must be self-contained.

---

### Common Mistakes to Avoid

- **Mistake:** Being too brief — **Fix:** Include specific details about what you want.
- **Mistake:** Not specifying format — **Fix:** Always state if you want a table, list, code, etc.
- **Mistake:** Giving up after one try — **Fix:** Refine your prompt based on what you got.
- **Mistake:** Ignoring model limitations — **Fix:** Don't ask for real-time data or personal opinions.

### Professional Tips & Tricks

- Start with the end in mind — what output do you need?
- Use system prompts to set persistent context for conversations.
- Test your prompts with different models to find what works best.
- Keep a prompt library of your best-performing prompts.

---

### Key Takeaways

- Prompt engineering is the skill of crafting effective AI inputs.
- LLMs process your input through tokenization, pattern matching, and prediction.
- Be specific, provide context, give examples, and iterate.
- Your prompts should be self-contained and clear about desired output format.

**Next up:** Core prompting techniques — zero-shot, few-shot, and chain-of-thought.`,
      codeLanguage: "text",
      codeSnippet: `# Prompt Engineering Fundamentals

## The Anatomy of an Effective Prompt

1. **Role/Persona**: Who should the AI be?
   "You are a senior marketing strategist..."

2. **Context**: What's the background?
   "I run a small e-commerce store selling handmade jewelry..."

3. **Task**: What do you want?
   "Create a 3-month content calendar for Instagram..."

4. **Format**: How should it look?
   "Present as a markdown table with columns: Date, Content Type, Caption, Hashtags"

5. **Constraints**: Any limitations?
   "Keep captions under 150 characters, use only relevant hashtags"

## Example: Bad vs Good Prompt

### Bad Prompt:
"Write me a marketing plan"

### Good Prompt:
"You are a digital marketing expert specializing in small businesses.

I run a handmade jewelry Etsy shop with 500 followers. Our best-selling items are minimalist gold necklaces. Our target audience is women aged 25-35 who value sustainable fashion.

Create a 3-month Instagram marketing strategy that includes:
- Weekly posting schedule (3 posts per week)
- Content themes for each month
- 5 hashtag sets for different content types
- Engagement tactics to grow from 500 to 2,000 followers

Present as a structured markdown document with clear headings and actionable steps.",

## Prompt Template Framework

[ROLE] You are a [expertise] specializing in [specific area].

[CONTEXT] [Background information about your situation]

[TASK] [Specific request with clear deliverables]

[FORMAT] [How you want the output structured]

[CONSTRAINTS] [Any limitations or requirements]`,
      codeOutput: `Prompt Engineering Fundamentals

## The Anatomy of an Effective Prompt

1. **Role/Persona**: Who should the AI be?
   "You are a senior marketing strategist..."

2. **Context**: What's the background?
   "I run a small e-commerce store selling handmade jewelry..."

3. **Task**: What do you want?
   "Create a 3-month content calendar for Instagram..."

4. **Format**: How should it look?
   "Present as a markdown table with columns: Date, Content Type, Caption, Hashtags"

5. **Constraints**: Any limitations?
   "Keep captions under 150 characters, use only relevant hashtags"

## Example: Bad vs Good Prompt

### Bad Prompt:
"Write me a marketing plan"

### Good Prompt:
"You are a digital marketing expert specializing in small businesses.

I run a handmade jewelry Etsy shop with 500 followers. Our best-selling items are minimalist gold necklaces. Our target audience is women aged 25-35 who value sustainable fashion.

Create a 3-month Instagram marketing strategy that includes:
- Weekly posting schedule (3 posts per week)
- Content themes for each month
- 5 hashtag sets for different content types
- Engagement tactics to grow from 500 to 2,000 followers

Present as a structured markdown document with clear headings and actionable steps.",

## Prompt Template Framework

[ROLE] You are a [expertise] specializing in [specific area].

[CONTEXT] [Background information about your situation]

[TASK] [Specific request with clear deliverables]

[FORMAT] [How you want the output structured]

[CONSTRAINTS] [Any limitations or requirements]`,
      visualizationTips: [
        "Draw a flowchart showing how your prompt travels through the LLM to produce output.",
        "Create a side-by-side comparison of bad vs good prompts with their results.",
        "Map out the 5 elements of an effective prompt as a visual checklist.",
      ],
      tipsAndTricks: [
        "Copy-paste your best prompts into a document — don't reinvent the wheel each time.",
        "Use markdown formatting in your prompts to get better-structured outputs.",
        "When in doubt, ask the model to 'think step by step' — it improves reasoning.",
      ],
      practice: [
        {
          id: "practice-prompt-rewrite",
          title: "Prompt Rewrite Exercise",
          difficulty: "Easy",
          task: "Take this vague prompt and rewrite it using the 5-element framework: 'Help me with my resume'",
          hint: "Add role, context, task, format, and constraints.",
          solution: `Rewritten Prompt:
"You are a professional resume writer with 10 years of experience in tech recruitment.

I'm a software engineer with 5 years of experience in full-stack development, specializing in React and Node.js. I'm applying for senior engineering roles at startups.

Rewrite my resume bullet points to be more impactful using the STAR method (Situation, Task, Action, Result).

Here are my current bullet points:
- Worked on the frontend team
- Fixed bugs in the application
- Helped with database work

Format: Provide 3 improved bullet points for each original point, with a brief explanation of why each improvement works.

Constraints: Keep each bullet point under 25 words. Focus on quantifiable achievements where possible."`,
        },
        {
          id: "practice-prompt-anatomy",
          title: "Anatomy Breakdown",
          difficulty: "Easy",
          task: "Identify the 5 elements (role, context, task, format, constraints) in this prompt and evaluate its effectiveness.",
          hint: "Read the prompt carefully and label each component.",
          solution: `Prompt to analyze:
"You are a technical writer specializing in API documentation. Our company just launched a new REST API for payment processing. Write clear, developer-friendly documentation for the /charge endpoint. Include request/response examples in JSON format. Keep explanations concise and use code blocks for all examples. Don't include authentication details — we have separate docs for that."

Breakdown:
- Role: Technical writer specializing in API documentation ✅
- Context: Company launched REST API for payment processing ✅
- Task: Write documentation for /charge endpoint ✅
- Format: JSON examples in code blocks ✅
- Constraints: Concise explanations, no auth details ✅

Rating: Excellent — all 5 elements present and specific.`,
        },
      ],
    },
    {
      id: "core-prompting-techniques",
      title: "Lesson 2: Core Prompting Techniques",
      shortDescription:
        "Master zero-shot, few-shot, chain-of-thought, and other essential prompting strategies.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The Four Core Prompting Techniques

There are four fundamental techniques that form the foundation of prompt engineering. Master these and you'll handle 90% of prompting scenarios.

#### 1. Zero-Shot Prompting

The simplest technique — give the model a task with no examples.

**When to use:** Simple, straightforward tasks where the model already has sufficient knowledge.

**Example:**
\`\`\`
Classify this review as positive, negative, or neutral:
"The product arrived on time and works as expected."
\`\`\`

**Result:** Positive

**Pros:** Fast, simple
**Cons:** Less reliable for complex or nuanced tasks

---

#### 2. Few-Shot Prompting

Provide examples of the desired input-output pattern before asking for new output.

**When to use:** Complex tasks, specific formatting requirements, or when you need consistent output.

**Example:**
\`\`\`
Classify these reviews as positive, negative, or neutral:

Review: "Amazing quality, will buy again!" → Positive
Review: "Terrible, broke after one day." → Negative
Review: "It's okay, nothing special." → Neutral

Review: "The customer service was fantastic!" →
\`\`\`

**Result:** Positive

**Pros:** More accurate, consistent output
**Cons:** Uses more tokens, requires example selection

---

#### 3. Chain-of-Thought (CoT) Prompting

Ask the model to show its reasoning step by step before giving the final answer.

**When to use:** Math, logic, complex analysis, or multi-step problems.

**Example:**
\`\`\`
Solve this step by step:

A store sells shirts for $25 each. If you buy 3 or more, you get 20% off.
How much would 5 shirts cost?

Show your reasoning.
\`\`\`

**Step-by-step output:**
1. Price per shirt: $25
2. Number of shirts: 5
3. Since 5 ≥ 3, discount applies
4. Discount: 20% of $25 = $5
5. Discounted price per shirt: $25 - $5 = $20
6. Total: 5 × $20 = $100

**Pros:** Improves accuracy for complex tasks, shows reasoning
**Cons:** Longer outputs, more tokens

---

#### 4. Self-Consistency

Run the same prompt multiple times and take the most common answer.

**When to use:** When accuracy is critical and you can afford multiple API calls.

**How to implement:**
1. Generate 3-5 responses to the same prompt
2. Compare the answers
3. Use the most frequently occurring answer

**Pros:** Higher accuracy
**Cons:** More expensive, slower

---

### Advanced Techniques

#### Tree of Thought (ToT)

Explore multiple reasoning paths simultaneously and evaluate each.

**When to use:** Creative tasks, complex problem-solving, strategic planning.

**Example:**
\`\`\`
I need to choose between 3 marketing strategies. Evaluate each:

Strategy A: Influencer marketing
Strategy B: Content marketing
Strategy C: Paid advertising

For each strategy, consider:
1. Cost
2. Time to results
3. Long-term value
4. Risk level

Then recommend the best option for a startup with limited budget.
\`\`\`

#### Persona Prompting

Assign a specific role or expertise to the model.

**When to use:** When you need specialized knowledge or a specific perspective.

**Example:**
\`\`\`
You are a senior financial advisor with 20 years of experience.
A 30-year-old client asks: "Should I invest in index funds or individual stocks?"

Provide advice in a conversational tone, explaining the reasoning
for your recommendation.
\`\`\`

#### Prompt Chaining

Break complex tasks into a series of simpler prompts, where each output feeds into the next.

**When to use:** Multi-step tasks, research projects, content creation pipelines.

**Example Chain:**
1. "List 10 trending topics in AI for 2026"
2. "For each topic, write a one-paragraph summary"
3. "Expand topic #3 into a 500-word blog post outline"

---

### Choosing the Right Technique

| Technique | Best For | Token Cost | Accuracy |
|---|---|---|---|
| Zero-Shot | Simple tasks | Low | Medium |
| Few-Shot | Consistent formatting | Medium | High |
| Chain-of-Thought | Reasoning tasks | Medium-High | High |
| Self-Consistency | Critical accuracy | High | Very High |
| Tree of Thought | Complex decisions | High | High |
| Persona | Specialized knowledge | Low-Medium | High |

---

### Common Mistakes to Avoid

- **Mistake:** Using few-shot when zero-shot works — **Fix:** Start simple, add examples only if needed.
- **Mistake:** Not enough examples in few-shot — **Fix:** 3-5 examples usually work best.
- **Mistake:** Forcing CoT on simple tasks — **Fix:** Use CoT only for multi-step reasoning.
- **Mistake:** Copying examples that are too similar — **Fix:** Use diverse examples to show the pattern.

### Professional Tips & Tricks

- Start with zero-shot, upgrade to few-shot only if the output isn't good enough.
- For chain-of-thought, explicitly ask for "step by step" — don't assume the model will do it.
- Mix techniques: few-shot + CoT often produces the best results.
- Test your prompts with edge cases, not just happy paths.

---

### Key Takeaways

- Zero-shot is fastest; few-shot is more reliable; CoT improves reasoning.
- Choose the technique based on task complexity and accuracy needs.
- Few-shot works best with 3-5 diverse examples.
- Chain-of-thought significantly improves performance on reasoning tasks.
- Combine techniques for optimal results.

**Next up:** Advanced prompting patterns — structured outputs, chain-of-thought variants, and prompt templates.`,
      codeLanguage: "text",
      codeSnippet: `# Prompting Techniques Comparison

## 1. Zero-Shot
Simple task, no examples:
"Summarize this article in 3 sentences."

## 2. Few-Shot
With examples:
"Summarize these articles in 3 sentences:

Article: 'Apple reported record Q4 earnings...'
Summary: Apple achieved record Q4 earnings driven by strong iPhone sales.

Article: 'Tesla recalled 50,000 vehicles...'
Summary: Tesla issued a recall for 50,000 vehicles due to a software glitch.

Article: 'Microsoft announced new AI features...'
Summary: [Your response here]"

## 3. Chain-of-Thought
Step-by-step reasoning:
"Solve this step by step:
If a shirt costs $25 and there's a 20% discount on 3+ items,
how much do 5 shirts cost?

Let me think through this..."

## 4. Few-Shot + CoT (Combined)
Best of both worlds:
"Classify these customer sentiments. Show your reasoning.

Review: 'Love this product!' → 
Sentiment: Positive
Reasoning: Enthusiastic language, positive adjective

Review: 'Broke after one use.' →
Sentiment: Negative
Reasoning: Product failure, negative experience

Review: 'It works fine, nothing special.' →"

## Technique Selection Guide

| Task Type | Recommended Technique |
|-----------|----------------------|
| Simple classification | Zero-shot |
| Specific output format | Few-shot |
| Math/logic problems | Chain-of-thought |
| Critical decisions | Self-consistency |
| Creative brainstorming | Tree of thought |
| Domain expertise | Persona prompting |
| Multi-step projects | Prompt chaining |`,
      codeOutput: `Prompting Techniques Comparison

## 1. Zero-Shot
Simple task, no examples:
"Summarize this article in 3 sentences."

## 2. Few-Shot
With examples:
"Summarize these articles in 3 sentences:

Article: 'Apple reported record Q4 earnings...'
Summary: Apple achieved record Q4 earnings driven by strong iPhone sales.

Article: 'Tesla recalled 50,000 vehicles...'
Summary: Tesla issued a recall for 50,000 vehicles due to a software glitch.

Article: 'Microsoft announced new AI features...'
Summary: [Your response here]"

## 3. Chain-of-Thought
Step-by-step reasoning:
"Solve this step by step:
If a shirt costs $25 and there's a 20% discount on 3+ items,
how much do 5 shirts cost?

Let me think through this..."

## 4. Few-Shot + CoT (Combined)
Best of both worlds:
"Classify these customer sentiments. Show your reasoning.

Review: 'Love this product!' → 
Sentiment: Positive
Reasoning: Enthusiastic language, positive adjective

Review: 'Broke after one use.' →
Sentiment: Negative
Reasoning: Product failure, negative experience

Review: 'It works fine, nothing special.' →"

## Technique Selection Guide

| Task Type | Recommended Technique |
|-----------|----------------------|
| Simple classification | Zero-shot |
| Specific output format | Few-shot |
| Math/logic problems | Chain-of-thought |
| Critical decisions | Self-consistency |
| Creative brainstorming | Tree of thought |
| Domain expertise | Persona prompting |
| Multi-step projects | Prompt chaining |`,
      visualizationTips: [
        "Create a decision tree for choosing the right prompting technique.",
        "Draw a flowchart showing how few-shot examples guide the model's output.",
        "Use a comparison table to visualize the trade-offs between techniques.",
      ],
      tipsAndTricks: [
        "Always test with at least 3 examples in few-shot to establish a clear pattern.",
        "For chain-of-thought, adding 'Let me think step by step' as a prefix improves results.",
        "Use delimiters (---, ###, |||) to separate examples from the actual task.",
      ],
      practice: [
        {
          id: "practice-few-shot",
          title: "Few-Shot Creation",
          difficulty: "Medium",
          task: "Create a few-shot prompt that converts informal text to formal business language. Include at least 3 examples.",
          hint: "Show the transformation clearly with informal → formal pairs.",
          solution: `Few-Shot Prompt:
"Convert informal text to professional business language.

Informal: 'Hey, just wanted to check if you got my email from last week?'
Formal: 'I am writing to follow up on my previous correspondence dated [date]. I wanted to确认 whether you had the opportunity to review it.'

Informal: 'Sorry for the super late reply!'
Formal: 'Please accept my apologies for the delayed response.'

Informal: 'Can you send me the files ASAP?'
Formal: 'Would you be able to provide the requested files at your earliest convenience?'

Informal: 'Thanks a bunch for your help!'"

The model should output:
"Formal: 'I sincerely appreciate your assistance with this matter.'"`,
        },
        {
          id: "practice-cot",
          title: "Chain-of-Thought Exercise",
          difficulty: "Medium",
          task: "Write a chain-of-thought prompt that helps solve this business problem: 'Should we launch our new product in Q1 or Q2? Consider market conditions, team capacity, and competitor activity.'",
          hint: "Break the decision into steps and ask the model to reason through each.",
          solution: `Chain-of-Thought Prompt:
"Help me decide between launching in Q1 or Q2. Think through this step by step.

Step 1: Analyze current market conditions
- What trends favor each timing?
- Any seasonal factors?

Step 2: Evaluate team capacity
- What resources are available in Q1 vs Q2?
- Any known constraints?

Step 3: Consider competitor activity
- What are competitors planning?
- Is there a window of opportunity?

Step 4: Weigh risks
- What could go wrong with each option?
- How severe are the consequences?

Step 5: Make a recommendation
- Based on all factors, which quarter is better?
- What conditions would change your recommendation?

Provide your analysis for each step before giving a final recommendation."`,
        },
      ],
    },
    {
      id: "structured-outputs",
      title: "Lesson 3: Structured Outputs & Prompt Templates",
      shortDescription:
        "Master techniques for getting consistent, structured outputs and building reusable prompt templates.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Getting Structured Outputs

One of the biggest challenges in prompt engineering is getting outputs in a consistent, usable format. Here are techniques to ensure you always get what you need.

#### 1. Explicit Format Instructions

Tell the model exactly what format you want.

**Example:**
\`\`\`
Analyze this customer feedback and return the result as JSON with the following structure:
{
  "sentiment": "positive" | "negative" | "neutral",
  "key_themes": ["theme1", "theme2"],
  "urgency": "high" | "medium" | "low",
  "suggested_response": "string"
}

Customer feedback: "Your product broke after 2 days and support hasn't responded!"
\`\`\`

**Result:**
\`\`\`json
{
  "sentiment": "negative",
  "key_themes": ["product quality", "customer support"],
  "urgency": "high",
  "suggested_response": "I sincerely apologize for the product issue and delayed response. Let me prioritize your case and arrange a replacement immediately."
}
\`\`\`

---

#### 2. Markdown Tables

Use markdown tables for comparative or structured data.

**Example:**
\`\`\`
Compare React and Vue.js in a markdown table with these columns:
| Feature | React | Vue.js |
|---|---|---|
| Learning Curve | | |
| Performance | | |
| Ecosystem | | |
| Use Cases | | |

Then provide a recommendation based on the comparison.
\`\`\`

---

#### 3. XML Tags for Structure

Use XML-like tags to separate different parts of your output.

**Example:**
\`\`\`
Write a blog post about AI in healthcare.

<outline>
[Provide a structured outline]
</outline>

<introduction>
[Write the introduction]
</introduction>

<body>
[Write the main content]
</body>

<conclusion>
[Write the conclusion]
</conclusion>
\`\`\`

---

### Building Reusable Prompt Templates

A prompt template is a reusable framework that you can fill in with different variables.

#### Template Structure

\`\`\`
You are a [ROLE] with expertise in [DOMAIN].

TASK: [SPECIFIC_TASK]

CONTEXT:
- [Context point 1]
- [Context point 2]
- [Context point 3]

REQUIREMENTS:
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

OUTPUT FORMAT:
[Desired format description]

EXAMPLE:
[Example of expected output]
\`\`\`

---

#### Example: Content Creation Template

\`\`\`
You are a content marketing specialist with expertise in [INDUSTRY].

TASK: Create a [CONTENT_TYPE] about [TOPIC].

CONTEXT:
- Target audience: [AUDIENCE_DESCRIPTION]
- Brand voice: [TONE_AND_STYLE]
- Key message: [MAIN_POINT]
- Competitor examples: [COMPETITOR_CONTENT_LINKS]

REQUIREMENTS:
1. Headline that hooks readers in under 10 words
2. Introduction that identifies the reader's pain point
3. 3-5 actionable tips with examples
4. Conclusion with clear call-to-action
5. SEO-optimized for keyword: [TARGET_KEYWORD]

OUTPUT FORMAT:
- Title: [H1 headline]
- Meta description: [150-160 characters]
- Body: [Structured with H2s, bullet points, and short paragraphs]
- CTA: [Specific action for readers]

EXAMPLE OUTPUT STRUCTURE:
Title: "10 Proven Ways to Boost Email Open Rates in 2026"
Meta: "Discover 10 actionable strategies to increase your email open rates by 40%..."
[Body content]
CTA: "Download our free email marketing checklist..."
\`\`\`

---

#### Example: Data Analysis Template

\`\`\`
You are a data analyst specializing in [ANALYSIS_TYPE].

TASK: Analyze the following data and provide insights.

DATA:
[Insert data here — CSV, JSON, or description]

ANALYSIS REQUIREMENTS:
1. Summary statistics (mean, median, mode, std dev)
2. Key trends and patterns
3. Anomalies or outliers
4. Correlations between variables
5. Actionable recommendations

OUTPUT FORMAT:
- Executive Summary (2-3 sentences)
- Key Findings (bullet points)
- Detailed Analysis (with charts described)
- Recommendations (numbered list with expected impact)
\`\`\`

---

### The DELIMITER Technique

Use clear delimiters to separate different parts of your prompt.

| Delimiter | Best For |
|---|---|
| \`\`\` | Code blocks, long examples |
| --- | Separating sections |
| \|\|\| | Separating examples |
| ### | Headings within prompts |
| """ | Multi-line strings |
| XML tags | Complex nested structures |

**Example with delimiters:**
\`\`\`
Classify the following text into categories.

---
Text 1: "The weather is beautiful today" → Category: Weather
Text 2: "Apple released a new iPhone" → Category: Technology
Text 3: "The stock market crashed" → Category: Finance
---

Text to classify: "The new AI model achieves human-level performance"
\`\`\`

---

### Common Mistakes to Avoid

- **Mistake:** Not specifying output format — **Fix:** Always tell the model what format you want.
- **Mistake:** Overly complex templates — **Fix:** Keep templates simple and easy to fill in.
- **Mistake:** Not including examples of desired format — **Fix:** Show exactly what the output should look like.
- **Mistake:** Ignoring token limits — **Fix:** Long templates may exceed context windows.

### Professional Tips & Tricks

- Create a library of templates for your most common tasks.
- Use JSON mode when available for guaranteed valid JSON.
- Test templates with edge cases — unusual inputs often break formats.
- Version control your templates — track what works and what doesn't.

---

### Key Takeaways

- Explicit format instructions ensure consistent outputs.
- Markdown tables, XML tags, and JSON are powerful formatting tools.
- Prompt templates save time and ensure consistency across uses.
- Always include an example of the desired output format.
- Test templates with diverse inputs to ensure robustness.

**Next up:** Advanced prompt patterns — self-reflection, role-playing, and iterative refinement.`,
      codeLanguage: "text",
      codeSnippet: `# Structured Output Templates

## JSON Output Template
"Analyze the following and return as JSON:
{
  \"analysis\": {
    \"summary\": \"string\",
    \"key_findings\": [\"string\"],
    \"recommendations\": [\"string\"],
    \"confidence\": \"high\" | \"medium\" | \"low\"
  }
}

Input: [Your data here]"

## Markdown Table Template
"Compare [ITEM_1] and [ITEM_2] in a table:

| Aspect | [ITEM_1] | [ITEM_2] |
|--------|----------|----------|
| [Aspect 1] | | |
| [Aspect 2] | | |
| [Aspect 3] | | |

Then provide a recommendation."

## Reusable Template Framework

### Content Creation Template
ROLE: You are a [EXPERTISE] specializing in [DOMAIN].

TASK: Create [CONTENT_TYPE] about [TOPIC].

CONTEXT:
- Audience: [AUDIENCE]
- Tone: [TONE]
- Goal: [GOAL]

FORMAT:
- Structure: [OUTLINE]
- Length: [WORD_COUNT]
- Style: [STYLE_GUIDE]

### Data Analysis Template
ROLE: You are a [ANALYSIS_TYPE] analyst.

TASK: Analyze [DATA_DESCRIPTION].

DATA:
[DATA_HERE]

DELIVERABLES:
1. [DELIVERABLE_1]
2. [DELIVERABLE_2]
3. [DELIVERABLE_3]

FORMAT: [OUTPUT_FORMAT]`,
      codeOutput: `Structured Output Templates

## JSON Output Template
"Analyze the following and return as JSON:
{
  \"analysis\": {
    \"summary\": \"string\",
    \"key_findings\": [\"string\"],
    \"recommendations\": [\"string\"],
    \"confidence\": \"high\" | \"medium\" | \"low\"
  }
}

Input: [Your data here]"

## Markdown Table Template
"Compare [ITEM_1] and [ITEM_2] in a table:

| Aspect | [ITEM_1] | [ITEM_2] |
|--------|----------|----------|
| [Aspect 1] | | |
| [Aspect 2] | | |
| [Aspect 3] | | |

Then provide a recommendation."

## Reusable Template Framework

### Content Creation Template
ROLE: You are a [EXPERTISE] specializing in [DOMAIN].

TASK: Create [CONTENT_TYPE] about [TOPIC].

CONTEXT:
- Audience: [AUDIENCE]
- Tone: [TONE]
- Goal: [GOAL]

FORMAT:
- Structure: [OUTLINE]
- Length: [WORD_COUNT]
- Style: [STYLE_GUIDE]

### Data Analysis Template
ROLE: You are a [ANALYSIS_TYPE] analyst.

TASK: Analyze [DATA_DESCRIPTION].

DATA:
[DATA_HERE]

DELIVERABLES:
1. [DELIVERABLE_1]
2. [DELIVERABLE_2]
3. [DELIVERABLE_3]

FORMAT: [OUTPUT_FORMAT]`,
      visualizationTips: [
        "Create a visual template library with cards for each template type.",
        "Draw a flowchart showing how structured prompts flow through the LLM.",
        "Use color-coding to separate different parts of complex prompts.",
      ],
      tipsAndTricks: [
        "Always specify the output format at the END of your prompt — it's the last thing the model processes.",
        "Use placeholder variables like [VARIABLE] to make templates reusable.",
        "Test your templates with 3-5 different inputs to ensure consistency.",
      ],
      practice: [
        {
          id: "practice-template-creation",
          title: "Template Creation Exercise",
          difficulty: "Medium",
          task: "Create a reusable prompt template for generating social media post ideas. Include placeholders for industry, target audience, and platform.",
          hint: "Include role, context, task, format, and constraints sections.",
          solution: `Social Media Ideas Template:

"You are a social media strategist specializing in [INDUSTRY].

Generate 10 social media post ideas for [PLATFORM] targeting [AUDIENCE].

Context about the business:
- Products/services: [DESCRIPTION]
- Brand voice: [TONE]
- Current followers: [NUMBER]
- Content goals: [GOALS]

For each idea, provide:
1. Post type (image, video, carousel, text)
2. Hook/headline
3. Main content
4. Call-to-action
5. Hashtag suggestions (5-10)

Format: Present as a numbered list with clear sections for each idea.

Constraints:
- Each post should be platform-appropriate
- Include a mix of educational, entertaining, and promotional content
- Avoid overly salesy language
- Keep captions under [CHARACTER_LIMIT] characters"`,
        },
        {
          id: "practice-format-instruction",
          title: "Format Instruction Exercise",
          difficulty: "Easy",
          task: "Rewrite this unstructured prompt to include clear format instructions: 'Tell me about machine learning algorithms'",
          hint: "Specify exactly what format and structure you want.",
          solution: `Rewritten Prompt:
"Explain machine learning algorithms in the following format:

## Overview
[2-3 sentence introduction]

## Types of ML Algorithms
| Type | Description | Examples | Use Cases |
|------|-------------|----------|-----------|

## Detailed Breakdown
For each major type (supervised, unsupervised, reinforcement):
- How it works (2-3 sentences)
- Key algorithms (3-5 examples)
- Real-world applications (3 examples)

## Choosing the Right Algorithm
[Flowchart-style decision guide]

## Resources
[2-3 recommended learning resources]

Keep explanations beginner-friendly with concrete examples."`,
        },
      ],
    },
  ],
};
