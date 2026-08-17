import type { Module } from "../courses";

export const PE_MODULE_1: Module = {
  id: "ai-tools-module-7-pe-foundations",
  title: "Module 7: [Prompt] Prompt Engineering Foundations",
  description:
    "Prompt Engineering Course · Master the anatomy of an effective prompt and the three core techniques: zero-shot, few-shot, and chain-of-thought.",
  lessons: [
    {
      id: "prompt-anatomy",
      title: "Lesson 16: The Anatomy of an Effective Prompt",
      shortDescription:
        "Role, context, task, format, constraints — the five building blocks that turn vague requests into precise instructions.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Why Prompts Are the UI of AI

An LLM is a brilliant, literal assistant: it does exactly what you say, not what you *mean*. Prompt engineering is translating your intention into instructions the model cannot misunderstand.

#### The Five Building Blocks

| Block | Purpose | Example |
|---|---|---|
| **Role** | Who should the model be? | "You are a senior tax consultant…" |
| **Context** | What does the model need to know? | "I run a freelance design business in India…" |
| **Task** | What exactly should it do? | "Draft a client follow-up email…" |
| **Format** | How should the output look? | "A table with columns: Task, Deadline, Status" |
| **Constraints** | What must it avoid/respect? | "Under 150 words, no jargon, no promises you can't keep" |

Not every prompt needs all five — but the more complex the task, the more you need them.

#### Bad vs. Good Prompt

**Bad:** "Write about marketing."

**Good:**
\`\`\`
You are a marketing strategist for small B2B SaaS companies.

I sell project-management software to agencies with 10-50 staff.
Our differentiator is AI-powered time tracking.

Write a 300-word LinkedIn post announcing our new AI time-tracking
feature. Target: agency owners who hate manual timesheets.

Format: hook line, 3 short paragraphs, call to action.
Tone: confident but not salesy. No emojis. No hashtags.
\`\`\`

#### System vs. User Messages

- **System prompt**: persistent instructions for the whole conversation ("You are a helpful code reviewer…"). Set it once; it steers everything.
- **User message**: the current request, with task-specific details.

This separation is how chat apps keep behavior consistent across many turns.

#### Common Prompting Mistakes

| Mistake | Fix |
|---|---|
| Too vague ("make it better") | Say exactly what "better" means |
| No output format | State table / JSON / bullets / length |
| Burying the ask | Put the task early and repeat it at the end |
| Assuming knowledge | Give the model the facts it needs |
| One-shot and giving up | Iterate — prompting is a loop |

#### The Iteration Loop

1. Write the prompt → 2. Run it → 3. Notice what's wrong → 4. Fix the prompt → 5. Repeat.
Keep a **prompt library**: save the versions that work, with notes on why.

---

### Key Takeaways

- Five blocks: Role, Context, Task, Format, Constraints.
- System prompt = persistent rules; user prompt = the specific ask.
- Be concrete, state the format, and iterate instead of giving up.
- Save working prompts — you'll reuse them constantly.

**Next up:** Zero-shot, few-shot, and chain-of-thought — the core techniques.`,
      codeLanguage: "python",
      codeSnippet: `# Build a prompt from reusable parts (the "anatomy" of a prompt)
role = "You are a senior data analyst specializing in business metrics."
context = "Our SaaS startup tracks monthly active users (MAU) and churn."
task = "Analyze the churn trend and suggest one action to reduce churn."
format_rule = "Respond with: (1) Trend, (2) Likely cause, (3) One action."
constraints = "Keep it under 120 words. No jargon."

prompt = f"""{role}

CONTEXT: {context}

TASK: {task}

FORMAT: {format_rule}

CONSTRAINTS: {constraints}"""

print(prompt)`,
      codeOutput: `You are a senior data analyst specializing in business metrics.

CONTEXT: Our SaaS startup tracks monthly active users (MAU) and churn.

TASK: Analyze the churn trend and suggest one action to reduce churn.

FORMAT: Respond with: (1) Trend, (2) Likely cause, (3) One action.

CONSTRAINTS: Keep it under 120 words. No jargon.`,
      visualizationTips: [
        "Draw the prompt as a labeled diagram: 5 color-coded blocks (role, context, task, format, constraints).",
        "Put bad vs. good prompts side by side and annotate what each block adds.",
        "Sketch the system/user split as two layers over one conversation.",
      ],
      tipsAndTricks: [
        "Start prompts with the ROLE line — it measurably changes output quality.",
        "Put the most important instruction last: models weight the end of the prompt heavily.",
        "Version your prompts like code (v1, v2) and note what changed and why.",
      ],
      practice: [
        {
          id: "practice-anatomy-rewrite",
          title: "Rewrite a Vague Prompt",
          difficulty: "Easy",
          task: "Rewrite 'Tell me about SEO' using all five building blocks: role, context, task, format, constraints.",
          hint: "Invent a realistic persona and audience.",
          solution: `ROLE: You are an SEO consultant for small e-commerce stores.
CONTEXT: I sell handmade candles online; my site ranks poorly for "scented candles".
TASK: Explain the top 3 on-page SEO fixes I should make this month.
FORMAT: A numbered list, each fix with a one-line 'how to implement'.
CONSTRAINTS: Beginner-friendly, no jargon without explanation, under 250 words.

This gives the model everything it needs to produce a useful, specific answer —
the original one-line version produced a generic essay.`,
        },
      ],
    },
    {
      id: "zero-shot-few-shot-cot",
      title: "Lesson 17: Zero-Shot, Few-Shot & Chain-of-Thought",
      shortDescription:
        "The three core techniques every prompt engineer reaches for — and when to use each one.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The Core Technique Trio

Master these three and you can handle most prompting scenarios. They are ordered by increasing structure — add structure only when the task needs it.

#### 1. Zero-Shot (No Examples)

Give the model a task with no examples; rely on its pre-trained knowledge.

\`\`\`
Classify this review as positive, negative, or neutral:
"The product arrived on time and works as expected."
\`\`\`

- **Use when**: simple tasks, quick drafts, anything with an obvious right answer.
- **Cost**: cheapest, fastest.
- **Risk**: inconsistent for nuanced or format-sensitive tasks.

#### 2. Few-Shot (Show, Don't Tell)

Provide 3–5 examples of the exact input → output pattern before the real task.

\`\`\`
Classify these reviews:
Review: "Amazing quality!" -> Positive
Review: "Broke after a day." -> Negative
Review: "It's okay, nothing special." -> Neutral
Review: "The customer service was fantastic!" ->
\`\`\`

- **Use when**: specific formats, style imitation, tricky classifications.
- **Make examples diverse** — they should cover the pattern's range, not be clones.
- **3–5 examples** is the sweet spot; more rarely helps, fewer can under-teach.

#### 3. Chain-of-Thought (Think Step by Step)

Ask the model to reason out loud before answering.

\`\`\`
Solve step by step:
A store sells shirts for $25. A 20% discount applies when you
buy 3 or more. How much do 5 shirts cost? Show your reasoning.
\`\`\`

- **Use when**: math, logic, multi-step decisions, anything where the answer path matters.
- CoT dramatically improves accuracy on reasoning tasks — and lets you *read* the reasoning to spot errors.
- **Few-shot + CoT** (show a reasoning example, then ask) is even stronger.

#### Choosing the Right Technique

| Task | Technique |
|---|---|
| Simple classification | Zero-shot |
| Strict output format | Few-shot |
| Math / logic | Chain-of-thought |
| Style imitation | Few-shot with style examples |
| Critical reasoning | Few-shot + CoT |
| Creative brainstorm | Zero-shot + high temperature |

#### Common Mistakes

- **Mistake:** using few-shot where zero-shot suffices → wasted tokens.
- **Mistake:** examples too similar → model learns a narrow pattern.
- **Mistake:** asking for "step by step" but not actually checking the steps.
- **Mistake:** one attempt, then giving up — iterate instead.

---

### Key Takeaways

- Zero-shot = task only; few-shot = task + examples; CoT = task + reasoning.
- Start zero-shot, add examples only when output isn't good enough.
- Few-shot needs 3–5 *diverse* examples; CoT shines on reasoning tasks.
- Combine techniques: few-shot + CoT is the power move.

**Next up:** Advanced patterns — structured outputs, templates, and agentic prompting.`,
      codeLanguage: "python",
      codeSnippet: `# Few-shot and chain-of-thought prompts, built in code
examples = [
    ("meeting pushed to 3pm", "The meeting has been rescheduled to 3 PM."),
    ("need the report asap", "Please share the report at your earliest convenience."),
    ("can't make the call", "I am unable to attend the call."),
]

few_shot = "Rewrite each informal message in professional business English:\\n\\n"
for informal, formal in examples:
    few_shot += f'Informal: "{informal}"\\nFormal: "{formal}"\\n\\n'
few_shot += 'Informal: "gonna be late tomorrow"\\nFormal: '

chain_of_thought = (
    "Question: A store sells shirts for $25. A 20% discount applies when "
    "you buy 3 or more. How much do 5 shirts cost?\\n"
    "Answer step by step:\\n"
)

print("=== FEW-SHOT PROMPT ===\\n")
print(few_shot)
print("\\n=== CHAIN-OF-THOUGHT PROMPT ===\\n")
print(chain_of_thought)`,
      codeOutput: `=== FEW-SHOT PROMPT ===

Rewrite each informal message in professional business English:

Informal: "meeting pushed to 3pm"
Formal: "The meeting has been rescheduled to 3 PM."

Informal: "need the report asap"
Formal: "Please share the report at your earliest convenience."

Informal: "can't make the call"
Formal: "I am unable to attend the call."

Informal: "gonna be late tomorrow"
Formal: 

=== CHAIN-OF-THOUGHT PROMPT ===

Question: A store sells shirts for $25. A 20% discount applies when you buy 3 or more. How much do 5 shirts cost?
Answer step by step:
`,
      visualizationTips: [
        "Draw the three techniques as an escalation ladder: Zero-shot → Few-shot → CoT.",
        "Annotate a few-shot prompt, coloring examples vs. the real task so the pattern is visible.",
        "Trace a CoT answer step by step with arrows, checking each reasoning stage.",
      ],
      tipsAndTricks: [
        "Prefix CoT with 'Let me think through this step by step' — reliably boosts reasoning.",
        "Use delimiters (--- or |||) between few-shot examples and the real task.",
        "For strict formats, few-shot beats any amount of prose instructions.",
      ],
      practice: [
        {
          id: "practice-few-shot-cot",
          title: "Combine Few-Shot + CoT",
          difficulty: "Medium",
          task: "Build a few-shot + chain-of-thought prompt that classifies customer sentiment AND explains the reasoning, using 2 diverse examples.",
          hint: "Each example = review → sentiment → reasoning.",
          solution: `Classify each review's sentiment and briefly explain your reasoning.

Review: "Love this product, buying another!" →
Sentiment: Positive
Reasoning: Enthusiastic language ("love") and intent to repurchase.

Review: "It stopped working after two uses." →
Sentiment: Negative
Reasoning: Product failure with a short lifespan.

Review: "It's fine, does the job, nothing special." →
Sentiment: [fill in]
Reasoning: [fill in]

The examples teach BOTH the label format and the reasoning style —
the model now explains itself the same way.`,
        },
      ],
    },
  ],
};
