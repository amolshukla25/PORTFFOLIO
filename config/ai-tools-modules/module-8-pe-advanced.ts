import type { Module } from "../courses";

export const PE_MODULE_2: Module = {
  id: "ai-tools-module-8-pe-advanced",
  title: "Module 8: [Prompt] Advanced Prompting Patterns",
  description:
    "Prompt Engineering Course · Structured outputs, reusable templates, and prompting for agents — the patterns professionals use in production.",
  lessons: [
    {
      id: "structured-outputs-templates",
      title: "Lesson 18: Structured Outputs & Reusable Templates",
      shortDescription:
        "Force consistent, machine-readable outputs with JSON, tables, and XML tags — and stop rewriting prompts from scratch.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Why Structured Outputs Matter

Free-form answers are useless when your pipeline needs to parse them. The fix: tell the model exactly what shape the output must take — and show it an example.

#### 1. Explicit Format Instructions

\`\`\`
Analyze this feedback and return JSON with EXACTLY this structure:
{
  "sentiment": "positive | negative | neutral",
  "key_themes": ["..."],
  "urgency": "high | medium | low"
}

Feedback: "Your product broke after 2 days and support hasn't replied!"
\`\`\`

The schema doubles as instructions: keys, allowed values, and types are all specified.

#### 2. The JSON Output Template

\`\`\`
Return ONLY valid JSON, no markdown fences:
{"summary": "...", "findings": [...], "confidence": 0.0-1.0}
\`\`\`

Then validate with \`json.loads()\` in your code — never assume the model got it right (use JSON mode / structured outputs when the API offers it).

#### 3. Markdown Tables

For comparisons and structured data:
\`\`\`
Compare React and Vue in a table:
| Aspect | React | Vue |
|---|---|---|
| Learning curve | | |
| Performance | | |
| Ecosystem | | |
\`\`\`

#### 4. XML Tags for Long, Multi-Part Outputs

\`\`\`
Write a blog post about AI in healthcare.

<outline>
[outline here]
</outline>

<introduction>
[1 paragraph]
</introduction>

<conclusion>
[2 sentences]
</conclusion>
\`\`\`

Tags let you (and the model) keep track of many sections — and let your code extract each part with a simple regex.

#### 5. Delimiters Keep Parts Separate

| Delimiter | Use |
|---|---|
| \`\`\` | Code blocks, long data |
| --- | Section separation |
| \\|\\|\\| | Separating examples |
| XML tags | Nested/multi-part structure |

**Golden rule:** never put user-provided text directly next to instructions — wrap it in delimiters (also a prompt-injection defense).

#### Reusable Prompt Templates

A template = a prompt with placeholder variables:

\`\`\`
You are a [ROLE] specializing in [DOMAIN].

TASK: Create a [CONTENT_TYPE] about [TOPIC].

CONTEXT:
- Audience: [AUDIENCE]
- Tone: [TONE]
- Goal: [GOAL]

OUTPUT FORMAT: [FORMAT]

EXAMPLE: [SHOW_ONE]
\`\`\`

Store templates in code with variables, and fill them per request:

\`\`\`
template.format(role="SEO writer", topic="local SEO", audience="plumbers")
\`\`\`

#### Template Library Ideas

- Content brief generator
- Data-analysis report (summary → findings → recommendations)
- Code review (correctness, style, security)
- Meeting notes (decisions, action items, owners)
- Customer reply drafts (tone-preserving)

---

### Key Takeaways

- Specify the exact output shape (JSON/table/XML) and show an example.
- Validate structured output in code — JSON mode when available.
- Delimiters separate data from instructions and resist injection.
- Templates make your best prompts reusable; version them like code.

**Next up:** Prompting for agents — system prompts, tool schemas, and multi-step workflows.`,
      codeLanguage: "python",
      codeSnippet: `# A reusable prompt template + JSON output validation in code
template = """You are a {role} specializing in {domain}.

Analyze the following input and return ONLY valid JSON matching:
{{
  "summary": "string",
  "top_findings": ["string"],
  "recommendation": "string"
}}

INPUT: {user_input}"""

prompt = template.format(
    role="customer success analyst",
    domain="SaaS churn",
    user_input='"We lost 40 customers this month, mostly from the starter plan."',
)

print(prompt)

# After the model replies, ALWAYS validate before trusting:
import json
model_reply = '{"summary": "Starter-plan churn is high.", "top_findings": ["40 customers lost"], "recommendation": "Investigate onboarding for starter plan."}'
try:
    parsed = json.loads(model_reply)
    print(f"\\nValid JSON! Keys: {list(parsed.keys())}")
except json.JSONDecodeError:
    print("\\nInvalid JSON - retry or repair the output.")`,
      codeOutput: `You are a customer success analyst specializing in SaaS churn.

Analyze the following input and return ONLY valid JSON matching:
{
  "summary": "string",
  "top_findings": ["string"],
  "recommendation": "string"
}

INPUT: "We lost 40 customers this month, mostly from the starter plan."

Valid JSON! Keys: ['summary', 'top_findings', 'recommendation']`,
      visualizationTips: [
        "Draw the JSON schema as a form with fields and allowed values the model must 'fill in'.",
        "Diagram the template as a fill-in-the-blanks card with variables as empty slots.",
        "Color-code a structured-output prompt: instructions vs. example schema vs. real data.",
      ],
      tipsAndTricks: [
        "Add 'no markdown fences, no explanations, JSON only' — models love wrapping JSON in prose.",
        "Use the API's structured output / JSON mode when available; fall back to prompts elsewhere.",
        "Wrap any user-supplied data in <user_input>…</user_input> tags to resist prompt injection.",
      ],
      practice: [
        {
          id: "practice-json-template",
          title: "Design a JSON Prompt",
          difficulty: "Medium",
          task: "Write a prompt that extracts {product, price, currency} from a shopping message and returns clean JSON. Include the schema and the 'JSON only' rule.",
          hint: "Show the exact schema; specify types; forbid extra text.",
          solution: `Extract order details from the message below.

Return ONLY valid JSON (no markdown, no explanation) with this schema:
{
  "product": "string",
  "price": "number",
  "currency": "string"
}

If a field is missing, use null.

MESSAGE: "Can you add the wireless mouse for $29.99?"

Expected: {"product": "wireless mouse", "price": 29.99, "currency": "USD"}

Always parse with json.loads() and handle failure (retry or repair) —
prompts get you 95% there, validation gets you 100%.`,
        },
      ],
    },
    {
      id: "prompting-agentic-workflows",
      title: "Lesson 19: Prompting for Agentic Workflows",
      shortDescription:
        "System prompts for agents, tool-use instructions, prompt chaining, and evaluation — production prompting for AI tools.",
      duration: "60 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### The Agent Prompt Is a Job Description

When you prompt an agent, you're writing the rules for a worker that decides its own steps. Structure beats cleverness here.

#### The Agent System Prompt Template

\`\`\`
You are [ROLE] with access to [TOOLS].

GOAL: [what success looks like]

AVAILABLE TOOLS (name: description):
- tool_a(...): [when to use]
- tool_b(...): [when to use]

RULES:
1. Think before acting; call one tool at a time.
2. Stop and answer when you have enough information.
3. If a tool fails, try once more, then report the error.
4. Never invent tool results.

EXAMPLE:
[one full turn: Thought / Action / Observation / Answer]
\`\`\`

#### Writing Tool Instructions (The Highest-Leverage Part)

Each tool description is a mini-prompt the model reads when deciding:

| Weak description | Strong description |
|---|---|
| "get_weather(city)" | "Get current weather for a city. Use when the user asks about weather or temperature." |
| "search(q)" | "Search the knowledge base for internal policies. Use for HR/IT questions. Returns up to 5 snippets." |

The model chooses tools by these descriptions — vague descriptions cause wrong tool picks.

#### Prompt Chaining: One Task, Many Prompts

Break big jobs into chained prompts where each output feeds the next:

\`\`\`
1. "List 10 trending AI topics for 2026."
2. "For each, write a one-line hook."
3. "Expand #3 into a 500-word outline."
\`\`\`

Chaining beats one giant prompt: each stage gets a focused context, and you can review/redirect between stages.

#### The Reflect–Revise Pattern

For high-stakes output, add a self-review pass:

1. **Draft**: generate the answer.
2. **Critique**: "List the weaknesses of the draft against the rubric."
3. **Revise**: "Rewrite fixing the weaknesses."

This 'generate → critique → revise' loop measurably improves drafts — at the cost of extra tokens.

#### Evaluating Prompts (Bring Back Lesson 15)

| Change | How to Verify |
|---|---|
| New system prompt | Same 20-test golden set, compare scores |
| New tool description | Does the agent now call the right tool? |
| New chain order | End-to-end output quality + cost |
| Temperature change | Consistency across 5 runs |

---

### Key Takeaways

- An agent prompt = role + goal + tool catalog + rules + an example turn.
- Tool descriptions are prompts — write them for the model, not for humans.
- Chain complex tasks into focused prompts; add a critique–revise pass for quality.
- Evaluate every change against a fixed test set.

**Course complete:** you now have the full toolkit — from how LLMs work to building and prompting agents. Keep learning, keep iterating.`,
      codeLanguage: "python",
      codeSnippet: `# A production-style agent system prompt, built in code
tools_section = """AVAILABLE TOOLS:
- get_weather(city: str) -> str
  Use when the user asks about weather or temperature.
- search_web(query: str) -> list[str]
  Use when the user asks for current information or research.
- calculate(expression: str) -> float
  Use for arithmetic or math questions.""" 

rules = """RULES:
1. Think step by step before acting.
2. Call at most one tool per turn.
3. When you have enough information, stop and answer.
4. Never invent tool results - report errors honestly."""

example = """EXAMPLE:
User: "What's the weather in Delhi?"
Assistant: I'll check the weather for Delhi.
Action: get_weather("Delhi")
Observation: "32C, sunny"
Answer: The weather in Delhi is 32C and sunny."""

system_prompt = f"""You are a helpful AI agent.

GOAL: Answer user questions accurately using tools when needed.

{tools_section}

{rules}

{example}"""

print(system_prompt)`,
      codeOutput: `You are a helpful AI agent.

GOAL: Answer user questions accurately using tools when needed.

AVAILABLE TOOLS:
- get_weather(city: str) -> str
  Use when the user asks about weather or temperature.
- search_web(query: str) -> list[str]
  Use when the user asks for current information or research.
- calculate(expression: str) -> float
  Use for arithmetic or math questions.

RULES:
1. Think step by step before acting.
2. Call at most one tool per turn.
3. When you have enough information, stop and answer.
4. Never invent tool results - report errors honestly.

EXAMPLE:
User: "What's the weather in Delhi?"
Assistant: I'll check the weather for Delhi.
Action: get_weather("Delhi")
Observation: "32C, sunny"
Answer: The weather in Delhi is 32C and sunny.`,
      visualizationTips: [
        "Draw the agent system prompt as an org chart: GOAL at top, TOOLS and RULES below, EXAMPLE as the footer.",
        "Diagram a prompt chain as boxes with arrows — output of one feeds the next.",
        "Sketch the critique–revise loop: Draft → Critique → Revise → Ship.",
      ],
      tipsAndTricks: [
        "Include one full worked example turn in agent prompts — it teaches the format better than 10 rules.",
        "After changing any prompt, re-run your golden set — 'small' prompt edits move scores a lot.",
        "Log prompts + outputs per run; agent debugging lives or dies on traces.",
      ],
      practice: [
        {
          id: "practice-agent-prompt",
          title: "Write an Agent System Prompt",
          difficulty: "Hard",
          task: "Write a complete system prompt for a 'support triage agent' with tools: search_faq, escalate_to_human, and reply_draft. Include goal, tool descriptions, rules, and one example turn.",
          hint: "Think about when it should escalate instead of answering.",
          solution: `You are a customer support triage agent.

GOAL: Resolve simple issues from the FAQ; escalate anything sensitive or unresolved.

AVAILABLE TOOLS:
- search_faq(query) -> snippets
  Use FIRST for every question. Returns matching FAQ entries.
- reply_draft(issue, resolution) -> text
  Use to draft a polite reply after finding a resolution.
- escalate_to_human(ticket_id, reason) -> status
  Use when: legal/account/billing disputes, repeated failures, or user asks for a human.

RULES:
1. Always search_faq before answering.
2. If the FAQ has no answer after one retry, escalate - do not guess.
3. Never promise refunds or deadlines not in the FAQ.
4. Keep drafts under 80 words and end with a question.

EXAMPLE:
User: "Where is my order #4821?"
Action: search_faq("order status")
Observation: FAQ: "Order status appears in your account under Orders."
Action: reply_draft(...)
Answer: "Your order #4821 status is in your account under Orders — shall I walk you through it?"`,
        },
      ],
    },
  ],
};
