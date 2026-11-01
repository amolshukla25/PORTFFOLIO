---
title: "Designing an Agentic AI Curriculum: What 10 Modules of LLM Engineering Should Cover"
date: "2026-10-25"
description: "Why a 10-module, 26-lesson agentic AI course teaches LLM internals before prompting tricks — and what it deliberately leaves out."
tags: ["AI", "Agentic AI", "LLM", "Prompt Engineering", "Curriculum"]
coverImage: "/blogs/covers/designing-an-agentic-ai-curriculum.webp"
---

Most "learn AI" curricula are organized around tools: here is ChatGPT, here is LangChain, here is an agent framework. The result is students who can follow a tutorial and cannot debug one, because they learned the API surface without the mental model underneath it.

The [AI Tools: LLM & Prompt Engineering Mastery](/courses/ai-tools) course on this site inverts that. Ten modules, 26 lessons, roughly 48 hours of material, and the first six modules are about how models actually behave — before a single prompting technique appears.

## The ordering problem

A prompt engineer without a model mental model makes a specific, predictable set of mistakes:

- Adds "think step by step" everywhere, including where it costs latency and gains nothing.
- Treats a truncated response as a model failure rather than a context budget failure.
- Assumes a confident wrong answer is a knowledge gap instead of a sampling artifact.
- Believes an agent "decided" something when it was following a tool-call loop they wrote.

Each of those is a *concept* error, not a syntax error, so no amount of prompt templates fixes it. That is why the course front-loads mechanism.

## The ten modules

| # | Module | Lessons |
| --- | --- | --- |
| 1 | How Large Language Models Work | 3 |
| 2 | The Context Window | 2 |
| 3 | Temperature & Sampling | 2 |
| 4 | Hallucinations | 2 |
| 5 | Agentic Loops & AI Agents | 3 |
| 6 | Advanced LLM Topics | 3 |
| 7 | Prompt Engineering Foundations | 2 |
| 8 | Advanced Prompting Patterns | 2 |
| 9 | Advanced Reasoning & Techniques | 3 |
| 10 | Real-World Prompt Playbook | 4 |

Two tracks inside one course: modules 1–6 are labelled `[LLM]`, modules 7–10 `[Prompt]`. Students can finish the LLM track and stop, and they will still be able to read a model's behaviour correctly.

## Modules 1–6: the mental model

**Module 1 — How LLMs work.** Next-token prediction, the transformer at a conceptual level, and the training pipeline from pretraining to alignment. Three lessons that replace "the AI knows things" with "the model estimates likely continuations" — the single most load-bearing idea in the course.

**Module 2 — The context window.** The budget model of a request: system prompt, history, retrieved text, and the response all share one window. Truncation, lost-in-the-middle effects and summarization strategies all follow from budgeting, not from magic.

**Module 3 — Temperature and sampling.** Top-p, top-k, temperature, seeds, and why the same prompt gives different answers. This is where students learn that determinism is a setting, not a property.

**Module 4 — Hallucinations.** Why fluent text can be false, the difference between parametric knowledge and retrieved knowledge, and what grounding actually buys you. Prompting "don't hallucinate" is treated as what it is: a request, not a guarantee.

**Module 5 — Agentic loops and AI agents.** ReAct-style reasoning loops, tool calling, observation handling, stopping conditions and failure modes. This is where "agentic AI" stops being a buzzword and becomes a `while` loop with a budget and a parser.

**Module 6 — Advanced LLM topics.** Fine-tuning versus prompting, embeddings and retrieval, evaluation, cost and latency trade-offs — the map of what exists beyond this course, with pointers to the deeper material in the [blog](/blogs).

## Modules 7–10: the craft

Only now does prompting start, and it starts as engineering rather than incantation:

- **Foundations** — role, task, constraints, format, and examples. Few-shot patterns with the reasoning for *why* examples work: they narrow the distribution of plausible continuations.
- **Advanced patterns** — decomposition, chaining, self-critique, structured output schemas, and prompt templates that survive real inputs instead of the demo input.
- **Reasoning techniques** — chain-of-thought and its limits, ReAct, self-consistency, tree-of-thought style search, and when added reasoning tokens are wasted spend.
- **The playbook** — four lessons applying everything: prompting for code generation, prompting for writing, prompt injection attacks and defences, and evaluating and iterating on prompts with a golden set.

That last lesson is the one most courses skip. Without an evaluation set, "my prompt works" means "it worked the three times I tried it". A small golden set — twenty inputs, expected behaviours, a scoring rule — turns prompt work into something you can regress.

## What the course deliberately excludes

A curriculum is defined as much by its cuts as its contents:

- **No framework tutorials.** LangChain and friends change faster than a course can stay current. The concepts (loops, tools, memory, retrieval) are taught framework-free so any library maps onto them.
- **No GPU training walkthrough.** Pretraining a model is not a skill a working engineer needs; understanding what pretraining *does* is.
- **No prompt "hack" list.** Jailbreak collections rot in weeks and teach nothing transferable.
- **No benchmark chasing.** Leaderboards measure models, not systems.

The omissions keep the course at 26 lessons instead of 80, which is the difference between finishing and abandoning.

## How it connects to the rest of the site

The curriculum is intentionally porous. LLM fundamentals lead into [transformers and self-attention](/blogs/deep-dive-into-transformers-and-self-attention-mechanisms); retrieval leads into [RAG pipelines](/blogs/how-to-build-an-llm-rag-pipeline-with-nextjs-and-fastapi) and [vector databases](/blogs/understanding-vector-databases-pinecone-vs-chroma-vs-qdrant); the Python course supplies the language fluency the exercises assume. Nothing in the hub assumes you bought a bundle — every lesson is a URL.

## Judging a curriculum before you commit to it

Four questions worth asking of any AI course, including this one:

1. **Does it explain failure modes?** A course that only shows working examples is a demo reel.
2. **Is the ordering causal?** Mechanism before technique, or tools first and hope?
3. **Can you check your work?** Look for evaluation, test cases, or exercises with expected outputs.
4. **Is it dated?** Anything naming specific model versions as "the best" will be wrong within months; concepts age, version numbers do not.

## Frequently Asked Questions

### Do I need Python before starting an agentic AI course?

For the concept modules, no. For the exercises — parsing tool calls, calling APIs, handling JSON — basic Python is assumed, and the [Python course](/courses/python-basics) covers exactly that subset.

### What is the difference between prompt engineering and agentic AI?

Prompt engineering shapes a single model interaction. Agentic AI builds a loop around the model: plan, call a tool, observe the result, decide whether to continue, and stop safely. The loop is ordinary code; the model is one component inside it.

### How long does the course take?

The material is sized at roughly 48 hours including exercises. Most learners split it across four to six weeks, reading the LLM track first and returning to the prompt track with real tasks in hand.
