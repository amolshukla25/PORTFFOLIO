"use client";

import React, { useState } from "react";

interface PromptPreset {
  id: string;
  name: string;
  type: "zero-shot" | "few-shot" | "cot" | "react";
  systemPrompt: string;
  userPrompt: string;
  simulatedResponse: string;
  explanation: string;
}

const PRESETS: PromptPreset[] = [
  {
    id: "zero-shot",
    name: "Zero-Shot Prompting",
    type: "zero-shot",
    systemPrompt: "You are an expert financial analyst. Provide clear, objective sentiment classifications.",
    userPrompt: "Classify the sentiment of this headline:\n\"Company X reported record Q3 profits surging by 42%, but warned of supply bottlenecks in Q4.\"",
    simulatedResponse: `Sentiment: Mixed / Moderately Bullish
Breakdown:
- Positive Driver: Record Q3 profit surge (+42% YoY).
- Negative Constraint: Anticipated Q4 supply chain headwinds.
Confidence Score: 0.88`,
    explanation: "Zero-shot relies solely on the LLM's pre-trained knowledge without providing any prior input-output examples.",
  },
  {
    id: "few-shot",
    name: "Few-Shot (In-Context Exemplars)",
    type: "few-shot",
    systemPrompt: "You are a customer support ticket categorizer. Output must be in valid JSON format.",
    userPrompt: `Example 1:
Input: "The tracking link shows delivered but I haven't received my package."
Output: {"category": "Shipping", "urgency": "High", "action": "Open carrier investigation"}

Example 2:
Input: "Where can I download my annual billing invoice?"
Output: {"category": "Billing", "urgency": "Low", "action": "Provide portal invoice link"}

Now categorize this:
Input: "My application crashes with error 500 whenever I upload a CSV larger than 10MB."
Output:`,
    simulatedResponse: `{"category": "Technical Bug", "urgency": "High", "action": "Escalate to Tier 2 Engineering & Check Upload Size Limit"}`,
    explanation: "Few-shot prompting provides 2-3 structured demonstrations (exemplars) to condition the LLM's output syntax and reasoning structure.",
  },
  {
    id: "cot",
    name: "Chain-of-Thought (CoT)",
    type: "cot",
    systemPrompt: "You are an expert mathematician and logic solver. Always think through the solution step by step before outputting the final answer.",
    userPrompt: "A cafe sold 48 coffees in the morning. In the afternoon, they sold half as many as the morning. In the evening, they sold 15 more than the afternoon. If each coffee costs $4.50, what was their total revenue?",
    simulatedResponse: `Let's break this down step by step:

1. Morning sales: 48 coffees.
2. Afternoon sales: 48 / 2 = 24 coffees.
3. Evening sales: 24 + 15 = 39 coffees.
4. Total coffees sold: 48 + 24 + 39 = 111 coffees.
5. Total revenue: 111 * $4.50 = $499.50.

Final Answer: $499.50`,
    explanation: "Chain-of-Thought (CoT) forces the model to generate intermediate reasoning tokens, drastically improving mathematical and logical accuracy.",
  },
  {
    id: "react",
    name: "ReAct (Reason + Act)",
    type: "react",
    systemPrompt: "You are an autonomous AI research assistant. Solve queries by cycling through: Thought -> Action -> Observation -> Final Thought.",
    userPrompt: "What is the age difference between the current CEO of Microsoft and Apple?",
    simulatedResponse: `Thought 1: I need to find the birth year of Microsoft's CEO (Satya Nadella) and Apple's CEO (Tim Cook).
Action 1: search_database("Satya Nadella birth date")
Observation 1: Satya Nadella was born on August 19, 1967 (Age 58).

Thought 2: Now I need to find Tim Cook's birth date.
Action 2: search_database("Tim Cook birth date")
Observation 2: Tim Cook was born on November 1, 1960 (Age 65).

Thought 3: Now compute the age difference between Tim Cook and Satya Nadella.
Action 3: calculate(65 - 58)
Observation 3: 7

Final Answer: The age difference between Apple's CEO Tim Cook (65) and Microsoft's CEO Satya Nadella (58) is approximately 7 years.`,
    explanation: "The ReAct framework combines internal step-by-step reasoning with external tool executions, forming the backbone of AI Agents.",
  },
];

