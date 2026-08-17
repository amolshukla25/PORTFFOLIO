import type { Module } from "../courses";

export const LLM_MODULE_1: Module = {
  id: "ai-tools-module-1-llm-fundamentals",
  title: "Module 1: [LLM] How Large Language Models Work",
  description:
    "LLM Course · Build a clear mental model of what an LLM is, how it predicts text, the transformer architecture, and how these models are trained.",
  lessons: [
    {
      id: "what-is-an-llm",
      title: "Lesson 1: What Is an LLM?",
      shortDescription:
        "Understand what large language models are, why they predict the next token, and the mental model that unlocks everything else.",
      duration: "40 mins",
      readingTime: "8 mins read",
      contentMarkdown: `### What Is an LLM?

A **Large Language Model (LLM)** is a deep neural network — usually a transformer — trained on enormous amounts of text to do one deceptively simple thing: **predict the next token** in a sequence.

That single task, repeated billions of times, produces models like ChatGPT, Claude, and Gemini that can write code, summarize documents, answer questions, and act as agents.

#### The One-Sentence Mental Model

> An LLM is an extremely advanced autocomplete. It reads everything you give it (your prompt), and then generates text one token at a time, choosing each next token based on patterns it learned during training.

#### How Generation Actually Works

| Stage | What Happens |
|---|---|
| **1. Tokenize** | Your prompt is split into tokens (words, parts of words, punctuation) |
| **2. Encode** | Each token becomes a numeric vector (embedding) |
| **3. Predict** | The model computes a probability for every possible next token |
| **4. Sample** | A token is picked (greedy, random, temperature-based…) |
| **5. Repeat** | The new token is appended and the model predicts again |

This loop is called **autoregressive generation** — the output feeds back into the input, one token at a time.

#### What an LLM Is vs. Isn't

| An LLM is… | An LLM is NOT… |
|---|---|
| A next-token predictor | A database of facts |
| A pattern-matching engine | A search engine |
| A reasoning tool (with limits) | A calculator (do math in code) |
| A tool that follows patterns | A tool that "knows" truth |

#### Why This Matters for AI Tools

Almost every AI tool you will use — chatbots, code assistants, agent frameworks, RAG pipelines — is a wrapper around this next-token prediction loop. When you understand the loop, you understand why:

- **Prompts matter**: the input shapes the probability distribution of the output.
- **Context matters**: the model only "sees" what is inside its context window.
- **Hallucinations happen**: the model picks *plausible* tokens, not *true* tokens.

---

### Key Takeaways

- An LLM predicts the next token, one step at a time (autoregressive generation).
- Generation = tokenize → encode → predict → sample → repeat.
- It is a pattern engine, not a fact database — always verify important outputs.
- Every AI tool you use is built on top of this loop.

**Next up:** The transformer architecture and self-attention — how the model decides which words matter.`,
      codeLanguage: "python",
      codeSnippet: `# Simulating how an LLM picks the next token
import math
import random

# Imagine the model's scores (logits) for the next token
candidates = ["Paris", "London", "Berlin", "Madrid"]
logits = [5.2, 2.1, 1.4, 0.3]

# Convert logits to probabilities (softmax)
exps = [math.exp(x) for x in logits]
total = sum(exps)
probs = [e / total for e in exps]

print("Next-token probability distribution:\\n")
for token, p in zip(candidates, probs):
    print(f"  {token:8s} -> {p:.4f} ({p*100:.1f}%)")

# Greedy decoding always picks the most likely token
best = candidates[probs.index(max(probs))]
print(f"\\nGreedy choice: {best}")

# Sampling may pick a different token (like real LLMs do)
random.seed(7)
sample = random.choices(candidates, weights=probs, k=1)[0]
print(f"Sampled choice (seed=7): {sample}")`,
      codeOutput: `Next-token probability distribution:

  Paris    -> 0.9303 (93.0%)
  London   -> 0.0419 (4.2%)
  Berlin   -> 0.0208 (2.1%)
  Madrid   -> 0.0069 (0.7%)

Greedy choice: Paris
Sampled choice (seed=7): Paris`,
      visualizationTips: [
        "Draw the token loop as a circle: Prompt → Tokenize → Predict → Sample → Repeat — label each stage with a real example.",
        "Print the softmax distribution as a horizontal bar chart and color the winning token differently.",
        "Trace a single sentence through the 5 stages on paper, writing the token-by-token decisions.",
      ],
      tipsAndTricks: [
        "When an LLM gives a surprising answer, ask yourself: 'which pattern in my prompt made that token likely?'",
        "Keep prompts self-contained — the model has no memory outside the current context window.",
        "For factual tasks, treat LLM output like a draft from a very confident intern: verify before trusting.",
      ],
      practice: [
        {
          id: "practice-llm-loop",
          title: "Trace the Generation Loop",
          difficulty: "Easy",
          task: "Write down the 5 stages of LLM generation and trace what happens for the prompt 'The capital of India is' — token by token.",
          hint: "Think about what the model does after it outputs 'New'. What comes next?",
          solution: `1. Tokenize: ["The", " capital", " of", " India", " is"]
2. Encode: each token becomes a vector
3. Predict: probabilities over every possible next token
4. Sample: "New" is chosen (very high probability)
5. Repeat: the model now predicts after "... is New" → "Delhi"

The model keeps looping until it emits an end-of-sequence token or hits the output limit.`,
        },
      ],
    },
    {
      id: "transformer-self-attention",
      title: "Lesson 2: The Transformer & Self-Attention",
      shortDescription:
        "Peek inside the model: embeddings, the transformer stack, and the self-attention mechanism that decides which words matter.",
      duration: "55 mins",
      readingTime: "10 mins read",
      contentMarkdown: `### The Transformer Architecture

Almost every modern LLM is a **transformer**, introduced in the 2017 paper *"Attention Is All You Need"*. The transformer's superpower is **self-attention**: it lets every token in the input "look at" every other token and decide how much each one matters.

#### Why Attention Was a Breakthrough

Earlier models (like RNNs) processed text left-to-right and struggled with long-range connections. In the sentence:

> "The **bank** **guaranteed** a full **refund**…"

…the word *bank* needs to know about *guaranteed* and *refund* — words far away. Self-attention gives every token a direct connection to every other token, in a single pass.

#### Inside a Transformer Layer

| Component | Job |
|---|---|
| **Embeddings** | Convert tokens into numeric vectors |
| **Positional encoding** | Add information about each token's position |
| **Self-attention** | Compute weighted relationships between all tokens |
| **Multi-head attention** | Run several attention patterns in parallel (different "lenses") |
| **Feed-forward network** | Process each token's representation further |
| **Layer normalization** | Keep numbers stable so training works |

The whole stack is repeated dozens of times (GPT-4-class models have 100+ layers and billions of parameters).

#### Attention in One Formula

Attention scores are computed by comparing a **query** (what am I looking for?) with **keys** (what do I contain?), then using **values** (what should I contribute?):

$$Attention(Q, K, V) = softmax\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$

Don't worry about the math — the intuition is: *"for each word, how relevant is every other word?"*

#### Decoder-Only vs. Encoder-Decoder

| Family | Example | Best For |
|---|---|---|
| **Decoder-only** | GPT, Llama, Claude | Text generation, chat, agents |
| **Encoder-decoder** | T5, FLAN | Translation, summarization |
| **Encoder-only** | BERT | Embeddings, classification |

Most AI tools you use today are **decoder-only** autoregressive models.

---

### Key Takeaways

- Transformers use **self-attention** so every token can relate to every other token.
- Multi-head attention runs many "lenses" in parallel, capturing different relationships.
- Decoder-only models (GPT-style) dominate modern AI tools.
- Attention is what makes long-range understanding (and long context windows) possible.

**Next up:** How these models get trained — pre-training, fine-tuning, and RLHF.`,
      codeLanguage: "python",
      codeSnippet: `# Tiny self-attention: how much should each word "look at" the others?
words = ["the", "bank", "guaranteed", "a", "refund"]

# Made-up attention weights for the query word "bank"
# (in a real model these come from Q·K similarity, learned during training)
attention = {"the": 0.05, "bank": 0.08, "guaranteed": 0.52, "a": 0.07, "refund": 0.28}

print(f"Context: {' '.join(words)}")
print("How strongly does 'bank' attend to each word?\\n")

for word, weight in attention.items():
    bar = "#" * int(weight * 40)
    print(f"  {word:12s} {weight:.2f}  {bar}")

total = sum(attention.values())
print(f"\\nWeights sum to: {total:.2f}")

# The model would now blend the *values* of all words using these weights
print("-> 'bank' is mostly influenced by 'guaranteed' and 'refund'.")`,
      codeOutput: `Context: the bank guaranteed a refund
How strongly does 'bank' attend to each word?

  the          0.05  ##
  bank         0.08  ###
  guaranteed   0.52  ####################
  a            0.07  ##
  refund       0.28  ###########

Weights sum to: 1.00
-> 'bank' is mostly influenced by 'guaranteed' and 'refund'.`,
      visualizationTips: [
        "Draw an attention heatmap: words on both axes, cell darkness = attention weight.",
        "Use the bar chart output to explain how 'bank' disambiguates between financial and river meaning.",
        "Sketch a transformer layer as a box with arrows: Embeddings → Attention → Feed-forward → out.",
      ],
      tipsAndTricks: [
        "When a model misreads ambiguous words, restate the context — attention shifts with your words.",
        "Long, clear sentences help attention spread evenly; confusing prompts create noisy attention.",
        "You don't need to compute attention yourself — but knowing it exists explains why context order matters.",
      ],
      practice: [
        {
          id: "practice-attention-ambiguity",
          title: "Attention & Ambiguity",
          difficulty: "Medium",
          task: "Write two sentences for the word 'bank' — one where it means a riverbank, one where it means a financial institution. For each, list which words the model should attend to most.",
          hint: "The disambiguating words are usually the nearby nouns and verbs.",
          solution: `Sentence 1: "We sat on the river bank and watched the water flow."
-> 'bank' should attend to: river, water, flow (geographical context)

Sentence 2: "I deposited the money at the bank before it closed."
-> 'bank' should attend to: deposited, money, closed (financial context)

The exact same word gets a different meaning purely because of which other tokens it attends to. That is self-attention in action.`,
        },
      ],
    },
    {
      id: "llm-training-pipeline",
      title: "Lesson 3: The Training Pipeline — Pre-training, Fine-tuning & RLHF",
      shortDescription:
        "How a raw neural network becomes ChatGPT: pre-training on trillions of tokens, supervised fine-tuning, and reinforcement learning from human feedback.",
      duration: "60 mins",
      readingTime: "11 mins read",
      contentMarkdown: `### How LLMs Get Their Skills

An LLM is not programmed — it is **trained**. The journey from random weights to ChatGPT happens in a pipeline of stages, each with a different goal.

#### Stage 1: Pre-training (The Autocomplete Phase)

The model is fed trillions of tokens scraped from the internet, books, code, and papers. Its only task: predict the next token. Through **backpropagation**, it slowly adjusts billions of weights to reduce prediction error.

- **Cost**: astronomical — thousands of GPUs for months (millions of dollars).
- **Result**: a base model that is great at language but not yet "helpful".
- **Knowledge cutoff**: everything the model "knows" was in its training data. If the data ends in early 2025, the model doesn't know 2026 events.

#### Stage 2: Supervised Fine-Tuning (SFT) (The Follow-Instructions Phase)

The base model is fine-tuned on curated **instruction–response pairs** written by humans: "Summarize this email" → a great summary. This teaches the model to *follow instructions* and answer in a helpful format.

#### Stage 3: RLHF (The Alignment Phase)

**Reinforcement Learning from Human Feedback** makes the model prefer answers humans like:

1. The model generates multiple answers to the same prompt.
2. Human raters rank them: "this one is helpful and safe."
3. A **reward model** learns to predict those rankings.
4. The LLM is fine-tuned (via PPO/DPO) to maximize the reward.

This is why ChatGPT answers feel polite, structured, and safe compared to raw base models.

#### The Full Pipeline

| Stage | Input | Goal | Who Does It |
|---|---|---|---|
| Pre-training | Trillions of raw tokens | Predict next token | Big labs (OpenAI, Anthropic, Meta…) |
| SFT | Instruction–answer pairs | Follow instructions | Labs + open-source community |
| RLHF | Human preference rankings | Be helpful & safe | Labs |
| Fine-tuning (yours) | Your domain data | Specialize for your task | **You** |

#### What This Means for You as a User

- The model's "knowledge" is frozen at training time — it cannot browse or learn unless you give it tools (RAG, web search, agents).
- **Fine-tuning** (teaching the model your style/domain) is usually the *last* lever you pull — first try better prompts, then RAG, then fine-tuning.
- The training pipeline is why models are confident, fluent, and *sometimes wrong*: fluency comes from pre-training, but truth was never a training objective.

---

### Key Takeaways

- Pre-training teaches language; SFT teaches helpfulness; RLHF teaches alignment.
- Knowledge is frozen at the training data cutoff — use tools for current facts.
- Better prompts → RAG → fine-tuning, in that order, before retraining anything.

**Next up:** The context window — how much text the model can actually see at once.`,
      codeLanguage: "python",
      codeSnippet: `# Simulating pre-training: cross-entropy loss drops as the model learns
epochs = list(range(1, 11))
loss = [4.80, 4.31, 3.94, 3.65, 3.42, 3.24, 3.09, 2.97, 2.87, 2.79]

print("Pre-training loss over 10 epochs (simulated):\\n")
for epoch, value in zip(epochs, loss):
    bar = "#" * int(value * 10)
    print(f"  Epoch {epoch:2d}  loss={value:.2f}  {bar}")

print("\\nLower loss = better next-token prediction.")
print("Real models train for far longer on far more data.")

# The three stages of the pipeline, in order
pipeline = ["1. Pre-training (predict next token)",
            "2. Supervised fine-tuning (follow instructions)",
            "3. RLHF (prefer helpful, safe answers)"]
print("\\nTraining pipeline:")
for stage in pipeline:
    print("  " + stage)`,
      codeOutput: `Pre-training loss over 10 epochs (simulated):

  Epoch  1  loss=4.80  ################################################
  Epoch  2  loss=4.31  ###########################################
  Epoch  3  loss=3.94  #######################################
  Epoch  4  loss=3.65  ####################################
  Epoch  5  loss=3.42  ##################################
  Epoch  6  loss=3.24  ################################
  Epoch  7  loss=3.09  ##############################
  Epoch  8  loss=2.97  #############################
  Epoch  9  loss=2.87  ############################
  Epoch 10  loss=2.79  ###########################

Lower loss = better next-token prediction.
Real models train for far longer on far more data.

Training pipeline:
  1. Pre-training (predict next token)
  2. Supervised fine-tuning (follow instructions)
  3. RLHF (prefer helpful, safe answers)`,
      visualizationTips: [
        "Chart the loss curve on graph paper — the flattening tail shows diminishing returns.",
        "Draw the pipeline as 3 boxes with arrows, labeling who does each stage and what the input is.",
        "Annotate a chat response with 'this fluency came from pre-training' and 'this helpfulness came from RLHF'.",
      ],
      tipsAndTricks: [
        "Check a model's knowledge cutoff before asking about recent events — or give it the facts yourself.",
        "If a model is confident but wrong, remember: 'truth' was never its training objective.",
        "Use fine-tuned open models for domain work only after prompts and RAG have been exhausted.",
      ],
      practice: [
        {
          id: "practice-training-stages",
          title: "Match the Training Stage",
          difficulty: "Easy",
          task: "For each behavior, name the stage that creates it: (a) the model writes fluent English, (b) the model answers politely instead of rambling, (c) the model refuses harmful requests.",
          hint: "Think about what each stage optimizes for.",
          solution: `(a) Fluent English → Pre-training (next-token prediction on trillions of tokens).
(b) Polite, structured answers → Supervised fine-tuning (instruction–response pairs).
(c) Refusing harmful requests → RLHF (human preference rankings favor safe responses).

This is why two models on the same base weights can behave very differently after different fine-tuning.`,
        },
      ],
    },
  ],
};
