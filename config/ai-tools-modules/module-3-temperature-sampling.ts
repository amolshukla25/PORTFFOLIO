import type { Module } from "../courses";

export const LLM_MODULE_3: Module = {
  id: "ai-tools-module-3-temperature-sampling",
  title: "Module 3: [LLM] Temperature & Sampling",
  description:
    "LLM Course · Control how creative or how predictable a model is: temperature, top-p, top-k, and how to tune them for each task.",
  lessons: [
    {
      id: "temperature-explained",
      title: "Lesson 6: Temperature Explained",
      shortDescription:
        "What temperature actually does to the probability distribution, and when to use low, medium, or high values.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Temperature: The Creativity Dial

**Temperature** controls how *random* the model's token choices are. It reshapes the probability distribution before sampling:

- **Low temperature (0–0.3)**: the model almost always picks the most likely token → predictable, precise, factual.
- **Medium (0.5–1.0)**: a balance — the default for most assistants.
- **High (1.0–2.0)**: the model happily picks unlikely tokens → creative, varied, sometimes incoherent.

#### The Math (Intuition Only)

The model produces **logits** (raw scores) for every possible next token. Temperature divides the logits before applying softmax:

$$P(token) = \\frac{e^{logit / T}}{\\sum_{j} e^{logit_j / T}}$$

- **T → 0**: the distribution collapses onto the single most likely token (greedy).
- **T = 1**: original distribution.
- **T > 1**: the distribution flattens — unlikely tokens become much more likely.

#### Choosing Temperature by Task

| Task | Temperature | Why |
|---|---|---|
| Math, code, data extraction, JSON | 0–0.3 | One right answer — you want determinism |
| Email drafts, summaries | 0.3–0.7 | Professional but not robotic |
| General chat, Q&A | 0.7–1.0 | Default range |
| Brainstorming, marketing copy, story ideas | 0.9–1.5 | You want variety and surprise |
| Poetry, wild creative writing | 1.2–2.0 | Maximum novelty (accept some nonsense) |

#### Practical Notes

- **Temperature ≠ intelligence**. Lowering temperature makes a model *more consistent*, not *smarter*. A wrong answer at T=0.2 is confidently wrong.
- **Different APIs, different scales**: some tools call it \`temperature\`, some \`creativity\`, some use 0–1 only. Check the docs.
- **For deterministic workflows** (agents, pipelines, tests), set temperature to 0 or 0.1 — otherwise the same prompt can return different results every run.
- **Higher temperature + self-consistency**: for creative tasks where quality matters, run several samples and pick the best (see Lesson 15).

---

### Key Takeaways

- Temperature reshapes probabilities: low = predictable, high = creative.
- Use ~0 for code/math/structured output; 0.7–1.0 for chat; higher for ideation.
- Temperature controls consistency, not capability.
- Set T≈0 in agents and pipelines to avoid flaky behavior.

**Next up:** Top-p and top-k sampling — the other knobs that shape output.`,
      codeLanguage: "python",
      codeSnippet: `# How temperature reshapes the probability distribution
import math

def softmax_with_temperature(logits, temperature):
    scaled = [x / temperature for x in logits]
    exps = [math.exp(x) for x in scaled]
    total = sum(exps)
    return [e / total for e in exps]

logits = [5.2, 2.1, 1.4, 0.3]
tokens = ["Paris", "London", "Berlin", "Madrid"]

for temp in [0.2, 1.0, 1.5]:
    probs = softmax_with_temperature(logits, temp)
    print(f"Temperature {temp}:")
    for token, p in zip(tokens, probs):
        print(f"  {token:8s} {p*100:5.1f}%")
    print()`,
      codeOutput: `Temperature 0.2:
  Paris    100.0%
  London     0.0%
  Berlin     0.0%
  Madrid     0.0%

Temperature 1.0:
  Paris     93.0%
  London     4.2%
  Berlin     2.1%
  Madrid     0.7%

Temperature 1.5:
  Paris     80.4%
  London    10.2%
  Berlin     6.4%
  Madrid     3.1%`,
      visualizationTips: [
        "Plot the distribution as bars at T = 0.2, 1.0, and 1.5 — watch the tall bar shrink as others grow.",
        "Draw a slider labeled 'predictable → creative' and mark where each task type sits.",
        "Run the same creative prompt at T=0.3 and T=1.4 and compare outputs side by side.",
      ],
      tipsAndTricks: [
        "Before blaming a 'bad model', check the temperature — a coding tool set to 1.5 will hallucinate APIs.",
        "For production pipelines, pin temperature to 0 and add a retry on parse errors.",
        "Creative copy? Generate 5 samples at T=1.2 and pick the best instead of fighting one sample.",
      ],
      practice: [
        {
          id: "practice-temperature",
          title: "Pick the Right Temperature",
          difficulty: "Easy",
          task: "Match each task to a temperature: (a) extracting a date from an email, (b) writing 10 ad headlines for a shoe brand, (c) drafting a polite rejection email.",
          hint: "Think: one right answer vs. many good answers.",
          solution: `(a) Date extraction → 0.0–0.2 (deterministic, one right answer).
(b) Ad headlines → 0.9–1.5 (want variety; pick the best).
(c) Rejection email → 0.4–0.7 (professional tone, slight warmth).

The pattern: tasks with a single correct output want low temperature;
tasks where 'many good answers exist' want higher temperature.`,
        },
      ],
    },
    {
      id: "top-k-top-p-sampling",
      title: "Lesson 7: Top-K & Top-P (Nucleus) Sampling",
      shortDescription:
        "The other sampling dials: top-k trims the candidate list, top-p trims by probability mass. Learn to combine them.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### Beyond Temperature: Trimming the Candidate List

Temperature changes the *shape* of the distribution. **Top-k** and **top-p** change *which tokens are allowed* to be sampled at all. They cut off the "long tail" of absurdly unlikely tokens.

#### Top-K: "Only the K Most Likely Tokens"

Sort all candidate tokens by probability and keep only the top K. The model samples only from those.

- \`top_k = 1\` → greedy (always the single best token).
- \`top_k = 40\` → a common default; trims rare garbage tokens.
- Great for removing typos, gibberish, and off-topic completions.

#### Top-P (Nucleus Sampling): "Keep the Mass"

Sort candidates from most to least likely, then keep adding tokens until their cumulative probability reaches **p** (e.g. 0.9).

- \`top_p = 0.9\` means: "sample from the smallest set of tokens that covers 90% of the probability."
- Adapts automatically: in an easy, confident spot the set is tiny; in an uncertain spot it grows.

| Setting | Meaning | Typical Value |
|---|---|---|
| top_k | Max candidates considered | 40–100 (or off) |
| top_p | Probability mass covered | 0.9–0.95 |
| temperature | Distribution sharpness | 0–1 (task-dependent) |

#### How They Interact

APIs apply top-k, then top-p, then temperature, then sample. The practical recipes:

- **Deterministic**: temperature 0 (top-k/top-p irrelevant).
- **Creative but sane**: temperature 0.9–1.1, top-p 0.9.
- **Precise**: temperature 0.2, top-p 0.8.
- **Balanced (common default)**: temperature 0.7, top-p 0.95.

#### Common Mistakes

- Cranking temperature *and* top-p high together → gibberish.
- Using top-p 1.0 → no trimming at all (same as top-p off).
- Expecting same output across runs — sampling is random by design; use temperature 0 for reproducible results.

---

### Key Takeaways

- Top-k trims the candidate list; top-p trims by cumulative probability.
- top-p adapts to confidence automatically — usually the better dial.
- Combine: temperature for creativity, top-p for sanity.
- For reproducible output (tests, agents), temperature = 0.

**Next up:** Hallucinations — why models invent facts and how to stop it.`,
      codeLanguage: "python",
      codeSnippet: `# Top-p (nucleus) vs top-k sampling in action
tokens = ["Paris", "London", "Berlin", "Madrid", "Rome", "Tokyo"]
probs = [0.55, 0.18, 0.12, 0.08, 0.04, 0.03]

def top_p(probs, p):
    ordered = sorted(zip(tokens, probs), key=lambda x: -x[1])
    cumulative = 0.0
    selected = []
    for token, prob in ordered:
        cumulative += prob
        selected.append(token)
        if cumulative >= p:
            break
    return selected, cumulative

def top_k(probs, k):
    ordered = sorted(zip(tokens, probs), key=lambda x: -x[1])
    return [t for t, _ in ordered[:k]]

for p_value in [0.9, 0.95]:
    selected, cumulative = top_p(probs, p_value)
    print(f"Top-p = {p_value}: keep {selected} (cumulative {cumulative:.2f})")

print(f"\\nTop-k = 3: keep {top_k(probs, 3)}")
print(f"Top-k = 5: keep {top_k(probs, 5)}")`,
      codeOutput: `Top-p = 0.9: keep ['Paris', 'London', 'Berlin', 'Madrid'] (cumulative 0.93)
Top-p = 0.95: keep ['Paris', 'London', 'Berlin', 'Madrid', 'Rome'] (cumulative 0.97)

Top-k = 3: keep ['Paris', 'London', 'Berlin']
Top-k = 5: keep ['Paris', 'London', 'Berlin', 'Madrid', 'Rome']`,
      visualizationTips: [
        "Draw a probability bar chart and shade the top-p area — the dynamic cutoff is the whole idea.",
        "Draw the same chart with a top-k line — a fixed cutoff that ignores the shape of the tail.",
        "Label a diagram 'top-k → top-p → temperature → sample' to remember the pipeline order.",
      ],
      tipsAndTricks: [
        "Prefer top-p over top-k in most APIs — it adapts to how confident the model is.",
        "If output contains garbage tokens, lower top-k to 40–60 rather than raising temperature.",
        "Document your sampling settings per task — teams waste hours rediscovering the right combo.",
      ],
      practice: [
        {
          id: "practice-top-p",
          title: "Top-P Cutoff Calculation",
          difficulty: "Medium",
          task: "Given probabilities [0.50, 0.25, 0.15, 0.10], which tokens are kept at top_p = 0.8? At top_p = 0.9?",
          hint: "Sort descending, accumulate until you pass the threshold.",
          solution: `Sorted: 0.50, 0.25, 0.15, 0.10.
top_p = 0.8: 0.50 → 0.75 → 0.90 ≥ 0.8 → keep tokens 1, 2, 3 (cumulative 0.90).
top_p = 0.9: same result — 0.90 ≥ 0.9 → keep tokens 1, 2, 3.

Note: the check happens AFTER adding, so the set can overshoot the threshold slightly.`,
        },
      ],
    },
  ],
};
