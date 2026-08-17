import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CourseHeader from "@/components/courses/CourseHeader";
import AuthorBadge from "@/components/courses/AuthorBadge";
import CodeBlock from "@/components/courses/CodeBlock";
import ModuleNavigation from "@/components/courses/ModuleNavigation";
import SeoJsonLd from "@/components/courses/SeoJsonLd";
import InteractivePromptPlayground from "@/components/courses/InteractivePromptPlayground";

export const metadata: Metadata = {
  title: "Module 2: Types of Prompting & Reasoning Frameworks | Amol Shukla",
  description:
    "Master Zero-Shot, Few-Shot, Chain-of-Thought (CoT), Tree of Thoughts (ToT), and ReAct prompting frameworks with Amol Shukla. Complete guide to modern LLM reasoning.",
  keywords: [
    "Amol Shukla",
    "Types of Prompting Amol Shukla",
    "Chain of Thought Prompting",
    "Few-Shot Prompting",
    "Tree of Thoughts Amol Shukla",
    "ReAct Prompting",
    "Zero-Shot Prompting",
    "LLM Reasoning Frameworks",
  ],
  openGraph: {
    title: "Module 2: Types of Prompting & Reasoning Frameworks | Amol Shukla",
    description:
      "A complete guide to Zero-Shot, Few-Shot, CoT, Tree of Thoughts, and ReAct prompting curated by Amol Shukla.",
    type: "article",
  },
};

