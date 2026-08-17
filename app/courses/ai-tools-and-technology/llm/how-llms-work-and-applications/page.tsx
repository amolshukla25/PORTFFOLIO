import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import AuthorBadge from "@/components/courses/AuthorBadge";
import CodeBlock from "@/components/courses/CodeBlock";
import ModuleNavigation from "@/components/courses/ModuleNavigation";
import SeoJsonLd from "@/components/courses/SeoJsonLd";

export const metadata: Metadata = {
  title: "Module 3: How LLMs Work & Engineering Applications | Amol Shukla",
  description:
    "Explore how Transformers, Tokenization, Temperature sampling, RAG architectures, and AI Agents work under the hood with Amol Shukla. Full Python agent walkthrough.",
  keywords: [
    "Amol Shukla",
    "How LLMs Work Amol Shukla",
    "Transformers Architecture Tutorial",
    "RAG Architecture Amol Shukla",
    "Vector Databases",
    "Python AI Agent",
    "Temperature Top-P Sampling",
    "Tokenization BPE",
  ],
  openGraph: {
    title: "Module 3: How LLMs Work & Engineering Applications | Amol Shukla",
    description:
      "Under the hood of Transformers, Tokenization, RAG, and building autonomous Python AI agents with Amol Shukla.",
    type: "article",
  },
};

