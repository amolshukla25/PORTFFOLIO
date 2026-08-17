import type { Module } from "../courses";

export const LLM_MODULE_4: Module = {
  id: "ai-tools-module-4-hallucinations",
  title: "Module 4: [LLM] Hallucinations",
  description:
    "LLM Course · Why models confidently invent facts, the types of hallucinations, and the techniques to detect and reduce them.",
  lessons: [
    {
      id: "why-llms-hallucinate",
      title: "Lesson 8: Why LLMs Hallucinate",
      shortDescription:
        "Hallucinations are a feature of how LLMs work, not a bug you can switch off. Understand the root causes.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### What Is a Hallucination?

A **hallucination** is output that is fluent, confident, and *wrong* — a fact, citation, or code snippet that looks real but was invented.

#### Why It's Inevitable

Remember the core loop from Lesson 1: **the model predicts the most *plausible* next token — not the *true* next token.** "Truth" was never part of the training objective. The model optimizes for text that looks like the text it was trained on.

| Root Cause | Explanation |
|---|---|
| **Next-token objective** | The model picks *likely* text, not *verified* text |
| **Knowledge cutoff** | Anything after training time is unknown — the model fills the gap with plausible guesses |
| **Rare facts** | The model never saw the fact, so it improvises from similar patterns |
| **Prompt ambiguity** | Vague questions leave room for the model to invent specifics |
| **Compression** | Trillions of tokens compress into billions of weights — details are lost |
| **Fine-tuning pressure** | RLHF rewards fluent, helpful answers — even when wrong |

#### Types of Hallucinations

| Type | Example |
|---|---|
| **Factual** | "The capital of Australia is Sydney." (it's Canberra) |
| **Fabricated sources** | A citation to a real-looking paper that doesn't exist |
| **Logical** | A confident proof with a wrong step |
| **Code** | An API function \`client.doThing()\` that was never in the library |
| **Instructional** | Following a false premise you gave it ("as you said, X, so…") |

#### The "Plausibility Trap"

The danger is that hallucinations are *indistinguishable in style* from correct answers. A model won't hedge when it's guessing — confidence is not calibrated to truth. You can ask "are you sure?" and it will often double down.

#### When Hallucinations Are Most Likely

- Open-ended questions about niche or recent topics.
- Requests for specific numbers, dates, and citations.
- Tasks outside the training data (new APIs, your internal docs).
- Long outputs where the model drifts from the original context.

---

### Key Takeaways

- Hallucinations come from the next-token objective — they cannot be "fixed" by prompting alone.
- The model optimizes plausibility, not truth; confidence ≠ correctness.
- New, niche, numeric, and cited content is where hallucinations live.
- Your job: build verification into the workflow (next lesson).

**Next up:** Detecting and reducing hallucinations — grounding, RAG, and verification.`,
      codeLanguage: "python",
      codeSnippet: `# Simulating the root cause: an LLM fills gaps with *plausible* text
knowledge = {
    "Capital of France": "Paris",
    "Capital of India": "New Delhi",
    "Speed of light": "299,792 km/s",
}

def tiny_llm(question):
    if question in knowledge:
        return f"Known fact: {knowledge[question]}"
    # Unknown question -> the model "invents" a confident answer
    return "Confident but unverified: the answer is almost certainly true."

for q in ["Capital of France", "Capital of Atlantis", "Speed of light"]:
    print(f"Q: {q}")
    print(f"A: {tiny_llm(q)}\\n")`,
      codeOutput: `Q: Capital of France
A: Known fact: Paris

Q: Capital of Atlantis
A: Confident but unverified: the answer is almost certainly true.

Q: Speed of light
A: Known fact: 299,792 km/s`,
      visualizationTips: [
        "Draw the knowledge boundary: training data inside the circle, everything after cutoff outside — note the model invents to fill the outside.",
        "Make a 'confidence vs. truth' scatter: correct answers and hallucinations both sit at high confidence.",
        "Keep a running list of real hallucinations you catch — you'll spot the pattern faster.",
      ],
      tipsAndTricks: [
        "For anything with dates, numbers, or citations, assume hallucination until verified.",
        "Notice the model's failure mode: it invents specifics to sound complete — ask for 'unknown' as an allowed answer.",
        "New versions of the same model still hallucinate — upgrading is not a fix; verification is.",
      ],
      practice: [
        {
          id: "practice-hallucination-types",
          title: "Classify the Hallucination",
          difficulty: "Easy",
          task: "Classify each as factual, fabricated-source, logical, or code hallucination: (a) 'According to Smith et al. 2019...' (paper doesn't exist), (b) 'The function pandas.read_xlsx() handles Excel files' (doesn't exist), (c) 'Mount Everest is 4,000 m tall'.",
          hint: "Think about what kind of thing was invented.",
          solution: `(a) Fabricated source — a citation to a non-existent paper.
(b) Code hallucination — an API that doesn't exist in the library.
(c) Factual — a real thing with a wrong value (Everest is ~8,849 m).

All three look fluent and confident. Only verification catches them.`,
        },
      ],
    },
    {
      id: "detecting-reducing-hallucinations",
      title: "Lesson 9: Detecting & Reducing Hallucinations",
      shortDescription:
        "Grounding, RAG, citations, self-checking prompts, and workflow design — the practical toolkit for trustworthy LLM output.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The Verification Toolkit

You cannot eliminate hallucinations — but you can architect systems that catch them. These techniques stack; use more of them for higher-stakes tasks.

#### 1. Grounding (Give the Model Facts)

Never ask the model to recall facts you already have. Put the source material in the prompt:

\`\`\`
Answer ONLY using the document below. If the answer is not in the
document, say "Not found in the provided document."

DOCUMENT:
[your data here]
\`\`\`

#### 2. RAG (Retrieval-Augmented Generation)

For large knowledge bases, retrieve the relevant chunks (Lesson 5, 13) and ground the answer in them. This is the professional standard for chatbots over your own data.

#### 3. Citations & Traceability

Require the model to cite which part of the provided text supports each claim:

> "Answer with inline references like [section 2.3] or [doc 1, para 4]. If a claim is unsupported, label it UNSUPPORTED."

Then a human (or a checker script) can verify.

#### 4. Structured Self-Check Prompts

- Ask the model to **quote the evidence before answering**.
- Ask it to list **assumptions** it made.
- Give it the **option to say "unknown"** — explicitly rewarding honesty over completion.
- Run a **second pass**: "Review your previous answer. Which claims are not supported by the source? Revise."

#### 5. Post-Processing Checks

| Check | Catches |
|---|---|
| Regex/JSON schema validation | Format hallucinations |
| Known-entity whitelist | Invented names/IDs |
| Citation-to-source matching | Fabricated references |
| Round-trip checks (summarize → re-read) | Drift |
| Human review for high stakes | Everything else |

#### 6. Calibrate the System, Not the Model

| Lever | Effect |
|---|---|
| Lower temperature (0–0.3) | Fewer random inventions |
| Smaller, focused prompts | Less room to drift |
| Grounding + RAG | Eliminates the "recall from nowhere" problem |
| Allowed answer: "I don't know" | Removes the pressure to invent |
| Human-in-the-loop review | Catch what automation misses |

#### A Simple Grounding Prompt Template

\`\`\`
You are a fact-checked assistant. Rules:
1. Answer ONLY from the CONTEXT below.
2. Quote the relevant CONTEXT line before each claim.
3. If CONTEXT does not contain the answer, reply exactly:
   "I cannot answer from the provided context."

CONTEXT:
{context}
\`\`\`

---

### Key Takeaways

- Ground every important answer in source material — never free-recall.
- Give the model permission to say "I don't know".
- Require citations and add automated checks on top.
- Stack techniques: grounding + RAG + verification + human review.

**Next up:** Agentic loops — turning LLMs from single-shot answerers into multi-step workers.`,
      codeLanguage: "python",
      codeSnippet: `# Reducing hallucinations: verify model answers against a source of truth
source = {
    "Paris": "Capital of France since 508 AD.",
    "Python": "Created by Guido van Rossum in 1991.",
}

def verify_answer(model_answer):
    for fact, truth in source.items():
        if fact in model_answer:
            return f"Verified: {truth}"
    return "Unverified - please check the source or add citations."

print(verify_answer("The capital of France is Paris."))
print(verify_answer("The moon is made of cheese."))

# A grounded generation prompt: the model may only use CONTEXT
def grounded_answer(question, context):
    # Simple relevance check: does the context mention the topic?
    topic = question.split()[-1].strip("?")
    if topic.lower() in context.lower():
        return f"Based on context: {context}"
    return "I cannot answer from the provided context."

print(grounded_answer("Who created Python?", "Python was created by Guido van Rossum in 1991."))
print(grounded_answer("What is the price of tea?", "Python was created by Guido van Rossum in 1991."))`,
      codeOutput: `Verified: Capital of France since 508 AD.
Unverified - please check the source or add citations.
Based on context: Python was created by Guido van Rossum in 1991.
I cannot answer from the provided context.`,
      visualizationTips: [
        "Draw the 'grounding sandwich': CONTEXT above and below the answer — the model reads facts, then writes within them.",
        "Diagram the RAG verification loop: Answer → Cite → Check against source → Pass/Reject.",
        "Make a checklist poster of the 6 levers: grounding, RAG, citations, self-check, post-checks, human review.",
      ],
      tipsAndTricks: [
        "The phrase 'answer only from the context' alone cuts hallucinations dramatically — make it your default.",
        "Add 'quote the evidence first' for any answer that will be shared externally.",
        "For numbers: 'if the number is not in the source, say UNKNOWN' — never let the model estimate.",
      ],
      practice: [
        {
          id: "practice-grounding-prompt",
          title: "Write a Grounding Prompt",
          difficulty: "Medium",
          task: "Write a system prompt that forces a support chatbot to answer only from the company FAQ, quote the FAQ line, and say 'I don't know' otherwise.",
          hint: "Include three rules: only-from-source, quote evidence, allowed to refuse.",
          solution: `SYSTEM PROMPT:
"You are a customer support assistant. Rules:
1. Answer ONLY using the FAQ below.
2. Before each answer, quote the FAQ line that supports it.
3. If the FAQ does not cover the question, reply exactly:
   'I don't have that information yet — our team will follow up.'
4. Never invent policies, prices, or timelines.

FAQ:
[company FAQ goes here]"

This turns the model into a retrieval-and-quote machine instead of a know-it-all.`,
        },
      ],
    },
  ],
};