export default function TypesOfPromptingModulePage() {
  const cotExample = `### PROMPT: CHAIN-OF-THOUGHT (CoT)
Question: A server cluster contains 12 worker nodes. 4 nodes operate at 85% CPU load, 6 nodes operate at 50% CPU load, and 2 nodes operate at 20% CPU load. What is the cluster's weighted average CPU utilization?

### INSTRUCTION
Solve this problem step by step. Show all arithmetic calculations before stating the final weighted average percentage.

### RESPONSE GENERATION
Step 1: Calculate total CPU load contribution from each group.
- Group 1 (4 nodes @ 85%): 4 * 85 = 340%
- Group 2 (6 nodes @ 50%): 6 * 50 = 300%
- Group 3 (2 nodes @ 20%): 2 * 20 = 40%

Step 2: Sum the total CPU load across all nodes.
- Total load = 340 + 300 + 40 = 680%

Step 3: Divide by total number of nodes (12).
- Weighted average = 680 / 12 = 56.666...%

Final Answer: The cluster's weighted average CPU utilization is 56.67%.`;

  const reactExample = `### SYSTEM PROMPT: ReAct FRAMEWORK (Amol Shukla Pattern)
You run in a loop of Thought, Action, PAUSE, Observation.
At the end of the loop, output the Final Answer.

Available Tools:
- search(query: str): Returns top search results
- run_python(code: str): Runs isolated Python code and returns stdout
- query_database(sql: str): Executes SQL against customer db

### TASK
Which European capital city has the highest population density per square kilometer, and what is that density?

### EXECUTION TRACE
Thought: I need to query population densities for major European capitals.
Action: run_python("""
densities = {
    "Paris": 20449,
    "Athens": 7500,
    "London": 5598,
    "Berlin": 4126,
    "Madrid": 5390
}
sorted_capitals = sorted(densities.items(), key=lambda x: x[1], reverse=True)
print(sorted_capitals[0])
""")
Observation: ('Paris', 20449)

Thought: Paris has the highest density among European capitals with over 20,400 people per km².
Final Answer: Paris is the European capital with the highest population density at approximately 20,449 people per square kilometer.`;

  return (
    <>
      <SeoJsonLd
        type="Article"
        title="Module 2: Types of Prompting & Reasoning Frameworks by Amol Shukla"
        description="Comprehensive analysis of Zero-Shot, Few-Shot, Chain-of-Thought (CoT), Tree of Thoughts (ToT), and ReAct prompting frameworks by Amol Shukla."
        url="https://amolshukla.dev/courses/ai-tools-and-technology/llm/types-of-prompting"
        breadcrumbs={[
          { name: "Courses", item: "https://amolshukla.dev/courses" },
          { name: "AI Tools and Technology", item: "https://amolshukla.dev/courses/ai-tools-and-technology" },
          { name: "LLM Mastery", item: "https://amolshukla.dev/courses/ai-tools-and-technology/llm" },
          { name: "Types of Prompting", item: "https://amolshukla.dev/courses/ai-tools-and-technology/llm/types-of-prompting" },
        ]}
      />

      <CourseHeader
        breadcrumbs={[
          { label: "AI Tools & Tech", href: "/courses/ai-tools-and-technology" },
          { label: "LLM Mastery", href: "/courses/ai-tools-and-technology/llm" },
          { label: "02. Types of Prompting" },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ice-500/20 text-ice-200 border border-ice-500/30">
              Module 02
            </span>
            <span className="text-xs text-ice-400 font-mono">
              Duration: 3.0 Hours · 7 Lessons
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-ice-50 leading-[1.1] mb-4">
            Types of Prompting & Reasoning
          </h1>

          <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
            Master the complete taxonomy of modern prompting paradigms—from in-context exemplars to multi-branch Tree of Thoughts and agentic ReAct loops.
          </p>

          <AuthorBadge />
        </header>

        {/* Content Body */}
        <article className="space-y-12 text-ice-200 leading-relaxed">
          {/* Quick Comparison Table */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4">
              The Prompting Taxonomy Matrix
            </h2>
            <p className="text-sm text-ice-300 mb-6">
              Amol Shukla's decision matrix for choosing the right prompting strategy based on problem complexity and computational latency.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-ink-3 rounded-xl overflow-hidden">
                <thead className="bg-ink-2/80 text-ice-200 uppercase font-mono">
                  <tr>
                    <th className="p-3.5 border-b border-ink-3">Prompting Type</th>
                    <th className="p-3.5 border-b border-ink-3">Ideal Use Case</th>
                    <th className="p-3.5 border-b border-ink-3">Accuracy</th>
                    <th className="p-3.5 border-b border-ink-3">Token Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-3 text-ice-300">
                  <tr>
                    <td className="p-3.5 font-semibold text-ice-100">Zero-Shot</td>
                    <td className="p-3.5">Simple classification, translations, direct summaries</td>
                    <td className="p-3.5 text-amber-300">Moderate</td>
                    <td className="p-3.5 text-emerald-400">Lowest (1x)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-ice-100">Few-Shot</td>
                    <td className="p-3.5">Strict formatting, specialized terminology, nuance matching</td>
                    <td className="p-3.5 text-emerald-300">High</td>
                    <td className="p-3.5 text-ice-300">Low-Med (2x)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-ice-100">Chain-of-Thought (CoT)</td>
                    <td className="p-3.5">Math arithmetic, logical puzzles, multi-step algorithms</td>
                    <td className="p-3.5 text-emerald-400">Very High</td>
                    <td className="p-3.5 text-amber-300">Medium (3x)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-ice-100">Tree of Thoughts (ToT)</td>
                    <td className="p-3.5">Game playing, theorem proving, strategic planning</td>
                    <td className="p-3.5 text-emerald-400">Highest</td>
                    <td className="p-3.5 text-rose-400">High (10x+)</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-semibold text-ice-100">ReAct (Reason + Act)</td>
                    <td className="p-3.5">Autonomous AI agents, API querying, web research</td>
                    <td className="p-3.5 text-emerald-400">State-of-the-Art</td>
                    <td className="p-3.5 text-amber-400">Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Dive: Chain of Thought */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-ice-600/30 text-ice-300 flex items-center justify-center text-sm font-mono">
                01
              </span>
              Chain-of-Thought (CoT) & Zero-Shot CoT
            </h2>

            <p className="mb-4">
              Introduced in landmark research, <strong>Chain-of-Thought (CoT)</strong> prompting drastically boosts reasoning by allowing the model to allocate computation across intermediate reasoning tokens before committing to an answer.
            </p>

            <div className="p-4 rounded-xl bg-ice-950/40 border border-ice-700/40 mb-6">
              <span className="text-xs font-mono font-bold text-ice-300 uppercase">
                The Magic Trigger Phrase
              </span>
              <p className="text-sm font-medium text-ice-100 mt-1">
                "Let's think step by step." (Kojima et al. Zero-Shot CoT)
              </p>
              <p className="text-xs text-ice-400 mt-1">
                Adding this simple phrase forces auto-regressive decoding into reasoning mode, preventing premature token generation.
              </p>
            </div>

            <CodeBlock
              code={cotExample}
              isPrompt
              title="Chain-of-Thought (CoT) Mathematical Reasoning Blueprint"
            />
          </section>

          {/* Deep Dive: ReAct Framework */}
          <section className="p-6 sm:p-8 rounded-2xl bg-ink-1/70 border border-ink-3">
            <h2 className="text-2xl font-bold text-ice-50 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-ice-600/30 text-ice-300 flex items-center justify-center text-sm font-mono">
                02
              </span>
              ReAct (Reason + Act): The Engine of AI Agents
            </h2>

            <p className="mb-4">
              <strong>ReAct</strong> synergizes reasoning traces with action execution. Instead of hallucinating facts, the model writes a <em>Thought</em>, executes an external <em>Action</em> (e.g. SQL query or Python code), receives an <em>Observation</em>, and iterates until the goal is solved.
            </p>

            <CodeBlock
              code={reactExample}
              isPrompt
              title="ReAct Agent Execution Loop (Amol Shukla Pattern)"
            />
          </section>

          {/* Interactive Sandbox */}
          <section>
            <h2 className="text-2xl font-bold text-ice-50 mb-2">
              Interactive Prompt Types Sandbox
            </h2>
            <p className="text-xs sm:text-sm text-ice-300 mb-6">
              Compare Zero-Shot, Few-Shot, CoT, and ReAct prompt executions directly.
            </p>
            <InteractivePromptPlayground />
          </section>
        </article>

        {/* Navigation */}
        <ModuleNavigation
          courseOverviewHref="/courses/ai-tools-and-technology/llm"
          prevModule={{
            title: "Module 1: Prompt Engineering Mastery",
            href: "/courses/ai-tools-and-technology/llm/prompt-engineering",
          }}
          nextModule={{
            title: "Module 3: How LLMs Work & Practical Applications",
            href: "/courses/ai-tools-and-technology/llm/how-llms-work-and-applications",
          }}
        />
      </main>
    </>
  );
}
