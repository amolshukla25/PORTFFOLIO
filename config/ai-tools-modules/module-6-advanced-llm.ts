import type { Module } from "../courses";

export const LLM_MODULE_6: Module = {
  id: "ai-tools-module-6-advanced-llm",
  title: "Module 6: [LLM] Advanced LLM Topics",
  description:
    "LLM Course · Level up with retrieval-augmented generation, embeddings & vector databases, and how to evaluate LLM systems.",
  lessons: [
    {
      id: "rag-deep-dive",
      title: "Lesson 13: RAG — Retrieval-Augmented Generation",
      shortDescription:
        "RAG grounds LLM answers in your own data: index, retrieve, augment, generate. The professional standard for trustworthy AI.",
      duration: "60 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### What Is RAG?

**Retrieval-Augmented Generation** = retrieve relevant documents first, then let the LLM answer *using only those documents*. It solves the two biggest LLM problems at once: **out-of-date knowledge** and **hallucinations over your data**.

#### The RAG Pipeline

\`\`\`
  DOCUMENTS                    QUERY
     │                           │
     ▼                           ▼
  CHUNK & EMBED              EMBED THE QUESTION
     │                           │
     ▼                           ▼
  VECTOR DATABASE ──retrieve top-k similar──▶ CONTEXT
                                                │
                                                ▼
                              PROMPT = QUESTION + CONTEXT
                                                │
                                                ▼
                                          LLM ANSWER
\`\`\`

| Stage | What Happens |
|---|---|
| **1. Index** | Split documents into chunks, embed each into a vector, store in a vector DB |
| **2. Retrieve** | Embed the user's question, find the most similar chunks (top-k) |
| **3. Augment** | Stuff the retrieved chunks into the prompt as context |
| **4. Generate** | The LLM answers using ONLY that context |

#### Why It Works

- The model never has to *recall* your facts — they're in the prompt.
- Answers come with traceable sources (the retrieved chunks).
- Your data can change daily without retraining anything.

#### Chunking Quality = Retrieval Quality

Retrieval is the weak link. Bad chunks → irrelevant context → bad answers. Improvements, in order of impact:

1. **Chunk on semantic boundaries** (headings, paragraphs, functions).
2. **Add metadata** (source, date, section) to chunks — enables filtering.
3. **Hybrid search** — combine vector similarity + keyword (BM25) hits.
4. **Rerank** — a second pass reorders retrieved chunks by true relevance.
5. **Tune top-k** — too few = missing context; too many = noise + cost.

#### The RAG Prompt (Augment)

\`\`\`
Answer the QUESTION using ONLY the CONTEXT below.
If CONTEXT lacks the answer, say "Not found in the knowledge base."
Quote the source (doc_id) of each claim.

CONTEXT:
[doc 1] (id: 101) ...
[doc 2] (id: 205) ...

QUESTION: ...
\`\`\`

#### RAG vs. Fine-Tuning

| | RAG | Fine-tuning |
|---|---|---|
| What it does | Injects facts at query time | Bakes behavior into weights |
| Data updates | Instant (re-index) | Retrain |
| Best for | Facts, docs, retrieval | Style, format, domain behavior |
| Cost | Cheap to update | Expensive to retrain |
| Hallucination fix | Strong | Weak |

**Rule of thumb:** facts → RAG; behavior → fine-tuning; and usually prompts first.

#### Evaluating RAG

- **Retrieval quality**: did the right chunk get found? (hit rate, MRR)
- **Answer quality**: grounded in retrieved chunks? (citation adherence, faithfulness)
- **End-to-end**: does the user get the right answer? (human or LLM-judge eval — Lesson 15)

---

### Key Takeaways

- RAG = index → retrieve → augment → generate.
- It grounds answers in your data and eliminates the knowledge-cutoff problem.
- Retrieval quality is everything — chunk well, add metadata, consider reranking.
- Facts → RAG; behavior → fine-tuning.

**Next up:** Embeddings & vector databases — how retrieval actually finds the right chunks.`,
      codeLanguage: "python",
      codeSnippet: `# Mini RAG: retrieve relevant context, then answer only from it
documents = {
    "python": "Python is a high-level programming language created in 1991.",
    "llm": "An LLM predicts the next token in a sequence.",
    "docker": "Docker packages applications into portable containers.",
}

def retrieve(query):
    # Keyword retrieval: score = number of query words found in the doc
    best, best_score = None, 0
    for key, text in documents.items():
        words = set(text.lower().split())
        score = sum(1 for word in query.lower().split() if word.strip("?.") in words)
        if score > best_score:
            best, best_score = text, score
    return best

def answer(question):
    context = retrieve(question)
    return f"Based on retrieved docs: {context}"

print(answer("What is an LLM and how does it predict?"))
print(answer("How does Python work?"))
print(answer("What does Docker do?"))`,
      codeOutput: `Based on retrieved docs: An LLM predicts the next token in a sequence.
Based on retrieved docs: Python is a high-level programming language created in 1991.
Based on retrieved docs: Docker packages applications into portable containers.`,
      visualizationTips: [
        "Draw the 4-stage RAG pipeline as a conveyor belt with the query entering at the right moment.",
        "Color-code a RAG answer: green = grounded in context, red = not in retrieved chunks.",
        "Sketch the 'retrieval funnel': all chunks → top-k → reranked top-k → prompt.",
      ],
      tipsAndTricks: [
        "Add source IDs to every chunk — citation tracking becomes trivial.",
        "Log what was retrieved for each question; most RAG bugs are retrieval bugs.",
        "Start with top-k=4–6; too much context dilutes the answer and inflates cost.",
      ],
      practice: [
        {
          id: "practice-rag-design",
          title: "Design a RAG System",
          difficulty: "Medium",
          task: "Outline the RAG system for a university's course-catalog chatbot (hundreds of PDFs). List chunking strategy, metadata, retrieval, and the prompt rules.",
          hint: "PDFs → structured sections; metadata = course code, year, department.",
          solution: `1. INDEX: Parse PDFs into sections (course code, title, credits, syllabus).
   Chunk per section with 10% overlap; metadata: course_code, dept, year.
2. STORE: Vector DB (e.g. pgvector/Qdrant) + keyword index for hybrid search.
3. RETRIEVE: top-k=6 hybrid hits, filter by department when asked.
4. AUGMENT: prompt = system rules + retrieved chunks with source IDs.
5. GENERATE: answer only from chunks; cite course codes; say "not in catalog"
   when nothing matches.

Eval: 100 real student questions, check hit rate and citation adherence.`,
        },
      ],
    },
    {
      id: "embeddings-vector-databases",
      title: "Lesson 14: Embeddings & Vector Databases",
      shortDescription:
        "Embeddings turn text into coordinates where meaning = proximity. Learn similarity search and choosing a vector database.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### What Is an Embedding?

An **embedding** is a list of numbers (a vector) that represents a piece of text. The trick: **texts with similar meaning end up with similar vectors** — so you can find "related" content by measuring distance.

\`\`\`
"cat"      -> [0.21, -0.45, 0.88, ...]  384–3072 numbers
"kitten"   -> [0.22, -0.44, 0.87, ...]  very close to "cat"
"refund"   -> [-0.11, 0.63, 0.02, ...]  far from "cat"
\`\`\`

#### How Similarity Is Measured

| Metric | What It Measures | Typical Use |
|---|---|---|
| **Cosine similarity** | Angle between vectors (−1…1) | Most common for text |
| **Dot product** | Magnitude + angle | When vectors are normalized |
| **Euclidean distance** | Straight-line distance | Geometric contexts |

**Cosine similarity** is the default: 1.0 = identical direction, 0 = unrelated.

#### Embeddings in Practice

1. Pick an embedding model (e.g. \`text-embedding-3-small\`, \`bge-m3\`, \`nomic-embed\`).
2. Embed your chunks once (offline) and store the vectors.
3. At query time, embed the question with the SAME model.
4. Search the database for the nearest vectors.

**Rule:** never mix embedding models in one database — vectors are only comparable within the same model.

#### Vector Databases Compared

| Option | Type | Best For |
|---|---|---|
| **pgvector** | Postgres extension | Already using Postgres |
| **Chroma** | Lightweight, embedded | Local dev, small datasets |
| **Qdrant** | Purpose-built, Rust | Production scale, filtering |
| **Pinecone** | Managed cloud | Zero-ops at scale |
| **Weaviate / Milvus** | Purpose-built | Large hybrid workloads |

**Choosing:** if you already run Postgres, start with pgvector. Move to a dedicated vector DB when you need scale, filtering, or hybrid search.

#### Beyond Similarity: Practical Retrieval Upgrades

- **Hybrid search**: vector + keyword (BM25) combined — catches exact IDs/names that vectors miss.
- **Metadata filtering**: "only 2026 documents" — filter before similarity.
- **Reranking**: a cross-encoder re-scores top-50 candidates → much better precision.
- **Multi-vector (ColBERT-style)**: per-token vectors for finer matching.

#### Embeddings Are Not Magic

- They capture *statistical* similarity, not logic ("bat" ≈ baseball bat ≈ vampire bat).
- Small models → cheap + fast but less nuanced; big models → better but slower/costlier.
- Evaluate retrieval on YOUR data — public benchmarks don't predict your domain.

---

### Key Takeaways

- Embeddings map text to vectors; meaning proximity = vector proximity.
- Cosine similarity is the standard distance metric for text.
- Choose the DB by your stack: pgvector first, purpose-built at scale.
- Add hybrid search and reranking before switching models — usually bigger wins.

**Next up:** Evaluating LLM systems — how to know if your AI actually works.`,
      codeLanguage: "python",
      codeSnippet: `# Embeddings turn words into vectors; similar words live close together
import math

def cosine(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    mag_a = math.sqrt(sum(x * x for x in a))
    mag_b = math.sqrt(sum(x * x for x in b))
    return dot / (mag_a * mag_b)

# Tiny 3-D "embeddings" (real ones have 384-3072 dimensions)
king = [0.9, 0.8, 0.3]
queen = [0.85, 0.75, 0.4]
apple = [0.1, 0.2, 0.9]

print(f"cosine(king, queen)  = {cosine(king, queen):.3f}  (similar meaning)")
print(f"cosine(king, apple)  = {cosine(king, apple):.3f}  (unrelated)")
print(f"cosine(queen, apple) = {cosine(queen, apple):.3f}")

# Nearest-neighbor search: which stored vector is closest to a query?
query = king
stored = {"queen": queen, "apple": apple}
best, best_score = None, -1
for name, vec in stored.items():
    score = cosine(query, vec)
    print(f"  query vs {name:6s}: {score:.3f}")
    if score > best_score:
        best, best_score = name, score
print(f"\\nNearest neighbor: {best}")`,
      codeOutput: `cosine(king, queen)  = 0.995  (similar meaning)
cosine(king, apple)  = 0.452  (unrelated)
cosine(queen, apple) = 0.534
  query vs queen : 0.995
  query vs apple : 0.452

Nearest neighbor: queen`,
      visualizationTips: [
        "Plot the 3D vectors as points and draw the angles — smaller angle = more similar.",
        "Draw a 2D 'semantic map' with clusters: animals, tech, finance — nearest neighbors close together.",
        "Visualize the retrieval step: query vector lands among stored vectors; circle the top-k nearest.",
      ],
      tipsAndTricks: [
        "Normalize vectors before storing — cosine similarity then equals the dot product (faster queries).",
        "Keep the embedding model version in your metadata — re-embedding everything is a real chore.",
        "Test embedding models on 20–50 of YOUR real queries before committing.",
      ],
      practice: [
        {
          id: "practice-embeddings",
          title: "Reason About Similarity",
          difficulty: "Medium",
          task: "Which pair is more similar by cosine similarity: ('dog', 'puppy') or ('dog', 'bone')? Explain why an embedding model would agree, and why retrieval with only vectors can still miss exact matches.",
          hint: "Think meaning vs. co-occurrence; then think about IDs/names.",
          solution: `'dog' and 'puppy' are much more similar (near-synonyms in similar contexts),
while 'bone' co-occurs with 'dog' but means something different.

Vectors capture statistical usage, so ('dog','puppy') wins easily.

Limitation: exact strings like order numbers 'ORD-93821' or product SKUs have
almost no meaning signal — vectors alone miss them. That's why hybrid search
adds keyword/BM25 matching on top of vector similarity.`,
        },
      ],
    },
    {
      id: "evaluating-llms",
      title: "Lesson 15: Evaluating LLM Systems",
      shortDescription:
        "Benchmarks, metrics, and LLM-as-judge — how to measure quality, catch regressions, and know when your AI is good enough.",
      duration: "60 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### Why Evaluation Matters

"Does it work?" is the hardest question in AI tooling. Without evaluation, you cannot compare models, prompts, or RAG configs — you're guessing. Evaluation turns AI development from vibes into engineering.

#### The Evaluation Pyramid

| Level | Question | Tools |
|---|---|---|
| **Capability** | What can this model do? | Public benchmarks |
| **Task** | Does it do MY task well? | Custom eval sets |
| **System** | Does the whole pipeline work? | End-to-end evals + metrics |
| **Production** | Is it good enough to ship? | Human review, monitoring |

#### Public Benchmarks

| Benchmark | What It Measures |
|---|---|
| **MMLU** | Knowledge across 57 subjects |
| **HumanEval / MBPP** | Code generation correctness |
| **GSM8K** | Grade-school math reasoning |
| **GPQA** | Graduate-level science reasoning |
| **HELM / LMSYS leaderboards** | Aggregate comparisons |

Use these to pick a model — but **they don't tell you how it performs on your data.**

#### Metrics for Your Own Eval Sets

- **Accuracy**: % of exact-correct answers (classification, extraction).
- **Faithfulness / groundedness**: is the answer supported by the source? (RAG)
- **ROUGE / BLEU**: n-gram overlap with a reference answer (summarization).
- **Perplexity**: how well the model predicts text (pre-training quality).
- **Latency & cost per task**: speed and price are quality too.

#### LLM-as-a-Judge

A strong LLM grades your model's outputs using a rubric. Cheap, fast, scalable — and surprisingly reliable for *structured* judgments.

\`\`\`
SYSTEM: You are an evaluator. Score the ASSISTANT answer 1-5 on:
correctness, completeness, and grounding. Return JSON: {"score": n, "reason": "..."}

USER: QUESTION: ...
REFERENCE: ...
ASSISTANT: ...
\`\`\`

**Caveats:** judges have biases (favor longer, prettier answers; prefer their own style). Calibrate against human scores on a sample before trusting them.

#### The Eval Loop (Do This Every Change)

1. **Curate 30–100 real tasks** with expected answers (golden set).
2. **Run the baseline**, record scores.
3. **Change something** (prompt, model, chunk size, temperature).
4. **Re-run the same set**, compare scores.
5. **Ship only if it improves** — and keep the set forever (regression tests).

#### A Starter Eval Checklist

- [ ] Golden set of 30+ realistic tasks with expected answers
- [ ] Deterministic runs (temperature 0)
- [ ] Metrics: accuracy + one quality metric (faithfulness, ROUGE)
- [ ] LLM-judge with a rubric, calibrated on ~20 human-scored samples
- [ ] Cost + latency tracked per run
- [ ] Re-run on every prompt/model change

---

### Key Takeaways

- Benchmarks pick the model; custom evals judge your actual task.
- Build a golden set and re-run it on every change — evaluation is a practice, not a one-time task.
- LLM-as-judge scales review, but calibrate it against humans.
- Track cost and latency alongside quality — a great answer that's too slow is still a bad system.

**Next up:** Prompt Engineering Track — the anatomy of prompts that get consistent, excellent results.`,
      codeLanguage: "python",
      codeSnippet: `# Evaluating a model: compare predictions against ground truth
test_set = [
    ("Capital of France?", "Paris"),
    ("2 + 2?", "4"),
    ("Largest planet?", "Jupiter"),
]

predictions = ["Paris", "4", "Mars"]  # the model got one wrong

correct = sum(1 for (_, expected), pred in zip(test_set, predictions) if pred == expected)
total = len(test_set)

print(f"Test set size: {total}")
print(f"Correct: {correct}")
print(f"Accuracy: {correct / total * 100:.1f}%")

# A tiny rubric for LLM-as-a-judge
rubric = """
Score 1-5:
- 5: correct, complete, grounded
- 3: partially correct, missing detail
- 1: wrong or hallucinated
"""
print(f"\\nJudge rubric:{rubric}")`,
      codeOutput: `Test set size: 3
Correct: 2
Accuracy: 66.7%

Judge rubric:
Score 1-5:
- 5: correct, complete, grounded
- 3: partially correct, missing detail
- 1: wrong or hallucinated
`,
      visualizationTips: [
        "Draw the eval loop as a circle: Golden set → run → score → change → re-run.",
        "Chart accuracy over successive prompt versions to see the improvement curve.",
        "Make a scorecard table (accuracy, faithfulness, cost, latency) per model/prompt combo.",
      ],
      tipsAndTricks: [
        "Keep the same golden set across experiments — changing the test is how people fool themselves.",
        "Score outputs on a 1–5 rubric, not pass/fail — you'll see partial wins.",
        "Track cost per good answer, not just quality — models differ 10x in price.",
      ],
      practice: [
        {
          id: "practice-eval-design",
          title: "Build an Eval Plan",
          difficulty: "Medium",
          task: "Design an evaluation plan for a summarization tool: golden set size, metrics, judge setup, and what to do before shipping a new model.",
          hint: "Include a human-calibration step and a regression rule.",
          solution: `1. GOLDEN SET: 50 documents across 3 categories with human-written reference summaries.
2. METRICS: ROUGE-L vs reference + faithfulness (does the summary contain facts not in the doc?)
3. JUDGE: LLM-as-judge with rubric (completeness, accuracy, concision), scored 1-5.
4. CALIBRATION: have 2 humans score 20 samples; check judge agrees >80% of the time.
5. SHIP RULE: new model must beat baseline on accuracy AND stay within 1.5x cost/latency.
6. REGRESSION: re-run the golden set monthly and on every prompt change.`,
        },
      ],
    },
  ],
};