export default function HowLlmsWorkModulePage() {
  const agentPythonCode = `import os
import json
import math
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# 1. Define Native Python Tools (Amol Shukla Architecture)
def calculate_compound_interest(principal: float, rate: float, years: int) -> str:
    """Calculates compound interest: A = P(1 + r/n)^(nt)"""
    amount = principal * math.pow((1 + rate / 100), years)
    return json.dumps({
        "principal": principal,
        "rate_percent": rate,
        "years": years,
        "final_amount": round(amount, 2),
        "interest_earned": round(amount - principal, 2)
    })

TOOLS_SCHEMA = [
    {
        "type": "function",
        "function": {
            "name": "calculate_compound_interest",
            "description": "Calculates compound interest for financial projections",
            "parameters": {
                "type": "object",
                "properties": {
                    "principal": {"type": "number", "description": "Initial investment amount in dollars"},
                    "rate": {"type": "number", "description": "Annual interest rate percentage (e.g. 7.5)"},
                    "years": {"type": "integer", "description": "Number of years compounding"}
                },
                "required": ["principal", "rate", "years"]
            }
        }
    }
]

# 2. Autonomous Agent Execution Loop
def run_autonomous_agent(user_query: str):
    messages = [
        {"role": "system", "content": "You are a quantitative financial assistant by Amol Shukla. Use tools for exact arithmetic."},
        {"role": "user", "content": user_query}
    ]
    
    # Step A: Initial Model Call
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
        tools=TOOLS_SCHEMA,
        tool_choice="auto"
    )
    
    response_message = response.choices[0].message
    tool_calls = response_message.tool_calls
    
    # Step B: If tool called, execute and return observation
    if tool_calls:
        messages.append(response_message)
        for tool_call in tool_calls:
            if tool_call.function.name == "calculate_compound_interest":
                args = json.loads(tool_call.function.arguments)
                tool_output = calculate_compound_interest(**args)
                
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "name": tool_call.function.name,
                    "content": tool_output
                })
        
        # Step C: Final synthesized response
        final_response = client.chat.completions.create(
            model="gpt-4o",
            messages=messages
        )
        return final_response.choices[0].message.content
        
    return response_message.content

# Run the agent
result = run_autonomous_agent("If I invest $25,000 at an 8.5% annual return for 10 years, how much will I have?")
print(result)`;

  const ragArchitecturePython = `# Amol Shukla's 4-Step RAG Pipeline
from sentence_transformers import SentenceTransformer
import numpy as np

# 1. Embed Knowledge Chunks
model = SentenceTransformer("all-MiniLM-L6-v2")
documents = [
    "Enterprise refund policy: full refunds within 30 days of purchase.",
    "API rate limits: Standard tier allows 60 requests per minute.",
    "SLA guarantee: 99.95% uptime for multi-region active-active clusters."
]
doc_embeddings = model.encode(documents)

# 2. Retrieve Top-K via Cosine Similarity
def retrieve_context(query: str, top_k: int = 1) -> str:
    query_vec = model.encode([query])[0]
    scores = np.dot(doc_embeddings, query_vec) / (
        np.linalg.norm(doc_embeddings, axis=1) * np.linalg.norm(query_vec)
    )
    best_idx = np.argmax(scores)
    return documents[best_idx]

# 3. Augment Prompt with Retrieved Context
query = "What is the uptime guarantee for multi-region clusters?"
context = retrieve_context(query)

augmented_prompt = f"""Use the following verified context to answer the question:
Context: {context}

Question: {query}
Answer:"""`;

  return (
    <>
      <SeoJsonLd
        type="Article"
        title="Module 3: How LLMs Work & Engineering Applications by Amol Shukla"
        description="Deep dive into Transformers, Tokenization, Sampling mechanics, RAG, Vector Databases, and Python AI Agents by Amol Shukla."
        url="https://amolshukla.dev/courses/ai-tools-and-technology/llm/how-llms-work-and-applications"
        breadcrumbs={[
          { name: "Courses", item: "https://amolshukla.dev/courses" },
          { name: "AI Tools and Technology", item: "https://amolshukla.dev/courses/ai-tools-and-technology" },
          { name: "LLM Mastery", item: "https://amolshukla.dev/courses/ai-tools-and-technology/llm" },
          { name: "How LLMs Work", item: "https://amolshukla.dev/courses/ai-tools-and-technology/llm/how-llms-work-and-applications" },
        ]}
      />

      <CourseHeader
        breadcrumbs={[
          { label: "AI Tools & Tech", href: "/courses/ai-tools-and-technology" },
          { label: "LLM Mastery", href: "/courses/ai-tools-and-technology/llm" },
          { label: "03. How LLMs Work & Apps" },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
              Module 03
            </span>
            <span className="text-xs text-ice-400 font-mono">
              Duration: 3.0 Hours · 7 Lessons
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ice-50 leading-[1.1] mb-4">
            How LLMs Work & Practical Applications
          </h1>

          <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
            Demystifying the internal mechanics of Transformers, Tokenization, Probabilistic Sampling, RAG architectures, and building production AI agents in Python.
          </p>

          <AuthorBadge />
        </header>

        {/* Content Body */}
        <article className="space-y-12 text-ice-200 leading-relaxed">
          {/* Lesson 1: Transformer Internals */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-ice-600/30 text-ice-300 flex items-center justify-center text-sm font-mono">
                01
              </span>
              Under the Hood: The Transformer Architecture
            </h2>

            <p className="mb-4">
              Large Language Models are <strong>decoder-only autoregressive transformers</strong>. Unlike traditional recurrent networks, transformers process entire token sequences simultaneously using <strong>Self-Attention</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-xl bg-ink-2/60 border border-ink-3">
                <h3 className="text-xs font-mono uppercase text-ice-300 font-bold mb-1">
                  1. Tokenization (BPE)
                </h3>
                <p className="text-xs text-ice-400">
                  Text is split into subword fragments (e.g. "transformer" → ["trans", "former"]), mapped to numerical IDs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ink-2/60 border border-ink-3">
                <h3 className="text-xs font-mono uppercase text-ice-300 font-bold mb-1">
                  2. Self-Attention (Q, K, V)
                </h3>
                <p className="text-xs text-ice-400">
                  Every token attends to every other token in the context window to determine semantic relationships.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ink-2/60 border border-ink-3">
                <h3 className="text-xs font-mono uppercase text-ice-300 font-bold mb-1">
                  3. Logits & Softmax
                </h3>
                <p className="text-xs text-ice-400">
                  The model outputs raw scores (logits) across 100k+ vocabulary tokens, transformed into probabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Lesson 2: Sampling Hyperparameters */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-ice-600/30 text-ice-300 flex items-center justify-center text-sm font-mono">
                02
              </span>
              Demystifying Temperature, Top-P, and Top-K
            </h2>

            <p className="mb-4">
              How do we select the next token from probability distribution <code className="text-ice-100 bg-ink-2 px-1 rounded">P(w_i)</code>? <strong>Amol Shukla</strong> breaks down the essential inference parameters:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-ink-0/60 border border-ink-3">
                <h3 className="text-sm font-bold text-ice-100">Temperature (0.0 to 1.0+)</h3>
                <p className="text-xs text-ice-400 mt-1">
                  Scales logits before softmax. <strong className="text-ice-200">T=0.0 (ArgMax / Greedy)</strong> always picks the highest probability token (ideal for code, JSON, math). <strong className="text-ice-200">T=0.7+</strong> flattens probabilities, introducing creative variation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-ink-0/60 border border-ink-3">
                <h3 className="text-sm font-bold text-ice-100">Top-P (Nucleus Sampling)</h3>
                <p className="text-xs text-ice-400 mt-1">
                  Restricts candidate tokens to the smallest cumulative probability pool exceeding threshold <em>p</em> (e.g. 0.9). Eliminates catastrophic low-probability tail tokens.
                </p>
              </div>
            </div>
          </section>

          {/* Lesson 3: RAG Architecture */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-ice-600/30 text-ice-300 flex items-center justify-center text-sm font-mono">
                03
              </span>
              RAG (Retrieval-Augmented Generation)
            </h2>

            <p className="mb-4">
              LLM parametric knowledge is static and prone to hallucinations. <strong>Retrieval-Augmented Generation (RAG)</strong> dynamically queries a vector database for relevant domain context before generating a response:
            </p>

            <CodeBlock
              code={ragArchitecturePython}
              language="python"
              title="Python RAG Semantic Retrieval Pipeline"
            />
          </section>

          {/* Lesson 4: End-to-End Autonomous AI Agent */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-ice-600/30 text-ice-300 flex items-center justify-center text-sm font-mono">
                04
              </span>
              Production AI Agent with Tool Calling in Python
            </h2>

            <p className="mb-4">
              Here is Amol Shukla's production-ready autonomous agent implementation in Python, complete with JSON function schema registration, automatic tool execution, and contextual loop synthesis:
            </p>

            <CodeBlock
              code={agentPythonCode}
              language="python"
              title="Production Python AI Agent with Tool Calling (Amol Shukla)"
            />
          </section>
        </article>

        {/* Navigation */}
        <ModuleNavigation
          courseOverviewHref="/courses/ai-tools-and-technology/llm"
          prevModule={{
            title: "Module 2: Types of Prompting & Advanced Reasoning",
            href: "/courses/ai-tools-and-technology/llm/types-of-prompting",
          }}
        />
      </main>
    </>
  );
}
