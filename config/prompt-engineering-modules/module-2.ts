import type { Module } from "../courses";

export const MODULE_2: Module = {
  id: "module-2-advanced-techniques",
  title: "Module 2: Advanced Prompting Techniques",
  description:
    "Master sophisticated prompting strategies including chain-of-thought variants, self-reflection, and iterative refinement.",
  lessons: [
    {
      id: "chain-of-thought-variants",
      title: "Lesson 4: Chain-of-Thought Variants",
      shortDescription:
        "Explore different chain-of-thought approaches: zero-shot CoT, few-shot CoT, and auto-CoT.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Beyond Basic Chain-of-Thought

Chain-of-thought (CoT) prompting revolutionized how we get LLMs to reason. But there are several variants, each optimized for different scenarios. Understanding when to use each variant is key to unlocking maximum performance.

#### The CoT Family

| Variant | Description | Best For | Token Cost |
|---|---|---|---|
| **Zero-Shot CoT** | Simply add "Let's think step by step" | Quick reasoning boost | Low |
| **Few-Shot CoT** | Examples with explicit reasoning steps | Complex, structured reasoning | Medium |
| **Auto-CoT** | Model generates its own examples | When you don't have good examples | Medium |
| **Complexity-Based CoT** | Multiple reasoning paths, pick the best | Critical decisions | High |
| **Self-Consistency CoT** | Multiple CoT samples, majority vote | High-stakes accuracy | Very High |

> **Mental model:** Think of CoT variants as different levels of a reasoning engine — zero-shot CoT is like turning on cruise control, while self-consistency CoT is like having multiple expert advisors vote on the best approach.

---

### Zero-Shot Chain-of-Thought

The simplest CoT variant — just append a magic phrase to your prompt.

**The Magic Phrases:**
- "Let's think step by step"
- "Let's work this out in a step by step way"
- "First, let's understand the problem"

**Example:**

\`\`\`
Q: A store has 5 apples. They buy 3 more boxes with 4 apples each. 
Then they sell 6 apples. How many apples do they have?

Let's think step by step.
\`\`\`

**Output:**
1. Start with 5 apples
2. Buy 3 boxes × 4 apples = 12 apples
3. Total after purchase: 5 + 12 = 17 apples
4. Sell 6 apples: 17 - 6 = 11 apples
5. **Answer: 11 apples**

**Why it works:** The phrase triggers the model to generate intermediate reasoning steps rather than jumping to a final answer. This dramatically improves accuracy on math, logic, and multi-step problems.

---

### Few-Shot Chain-of-Thought

Provide examples that demonstrate explicit reasoning before asking for a new answer.

**When to use:**
- Complex reasoning patterns
- Domain-specific logic
- When zero-shot CoT isn't accurate enough

**Example:**

\`\`\`
Solve these word problems step by step:

Q: Sarah has 3 times as many books as Tom. Together they have 24 books. How many does Tom have?
A: Let's define variables. Let Tom = x books. Sarah = 3x books. Together: x + 3x = 24. So 4x = 24. x = 6. Tom has 6 books.

Q: A train travels 60 mph for 2.5 hours, then 80 mph for 1.5 hours. What's the total distance?
A: First segment: 60 × 2.5 = 150 miles. Second segment: 80 × 1.5 = 120 miles. Total: 150 + 120 = 270 miles.

Q: Mike earns $25/hour and works 40 hours/week. He gets a 10% raise. What's his new weekly salary?
A: [Your reasoning here]
\`\`\`

**Key principles for few-shot CoT:**
1. Show diverse reasoning patterns (not just the same type repeated)
2. Include the reasoning steps explicitly (not just the answer)
3. Match the complexity of your examples to the target problem
4. Use 3-5 examples for most tasks

---

### Auto Chain-of-Thought

When you don't have good examples, let the model generate its own reasoning demonstrations.

**Technique:** Use clustering to generate diverse examples, then use those as few-shot demonstrations.

**Simplified version:**

\`\`\`
Q: [Your problem here]

Let's solve this step by step. First, I'll identify what we know and what we need to find. Then I'll break this into smaller sub-problems. Finally, I'll combine the results.

[Model generates its own reasoning]
\`\`\`

**When to use:**
- You don't have good examples available
- The problem domain is unfamiliar
- You want to explore different reasoning approaches

---

### Complexity-Based CoT

Generate multiple reasoning paths and select the most coherent one.

**Implementation:**
1. Ask the model to solve the problem 3-5 times
2. Evaluate the complexity/quality of each reasoning chain
3. Select the answer from the most detailed reasoning

**Example prompt:**

\`\`\`
Solve this problem 3 different ways, using different approaches each time:

[Problem statement]

For each approach:
1. Clearly state your method
2. Show all reasoning steps
3. State your final answer

Then, evaluate which approach seems most reliable and explain why.
\`\`\`

**Why it works:** Different reasoning paths may catch different errors. By comparing multiple approaches, you increase the likelihood of finding the correct answer.

---

### Self-Consistency CoT

The most robust CoT variant — generate multiple independent solutions and take the majority vote.

**Process:**
1. Generate N independent CoT solutions (typically 5-10)
2. Extract the final answer from each
3. Select the most common answer

**Example:**

\`\`\`
Solve this problem independently 5 times:

Q: If a shirt costs $25 and there's a 20% discount on purchases of 3 or more items, how much do 5 shirts cost?

[Run 1]: ... Answer: $100
[Run 2]: ... Answer: $100
[Run 3]: ... Answer: $100
[Run 4]: ... Answer: $125 (different reasoning path)
[Run 5]: ... Answer: $100

Majority vote: $100 (4 out of 5 agree)
\`\`\`

**When to use:**
- Math problems where accuracy is critical
- Logic puzzles
- Medical/legal analysis where errors are costly

**Trade-off:** 5x the tokens and API calls, but significantly higher accuracy.

---

### Choosing the Right CoT Variant

| Scenario | Recommended Variant |
|---|---|
| Quick math problem | Zero-Shot CoT |
| Domain-specific reasoning | Few-Shot CoT |
| Exploring solution approaches | Auto-CoT or Complexity-Based |
| High-stakes decisions | Self-Consistency CoT |
| Unknown problem type | Start with Zero-Shot, escalate if needed |

---

### Common Mistakes to Avoid

- **Mistake:** Using CoT for simple tasks — **Fix:** CoT adds overhead; use it only when reasoning steps are genuinely needed.
- **Mistake:** Too few examples in few-shot CoT — **Fix:** 3-5 diverse examples establish a clear pattern.
- **Mistake:** Not verifying the reasoning — **Fix:** The model can make logical errors even with CoT; validate critical steps.
- **Mistake:** Assuming more steps = better answer — **Fix:** Focus on quality of reasoning, not quantity.

### Professional Tips & Tricks

- Start with zero-shot CoT ("Let's think step by step") — it's often sufficient.
- For few-shot CoT, include examples that cover edge cases.
- Self-consistency is worth the extra cost for high-stakes decisions.
- Document which CoT variant works best for your common use cases.

---

### Key Takeaways

- Zero-shot CoT is the simplest: just add "Let's think step by step."
- Few-shot CoT provides examples with explicit reasoning chains.
- Auto-CoT generates its own examples when you don't have good ones.
- Self-consistency takes multiple solutions and votes on the best answer.
- Choose the variant based on task complexity and accuracy requirements.

**Next up:** Self-reflection and self-critique techniques for improving output quality.`,
      codeLanguage: "text",
      codeSnippet: `# Chain-of-Thought Variants Comparison

## Zero-Shot CoT
Simplest approach - add magic phrase:
"Let's think step by step"

Best for: Quick reasoning boost
Token cost: Low

## Few-Shot CoT
Examples with explicit reasoning:
"Q: [problem]
A: Step 1... Step 2... Answer: [result]"

Best for: Complex, domain-specific reasoning
Token cost: Medium

## Auto-CoT
Model generates its own examples:
"First, let's identify what we know..."

Best for: When you lack good examples
Token cost: Medium

## Complexity-Based CoT
Multiple approaches, evaluate each:
"Solve this 3 different ways..."

Best for: Exploring solution paths
Token cost: High

## Self-Consistency CoT
Multiple independent solutions, majority vote:
"Solve this 5 times independently..."

Best for: High-stakes accuracy
Token cost: Very High

## Decision Matrix

| Task Type | Recommended Variant |
|-----------|---------------------|
| Simple math | Zero-Shot CoT |
| Word problems | Few-Shot CoT |
| Logic puzzles | Self-Consistency |
| Creative problems | Complexity-Based |
| Unknown domain | Auto-CoT |`,
      codeOutput: `Chain-of-Thought Variants Comparison

## Zero-Shot CoT
Simplest approach - add magic phrase:
"Let's think step by step"

Best for: Quick reasoning boost
Token cost: Low

## Few-Shot CoT
Examples with explicit reasoning:
"Q: [problem]
A: Step 1... Step 2... Answer: [result]"

Best for: Complex, domain-specific reasoning
Token cost: Medium

## Auto-CoT
Model generates its own examples:
"First, let's identify what we know..."

Best for: When you lack good examples
Token cost: Medium

## Complexity-Based CoT
Multiple approaches, evaluate each:
"Solve this 3 different ways..."

Best for: Exploring solution paths
Token cost: High

## Self-Consistency CoT
Multiple independent solutions, majority vote:
"Solve this 5 times independently..."

Best for: High-stakes accuracy
Token cost: Very High

## Decision Matrix

| Task Type | Recommended Variant |
|-----------|---------------------|
| Simple math | Zero-Shot CoT |
| Word problems | Few-Shot CoT |
| Logic puzzles | Self-Consistency |
| Creative problems | Complexity-Based |
| Unknown domain | Auto-CoT |`,
      visualizationTips: [
        "Create a flowchart showing when to use each CoT variant based on task complexity and accuracy needs.",
        "Draw a comparison table showing token cost vs accuracy for each variant.",
        "Map out the decision process: Start simple → escalate if needed.",
      ],
      tipsAndTricks: [
        "Always start with zero-shot CoT — only escalate to more complex variants if needed.",
        "For self-consistency, 5 solutions is usually enough for majority voting.",
        "Document which CoT variant works best for your use cases.",
      ],
      practice: [
        {
          id: "practice-cot-variants",
          title: "CoT Variant Selection",
          difficulty: "Medium",
          task: "For each scenario, select the most appropriate CoT variant and explain why: (1) Quick tax calculation, (2) Medical diagnosis reasoning, (3) Exploring multiple solution approaches for a business problem.",
          hint: "Consider task complexity, accuracy requirements, and token budget.",
          solution: `1. Quick tax calculation → Zero-Shot CoT
   Why: Simple math, low stakes, need quick answer

2. Medical diagnosis reasoning → Self-Consistency CoT
   Why: High stakes, accuracy critical, errors have serious consequences

3. Business problem exploration → Complexity-Based CoT
   Why: Want to see multiple approaches, can evaluate trade-offs`,
        },
        {
          id: "practice-few-shot-cot",
          title: "Create Few-Shot CoT Examples",
          difficulty: "Hard",
          task: "Write 3 few-shot CoT examples for solving percentage word problems. Each example should show different reasoning patterns.",
          hint: "Include diverse problem types: simple percentage, percentage increase, percentage of a percentage.",
          solution: `Example few-shot CoT:

Q: What is 15% of 200?
A: Let me break this down. 15% means 15 per 100. So I need to find what 15 parts are out of 200 total. Calculation: 200 × 0.15 = 30. Answer: 30.

Q: A $50 item is on sale for 20% off. What's the sale price?
A: First, find the discount amount: $50 × 0.20 = $10. Then subtract from original: $50 - $10 = $40. Answer: $40.

Q: If a population grows 5% per year for 2 years starting at 1000, what's the final population?
A: Year 1: 1000 × 1.05 = 1050. Year 2: 1050 × 1.05 = 1102.5. Answer: 1102.5 (or 1103 if rounding).`,
        },
      ],
    },
    {
      id: "self-reflection-techniques",
      title: "Lesson 5: Self-Reflection & Self-Critique",
      shortDescription:
        "Teach AI models to evaluate and improve their own outputs through reflection techniques.",
      duration: "55 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### The Power of Self-Reflection

One of the most powerful techniques in prompt engineering is getting the model to **evaluate and improve its own outputs**. This mirrors how human experts work — they don't just produce work, they review and refine it.

#### Why Self-Reflection Works

1. **Separation of Concerns**: Generating and evaluating are different cognitive tasks.
2. **Error Detection**: The model can catch mistakes it made in the first pass.
3. **Quality Improvement**: Iterative refinement produces better outputs.
4. **Reduced Hallucination**: Self-checking reduces made-up information.

> **Mental model:** Think of self-reflection as built-in quality control — the model becomes its own editor, catching errors and suggesting improvements.

---

### Technique 1: Generate → Evaluate → Refine

The fundamental self-reflection pattern:

**Step 1: Generate Initial Output**
\`\`\`
Write a marketing email for our new product launch.
\`\`\`

**Step 2: Evaluate the Output**
\`\`\`
Now evaluate this email critically:
- Is the subject line compelling?
- Does the opening hook the reader?
- Is the call-to-action clear and urgent?
- Are there any clichés or weak phrases?
- Score it 1-10 and explain your reasoning.
\`\`\`

**Step 3: Refine Based on Evaluation**
\`\`\`
Now rewrite the email addressing all the issues you identified.
\`\`\`

---

### Technique 2: Chain of Verification (CoVe)

A structured approach to fact-checking the model's own outputs:

**Step 1: Generate initial response**
**Step 2: List all factual claims made**
**Step 3: Verify each claim independently**
**Step 4: Produce final, verified response**

**Example:**

\`\`\`
1. Generate: "Write a summary of Python's history"

2. Extract claims:
   - Python was created by Guido van Rossum
   - First released in 1991
   - Named after Monty Python

3. Verify each claim:
   - Guido van Rossum ✓ (confirmed)
   - 1991 ✓ (confirmed)
   - Monty Python connection ✓ (confirmed)

4. Final response: [Verified summary]
\`\`\`

---

### Technique 3: Constitutional AI Prompting

Inspired by Anthropic's Constitutional AI, this technique gives the model principles to evaluate its own outputs.

**Example:**

\`\`\`
Write a customer service response to an angry customer.

Then evaluate your response against these principles:
1. Is it empathetic and acknowledge the customer's frustration?
2. Does it avoid blaming the customer?
3. Does it offer a clear resolution?
4. Is the tone professional but warm?
5. Does it maintain brand voice?

If any principle is violated, revise the response.
\`\`\`

**Common Constitutional Principles:**
- Accuracy: Is the information correct?
- Helpfulness: Does it actually solve the user's problem?
- Safety: Is it free from harmful content?
- Clarity: Is it easy to understand?
- Completeness: Does it address all aspects of the question?

---

### Technique 4: Refinment Prompts

Structured prompts that guide the model through systematic improvement:

\`\`\`
Review the following [content type] and improve it:

[Original content]

Improvement checklist:
1. Clarity: Are any sentences confusing or ambiguous?
2. Conciseness: Can any words be removed without losing meaning?
3. Accuracy: Are all facts correct?
4. Structure: Is the organization logical?
5. Engagement: Is it interesting to read?
6. Grammar: Are there any errors?

For each issue found:
- Quote the problematic text
- Explain why it's an issue
- Provide the improved version

Then provide the complete revised version.
\`\`\`

---

### Technique 5: Perspective Shifting

Ask the model to evaluate from different viewpoints:

\`\`\`
You're writing a blog post about remote work.

First, write the initial draft.

Then evaluate it from these perspectives:

1. As a CEO: Is this practical and business-focused?
2. As an employee: Does this resonate with daily experiences?
3. As a skeptic: What counterarguments are missing?
4. As an editor: Is the writing quality high?

Synthesize feedback and create an improved version.
\`\`\`

---

### Building Self-Reflection Into Your Prompts

**Template: Reflective Prompt**

\`\`\`
[TASK: Your original request]

After generating your response:
1. Identify 3 potential weaknesses or errors
2. Suggest specific improvements for each
3. Rate your confidence in the final answer (1-10)
4. If confidence < 7, explain what additional information would help

Provide your final, improved response.
\`\`\`

---

### Common Mistakes to Avoid

- **Mistake:** Skipping the evaluation step — **Fix:** Always include explicit evaluation criteria.
- **Mistake:** Accepting the first improvement — **Fix:** Run 2-3 reflection cycles for critical content.
- **Mistake:** Vague evaluation criteria — **Fix:** Be specific about what "good" looks like.
- **Mistake:** Not validating facts — **Fix:** Use Chain of Verification for factual content.

### Professional Tips & Tricks

- For high-stakes content, always run at least one reflection cycle.
- Use checklists to make evaluation systematic and repeatable.
- Document common issues you find — they become prevention items for future prompts.
- Combine self-reflection with few-shot examples of good evaluations.

---

### Key Takeaways

- Self-reflection separates generation from evaluation, improving quality.
- The Generate → Evaluate → Refine pattern is foundational.
- Chain of Verification fact-checks the model's own claims.
- Constitutional AI gives the model principles to evaluate against.
- Perspective shifting catches blind spots by evaluating from multiple viewpoints.

**Next up:** Handling edge cases and error recovery in prompts.`,
      codeLanguage: "text",
      codeSnippet: `# Self-Reflection Prompt Templates

## Basic Reflective Prompt
"Write [content type] about [topic].

Then evaluate your response:
1. Identify 3 weaknesses
2. Suggest improvements
3. Rate confidence (1-10)
4. If confidence < 7, explain what would help

Provide final improved version."

## Chain of Verification Template
"1. Answer this question: [question]

2. List every factual claim you made

3. For each claim, provide:
   - Your confidence level (high/medium/low)
   - What evidence supports it
   - Any caveats or uncertainty

4. Produce a final, verified answer"

## Constitutional AI Template
"Complete this task: [task]

Then evaluate against these principles:
- Accuracy: Is all information correct?
- Helpfulness: Does it solve the problem?
- Safety: Is it free from harmful content?
- Clarity: Is it easy to understand?
- Completeness: Are all aspects addressed?

Revise if any principle is violated."

## Perspective Shifting Template
"Write [content] about [topic].

Evaluate from these perspectives:
1. Expert in the field
2. Skeptic/critic
3. End user/consumer
4. Editor for quality

Synthesize feedback and improve."`,
      codeOutput: `Self-Reflection Prompt Templates

## Basic Reflective Prompt
"Write [content type] about [topic].

Then evaluate your response:
1. Identify 3 weaknesses
2. Suggest improvements
3. Rate confidence (1-10)
4. If confidence < 7, explain what would help

Provide final improved version."

## Chain of Verification Template
"1. Answer this question: [question]

2. List every factual claim you made

3. For each claim, provide:
   - Your confidence level (high/medium/low)
   - What evidence supports it
   - Any caveats or uncertainty

4. Produce a final, verified answer"

## Constitutional AI Template
"Complete this task: [task]

Then evaluate against these principles:
- Accuracy: Is all information correct?
- Helpfulness: Does it solve the problem?
- Safety: Is it free from harmful content?
- Clarity: Is it easy to understand?
- Completeness: Are all aspects addressed?

Revise if any principle is violated."

## Perspective Shifting Template
"Write [content] about [topic].

Evaluate from these perspectives:
1. Expert in the field
2. Skeptic/critic
3. End user/consumer
4. Editor for quality

Synthesize feedback and improve."`,
      visualizationTips: [
        "Create a flowchart showing the Generate → Evaluate → Refine cycle.",
        "Draw a mind map of different self-reflection techniques and when to use each.",
        "Create a checklist template for systematic evaluation.",
      ],
      tipsAndTricks: [
        "For critical content, run 2-3 reflection cycles — each iteration catches different issues.",
        "Use specific evaluation criteria, not vague ones like 'make it better'.",
        "Document common issues you find — they become prevention items for future prompts.",
      ],
      practice: [
        {
          id: "practice-self-reflection",
          title: "Self-Reflection Exercise",
          difficulty: "Medium",
          task: "Write a short product description, then use the Generate → Evaluate → Refine technique to improve it. Show all three stages.",
          hint: "Be specific in your evaluation criteria.",
          solution: `Stage 1: Initial Draft
"Buy our new headphones. They have good sound and are comfortable. You'll like them."

Stage 2: Evaluation
- Weaknesses:
  1. Vague benefits ("good sound" - how good?)
  2. No differentiation from competitors
  3. Weak call-to-action
  4. No emotional appeal
- Score: 3/10

Stage 3: Refined Version
"Experience studio-quality sound with our new ProSound X1 headphones. 
Featuring 40mm drivers and memory foam cushions, they deliver 
crystal-clear audio for up to 30 hours on a single charge. 
Whether you're commuting or working from home, immerse yourself 
in sound that moves you. Order now and get free shipping."`,
        },
        {
          id: "practice-chain-of-verification",
          title: "Chain of Verification Exercise",
          difficulty: "Hard",
          task: "Write a paragraph about the history of the internet, then use Chain of Verification to fact-check every claim you made.",
          hint: "List each factual claim and verify it.",
          solution: `Step 1: Initial Response
"The internet was developed in the 1960s by ARPANET, a project funded by the US Department of Defense. Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN. The first web browser was called Mosaic and was released in 1993."

Step 2: Claims and Verification
1. "Developed in 1960s by ARPANET" → Partially correct. ARPANET started in 1969, but "internet" evolved from multiple projects.
2. "Funded by US Department of Defense" → ✓ Correct (DARPA)
3. "Tim Berners-Lee invented WWW in 1989" → ✓ Correct
4. "Working at CERN" → ✓ Correct
5. "First web browser called Mosaic, 1993" → Partially correct. Mosaic was influential but not technically first (WorldWideWeb was earlier).

Step 3: Revised Response
"The internet traces its roots to the late 1960s, when ARPANET, funded by the US Department of Defense, established the first packet-switching network. In 1989, Tim Berners-Lee, working at CERN, proposed the World Wide Web system. The Mosaic browser, released in 1993, was instrumental in popularizing the web, though earlier browsers like WorldWideWeb existed."`,
        },
      ],
    },
    {
      id: "error-recovery-patterns",
      title: "Lesson 6: Error Recovery & Edge Case Handling",
      shortDescription:
        "Learn techniques for handling errors, edge cases, and unexpected outputs in your prompts.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Error Recovery Matters

Even the best prompts sometimes produce unexpected results. Mastering error recovery means you can handle edge cases gracefully and get reliable outputs even when things go wrong.

#### Common Error Types

| Error Type | Description | Example |
|---|---|---|
| **Format Errors** | Output doesn't match expected structure | JSON parse failures |
| **Hallucination** | Model invents facts or references | Fake citations, made-up statistics |
| **Incomplete Output** | Response cuts off mid-sentence | Long responses truncated |
| **Off-Topic Drift** | Model veers away from the task | Adding unrelated information |
| **Refusal** | Model declines to answer | "I can't help with that" |
| **Bias** | Output shows unfair preferences | Stereotypical associations |

> **Mental model:** Think of error recovery as having a safety net — you plan for failure so you're never caught off guard.

---

### Technique 1: Defensive Prompting

Anticipate errors and build safeguards into your prompts.

**Example:**

\`\`\`
Write a product description for our new smartwatch.

Requirements:
- Exactly 3 paragraphs
- Include: features, benefits, call-to-action
- Do NOT include: competitor comparisons, pricing, fake statistics
- If you're unsure about a feature, say "up to" or omit it rather than guessing

Format: Markdown with H2 headers for each section.
\`\`\`

**Defensive techniques:**
- Explicitly state what NOT to include
- Provide fallback instructions for uncertain cases
- Specify exact format requirements
- Include validation criteria

---

### Technique 2: Output Validation Prompts

Ask the model to validate its own output before delivering it.

\`\`\`
[Original task]

Before providing your final answer:
1. Check that all dates are plausible (not in the future for historical content)
2. Verify that all statistics have reasonable magnitudes
3. Ensure no competitor names are mentioned (unless specifically asked)
4. Confirm the response is within the specified length
5. If any check fails, correct the issue and explain what was wrong
\`\`\`

---

### Technique 3: Graceful Degradation

When the model can't complete the full task, get partial results with clear explanations.

**Example:**

\`\`\`
Analyze this dataset and provide insights.

If you cannot complete the full analysis:
1. Explain what information is missing or unclear
2. Provide whatever insights you CAN derive
3. List exactly what additional information would be needed
4. Give a confidence level for the partial analysis

Never guess or make up data to fill gaps.
\`\`\`

---

### Technique 4: Retry Logic with Context

When the first attempt fails, provide context about what went wrong.

**First attempt:**
\`\`\`
Convert this data to JSON format:
[Data here]
\`\`\`

**If output is malformed, retry with:**
\`\`\`
The previous JSON output had syntax errors. Here's what was wrong:
[Error details]

Please regenerate the JSON, ensuring:
- All strings are properly quoted
- No trailing commas
- Valid JSON syntax throughout

Here's the data again:
[Data here]
\`\`\`

---

### Technique 5: Boundary Testing

Explicitly test edge cases in your prompts.

\`\`\`
Write a function that calculates the average of a list of numbers.

Handle these edge cases:
- Empty list: Return 0 or raise appropriate error
- Single element: Return that element
- Negative numbers: Include in average
- Zero values: Include in average
- Very large numbers: Handle without overflow

Show the function and test cases for each edge case.
\`\`\`

---

### Handling Specific Error Types

#### Fixing Hallucination

\`\`\`
[Original prompt]

IMPORTANT: Only include information you are confident about.
- If you're unsure about a specific fact, say "I'm not certain, but..."
- Do not make up statistics, dates, or names
- If you cannot answer confidently, say so rather than guessing
\`\`\`

#### Fixing Format Errors

\`\`\`
Return your response as valid JSON with this exact structure:
{
  "key1": "string value",
  "key2": number,
  "key3": ["array", "of", "strings"]
}

Before outputting, verify:
- All braces and brackets are balanced
- All strings use double quotes
- No trailing commas
- Numbers don't have quotes around them
\`\`\`

#### Fixing Incomplete Output

\`\`\`
Write a comprehensive guide about [topic].

IMPORTANT: This must be complete. Do not stop mid-sentence or say "to be continued."
If the content is long, structure it with clear sections so I know it's complete.
End with a clear conclusion or summary.
\`\`\`

---

### Building Error Recovery Into Workflows

**Workflow Template:**

\`\`\`
Step 1: Generate initial response
Step 2: Validate against criteria:
  - [ ] Format is correct
  - [ ] All facts are verifiable
  - [ ] Response is complete
  - [ ] No off-topic content
Step 3: If validation fails:
  - Identify specific issues
  - Retry with corrective instructions
  - Maximum 2 retries before asking for clarification
Step 4: Final delivery with confidence score
\`\`\`

---

### Common Mistakes to Avoid

- **Mistake:** Not specifying what "success" looks like — **Fix:** Always define validation criteria upfront.
- **Mistake:** Giving up after one failed attempt — **Fix:** Use retry logic with specific corrective feedback.
- **Mistake:** Ignoring edge cases — **Fix:** Explicitly test boundary conditions.
- **Mistake:** Assuming the model knows your constraints — **Fix:** State all requirements explicitly.

### Professional Tips & Tricks

- Build a library of error recovery prompts for common issues.
- For critical workflows, always include a validation step.
- Track which errors occur most frequently — they become prevention items.
- Use "defensive prompting" by default for important content.

---

### Key Takeaways

- Defensive prompting anticipates errors and builds safeguards.
- Output validation catches issues before delivery.
- Graceful degradation gets partial results when full completion isn't possible.
- Retry logic with context helps fix errors efficiently.
- Boundary testing ensures your prompts handle edge cases.

**Next up:** Building complete AI workflows with prompt chaining and orchestration.`,
      codeLanguage: "text",
      codeSnippet: `# Error Recovery Templates

## Defensive Prompt Template
"[Task description]

Requirements:
- [Specific requirements]

IMPORTANT constraints:
- Do NOT include: [things to avoid]
- If unsure, [fallback instruction]
- Maximum length: [limit]

Format: [exact format specification]

Validate before delivering:
1. [Validation criterion 1]
2. [Validation criterion 2]
3. [Validation criterion 3]"

## Graceful Degradation Template
"[Task description]

If you cannot complete the full task:
1. Explain what information is missing
2. Provide whatever you CAN derive
3. List what additional info is needed
4. Give confidence level for partial results

Never guess or make up data."

## Retry Template
"The previous attempt had issues:
[Error details]

Please regenerate, ensuring:
- [Specific fix 1]
- [Specific fix 2]

Here's the original input:
[Input data]"

## Boundary Testing Template
"[Task description]

Handle these edge cases:
- Empty input: [Expected behavior]
- Single item: [Expected behavior]
- Invalid input: [Expected behavior]
- Large input: [Expected behavior]

Show solutions for each case."`,
      codeOutput: `Error Recovery Templates

## Defensive Prompt Template
"[Task description]

Requirements:
- [Specific requirements]

IMPORTANT constraints:
- Do NOT include: [things to avoid]
- If unsure, [fallback instruction]
- Maximum length: [limit]

Format: [exact format specification]

Validate before delivering:
1. [Validation criterion 1]
2. [Validation criterion 2]
3. [Validation criterion 3]"

## Graceful Degradation Template
"[Task description]

If you cannot complete the full task:
1. Explain what information is missing
2. Provide whatever you CAN derive
3. List what additional info is needed
4. Give confidence level for partial results

Never guess or make up data."

## Retry Template
"The previous attempt had issues:
[Error details]

Please regenerate, ensuring:
- [Specific fix 1]
- [Specific fix 2]

Here's the original input:
[Input data]"

## Boundary Testing Template
"[Task description]

Handle these edge cases:
- Empty input: [Expected behavior]
- Single item: [Expected behavior]
- Invalid input: [Expected behavior]
- Large input: [Expected behavior]

Show solutions for each case."`,
      visualizationTips: [
        "Create a decision tree for error handling: What error? → What caused it? → How to fix?",
        "Draw a flowchart showing the retry logic workflow.",
        "Create a checklist of common errors and their prevention strategies.",
      ],
      tipsAndTricks: [
        "Always define what 'success' looks like before generating content.",
        "For critical content, include validation criteria in every prompt.",
        "Track which errors occur most frequently — they become prevention items.",
      ],
      practice: [
        {
          id: "practice-error-recovery",
          title: "Error Recovery Exercise",
          difficulty: "Medium",
          task: "Write a prompt that asks for a JSON response, then add defensive measures to handle common JSON errors (missing quotes, trailing commas, etc.).",
          hint: "Include validation instructions and fallback behavior.",
          solution: `Defensive JSON Prompt:
"Convert this data to valid JSON:

[Data here]

Output as valid JSON with this structure:
{
  \"name\": \"string\",
  \"value\": number,
  \"items\": [\"string\"]
}

IMPORTANT:
- All strings must use double quotes
- No trailing commas
- Numbers should not be quoted
- Validate the JSON syntax before outputting

If you cannot produce valid JSON:
1. Explain what went wrong
2. Provide the closest valid JSON you can
3. Note any fields that couldn't be converted"`,
        },
        {
          id: "practice-boundary-testing",
          title: "Boundary Testing Exercise",
          difficulty: "Hard",
          task: "Write a function prompt that calculates shipping cost, and include boundary testing for edge cases like empty cart, invalid addresses, and international shipping.",
          hint: "Think about what could go wrong and handle each case.",
          solution: `Boundary-Tested Shipping Prompt:
"Write a function calculateShipping(cart, address) that:
- Returns cost for domestic shipping (US): $5.99 base + $0.50 per item
- Returns cost for international shipping: $15.99 base + $2.00 per item
- Returns 0 for empty cart
- Returns error for invalid address
- Handles negative quantities (treat as 0)

Show the function and test cases for:
1. Empty cart
2. Single domestic item
3. Multiple domestic items
4. International order
5. Invalid address
6. Negative quantity in cart
7. Very large order (100+ items)"`,
        },
      ],
    },
  ],
};
