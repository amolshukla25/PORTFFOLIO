import type { Module } from "../courses";

export const LLM_MODULE_2: Module = {
  id: "ai-tools-module-2-context-window",
  title: "Module 2: [LLM] The Context Window",
  description:
    "LLM Course · Learn what the context window is, why token limits matter, and how to work with documents longer than the window.",
  lessons: [
    {
      id: "context-window-basics",
      title: "Lesson 4: What Is a Context Window?",
      shortDescription:
        "The context window is everything the model can 'see' at once — input plus output. Understand limits, truncation, and memory.",
      duration: "45 mins",
      readingTime: "9 mins read",
      contentMarkdown: `### What Is a Context Window?

The **context window** is the maximum number of tokens a model can process in a single request — **input + output combined**. It is the model's working memory: everything it "knows" in a conversation lives inside this window.

#### Why It Matters

| Model (approx.) | Context Window |
|---|---|
| Early GPT-3 | 2,048 tokens (~1,500 words) |
| GPT-3.5 / GPT-4 | 8K–32K tokens |
| GPT-4o / Claude 3.5 | 128K–200K tokens |
| Gemini 1.5 / 2.x | 1M–2M tokens |

A bigger window lets you paste whole documents, codebases, or long conversations. But bigger is not always better:

1. **Cost**: you pay per token — every input token is billed.
2. **Latency**: more tokens = slower responses.
3. **Attention dilution**: models can "lose focus" in the middle of extremely long contexts ("lost in the middle" effect).

#### The Window Is Shared

Your prompt and the model's reply share the same window:

\`\`\`
┌────────────────────────────────────────────────┐
│  CONTEXT WINDOW (e.g. 8,000 tokens)              │
│                                                  │
│  SYSTEM PROMPT .... 500 tokens                   │
│  CONVERSATION HISTORY .... 4,000 tokens          │
│  YOUR NEW PROMPT .... 500 tokens                 │
│  ──────────────────────────────────────────────  │
│  MODEL OUTPUT (max ~3,000 tokens left)           │
└──────────────────────────────────────────────────┘
\`\`\`

If your input exceeds the window, the model **truncates** — usually dropping the *oldest* messages. That silently erases earlier context.

#### What "The Model Has No Memory" Means

Outside a single request, an LLM remembers nothing. Chat UIs fake memory by resending the whole conversation inside the context window every time. That's why long chats get expensive and why old details disappear when the window fills up.

#### Practical Rules of Thumb

- Keep ~1,000–2,000 tokens free for the model's reply.
- Put the most important instructions at the **start** and **end** of your prompt (the middle gets the least attention).
- Summarize old conversation turns instead of replaying them in full.
- For big documents, use chunking + RAG (next lesson) instead of pasting everything.

---

### Key Takeaways

- The context window = input + output tokens the model can process at once.
- Token limits cause silent truncation of the oldest content.
- LLMs have no memory between requests — "memory" is just re-sent context.
- Important instructions belong at the start and end of the window.

**Next up:** Working with text longer than the window — chunking, summarization, and RAG.`,
      codeLanguage: "python",
      codeSnippet: `# Estimating how many tokens your prompt uses (heuristic: ~4 chars per token)
prompt = """You are a helpful assistant. Please summarize the annual report for Q3 2026 focusing on revenue growth and risks."""

estimated_tokens = len(prompt) // 4 + 1
context_limit = 8000
output_reserve = 2000  # space we keep for the model's reply

print(f"Prompt characters: {len(prompt)}")
print(f"Estimated tokens (len // 4 + 1): {estimated_tokens}")
print(f"Context window size: {context_limit} tokens")
print(f"Context used: {estimated_tokens / context_limit * 100:.1f}%")
print(f"Tokens remaining for output: {context_limit - estimated_tokens}")

# Will this fit with a 2,000-token output reserve?
fits = (estimated_tokens + output_reserve) <= context_limit
print(f"Fits with {output_reserve}-token output reserve: {fits}")`,
      codeOutput: `Prompt characters: 113
Estimated tokens (len // 4 + 1): 29
Context window size: 8000 tokens
Context used: 0.4%
Tokens remaining for output: 7971
Fits with 2000-token output reserve: True`,
      visualizationTips: [
        "Draw the context window as a bar and color it in as you add system prompt, history, prompt, and output.",
        "Simulate a long chat and watch the oldest messages fall off the left edge as the window fills.",
        "Compare context sizes of different models on a number line to internalize the scale jump.",
      ],
      tipsAndTricks: [
        "Move critical instructions to the system prompt AND repeat them at the end of your user prompt.",
        "Use 'summarize the conversation so far' every few turns to compress history before the window fills.",
        "When using long documents, tell the model which sections to prioritize instead of dumping everything.",
      ],
      practice: [
        {
          id: "practice-context-budget",
          title: "Context Budget Check",
          difficulty: "Easy",
          task: "A model has a 8,000-token window. Your system prompt is 400 tokens, the past 20 chat messages total 5,500 tokens, and your new prompt is 300 tokens. How much room is left for the model's reply?",
          hint: "Add input parts, subtract from the window.",
          solution: `Total input = 400 + 5,500 + 300 = 6,200 tokens.
Window = 8,000 tokens.
Room for reply = 8,000 − 6,200 = 1,800 tokens.

1,800 tokens ≈ 1,350 words of output. If you need longer replies, summarize the chat history first.`,
        },
      ],
    },
    {
      id: "managing-long-contexts",
      title: "Lesson 5: Managing Long Contexts",
      shortDescription:
        "Chunking, sliding windows, summarization, and retrieval — the techniques that let you work with text far larger than any window.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The Problem

Your company handbook is 200,000 tokens. Your model's window is 128,000 tokens. You cannot paste the whole thing — so what do you do?

Four proven strategies, from simplest to most powerful:

#### 1. Summarization (Compression)

Ask the model to summarize the document first, then work from the summary.

- **Pros**: simple, cheap, no infrastructure.
- **Cons**: loses details; summaries drift over many rounds.

#### 2. Chunking (Splitting)

Split the document into overlapping chunks (e.g. 500–1,000 tokens with 50–100 tokens of overlap) and process each chunk separately.

- **Overlap matters**: it preserves sentence and paragraph boundaries so meaning isn't cut in half.
- Use structural boundaries (paragraphs, sections, markdown headers) instead of blind character counts when possible.

#### 3. Sliding Window (Streaming)

For conversation, keep only the last N messages and drop (or summarize) older ones. This is how chat apps keep long conversations fast and cheap.

#### 4. Retrieval-Augmented Generation (RAG)

Keep the full document in a **vector database**, and for each question retrieve only the *most relevant* chunks into the context window. This is the professional standard — covered in depth in Lesson 13.

#### Choosing a Strategy

| Situation | Strategy |
|---|---|
| One-off analysis of a big document | Summarize or chunk + summarize |
| Long-running chat | Sliding window + summarization |
| Question-answering over a knowledge base | RAG (retrieval) |
| Massive codebase | RAG over code chunks with repo maps |

#### Chunking Recipe (that actually works)

1. Split on **semantic boundaries**: markdown headings, paragraphs, function/class definitions in code.
2. Use **overlap** (10–20%) so context isn't lost at seams.
3. Aim for chunks of 300–800 tokens for retrieval; larger chunks for summarization.
4. Test chunk size against retrieval quality — measure, don't guess.

---

### Key Takeaways

- Summarize, chunk, slide, or retrieve — pick the tool for the job.
- Chunk with overlap and respect semantic boundaries.
- RAG is the professional answer to "my data is bigger than the window".
- Long contexts cost more and can reduce focus — don't use 128K when 8K will do.

**Next up:** Temperature and sampling — how the model chooses between safe and creative answers.`,
      codeLanguage: "python",
      codeSnippet: `# Chunking a long document so it fits inside a context window
def chunk_text(text, chunk_size=500, overlap=50):
    chunks = []
    start = 0
    while start < len(text):
        end = min(start + chunk_size, len(text))
        chunks.append(text[start:end])
        if end == len(text):  # reached the end - stop (avoid infinite loop)
            break
        start = end - overlap
    return chunks

# Build a long "document" by repeating a sentence 100 times
document = " ".join(["Large language models predict the next token."] * 100)
chunks = chunk_text(document)

print(f"Document length: {len(document)} characters")
print(f"Chunk size: 500 chars | Overlap: 50 chars")
print(f"Chunks created: {len(chunks)}")
total_chars = sum(len(c) for c in chunks)
print(f"Average chunk size: {total_chars // len(chunks)} chars")
print(f"First chunk starts: \\"{chunks[0][:25]}...\\"")
print(f"Last chunk ends: \\"...{chunks[-1][-25:]}\\"")`,
      codeOutput: `Document length: 4599 characters
Chunk size: 500 chars | Overlap: 50 chars
Chunks created: 11
Average chunk size: 463 chars
First chunk starts: "Large language models pre..."
Last chunk ends: "...s predict the next token."`,
      visualizationTips: [
        "Draw the document as a long strip, then draw the chunks with their overlapping seams.",
        "Animate the sliding window over a chat transcript to show which messages are in view.",
        "Diagram the RAG flow: Document → Chunks → Vector DB → Retrieve → Prompt → Answer.",
      ],
      tipsAndTricks: [
        "Chunk on paragraph/heading boundaries, not fixed character counts — your retrieval quality will jump.",
        "Keep 10–20% overlap; zero overlap silently cuts meaning at every seam.",
        "For code, chunk per function/class; for docs, chunk per section — structure is a free semantic signal.",
      ],
      practice: [
        {
          id: "practice-chunk-overlap",
          title: "Overlap Reasoning",
          difficulty: "Medium",
          task: "A 1,000-character document is chunked with size=400 and overlap=100. How many chunks are produced, and why would zero overlap hurt retrieval?",
          hint: "Start at 0, advance by (size − overlap) each time.",
          solution: `Advance step = 400 − 100 = 300 chars per chunk.
Chunk starts: 0, 300, 600, 900 → 4 chunks (last one ends at 1000).

Without overlap, a sentence split exactly at the boundary of chunk 1 and chunk 2
would be cut in half — the retrieval step could never find the complete sentence,
so the LLM answers with only half the context. Overlap guarantees the seam appears
in both chunks.`,
        },
      ],
    },
  ],
};
