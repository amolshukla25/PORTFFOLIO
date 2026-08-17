import type { Module } from "../courses";

export const PE_MODULE_3: Module = {
  id: "ai-tools-module-9-pe-reasoning",
  title: "Module 9: [Prompt] Advanced Reasoning & Techniques",
  description:
    "Prompt Engineering Course · Go beyond the basics: self-consistency, tree of thought, persona prompting, and prompt chaining — with worked examples.",
  lessons: [
    {
      id: "self-consistency-sampling",
      title: "Lesson 20: Self-Consistency — Sample & Vote",
      shortDescription:
        "Run the same prompt several times and take the majority answer to lift accuracy on hard reasoning tasks, with examples.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### The Problem with One Answer

Chain-of-thought helps — but the model can still pick a wrong reasoning path. **Self-consistency** runs the same reasoning prompt **multiple times** and takes the **majority answer**. Wrong paths are diverse; the right path repeats.

#### The Recipe

1. Ask the question with chain-of-thought.
2. Generate **3–5 independent answers** (use a higher temperature like 0.5–0.7 so paths vary).
3. Cluster the answers and pick the **most common one** (majority vote).

#### Worked Example

\`\`\`
Question: A store sells shirts for $25. A 20% discount applies when
you buy 3 or more. How much do 5 shirts cost? Think step by step.
\`\`\`

Run it 5 times (temperature 0.6):

| Run | Reasoning path | Answer |
|---|---|---|
| 1 | 5 shirts → discount applies → 20% of 25 = 5 → 20 × 5 | **100** |
| 2 | Discount applies → 25 × 5 = 125 → 125 − 25 | **100** |
| 3 | Forgot discount → 25 × 5 | 125 |
| 4 | 20% off 25 = 5 → 20 each → 5 × 20 | **100** |
| 5 | Discount only on 3 → 3 × 20 + 2 × 25 | 110 |

**Majority = 100** — the correct answer wins even though runs 3 and 5 went wrong.

#### When to Use It

| Situation | Use Self-Consistency? |
|---|---|
| Math, logic, multi-step reasoning | ✅ Yes — biggest gains here |
| Factual recall (names, dates) | ⚠️ Rarely helps — all runs share the same wrong memory |
| Creative writing | ❌ No — you want variety, not a vote |
| Production APIs with budget | ⚠️ 3–5x cost and latency; use only for critical answers |

#### The Cost Trade-Off

| Runs | Accuracy gain | Cost |
|---|---|---|
| 1 | baseline | 1x |
| 3 | good | 3x |
| 5 | diminishing returns | 5x |

Rule of thumb: **start with 3 runs** for high-stakes reasoning, and only escalate if the vote is split.

#### Common Mistakes

- Voting on **creative** outputs — there is no "correct" creative answer.
- Using temperature 0 — all runs give the same answer, so the vote is pointless.
- Taking the "most common" of free-form essays — self-consistency works best with **short, extractable answers** (a number, a label, a one-line conclusion).

---

### Key Takeaways

- Self-consistency = multiple CoT runs + majority vote.
- It fixes *reasoning* errors, not *memory* errors.
- Works best with short, comparable answers; costs 3–5x.
- Use 3 runs first; escalate only when the vote is split.

**Next up:** Tree of thought and persona prompting — exploring branches and assigning expertise.`,
      codeLanguage: "python",
      codeSnippet: `# Self-consistency: sample several answers, take the majority
import random
from collections import Counter

answers = []

def sample_answer(seed):
    rng = random.Random(seed)
    # Simulates 5 CoT runs: correct answer 70% of the time
    return "21" if rng.random() < 0.7 else "20"

for i in range(5):
    ans = sample_answer(i)
    answers.append(ans)
    print(f"Sample {i+1}: {ans}")

vote = Counter(answers).most_common(1)[0]
print(f"\\nMajority vote: {vote[0]} (appeared {vote[1]} times)")`,
      codeOutput: `Sample 1: 20
Sample 2: 21
Sample 3: 20
Sample 4: 21
Sample 5: 21

Majority vote: 21 (appeared 3 times)`,
      visualizationTips: [
        "Draw 5 reasoning paths as arrows from the question; the majority arrow wins the vote.",
        "Make a tally chart of answers across runs — the 'cluster' around the correct one is the signal.",
        "Sketch the cost ladder: 1 run = 1x, 3 runs = 3x, 5 runs = 5x with accuracy plateauing.",
      ],
      tipsAndTricks: [
        "Extract the final answer as a single line ('Answer: ...') so votes are easy to compare.",
        "Use temperature 0.5–0.7 for the samples — too low gives clones, too high gives noise.",
        "Skip self-consistency for factual questions; ground those with RAG instead.",
      ],
      practice: [
        {
          id: "practice-self-consistency",
          title: "Vote on Reasoning Paths",
          difficulty: "Medium",
          task: "Below are 4 CoT answers to 'A pizza costs $12. A 10% tip is added. What is the total?' — answer with the majority: (a) 13.2, (b) 13.2, (c) 12.1, (d) 13.2.",
          hint: "Count how many agree.",
          solution: `Majority = $13.20 (answers a, b, and d agree).
Only (c) miscalculated the tip (added $0.10 instead of $1.20).

The majority vote is correct even though one path failed —
exactly why self-consistency beats a single run.`,
        },
      ],
    },
    {
      id: "tree-of-thought-prompting",
      title: "Lesson 21: Tree of Thought & Persona Prompting",
      shortDescription:
        "Explore several reasoning branches before deciding, and assign the model a persona to unlock specialized perspectives — with examples.",
      duration: "50 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### Two Techniques for Harder Problems

#### 1. Tree of Thought (ToT)

Chain-of-thought walks **one** path. **Tree of thought** walks **several branches in parallel**, evaluates each, and picks the best — like a chess player considering moves.

**When to use:** strategy, planning, multi-criteria decisions, anything with trade-offs.

**Example — choosing a marketing strategy:**

\`\`\`
I run a startup with a small budget. Evaluate 3 strategies
and pick one:

Strategy A: Influencer marketing
  - Cost: high | Time to results: medium | Risk: medium
Strategy B: Content marketing
  - Cost: low | Time to results: slow | Risk: low
Strategy C: Paid ads
  - Cost: medium | Time to results: fast | Risk: high

For each: score it 1-5 on cost, speed, and risk.
Then recommend the best for a startup with limited budget.
\`\`\`

The model explores each branch, then compares scores instead of committing to one path early.

**Prompt pattern for ToT:**

\`\`\`
1. List N candidate approaches.
2. For each, list its pros, cons, and risks.
3. Score each on [criteria].
4. Recommend the best and explain why.
\`\`\`

#### 2. Persona Prompting

Assign the model a role with expertise, perspective, and constraints. Personas change *what* the model attends to.

| Persona | Unlocks |
|---|---|
| "Senior tax consultant" | Compliance-focused, precise language |
| "10-year-old explaining to a friend" | Simple analogies, no jargon |
| "Skeptical code reviewer" | Security and edge cases |
| "Hiring manager" | Candidate-focused feedback |

**Weak vs. strong persona example:**

\`\`\`
Weak: "Review my resume."
Strong: "You are a senior engineering hiring manager at a
startup. Review my resume for a Senior Backend role. Focus on:
impact metrics, missing keywords, and red flags. Give 5
actionable fixes ranked by impact."
\`\`\`

#### Persona + ToT Combined

The power move: **assign each branch a different persona**, then synthesize:

\`\`\`
Should we launch in Q1 or Q2?
- Analyze as the CFO (costs and cash flow).
- Analyze as the CMO (market timing and demand).
- Analyze as the Head of Engineering (team readiness).
Then give one recommendation weighing all three.
\`\`\`

#### Common Mistakes

- Personas that are too vague ("be an expert") — name the *specific* expertise and goal.
- ToT without a scoring rule — branches need criteria to compare.
- Asking for a persona but not honoring its constraints in the output format.

---

### Key Takeaways

- Tree of thought explores branches before deciding; score each branch.
- Personas steer attention — the more specific the role, the better the result.
- Combine: persona-per-branch + a final synthesis step.
- ToT costs more tokens — reserve it for real decisions.

**Next up:** Prompt chaining — breaking big jobs into a sequence of focused prompts.`,
      codeLanguage: "python",
      codeSnippet: `# Tree of thought: evaluate branches, pick the best
branches = {
    "A: influencer marketing": {"cost": "high", "risk": "medium", "fit": "strong"},
    "B: content marketing": {"cost": "low", "risk": "low", "fit": "strong"},
    "C: paid ads": {"cost": "medium", "risk": "high", "fit": "medium"},
}

print("Branch evaluation (score = count of 'low'/'strong' ratings):\\n")
for branch, metrics in branches.items():
    score = sum(1 for v in metrics.values() if v in ("low", "strong"))
    bar = "#" * score
    print(f"  {branch:30s} score={score} {bar}")

print("\\nBest branch: B: content marketing")`,
      codeOutput: `Branch evaluation (score = count of 'low'/'strong' ratings):

  A: influencer marketing        score=1 #
  B: content marketing           score=3 ###
  C: paid ads                    score=0

Best branch: B: content marketing`,
      visualizationTips: [
        "Draw the decision as a tree: root question → 3 branches → scores → chosen branch highlighted.",
        "Label each persona in a group discussion with its priorities (CFO = cost, CMO = timing…).",
        "Sketch the persona dial: same prompt, different lens — show what each lens notices.",
      ],
      tipsAndTricks: [
        "Give every ToT branch an explicit scoring rule, or the comparison is vibes.",
        "Name the persona's constraints ('you must refuse unsafe requests') to keep it honest.",
        "For big decisions, one prompt per persona, then a final synthesis prompt — cleaner than one mega-prompt.",
      ],
      practice: [
        {
          id: "practice-persona-tot",
          title: "Persona × 3 Decision",
          difficulty: "Medium",
          task: "Write a tree-of-thought prompt that evaluates 'hire a freelancer vs. hire full-time vs. use an agency' using three personas (CFO, Head of Product, Founder) and a scoring step.",
          hint: "Name the criteria each persona weights.",
          solution: `Evaluate these three options for building our MVP:
  1. Freelancer  2. Full-time hire  3. Agency

Analyze each option from three perspectives:
- CFO: cost, cash flow, contract risk
- Head of Product: speed, quality control, iteration speed
- Founder: long-term ownership, team culture, flexibility

For each option, score 1-5 on: cost, speed, quality, control.
Then recommend one option with the reasoning.

This explores all branches (ToT) with specialized lenses (personas)
before committing to a recommendation.`,
        },
      ],
    },
    {
      id: "prompt-chaining-workflows",
      title: "Lesson 22: Prompt Chaining & Multi-Step Workflows",
      shortDescription:
        "Break big tasks into focused prompts where each output feeds the next — with a full worked chain and validation checkpoints.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### One Big Prompt vs. A Chain

A single giant prompt makes the model juggle too many jobs — it drifts, skips requirements, and wastes tokens re-reading context. **Prompt chaining** splits the job into focused steps, each with a clean input and output.

#### The Pattern

\`\`\`
Step 1  (research)   -> output: topic list
Step 2  (select)     -> output: one topic + outline
Step 3  (draft)      -> output: full draft
Step 4  (polish)     -> output: final text
\`\`\`

Each step's output becomes the next step's input — and you can **review or redirect** between steps.

#### Worked Example: LinkedIn Post

**Step 1 — generate angles:**
\`\`\`
List 10 trending AI topics for 2026 for a LinkedIn audience of developers.
\`\`\`
→ *agentic AI, multimodal models, AI coding agents, …*

**Step 2 — pick and outline:**
\`\`\`
Expand topic #1 (agentic AI) into a 4-point outline: what it is,
why it matters in 2026, key players, how to learn it.
\`\`\`
→ *outline with 4 points*

**Step 3 — draft:**
\`\`\`
Write a 150-word LinkedIn post from this outline. Hook line first.
\`\`\`
→ *draft*

**Step 4 — polish:**
\`\`\`
Tighten this draft: remove filler, punch up the hook, keep it under 150 words.
\`\`\`
→ *final post*

#### Why Chaining Wins

| | One giant prompt | Chained prompts |
|---|---|---|
| Context per step | Huge, diluted | Small, focused |
| Failure point | One big failure | Catch errors between steps |
| Token cost | Re-reads everything | Each step is lean |
| Control | Little | Redirect at any step |

#### Validation Checkpoints

Insert a **validation step** where errors are likely:

\`\`\`
Step 2.5 (validation): Check the outline — does it cover all 4 required
points? If not, list what's missing before continuing.
\`\`\`

Validation catches issues early instead of letting them propagate through the whole chain.

#### Branching Chains

Some workflows split into parallel paths that merge later:

\`\`\`
Analyze competitors A, B, and C in parallel
   -> three separate analyses
Merge: "Synthesize these three competitor analyses into one
comparison table with a recommendation."
\`\`\`

#### Common Mistakes

- Chains with no review step — errors compound silently.
- Over-chaining simple tasks — one prompt is fine for a one-liner.
- Forgetting to pass the previous output — each prompt must include it.

---

### Key Takeaways

- Chain = focused steps with clean inputs/outputs + review points.
- Validation checkpoints stop errors from propagating.
- Use branching chains for parallel work that merges later.
- Over-chaining simple tasks wastes tokens — match the chain to the task.

**Next up:** Real-world playbook — prompting for code, writing, safety, and evaluation.`,
      codeLanguage: "python",
      codeSnippet: `# Prompt chaining: each step's output feeds the next prompt
topics = ["agentic AI", "multimodal models", "AI coding agents", "small language models",
          "AI safety", "RAG", "on-device AI", "AI video", "voice AI", "AI + robotics"]

print("STEP 1 - 'List 10 trending AI topics for 2026':")
print(" ->", ", ".join(topics[:3]), "...\\n")

picked = topics[0]
print(f"STEP 2 - 'Expand topic #1 ({picked}) into a 4-point outline':")
outline = ["What it is", "Why it matters in 2026", "Key players", "How to learn it"]
for i, item in enumerate(outline, 1):
    print(f"   {i}. {item}")`,
      codeOutput: `STEP 1 - 'List 10 trending AI topics for 2026':
 -> agentic AI, multimodal models, AI coding agents ...

STEP 2 - 'Expand topic #1 (agentic AI) into a 4-point outline':
   1. What it is
   2. Why it matters in 2026
   3. Key players
   4. How to learn it`,
      visualizationTips: [
        "Draw the chain as a conveyor belt: Step 1 → Step 2 → Step 3, with arrows labeled 'output → input'.",
        "Add a red checkpoint diamond between steps where validation runs.",
        "Draw a branching chain splitting into 3 parallel boxes that merge into one synthesis box.",
      ],
      tipsAndTricks: [
        "Name each step's output format ('return a numbered list') so the next step can parse it.",
        "Add a 'review before continuing' prompt between high-risk steps.",
        "Keep chains in code (a list of prompts) so you can re-run and version them.",
      ],
      practice: [
        {
          id: "practice-chain-design",
          title: "Design a 4-Step Chain",
          difficulty: "Medium",
          task: "Design a prompt chain for 'write a product launch email': list the steps, each step's input and output format, and where a validation checkpoint belongs.",
          hint: "Start broad (audience/positioning), end specific (final copy).",
          solution: `1. POSITIONING: "Given the product [X], audience [Y], and goal [Z], list 3 core value props."
   Input: product facts -> Output: 3 value props (bullets)
2. ANGLES: "Turn these value props into 5 subject lines and 5 opening hooks."
   Input: value props -> Output: 5 subject lines + 5 hooks (lists)
3. DRAFT: "Write the email body using hook #3 and subject line #2: [paste]."
   Input: chosen hook/subject -> Output: full email draft
4. VALIDATION + POLISH: "Check the draft: does it include one CTA, stay under
   200 words, and match a friendly tone? Fix anything that fails."
   Input: draft -> Output: final email

Checkpoint after step 3: review the draft before polishing.`,
        },
      ],
    },
  ],
};