export default function InteractivePromptPlayground() {
  const [selectedPreset, setSelectedPreset] = useState<PromptPreset>(PRESETS[0]);
  const [temperature, setTemperature] = useState<number>(0.3);
  const [customUserPrompt, setCustomUserPrompt] = useState<string>(PRESETS[0].userPrompt);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string>(PRESETS[0].simulatedResponse);

  const handleSelectPreset = (preset: PromptPreset) => {
    setSelectedPreset(preset);
    setCustomUserPrompt(preset.userPrompt);
    setOutput(preset.simulatedResponse);
  };

  const handleRunPrompt = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (customUserPrompt === selectedPreset.userPrompt) {
        setOutput(selectedPreset.simulatedResponse);
      } else {
        setOutput(`[LLM Inference Simulation with Temp=${temperature}]\n\nPrompt Analysis:\n- Instruction detected.\n- Formatted response generated adhering to Amol Shukla's prompting rules.\n\nGenerated Response:\nProcessed prompt: "${customUserPrompt.slice(0, 100)}..."\nResult: Successfully executed with deterministic decoding.`);
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="my-8 rounded-2xl bg-ink-1/90 border border-ink-3 p-5 sm:p-7 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.5)]">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ink-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-ice-400 shadow-[0_0_8px_rgba(122,166,208,0.8)]" />
            <h3 className="text-lg font-bold text-ice-50">Interactive Prompting Sandbox</h3>
          </div>
          <p className="text-xs text-ice-300 mt-1">
            Test and observe real-world prompt structures curated by Amol Shukla.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap gap-1.5">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => handleSelectPreset(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedPreset.id === p.id
                  ? "bg-ice-500 text-ice-50 shadow-[0_0_12px_rgba(77,133,182,0.4)]"
                  : "bg-ink-2/80 text-ice-300 hover:text-ice-100 hover:bg-ink-3 border border-ink-3"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Input and Configuration */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-ice-300 mb-1.5">
              System Instruction
            </label>
            <div className="p-3 rounded-xl bg-ink-0/90 border border-ink-3 text-xs font-mono text-ice-200 leading-relaxed">
              {selectedPreset.systemPrompt}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-ice-300">
                User Prompt / Exemplars
              </label>
              <button
                type="button"
                onClick={() => setCustomUserPrompt(selectedPreset.userPrompt)}
                className="text-[11px] text-ice-400 hover:text-ice-200 underline"
              >
                Reset to Preset
              </button>
            </div>
            <textarea
              rows={7}
              value={customUserPrompt}
              onChange={(e) => setCustomUserPrompt(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-ink-0/95 border border-ink-3 focus:border-ice-500 focus:outline-none text-xs font-mono text-ice-100 placeholder-ice-500/50 leading-relaxed resize-y"
              placeholder="Type your prompt here..."
            />
          </div>

          {/* Sliders */}
          <div className="p-4 rounded-xl bg-ink-2/40 border border-ink-3 flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs text-ice-300 mb-1">
                <span>Temperature</span>
                <span className="font-mono text-ice-100 font-semibold">{temperature}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-ice-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-ice-400 mt-0.5">
                <span>Deterministic (0.0)</span>
                <span>Creative (1.0)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRunPrompt}
              disabled={isLoading}
              className="frost-btn frost-btn--primary !py-2.5 !px-5 text-xs flex-none"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-ice-100 border-t-transparent animate-spin" />
                  Generating...
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Run Prompt
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Output & Explanations */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-ice-300 mb-1.5">
              Simulated Model Output
            </label>
            <div className="min-h-[220px] p-4 rounded-xl bg-ink-0/95 border border-ink-3 font-mono text-xs text-emerald-300/90 leading-relaxed whitespace-pre-wrap">
              {output}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-ice-900/20 border border-ice-700/50">
            <div className="flex items-center gap-2 text-xs font-semibold text-ice-200 mb-1">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-ice-400">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>Framework Insight by Amol Shukla</span>
            </div>
            <p className="text-xs text-ice-300 leading-normal">
              {selectedPreset.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
